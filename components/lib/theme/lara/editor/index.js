export default `
.p-editor-container .p-editor-toolbar {
    background: var(--p-editor-toolbar-bg, var(--p-dark-panel-header-bg, var(--p-panel-header-bg)));
    border-top-right-radius: var(--p-border-radius, 6px);
    border-top-left-radius: var(--p-border-radius, 6px);
}
.p-editor-container .p-editor-toolbar.ql-snow {
    border: var(--p-editor-toolbar-border, var(--p-dark-panel-header-border, var(--p-panel-header-border)));
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
    stroke: var(--p-editor-toolbar-icon-color, var(-p-dark-text-secondary-color, var(--p-text-secondary-color)));
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
    fill: var(--p-editor-toolbar-icon-color, var(-p-dark-text-secondary-color, var(--p-text-secondary-color)));
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
    border: 0 none;
    color: var(--p-editor-toolbar-icon-color, var(-p-dark-text-secondary-color, var(--p-text-secondary-color)));
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
    color: var(--p-editor-toolbar-icon-hover-color, var(--p-dark-text-color, var(--p-text-color)));
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
    stroke: var(--p-editor-toolbar-icon-hover-color, var(--p-dark-text-color, var(--p-text-color)));
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
    fill: var(--p-editor-toolbar-icon-hover-color, var(--p-dark-text-color, var(--p-text-color)));
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: var(--p-editor-toolbar-icon-hover-color, var(--p-dark-text-color, var(--p-text-color)));
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: var(--p-editor-toolbar-icon-hover-color, var(--p-dark-text-color, var(--p-text-color)));
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: var(--p-editor-toolbar-icon-hover-color, var(--p-dark-text-color, var(--p-text-color)));
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background: var(--p-input-overlay-bg, var(--p-dark-input-list-bg, var(--p-input-list-bg)));
    border: var(--p-input-overlay-border, var(1px solid var(--p-dark-pink-600), var(0 none)));
    box-shadow: var(--p-input-overlay-shadow, var(0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), var(0 2px 12px 0 rgba(0,0,0,.1))));
    border-radius: var(--p-border-radius, 6px);
    padding: var(--p-input-list-padding, .75rem 0);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
    color: var(--p-input-list-item-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
    color: var(--p-input-list-item-text-hover-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-list-item-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
    padding: var(--p-input-list-item-padding, .75rem 0);
}
.p-editor-container .p-editor-content {
    border-bottom-right-radius: var(--p-border-radius, 6px);
    border-bottom-left-radius: var(--p-border-radius, 6px);
}
.p-editor-container .p-editor-content.ql-snow {
    border: var(--p-editor-content-border, var(--p-dark-panel-content-border, var(--p-panel-content-border)));
}
.p-editor-container .p-editor-content .ql-editor {
    background: var(--p-input-bg, var(--p-dark-pink-900, var(--p-pink-0)));
    color: var(--p-input-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border-bottom-right-radius: var(--p-border-radius, 6px);
    border-bottom-left-radius: var(--p-border-radius, 6px);
}
.p-editor-container .ql-snow.ql-toolbar button:hover,
.p-editor-container .ql-snow.ql-toolbar button:focus {
    color: var(--p-editor-toolbar-icon-hover-color, var(--p-dark-text-color, var(--p-text-color)));
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {
    stroke: var(--p-editor-toolbar-icon-hover-color, var(--p-dark-text-color, var(--p-text-color)));
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
    fill: var(--p-editor-toolbar-icon-hover-color, var(--p-dark-text-color, var(--p-text-color)));
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    color: var(--p-editor-icon-active-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
    stroke: var(--p-editor-icon-active-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
    fill: var(--p-editor-icon-active-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
    color: var(--p-editor-icon-active-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
`;
