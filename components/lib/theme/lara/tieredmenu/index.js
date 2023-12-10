export default `
.p-tieredmenu {
    padding: var(--p-vertical-menu-padding);
    background: var(--p-menu-bg);
    color: var(--p-menu-text-color);
    border: var(--p-menu-border);
    border-radius: var(--p-border-radius);
    min-width: var(--p-menu-width);
}
.p-tieredmenu.p-tieredmenu-overlay {
    background: var(--p-overlay-menu-bg);
    border: var(--p-overlay-menu-border);
    box-shadow: var(--p-overlay-menu-shadow);
}
.p-tieredmenu .p-tieredmenu-root-list {
    outline: 0 none;
}
.p-tieredmenu .p-submenu-list {
    padding: var(--p-vertical-menu-padding);
    background: var(--p-overlay-menu-bg);
    border: var(--p-overlay-menu-border);
    box-shadow: var(--p-overlay-menu-shadow);
}
.p-tieredmenu .p-menuitem > .p-menuitem-content {
    color: var(--p-menuitem-text-color);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-menuitem-border-radius);
}
.p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: var(--p-menuitem-text-color);
    padding: var(--p-menuitem-padding);
    user-select: none;
}
.p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-color);
}
.p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: var(--p-menuitem-icon-color);
    margin-right: var(--p-inline-spacing);
}
.p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-color);
}
.p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content {
    color: var(--p-menuitem-text-active-color);
    background: var(--p-menuitem-active-bg);
}
.p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-active-color);
}
.p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-active-color);
}
.p-tieredmenu .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: var(--p-menuitem-active-focus-bg);
}
.p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: var(--p-menuitem-text-focus-color);
    background: var(--p-menuitem-focus-bg);
}
.p-tieredmenu
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-menuitem-text {
    color: var(--p-menuitem-text-focus-color);
}
.p-tieredmenu
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-menuitem-icon,
.p-tieredmenu
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-submenu-icon {
    color: var(--p-menuitem-icon-focus-color);
}
.p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-menuitem-text-hover-color);
    background: var(--p-menuitem-hover-bg);
}
.p-tieredmenu
    .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-menuitem-text {
    color: var(--p-menuitem-text-hover-color);
}
.p-tieredmenu
    .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-menuitem-icon,
.p-tieredmenu
    .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-submenu-icon {
    color: var(--p-menuitem-icon-hover-color);
}
.p-tieredmenu .p-menuitem-separator {
    border-top: var(--p-divider);
    margin: var(--p-menu-separator-margin);
}
.p-tieredmenu .p-submenu-icon {
    font-size: var(--p-menuitem-submenu-icon-font-size);
}
.p-tieredmenu .p-submenu-icon.p-icon {
    width: var(--p-menuitem-submenu-icon-font-size);
    height: var(--p-menuitem-submenu-icon-font-size);
}
`;
