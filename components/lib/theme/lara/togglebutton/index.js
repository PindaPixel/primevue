export default `
.p-togglebutton.p-button {
    background: var(--p-toggle-button-bg, var(--p-dark-pink-800, var(--p-input-bg)));
    border: var(--p-toggle-button-border, 1px solid var(--p-dark-pink-600, var(--p-pink-400)));
    color: var(--p-toggle-button-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-togglebutton.p-button .p-button-icon-left,
.p-togglebutton.p-button .p-button-icon-right {
    color: var(--p-toggle-button-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
.p-togglebutton.p-button:not(.p-disabled).p-focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover {
    background: var(--p-toggle-button-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
    border-color: var(--p-toggle-button-hover-border-color, var(--p-dark-pink-600, var(--p-pink-400)));
    color: var(--p-toggle-button-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,
.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {
    color: var(--p-toggle-button-icon-hover-color, var(--p-dark-pink-100, var(--p-pink-800)));
}
.p-togglebutton.p-button.p-highlight {
    background: var(--p-toggle-button-active-bg, var(--p-dark-primary-color, var(--p-primary-color)));
    border-color: var(--p-toggle-button-active-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
    color: var(--p-toggle-button-text-active-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
}
.p-togglebutton.p-button.p-highlight .p-button-icon-left,
.p-togglebutton.p-button.p-highlight .p-button-icon-right {
    color: var(--p-toggle-button-icon-active-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
}
.p-togglebutton.p-button.p-highlight:hover {
    background: var(--p-toggle-button-active-hover-bg, var(--p-dark-primary-light-color, var(--p-primary-dark-color)));
    border-color: var(--p-toggle-button-active-hover-border-color), var(--p-dark-primary-light-color, var(--p-primary-dark-color));
    color: var(--p-toggle-button-text-active-hover-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
}
.p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,
.p-togglebutton.p-button.p-highlight:hover .p-button-icon-right {
    color: var(--p-toggle-button-icon-active-hover-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
}
.p-togglebutton.p-button.p-invalid > .p-button {
    border-color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}
.p-togglebutton.p-button {
    transition:
        background-color var(--p-transition-duration, .2s),
        border-color var(--p-transition-duration, .2s),
        box-shadow var(--p-transition-duration, .2s);
}
`;
