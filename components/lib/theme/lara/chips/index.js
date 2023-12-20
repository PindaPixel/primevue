export default `
.p-chips:not(.p-disabled):hover .p-chips-multiple-container {
    border-color: var(--p-input-hover-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-chips:not(.p-disabled).p-focus .p-chips-multiple-container {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
    border-color: var(--p-input-focus-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-chips .p-chips-multiple-container {
    /* padding: "math.div(nth(var(--p-input-padding), 1), 2) nth(var(--p-input-padding), 2)"; //TODO: */
    padding: calc(var(--p-input-padding-right, .75rem) / 2) var(--p-input-padding-right, .75rem);
}
.p-chips .p-chips-multiple-container .p-chips-token {
    /* padding: "math.div(nth(var(--p-input-padding), 1), 2) nth(var(--p-input-padding), 2)"; //TODO: */
    padding: calc(var(--p-input-padding-right, .75rem) / 2) var(--p-input-padding-right, .75rem);
    margin-right: var(--p-inline-spacing, .5rem);
    background: var(--p-chips-bg, var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-chips-text-color, var(--p-dark-text-color, var(--p-text-color)));
    border-radius: var(--p-chips-border-radius, 16px);
}
.p-chips .p-chips-multiple-container .p-chips-token.p-focus {
    background: var(--p-chips-focus-bg, var(--p-dark-pink-500, var(--p-pink-400)));
    color: var(--p-chips-focus-text-color, var(--p-dark-text-color, var(--p-text-color)));
}
.p-chips .p-chips-multiple-container .p-chips-token .p-chips-token-icon {
    margin-left: var(--p-inline-spacing, .5rem);
}
.p-chips .p-chips-multiple-container .p-chips-input-token {
    /* padding: "math.div(nth(var(--p-input-padding), 1), 2) 0"; //TODO: duplicate */
    padding: calc(var(--p-input-padding-right, .75rem) / 2) 0;
}
.p-chips .p-chips-multiple-container .p-chips-input-token input {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: var(--p-input-text-font-size, 1rem);
    color: var(--p-text-color);
    padding: 0; /* //TODO: */
    margin: 0;
}
.p-chips.p-invalid.p-component > .p-inputtext {
    border-color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}
`;
