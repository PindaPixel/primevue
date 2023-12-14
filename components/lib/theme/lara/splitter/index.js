export default `
.p-splitter {
    border: var(--p-splitter-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    background: var(--p-splitter-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    border-radius: var(--p-border-radius);
    color: var(--p-splitter-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-splitter-gutter {
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    background: var(--p-splitter-gutter-bg, var(rgba(255,255,255,.03), var(--p-pink-100))); /* //TODO: */
}
.p-splitter-gutter .p-splitter-gutter-handle {
    background: var(--p-splitter-gutter-handle-bg, var(--p-dark-pink-600, var(--p-pink-300)));
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-splitter-gutter .p-splitter-gutter-handle:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-splitter-gutter-resizing {
    background: var(--p-splitter-gutter-handle-bg, var(--p-dark-pink-600, var(--p-pink-300)));
}
`;
