export default `
.p-tabview .p-tabview-nav {
    background: var(--p-tabview-nav-bg);
    border: var(--p-tabview-nav-border);
    border-width: var(--p-tabview-nav-border-width);
}
.p-tabview .p-tabview-nav li {
    margin-right: var(--p-tabview-header-spacing);
}
.p-tabview .p-tabview-nav li .p-tabview-nav-link {
    border: var(--p-tabview-header-border);
    border-width: var(--p-tabview-header-border-width);
    border-color: var(--p-tabview-header-border-color);
    background: var(--p-tabview-header-bg);
    color: var(--p-tabview-header-text-color);
    padding: var(--p-tabview-header-padding);
    font-weight: var(--p-tabview-header-font-weight);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
    transition: var(--p-list-item-transition);
    margin: var(--p-tabview-header-margin);
}
.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: inset var(--p-focus-shadow);
}
.p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {
    background: var(--p-tabview-header-hover-bg);
    border-color: var(--p-tabview-header-hover-border-color);
    color: var(--p-tabview-header-text-hover-color);
}
.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background: var(--p-tabview-header-active-bg);
    border-color: var(--p-tabview-header-active-border-color);
    color: var(--p-tabview-header-text-active-color);
}
.p-tabview .p-tabview-nav-btn.p-link {
    background: var(--p-tabview-header-active-bg);
    color: var(--p-tabview-header-text-active-color);
    width: var(--p-button-icon-only-width);
    box-shadow: var(--p-raised-button-shadow);
    border-radius: 0;
}
.p-tabview .p-tabview-nav-btn.p-link:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: inset var(--p-focus-shadow);
}
.p-tabview .p-tabview-panels {
    background: var(--p-tabview-content-bg);
    padding: var(--p-tabview-content-padding);
    border: var(--p-tabview-content-border);
    color: var(--p-tabview-content-text-color);
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link {
    transition:
        background-color var(--p-transition-duration),
        border-color var(--p-transition-duration),
        box-shadow var(--p-transition-duration);
}
`;
