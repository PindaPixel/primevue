export default `
.p-inline-message {
    padding: var(--p-inline-message-padding, .75rem .75rem);
    margin: var(--p-inline-message-margin, 0);
    border-radius: var(--p-border-radius, 6px);
}
.p-inline-message.p-inline-message-info {
    background: var(--p-info-message-bg, var(rgba(59,130,246,.2), var(rgba(219, 234, 254, .7))));
    border: var(--p-info-message-border, solid var(#3b82f6, var(#3b82f6)));
    border-width: var(--p-inline-message-border-width, var(1px, var(0px)));
    color: var(--p-info-message-text-color, var(#93c5fd, var(#3b82f6)));
}
.p-inline-message.p-inline-message-info .p-inline-message-icon {
    color: var(--p-info-message-icon-color, var(#93c5fd, var(#3b82f6)));
}
.p-inline-message.p-inline-message-success {
    background: var(--p-success-message-bg, var(rgba(16, 185, 129, .2), var(rgba(228, 248, 240, .7))));
    border: var(--p-success-message-border, solid var(#10b981, var(#1ea97c)));
    border-width: var(--p-inline-message-border-width), var(1px, var(0px));
    color: var(--p-success-message-text-color, var(#6ee7b7, var(#1ea97c)));
}
.p-inline-message.p-inline-message-success .p-inline-message-icon {
    color: var(--p-success-message-icon-color, var(#6ee7b7, var(#1ea97c)));
}
.p-inline-message.p-inline-message-warn {
    background: var(--p-warning-message-bg, var(rgba(234, 179, 8, .2), var(rgba(255, 242, 226, .7))));
    border: var(--p-warning-message-border, solid var(#eab308, var(#cc8925)));
    border-width: var(--p-inline-message-border-width, var(1px, var(0px)));
    color: var(--p-warning-message-text-color, var(#fde047, var(#cc8925)));
}
.p-inline-message.p-inline-message-warn .p-inline-message-icon {
    color: var(--p-warning-message-icon-color, var(#fde047, var(#cc8925)));
}
.p-inline-message.p-inline-message-error {
    background: var(--p-error-message-bg, var(rgba(239, 68, 68, .2), var(rgba(255, 231, 230, .7))));
    border: var(--p-error-message-border, solid var(#ef4444, var(#ff5757)));
    border-width: var(--p-inline-message-border-width, var(1px, var(0px)));
    color: var(--p-error-message-text-color, var(#fca5a5, var(#ff5757)));
}
.p-inline-message.p-inline-message-error .p-inline-message-icon {
    color: var(--p-error-message-icon-color, var(#fca5a5, var(#ff5757)));
}
.p-inline-message .p-inline-message-icon {
    font-size: var(--p-inline-message-icon-font-size, 1rem);
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-inline-message .p-inline-message-text {
    font-size: var(--p-inline-message-text-font-size, 1rem);
}
.p-inline-message.p-inline-message-icon-only .p-inline-message-icon {
    margin-right: var(--p-inline-message-icon-only-margin-right, 0);
}
.p-inline-message-text {
    font-weight: var(--p-inline-message-icon-font-weight, 500);
}
`;
