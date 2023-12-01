export default `
.p-scrolltop {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

.p-scrolltop.p-link {
    background: rgba(0, 0, 0, 0.7);
}

.p-scrolltop.p-link:hover {
    background: rgba(0, 0, 0, 0.8);
}

.p-scrolltop .p-scrolltop-icon {
    font-size: 1.5rem;
    color: #f9fafb;
}

.p-scrolltop .p-scrolltop-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
}
`;
