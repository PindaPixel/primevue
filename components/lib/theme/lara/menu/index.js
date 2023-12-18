export default `
.p-menu {
    padding: var(--p-vertical-menu-padding, var(.25rem 0, var(.5rem 0)));
    background: var(--p-menu-bg, var(--p-dark-pink-700, var(--p-pink-0)));
    color: var(--p-menu-text-color, var(--p-dark-pink-0, var(--p-pink-700)));//TODO: delete this line
    border: var(--p-menu-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    border-radius: var(--p-border-radius, 6px);
    min-width: var(--p-menu-width, 12.5rem);
}
.p-menu .p-menuitem > .p-menuitem-content {
    color: var(--p-menuitem-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    border-radius: var(--p-menuitem-border-radius, 0);
}
.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: var(--p-menuitem-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    padding: var(--p-menuitem-padding, .75rem 1.25rem);
    user-select: var(--p-menu-user-select, none);
}
.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: var(--p-menuitem-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
.p-menu .p-menuitem.p-highlight > .p-menuitem-content {
    color: var(--p-menuitem-text-active-color, var(--p-dark-highlight-text-color, var(--p-highlight-text-color)));
    background: var(--p-menuitem-active-bg, var(--p-dark-highlight-bg, var(--p-highlight-bg)));
}
.p-menu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-active-color, var(--p-dark-highlight-text-color, var(--p-highlight-text-color)));
}
.p-menu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-menu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-active-color, var(--p-dark-highlight-text-color, var(--p-highlight-text-color)));
}
.p-menu .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: var(--p-menuitem-active-focus-bg, var(--p-dark-highlight-focus-bg, var(--p-highlight-focus-bg)));
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: var(--p-menuitem-text-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-menuitem-focus-bg, var(--p-dark-pink-600, var(--p-pink-300)));
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-menuitem-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-menuitem-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-hover-color, var(--p-dark-pink-0, var(--p-pink-600)));
}
.p-menu.p-menu-overlay {
    background: var(--p-overlay-menu-bg, var(--p-dark-pink-700, var(--p-pink-0)));
    border: var(--p-overlay-menu-border, 1px solid var(--p-dark-pink-600, var(0 none)));
    box-shadow: var(--p-overlay-menu-shadow, 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), var(0 2px 12px 0 rgba(0,0,0,.1)));
}
.p-menu .p-submenu-header {
    margin: var(--p-submenu-header-margin, 0);
    padding: var(--p-submenu-header-padding, .75rem 1.25rem);
    color: var(--p-submenu-header-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
    background: var(--p-submenu-header-bg, var(--p-dark-pink-700, var(--p-pink-0)));
    font-weight: var(--p-submenu-header-font-weight, 700);
    border-top-right-radius: var(--p-submenu-header-border-radius, 0);
    border-top-left-radius: var(--p-submenu-header-border-radius, 0);
}
.p-menu .p-menuitem-separator {
    border-top: var(--p-divider, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    margin: var(--p-menu-separator-margin, .25rem 0);
}
`;
