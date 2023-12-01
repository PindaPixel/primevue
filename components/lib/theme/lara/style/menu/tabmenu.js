export default `
.p-tabmenu .p-tabmenu-nav {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-width: 0 0 2px 0;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
    margin-right: 0;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    border: solid #e5e7eb;
    border-width: 0 0 2px 0;
    border-color: transparent transparent #e5e7eb transparent;
    background: #ffffff;
    color: #6b7280;
    padding: 1.25rem;
    font-weight: 700;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    transition: box-shadow 0.2s;
    margin: 0 0 -2px 0;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link .p-menuitem-icon {
    margin-right: 0.5rem;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.2rem #99f6e4;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
    background: #ffffff;
    border-color: #9ca3af;
    color: #6b7280;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
    background: #ffffff;
    border-color: #14b8a6;
    color: #14b8a6;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
`;
