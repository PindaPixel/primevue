export default `
.p-radiobutton {
    width: var(--p-radiobutton-width, 22px);
    height: var(--p-radiobutton-height, 22px);
}
.p-radiobutton .p-radiobutton-box {
    border: var(--p-radiobutton-border, 2px solid var(--p-dark-pink-600, var(--p-pink-400)));
    background: var(--p-radiobutton-bg, var(--p-dark-pink-900, var(--p-pink-0)));
    width: var(--p-radiobutton-width, 22px);
    height: var(--p-radiobutton-height, 22px);
    color: var(--p-text-color, var(--p-dark-pink-0, var(--p-pink-700))); /* //TODO: */
    border-radius: var(--p-radiobutton-border-radius, 50%);
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight):hover {
    border-color: var(--p-input-hover-border-color, var(--p-dark-primary-color, var(--p-primary-color))); /* //TODO: */
}
.p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
    border-color: var(--p-input-focus-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
    width: var(--p-radiobutton-icon-size, 12px);
    height: var(--p-radiobutton-icon-size, 12px);
    transition-duration: var(--p-transition-duration, .2s);
    background-color: var(--p-radiobutton-icon-active-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
}
.p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: var(--p-radiobutton-active-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
    background: var(--p-radiobutton-active-bg, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
    border-color: var(--p-radiobutton-active-hover-border-color, var(--p-dark-primary-lighter-color, var(--p-primary-darker-color)));
    background: var(--p-radiobutton-active-hover-bg, var(--p-dark-primary-lighter-color, var(--p-primary-darker-color)));
    color: var(--p-radiobutton-icon-active-hover-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
}
.p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}
.p-radiobutton:focus {
    outline: var(--p-radiobutton-focus-outline, 0 none); /* //TODO: */
}

.p-input-filled .p-radiobutton .p-radiobutton-box {
    background-color: var(--p-input-filled-bg, var(--p-dark-pink-600, var(--p-pink-200)));
}
.p-input-filled .p-radiobutton .p-radiobutton-box:not(.p-disabled):hover {
    background-color: var(--p-input-filled-hover-bg, var(--p-dark-input-filled-bg, var(--p-input-filled-bg)));
}
.p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {
    background: var(--p-radiobutton-active-bg, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
    background: var(--p-radiobutton-active-hover-bg, var(--p-dark-primary-lighter-color, var(--p-primary-darker-color)));
}
`;
