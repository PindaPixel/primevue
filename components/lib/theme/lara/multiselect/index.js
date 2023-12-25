export default `
.p-multiselect {
    background: var(--p-input-bg, var(--p-dark-pink-900, var(--p-pink-0)));
    border: var(--p-input-border, 1px solid var(--p-dark-pink-600, var(--p-pink-400)));
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    border-radius: var(--p-border-radius, 6px);
}
.p-multiselect:not(.p-disabled):hover {
    border-color: var(--p-input-hover-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-multiselect:not(.p-disabled).p-focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
    border-color: var(--p-input-focus-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-multiselect .p-multiselect-label {
    padding: var(--p-input-padding, .75rem .75rem);
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-multiselect .p-multiselect-label.p-placeholder {
    color: var(--p-input-placeholder-text-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
.p-multiselect.p-multiselect-chip .p-multiselect-token {
    padding: calc(var(--p-input-padding-top, .75rem) / 2) calc(var(--p-input-padding-right, .75rem) / 2); /* //TODO: */
    margin-right: var(--p-inline-spacing, .5rem);
    background: var(--p-chip-bg, var(--p-dark-pink-600, var(--p-pink-300))); /* //TODO: */
    color: var(--p-chip-text-color, var(--p-dark-text-color, var(--p-text-color)));
    border-radius: var(--p-chip-border-radius, 16px);
}
.p-multiselect.p-multiselect-chip .p-multiselect-token .p-multiselect-token-icon {
    margin-left: var(--p-inline-spacing, .5rem);
}
.p-multiselect .p-multiselect-trigger {
    background: transparent; /* //TODO: */
    color: var(--p-input-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
    width: var(--p-input-group-add-on-min-width, 3rem);
    border-top-right-radius: var(--p-border-radius, 6px);
    border-bottom-right-radius: var(--p-border-radius, 6px);
}
.p-multiselect.p-invalid.p-component {
    border-color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}

.p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {
    padding: calc(var(--p-input-padding-top, .75rem) / 2) calc(var(--p-input-padding-right, .75rem) / 2); /* //TODO: */
}

.p-multiselect-panel {
    background: var(--p-input-overlay-bg, var(--p-dark-input-list-bg, var(--p-input-list-bg)));
    color: var(--p-input-list-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border: var(--p-input-overlay-border, var(1px solid var(--p-dark-pink-600), var(0 none)));
    border-radius: var(--p-border-radius, 6px);
    box-shadow: var(--p-input-overlay-shadow);
}
.p-multiselect-panel .p-multiselect-header {
    padding: var(--p-input-list-header-padding, .75rem 1.25rem);
    border-bottom: var(--p-input-list-header-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-input-list-header-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
    background: var(--p-input-overlay-header-bg, var(--p-dark-input-list-header-bg, var(--p-input-list-header-bg)));
    margin: var(--p-input-list-header-margin, 0);
    border-top-right-radius: var(--p-border-radius, 6px);
    border-top-left-radius: var(--p-border-radius, 6px);
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext {
    padding-right: calc(var(--p-input-padding-right, .75rem) + var(--p-prime-icon-font-size, 1rem));
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-multiselect-filter-icon {
    right: var(--p-input-padding-right, .75rem);
    color: var(--p-input-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
.p-multiselect-panel .p-multiselect-header .p-checkbox {
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-close { /* //TODO: */
    margin-left: var(--p-inline-spacing, .5rem);
    width: var(--p-action-icon-width, 2rem);
    height: var(--p-action-icon-height, 2rem);
    color: var(--p-action-icon-color);
    border: var(--p-action-icon-border, var(--p-dark-pink-100, var(--p-pink-600)));
    background: var(--p-action-icon-bg, var(--p-dark-pink-900, var(--p-pink-200)));
    border-radius: var(--p-action-icon-border-radius, 50%);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-close:enabled:hover {
    color: var(--p-action-icon-hover-color, var(--p-dark-pink-0, var(--p-pink-800)));
    border-color: var(--p-action-icon-hover-border-color, transparent);
    background: var(--p-action-icon-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-close:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-multiselect-panel .p-multiselect-items {
    padding: var(--p-input-list-padding, .75rem 0);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item {
    margin: var(--p-input-list-item-margin, 0);
    padding: var(--p-input-list-item-padding, .75rem 1.25rem);
    border: var(--p-input-list-item-border, 0 none);
    color: var(--p-input-list-item-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-bg, var(--p-dark-pink-800, var(--p-pink-100)));
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    border-radius: var(--p-input-list-item-border-radius, 0);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight.p-focus {
    background: var(--p-highlight-focus-bg);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: var(--p-input-list-item-text-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-focus-bg, var(--p-dark-pink-600, var(--p-pink-300)));
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
    color: var(--p-input-list-item-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item .p-checkbox {
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item-group { /* //TODO: */
    margin: var(--p-submenu-header-margin, 0);
    padding: var(--p-submenu-header-padding, .75rem 1.25rem);
    color: var(--p-submenu-header-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
    background: var(--p-submenu-header-bg, var(--p-dark-pink-700, var(--p-pink-0)));
    font-weight: var(--p-submenu-header-font-weight, 700);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-empty-message {
    padding: var(--p-input-list-item-padding, .75rem 1.25rem);
    color: var(--p-input-list-item-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-bg, var(--p-dark-pink-800, var(--p-pink-100)));
}

.p-input-filled .p-multiselect {
    background: var(--p-input-filled-bg, var(--p-dark-pink-600, var(--p-pink-200)));
}
.p-input-filled .p-multiselect:not(.p-disabled):hover {
    background-color: var(--p-input-filled-hover-bg, var(--p-dark-input-filled-bg, var(--p-input-filled-bg)));
}
.p-input-filled .p-multiselect:not(.p-disabled).p-focus {
    background-color: var(--p-input-filled-focus-bg, var(--p-dark-input-filled-bg, var(--p-pink-0)));
}
`;
