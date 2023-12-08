export default `
.p-accordion .p-accordion-header .p-accordion-header-link {
    padding: 1.25rem;
    border: 1px solid var(--p-dark-shade-600, var(--p-shade-300));
    color: var(--p-dark-shade-0, var(--p-shade-600));
    background: var(--p-dark-shade-800, var(--p-shade-100));
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
    box-shadow: inset 0 0 0 0.2rem var(--p-primary-lightest-color, var(--p-primary-light-color));
}
.p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
    background: var(--p-dark-hover-bg, var(--p-shade-200));
    border-color: var(--p-dark-shade-600, var(--p-shade-300));
    color: var(--p-dark-shade-0, var(--p-shade-800));
}
.p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    background: var(--p-dark-shade-800, var(--p-shade-100));
    border-color: var(--p-dark-shade-600, var(--p-shade-300));
    color: var(--p-dark-shade-0, var(--p-shade-800));
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
    border-color: var(--p-dark-shade-600, var(--p-shade-300));
    background: var(--p-dark-hover-bg, var(--p-shade-200));
    color: var(--p-dark-shade-0, var(--p-shade-800));
}
.p-accordion .p-accordion-content {
    padding: 1.25rem;
    border: 1px solid var(--p-dark-shade-300, var(--p-shade-300));
    background: var(--p-dark-shade-0, var(--p-shade-0));
    color: var(--p-dark-shade-700, var(--p-shade-700));
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
