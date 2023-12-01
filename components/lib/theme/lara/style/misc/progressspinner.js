export default `
.p-progress-spinner-svg {
    animation: p-progress-spinner-rotate 2s linear infinite;
}

.p-progress-spinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: #ff5757;
    animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
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
        stroke: #ff5757;
    }

    40% {
        stroke: #3b82f6;
    }

    66% {
        stroke: #1ea97c;
    }

    80%,
    90% {
        stroke: #cc8925;
    }
}
`;
