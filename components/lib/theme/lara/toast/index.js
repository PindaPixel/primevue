export default `
.p-toast {
    opacity: var(--p-toast-opacity);
}
.p-toast .p-toast-message {
    margin: var(--p-toast-margin);
    box-shadow: var(--p-toast-shadow);
    border-radius: var(--p-border-radius);
}
.p-toast .p-toast-message .p-toast-message-content {
    padding: var(--p-toast-padding);
    border-width: var(--p-toast-border-width);
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-message-text {
    margin: var(--p-toast-message-text-margin);
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon {
    font-size: var(--p-toast-icon-font-size);
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon.p-icon {
    width: var(--p-toast-icon-font-size);
    height: var(--p-toast-icon-font-size);
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-summary {
    font-weight: var(--p-toast-title-font-weight);
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-detail {
    margin: var(--p-toast-detail-margin);
}
.p-toast .p-toast-message .p-toast-icon-close {
    width: var(--p-toast-icon-font-size);
    height: var(--p-toast-icon-font-size);
    border-radius: var(--p-action-icon-border-radius);
    background: transparent;
    transition: var(--p-action-icon-transition);
}
.p-toast .p-toast-message .p-toast-icon-close:hover {
    background: rgba(255, 255, 255, 0.5);
}
.p-toast .p-toast-message .p-toast-icon-close:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-toast .p-toast-message.p-toast-message-info {
    background: var(--p-info-message-bg);
    border: var(--p-info-message-border);
    border-width: var(--p-message-border-width);
    color: var(--p-info-message-text-color);
}
.p-toast .p-toast-message.p-toast-message-info .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-info .p-toast-icon-close {
    color: var(--p-info-message-icon-color);
}
.p-toast .p-toast-message.p-toast-message-success {
    background: var(--p-success-message-bg);
    border: var(--p-success-message-border);
    border-width: var(--p-message-border-width);
    color: var(--p-success-message-text-color);
}
.p-toast .p-toast-message.p-toast-message-success .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-success .p-toast-icon-close {
    color: var(--p-success-message-icon-color);
}
.p-toast .p-toast-message.p-toast-message-warn {
    background: var(--p-warning-message-bg);
    border: var(--p-warning-message-border);
    border-width: var(--p-message-border-width);
    color: var(--p-warning-message-text-color);
}
.p-toast .p-toast-message.p-toast-message-warn .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-warn .p-toast-icon-close {
    color: var(--p-warning-message-icon-color);
}
.p-toast .p-toast-message.p-toast-message-error {
    background: var(--p-error-message-bg);
    border: var(--p-error-message-border);
    border-width: var(--p-message-border-width);
    color: var(--p-error-message-text-color);
}
.p-toast .p-toast-message.p-toast-message-error .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-error .p-toast-icon-close {
    color: var(--p-error-message-icon-color);
}
.p-toast-message {
    backdrop-filter: blur(10px);
}
`;
