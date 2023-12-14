export default `
.p-fieldset {
    border: var(--p-fieldset-content-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    background: var(--p-fieldset-content-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    color: var(--p-fieldset-content-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border-radius: var(--p-border-radius);
}
.p-fieldset-legend {
    padding: var(--p-fieldset-legend-padding, 1.25rem);
    border: var(--p-fieldset-legend-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-fieldset-legend-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
    background: var(--p-fieldset-legend-bg, var(--p-dark-pink-800, var(--p-pink-100)));
    font-weight: var(--p-fieldset-legend-font-weight, 700);
    border-radius: var(--p-border-radius);
}
.p-fieldset-toggleable .p-fieldset-legend {
    padding: var(--p-fieldset-toggleable-legend-padding, 0);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-fieldset-toggleable .p-fieldset-legend a {
    padding: var(--p-fieldset-legend-anchor-padding, 1.25rem);
    color: var(--p-fieldset-legend-anchor-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
    border-radius: var(--p-border-radius);
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration)); //TODO: */
}
.p-fieldset-toggleable .p-fieldset-legend a .p-fieldset-toggler {
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-fieldset-toggleable .p-fieldset-legend a:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-fieldset-toggleable .p-fieldset-legend a:hover {
    color: var(--p-fieldset-legend-hover-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
}
.p-fieldset-toggleable .p-fieldset-legend:hover {
    background: var(--p-fieldset-legend-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
    border-color: var(--p-fieldset-legend-hover-border-color, var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-fieldset-legend-hover-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
}
.p-fieldset .p-fieldset-content {
    padding: var(--p-fieldset-content-padding, 1.25rem);
}
`;
