import SideBare from "@/components/SideBar.vue";

export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');

const __VLS_componentsOption = {};

let __VLS_name!: 'Home';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'mRight'?: boolean; } &
{ 'v-list'?: boolean; } &
{ 'mLeft'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'VApp', typeof __VLS_localComponents, "VApp", "vApp", "v-app"> &
__VLS_WithComponent<'SideBare', typeof __VLS_localComponents, "SideBare", "SideBare", "SideBare"> &
__VLS_WithComponent<'VMain', typeof __VLS_localComponents, "VMain", "vMain", "v-main"> &
__VLS_WithComponent<'VContainer', typeof __VLS_localComponents, "VContainer", "vContainer", "v-container"> &
__VLS_WithComponent<'VRow', typeof __VLS_localComponents, "VRow", "vRow", "v-row"> &
__VLS_WithComponent<'VCol', typeof __VLS_localComponents, "VCol", "vCol", "v-col"> &
__VLS_WithComponent<'VTextField', typeof __VLS_localComponents, "VTextField", "vTextField", "v-text-field"> &
__VLS_WithComponent<'VToolbar', typeof __VLS_localComponents, "VToolbar", "vToolbar", "v-toolbar"> &
__VLS_WithComponent<'VToolbarTitle', typeof __VLS_localComponents, "VToolbarTitle", "vToolbarTitle", "v-toolbar-title"> &
__VLS_WithComponent<'VSpacer', typeof __VLS_localComponents, "VSpacer", "vSpacer", "v-spacer"> &
__VLS_WithComponent<'VBtn', typeof __VLS_localComponents, "VBtn", "vBtn", "v-btn"> &
__VLS_WithComponent<'VAvatar', typeof __VLS_localComponents, "VAvatar", "vAvatar", "v-avatar"> &
__VLS_WithComponent<'VImg', typeof __VLS_localComponents, "VImg", "vImg", "v-img"> &
__VLS_WithComponent<'VCard', typeof __VLS_localComponents, "VCard", "vCard", "v-card"> &
__VLS_WithComponent<'VCardItem', typeof __VLS_localComponents, "VCardItem", "vCardItem", "v-card-item"> &
__VLS_WithComponent<'VIcon', typeof __VLS_localComponents, "VIcon", "vIcon", "v-icon"> &
__VLS_WithComponent<'VCardText', typeof __VLS_localComponents, "VCardText", "vCardText", "v-card-text"> &
__VLS_WithComponent<'VChip', typeof __VLS_localComponents, "VChip", "vChip", "v-chip"> &
__VLS_WithComponent<'VDivider', typeof __VLS_localComponents, "VDivider", "vDivider", "v-divider"> &
__VLS_WithComponent<'VList', typeof __VLS_localComponents, "VList", "vList", "v-list"> &
__VLS_WithComponent<'VListItem', typeof __VLS_localComponents, "VListItem", "vListItem", "v-list-item">;
__VLS_components.VApp; __VLS_components.VApp; __VLS_components.vApp; __VLS_components.vApp; __VLS_components["v-app"]; __VLS_components["v-app"];
// @ts-ignore
[VApp, VApp,];
__VLS_components.SideBare;
// @ts-ignore
[SideBare,];
__VLS_components.VMain; __VLS_components.VMain; __VLS_components.vMain; __VLS_components.vMain; __VLS_components["v-main"]; __VLS_components["v-main"];
// @ts-ignore
[VMain, VMain,];
__VLS_components.VContainer; __VLS_components.VContainer; __VLS_components.vContainer; __VLS_components.vContainer; __VLS_components["v-container"]; __VLS_components["v-container"];
// @ts-ignore
[VContainer, VContainer,];
__VLS_components.VRow; __VLS_components.VRow; __VLS_components.VRow; __VLS_components.VRow; __VLS_components.vRow; __VLS_components.vRow; __VLS_components.vRow; __VLS_components.vRow; __VLS_components["v-row"]; __VLS_components["v-row"]; __VLS_components["v-row"]; __VLS_components["v-row"];
// @ts-ignore
[VRow, VRow, VRow, VRow,];
__VLS_components.VCol; __VLS_components.VCol; __VLS_components.VCol; __VLS_components.VCol; __VLS_components.VCol; __VLS_components.VCol; __VLS_components.vCol; __VLS_components.vCol; __VLS_components.vCol; __VLS_components.vCol; __VLS_components.vCol; __VLS_components.vCol; __VLS_components["v-col"]; __VLS_components["v-col"]; __VLS_components["v-col"]; __VLS_components["v-col"]; __VLS_components["v-col"]; __VLS_components["v-col"];
// @ts-ignore
[VCol, VCol, VCol, VCol, VCol, VCol,];
__VLS_components.VTextField; __VLS_components.VTextField; __VLS_components.vTextField; __VLS_components.vTextField; __VLS_components["v-text-field"]; __VLS_components["v-text-field"];
// @ts-ignore
[VTextField, VTextField,];
__VLS_components.VToolbar; __VLS_components.VToolbar; __VLS_components.VToolbar; __VLS_components.VToolbar; __VLS_components.vToolbar; __VLS_components.vToolbar; __VLS_components.vToolbar; __VLS_components.vToolbar; __VLS_components["v-toolbar"]; __VLS_components["v-toolbar"]; __VLS_components["v-toolbar"]; __VLS_components["v-toolbar"];
// @ts-ignore
[VToolbar, VToolbar, VToolbar, VToolbar,];
__VLS_components.VToolbarTitle; __VLS_components.VToolbarTitle; __VLS_components.VToolbarTitle; __VLS_components.VToolbarTitle; __VLS_components.vToolbarTitle; __VLS_components.vToolbarTitle; __VLS_components.vToolbarTitle; __VLS_components.vToolbarTitle; __VLS_components["v-toolbar-title"]; __VLS_components["v-toolbar-title"]; __VLS_components["v-toolbar-title"]; __VLS_components["v-toolbar-title"];
// @ts-ignore
[VToolbarTitle, VToolbarTitle, VToolbarTitle, VToolbarTitle,];
__VLS_components.VSpacer; __VLS_components.VSpacer; __VLS_components.VSpacer; __VLS_components.VSpacer; __VLS_components.vSpacer; __VLS_components.vSpacer; __VLS_components.vSpacer; __VLS_components.vSpacer; __VLS_components["v-spacer"]; __VLS_components["v-spacer"]; __VLS_components["v-spacer"]; __VLS_components["v-spacer"];
// @ts-ignore
[VSpacer, VSpacer, VSpacer, VSpacer,];
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"];
// @ts-ignore
[VBtn, VBtn, VBtn, VBtn, VBtn, VBtn, VBtn, VBtn, VBtn, VBtn, VBtn, VBtn, VBtn, VBtn,];
__VLS_intrinsicElements.h6; __VLS_intrinsicElements.h6;
__VLS_components.VAvatar; __VLS_components.VAvatar; __VLS_components.VAvatar; __VLS_components.VAvatar; __VLS_components.VAvatar; __VLS_components.VAvatar; __VLS_components.vAvatar; __VLS_components.vAvatar; __VLS_components.vAvatar; __VLS_components.vAvatar; __VLS_components.vAvatar; __VLS_components.vAvatar; __VLS_components["v-avatar"]; __VLS_components["v-avatar"]; __VLS_components["v-avatar"]; __VLS_components["v-avatar"]; __VLS_components["v-avatar"]; __VLS_components["v-avatar"];
// @ts-ignore
[VAvatar, VAvatar, VAvatar, VAvatar, VAvatar, VAvatar,];
__VLS_components.VImg; __VLS_components.VImg; __VLS_components.VImg; __VLS_components.VImg; __VLS_components.VImg; __VLS_components.VImg; __VLS_components.vImg; __VLS_components.vImg; __VLS_components.vImg; __VLS_components.vImg; __VLS_components.vImg; __VLS_components.vImg; __VLS_components["v-img"]; __VLS_components["v-img"]; __VLS_components["v-img"]; __VLS_components["v-img"]; __VLS_components["v-img"]; __VLS_components["v-img"];
// @ts-ignore
[VImg, VImg, VImg, VImg, VImg, VImg,];
__VLS_components.VCard; __VLS_components.VCard; __VLS_components.VCard; __VLS_components.VCard; __VLS_components.VCard; __VLS_components.VCard; __VLS_components.VCard; __VLS_components.VCard; __VLS_components.VCard; __VLS_components.VCard; __VLS_components.VCard; __VLS_components.VCard; __VLS_components.VCard; __VLS_components.VCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components["v-card"]; __VLS_components["v-card"]; __VLS_components["v-card"]; __VLS_components["v-card"]; __VLS_components["v-card"]; __VLS_components["v-card"]; __VLS_components["v-card"]; __VLS_components["v-card"]; __VLS_components["v-card"]; __VLS_components["v-card"]; __VLS_components["v-card"]; __VLS_components["v-card"]; __VLS_components["v-card"]; __VLS_components["v-card"];
// @ts-ignore
[VCard, VCard, VCard, VCard, VCard, VCard, VCard, VCard, VCard, VCard, VCard, VCard, VCard, VCard,];
__VLS_components.VCardItem; __VLS_components.VCardItem; __VLS_components.vCardItem; __VLS_components.vCardItem; __VLS_components["v-card-item"]; __VLS_components["v-card-item"];
// @ts-ignore
[VCardItem, VCardItem,];
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"];
// @ts-ignore
[VIcon, VIcon, VIcon, VIcon, VIcon, VIcon, VIcon, VIcon, VIcon, VIcon, VIcon, VIcon, VIcon, VIcon,];
__VLS_components.VCardText; __VLS_components.VCardText; __VLS_components.VCardText; __VLS_components.VCardText; __VLS_components.VCardText; __VLS_components.VCardText; __VLS_components.vCardText; __VLS_components.vCardText; __VLS_components.vCardText; __VLS_components.vCardText; __VLS_components.vCardText; __VLS_components.vCardText; __VLS_components["v-card-text"]; __VLS_components["v-card-text"]; __VLS_components["v-card-text"]; __VLS_components["v-card-text"]; __VLS_components["v-card-text"]; __VLS_components["v-card-text"];
// @ts-ignore
[VCardText, VCardText, VCardText, VCardText, VCardText, VCardText,];
__VLS_components.VChip; __VLS_components.VChip; __VLS_components.VChip; __VLS_components.VChip; __VLS_components.VChip; __VLS_components.VChip; __VLS_components.VChip; __VLS_components.VChip; __VLS_components.VChip; __VLS_components.VChip; __VLS_components.VChip; __VLS_components.VChip; __VLS_components.VChip; __VLS_components.VChip; __VLS_components.vChip; __VLS_components.vChip; __VLS_components.vChip; __VLS_components.vChip; __VLS_components.vChip; __VLS_components.vChip; __VLS_components.vChip; __VLS_components.vChip; __VLS_components.vChip; __VLS_components.vChip; __VLS_components.vChip; __VLS_components.vChip; __VLS_components.vChip; __VLS_components.vChip; __VLS_components["v-chip"]; __VLS_components["v-chip"]; __VLS_components["v-chip"]; __VLS_components["v-chip"]; __VLS_components["v-chip"]; __VLS_components["v-chip"]; __VLS_components["v-chip"]; __VLS_components["v-chip"]; __VLS_components["v-chip"]; __VLS_components["v-chip"]; __VLS_components["v-chip"]; __VLS_components["v-chip"]; __VLS_components["v-chip"]; __VLS_components["v-chip"];
// @ts-ignore
[VChip, VChip, VChip, VChip, VChip, VChip, VChip, VChip, VChip, VChip, VChip, VChip, VChip, VChip,];
__VLS_components.VDivider; __VLS_components.VDivider; __VLS_components.VDivider; __VLS_components.VDivider; __VLS_components.vDivider; __VLS_components.vDivider; __VLS_components.vDivider; __VLS_components.vDivider; __VLS_components["v-divider"]; __VLS_components["v-divider"]; __VLS_components["v-divider"]; __VLS_components["v-divider"];
// @ts-ignore
[VDivider, VDivider, VDivider, VDivider,];
__VLS_components.VList; __VLS_components.VList; __VLS_components.vList; __VLS_components.vList; __VLS_components["v-list"]; __VLS_components["v-list"];
// @ts-ignore
[VList, VList,];
__VLS_components.VListItem; __VLS_components.VListItem; __VLS_components.VListItem; __VLS_components.VListItem; __VLS_components.VListItem; __VLS_components.VListItem; __VLS_components.vListItem; __VLS_components.vListItem; __VLS_components.vListItem; __VLS_components.vListItem; __VLS_components.vListItem; __VLS_components.vListItem; __VLS_components["v-list-item"]; __VLS_components["v-list-item"]; __VLS_components["v-list-item"]; __VLS_components["v-list-item"]; __VLS_components["v-list-item"]; __VLS_components["v-list-item"];
// @ts-ignore
[VListItem, VListItem, VListItem, VListItem, VListItem, VListItem,];
{
const __VLS_0 = ({} as 'VApp' extends keyof typeof __VLS_ctx ? { 'VApp': typeof __VLS_ctx.VApp; } : 'vApp' extends keyof typeof __VLS_ctx ? { 'VApp': typeof __VLS_ctx.vApp; } : 'v-app' extends keyof typeof __VLS_ctx ? { 'VApp': (typeof __VLS_ctx)["v-app"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VApp;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, id: ("inspire"), style: (({ background: __VLS_ctx.$vuetify.theme.themes.light.colors.primary })), }));
({} as { VApp: typeof __VLS_0; }).VApp;
({} as { VApp: typeof __VLS_0; }).VApp;
const __VLS_2 = __VLS_1({ ...{}, id: ("inspire"), style: (({ background: __VLS_ctx.$vuetify.theme.themes.light.colors.primary })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, id: ("inspire"), style: (({ background: __VLS_ctx.$vuetify.theme.themes.light.colors.primary })), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'SideBare' extends keyof typeof __VLS_ctx ? { 'SideBare': typeof __VLS_ctx.SideBare; } : typeof __VLS_resolvedLocalAndGlobalComponents).SideBare;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { SideBare: typeof __VLS_5; }).SideBare;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
{
const __VLS_10 = ({} as 'VMain' extends keyof typeof __VLS_ctx ? { 'VMain': typeof __VLS_ctx.VMain; } : 'vMain' extends keyof typeof __VLS_ctx ? { 'VMain': typeof __VLS_ctx.vMain; } : 'v-main' extends keyof typeof __VLS_ctx ? { 'VMain': (typeof __VLS_ctx)["v-main"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VMain;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
({} as { VMain: typeof __VLS_10; }).VMain;
({} as { VMain: typeof __VLS_10; }).VMain;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as 'VContainer' extends keyof typeof __VLS_ctx ? { 'VContainer': typeof __VLS_ctx.VContainer; } : 'vContainer' extends keyof typeof __VLS_ctx ? { 'VContainer': typeof __VLS_ctx.vContainer; } : 'v-container' extends keyof typeof __VLS_ctx ? { 'VContainer': (typeof __VLS_ctx)["v-container"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VContainer;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
({} as { VContainer: typeof __VLS_15; }).VContainer;
({} as { VContainer: typeof __VLS_15; }).VContainer;
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = ({} as 'VRow' extends keyof typeof __VLS_ctx ? { 'VRow': typeof __VLS_ctx.VRow; } : 'vRow' extends keyof typeof __VLS_ctx ? { 'VRow': typeof __VLS_ctx.vRow; } : 'v-row' extends keyof typeof __VLS_ctx ? { 'VRow': (typeof __VLS_ctx)["v-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VRow;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
({} as { VRow: typeof __VLS_20; }).VRow;
({} as { VRow: typeof __VLS_20; }).VRow;
const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = ({} as 'VCol' extends keyof typeof __VLS_ctx ? { 'VCol': typeof __VLS_ctx.VCol; } : 'vCol' extends keyof typeof __VLS_ctx ? { 'VCol': typeof __VLS_ctx.vCol; } : 'v-col' extends keyof typeof __VLS_ctx ? { 'VCol': (typeof __VLS_ctx)["v-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCol;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, cols: ("12"), sm: ("8"), }));
({} as { VCol: typeof __VLS_25; }).VCol;
({} as { VCol: typeof __VLS_25; }).VCol;
const __VLS_27 = __VLS_26({ ...{}, cols: ("12"), sm: ("8"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, cols: ("12"), sm: ("8"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = ({} as 'VTextField' extends keyof typeof __VLS_ctx ? { 'VTextField': typeof __VLS_ctx.VTextField; } : 'vTextField' extends keyof typeof __VLS_ctx ? { 'VTextField': typeof __VLS_ctx.vTextField; } : 'v-text-field' extends keyof typeof __VLS_ctx ? { 'VTextField': (typeof __VLS_ctx)["v-text-field"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VTextField;
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, density: ("compact"), placeholder: ("Search restaurant, Food, Cuisine or a Dish"), appendInnerIcon: ("mdi-magnify"), variant: ("outlined"), rounded: (true), class: ("text-grey mx-8"), }));
({} as { VTextField: typeof __VLS_30; }).VTextField;
({} as { VTextField: typeof __VLS_30; }).VTextField;
const __VLS_32 = __VLS_31({ ...{}, density: ("compact"), placeholder: ("Search restaurant, Food, Cuisine or a Dish"), appendInnerIcon: ("mdi-magnify"), variant: ("outlined"), rounded: (true), class: ("text-grey mx-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, density: ("compact"), placeholder: ("Search restaurant, Food, Cuisine or a Dish"), appendInnerIcon: ("mdi-magnify"), variant: ("outlined"), rounded: (true), class: ("text-grey mx-8"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
}
{
const __VLS_35 = ({} as 'VToolbar' extends keyof typeof __VLS_ctx ? { 'VToolbar': typeof __VLS_ctx.VToolbar; } : 'vToolbar' extends keyof typeof __VLS_ctx ? { 'VToolbar': typeof __VLS_ctx.vToolbar; } : 'v-toolbar' extends keyof typeof __VLS_ctx ? { 'VToolbar': (typeof __VLS_ctx)["v-toolbar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VToolbar;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, color: ("transparent"), class: ("pr-1 mt-n2"), }));
({} as { VToolbar: typeof __VLS_35; }).VToolbar;
({} as { VToolbar: typeof __VLS_35; }).VToolbar;
const __VLS_37 = __VLS_36({ ...{}, color: ("transparent"), class: ("pr-1 mt-n2"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, color: ("transparent"), class: ("pr-1 mt-n2"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
{
const __VLS_40 = ({} as 'VToolbarTitle' extends keyof typeof __VLS_ctx ? { 'VToolbarTitle': typeof __VLS_ctx.VToolbarTitle; } : 'vToolbarTitle' extends keyof typeof __VLS_ctx ? { 'VToolbarTitle': typeof __VLS_ctx.vToolbarTitle; } : 'v-toolbar-title' extends keyof typeof __VLS_ctx ? { 'VToolbarTitle': (typeof __VLS_ctx)["v-toolbar-title"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VToolbarTitle;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, class: ("text-white"), }));
({} as { VToolbarTitle: typeof __VLS_40; }).VToolbarTitle;
({} as { VToolbarTitle: typeof __VLS_40; }).VToolbarTitle;
const __VLS_42 = __VLS_41({ ...{}, class: ("text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, class: ("text-white"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
(__VLS_43.slots!).default;
}
{
const __VLS_45 = ({} as 'VSpacer' extends keyof typeof __VLS_ctx ? { 'VSpacer': typeof __VLS_ctx.VSpacer; } : 'vSpacer' extends keyof typeof __VLS_ctx ? { 'VSpacer': typeof __VLS_ctx.vSpacer; } : 'v-spacer' extends keyof typeof __VLS_ctx ? { 'VSpacer': (typeof __VLS_ctx)["v-spacer"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VSpacer;
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, }));
({} as { VSpacer: typeof __VLS_45; }).VSpacer;
({} as { VSpacer: typeof __VLS_45; }).VSpacer;
const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
}
{
const __VLS_50 = __VLS_intrinsicElements["span"];
const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
const __VLS_52 = __VLS_51({ ...{}, class: ("text-caption text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, class: ("text-caption text-white"), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
(__VLS_53.slots!).default;
}
{
const __VLS_55 = ({} as 'VBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.VBtn; } : 'vBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.vBtn; } : 'v-btn' extends keyof typeof __VLS_ctx ? { 'VBtn': (typeof __VLS_ctx)["v-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VBtn;
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{}, density: ("compact"), icon: ("mdi mdi-chevron-right-box"), color: ("grey"), }));
({} as { VBtn: typeof __VLS_55; }).VBtn;
({} as { VBtn: typeof __VLS_55; }).VBtn;
const __VLS_57 = __VLS_56({ ...{}, density: ("compact"), icon: ("mdi mdi-chevron-right-box"), color: ("grey"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, density: ("compact"), icon: ("mdi mdi-chevron-right-box"), color: ("grey"), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
}
(__VLS_38.slots!).default;
}
{
const __VLS_60 = __VLS_intrinsicElements["h6"];
const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
const __VLS_62 = __VLS_61({ ...{}, class: ("text-white ml-4 mt-n4"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, class: ("text-white ml-4 mt-n4"), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
{
const __VLS_65 = __VLS_intrinsicElements["span"];
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
const __VLS_67 = __VLS_66({ ...{}, class: ("text-red"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, class: ("text-red"), });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
(__VLS_68.slots!).default;
}
(__VLS_63.slots!).default;
}
{
const __VLS_70 = ({} as 'VRow' extends keyof typeof __VLS_ctx ? { 'VRow': typeof __VLS_ctx.VRow; } : 'vRow' extends keyof typeof __VLS_ctx ? { 'VRow': typeof __VLS_ctx.vRow; } : 'v-row' extends keyof typeof __VLS_ctx ? { 'VRow': (typeof __VLS_ctx)["v-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VRow;
const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, }));
({} as { VRow: typeof __VLS_70; }).VRow;
({} as { VRow: typeof __VLS_70; }).VRow;
const __VLS_72 = __VLS_71({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
{
const __VLS_75 = ({} as 'VCol' extends keyof typeof __VLS_ctx ? { 'VCol': typeof __VLS_ctx.VCol; } : 'vCol' extends keyof typeof __VLS_ctx ? { 'VCol': typeof __VLS_ctx.vCol; } : 'v-col' extends keyof typeof __VLS_ctx ? { 'VCol': (typeof __VLS_ctx)["v-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCol;
const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{}, cols: ("12"), sm: ("2"), class: ("mt-4"), }));
({} as { VCol: typeof __VLS_75; }).VCol;
({} as { VCol: typeof __VLS_75; }).VCol;
const __VLS_77 = __VLS_76({ ...{}, cols: ("12"), sm: ("2"), class: ("mt-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, cols: ("12"), sm: ("2"), class: ("mt-4"), });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
{
const __VLS_80 = ({} as 'VAvatar' extends keyof typeof __VLS_ctx ? { 'VAvatar': typeof __VLS_ctx.VAvatar; } : 'vAvatar' extends keyof typeof __VLS_ctx ? { 'VAvatar': typeof __VLS_ctx.vAvatar; } : 'v-avatar' extends keyof typeof __VLS_ctx ? { 'VAvatar': (typeof __VLS_ctx)["v-avatar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VAvatar;
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{}, color: ("#605850"), size: ("60"), }));
({} as { VAvatar: typeof __VLS_80; }).VAvatar;
({} as { VAvatar: typeof __VLS_80; }).VAvatar;
const __VLS_82 = __VLS_81({ ...{}, color: ("#605850"), size: ("60"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{}, color: ("#605850"), size: ("60"), });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
{
const __VLS_85 = ({} as 'VImg' extends keyof typeof __VLS_ctx ? { 'VImg': typeof __VLS_ctx.VImg; } : 'vImg' extends keyof typeof __VLS_ctx ? { 'VImg': typeof __VLS_ctx.vImg; } : 'v-img' extends keyof typeof __VLS_ctx ? { 'VImg': (typeof __VLS_ctx)["v-img"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VImg;
const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{}, src: ("2.png"), height: ("40"), }));
({} as { VImg: typeof __VLS_85; }).VImg;
({} as { VImg: typeof __VLS_85; }).VImg;
const __VLS_87 = __VLS_86({ ...{}, src: ("2.png"), height: ("40"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_85, typeof __VLS_87> & Record<string, unknown>) => void)({ ...{}, src: ("2.png"), height: ("40"), });
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
let __VLS_89!: __VLS_NormalizeEmits<typeof __VLS_88.emit>;
}
(__VLS_83.slots!).default;
}
(__VLS_78.slots!).default;
}
(__VLS_73.slots!).default;
}
(__VLS_28.slots!).default;
}
{
const __VLS_90 = ({} as 'VCol' extends keyof typeof __VLS_ctx ? { 'VCol': typeof __VLS_ctx.VCol; } : 'vCol' extends keyof typeof __VLS_ctx ? { 'VCol': typeof __VLS_ctx.vCol; } : 'v-col' extends keyof typeof __VLS_ctx ? { 'VCol': (typeof __VLS_ctx)["v-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCol;
const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ ...{}, cols: ("12"), sm: ("4"), }));
({} as { VCol: typeof __VLS_90; }).VCol;
({} as { VCol: typeof __VLS_90; }).VCol;
const __VLS_92 = __VLS_91({ ...{}, cols: ("12"), sm: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_90, typeof __VLS_92> & Record<string, unknown>) => void)({ ...{}, cols: ("12"), sm: ("4"), });
const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92)!;
let __VLS_94!: __VLS_NormalizeEmits<typeof __VLS_93.emit>;
{
const __VLS_95 = ({} as 'VCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.VCard; } : 'vCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.vCard; } : 'v-card' extends keyof typeof __VLS_ctx ? { 'VCard': (typeof __VLS_ctx)["v-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCard;
const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ ...{}, color: ("#4E4E4E"), height: ("655"), class: ("rounded-xl"), }));
({} as { VCard: typeof __VLS_95; }).VCard;
({} as { VCard: typeof __VLS_95; }).VCard;
const __VLS_97 = __VLS_96({ ...{}, color: ("#4E4E4E"), height: ("655"), class: ("rounded-xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_95, typeof __VLS_97> & Record<string, unknown>) => void)({ ...{}, color: ("#4E4E4E"), height: ("655"), class: ("rounded-xl"), });
const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97)!;
let __VLS_99!: __VLS_NormalizeEmits<typeof __VLS_98.emit>;
{
const __VLS_100 = ({} as 'VCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.VCard; } : 'vCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.vCard; } : 'v-card' extends keyof typeof __VLS_ctx ? { 'VCard': (typeof __VLS_ctx)["v-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCard;
const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ ...{}, class: ("mx-2 mt-4 rounded-lg"), maxWidth: ("344"), color: ("#6D6D6D"), }));
({} as { VCard: typeof __VLS_100; }).VCard;
({} as { VCard: typeof __VLS_100; }).VCard;
const __VLS_102 = __VLS_101({ ...{}, class: ("mx-2 mt-4 rounded-lg"), maxWidth: ("344"), color: ("#6D6D6D"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_100, typeof __VLS_102> & Record<string, unknown>) => void)({ ...{}, class: ("mx-2 mt-4 rounded-lg"), maxWidth: ("344"), color: ("#6D6D6D"), });
const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102)!;
let __VLS_104!: __VLS_NormalizeEmits<typeof __VLS_103.emit>;
{
const __VLS_105 = ({} as 'VCardItem' extends keyof typeof __VLS_ctx ? { 'VCardItem': typeof __VLS_ctx.VCardItem; } : 'vCardItem' extends keyof typeof __VLS_ctx ? { 'VCardItem': typeof __VLS_ctx.vCardItem; } : 'v-card-item' extends keyof typeof __VLS_ctx ? { 'VCardItem': (typeof __VLS_ctx)["v-card-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCardItem;
const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({ ...{}, title: ("DELIVERY ADDRESS"), }));
({} as { VCardItem: typeof __VLS_105; }).VCardItem;
({} as { VCardItem: typeof __VLS_105; }).VCardItem;
const __VLS_107 = __VLS_106({ ...{}, title: ("DELIVERY ADDRESS"), }, ...__VLS_functionalComponentArgsRest(__VLS_106));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_105, typeof __VLS_107> & Record<string, unknown>) => void)({ ...{}, title: ("DELIVERY ADDRESS"), });
const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107)!;
let __VLS_109!: __VLS_NormalizeEmits<typeof __VLS_108.emit>;
{
const __VLS_110 = __VLS_intrinsicElements["template"];
const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
const __VLS_112 = __VLS_111({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_111));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_110, typeof __VLS_112> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_108.slots!).subtitle;
{
const __VLS_113 = ({} as 'VIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.VIcon; } : 'vIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.vIcon; } : 'v-icon' extends keyof typeof __VLS_ctx ? { 'VIcon': (typeof __VLS_ctx)["v-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VIcon;
const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({ ...{}, icon: ("mdi mdi-map-marker"), size: ("18"), class: ("me-1 pb-1"), }));
({} as { VIcon: typeof __VLS_113; }).VIcon;
({} as { VIcon: typeof __VLS_113; }).VIcon;
const __VLS_115 = __VLS_114({ ...{}, icon: ("mdi mdi-map-marker"), size: ("18"), class: ("me-1 pb-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_113, typeof __VLS_115> & Record<string, unknown>) => void)({ ...{}, icon: ("mdi mdi-map-marker"), size: ("18"), class: ("me-1 pb-1"), });
const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115)!;
let __VLS_117!: __VLS_NormalizeEmits<typeof __VLS_116.emit>;
}
// @ts-ignore
[$vuetify, $vuetify, $vuetify,];
}
}
}
{
const __VLS_118 = ({} as 'VCardText' extends keyof typeof __VLS_ctx ? { 'VCardText': typeof __VLS_ctx.VCardText; } : 'vCardText' extends keyof typeof __VLS_ctx ? { 'VCardText': typeof __VLS_ctx.vCardText; } : 'v-card-text' extends keyof typeof __VLS_ctx ? { 'VCardText': (typeof __VLS_ctx)["v-card-text"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCardText;
const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ ...{}, class: ("mt-n3"), }));
({} as { VCardText: typeof __VLS_118; }).VCardText;
({} as { VCardText: typeof __VLS_118; }).VCardText;
const __VLS_120 = __VLS_119({ ...{}, class: ("mt-n3"), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_118, typeof __VLS_120> & Record<string, unknown>) => void)({ ...{}, class: ("mt-n3"), });
const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120)!;
let __VLS_122!: __VLS_NormalizeEmits<typeof __VLS_121.emit>;
{
const __VLS_123 = ({} as 'VIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.VIcon; } : 'vIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.vIcon; } : 'v-icon' extends keyof typeof __VLS_ctx ? { 'VIcon': (typeof __VLS_ctx)["v-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VIcon;
const __VLS_124 = __VLS_asFunctionalComponent(__VLS_123, new __VLS_123({ ...{}, size: ("16"), icon: ("mdi mdi-clock-outline"), class: ("mr-2"), }));
({} as { VIcon: typeof __VLS_123; }).VIcon;
({} as { VIcon: typeof __VLS_123; }).VIcon;
const __VLS_125 = __VLS_124({ ...{}, size: ("16"), icon: ("mdi mdi-clock-outline"), class: ("mr-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_124));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_123, typeof __VLS_125> & Record<string, unknown>) => void)({ ...{}, size: ("16"), icon: ("mdi mdi-clock-outline"), class: ("mr-2"), });
const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125)!;
let __VLS_127!: __VLS_NormalizeEmits<typeof __VLS_126.emit>;
}
(__VLS_121.slots!).default;
}
(__VLS_103.slots!).default;
}
{
const __VLS_128 = ({} as 'VToolbar' extends keyof typeof __VLS_ctx ? { 'VToolbar': typeof __VLS_ctx.VToolbar; } : 'vToolbar' extends keyof typeof __VLS_ctx ? { 'VToolbar': typeof __VLS_ctx.vToolbar; } : 'v-toolbar' extends keyof typeof __VLS_ctx ? { 'VToolbar': (typeof __VLS_ctx)["v-toolbar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VToolbar;
const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ ...{}, color: ("transparent"), class: ("pr-1 mt-n2"), }));
({} as { VToolbar: typeof __VLS_128; }).VToolbar;
({} as { VToolbar: typeof __VLS_128; }).VToolbar;
const __VLS_130 = __VLS_129({ ...{}, color: ("transparent"), class: ("pr-1 mt-n2"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_128, typeof __VLS_130> & Record<string, unknown>) => void)({ ...{}, color: ("transparent"), class: ("pr-1 mt-n2"), });
const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130)!;
let __VLS_132!: __VLS_NormalizeEmits<typeof __VLS_131.emit>;
{
const __VLS_133 = ({} as 'VBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.VBtn; } : 'vBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.vBtn; } : 'v-btn' extends keyof typeof __VLS_ctx ? { 'VBtn': (typeof __VLS_ctx)["v-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VBtn;
const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({ ...{}, icon: (true), class: ("hidden-xs-only"), }));
({} as { VBtn: typeof __VLS_133; }).VBtn;
({} as { VBtn: typeof __VLS_133; }).VBtn;
const __VLS_135 = __VLS_134({ ...{}, icon: (true), class: ("hidden-xs-only"), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_133, typeof __VLS_135> & Record<string, unknown>) => void)({ ...{}, icon: (true), class: ("hidden-xs-only"), });
const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135)!;
let __VLS_137!: __VLS_NormalizeEmits<typeof __VLS_136.emit>;
{
const __VLS_138 = ({} as 'VIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.VIcon; } : 'vIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.vIcon; } : 'v-icon' extends keyof typeof __VLS_ctx ? { 'VIcon': (typeof __VLS_ctx)["v-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VIcon;
const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ ...{}, }));
({} as { VIcon: typeof __VLS_138; }).VIcon;
({} as { VIcon: typeof __VLS_138; }).VIcon;
const __VLS_140 = __VLS_139({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_139));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_138, typeof __VLS_140> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140)!;
let __VLS_142!: __VLS_NormalizeEmits<typeof __VLS_141.emit>;
(__VLS_141.slots!).default;
}
(__VLS_136.slots!).default;
}
{
const __VLS_143 = ({} as 'VToolbarTitle' extends keyof typeof __VLS_ctx ? { 'VToolbarTitle': typeof __VLS_ctx.VToolbarTitle; } : 'vToolbarTitle' extends keyof typeof __VLS_ctx ? { 'VToolbarTitle': typeof __VLS_ctx.vToolbarTitle; } : 'v-toolbar-title' extends keyof typeof __VLS_ctx ? { 'VToolbarTitle': (typeof __VLS_ctx)["v-toolbar-title"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VToolbarTitle;
const __VLS_144 = __VLS_asFunctionalComponent(__VLS_143, new __VLS_143({ ...{}, }));
({} as { VToolbarTitle: typeof __VLS_143; }).VToolbarTitle;
({} as { VToolbarTitle: typeof __VLS_143; }).VToolbarTitle;
const __VLS_145 = __VLS_144({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_144));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_143, typeof __VLS_145> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_146 = __VLS_pickFunctionalComponentCtx(__VLS_143, __VLS_145)!;
let __VLS_147!: __VLS_NormalizeEmits<typeof __VLS_146.emit>;
(__VLS_146.slots!).default;
}
{
const __VLS_148 = ({} as 'VSpacer' extends keyof typeof __VLS_ctx ? { 'VSpacer': typeof __VLS_ctx.VSpacer; } : 'vSpacer' extends keyof typeof __VLS_ctx ? { 'VSpacer': typeof __VLS_ctx.vSpacer; } : 'v-spacer' extends keyof typeof __VLS_ctx ? { 'VSpacer': (typeof __VLS_ctx)["v-spacer"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VSpacer;
const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({ ...{}, }));
({} as { VSpacer: typeof __VLS_148; }).VSpacer;
({} as { VSpacer: typeof __VLS_148; }).VSpacer;
const __VLS_150 = __VLS_149({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_149));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_148, typeof __VLS_150> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_151 = __VLS_pickFunctionalComponentCtx(__VLS_148, __VLS_150)!;
let __VLS_152!: __VLS_NormalizeEmits<typeof __VLS_151.emit>;
}
{
const __VLS_153 = __VLS_intrinsicElements["span"];
const __VLS_154 = __VLS_elementAsFunctionalComponent(__VLS_153);
const __VLS_155 = __VLS_154({ ...{}, class: ("text-caption"), }, ...__VLS_functionalComponentArgsRest(__VLS_154));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_153, typeof __VLS_155> & Record<string, unknown>) => void)({ ...{}, class: ("text-caption"), });
const __VLS_156 = __VLS_pickFunctionalComponentCtx(__VLS_153, __VLS_155)!;
let __VLS_157!: __VLS_NormalizeEmits<typeof __VLS_156.emit>;
(__VLS_156.slots!).default;
}
(__VLS_131.slots!).default;
}
{
const __VLS_158 = ({} as 'VCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.VCard; } : 'vCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.vCard; } : 'v-card' extends keyof typeof __VLS_ctx ? { 'VCard': (typeof __VLS_ctx)["v-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCard;
const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ ...{}, class: ("rounded-xl ma-2 pa-1 mt-n2"), variant: ("outlined"), }));
({} as { VCard: typeof __VLS_158; }).VCard;
({} as { VCard: typeof __VLS_158; }).VCard;
const __VLS_160 = __VLS_159({ ...{}, class: ("rounded-xl ma-2 pa-1 mt-n2"), variant: ("outlined"), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_158, typeof __VLS_160> & Record<string, unknown>) => void)({ ...{}, class: ("rounded-xl ma-2 pa-1 mt-n2"), variant: ("outlined"), });
const __VLS_161 = __VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160)!;
let __VLS_162!: __VLS_NormalizeEmits<typeof __VLS_161.emit>;
{
const __VLS_163 = ({} as 'VChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.VChip; } : 'vChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.vChip; } : 'v-chip' extends keyof typeof __VLS_ctx ? { 'VChip': (typeof __VLS_ctx)["v-chip"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VChip;
const __VLS_164 = __VLS_asFunctionalComponent(__VLS_163, new __VLS_163({ ...{}, variant: ("flat"), color: ("red"), }));
({} as { VChip: typeof __VLS_163; }).VChip;
({} as { VChip: typeof __VLS_163; }).VChip;
const __VLS_165 = __VLS_164({ ...{}, variant: ("flat"), color: ("red"), }, ...__VLS_functionalComponentArgsRest(__VLS_164));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_163, typeof __VLS_165> & Record<string, unknown>) => void)({ ...{}, variant: ("flat"), color: ("red"), });
const __VLS_166 = __VLS_pickFunctionalComponentCtx(__VLS_163, __VLS_165)!;
let __VLS_167!: __VLS_NormalizeEmits<typeof __VLS_166.emit>;
(__VLS_166.slots!).default;
}
{
const __VLS_168 = ({} as 'VChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.VChip; } : 'vChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.vChip; } : 'v-chip' extends keyof typeof __VLS_ctx ? { 'VChip': (typeof __VLS_ctx)["v-chip"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VChip;
const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ ...{}, variant: ("text"), class: ("ml-5"), }));
({} as { VChip: typeof __VLS_168; }).VChip;
({} as { VChip: typeof __VLS_168; }).VChip;
const __VLS_170 = __VLS_169({ ...{}, variant: ("text"), class: ("ml-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_168, typeof __VLS_170> & Record<string, unknown>) => void)({ ...{}, variant: ("text"), class: ("ml-5"), });
const __VLS_171 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170)!;
let __VLS_172!: __VLS_NormalizeEmits<typeof __VLS_171.emit>;
(__VLS_171.slots!).default;
}
{
const __VLS_173 = ({} as 'VChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.VChip; } : 'vChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.vChip; } : 'v-chip' extends keyof typeof __VLS_ctx ? { 'VChip': (typeof __VLS_ctx)["v-chip"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VChip;
const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({ ...{}, variant: ("text"), color: ("red"), }));
({} as { VChip: typeof __VLS_173; }).VChip;
({} as { VChip: typeof __VLS_173; }).VChip;
const __VLS_175 = __VLS_174({ ...{}, variant: ("text"), color: ("red"), }, ...__VLS_functionalComponentArgsRest(__VLS_174));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_173, typeof __VLS_175> & Record<string, unknown>) => void)({ ...{}, variant: ("text"), color: ("red"), });
const __VLS_176 = __VLS_pickFunctionalComponentCtx(__VLS_173, __VLS_175)!;
let __VLS_177!: __VLS_NormalizeEmits<typeof __VLS_176.emit>;
(__VLS_176.slots!).default;
}
{
const __VLS_178 = ({} as 'VChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.VChip; } : 'vChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.vChip; } : 'v-chip' extends keyof typeof __VLS_ctx ? { 'VChip': (typeof __VLS_ctx)["v-chip"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VChip;
const __VLS_179 = __VLS_asFunctionalComponent(__VLS_178, new __VLS_178({ ...{}, variant: ("text"), }));
({} as { VChip: typeof __VLS_178; }).VChip;
({} as { VChip: typeof __VLS_178; }).VChip;
const __VLS_180 = __VLS_179({ ...{}, variant: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_179));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_178, typeof __VLS_180> & Record<string, unknown>) => void)({ ...{}, variant: ("text"), });
const __VLS_181 = __VLS_pickFunctionalComponentCtx(__VLS_178, __VLS_180)!;
let __VLS_182!: __VLS_NormalizeEmits<typeof __VLS_181.emit>;
(__VLS_181.slots!).default;
}
(__VLS_161.slots!).default;
}
{
const __VLS_183 = ({} as 'VCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.VCard; } : 'vCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.vCard; } : 'v-card' extends keyof typeof __VLS_ctx ? { 'VCard': (typeof __VLS_ctx)["v-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCard;
const __VLS_184 = __VLS_asFunctionalComponent(__VLS_183, new __VLS_183({ ...{}, class: ("ma-2 mt-n2"), title: ("Pepperoni Pizza"), subtitle: ("Thin Crust"), color: ("transparent"), flat: (true), }));
({} as { VCard: typeof __VLS_183; }).VCard;
({} as { VCard: typeof __VLS_183; }).VCard;
const __VLS_185 = __VLS_184({ ...{}, class: ("ma-2 mt-n2"), title: ("Pepperoni Pizza"), subtitle: ("Thin Crust"), color: ("transparent"), flat: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_184));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_183, typeof __VLS_185> & Record<string, unknown>) => void)({ ...{}, class: ("ma-2 mt-n2"), title: ("Pepperoni Pizza"), subtitle: ("Thin Crust"), color: ("transparent"), flat: (true), });
const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185)!;
let __VLS_187!: __VLS_NormalizeEmits<typeof __VLS_186.emit>;
{
const __VLS_188 = __VLS_intrinsicElements["template"];
const __VLS_189 = __VLS_elementAsFunctionalComponent(__VLS_188);
const __VLS_190 = __VLS_189({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_189));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_188, typeof __VLS_190> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_186.slots!).prepend;
{
const __VLS_191 = ({} as 'VAvatar' extends keyof typeof __VLS_ctx ? { 'VAvatar': typeof __VLS_ctx.VAvatar; } : 'vAvatar' extends keyof typeof __VLS_ctx ? { 'VAvatar': typeof __VLS_ctx.vAvatar; } : 'v-avatar' extends keyof typeof __VLS_ctx ? { 'VAvatar': (typeof __VLS_ctx)["v-avatar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VAvatar;
const __VLS_192 = __VLS_asFunctionalComponent(__VLS_191, new __VLS_191({ ...{}, color: (""), }));
({} as { VAvatar: typeof __VLS_191; }).VAvatar;
({} as { VAvatar: typeof __VLS_191; }).VAvatar;
const __VLS_193 = __VLS_192({ ...{}, color: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_192));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_191, typeof __VLS_193> & Record<string, unknown>) => void)({ ...{}, color: (""), });
const __VLS_194 = __VLS_pickFunctionalComponentCtx(__VLS_191, __VLS_193)!;
let __VLS_195!: __VLS_NormalizeEmits<typeof __VLS_194.emit>;
{
const __VLS_196 = ({} as 'VImg' extends keyof typeof __VLS_ctx ? { 'VImg': typeof __VLS_ctx.VImg; } : 'vImg' extends keyof typeof __VLS_ctx ? { 'VImg': typeof __VLS_ctx.vImg; } : 'v-img' extends keyof typeof __VLS_ctx ? { 'VImg': (typeof __VLS_ctx)["v-img"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VImg;
const __VLS_197 = __VLS_asFunctionalComponent(__VLS_196, new __VLS_196({ ...{}, src: ("1.webp"), alt: ("John"), }));
({} as { VImg: typeof __VLS_196; }).VImg;
({} as { VImg: typeof __VLS_196; }).VImg;
const __VLS_198 = __VLS_197({ ...{}, src: ("1.webp"), alt: ("John"), }, ...__VLS_functionalComponentArgsRest(__VLS_197));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_196, typeof __VLS_198> & Record<string, unknown>) => void)({ ...{}, src: ("1.webp"), alt: ("John"), });
const __VLS_199 = __VLS_pickFunctionalComponentCtx(__VLS_196, __VLS_198)!;
let __VLS_200!: __VLS_NormalizeEmits<typeof __VLS_199.emit>;
}
(__VLS_194.slots!).default;
}
}
}
{
const __VLS_201 = __VLS_intrinsicElements["template"];
const __VLS_202 = __VLS_elementAsFunctionalComponent(__VLS_201);
const __VLS_203 = __VLS_202({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_202));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_201, typeof __VLS_203> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_186.slots!).append;
{
const __VLS_204 = ({} as 'VBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.VBtn; } : 'vBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.vBtn; } : 'v-btn' extends keyof typeof __VLS_ctx ? { 'VBtn': (typeof __VLS_ctx)["v-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VBtn;
const __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204({ ...{}, density: ("compact"), icon: ("mdi mdi-circle-edit-outline"), xSmall: (true), }));
({} as { VBtn: typeof __VLS_204; }).VBtn;
({} as { VBtn: typeof __VLS_204; }).VBtn;
const __VLS_206 = __VLS_205({ ...{}, density: ("compact"), icon: ("mdi mdi-circle-edit-outline"), xSmall: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_205));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_204, typeof __VLS_206> & Record<string, unknown>) => void)({ ...{}, density: ("compact"), icon: ("mdi mdi-circle-edit-outline"), xSmall: (true), });
const __VLS_207 = __VLS_pickFunctionalComponentCtx(__VLS_204, __VLS_206)!;
let __VLS_208!: __VLS_NormalizeEmits<typeof __VLS_207.emit>;
}
}
}
{
const __VLS_209 = ({} as 'VCardText' extends keyof typeof __VLS_ctx ? { 'VCardText': typeof __VLS_ctx.VCardText; } : 'vCardText' extends keyof typeof __VLS_ctx ? { 'VCardText': typeof __VLS_ctx.vCardText; } : 'v-card-text' extends keyof typeof __VLS_ctx ? { 'VCardText': (typeof __VLS_ctx)["v-card-text"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCardText;
const __VLS_210 = __VLS_asFunctionalComponent(__VLS_209, new __VLS_209({ ...{}, class: ("ml-14 mt-n2"), }));
({} as { VCardText: typeof __VLS_209; }).VCardText;
({} as { VCardText: typeof __VLS_209; }).VCardText;
const __VLS_211 = __VLS_210({ ...{}, class: ("ml-14 mt-n2"), }, ...__VLS_functionalComponentArgsRest(__VLS_210));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_209, typeof __VLS_211> & Record<string, unknown>) => void)({ ...{}, class: ("ml-14 mt-n2"), });
const __VLS_212 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211)!;
let __VLS_213!: __VLS_NormalizeEmits<typeof __VLS_212.emit>;
{
const __VLS_214 = ({} as 'VIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.VIcon; } : 'vIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.vIcon; } : 'v-icon' extends keyof typeof __VLS_ctx ? { 'VIcon': (typeof __VLS_ctx)["v-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VIcon;
const __VLS_215 = __VLS_asFunctionalComponent(__VLS_214, new __VLS_214({ ...{}, class: ("mr-2"), xSmall: (true), }));
({} as { VIcon: typeof __VLS_214; }).VIcon;
({} as { VIcon: typeof __VLS_214; }).VIcon;
const __VLS_216 = __VLS_215({ ...{}, class: ("mr-2"), xSmall: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_215));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_214, typeof __VLS_216> & Record<string, unknown>) => void)({ ...{}, class: ("mr-2"), xSmall: (true), });
const __VLS_217 = __VLS_pickFunctionalComponentCtx(__VLS_214, __VLS_216)!;
let __VLS_218!: __VLS_NormalizeEmits<typeof __VLS_217.emit>;
(__VLS_217.slots!).default;
}
{
const __VLS_219 = ({} as 'VIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.VIcon; } : 'vIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.vIcon; } : 'v-icon' extends keyof typeof __VLS_ctx ? { 'VIcon': (typeof __VLS_ctx)["v-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VIcon;
const __VLS_220 = __VLS_asFunctionalComponent(__VLS_219, new __VLS_219({ ...{}, class: ("ml-1"), xSmall: (true), }));
({} as { VIcon: typeof __VLS_219; }).VIcon;
({} as { VIcon: typeof __VLS_219; }).VIcon;
const __VLS_221 = __VLS_220({ ...{}, class: ("ml-1"), xSmall: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_220));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_219, typeof __VLS_221> & Record<string, unknown>) => void)({ ...{}, class: ("ml-1"), xSmall: (true), });
const __VLS_222 = __VLS_pickFunctionalComponentCtx(__VLS_219, __VLS_221)!;
let __VLS_223!: __VLS_NormalizeEmits<typeof __VLS_222.emit>;
(__VLS_222.slots!).default;
}
(__VLS_212.slots!).default;
}
}
{
const __VLS_224 = ({} as 'VDivider' extends keyof typeof __VLS_ctx ? { 'VDivider': typeof __VLS_ctx.VDivider; } : 'vDivider' extends keyof typeof __VLS_ctx ? { 'VDivider': typeof __VLS_ctx.vDivider; } : 'v-divider' extends keyof typeof __VLS_ctx ? { 'VDivider': (typeof __VLS_ctx)["v-divider"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VDivider;
const __VLS_225 = __VLS_asFunctionalComponent(__VLS_224, new __VLS_224({ ...{}, inset: (true), class: ("mt-n2"), }));
({} as { VDivider: typeof __VLS_224; }).VDivider;
({} as { VDivider: typeof __VLS_224; }).VDivider;
const __VLS_226 = __VLS_225({ ...{}, inset: (true), class: ("mt-n2"), }, ...__VLS_functionalComponentArgsRest(__VLS_225));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_224, typeof __VLS_226> & Record<string, unknown>) => void)({ ...{}, inset: (true), class: ("mt-n2"), });
const __VLS_227 = __VLS_pickFunctionalComponentCtx(__VLS_224, __VLS_226)!;
let __VLS_228!: __VLS_NormalizeEmits<typeof __VLS_227.emit>;
}
{
const __VLS_229 = ({} as 'VCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.VCard; } : 'vCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.vCard; } : 'v-card' extends keyof typeof __VLS_ctx ? { 'VCard': (typeof __VLS_ctx)["v-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCard;
const __VLS_230 = __VLS_asFunctionalComponent(__VLS_229, new __VLS_229({ ...{}, class: ("ma-2 mt-n2"), title: ("Cheese Burger"), subtitle: ("Whole wheat bun"), color: ("transparent"), flat: (true), }));
({} as { VCard: typeof __VLS_229; }).VCard;
({} as { VCard: typeof __VLS_229; }).VCard;
const __VLS_231 = __VLS_230({ ...{}, class: ("ma-2 mt-n2"), title: ("Cheese Burger"), subtitle: ("Whole wheat bun"), color: ("transparent"), flat: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_230));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_229, typeof __VLS_231> & Record<string, unknown>) => void)({ ...{}, class: ("ma-2 mt-n2"), title: ("Cheese Burger"), subtitle: ("Whole wheat bun"), color: ("transparent"), flat: (true), });
const __VLS_232 = __VLS_pickFunctionalComponentCtx(__VLS_229, __VLS_231)!;
let __VLS_233!: __VLS_NormalizeEmits<typeof __VLS_232.emit>;
{
const __VLS_234 = __VLS_intrinsicElements["template"];
const __VLS_235 = __VLS_elementAsFunctionalComponent(__VLS_234);
const __VLS_236 = __VLS_235({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_235));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_234, typeof __VLS_236> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_232.slots!).prepend;
{
const __VLS_237 = ({} as 'VAvatar' extends keyof typeof __VLS_ctx ? { 'VAvatar': typeof __VLS_ctx.VAvatar; } : 'vAvatar' extends keyof typeof __VLS_ctx ? { 'VAvatar': typeof __VLS_ctx.vAvatar; } : 'v-avatar' extends keyof typeof __VLS_ctx ? { 'VAvatar': (typeof __VLS_ctx)["v-avatar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VAvatar;
const __VLS_238 = __VLS_asFunctionalComponent(__VLS_237, new __VLS_237({ ...{}, color: (""), }));
({} as { VAvatar: typeof __VLS_237; }).VAvatar;
({} as { VAvatar: typeof __VLS_237; }).VAvatar;
const __VLS_239 = __VLS_238({ ...{}, color: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_238));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_237, typeof __VLS_239> & Record<string, unknown>) => void)({ ...{}, color: (""), });
const __VLS_240 = __VLS_pickFunctionalComponentCtx(__VLS_237, __VLS_239)!;
let __VLS_241!: __VLS_NormalizeEmits<typeof __VLS_240.emit>;
{
const __VLS_242 = ({} as 'VImg' extends keyof typeof __VLS_ctx ? { 'VImg': typeof __VLS_ctx.VImg; } : 'vImg' extends keyof typeof __VLS_ctx ? { 'VImg': typeof __VLS_ctx.vImg; } : 'v-img' extends keyof typeof __VLS_ctx ? { 'VImg': (typeof __VLS_ctx)["v-img"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VImg;
const __VLS_243 = __VLS_asFunctionalComponent(__VLS_242, new __VLS_242({ ...{}, src: ("2.png"), alt: ("John"), }));
({} as { VImg: typeof __VLS_242; }).VImg;
({} as { VImg: typeof __VLS_242; }).VImg;
const __VLS_244 = __VLS_243({ ...{}, src: ("2.png"), alt: ("John"), }, ...__VLS_functionalComponentArgsRest(__VLS_243));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_242, typeof __VLS_244> & Record<string, unknown>) => void)({ ...{}, src: ("2.png"), alt: ("John"), });
const __VLS_245 = __VLS_pickFunctionalComponentCtx(__VLS_242, __VLS_244)!;
let __VLS_246!: __VLS_NormalizeEmits<typeof __VLS_245.emit>;
}
(__VLS_240.slots!).default;
}
}
}
{
const __VLS_247 = __VLS_intrinsicElements["template"];
const __VLS_248 = __VLS_elementAsFunctionalComponent(__VLS_247);
const __VLS_249 = __VLS_248({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_248));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_247, typeof __VLS_249> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_232.slots!).append;
{
const __VLS_250 = ({} as 'VBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.VBtn; } : 'vBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.vBtn; } : 'v-btn' extends keyof typeof __VLS_ctx ? { 'VBtn': (typeof __VLS_ctx)["v-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VBtn;
const __VLS_251 = __VLS_asFunctionalComponent(__VLS_250, new __VLS_250({ ...{}, density: ("compact"), icon: ("mdi mdi-circle-edit-outline"), xSmall: (true), }));
({} as { VBtn: typeof __VLS_250; }).VBtn;
({} as { VBtn: typeof __VLS_250; }).VBtn;
const __VLS_252 = __VLS_251({ ...{}, density: ("compact"), icon: ("mdi mdi-circle-edit-outline"), xSmall: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_251));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_250, typeof __VLS_252> & Record<string, unknown>) => void)({ ...{}, density: ("compact"), icon: ("mdi mdi-circle-edit-outline"), xSmall: (true), });
const __VLS_253 = __VLS_pickFunctionalComponentCtx(__VLS_250, __VLS_252)!;
let __VLS_254!: __VLS_NormalizeEmits<typeof __VLS_253.emit>;
}
}
}
{
const __VLS_255 = ({} as 'VCardText' extends keyof typeof __VLS_ctx ? { 'VCardText': typeof __VLS_ctx.VCardText; } : 'vCardText' extends keyof typeof __VLS_ctx ? { 'VCardText': typeof __VLS_ctx.vCardText; } : 'v-card-text' extends keyof typeof __VLS_ctx ? { 'VCardText': (typeof __VLS_ctx)["v-card-text"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCardText;
const __VLS_256 = __VLS_asFunctionalComponent(__VLS_255, new __VLS_255({ ...{}, class: ("ml-14 mt-n2"), }));
({} as { VCardText: typeof __VLS_255; }).VCardText;
({} as { VCardText: typeof __VLS_255; }).VCardText;
const __VLS_257 = __VLS_256({ ...{}, class: ("ml-14 mt-n2"), }, ...__VLS_functionalComponentArgsRest(__VLS_256));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_255, typeof __VLS_257> & Record<string, unknown>) => void)({ ...{}, class: ("ml-14 mt-n2"), });
const __VLS_258 = __VLS_pickFunctionalComponentCtx(__VLS_255, __VLS_257)!;
let __VLS_259!: __VLS_NormalizeEmits<typeof __VLS_258.emit>;
{
const __VLS_260 = ({} as 'VIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.VIcon; } : 'vIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.vIcon; } : 'v-icon' extends keyof typeof __VLS_ctx ? { 'VIcon': (typeof __VLS_ctx)["v-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VIcon;
const __VLS_261 = __VLS_asFunctionalComponent(__VLS_260, new __VLS_260({ ...{}, class: ("mr-2"), xSmall: (true), }));
({} as { VIcon: typeof __VLS_260; }).VIcon;
({} as { VIcon: typeof __VLS_260; }).VIcon;
const __VLS_262 = __VLS_261({ ...{}, class: ("mr-2"), xSmall: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_261));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_260, typeof __VLS_262> & Record<string, unknown>) => void)({ ...{}, class: ("mr-2"), xSmall: (true), });
const __VLS_263 = __VLS_pickFunctionalComponentCtx(__VLS_260, __VLS_262)!;
let __VLS_264!: __VLS_NormalizeEmits<typeof __VLS_263.emit>;
(__VLS_263.slots!).default;
}
{
const __VLS_265 = ({} as 'VIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.VIcon; } : 'vIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.vIcon; } : 'v-icon' extends keyof typeof __VLS_ctx ? { 'VIcon': (typeof __VLS_ctx)["v-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VIcon;
const __VLS_266 = __VLS_asFunctionalComponent(__VLS_265, new __VLS_265({ ...{}, class: ("ml-1"), xSmall: (true), }));
({} as { VIcon: typeof __VLS_265; }).VIcon;
({} as { VIcon: typeof __VLS_265; }).VIcon;
const __VLS_267 = __VLS_266({ ...{}, class: ("ml-1"), xSmall: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_266));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_265, typeof __VLS_267> & Record<string, unknown>) => void)({ ...{}, class: ("ml-1"), xSmall: (true), });
const __VLS_268 = __VLS_pickFunctionalComponentCtx(__VLS_265, __VLS_267)!;
let __VLS_269!: __VLS_NormalizeEmits<typeof __VLS_268.emit>;
(__VLS_268.slots!).default;
}
(__VLS_258.slots!).default;
}
}
{
const __VLS_270 = ({} as 'VCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.VCard; } : 'vCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.vCard; } : 'v-card' extends keyof typeof __VLS_ctx ? { 'VCard': (typeof __VLS_ctx)["v-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCard;
const __VLS_271 = __VLS_asFunctionalComponent(__VLS_270, new __VLS_270({ ...{}, class: ("rounded-xl ma-2 pa-1 mt-n2"), variant: (""), elevation: ("16"), }));
({} as { VCard: typeof __VLS_270; }).VCard;
({} as { VCard: typeof __VLS_270; }).VCard;
const __VLS_272 = __VLS_271({ ...{}, class: ("rounded-xl ma-2 pa-1 mt-n2"), variant: (""), elevation: ("16"), }, ...__VLS_functionalComponentArgsRest(__VLS_271));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_270, typeof __VLS_272> & Record<string, unknown>) => void)({ ...{}, class: ("rounded-xl ma-2 pa-1 mt-n2"), variant: (""), elevation: ("16"), });
const __VLS_273 = __VLS_pickFunctionalComponentCtx(__VLS_270, __VLS_272)!;
let __VLS_274!: __VLS_NormalizeEmits<typeof __VLS_273.emit>;
{
const __VLS_275 = ({} as 'VChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.VChip; } : 'vChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.vChip; } : 'v-chip' extends keyof typeof __VLS_ctx ? { 'VChip': (typeof __VLS_ctx)["v-chip"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VChip;
const __VLS_276 = __VLS_asFunctionalComponent(__VLS_275, new __VLS_275({ ...{}, variant: ("text"), class: ("mRight"), }));
({} as { VChip: typeof __VLS_275; }).VChip;
({} as { VChip: typeof __VLS_275; }).VChip;
const __VLS_277 = __VLS_276({ ...{}, variant: ("text"), class: ("mRight"), }, ...__VLS_functionalComponentArgsRest(__VLS_276));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_275, typeof __VLS_277> & Record<string, unknown>) => void)({ ...{}, variant: ("text"), class: ("mRight"), });
const __VLS_278 = __VLS_pickFunctionalComponentCtx(__VLS_275, __VLS_277)!;
let __VLS_279!: __VLS_NormalizeEmits<typeof __VLS_278.emit>;
(__VLS_278.slots!).default;
}
{
const __VLS_280 = ({} as 'VChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.VChip; } : 'vChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.vChip; } : 'v-chip' extends keyof typeof __VLS_ctx ? { 'VChip': (typeof __VLS_ctx)["v-chip"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VChip;
const __VLS_281 = __VLS_asFunctionalComponent(__VLS_280, new __VLS_280({ ...{}, variant: ("flat"), color: ("black"), }));
({} as { VChip: typeof __VLS_280; }).VChip;
({} as { VChip: typeof __VLS_280; }).VChip;
const __VLS_282 = __VLS_281({ ...{}, variant: ("flat"), color: ("black"), }, ...__VLS_functionalComponentArgsRest(__VLS_281));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_280, typeof __VLS_282> & Record<string, unknown>) => void)({ ...{}, variant: ("flat"), color: ("black"), });
const __VLS_283 = __VLS_pickFunctionalComponentCtx(__VLS_280, __VLS_282)!;
let __VLS_284!: __VLS_NormalizeEmits<typeof __VLS_283.emit>;
(__VLS_283.slots!).default;
}
(__VLS_273.slots!).default;
}
{
const __VLS_285 = ({} as 'VCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.VCard; } : 'vCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.vCard; } : 'v-card' extends keyof typeof __VLS_ctx ? { 'VCard': (typeof __VLS_ctx)["v-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCard;
const __VLS_286 = __VLS_asFunctionalComponent(__VLS_285, new __VLS_285({ ...{}, color: ("transparent"), class: ("ma-2"), flat: (true), }));
({} as { VCard: typeof __VLS_285; }).VCard;
({} as { VCard: typeof __VLS_285; }).VCard;
const __VLS_287 = __VLS_286({ ...{}, color: ("transparent"), class: ("ma-2"), flat: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_286));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_285, typeof __VLS_287> & Record<string, unknown>) => void)({ ...{}, color: ("transparent"), class: ("ma-2"), flat: (true), });
const __VLS_288 = __VLS_pickFunctionalComponentCtx(__VLS_285, __VLS_287)!;
let __VLS_289!: __VLS_NormalizeEmits<typeof __VLS_288.emit>;
{
const __VLS_290 = ({} as 'VList' extends keyof typeof __VLS_ctx ? { 'VList': typeof __VLS_ctx.VList; } : 'vList' extends keyof typeof __VLS_ctx ? { 'VList': typeof __VLS_ctx.vList; } : 'v-list' extends keyof typeof __VLS_ctx ? { 'VList': (typeof __VLS_ctx)["v-list"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VList;
const __VLS_291 = __VLS_asFunctionalComponent(__VLS_290, new __VLS_290({ ...{}, density: ("comfortable"), class: ("text-white"), }));
({} as { VList: typeof __VLS_290; }).VList;
({} as { VList: typeof __VLS_290; }).VList;
const __VLS_292 = __VLS_291({ ...{}, density: ("comfortable"), class: ("text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_291));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_290, typeof __VLS_292> & Record<string, unknown>) => void)({ ...{}, density: ("comfortable"), class: ("text-white"), });
const __VLS_293 = __VLS_pickFunctionalComponentCtx(__VLS_290, __VLS_292)!;
let __VLS_294!: __VLS_NormalizeEmits<typeof __VLS_293.emit>;
{
const __VLS_295 = ({} as 'VListItem' extends keyof typeof __VLS_ctx ? { 'VListItem': typeof __VLS_ctx.VListItem; } : 'vListItem' extends keyof typeof __VLS_ctx ? { 'VListItem': typeof __VLS_ctx.vListItem; } : 'v-list-item' extends keyof typeof __VLS_ctx ? { 'VListItem': (typeof __VLS_ctx)["v-list-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VListItem;
const __VLS_296 = __VLS_asFunctionalComponent(__VLS_295, new __VLS_295({ ...{}, title: ("Sub Total"), }));
({} as { VListItem: typeof __VLS_295; }).VListItem;
({} as { VListItem: typeof __VLS_295; }).VListItem;
const __VLS_297 = __VLS_296({ ...{}, title: ("Sub Total"), }, ...__VLS_functionalComponentArgsRest(__VLS_296));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_295, typeof __VLS_297> & Record<string, unknown>) => void)({ ...{}, title: ("Sub Total"), });
const __VLS_298 = __VLS_pickFunctionalComponentCtx(__VLS_295, __VLS_297)!;
let __VLS_299!: __VLS_NormalizeEmits<typeof __VLS_298.emit>;
{
const __VLS_300 = __VLS_intrinsicElements["template"];
const __VLS_301 = __VLS_elementAsFunctionalComponent(__VLS_300);
const __VLS_302 = __VLS_301({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_301));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_300, typeof __VLS_302> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_298.slots!).append;
{
const __VLS_303 = ({} as 'VBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.VBtn; } : 'vBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.vBtn; } : 'v-btn' extends keyof typeof __VLS_ctx ? { 'VBtn': (typeof __VLS_ctx)["v-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VBtn;
const __VLS_304 = __VLS_asFunctionalComponent(__VLS_303, new __VLS_303({ ...{}, variant: ("text"), }));
({} as { VBtn: typeof __VLS_303; }).VBtn;
({} as { VBtn: typeof __VLS_303; }).VBtn;
const __VLS_305 = __VLS_304({ ...{}, variant: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_304));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_303, typeof __VLS_305> & Record<string, unknown>) => void)({ ...{}, variant: ("text"), });
const __VLS_306 = __VLS_pickFunctionalComponentCtx(__VLS_303, __VLS_305)!;
let __VLS_307!: __VLS_NormalizeEmits<typeof __VLS_306.emit>;
(__VLS_306.slots!).default;
}
}
}
}
{
const __VLS_308 = ({} as 'VListItem' extends keyof typeof __VLS_ctx ? { 'VListItem': typeof __VLS_ctx.VListItem; } : 'vListItem' extends keyof typeof __VLS_ctx ? { 'VListItem': typeof __VLS_ctx.vListItem; } : 'v-list-item' extends keyof typeof __VLS_ctx ? { 'VListItem': (typeof __VLS_ctx)["v-list-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VListItem;
const __VLS_309 = __VLS_asFunctionalComponent(__VLS_308, new __VLS_308({ ...{}, title: ("Delivery Charge"), }));
({} as { VListItem: typeof __VLS_308; }).VListItem;
({} as { VListItem: typeof __VLS_308; }).VListItem;
const __VLS_310 = __VLS_309({ ...{}, title: ("Delivery Charge"), }, ...__VLS_functionalComponentArgsRest(__VLS_309));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_308, typeof __VLS_310> & Record<string, unknown>) => void)({ ...{}, title: ("Delivery Charge"), });
const __VLS_311 = __VLS_pickFunctionalComponentCtx(__VLS_308, __VLS_310)!;
let __VLS_312!: __VLS_NormalizeEmits<typeof __VLS_311.emit>;
{
const __VLS_313 = __VLS_intrinsicElements["template"];
const __VLS_314 = __VLS_elementAsFunctionalComponent(__VLS_313);
const __VLS_315 = __VLS_314({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_314));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_313, typeof __VLS_315> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_311.slots!).append;
{
const __VLS_316 = ({} as 'VBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.VBtn; } : 'vBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.vBtn; } : 'v-btn' extends keyof typeof __VLS_ctx ? { 'VBtn': (typeof __VLS_ctx)["v-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VBtn;
const __VLS_317 = __VLS_asFunctionalComponent(__VLS_316, new __VLS_316({ ...{}, variant: ("text"), }));
({} as { VBtn: typeof __VLS_316; }).VBtn;
({} as { VBtn: typeof __VLS_316; }).VBtn;
const __VLS_318 = __VLS_317({ ...{}, variant: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_317));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_316, typeof __VLS_318> & Record<string, unknown>) => void)({ ...{}, variant: ("text"), });
const __VLS_319 = __VLS_pickFunctionalComponentCtx(__VLS_316, __VLS_318)!;
let __VLS_320!: __VLS_NormalizeEmits<typeof __VLS_319.emit>;
(__VLS_319.slots!).default;
}
}
}
}
{
const __VLS_321 = ({} as 'VDivider' extends keyof typeof __VLS_ctx ? { 'VDivider': typeof __VLS_ctx.VDivider; } : 'vDivider' extends keyof typeof __VLS_ctx ? { 'VDivider': typeof __VLS_ctx.vDivider; } : 'v-divider' extends keyof typeof __VLS_ctx ? { 'VDivider': (typeof __VLS_ctx)["v-divider"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VDivider;
const __VLS_322 = __VLS_asFunctionalComponent(__VLS_321, new __VLS_321({ ...{}, inset: (true), }));
({} as { VDivider: typeof __VLS_321; }).VDivider;
({} as { VDivider: typeof __VLS_321; }).VDivider;
const __VLS_323 = __VLS_322({ ...{}, inset: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_322));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_321, typeof __VLS_323> & Record<string, unknown>) => void)({ ...{}, inset: (true), });
const __VLS_324 = __VLS_pickFunctionalComponentCtx(__VLS_321, __VLS_323)!;
let __VLS_325!: __VLS_NormalizeEmits<typeof __VLS_324.emit>;
}
{
const __VLS_326 = ({} as 'VListItem' extends keyof typeof __VLS_ctx ? { 'VListItem': typeof __VLS_ctx.VListItem; } : 'vListItem' extends keyof typeof __VLS_ctx ? { 'VListItem': typeof __VLS_ctx.vListItem; } : 'v-list-item' extends keyof typeof __VLS_ctx ? { 'VListItem': (typeof __VLS_ctx)["v-list-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VListItem;
const __VLS_327 = __VLS_asFunctionalComponent(__VLS_326, new __VLS_326({ ...{}, title: ("TOTAL"), }));
({} as { VListItem: typeof __VLS_326; }).VListItem;
({} as { VListItem: typeof __VLS_326; }).VListItem;
const __VLS_328 = __VLS_327({ ...{}, title: ("TOTAL"), }, ...__VLS_functionalComponentArgsRest(__VLS_327));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_326, typeof __VLS_328> & Record<string, unknown>) => void)({ ...{}, title: ("TOTAL"), });
const __VLS_329 = __VLS_pickFunctionalComponentCtx(__VLS_326, __VLS_328)!;
let __VLS_330!: __VLS_NormalizeEmits<typeof __VLS_329.emit>;
{
const __VLS_331 = __VLS_intrinsicElements["template"];
const __VLS_332 = __VLS_elementAsFunctionalComponent(__VLS_331);
const __VLS_333 = __VLS_332({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_332));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_331, typeof __VLS_333> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_329.slots!).append;
{
const __VLS_334 = ({} as 'VBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.VBtn; } : 'vBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.vBtn; } : 'v-btn' extends keyof typeof __VLS_ctx ? { 'VBtn': (typeof __VLS_ctx)["v-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VBtn;
const __VLS_335 = __VLS_asFunctionalComponent(__VLS_334, new __VLS_334({ ...{}, variant: ("text"), }));
({} as { VBtn: typeof __VLS_334; }).VBtn;
({} as { VBtn: typeof __VLS_334; }).VBtn;
const __VLS_336 = __VLS_335({ ...{}, variant: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_335));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_334, typeof __VLS_336> & Record<string, unknown>) => void)({ ...{}, variant: ("text"), });
const __VLS_337 = __VLS_pickFunctionalComponentCtx(__VLS_334, __VLS_336)!;
let __VLS_338!: __VLS_NormalizeEmits<typeof __VLS_337.emit>;
(__VLS_337.slots!).default;
}
}
}
}
(__VLS_293.slots!).default;
}
(__VLS_288.slots!).default;
}
{
const __VLS_339 = ({} as 'VChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.VChip; } : 'vChip' extends keyof typeof __VLS_ctx ? { 'VChip': typeof __VLS_ctx.vChip; } : 'v-chip' extends keyof typeof __VLS_ctx ? { 'VChip': (typeof __VLS_ctx)["v-chip"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VChip;
const __VLS_340 = __VLS_asFunctionalComponent(__VLS_339, new __VLS_339({ ...{}, variant: ("flat"), color: ("black"), class: ("px-10 mLeft"), }));
({} as { VChip: typeof __VLS_339; }).VChip;
({} as { VChip: typeof __VLS_339; }).VChip;
const __VLS_341 = __VLS_340({ ...{}, variant: ("flat"), color: ("black"), class: ("px-10 mLeft"), }, ...__VLS_functionalComponentArgsRest(__VLS_340));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_339, typeof __VLS_341> & Record<string, unknown>) => void)({ ...{}, variant: ("flat"), color: ("black"), class: ("px-10 mLeft"), });
const __VLS_342 = __VLS_pickFunctionalComponentCtx(__VLS_339, __VLS_341)!;
let __VLS_343!: __VLS_NormalizeEmits<typeof __VLS_342.emit>;
(__VLS_342.slots!).default;
}
(__VLS_98.slots!).default;
}
(__VLS_93.slots!).default;
}
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
(__VLS_13.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["text-grey"];
__VLS_styleScopedClasses["mx-8"];
__VLS_styleScopedClasses["pr-1"];
__VLS_styleScopedClasses["mt-n2"];
__VLS_styleScopedClasses["text-white"];
__VLS_styleScopedClasses["text-caption"];
__VLS_styleScopedClasses["text-white"];
__VLS_styleScopedClasses["text-white"];
__VLS_styleScopedClasses["ml-4"];
__VLS_styleScopedClasses["mt-n4"];
__VLS_styleScopedClasses["text-red"];
__VLS_styleScopedClasses["mt-4"];
__VLS_styleScopedClasses["rounded-xl"];
__VLS_styleScopedClasses["mx-2"];
__VLS_styleScopedClasses["mt-4"];
__VLS_styleScopedClasses["rounded-lg"];
__VLS_styleScopedClasses["me-1"];
__VLS_styleScopedClasses["pb-1"];
__VLS_styleScopedClasses["mt-n3"];
__VLS_styleScopedClasses["mr-2"];
__VLS_styleScopedClasses["pr-1"];
__VLS_styleScopedClasses["mt-n2"];
__VLS_styleScopedClasses["hidden-xs-only"];
__VLS_styleScopedClasses["text-caption"];
__VLS_styleScopedClasses["rounded-xl"];
__VLS_styleScopedClasses["ma-2"];
__VLS_styleScopedClasses["pa-1"];
__VLS_styleScopedClasses["mt-n2"];
__VLS_styleScopedClasses["ml-5"];
__VLS_styleScopedClasses["ma-2"];
__VLS_styleScopedClasses["mt-n2"];
__VLS_styleScopedClasses["ml-14"];
__VLS_styleScopedClasses["mt-n2"];
__VLS_styleScopedClasses["mr-2"];
__VLS_styleScopedClasses["ml-1"];
__VLS_styleScopedClasses["mt-n2"];
__VLS_styleScopedClasses["ma-2"];
__VLS_styleScopedClasses["mt-n2"];
__VLS_styleScopedClasses["ml-14"];
__VLS_styleScopedClasses["mt-n2"];
__VLS_styleScopedClasses["mr-2"];
__VLS_styleScopedClasses["ml-1"];
__VLS_styleScopedClasses["rounded-xl"];
__VLS_styleScopedClasses["ma-2"];
__VLS_styleScopedClasses["pa-1"];
__VLS_styleScopedClasses["mt-n2"];
__VLS_styleScopedClasses["mRight"];
__VLS_styleScopedClasses["ma-2"];
__VLS_styleScopedClasses["text-white"];
__VLS_styleScopedClasses["px-10"];
__VLS_styleScopedClasses["mLeft"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
SideBare: SideBare as typeof SideBare,
};
},

data: () => ({
foods =[
{ text: "Dashboard", icon: "mdi mdi-view-dashboard" },
{ text: "Orders", icon: "mdi mdi-phone-classic" },
{ text: "Restaurants", icon: "mdi mdi-map-marker-radius" },
{ text: "Finance", icon: "mdi mdi-finance" },
{ text: "Logout", icon: "mdi mdi-logout" },
],
}),
});
return (await import('vue')).defineComponent({
setup() {
return {};
},

data: () => ({
foods =[
{ text: "Dashboard", icon: "mdi mdi-view-dashboard" },
{ text: "Orders", icon: "mdi mdi-phone-classic" },
{ text: "Restaurants", icon: "mdi mdi-map-marker-radius" },
{ text: "Finance", icon: "mdi mdi-finance" },
{ text: "Logout", icon: "mdi mdi-logout" },
],
}),
});
})();
