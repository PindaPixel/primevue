export default `
.p-listbox {
    background: var(--p-input-list-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    color: var(--p-input-list-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border: var(--p-input-list-border, var(--p-dark-input-border, var(--p-input-border)));
    border-radius: var(--p-border-radius, 6px);
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-listbox .p-listbox-header {
    padding: var(--p-input-list-header-padding, .75rem 1.25rem);
    border-bottom: var(--p-input-list-header-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-input-list-header-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
    background: var(--p-input-list-header-bg, var(--p-dark-pink-800, var(--p-pink-100)));
    margin: var(--p-input-list-header-margin, 0);
    border-top-right-radius: var(--p-border-radius, 6px);
    border-top-left-radius: var(--p-border-radius, 6px);
}
.p-listbox .p-listbox-header .p-listbox-filter {
    padding-right: calc(var(--p-input-padding-right, .75rem) + var(--p-prime-icon-font-size, 1rem));
}
.p-listbox .p-listbox-header .p-listbox-filter-icon {
    right: var(--p-input-padding-right, .75rem); /* //TODO: */
    color: var(--p-input-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
.p-listbox .p-listbox-list {
    padding: var(--p-input-list-padding, .75rem 0);
    outline: 0 none; /* //TODO: */
}
.p-listbox .p-listbox-list .p-listbox-item {
    margin: var(--p-input-list-item-margin, 0);
    padding: var(--p-input-list-item-padding, .75rem 1.25rem);
    border: var(--p-input-list-item-border, 0 none);
    color: var(--p-input-list-item-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    border-radius: var(--p-input-list-item-border-radius, 0 none);
}
.p-listbox .p-listbox-list .p-listbox-item.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-listbox .p-listbox-list .p-listbox-item-group { /* //TODO: */
    margin: var(--p-submenu-header-margin, 0);
    padding: var(--p-submenu-header-padding, .75rem 1.25rem);
    color: var(--p-submenu-header-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
    background: var(--p-submenu-header-bg, var(--p-dark-pink-700, var(--p-pink-0)));
    font-weight: var(--p-submenu-header-font-weight, 700);
}
.p-listbox .p-listbox-list .p-listbox-empty-message {
    padding: var(--p-input-list-item-padding, .75rem 1.25rem);
    color: var(--p-input-list-item-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-bg, transparent);
}
.p-listbox:not(.p-disabled) .p-listbox-item.p-highlight.p-focus {
    background: var(--p-highlight-focus-bg);
}
.p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: var(--p-input-list-item-text-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-focus-bg, var(--p-dark-pink-600, var(--p-pink-300)));
}
.p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
    color: var(--p-input-list-item-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-listbox.p-focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
    border-color: var(--p-input-focus-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-listbox.p-invalid {
    border-color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}
`;
