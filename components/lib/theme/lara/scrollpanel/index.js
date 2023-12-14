export default `
.p-scrollpanel-bar {
    background: var(--p-scroll-panel-track-bg, var(--p-dark-pink-600, var(--p-pink-100)));
    border: var(--p-scroll-panel-track-border, 0 none);
    transition: var(--p-form-element-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration));
}
.p-scrollpanel-bar:focus-visible {
    outline: var(--p-focus-outline, var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-focus-shadow, 0 0 0 .2rem var(--p-dark-primary-lightest-color, var(--p-primary-light-color)));
}
`;
