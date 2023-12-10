export default `
.p-cascadeselect {
    background: var(--p-input-bg);
    border: var(--p-input-border);
    transition: var(--p-form-element-transition);
    border-radius: var(--p-border-radius);
}
.p-cascadeselect:not(.p-disabled):hover {
    border-color: var(--p-input-hover-border-color);
}
.p-cascadeselect:not(.p-disabled).p-focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color);
}
.p-cascadeselect .p-cascadeselect-label {
    background: transparent;
    border: 0 none;
    padding: var(--p-input-padding);
}
.p-cascadeselect .p-cascadeselect-label.p-placeholder {
    color: var(--p-input-placeholder-text-color);
}
.p-cascadeselect .p-cascadeselect-label:enabled:focus {
    outline: 0 none;
    box-shadow: none;
}
.p-cascadeselect .p-cascadeselect-trigger {
    background: transparent;
    color: var(--p-input-icon-color);
    width: var(--p-input-group-add-on-min-width);
    border-top-right-radius: var(--p-border-radius);
    border-bottom-right-radius: var(--p-border-radius);
}
.p-cascadeselect.p-invalid.p-component {
    border-color: var(--p-input-error-border-color);
}

.p-cascadeselect-panel {
    background: var(--p-input-overlay-bg);
    color: var(--p-input-list-text-color);
    border: var(--p-input-overlay-border);
    border-radius: var(--p-border-radius);
    box-shadow: var(--p-input-overlay-shadow);
}
.p-cascadeselect-panel .p-cascadeselect-items {
    padding: var(--p-input-list-padding);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item {
    margin: var(--p-input-list-item-margin);
    border: var(--p-input-list-item-border);
    color: var(--p-input-list-item-text-color);
    background: var(--p-input-list-item-bg);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-input-list-item-border-radius);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item.p-highlight.p-focus {
    background: var(--p-highlight-focus-bg);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: var(--p-input-list-item-text-focus-color);
    background: var(--p-input-list-item-focus-bg);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:not(.p-highlight):not(.p-disabled):hover {
    color: var(--p-input-list-item-text-hover-color);
    background: var(--p-input-list-item-hover-bg);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content {
    padding: var(--p-input-list-item-padding);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-group-icon {
    font-size: var(--p-menuitem-submenu-icon-font-size);
}
.p-input-filled .p-cascadeselect {
    background: var(--p-input-filled-bg);
}
.p-input-filled .p-cascadeselect:not(.p-disabled):hover {
    background-color: var(--p-input-filled-hover-bg);
}
.p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {
    background-color: var(--p-input-filled-focus-bg);
}
`;
