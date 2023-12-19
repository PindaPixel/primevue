export default `
.p-tooltip-text {
    background: var(--p-tooltip-bg, var(--p-dark-pink-600, var(--p-pink-700)));
    color: var(--p-tooltip-text-color, var(--p-dark-pink-0, var(--p-pink-0)));
    padding: var(--p-tooltip-padding, var(--p-dark-input-padding, var(--p-input-padding)));
    box-shadow: var(--p-tooltip-shadow, var(0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), var(0 2px 12px 0 rgba(0,0,0,.1)))); /* //TODO:  */
    border-radius: var(--p-border-radius, 6px);
}
.p-tooltip-right .p-tooltip-arrow {
    border-right-color: var(--p-tooltip-bg, var(--p-dark-pink-600, var(--p-pink-700)));
}
.p-tooltip-left .p-tooltip-arrow {
    border-left-color: var(--p-tooltip-bg, var(--p-dark-pink-600, var(--p-pink-700)));
}
.p-tooltip-top .p-tooltip-arrow {
    border-top-color: var(--p-tooltip-bg, var(--p-dark-pink-600, var(--p-pink-700)));
}
.p-tooltip-bottom .p-tooltip-arrow {
    border-bottom-color: var(--p-tooltip-bg, var(--p-dark-pink-600, var(--p-pink-700)));
}
`;
