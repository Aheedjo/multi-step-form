<template>
    <div class="form-cont">
        <header class="header">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
        </header>
        <div class="summary-cont">
            <div class="wrapper1 mb-5">
                <div class="flexx border-b border-LightGray pb-3">
                    <div>
                        <p class="text-MarineBlue text-lg font-medium">{{ this.selectedPlan.name }} (Monthly)</p>
                        <p class="change" @click="prevTwice" >change</p>
                    </div>
                    <p class="text-MarineBlue">${{ this.selectedPlan.price }}/mo</p>
                </div>
                <div 
                    v-for="addOn in selectedAddOns"
                    :key="addOn.id" 
                    class="flexx py-3"
                >
                    <p class="text-CoolGray">{{ addOn.name }}</p>
                    <p class="text-sm">+${{ addOn.price }}/mo</p>
                </div>
            </div>
            <div class="flexx">
                <p class="text-CoolGray">Total (per month)</p>
                <p class="text-PurplishBlue font-medium text-xl">+${{ this.computeTotalPrice  }}/mo</p>
            </div>
        </div>
        <div class="controls">
            <div>
                <span>
                    <p @click="prev" class="go-back">Go Back</p>
                </span>
                <button @click="next" class="btn">Confirm</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormComponent4',
        data() {
            return {
                plans: [  
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
                addOns: [
                    {
                        id: 1,
                        name: 'Online Service',
                        text: 'Access to multiplayer games',
                        price: '1'
                    },
                    {
                        id: 2,
                        name: 'Larger storage',
                        text: 'Extra 1TB of cloud save',
                        price: '2'
                    },
                    {
                        id: 3,
                        name: 'Customizable profile',
                        text: 'Access to multiplayer games',
                        price: '2'
                    },
                ],
            };
        },
        props: {
            savedData: {
                type: Object,
                required: true
            },
        },
        methods: {
            next() {
                this.$emit('next-step');
            },
            prev() {
                this.$emit('prev-step');
            },
            prevTwice() {
                this.$emit('prev-step');
                this.$emit('prev-step');
            }
        },
        computed: {
            selectedPlan() {
                return this.plans.find(plan => plan.id === this.savedData.plan);
            },
            selectedAddOns() {
                return this.addOns.filter(addOn => this.savedData.addOns.includes(addOn.id));
            },
            computeTotalPrice() {
                return this.selectedAddOns.reduce((total, addon) => total + parseInt(addon.price), 0) + parseInt(this.selectedPlan.price);
            }
        },
    }
</script>

<style scoped>
    .form-cont {
        @apply w-full;
    }

    .header {
        @apply mb-5;
    }

    .header h1 {
        @apply text-2xl md:text-3xl font-bold md:mb-1;
    }

    .header p {
        @apply text-CoolGray;
    }

    .wrapper1 {
        @apply bg-Magnolia p-5 rounded-md;
    }

    .change {
        @apply text-CoolGray underline text-sm cursor-pointer hover:text-MarineBlue transition-all;
    }
    
    .flexx {
        @apply flex items-center justify-between;
    }
</style>