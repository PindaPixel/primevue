export default `
.p-panelmenu .p-panelmenu-header {
    outline: var(--p-menu-outline, 0 none);
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content {
    border: var(--p-panelmenu-header-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-panelmenu-header-text-color, var(--p-dark-pink-0, var(--p-pink-600)));
    background: var(--p-panelmenu-header-bg, var(--p-dark-pink-800, var(--p-pink-100)));
    border-radius: var(--p-border-radius, 6px);
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action {
    color: var(--p-panelmenu-header-text-color, var(--p-dark-pink-0, var(--p-pink-600)));
    padding: var(--p-panelmenu-header-padding, 1.25rem);
    font-weight: var(--p-panelmenu-header-font-weight, 700);
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action .p-submenu-icon {
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action .p-menuitem-icon {
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-panelmenu .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: inset var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color))); /* //TODO: */
}
.p-panelmenu .p-panelmenu-header:not(.p-highlight):not(.p-disabled):hover .p-panelmenu-header-content {
    background: var(--p-panelmenu-header-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
    border-color: var(--p-panelmenu-header-hover-border-color, var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-panelmenu-header-text-hover-color, var(--p-dark-pink-0, var(--p-pink-800)));
}
.p-panelmenu .p-panelmenu-header:not(.p-disabled).p-highlight .p-panelmenu-header-content {
    background: var(--p-panelmenu-header-active-bg, var(--p-dark-pink-800, var(--p-pink-100)));
    border-color: var(--p-panelmenu-header-active-border-color, var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-panelmenu-header-text-active-color, var(--p-dark-pink-0, var(--p-pink-800)));
    border-bottom-right-radius: var(--p-panelmenu-border-radius, 0);
    border-bottom-left-radius: var(--p-panelmenu-border-radius, 0);
    margin-bottom: var(--p-panelmenu-header-content-margin-bottom, 0);
}
.p-panelmenu .p-panelmenu-header:not(.p-disabled).p-highlight:hover .p-panelmenu-header-content {
    border-color: var(--p-panelmenu-header-active-hover-border-color, var(--p-dark-pink-600, var(--p-pink-300)));
    background: var(--p-panelmenu-header-active-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
    color: var(--p-panelmenu-header-text-active-hover-color, var(--p-dark-pink-0, var(--p-pink-800)));
}
.p-panelmenu .p-panelmenu-content {
    padding: var(--p-vertical-menu-padding, var(.25rem 0, var(.5rem 0)));
    border: var(--p-accordion-content-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    background: var(--p-accordion-content-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    color: var(--p-accordion-content-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border-top: var(--p-panelmenu-content-border-top, 0);
    border-top-right-radius: var(--p-panelmenu-border-radius, 0);
    border-top-left-radius: var(--p-panelmenu-border-radius, 0);
    border-bottom-right-radius: var(--p-border-radius, 6px);
    border-bottom-left-radius: var(--p-border-radius, 6px);
}
.p-panelmenu .p-panelmenu-content .p-panelmenu-root-list {
    outline: var(--p-menu-outline, 0 none);
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content {
    color: var(--p-menuitem-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    border-radius: var(--p-menuitem-border-radius, 0);
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: var(--p-menuitem-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    padding: var(--p-menuitem-padding, .75rem 1.25rem);
    user-select: var(--p-menu-user-select, none);
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: var(--p-menuitem-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content {
    color: var(--p-menuitem-text-active-color, var(--p-dark-highlight-text-color, var(--p-highlight-text-color)));
    background: var(--p-menuitem-active-bg, var(--p-dark-highlight-bg, var(--p-highlight-bg)));
}
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-active-color, var(--p-dark-highlight-text-color, var(--p-highlight-text-color)));
}
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-active-color, var(--p-dark-highlight-text-color, var(--p-highlight-text-color)));
}
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: var(--p-menuitem-active-focus-bg, var(--p-dark-highlight-focus-bg, var(--p-highlight-focus-bg)));
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: var(--p-menuitem-text-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-menuitem-focus-bg, var(--p-dark-pink-600, var(--p-pink-300)));
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-menuitem-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-menuitem-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-panelmenu .p-panelmenu-content .p-menuitem-separator {
    border-top: var(--p-divider, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    margin: var(--p-menu-separator-margin, .25rem 0);
}
.p-panelmenu .p-panelmenu-content .p-submenu-list:not(.p-panelmenu-root-list) {
    padding: var(--p-panelmenu-content-children-padding, 0 0 0 1rem);
}
.p-panelmenu .p-panelmenu-panel {
    margin-bottom: var(--p-panelmenu-spacing, 4px);
}
`;
