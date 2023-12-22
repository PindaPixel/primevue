export default `
.p-rating {
    gap: var(--p-inline-spacing, .5rem);
}
.p-rating .p-rating-item .p-rating-icon {
    color: var(--p-rating-star-icon-off-color, var(--p-dark-pink-0, var(--p-pink-700)));
    transition: var(--p-form-element-transition, 'background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    font-size: var(--p-rating-icon-font-size, 1.143rem);
}
.p-rating .p-rating-item .p-rating-icon.p-icon {
    width: var(--p-rating-icon-font-size, 1.143rem);
    height: var(--p-rating-icon-font-size, 1.143rem);
}
.p-rating .p-rating-item .p-rating-icon.p-rating-cancel {
    color: var(--p-rating-cancel-icon-color);  /* //TODO: */
}
.p-rating .p-rating-item.p-focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
    border-color: var(--p-input-focus-border-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
    color: var(--p-rating-star-icon-on-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon {
    color: var(--p-rating-star-icon-hover-color, var(--p-dark-primary-color, var(--p-primary-color)));
}
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon.p-rating-cancel {
    color: var(--p-rating-cancel-icon-hover-color); /* //TODO: */
}
`;
