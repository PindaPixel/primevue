import path from 'path';

/* @todo: Refactor alias: https://github.com/rollup/plugins/tree/master/packages/alias#regular-expression-aliases */

const STYLE_ALIAS = {
    'primevue/base/style': path.resolve(__dirname, './components/lib/base/style/BaseStyle.js'),
    'primevue/basecomponent/style': path.resolve(__dirname, './components/lib/basecomponent/style/BaseComponentStyle.js'),
    'primevue/accordion/style': path.resolve(__dirname, './components/lib/accordion/style/AccordionStyle.js'),
    'primevue/accordiontab/style': path.resolve(__dirname, './components/lib/accordiontab/style/AccordionTabStyle.js'),
    'primevue/animateonscroll/style': path.resolve(__dirname, './components/lib/animateonscroll/style/AnimateOnScrollStyle.js'),
    'primevue/autocomplete/style': path.resolve(__dirname, './components/lib/autocomplete/style/AutoCompleteStyle.js'),
    'primevue/avatar/style': path.resolve(__dirname, './components/lib/avatar/style/AvatarStyle.js'),
    'primevue/avatargroup/style': path.resolve(__dirname, './components/lib/avatargroup/style/AvatarGroupStyle.js'),
    'primevue/badge/style': path.resolve(__dirname, './components/lib/badge/style/BadgeStyle.js'),
    'primevue/badgedirective/style': path.resolve(__dirname, './components/lib/badgedirective/style/BadgeDirectiveStyle.js'),
    'primevue/baseicon/style': path.resolve(__dirname, './components/lib/baseicon/style/BaseIconStyle.js'),
    'primevue/blockui/style': path.resolve(__dirname, './components/lib/blockui/style/BlockUIStyle.js'),
    'primevue/breadcrumb/style': path.resolve(__dirname, './components/lib/breadcrumb/style/BreadcrumbStyle.js'),
    'primevue/button/style': path.resolve(__dirname, './components/lib/button/style/ButtonStyle.js'),
    'primevue/calendar/style': path.resolve(__dirname, './components/lib/calendar/style/CalendarStyle.js'),
    'primevue/card/style': path.resolve(__dirname, './components/lib/card/style/CardStyle.js'),
    'primevue/carousel/style': path.resolve(__dirname, './components/lib/carousel/style/CarouselStyle.js'),
    'primevue/cascadeselect/style': path.resolve(__dirname, './components/lib/cascadeselect/style/CascadeSelectStyle.js'),
    'primevue/chart/style': path.resolve(__dirname, './components/lib/chart/style/ChartStyle.js'),
    'primevue/checkbox/style': path.resolve(__dirname, './components/lib/checkbox/style/CheckboxStyle.js'),
    'primevue/chip/style': path.resolve(__dirname, './components/lib/chip/style/ChipStyle.js'),
    'primevue/chips/style': path.resolve(__dirname, './components/lib/chips/style/ChipsStyle.js'),
    'primevue/colorpicker/style': path.resolve(__dirname, './components/lib/colorpicker/style/ColorPickerStyle.js'),
    'primevue/column/style': path.resolve(__dirname, './components/lib/column/style/ColumnStyle.js'),
    'primevue/columngroup/style': path.resolve(__dirname, './components/lib/columngroup/style/ColumnGroupStyle.js'),
    'primevue/confirmdialog/style': path.resolve(__dirname, './components/lib/confirmdialog/style/ConfirmDialogStyle.js'),
    'primevue/confirmpopup/style': path.resolve(__dirname, './components/lib/confirmpopup/style/ConfirmPopupStyle.js'),
    'primevue/contextmenu/style': path.resolve(__dirname, './components/lib/contextmenu/style/ContextMenuStyle.js'),
    'primevue/datatable/style': path.resolve(__dirname, './components/lib/datatable/style/DataTableStyle.js'),
    'primevue/dataview/style': path.resolve(__dirname, './components/lib/dataview/style/DataViewStyle.js'),
    'primevue/dataviewlayoutoptions/style': path.resolve(__dirname, './components/lib/dataviewlayoutoptions/style/DataViewLayoutOptionsStyle.js'),
    'primevue/deferredcontent/style': path.resolve(__dirname, './components/lib/deferredcontent/style/DeferredContentStyle.js'),
    'primevue/dialog/style': path.resolve(__dirname, './components/lib/dialog/style/DialogStyle.js'),
    'primevue/divider/style': path.resolve(__dirname, './components/lib/divider/style/DividerStyle.js'),
    'primevue/dock/style': path.resolve(__dirname, './components/lib/dock/style/DockStyle.js'),
    'primevue/dropdown/style': path.resolve(__dirname, './components/lib/dropdown/style/DropdownStyle.js'),
    'primevue/dynamicdialog/style': path.resolve(__dirname, './components/lib/dynamicdialog/style/DynamicDialogStyle.js'),
    'primevue/editor/style': path.resolve(__dirname, './components/lib/editor/style/EditorStyle.js'),
    'primevue/fieldset/style': path.resolve(__dirname, './components/lib/fieldset/style/FieldsetStyle.js'),
    'primevue/fileupload/style': path.resolve(__dirname, './components/lib/fileupload/style/FileUploadStyle.js'),
    'primevue/focustrap/style': path.resolve(__dirname, './components/lib/focustrap/style/FocusTrapStyle.js'),
    'primevue/galleria/style': path.resolve(__dirname, './components/lib/galleria/style/GalleriaStyle.js'),
    'primevue/image/style': path.resolve(__dirname, './components/lib/image/style/ImageStyle.js'),
    'primevue/inlinemessage/style': path.resolve(__dirname, './components/lib/inlinemessage/style/InlineMessageStyle.js'),
    'primevue/inplace/style': path.resolve(__dirname, './components/lib/inplace/style/InplaceStyle.js'),
    'primevue/inputgroup/style': path.resolve(__dirname, './components/lib/inputgroup/style/InputGroupStyle.js'),
    'primevue/inputgroupaddon/style': path.resolve(__dirname, './components/lib/inputgroupaddon/style/InputGroupAddonStyle.js'),
    'primevue/inputmask/style': path.resolve(__dirname, './components/lib/inputmask/style/InputMaskStyle.js'),
    'primevue/inputnumber/style': path.resolve(__dirname, './components/lib/inputnumber/style/InputNumberStyle.js'),
    'primevue/inputswitch/style': path.resolve(__dirname, './components/lib/inputswitch/style/InputSwitchStyle.js'),
    'primevue/inputtext/style': path.resolve(__dirname, './components/lib/inputtext/style/InputTextStyle.js'),
    'primevue/knob/style': path.resolve(__dirname, './components/lib/knob/style/KnobStyle.js'),
    'primevue/listbox/style': path.resolve(__dirname, './components/lib/listbox/style/ListboxStyle.js'),
    'primevue/megamenu/style': path.resolve(__dirname, './components/lib/megamenu/style/MegaMenuStyle.js'),
    'primevue/menu/style': path.resolve(__dirname, './components/lib/menu/style/MenuStyle.js'),
    'primevue/menubar/style': path.resolve(__dirname, './components/lib/menubar/style/MenubarStyle.js'),
    'primevue/message/style': path.resolve(__dirname, './components/lib/message/style/MessageStyle.js'),
    'primevue/multiselect/style': path.resolve(__dirname, './components/lib/multiselect/style/MultiSelectStyle.js'),
    'primevue/orderlist/style': path.resolve(__dirname, './components/lib/orderlist/style/OrderListStyle.js'),
    'primevue/organizationchart/style': path.resolve(__dirname, './components/lib/organizationchart/style/OrganizationChartStyle.js'),
    'primevue/overlaypanel/style': path.resolve(__dirname, './components/lib/overlaypanel/style/OverlayPanelStyle.js'),
    'primevue/paginator/style': path.resolve(__dirname, './components/lib/paginator/style/PaginatorStyle.js'),
    'primevue/panel/style': path.resolve(__dirname, './components/lib/panel/style/PanelStyle.js'),
    'primevue/panelmenu/style': path.resolve(__dirname, './components/lib/panelmenu/style/PanelMenuStyle.js'),
    'primevue/password/style': path.resolve(__dirname, './components/lib/password/style/PasswordStyle.js'),
    'primevue/picklist/style': path.resolve(__dirname, './components/lib/picklist/style/PickListStyle.js'),
    'primevue/portal/style': path.resolve(__dirname, './components/lib/portal/style/PortalStyle.js'),
    'primevue/progressbar/style': path.resolve(__dirname, './components/lib/progressbar/style/ProgressBarStyle.js'),
    'primevue/progressspinner/style': path.resolve(__dirname, './components/lib/progressspinner/style/ProgressSpinnerStyle.js'),
    'primevue/radiobutton/style': path.resolve(__dirname, './components/lib/radiobutton/style/RadioButtonStyle.js'),
    'primevue/rating/style': path.resolve(__dirname, './components/lib/rating/style/RatingStyle.js'),
    'primevue/ripple/style': path.resolve(__dirname, './components/lib/ripple/style/RippleStyle.js'),
    'primevue/row/style': path.resolve(__dirname, './components/lib/row/style/RowStyle.js'),
    'primevue/scrollpanel/style': path.resolve(__dirname, './components/lib/scrollpanel/style/ScrollPanelStyle.js'),
    'primevue/scrolltop/style': path.resolve(__dirname, './components/lib/scrolltop/style/ScrollTopStyle.js'),
    'primevue/selectbutton/style': path.resolve(__dirname, './components/lib/selectbutton/style/SelectButtonStyle.js'),
    'primevue/sidebar/style': path.resolve(__dirname, './components/lib/sidebar/style/SidebarStyle.js'),
    'primevue/skeleton/style': path.resolve(__dirname, './components/lib/skeleton/style/SkeletonStyle.js'),
    'primevue/slider/style': path.resolve(__dirname, './components/lib/slider/style/SliderStyle.js'),
    'primevue/speeddial/style': path.resolve(__dirname, './components/lib/speeddial/style/SpeedDialStyle.js'),
    'primevue/splitbutton/style': path.resolve(__dirname, './components/lib/splitbutton/style/SplitButtonStyle.js'),
    'primevue/splitter/style': path.resolve(__dirname, './components/lib/splitter/style/SplitterStyle.js'),
    'primevue/splitterpanel/style': path.resolve(__dirname, './components/lib/splitterpanel/style/SplitterPanelStyle.js'),
    'primevue/steps/style': path.resolve(__dirname, './components/lib/steps/style/StepsStyle.js'),
    'primevue/tabmenu/style': path.resolve(__dirname, './components/lib/tabmenu/style/TabMenuStyle.js'),
    'primevue/tabpanel/style': path.resolve(__dirname, './components/lib/tabpanel/style/TabPanelStyle.js'),
    'primevue/tabview/style': path.resolve(__dirname, './components/lib/tabview/style/TabViewStyle.js'),
    'primevue/tag/style': path.resolve(__dirname, './components/lib/tag/style/TagStyle.js'),
    'primevue/terminal/style': path.resolve(__dirname, './components/lib/terminal/style/TerminalStyle.js'),
    'primevue/textarea/style': path.resolve(__dirname, './components/lib/textarea/style/TextareaStyle.js'),
    'primevue/tieredmenu/style': path.resolve(__dirname, './components/lib/tieredmenu/style/TieredMenuStyle.js'),
    'primevue/timeline/style': path.resolve(__dirname, './components/lib/timeline/style/TimelineStyle.js'),
    'primevue/toast/style': path.resolve(__dirname, './components/lib/toast/style/ToastStyle.js'),
    'primevue/togglebutton/style': path.resolve(__dirname, './components/lib/togglebutton/style/ToggleButtonStyle.js'),
    'primevue/toolbar/style': path.resolve(__dirname, './components/lib/toolbar/style/ToolbarStyle.js'),
    'primevue/tooltip/style': path.resolve(__dirname, './components/lib/tooltip/style/TooltipStyle.js'),
    'primevue/tree/style': path.resolve(__dirname, './components/lib/tree/style/TreeStyle.js'),
    'primevue/treeselect/style': path.resolve(__dirname, './components/lib/treeselect/style/TreeSelectStyle.js'),
    'primevue/treetable/style': path.resolve(__dirname, './components/lib/treetable/style/TreeTableStyle.js'),
    'primevue/tristatecheckbox/style': path.resolve(__dirname, './components/lib/tristatecheckbox/style/TriStateCheckboxStyle.js'),
    'primevue/virtualscroller/style': path.resolve(__dirname, './components/lib/virtualscroller/style/VirtualScrollerStyle.js')
};

