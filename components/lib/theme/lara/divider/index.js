export default `
.p-divider-content {
    background-color: var(--p-divider-content-bg, var(--p-dark-pink-800, var(--p-pink-0)));
}
.p-divider-horizontal {
    margin: var(--p-divider-horizontal-margin, 1.25rem 0);
    padding: var(--p-divider-horizontal-padding, 0 1.25rem);
}
.p-divider-horizontal:before {
    border-top-width: var(--p-divider-size, 1px);
    border-top-color: var(--p-divider-color, var(--p-dark-pink-600, var(--p-pink-300)));
}
.p-divider-horizontal .p-divider-content {
    padding: 0 var(--p-inline-spacing, .5rem);
}
.p-divider-vertical {
    margin: var(--p-divider-vertical-margin, 0 1.25rem);
    padding: var(--p-divider-vertical-padding, 1.25rem 0);
}
.p-divider-vertical:before {
    border-left-width: var(--p-divider-size, 1px);
    border-left-color: var(--p-divider-color, var(--p-dark-pink-600, var(--p-pink-300)));
}
.p-divider-vertical .p-divider-content {
    padding: var(--p-inline-spacing, .5rem) 0;
}
`;
