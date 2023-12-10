export default `
.p-autocomplete .p-autocomplete-loader {
    right: "nth(var(--p-input-padding), 2)";
}
.p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {
    right: "nth(var(--p-input-padding), 2) + var(--p-button-icon-only-width)";
}
.p-autocomplete:not(.p-disabled):hover .p-autocomplete-multiple-container {
    border-color: var(--p-input-hover-border-color);
}
.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-multiple-container {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color);
}
.p-autocomplete .p-autocomplete-multiple-container {
    padding: "math.div(nth(var(--p-input-padding), 1), 2) nth(var(--p-input-padding), 2)";
    gap: var(--p-inline-spacing);
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token {
    padding: "math.div(nth(var(--p-input-padding), 1), 2) 0";
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token input {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: var(--p-input-text-font-size);
    color: var(--p-text-color);
    padding: 0;
    margin: 0;
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token {
    padding: "math.div(nth(var(--p-input-padding), 1), 2) nth(var(--p-input-padding), 2)";
    background: var(--p-chip-bg);
    color: var(--p-chip-text-color);
    border-radius: var(--p-chip-border-radius);
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token .p-autocomplete-token-icon {
    margin-left: var(--p-inline-spacing);
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token.p-focus {
    background: var(--p-chip-focus-bg);
    color: var(--p-chip-focus-text-color);
}
.p-autocomplete.p-invalid.p-component > .p-inputtext {
    border-color: var(--p-input-error-border-color);
}

.p-autocomplete-panel {
    background: var(--p-input-overlay-bg);
    color: var(--p-input-list-text-color);
    border: var(--p-input-overlay-border);
    border-radius: var(--p-border-radius);
    box-shadow: var(--p-input-overlay-shadow);
}
.p-autocomplete-panel .p-autocomplete-items {
    padding: var(--p-input-list-padding);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item {
    margin: var(--p-input-list-item-margin);
    padding: var(--p-input-list-item-padding);
    border: var(--p-input-list-item-border);
    color: var(--p-input-list-item-text-color);
    background: var(--p-input-list-item-bg);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-input-list-item-border-radius);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item.p-highlight.p-focus {
    background: var(--p-highlight-focus-bg);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: var(--p-input-list-item-text-focus-color);
    background: var(--p-input-list-item-focus-bg);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:not(.p-highlight):not(.p-disabled):hover {
    color: var(--p-input-list-item-text-hover-color);
    background: var(--p-input-list-item-hover-bg);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item-group {
    margin: var(--p-submenu-header-margin);
    padding: var(--p-submenu-header-padding);
    color: var(--p-submenu-header-text-color);
    background: var(--p-submenu-header-bg);
    font-weight: var(--p-submenu-header-font-weight);
}
`;
