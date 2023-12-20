export default `
.p-cascadeselect {
    background: var(--p-input-bg, var(--p-dark-pink-900, var(--p-pink-0)));
    border: var(--p-input-border, 1px solid var(--p-dark-pink-600, var(--p-pink-400)));
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    border-radius: var(--p-border-radius, 6px);
}
.p-cascadeselect:not(.p-disabled):hover {
    border-color: var(--p-input-hover-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-cascadeselect:not(.p-disabled).p-focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
    border-color: var(--p-input-focus-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-cascadeselect .p-cascadeselect-label {
    background: transparent; /*  //TODO: */
    border: 0 none;
    padding: var(--p-input-padding, .75rem .75rem);
}
.p-cascadeselect .p-cascadeselect-label.p-placeholder {
    color: var(--p-input-placeholder-text-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
.p-cascadeselect .p-cascadeselect-label:enabled:focus {
    outline: 0 none; /*  //TODO: */
    box-shadow: none;
}
.p-cascadeselect .p-cascadeselect-trigger {
    background: transparent; /*  //TODO: */
    color: var(--p-input-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
    width: var(--p-input-group-add-on-min-width, 3rem);
    border-top-right-radius: var(--p-border-radius, 6px);
    border-bottom-right-radius: var(--p-border-radius, 6px);
}
.p-cascadeselect.p-invalid.p-component {
    border-color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}

.p-cascadeselect-panel {
    background: var(--p-input-overlay-bg, var(--p-dark-input-list-bg, var(--p-input-list-bg)));
    color: var(--p-input-list-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border: var(--p-input-overlay-border, var(1px solid var(--p-dark-pink-600), var(0 none)));
    border-radius: var(--p-border-radius, 6px);
    box-shadow: var(--p-input-overlay-shadow, var(0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), var(0 2px 12px 0 rgba(0,0,0,.1))));
}
.p-cascadeselect-panel .p-cascadeselect-items {
    padding: var(--p-input-list-padding, .75rem 0);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item {
    margin: var(--p-input-list-item-margin, 0);
    border: var(--p-input-list-item-border, 0 none);
    color: var(--p-input-list-item-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-bg, transparent);
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    border-radius: var(--p-input-list-item-border-radius, 0);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item.p-highlight.p-focus {
    background: var(--p-highlight-focus-bg);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: var(--p-input-list-item-text-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-focus-bg, var(--p-dark-pink-600, var(--p-pink-300)));
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:not(.p-highlight):not(.p-disabled):hover {
    color: var(--p-input-list-item-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content {
    padding: var(--p-input-list-item-padding, .75rem 0);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-group-icon {
    font-size: var(--p-menuitem-submenu-icon-font-size, .875rem);
}
.p-input-filled .p-cascadeselect {
    background: var(--p-input-filled-bg, var(--p-dark-pink-600, var(--p-pink-200)));
}
.p-input-filled .p-cascadeselect:not(.p-disabled):hover {
    background-color: var(--p-input-filled-hover-bg, var(--p-dark-input-filled-bg, var(--p-input-filled-bg)));
}
.p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {
    background-color: var(--p-input-filled-focus-bg, var(--p-dark-input-filled-bg, var(--p-pink-0)));
}
`;
