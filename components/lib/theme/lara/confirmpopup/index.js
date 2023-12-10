export default `
.p-confirm-popup {
    background: var(--p-overlay-content-bg);
    color: var(--p-panel-content-text-color);
    border: var(--p-overlay-content-border);
    border-radius: var(--p-border-radius);
    box-shadow: var(--p-overlay-container-shadow);
}
.p-confirm-popup .p-confirm-popup-content {
    padding: var(--p-confirm-popup-content-padding);
}
.p-confirm-popup .p-confirm-popup-footer {
    text-align: right;
    padding: var(--p-confirm-popup-footer-padding);
}
.p-confirm-popup .p-confirm-popup-footer button {
    margin: 0 var(--p-inline-spacing) 0 0;
    width: auto;
}
.p-confirm-popup .p-confirm-popup-footer button:last-child {
    margin: 0;
}
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
    font-size: "var(--p-prime-icon-font-size) * 1.5";
}
.p-confirm-popup .p-confirm-popup-icon.p-icon {
    width: "var(--p-prime-icon-font-size) * 1.5";
    height: "var(--p-prime-icon-font-size) * 1.5";
}
.p-confirm-popup .p-confirm-popup-message {
    margin-left: "var(--p-inline-spacing) * 2";
}
`;
