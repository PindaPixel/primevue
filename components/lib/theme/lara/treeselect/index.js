export default `
.p-treeselect {
    background: var(--p-input-bg);
    border: var(--p-input-border);
    transition: var(--p-form-element-transition);
    border-radius: var(--p-border-radius);
}
.p-treeselect:not(.p-disabled):hover {
    border-color: var(--p-input-hover-border-color);
}
.p-treeselect:not(.p-disabled).p-focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color);
}
.p-treeselect .p-treeselect-label {
    padding: var(--p-input-padding);
    transition: var(--p-form-element-transition);
}
.p-treeselect .p-treeselect-label.p-placeholder {
    color: var(--p-input-placeholder-text-color);
}
.p-treeselect.p-treeselect-chip .p-treeselect-token {
    padding: "math.div(nth(var(--p-input-padding), 1), 2) nth(var(--p-input-padding), 2)";
    margin-right: var(--p-inline-spacing);
    background: var(--p-chip-bg);
    color: var(--p-chip-text-color);
    border-radius: var(--p-chip-border-radius);
}
.p-treeselect .p-treeselect-trigger {
    background: transparent;
    color: var(--p-input-icon-color);
    width: var(--p-input-group-add-on-min-width);
    border-top-right-radius: var(--p-border-radius);
    border-bottom-right-radius: var(--p-border-radius);
}
.p-treeselect.p-invalid.p-component {
    border-color: var(--p-input-error-border-color);
}

.p-inputwrapper-filled.p-treeselect.p-treeselect-chip .p-treeselect-label {
    padding: "math.div(nth(var(--p-input-padding), 1), 2) nth(var(--p-input-padding), 2)";
}

.p-treeselect-panel {
    background: var(--p-input-overlay-bg);
    color: var(--p-input-list-text-color);
    border: var(--p-input-overlay-border);
    border-radius: var(--p-border-radius);
    box-shadow: var(--p-input-overlay-shadow);
}
.p-treeselect-panel .p-treeselect-items-wrapper .p-tree {
    border: 0 none;
}
.p-treeselect-panel .p-treeselect-items-wrapper .p-treeselect-empty-message {
    padding: var(--p-input-list-item-padding);
    color: var(--p-input-list-item-text-color);
    background: var(--p-input-list-item-bg);
}

.p-input-filled .p-treeselect {
    background: var(--p-input-filled-bg);
}
.p-input-filled .p-treeselect:not(.p-disabled):hover {
    background-color: var(--p-input-filled-hover-bg);
}
.p-input-filled .p-treeselect:not(.p-disabled).p-focus {
    background-color: var(--p-input-filled-focus-bg);
}
`;
