export default `
.p-chip {
    background-color: var(--p-chip-bg);
    color: var(--p-chip-text-color);
    border-radius: var(--p-chip-border-radius);
    padding: "0 nth(var(--p-input-padding), 2)";
}
.p-chip-text {
    line-height: 1.5;
    margin-top: "math.div(nth(var(--p-input-padding), 1), 2)";
    margin-bottom: "math.div(nth(var(--p-input-padding), 1), 2)";
}
.p-chip-icon {
    margin-right: var(--p-inline-spacing);
}
.p-chip img {
    width: "1.5 + nth(var(--p-input-padding), 1)";
    height: "1.5 + nth(var(--p-input-padding), 1)";
    margin-left: "-1 * nth(var(--p-input-padding), 2)";
    margin-right: var(--p-inline-spacing);
}
.p-chip-remove-icon {
    margin-left: var(--p-inline-spacing);
    border-radius: var(--p-border-radius);
    transition: var(--p-action-icon-transition);
}
.p-chip-remove-icon:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-chip-remove-icon:focus {
    outline: 0 none;
}
`;
