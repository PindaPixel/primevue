export default `
.p-breadcrumb {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 1rem;
}

.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link {
    transition: box-shadow 0.2s;
    border-radius: 6px;
}

.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
}

.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
}

.p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
    margin: 0 0.5rem 0 0.5rem;
    color: #4b5563;
}

.p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-text {
    color: #4b5563;
}

.p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-icon {
    color: #6b7280;
}
`;
