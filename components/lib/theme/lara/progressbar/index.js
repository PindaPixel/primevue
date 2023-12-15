export default `
.p-progressbar {
    border: var(--p-progress-bar-border, 0 none);
    height: var(--p-progress-bar-height, 1.5rem);
    background: var(--p-progress-bar-bg, var(--p-dark-pink-600, var(--p-pink-300)));
    border-radius: var(--p-border-radius, 6px);
}
.p-progressbar-value {
    border: var(--p-progress-bar-border, 0 none);
    margin: var(--p-progress-bar-margin, 0);
    background: var(--p-progress-bar-value-bg, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-progressbar-label {
    color: var(--p-progress-bar-value-text-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
    line-height: var(--p-progress-bar-height, 1.5rem);
}
`;
