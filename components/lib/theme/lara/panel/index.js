export default `
.p-panel-header {
    border: var(--p-panel-header-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    padding: var(--p-panel-header-padding, 1.25rem);
    background: var(--p-panel-header-bg, var(--p-dark-pink-800, var(--p-pink-100)));
    color: var(--p-panel-header-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-panel-header .p-panel-title {
    font-weight: var(--p-panel-header-font-weight, 700);
}
.p-panel-header .p-panel-header-icon {
    width: var(--p-panel-header-icon-width, 2rem);
    height: var(--p-panel-header-icon-height, 2rem);
    color: var(--p-panel-header-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
    border: var(--p-panel-header-icon-border, 0 none);
    background: var(--p-panel-header-icon-bg, transparent);
    border-radius: var(--p-panel-header-icon-border-radius, 50%);
    transition: var(--p-panel-header-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-panel-header .p-panel-header-icon:enabled:hover {
    color: var(--p-panel-header-icon-hover-color, var(--p-dark-pink-0, var(--p-pink-800)));
    border-color: var(--p-panel-header-icon-hover-border-color, transparent);
    background: var(--p-panel-header-icon-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-panel-header .p-panel-header-icon:focus-visible {
    outline: var(--p-panel-header-icon-focus-outline, 0 none);
    outline-offset: var(--p-panel-header-icon-focus-outline-offset, 0);
    box-shadow: var(--p-panel-header-icon-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-panel-toggleable .p-panel-header {
    padding: var(--p-panel-toggleable-header-padding, .75rem 1.25rem);
}
.p-panel-content {
    padding: var(--p-panel-content-padding, 1.25rem);
    border: var(--p-panel-content-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    background: var(--p-panel-content-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    color: var(--p-panel-content-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border-top: var(--p-panel-content-border-top, 0 none);
}
.p-panel-content:last-child {
    border-bottom-right-radius: var(--p-border-radius); /* @todo */
    border-bottom-left-radius: var(--p-border-radius);
}
.p-panel-footer {
    padding: var(--p-panel-footer-padding, 0.75rem 1.25rem);
    border: var(--p-panel-footer-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    background: var(--p-panel-footer-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    color: var(--p-panel-footer-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
    border-top: var(--p-panel-footer-border-top, 0 none);
}
`;
