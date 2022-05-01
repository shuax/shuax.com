<template>
    <Navbar />
    <main class="w-full">
    
        <section id="news" class="min-h-screen section scroll-active-section bg-gradient-to-r from-sky-500 to-indigo-600">
            <Headline />
        </section>
    
        <section id="MouseInc" class="section scroll-active-section bg-gray-100">
            <MouseInc />
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
    import Headline from '@/components/Headline.vue'
    import MouseInc from '@/components/MouseInc.vue'
    import FAQ from '@/components/FAQ.vue'
    import Contact from '@/components/Contact.vue'
    import Footer from '@/components/Footer.vue'
</script>

<style scoped>
    .section {
        @apply w-full px-16;
    }
</style>
