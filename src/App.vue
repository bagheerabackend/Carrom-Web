<script setup>
import { ref, computed, watch } from 'vue'
import NavBar from './components/links/NavBar.vue'
import Footer from './components/links/Footer.vue'
import Home from './components/home/Home.vue'
import About from './components/about/About.vue'
import Games from './components/games/Games.vue'
import Contact from './components/contact/Contact.vue'
import Privacy from './components/legal/Privacy.vue'
import Refund from './components/legal/Refund.vue'
import Terms from './components/legal/Terms.vue'

const routes = {
  '/': {
    component: Home,
    title: 'Bagheera Carrom',
    description: 'Play Bagheera Carrom online – experience realistic carrom board gameplay, multiplayer matches, tips, and community updates. Your ultimate carrom destination.'
  },
  '/about': {
    component: About,
    title: 'About Us | Bagheera Carrom',
    description: 'Discover the story behind Bagheera Carrom – our mission to bring the classic game of carrom into the digital era with style, competitive spirit, and global accessibility.'
  },
  '/game': {
    component: Games,
    title: 'Our Games | Bagheera Carrom',
    description: 'Experience Bagheera Games – skill-based, immersive board games blending tradition with modern online play. Explore our growing library built for fun, fairness, and community.'
  },
  '/contact': {
    component: Contact,
    title: 'Contact Us | Bagheera Carrom',
    description: 'Have a question or business inquiry? Contact Bagheera Carrom – we’re here to support players, partners, and community members with quick and friendly assistance.'
  },
  '/privacy-policy': {
    component: Privacy,
    title: 'Privacy Policy | Bagheera Carrom',
    description: 'Learn how Bagheera Carrom collects, uses, and protects your personal data. Read our privacy policy to understand your rights and our data practices.'
  },
  '/refund-policy': {
    component: Refund,
    title: 'Refund Policy | Bagheera Carrom',
    description: 'Review Bagheera Carrom’s refund policy – learn about eligibility, returns, and how we handle payment issues. We’re committed to fair support and customer satisfaction.'
  },
  '/terms-and-conditions': {
    component: Terms,
    title: 'Terms and Conditions | Your Site Name',
    description: 'Read our terms and conditions for using our services.'
  },
}

const currentPath = ref(window.location.pathname)

const updateMetadata = (path) => {
  const route = routes[path] || routes['/']
  document.title = route.title
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.name = 'description'
    document.head.appendChild(metaDescription)
  }
  metaDescription.content = route.description
}

watch(currentPath, (newPath) => {
  updateMetadata(newPath)
}, { immediate: true })

window.addEventListener('popstate', () => {
  currentPath.value = window.location.pathname
})

const handleLinkClick = (e) => {
  const link = e.target.closest('a')
  if (link && link.href.startsWith(window.location.origin)) {
    e.preventDefault()
    const path = new URL(link.href).pathname
    window.history.pushState({}, '', path)
    currentPath.value = path
    window.scrollTo(0, 0)
  }
}

setTimeout(() => {
  document.addEventListener('click', handleLinkClick)
}, 100)

const currentView = computed(() => {
  const route = routes[currentPath.value] || routes['/']
  return route.component
})
</script>

<template>

  <body>
    <header>
      <NavBar :currentpath="currentPath" />
    </header>
    <component :is="currentView" />
    <footer>
      <Footer />
    </footer>
  </body>
</template>

<style scoped>
@font-face {
  font-family: sansation;
  font-display: swap;
  src: url('/src/assets/font/Sansation-Regular.ttf');
}

@font-face {
  font-family: sansation-bold;
  font-display: swap;
  src: url('/src/assets/font/Sansation-Bold.ttf');
}

@font-face {
  font-family: rammetto;
  font-display: swap;
  src: url('/src/assets/font/RammettoOne-Regular.ttf');
}

:global(body, html) {
  background: #000;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>