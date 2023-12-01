export default `
.p-paginator {
    background: #ffffff;
    color: #6b7280;
    border: solid #f3f4f6;
    border-width: 0;
    padding: 0.5rem 1rem;
    border-radius: 6px;
}

.p-paginator .p-paginator-first,
.p-paginator .p-paginator-prev,
.p-paginator .p-paginator-next,
.p-paginator .p-paginator-last {
    background-color: transparent;
    border: 0 none;
    color: #6b7280;
    min-width: 3rem;
    height: 3rem;
    margin: 0.143rem;
    transition: box-shadow 0.2s;
    border-radius: 50%;
}

.p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
    background: #f3f4f6;
    border-color: transparent;
    color: #374151;
}

.p-paginator .p-paginator-first {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
}

.p-paginator .p-paginator-last {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
}

.p-paginator .p-dropdown {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    height: 3rem;
}

.p-paginator .p-dropdown .p-dropdown-label {
    padding-right: 0;
}

.p-paginator .p-paginator-page-input {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

.p-paginator .p-paginator-page-input .p-inputtext {
    max-width: 3rem;
}

.p-paginator .p-paginator-current {
    background-color: transparent;
    border: 0 none;
    color: #6b7280;
    min-width: 3rem;
    height: 3rem;
    margin: 0.143rem;
    padding: 0 0.5rem;
}

.p-paginator .p-paginator-pages .p-paginator-page {
    background-color: transparent;
    border: 0 none;
    color: #6b7280;
    min-width: 3rem;
    height: 3rem;
    margin: 0.143rem;
    transition: box-shadow 0.2s;
    border-radius: 50%;
}

.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background: #0f766e;
    border-color: #0f766e;
    color: #0f766e;
}

.p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
    background: #f3f4f6;
    border-color: transparent;
    color: #374151;
}
`;
