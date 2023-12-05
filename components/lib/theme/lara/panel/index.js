export default `
.p-panel .p-panel-header {
    border: 1px solid #e5e7eb;
    padding: 1.25rem;
    background: #f9fafb;
    color: #374151;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
}

.p-panel .p-panel-header .p-panel-title {
    font-weight: 700;
}

.p-panel .p-panel-header .p-panel-header-icon {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

.p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
}

.p-panel .p-panel-header .p-panel-header-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-panel.p-panel-toggleable .p-panel-header {
    padding: 0.75rem 1.25rem;
}

.p-panel .p-panel-content {
    padding: 1.25rem;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    border-top: 0 none;
}

.p-panel .p-panel-content:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
}

.p-panel .p-panel-footer {
    padding: 0.75rem 1.25rem;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-top: 0 none;
}
`;
