export default `
.p-tag {
    background: var(--p-tag-bg, var(--p-dark-primary-color, var(--p-primary-color)));
    color: var(--p-tag-text-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
    font-size: var(--p-tag-font-size, .75rem);
    font-weight: var(--p-tag-font-weight, 700);
    padding: var(--p-tag-padding, .25rem .4rem);
    border-radius: var(--p-border-radius, 6px);
}
.p-tag-success {
    background-color: var(--p-tag-success-bg);
    color: var(--p-tag-success-text-color);
}
.p-tag-info {
    background-color: var(--p-tag-info-bg);
    color: var(--p-tag-info-text-color);
}
.p-tag-warning {
    background-color: var(--p-tag-warning-bg);
    color: var(--p-tag-warning-text-color);
}
.p-tag-danger {
    background-color: var(--p-tag-danger-bg);
    color: var(--p-tag-danger-text-color);
}
.p-tag-icon {
    margin-right: calc(var(--p-inline-spacing) / 2);
    font-size: var(--p-tag-font-size, .75rem);
}
.p-tag-icon.p-icon {
    width: var(--p-tag-icon-width, .75rem);
    height: var(--p-tag-icon-height, .75rem);
}
`;
