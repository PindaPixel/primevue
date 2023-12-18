export default `
.p-dock .p-dock-list-container {
    background: var(--p-dock-bg, rgba(255,255,255,.1)); //TODO:
    border: var(--p-dock-border, 1px solid rgba(255,255,255,0.2));
    padding: var(--p-dock-padding, .5rem);
    border-radius: var(--p-dock-border-radius, .5rem);
}
.p-dock .p-dock-list-container .p-dock-list {
    outline: var(--p-dock-list-outline, 0 none);
}
.p-dock .p-dock-item {
    padding: var(--p-dock-item-padding, .5rem);
    border-radius: var(--p-dock-item-border-radius, .5rem);
}
.p-dock .p-dock-item.p-focus {
    outline: var(--p-focus-outline, 0 none);
    outline-offset: var(--p-focus-outline-offset, 0);
    box-shadow: var(--p-input-list-item-focus-shadow, inset 0 0 0 0.15rem var(--p-dark-focus-outline-color, var(--p-focus-outline-color))); //TODO:
}
.p-dock .p-dock-link {
    width: var(--p-dock-action-width, 4rem);
    height: var(--p-dock-action-height, 4rem);
}
.p-dock.p-dock-top .p-dock-item-second-prev,
.p-dock.p-dock-top .p-dock-item-second-next,
.p-dock.p-dock-bottom .p-dock-item-second-prev,
.p-dock.p-dock-bottom .p-dock-item-second-next {
    margin: 0 var(--p-dock-second-items-margin, 0.9rem);//TODO:
}
.p-dock.p-dock-top .p-dock-item-prev,
.p-dock.p-dock-top .p-dock-item-next,
.p-dock.p-dock-bottom .p-dock-item-prev,
.p-dock.p-dock-bottom .p-dock-item-next {
    margin: 0 var(--p-dock-first-items-margin, 1.3rem);
}
.p-dock.p-dock-top .p-dock-item-current,
.p-dock.p-dock-bottom .p-dock-item-current {
    margin: 0 var(--p-dock-current-item-margin, 1.5rem);
}
.p-dock.p-dock-left .p-dock-item-second-prev,
.p-dock.p-dock-left .p-dock-item-second-next,
.p-dock.p-dock-right .p-dock-item-second-prev,
.p-dock.p-dock-right .p-dock-item-second-next {
    margin: var(--p-dock-second-items-margin, 0.9rem) 0;//TODO:
}
.p-dock.p-dock-left .p-dock-item-prev,
.p-dock.p-dock-left .p-dock-item-next,
.p-dock.p-dock-right .p-dock-item-prev,
.p-dock.p-dock-right .p-dock-item-next {
    margin: var(--p-dock-first-items-margin, 1.3rem) 0;
}
.p-dock.p-dock-left .p-dock-item-current,
.p-dock.p-dock-right .p-dock-item-current {
    margin: var(--p-dock-current-item-margin, 1.5rem) 0;
}
.p-dock.p-dock-mobile.p-dock-top .p-dock-list-container,
.p-dock.p-dock-mobile.p-dock-bottom .p-dock-list-container {
    overflow-x: auto;
    width: 100%;//TODO:
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
