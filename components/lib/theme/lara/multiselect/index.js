export default `
.p-multiselect {
    background: var(--p-input-bg);
    border: var(--p-input-border);
    transition: var(--p-form-element-transition);
    border-radius: var(--p-border-radius);
}
.p-multiselect:not(.p-disabled):hover {
    border-color: var(--p-input-hover-border-color);
}
.p-multiselect:not(.p-disabled).p-focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color);
}
.p-multiselect .p-multiselect-label {
    padding: var(--p-input-padding);
    transition: var(--p-form-element-transition);
}
.p-multiselect .p-multiselect-label.p-placeholder {
    color: var(--p-input-placeholder-text-color);
}
.p-multiselect.p-multiselect-chip .p-multiselect-token {
    padding: "math.div(nth(var(--p-input-padding), 1), 2) nth(var(--p-input-padding), 2)";
    margin-right: var(--p-inline-spacing);
    background: var(--p-chip-bg);
    color: var(--p-chip-text-color);
    border-radius: var(--p-chip-border-radius);
}
.p-multiselect.p-multiselect-chip .p-multiselect-token .p-multiselect-token-icon {
    margin-left: var(--p-inline-spacing);
}
.p-multiselect .p-multiselect-trigger {
    background: transparent;
    color: var(--p-input-icon-color);
    width: var(--p-input-group-add-on-min-width);
    border-top-right-radius: var(--p-border-radius);
    border-bottom-right-radius: var(--p-border-radius);
}
.p-multiselect.p-invalid.p-component {
    border-color: var(--p-input-error-border-color);
}

.p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {
    padding: "math.div(nth(var(--p-input-padding), 1), 2) nth(var(--p-input-padding), 2)";
}

.p-multiselect-panel {
    background: var(--p-input-overlay-bg);
    color: var(--p-input-list-text-color);
    border: var(--p-input-overlay-border);
    border-radius: var(--p-border-radius);
    box-shadow: var(--p-input-overlay-shadow);
}
.p-multiselect-panel .p-multiselect-header {
    padding: var(--p-input-list-header-padding);
    border-bottom: var(--p-input-list-header-border);
    color: var(--p-input-list-header-text-color);
    background: var(--p-input-overlay-header-bg);
    margin: var(--p-input-list-header-margin);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext {
    padding-right: "nth(var(--p-input-padding), 2) + var(--p-prime-icon-font-size)";
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-multiselect-filter-icon {
    right: "nth(var(--p-input-padding), 2)";
    color: var(--p-input-icon-color);
}
.p-multiselect-panel .p-multiselect-header .p-checkbox {
    margin-right: var(--p-inline-spacing);
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-close {
    margin-left: var(--p-inline-spacing);
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-action-icon-color);
    border: var(--p-action-icon-border);
    background: var(--p-action-icon-bg);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-close:enabled:hover {
    color: var(--p-action-icon-hover-color);
    border-color: var(--p-action-icon-hover-border-color);
    background: var(--p-action-icon-hover-bg);
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-close:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-multiselect-panel .p-multiselect-items {
    padding: var(--p-input-list-padding);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item {
    margin: var(--p-input-list-item-margin);
    padding: var(--p-input-list-item-padding);
    border: var(--p-input-list-item-border);
    color: var(--p-input-list-item-text-color);
    background: var(--p-input-list-item-bg);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-input-list-item-border-radius);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight.p-focus {
    background: var(--p-highlight-focus-bg);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: var(--p-input-list-item-text-focus-color);
    background: var(--p-input-list-item-focus-bg);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
    color: var(--p-input-list-item-text-hover-color);
    background: var(--p-input-list-item-hover-bg);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item .p-checkbox {
    margin-right: var(--p-inline-spacing);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item-group {
    margin: var(--p-submenu-header-margin);
    padding: var(--p-submenu-header-padding);
    color: var(--p-submenu-header-text-color);
    background: var(--p-submenu-header-bg);
    font-weight: var(--p-submenu-header-font-weight);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-empty-message {
    padding: var(--p-input-list-item-padding);
    color: var(--p-input-list-item-text-color);
    background: var(--p-input-list-item-bg);
}

.p-input-filled .p-multiselect {
    background: var(--p-input-filled-bg);
}
.p-input-filled .p-multiselect:not(.p-disabled):hover {
    background-color: var(--p-input-filled-hover-bg);
}
.p-input-filled .p-multiselect:not(.p-disabled).p-focus {
    background-color: var(--p-input-filled-focus-bg);
}
`;
