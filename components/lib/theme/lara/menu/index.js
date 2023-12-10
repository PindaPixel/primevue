export default `
.p-menu {
    padding: var(--p-vertical-menu-padding);
    background: var(--p-menu-bg);
    color: var(--p-menu-text-color);
    border: var(--p-menu-border);
    border-radius: var(--p-border-radius);
    min-width: var(--p-menu-width);
}
.p-menu .p-menuitem > .p-menuitem-content {
    color: var(--p-menuitem-text-color);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-menuitem-border-radius);
}
.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: var(--p-menuitem-text-color);
    padding: var(--p-menuitem-padding);
    user-select: none;
}
.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-color);
}
.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: var(--p-menuitem-icon-color);
    margin-right: var(--p-inline-spacing);
}
.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-color);
}
.p-menu .p-menuitem.p-highlight > .p-menuitem-content {
    color: var(--p-menuitem-text-active-color);
    background: var(--p-menuitem-active-bg);
}
.p-menu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-active-color);
}
.p-menu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-menu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-active-color);
}
.p-menu .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: var(--p-menuitem-active-focus-bg);
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: var(--p-menuitem-text-focus-color);
    background: var(--p-menuitem-focus-bg);
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-focus-color);
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-focus-color);
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-menuitem-text-hover-color);
    background: var(--p-menuitem-hover-bg);
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-hover-color);
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-hover-color);
}
.p-menu.p-menu-overlay {
    background: var(--p-overlay-menu-bg);
    border: var(--p-overlay-menu-border);
    box-shadow: var(--p-overlay-menu-shadow);
}
.p-menu .p-submenu-header {
    margin: var(--p-submenu-header-margin);
    padding: var(--p-submenu-header-padding);
    color: var(--p-submenu-header-text-color);
    background: var(--p-submenu-header-bg);
    font-weight: var(--p-submenu-header-font-weight);
    border-top-right-radius: var(--p-submenu-header-border-radius);
    border-top-left-radius: var(--p-submenu-header-border-radius);
}
.p-menu .p-menuitem-separator {
    border-top: var(--p-divider);
    margin: var(--p-menu-separator-margin);
}
`;
