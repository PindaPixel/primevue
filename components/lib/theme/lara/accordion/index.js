export default `
.p-accordion-header .p-accordion-header-link {
    padding: var(--p-accordion-header-padding, 4px);
    border: var(--p-accordion-header-border, var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-accordion-header-text-color, var(--p-dark-pink-0), var(--p-pink-600));
    background: var(--p-accordion-header-bg, var(--p-dark-pink-800, var(--p-pink-100)));
    font-weight: var(--p-accordion-header-font-weight, 700);
    border-radius: var(--p-border-radius);
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration)); /* @todo */
}
.p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: inset var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color))); /* //TODO: */
}
.p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
    background: var(--p-accordion-header-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
    border-color: var(--p-accordion-header-hover-border-color, var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-accordion-header-text-hover-color, var(--p-dark-pink-0, var(--p-pink-800)));
}
.p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    background: var(--p-accordion-header-active-bg, var(--p-dark-pink-800, var(--p-pink-100)));
    border-color: var(--p-accordion-header-active-border-color, var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-accordion-header-text-active-color, var(--p-dark-pink-0, var(--p-pink-800)));
    border-bottom-right-radius: var(--p-accordion-content-border-bottom-right-radius, 0); /* @todo */
    border-bottom-left-radius: var(--p-accordion-content-border-bottom-left-radius, 0); /* @todo */
}
.p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
    border-color: var(--p-accordion-header-active-hover-border-color, var(--p-dark-pink-600, var(--p-pink-300)));
    background: var(--p-accordion-header-active-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
    color: var(--p-accordion-header-text-active-hover-color, var(--p-dark-pink-600, var(--p-pink-300)));
}
.p-accordion-content {
    padding: var(--p-accordion-content-padding, 1.25rem);
    border: var(--p-accordion-content-border, var(--p-dark-pink-600, var(--p-pink-300)));
    background: var(--p-accordion-content-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    color: var(--p-accordion-content-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border-top: var(--p-accordion-content-border-top, 0); /* @todo */
    border-top-right-radius: var(--p-accordion-content-border-top-right-radius, 0); /* @todo */
    border-top-left-radius: var(--p-accordion-content-border-top-left-radius, 0); /* @todo */
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}
.p-accordion-tab {
    margin-bottom: var(--p-accordion-spacing, 4px);
}
.p-accordion-header .p-accordion-header-link {
    transition:
        background-color var(--p-transition-duration),
        border-color var(--p-transition-duration),
        box-shadow var(--p-transition-duration);
}
`;
