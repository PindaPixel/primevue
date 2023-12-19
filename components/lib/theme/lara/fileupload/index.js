export default `
.p-fileupload .p-fileupload-buttonbar {
    background: var(--p-file-upload-buttonbar-bg, var(--p-dark-pink-800, var(--p-pink-100)));
    padding: var(--p-file-upload- buttonbar-padding, 1.25rem);
    border: var(--p-file-upload-buttonbar-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-file-upload-buttonbar-text-color, var(--p-dark-pink-0, var(--p-pink-800)));
    border-bottom: var(--p-file-upload-buttonbar-border-bottom, 0 none);
    border-top-right-radius: var(--p-border-radius, 6px);
    border-top-left-radius: var(--p-border-radius, 6px);
    gap: var(--p-inline-spacing, .5rem);
}
.p-fileupload .p-fileupload-buttonbar .p-button.p-fileupload-choose.p-focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-fileupload .p-fileupload-content {
    background: var(--p-file-upload-content-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    padding: var(--p-file-upload-content-padding, 2rem 1rem);
    border: var(--p-file-upload-content-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-file-upload-content-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border-bottom-right-radius: var(--p-border-radius, 6px);
    border-bottom-left-radius: var(--p-border-radius, 6px);
}
.p-fileupload .p-fileupload-content.p-fileupload-highlight {
    border: var(--p-file-upload-content-hover-border, 1px dashed var(--p-dark-primary-color, var(--p-primary-color)));
    background-color: var(--p-highlight-bg);
}
.p-fileupload .p-fileupload-file {
    padding: var(--p-file-upload-file-padding, 1rem);
    border: var(--p-file-upload-file-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    border-radius: var(--p-border-radius, , 6px);
    gap: var(--p-inline-spacing, .5rem); /* //TODO: */
    margin-bottom: var(--p-inline-spacing, .5rem);
}
.p-fileupload .p-fileupload-file:last-child {
    margin-bottom: 0; /* //TODO: */
}
.p-fileupload .p-fileupload-file-name {
    margin-bottom: var(--p-inline-spacing, .5rem);
}
.p-fileupload .p-fileupload-file-size {
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-fileupload .p-progressbar {
    height: var(--p-file-upload-progress-bar-height, .25rem);
}
.p-fileupload .p-fileupload-row > div {
    padding: var(--p-file-upload-row-padding, 1rem 1rem);
}
.p-fileupload.p-fileupload-advanced .p-message {
    margin-top: var(--p-file-upload-message-margin-top, 0);
}
.p-fileupload-choose:not(.p-disabled):hover {//TODO: */
    background: var(--p-button-hover-bg, var(--p-dark-primary-light-color, var(--p-primary-dark-color)));
    color: var(--p-button-text-hover-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
    border-color: var(--p-button-hover-border-color, var(--p-dark-primary-light-color, var(--p-primary-dark-color)));
}
.p-fileupload-choose:not(.p-disabled):active {//TODO: */
    background: var(--p-button-active-bg, var(--p-dark-primary-lighter-color, var(--p-primary-darker-color)));
    color: var(--p-button-text-active-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
    border-color: var(--p-button-active-border-color, var(--p-dark-primary-lighter-color, var(--p-primary-darker-color)));
}
`;
