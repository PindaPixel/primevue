export default `
.p-carousel .p-carousel-content .p-carousel-prev,
.p-carousel .p-carousel-content .p-carousel-next {
    width: var(--p-action-icon-width, 2rem);
    height: var(--p-action-icon-height, 2rem);
    color: var(--p-action-icon-color, var(--p-dark-pink-100, var(--p-pink-600)));
    border: var(--p-action-icon-border, 0 none);
    background: var(--p-action-icon-bg, transparent);
    border-radius: var(--p-action-icon-border-radius, 50%);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    margin: var(--p-inline-spacing, .5rem);
}
.p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
.p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
    color: var(--p-action-icon-hover-color, var(--p-dark-pink-0, var(--p-pink-800)));
    border-color: var(--p-action-icon-hover-border-color, transparent);
    background: var(--p-action-icon-hover-bg, var(--p-dark-pink-900, var(--p-pink-200)));
}
.p-carousel .p-carousel-content .p-carousel-prev:focus-visible,
.p-carousel .p-carousel-content .p-carousel-next:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-carousel .p-carousel-indicators {
    padding: var(--p-carousel-indicators-padding, 1rem);
}
.p-carousel .p-carousel-indicators .p-carousel-indicator {
    margin-right: var(--p-inline-spacing, .5rem);
    margin-bottom: var(--p-inline-spacing, .5rem);
}
.p-carousel .p-carousel-indicators .p-carousel-indicator button {
    background-color: var(--p-carousel-indicator-bg, var(--p-dark-pink-600, var(--p-pink-400)));
    width: var(--p-carousel-indicator-width, 2rem);
    height: var(--p-carousel-indicator-height, .5rem);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    border-radius: var(--p-carousel-indicator-border-radius, 0);
}
.p-carousel .p-carousel-indicators .p-carousel-indicator button:hover {
    background: var(--p-carousel-indicator-hover-bg, var(--p-dark-pink-900, var(--p-pink-500)));
}
.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background-color: var(--p-dark-primary-color, var(--p-primary-color));
}
`;
