export default `
.p-radiobutton {
    width: var(--p-radiobutton-width);
    height: var(--p-radiobutton-height);
}
.p-radiobutton .p-radiobutton-box {
    border: var(--p-radiobutton-border);
    background: var(--p-input-bg);
    width: var(--p-radiobutton-width);
    height: var(--p-radiobutton-height);
    color: var(--p-text-color);
    border-radius: 50%;
    transition: var(--p-form-element-transition);
}
.p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight):hover {
    border-color: var(--p-input-hover-border-color);
}
.p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color);
}
.p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
    width: var(--p-radiobutton-icon-size);
    height: var(--p-radiobutton-icon-size);
    transition-duration: var(--p-transition-duration);
    background-color: var(--p-radiobutton-icon-active-color);
}
.p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: var(--p-radiobutton-active-border-color);
    background: var(--p-radiobutton-active-bg);
}
.p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
    border-color: var(--p-radiobutton-active-hover-border-color);
    background: var(--p-radiobutton-active-hover-bg);
    color: var(--p-radiobutton-icon-active-hover-color);
}
.p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: var(--p-input-error-border-color);
}
.p-radiobutton:focus {
    outline: 0 none;
}

.p-input-filled .p-radiobutton .p-radiobutton-box {
    background-color: var(--p-input-filled-bg);
}
.p-input-filled .p-radiobutton .p-radiobutton-box:not(.p-disabled):hover {
    background-color: var(--p-input-filled-hover-bg);
}
.p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {
    background: var(--p-radiobutton-active-bg);
}
.p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
    background: var(--p-radiobutton-active-hover-bg);
}
`;
