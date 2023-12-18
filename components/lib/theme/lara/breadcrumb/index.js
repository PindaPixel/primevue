export default `
.p-breadcrumb {
    background: var(--p-breadcrumb-bg, var(--p-dark-pink-700, var(--p-pink-0)));
    border: var(--p-breadcrumb-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    border-radius: var(--p-border-radius, 6px);
    padding: var(--p-breadcrumb-padding, 1rem);
}
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link {
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    border-radius: var(--p-border-radius, 6px);
}
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-text {
    color: var(--p-breadcrumb-item-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-icon {
    color: var(--p-breadcrumb-item-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
.p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
    margin: var(--p-breadcrumb-separator-margin, 0 .5rem);
    color: var(--p-breadcrumb-separator-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-text {
    color: var(--p-breadcrumb-last-item-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-icon {
    color: var(--p-breadcrumb-last-item-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
`;
