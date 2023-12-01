export default `
.p-contextmenu {
    padding: 0.5rem 0;
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    min-width: 12.5rem;
}

.p-contextmenu .p-contextmenu-root-list {
    outline: 0 none;
}

.p-contextmenu .p-submenu-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
}

.p-contextmenu .p-menuitem>.p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
}

.p-contextmenu .p-menuitem>.p-menuitem-content .p-menuitem-link {
    color: #4b5563;
    padding: 0.75rem 1.25rem;
    user-select: none;
}

.p-contextmenu .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-contextmenu .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
}

.p-contextmenu .p-menuitem>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
}

.p-contextmenu .p-menuitem.p-highlight>.p-menuitem-content {
    color: #0f766e;
    background: #0f766e;
}

.p-contextmenu .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #0f766e;
}

.p-contextmenu .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-contextmenu .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #0f766e;
}

.p-contextmenu .p-menuitem.p-highlight.p-focus>.p-menuitem-content {
    background: rgba(20, 184, 166, 0.24);
}

.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content {
    color: #4b5563;
    background: #e5e7eb;
}

.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #4b5563;
}

.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
}

.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
}

.p-contextmenu .p-menuitem-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
}

.p-contextmenu .p-submenu-icon {
    font-size: 0.875rem;
}

.p-contextmenu .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
}
`;
