<template>
    <div class="flex flex-wrap-reverse w-full h-full p-5 justify-content-center align-items-center border-round-2xl bg-white" style="gap: 40px; max-width: 1062px; min-width: 351px">
        <ul class="flex flex-column align-items-center pl-0 m-0 h-full gap-2 flex-1">
            <li
                v-for="item in items"
                :key="item.id"
                class="flex w-full p-3 align-items-start gap-4 border-round-xl cursor-pointer"
                :style="[activeItem.id === item.id ? { 'background-color': '#f5f5f5' } : {}]"
                style="min-width: 309px"
                @click="onClick(item)"
            >
                <img :src="`/_nuxt/pages/templates/assets/numbers/${activeItem.id === item.id ? item.id + '-fill' : item.id}.svg`" :alt="item.id" />
                <div class="flex flex-column align-items-start gap-2 flex-1">
                    <div class="text-900 font-semibold" style="font-size: 17.5px; line-height: 21px">{{ item.title }}</div>
                    <div class="font-normal" style="font-size: 14px; line-height: 21px">{{ item.description }}</div>
                </div>
            </li>
        </ul>
        <div v-if="activeItem.isGalleria" class="w-full h-full" style="max-height: 500px; max-width: 470px">
            <div class="flex p-1 align-items-start justify-content-around mb-4 gap-1 w-full" style="border-radius: 40px; border: 1px solid var(--root-surface-border, #dfe7ef); background: #fff">
                <div
                    v-for="layoutMenu in layoutMenus"
                    :key="layoutMenu.id"
                    @click="onMenuClick(layoutMenu)"
                    :style="[activeMenu.id === layoutMenu.id ? { 'background-color': '#f5f5f5' } : {}]"
                    class="flex align-items-start p-1"
                    style="border-radius: 36px; max-width: 100px"
                >
                    <span :style="[activeMenu.id === layoutMenu.id ? { color: '#212121', 'text-size': '12px' } : {}]" class="flex justify-content-start align-items-center text-xs md:text-sm">
                        {{ layoutMenu.menu }}
                    </span>
                </div>
            </div>
            <img style="display: block; width: 100%" class="p-4" :src="`/_nuxt/pages/templates/assets/layout-menu/${activeMenu.image}`" />
        </div>
        <div v-else>
            <img :src="`/_nuxt/pages/templates/assets/features/${activeItem.image}`" style="display: block; width: 100%" :alt="activeItem.id" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => []
        },
        galleriaStyle: {
            type: String,
            default: `
                  display: flex;
                  max-width:480px;
                  height: 100%;
                  padding: 62px 36px 63px 37px;
                  justify-content: center;
                  align-items: center;
                  align-self: stretch;
                  border-radius: 12px;
                  background:  #EFF3F8;
                  `
        },
        dynamicStyle: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            activeItem: this.items[0],
            activeMenu: {
                id: 1,
                menu: 'Static',
                image: 'static.png'
            },

            autoplayInterval: null,
            autoPlayLayout: null,
            active: {},
            layoutMenus: [
                {
                    id: 1,
                    menu: 'Static',
                    image: 'static.png'
                },
                {
                    id: 2,
                    menu: 'Slim',
                    image: 'slim.png'
                },
                {
                    id: 3,
                    menu: 'Reveal',
                    image: 'reveal.png'
                },
                {
                    id: 4,
                    menu: 'Horizontal',
                    image: 'horizontal.png'
                },
                {
                    id: 5,
                    menu: 'Overlay',
                    image: 'overlay.png'
                },
                {
                    id: 6,
                    menu: 'Slim+',
                    image: 'slim+.png'
                },
                {
                    id: 7,
                    menu: 'Drawer',
                    image: 'drawer.png'
                }
            ]
        };
    },
    mounted() {
        this.autoplayInterval = setInterval(() => {
            const currentIndex = this.items.findIndex((item) => item.id === this.activeItem.id);
            const nextIndex = (currentIndex + 1) % this.items.length;

            this.activeItem = this.items[nextIndex];
        }, 2000);
    },
    beforeUnmount() {
        clearInterval(this.autoplayInterval);
        clearInterval(this.autoPlayLayout);
    },
    methods: {
        onClick(item) {
            clearInterval(this.autoplayInterval);
            this.activeItem = item;
            this.startAnimate();
        },
        onMenuClick(menu) {
            clearInterval(this.autoPlayLayout);
            this.activeMenu = menu;
        },
        startAnimate() {
            if (this.activeItem.isGalleria === true) {
                this.autoPlayLayout = setInterval(() => {
                    const currentIndex = this.layoutMenus.findIndex((item) => item.id === this.activeMenu.id);
                    const nextIndex = (currentIndex + 1) % this.layoutMenus.length;

                    this.activeMenu = this.layoutMenus[nextIndex];
                }, 2000);
            } else {
                clearInterval(this.autoPlayLayout);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
li {
    list-style: none;
}
</style>
