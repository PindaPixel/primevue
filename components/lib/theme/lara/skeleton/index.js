export default `
.p-skeleton {
    background-color: var(--p-skeleton-bg);
    border-radius: var(--p-border-radius);
}
.p-skeleton:after {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), var(--p-skeleton-animation-bg), rgba(255, 255, 255, 0));
}
`;
