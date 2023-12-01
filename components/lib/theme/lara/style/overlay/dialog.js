export default `
.p-dialog {
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border: 0 none;
}

.p-dialog .p-dialog-header {
    border-bottom: 0 none;
    background: #ffffff;
    color: #374151;
    padding: 1.5rem;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
}

.p-dialog .p-dialog-header .p-dialog-title {
    font-weight: 700;
    font-size: 1.25rem;
}

.p-dialog .p-dialog-header .p-dialog-header-icon {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    margin-right: 0.5rem;
}

.p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
}

.p-dialog .p-dialog-header .p-dialog-header-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
    margin-right: 0;
}

.p-dialog .p-dialog-content {
    background: #ffffff;
    color: #4b5563;
    padding: 0 1.5rem 2rem 1.5rem;
}

.p-dialog .p-dialog-content:last-of-type {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
}

.p-dialog .p-dialog-footer {
    border-top: 0 none;
    background: #ffffff;
    color: #4b5563;
    padding: 0 1.5rem 1.5rem 1.5rem;
    text-align: right;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
}

.p-dialog .p-dialog-footer button {
    margin: 0 0.5rem 0 0;
    width: auto;
}

.p-dialog.p-confirm-dialog .p-confirm-dialog-icon {
    font-size: 2rem;
}

.p-dialog.p-confirm-dialog .p-confirm-dialog-message:not(:first-child) {
    margin-left: 1rem;
}
`;
