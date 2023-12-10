export default `
.p-tag {
    background: var(--p-badge-bg);
    color: var(--p-badge-text-color);
    font-size: var(--p-badge-font-size);
    font-weight: var(--p-badge-font-weight);
    padding: var(--p-tag-padding);
    border-radius: var(--p-border-radius);
}
.p-tag-success {
    background-color: var(--p-success-button-bg);
    color: var(--p-success-button-text-color);
}
.p-tag-info {
    background-color: var(--p-info-button-bg);
    color: var(--p-info-button-text-color);
}
.p-tag-warning {
    background-color: var(--p-warning-button-bg);
    color: var(--p-warning-button-text-color);
}
.p-tag-danger {
    background-color: var(--p-danger-button-bg);
    color: var(--p-danger-button-text-color);
}
.p-tag-icon {
    margin-right: "math.div(var(--p-inline-spacing), 2)";
    font-size: var(--p-badge-font-size);
}
.p-tag-icon.p-icon {
    width: var(--p-badge-font-size);
    height: var(--p-badge-font-size);
}
`;
