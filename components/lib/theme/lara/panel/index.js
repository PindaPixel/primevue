export default `
.p-panel .p-panel-header {
    border: 1px solid var(--p-dark-shade-600, var(--p-shade-300));
    padding: 1.25rem;
    background: var(--p-dark-shade-800, var(--p-shade-100));
    color: var(--p-dark-shade-0, var(--p-shade-800));
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
}
.p-panel .p-panel-header .p-panel-title {
    font-weight: 700;
}
.p-panel .p-panel-header .p-panel-header-icon {
    width: 2rem;
    height: 2rem;
    color: var(--p-dark-shade-100, var(--p-shade-600));
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
    color: var(--p-dark-shade-0, var(--p-shade-800));
    border-color: transparent;
    background: var(--p-dark-surface-c, var(--p-shade-200));
}
.p-panel .p-panel-header .p-panel-header-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color));
}
.p-panel.p-panel-toggleable .p-panel-header {
    padding: 0.75rem 1.25rem;
}
.p-panel .p-panel-content {
    padding: 1.25rem;
    border: 1px solid var(--p-dark-shade-600, var(--p-shade-300));
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
