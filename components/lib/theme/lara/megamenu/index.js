export default `
.p-megamenu {
    padding: var(--p-horizontal-menu-padding);
    background: var(--p-horizontal-menu-bg);
    color: var(--p-horizontal-menu-text-color);
    border: var(--p-horizontal-menu-border);
    border-radius: var(--p-border-radius);
}
.p-megamenu .p-megamenu-root-list {
    outline: 0 none;
}
.p-megamenu .p-menuitem > .p-menuitem-content {
    color: var(--p-menuitem-text-color);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-menuitem-border-radius);
}
.p-megamenu .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: var(--p-menuitem-text-color);
    padding: var(--p-menuitem-padding);
    user-select: none;
}
.p-megamenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-color);
}
.p-megamenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: var(--p-menuitem-icon-color);
    margin-right: var(--p-inline-spacing);
}
.p-megamenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-color);
}
.p-megamenu .p-menuitem.p-highlight > .p-menuitem-content {
    color: var(--p-menuitem-text-active-color);
    background: var(--p-menuitem-active-bg);
}
.p-megamenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-active-color);
}
.p-megamenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-megamenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-active-color);
}
.p-megamenu .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: var(--p-menuitem-active-focus-bg);
}
.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: var(--p-menuitem-text-focus-color);
    background: var(--p-menuitem-focus-bg);
}
.p-megamenu
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-menuitem-text {
    color: var(--p-menuitem-text-focus-color);
}
.p-megamenu
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-menuitem-icon,
.p-megamenu
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-submenu-icon {
    color: var(--p-menuitem-icon-focus-color);
}
.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-menuitem-text-hover-color);
    background: var(--p-menuitem-hover-bg);
}
.p-megamenu
    .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-menuitem-text {
    color: var(--p-menuitem-text-hover-color);
}
.p-megamenu
    .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-menuitem-icon,
.p-megamenu
    .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-submenu-icon {
    color: var(--p-menuitem-icon-hover-color);
}
.p-megamenu .p-megamenu-panel {
    background: var(--p-overlay-menu-bg);
    color: var(--p-menu-text-color);
    border: var(--p-overlay-menu-border);
    box-shadow: var(--p-overlay-menu-shadow);
}
.p-megamenu .p-submenu-header {
    margin: var(--p-submenu-header-margin);
    padding: var(--p-submenu-header-padding);
    color: var(--p-submenu-header-text-color);
    background: var(--p-submenu-header-bg);
    font-weight: var(--p-submenu-header-font-weight);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-megamenu .p-submenu-list {
    padding: var(--p-vertical-menu-padding);
    min-width: var(--p-menu-width);
}
.p-megamenu .p-submenu-list .p-menuitem-separator {
    border-top: var(--p-divider);
    margin: var(--p-menu-separator-margin);
}
.p-megamenu.p-megamenu-vertical {
    min-width: var(--p-menu-width);
    padding: var(--p-vertical-menu-padding);
}
.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content {
    color: var(--p-horizontal-menu-root-menuitem-text-color);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-horizontal-menu-root-menuitem-border-radius);
}
.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link {
    padding: var(--p-horizontal-menu-root-menuitem-padding);
    user-select: none;
}
.p-megamenu.p-megamenu-horizontal
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-content
    .p-menuitem-link
    .p-menuitem-text {
    color: var(--p-horizontal-menu-root-menuitem-text-color);
}
.p-megamenu.p-megamenu-horizontal
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-content
    .p-menuitem-link
    .p-menuitem-icon {
    color: var(--p-horizontal-menu-root-menuitem-icon-color);
    margin-right: var(--p-inline-spacing);
}
.p-megamenu.p-megamenu-horizontal
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-content
    .p-menuitem-link
    .p-submenu-icon {
    color: var(--p-horizontal-menu-root-menuitem-icon-color);
    margin-left: var(--p-inline-spacing);
}
.p-megamenu.p-megamenu-horizontal
    .p-megamenu-root-list
    > .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover {
    color: var(--p-horizontal-menu-root-menuitem-text-hover-color);
    background: var(--p-horizontal-menu-root-menuitem-hover-bg);
}
.p-megamenu.p-megamenu-horizontal
    .p-megamenu-root-list
    > .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-menuitem-text {
    color: var(--p-horizontal-menu-root-menuitem-text-hover-color);
}
.p-megamenu.p-megamenu-horizontal
    .p-megamenu-root-list
    > .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-menuitem-icon,
.p-megamenu.p-megamenu-horizontal
    .p-megamenu-root-list
    > .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-submenu-icon {
    color: var(--p-horizontal-menu-root-menuitem-icon-hover-color);
}
.p-megamenu.p-megamenu-mobile.p-megamenu-vertical {
    width: 100%;
    padding: var(--p-horizontal-menu-padding);
}
.p-megamenu.p-megamenu-mobile .p-megamenu-button {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-horizontal-menu-root-menuitem-icon-color);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
}
.p-megamenu.p-megamenu-mobile .p-megamenu-button:hover {
    color: var(--p-horizontal-menu-root-menuitem-icon-hover-color);
    background: var(--p-horizontal-menu-root-menuitem-hover-bg);
}
.p-megamenu.p-megamenu-mobile .p-megamenu-button:focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-megamenu.p-megamenu-mobile .p-megamenu-root-list {
    padding: var(--p-vertical-menu-padding);
    background: var(--p-overlay-menu-bg);
    border: var(--p-overlay-menu-border);
    box-shadow: var(--p-overlay-menu-shadow);
    /* @todo
  @include nested-submenu-indents(nth(var(--p-menuitem-padding), 1), 2, 2);
  */
}
.p-megamenu.p-megamenu-mobile .p-megamenu-root-list .p-menuitem-separator {
    border-top: var(--p-divider);
    margin: var(--p-menu-separator-margin);
}
.p-megamenu.p-megamenu-mobile .p-megamenu-root-list .p-submenu-icon {
    font-size: var(--p-menuitem-submenu-icon-font-size);
}
.p-megamenu.p-megamenu-mobile .p-megamenu-root-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
    transition: transform var(--p-transition-duration);
}
.p-megamenu.p-megamenu-mobile
    .p-megamenu-root-list
    .p-menuitem.p-menuitem-active
    > .p-menuitem-content
    > .p-menuitem-link
    > .p-submenu-icon {
    transform: rotate(-180deg);
}
.p-megamenu.p-megamenu-mobile .p-megamenu-root-list .p-submenu-list .p-submenu-icon {
    transition: transform var(--p-transition-duration);
    transform: rotate(90deg);
}
.p-megamenu.p-megamenu-mobile
    .p-megamenu-root-list
    .p-submenu-list
    .p-menuitem-active
    > .p-menuitem-content
    > .p-menuitem-link
    > .p-submenu-icon {
    transform: rotate(-90deg);
}
`;
