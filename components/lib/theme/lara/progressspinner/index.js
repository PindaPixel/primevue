export default `
.p-progress-spinner-svg {
    animation: p-progress-spinner-rotate 2s linear infinite;
}
.p-progress-spinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: var(--p-progress-spinner-stroke-color);
    animation:
        p-progress-spinner-dash 1.5s ease-in-out infinite,
        p-progress-spinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progress-spinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progress-spinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: var(--p-progress-spinner-color-one);
    }
    40% {
        stroke: var(--p-progress-spinner-color-two);
    }
    66% {
        stroke: var(--p-progress-spinner-color-three);
    }
    80%,
    90% {
        stroke: var(--p-progress-spinner-color-four);
    }
}
`;
