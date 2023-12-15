export default `
.p-skeleton {
    background-color: var(--p-skeleton-bg, var(rgba(255,255,255,.06), var(--p-pink-300))); //TODO: */
    border-radius: var(--p-border-radius, 6px);
}
.p-skeleton:after {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), var(--p-skeleton-animation-bg, rgba(255,255,255,.04)), rgba(255, 255, 255, 0)); /* //TODO: */
}
`;
