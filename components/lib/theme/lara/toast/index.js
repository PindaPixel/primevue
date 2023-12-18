export default `
.p-toast {
    opacity: var(--p-toast-opacity, 1);
}
.p-toast .p-toast-message {
    margin: var(--p-toast-margin, 0 0 1rem 0);
    box-shadow: var(--p-toast-shadow, var(none, var(0 2px 12px 0 rgba(0,0,0,.1))));
    border-radius: var(--p-border-radius, 6px);
}
.p-toast .p-toast-message .p-toast-message-content {
    padding: var(--p-toast-padding, 1rem);
    border-width: var(--p-toast-border-width, 0 0 0 6px);
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-message-text {
    margin: var(--p-toast-message-text-margin, 0 0 0 1rem);
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon {
    font-size: var(--p-toast-icon-font-size, 2rem);
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon.p-icon {
    width: var(--p-toast-icon-font-size, 2rem);
    height: var(--p-toast-icon-font-size, 2rem);
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-summary {
    font-weight: var(--p-toast-title-font-weight, 700);
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-detail {
    margin: var(--p-toast-detail-margin, var(--p-inline-spacing) 0 0 0);
}
.p-toast .p-toast-message .p-toast-icon-close {
    width: var(--p-toast-icon-font-size, 2rem);
    height: var(--p-toast-icon-font-size, 2rem);
    border-radius: var(--p-action-icon-border-radius, 0 none);
    background: var(--p-toast-icon-bg, transparent);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-toast .p-toast-message .p-toast-icon-close:hover {
    background: var(--p-toast-icon-bg, rgba(255, 255, 255, 0.5));
}
.p-toast .p-toast-message .p-toast-icon-close:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-toast .p-toast-message.p-toast-message-info {
    background: var(--p-info-message-bg, var(rgba(59,130,246,.2), var(rgba(219, 234, 254, .7))));
    border: var(--p-info-message-border, solid var(#3b82f6, var(#3b82f6)));
    border-width: var(--p-inline-message-border-width, var(1px, var(0px)));
    color: var(--p-info-message-text-color, var(#93c5fd, var(#3b82f6)));
}
.p-toast .p-toast-message.p-toast-message-info .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-info .p-toast-icon-close {
    color: var(--p-info-message-icon-color, var(#93c5fd, var(#3b82f6)));
}
.p-toast .p-toast-message.p-toast-message-success {
    background: var(--p-success-message-bg, var(rgba(16, 185, 129, .2), var(rgba(228, 248, 240, .7))));
    border: var(--p-success-message-border, solid var(#10b981, var(#1ea97c)));
    border-width: var(--p-inline-message-border-width), var(1px, var(0px));
    color: var(--p-success-message-text-color, var(#6ee7b7, var(#1ea97c)));
}
.p-toast .p-toast-message.p-toast-message-success .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-success .p-toast-icon-close {
    color: var(--p-success-message-icon-color, var(#6ee7b7, var(#1ea97c)));
}
.p-toast .p-toast-message.p-toast-message-warn {
    background: var(--p-warning-message-bg, var(rgba(234, 179, 8, .2), var(rgba(255, 242, 226, .7))));
    border: var(--p-warning-message-border, solid var(#eab308, var(#cc8925)));
    border-width: var(--p-inline-message-border-width, var(1px, var(0px)));
    color: var(--p-warning-message-text-color, var(#fde047, var(#cc8925)));
}
.p-toast .p-toast-message.p-toast-message-warn .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-warn .p-toast-icon-close {
    color: var(--p-warning-message-icon-color, var(#fde047, var(#cc8925)));
}
.p-toast .p-toast-message.p-toast-message-error {
    background: var(--p-error-message-bg, var(rgba(239, 68, 68, .2), var(rgba(255, 231, 230, .7))));
    border: var(--p-error-message-border, solid var(#ef4444, var(#ff5757)));
    border-width: var(--p-inline-message-border-width, var(1px, var(0px)));
    color: var(--p-error-message-text-color, var(#fca5a5, var(#ff5757)));
}
.p-toast .p-toast-message.p-toast-message-error .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-error .p-toast-icon-close {
    color: var(--p-error-message-icon-color, var(#fca5a5, var(#ff5757)));
}
.p-toast-message {
    backdrop-filter: var(--p-toast-message-backdrop-filter, blur(10px));
}
`;
