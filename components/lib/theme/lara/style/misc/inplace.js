export default `
.p-inplace .p-inplace-display {
    padding: 0.75rem 0.75rem;
    border-radius: 6px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.p-inplace .p-inplace-display:not(.p-disabled):hover {
    background: #f3f4f6;
    color: #4b5563;
}

.p-inplace .p-inplace-display:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}
`;
