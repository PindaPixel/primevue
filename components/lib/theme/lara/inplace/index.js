export default `
.p-inplace-display {
    padding: var(--p-inplace-padding, .75rem .75rem);
    border-radius: var(--p-border-radius, 6px);
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-inplace-display:not(.p-disabled):hover {
    background: var(--p-inplace-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
    color: var(--p-inplace-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-inplace-display:focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
`;
