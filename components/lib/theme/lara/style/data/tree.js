export default `
.p-tree {
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    padding: 1.25rem;
    border-radius: 6px;
}

.p-tree .p-tree-container .p-treenode {
    padding: 0.143rem;
    outline: 0 none;
}

.p-tree .p-tree-container .p-treenode:focus>.p-treenode-content {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #99f6e4;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content {
    border-radius: 6px;
    transition: box-shadow 0.2s;
    padding: 0.5rem;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {
    margin-right: 0.5rem;
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon {
    margin-right: 0.5rem;
    color: #6b7280;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox {
    margin-right: 0.5rem;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox .p-indeterminate .p-checkbox-icon {
    color: #4b5563;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {
    background: #0f766e;
    color: #0f766e;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler,
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon {
    color: #0f766e;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler:hover,
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon:hover {
    color: #0f766e;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #4b5563;
}

.p-tree .p-tree-filter-container {
    margin-bottom: 0.5rem;
}

.p-tree .p-tree-filter-container .p-tree-filter {
    width: 100%;
    padding-right: 1.75rem;
}

.p-tree .p-tree-filter-container .p-tree-filter-icon {
    right: 0.75rem;
    color: #6b7280;
}

.p-tree .p-treenode-children {
    padding: 0 0 0 1rem;
}

.p-tree .p-tree-loading-icon {
    font-size: 2rem;
}

.p-tree .p-tree-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
}
`;
