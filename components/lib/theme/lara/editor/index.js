export default `
.p-editor-container .p-editor-toolbar {
    background: var(--p-editor-toolbar-bg);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-editor-container .p-editor-toolbar.ql-snow {
    border: var(--p-editor-toolbar-border);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
    stroke: var(--p-editor-toolbar-icon-color);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
    fill: var(--p-editor-toolbar-icon-color);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
    border: 0 none;
    color: var(--p-editor-toolbar-icon-color);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
    color: var(--p-editor-toolbar-icon-hover-color);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
    stroke: var(--p-editor-toolbar-icon-hover-color);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
    fill: var(--p-editor-toolbar-icon-hover-color);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: var(--p-editor-toolbar-icon-hover-color);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: var(--p-editor-toolbar-icon-hover-color);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: var(--p-editor-toolbar-icon-hover-color);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background: var(--p-input-overlay-bg);
    border: var(--p-input-overlay-border);
    box-shadow: var(--p-input-overlay-shadow);
    border-radius: var(--p-border-radius);
    padding: var(--p-input-list-padding);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
    color: var(--p-input-list-item-text-color);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
    color: var(--p-input-list-item-text-hover-color);
    background: var(--p-input-list-item-hover-bg);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
    padding: var(--p-input-list-item-padding);
}
.p-editor-container .p-editor-content {
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}
.p-editor-container .p-editor-content.ql-snow {
    border: var(--p-editor-content-border);
}
.p-editor-container .p-editor-content .ql-editor {
    background: var(--p-input-bg);
    color: var(--p-input-text-color);
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}
.p-editor-container .ql-snow.ql-toolbar button:hover,
.p-editor-container .ql-snow.ql-toolbar button:focus {
    color: var(--p-editor-toolbar-icon-hover-color);
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {
    stroke: var(--p-editor-toolbar-icon-hover-color);
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
    fill: var(--p-editor-toolbar-icon-hover-color);
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    color: var(--p-editor-icon-active-color);
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
    stroke: var(--p-editor-icon-active-color);
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
    fill: var(--p-editor-icon-active-color);
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
    color: var(--p-editor-icon-active-color);
}
`;
