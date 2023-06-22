<template>
    <div class="form-cont">
        <header class="header">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
        </header>
        <div class="options-cont">
            <div 
                :class="{ 'active': option.id === selectedPlanID }"
                class="option" 
                :key="option.id" 
                v-for="option in options"
                @click="select(option.id)"
            >
                <div class="icon">
                    <img :src="option.icon" alt="{{ option.name }}">
                </div>
                <div>
                    <p class="name">{{ option.name }}</p>
                    <p class="price">${{ option.price }}/mo</p>
                </div>
            </div>
        </div>
        <div class="toggle-cont">
                <p>Monthly</p>
                <switches v-model="enabled"></switches>
                <p>Yearly</p>
        </div>
        <div class="controls">
            <div>
                <span>
                    <p @click="prev" class="go-back">Go Back</p>
                </span>
                <button @click="next" class="btn">Next Step</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Switches from 'vue-switches';

    export default {
        name: 'FormComponent2',
        components: {
            Switches
        },
        props: {
            savedData: {
                type: Object,
                required: true
            },
        },
        data() {
            return {
                options: [  
                    {
                        id: 1,
                        icon: require('../assets/icon-arcade.svg'),
                        name: 'Arcade',
                        price: '9'
                    },
                    {
                        id: 2,
                        icon: require('../assets/icon-advanced.svg'),
                        name: 'Advanced',
                        price: '12'
                    },
                    {
                        id: 3,
                        icon: require('../assets/icon-pro.svg'),
                        name: 'Pro',
                        price: '15'
                    },
                ],
                enabled: false,
                selectedPlanID: null
            };
        },
        methods: {
            select(id) {
                this.selectedPlanID = id;
            },
            next() {
                if(!this.selectedPlanID) return;
                const data = {
                    plan: this.selectedPlanID
                }
                this.$emit('save-data', data);
                this.$emit('next-step');
            },
            prev() {
                this.$emit('prev-step');
            }
        },
        mounted() {
            this.selectedPlanID = this.savedData.plan || null;
        }
    };
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

    .options-cont {
        @apply grid md:grid-cols-3 gap-4 md:h-40 w-full;
    }
    .option {
        @apply h-full border-LightGray border border-solid rounded-md p-4 w-full md:w-36 hover:border-PurplishBlue cursor-pointer;
        @apply flex md:flex-col md:justify-between gap-5 transition-all;
    }

    .active {
        @apply bg-Alabaster border-PurplishBlue;
    }

    .name {
        @apply font-medium text-MarineBlue;
    }

    .price {
        @apply text-CoolGray;
    }

    .toggle-cont {
        @apply w-full bg-Alabaster flex items-center justify-center gap-5 p-2 mt-5 md:mt-10 rounded-md;
    }

    .toggle-cont p {
        @apply text-CoolGray;
    }
</style>