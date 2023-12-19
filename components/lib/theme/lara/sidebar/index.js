export default `
.p-sidebar {
    background: var(--p-overlay-content-bg, var(--p-dark-panel-content-bg, var(--p-panel-content-bg)));
    color: var(--p-sidebar-content-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border: var(--p-overlay-content-border, var(1px solid var(--p-dark-pink-600), var(0 none)));
    box-shadow: var(--p-overlay-container-shadow);
}
.p-sidebar-header {
    padding: var(--p-sidebar-header-padding, 0 1.5rem 2rem 1.5rem);
}
.p-sidebar-header .p-sidebar-header-content {
    font-weight: var(--p-sidebar-header-font-weight, 700);
    font-size: var(--p-sidebar-header-font-size, 1.25rem);
}
.p-sidebar-header .p-sidebar-close,
.p-sidebar-header .p-sidebar-icon {
    width: var(--p-action-icon-width, 2rem);
    height: var(--p-action-icon-height, 2rem);
    color: var(--p-action-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
    border: var(--p-action-icon-border, 0 none);
    background: var(--p-action-icon-bg, transparent);
    border-radius: var(--p-action-icon-border-radius, 50%);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-sidebar-header .p-sidebar-close:enabled:hover,
.p-sidebar-header .p-sidebar-icon:enabled:hover {
    color: var(--p-action-icon-hover-color, var(--p-dark-pink-0, var(--p-pink-800)));
    border-color: var(--p-action-icon-hover-border-color, transparent);
    background: var(--p-action-icon-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-sidebar-header .p-sidebar-close:focus-visible,
.p-sidebar-header .p-sidebar-icon:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-sidebar-header + .p-sidebar-content {
    padding-top: 0; /* //TODO: */
}
.p-sidebar-content {
    padding: var(--p-sidebar-content-padding, 1.25rem);
}
`;
