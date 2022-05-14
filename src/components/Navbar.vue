<template>
    <main class="navbar">
    <section class="navbar-brand">
        <a class="navbar-brand mr-5" href="/">
        <img src="/logo_white.png" width="192" alt="耍下"/>
        </a>
    </section>
    <VueScrollActiveMenu tag="nav" :offset="124">
        <section class="navbar-menu right-0">
            <ul class="navbar-list">
                <li class="scroll-active-item text-gray-50 font-medium news active">
                    <a href="#News" v-smooth-scroll>近况</a>
                </li>
                <li class="scroll-active-item text-gray-50 font-medium MouseInc">
                    <a href="#MouseInc" v-smooth-scroll>MouseInc</a>
                </li>
                <li class="scroll-active-item text-gray-50 font-medium Web2Exe">
                    <a href="#Web2Exe" v-smooth-scroll>Web2Exe</a>
                </li>
                <li class="scroll-active-item text-gray-50 font-medium FAQ">
                    <a href="#FAQ" v-smooth-scroll>FAQ</a>
                </li>
                <li class="scroll-active-item text-gray-50 font-medium contact">
                    <a href="#contact" v-smooth-scroll>联系</a>
                </li>
            </ul>
        </section>
    </VueScrollActiveMenu>
    </main>
</template>

<style scoped>
    .navbar {
        @apply z-20 flex items-center justify-between px-10 py-8 w-full bg-gradient-to-r from-sky-500 to-indigo-600 fixed top-0 left-0 right-0 px-5;
        /*@apply absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white lg:w-auto top-full lg:static lg:bg-transparent shadow lg:shadow-none;*/
    }

    .navbar-brand {
        @apply flex items-center justify-between gap-3;
    }

    .navbar-menu {
        @apply duration-300 fixed relative top-0 bottom-0 bg-blue-600 bg-opacity-0 px-5 hidden md:block;
    }

    .navbar-list {
        @apply flex gap-6 lg:gap-10 lg:text-xl;
    }
    .active {
        @apply border-b-4 border-blue-400
    }
</style>

<script setup>
import VueScrollActiveMenu from './VueScrollActiveMenu.vue'
</script>
