export default `
.p-slider {
    background: var(--p-slider-bg, var(--p-dark-pink-600, var(--p-pink-300)));
    border: var(--p-slider-border, 0 none);
    border-radius: var(--p-border-radius, 6px);
}
.p-slider.p-slider-horizontal {
    height: var(--p-slider-horizontal-height, .286rem);
}
.p-slider.p-slider-horizontal .p-slider-handle {
    margin-top: calc(-1 * var(--p-slider-handle-height, 1.143rem) / 2);
    margin-left: calc(-1 * var(--p-slider-handle-width, 1.143rem) / 2);
}
.p-slider.p-slider-vertical {
    width: var(--p-slider-vertical-width, .286rem);
}
.p-slider.p-slider-vertical .p-slider-handle {
    margin-left: calc(-1 * var(--p-slider-handle-width, 1.143rem) / 2);
    margin-bottom: calc(-1 * var(--p-slider-handle-height, 1.143rem) / 2);
}
.p-slider .p-slider-handle {
    height: var(--p-slider-handle-height, 1.143rem);
    width: var(--p-slider-handle-width, 1.143rem);
    background: var(--p-slider-handle-bg, var(--p-dark-pink-600, var(--p-pink-0)));
    border: var(--p-slider-handle-border, 2px solid var(--p-dark-primary-color, var(--p-primary-color)));
    border-radius: var(--p-slider-handle-border-radius, 50%);
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-slider .p-slider-handle:focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-slider .p-slider-range {
    background: var(--p-slider-range-bg, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: var(--p-slider-handle-hover-bg, var(--p-dark-primary-color, var(--p-primary-color)));
    border-color: var(--p-slider-handle-hover-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
`;
