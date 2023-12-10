export default `
.p-carousel .p-carousel-content .p-carousel-prev,
.p-carousel .p-carousel-content .p-carousel-next {
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    color: var(--p-action-icon-color);
    border: var(--p-action-icon-border);
    background: var(--p-action-icon-bg);
    border-radius: var(--p-action-icon-border-radius);
    transition: var(--p-action-icon-transition);
    margin: var(--p-inline-spacing);
}
.p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
.p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
    color: var(--p-action-icon-hover-color);
    border-color: var(--p-action-icon-hover-border-color);
    background: var(--p-action-icon-hover-bg);
}
.p-carousel .p-carousel-content .p-carousel-prev:focus-visible,
.p-carousel .p-carousel-content .p-carousel-next:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-carousel .p-carousel-indicators {
    padding: var(--p-carousel-indicators-padding);
}
.p-carousel .p-carousel-indicators .p-carousel-indicator {
    margin-right: var(--p-inline-spacing);
    margin-bottom: var(--p-inline-spacing);
}
.p-carousel .p-carousel-indicators .p-carousel-indicator button {
    background-color: var(--p-carousel-indicator-bg);
    width: var(--p-carousel-indicator-width);
    height: var(--p-carousel-indicator-height);
    transition: var(--p-action-icon-transition);
    border-radius: var(--p-carousel-indicator-border-radius);
}
.p-carousel .p-carousel-indicators .p-carousel-indicator button:hover {
    background: var(--p-carousel-indicator-hover-bg);
}
.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background-color: var(--p-dark-primary-color, var(--p-primary-color));
}
`;
