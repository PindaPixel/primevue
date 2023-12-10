export default `
.p-picklist .p-picklist-buttons {
    padding: var(--p-panel-content-padding);
}
.p-picklist .p-picklist-buttons .p-button {
    margin-bottom: var(--p-inline-spacing);
}
.p-picklist .p-picklist-header {
    background: var(--p-panel-header-bg);
    color: var(--p-panel-header-text-color);
    border: var(--p-panel-header-border);
    padding: var(--p-panel-header-padding);
    font-weight: var(--p-panel-header-font-weight);
    border-bottom: 0 none;
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-picklist .p-picklist-list {
    border: var(--p-panel-content-border);
    background: var(--p-panel-content-bg);
    color: var(--p-panel-content-text-color);
    padding: var(--p-input-list-padding);
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
    outline: 0 none;
}
.p-picklist .p-picklist-list .p-picklist-item {
    padding: var(--p-input-list-item-padding);
    margin: var(--p-input-list-item-margin);
    border: var(--p-input-list-item-border);
    color: var(--p-input-list-item-text-color);
    background: var(--p-input-list-item-bg);
    transition:
        transform var(--p-transition-duration),
        var(--p-list-item-transition);
}
.p-picklist .p-picklist-list .p-picklist-item:not(.p-highlight):hover {
    background: var(--p-input-list-item-hover-bg);
    color: var(--p-input-list-item-text-hover-color);
}
.p-picklist .p-picklist-list .p-picklist-item.p-focus {
    color: var(--p-input-list-item-text-focus-color);
    background: var(--p-input-list-item-focus-bg);
}
.p-picklist .p-picklist-list .p-picklist-item.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-picklist .p-picklist-list .p-picklist-item.p-highlight.p-focus {
    background: var(--p-highlight-focus-bg);
}
.p-picklist.p-picklist-striped .p-picklist-list .p-picklist-item:nth-child(even) {
    background: var(--p-panel-content-even-row-bg);
}
.p-picklist.p-picklist-striped .p-picklist-list .p-picklist-item:nth-child(even):hover {
    background: var(--p-input-list-item-hover-bg);
}
.p-picklist-buttons .p-button {
    transition:
        opacity var(--p-transition-duration),
        background-color var(--p-transition-duration),
        color var(--p-transition-duration),
        border-color var(--p-transition-duration),
        box-shadow var(--p-transition-duration);
}
`;
