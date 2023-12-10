export default `
.p-divider-content {
    background-color: var(--p-panel-content-bg);
}
.p-divider-horizontal {
    margin: var(--p-divider-horizontal-margin);
    padding: var(--p-divider-horizontal-padding);
}
.p-divider-horizontal:before {
    border-top: var(--p-divider-size) var(--p-divider-color);
}
.p-divider-horizontal .p-divider-content {
    padding: 0 var(--p-inline-spacing);
}
.p-divider-vertical {
    margin: var(--p-divider-vertical-margin);
    padding: var(--p-divider-vertical-padding);
}
.p-divider-vertical:before {
    border-left: var(--p-divider-size) var(--p-divider-color);
}
.p-divider-vertical .p-divider-content {
    padding: var(--p-inline-spacing) 0;
}
`;
