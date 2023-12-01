export default `
.p-menu {
    padding: 0.5rem 0;
    background: #ffffff;
    color: #4b5563;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    min-width: 12.5rem;
}

.p-menu .p-menuitem>.p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
}

.p-menu .p-menuitem>.p-menuitem-content .p-menuitem-link {
    color: #4b5563;
    padding: 0.75rem 1.25rem;
    user-select: none;
}

.p-menu .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-menu .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
}

.p-menu .p-menuitem>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
}

.p-menu .p-menuitem.p-highlight>.p-menuitem-content {
    color: #0f766e;
    background: #0f766e;
}

.p-menu .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #0f766e;
}

.p-menu .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-menu .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #0f766e;
}

.p-menu .p-menuitem.p-highlight.p-focus>.p-menuitem-content {
    background: rgba(20, 184, 166, 0.24);
}

.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content {
    color: #4b5563;
    background: #e5e7eb;
}

.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #4b5563;
}

.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
}

.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
}

.p-menu.p-menu-overlay {
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.p-menu .p-submenu-header {
    margin: 0;
    padding: 0.75rem 1.25rem;
    color: #374151;
    background: #ffffff;
    font-weight: 700;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
}

.p-menu .p-menuitem-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
}
`;
