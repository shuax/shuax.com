<template>
    <Navbar />
    <main class="w-full">
    
        <section id="News" class="min-h-screen section scroll-active-section bg-gradient-to-r from-sky-500 to-indigo-600">
            <News />
        </section>
    
        <section id="MouseInc" class="section scroll-active-section bg-gray-100">
            <MouseInc />
        </section>
    
        <section id="Web2Exe" class="section scroll-active-section bg-gray-100">
            <Web2Exe />
        </section>

        <section id="FAQ" class="section scroll-active-section bg-gray-100">
            <FAQ />
        </section>

        <section id="contact" class="section scroll-active-section bg-gray-50">
            <Contact />
        </section>
        
        <section class="section bg-gradient-to-r from-slate-700 to-indigo-900">
            <Footer />
        </section>

        
    </main>
</template>
<script setup>
    import Navbar from '@/components/Navbar.vue'
    import News from '@/components/News.vue'
    import MouseInc from '@/components/MouseInc.vue'
    import Web2Exe from '@/components/Web2Exe.vue'
    import FAQ from '@/components/FAQ.vue'
    import Contact from '@/components/Contact.vue'
    import Footer from '@/components/Footer.vue'
</script>

<style scoped>
    .section {
        @apply w-full px-16;
    }
</style>
