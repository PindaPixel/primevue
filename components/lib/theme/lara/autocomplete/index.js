export default `
.p-autocomplete .p-autocomplete-loader {
    /* right: "nth(var(--p-input-padding), 2)"; //TODO: */
    right: var(--p-input-padding-right, .75rem);
}
.p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {
    /* right: "nth(var(--p-input-padding), 2) + var(--p-button-icon-only-width)"; */
    right: calc(var(--p-input-padding-right, .75rem) + var(--p-button-icon-only-width, 3rem));
}
.p-autocomplete:not(.p-disabled):hover .p-autocomplete-multiple-container {
    border-color: var(--p-input-hover-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-multiple-container {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
    border-color: var(--p-input-focus-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-autocomplete .p-autocomplete-multiple-container {
    /* padding: "math.div(nth(var(--p-input-padding), 1), 2) nth(var(--p-input-padding), 2)";  //TODO:  */
    padding: calc(var(--p-input-padding-right, .75rem) / 2) var(--p-input-padding-right, .75rem);
    gap: var(--p-inline-spacing, .5rem);
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token {
    /* padding: "math.div(nth(var(--p-input-padding), 1), 2) 0";  //TODO:  */
    padding: calc(var(--p-input-padding-right, .75rem) / 2) 0;
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token input {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: var(--p-input-text-font-size, 1rem);
    color: var(--p-text-color);
    padding: 0; /* //TODO:  */
    margin: 0;
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token {
    /* padding: "math.div(nth(var(--p-input-padding), 1), 2) nth(var(--p-input-padding), 2)"; //TODO: */
    padding: calc(var(--p-input-padding-right, .75rem) / 2) var(--p-input-padding-right, .75rem);
    background: var(--p-autocomplete-token-bg, var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-autocomplete-token-text-color, var(--p-dark-text-color, var(--p-text-color)));
    border-radius: var(--p-autocomplete-token-border-radius, 16px);
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token .p-autocomplete-token-icon {
    margin-left: var(--p-inline-spacing, .5rem);
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token.p-focus {
    background: var(--p-autocomplete-token-focus-bg, var(--p-dark-pink-500, var(--p-pink-400)));
    color: var(--p-autocomplete-token-focus--color, var(--p-dark-text-color, var(--p-text-color)));
}
.p-autocomplete.p-invalid.p-component > .p-inputtext {
    border-color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}

.p-autocomplete-panel {/* //TODO:  */
    background: var(--p-input-overlay-bg, var(--p-dark-input-list-bg, var(--p-input-list-bg)));
    color: var(--p-input-list-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border: var(--p-input-overlay-border);
    border-radius: var(--p-border-radius, 6px);
    box-shadow: var(--p-input-overlay-shadow);
}
.p-autocomplete-panel .p-autocomplete-items {
    padding: var(--p-input-list-padding, .75rem 0);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item {
    margin: var(--p-input-list-item-margin, 0);
    padding: var(--p-input-list-item-padding, .75rem 0);
    border: var(--p-input-list-item-border, 0 none);
    color: var(--p-input-list-item-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-bg, transparent);
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration)); /* //TODO:  */
    border-radius: var(--p-input-list-item-border-radius, 0);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item.p-highlight.p-focus {
    background: var(--p-highlight-focus-bg);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: var(--p-input-list-item-text-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-focus-bg, var(--p-dark-pink-600, var(--p-pink-300)));
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:not(.p-highlight):not(.p-disabled):hover {
    color: var(--p-input-list-item-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item-group {
    margin: var(--p-autocomplete-item-group-margin, 0);
    padding: var(--p-autocomplete-item-group-padding, .75rem 1.25rem);
    color: var(--p-autocomplete-item-group-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
    background: var(--p-autocomplete-item-group-bg, var(--p-dark-pink-700, var(--p-pink-0)));
    font-weight: var(--p-autocomplete-item-group-font-weight, 700);
}
`;
