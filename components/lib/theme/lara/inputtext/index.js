export default `
.p-inputtext {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: var(--p-input-text-font-size);
    color: var(--p-input-text-color);
    background: var(--p-input-bg);
    padding: var(--p-input-padding);
    border: var(--p-input-border);
    transition: var(--p-form-element-transition);
    appearance: none;
    border-radius: var(--p-border-radius);
}
.p-inputtext:enabled:hover {
    border-color: var(--p-input-hover-border-color);
}
.p-inputtext:enabled:focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color);
}
.p-inputtext.p-invalid.p-component {
    border-color: var(--p-input-error-border-color);
}
.p-inputtext.p-inputtext-sm {
    font-size: "$val * $scale";
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-inputtext.p-inputtext-lg {
    font-size: "$val * $scale";
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}

.p-float-label > label {
    left: "nth(var(--p-input-padding), 2)";
    color: var(--p-input-placeholder-text-color);
    transition-duration: var(--p-transition-duration);
}

.p-float-label > .p-invalid + label {
    color: var(--p-input-error-border-color);
}

.p-input-icon-left > svg:first-of-type,
.p-input-icon-left > i:first-of-type {
    left: "nth(var(--p-input-padding), 2)";
    color: var(--p-input-icon-color);
}

.p-input-icon-left > .p-inputtext {
    padding-left: "nth(var(--p-input-padding), 2) * 2 + var(--p-prime-icon-font-size)";
}

.p-input-icon-left.p-float-label > label {
    left: "nth(var(--p-input-padding), 2) * 2 + var(--p-prime-icon-font-size)";
}

.p-input-icon-right > svg:last-of-type,
.p-input-icon-right > i:last-of-type {
    right: "nth(var(--p-input-padding), 2)";
    color: var(--p-input-icon-color);
}

.p-input-icon-right > .p-inputtext {
    padding-right: "nth(var(--p-input-padding), 2) * 2 + var(--p-prime-icon-font-size)";
}

::-webkit-input-placeholder {
    color: var(--p-input-placeholder-text-color);
}

:-moz-placeholder {
    color: var(--p-input-placeholder-text-color);
}

::-moz-placeholder {
    color: var(--p-input-placeholder-text-color);
}

:-ms-input-placeholder {
    color: var(--p-input-placeholder-text-color);
}

.p-input-filled .p-inputtext {
    background-color: var(--p-input-filled-bg);
}
.p-input-filled .p-inputtext:enabled:hover {
    background-color: var(--p-input-filled-hover-bg);
}
.p-input-filled .p-inputtext:enabled:focus {
    background-color: var(--p-input-filled-focus-bg);
}

.p-inputtext-sm .p-inputtext {
    font-size: "$val * $scale";
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}

.p-inputtext-lg .p-inputtext {
    font-size: "$val * $scale";
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
`;
