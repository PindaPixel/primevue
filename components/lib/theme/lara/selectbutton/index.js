export default `
.p-selectbutton .p-button {
    background: var(--p-toggle-button-bg);
    border: var(--p-toggle-button-border);
    color: var(--p-toggle-button-text-color);
    transition: var(--p-form-element-transition);
}
.p-selectbutton .p-button .p-button-icon-left,
.p-selectbutton .p-button .p-button-icon-right {
    color: var(--p-toggle-button-icon-color);
}
.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {
    background: var(--p-toggle-button-hover-bg);
    border-color: var(--p-toggle-button-hover-border-color);
    color: var(--p-toggle-button-text-hover-color);
}
.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,
.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {
    color: var(--p-toggle-button-icon-hover-color);
}
.p-selectbutton .p-button.p-highlight {
    background: var(--p-toggle-button-active-bg);
    border-color: var(--p-toggle-button-active-border-color);
    color: var(--p-toggle-button-text-active-color);
}
.p-selectbutton .p-button.p-highlight .p-button-icon-left,
.p-selectbutton .p-button.p-highlight .p-button-icon-right {
    color: var(--p-toggle-button-icon-active-color);
}
.p-selectbutton .p-button.p-highlight:hover {
    background: var(--p-toggle-button-active-hover-bg);
    border-color: var(--p-toggle-button-active-hover-border-color);
    color: var(--p-toggle-button-text-active-hover-color);
}
.p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,
.p-selectbutton .p-button.p-highlight:hover .p-button-icon-right {
    color: var(--p-toggle-button-icon-active-hover-color);
}
.p-selectbutton.p-invalid > .p-button {
    border-color: var(--p-input-error-border-color);
}
.p-selectbutton > .p-button {
    transition:
        background-color var(--p-transition-duration),
        border-color var(--p-transition-duration),
        box-shadow var(--p-transition-duration);
}
`;
