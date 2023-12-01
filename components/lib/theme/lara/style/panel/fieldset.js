export default `
.p-fieldset {
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    border-radius: 6px;
}

.p-fieldset .p-fieldset-legend {
    padding: 1.25rem;
    border: 1px solid #e5e7eb;
    color: #374151;
    background: #f9fafb;
    font-weight: 700;
    border-radius: 6px;
}

.p-fieldset.p-fieldset-toggleable .p-fieldset-legend {
    padding: 0;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

.p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {
    padding: 1.25rem;
    color: #374151;
    border-radius: 6px;
    transition: box-shadow 0.2s;
}

.p-fieldset.p-fieldset-toggleable .p-fieldset-legend a .p-fieldset-toggler {
    margin-right: 0.5rem;
}

.p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:hover {
    color: #374151;
}

.p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {
    background: #f3f4f6;
    border-color: #e5e7eb;
    color: #374151;
}

.p-fieldset .p-fieldset-content {
    padding: 1.25rem;
}
`;
