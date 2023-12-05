import { palette } from 'primevue/theme';
import accordion from 'primevue/theme/lara/accordion';
import panel from 'primevue/theme/lara/panel';

export default {
    variables: {
        primitive: {
            blue: palette('#3B82F6'),
            green: palette('#22C55E'),
            yellow: palette('#EAB308'),
            cyan: palette('#06B6D4'),
            pink: palette('#EC4899'),
            indigo: palette('#6366F1'),
            teal: palette('#14B8A6'),
            orange: palette('#F97316'),
            bluegray: palette('#64748B'),
            purple: palette('#A855F7'),
            red: palette('#FF3D32')
        },
        semantic: {
            // @todo
            primary: palette('#14b8a6'),
            surface: {
                a: '#ffffff',
                b: '#f9fafb',
                c: '#f3f4f6',
                d: '#e5e7eb',
                e: '#ffffff',
                f: '#ffffff',
                0: '#ffffff',
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                400: '#9ca3af',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#1f2937',
                900: '#111827'
            },
            formBorderRadius: '12px',
            headerPadding: '2rem',
            contentPadding: '2rem',
            formElementBorderRadius: '12px',
            light: {
                hoverBg: '{blue.50}',
                highlightBg: '{surface.100}',
                formBackground: '{surface.0}'
            },
            dark: {
                hoverBg: '{semantic.surface.200}',
                highlightBg: '{surface.100}',
                formBackground: '{surface.800}'
            }
        }
    },
    styles: {
        accordion,
        panel
    }
};
