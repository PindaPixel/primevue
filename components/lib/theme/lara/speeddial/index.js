export default `
.p-speeddial-button.p-button.p-button-icon-only {
    width: var(--p-speed-dial-button-width);
    height: var(--p-speed-dial-button-height);
}
.p-speeddial-button.p-button.p-button-icon-only .p-button-icon {
    font-size: var(--p-speed-dial-button-icon-font-size);
}
.p-speeddial-button.p-button.p-button-icon-only .p-icon {
    width: var(--p-speed-dial-button-icon-font-size);
    height: var(--p-speed-dial-button-icon-font-size);
}
.p-speeddial-list {
    outline: 0 none;
}
.p-speeddial-item.p-focus > .p-speeddial-action {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-speeddial-action {
    width: var(--p-speed-dial-action-width);
    height: var(--p-speed-dial-action-height);
    background: var(--p-speed-dial-action-bg);
    color: var(--p-speed-dial-action-text-color);
}
.p-speeddial-action:hover {
    background: var(--p-speed-dial-action-hover-bg);
    color: var(--p-speed-dial-action-text-hover-color);
}
.p-speeddial-direction-up .p-speeddial-item {
    margin: "math.div(var(--p-inline-spacing), 2) 0";
}
.p-speeddial-direction-up .p-speeddial-item:first-child {
    margin-bottom: var(--p-inline-spacing);
}
.p-speeddial-direction-down .p-speeddial-item {
    margin: "math.div(var(--p-inline-spacing), 2) 0";
}
.p-speeddial-direction-down .p-speeddial-item:first-child {
    margin-top: var(--p-inline-spacing);
}
.p-speeddial-direction-left .p-speeddial-item {
    margin: "0 math.div(var(--p-inline-spacing), 2)";
}
.p-speeddial-direction-left .p-speeddial-item:first-child {
    margin-right: var(--p-inline-spacing);
}
.p-speeddial-direction-right .p-speeddial-item {
    margin: "0 math.div(var(--p-inline-spacing), 2)";
}
.p-speeddial-direction-right .p-speeddial-item:first-child {
    margin-left: var(--p-inline-spacing);
}
.p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
    margin: 0;
}
.p-speeddial-circle .p-speeddial-item:first-child,
.p-speeddial-circle .p-speeddial-item:last-child,
.p-speeddial-semi-circle .p-speeddial-item:first-child,
.p-speeddial-semi-circle .p-speeddial-item:last-child,
.p-speeddial-quarter-circle .p-speeddial-item:first-child,
.p-speeddial-quarter-circle .p-speeddial-item:last-child {
    margin: 0;
}
.p-speeddial-mask {
    background-color: var(--p-mask-bg);
    border-radius: var(--p-border-radius);
}
.p-speeddial-item.p-focus > .p-speeddial-action {
    box-shadow:
        0 0 0 2px #ffffff,
        0 0 0 4px "scale-color($buttonBg, $lightness: 50%)",
        0 1px 2px 0 black;
}
`;
