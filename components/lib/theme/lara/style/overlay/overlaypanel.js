export default `
.p-overlaypanel {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.p-overlaypanel .p-overlaypanel-content {
    padding: 1.25rem;
}

.p-overlaypanel .p-overlaypanel-close {
    background: #14b8a6;
    color: #ffffff;
    width: 2rem;
    height: 2rem;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    border-radius: 50%;
    position: absolute;
    top: -1rem;
    right: -1rem;
}

.p-overlaypanel .p-overlaypanel-close:enabled:hover {
    background: #0d9488;
    color: #ffffff;
}

.p-overlaypanel:after {
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff;
}

.p-overlaypanel:before {
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #f2f2f2;
}

.p-overlaypanel.p-overlaypanel-flipped:after {
    border-top-color: #ffffff;
}

.p-overlaypanel.p-overlaypanel-flipped:before {
    border-top-color: #ffffff;
}
`;