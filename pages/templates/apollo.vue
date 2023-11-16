<template>
    <div class="flex flex-column justify-content-center">
        <div
            class="flex flex-wrap md:flex-nowrap gap-8 md:gap-4 pt-8 px-2 md:px-5 overflow-hidden isMobile"
            style="background-image: url('/_nuxt/pages/templates/assets/Hero.jpg'); background-repeat: no-repeat; background-size: cover; min-height: 500px"
        >
            <div class="flex flex-1 justify-content-center align-items-center">
                <div
                    class="flex flex-column justify-content-center align-items-center p-2 md:p-3 border-round-3xl"
                    style="
                        border: 1px solid rgba(255, 255, 255, 0.24);
                        background: linear-gradient(180deg, rgba(170, 140, 255, 0) 0%, rgba(170, 140, 255, 0.8) 100%), rgba(255, 255, 255, 0.1);
                        box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset, 0px 48px 80px 0px rgba(0, 0, 0, 0.08), 0px -5px 13px -2px rgba(255, 255, 255, 0.55) inset;
                        backdrop-filter: blur(2px);
                        max-width: 464px;
                    "
                >
                    <div class="flex flex-column justify-content-center align-items-start p-3 gap-4 md:gap-5">
                        <img src="../templates/assets/Logo.png" alt="1" class="h-full" style="width: 235px" />
                        <span class="text-white">Vue template with mode options, menu layouts, sample apps, pre-made pages, and 24 PrimeVue themes.</span>

                        <div class="flex flex-wrap md:flex-nowrap w-full align-items-center gap-3">
                            <Button label="Live Demo" class="w-full surface-900 border-900 border-round-3xl" style="padding: 10.5px 17.5px"></Button>
                            <Button label="Buy Now" severity="info" class="w-full border-round-3xl" style="padding: 10.5px 17.5px"></Button>
                        </div>

                        <div class="flex md:justify-content-start justify-content-center w-full align-items-center gap-3">
                            <div class="flex justify-content-center align-items-center gap-2">
                                <i class="pi pi-github text-white" />
                                <a target="_blank" href="https://github.com/orgs/primefaces/discussions" class="text-white underline">Get Support</a>
                            </div>
                            <div class="flex justify-content-center align-items-center gap-2">
                                <i class="pi pi-book text-white" />
                                <a target="_blank" href="https://apollo.primevue.org/documentation" class="text-white underline">Read Docs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex align-items-end">
                <img src="../templates/assets/Group_4.png" alt="1" class="w-full h-full" style="min-width: 750px; min-height: 460px" />
            </div>
        </div>
    </div>
    <div class="flex flex-column align-items-center gap-6 py-4 py-8">
        <div class="flex flex-column align-items-center gap-3" style="max-width: 700px">
            <div class="flex flex-column w-full">
                <span class="text-900 text-2xl text-center md:text-6xl font-semibold" style="max-width: 700px">Integration with </span>
                <span class="text-900 text-2xl text-center md:text-6xl font-semibold" style="max-width: 700px"> Existing Vite Applications </span>
            </div>
            <span class="text-base text-center font-normal line-height-2"
                >Only the folders that are related to the layout needs to move in to your project. We‘ve already created a short tutorial with details for Sakai Vue. The both templates have the same implementation.</span
            >
        </div>
        <div class="border-round-2xl" style="max-width: 1062px; max-height: 596x; background-color: #e0e0f7; backdrop-filter: blur(2px)">
            <div class="relative">
                <img src="../templates/assets/Dashboard.png" class="flex align-items-start w-full h-full" style="object-fit: cover; filter: blur(2px)" alt="" />
                <div class="flex" style="max-width: 100px">
                    <img src="../templates/assets/PLay.png" @click="displayModal = true" class="absolute top-50 right-50 cursor-pointer -mr-8 -mt-8 h-10rem" alt="" />
                </div>
            </div>
        </div>
    </div>
    <Dialog v-model:visible="displayModal" header="Video Content" :modal="true" :style="{ width: '80vw', height: '45vw' }" :draggable="false" :resizable="false" :pt="{ content: { style: 'flex-grow:1; overflow:hidden' } }">
        <iframe
            :style="{ width: '100%', height: '100%' }"
            src="https://www.youtube.com/embed/Y07edRJd5QM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
    </Dialog>
    <div class="flex flex-column align-items-center justify-content-center gap-6 py-8">
        <p class="align-items-center text-center font-semibold line-height-3 align-items-stretch text-2xl md:text-6xl text-900 mb-0" style="max-width: 718px">Features that the Apollo template gives you</p>
        <FeatureMenu :items="items" />
        <div class="flex w-full align-items-center gap-4" style="max-width: 1062px">
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>

            <img src="../templates/assets/Apollo_logo.png" alt="" class="flex justify-content-center align-items-center flex-grow-0" style="padding: 10px 11.992px 14px 12px" />
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>
        </div>
    </div>

    <div class="flex w-full justify-content-center pb-8">
        <div class="grid" style="max-width: 1062px">
            <div class="col-12 lg:col-4">
                <div class="flex h-full justify-content-center">
                    <div class="shadow-2 p-5 h-full flex flex-column surface-card border-round-md">
                        <div class="flex flex-column align-items-center justify-content-center gap-3 w-full">
                            <img src="../templates/assets/Features/Use_applications.jpg" alt="" class="w-full border-round-sm" style="max-width: 298px; max-height: 242px; background-color: #eff3f8" />
                            <div class="flex flex-column w-full align-items-start gap-2" style="max-width: 298px">
                                <span class="align-self-stretch text-900 text-lg font-semibold line-height-3">Ready to Use Applications</span>
                                <span class="align-self-stretch text-sm font-normal line-height-3">Mail, File System, Tasks, Calendar, Blog and Chat are the sample applications to get started with ease.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-4">
                <div class="flex h-full justify-content-center">
                    <div class="shadow-2 p-5 h-full flex flex-column surface-card border-round-md">
                        <div class="flex flex-column align-items-center justify-content-center gap-3 w-full">
                            <img src="../templates/assets/Features/E-commerce.jpg" alt="" class="w-full border-round-sm" style="max-width: 298px; max-height: 242px; background-color: #eff3f8" />
                            <div class="flex flex-column w-full align-items-start gap-2" style="max-width: 298px">
                                <span class="align-self-stretch text-900 text-lg font-semibold line-height-3">E-Commerce Pages</span>
                                <span class="align-self-stretch text-sm font-normal line-height-3">Apollo offers E-commerce pages to kickstart your e-commerce project powered by PrimeBlocks.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-4">
                <div class="flex h-full justify-content-center">
                    <div class="shadow-2 p-5 flex flex-column surface-card border-round-md">
                        <div class="flex flex-column align-items-center justify-content-center gap-3 w-full">
                            <img src="../templates/assets/Features/Pages.jpg" alt="" class="w-full border-round-sm" style="max-width: 298px; max-height: 242px; background-color: #eff3f8" />
                            <div class="flex flex-column w-full align-items-start gap-2" style="max-width: 298px">
                                <span class="align-self-stretch text-900 text-lg font-semibold line-height-3">Ready to Use Pages</span>
                                <span class="align-self-stretch text-sm font-normal line-height-3">Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-column justify-content-center align-items-center gap-8 w-full" style="max-width: 1440px">
        <div class="flex w-full align-items-center gap-4" style="max-width: 1062px">
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>

            <img src="../templates/assets/Apollo_logo.png" alt="" class="flex justify-content-center align-items-center flex-grow-0" style="padding: 10px 11.992px 14px 12px" />
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>
        </div>
        <div class="flex pt-8" style="background: url('/_nuxt/pages/templates/assets/Background.png') no-repeat center; min-height: 500px">
            <div class="flex surface-card flex-column p-5 w-full align-items-start gap-4 border-round-2xl bg-white" style="max-width: 788px; box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.08)">
                <div class="flex flex-column align-items-center border-round-lg w-full h-full" style="max-height: 221px; border: 1px solid var(--root-surface-border, #dfe7ef)">
                    <div class="flex w-full h-full align-items-center justify-content-start gap-7 flex-grow-0 align-self-strecth" style="max-height: 56px; padding: 4px 24px; border-radius: 12px 12px 0px 0px; background: var(--surface-0, #fff)">
                        <img src="../templates/assets/Buttons.png" alt="" />
                    </div>
                    <div class="flex w-full justify-content-between align-items-center px-3 border-round-bottom flex-grow-0" style="height: 165px; background-color: #212121">
                        <div class="flex flex-column h-full justify-content-center gap-4">
                            <div class="text-white text-sm font-normal line-height-1">> npm install</div>
                            <div class="text-white text-sm font-normal line-height-1">> ng new my-apollo-app</div>
                            <div class="text-white text-sm font-normal line-height-1">> cd my-apollo-app</div>
                            <div class="text-white text-sm font-normal line-height-1">> ng serve</div>
                        </div>
                        <div class="flex pt-8 sm:pt-0 sm:px-4 flex-gorw-0 align-items-center justify-content-end">
                            <img src="../templates/assets/Vue_logo.svg" class="w-5rem h-5rem sm:w-full sm:h-full" alt="" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-column align-items-start gap-2 align-self-stretch">
                    <span class="align-self-stretch text-2xl font-bold">Vue.js App with No Configuration</span>
                    <span class="align-self-stretch text-lg font-normal line-height-3 text-600"
                        >Apollo is powered by Vue CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support
                    </span>
                </div>
            </div>
        </div>

        <div class="flex w-full align-items-center gap-4" style="max-width: 1062px">
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>

            <img src="../templates/assets/Apollo_logo.png" alt="" class="flex justify-content-center align-items-center flex-grow-0" style="padding: 10px 11.992px 14px 12px" />
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>
        </div>
    </div>

    <div class="flex flex-column align-items-center justify-content-center gap-8 pt-8">
        <FeatureMenu :items="items2" />

        <div class="flex w-full align-items-center gap-4" style="max-width: 1062px">
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>

            <img src="../templates/assets/Apollo_logo.png" alt="" class="flex justify-content-center align-items-center flex-grow-0" style="padding: 10px 11.992px 14px 12px" />
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>
        </div>
    </div>
    <div class="flex justify-content-center py-8">
        <div class="grid w-full" style="max-width: 1062px">
            <div class="flex flex-column col-12 md:col-6 justify-content-start align-items-center md:align-items-end">
                <div class="card w-full" style="max-width: 410px">
                    <div class="flex flex-column align-items-start gap-3">
                        <img src="./assets/features-images/Responsive.jpg" class="w-full" alt="" />
                        <div class="flex flex-column align-items-start gap-2">
                            <span class="font-semibold text-lg line-height-2 align-self-stretch text-900">Fully Responsive</span>
                            <div class="text-sm font-normal line-height-2">Apollo is crafted to provide optimal viewing and interaction experience for a wide range of devices.</div>
                        </div>
                    </div>
                </div>
                <div class="card w-full" style="max-width: 410px">
                    <div class="flex flex-column align-items-start gap-3">
                        <img src="./assets/features-images/Support.jpg" class="w-full" alt="" />
                        <div class="flex flex-column align-items-start gap-2">
                            <span class="font-semibold text-lg line-height-2 align-self-stretch text-900">Lifetime Support</span>
                            <div class="text-sm font-normal line-height-2">Apollo has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.</div>
                        </div>
                    </div>
                </div>
                <div class="card w-full" style="max-width: 410px">
                    <div class="flex flex-column align-items-start gap-3">
                        <img src="./assets/features-images/Eslint.jpg" class="w-full" alt="" />
                        <div class="flex flex-column align-items-start gap-2">
                            <span class="font-semibold text-lg line-height-2 align-self-stretch text-900">Top Notch Quality</span>
                            <div class="text-sm font-normal line-height-2">Superior standards with 100% compatibility for strict mode and linting tools.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-column col-12 md:col-6 md:mt-8 justify-content-start align-items-center md:align-items-start">
                <div class="card w-full" style="max-width: 410px">
                    <div class="flex flex-column align-items-start gap-3">
                        <img src="./assets/features-images/Browser.jpg" class="w-full" alt="" />
                        <div class="flex flex-column align-items-start gap-2">
                            <span class="font-semibold text-lg line-height-2 align-self-stretch text-900">Cross Browser Compatible</span>
                            <div class="text-sm font-normal line-height-2">First class support for Firefox, Safari, Chrome and Edge.</div>
                        </div>
                    </div>
                </div>
                <div class="card w-full" style="max-width: 410px">
                    <div class="flex flex-column align-items-start gap-3">
                        <img src="./assets/features-images/Design.jpg" class="w-full" alt="" />
                        <div class="flex flex-column align-items-start gap-2">
                            <span class="font-semibold text-lg line-height-2 align-self-stretch text-900">Customizable Design</span>
                            <div class="text-sm font-normal line-height-2">Fully customizable with a mixture of Sass and CSS variables.</div>
                        </div>
                    </div>
                </div>
                <div class="card w-full" style="max-width: 410px">
                    <div class="flex flex-column align-items-start gap-3">
                        <img src="./assets/features-images/Mobile.jpg" class="w-full" alt="" />
                        <div class="flex flex-column align-items-start gap-2">
                            <span class="font-semibold text-lg line-height-2 align-self-stretch text-900">Mobile Experience</span>
                            <div class="text-sm font-normal line-height-2">Touch optimized enhanced mobile experience with responsive design.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <span class="flex text-900 text-2xl md:text-6xl justify-content-center font-semibold w-full pt-8 pb-6">Related Layouts</span>
    <div class="grid align-items-center justify-content-center">
        <div class="col-12 md:col-4">
            <div class="flex h-full justify-content-center">
                <div class="p-3 h-full w-full flex flex-column justify-content-center surface-card border-round-md" style="max-width: 338px">
                    <img src="../templates/assets/layout-images/Atlantis.png" class="border-round-lg" alt="" />
                </div>
            </div>
        </div>
        <div class="col-12 md:col-4">
            <div class="flex h-full justify-content-center">
                <div class="p-3 h-full w-full flex flex-column justify-content-center surface-card border-round-md" style="max-width: 338px">
                    <img src="../templates/assets/layout-images/Avalon.png" class="border-round-lg" alt="" />
                </div>
            </div>
        </div>
        <div class="col-12 md:col-4">
            <div class="flex h-full justify-content-center">
                <div class="p-3 h-full w-full flex flex-column justify-content-center surface-card border-round-md" style="max-width: 338px">
                    <img src="../templates/assets/layout-images/Diamond.png" class="border-round-lg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FeatureMenu from '../templates/FeatureMenu.vue';

