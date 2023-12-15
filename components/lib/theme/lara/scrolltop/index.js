export default `
.p-scrolltop {
    width: var(--p-scroll-top-width, ,3rem);
    height: var(--p-scroll-top-height, 3rem);
    border-radius: var(--p-scroll-top-border-radius, 50%);
    box-shadow: var(--p-input-overlay-shadow, var(0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), var(0 2px 12px 0 rgba(0,0,0,.1))));
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-scrolltop.p-link {
    background: var(--p-scroll-top-bg, var(--p-dark-highlight-bg, rgba(0,0,0,0.7)));
}
.p-scrolltop.p-link:hover {
    background: var(--p-scroll-top-hover-bg, var(scale-color(var(--p-dark-highlight-bg), alpha: 24%), var(rgba(0,0,0,0.8))));
}
.p-scrolltop-icon {
    font-size: var(--p-scroll-top-font-size, 1.5rem);
    color: var(--p-scroll-top-text-color, var(--p-dark-highlight-text-color, var(--p-pink-100)));
}
.p-scrolltop-icon.p-icon {
    width: var(--p-scroll-top-font-size, 1.5rem);
    height: var(--p-scroll-top-font-size, 1.5rem);
}
`;
