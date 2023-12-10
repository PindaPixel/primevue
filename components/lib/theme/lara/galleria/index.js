export default `
.p-galleria .p-galleria-close {
    margin: var(--p-galleria-close-icon-margin);
    background: var(--p-galleria-close-icon-bg);
    color: var(--p-galleria-close-icon-color);
    width: var(--p-galleria-close-icon-width);
    height: var(--p-galleria-close-icon-height);
    transition: var(--p-action-icon-transition);
    border-radius: var(--p-galleria-close-icon-border-radius);
}
.p-galleria .p-galleria-close .p-galleria-close-icon {
    font-size: var(--p-galleria-close-icon-font-size);
}
.p-galleria .p-galleria-close .p-icon {
    width: var(--p-galleria-close-icon-font-size);
    height: var(--p-galleria-close-icon-font-size);
}
.p-galleria .p-galleria-close:hover {
    background: var(--p-galleria-close-icon-hover-bg);
    color: var(--p-galleria-close-icon-hover-color);
}
.p-galleria .p-galleria-item-nav {
    background: var(--p-galleria-item-navigator-bg);
    color: var(--p-galleria-item-navigator-color);
    width: var(--p-galleria-item-navigator-width);
    height: var(--p-galleria-item-navigator-height);
    transition: var(--p-action-icon-transition);
    border-radius: var(--p-galleria-item-navigator-border-radius);
    margin: var(--p-galleria-item-navigator-margin);
}
.p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon,
.p-galleria .p-galleria-item-nav .p-galleria-item-next-icon {
    font-size: var(--p-galleria-item-navigator-font-size);
}
.p-galleria .p-galleria-item-nav .p-icon {
    width: var(--p-galleria-close-icon-font-size);
    height: var(--p-galleria-close-icon-font-size);
}
.p-galleria .p-galleria-item-nav:not(.p-disabled):hover {
    background: var(--p-galleria-item-navigator-hover-bg);
    color: var(--p-galleria-item-navigator-hover-color);
}
.p-galleria .p-galleria-caption {
    background: var(--p-galleria-caption-bg);
    color: var(--p-galleria-caption-text-color);
    padding: var(--p-galleria-caption-padding);
}
.p-galleria .p-galleria-indicators {
    padding: var(--p-galleria-indicators-padding);
}
.p-galleria .p-galleria-indicators .p-galleria-indicator button {
    background-color: var(--p-galleria-indicator-bg);
    width: var(--p-galleria-indicator-width);
    height: var(--p-galleria-indicator-height);
    transition: var(--p-action-icon-transition);
    border-radius: var(--p-galleria-indicator-border-radius);
}
.p-galleria .p-galleria-indicators .p-galleria-indicator button:hover {
    background: var(--p-galleria-indicator-hover-bg);
}
.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-galleria.p-galleria-indicators-bottom .p-galleria-indicator,
.p-galleria.p-galleria-indicators-top .p-galleria-indicator {
    margin-right: var(--p-inline-spacing);
}
.p-galleria.p-galleria-indicators-left .p-galleria-indicator,
.p-galleria.p-galleria-indicators-right .p-galleria-indicator {
    margin-bottom: var(--p-inline-spacing);
}
.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators {
    background: var(--p-galleria-indicators-bg-on-item);
}
.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button {
    background: var(--p-galleria-indicator-bg-on-item);
}
.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button:hover {
    background: var(--p-galleria-indicator-hover-bg-on-item);
}
.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-galleria .p-galleria-thumbnail-container {
    background: var(--p-galleria-thumbnail-container-bg);
    padding: var(--p-galleria-thumbnail-container-padding);
}
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev,
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next {
    margin: var(--p-inline-spacing);
    background-color: var(--p-galleria-thumbnail-navigator-bg);
    color: var(--p-galleria-thumbnail-navigator-color);
    width: var(--p-galleria-thumbnail-navigator-width);
    height: var(--p-galleria-thumbnail-navigator-height);
    transition: var(--p-action-icon-transition);
    border-radius: var(--p-galleria-thumbnail-navigator-border-radius);
}
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev:hover,
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next:hover {
    background: var(--p-galleria-thumbnail-navigator-hover-bg);
    color: var(--p-galleria-thumbnail-navigator-hover-color);
}
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-galleria-mask {
    --maskbg: var(--p-galleria-mask-bg);
}
.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background-color: var(--p-dark-primary-color, var(--p-primary-color));
}
`;
