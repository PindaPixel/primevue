export default `
.p-steps .p-steps-item .p-menuitem-link {
    background: transparent;
    transition: var(--p-list-item-transition);
    border-radius: var(--p-border-radius);
    background: var(--p-steps-item-bg);
}
.p-steps .p-steps-item .p-menuitem-link .p-steps-number {
    color: var(--p-steps-item-number-color);
    border: var(--p-steps-item-border);
    background: var(--p-steps-item-bg);
    min-width: var(--p-steps-item-number-width);
    height: var(--p-steps-item-number-height);
    line-height: var(--p-steps-item-number-height);
    font-size: var(--p-steps-item-number-font-size);
    z-index: 1;
    border-radius: var(--p-steps-item-number-border-radius);
}
.p-steps .p-steps-item .p-menuitem-link .p-steps-title {
    margin-top: var(--p-inline-spacing);
    color: var(--p-steps-item-text-color);
}
.p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-steps .p-steps-item.p-highlight .p-steps-number {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-steps .p-steps-item.p-highlight .p-steps-title {
    font-weight: var(--p-steps-item-active-font-weight);
    color: var(--p-text-color);
}
.p-steps .p-steps-item:before {
    content: " ";
    border-top: var(--p-divider);
    width: 100%;
    top: 50%;
    left: 0;
    display: block;
    position: absolute;
    margin-top: "math.div(-1 * var(--p-steps-item-number-height), 2)";
}
.p-steps .p-steps-item.p-highlight .p-steps-number {
    background: var(--p-dark-primary-color, var(--p-primary-color));
    color: var(--p-dark-primary-text-color, var(--p-primary-text-color));
}
`;
