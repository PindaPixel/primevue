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
        <div v-if="activeItem.isGalleria">
            <!-- <div class="flex p-1 align-items-start" style="border-radius: 40px; border: 1px solid var(--root-surface-border, #dfe7ef); background: #fff">
                <div v-for="layoutMenu in layoutMenus" :key="layoutMenu.id" class="flex align-items-start gap-2" style="padding: 3.5px 8px">
                    <span @click="onMenuClick(layoutMenu)" :style="[activeMenu.id === layoutMenu.id ? { 'background-color': '#f5f5f5' } : {}]">
                        {{ layoutMenu.menu }}
                    </span>
                </div>
            </div> -->

            <div class="flex p-1 align-items-start gap-1" style="border-radius: 40px; border: 1px solid var(--root-surface-border, #dfe7ef); background: #fff">
                <div
                    v-for="layoutMenu in layoutMenus"
                    :key="layoutMenu.id"
                    @click="onMenuClick(layoutMenu)"
                    :style="[activeMenu.id === layoutMenu.id ? { 'background-color': '#f5f5f5' } : {}]"
                    class="flex align-items-start gap-2"
                    style="padding: 3.5px 8px"
                >
                    <span>
                        {{ layoutMenu.menu }}
                    </span>
                </div>
            </div>

            <img :src="`/_nuxt/pages/templates/assets/layout-menu/${activeMenu.image}`" />
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
                image: 'static.svg'
            },

            autoplayInterval: null,
            active: {},
            layoutMenus: [
                {
                    id: 1,
                    menu: 'Static',
                    image: 'static.svg'
                },
                {
                    id: 2,
                    menu: 'Slim',
                    image: 'slim.svg'
                },
                {
                    id: 3,
                    menu: 'Reveal',
                    image: 'reveal.svg'
                },
                {
                    id: 4,
                    menu: 'Horizontal',
                    image: 'horizontal.svg'
                },
                {
                    id: 5,
                    menu: 'Overlay',
                    image: 'overlay.svg'
                },
                {
                    id: 6,
                    menu: 'Slim+',
                    image: 'slim+.svg'
                },
                {
                    id: 7,
                    menu: 'Drawer',
                    image: 'drawer.svg'
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
    },
    methods: {
        onClick(item) {
            clearInterval(this.autoplayInterval);
            this.activeItem = item;
        },
        onMenuClick(menu) {
            this.activeMenu = menu;
        }
    }
};
</script>

<style lang="scss" scoped>
li {
    list-style: none;
}
</style>
