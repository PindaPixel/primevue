export default `
.p-card {
    background: var(--p-card-bg, var(--p-dark-pink-800, var(--p-pink-0)));
    color: var(--p-card-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    box-shadow: var(--p-card-shadow, 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)); /* @todo */
    border-radius: var(--p-border-radius);
}
.p-card-body {
    padding: var(--p-card-body-padding, 1.25rem);
}
.p-card-title {
    font-size: var(--p-card-title-font-size, 1.5rem);
    font-weight: var(--p-card-title-font-weight, 700);
    margin-bottom: var(--p-card-title-margin-bottom, .5rem); /* @todo */
}
.p-card-subtitle {
    font-weight: var(--p-card-sub-title-font-weight, 400);
    margin-bottom: var(--p-card-subtitle-margin-bottom, .5rem);
    color: var(--p-card-sub-title-color, var(--p-dark-pink-100, var(--p-pink-600)));
}
.p-card-content {
    padding: var(--p-card-content-padding, 1.25rem 0);
}
.p-card-footer {
    padding: var(--p-card-footer-padding, 1.25rem 0 0 0);
}
`;
