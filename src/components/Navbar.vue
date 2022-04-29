<template>
	<main class="navbar ">

		<section class="navbar-brand">
			<a class="navbar-brand mr-5" href="/">
			<img src="/logo_white.png" width="192" alt="耍下"/>
			</a>
			<button @click="showMenu = true" class="active:scale-95 duration-300 md:hidden" type="button">
				<i class="fa fa-bars text-gray-50 text-2xl"></i>
			</button>
		</section>
		    <VueScrollActiveMenu tag="nav" :offset="124">
		<section :class="showMenu ? 'right-0' : '-right-full'" class="navbar-menu">
			<ul class="navbar-list">
			<span @click="showMenu = false" class=" md:hidden"><i class="fa fa-times text-gray-50"></i></span>
				<template v-for="(menu, x) in menus" :key="x">
					<!-- :class="menuActive === menu.name ? 'active' : '333'"  -->
					<li class="scroll-active-item text-gray-50 font-medium" :class="menu.to">
						<a @click="menuActive = menu.name" :href="`#` + menu.to" v-smooth-scroll>{{ menu.name }}</a>
					</li>
				</template>
			</ul>
		</section>
	</VueScrollActiveMenu>
	</main>
</template>

<style scoped>
	.navbar {
		@apply z-20 md:flex md:items-center md:justify-between md:px-6 md:py-8 lg:px-10 w-full bg-gradient-to-r from-sky-500 to-indigo-600 fixed top-0 left-0 right-0 px-5 lg:py-8 py-3;
	}

	.navbar-brand {
		@apply flex items-center justify-between md:gap-3;
	}

	.navbar-menu {
		@apply duration-300 fixed md:relative top-0 bottom-0 bg-blue-600 md:bg-opacity-0 px-5 lg:px-0 pt-12 md:pt-0;
	}

	.navbar-list {
		@apply flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10 lg:text-xl;
	}
	.active {
		@apply border-b-4 border-blue-400
	}
</style>

<script setup>
import VueScrollActiveMenu from './VueScrollActiveMenu.vue'


	import { ref } from 'vue'

	const menuActive = ref('近况')
	const showMenu = ref(true)
	const viewport = ref(window.innerWidth) //Get current width of browser

	// if ( viewport.value >= 768 ) showMenu.value = true //If device tablet or more wider shoow menu
	
	const menus = [
		{
			name: '近况',
			to: 'news'
		},
		{
			name: 'MouseInc',
			to: 'about'
		},
		{
			name: 'SuperRun',
			to: 'event'
		},
		{
			name: 'FAQ',
			to: 'FAQ'
		},
		{
			name: '联系',
			to: 'contact'
		},
		{
			name: '关于',
			to: 'announcement'
		}
	]
	
</script>
