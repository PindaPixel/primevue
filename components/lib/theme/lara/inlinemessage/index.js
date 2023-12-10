export default `
.p-inline-message {
    padding: var(--p-inline-message-padding);
    margin: var(--p-inline-message-margin);
    border-radius: var(--p-border-radius);
}
.p-inline-message.p-inline-message-info {
    background: var(--p-info-message-bg);
    border: var(--p-info-message-border);
    border-width: var(--p-inline-message-border-width);
    color: var(--p-info-message-text-color);
}
.p-inline-message.p-inline-message-info .p-inline-message-icon {
    color: var(--p-info-message-icon-color);
}
.p-inline-message.p-inline-message-success {
    background: var(--p-success-message-bg);
    border: var(--p-success-message-border);
    border-width: var(--p-inline-message-border-width);
    color: var(--p-success-message-text-color);
}
.p-inline-message.p-inline-message-success .p-inline-message-icon {
    color: var(--p-success-message-icon-color);
}
.p-inline-message.p-inline-message-warn {
    background: var(--p-warning-message-bg);
    border: var(--p-warning-message-border);
    border-width: var(--p-inline-message-border-width);
    color: var(--p-warning-message-text-color);
}
.p-inline-message.p-inline-message-warn .p-inline-message-icon {
    color: var(--p-warning-message-icon-color);
}
.p-inline-message.p-inline-message-error {
    background: var(--p-error-message-bg);
    border: var(--p-error-message-border);
    border-width: var(--p-inline-message-border-width);
    color: var(--p-error-message-text-color);
}
.p-inline-message.p-inline-message-error .p-inline-message-icon {
    color: var(--p-error-message-icon-color);
}
.p-inline-message .p-inline-message-icon {
    font-size: var(--p-inline-message-icon-font-size);
    margin-right: var(--p-inline-spacing);
}
.p-inline-message .p-inline-message-text {
    font-size: var(--p-inline-message-text-font-size);
}
.p-inline-message.p-inline-message-icon-only .p-inline-message-icon {
    margin-right: 0;
}
.p-inline-message-text {
    font-weight: 500;
}
`;
