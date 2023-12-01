export default `
.p-organizationchart .p-organizationchart-node-content.p-organizationchart-selectable-node:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #4b5563;
}

.p-organizationchart .p-organizationchart-node-content.p-highlight {
    background: #0f766e;
    color: #0f766e;
}

.p-organizationchart .p-organizationchart-node-content.p-highlight .p-node-toggler i {
    color: #010505;
}

.p-organizationchart .p-organizationchart-line-down {
    background: #e5e7eb;
}

.p-organizationchart .p-organizationchart-line-left {
    border-right: 1px solid #e5e7eb;
    border-color: #e5e7eb;
}

.p-organizationchart .p-organizationchart-line-top {
    border-top: 1px solid #e5e7eb;
    border-color: #e5e7eb;
}

.p-organizationchart .p-organizationchart-node-content {
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    padding: 1.25rem;
}

.p-organizationchart .p-organizationchart-node-content .p-node-toggler {
    background: inherit;
    color: inherit;
    border-radius: 50%;
}

.p-organizationchart .p-organizationchart-node-content .p-node-toggler:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}
`;
