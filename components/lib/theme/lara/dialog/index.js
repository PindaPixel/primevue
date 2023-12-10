export default `
.p-dialog {
    border-radius: var(--p-border-radius);
    box-shadow: var(--p-overlay-container-shadow);
    border: var(--p-overlay-content-border);
}
.p-dialog-header {
    border-bottom: var(--p-dialog-header-border);
    background: var(--p-dialog-header-bg);
    color: var(--p-dialog-header-text-color);
    padding: var(--p-dialog-header-padding);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-dialog-header .p-dialog-title {
    font-weight: var(--p-dialog-header-font-weight);
    font-size: var(--p-dialog-header-font-size);
}
.p-dialog-header .p-dialog-header-icon {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-action-icon-color);
    border: var(--p-action-icon-border);
    background: var(--p-action-icon-bg);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
    margin-right: var(--p-inline-spacing);
}
.p-dialog-header .p-dialog-header-icon:enabled:hover {
    color: var(--p-action-icon-hover-color);
    border-color: var(--p-action-icon-hover-border-color);
    background: var(--p-action-icon-hover-bg);
}
.p-dialog-header .p-dialog-header-icon:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-dialog-header .p-dialog-header-icon:last-child {
    margin-right: 0;
}
.p-dialog-content {
    background: var(--p-overlay-content-bg);
    color: var(--p-panel-content-text-color);
    padding: var(--p-dialog-content-padding);
}
.p-dialog-content:last-of-type {
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}
.p-dialog-footer {
    border-top: var(--p-dialog-footer-border);
    background: var(--p-overlay-content-bg);
    color: var(--p-panel-footer-text-color);
    padding: var(--p-dialog-footer-padding);
    text-align: right;
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}
.p-dialog-footer button {
    margin: 0 var(--p-inline-spacing) 0 0;
    width: auto;
}
`;
