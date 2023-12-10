export default `
.p-contextmenu {
    padding: var(--p-vertical-menu-padding);
    background: var(--p-overlay-menu-bg);
    color: var(--p-menu-text-color);
    border: var(--p-overlay-menu-border);
    box-shadow: var(--p-overlay-menu-shadow);
    border-radius: var(--p-border-radius);
    min-width: var(--p-menu-width);
}
.p-contextmenu .p-contextmenu-root-list {
    outline: 0 none;
}
.p-contextmenu .p-submenu-list {
    padding: var(--p-vertical-menu-padding);
    background: var(--p-overlay-menu-bg);
    border: var(--p-overlay-menu-border);
    box-shadow: var(--p-overlay-menu-shadow);
    border-radius: var(--p-border-radius);
}
.p-contextmenu .p-menuitem > .p-menuitem-content {
    color: var(--p-menuitem-text-color);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-menuitem-border-radius);
}
.p-contextmenu .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: var(--p-menuitem-text-color);
    padding: var(--p-menuitem-padding);
    user-select: none;
}
.p-contextmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-color);
}
.p-contextmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: var(--p-menuitem-icon-color);
    margin-right: var(--p-inline-spacing);
}
.p-contextmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-color);
}
.p-contextmenu .p-menuitem.p-highlight > .p-menuitem-content {
    color: var(--p-menuitem-text-active-color);
    background: var(--p-menuitem-active-bg);
}
.p-contextmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-active-color);
}
.p-contextmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-contextmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-active-color);
}
.p-contextmenu .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: var(--p-menuitem-active-focus-bg);
}
.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: var(--p-menuitem-text-focus-color);
    background: var(--p-menuitem-focus-bg);
}
.p-contextmenu
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-menuitem-text {
    color: var(--p-menuitem-text-focus-color);
}
.p-contextmenu
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-menuitem-icon,
.p-contextmenu
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-submenu-icon {
    color: var(--p-menuitem-icon-focus-color);
}
.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-menuitem-text-hover-color);
    background: var(--p-menuitem-hover-bg);
}
.p-contextmenu
    .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-menuitem-text {
    color: var(--p-menuitem-text-hover-color);
}
.p-contextmenu
    .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-menuitem-icon,
.p-contextmenu
    .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-submenu-icon {
    color: var(--p-menuitem-icon-hover-color);
}
.p-contextmenu .p-menuitem-separator {
    border-top: var(--p-divider);
    margin: var(--p-menu-separator-margin);
}
.p-contextmenu .p-submenu-icon {
    font-size: var(--p-menuitem-submenu-icon-font-size);
}
.p-contextmenu .p-submenu-icon.p-icon {
    width: var(--p-menuitem-submenu-icon-font-size);
    height: var(--p-menuitem-submenu-icon-font-size);
}
`;
