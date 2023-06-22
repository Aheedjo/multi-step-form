<template>
    <div class="form-cont">
        <header class="header">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
        </header>
        <form @submit.prevent="validateForm">
            <div class="input-cont">
                <div>
                    <label>Name</label>
                    <p class="message">{{ errors.nameError }}</p>
                </div>
                <input class="input" type="text" placeholder="e.g., Stephen King" v-model="name" @input="validateForm">
            </div>
            <div class="input-cont">
                <div>
                    <label>Email Address</label>
                    <p class="message">{{ errors.emailError }}</p>
                </div>
                <input class="input" type="email" placeholder="e.g., stephenking@lorem.com" v-model="email" @input="validateForm">
            </div>
            <div class="input-cont">
                <div>
                    <label>Phone Number</label>
                    <p class="message">{{ errors.phoneNumberError }}</p>
                </div>
                <input class="input" type="text" placeholder="e.g., +1 234 567 890" v-model="phoneNumber" @input="validateForm">
            </div>
        </form>
        <div class="controls">
            <div>
                <span></span>
                <button @click="next" class="btn">Next Step</button>
            </div>
        </div>
    </div>



</template>

<script>
    export default {
        name: 'FormComponent1',
        props: {
            savedData: {
                type: Object,
                required: true
            },
        },
        data() {
            return {
                name: '',
                email: '',
                phoneNumber: '',
                errors: {
                    nameError: '',
                    emailError: '',
                    phoneNumberError: '',
                }
            }
        },
        methods: {
            validateForm() {
                this.errors.nameError = this.name ? '' : 'This field is required';
                this.errors.emailError = this.validateEmail(this.email) ? '' : 'Please enter a valid email address';
                this.errors.phoneNumberError = this.phoneNumber ? '' : 'This field is required';

                if (this.phoneNumber && isNaN(Number(this.phoneNumber))) {
                    this.errors.phoneNumberError = 'Please enter a valid phone number';
                }

                if (this.errors.nameError !== '' || this.errors.emailError !== '' || this.errors.phoneNumberError !== '') {
                    return null;
                } else {
                    return true;
                }
            },
            validateEmail(email) {
                const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;   
                return regex.test(email);
            },
            next() {
                const validation = this.validateForm();
                if (validation) {
                    const data = { name: this.name, email: this.email, phoneNumber: this.phoneNumber}
                    this.$emit('save-data', data)
                    this.$emit('next-step')
                }
            }
        },
        mounted() {
            this.name = this.savedData.name || null;
            this.email = this.savedData.email || null;
            this.phoneNumber = this.savedData.phoneNumber || null;
        }
    }
</script>

<style scoped>
    .header {
        @apply mb-5;
    }

    .header h1 {
        @apply text-2xl md:text-3xl font-bold md:mb-1;
    }

    .header p {
        @apply text-CoolGray;
    }

    .input-cont {
        @apply mb-3 outline-none;
    }
    .input-cont div {
        @apply flex items-center justify-between mb-2;
    }

    .input-cont div label {
        @apply text-MarineBlue;
    }

    .message {
        @apply text-StrawberryRed text-sm;
    }

    .input {
        @apply border border-solid w-full py-2 px-3 rounded-md
    }
</style>