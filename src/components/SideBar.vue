<template>
    <div class="sideBar-cont">
        <StepItem :variable="variable" text="your info" :number=1 />
        <StepItem :variable="variable" text="select plan" :number=2 />
        <StepItem :variable="variable" text="add-ons" :number=3 />
        <StepItem :variable="variable" text="summary" :number=4 />
    </div>
</template>

<script>
    import StepItem from '../components/StepItem'

    export default {
        name: 'SideBar',
        components: {
            StepItem
        },
        props: ['variable']
    }
</script>

<style scoped>
    .sideBar-cont {
        @apply bg-PurplishBlue md:rounded-xl md:px-7 pt-10 pb-28 text-white flex md:flex-col justify-center md:justify-normal md:gap-7 h-full w-full md:w-[350px] lg:w-[400px];
        @apply bg-no-repeat bg-cover;
        background-image: url(../assets/bg-sidebar-mobile.svg);
        @screen md {
            background-image: url(../assets/bg-sidebar-desktop.svg);
        }
    }
</style>