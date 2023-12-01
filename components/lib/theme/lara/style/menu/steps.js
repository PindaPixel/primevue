export default `
.p-steps .p-steps-item .p-menuitem-link {
    background: transparent;
    transition: box-shadow 0.2s;
    border-radius: 6px;
    background: #ffffff;
}

.p-steps .p-steps-item .p-menuitem-link .p-steps-number {
    color: #4b5563;
    border: 1px solid #f3f4f6;
    background: #ffffff;
    min-width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.143rem;
    z-index: 1;
    border-radius: 50%;
}

.p-steps .p-steps-item .p-menuitem-link .p-steps-title {
    margin-top: 0.5rem;
    color: #6b7280;
}

.p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-steps .p-steps-item.p-highlight .p-steps-number {
    background: #0f766e;
    color: #0f766e;
}

.p-steps .p-steps-item.p-highlight .p-steps-title {
    font-weight: 700;
    color: #4b5563;
}

.p-steps .p-steps-item:before {
    content: " ";
    border-top: 1px solid #e5e7eb;
    width: 100%;
    top: 50%;
    left: 0;
    display: block;
    position: absolute;
    margin-top: -1rem;
}
`;
