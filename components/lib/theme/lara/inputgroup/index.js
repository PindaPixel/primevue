export default `
.p-inputgroup-addon {
    background: var(--p-input-group-bg);
    color: var(--p-input-group-text-color);
    border-top: var(--p-input-border);
    border-left: var(--p-input-border);
    border-bottom: var(--p-input-border);
    padding: var(--p-input-padding);
    min-width: var(--p-input-group-add-on-min-width);
}
.p-inputgroup-addon:last-child {
    border-right: var(--p-input-border);
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-inputtext,
.p-inputgroup > .p-float-label > .p-component {
    border-radius: 0;
    margin: 0;
}
.p-inputgroup > .p-component + .p-inputgroup-addon,
.p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroup-addon,
.p-inputgroup > .p-float-label > .p-component + .p-inputgroup-addon {
    border-left: 0 none;
}
.p-inputgroup > .p-component:focus,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
.p-inputgroup > .p-float-label > .p-component:focus {
    z-index: 1;
}
.p-inputgroup > .p-component:focus ~ label,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus ~ label,
.p-inputgroup > .p-float-label > .p-component:focus ~ label {
    z-index: 1;
}

.p-inputgroup-addon:first-child,
.p-inputgroup button:first-child,
.p-inputgroup input:first-child,
.p-inputgroup > .p-inputwrapper:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
    border-top-left-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}

.p-inputgroup .p-float-label:first-child input {
    border-top-left-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}

.p-inputgroup-addon:last-child,
.p-inputgroup button:last-child,
.p-inputgroup input:last-child,
.p-inputgroup > .p-inputwrapper:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
    border-top-right-radius: var(--p-border-radius);
    border-bottom-right-radius: var(--p-border-radius);
}

.p-inputgroup .p-float-label:last-child input {
    border-top-right-radius: var(--p-border-radius);
    border-bottom-right-radius: var(--p-border-radius);
}

.p-fluid .p-inputgroup .p-button {
    width: auto;
}
.p-fluid .p-inputgroup .p-button.p-button-icon-only {
    width: var(--p-button-icon-only-width);
}
`;
