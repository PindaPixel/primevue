export default `
.p-image-mask {
    --maskbg: var(--p-image-mask-bg);
}
.p-image-preview-indicator {
    background-color: transparent;
    color: var(--p-image-preview-indicator-color);
    transition: var(--p-action-icon-transition);
}
.p-image-preview-indicator .p-icon {
    width: var(--p-image-preview-action-icon-font-size);
    height: var(--p-image-preview-action-icon-font-size);
}
.p-image-preview-container:hover > .p-image-preview-indicator {
    background-color: var(--p-image-preview-indicator-bg);
}
.p-image-toolbar {
    padding: var(--p-image-preview-toolbar-padding);
}
.p-image-action.p-link {
    color: var(--p-image-preview-action-icon-color);
    background-color: var(--p-image-preview-action-icon-bg);
    width: var(--p-image-preview-action-icon-width);
    height: var(--p-image-preview-action-icon-height);
    border-radius: var(--p-image-preview-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
    margin-right: var(--p-inline-spacing);
}
.p-image-action.p-link:last-child {
    margin-right: 0;
}
.p-image-action.p-link:hover {
    color: var(--p-image-preview-action-icon-hover-color);
    background-color: var(--p-image-preview-action-icon-hover-bg);
}
.p-image-action.p-link i {
    font-size: var(--p-image-preview-action-icon-font-size);
}
.p-image-action.p-link .p-icon {
    width: var(--p-image-preview-action-icon-font-size);
    height: var(--p-image-preview-action-icon-font-size);
}
`;
