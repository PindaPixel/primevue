export default `
.p-tree {
    border: var(--p-panel-content-border);
    background: var(--p-panel-content-bg);
    color: var(--p-panel-content-text-color);
    padding: var(--p-panel-content-padding);
    border-radius: var(--p-border-radius);
}
.p-tree .p-tree-container .p-treenode {
    padding: var(--p-tree-node-padding);
    outline: 0 none;
}
.p-tree .p-tree-container .p-treenode:focus > .p-treenode-content {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-input-list-item-focus-shadow);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content {
    border-radius: var(--p-border-radius);
    transition: var(--p-list-item-transition);
    padding: var(--p-tree-node-content-padding);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {
    margin-right: var(--p-inline-spacing);
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-action-icon-color);
    border: var(--p-action-icon-border);
    background: var(--p-action-icon-bg);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled:hover {
    color: var(--p-action-icon-hover-color);
    border-color: var(--p-action-icon-hover-border-color);
    background: var(--p-action-icon-hover-bg);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon {
    margin-right: var(--p-inline-spacing);
    color: var(--p-tree-node-icon-color);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox {
    margin-right: var(--p-inline-spacing);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox .p-indeterminate .p-checkbox-icon {
    color: var(--p-text-color);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler,
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon {
    color: var(--p-highlight-text-color);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler:hover,
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon:hover {
    color: var(--p-highlight-text-color);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
    background: var(--p-input-list-item-hover-bg);
    color: var(--p-input-list-item-text-hover-color);
}
.p-tree .p-tree-filter-container {
    margin-bottom: var(--p-inline-spacing);
}
.p-tree .p-tree-filter-container .p-tree-filter {
    width: 100%;
    padding-right: "nth(var(--p-input-padding), 2) + var(--p-prime-icon-font-size)";
}
.p-tree .p-tree-filter-container .p-tree-filter-icon {
    right: "nth(var(--p-input-padding), 2)";
    color: var(--p-input-icon-color);
}
.p-tree .p-treenode-children {
    padding: var(--p-tree-node-children-padding);
}
.p-tree .p-tree-loading-icon {
    font-size: var(--p-loading-icon-font-size);
}
.p-tree .p-tree-loading-icon.p-icon {
    width: var(--p-loading-icon-font-size);
    height: var(--p-loading-icon-font-size);
}
`;
