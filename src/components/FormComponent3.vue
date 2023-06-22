<template>
    <div class="form-cont">
        <header class="header">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming.</p>
        </header>
        <div class="options-cont">
            <div 
                class="option" 
                :key="option.id" 
                v-for="option in options"
                :class="{ 'active': isSelected(option.id) }"
                @click="select(option.id)"
            >
                <div>
                    <div class="checkbox">
                        <input type="checkbox" :checked="isSelected(option.id)">
                        <label :for="'checkbox-' + option.id" class="checkbox-label"></label>
                    </div>
                    <div>
                        <p class="name">{{ option.name }}</p>
                        <p class="text">{{ option.text }}</p>
                    </div>
                </div>
                <p class="price">${{ option.price }}/mo</p>
            </div>
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
    export default {
        name: 'FormComponent3',
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
                selectedOptionIDs: []
            }
        },
        methods: {
            isSelected(id) {
                return this.selectedOptionIDs.includes(id);
            },
            select(id) {
                if (this.isSelected(id)) {
                    this.selectedOptionIDs = this.selectedOptionIDs.filter(
                        optionID => optionID !== id 
                    );
                } else {
                    this.selectedOptionIDs.push(id)
                }
            },
            next() {
                const data = {
                    addOns: this.selectedOptionIDs
                }
                this.$emit('save-data', data);
                this.$emit('next-step');
            },
            prev() {
                this.$emit('prev-step');
            }
        },
        mounted() {
            this.selectedOptionIDs = this.savedData.addOns || [];
        }
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

    .options-cont {
        @apply grid grid-rows-3 gap-4 w-full;
    }
    .option {
        @apply h-full border-LightGray border border-solid rounded-md px-3 py-2 md:p-4 w-full hover:border-PurplishBlue cursor-pointer;
        @apply flex justify-between items-center;
    }

    .option >div {
        @apply flex items-center gap-4;
    }

    .active {
        @apply bg-Alabaster border-PurplishBlue;
    }

    .name {
        @apply font-medium text-MarineBlue;
    }

    .price {
        @apply text-CoolGray text-sm;
    }

    .text {
        @apply text-CoolGray text-sm;
    }

    .checkbox input[type="checkbox"] {
        @apply hidden;
    }

    .checkbox-label {
        @apply w-4 h-4 pl-1 rounded-sm bg-PastelBlue cursor-pointer;
    }
    
    
    label:before {
        content: "\2713";
        @apply w-full h-full inline-block text-sm;
    }

    .checkbox input[type="checkbox"]:checked + .checkbox-label {
        @apply bg-PurplishBlue text-white;
    }

    .toggle-cont {
        @apply w-full bg-Alabaster flex items-center justify-center gap-5 p-2 mt-10 rounded-md;
    }

    .toggle-cont p {
        @apply text-CoolGray;
    }
</style>