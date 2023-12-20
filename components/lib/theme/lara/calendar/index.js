export default `
.p-calendar.p-invalid.p-component > .p-inputtext {
    border-color: var(--p-input-error-border-color, var(--p-dark-error-color, var(--p-error-color)));
}
.p-calendar:not(.p-calendar-disabled).p-focus > .p-inputtext {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
    border-color: var(--p-input-focus-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-datepicker {
    padding: var(--p-calendar-padding, .5rem);
    background: var(--p-calendar-inline-bg, var(--p-dark-calendar-bg, var(--p-calendar-bg)));
    color: var(--p-calendar-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border: var(--p-calendar-border, var(--p-dark-input-list-border, var(--p-input-list-border)));
    border-radius: var(--p-border-radius, 6px);
}
.p-datepicker:not(.p-datepicker-inline) {
    background: var(--p-calendar-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    border: var(--p-calendar-overlay-border, var(--p-dark-input-overlay-border, var(--p-input-overlay-border)));
    box-shadow: var(--p-input-overlay-shadow); /* //TODO: */
}
.p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
    background: var(--p-calendar-header-bg, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
}
.p-datepicker .p-datepicker-header {
    padding: var(--p-calendar-header-padding, .5rem);
    color: var(--p-calendar-header-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    background: var(--p-calendar-inline-header-bg, var(--p-dark-calendar-bg, var(--p-calendar-bg)));
    font-weight: var(--p-calendar-header-font-weight, var(700, var(600)));
    margin: var(--p-input-list-header-margin, 0); /* //TODO: */
    border-bottom: var(--p-calendar-header-border, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    border-top-right-radius: var(--p-border-radius, 6px);
    border-top-left-radius: var(--p-border-radius, 6px);
}
.p-datepicker .p-datepicker-header .p-datepicker-prev,
.p-datepicker .p-datepicker-header .p-datepicker-next {
    width: var(--p-action-icon-width, 2rem);
    height: var(--p-action-icon-height, 2rem);
    color: var(--p-action-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
    border: var(--p-action-icon-border, 0 none);
    background: var(--p-action-icon-bg, transparent);
    border-radius: var(--p-action-icon-border-radius, 50%);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-datepicker .p-datepicker-header .p-datepicker-prev:enabled:hover,
.p-datepicker .p-datepicker-header .p-datepicker-next:enabled:hover {
    color: var(--p-action-icon-hover-color, var(--p-dark-pink-0, var(--p-pink-800)));
    border-color: var(--p-action-icon-hover-border-color, transparent);
    background: var(--p-action-icon-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-datepicker .p-datepicker-header .p-datepicker-prev:focus-visible,
.p-datepicker .p-datepicker-header .p-datepicker-next:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-datepicker .p-datepicker-header .p-datepicker-title {
    line-height: var(--p-action-icon-height, 2rem);
}
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year,
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
    color: var(--p-calendar-header-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    font-weight: var(--p-calendar-header-font-weight, var(700, var(600)));
    padding: var(--p-calendar-header-cell-padding, .5rem);
}
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year:enabled:hover,
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month:enabled:hover {
    color: var(--p-calendar-month-year-header-hover-text-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
    margin-right: var(--p-inline-spacing, 6px);
}
.p-datepicker table {
    font-size: var(--p-font-size, 1rem);
    margin: var(--p-calendar-table-margin, .5rem 0);
}
.p-datepicker table th {
    padding: var(--p-calendar-header-cell-padding, .5rem);
}
.p-datepicker table th > span {
    width: var(--p-calendar-cell-date-width, 2.5rem);
    height: var(--p-calendar-cell-date-height, 2.5rem);
}
.p-datepicker table td {
    padding: var(--p-calendar-cell-date-padding, .5rem);
}
.p-datepicker table td > span {
    width: var(--p-calendar-cell-date-width, 2.5rem);
    height: var(--p-calendar-cell-date-height, 2.5rem);
    border-radius: var(--p-calendar-cell-date-border-radius, 50%);
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    border: var(--p-calendar-cell-date-border, 1px solid transparent);
}
.p-datepicker table td > span.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-datepicker table td > span:focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-datepicker table td.p-datepicker-today > span {
    background: var(--p-calendar-cell-date-today-bg, var(transparent, var(--p-pink-400)));
    color: var(--p-calendar-cell-date-today-text-color, var(--p-dark-primary-color, var(--p-pink-700)));
    border-color: var(--p-calendar-cell-date-today-border-color, transparent);
}
.p-datepicker table td.p-datepicker-today > span.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-datepicker .p-datepicker-buttonbar {
    padding: var(--p-calendar-button-bar-padding, 1rem 0);
    border-top: var(--p-divider, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
}
.p-datepicker .p-datepicker-buttonbar .p-button {
    width: auto; /* //TODO: */
}
.p-datepicker .p-timepicker {
    border-top: var(--p-divider, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    padding: var(--p-calendar-time-picker-padding, 1rem 0);
}
.p-datepicker .p-timepicker button {
    width: var(--p-action-icon-width, 2rem);
    height: var(--p-action-icon-height, 2rem);
    color: var(--p-action-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
    border: var(--p-action-icon-border, 0 none);
    background: var(--p-action-icon-bg, transparent);
    border-radius: var(--p-action-icon-border-radius, 50%);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-datepicker .p-timepicker button:enabled:hover {
    color: var(--p-action-icon-hover-color, var(--p-dark-pink-100, var(--p-pink-600)));
    border-color: var(--p-action-icon-hover-border-color, transparent);
    background: var(--p-action-icon-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-datepicker .p-timepicker button:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-datepicker .p-timepicker button:last-child {
    margin-top: 0.2em; /* //TODO: */
}
.p-datepicker .p-timepicker span {
    font-size: var(--p-calendar-time-picker-time-font-size, 1.25rem);
}
.p-datepicker .p-timepicker > div {
    padding: var(--p-calendar-time-picker-element-padding, 0 .5rem);
}
.p-datepicker.p-datepicker-timeonly .p-timepicker {
    border-top: 0 none; /* //TODO: */
}
.p-datepicker .p-monthpicker {
    margin: var(--p-calendar-table-margin, .5rem 0);
}
.p-datepicker .p-monthpicker .p-monthpicker-month {
    padding: var(--p-calendar-cell-date-padding, .5rem);
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    border-radius: var(--p-border-radius, 6px);
}
.p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-datepicker .p-yearpicker {
    margin: var(--p-calendar-table-margin, .5rem 0);
}
.p-datepicker .p-yearpicker .p-yearpicker-year {
    padding: var(--p-calendar-cell-date-padding, .5rem);
    transition: var(--p-list-item-transition, box-shadow var(--p-transition-duration));
    border-radius: var(--p-border-radius, 6px);
}
.p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {
    color: var(--p-highlight-text-color);
    background: var(--p-highlight-bg);
}
.p-datepicker.p-datepicker-multiple-month .p-datepicker-group {
    border-left: var(--p-divider, 1px solid var(--p-dark-pink-600, var(--p-pink-300)));
    padding-right: var(--p-calendar-padding, .5rem);
    padding-left: var(--p-calendar-padding, .5rem);
    padding-top: 0; /* //TODO: */
    padding-bottom: 0;
}
.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:first-child {
    padding-left: 0; /* //TODO: */
    border-left: 0 none;
}
.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:last-child {
    padding-right: 0; /* //TODO: */
}
.p-datepicker.p-datepicker-mobile table th,
.p-datepicker.p-datepicker-mobile table td {
    padding: var(--p-calendar-cell-date-padding-s-m, 0);
}
.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover {
    background: var(--p-calendar-cell-date-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):not(.p-highlight):hover {
    background: var(--p-calendar-cell-date-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):not(.p-highlight):hover {
    background: var(--p-calendar-cell-date-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
`;
