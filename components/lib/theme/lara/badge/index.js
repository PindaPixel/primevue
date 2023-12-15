export default `
.p-badge {
    background: var(--p-badge-bg, var(--p-dark-primary-color, var(--p-primary-color)));
    color: var(--p-badge-text-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
    font-size: var(--p-badge-font-size, .75rem);
    font-weight: var(--p-badge-font-weight, 700);
    min-width: var(--p-badge-min-width, 1.5rem);
    height: var(--p-badge-height, 1.5rem);
    line-height: var(--p-badge-height, 1.5rem);
}
.p-badge-secondary {
    background-color: var(--p-badge-secondary-bg);
    color: var(--p-badge-secondary-text-color);
}
.p-badge-success {
    background-color: var(--p-badge-success-bg);
    color: var(--p-badge-success-text-color);
}
.p-badge-info {
    background-color: var(--p-badge-info-bg);
    color: var(--p-badge-info-text-color);
}
.p-badge-warning {
    background-color: var(--p-badge-warning-bg);
    color: var(--p-badge-warning-text-color);
}
.p-badge-danger {
    background-color: var(--p-badge-danger-bg);
    color: var(--p-badge-danger-text-color);
}
.p-badge-lg {
    font-size: calc(1.5 * var(--p-badge-font-size, .75rem));
    min-width: calc(1.5 * var(--p-badge-min-width, 1.5rem));
    height: calc(1.5 * var(--p-badge-height, 1.5rem));
    line-height: calc(1.5 * var(--p-badge-height, 1.5rem));
}
.p-badge-xl {
    font-size: calc(2 * var(--p-badge-font-size, .75rem));
    min-width: calc(2 * var(--p-badge-min-width, 1.5rem));
    height: calc(2 * var(--p-badge-height, 1.5rem));
    line-height: calc(2 * var(--p-badge-height, 1.5rem));
}
`;
