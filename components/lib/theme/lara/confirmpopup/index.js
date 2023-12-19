export default `
.p-confirm-popup {
    background: var(--p-overlay-content-bg, var(--p-dark-panel-content-bg, var(--p-panel-content-bg)));
    color: var(--p-confirm-popup-content-text-color, var(--p-dark-pink-0, var(--p-pink-700))); /* //TODO: */
    border: var(--p-overlay-content-border, var(1px solid var(--p-dark-pink-600), var(0 none)));
    border-radius: var(--p-border-radius, 6px);
    box-shadow: var(--p-overlay-container-shadow, var(0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0,0,0,.12), var(0 1px 3px rgba(0,0,0,.3))));
}
.p-confirm-popup .p-confirm-popup-content {
    padding: var(--p-confirm-popup-content-padding); /* //TODO: */
}
.p-confirm-popup .p-confirm-popup-footer {
    text-align: right; /* //TODO: */
    padding: var(--p-confirm-popup-footer-padding, 0 1.25rem 1.25rem 1.25rem);
}
.p-confirm-popup .p-confirm-popup-footer button { /* //TODO: */
    margin: 0 var(--p-inline-spacing, .5rem) 0 0;
    width: auto;
}
.p-confirm-popup .p-confirm-popup-footer button:last-child {
    margin: 0; /* //TODO: */
}
/* //TODO: */
.p-confirm-popup:after {
    border: solid transparent;
    border-color: rgba(var(--p-overlay-content-bg), 0);
    border-bottom-color: var(--p-overlay-content-bg);
}
.p-confirm-popup:before {
    border: solid transparent;
    /* @todo
  @if (nth(var(--p-overlay-content-border), 2) == 'none') {
      border-color: rgba(var(--p-overlay-content-bg), 0);
      border-bottom-color: scale-color(var(--p-overlay-content-bg), var(--p-lightness): -5%);
  }
  @else {
      border-color: rgba(nth(var(--p-overlay-content-border), 3), 0);
      border-bottom-color: scale-color(nth(var(--p-overlay-content-border), 3), var(--p-lightness): -5%);
  }
  */
}
/* //TODO: */
.p-confirm-popup.p-confirm-popup-flipped:after {
    border-top-color: var(--p-overlay-content-bg);
}
.p-confirm-popup.p-confirm-popup-flipped:before {
    /* @todo
  @if (nth(var(--p-overlay-content-border), 2) == 'none') {
      border-top-color: var(--p-overlay-content-bg);
  }
  @else {
      border-top-color: nth(var(--p-overlay-content-border), 3);
  }
  */
}
.p-confirm-popup .p-confirm-popup-icon {
    font-size: calc(var(--p-prime-icon-font-size) * 1.5);
}
.p-confirm-popup .p-confirm-popup-icon.p-icon {
    width: calc(var(--p-prime-icon-font-size) * 1.5);
    height: calc(var(--p-prime-icon-font-size) * 1.5);
}
.p-confirm-popup .p-confirm-popup-message {
    margin-left: calc(var(--p-inline-spacing) * 2);
}
`;
