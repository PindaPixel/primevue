export default `
.p-sidebar {
    background: var(--p-overlay-content-bg);
    color: var(--p-panel-content-text-color);
    border: var(--p-overlay-content-border);
    box-shadow: var(--p-overlay-container-shadow);
}
.p-sidebar-header {
    padding: var(--p-panel-header-padding);
}
.p-sidebar-header .p-sidebar-header-content {
    font-weight: var(--p-dialog-header-font-weight);
    font-size: var(--p-dialog-header-font-size);
}
.p-sidebar-header .p-sidebar-close,
.p-sidebar-header .p-sidebar-icon {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-action-icon-color);
    border: var(--p-action-icon-border);
    background: var(--p-action-icon-bg);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
}
.p-sidebar-header .p-sidebar-close:enabled:hover,
.p-sidebar-header .p-sidebar-icon:enabled:hover {
    color: var(--p-action-icon-hover-color);
    border-color: var(--p-action-icon-hover-border-color);
    background: var(--p-action-icon-hover-bg);
}
.p-sidebar-header .p-sidebar-close:focus-visible,
.p-sidebar-header .p-sidebar-icon:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-sidebar-header + .p-sidebar-content {
    padding-top: 0;
}
.p-sidebar-content {
    padding: var(--p-panel-content-padding);
}
`;
