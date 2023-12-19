export default `
.p-dialog {
    border-radius: var(--p-border-radius, 6px);
    box-shadow: var(--p-overlay-container-shadow);
    border: var(--p-overlay-content-border, var(1px solid var(--p-dark-pink-600), var(0 none)));
}
.p-dialog-header {
    border-bottom: var(--p-dialog-header-border, 0 none);
    background: var(--p-dialog-header-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    color: var(--p-dialog-header-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
    padding: var(--p-dialog-header-padding, 1.5rem);
    border-top-right-radius: var(--p-border-radius, 6px);
    border-top-left-radius: var(--p-border-radius, 6px);
}
.p-dialog-header .p-dialog-title {
    font-weight: var(--p-dialog-header-font-weight, 700);
    font-size: var(--p-dialog-header-font-size, 1.25rem);
}
.p-dialog-header .p-dialog-header-icon {
    width: var(--p-action-icon-width, 2rem);
    height: var(--p-action-icon-height, 2rem);
    color: var(--p-action-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
    border: var(--p-action-icon-border, 0 none);
    background: var(--p-action-icon-bg, transparent);
    border-radius: var(--p-action-icon-border-radius, 50%);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-dialog-header .p-dialog-header-icon:enabled:hover {
    color: var(--p-action-icon-hover-color, var(--p-dark-pink-0, var(--p-pink-800)));
    border-color: var(--p-action-icon-hover-border-color, transparent);
    background: var(--p-action-icon-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-dialog-header .p-dialog-header-icon:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-dialog-header .p-dialog-header-icon:last-child {
    margin-right: 0; /* //TODO: */
}
.p-dialog-content {
    background: var(--p-overlay-content-bg, var(--p-dark-panel-content-bg, var(--p-panel-content-bg)));
    color: var(--p-dialog-content-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    padding: var(--p-dialog-content-padding, 0 1.5rem 2rem 1.5rem);
}
.p-dialog-content:last-of-type {
    border-bottom-right-radius: var(--p-border-radius, 6px);
    border-bottom-left-radius: var(--p-border-radius, 6px);
}
.p-dialog-footer {
    border-top: var(--p-dialog-footer-border, 0 none);
    background: var(--p-overlay-content-bg, var(--p-dark-panel-content-bg, var(--p-panel-content-bg)));
    color: var(--p-dialog-footer-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    padding: var(--p-dialog-footer-padding, 0 1.5rem 1.5rem 1.5rem);
    text-align: right;  //TODO: */
    border-bottom-right-radius: var(--p-border-radius, 6px);
    border-bottom-left-radius: var(--p-border-radius, 6px);
}
.p-dialog-footer button {
    margin: 0 var(--p-inline-spacing, .5rem) 0 0; //TODO: */
    width: auto; //TODO: */
}
`;
