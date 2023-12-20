export default `
.p-inputtext {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: var(--p-input-text-font-size, 1rem);
    color: var(--p-input-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-input-bg, var(--p-dark-pink-900, var(--p-pink-0)));
    padding: var(--p-input-padding, .75rem .75rem);
    border: var(--p-input-border, 1px solid var(--p-dark-pink-600, var(--p-pink-400)));
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    appearance: none; /* //TODO: */
    border-radius: var(--p-border-radius, 6px);
}
.p-inputtext:enabled:hover {
    border-color: var(--p-input-hover-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-inputtext:enabled:focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
    border-color: var(--p-input-focus-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-inputtext.p-invalid.p-component {
    border-color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}
.p-inputtext.p-inputtext-sm { /* //TODO: */
    font-size: calc(var(--p-input-text-font-size, 1rem) * var(--scale-s-m, 0.875));
    padding: calc(var(--p-input-padding-top, .75rem) * var(--scale-s-m, 0.875)) calc(var(--p-input-padding-right, .75rem) * var(--scale-s-m, 0.875));
}
.p-inputtext.p-inputtext-lg { /* //TODO: */
    font-size: calc(var(--p-input-text-font-size, 1rem) * var(--scale-l-g, 1.25));
    padding: calc(var(--p-input-padding-top, .75rem) * var(--scale-l-g, 1.25)) calc(var(--p-input-padding-right, .75rem) * var(--scale-l-g, 1.25));
}

.p-float-label > label {
    left: var(--p-input-padding-left, .75rem);
    color: var(--p-input-placeholder-text-color, var(--p-dark-pink-100, var(--p-pink-600)));
    transition-duration: var(--p-transition-duration, .2s);
}

.p-float-label > .p-invalid + label {
    color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}

.p-input-icon-left > svg:first-of-type,
.p-input-icon-left > i:first-of-type {
    left: var(--p-input-padding-left, .75rem);
    color: var(--p-input-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
}

.p-input-icon-left > .p-inputtext {
    /* padding-left: "nth(var(--p-input-padding), 2) * 2 + var(--p-prime-icon-font-size)"; */
    padding-left: calc(var(--p-input-padding-left, .75rem) * 2 + var(--p-prime-icon-font-size, 1rem));
}

.p-input-icon-left.p-float-label > label {
    /* left: "nth(var(--p-input-padding), 2) * 2 + var(--p-prime-icon-font-size)"; */
    left: calc(var(--p-input-padding-left, .75rem) * 2 + var(--p-prime-icon-font-size, 1rem));
}

.p-input-icon-right > svg:last-of-type,
.p-input-icon-right > i:last-of-type {
    right: var(--p-input-padding-right, .75rem);
    color: var(--p-input-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
}

.p-input-icon-right > .p-inputtext {
    /* padding-right: "nth(var(--p-input-padding), 2) * 2 + var(--p-prime-icon-font-size)"; */
    padding-right: calc(var(--p-input-padding-right, .75rem) * 2 + var(--p-prime-icon-font-size, 1rem));
}

::-webkit-input-placeholder {
    color: var(--p-input-placeholder-text-color, var(--p-dark-pink-100, var(--p-pink-600)));
}

:-moz-placeholder {
    color: var(--p-input-placeholder-text-color, var(--p-dark-pink-100, var(--p-pink-600)));
}

::-moz-placeholder {
    color: var(--p-input-placeholder-text-color, var(--p-dark-pink-100, var(--p-pink-600)));
}

:-ms-input-placeholder {
    color: var(--p-input-placeholder-text-color, var(--p-dark-pink-100, var(--p-pink-600)));
}

.p-input-filled .p-inputtext {
    background-color: var(--p-input-filled-bg, var(--p-dark-pink-600, var(--p-pink-200)));
}
.p-input-filled .p-inputtext:enabled:hover {
    background-color: var(--p-input-filled-hover-bg, var(--p-dark-input-filled-bg, var(--p-input-filled-bg)));
}
.p-input-filled .p-inputtext:enabled:focus {
    background-color: var(--p-input-filled-focus-bg, var(--p-dark-input-filled-bg, var(--p-pink-0)));
}

.p-inputtext-sm .p-inputtext {
    /* font-size: "$val * $scale"; //TODO: duplicate
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale"; */
    font-size: calc(var(--p-input-text-font-size, 1rem) * var(--scale-s-m, 0.875));
    padding: calc(var(--p-input-padding-top, .75rem) * var(--scale-s-m, 0.875)) calc(var(--p-input-padding-right, .75rem) * var(--scale-s-m, 0.875));
}

.p-inputtext-lg .p-inputtext {
    /* font-size: "$val * $scale"; //TODO: duplicate
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale"; */
    font-size: calc(var(--p-input-text-font-size, 1rem) * var(--scale-l-g, 1.25));
    padding: calc(var(--p-input-padding-top, .75rem) * var(--scale-l-g, 1.25)) calc(var(--p-input-padding-right, .75rem) * var(--scale-l-g, 1.25));
}
`;
