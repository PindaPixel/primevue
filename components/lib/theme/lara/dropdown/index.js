export default `
.p-dropdown {
    background: var(--p-input-bg, var(--p-dark-pink-900, var(--p-pink-0)));
    border: var(--p-input-border, 1px solid var(--p-dark-pink-600, var(--p-pink-400)));
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    border-radius: var(--p-border-radius, 6px);
}
.p-dropdown:not(.p-disabled):hover {
    border-color: var(--p-input-hover-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-dropdown:not(.p-disabled).p-focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
    border-color: var(--p-input-focus-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-dropdown.p-dropdown-clearable .p-dropdown-label {
    /* padding-right: "nth(var(--p-input-padding), 2) + var(--p-prime-icon-font-size)"; */
    padding-right: calc(var(--p-input-padding-right, .75rem) + var(--p-prime-icon-font-size, 1rem));
}
.p-dropdown .p-dropdown-label { /* //TODO: */
    background: transparent;
    border: 0 none;
}
.p-dropdown .p-dropdown-label.p-placeholder {
    color: var(--p-input-placeholder-text-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
.p-dropdown .p-dropdown-label:focus,
.p-dropdown .p-dropdown-label:enabled:focus {  /* //TODO: */
    outline: 0 none;
    box-shadow: none;
}
.p-dropdown .p-dropdown-trigger {
    background: transparent;  /* //TODO: */
    color: var(--p-input-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
    width: var(--p-input-group-add-on-min-width, 3rem);
    border-top-right-radius: var(--p-border-radius, 6px);
    border-bottom-right-radius: var(--p-border-radius, 6px);
}
.p-dropdown .p-dropdown-clear-icon {
    color: var(--p-input-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
    right: var(--p-input-group-add-on-min-width, 3rem);
}
.p-dropdown.p-invalid.p-component {
    border-color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}

.p-dropdown-panel {
    background: var(--p-input-overlay-bg, var(--p-dark-input-list-bg, var(--p-input-list-bg)));
    color: var(--p-input-list-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border: var(--p-input-overlay-border, var(1px solid var(--p-dark-pink-600), var(0 none)));
    border-radius: var(--p-border-radius, 6px);
    box-shadow: var(--p-input-overlay-shadow, var(0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), var(0 2px 12px 0 rgba(0,0,0,.1))));
}
.p-dropdown-panel .p-dropdown-header {
    padding: var(--p-input-list-header-padding, .75rem 1.25rem);
    border-bottom: var(--p-input-list-header-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-input-list-header-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
    background: var(--p-input-overlay-header-bg, var(--p-dark-input-list-header-bg, var(--p-input-list-header-bg)));
    margin: var(--p-input-list-header-margin, 0);
    border-top-right-radius: var(--p-border-radius, 6px);
    border-top-left-radius: var(--p-border-radius, 6px);
}
.p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
    /* padding-right: "nth(var(--p-input-padding), 2) + var(--p-prime-icon-font-size)"; */
    padding-right: calc(var(--p-input-padding-right, .75rem) + var(--p-prime-icon-font-size, 1rem));
    /* margin-right: "-1 * (nth(var(--p-input-padding), 2) + var(--p-prime-icon-font-size))"; */
    margin-right: calc(-1 * var(--p-input-padding-right, .75rem) + var(--p-prime-icon-font-size, 1rem));
}
.p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {
    /* right: "nth(var(--p-input-padding), 2)"; */
    right: var(--p-input-padding-right, .75rem);
    color: var(--p-input-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
.p-dropdown-panel .p-dropdown-items {
    padding: var(--p-input-list-padding, .75rem 0);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
    margin: var(--p-input-list-item-margin, 0);
    padding: var(--p-input-list-item-padding, .75rem 1.25rem);
    border: var(--p-input-list-item-border, 0 none);
    color: var(--p-input-list-item-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-bg, transparent);
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    border-radius: var(--p-input-list-item-border-radius, 0);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight.p-focus {
    background: var(--p-highlight-focus-bg);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: var(--p-input-list-item-text-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-focus-bg, var(--p-dark-pink-600, var(--p-pink-300)));
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
    color: var(--p-input-list-item-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {
    margin: var(--p-submenu-header-margin, 0);
    padding: var(--p-submenu-header-padding, .75rem 1.25rem);
    color: var(--p-submenu-header-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
    background: var(--p-submenu-header-bg, var(--p-dark-pink-700, var(--p-pink-0)));
    font-weight: var(--p-submenu-header-font-weight, 700);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {
    padding: var(--p-input-list-item-padding, .75rem 1.25rem);
    color: var(--p-input-list-item-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-bg, transparent);
}
.p-input-filled .p-dropdown {
    background: var(--p-input-filled-bg, var(--p-dark-pink-600, var(--p-pink-200)));
}
.p-input-filled .p-dropdown:not(.p-disabled):hover {
    background-color: var(--p-input-filled-hover-bg, var(--p-dark-input-filled-bg, var(--p-input-filled-bg)));
}
.p-input-filled .p-dropdown:not(.p-disabled).p-focus {
    background-color: var(--p-input-filled-focus-bg, var(--p-dark-input-filled-bg, var(--p-pink-0)));
}
.p-input-filled .p-dropdown:not(.p-disabled).p-focus .p-inputtext {
    background-color: transparent; /* //TODO */
}
`;
