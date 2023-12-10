export default `
.p-chips:not(.p-disabled):hover .p-chips-multiple-container {
    border-color: var(--p-input-hover-border-color);
}
.p-chips:not(.p-disabled).p-focus .p-chips-multiple-container {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color);
}
.p-chips .p-chips-multiple-container {
    padding: "math.div(nth(var(--p-input-padding), 1), 2) nth(var(--p-input-padding), 2)";
}
.p-chips .p-chips-multiple-container .p-chips-token {
    padding: "math.div(nth(var(--p-input-padding), 1), 2) nth(var(--p-input-padding), 2)";
    margin-right: var(--p-inline-spacing);
    background: var(--p-chip-bg);
    color: var(--p-chip-text-color);
    border-radius: var(--p-chip-border-radius);
}
.p-chips .p-chips-multiple-container .p-chips-token.p-focus {
    background: var(--p-chip-focus-bg);
    color: var(--p-chip-focus-text-color);
}
.p-chips .p-chips-multiple-container .p-chips-token .p-chips-token-icon {
    margin-left: var(--p-inline-spacing);
}
.p-chips .p-chips-multiple-container .p-chips-input-token {
    padding: "math.div(nth(var(--p-input-padding), 1), 2) 0";
}
.p-chips .p-chips-multiple-container .p-chips-input-token input {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: var(--p-input-text-font-size);
    color: var(--p-text-color);
    padding: 0;
    margin: 0;
}
.p-chips.p-invalid.p-component > .p-inputtext {
    border-color: var(--p-input-error-border-color);
}
`;
