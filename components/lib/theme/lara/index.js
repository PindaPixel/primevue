import { palette } from 'primevue/theme';
import { button, data, file, input, menu, messages, misc, multimedia, overlay, panel } from './style';

export default {
    variables: {
        borderRadius: '1rem',
        fontFamily: 'Arial',
        colorScheme: 'light',
        colors: {
            primaryColor: '#14b8a6',
            primaryTextColor: '#ffffff',
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
            red: palette('#FF3D32'),
            primary: palette('#14b8a6'),
            shade: {
                '000': '#ffffff',
                100: '#f9fafb',
                200: '#f3f4f6',
                300: '#e5e7eb',
                400: '#d1d5db',
                500: '#9ca3af',
                600: '#6b7280',
                700: '#4b5563',
                800: '#374151',
                900: '#1f2937'
            },
            textColor: '#4b5563',
            textColorSecondary: '#6b7280',
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
            gray: {
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
            }
        }
    },
    global: `

    `,
    ...button,
    ...data,
    ...file,
    ...input,
    ...menu,
    ...messages,
    ...misc,
    ...multimedia,
    ...overlay,
    ...panel
};
