export default `
.p-message {
    margin: 1rem 0;
    border-radius: 6px;
}

.p-message .p-message-wrapper {
    padding: 1.25rem 1.75rem;
}

.p-message .p-message-close {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: transparent;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

.p-message .p-message-close:hover {
    background: rgba(255, 255, 255, 0.5);
}

.p-message .p-message-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-message.p-message-info {
    background: rgba(219, 234, 254, 0.7);
    border: solid #3b82f6;
    border-width: 0 0 0 6px;
    color: #3b82f6;
}

.p-message.p-message-info .p-message-icon {
    color: #3b82f6;
}

.p-message.p-message-info .p-message-close {
    color: #3b82f6;
}

.p-message.p-message-success {
    background: rgba(228, 248, 240, 0.7);
    border: solid #1ea97c;
    border-width: 0 0 0 6px;
    color: #1ea97c;
}

.p-message.p-message-success .p-message-icon {
    color: #1ea97c;
}

.p-message.p-message-success .p-message-close {
    color: #1ea97c;
}

.p-message.p-message-warn {
    background: rgba(255, 242, 226, 0.7);
    border: solid #cc8925;
    border-width: 0 0 0 6px;
    color: #cc8925;
}

.p-message.p-message-warn .p-message-icon {
    color: #cc8925;
}

.p-message.p-message-warn .p-message-close {
    color: #cc8925;
}

.p-message.p-message-error {
    background: rgba(255, 231, 230, 0.7);
    border: solid #ff5757;
    border-width: 0 0 0 6px;
    color: #ff5757;
}

.p-message.p-message-error .p-message-icon {
    color: #ff5757;
}

.p-message.p-message-error .p-message-close {
    color: #ff5757;
}

.p-message .p-message-text {
    font-size: 1rem;
    font-weight: 500;
}

.p-message .p-message-icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
}

.p-message .p-icon:not(.p-message-close-icon) {
    width: 1.5rem;
    height: 1.5rem;
}
`;
