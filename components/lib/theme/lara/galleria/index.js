export default `
.p-galleria .p-galleria-close {
    margin: var(--p-galleria-close-icon-margin, .5rem);
    background: var(--p-galleria-close-icon-bg, transparent);
    color: var(--p-galleria-close-icon-color, var(#f8f9fa, var(--p-pink-100)));
    width: var(--p-galleria-close-icon-width, 4rem);
    height: var(--p-galleria-close-icon-height, 4rem);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    border-radius: var(--p-galleria-close-icon-border-radius, 50%);
}
.p-galleria .p-galleria-close .p-galleria-close-icon {
    font-size: var(--p-galleria-close-icon-font-size, 2rem);
}
.p-galleria .p-galleria-close .p-icon {
    width: var(--p-galleria-close-icon-font-size, 2rem);
    height: var(--p-galleria-close-icon-font-size, 2rem);
}
.p-galleria .p-galleria-close:hover {
    background: var(--p-galleria-close-icon-hover-bg, rgba(255,255,255,0.1));
    color: var(--p-galleria-close-icon-hover-color, var(#f8f9fa, var(--p-pink-100)));
}
.p-galleria .p-galleria-item-nav {
    background: var(--p-galleria-item-navigator-bg, transparent);
    color: var(--p-galleria-item-navigator-color, var(#f8f9fa, var(--p-pink-100)));
    width: var(--p-galleria-item-navigator-width, 4rem);
    height: var(--p-galleria-item-navigator-height, 4rem);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    border-radius: var(--p-galleria-item-navigator-border-radius, var(--p-border-radius, 6px));
    margin: var(--p-galleria-item-navigator-margin, 0 .5rem);
}
.p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon,
.p-galleria .p-galleria-item-nav .p-galleria-item-next-icon {
    font-size: var(--p-galleria-item-navigator-font-size, 2rem);
}
.p-galleria .p-galleria-item-nav .p-icon {
    width: var(--p-galleria-close-icon-font-size, 2rem);
    height: var(--p-galleria-close-icon-font-size, 2rem);
}
.p-galleria .p-galleria-item-nav:not(.p-disabled):hover {
    background: var(--p-galleria-item-navigator-hover-bg, rgba(255,255,255,0.1));
    color: var(--p-galleria-item-navigator-hover-color, var(#f8f9fa, var(--p-pink-100)));
}
.p-galleria .p-galleria-caption {
    background: var(--p-galleria-caption-bg, rgba(0,0,0,.5));
    color: var(--p-galleria-caption-text-color, var(#f8f9fa, var(--p-pink-100)));
    padding: var(--p-galleria-caption-padding, 1rem);
}
.p-galleria .p-galleria-indicators {
    padding: var(--p-galleria-indicators-padding, 1rem);
}
.p-galleria .p-galleria-indicators .p-galleria-indicator button {
    background-color: var(--p-galleria-indicator-bg, var(--p-dark-pink-600, var(--p-pink-400)));
    width: var(--p-galleria-indicator-width, 1rem);
    height: var(--p-galleria-indicator-height, 1rem);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    border-radius: var(--p-galleria-indicator-border-radius, 50%);
}
.p-galleria .p-galleria-indicators .p-galleria-indicator button:hover {
    background: var(--p-galleria-indicator-hover-bg, var(rgba(255,255,255,0.1), var(--p-pink-500)));
}
.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-galleria.p-galleria-indicators-bottom .p-galleria-indicator,
.p-galleria.p-galleria-indicators-top .p-galleria-indicator {
    margin-right: var(--p-inline-spacing, .5rem);
}
.p-galleria.p-galleria-indicators-left .p-galleria-indicator,
.p-galleria.p-galleria-indicators-right .p-galleria-indicator {
    margin-bottom: var(--p-inline-spacing, .5rem);
}
.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators {
    background: var(--p-galleria-indicators-bg-on-item, rgba(0,0,0,.5));
}
.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button {
    background: var(--p-galleria-indicator-bg-on-item, rgba(255,255,255,.4));
}
.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button:hover {
    background: var(--p-galleria-indicator-hover-bg-on-item, rgba(255,255,255,.6));
}
.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: var(--p-highlight-bg);
    color: var(--p-highlight-text-color);
}
.p-galleria .p-galleria-thumbnail-container {
    background: var(--p-galleria-thumbnail-container-bg, rgba(0,0,0,.9));
    padding: var(--p-galleria-thumbnail-container-padding, 1rem .25rem);
}
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev,
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next {
    margin: var(--p-inline-spacing, .5rem);
    background-color: var(--p-galleria-thumbnail-navigator-bg, transparent);
    color: var(--p-galleria-thumbnail-navigator-color, var(#f8f9fa, var(--p-pink-100)));
    width: var(--p-galleria-thumbnail-navigator-width, 2rem);
    height: var(--p-galleria-thumbnail-navigator-height, 2rem);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    border-radius: var(--p-galleria-thumbnail-navigator-border-radius, 50%);
}
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev:hover,
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next:hover {
    background: var(--p-galleria-thumbnail-navigator-hover-bg);
    color: var(--p-galleria-thumbnail-navigator-hover-color, var(#f8f9fa, var(--p-pink-100)));
}
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content:focus-visible {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
.p-galleria-mask {
    --maskbg: var(--p-galleria-mask-bg, rgba(0,0,0,0.9));
}
.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background-color: var(--p-dark-primary-color, var(--p-primary-color));
}
`;
