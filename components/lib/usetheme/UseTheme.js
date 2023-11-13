import { useStyle } from 'primevue/usestyle';
import { ref } from 'vue';
import PrimeCSS from './primecss'; // @todo update package

export function useTheme(theme, options = {}) {
    const stylesRef = ref(undefined);
    const variablesRef = ref(undefined);

    const load = (_theme, _useStyleOptions = {}) => {
        const selectedTheme = _theme || theme || {};
        const name = _useStyleOptions.name || options.name || 'prime';
        const generatedTheme = selectedTheme[name] || selectedTheme;
        const { styles, variables } = PrimeCSS.generate({ [name]: generatedTheme }, options);

        stylesRef.value = useStyle(styles.css, { ..._useStyleOptions, name: `${name}-styles` });
        variablesRef.value = useStyle(variables.css, { ..._useStyleOptions, name: `${name}-variables` });

        stylesRef.value.load();
        variablesRef.value.load();
    };

    const unload = () => {
        stylesRef.value?.unload();
        variablesRef.value?.unload();
    };

    return {
        unload,
        load
    };
}
