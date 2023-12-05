import PrimeVue from '@/components/lib/config/PrimeVue';
import Lara from '@/components/lib/theme/lara/index.js';
import CodeHighlight from '@/directives/CodeHighlight';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        ripple: true,
        theme: {
            preset: Lara
        }
    });
    nuxtApp.vueApp.directive('code', CodeHighlight);
});
