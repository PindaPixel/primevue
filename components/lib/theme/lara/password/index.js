export default `
.p-password.p-invalid.p-component > .p-inputtext {
    border-color: var(--p-input-error-border-color);
}

.p-password-panel {
    padding: var(--p-panel-content-padding);
    background: var(--p-panel-content-bg);
    color: var(--p-panel-content-text-color);
    border: var(--p-overlay-content-border);
    box-shadow: var(--p-input-overlay-shadow);
    border-radius: var(--p-border-radius);
}
.p-password-panel .p-password-meter {
    margin-bottom: var(--p-inline-spacing);
    background: var(--p-password-meter-bg);
}
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
