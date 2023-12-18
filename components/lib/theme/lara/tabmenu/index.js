export default `
.p-tabmenu .p-tabmenu-nav {
    background: var(--p-tabmenu-nav-bg, var(transparent, var(--p-pink-0)));
    border: var(--p-tabmenu-nav-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    border-width: var(--p-tabmenu-nav-border-width, 0 0 2px 0);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
    margin-right: var(--p-tabmenu-item-spacing, 0);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    border: var(--p-tabmenu-item-border, var(--p-dark-pink-600, var(--p-pink-300)));
    border-width: var(--p-tabmenu-item-border-width, 0 0 2px 0);
    border-color: var(--p-tabmenu-item-border-color, transparent transparent var(--p-dark-pink-600, var(--p-pink-300)) transparent);
    background: var(--p-tabmenu-item-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    color: var(--p-tabmenu-item-text-color, var(--p-dark-pink-100, var(--p-pink-600)));
    padding: var(--p-tabmenu-item-padding, 1.25rem);
    font-weight: var(--p-tabmenu-item-font-weight, 700);
    border-top-right-radius: var(--p-border-radius, 6px);
    border-top-left-radius: var(--p-border-radius, 6px);
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    margin: var(--p-tabmenu-item-margin, 0 0 -2px 0);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link .p-menuitem-icon {
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
    background: var(--p-tabmenu-item-hover-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    border-color: var(--p-tabmenu-item-hover-border-color, var(--p-dark-primary-color, var(--p-pink-500)));
    color: var(--p-tabmenu-item-text-hover-color, var(--p-dark-pink-0, var(--p-pink-600)));
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
    background: var(--p-tabmenu-item-active-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    border-color: var(--p-tabmenu-item-active-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
    color: var(--p-tabmenu-item-text-active-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    transition:  background-color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration);
}
`;
