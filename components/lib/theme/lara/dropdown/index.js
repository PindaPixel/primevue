export default `
.p-dropdown {
    background: var(--p-input-bg);
    border: var(--p-input-border);
    transition: var(--p-form-element-transition);
    border-radius: var(--p-border-radius);
}
.p-dropdown:not(.p-disabled):hover {
    border-color: var(--p-input-hover-border-color);
}
.p-dropdown:not(.p-disabled).p-focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color);
}
.p-dropdown.p-dropdown-clearable .p-dropdown-label {
    padding-right: "nth(var(--p-input-padding), 2) + var(--p-prime-icon-font-size)";
}
.p-dropdown .p-dropdown-label {
    background: transparent;
    border: 0 none;
}
.p-dropdown .p-dropdown-label.p-placeholder {
    color: var(--p-input-placeholder-text-color);
}
.p-dropdown .p-dropdown-label:focus,
.p-dropdown .p-dropdown-label:enabled:focus {
    outline: 0 none;
    box-shadow: none;
}
.p-dropdown .p-dropdown-trigger {
    background: transparent;
    color: var(--p-input-icon-color);
    width: var(--p-input-group-add-on-min-width);
    border-top-right-radius: var(--p-border-radius);
    border-bottom-right-radius: var(--p-border-radius);
}
.p-dropdown .p-dropdown-clear-icon {
    color: var(--p-input-icon-color);
    right: var(--p-input-group-add-on-min-width);
}
.p-dropdown.p-invalid.p-component {
    border-color: var(--p-input-error-border-color);
}

.p-dropdown-panel {
    background: var(--p-input-overlay-bg);
    color: var(--p-input-list-text-color);
    border: var(--p-input-overlay-border);
    border-radius: var(--p-border-radius);
    box-shadow: var(--p-input-overlay-shadow);
}
.p-dropdown-panel .p-dropdown-header {
    padding: var(--p-input-list-header-padding);
    border-bottom: var(--p-input-list-header-border);
    color: var(--p-input-list-header-text-color);
    background: var(--p-input-overlay-header-bg);
    margin: var(--p-input-list-header-margin);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
    padding-right: "nth(var(--p-input-padding), 2) + var(--p-prime-icon-font-size)";
    margin-right: "-1 * (nth(var(--p-input-padding), 2) + var(--p-prime-icon-font-size))";
}
.p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {
    right: "nth(var(--p-input-padding), 2)";
    color: var(--p-input-icon-color);
}
.p-dropdown-panel .p-dropdown-items {
    padding: var(--p-input-list-padding);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
    margin: var(--p-input-list-item-margin);
    padding: var(--p-input-list-item-padding);
    border: var(--p-input-list-item-border);
    color: var(--p-input-list-item-text-color);
    background: var(--p-input-list-item-bg);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-input-list-item-border-radius);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight.p-focus {
    background: var(--p-highlight-focus-bg);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: var(--p-input-list-item-text-focus-color);
    background: var(--p-input-list-item-focus-bg);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
    color: var(--p-input-list-item-text-hover-color);
    background: var(--p-input-list-item-hover-bg);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {
    margin: var(--p-submenu-header-margin);
    padding: var(--p-submenu-header-padding);
    color: var(--p-submenu-header-text-color);
    background: var(--p-submenu-header-bg);
    font-weight: var(--p-submenu-header-font-weight);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {
    padding: var(--p-input-list-item-padding);
    color: var(--p-input-list-item-text-color);
    background: var(--p-input-list-item-bg);
}
.p-input-filled .p-dropdown {
    background: var(--p-input-filled-bg);
}
.p-input-filled .p-dropdown:not(.p-disabled):hover {
    background-color: var(--p-input-filled-hover-bg);
}
.p-input-filled .p-dropdown:not(.p-disabled).p-focus {
    background-color: var(--p-input-filled-focus-bg);
}
.p-input-filled .p-dropdown:not(.p-disabled).p-focus .p-inputtext {
    background-color: transparent;
}
`;
