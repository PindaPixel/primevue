export default `
.p-speeddial-button.p-button.p-button-icon-only {
    width: 4rem;
    height: 4rem;
}

.p-speeddial-button.p-button.p-button-icon-only .p-button-icon {
    font-size: 1.3rem;
}

.p-speeddial-button.p-button.p-button-icon-only .p-icon {
    width: 1.3rem;
    height: 1.3rem;
}

.p-speeddial-list {
    outline: 0 none;
}

.p-speeddial-item.p-focus>.p-speeddial-action {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #99f6e4;
}

.p-speeddial-action {
    width: 3rem;
    height: 3rem;
    background: #4b5563;
    color: #fff;
}

.p-speeddial-action:hover {
    background: #022354;
    color: #fff;
}

.p-speeddial-direction-up .p-speeddial-item {
    margin: 0.25rem 0;
}

.p-speeddial-direction-up .p-speeddial-item:first-child {
    margin-bottom: 0.5rem;
}

.p-speeddial-direction-down .p-speeddial-item {
    margin: 0.25rem 0;
}

.p-speeddial-direction-down .p-speeddial-item:first-child {
    margin-top: 0.5rem;
}

.p-speeddial-direction-left .p-speeddial-item {
    margin: 0 0.25rem;
}

.p-speeddial-direction-left .p-speeddial-item:first-child {
    margin-right: 0.5rem;
}

.p-speeddial-direction-right .p-speeddial-item {
    margin: 0 0.25rem;
}

.p-speeddial-direction-right .p-speeddial-item:first-child {
    margin-left: 0.5rem;
}

.p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
    margin: 0;
}

.p-speeddial-circle .p-speeddial-item:first-child,
.p-speeddial-circle .p-speeddial-item:last-child,
.p-speeddial-semi-circle .p-speeddial-item:first-child,
.p-speeddial-semi-circle .p-speeddial-item:last-child,
.p-speeddial-quarter-circle .p-speeddial-item:first-child,
.p-speeddial-quarter-circle .p-speeddial-item:last-child {
    margin: 0;
}

.p-speeddial-mask {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 6px;
}

.p-speeddial-item.p-focus>.p-speeddial-action {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #75f0e3, 0 1px 2px 0 black;
}
`;
