export default `
.p-toast {
    opacity: 1;
}

.p-toast .p-toast-message {
    margin: 0 0 1rem 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
}

.p-toast .p-toast-message .p-toast-message-content {
    padding: 1rem;
    border-width: 0 0 0 6px;
}

.p-toast .p-toast-message .p-toast-message-content .p-toast-message-text {
    margin: 0 0 0 1rem;
}

.p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon {
    font-size: 2rem;
}

.p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon.p-icon {
    width: 2rem;
    height: 2rem;
}

.p-toast .p-toast-message .p-toast-message-content .p-toast-summary {
    font-weight: 700;
}

.p-toast .p-toast-message .p-toast-message-content .p-toast-detail {
    margin: 0.5rem 0 0 0;
}

.p-toast .p-toast-message .p-toast-icon-close {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: transparent;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

.p-toast .p-toast-message .p-toast-icon-close:hover {
    background: rgba(255, 255, 255, 0.5);
}

.p-toast .p-toast-message .p-toast-icon-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-toast .p-toast-message.p-toast-message-info {
    background: rgba(219, 234, 254, 0.7);
    border: solid #3b82f6;
    border-width: 0 0 0 6px;
    color: #3b82f6;
}

.p-toast .p-toast-message.p-toast-message-info .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-info .p-toast-icon-close {
    color: #3b82f6;
}

.p-toast .p-toast-message.p-toast-message-success {
    background: rgba(228, 248, 240, 0.7);
    border: solid #1ea97c;
    border-width: 0 0 0 6px;
    color: #1ea97c;
}

.p-toast .p-toast-message.p-toast-message-success .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-success .p-toast-icon-close {
    color: #1ea97c;
}

.p-toast .p-toast-message.p-toast-message-warn {
    background: rgba(255, 242, 226, 0.7);
    border: solid #cc8925;
    border-width: 0 0 0 6px;
    color: #cc8925;
}

.p-toast .p-toast-message.p-toast-message-warn .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-warn .p-toast-icon-close {
    color: #cc8925;
}

.p-toast .p-toast-message.p-toast-message-error {
    background: rgba(255, 231, 230, 0.7);
    border: solid #ff5757;
    border-width: 0 0 0 6px;
    color: #ff5757;
}

.p-toast .p-toast-message.p-toast-message-error .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-error .p-toast-icon-close {
    color: #ff5757;
}

.p-toast-message {
    backdrop-filter: blur(10px);
}
`;