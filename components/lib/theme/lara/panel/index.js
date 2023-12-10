export default `
.p-panel-header {
    border: var(--p-panel-header-border);
    padding: var(--p-panel-header-padding);
    background: var(--p-panel-header-bg);
    color: var(--p-panel-header-text-color);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-panel-header .p-panel-title {
    font-weight: var(--p-panel-header-font-weight);
}
.p-panel-header .p-panel-header-icon {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-action-icon-color);
    border: var(--p-action-icon-border);
    background: var(--p-action-icon-bg);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
}
.p-panel-header .p-panel-header-icon:enabled:hover {
    color: var(--p-action-icon-hover-color);
    border-color: var(--p-action-icon-hover-border-color);
    background: var(--p-action-icon-hover-bg);
}
.p-panel-header .p-panel-header-icon:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-panel-toggleable .p-panel-header {
    padding: var(--p-panel-toggleable-header-padding);
}
.p-panel-content {
    padding: var(--p-panel-content-padding);
    border: var(--p-panel-content-border);
    background: var(--p-panel-content-bg);
    color: var(--p-panel-content-text-color);
    border-top: 0 none;
}
.p-panel-content:last-child {
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}
.p-panel-footer {
    padding: var(--p-panel-footer-padding);
    border: var(--p-panel-footer-border);
    background: var(--p-panel-footer-bg);
    color: var(--p-panel-footer-text-color);
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
    border-top: 0 none;
}
`;
