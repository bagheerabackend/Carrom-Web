import { ref, watchEffect, toValue } from 'vue'

export function fetchGame() {
    const url = 'https://api.bagheeracarrom.com/api/web/games'
    const data = ref(null)
    const error = ref(null)

    watchEffect(async () => {
        data.value = null
        error.value = null
        const urlValue = toValue(url)
        try {
            const res = await fetch(urlValue)
            data.value = await res.json()
            console.log("VAluesi  ",data.value)
        } catch (e) {
            error.value = e
        }
    })
    console.log(data)
    return { data, error }
}