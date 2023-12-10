export default `
.p-treetable .p-paginator-top {
    border-width: var(--p-table-top-paginator-border-width);
    border-radius: 0;
}
.p-treetable .p-paginator-bottom {
    border-width: var(--p-table-bottom-paginator-border-width);
    border-radius: 0;
}
.p-treetable .p-treetable-header {
    background: var(--p-table-header-bg);
    color: var(--p-table-header-text-color);
    border: var(--p-table-header-border);
    border-width: var(--p-table-header-border-width);
    padding: var(--p-table-header-padding);
    font-weight: var(--p-table-header-font-weight);
}
.p-treetable .p-treetable-footer {
    background: var(--p-table-footer-bg);
    color: var(--p-table-footer-text-color);
    border: var(--p-table-footer-border);
    border-width: var(--p-table-footer-border-width);
    padding: var(--p-table-footer-padding);
    font-weight: var(--p-table-footer-font-weight);
}
.p-treetable .p-treetable-thead > tr > th {
    text-align: var(--p-table-cell-content-alignment);
    padding: var(--p-table-header-cell-padding);
    border: var(--p-table-header-cell-border);
    border-width: var(--p-table-header-cell-border-width);
    font-weight: var(--p-table-header-cell-font-weight);
    color: var(--p-table-header-cell-text-color);
    background: var(--p-table-header-cell-bg);
    transition: var(--p-list-item-transition);
}
.p-treetable .p-treetable-tfoot > tr > td {
    text-align: var(--p-table-cell-content-alignment);
    padding: var(--p-table-footer-cell-padding);
    border: var(--p-table-footer-cell-border);
    border-width: var(--p-table-footer-cell-border-width);
    font-weight: var(--p-table-footer-cell-font-weight);
    color: var(--p-table-footer-cell-text-color);
    background: var(--p-table-footer-cell-bg);
}
.p-treetable .p-sortable-column {
    outline-color: var(--p-focus-outline-color);
}
.p-treetable .p-sortable-column .p-sortable-column-icon {
    color: var(--p-table-header-cell-icon-color);
    margin-left: var(--p-inline-spacing);
}
.p-treetable .p-sortable-column .p-sortable-column-badge {
    border-radius: 50%;
    height: var(--p-table-sortable-column-badge-size);
    min-width: var(--p-table-sortable-column-badge-size);
    line-height: var(--p-table-sortable-column-badge-size);
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
    margin-left: var(--p-inline-spacing);
}
.p-treetable .p-sortable-column:not(.p-highlight):hover {
    background: var(--p-table-header-cell-hover-bg);
    color: var(--p-table-header-cell-text-hover-color);
}
.p-treetable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: var(--p-table-header-cell-icon-hover-color);
}
.p-treetable .p-sortable-column.p-highlight {
    background: var(--p-table-header-cell-highlight-bg);
    color: var(--p-table-header-cell-highlight-text-color);
}
.p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: var(--p-table-header-cell-highlight-text-color);
}
.p-treetable .p-treetable-tbody > tr {
    background: var(--p-table-body-row-bg);
    color: var(--p-table-body-row-text-color);
    transition: var(--p-list-item-transition);
}
.p-treetable .p-treetable-tbody > tr > td {
    text-align: var(--p-table-cell-content-alignment);
    border: var(--p-table-body-cell-border);
    border-width: var(--p-table-body-cell-border-width);
    padding: var(--p-table-body-cell-padding);
}
.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-action-icon-color);
    border: var(--p-action-icon-border);
    background: var(--p-action-icon-bg);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
    margin-right: var(--p-inline-spacing);
}
.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:enabled:hover {
    color: var(--p-action-icon-hover-color);
    border-color: var(--p-action-icon-hover-border-color);
    background: var(--p-action-icon-hover-bg);
}
.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox {
    margin-right: var(--p-inline-spacing);
}
.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox .p-indeterminate .p-checkbox-icon {
    color: var(--p-text-color);
}
.p-treetable .p-treetable-tbody > tr:focus-visible {
    outline: 0.15rem solid var(--p-focus-outline-color);
    outline-offset: -0.15rem;
}
.p-treetable .p-treetable-tbody > tr.p-highlight {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler {
    color: var(--p-highlight-text-color);
}
.p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler:hover {
    color: var(--p-highlight-text-color);
}
.p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover {
    background: var(--p-table-body-row-hover-bg);
    color: var(--p-table-body-row-text-hover-color);
}
.p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler {
    color: var(--p-table-body-row-text-hover-color);
}
.p-treetable .p-column-resizer-helper {
    background: var(--p-table-resizer-helper-bg);
}
.p-treetable .p-treetable-scrollable-header,
.p-treetable .p-treetable-scrollable-footer {
    background: var(--p-panel-header-bg);
}
.p-treetable .p-treetable-loading-icon {
    font-size: var(--p-loading-icon-font-size);
}
.p-treetable .p-treetable-loading-icon.p-icon {
    width: var(--p-loading-icon-font-size);
    height: var(--p-loading-icon-font-size);
}
.p-treetable.p-treetable-gridlines .p-treetable-header {
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
.p-treetable.p-treetable-gridlines .p-treetable-thead > tr > th {
    border-width: 1px;
}
.p-treetable.p-treetable-gridlines .p-treetable-tbody > tr > td {
    border-width: 1px;
}
.p-treetable.p-treetable-gridlines .p-treetable-tfoot > tr > td {
    border-width: 1px;
}
.p-treetable.p-treetable-sm .p-treetable-header {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-treetable.p-treetable-sm .p-treetable-thead > tr > th {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-treetable.p-treetable-sm .p-treetable-footer {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-treetable.p-treetable-lg .p-treetable-header {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-treetable.p-treetable-lg .p-treetable-thead > tr > th {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-treetable.p-treetable-lg .p-treetable-tbody > tr > td {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-treetable.p-treetable-lg .p-treetable-tfoot > tr > td {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-treetable.p-treetable-lg .p-treetable-footer {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
`;
