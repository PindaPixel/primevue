export default `
.p-checkbox {
    width: var(--p-checkbox-width, 22px);
    height: var(--p-checkbox-height, 22px);
}
.p-checkbox .p-checkbox-box {
    border: var(--p-checkbox-border, 2px solid var(--p-dark-pink-600, var(--p-pink-400)));
    background: var(--p-input-bg, var(--p-dark-pink-900, var(--p-pink-0)));
    width: var(--p-checkbox-width, 22px);
    height: var(--p-checkbox-height, 22px);
    color: var(--p-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border-radius: var(--p-border-radius, 6px);
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-checkbox .p-checkbox-box .p-checkbox-icon {
    transition-duration: var(--p-transition-duration, .2s);
    color: var(--p-checkbox-icon-active-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
    font-size: var(--p-checkbox-icon-font-size, 14px);
}
.p-checkbox .p-checkbox-box .p-checkbox-icon.p-icon {
    width: var(--p-checkbox-icon-font-size, 14px);
    height: var(--p-checkbox-icon-font-size, 14px);
}
.p-checkbox .p-checkbox-box.p-highlight {
    border-color: var(--p-checkbox-active-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
    background: var(--p-checkbox-active-bg, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
    border-color: var(--p-input-hover-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
    border-color: var(--p-input-focus-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
    border-color: var(--p-checkbox-active-hover-border-color, var(-p-dark-primary-lighter-color, var(--p-primary-darker-color)));
    background: var(--p-checkbox-active-hover-bg, var(--p-dark-primary-lighter-color, var(--p-primary-darker-color)));
    color: var(--p-checkbox-icon-active-hover-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
}
.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}
.p-input-filled .p-checkbox .p-checkbox-box {
    background-color: var(--p-input-filled-bg, var(--p-dark-pink-600, var(--p-pink-200)));
}
.p-input-filled .p-checkbox .p-checkbox-box.p-highlight {
    background: var(--p-checkbox-active-bg, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
    background-color: var(--p-input-filled-hover-bg, var(--p-dark-input-filled-bg, var(--p-input-filled-bg)));
}
.p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
    background: var(--p-checkbox-active-hover-bg, var(--p-dark-primary-lighter-color, var(--p-primary-darker-color)));
}
`;
