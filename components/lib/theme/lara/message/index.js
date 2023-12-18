export default `
.p-message {
    margin: var(--p-message-margin, 1rem 0);
    border-radius: var(--p-border-radius, 6px);
}
.p-message .p-message-wrapper {
    padding: var(--p-message-padding, 1.25rem 1.75rem);
}
.p-message .p-message-close {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    border-radius: var(--p-action-icon-border-radius);
    background: var(--p-message-bg, transparent);
    transition: var(--p-action-icon-transition);
}
.p-message .p-message-close:hover {
    background: var(--p-message-bg, rgba(255, 255, 255, 0.5));
}
.p-message .p-message-close:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-message.p-message-info {
    background: var(--p-info-message-bg, var(rgba(59,130,246,.2), var(rgba(219, 234, 254, .7))));
    border: var(--p-info-message-border, solid var(#3b82f6, var(#3b82f6)));
    border-width: var(--p-message-border-width, 0 0 0 6px);
    color: var(--p-info-message-text-color, var(#93c5fd, var(#3b82f6)));
}
.p-message.p-message-info .p-message-icon,
.p-message.p-message-info .p-message-close {
    color: var(--p-info-message-icon-color, var(#93c5fd, var(#3b82f6)));
}
.p-message.p-message-success {
    background: var(--p-success-message-bg, var(rgba(16, 185, 129, .2), var(rgba(228, 248, 240, .7))));
    border: var(--p-success-message-border, solid var(#10b981, var(#1ea97c)));
    border-width: var(--p-message-border-width, 0 0 0 6px);
    color: var(--p-success-message-text-color, var(#6ee7b7, var(#1ea97c)));
}
.p-message.p-message-success .p-message-icon,
.p-message.p-message-success .p-message-close {
    color: var(--p-success-message-icon-color, var(#6ee7b7, var(#1ea97c)));
}
.p-message.p-message-warn {
    background: var(--p-warning-message-bg, var(rgba(234, 179, 8, .2), var(rgba(255, 242, 226, .7))));
    border: var(--p-warning-message-border, solid var(#eab308, var(#cc8925)));
    border-width: var(--p-message-border-width, 0 0 0 6px);
    color: var(--p-warning-message-text-color, var(#fde047, var(#cc8925)));
}
.p-message.p-message-warn .p-message-icon,
.p-message.p-message-warn .p-message-close {
    color: var(--p-warning-message-icon-color, var(#fde047, var(#cc8925)));
}
.p-message.p-message-error {
    background: var(--p-error-message-bg, var(rgba(239, 68, 68, .2), var(rgba(255, 231, 230, .7))));
    border: var(--p-error-message-border, solid var(#ef4444, var(#ff5757)));
    border-width: var(--p-message-border-width, 0 0 0 6px);
    color: var(--p-error-message-text-color, var(#fca5a5, var(#ff5757)));
}
.p-message.p-message-error .p-message-icon,
.p-message.p-message-error .p-message-close {
    color: var(--p-error-message-icon-color, var(#fca5a5, var(#ff5757)));
}
.p-message .p-message-text {
    font-size: var(--p-message-text-font-size, 1rem);
    font-weight: var(--p-message-text-font-weight, 500);
}
.p-message .p-message-icon {
    font-size: var(--p-message-icon-font-size, 1.5rem);
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-message .p-icon:not(.p-message-close-icon) {
    width: var(--p-message-icon-font-size, 1.5rem);
    height: var(--p-message-icon-font-size, 1.5rem);
}
`;
