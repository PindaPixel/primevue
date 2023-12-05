export default `
.p-accordion .p-accordion-header .p-accordion-header-link {
    padding: 1.25rem;
    border: 1px solid #e5e7eb;
    color: #6b7280;
    background: #f9fafb;
    font-weight: 700;
    border-radius: 6px;
    transition: box-shadow 0.2s;
}

.p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
    margin-right: 0.5rem;
}

.p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.2rem #99f6e4;
}

.p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
    background: #f3f4f6;
    border-color: #e5e7eb;
    color: #374151;
}

.p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    background: #f9fafb;
    border-color: #e5e7eb;
    color: #374151;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
    border-color: #e5e7eb;
    background: #f3f4f6;
    color: #374151;
}

.p-accordion .p-accordion-content {
    padding: 1.25rem;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
}

.p-accordion .p-accordion-tab {
    margin-bottom: 4px;
}

.p-accordion .p-accordion-header .p-accordion-header-link {
    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
`;
