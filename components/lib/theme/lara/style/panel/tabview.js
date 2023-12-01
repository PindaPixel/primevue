export default `
.p-tabview .p-tabview-nav {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-width: 0 0 2px 0;
}

.p-tabview .p-tabview-nav li {
    margin-right: 0;
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link {
    border: solid #e5e7eb;
    border-width: 0 0 2px 0;
    border-color: transparent transparent #e5e7eb transparent;
    background: #ffffff;
    color: #6b7280;
    padding: 1.25rem;
    font-weight: 700;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    transition: box-shadow 0.2s;
    margin: 0 0 -2px 0;
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.2rem #99f6e4;
}

.p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {
    background: #ffffff;
    border-color: #9ca3af;
    color: #6b7280;
}

.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background: #ffffff;
    border-color: #14b8a6;
    color: #14b8a6;
}

.p-tabview .p-tabview-nav-btn.p-link {
    background: #ffffff;
    color: #14b8a6;
    width: 3rem;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    border-radius: 0;
}

.p-tabview .p-tabview-nav-btn.p-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.2rem #99f6e4;
}

.p-tabview .p-tabview-panels {
    background: #ffffff;
    padding: 1.25rem;
    border: 0 none;
    color: #4b5563;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link {
    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
`;
