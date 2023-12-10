export default `
.p-timeline .p-timeline-event-marker {
    border: var(--p-timeline-event-marker-border);
    border-radius: var(--p-timeline-event-marker-border-radius);
    width: var(--p-timeline-event-marker-width);
    height: var(--p-timeline-event-marker-height);
    background-color: var(--p-timeline-event-marker-background);
}
.p-timeline .p-timeline-event-connector {
    background-color: var(--p-timeline-event-color);
}
.p-timeline.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline.p-timeline-vertical .p-timeline-event-content {
    padding: var(--p-timeline-vertical-event-content-padding);
}
.p-timeline.p-timeline-vertical .p-timeline-event-connector {
    width: var(--p-timeline-event-connector-size);
}
.p-timeline.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline.p-timeline-horizontal .p-timeline-event-content {
    padding: var(--p-timeline-horizontal-event-content-padding);
}
.p-timeline.p-timeline-horizontal .p-timeline-event-connector {
    height: var(--p-timeline-event-connector-size);
}
`;
