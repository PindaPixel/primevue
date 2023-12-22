export default `
.p-password.p-invalid.p-component > .p-inputtext {
    border-color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}

.p-password-panel {
    padding: var(--p-password-panel-padding, 1.25rem);
    background: var(--p-password-panel-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    color: var(--p-password-panel-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border: var(--p-overlay-content-border, var(1px solid var(--p-dark-pink-600), var(0 none))); /* //TODO: */
    box-shadow: var(--p-input-overlay-shadow); /* //TODO: */
    border-radius: var(--p-border-radius, 6px);
}
.p-password-panel .p-password-meter {
    margin-bottom: var(--p-inline-spacing, .5rem);
    background: var(--p-password-meter-bg, var(--p-dark-pink-600, var(--p-pink-300)));
}
/* //TODO: */
.p-password-panel .p-password-meter .p-password-strength.weak {
    background: var(--p-password-weak-bg);
}
.p-password-panel .p-password-meter .p-password-strength.medium {
    background: var(--p-password-medium-bg);
}
.p-password-panel .p-password-meter .p-password-strength.strong {
    background: var(--p-password-strong-bg);
}
`;
