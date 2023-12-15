export default `
.p-chip {
    background-color: var(--p-chip-bg, var(--p-dark-pink-600, var(--p-pink-300)));
    color: var(--p-chip-text-color, var(--p-dark-text-color, var(--p-text-color)));
    border-radius: var(--p-chip-border-radius, 16px);
    padding: 0 var(--p-chip-padding, .75rem);
}
.p-chip-text {
    line-height: 1.5;
    margin-top: calc(var(--p-chip-padding, .75rem) / 2);
    margin-bottom: calc(var(--p-chip-padding, .75rem) / 2);
}
.p-chip-icon {
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-chip img {
    width: calc(1.5rem + var(--p-chip-padding, .75rem));
    height: calc(1.5rem + var(--p-chip-padding, .75rem));
    margin-left: calc(-1 * var(--p-chip-padding, .75rem));
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-chip-remove-icon {
    margin-left: var(--p-inline-spacing, .5rem);
    border-radius: var(--p-border-radius, 6px);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-chip-remove-icon:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-chip-remove-icon:focus {
    outline: var(--p-focus-outline, 0 none);
}
`;
