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
            //borderRadius: '6px'
        },
        colorScheme: {
            // @todo
            light: {
                primary: palette('#10b981'),
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
                shade: {
                    0: '#ffffff', //surface
                    100: '#f9fafb', //header background
                    200: '#f3f4f6', //hover background
                    300: '#e5e7eb', //border, divider
                    400: '#d1d5db', //input border
                    500: '#9ca3af', //input icon
                    600: '#6b7280', //text secondary color
                    700: '#4b5563', //text color
                    800: '#374151', //unused
                    900: '#1f2937' //unused
                },
                primaryColor: '#10b981',
                primaryLightColor: '#a7f3d0',
                primaryDarkColor: '#059669',
                primaryDarkerColor: '#047857',
                primaryTextColor: '#ffffff',
                highlightBg: '#F0FDFA',
                highlightTextColor: '{primaryDarkerColor}',
                highlightFocusBg: 'color-mix(in srgb, var(--primary-500) 24%, transparent)'
            },
            dark: {
                primary: palette('#34d399'),
                surface: {
                    a: '#1f2937',
                    b: '#111827',
                    c: 'rgba(255,255,255,.03)',
                    d: '#424b57',
                    e: '#1f2937',
                    f: '#1f2937',
                    0: '#111827',
                    50: '#1f2937',
                    100: '#374151',
                    200: '#4b5563',
                    300: '#6b7280',
                    400: '#9ca3af',
                    500: '#d1d5db',
                    600: '#e5e7eb',
                    700: '#f3f4f6',
                    800: '#f9fafb',
                    900: '#ffffff'
                },
                shade: {
                    0: 'rgba(255,255,255,.87)', //text color
                    100: 'rgba(255,255,255,.60)', //text secondary color
                    500: '#6b7280',
                    600: '#424b57', //input bg, border, divider
                    700: '#374151', //menu bg
                    800: '#1f2937', //elevated surface
                    900: '#111827'
                },
                primaryColor: '#34d399',
                primaryLightColor: '#6ee7b7',
                primaryLighterColor: '#a7f3d0',
                primaryLightestColor: 'rgba(52, 211, 153, .2)',
                primaryTextColor: '#030712',
                highlightBg: 'rgba(52, 211, 153, .16)',
                highlightTextColor: 'rgba(255,255,255,.87)',
                highlightFocusBg: 'color-mix(in srgb, var(--primary-500) 24%, transparent)'
            }
        }
    },
    styles: {
        accordion,
        panel
    }
};
