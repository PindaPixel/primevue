export default `
.p-orderlist .p-orderlist-controls {
    padding: var(--p-panel-content-padding);
}
.p-orderlist .p-orderlist-controls .p-button {
    margin-bottom: var(--p-inline-spacing);
}
.p-orderlist .p-orderlist-header {
    background: var(--p-panel-header-bg);
    color: var(--p-panel-header-text-color);
    border: var(--p-panel-header-border);
    padding: var(--p-panel-header-padding);
    font-weight: var(--p-panel-header-font-weight);
    border-bottom: 0 none;
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-orderlist .p-orderlist-list {
    border: var(--p-panel-content-border);
    background: var(--p-panel-content-bg);
    color: var(--p-panel-content-text-color);
    padding: var(--p-input-list-padding);
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
    outline: 0 none;
}
.p-orderlist .p-orderlist-list .p-orderlist-item {
    padding: var(--p-input-list-item-padding);
    margin: var(--p-input-list-item-margin);
    border: var(--p-input-list-item-border);
    color: var(--p-input-list-item-text-color);
    background: var(--p-input-list-item-bg);
    transition:
        transform var(--p-transition-duration),
        var(--p-list-item-transition);
}
.p-orderlist .p-orderlist-list .p-orderlist-item:not(.p-highlight):hover {
    background: var(--p-input-list-item-hover-bg);
    color: var(--p-input-list-item-text-hover-color);
}
.p-orderlist .p-orderlist-list .p-orderlist-item.p-focus {
    color: var(--p-input-list-item-text-focus-color);
    background: var(--p-input-list-item-focus-bg);
}
.p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight.p-focus {
    background: var(--p-highlight-focus-bg);
}
.p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even) {
    background: var(--p-panel-content-even-row-bg);
}
.p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even):hover {
    background: var(--p-input-list-item-hover-bg);
}
.p-orderlist-controls .p-button {
    transition:
        opacity var(--p-transition-duration),
        background-color var(--p-transition-duration),
        color var(--p-transition-duration),
        border-color var(--p-transition-duration),
        box-shadow var(--p-transition-duration);
}
`;
