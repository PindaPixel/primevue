export default `
.p-megamenu {
    padding: 0.5rem;
    background: #f9fafb;
    color: #4b5563;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
}

.p-megamenu .p-megamenu-root-list {
    outline: 0 none;
}

.p-megamenu .p-menuitem>.p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
}

.p-megamenu .p-menuitem>.p-menuitem-content .p-menuitem-link {
    color: #4b5563;
    padding: 0.75rem 1.25rem;
    user-select: none;
}

.p-megamenu .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-megamenu .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
}

.p-megamenu .p-menuitem>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
}

.p-megamenu .p-menuitem.p-highlight>.p-menuitem-content {
    color: #0f766e;
    background: #0f766e;
}

.p-megamenu .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #0f766e;
}

.p-megamenu .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-megamenu .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #0f766e;
}

.p-megamenu .p-menuitem.p-highlight.p-focus>.p-menuitem-content {
    background: rgba(20, 184, 166, 0.24);
}

.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content {
    color: #4b5563;
    background: #e5e7eb;
}

.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #4b5563;
}

.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
}

.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
}

.p-megamenu .p-megamenu-panel {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.p-megamenu .p-submenu-header {
    margin: 0;
    padding: 0.75rem 1.25rem;
    color: #374151;
    background: #ffffff;
    font-weight: 700;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
}

.p-megamenu .p-submenu-list {
    padding: 0.5rem 0;
    min-width: 12.5rem;
}

.p-megamenu .p-submenu-list .p-menuitem-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
}

.p-megamenu.p-megamenu-vertical {
    min-width: 12.5rem;
    padding: 0.5rem 0;
}

.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list>.p-menuitem>.p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 6px;
}

.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list>.p-menuitem>.p-menuitem-content .p-menuitem-link {
    padding: 0.75rem 1.25rem;
    user-select: none;
}

.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list>.p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list>.p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
}

.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list>.p-menuitem>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
    margin-left: 0.5rem;
}

.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list>.p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
}

.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list>.p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list>.p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list>.p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
}

.p-megamenu.p-megamenu-mobile.p-megamenu-vertical {
    width: 100%;
    padding: 0.5rem;
}

.p-megamenu.p-megamenu-mobile .p-megamenu-button {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

.p-megamenu.p-megamenu-mobile .p-megamenu-button:hover {
    color: #6b7280;
    background: #f3f4f6;
}

.p-megamenu.p-megamenu-mobile .p-megamenu-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-megamenu.p-megamenu-mobile .p-megamenu-root-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.p-megamenu.p-megamenu-mobile .p-megamenu-root-list .p-menuitem-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
}

.p-megamenu.p-megamenu-mobile .p-megamenu-root-list .p-submenu-icon {
    font-size: 0.875rem;
}

.p-megamenu.p-megamenu-mobile .p-megamenu-root-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu.p-megamenu-mobile .p-megamenu-root-list .p-menuitem.p-menuitem-active>.p-menuitem-content>.p-menuitem-link>.p-submenu-icon {
    transform: rotate(-180deg);
}

.p-megamenu.p-megamenu-mobile .p-megamenu-root-list .p-submenu-list .p-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-megamenu.p-megamenu-mobile .p-megamenu-root-list .p-submenu-list .p-menuitem-active>.p-menuitem-content>.p-menuitem-link>.p-submenu-icon {
    transform: rotate(-90deg);
}

.p-megamenu.p-megamenu-mobile .p-megamenu-root-list .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: 2.25rem;
}
`;
