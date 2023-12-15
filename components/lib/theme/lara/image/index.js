export default `
.p-image-mask {
    --maskbg: var(--p-image-mask-bg, rgba(0,0,0,0.9));
}
.p-image-preview-indicator {
    background-color: var(--p-image-preview-indicator-bg, rgba(0,0,0,0.5));
    color: var(--p-image-preview-indicator-color, #f8f9fa);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-image-preview-indicator .p-icon {
    width: var(--p-image-preview-indicator-icon-width, 1.5rem);
    height: var(--p-image-preview-indicator-icon-height, 1.5rem);
}
.p-image-preview-container:hover > .p-image-preview-indicator {
    background-color: var(--p-image-preview-indicator-bg, rgba(0,0,0,0.5));
}
.p-image-toolbar {
    padding: var(--p-image-preview-toolbar-padding, 1rem);
}
.p-image-action.p-link {
    color: var(--p-image-preview-action-icon-color, #f8f9fa);
    background-color: var(--p-image-preview-action-icon-bg, transparent);
    width: var(--p-image-preview-action-icon-width, 3rem);
    height: var(--p-image-preview-action-icon-height, 3rem);
    border-radius: var(--p-image-preview-action-icon-border-radius, 50%);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-image-action.p-link:last-child {
    margin-right: 0; /* //TODO: */
}
.p-image-action.p-link:hover {
    color: var(--p-image-preview-action-icon-hover-color, #f8f9fa);
    background-color: var(--p-image-preview-action-icon-hover-bg, rgba(255,255,255,0.1));
}
.p-image-action.p-link i {
    font-size: var(--p-image-preview-action-icon-font-size, 1.5rem);
}
.p-image-action.p-link .p-icon {
    width: var(--p-image-preview-action-icon-font-size, 1.5rem);
    height: var(--p-image-preview-action-icon-font-size, 1.5rem);
}
`;
