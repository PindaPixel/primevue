export default `
.p-listbox {
    background: var(--p-input-list-bg);
    color: var(--p-input-list-text-color);
    border: var(--p-input-list-border);
    border-radius: var(--p-border-radius);
    transition: var(--p-form-element-transition);
}
.p-listbox .p-listbox-header {
    padding: var(--p-input-list-header-padding);
    border-bottom: var(--p-input-list-header-border);
    color: var(--p-input-list-header-text-color);
    background: var(--p-input-list-header-bg);
    margin: var(--p-input-list-header-margin);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-listbox .p-listbox-header .p-listbox-filter {
    padding-right: "nth(var(--p-input-padding), 2) + var(--p-prime-icon-font-size)";
}
.p-listbox .p-listbox-header .p-listbox-filter-icon {
    right: "nth(var(--p-input-padding), 2)";
    color: var(--p-input-icon-color);
}
.p-listbox .p-listbox-list {
    padding: var(--p-input-list-padding);
    outline: 0 none;
}
.p-listbox .p-listbox-list .p-listbox-item {
    margin: var(--p-input-list-item-margin);
    padding: var(--p-input-list-item-padding);
    border: var(--p-input-list-item-border);
    color: var(--p-input-list-item-text-color);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-input-list-item-border-radius);
}
.p-listbox .p-listbox-list .p-listbox-item.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-listbox .p-listbox-list .p-listbox-item-group {
    margin: var(--p-submenu-header-margin);
    padding: var(--p-submenu-header-padding);
    color: var(--p-submenu-header-text-color);
    background: var(--p-submenu-header-bg);
    font-weight: var(--p-submenu-header-font-weight);
}
.p-listbox .p-listbox-list .p-listbox-empty-message {
    padding: var(--p-input-list-item-padding);
    color: var(--p-input-list-item-text-color);
    background: var(--p-input-list-item-bg);
}
.p-listbox:not(.p-disabled) .p-listbox-item.p-highlight.p-focus {
    background: var(--p-highlight-focus-bg);
}
.p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: var(--p-input-list-item-text-focus-color);
    background: var(--p-input-list-item-focus-bg);
}
.p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
    color: var(--p-input-list-item-text-hover-color);
    background: var(--p-input-list-item-hover-bg);
}
.p-listbox.p-focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color);
}
.p-listbox.p-invalid {
    border-color: var(--p-input-error-border-color);
}
`;
