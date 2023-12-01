export default `
.p-splitter {
    border: 1px solid #e5e7eb;
    background: #ffffff;
    border-radius: 6px;
    color: #4b5563;
}

.p-splitter .p-splitter-gutter {
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    background: #f9fafb;
}

.p-splitter .p-splitter-gutter .p-splitter-gutter-handle {
    background: #e5e7eb;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.p-splitter .p-splitter-gutter .p-splitter-gutter-handle:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-splitter .p-splitter-gutter-resizing {
    background: #e5e7eb;
}
`;
