export default `
.p-overlaypanel {
    background: var(--p-overlay-content-bg);
    color: var(--p-panel-content-text-color);
    border: var(--p-overlay-content-border);
    border-radius: var(--p-border-radius);
    box-shadow: var(--p-overlay-container-shadow);
}
.p-overlaypanel .p-overlaypanel-content {
    padding: var(--p-panel-content-padding);
}
.p-overlaypanel .p-overlaypanel-close {
    background: var(--p-button-bg);
    color: var(--p-button-text-color);
    width: var(--p-action-icon-width);
    height: var(--p-action-icon-height);
    transition: var(--p-action-icon-transition);
    border-radius: var(--p-action-icon-border-radius);
    position: absolute;
    top: "math.div(-1 * var(--p-action-icon-width), 2)";
    right: "math.div(-1 * var(--p-action-icon-width), 2)";
}
.p-overlaypanel .p-overlaypanel-close:enabled:hover {
    background: var(--p-button-hover-bg);
    color: var(--p-button-text-hover-color);
}
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
