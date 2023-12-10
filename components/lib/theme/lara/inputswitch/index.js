export default `
.p-inputswitch {
    width: var(--p-input-switch-width);
    height: var(--p-input-switch-height);
}
.p-inputswitch .p-inputswitch-slider {
    background: var(--p-input-switch-slider-off-bg);
    transition: var(--p-form-element-transition);
    border-radius: var(--p-input-switch-border-radius);
}
.p-inputswitch .p-inputswitch-slider:before {
    background: var(--p-input-switch-handle-off-bg);
    width: var(--p-input-switch-handle-width);
    height: var(--p-input-switch-handle-height);
    left: var(--p-input-switch-slider-padding);
    margin-top: "math.div(-1 * var(--p-input-switch-handle-height), 2)";
    border-radius: var(--p-input-switch-handle-border-radius);
    transition-duration: var(--p-transition-duration);
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
    transform: translateX(var(--p-input-switch-handle-width));
}
.p-inputswitch.p-focus .p-inputswitch-slider {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {
    background: var(--p-input-switch-slider-off-hover-bg);
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
    background: var(--p-input-switch-slider-on-bg);
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
    background: var(--p-input-switch-handle-on-bg);
}
.p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider {
    background: var(--p-input-switch-slider-on-hover-bg);
}
.p-inputswitch.p-invalid .p-inputswitch-slider {
    border-color: var(--p-input-error-border-color);
}
`;
