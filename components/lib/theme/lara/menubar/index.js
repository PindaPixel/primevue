export default `
.p-menubar {
    padding: var(--p-horizontal-menu-padding);
    background: var(--p-horizontal-menu-bg);
    color: var(--p-horizontal-menu-text-color);
    border: var(--p-horizontal-menu-border);
    border-radius: var(--p-border-radius);
}
.p-menubar .p-menubar-root-list {
    outline: 0 none;
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content {
    color: var(--p-horizontal-menu-root-menuitem-text-color);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-horizontal-menu-root-menuitem-border-radius);
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link {
    padding: var(--p-horizontal-menu-root-menuitem-padding);
    user-select: none;
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-horizontal-menu-root-menuitem-text-color);
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: var(--p-horizontal-menu-root-menuitem-icon-color);
    margin-right: var(--p-inline-spacing);
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-horizontal-menu-root-menuitem-icon-color);
    margin-left: var(--p-inline-spacing);
}
.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-horizontal-menu-root-menuitem-text-hover-color);
    background: var(--p-horizontal-menu-root-menuitem-hover-bg);
}
.p-menubar
    .p-menubar-root-list
    > .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-menuitem-text {
    color: var(--p-horizontal-menu-root-menuitem-text-hover-color);
}
.p-menubar
    .p-menubar-root-list
    > .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-menuitem-icon,
.p-menubar
    .p-menubar-root-list
    > .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-submenu-icon {
    color: var(--p-horizontal-menu-root-menuitem-icon-hover-color);
}
.p-menubar .p-menuitem > .p-menuitem-content {
    color: var(--p-menuitem-text-color);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-menuitem-border-radius);
}
.p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: var(--p-menuitem-text-color);
    padding: var(--p-menuitem-padding);
    user-select: none;
}
.p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-color);
}
.p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: var(--p-menuitem-icon-color);
    margin-right: var(--p-inline-spacing);
}
.p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-color);
}
.p-menubar .p-menuitem.p-highlight > .p-menuitem-content {
    color: var(--p-menuitem-text-active-color);
    background: var(--p-menuitem-active-bg);
}
.p-menubar .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-active-color);
}
.p-menubar .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-menubar .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-active-color);
}
.p-menubar .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: var(--p-menuitem-active-focus-bg);
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: var(--p-menuitem-text-focus-color);
    background: var(--p-menuitem-focus-bg);
}
.p-menubar
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-menuitem-text {
    color: var(--p-menuitem-text-focus-color);
}
.p-menubar
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-menuitem-icon,
.p-menubar
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
    > .p-menuitem-content
    .p-menuitem-link
    .p-submenu-icon {
    color: var(--p-menuitem-icon-focus-color);
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-menuitem-text-hover-color);
    background: var(--p-menuitem-hover-bg);
}
.p-menubar
    .p-menuitem:not(.p-highlight):not(.p-disabled)
    > .p-menuitem-content:hover
    .p-menuitem-link
    .p-menuitem-text {
    color: var(--p-menuitem-text-hover-color);
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-hover-color);
}
.p-menubar .p-submenu-list {
    padding: var(--p-vertical-menu-padding);
    background: var(--p-overlay-menu-bg);
    border: var(--p-overlay-menu-border);
    box-shadow: var(--p-overlay-menu-shadow);
    min-width: var(--p-menu-width);
}
.p-menubar .p-submenu-list .p-menuitem-separator {
    border-top: var(--p-divider);
    margin: var(--p-menu-separator-margin);
}
.p-menubar .p-submenu-list .p-submenu-icon {
    font-size: var(--p-menuitem-submenu-icon-font-size);
}
.p-menubar.p-menubar-mobile .p-menubar-button {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-horizontal-menu-root-menuitem-icon-color);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
}
.p-menubar.p-menubar-mobile .p-menubar-button:hover {
    color: var(--p-horizontal-menu-root-menuitem-icon-hover-color);
    background: var(--p-horizontal-menu-root-menuitem-hover-bg);
}
.p-menubar.p-menubar-mobile .p-menubar-button:focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-menubar.p-menubar-mobile .p-menubar-root-list {
    padding: var(--p-vertical-menu-padding);
    background: var(--p-overlay-menu-bg);
    border: var(--p-overlay-menu-border);
    box-shadow: var(--p-overlay-menu-shadow);
    /* @todo
  @include nested-submenu-indents(nth(var(--p-menuitem-padding), 1), 2, 10);
  */
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem-separator {
    border-top: var(--p-divider);
    margin: var(--p-menu-separator-margin);
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-icon {
    font-size: var(--p-menuitem-submenu-icon-font-size);
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
    transition: transform var(--p-transition-duration);
}
.p-menubar.p-menubar-mobile
    .p-menubar-root-list
    .p-menuitem.p-menuitem-active
    > .p-menuitem-content
    > .p-menuitem-link
    > .p-submenu-icon {
    transform: rotate(-180deg);
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-submenu-icon {
    transition: transform var(--p-transition-duration);
    transform: rotate(90deg);
}
.p-menubar.p-menubar-mobile
    .p-menubar-root-list
    .p-submenu-list
    .p-menuitem-active
    > .p-menuitem-content
    > .p-menuitem-link
    > .p-submenu-icon {
    transform: rotate(-90deg);
}
`;
