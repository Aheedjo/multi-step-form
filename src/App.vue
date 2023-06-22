<template>
    <div class="main-container">
        <SideBar :variable="variable" />
        <div class="content">
            <FormComponent1 
                :variable="variable" 
                :savedData="savedData" 
                @next-step="nextStep" 
                @save-data="saveData" 
                v-if="variable === 1" 
            />
            <FormComponent2 
                :variable="variable" 
                :savedData="savedData" 
                @next-step="nextStep" 
                @prev-step="prevStep" 
                @save-data="saveData" 
                v-if="variable === 2" 
            />
            <FormComponent3 
                :variable="variable" 
                :savedData="savedData" 
                @next-step="nextStep" 
                @prev-step="prevStep" 
                @save-data="saveData" 
                v-if="variable === 3" 
            />
            <FormComponent4 
                :variable="variable" 
                :savedData="savedData" 
                @next-step="nextStep" 
                @prev-step="prevStep" 
                v-if="variable === 4" 
            />
            <ThankYou v-if="variable === 5" />
        </div>
    </div>
</template>

<script>
import SideBar from './components/SideBar'
import FormComponent1 from './components/FormComponent1'
import FormComponent2 from './components/FormComponent2'
import FormComponent3 from './components/FormComponent3'
import FormComponent4 from './components/FormComponent4'
import ThankYou from './components/ThankYou'

export default {
  name: 'App',
  components: {
    SideBar, 
    FormComponent1, 
    FormComponent2,
    FormComponent3,
    FormComponent4,
    ThankYou
  },
  data() {
    return {
        variable: 1,
        savedData: {},
    }
  },
  methods: {
    nextStep() {
        this.variable += 1;
        console.log(this.savedData);
    },
    prevStep() {
        this.variable -= 1;
    },
    saveData(data) {
        this.savedData = { ...this.savedData, ...data }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply h-screen bg-Magnolia md:pt-14;
}

.main-container {
    @apply text-base font-[Ubuntu] flex flex-col md:flex-row items-start gap-10 lg:gap-16;
    @apply md:bg-white md:mx-auto md:w-full md:md:w-[90%] md:max-w-4xl md:rounded-2xl md:p-4 md:pr-10 lg:pr-14 md:h-[550px];
    @screen md {
        box-shadow: 0px 0px 5px 3px rgb(246, 246, 246)
    }
}

.content {
    @apply md:w-full h-full bg-white -mt-28 md:mt-0 w-[90%] min-h-[400px] mx-auto p-6 md:pt-10 rounded-lg shadow-md md:shadow-none;
}

.controls{
    @apply bg-white w-full absolute md:static bottom-0 left-0 py-5 md:shadow-none;
    @screen md {
        box-shadow: none;
    }
    box-shadow: 0px 0px 5px 3px rgb(246, 246, 246);
}

.controls div{
    @apply w-[90%] md:w-full md:mt-10 mx-auto flex items-center justify-between;
}

.btn {
    @apply bg-MarineBlue text-white text-sm py-2 px-3 rounded-md hover:bg-PurplishBlue transition-all;
}

.go-back {
    @apply text-CoolGray cursor-pointer hover:text-MarineBlue text-sm;
}
</style>
