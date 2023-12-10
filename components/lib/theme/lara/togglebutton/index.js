export default `
.p-togglebutton.p-button {
    background: var(--p-toggle-button-bg);
    border: var(--p-toggle-button-border);
    color: var(--p-toggle-button-text-color);
    transition: var(--p-form-element-transition);
}
.p-togglebutton.p-button .p-button-icon-left,
.p-togglebutton.p-button .p-button-icon-right {
    color: var(--p-toggle-button-icon-color);
}
.p-togglebutton.p-button:not(.p-disabled).p-focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color);
}
.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover {
    background: var(--p-toggle-button-hover-bg);
    border-color: var(--p-toggle-button-hover-border-color);
    color: var(--p-toggle-button-text-hover-color);
}
.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,
.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {
    color: var(--p-toggle-button-icon-hover-color);
}
.p-togglebutton.p-button.p-highlight {
    background: var(--p-toggle-button-active-bg);
    border-color: var(--p-toggle-button-active-border-color);
    color: var(--p-toggle-button-text-active-color);
}
.p-togglebutton.p-button.p-highlight .p-button-icon-left,
.p-togglebutton.p-button.p-highlight .p-button-icon-right {
    color: var(--p-toggle-button-icon-active-color);
}
.p-togglebutton.p-button.p-highlight:hover {
    background: var(--p-toggle-button-active-hover-bg);
    border-color: var(--p-toggle-button-active-hover-border-color);
    color: var(--p-toggle-button-text-active-hover-color);
}
.p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,
.p-togglebutton.p-button.p-highlight:hover .p-button-icon-right {
    color: var(--p-toggle-button-icon-active-hover-color);
}
.p-togglebutton.p-button.p-invalid > .p-button {
    border-color: var(--p-input-error-border-color);
}
.p-togglebutton.p-button {
    transition:
        background-color var(--p-transition-duration),
        border-color var(--p-transition-duration),
        box-shadow var(--p-transition-duration);
}
`;
