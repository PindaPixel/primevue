export default `
.p-inputswitch {
    width: var(--p-input-switch-width, 3rem);
    height: var(--p-input-switch-height, 1.75rem);
}
.p-inputswitch .p-inputswitch-slider {
    background: var(--p-input-switch-slider-off-bg, var(--p-dark-pink-500, var(--p-pink-400)));
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    border-radius: var(--p-input-switch-border-radius, 30px);
}
.p-inputswitch .p-inputswitch-slider:before {
    background: var(--p-input-switch-handle-off-bg, var(--p-dark-pink-100, var(--p-pink-0)));
    width: var(--p-input-switch-handle-width, 1.250rem);
    height: var(--p-input-switch-handle-height, 1.250rem);
    left: var(--p-input-switch-slider-padding, .25rem);
    margin-top: calc(-1 * var(--p-input-switch-handle-height, 1.250rem) / 2);
    border-radius: var(--p-input-switch-handle-border-radius, 50%);
    transition-duration: var(--p-transition-duration, .2s);
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
    transform: translateX(var(--p-input-switch-handle-width, 1.250rem)); /* //TODO:  */
}
.p-inputswitch.p-focus .p-inputswitch-slider {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {
    background: var(--p-input-switch-slider-off-hover-bg, var(--p-dark-pink-600, var(#b7bcc5)));
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
    background: var(--p-input-switch-slider-on-bg, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
    background: var(--p-input-switch-handle-on-bg, var(--p-dark-primary-text-color, var(--p-pink-0)));
}
.p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider {
    background: var(--p-input-switch-slider-on-hover-bg, var(-p-dark-primary-light-color, var(--p-primary-dark-color)));
}
.p-inputswitch.p-invalid .p-inputswitch-slider {
    border-color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}
`;
