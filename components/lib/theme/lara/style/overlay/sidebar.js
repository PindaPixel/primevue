export default `
.p-sidebar {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.p-sidebar .p-sidebar-header {
    padding: 1.25rem;
}

.p-sidebar .p-sidebar-header .p-sidebar-header-content {
    font-weight: 700;
    font-size: 1.25rem;
}

.p-sidebar .p-sidebar-header .p-sidebar-close,
.p-sidebar .p-sidebar-header .p-sidebar-icon {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

.p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,
.p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
}

.p-sidebar .p-sidebar-header .p-sidebar-close:focus-visible,
.p-sidebar .p-sidebar-header .p-sidebar-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-sidebar .p-sidebar-header+.p-sidebar-content {
    padding-top: 0;
}

.p-sidebar .p-sidebar-content {
    padding: 1.25rem;
}
`;
