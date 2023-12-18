export default `
.p-menubar {
    padding: var(--p-horizontal-menu-padding, .5rem);
    background: var(--p-horizontal-menu-bg, var(--p-dark-pink-700, var(--p-pink-100)));
    color: var(--p-horizontal-menu-text-color, var(--p-dark-pink-0, var(--p-pink-700)));//TODO: delete this line
    border: var(--p-horizontal-menu-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    border-radius: var(--p-border-radius, 6px);
}
.p-menubar .p-menubar-root-list {
    outline: var(--p-menu-outline, 0 none);
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content {
    color: var(--p-horizontal-menu-root-menuitem-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    border-radius: var(--p-horizontal-menu-root-menuitem-border-radius, 0);
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link {
    padding: var(--p-horizontal-menu-root-menuitem-padding, .5rem);
    user-select: var(--p-menu-user-select, none);
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-horizontal-menu-root-menuitem-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: var(--p-horizontal-menu-root-menuitem-icon-color, var(--p-dark-pink-0, var(--p-pink-600)));
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-horizontal-menu-root-menuitem-icon-color, var(--p-dark-pink-0, var(--p-pink-600)));
    margin-left: var(--p-inline-spacing, .5rem);
}
.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-horizontal-menu-root-menuitem-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-horizontal-menu-root-menuitem-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: var(--p-horizontal-menu-root-menuitem-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link  .p-menuitem-icon,
.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: var(--p-horizontal-menu-root-menuitem-icon-hover-color, var(--p-dark-pink-0, var(--p-pink-600)));
}
.p-menubar .p-menuitem > .p-menuitem-content {
    color: var(--p-menuitem-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    border-radius: var(--p-menuitem-border-radius, 0);
}
.p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: var(--p-menuitem-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    padding: var(--p-menuitem-padding, .75rem 1.25rem);
    user-select: var(--p-menu-user-select, none);
}
.p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: var(--p-menuitem-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
.p-menubar .p-menuitem.p-highlight > .p-menuitem-content {
    color: var(--p-menuitem-text-active-color, var(--p-dark-highlight-text-color, var(--p-highlight-text-color)));
    background: var(--p-menuitem-active-bg, var(--p-dark-highlight-bg, var(--p-highlight-bg)));
}
.p-menubar .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-active-color, var(--p-dark-highlight-text-color, var(--p-highlight-text-color)));
}
.p-menubar .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-menubar .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-active-color, var(--p-dark-highlight-text-color, var(--p-highlight-text-color)));
}
.p-menubar .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: var(--p-menuitem-active-focus-bg, var(--p-dark-highlight-focus-bg, var(--p-highlight-focus-bg)));
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: var(--p-menuitem-text-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-menuitem-focus-bg, var(--p-dark-pink-600, var(--p-pink-300)));
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus  > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-focus-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-menuitem-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-menuitem-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: var(--p-menuitem-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: var(--p-menuitem-icon-hover-color, var(--p-dark-pink-0, var(--p-pink-600)));
}
.p-menubar .p-submenu-list {
    padding: var(--p-vertical-menu-padding, var(.25rem 0, var(.5rem 0)));
    background: var(--p-overlay-menu-bg, var(--p-dark-pink-700, var(--p-pink-0)));
    border: var(--p-overlay-menu-border, 1px solid var(--p-dark-pink-600, var(0 none)));
    box-shadow: var(--p-overlay-menu-shadow, 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), var(0 2px 12px 0 rgba(0,0,0,.1)));
    min-width: var(--p-menu-width, 12.5rem);
}
.p-menubar .p-submenu-list .p-menuitem-separator {
    border-top: var(--p-divider);//TODO:
    margin: var(--p-menu-separator-margin, .25rem 0);
}
.p-menubar .p-submenu-list .p-submenu-icon {
    font-size: var(--p-menuitem-submenu-icon-font-size, .875rem);
}
.p-menubar.p-menubar-mobile .p-menubar-button {
    width: var(--p-action-icon-width, 2rem);//TODO:
    height: var(--p-action-icon-height, 2rem);
    color: var(--p-horizontal-menu-root-menuitem-icon-color, var(--p-dark-pink-0, var(--p-pink-600)));
    border-radius: var(--p-action-icon-border-radius, 50%);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-menubar.p-menubar-mobile .p-menubar-button:hover {
    color: var(--p-horizontal-menu-root-menuitem-icon-hover-color, var(--p-dark-pink-0, var(--p-pink-600)));
    background: var(--p-horizontal-menu-root-menuitem-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-menubar.p-menubar-mobile .p-menubar-button:focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-menubar.p-menubar-mobile .p-menubar-root-list {
    padding: var(--p-vertical-menu-padding, var(.25rem 0, var(.5rem 0)));
    background: var(--p-overlay-menu-bg, var(--p-dark-pink-700, var(--p-pink-0)));
    border: var(--p-overlay-menu-border, 1px solid var(--p-dark-pink-600, var(0 none)));
    box-shadow: var(--p-overlay-menu-shadow, 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), var(0 2px 12px 0 rgba(0,0,0,.1)));
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem-separator {
    border-top: var(--p-divider, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    margin: var(--p-menu-separator-margin, .25rem 0);
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-icon {
    font-size: var(--p-menuitem-submenu-icon-font-size, .875rem);
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-left: auto;//TODO:
    transition: transform var(--p-transition-duration, .2s);
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem.p-menuitem-active > .p-menuitem-content > .p-menuitem-link > .p-submenu-icon {
    transform: rotate(-180deg);//TODO:
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-submenu-icon {
    transition: transform var(--p-transition-duration, .2s);
    transform: rotate(90deg);
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-content > .p-menuitem-link > .p-submenu-icon {
    transform: rotate(-90deg);
}
//TODO:
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: calc(var(--p-menuitem-padding-left) * 3);
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: calc(var(--p-menuitem-padding-left) * 5);
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: calc(var(--p-menuitem-padding-left) * 7);
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: calc(var(--p-menuitem-padding-left) * 9);
}
.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: calc(var(--p-menuitem-padding-left) * 11);
}
`;
