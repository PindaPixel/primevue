export default `
.p-galleria .p-galleria-close {
    margin: 0.5rem;
    background: transparent;
    color: #f9fafb;
    width: 4rem;
    height: 4rem;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    border-radius: 50%;
}

.p-galleria .p-galleria-close .p-galleria-close-icon {
    font-size: 2rem;
}

.p-galleria .p-galleria-close .p-icon {
    width: 2rem;
    height: 2rem;
}

.p-galleria .p-galleria-close:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #f9fafb;
}

.p-galleria .p-galleria-item-nav {
    background: transparent;
    color: #f9fafb;
    width: 4rem;
    height: 4rem;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
    margin: 0 0.5rem;
}

.p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon,
.p-galleria .p-galleria-item-nav .p-galleria-item-next-icon {
    font-size: 2rem;
}

.p-galleria .p-galleria-item-nav .p-icon {
    width: 2rem;
    height: 2rem;
}

.p-galleria .p-galleria-item-nav:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.1);
    color: #f9fafb;
}

.p-galleria .p-galleria-caption {
    background: rgba(0, 0, 0, 0.5);
    color: #f9fafb;
    padding: 1rem;
}

.p-galleria .p-galleria-indicators {
    padding: 1rem;
}

.p-galleria .p-galleria-indicators .p-galleria-indicator button {
    background-color: #d1d5db;
    width: 1rem;
    height: 1rem;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    border-radius: 50%;
}

.p-galleria .p-galleria-indicators .p-galleria-indicator button:hover {
    background: #9ca3af;
}

.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: #0f766e;
    color: #0f766e;
}

.p-galleria.p-galleria-indicators-bottom .p-galleria-indicator,
.p-galleria.p-galleria-indicators-top .p-galleria-indicator {
    margin-right: 0.5rem;
}

.p-galleria.p-galleria-indicators-left .p-galleria-indicator,
.p-galleria.p-galleria-indicators-right .p-galleria-indicator {
    margin-bottom: 0.5rem;
}

.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators {
    background: rgba(0, 0, 0, 0.5);
}

.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button {
    background: rgba(255, 255, 255, 0.4);
}

.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button:hover {
    background: rgba(255, 255, 255, 0.6);
}

.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: #0f766e;
    color: #0f766e;
}

.p-galleria .p-galleria-thumbnail-container {
    background: rgba(0, 0, 0, 0.9);
    padding: 1rem 0.25rem;
}

.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev,
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next {
    margin: 0.5rem;
    background-color: transparent;
    color: #f9fafb;
    width: 2rem;
    height: 2rem;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    border-radius: 50%;
}

.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev:hover,
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #f9fafb;
}

.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-galleria-mask {
    --maskbg: rgba(0, 0, 0, 0.9);
}

.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background-color: #14b8a6;
}
`;
