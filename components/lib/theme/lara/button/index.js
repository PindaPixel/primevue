export default `
.p-button {
    color: var(--p-button-text-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
    background: var(--p-button-bg, var(--p-dark-primary-color, var(--p-primary-color)));
    border: var(--p-button-border, 1px solid var(--p-dark-primary-color, var(--p-primary-color)));
    padding: var(--p-button-padding, .75rem 1.25rem);
    font-size: var(--p-font-size, 1rem);
    transition: var(--p-form-element-transition); /* //TODO: */
    border-radius: var(--p-border-radius, 6px);
}
.p-button:not(:disabled):hover {
    background: var(--p-button-hover-bg, var(--p-dark-primary-light-color, var(--p-primary-dark-color)));
    color: var(--p-button-text-hover-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
    border-color: var(--p-button-hover-border-color, var(--p-dark-primary-light-color, var(--p-primary-dark-color)));
}
.p-button:not(:disabled):active {
    background: var(--p-button-active-bg, var(--p-dark-primary-lighter-color, var(--p-primary-darker-color)));
    color: var(--p-button-text-active-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
    border-color: var(--p-button-active-border-color, var(--p-dark-primary-lighter-color, var(--p-primary-darker-color)));
}
.p-button.p-button-outlined {
    background-color: transparent; /* //TODO: */
    color: var(--p-button-bg, var(--p-dark-primary-color, var(--p-primary-color)));
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-outlined:not(:disabled):hover {
    background: rgba(var(--p-button-bg, var(--p-dark-primary-color, var(--p-primary-color))), var(--p-text-button-hover-bg-opacity, .04));
    color: var(--p-button-bg, var(--p-dark-primary-color, var(--p-primary-color)));
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-outlined:not(:disabled):active {
    background: rgba(var(--p-button-bg, var(--p-dark-primary-color, var(--p-primary-color))), var(--p-text-button-active-bg-opacity));
    color: var(--p-button-bg, var(--p-dark-primary-color, var(--p-primary-color)));
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-outlined.p-button-plain {
    color: var(--p-plain-button-text-color, var(--p-dark-text-secondary-color, var(--p-text-secondary-color)));
    border-color: var(--p-plain-button-border-color, var(--p-dark-text-secondary-color, var(--p-text-secondary-color)));
}
.p-button.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: var(--p-plain-button-hover-bg-color, var(--p-dark-pink-900, var(--p-pink-200)));
    color: var(--p-plain-button-text-color, var(--p-dark-text-secondary-color, var(--p-text-secondary-color)));
}
.p-button.p-button-outlined.p-button-plain:not(:disabled):active {
    background: var(--p-plain-button-active-bg-color, var(rgba(255,255,255,.16), var(--p-pink-300)));
    color: var(--p-plain-button-text-color, var(--p-dark-text-secondary-color, var(--p-text-secondary-color)));
}
.p-button.p-button-text {
    background-color: transparent; /* //TODO: */
    color: var(--p-button-bg, var(--p-dark-primary-color, var(--p-primary-color)));
    border-color: transparent; /* //TODO: */
}
.p-button.p-button-text:not(:disabled):hover {
    background: rgba(var(--p-button-bg, var(--p-dark-primary-color, var(--p-primary-color))), var(--p-text-button-hover-bg-opacity));
    color: var(--p-button-bg, var(--p-dark-primary-color, var(--p-primary-color)));
    border-color: transparent; /* //TODO: */
}
.p-button.p-button-text:not(:disabled):active {
    background: rgba(var(--p-button-bg, var(--p-dark-primary-color, var(--p-primary-color))), var(--p-text-button-active-bg-opacity));
    color: var(--p-button-bg, var(--p-dark-primary-color, var(--p-primary-color)));
    border-color: transparent; /* //TODO: */
}
.p-button.p-button-text.p-button-plain {
    color: var(--p-plain-button-text-color, var(--p-dark-text-secondary-color, var(--p-text-secondary-color)));
}
.p-button.p-button-text.p-button-plain:not(:disabled):hover {
    background: var(--p-plain-button-hover-bg-color, var(--p-dark-pink-900, var(--p-pink-200)));
    color: var(--p-plain-button-text-color, var(--p-dark-text-secondary-color, var(--p-text-secondary-color)));
}
.p-button.p-button-text.p-button-plain:not(:disabled):active {
    background: var(--p-plain-button-active-bg-color, var(rgba(255,255,255,.16), var(--p-pink-300)));
    color: var(--p-plain-button-text-color, var(--p-dark-text-secondary-color, var(--p-text-secondary-color)));
}
.p-button:focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-button .p-button-label {
    transition-duration: var(--p-transition-duration, .2s);
}
.p-button .p-button-icon-left {
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-button .p-button-icon-right {
    margin-left: var(--p-inline-spacing, .5rem);
}
.p-button .p-button-icon-bottom {
    margin-top: var(--p-inline-spacing, .5rem);
}
.p-button .p-button-icon-top {
    margin-bottom: var(--p-inline-spacing, .5rem);
}
.p-button .p-badge {
    margin-left: var(--p-inline-spacing, .5rem);
    min-width: var(--p-font-size, 1rem);
    height: var(--p-font-size, 1rem);
    line-height: var(--p-font-size, 1rem);
    color: var(--p-button-bg, var(--p-dark-primary-color, var(--p-primary-color)));
    background-color: var(--p-button-text-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
}
.p-button.p-button-raised {
    box-shadow: var(--p-raised-button-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.p-button.p-button-rounded {
    border-radius: var(--p-rounded-button-border-radius, 2rem);
}
.p-button.p-button-icon-only {
    width: var(--p-button-icon-only-width, 3rem);
    padding: var(--p-button-icon-only-padding, .75rem 0);
}
.p-button.p-button-icon-only .p-button-icon-left,
.p-button.p-button-icon-only .p-button-icon-right {
    margin: var(--p-button-icon-only-margin, 0);
}
.p-button.p-button-icon-only.p-button-rounded {
    border-radius: var(--p-button-icon-only-rounded-border-radius, 50%);
    height: var(--p-button-icon-only-width, 3rem);
}
.p-button.p-button-sm { /* //TODO: */
    font-size: "$val * $scale";
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-button.p-button-sm .p-button-icon {
    font-size: "$val * $scale";
}
.p-button.p-button-lg {
    font-size: "$val * $scale";
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-button.p-button-lg .p-button-icon {
    font-size: "$val * $scale";
}
.p-button.p-button-loading-label-only .p-button-label {
    margin-left: var(--p-inline-spacing, .5rem);
}
.p-button.p-button-loading-label-only .p-button-loading-icon {
    margin-right: 0; /* //TODO: */
}

.p-fluid .p-button {
    width: 100%;
}
.p-fluid .p-button-icon-only {
    width: var(--p-button-icon-only-width, 3rem);
}
.p-fluid .p-buttonset {
    display: flex;
}
.p-fluid .p-buttonset .p-button {
    flex: 1;
}
.p-button.p-button-secondary,
.p-buttonset.p-button-secondary > .p-button {
    color: var(--p-secondary-button-text-color);
    background: var(--p-secondary-button-bg);
    border: var(--p-secondary-button-border);
}
.p-button.p-button-secondary:not(:disabled):hover,
.p-buttonset.p-button-secondary > .p-button:not(:disabled):hover {
    background: var(--p-secondary-button-hover-bg);
    color: var(--p-secondary-button-text-hover-color);
    border-color: var(--p-secondary-button-hover-border-color);
}
.p-button.p-button-secondary:not(:disabled):focus,
.p-buttonset.p-button-secondary > .p-button:not(:disabled):focus {
    box-shadow: var(--p-secondary-button-focus-shadow);
}
.p-button.p-button-secondary:not(:disabled):active,
.p-buttonset.p-button-secondary > .p-button:not(:disabled):active {
    background: var(--p-secondary-button-active-bg);
    color: var(--p-secondary-button-text-active-color);
    border-color: var(--p-secondary-button-active-border-color);
}
.p-button.p-button-secondary.p-button-outlined,
.p-buttonset.p-button-secondary > .p-button.p-button-outlined {
    background-color: transparent;
    color: var(--p-secondary-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-secondary.p-button-outlined:not(:disabled):hover,
.p-buttonset.p-button-secondary > .p-button.p-button-outlined:not(:disabled):hover {
    background: rgba(var(--p-secondary-button-bg), var(--p-text-button-hover-bg-opacity));
    color: var(--p-secondary-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-secondary.p-button-outlined:not(:disabled):active,
.p-buttonset.p-button-secondary > .p-button.p-button-outlined:not(:disabled):active {
    background: rgba(var(--p-secondary-button-bg), var(--p-text-button-active-bg-opacity));
    color: var(--p-secondary-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-secondary.p-button-text,
.p-buttonset.p-button-secondary > .p-button.p-button-text {
    background-color: transparent;
    color: var(--p-secondary-button-bg);
    border-color: transparent;
}
.p-button.p-button-secondary.p-button-text:not(:disabled):hover,
.p-buttonset.p-button-secondary > .p-button.p-button-text:not(:disabled):hover {
    background: rgba(var(--p-secondary-button-bg), var(--p-text-button-hover-bg-opacity));
    border-color: transparent;
    color: var(--p-secondary-button-bg);
}
.p-button.p-button-secondary.p-button-text:not(:disabled):active,
.p-buttonset.p-button-secondary > .p-button.p-button-text:not(:disabled):active {
    background: rgba(var(--p-secondary-button-bg), var(--p-text-button-active-bg-opacity));
    border-color: transparent;
    color: var(--p-secondary-button-bg);
}

.p-button.p-button-info,
.p-buttonset.p-button-info > .p-button {
    color: var(--p-info-button-text-color);
    background: var(--p-info-button-bg);
    border: var(--p-info-button-border);
}
.p-button.p-button-info:not(:disabled):hover,
.p-buttonset.p-button-info > .p-button:not(:disabled):hover {
    background: var(--p-info-button-hover-bg);
    color: var(--p-info-button-text-hover-color);
    border-color: var(--p-info-button-hover-border-color);
}
.p-button.p-button-info:not(:disabled):focus,
.p-buttonset.p-button-info > .p-button:not(:disabled):focus {
    box-shadow: var(--p-info-button-focus-shadow);
}
.p-button.p-button-info:not(:disabled):active,
.p-buttonset.p-button-info > .p-button:not(:disabled):active {
    background: var(--p-info-button-active-bg);
    color: var(--p-info-button-text-active-color);
    border-color: var(--p-info-button-active-border-color);
}
.p-button.p-button-info.p-button-outlined,
.p-buttonset.p-button-info > .p-button.p-button-outlined {
    background-color: transparent;
    color: var(--p-info-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-info.p-button-outlined:not(:disabled):hover,
.p-buttonset.p-button-info > .p-button.p-button-outlined:not(:disabled):hover {
    background: rgba(var(--p-info-button-bg), var(--p-text-button-hover-bg-opacity));
    color: var(--p-info-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-info.p-button-outlined:not(:disabled):active,
.p-buttonset.p-button-info > .p-button.p-button-outlined:not(:disabled):active {
    background: rgba(var(--p-info-button-bg), var(--p-text-button-active-bg-opacity));
    color: var(--p-info-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-info.p-button-text,
.p-buttonset.p-button-info > .p-button.p-button-text {
    background-color: transparent;
    color: var(--p-info-button-bg);
    border-color: transparent;
}
.p-button.p-button-info.p-button-text:not(:disabled):hover,
.p-buttonset.p-button-info > .p-button.p-button-text:not(:disabled):hover {
    background: rgba(var(--p-info-button-bg), var(--p-text-button-hover-bg-opacity));
    border-color: transparent;
    color: var(--p-info-button-bg);
}
.p-button.p-button-info.p-button-text:not(:disabled):active,
.p-buttonset.p-button-info > .p-button.p-button-text:not(:disabled):active {
    background: rgba(var(--p-info-button-bg), var(--p-text-button-active-bg-opacity));
    border-color: transparent;
    color: var(--p-info-button-bg);
}

.p-button.p-button-success,
.p-buttonset.p-button-success > .p-button {
    color: var(--p-success-button-text-color);
    background: var(--p-success-button-bg);
    border: var(--p-success-button-border);
}
.p-button.p-button-success:not(:disabled):hover,
.p-buttonset.p-button-success > .p-button:not(:disabled):hover {
    background: var(--p-success-button-hover-bg);
    color: var(--p-success-button-text-hover-color);
    border-color: var(--p-success-button-hover-border-color);
}
.p-button.p-button-success:not(:disabled):focus,
.p-buttonset.p-button-success > .p-button:not(:disabled):focus {
    box-shadow: var(--p-success-button-focus-shadow);
}
.p-button.p-button-success:not(:disabled):active,
.p-buttonset.p-button-success > .p-button:not(:disabled):active {
    background: var(--p-success-button-active-bg);
    color: var(--p-success-button-text-active-color);
    border-color: var(--p-success-button-active-border-color);
}
.p-button.p-button-success.p-button-outlined,
.p-buttonset.p-button-success > .p-button.p-button-outlined {
    background-color: transparent;
    color: var(--p-success-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-success.p-button-outlined:not(:disabled):hover,
.p-buttonset.p-button-success > .p-button.p-button-outlined:not(:disabled):hover {
    background: rgba(var(--p-success-button-bg), var(--p-text-button-hover-bg-opacity));
    color: var(--p-success-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-success.p-button-outlined:not(:disabled):active,
.p-buttonset.p-button-success > .p-button.p-button-outlined:not(:disabled):active {
    background: rgba(var(--p-success-button-bg), var(--p-text-button-active-bg-opacity));
    color: var(--p-success-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-success.p-button-text,
.p-buttonset.p-button-success > .p-button.p-button-text {
    background-color: transparent;
    color: var(--p-success-button-bg);
    border-color: transparent;
}
.p-button.p-button-success.p-button-text:not(:disabled):hover,
.p-buttonset.p-button-success > .p-button.p-button-text:not(:disabled):hover {
    background: rgba(var(--p-success-button-bg), var(--p-text-button-hover-bg-opacity));
    border-color: transparent;
    color: var(--p-success-button-bg);
}
.p-button.p-button-success.p-button-text:not(:disabled):active,
.p-buttonset.p-button-success > .p-button.p-button-text:not(:disabled):active {
    background: rgba(var(--p-success-button-bg), var(--p-text-button-active-bg-opacity));
    border-color: transparent;
    color: var(--p-success-button-bg);
}

.p-button.p-button-warning,
.p-buttonset.p-button-warning > .p-button {
    color: var(--p-warning-button-text-color);
    background: var(--p-warning-button-bg);
    border: var(--p-warning-button-border);
}
.p-button.p-button-warning:not(:disabled):hover,
.p-buttonset.p-button-warning > .p-button:not(:disabled):hover {
    background: var(--p-warning-button-hover-bg);
    color: var(--p-warning-button-text-hover-color);
    border-color: var(--p-warning-button-hover-border-color);
}
.p-button.p-button-warning:not(:disabled):focus,
.p-buttonset.p-button-warning > .p-button:not(:disabled):focus {
    box-shadow: var(--p-warning-button-focus-shadow);
}
.p-button.p-button-warning:not(:disabled):active,
.p-buttonset.p-button-warning > .p-button:not(:disabled):active {
    background: var(--p-warning-button-active-bg);
    color: var(--p-warning-button-text-active-color);
    border-color: var(--p-warning-button-active-border-color);
}
.p-button.p-button-warning.p-button-outlined,
.p-buttonset.p-button-warning > .p-button.p-button-outlined {
    background-color: transparent;
    color: var(--p-warning-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-warning.p-button-outlined:not(:disabled):hover,
.p-buttonset.p-button-warning > .p-button.p-button-outlined:not(:disabled):hover {
    background: rgba(var(--p-warning-button-bg), var(--p-text-button-hover-bg-opacity));
    color: var(--p-warning-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-warning.p-button-outlined:not(:disabled):active,
.p-buttonset.p-button-warning > .p-button.p-button-outlined:not(:disabled):active {
    background: rgba(var(--p-warning-button-bg), var(--p-text-button-active-bg-opacity));
    color: var(--p-warning-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-warning.p-button-text,
.p-buttonset.p-button-warning > .p-button.p-button-text {
    background-color: transparent;
    color: var(--p-warning-button-bg);
    border-color: transparent;
}
.p-button.p-button-warning.p-button-text:not(:disabled):hover,
.p-buttonset.p-button-warning > .p-button.p-button-text:not(:disabled):hover {
    background: rgba(var(--p-warning-button-bg), var(--p-text-button-hover-bg-opacity));
    border-color: transparent;
    color: var(--p-warning-button-bg);
}
.p-button.p-button-warning.p-button-text:not(:disabled):active,
.p-buttonset.p-button-warning > .p-button.p-button-text:not(:disabled):active {
    background: rgba(var(--p-warning-button-bg), var(--p-text-button-active-bg-opacity));
    border-color: transparent;
    color: var(--p-warning-button-bg);
}
.p-button.p-button-help,
.p-buttonset.p-button-help > .p-button {
    color: var(--p-help-button-text-color);
    background: var(--p-help-button-bg);
    border: var(--p-help-button-border);
}
.p-button.p-button-help:not(:disabled):hover,
.p-buttonset.p-button-help > .p-button:not(:disabled):hover {
    background: var(--p-help-button-hover-bg);
    color: var(--p-help-button-text-hover-color);
    border-color: var(--p-help-button-hover-border-color);
}
.p-button.p-button-help:not(:disabled):focus,
.p-buttonset.p-button-help > .p-button:not(:disabled):focus {
    box-shadow: var(--p-help-button-focus-shadow);
}
.p-button.p-button-help:not(:disabled):active,
.p-buttonset.p-button-help > .p-button:not(:disabled):active {
    background: var(--p-help-button-active-bg);
    color: var(--p-help-button-text-active-color);
    border-color: var(--p-help-button-active-border-color);
}
.p-button.p-button-help.p-button-outlined,
.p-buttonset.p-button-help > .p-button.p-button-outlined {
    background-color: transparent;
    color: var(--p-help-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-help.p-button-outlined:not(:disabled):hover,
.p-buttonset.p-button-help > .p-button.p-button-outlined:not(:disabled):hover {
    background: rgba(var(--p-help-button-bg), var(--p-text-button-hover-bg-opacity));
    color: var(--p-help-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-help.p-button-outlined:not(:disabled):active,
.p-buttonset.p-button-help > .p-button.p-button-outlined:not(:disabled):active {
    background: rgba(var(--p-help-button-bg), var(--p-text-button-active-bg-opacity));
    color: var(--p-help-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-help.p-button-text,
.p-buttonset.p-button-help > .p-button.p-button-text {
    background-color: transparent;
    color: var(--p-help-button-bg);
    border-color: transparent;
}
.p-button.p-button-help.p-button-text:not(:disabled):hover,
.p-buttonset.p-button-help > .p-button.p-button-text:not(:disabled):hover {
    background: rgba(var(--p-help-button-bg), var(--p-text-button-hover-bg-opacity));
    border-color: transparent;
    color: var(--p-help-button-bg);
}
.p-button.p-button-help.p-button-text:not(:disabled):active,
.p-buttonset.p-button-help > .p-button.p-button-text:not(:disabled):active {
    background: rgba(var(--p-help-button-bg), var(--p-text-button-active-bg-opacity));
    border-color: transparent;
    color: var(--p-help-button-bg);
}

.p-button.p-button-danger,
.p-buttonset.p-button-danger > .p-button {
    color: var(--p-danger-button-text-color);
    background: var(--p-danger-button-bg);
    border: var(--p-danger-button-border);
}
.p-button.p-button-danger:not(:disabled):hover,
.p-buttonset.p-button-danger > .p-button:not(:disabled):hover {
    background: var(--p-danger-button-hover-bg);
    color: var(--p-danger-button-text-hover-color);
    border-color: var(--p-danger-button-hover-border-color);
}
.p-button.p-button-danger:not(:disabled):focus,
.p-buttonset.p-button-danger > .p-button:not(:disabled):focus {
    box-shadow: var(--p-danger-button-focus-shadow);
}
.p-button.p-button-danger:not(:disabled):active,
.p-buttonset.p-button-danger > .p-button:not(:disabled):active {
    background: var(--p-danger-button-active-bg);
    color: var(--p-danger-button-text-active-color);
    border-color: var(--p-danger-button-active-border-color);
}
.p-button.p-button-danger.p-button-outlined,
.p-buttonset.p-button-danger > .p-button.p-button-outlined {
    background-color: transparent;
    color: var(--p-danger-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-danger.p-button-outlined:not(:disabled):hover,
.p-buttonset.p-button-danger > .p-button.p-button-outlined:not(:disabled):hover {
    background: rgba(var(--p-danger-button-bg), var(--p-text-button-hover-bg-opacity));
    color: var(--p-danger-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-danger.p-button-outlined:not(:disabled):active,
.p-buttonset.p-button-danger > .p-button.p-button-outlined:not(:disabled):active {
    background: rgba(var(--p-danger-button-bg), var(--p-text-button-active-bg-opacity));
    color: var(--p-danger-button-bg);
    border: var(--p-outlined-button-border, 1px solid);
}
.p-button.p-button-danger.p-button-text,
.p-buttonset.p-button-danger > .p-button.p-button-text {
    background-color: transparent;
    color: var(--p-danger-button-bg);
    border-color: transparent;
}
.p-button.p-button-danger.p-button-text:not(:disabled):hover,
.p-buttonset.p-button-danger > .p-button.p-button-text:not(:disabled):hover {
    background: rgba(var(--p-danger-button-bg), var(--p-text-button-hover-bg-opacity));
    border-color: transparent;
    color: var(--p-danger-button-bg);
}
.p-button.p-button-danger.p-button-text:not(:disabled):active,
.p-buttonset.p-button-danger > .p-button.p-button-text:not(:disabled):active {
    background: rgba(var(--p-danger-button-bg), var(--p-text-button-active-bg-opacity));
    border-color: transparent;
    color: var(--p-danger-button-bg);
}
.p-button.p-button-link {
    color: var(--p-link-button-color);
    background: transparent;
    border: transparent;
}
.p-button.p-button-link:not(:disabled):hover {
    background: transparent;
    color: var(--p-link-button-hover-color);
    border-color: transparent;
}
.p-button.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: var(--p-link-button-text-hover-decoration);
}
.p-button.p-button-link:not(:disabled):focus {
    background: transparent;
    box-shadow: var(--p-link-button-focus-shadow);
    border-color: transparent;
}
.p-button.p-button-link:not(:disabled):active {
    background: transparent;
    color: var(--p-link-button-color);
    border-color: transparent;
}
.p-button-label {
    font-weight: 700;
}

.p-button:focus {
    box-shadow:
        0 0 0 2px #ffffff,
        0 0 0 4px "scale-color($buttonBg, $lightness: 50%)",
        0 1px 2px 0 black;
}
.p-button.p-button-secondary:enabled:focus {
    box-shadow:
        0 0 0 2px #ffffff,
        0 0 0 4px "scale-color($secondaryButtonBg, $lightness: 50%)",
        0 1px 2px 0 black;
}
.p-button.p-button-success:enabled:focus {
    box-shadow:
        0 0 0 2px #ffffff,
        0 0 0 4px "scale-color($successButtonBg, $lightness: 50%)",
        0 1px 2px 0 black;
}
.p-button.p-button-info:enabled:focus {
    box-shadow:
        0 0 0 2px #ffffff,
        0 0 0 4px "scale-color($infoButtonBg, $lightness: 50%)",
        0 1px 2px 0 black;
}
.p-button.p-button-warning:enabled:focus {
    box-shadow:
        0 0 0 2px #ffffff,
        0 0 0 4px "scale-color($warningButtonBg, $lightness: 50%)",
        0 1px 2px 0 black;
}
.p-button.p-button-help:enabled:focus {
    box-shadow:
        0 0 0 2px #ffffff,
        0 0 0 4px "scale-color($helpButtonBg, $lightness: 50%)",
        0 1px 2px 0 black;
}
.p-button.p-button-danger:enabled:focus {
    box-shadow:
        0 0 0 2px #ffffff,
        0 0 0 4px "scale-color($dangerButtonBg, $lightness: 50%)",
        0 1px 2px 0 black;
}
`;
