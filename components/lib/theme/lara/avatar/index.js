export default `
.p-avatar {
    background-color: var(--p-avatar-bg, var(--p-dark-pink-600, var(--p-pink-300)));
    border-radius: var(--p-border-radius);
}
.p-avatar-lg {
    width: var(--p-avatar-large-width, 3rem);
    height: var(--p-avatar-large-height, 3rem);
    font-size: var(--p-avatar-large-font-size, 1.5rem);
}
.p-avatar-lg .p-avatar-icon {
    font-size: var(--p-avatar-large-icon-font-size, 1.5rem);
}
.p-avatar-xl {
    width: var(--p-avatar-xl-width, 4rem);
    height: var(--p-avatar-xl-height, 4rem);
    font-size: var(--p-avatar-xl-font-size, 2rem);
}
.p-avatar-xl .p-avatar-icon {
    font-size: var(--p-avatar-xl-icon-font-size, 2rem);
}
.p-avatar-group .p-avatar {
    border:  var(--p-avatar-border, 2px solid var(--p-dark-pink-800, var(--p-pink-0)));
}


.p-avatar-group .p-avatar + .p-avatar {
    margin-left: var(--p-avatar-margin-left, -1rem);
}

.p-avatar-group {
    display: flex;
    align-items: center;
}
`;
