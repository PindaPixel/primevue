export default `
.p-panelmenu .p-panelmenu-header {
    outline: 0 none;
}

.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content {
    border: 1px solid #e5e7eb;
    color: #6b7280;
    background: #f9fafb;
    border-radius: 6px;
    transition: box-shadow 0.2s;
}

.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action {
    color: #6b7280;
    padding: 1.25rem;
    font-weight: 700;
}

.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action .p-submenu-icon {
    margin-right: 0.5rem;
}

.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action .p-menuitem-icon {
    margin-right: 0.5rem;
}

.p-panelmenu .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.2rem #99f6e4;
}

.p-panelmenu .p-panelmenu-header:not(.p-highlight):not(.p-disabled):hover .p-panelmenu-header-content {
    background: #f3f4f6;
    border-color: #e5e7eb;
    color: #374151;
}

.p-panelmenu .p-panelmenu-header:not(.p-disabled).p-highlight .p-panelmenu-header-content {
    background: #f9fafb;
    border-color: #e5e7eb;
    color: #374151;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: 0;
}

.p-panelmenu .p-panelmenu-header:not(.p-disabled).p-highlight:hover .p-panelmenu-header-content {
    border-color: #e5e7eb;
    background: #f3f4f6;
    color: #374151;
}

.p-panelmenu .p-panelmenu-content {
    padding: 0.5rem 0;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
}

.p-panelmenu .p-panelmenu-content .p-panelmenu-root-list {
    outline: 0 none;
}

.p-panelmenu .p-panelmenu-content .p-menuitem>.p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
}

.p-panelmenu .p-panelmenu-content .p-menuitem>.p-menuitem-content .p-menuitem-link {
    color: #4b5563;
    padding: 0.75rem 1.25rem;
    user-select: none;
}

.p-panelmenu .p-panelmenu-content .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-panelmenu .p-panelmenu-content .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
}

.p-panelmenu .p-panelmenu-content .p-menuitem>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
}

.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight>.p-menuitem-content {
    color: #0f766e;
    background: #0f766e;
}

.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #0f766e;
}

.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #0f766e;
}

.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight.p-focus>.p-menuitem-content {
    background: rgba(20, 184, 166, 0.24);
}

.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content {
    color: #4b5563;
    background: #e5e7eb;
}

.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #4b5563;
}

.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
}

.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
}

.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-right: 0.5rem;
}

.p-panelmenu .p-panelmenu-content .p-menuitem-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
}

.p-panelmenu .p-panelmenu-content .p-submenu-list:not(.p-panelmenu-root-list) {
    padding: 0 0 0 1rem;
}

.p-panelmenu .p-panelmenu-panel {
    margin-bottom: 4px;
}
`;
