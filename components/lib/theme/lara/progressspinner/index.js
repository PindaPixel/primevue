export default `
.p-progress-spinner-svg {
    animation: p-progress-spinner-rotate 2s linear infinite;
}
.p-progress-spinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: var(--p-progress-spinner-stroke-color, var(#fca5a5, var(#ff5757)));
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
        stroke: var(--p-progress-spinner-color-one, var(#fca5a5, var(#ff5757)));
    }
    40% {
        stroke: var(--p-progress-spinner-color-two, var(#93c5fd, var(#3b82f6)));
    }
    66% {
        stroke: var(--p-progress-spinner-color-three, var(#6ee7b7, var(#1ea97c)));
    }
    80%,
    90% {
        stroke: var(--p-progress-spinner-color-four, var(#fde047, var(#cc8925)));
    }
}
`;
