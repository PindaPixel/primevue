export default `
.p-rating {
    gap: var(--p-inline-spacing);
}
.p-rating .p-rating-item .p-rating-icon {
    color: var(--p-rating-star-icon-off-color);
    transition: var(--p-form-element-transition);
    font-size: var(--p-rating-icon-font-size);
}
.p-rating .p-rating-item .p-rating-icon.p-icon {
    width: var(--p-rating-icon-font-size);
    height: var(--p-rating-icon-font-size);
}
.p-rating .p-rating-item .p-rating-icon.p-rating-cancel {
    color: var(--p-rating-cancel-icon-color);
}
.p-rating .p-rating-item.p-focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
    border-color: var(--p-input-focus-border-color);
}
.p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
    color: var(--p-rating-star-icon-on-color);
}
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon {
    color: var(--p-rating-star-icon-hover-color);
}
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon.p-rating-cancel {
    color: var(--p-rating-cancel-icon-hover-color);
}
`;
