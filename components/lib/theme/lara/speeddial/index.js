export default `
.p-speeddial-button.p-button.p-button-icon-only {
    width: var(--p-speed-dial-button-width, 4rem);
    height: var(--p-speed-dial-button-height, 4rem);
}
.p-speeddial-button.p-button.p-button-icon-only .p-button-icon {
    font-size: var(--p-speed-dial-button-icon-font-size, 1.3rem);
}
.p-speeddial-button.p-button.p-button-icon-only .p-icon {
    width: var(--p-speed-dial-button-icon-font-size, 1.3rem);
    height: var(--p-speed-dial-button-icon-font-size, 1.3rem);
}
.p-speeddial-list {
    outline: var(--p-speed-dial-list-outline, 0 none);
}
.p-speeddial-item.p-focus > .p-speeddial-action {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-speeddial-action {
    width: var(--p-speed-dial-action-width, 3rem);
    height: var(--p-speed-dial-action-height, 3rem);
    background: var(--p-speed-dial-action-bg, var(--p-dark-pink-0, var(--p-pink-700)));
    color: var(--p-speed-dial-action-text-color, var(--p-dark-pink-900, #fff));
}
.p-speeddial-action:hover {
    background: var(--p-speed-dial-action-hover-bg, var(--p-dark-pink-100, #022354));
    color: var(--p-speed-dial-action-text-hover-color, var(--p-dark-pink-900, #fff));
}
.p-speeddial-direction-up .p-speeddial-item {
    margin: calc(var(--p-inline-spacing, .5rem) / 2) 0;
}
.p-speeddial-direction-up .p-speeddial-item:first-child {
    margin-bottom: var(--p-inline-spacing, .5rem);
}
.p-speeddial-direction-down .p-speeddial-item {
    margin: calc(var(--p-inline-spacing, .5rem) / 2) 0;
}
.p-speeddial-direction-down .p-speeddial-item:first-child {
    margin-top: var(--p-inline-spacing, .5rem);
}
.p-speeddial-direction-left .p-speeddial-item {
    margin: 0 calc(var(--p-inline-spacing, .5rem) / 2);
}
.p-speeddial-direction-left .p-speeddial-item:first-child {
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-speeddial-direction-right .p-speeddial-item {
    margin: 0 calc(var(--p-inline-spacing, .5rem) / 2);
}
.p-speeddial-direction-right .p-speeddial-item:first-child {
    margin-left: var(--p-inline-spacing, .5rem);
}
.p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
    margin: 0; /*  //TODO: */
}
.p-speeddial-circle .p-speeddial-item:first-child,
.p-speeddial-circle .p-speeddial-item:last-child,
.p-speeddial-semi-circle .p-speeddial-item:first-child,
.p-speeddial-semi-circle .p-speeddial-item:last-child,
.p-speeddial-quarter-circle .p-speeddial-item:first-child,
.p-speeddial-quarter-circle .p-speeddial-item:last-child {
    margin: 0; /*  //TODO: */
}
.p-speeddial-mask {
    background-color: var(--p-mask-bg, rgba(0, 0, 0, 0.4));
    border-radius: var(--p-border-radius, 6px);
}
.p-speeddial-item.p-focus > .p-speeddial-action {
    box-shadow:
        0 0 0 2px #ffffff,
        0 0 0 4px "scale-color($buttonBg, $lightness: 50%)",
        0 1px 2px 0 black; /*  //TODO: */
}
`;
