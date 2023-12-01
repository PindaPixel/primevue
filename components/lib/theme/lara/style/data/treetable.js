export default `
.p-treetable .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-treetable .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-treetable .p-treetable-header {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 700;
}

.p-treetable .p-treetable-footer {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 700;
}

.p-treetable .p-treetable-thead>tr>th {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    font-weight: 700;
    color: #374151;
    background: #f9fafb;
    transition: box-shadow 0.2s;
}

.p-treetable .p-treetable-tfoot>tr>td {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    font-weight: 700;
    color: #374151;
    background: #f9fafb;
}

.p-treetable .p-sortable-column {
    outline-color: #99f6e4;
}

.p-treetable .p-sortable-column .p-sortable-column-icon {
    color: #374151;
    margin-left: 0.5rem;
}

.p-treetable .p-sortable-column .p-sortable-column-badge {
    border-radius: 50%;
    height: 1.143rem;
    min-width: 1.143rem;
    line-height: 1.143rem;
    color: #0f766e;
    background: #0f766e;
    margin-left: 0.5rem;
}

.p-treetable .p-sortable-column:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #374151;
}

.p-treetable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: #374151;
}

.p-treetable .p-sortable-column.p-highlight {
    background: #0f766e;
    color: #0f766e;
}

.p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: #0f766e;
}

.p-treetable .p-treetable-tbody>tr {
    background: #ffffff;
    color: #4b5563;
    transition: box-shadow 0.2s;
}

.p-treetable .p-treetable-tbody>tr>td {
    text-align: left;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    padding: 1rem 1rem;
}

.p-treetable .p-treetable-tbody>tr>td .p-treetable-toggler {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    margin-right: 0.5rem;
}

.p-treetable .p-treetable-tbody>tr>td .p-treetable-toggler:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
}

.p-treetable .p-treetable-tbody>tr>td .p-treetable-toggler:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-treetable .p-treetable-tbody>tr>td .p-treetable-toggler+.p-checkbox {
    margin-right: 0.5rem;
}

.p-treetable .p-treetable-tbody>tr>td .p-treetable-toggler+.p-checkbox .p-indeterminate .p-checkbox-icon {
    color: #4b5563;
}

.p-treetable .p-treetable-tbody>tr:focus-visible {
    outline: 0.15rem solid #99f6e4;
    outline-offset: -0.15rem;
}

.p-treetable .p-treetable-tbody>tr.p-highlight {
    background: #0f766e;
    color: #0f766e;
}

.p-treetable .p-treetable-tbody>tr.p-highlight .p-treetable-toggler {
    color: #0f766e;
}

.p-treetable .p-treetable-tbody>tr.p-highlight .p-treetable-toggler:hover {
    color: #0f766e;
}

.p-treetable.p-treetable-hoverable-rows .p-treetable-tbody>tr:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #4b5563;
}

.p-treetable.p-treetable-hoverable-rows .p-treetable-tbody>tr:not(.p-highlight):hover .p-treetable-toggler {
    color: #4b5563;
}

.p-treetable .p-column-resizer-helper {
    background: #14b8a6;
}

.p-treetable .p-treetable-scrollable-header,
.p-treetable .p-treetable-scrollable-footer {
    background: #f9fafb;
}

.p-treetable .p-treetable-loading-icon {
    font-size: 2rem;
}

.p-treetable .p-treetable-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
}

.p-treetable.p-treetable-gridlines .p-datatable-header {
    border-width: 1px 1px 0 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-top {
    border-width: 0 1px 0 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-bottom {
    border-width: 0 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-thead>tr>th {
    border-width: 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-tbody>tr>td {
    border-width: 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-tfoot>tr>td {
    border-width: 1px;
}

.p-treetable.p-treetable-sm .p-treetable-header {
    padding: 0.875rem 0.875rem;
}

.p-treetable.p-treetable-sm .p-treetable-thead>tr>th {
    padding: 0.5rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-tbody>tr>td {
    padding: 0.5rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-tfoot>tr>td {
    padding: 0.5rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-footer {
    padding: 0.5rem 0.5rem;
}

.p-treetable.p-treetable-lg .p-treetable-header {
    padding: 1.25rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-thead>tr>th {
    padding: 1.25rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-tbody>tr>td {
    padding: 1.25rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-tfoot>tr>td {
    padding: 1.25rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-footer {
    padding: 1.25rem 1.25rem;
}
`;
