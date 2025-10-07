<script>
import { watchEffect } from 'vue';
import { contactPost } from '../../../services/contactService';

export default {
    data() {
        return {
            name: "",
            email: "",
            phone: "",
            message: "",
            errors: {
                name: "",
                email: "",
                phone: "",
                message: ""
            }
        }
    },
    methods: {
        validateForm() {
            let isValid = true;
            this.errors = {
                name: "",
                email: "",
                phone: "",
                message: ""
            };

            if (!this.name.trim()) {
                this.errors.name = "Name is required";
                isValid = false;
            } else if (this.name.trim().length < 2) {
                this.errors.name = "Name must be at least 2 characters";
                isValid = false;
            }

            if (!this.email.trim()) {
                this.errors.email = "Email is required";
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
                this.errors.email = "Please enter a valid email address";
                isValid = false;
            }

            if (!this.phone.trim()) {
                this.errors.phone = "Phone number is required";
                isValid = false;
            } else if (!/^\+?[\d\s\-()]{10,}$/.test(this.phone)) {
                this.errors.phone = "Please enter a valid phone number";
                isValid = false;
            }

            if (!this.message.trim()) {
                this.errors.message = "Message is required";
                isValid = false;
            } else if (this.message.trim().length < 10) {
                this.errors.message = "Message must be at least 10 characters";
                isValid = false;
            }

            return isValid;
        },
        async sendMessage() {
            if (this.validateForm()) {
                const formData = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    message: this.message
                }
                const { data, error, loading } = contactPost(formData)
                await new Promise(resolve => {
                    const unwatch = watchEffect(() => {
                        if (!loading.value) {
                            unwatch()
                            resolve()
                        }
                    })
                })
                if (data.value && !error.value) {
                    this.name = "";
                    this.email = "";
                    this.phone = "";
                    this.message = "";
                    alert('Message sent successfully!')
                } else {
                    alert('Failed to send message. Please try again.')
                }
            }
        }
    }
}
</script>

<template>
    <div class="contact-footer">
        <div class="contact-screen">
            <h2>SEND US A MESSAGE</h2>
            <div class="form-group">
                <input v-model="name" placeholder="Enter Your Full Name" :class="{ 'error': errors.name }" />
                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
            </div>
            <div class="form-group">
                <input v-model="email" placeholder="Enter Your Email Address" :class="{ 'error': errors.email }" />
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>
            <div class="form-group">
                <input v-model="phone" placeholder="Enter Your Phone Number" :class="{ 'error': errors.phone }" />
                <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
            </div>
            <div class="form-group">
                <textarea v-model="message" placeholder="Enter Your Message"
                    :class="{ 'error': errors.message }"></textarea>
                <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>
            <button class="submit-btn" @click="sendMessage()" :disabled="loading">{{ loading ? 'Sending...' : 'Submit'
                }}</button>
        </div>
    </div>
</template>

<style>
.contact-footer {
    padding-inline: 2em;
    padding-block: 4em;
    background-image: url('../../assets/images/pantherImg.svg');
    color: #adb5bd;
    font-family: sansation;
    background-size: cover;
    background-position: 20%;
    display: flex;
    flex-direction: column;
}

.contact-screen {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background-color: rgba(240, 235, 235, 0.2);
    border: 2px solid #fcc440;
    border-radius: 16px;
    padding: 2em 2em;
    display: flex;
    flex-direction: column;
    row-gap: 1.5em;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.contact-screen h2 {
    text-align: center;
    color: #fcc440;
}

input,
textarea {
    padding: 1em 1em;
    color: #adb5bd;
    background: transparent;
    border: 1px solid #adb5bd;
    border-radius: 3em;
    font-size: 12pt;
    width: 90%;
    text-align: center;
    font-family: sansation;
}

input:focus,
textarea:focus {
    color: #fcc440;
    border: 1px solid #fcc440;
}

input::placeholder,
textarea::placeholder {
    color: #adb5bd;
}

textarea {
    height: 5em;
}

input.error,
textarea.error {
    border-color: #df4353;
}

.error-message {
    margin-top: 4px;
    text-align: center;
    display: block;
    color: #630d15;
    font-size: 12px;
}

.submit-btn {
    background: #fcc440;
    border: 0;
    padding: 1.5em 3em;
    border-radius: 3em;
    font-family: sansation;
    font-size: 10pt;
}

@media (min-width: 768px) and (max-width: 1023px) {}

/* Lap */
@media (min-width: 1024px) and (max-width: 1919px) {
    .contact-footer {
        padding-inline: 10em;
        padding-block: 4em;
    }

    .contact-screen {
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        padding: 2em 10em;
        gap: 2em;
    }

    input,
    textarea {
        padding: 1em 2em;
        font-size: 15pt;
    }

    textarea {
        height: 10em;
    }

    .form-group {
        width: 100%;
    }

    .submit-btn {
        padding: 1.5em 5em;
        font-size: 12pt;
    }
}

/* H-Lap */
@media (min-width: 1920px) {
    .contact-footer {
        padding-inline: 30em;
        padding-block: 5em;
    }

    .contact-screen {
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        padding: 2em 10em;
        gap: 2em;
    }

    input,
    textarea {
        padding: 1em 2em;
        font-size: 15pt;
    }

    textarea {
        height: 10em;
    }

    .form-group {
        width: 100%;
    }

    .submit-btn {
        padding: 1.5em 5em;
        font-size: 12pt;
    }
}
</style>