const ICON_ALIAS = {
    'primevue/baseicon': path.resolve(__dirname, './components/lib/baseicon/BaseIcon.vue'),
    'primevue/icons/angledoubledown': path.resolve(__dirname, './components/lib/icons/angledoubledown/index.vue'),
    'primevue/icons/angledoubleleft': path.resolve(__dirname, './components/lib/icons/angledoubleleft/index.vue'),
    'primevue/icons/angledoubleright': path.resolve(__dirname, './components/lib/icons/angledoubleright/index.vue'),
    'primevue/icons/angledoubleup': path.resolve(__dirname, './components/lib/icons/angledoubleup/index.vue'),
    'primevue/icons/angledown': path.resolve(__dirname, './components/lib/icons/angledown/index.vue'),
    'primevue/icons/angleleft': path.resolve(__dirname, './components/lib/icons/angleleft/index.vue'),
    'primevue/icons/angleright': path.resolve(__dirname, './components/lib/icons/angleright/index.vue'),
    'primevue/icons/angleup': path.resolve(__dirname, './components/lib/icons/angleup/index.vue'),
    'primevue/icons/arrowdown': path.resolve(__dirname, './components/lib/icons/arrowdown/index.vue'),
    'primevue/icons/arrowup': path.resolve(__dirname, './components/lib/icons/arrowup/index.vue'),
    'primevue/icons/ban': path.resolve(__dirname, './components/lib/icons/ban/index.vue'),
    'primevue/icons/bars': path.resolve(__dirname, './components/lib/icons/bars/index.vue'),
    'primevue/icons/calendar': path.resolve(__dirname, './components/lib/icons/calendar/index.vue'),
    'primevue/icons/check': path.resolve(__dirname, './components/lib/icons/check/index.vue'),
    'primevue/icons/chevrondown': path.resolve(__dirname, './components/lib/icons/chevrondown/index.vue'),
    'primevue/icons/chevronleft': path.resolve(__dirname, './components/lib/icons/chevronleft/index.vue'),
    'primevue/icons/chevronright': path.resolve(__dirname, './components/lib/icons/chevronright/index.vue'),
    'primevue/icons/chevronup': path.resolve(__dirname, './components/lib/icons/chevronup/index.vue'),
    'primevue/icons/exclamationtriangle': path.resolve(__dirname, './components/lib/icons/exclamationtriangle/index.vue'),
    'primevue/icons/eye': path.resolve(__dirname, './components/lib/icons/eye/index.vue'),
    'primevue/icons/eyeslash': path.resolve(__dirname, './components/lib/icons/eyeslash/index.vue'),
    'primevue/icons/filter': path.resolve(__dirname, './components/lib/icons/filter/index.vue'),
    'primevue/icons/filterslash': path.resolve(__dirname, './components/lib/icons/filterslash/index.vue'),
    'primevue/icons/infocircle': path.resolve(__dirname, './components/lib/icons/infocircle/index.vue'),
    'primevue/icons/minus': path.resolve(__dirname, './components/lib/icons/minus/index.vue'),
    'primevue/icons/pencil': path.resolve(__dirname, './components/lib/icons/pencil/index.vue'),
    'primevue/icons/plus': path.resolve(__dirname, './components/lib/icons/plus/index.vue'),
    'primevue/icons/refresh': path.resolve(__dirname, './components/lib/icons/refresh/index.vue'),
    'primevue/icons/search': path.resolve(__dirname, './components/lib/icons/search/index.vue'),
    'primevue/icons/searchminus': path.resolve(__dirname, './components/lib/icons/searchminus/index.vue'),
    'primevue/icons/searchplus': path.resolve(__dirname, './components/lib/icons/searchplus/index.vue'),
    'primevue/icons/sortalt': path.resolve(__dirname, './components/lib/icons/sortalt/index.vue'),
    'primevue/icons/sortamountdown': path.resolve(__dirname, './components/lib/icons/sortamountdown/index.vue'),
    'primevue/icons/sortamountupalt': path.resolve(__dirname, './components/lib/icons/sortamountupalt/index.vue'),
    'primevue/icons/spinner': path.resolve(__dirname, './components/lib/icons/spinner/index.vue'),
    'primevue/icons/star': path.resolve(__dirname, './components/lib/icons/star/index.vue'),
    'primevue/icons/starfill': path.resolve(__dirname, './components/lib/icons/starfill/index.vue'),
    'primevue/icons/thlarge': path.resolve(__dirname, './components/lib/icons/thlarge/index.vue'),
    'primevue/icons/times': path.resolve(__dirname, './components/lib/icons/times/index.vue'),
    'primevue/icons/timescircle': path.resolve(__dirname, './components/lib/icons/timescircle/index.vue'),
    'primevue/icons/trash': path.resolve(__dirname, './components/lib/icons/trash/index.vue'),
    'primevue/icons/undo': path.resolve(__dirname, './components/lib/icons/undo/index.vue'),
    'primevue/icons/upload': path.resolve(__dirname, './components/lib/icons/upload/index.vue'),
    'primevue/icons/windowmaximize': path.resolve(__dirname, './components/lib/icons/windowmaximize/index.vue'),
    'primevue/icons/windowminimize': path.resolve(__dirname, './components/lib/icons/windowminimize/index.vue')
};

