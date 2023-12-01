export default `
.p-datatable .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-datatable .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-datatable .p-datatable-header {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 700;
}

.p-datatable .p-datatable-footer {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 700;
}

.p-datatable .p-datatable-thead>tr>th {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    font-weight: 700;
    color: #374151;
    background: #f9fafb;
    transition: box-shadow 0.2s;
}

.p-datatable .p-datatable-tfoot>tr>td {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    font-weight: 700;
    color: #374151;
    background: #f9fafb;
}

.p-datatable .p-sortable-column .p-sortable-column-icon {
    color: #374151;
    margin-left: 0.5rem;
}

.p-datatable .p-sortable-column .p-sortable-column-badge {
    border-radius: 50%;
    height: 1.143rem;
    min-width: 1.143rem;
    line-height: 1.143rem;
    color: #0f766e;
    background: #0f766e;
    margin-left: 0.5rem;
}

.p-datatable .p-sortable-column:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #374151;
}

.p-datatable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: #374151;
}

.p-datatable .p-sortable-column.p-highlight {
    background: #0f766e;
    color: #0f766e;
}

.p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: #0f766e;
}

.p-datatable .p-sortable-column.p-highlight:hover {
    background: #0f766e;
    color: #0f766e;
}

.p-datatable .p-sortable-column.p-highlight:hover .p-sortable-column-icon {
    color: #0f766e;
}

.p-datatable .p-sortable-column:focus-visible {
    box-shadow: inset 0 0 0 0.15rem #99f6e4;
    outline: 0 none;
}

.p-datatable .p-datatable-tbody>tr {
    background: #ffffff;
    color: #4b5563;
    transition: box-shadow 0.2s;
}

.p-datatable .p-datatable-tbody>tr>td {
    text-align: left;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    padding: 1rem 1rem;
}

.p-datatable .p-datatable-tbody>tr>td .p-row-toggler,
.p-datatable .p-datatable-tbody>tr>td .p-row-editor-init,
.p-datatable .p-datatable-tbody>tr>td .p-row-editor-save,
.p-datatable .p-datatable-tbody>tr>td .p-row-editor-cancel {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

.p-datatable .p-datatable-tbody>tr>td .p-row-toggler:enabled:hover,
.p-datatable .p-datatable-tbody>tr>td .p-row-editor-init:enabled:hover,
.p-datatable .p-datatable-tbody>tr>td .p-row-editor-save:enabled:hover,
.p-datatable .p-datatable-tbody>tr>td .p-row-editor-cancel:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
}

.p-datatable .p-datatable-tbody>tr>td .p-row-toggler:focus-visible,
.p-datatable .p-datatable-tbody>tr>td .p-row-editor-init:focus-visible,
.p-datatable .p-datatable-tbody>tr>td .p-row-editor-save:focus-visible,
.p-datatable .p-datatable-tbody>tr>td .p-row-editor-cancel:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-datatable .p-datatable-tbody>tr>td .p-row-editor-save {
    margin-right: 0.5rem;
}

.p-datatable .p-datatable-tbody>tr>td>.p-column-title {
    font-weight: 700;
}

.p-datatable .p-datatable-tbody>tr:focus-visible {
    outline: 0.15rem solid #99f6e4;
    outline-offset: -0.15rem;
}

.p-datatable .p-datatable-tbody>tr.p-highlight {
    background: #0f766e;
    color: #0f766e;
}

.p-datatable .p-datatable-tbody>tr.p-highlight-contextmenu {
    outline: 0.15rem solid #99f6e4;
    outline-offset: -0.15rem;
}

.p-datatable .p-datatable-tbody>tr.p-datatable-dragpoint-top>td {
    box-shadow: inset 0 2px 0 0 #0f766e;
}

.p-datatable .p-datatable-tbody>tr.p-datatable-dragpoint-bottom>td {
    box-shadow: inset 0 -2px 0 0 #0f766e;
}

.p-datatable.p-datatable-hoverable-rows .p-datatable-tbody>tr:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #4b5563;
}

.p-datatable .p-column-resizer-helper {
    background: #14b8a6;
}

.p-datatable.p-datatable-scrollable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-thead,
.p-datatable.p-datatable-scrollable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-tfoot,
.p-datatable.p-datatable-scrollable>.p-datatable-wrapper>.p-virtualscroller>.p-datatable-table>.p-datatable-thead,
.p-datatable.p-datatable-scrollable>.p-datatable-wrapper>.p-virtualscroller>.p-datatable-table>.p-datatable-tfoot {
    background-color: #f9fafb;
}

.p-datatable .p-datatable-loading-icon {
    font-size: 2rem;
}

.p-datatable .p-datatable-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
}

.p-datatable.p-datatable-gridlines .p-datatable-header {
    border-width: 1px 1px 0 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-footer {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-paginator-top {
    border-width: 0 1px 0 1px;
}

.p-datatable.p-datatable-gridlines .p-paginator-bottom {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead>tr>th {
    border-width: 1px 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead>tr>th:last-child {
    border-width: 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr>td {
    border-width: 1px 0 0 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr>td:last-child {
    border-width: 1px 1px 0 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr:last-child>td {
    border-width: 1px 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr:last-child>td:last-child {
    border-width: 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tfoot>tr>td {
    border-width: 1px 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tfoot>tr>td:last-child {
    border-width: 1px 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead+.p-datatable-tfoot>tr>td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead+.p-datatable-tfoot>tr>td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody>tr>td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody>tr>td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody>tr:last-child>td {
    border-width: 0 0 0 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody>tr:last-child>td:last-child {
    border-width: 0 1px 0 1px;
}

.p-datatable.p-datatable-striped .p-datatable-tbody>tr:nth-child(even) {
    background: #f8f8fa;
}

.p-datatable.p-datatable-striped .p-datatable-tbody>tr:nth-child(even).p-highlight {
    background: #0f766e;
    color: #0f766e;
}

.p-datatable.p-datatable-striped .p-datatable-tbody>tr:nth-child(even).p-highlight .p-row-toggler {
    color: #0f766e;
}

.p-datatable.p-datatable-striped .p-datatable-tbody>tr:nth-child(even).p-highlight .p-row-toggler:hover {
    color: #0f766e;
}

.p-datatable.p-datatable-sm .p-datatable-header {
    padding: 0.5rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-thead>tr>th {
    padding: 0.5rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tbody>tr>td {
    padding: 0.5rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tfoot>tr>td {
    padding: 0.5rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-footer {
    padding: 0.5rem 0.5rem;
}

.p-datatable.p-datatable-lg .p-datatable-header {
    padding: 1.25rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-thead>tr>th {
    padding: 1.25rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tbody>tr>td {
    padding: 1.25rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tfoot>tr>td {
    padding: 1.25rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-footer {
    padding: 1.25rem 1.25rem;
}

.p-datatable .p-datatable-tbody>tr.p-datatable-dragpoint-top>td {
    box-shadow: inset 0 2px 0 0 #14b8a6;
}

.p-datatable .p-datatable-tbody>tr.p-datatable-dragpoint-bottom>td {
    box-shadow: inset 0 -2px 0 0 #14b8a6;
}
`;
