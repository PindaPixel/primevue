export default `
.p-steps .p-steps-item .p-menuitem-link {
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    border-radius: var(--p-border-radius, 6px);
    background: var(--p-steps-item-bg, var(transparent, var(--p-pink-0)));
}
.p-steps .p-steps-item .p-menuitem-link .p-steps-number {
    color: var(--p-steps-item-number-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border: var(--p-steps-item-border, var(0 none, 1px solid var(--p-pink-200)));
    background: var(--p-steps-item-bg, var(transparent, var(--p-pink-0)));
    min-width: var(--p-steps-item-number-width, 2rem);
    height: var(--p-steps-item-number-height, 2rem);
    line-height: var(--p-steps-item-number-height, 2rem);
    font-size: var(--p-steps-item-number-font-size, 1.143rem);
    z-index: var(--p-steps-item-number-z-index, 1);
    border-radius: var(--p-steps-item-number-border-radius, 50%);
}
.p-steps .p-steps-item .p-menuitem-link .p-steps-title {
    margin-top: var(--p-inline-spacing, .5rem);
    color: var(--p-steps-item-text-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
.p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-steps .p-steps-item.p-highlight .p-steps-number {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-steps .p-steps-item.p-highlight .p-steps-title {
    font-weight: var(--p-steps-item-active-font-weight, 700);
    color: var(--p-text-color); /* //TODO: */
}
.p-steps .p-steps-item:before { /* //TODO: */
    content: " ";
    border-top: var(--p-divider, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    width: 100%;
    top: 50%;
    left: 0;
    display: block;
    position: absolute;
    margin-top: calc(-1 * var(--p-steps-item-number-height, 2rem) / 2);
}
.p-steps .p-steps-item.p-highlight .p-steps-number {
    background: var(--p-dark-primary-color, var(--p-primary-color));
    color: var(--p-dark-primary-text-color, var(--p-primary-text-color));
}
`;