const THEME_ALIAS = {
    'primevue/theme/lara/global': path.resolve(__dirname, './components/lib/theme/lara/global.js'),
    'primevue/theme/lara/accordion': path.resolve(__dirname, './components/lib/theme/lara/accordion/index.js'),
    'primevue/theme/lara/autocomplete': path.resolve(__dirname, './components/lib/theme/lara/autocomplete/index.js'),
    'primevue/theme/lara/avatar': path.resolve(__dirname, './components/lib/theme/lara/avatar/index.js'),
    'primevue/theme/lara/badge': path.resolve(__dirname, './components/lib/theme/lara/badge/index.js'),
    'primevue/theme/lara/blockui': path.resolve(__dirname, './components/lib/theme/lara/blockui/index.js'),
    'primevue/theme/lara/breadcrumb': path.resolve(__dirname, './components/lib/theme/lara/breadcrumb/index.js'),
    'primevue/theme/lara/button': path.resolve(__dirname, './components/lib/theme/lara/button/index.js'),
    'primevue/theme/lara/calendar': path.resolve(__dirname, './components/lib/theme/lara/calendar/index.js'),
    'primevue/theme/lara/card': path.resolve(__dirname, './components/lib/theme/lara/card/index.js'),
    'primevue/theme/lara/carousel': path.resolve(__dirname, './components/lib/theme/lara/carousel/index.js'),
    'primevue/theme/lara/cascadeselect': path.resolve(__dirname, './components/lib/theme/lara/cascadeselect/index.js'),
    'primevue/theme/lara/checkbox': path.resolve(__dirname, './components/lib/theme/lara/checkbox/index.js'),
    'primevue/theme/lara/chip': path.resolve(__dirname, './components/lib/theme/lara/chip/index.js'),
    'primevue/theme/lara/chips': path.resolve(__dirname, './components/lib/theme/lara/chips/index.js'),
    'primevue/theme/lara/colorpicker': path.resolve(__dirname, './components/lib/theme/lara/colorpicker/index.js'),
    'primevue/theme/lara/confirmdialog': path.resolve(__dirname, './components/lib/theme/lara/confirmdialog/index.js'),
    'primevue/theme/lara/confirmpopup': path.resolve(__dirname, './components/lib/theme/lara/confirmpopup/index.js'),
    'primevue/theme/lara/contextmenu': path.resolve(__dirname, './components/lib/theme/lara/contextmenu/index.js'),
    'primevue/theme/lara/datatable': path.resolve(__dirname, './components/lib/theme/lara/datatable/index.js'),
    'primevue/theme/lara/dataview': path.resolve(__dirname, './components/lib/theme/lara/dataview/index.js'),
    'primevue/theme/lara/dialog': path.resolve(__dirname, './components/lib/theme/lara/dialog/index.js'),
    'primevue/theme/lara/divider': path.resolve(__dirname, './components/lib/theme/lara/divider/index.js'),
    'primevue/theme/lara/dock': path.resolve(__dirname, './components/lib/theme/lara/dock/index.js'),
    'primevue/theme/lara/dropdown': path.resolve(__dirname, './components/lib/theme/lara/dropdown/index.js'),
    'primevue/theme/lara/editor': path.resolve(__dirname, './components/lib/theme/lara/editor/index.js'),
    'primevue/theme/lara/fieldset': path.resolve(__dirname, './components/lib/theme/lara/fieldset/index.js'),
    'primevue/theme/lara/fileupload': path.resolve(__dirname, './components/lib/theme/lara/fileupload/index.js'),
    'primevue/theme/lara/galleria': path.resolve(__dirname, './components/lib/theme/lara/galleria/index.js'),
    'primevue/theme/lara/image': path.resolve(__dirname, './components/lib/theme/lara/image/index.js'),
    'primevue/theme/lara/inlinemessage': path.resolve(__dirname, './components/lib/theme/lara/inlinemessage/index.js'),
    'primevue/theme/lara/inplace': path.resolve(__dirname, './components/lib/theme/lara/inplace/index.js'),
    'primevue/theme/lara/inputgroup': path.resolve(__dirname, './components/lib/theme/lara/inputgroup/index.js'),
    'primevue/theme/lara/inputnumber': path.resolve(__dirname, './components/lib/theme/lara/inputnumber/index.js'),
    'primevue/theme/lara/inputswitch': path.resolve(__dirname, './components/lib/theme/lara/inputswitch/index.js'),
    'primevue/theme/lara/inputtext': path.resolve(__dirname, './components/lib/theme/lara/inputtext/index.js'),
    'primevue/theme/lara/listbox': path.resolve(__dirname, './components/lib/theme/lara/listbox/index.js'),
    'primevue/theme/lara/megamenu': path.resolve(__dirname, './components/lib/theme/lara/megamenu/index.js'),
    'primevue/theme/lara/menu': path.resolve(__dirname, './components/lib/theme/lara/menu/index.js'),
    'primevue/theme/lara/menubar': path.resolve(__dirname, './components/lib/theme/lara/menubar/index.js'),
    'primevue/theme/lara/message': path.resolve(__dirname, './components/lib/theme/lara/message/index.js'),
    'primevue/theme/lara/multiselect': path.resolve(__dirname, './components/lib/theme/lara/multiselect/index.js'),
    'primevue/theme/lara/orderlist': path.resolve(__dirname, './components/lib/theme/lara/orderlist/index.js'),
    'primevue/theme/lara/organizationchart': path.resolve(__dirname, './components/lib/theme/lara/organizationchart/index.js'),
    'primevue/theme/lara/overlaypanel': path.resolve(__dirname, './components/lib/theme/lara/overlaypanel/index.js'),
    'primevue/theme/lara/paginator': path.resolve(__dirname, './components/lib/theme/lara/paginator/index.js'),
    'primevue/theme/lara/panel': path.resolve(__dirname, './components/lib/theme/lara/panel/index.js'),
    'primevue/theme/lara/panelmenu': path.resolve(__dirname, './components/lib/theme/lara/panelmenu/index.js'),
    'primevue/theme/lara/password': path.resolve(__dirname, './components/lib/theme/lara/password/index.js'),
    'primevue/theme/lara/picklist': path.resolve(__dirname, './components/lib/theme/lara/picklist/index.js'),
    'primevue/theme/lara/progressbar': path.resolve(__dirname, './components/lib/theme/lara/progressbar/index.js'),
    'primevue/theme/lara/progressspinner': path.resolve(__dirname, './components/lib/theme/lara/progressspinner/index.js'),
    'primevue/theme/lara/radiobutton': path.resolve(__dirname, './components/lib/theme/lara/radiobutton/index.js'),
    'primevue/theme/lara/rating': path.resolve(__dirname, './components/lib/theme/lara/rating/index.js'),
    'primevue/theme/lara/scrollpanel': path.resolve(__dirname, './components/lib/theme/lara/scrollpanel/index.js'),
    'primevue/theme/lara/scrolltop': path.resolve(__dirname, './components/lib/theme/lara/scrolltop/index.js'),
    'primevue/theme/lara/selectbutton': path.resolve(__dirname, './components/lib/theme/lara/selectbutton/index.js'),
    'primevue/theme/lara/sidebar': path.resolve(__dirname, './components/lib/theme/lara/sidebar/index.js'),
    'primevue/theme/lara/skeleton': path.resolve(__dirname, './components/lib/theme/lara/skeleton/index.js'),
    'primevue/theme/lara/slider': path.resolve(__dirname, './components/lib/theme/lara/slider/index.js'),
    'primevue/theme/lara/speeddial': path.resolve(__dirname, './components/lib/theme/lara/speeddial/index.js'),
    'primevue/theme/lara/splitbutton': path.resolve(__dirname, './components/lib/theme/lara/splitbutton/index.js'),
    'primevue/theme/lara/splitter': path.resolve(__dirname, './components/lib/theme/lara/splitter/index.js'),
    'primevue/theme/lara/steps': path.resolve(__dirname, './components/lib/theme/lara/steps/index.js'),
    'primevue/theme/lara/tabmenu': path.resolve(__dirname, './components/lib/theme/lara/tabmenu/index.js'),
    'primevue/theme/lara/tabview': path.resolve(__dirname, './components/lib/theme/lara/tabview/index.js'),
    'primevue/theme/lara/tag': path.resolve(__dirname, './components/lib/theme/lara/tag/index.js'),
    'primevue/theme/lara/terminal': path.resolve(__dirname, './components/lib/theme/lara/terminal/index.js'),
    'primevue/theme/lara/tieredmenu': path.resolve(__dirname, './components/lib/theme/lara/tieredmenu/index.js'),
    'primevue/theme/lara/timeline': path.resolve(__dirname, './components/lib/theme/lara/timeline/index.js'),
    'primevue/theme/lara/toast': path.resolve(__dirname, './components/lib/theme/lara/toast/index.js'),
    'primevue/theme/lara/togglebutton': path.resolve(__dirname, './components/lib/theme/lara/togglebutton/index.js'),
    'primevue/theme/lara/toolbar': path.resolve(__dirname, './components/lib/theme/lara/toolbar/index.js'),
    'primevue/theme/lara/tooltip': path.resolve(__dirname, './components/lib/theme/lara/tooltip/index.js'),
    'primevue/theme/lara/tree': path.resolve(__dirname, './components/lib/theme/lara/tree/index.js'),
    'primevue/theme/lara/treeselect': path.resolve(__dirname, './components/lib/theme/lara/treeselect/index.js'),
    'primevue/theme/lara/treetable': path.resolve(__dirname, './components/lib/theme/lara/treetable/index.js'),
    'primevue/theme': path.resolve(__dirname, './components/lib/theme/index.js')
};

