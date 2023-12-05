import PrimeVue from '@/components/lib/config/PrimeVue';
import Tailwind from '@/components/lib/passthrough/tailwind/index.js';
import CodeHighlight from '@/directives/CodeHighlight';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true, unstyled: true, pt: Tailwind });
    nuxtApp.vueApp.directive('code', CodeHighlight);
});
