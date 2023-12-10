export default `
.p-splitter {
    border: var(--p-panel-content-border);
    background: var(--p-panel-content-bg);
    border-radius: var(--p-border-radius);
    color: var(--p-panel-content-text-color);
}
.p-splitter-gutter {
    transition: var(--p-action-icon-transition);
    background: var(--p-splitter-gutter-bg);
}
.p-splitter-gutter .p-splitter-gutter-handle {
    background: var(--p-splitter-gutter-handle-bg);
    transition: var(--p-form-element-transition);
}
.p-splitter-gutter .p-splitter-gutter-handle:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-splitter-gutter-resizing {
    background: var(--p-splitter-gutter-handle-bg);
}
`;
