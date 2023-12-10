export default `
.p-calendar.p-invalid.p-component > .p-inputtext {
    border-color: var(--p-input-error-border-color);
}
.p-calendar:not(.p-calendar-disabled).p-focus > .p-inputtext {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color);
}
.p-datepicker {
    padding: var(--p-calendar-padding);
    background: var(--p-calendar-inline-bg);
    color: var(--p-calendar-text-color);
    border: var(--p-calendar-border);
    border-radius: var(--p-border-radius);
}
.p-datepicker:not(.p-datepicker-inline) {
    background: var(--p-calendar-bg);
    border: var(--p-calendar-overlay-border);
    box-shadow: var(--p-input-overlay-shadow);
}
.p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
    background: var(--p-calendar-header-bg);
}
.p-datepicker .p-datepicker-header {
    padding: var(--p-calendar-header-padding);
    color: var(--p-calendar-header-text-color);
    background: var(--p-calendar-inline-header-bg);
    font-weight: var(--p-calendar-header-font-weight);
    margin: var(--p-input-list-header-margin);
    border-bottom: var(--p-calendar-header-border);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-datepicker .p-datepicker-header .p-datepicker-prev,
.p-datepicker .p-datepicker-header .p-datepicker-next {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-action-icon-color);
    border: var(--p-action-icon-border);
    background: var(--p-action-icon-bg);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
}
.p-datepicker .p-datepicker-header .p-datepicker-prev:enabled:hover,
.p-datepicker .p-datepicker-header .p-datepicker-next:enabled:hover {
    color: var(--p-action-icon-hover-color);
    border-color: var(--p-action-icon-hover-border-color);
    background: var(--p-action-icon-hover-bg);
}
.p-datepicker .p-datepicker-header .p-datepicker-prev:focus-visible,
.p-datepicker .p-datepicker-header .p-datepicker-next:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-datepicker .p-datepicker-header .p-datepicker-title {
    line-height: var(--p-action-icon-height);
}
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year,
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
    color: var(--p-calendar-header-text-color);
    transition: var(--p-action-icon-transition);
    font-weight: var(--p-calendar-header-font-weight);
    padding: var(--p-calendar-header-cell-padding);
}
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year:enabled:hover,
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month:enabled:hover {
    color: var(--p-calendar-month-year-header-hover-text-color);
}
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
    margin-right: var(--p-inline-spacing);
}
.p-datepicker table {
    font-size: var(--p-font-size);
    margin: var(--p-calendar-table-margin);
}
.p-datepicker table th {
    padding: var(--p-calendar-header-cell-padding);
}
.p-datepicker table th > span {
    width: var(--p-calendar-cell-date-width);
    height: var(--p-calendar-cell-date-height);
}
.p-datepicker table td {
    padding: var(--p-calendar-cell-date-padding);
}
.p-datepicker table td > span {
    width: var(--p-calendar-cell-date-width);
    height: var(--p-calendar-cell-date-height);
    border-radius: var(--p-calendar-cell-date-border-radius);
    transition: var(--p-list-item-transition);
    border: var(--p-calendar-cell-date-border);
}
.p-datepicker table td > span.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-datepicker table td > span:focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-datepicker table td.p-datepicker-today > span {
    background: var(--p-calendar-cell-date-today-bg);
    color: var(--p-calendar-cell-date-today-text-color);
    border-color: var(--p-calendar-cell-date-today-border-color);
}
.p-datepicker table td.p-datepicker-today > span.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-datepicker .p-datepicker-buttonbar {
    padding: var(--p-calendar-button-bar-padding);
    border-top: var(--p-divider);
}
.p-datepicker .p-datepicker-buttonbar .p-button {
    width: auto;
}
.p-datepicker .p-timepicker {
    border-top: var(--p-divider);
    padding: var(--p-calendar-time-picker-padding);
}
.p-datepicker .p-timepicker button {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-action-icon-color);
    border: var(--p-action-icon-border);
    background: var(--p-action-icon-bg);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
}
.p-datepicker .p-timepicker button:enabled:hover {
    color: var(--p-action-icon-hover-color);
    border-color: var(--p-action-icon-hover-border-color);
    background: var(--p-action-icon-hover-bg);
}
.p-datepicker .p-timepicker button:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-datepicker .p-timepicker button:last-child {
    margin-top: 0.2em;
}
.p-datepicker .p-timepicker span {
    font-size: var(--p-calendar-time-picker-time-font-size);
}
.p-datepicker .p-timepicker > div {
    padding: var(--p-calendar-time-picker-element-padding);
}
.p-datepicker.p-datepicker-timeonly .p-timepicker {
    border-top: 0 none;
}
.p-datepicker .p-monthpicker {
    margin: var(--p-calendar-table-margin);
}
.p-datepicker .p-monthpicker .p-monthpicker-month {
    padding: var(--p-calendar-cell-date-padding);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-border-radius);
}
.p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-datepicker .p-yearpicker {
    margin: var(--p-calendar-table-margin);
}
.p-datepicker .p-yearpicker .p-yearpicker-year {
    padding: var(--p-calendar-cell-date-padding);
    transition: var(--p-list-item-transition);
    border-radius: var(--p-border-radius);
}
.p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-datepicker.p-datepicker-multiple-month .p-datepicker-group {
    border-left: var(--p-divider);
    padding-right: var(--p-calendar-padding);
    padding-left: var(--p-calendar-padding);
    padding-top: 0;
    padding-bottom: 0;
}
.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:first-child {
    padding-left: 0;
    border-left: 0 none;
}
.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:last-child {
    padding-right: 0;
}
.p-datepicker.p-datepicker-mobile table th,
.p-datepicker.p-datepicker-mobile table td {
    padding: var(--p-calendar-cell-date-padding-s-m);
}
.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover {
    background: var(--p-calendar-cell-date-hover-bg);
}
.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):not(.p-highlight):hover {
    background: var(--p-calendar-cell-date-hover-bg);
}
.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):not(.p-highlight):hover {
    background: var(--p-calendar-cell-date-hover-bg);
}
.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
`;
