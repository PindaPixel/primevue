export default `
.p-tabview .p-tabview-nav {
    background: var(--p-tabview-nav-bg, var(transparent, var(--p-pink-0)));
    border: var(--p-tabview-nav-border-color, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    border-width: var(--p-tabview-nav-border-width, 0 0 2px 0);
}
.p-tabview .p-tabview-nav li {
    margin-right: var(--p-tabview-header-spacing, 0);
}
.p-tabview .p-tabview-nav li .p-tabview-nav-link {
    border: var(--p-tabview-header-border, solid var(--p-dark-pink-600, var(--p-pink-300)));
    border-width: var(--p-tabview-header-border-width, 0 0 2px 0);
    border-color: var(--p-tabview-header-border-color, transparent transparent var(--p-dark-pink-600, var(--p-pink-300)) transparent);
    background: var(--p-tabview-header-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    color: var(--p-tabview-header-text-color, var(--p-dark-pink-100, var(--p-pink-600)));
    padding: var(--p-tabview-header-padding, 1.25rem);
    font-weight: var(--p-tabview-header-font-weight, 700);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    margin: var(--p-tabview-header-margin, 0 0 -2px 0);
}
.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: inset var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {
    background: var(--p-tabview-header-hover-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    border-color: var(--p-tabview-header-hover-border-color, var(--p-dark-primary-color, var(--p-pink-500)));
    color: var(--p-tabview-header-text-hover-color, var(--p-dark-pink-0, var(--p-pink-600)));
}
.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background: var(--p-tabview-header-active-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    border-color: var(--p-tabview-header-active-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
    color: var(--p-tabview-header-text-active-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-tabview .p-tabview-nav-btn.p-link {
    background: var(--p-tabview-header-active-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    color: var(--p-tabview-header-text-active-color, var(--p-dark-primary-color, var(--p-primary-color)));
    width: var(--p-tabview-header-width, 3rem);
    box-shadow: var(--p-tabview-header-box-shadow, px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
    border-radius: 0;
}
.p-tabview .p-tabview-nav-btn.p-link:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: inset var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-tabview .p-tabview-panels {
    background: var(--p-tabview-content-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    padding: var(--p-tabview-content-padding, 1.25rem);
    border: var(--p-tabview-content-border, 0 none);
    color: var(--p-tabview-content-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
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
