export default `
.p-dock .p-dock-list-container {
    background: var(--p-dock-bg);
    border: var(--p-dock-border);
    padding: var(--p-dock-padding);
    border-radius: var(--p-dock-border-radius);
}
.p-dock .p-dock-list-container .p-dock-list {
    outline: 0 none;
}
.p-dock .p-dock-item {
    padding: var(--p-dock-item-padding);
    border-radius: var(--p-dock-item-border-radius);
}
.p-dock .p-dock-item.p-focus {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-input-list-item-focus-shadow);
}
.p-dock .p-dock-link {
    width: var(--p-dock-action-width);
    height: var(--p-dock-action-height);
}
.p-dock.p-dock-top .p-dock-item-second-prev,
.p-dock.p-dock-top .p-dock-item-second-next,
.p-dock.p-dock-bottom .p-dock-item-second-prev,
.p-dock.p-dock-bottom .p-dock-item-second-next {
    margin: 0 var(--p-dock-second-items-margin);
}
.p-dock.p-dock-top .p-dock-item-prev,
.p-dock.p-dock-top .p-dock-item-next,
.p-dock.p-dock-bottom .p-dock-item-prev,
.p-dock.p-dock-bottom .p-dock-item-next {
    margin: 0 var(--p-dock-first-items-margin);
}
.p-dock.p-dock-top .p-dock-item-current,
.p-dock.p-dock-bottom .p-dock-item-current {
    margin: 0 var(--p-dock-current-item-margin);
}
.p-dock.p-dock-left .p-dock-item-second-prev,
.p-dock.p-dock-left .p-dock-item-second-next,
.p-dock.p-dock-right .p-dock-item-second-prev,
.p-dock.p-dock-right .p-dock-item-second-next {
    margin: var(--p-dock-second-items-margin) 0;
}
.p-dock.p-dock-left .p-dock-item-prev,
.p-dock.p-dock-left .p-dock-item-next,
.p-dock.p-dock-right .p-dock-item-prev,
.p-dock.p-dock-right .p-dock-item-next {
    margin: var(--p-dock-first-items-margin) 0;
}
.p-dock.p-dock-left .p-dock-item-current,
.p-dock.p-dock-right .p-dock-item-current {
    margin: var(--p-dock-current-item-margin) 0;
}
.p-dock.p-dock-mobile.p-dock-top .p-dock-list-container,
.p-dock.p-dock-mobile.p-dock-bottom .p-dock-list-container {
    overflow-x: auto;
    width: 100%;
}
.p-dock.p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,
.p-dock.p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
    margin: 0 auto;
}
.p-dock.p-dock-mobile.p-dock-left .p-dock-list-container,
.p-dock.p-dock-mobile.p-dock-right .p-dock-list-container {
    overflow-y: auto;
    height: 100%;
}
.p-dock.p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,
.p-dock.p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
    margin: auto 0;
}
.p-dock.p-dock-mobile .p-dock-list .p-dock-item {
    transform: none;
    margin: 0;
}
`;