export default {
    resolve: {
        alias: {
            'primevue/utils': path.resolve(__dirname, './components/lib/utils/Utils.js'),
            'primevue/api': path.resolve(__dirname, './components/lib/api/Api.js'),
            ...STYLE_ALIAS,
            ...THEME_ALIAS,
            'primevue/base': path.resolve(__dirname, './components/lib/base/Base.js'),
            'primevue/basedirective': path.resolve(__dirname, './components/lib/basedirective/BaseDirective.js'),
            'primevue/ripple': path.resolve(__dirname, './components/lib/ripple/Ripple.js'),
            'primevue/tooltip': path.resolve(__dirname, './components/lib/tooltip/Tooltip.js'),
            'primevue/focustrap': path.resolve(__dirname, './components/lib/focustrap/FocusTrap.js'),
            'primevue/useconfirm': path.resolve(__dirname, './components/lib/useconfirm/UseConfirm.js'),
            'primevue/usetoast': path.resolve(__dirname, './components/lib/usetoast/UseToast.js'),
            'primevue/usedialog': path.resolve(__dirname, './components/lib/usedialog/UseDialog.js'),
            'primevue/usestyle': path.resolve(__dirname, './components/lib/usestyle/UseStyle.js'),
            'primevue/portal': path.resolve(__dirname, './components/lib/portal/Portal.vue'),
            'primevue/basecomponent': path.resolve(__dirname, './components/lib/basecomponent/BaseComponent.vue'),
            ...ICON_ALIAS,
            'primevue/button': path.resolve(__dirname, './components/lib/button/Button.vue'),
            'primevue/inputtext': path.resolve(__dirname, './components/lib/inputtext/InputText.vue'),
            'primevue/dialog': path.resolve(__dirname, './components/lib/dialog/Dialog.vue'),
            'primevue/menu': path.resolve(__dirname, './components/lib/menu/Menu.vue'),
            'primevue/tieredmenu': path.resolve(__dirname, './components/lib/tieredmenu/TieredMenu.vue'),
            'primevue/dropdown': path.resolve(__dirname, './components/lib/dropdown/Dropdown.vue'),
            'primevue/inputnumber': path.resolve(__dirname, './components/lib/inputnumber/InputNumber.vue'),
            'primevue/paginator': path.resolve(__dirname, './components/lib/paginator/Paginator.vue'),
            'primevue/progressbar': path.resolve(__dirname, './components/lib/progressbar/ProgressBar.vue'),
            'primevue/message': path.resolve(__dirname, './components/lib/message/Message.vue'),
            'primevue/tree': path.resolve(__dirname, './components/lib/tree/Tree.vue'),
            'primevue/badge': path.resolve(__dirname, './components/lib/badge/Badge.vue'),
            'primevue/confirmationeventbus': path.resolve(__dirname, './components/lib/confirmationeventbus/ConfirmationEventBus.js'),
            'primevue/toasteventbus': path.resolve(__dirname, './components/lib/toasteventbus/ToastEventBus.js'),
            'primevue/overlayeventbus': path.resolve(__dirname, './components/lib/overlayeventbus/OverlayEventBus.js'),
            'primevue/terminalservice': path.resolve(__dirname, './components/lib/terminalservice/TerminalService.js'),
            'primevue/dynamicdialogeventbus': path.resolve(__dirname, './components/lib/dynamicdialogeventbus/DynamicDialogEventBus.js'),
            'primevue/virtualscroller': path.resolve(__dirname, './components/lib/virtualscroller/VirtualScroller.vue'),
            'primevue/passthrough': path.resolve(__dirname, './components/lib/passthrough/index.js'),
            'primevue/passthrough/tailwind': path.resolve(__dirname, './components/lib/passthrough/tailwind/index.js')
        }
    }
};
