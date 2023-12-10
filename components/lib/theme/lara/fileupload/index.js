export default `
.p-fileupload .p-fileupload-buttonbar {
    background: var(--p-panel-header-bg);
    padding: var(--p-panel-header-padding);
    border: var(--p-panel-header-border);
    color: var(--p-panel-header-text-color);
    border-bottom: 0 none;
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
    gap: var(--p-inline-spacing);
}
.p-fileupload .p-fileupload-buttonbar .p-button.p-fileupload-choose.p-focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-fileupload .p-fileupload-content {
    background: var(--p-panel-content-bg);
    padding: var(--p-file-upload-content-padding);
    border: var(--p-panel-content-border);
    color: var(--p-panel-content-text-color);
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}
.p-fileupload .p-fileupload-content.p-fileupload-highlight {
    border: var(--p-file-upload-content-hover-border);
    background-color: var(--p-highlight-bg);
}
.p-fileupload .p-fileupload-file {
    padding: var(--p-file-upload-file-padding);
    border: var(--p-file-upload-file-border);
    border-radius: var(--p-border-radius);
    gap: var(--p-inline-spacing);
    margin-bottom: var(--p-inline-spacing);
}
.p-fileupload .p-fileupload-file:last-child {
    margin-bottom: 0;
}
.p-fileupload .p-fileupload-file-name {
    margin-bottom: var(--p-inline-spacing);
}
.p-fileupload .p-fileupload-file-size {
    margin-right: var(--p-inline-spacing);
}
.p-fileupload .p-progressbar {
    height: var(--p-file-upload-progress-bar-height);
}
.p-fileupload .p-fileupload-row > div {
    padding: var(--p-table-body-cell-padding);
}
.p-fileupload.p-fileupload-advanced .p-message {
    margin-top: 0;
}
.p-fileupload-choose:not(.p-disabled):hover {
    background: var(--p-button-hover-bg);
    color: var(--p-button-text-hover-color);
    border-color: var(--p-button-hover-border-color);
}
.p-fileupload-choose:not(.p-disabled):active {
    background: var(--p-button-active-bg);
    color: var(--p-button-text-active-color);
    border-color: var(--p-button-active-border-color);
}
`;
