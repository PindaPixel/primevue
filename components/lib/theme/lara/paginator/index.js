export default `
.p-paginator {
    background: var(--p-paginator-bg);
    color: var(--p-paginator-text-color);
    border: var(--p-paginator-border);
    border-width: var(--p-paginator-border-width);
    padding: var(--p-paginator-padding);
    border-radius: var(--p-border-radius);
}
.p-paginator .p-paginator-first,
.p-paginator .p-paginator-prev,
.p-paginator .p-paginator-next,
.p-paginator .p-paginator-last {
    background-color: var(--p-paginator-element-bg);
    border: var(--p-paginator-element-border);
    color: var(--p-paginator-element-icon-color);
    min-width: var(--p-paginator-element-width);
    height: var(--p-paginator-element-height);
    margin: var(--p-paginator-element-margin);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-paginator-element-border-radius);
}
.p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
    background: var(--p-paginator-element-hover-bg);
    border-color: var(--p-paginator-element-hover-border-color);
    color: var(--p-paginator-element-icon-hover-color);
}
.p-paginator .p-paginator-first {
    border-top-left-radius: var(--p-paginator-element-border-radius);
    border-bottom-left-radius: var(--p-paginator-element-border-radius);
}
.p-paginator .p-paginator-last {
    border-top-right-radius: var(--p-paginator-element-border-radius);
    border-bottom-right-radius: var(--p-paginator-element-border-radius);
}
.p-paginator .p-dropdown {
    margin-left: var(--p-inline-spacing);
    margin-right: var(--p-inline-spacing);
    height: var(--p-paginator-element-height);
}
.p-paginator .p-dropdown .p-dropdown-label {
    padding-right: 0;
}
.p-paginator .p-paginator-page-input {
    margin-left: var(--p-inline-spacing);
    margin-right: var(--p-inline-spacing);
}
.p-paginator .p-paginator-page-input .p-inputtext {
    max-width: var(--p-paginator-element-width);
}
.p-paginator .p-paginator-current {
    background-color: var(--p-paginator-element-bg);
    border: var(--p-paginator-element-border);
    color: var(--p-paginator-element-icon-color);
    min-width: var(--p-paginator-element-width);
    height: var(--p-paginator-element-height);
    margin: var(--p-paginator-element-margin);
    padding: 0 var(--p-inline-spacing);
}
.p-paginator .p-paginator-pages .p-paginator-page {
    background-color: var(--p-paginator-element-bg);
    border: var(--p-paginator-element-border);
    color: var(--p-paginator-element-icon-color);
    min-width: var(--p-paginator-element-width);
    height: var(--p-paginator-element-height);
    margin: var(--p-paginator-element-margin);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-paginator-element-border-radius);
}
.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background: var(--p-highlight-bg);
    border-color: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
    background: var(--p-paginator-element-hover-bg);
    border-color: var(--p-paginator-element-hover-border-color);
    color: var(--p-paginator-element-icon-hover-color);
}
`;
