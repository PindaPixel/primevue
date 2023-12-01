export default `
.p-splitbutton {
    border-radius: 6px;
}

.p-splitbutton.p-button-outlined>.p-button {
    background-color: transparent;
    color: #14b8a6;
    border: 1px solid;
}

.p-splitbutton.p-button-outlined>.p-button:enabled:hover,
.p-splitbutton.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(20, 184, 166, 0.04);
    color: #14b8a6;
}

.p-splitbutton.p-button-outlined>.p-button:enabled:active,
.p-splitbutton.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(20, 184, 166, 0.16);
    color: #14b8a6;
}

.p-splitbutton.p-button-outlined.p-button-plain>.p-button {
    color: #6b7280;
    border-color: #6b7280;
}

.p-splitbutton.p-button-outlined.p-button-plain>.p-button:enabled:hover,
.p-splitbutton.p-button-outlined.p-button-plain>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: #f3f4f6;
    color: #6b7280;
}

.p-splitbutton.p-button-outlined.p-button-plain>.p-button:enabled:active,
.p-splitbutton.p-button-outlined.p-button-plain>.p-button:not(button):not(a):not(.p-disabled):active {
    background: #e5e7eb;
    color: #6b7280;
}

.p-splitbutton.p-button-text>.p-button {
    background-color: transparent;
    color: #14b8a6;
    border-color: transparent;
}

.p-splitbutton.p-button-text>.p-button:enabled:hover,
.p-splitbutton.p-button-text>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(20, 184, 166, 0.04);
    color: #14b8a6;
    border-color: transparent;
}

.p-splitbutton.p-button-text>.p-button:enabled:active,
.p-splitbutton.p-button-text>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(20, 184, 166, 0.16);
    color: #14b8a6;
    border-color: transparent;
}

.p-splitbutton.p-button-text.p-button-plain>.p-button {
    color: #6b7280;
}

.p-splitbutton.p-button-text.p-button-plain>.p-button:enabled:hover,
.p-splitbutton.p-button-text.p-button-plain>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: #f3f4f6;
    color: #6b7280;
}

.p-splitbutton.p-button-text.p-button-plain>.p-button:enabled:active,
.p-splitbutton.p-button-text.p-button-plain>.p-button:not(button):not(a):not(.p-disabled):active {
    background: #e5e7eb;
    color: #6b7280;
}

.p-splitbutton.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.p-splitbutton.p-button-rounded {
    border-radius: 2rem;
}

.p-splitbutton.p-button-rounded>.p-button {
    border-radius: 2rem;
}

.p-splitbutton.p-button-sm>.p-button {
    font-size: 0.875rem;
    padding: 0.65625rem 1.09375rem;
}

.p-splitbutton.p-button-sm>.p-button .p-button-icon {
    font-size: 0.875rem;
}

.p-splitbutton.p-button-lg>.p-button {
    font-size: 1.25rem;
    padding: 0.9375rem 1.5625rem;
}

.p-splitbutton.p-button-lg>.p-button.p-button-icon-only {
    width: auto;
}

.p-splitbutton.p-button-lg>.p-button .p-button-icon {
    font-size: 1.25rem;
}

.p-splitbutton.p-button-lg>.p-button .p-icon {
    width: 1.25rem;
    height: 1.25rem;
}

.p-splitbutton.p-button-secondary.p-button-outlined>.p-button {
    background-color: transparent;
    color: #64748B;
    border: 1px solid;
}

.p-splitbutton.p-button-secondary.p-button-outlined>.p-button:enabled:hover,
.p-splitbutton.p-button-secondary.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(100, 116, 139, 0.04);
    color: #64748B;
}

.p-splitbutton.p-button-secondary.p-button-outlined>.p-button:enabled:active,
.p-splitbutton.p-button-secondary.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(100, 116, 139, 0.16);
    color: #64748B;
}

.p-splitbutton.p-button-secondary.p-button-text>.p-button {
    background-color: transparent;
    color: #64748B;
    border-color: transparent;
}

.p-splitbutton.p-button-secondary.p-button-text>.p-button:enabled:hover,
.p-splitbutton.p-button-secondary.p-button-text>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(100, 116, 139, 0.04);
    border-color: transparent;
    color: #64748B;
}

.p-splitbutton.p-button-secondary.p-button-text>.p-button:enabled:active,
.p-splitbutton.p-button-secondary.p-button-text>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(100, 116, 139, 0.16);
    border-color: transparent;
    color: #64748B;
}

.p-splitbutton.p-button-info.p-button-outlined>.p-button {
    background-color: transparent;
    color: #0ea5e9;
    border: 1px solid;
}

.p-splitbutton.p-button-info.p-button-outlined>.p-button:enabled:hover,
.p-splitbutton.p-button-info.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(14, 165, 233, 0.04);
    color: #0ea5e9;
}

.p-splitbutton.p-button-info.p-button-outlined>.p-button:enabled:active,
.p-splitbutton.p-button-info.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(14, 165, 233, 0.16);
    color: #0ea5e9;
}

.p-splitbutton.p-button-info.p-button-text>.p-button {
    background-color: transparent;
    color: #0ea5e9;
    border-color: transparent;
}

.p-splitbutton.p-button-info.p-button-text>.p-button:enabled:hover,
.p-splitbutton.p-button-info.p-button-text>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(14, 165, 233, 0.04);
    border-color: transparent;
    color: #0ea5e9;
}

.p-splitbutton.p-button-info.p-button-text>.p-button:enabled:active,
.p-splitbutton.p-button-info.p-button-text>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(14, 165, 233, 0.16);
    border-color: transparent;
    color: #0ea5e9;
}

.p-splitbutton.p-button-success.p-button-outlined>.p-button {
    background-color: transparent;
    color: #22C55E;
    border: 1px solid;
}

.p-splitbutton.p-button-success.p-button-outlined>.p-button:enabled:hover,
.p-splitbutton.p-button-success.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(34, 197, 94, 0.04);
    color: #22C55E;
}

.p-splitbutton.p-button-success.p-button-outlined>.p-button:enabled:active,
.p-splitbutton.p-button-success.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(34, 197, 94, 0.16);
    color: #22C55E;
}

.p-splitbutton.p-button-success.p-button-text>.p-button {
    background-color: transparent;
    color: #22C55E;
    border-color: transparent;
}

.p-splitbutton.p-button-success.p-button-text>.p-button:enabled:hover,
.p-splitbutton.p-button-success.p-button-text>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(34, 197, 94, 0.04);
    border-color: transparent;
    color: #22C55E;
}

.p-splitbutton.p-button-success.p-button-text>.p-button:enabled:active,
.p-splitbutton.p-button-success.p-button-text>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(34, 197, 94, 0.16);
    border-color: transparent;
    color: #22C55E;
}

.p-splitbutton.p-button-warning.p-button-outlined>.p-button {
    background-color: transparent;
    color: #f97316;
    border: 1px solid;
}

.p-splitbutton.p-button-warning.p-button-outlined>.p-button:enabled:hover,
.p-splitbutton.p-button-warning.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(249, 115, 22, 0.04);
    color: #f97316;
}

.p-splitbutton.p-button-warning.p-button-outlined>.p-button:enabled:active,
.p-splitbutton.p-button-warning.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(249, 115, 22, 0.16);
    color: #f97316;
}

.p-splitbutton.p-button-warning.p-button-text>.p-button {
    background-color: transparent;
    color: #f97316;
    border-color: transparent;
}

.p-splitbutton.p-button-warning.p-button-text>.p-button:enabled:hover,
.p-splitbutton.p-button-warning.p-button-text>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(249, 115, 22, 0.04);
    border-color: transparent;
    color: #f97316;
}

.p-splitbutton.p-button-warning.p-button-text>.p-button:enabled:active,
.p-splitbutton.p-button-warning.p-button-text>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(249, 115, 22, 0.16);
    border-color: transparent;
    color: #f97316;
}

.p-splitbutton.p-button-help.p-button-outlined>.p-button {
    background-color: transparent;
    color: #A855F7;
    border: 1px solid;
}

.p-splitbutton.p-button-help.p-button-outlined>.p-button:enabled:hover,
.p-splitbutton.p-button-help.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(168, 85, 247, 0.04);
    color: #A855F7;
}

.p-splitbutton.p-button-help.p-button-outlined>.p-button:enabled:active,
.p-splitbutton.p-button-help.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(168, 85, 247, 0.16);
    color: #A855F7;
}

.p-splitbutton.p-button-help.p-button-text>.p-button {
    background-color: transparent;
    color: #A855F7;
    border-color: transparent;
}

.p-splitbutton.p-button-help.p-button-text>.p-button:enabled:hover,
.p-splitbutton.p-button-help.p-button-text>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(168, 85, 247, 0.04);
    border-color: transparent;
    color: #A855F7;
}

.p-splitbutton.p-button-help.p-button-text>.p-button:enabled:active,
.p-splitbutton.p-button-help.p-button-text>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(168, 85, 247, 0.16);
    border-color: transparent;
    color: #A855F7;
}

.p-splitbutton.p-button-danger.p-button-outlined>.p-button {
    background-color: transparent;
    color: #EF4444;
    border: 1px solid;
}

.p-splitbutton.p-button-danger.p-button-outlined>.p-button:enabled:hover,
.p-splitbutton.p-button-danger.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(239, 68, 68, 0.04);
    color: #EF4444;
}

.p-splitbutton.p-button-danger.p-button-outlined>.p-button:enabled:active,
.p-splitbutton.p-button-danger.p-button-outlined>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(239, 68, 68, 0.16);
    color: #EF4444;
}

.p-splitbutton.p-button-danger.p-button-text>.p-button {
    background-color: transparent;
    color: #EF4444;
    border-color: transparent;
}

.p-splitbutton.p-button-danger.p-button-text>.p-button:enabled:hover,
.p-splitbutton.p-button-danger.p-button-text>.p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(239, 68, 68, 0.04);
    border-color: transparent;
    color: #EF4444;
}

.p-splitbutton.p-button-danger.p-button-text>.p-button:enabled:active,
.p-splitbutton.p-button-danger.p-button-text>.p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(239, 68, 68, 0.16);
    border-color: transparent;
    color: #EF4444;
}
`;
