<template>
    <div class="stepItem-cont">
        <p :class="{'active number': variable === number, 'number': variable !== number}">{{ number }}</p>
        <div>
            <p class="top">Step {{ number }}</p>
            <p class="bottom">{{ text }}</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'StepItem',
        props: {
            number: Number,
            text: String,
            variable: Number
        }
    }
</script>

<style scoped>
    .stepItem-cont {
        @apply flex items-center gap-3;
    }

    .number {
        @apply border border-solid rounded-full border-Magnolia w-9 h-9 flex items-center justify-center; 
    }

    .top {
        @apply uppercase text-LightGray text-sm hidden md:block;
    }

    .bottom {
        @apply uppercase text-sm font-medium text-Alabaster hidden md:block;
    }

    .active {
        @apply bg-Magnolia text-MarineBlue; 
    }
</style>