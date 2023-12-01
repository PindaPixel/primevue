export default `
.p-fileupload .p-fileupload-buttonbar {
    background: #f9fafb;
    padding: 1.25rem;
    border: 1px solid #e5e7eb;
    color: #374151;
    border-bottom: 0 none;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    gap: 0.5rem;
}

.p-fileupload .p-fileupload-buttonbar .p-button.p-fileupload-choose.p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-fileupload .p-fileupload-content {
    background: #ffffff;
    padding: 2rem 1rem;
    border: 1px solid #e5e7eb;
    color: #4b5563;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
}

.p-fileupload .p-fileupload-content.p-fileupload-highlight {
    border: 1px dashed #14b8a6;
    background-color: #0f766e;
}

.p-fileupload .p-fileupload-file {
    padding: 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}

.p-fileupload .p-fileupload-file:last-child {
    margin-bottom: 0;
}

.p-fileupload .p-fileupload-file-name {
    margin-bottom: 0.5rem;
}

.p-fileupload .p-fileupload-file-size {
    margin-right: 0.5rem;
}

.p-fileupload .p-progressbar {
    height: 0.25rem;
}

.p-fileupload .p-fileupload-row>div {
    padding: 1rem 1rem;
}

.p-fileupload.p-fileupload-advanced .p-message {
    margin-top: 0;
}

.p-fileupload-choose:not(.p-disabled):hover {
    background: #0d9488;
    color: #ffffff;
    border-color: #0d9488;
}

.p-fileupload-choose:not(.p-disabled):active {
    background: #0f766e;
    color: #ffffff;
    border-color: #0f766e;
}
`;
