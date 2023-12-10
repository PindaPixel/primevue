export default `
.p-panelmenu .p-panelmenu-header {
    outline: 0 none;
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content {
    border: var(--p-accordion-header-border);
    color: var(--p-accordion-header-text-color);
    background: var(--p-accordion-header-bg);
    border-radius: var(--p-border-radius);
    transition: var(--p-list-item-transition);
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action {
    color: var(--p-accordion-header-text-color);
    padding: var(--p-accordion-header-padding);
    font-weight: var(--p-accordion-header-font-weight);
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action .p-submenu-icon {
    margin-right: var(--p-inline-spacing);
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action .p-menuitem-icon {
    margin-right: var(--p-inline-spacing);
}
.p-panelmenu .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: inset var(--p-focus-shadow);
}
.p-panelmenu .p-panelmenu-header:not(.p-highlight):not(.p-disabled):hover .p-panelmenu-header-content {
    background: var(--p-accordion-header-hover-bg);
    border-color: var(--p-accordion-header-hover-border-color);
    color: var(--p-accordion-header-text-hover-color);
}
.p-panelmenu .p-panelmenu-header:not(.p-disabled).p-highlight .p-panelmenu-header-content {
    background: var(--p-accordion-header-active-bg);
    border-color: var(--p-accordion-header-active-border-color);
    color: var(--p-accordion-header-text-active-color);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: 0;
}
.p-panelmenu .p-panelmenu-header:not(.p-disabled).p-highlight:hover .p-panelmenu-header-content {
    border-color: var(--p-accordion-header-active-hover-border-color);
    background: var(--p-accordion-header-active-hover-bg);
    color: var(--p-accordion-header-text-active-hover-color);
}
.p-panelmenu .p-panelmenu-content {
    padding: var(--p-vertical-menu-padding);
    border: var(--p-accordion-content-border);
    background: var(--p-accordion-content-bg);
    color: var(--p-accordion-content-text-color);
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}
.p-panelmenu .p-panelmenu-content .p-panelmenu-root-list {
    outline: 0 none;
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content {
    color: var(--p-menuitem-text-color);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-menuitem-border-radius);
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: var(--p-menuitem-text-color);
    padding: var(--p-menuitem-padding);
    user-select: none;
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-color);
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: var(--p-menuitem-icon-color);
    margin-right: var(--p-inline-spacing);
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-color);
}
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content {
    color: var(--p-menuitem-text-active-color);
    background: var(--p-menuitem-active-bg);
}
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-active-color);
}
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-active-color);
}
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: var(--p-menuitem-active-focus-bg);
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: var(--p-menuitem-text-focus-color);
    background: var(--p-menuitem-focus-bg);
}
.p-panelmenu
    .p-panelmenu-content
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-menuitem-text {
    color: var(--p-menuitem-text-focus-color);
}
.p-panelmenu
    .p-panelmenu-content
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-menuitem-icon,
.p-panelmenu
    .p-panelmenu-content
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-submenu-icon {
    color: var(--p-menuitem-icon-focus-color);
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-menuitem-text-hover-color);
    background: var(--p-menuitem-hover-bg);
}
.p-panelmenu
    .p-panelmenu-content
    .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-menuitem-text {
    color: var(--p-menuitem-text-hover-color);
}
.p-panelmenu
    .p-panelmenu-content
    .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-menuitem-icon,
.p-panelmenu
    .p-panelmenu-content
    .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-submenu-icon {
    color: var(--p-menuitem-icon-hover-color);
}
.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-right: var(--p-inline-spacing);
}
.p-panelmenu .p-panelmenu-content .p-menuitem-separator {
    border-top: var(--p-divider);
    margin: var(--p-menu-separator-margin);
}
.p-panelmenu .p-panelmenu-content .p-submenu-list:not(.p-panelmenu-root-list) {
    padding: var(--p-tree-node-children-padding);
}
.p-panelmenu .p-panelmenu-panel {
    margin-bottom: var(--p-accordion-spacing);
}
`;