export default {
    data() {
        return {
            displayModal: false,
            visible: false,
            checked: false,
            checked1: true,

            items: [
                {
                    id: 'one',
                    title: 'Light / Dark / Dim Modes',
                    description: 'Apollo has 3 display modes to choose from; Light, Dim and Dark.',
                    image: 'Screen_Card.png'
                },
                {
                    id: 'two',
                    title: 'Component Themes',
                    description: 'Apollo offers 24 built-in component themes and creating your own theme is a matter of defining couple of sass variables.',
                    image: 'Colors.png'
                },
                {
                    id: 'three',
                    title: '7 Menu Orientations',
                    description: 'Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal are the available menu layouts depending on your preference.',
                    isGalleria: true,
                    image: [
                        '/_nuxt/pages/templates/assets/layout-menu/static.png',
                        '/_nuxt/pages/templates/assets/layout-menu/slim.png',
                        '/_nuxt/pages/templates/assets/layout-menu/reveal.png',
                        '/_nuxt/pages/templates/assets/layout-menu/horizontal.png',
                        '/_nuxt/pages/templates/assets/layout-menu/overlay.png',
                        '/_nuxt/pages/templates/assets/layout-menu/slim+.png',
                        '/_nuxt/pages/templates/assets/layout-menu/drawer.png'
                    ]
                },
                {
                    id: 'four',
                    title: 'Menu Themes',
                    description: 'Stunning theming for the main menu with 3 alternatives; Color Scheme, Primary Color and Transparent.',
                    image: 'Themes.png'
                }
            ],
            items2: [
                {
                    id: 'one',
                    title: 'PrimeFlex CSS Utilities',
                    description: 'PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.',
                    image: 'Utilities.png'
                },
                {
                    id: 'two',
                    title: 'PrimeBlocks',
                    description: 'Fully compatible with PrimeBlocks, choose from the wide range of blocks and customize the way you like. Note that PrimeBlocks is not included in the template and requires a separate purchase.',
                    image: 'Primeblocks.png'
                },
                {
                    id: 'three',
                    title: 'PrimeIcons',
                    description: 'Apollo ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
                    image: 'Prime-icons.png'
                },
                {
                    id: 'four',
                    title: 'Figma File',
                    description:
                        'Apollo uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can preview the Figma file before the purchase. Note that PrimeVue UI components are excluded from the Apollo Figma file as they are available in PrimeOne for Figma only.',
                    image: 'Figma.png'
                }
            ]
        };
    },
    components: {
        FeatureMenu
    }
};
</script>

<style>
@media screen and (max-width: 430px) {
    .isMobile {
        background-image: url('/_nuxt/pages/templates/assets/Mobile-hero.svg') !important;
        background-repeat: no-repeat;
        background-size: cover;
    }
}
</style>
