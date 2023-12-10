export default `
.p-slider {
    background: var(--p-slider-bg);
    border: var(--p-slider-border);
    border-radius: var(--p-border-radius);
}
.p-slider.p-slider-horizontal {
    height: var(--p-slider-horizontal-height);
}
.p-slider.p-slider-horizontal .p-slider-handle {
    margin-top: "math.div(-1 * var(--p-slider-handle-height), 2)";
    margin-left: "math.div(-1 * var(--p-slider-handle-width), 2)";
}
.p-slider.p-slider-vertical {
    width: var(--p-slider-vertical-width);
}
.p-slider.p-slider-vertical .p-slider-handle {
    margin-left: "math.div(-1 * var(--p-slider-handle-width), 2)";
    margin-bottom: "math.div(-1 * var(--p-slider-handle-height), 2)";
}
.p-slider .p-slider-handle {
    height: var(--p-slider-handle-height);
    width: var(--p-slider-handle-width);
    background: var(--p-slider-handle-bg);
    border: var(--p-slider-handle-border);
    border-radius: var(--p-slider-handle-border-radius);
    transition: var(--p-form-element-transition);
}
.p-slider .p-slider-handle:focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-slider .p-slider-range {
    background: var(--p-slider-range-bg);
}
.p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: var(--p-slider-handle-hover-bg);
    border-color: var(--p-slider-handle-hover-border-color);
}
`;
