export default `
.p-colorpicker-preview {
    width: var(--p-color-picker-preview-width, 2rem);
    height: var(--p-color-picker-preview-height, 2rem);
}
.p-colorpicker-panel {
    background: var(--p-color-picker-bg, var(--p-dark-pink-800, #323232));
    border: var(--p-color-picker-border, 1px solid var(--p-dark-pink-600, #191919));
}
.p-colorpicker-panel .p-colorpicker-color-handle,
.p-colorpicker-panel .p-colorpicker-hue-handle {
    border-color: var(--p-color-picker-handle-color, var(--p-dark-pink-0, var(--p-pink-0)));
}
.p-colorpicker-overlay-panel {
    box-shadow: var(--p-input-overlay-shadow, var(0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), var(0 2px 12px 0 rgba(0,0,0,.1))));
}
`;
