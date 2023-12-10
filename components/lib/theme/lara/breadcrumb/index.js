export default `
.p-breadcrumb {
    background: var(--p-breadcrumb-bg);
    border: var(--p-breadcrumb-border);
    border-radius: var(--p-border-radius);
    padding: var(--p-breadcrumb-padding);
}
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link {
    transition: var(--p-list-item-transition);
    border-radius: var(--p-border-radius);
}
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-text {
    color: var(--p-breadcrumb-item-text-color);
}
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-icon {
    color: var(--p-breadcrumb-item-icon-color);
}
.p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
    margin: 0 var(--p-inline-spacing) 0 var(--p-inline-spacing);
    color: var(--p-breadcrumb-separator-color);
}
.p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-text {
    color: var(--p-breadcrumb-last-item-text-color);
}
.p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-icon {
    color: var(--p-breadcrumb-last-item-icon-color);
}
`;
