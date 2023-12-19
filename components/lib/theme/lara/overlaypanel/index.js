export default `
.p-overlaypanel {
    background: var(--p-overlay-content-bg, var(--p-dark-panel-content-bg, var(--p-panel-content-bg)));
    color: var(--p-overlay-panel-content-text-color, var(--p-dark-pink-0, var(--p-pink-700)));
    border: var(--p-overlay-content-border, var(1px solid var(--p-dark-pink-600), var(0 none)));
    border-radius: var(--p-border-radius, 6px);
    box-shadow: var(--p-overlay-container-shadow);
}
.p-overlaypanel .p-overlaypanel-content {
    padding: var(--p-overlay-panel-content-padding, 0 1.5rem 2rem 1.5rem);
}
.p-overlaypanel .p-overlaypanel-close {
    background: var(--p-button-bg, var(--p-dark-primary-color, var(--p-primary-color)));
    color: var(--p-button-text-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
    width: var(--p-action-icon-width, 2rem);
    height: var(--p-action-icon-height, 2rem);
    transition: var(--p-action-icon-transition, background-color var(--p-transition-duration), color var(--p-transition-duration), box-shadow var(--p-transition-duration));
    border-radius: var(--p-action-icon-border-radius, 50%);
    position: absolute; /* //TODO: */
    top: calc(-1 * var(--p-action-icon-width, 2rem), 2));
    right: calc(-1 * var(--p-action-icon-width, 2rem), 2));
}
.p-overlaypanel .p-overlaypanel-close:enabled:hover {
    background: var(--p-button-hover-bg, var(--p-dark-primary-light-color, var(--p-primary-dark-color)));
    color: var(--p-button-text-hover-color, var(--p-dark-primary-text-color, var(--p-primary-text-color)));
}
/* //TODO: */
.p-overlaypanel:after {
    border: solid transparent;
    border-color: rgba(var(--p-overlay-content-bg), 0);
    border-bottom-color: var(--p-overlay-content-bg);
}
.p-overlaypanel:before {
    border: solid transparent;
    /* @todo
  @if (nth(var(--p-overlay-content-border), 2) == "none") {
      border-color: rgba(var(--p-overlay-content-bg), 0);
      border-bottom-color: scale-color(var(--p-overlay-content-bg), var(--p-lightness): -5%);
  } @else {
      border-color: rgba(nth(var(--p-overlay-content-border), 3), 0);
      border-bottom-color: scale-color(nth(var(--p-overlay-content-border), 3), var(--p-lightness): -5%);
  }
  */
}
/* //TODO: */
.p-overlaypanel.p-overlaypanel-flipped:after {
    border-top-color: var(--p-overlay-content-bg);
}
.p-overlaypanel.p-overlaypanel-flipped:before {
    /* @todo
  @if (nth(var(--p-overlay-content-border), 2) == "none") {
      border-top-color: var(--p-overlay-content-bg);
  } @else {
      border-top-color: nth(var(--p-overlay-content-border), 3);
  }
  */
}
`;
