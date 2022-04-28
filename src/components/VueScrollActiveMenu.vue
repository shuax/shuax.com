<template>
	<component :is="tag">
		<slot/>
	</component>
</template>
<script>
	export default {
		name: 'VueScrollActiveMenu',
		props: {
			/**
		     * Changes the VueScrollActiveMenu container component html tag.
		     */
			tag: {
				type: String,
				default: 'nav',
			},

			/**
		     * Section class.
		     */
			sectionClass: {
				type: String,
				default: 'scroll-active-section',
			},

			/**
		     * Menu item class.
		     */
			menuItemClass: {
				type: String,
				default: 'scroll-active-item',
			},

			/**
		     * Class that will be applied to the active item.
		     */
			menuItemActiveClass: {
				type: String,
				default: 'active',
			},

			/**
			* Amount of space between top of screen and the section to 
			* highlight. (Usually your fixed menu's height).
			*/
			offset: {
				type: Number,
				default: 72,
			},
		},
		mounted() {
			window.addEventListener('scroll', this.scroll);
		},

		methods: {
			scroll() {
				const sections = document.querySelectorAll('.' + this.sectionClass);
				const menuElements = document.querySelectorAll('.' + this.menuItemClass);
				let currentSection = '';
				
				sections.forEach(section => {
					let sectionTop = section.offsetTop;
					
					if (pageYOffset >= sectionTop - this.offset) {
						currentSection = section.getAttribute("id");
					}
				});

				menuElements.forEach((li) => {
					if (currentSection) {
						li.classList.remove(this.menuItemActiveClass);
					}
					
					if (li.classList.contains(currentSection)) {
						li.classList.add(this.menuItemActiveClass);
					}
				});
			}
		}
	}
</script>