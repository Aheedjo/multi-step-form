<template>
    <div class="thank-you-cont">
        <div>
            <img src="../assets/icon-thank-you.svg" alt="">
            <h1>Thank you!</h1>
            <p>
                Thanks for confirming your subscription! We hope you have fun 
                using our platform. If you ever need support, please feel free 
                to email us at support@loremgaming.com.
            </p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ThankYou',
    };
</script>

<style scoped>
    .thank-you-cont {
        @apply h-full grid place-items-center pt-10 md:pt-0;
    }

    .thank-you-cont div {
        @apply flex flex-col items-center gap-2;
    }

    .thank-you-cont h1 {
    @apply text-2xl font-medium text-MarineBlue;
    }

    .thank-you-cont p {
        @apply text-center text-sm text-CoolGray;
    }
</style>