export default `
.p-accordion-header .p-accordion-header-link {
    padding: var(--p-accordion-header-padding);
    border: var(--p-accordion-header-border);
    color: var(--p-accordion-header-text-color);
    background: var(--p-accordion-header-bg);
    font-weight: var(--p-accordion-header-font-weight);
    border-radius: var(--p-border-radius);
    transition: var(--p-list-item-transition);
}
.p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
    margin-right: var(--p-inline-spacing);
}
.p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: inset var(--p-focus-shadow);
}
.p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
    background: var(--p-accordion-header-hover-bg);
    border-color: var(--p-accordion-header-hover-border-color);
    color: var(--p-accordion-header-text-hover-color);
}
.p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    background: var(--p-accordion-header-active-bg);
    border-color: var(--p-accordion-header-active-border-color);
    color: var(--p-accordion-header-text-active-color);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
    border-color: var(--p-accordion-header-active-hover-border-color);
    background: var(--p-accordion-header-active-hover-bg);
    color: var(--p-accordion-header-text-active-hover-color);
}
.p-accordion-content {
    padding: var(--p-accordion-content-padding);
    border: var(--p-accordion-content-border);
    background: var(--p-accordion-content-bg);
    color: var(--p-accordion-content-text-color);
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}
.p-accordion-tab {
    margin-bottom: var(--p-accordion-spacing);
}
.p-accordion-header .p-accordion-header-link {
    transition:
        background-color var(--p-transition-duration),
        border-color var(--p-transition-duration),
        box-shadow var(--p-transition-duration);
}
`;
