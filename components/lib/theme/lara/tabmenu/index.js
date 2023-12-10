export default `
.p-tabmenu .p-tabmenu-nav {
    background: var(--p-tabview-nav-bg);
    border: var(--p-tabview-nav-border);
    border-width: var(--p-tabview-nav-border-width);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
    margin-right: var(--p-tabview-header-spacing);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    border: var(--p-tabview-header-border);
    border-width: var(--p-tabview-header-border-width);
    border-color: var(--p-tabview-header-border-color);
    background: var(--p-tabview-header-bg);
    color: var(--p-tabview-header-text-color);
    padding: var(--p-tabview-header-padding);
    font-weight: var(--p-tabview-header-font-weight);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
    transition: var(--p-list-item-transition);
    margin: var(--p-tabview-header-margin);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link .p-menuitem-icon {
    margin-right: var(--p-inline-spacing);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: inset var(--p-focus-shadow);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
    background: var(--p-tabview-header-hover-bg);
    border-color: var(--p-tabview-header-hover-border-color);
    color: var(--p-tabview-header-text-hover-color);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
    background: var(--p-tabview-header-active-bg);
    border-color: var(--p-tabview-header-active-border-color);
    color: var(--p-tabview-header-text-active-color);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    transition:
        background-color var(--p-transition-duration),
        border-color var(--p-transition-duration),
        box-shadow var(--p-transition-duration);
}
`;
