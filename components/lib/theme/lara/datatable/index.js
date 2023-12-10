export default `
.p-datatable .p-paginator-top {
    border-width: var(--p-table-top-paginator-border-width);
    border-radius: 0;
}
.p-datatable .p-paginator-bottom {
    border-width: var(--p-table-bottom-paginator-border-width);
    border-radius: 0;
}
.p-datatable .p-datatable-header {
    background: var(--p-table-header-bg);
    color: var(--p-table-header-text-color);
    border: var(--p-table-header-border);
    border-width: var(--p-table-header-border-width);
    padding: var(--p-table-header-padding);
    font-weight: var(--p-table-header-font-weight);
}
.p-datatable .p-datatable-footer {
    background: var(--p-table-footer-bg);
    color: var(--p-table-footer-text-color);
    border: var(--p-table-footer-border);
    border-width: var(--p-table-footer-border-width);
    padding: var(--p-table-footer-padding);
    font-weight: var(--p-table-footer-font-weight);
}
.p-datatable .p-datatable-thead > tr > th {
    text-align: var(--p-table-cell-content-alignment);
    padding: var(--p-table-header-cell-padding);
    border: var(--p-table-header-cell-border);
    border-width: var(--p-table-header-cell-border-width);
    font-weight: var(--p-table-header-cell-font-weight);
    color: var(--p-table-header-cell-text-color);
    background: var(--p-table-header-cell-bg);
    transition: var(--p-list-item-transition);
}
.p-datatable .p-datatable-tfoot > tr > td {
    text-align: var(--p-table-cell-content-alignment);
    padding: var(--p-table-footer-cell-padding);
    border: var(--p-table-footer-cell-border);
    border-width: var(--p-table-footer-cell-border-width);
    font-weight: var(--p-table-footer-cell-font-weight);
    color: var(--p-table-footer-cell-text-color);
    background: var(--p-table-footer-cell-bg);
}
.p-datatable .p-sortable-column .p-sortable-column-icon {
    color: var(--p-table-header-cell-icon-color);
    margin-left: var(--p-inline-spacing);
}
.p-datatable .p-sortable-column .p-sortable-column-badge {
    border-radius: 50%;
    height: var(--p-table-sortable-column-badge-size);
    min-width: var(--p-table-sortable-column-badge-size);
    line-height: var(--p-table-sortable-column-badge-size);
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
    margin-left: var(--p-inline-spacing);
}
.p-datatable .p-sortable-column:not(.p-highlight):hover {
    background: var(--p-table-header-cell-hover-bg);
    color: var(--p-table-header-cell-text-hover-color);
}
.p-datatable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: var(--p-table-header-cell-icon-hover-color);
}
.p-datatable .p-sortable-column.p-highlight {
    background: var(--p-table-header-cell-highlight-bg);
    color: var(--p-table-header-cell-highlight-text-color);
}
.p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: var(--p-table-header-cell-highlight-text-color);
}
.p-datatable .p-sortable-column.p-highlight:hover {
    background: var(--p-table-header-cell-highlight-hover-bg);
    color: var(--p-table-header-cell-highlight-text-color);
}
.p-datatable .p-sortable-column.p-highlight:hover .p-sortable-column-icon {
    color: var(--p-table-header-cell-highlight-text-color);
}
.p-datatable .p-sortable-column:focus-visible {
    box-shadow: var(--p-input-list-item-focus-shadow);
    outline: 0 none;
}
.p-datatable .p-datatable-tbody > tr {
    background: var(--p-table-body-row-bg);
    color: var(--p-table-body-row-text-color);
    transition: var(--p-list-item-transition);
}
.p-datatable .p-datatable-tbody > tr > td {
    text-align: var(--p-table-cell-content-alignment);
    border: var(--p-table-body-cell-border);
    border-width: var(--p-table-body-cell-border-width);
    padding: var(--p-table-body-cell-padding);
}
.p-datatable .p-datatable-tbody > tr > td .p-row-toggler,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-action-icon-color);
    border: var(--p-action-icon-border);
    background: var(--p-action-icon-bg);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
}
.p-datatable .p-datatable-tbody > tr > td .p-row-toggler:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:enabled:hover {
    color: var(--p-action-icon-hover-color);
    border-color: var(--p-action-icon-hover-border-color);
    background: var(--p-action-icon-hover-bg);
}
.p-datatable .p-datatable-tbody > tr > td .p-row-toggler:focus-visible,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:focus-visible,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:focus-visible,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
    margin-right: var(--p-inline-spacing);
}
.p-datatable .p-datatable-tbody > tr > td > .p-column-title {
    font-weight: var(--p-table-header-cell-font-weight);
}
.p-datatable .p-datatable-tbody > tr:focus-visible {
    outline: 0.15rem solid var(--p-focus-outline-color);
    outline-offset: -0.15rem;
}
.p-datatable .p-datatable-tbody > tr.p-highlight {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-datatable .p-datatable-tbody > tr.p-highlight-contextmenu {
    outline: 0.15rem solid var(--p-focus-outline-color);
    outline-offset: -0.15rem;
}
.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 var(--p-highlight-bg);
}
.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 var(--p-highlight-bg);
}
.p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):hover {
    background: var(--p-table-body-row-hover-bg);
    color: var(--p-table-body-row-text-hover-color);
}
.p-datatable .p-column-resizer-helper {
    background: var(--p-table-resizer-helper-bg);
}
.p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-thead,
.p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tfoot,
.p-datatable.p-datatable-scrollable
    > .p-datatable-wrapper
    > .p-virtualscroller
    > .p-datatable-table
    > .p-datatable-thead,
.p-datatable.p-datatable-scrollable
    > .p-datatable-wrapper
    > .p-virtualscroller
    > .p-datatable-table
    > .p-datatable-tfoot {
    background-color: var(--p-table-header-cell-bg);
}
.p-datatable .p-datatable-loading-icon {
    font-size: var(--p-loading-icon-font-size);
}
.p-datatable .p-datatable-loading-icon.p-icon {
    width: var(--p-loading-icon-font-size);
    height: var(--p-loading-icon-font-size);
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
.p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th {
    border-width: 1px 0 1px 1px;
}
.p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
    border-width: 1px;
}
.p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td {
    border-width: 1px 0 0 1px;
}
.p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
    border-width: 1px 1px 0 1px;
}
.p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
    border-width: 1px 0 1px 1px;
}
.p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 1px;
}
.p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td {
    border-width: 1px 0 1px 1px;
}
.p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
    border-width: 1px 1px 1px 1px;
}
.p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
}
.p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}
.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
    border-width: 0 0 1px 1px;
}
.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody)
    .p-datatable-tbody
    > tr
    > td:last-child {
    border-width: 0 1px 1px 1px;
}
.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot)
    .p-datatable-tbody
    > tr:last-child
    > td {
    border-width: 0 0 0 1px;
}
.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot)
    .p-datatable-tbody
    > tr:last-child
    > td:last-child {
    border-width: 0 1px 0 1px;
}
.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even) {
    background: var(--p-table-body-row-even-bg);
}
.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even).p-highlight {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even).p-highlight .p-row-toggler {
    color: var(--p-highlight-text-color);
}
.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even).p-highlight .p-row-toggler:hover {
    color: var(--p-highlight-text-color);
}
.p-datatable.p-datatable-sm .p-datatable-header {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-datatable.p-datatable-sm .p-datatable-footer {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-datatable.p-datatable-lg .p-datatable-header {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-datatable.p-datatable-lg .p-datatable-footer {
    padding: "nth($val, 1) * $scale nth($val, 2) * $scale";
}
.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 var(--p-dark-primary-color, var(--p-primary-color));
}
.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 var(--p-dark-primary-color, var(--p-primary-color));
}


.p-column-filter-row .p-column-filter-menu-button,
.p-column-filter-row .p-column-filter-clear-button {
    margin-left: var(--p-inline-spacing);
}
.p-column-filter-menu-button {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-action-icon-color);
    border: var(--p-action-icon-border);
    background: var(--p-action-icon-bg);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
}
.p-column-filter-menu-button:hover {
    color: var(--p-action-icon-hover-color);
    border-color: var(--p-action-icon-hover-border-color);
    background: var(--p-action-icon-hover-bg);
}
.p-column-filter-menu-button.p-column-filter-menu-button-open,
.p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
    background: var(--p-action-icon-hover-bg);
    color: var(--p-action-icon-hover-color);
}
.p-column-filter-menu-button.p-column-filter-menu-button-active,
.p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-column-filter-menu-button:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-column-filter-clear-button {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-action-icon-color);
    border: var(--p-action-icon-border);
    background: var(--p-action-icon-bg);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
}
.p-column-filter-clear-button:hover {
    color: var(--p-action-icon-hover-color);
    border-color: var(--p-action-icon-hover-border-color);
    background: var(--p-action-icon-hover-bg);
}
.p-column-filter-clear-button:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-column-filter-overlay {
    background: var(--p-input-overlay-bg);
    color: var(--p-input-list-text-color);
    border: var(--p-input-overlay-border);
    border-radius: var(--p-border-radius);
    box-shadow: var(--p-input-overlay-shadow);
    min-width: var(--p-menu-width);
}
.p-column-filter-overlay .p-column-filter-row-items {
    padding: var(--p-input-list-padding);
}
.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item {
    margin: var(--p-input-list-item-margin);
    padding: var(--p-input-list-item-padding);
    border: var(--p-input-list-item-border);
    color: var(--p-input-list-item-text-color);
    background: var(--p-input-list-item-bg);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-input-list-item-border-radius);
}
.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover {
    color: var(--p-input-list-item-text-hover-color);
    background: var(--p-input-list-item-hover-bg);
}
.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-input-list-item-focus-shadow);
}
.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-separator {
    border-top: var(--p-divider);
    margin: var(--p-menu-separator-margin);
}
.p-column-filter-overlay-menu .p-column-filter-operator {
    padding: var(--p-input-list-header-padding);
    border-bottom: var(--p-input-list-header-border);
    color: var(--p-input-list-header-text-color);
    background: var(--p-input-overlay-header-bg);
    margin: var(--p-input-list-header-margin);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-column-filter-overlay-menu .p-column-filter-constraint {
    padding: var(--p-panel-content-padding);
    border-bottom: var(--p-divider);
}
.p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-matchmode-dropdown {
    margin-bottom: var(--p-inline-spacing);
}
.p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-remove-button {
    margin-top: var(--p-inline-spacing);
}
.p-column-filter-overlay-menu .p-column-filter-constraint:last-child {
    border-bottom: 0 none;
}
.p-column-filter-overlay-menu .p-column-filter-add-rule {
    padding: var(--p-panel-footer-padding);
}
.p-column-filter-overlay-menu .p-column-filter-buttonbar {
    padding: var(--p-panel-content-padding);
}
`;
