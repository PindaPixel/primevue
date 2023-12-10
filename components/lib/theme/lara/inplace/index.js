export default `
.p-inplace-display {
    padding: var(--p-inplace-padding);
    border-radius: var(--p-border-radius);
    transition: var(--p-form-element-transition);
}
.p-inplace-display:not(.p-disabled):hover {
    background: var(--p-inplace-hover-bg);
    color: var(--p-inplace-text-hover-color);
}
.p-inplace-display:focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
`;
