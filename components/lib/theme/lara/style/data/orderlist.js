export default `
.p-orderlist .p-orderlist-controls {
    padding: 1.25rem;
}

.p-orderlist .p-orderlist-controls .p-button {
    margin-bottom: 0.5rem;
}

.p-orderlist .p-orderlist-header {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    padding: 1.25rem;
    font-weight: 700;
    border-bottom: 0 none;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
}

.p-orderlist .p-orderlist-list {
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    padding: 0.75rem 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    outline: 0 none;
}

.p-orderlist .p-orderlist-list .p-orderlist-item {
    padding: 0.75rem 1.25rem;
    margin: 0;
    border: 0 none;
    color: #4b5563;
    background: transparent;
    transition: transform 0.2s, box-shadow 0.2s;
}

.p-orderlist .p-orderlist-list .p-orderlist-item:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #4b5563;
}

.p-orderlist .p-orderlist-list .p-orderlist-item.p-focus {
    color: #4b5563;
    background: #e5e7eb;
}

.p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {
    color: #0f766e;
    background: #0f766e;
}

.p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight.p-focus {
    background: rgba(20, 184, 166, 0.24);
}

.p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even) {
    background: #f8f8fa;
}

.p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even):hover {
    background: #f3f4f6;
}

.p-orderlist-controls .p-button {
    transition: opacity 0.2s, background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
`;
