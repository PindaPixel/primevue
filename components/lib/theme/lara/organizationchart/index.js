export default `
.p-organizationchart .p-organizationchart-node-content.p-organizationchart-selectable-node:not(.p-highlight):hover {
    background: var(--p-input-list-item-hover-bg);
    color: var(--p-input-list-item-text-hover-color);
}
.p-organizationchart .p-organizationchart-node-content.p-highlight {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-organizationchart .p-organizationchart-node-content.p-highlight .p-node-toggler i {
    color: "darken(var(--p-highlight-bg), 25%)";
}
.p-organizationchart .p-organizationchart-line-down {
    background: var(--p-organization-chart-connector-color);
}
.p-organizationchart .p-organizationchart-line-left {
    border-right: var(--p-panel-content-border);
    border-color: var(--p-organization-chart-connector-color);
}
.p-organizationchart .p-organizationchart-line-top {
    border-top: var(--p-panel-content-border);
    border-color: var(--p-organization-chart-connector-color);
}
.p-organizationchart .p-organizationchart-node-content {
    border: var(--p-panel-content-border);
    background: var(--p-panel-content-bg);
    color: var(--p-panel-content-text-color);
    padding: var(--p-panel-content-padding);
}
.p-organizationchart .p-organizationchart-node-content .p-node-toggler {
    background: inherit;
    color: inherit;
    border-radius: 50%;
}
.p-organizationchart .p-organizationchart-node-content .p-node-toggler:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
`;
