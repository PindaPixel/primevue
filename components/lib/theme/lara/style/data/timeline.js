export default `
.p-timeline .p-timeline-event-marker {
    border: 2px solid #14b8a6;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background-color: #ffffff;
}

.p-timeline .p-timeline-event-connector {
    background-color: #e5e7eb;
}

.p-timeline.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline.p-timeline-vertical .p-timeline-event-content {
    padding: 0 1rem;
}

.p-timeline.p-timeline-vertical .p-timeline-event-connector {
    width: 2px;
}

.p-timeline.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline.p-timeline-horizontal .p-timeline-event-content {
    padding: 1rem 0;
}

.p-timeline.p-timeline-horizontal .p-timeline-event-connector {
    height: 2px;
}
`;