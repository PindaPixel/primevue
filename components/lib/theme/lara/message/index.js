export default `
.p-message {
    margin: var(--p-message-margin);
    border-radius: var(--p-border-radius);
}
.p-message .p-message-wrapper {
    padding: var(--p-message-padding);
}
.p-message .p-message-close {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    border-radius: var(--p-action-icon-border-radius);
    background: transparent;
    transition: var(--p-action-icon-transition);
}
.p-message .p-message-close:hover {
    background: rgba(255, 255, 255, 0.5);
}
.p-message .p-message-close:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-message.p-message-info {
    background: var(--p-info-message-bg);
    border: var(--p-info-message-border);
    border-width: var(--p-message-border-width);
    color: var(--p-info-message-text-color);
}
.p-message.p-message-info .p-message-icon {
    color: var(--p-info-message-icon-color);
}
.p-message.p-message-info .p-message-close {
    color: var(--p-info-message-icon-color);
}
.p-message.p-message-success {
    background: var(--p-success-message-bg);
    border: var(--p-success-message-border);
    border-width: var(--p-message-border-width);
    color: var(--p-success-message-text-color);
}
.p-message.p-message-success .p-message-icon {
    color: var(--p-success-message-icon-color);
}
.p-message.p-message-success .p-message-close {
    color: var(--p-success-message-icon-color);
}
.p-message.p-message-warn {
    background: var(--p-warning-message-bg);
    border: var(--p-warning-message-border);
    border-width: var(--p-message-border-width);
    color: var(--p-warning-message-text-color);
}
.p-message.p-message-warn .p-message-icon {
    color: var(--p-warning-message-icon-color);
}
.p-message.p-message-warn .p-message-close {
    color: var(--p-warning-message-icon-color);
}
.p-message.p-message-error {
    background: var(--p-error-message-bg);
    border: var(--p-error-message-border);
    border-width: var(--p-message-border-width);
    color: var(--p-error-message-text-color);
}
.p-message.p-message-error .p-message-icon {
    color: var(--p-error-message-icon-color);
}
.p-message.p-message-error .p-message-close {
    color: var(--p-error-message-icon-color);
}
.p-message .p-message-text {
    font-size: var(--p-message-text-font-size);
    font-weight: var(--p-message-text-font-weight);
}
.p-message .p-message-icon {
    font-size: var(--p-message-icon-font-size);
    margin-right: var(--p-inline-spacing);
}
.p-message .p-icon:not(.p-message-close-icon) {
    width: var(--p-message-icon-font-size);
    height: var(--p-message-icon-font-size);
}
`;
