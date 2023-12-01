export default `
.p-menubar {
    padding: 0.5rem;
    background: #f9fafb;
    color: #4b5563;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
}

.p-menubar .p-menubar-root-list {
    outline: 0 none;
}

.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 6px;
}

.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-content .p-menuitem-link {
    padding: 0.75rem 1.25rem;
    user-select: none;
}

.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
}

.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
    margin-left: 0.5rem;
}

.p-menubar .p-menubar-root-list>.p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
}

.p-menubar .p-menubar-root-list>.p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-menubar .p-menubar-root-list>.p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
.p-menubar .p-menubar-root-list>.p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
}

.p-menubar .p-menuitem>.p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
}

.p-menubar .p-menuitem>.p-menuitem-content .p-menuitem-link {
    color: #4b5563;
    padding: 0.75rem 1.25rem;
    user-select: none;
}

.p-menubar .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-menubar .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
}

.p-menubar .p-menuitem>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
}

.p-menubar .p-menuitem.p-highlight>.p-menuitem-content {
    color: #0f766e;
    background: #0f766e;
}

.p-menubar .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #0f766e;
}

.p-menubar .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-menubar .p-menuitem.p-highlight>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #0f766e;
}

.p-menubar .p-menuitem.p-highlight.p-focus>.p-menuitem-content {
    background: rgba(20, 184, 166, 0.24);
}

.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content {
    color: #4b5563;
    background: #e5e7eb;
}

.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-menuitem-icon,
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #4b5563;
}

.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
}

.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
}

.p-menubar .p-submenu-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    min-width: 12.5rem;
}

.p-menubar .p-submenu-list .p-menuitem-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
}

.p-menubar .p-submenu-list .p-submenu-icon {
    font-size: 0.875rem;
}

.p-menubar.p-menubar-mobile .p-menubar-button {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

.p-menubar.p-menubar-mobile .p-menubar-button:hover {
    color: #6b7280;
    background: #f3f4f6;
}

.p-menubar.p-menubar-mobile .p-menubar-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-menubar.p-menubar-mobile .p-menubar-root-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
}

.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-icon {
    font-size: 0.875rem;
}

.p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem.p-menuitem-active>.p-menuitem-content>.p-menuitem-link>.p-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-menuitem-active>.p-menuitem-content>.p-menuitem-link>.p-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: 2.25rem;
}

.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: 3.75rem;
}

.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: 5.25rem;
}

.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: 6.75rem;
}

.p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: 8.25rem;
}
`;
