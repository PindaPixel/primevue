export default `
.p-checkbox {
    width: var(--p-checkbox-width);
    height: var(--p-checkbox-height);
}
.p-checkbox .p-checkbox-box {
    border: var(--p-checkbox-border);
    background: var(--p-input-bg);
    width: var(--p-checkbox-width);
    height: var(--p-checkbox-height);
    color: var(--p-text-color);
    border-radius: var(--p-border-radius);
    transition: var(--p-form-element-transition);
}
.p-checkbox .p-checkbox-box .p-checkbox-icon {
    transition-duration: var(--p-transition-duration);
    color: var(--p-checkbox-icon-active-color);
    font-size: var(--p-checkbox-icon-font-size);
}
.p-checkbox .p-checkbox-box .p-checkbox-icon.p-icon {
    width: var(--p-checkbox-icon-font-size);
    height: var(--p-checkbox-icon-font-size);
}
.p-checkbox .p-checkbox-box.p-highlight {
    border-color: var(--p-checkbox-active-border-color);
    background: var(--p-checkbox-active-bg);
}
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
    border-color: var(--p-input-hover-border-color);
}
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color);
}
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
    border-color: var(--p-checkbox-active-hover-border-color);
    background: var(--p-checkbox-active-hover-bg);
    color: var(--p-checkbox-icon-active-hover-color);
}
.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: var(--p-input-error-border-color);
}
.p-input-filled .p-checkbox .p-checkbox-box {
    background-color: var(--p-input-filled-bg);
}
.p-input-filled .p-checkbox .p-checkbox-box.p-highlight {
    background: var(--p-checkbox-active-bg);
}
.p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
    background-color: var(--p-input-filled-hover-bg);
}
.p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
    background: var(--p-checkbox-active-hover-bg);
}
`;
