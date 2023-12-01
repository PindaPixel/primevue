export default `
.p-carousel .p-carousel-content .p-carousel-prev,
.p-carousel .p-carousel-content .p-carousel-next {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    margin: 0.5rem;
}

.p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
.p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
}

.p-carousel .p-carousel-content .p-carousel-prev:focus-visible,
.p-carousel .p-carousel-content .p-carousel-next:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-carousel .p-carousel-indicators {
    padding: 1rem;
}

.p-carousel .p-carousel-indicators .p-carousel-indicator {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

.p-carousel .p-carousel-indicators .p-carousel-indicator button {
    background-color: #d1d5db;
    width: 2rem;
    height: 0.5rem;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    border-radius: 0;
}

.p-carousel .p-carousel-indicators .p-carousel-indicator button:hover {
    background: #9ca3af;
}

.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background: #0f766e;
    color: #0f766e;
}

.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background-color: #14b8a6;
}
`;
