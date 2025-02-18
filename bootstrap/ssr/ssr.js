import { useSSRContext, mergeProps, unref, withCtx, createVNode, mergeModels, useModel, ref, onMounted, createTextVNode, withModifiers, openBlock, createBlock, toDisplayString, createCommentVNode, computed, onUnmounted, renderSlot, withDirectives, Fragment, renderList, vModelSelect, watch, onBeforeUnmount, vModelRadio, withKeys, nextTick, resolveComponent, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrGetDynamicModelProps, ssrLooseContain, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderTeleport } from "vue/server-renderer";
import { Link, useForm, Head, usePage, router, createInertiaApp } from "@inertiajs/vue3";
import { ChevronLeftIcon, ChevronRightIcon, BoldIcon, ItalicIcon, StrikethroughIcon, H1Icon, H2Icon, H3Icon, ListBulletIcon, NumberedListIcon, LinkIcon, LinkSlashIcon, ChevronUpDownIcon, CheckIcon, Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ArrowRightIcon } from "@heroicons/vue/20/solid";
import { Combobox, ComboboxLabel, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption } from "@headlessui/vue";
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";
import Link$1 from "@tiptap/extension-link";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { ZiggyVue } from "ziggy-js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$12 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 316 316",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"></path></svg>`);
}
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$11 = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0" }, _attrs))}><div>`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "h-20 w-20 fill-current text-gray-500" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "h-20 w-20 fill-current text-gray-500" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const _sfc_main$10 = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: {
    message: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const _sfc_main$$ = {
  __name: "InputLabel",
  __ssrInlineRender: true,
  props: {
    value: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block text-sm font-medium text-gray-700" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputLabel.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const _sfc_main$_ = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryButton.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const PrimaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$Z = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    placeholder: String
  }, {
    "modelValue": {
      type: String,
      required: true
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const model = useModel(__props, "modelValue");
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    __expose({ focus: () => input.value.focus() });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        class: "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
        ref_key: "input",
        ref: input,
        placeholder: __props.placeholder
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))}>`);
    };
  }
};
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const _sfc_main$Y = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$11, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Confirm Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirm `);
                } else {
                  return [
                    createTextVNode(" Confirm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Confirm Password" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. "),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$$, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$Z, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$10, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4 flex justify-end" }, [
                  createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Confirm ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$Y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$X = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$11, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Email Password Reset Link `);
                } else {
                  return [
                    createTextVNode(" Email Password Reset Link ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Forgot Password" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$$, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$Z, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$10, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                  createVNode(PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Email Password Reset Link ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$X
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$W = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      required: true
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "checkbox",
        value: __props.value,
        checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
        class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
    };
  }
};
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const _sfc_main$V = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$11, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 block"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$W, {
              name: "remember",
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>Remember me</span></label></div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("password.request"),
                class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Forgot your password? `);
                  } else {
                    return [
                      createTextVNode(" Forgot your password? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Log in" }),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$$, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$Z, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$10, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$$, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$Z, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$10, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4 block" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_sfc_main$W, {
                      name: "remember",
                      checked: unref(form).remember,
                      "onUpdate:checked": ($event) => unref(form).remember = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ms-2 text-sm text-gray-600" }, "Remember me")
                  ])
                ]),
                createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                  __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$V
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$U = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$11, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    createTextVNode(" Already registered? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Register" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$$, {
                    for: "name",
                    value: "Name"
                  }),
                  createVNode(_sfc_main$Z, {
                    id: "name",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$10, {
                    class: "mt-2",
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$$, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$Z, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$10, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$$, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$Z, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$10, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$$, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$Z, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$10, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Already registered? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$U
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$T = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.store"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$11, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Reset Password" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$$, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$Z, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$10, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$$, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$Z, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$10, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$$, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$Z, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$10, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                  createVNode(PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset Password ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$T
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$S = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(
      () => props.status === "verification-link-sent"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$11, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
            if (verificationLinkSent.value) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Resend Verification Email `);
                } else {
                  return [
                    createTextVNode(" Resend Verification Email ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out`);
                } else {
                  return [
                    createTextVNode(" Log Out")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Email Verification" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
              verificationLinkSent.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-green-600"
              }, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                  createVNode(PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Resend Verification Email ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"]),
                  createVNode(unref(Link), {
                    href: _ctx.route("logout"),
                    method: "post",
                    as: "button",
                    class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log Out")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$S
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$R = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: String,
      default: "py-1 bg-white"
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "ltr:origin-top-left rtl:origin-top-right start-0";
      } else if (props.align === "right") {
        return "ltr:origin-top-right rtl:origin-top-left end-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const _sfc_main$Q = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const _sfc_main$P = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const _sfc_main$O = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const _sfc_main$N = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    const can = usePage().props.auth.can;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="min-h-screen bg-gray-100"><nav class="border-b border-gray-100 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-16 justify-between"><div class="flex"><div class="flex shrink-0 items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">`);
      _push(ssrRenderComponent(_sfc_main$P, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(can).manageUsers) {
        _push(ssrRenderComponent(_sfc_main$P, {
          href: _ctx.route("dashboard.users.index"),
          active: _ctx.route().current("dashboard.users.*")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Users `);
            } else {
              return [
                createTextVNode(" Users ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(can).manageCategories) {
        _push(ssrRenderComponent(_sfc_main$P, {
          href: _ctx.route("dashboard.categories.index"),
          active: _ctx.route().current("dashboard.categories.*")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Categories `);
            } else {
              return [
                createTextVNode(" Categories ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$P, {
        href: _ctx.route("dashboard.posts.index"),
        active: _ctx.route().current("dashboard.posts.*")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Posts `);
          } else {
            return [
              createTextVNode(" Posts ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(can).manageAds) {
        _push(ssrRenderComponent(_sfc_main$P, {
          href: _ctx.route("dashboard.advertisements.index"),
          active: _ctx.route().current("dashboard.advertisements.*")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Pojok Iklan `);
            } else {
              return [
                createTextVNode(" Pojok Iklan ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="hidden sm:ms-6 sm:flex sm:items-center"><div class="relative ms-3">`);
      _push(ssrRenderComponent(_sfc_main$R, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="-me-0.5 ms-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "-me-0.5 ms-2 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$Q, {
              href: _ctx.route("profile.edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Q, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$Q, {
                href: _ctx.route("profile.edit")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$Q, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Log Out ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-me-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
        hidden: showingNavigationDropdown.value,
        "inline-flex": !showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
        hidden: !showingNavigationDropdown.value,
        "inline-flex": showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{
        block: showingNavigationDropdown.value,
        hidden: !showingNavigationDropdown.value
      }, "sm:hidden"])}"><div class="space-y-1 pb-3 pt-2">`);
      _push(ssrRenderComponent(_sfc_main$O, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-t border-gray-200 pb-1 pt-4"><div class="px-4"><div class="text-base font-medium text-gray-800">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="text-sm font-medium text-gray-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$O, {
        href: _ctx.route("profile.edit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$O, {
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log Out `);
          } else {
            return [
              createTextVNode(" Log Out ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow"><div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const _sfc_main$M = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Dashboard </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Dashboard ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}> You&#39;re logged in! </div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, " You're logged in! ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$M
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$L = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    advertisements: Array,
    positions: Array
  },
  setup(__props) {
    const form = useForm({
      title: "",
      position: "",
      image: null,
      target_url: "",
      start_date: "",
      end_date: ""
    });
    const submit = () => {
      form.post(route("dashboard.advertisements.store"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create Advertisement" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Create Advertisement </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Create Advertisement ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><form class="max-w-xl space-y-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "title",
              value: "Title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "title",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).title,
              "onUpdate:modelValue": ($event) => unref(form).title = $event,
              autofocus: "",
              autocomplete: "title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.title
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "position",
              value: "Position"
            }, null, _parent2, _scopeId));
            _push2(`<select id="position" type="text" class="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full" autofocus autocomplete="position"${_scopeId}><!--[-->`);
            ssrRenderList(__props.positions, (position) => {
              _push2(`<option${ssrRenderAttr("value", position.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).position) ? ssrLooseContain(unref(form).position, position.value) : ssrLooseEqual(unref(form).position, position.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(position.label)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.position
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "image",
              value: "Image"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "title",
              type: "file",
              class: "mt-1 block w-full shadow-none",
              onInput: ($event) => unref(form).image = $event.target.files[0],
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.image
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "target_url",
              value: "Target URL"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "target_url",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).target_url,
              "onUpdate:modelValue": ($event) => unref(form).target_url = $event,
              autofocus: "",
              autocomplete: "target_url"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.target_url
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "start_date",
              value: "Start Date"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "start_date",
              type: "datetime-local",
              class: "mt-1 block w-full",
              modelValue: unref(form).start_date,
              "onUpdate:modelValue": ($event) => unref(form).start_date = $event,
              autofocus: "",
              autocomplete: "start_date"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.start_date
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "end_date",
              value: "End Date"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "end_date",
              type: "datetime-local",
              class: "mt-1 block w-full",
              modelValue: unref(form).end_date,
              "onUpdate:modelValue": ($event) => unref(form).end_date = $event,
              autofocus: "",
              autocomplete: "end_date"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.end_date
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "max-w-xl space-y-4"
                      }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "title",
                            value: "Title"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "title",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).title,
                            "onUpdate:modelValue": ($event) => unref(form).title = $event,
                            autofocus: "",
                            autocomplete: "title"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.title
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "position",
                            value: "Position"
                          }),
                          withDirectives(createVNode("select", {
                            id: "position",
                            type: "text",
                            class: "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full",
                            "onUpdate:modelValue": ($event) => unref(form).position = $event,
                            autofocus: "",
                            autocomplete: "position"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.positions, (position) => {
                              return openBlock(), createBlock("option", {
                                key: position.value,
                                value: position.value
                              }, toDisplayString(position.label), 9, ["value"]);
                            }), 128))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).position]
                          ]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.position
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "image",
                            value: "Image"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "title",
                            type: "file",
                            class: "mt-1 block w-full shadow-none",
                            onInput: ($event) => unref(form).image = $event.target.files[0],
                            autofocus: ""
                          }, null, 8, ["onInput"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.image
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "target_url",
                            value: "Target URL"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "target_url",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).target_url,
                            "onUpdate:modelValue": ($event) => unref(form).target_url = $event,
                            autofocus: "",
                            autocomplete: "target_url"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.target_url
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "start_date",
                            value: "Start Date"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "start_date",
                            type: "datetime-local",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).start_date,
                            "onUpdate:modelValue": ($event) => unref(form).start_date = $event,
                            autofocus: "",
                            autocomplete: "start_date"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.start_date
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "end_date",
                            value: "End Date"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "end_date",
                            type: "datetime-local",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).end_date,
                            "onUpdate:modelValue": ($event) => unref(form).end_date = $event,
                            autofocus: "",
                            autocomplete: "end_date"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.end_date
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4 flex items-center" }, [
                          createVNode(PrimaryButton, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Advertisement/Create.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$L
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$K = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    category: Object
  },
  setup(__props) {
    const form = useForm({
      name: __props.category.name,
      slug: __props.category.slug
    });
    const submit = () => {
      form.patch(route("dashboard.categories.update", __props.category.id));
    };
    watch(form, () => {
      form.slug = form.name.toLowerCase().replace(/ /g, "-");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Category" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Edit Category </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Edit Category ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><form class="max-w-xl space-y-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "slug",
              value: "Slug"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "slug",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).slug,
              "onUpdate:modelValue": ($event) => unref(form).slug = $event,
              autofocus: "",
              readonly: "",
              autocomplete: "slug"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.slug
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update `);
                } else {
                  return [
                    createTextVNode(" Update ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "max-w-xl space-y-4"
                      }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "name",
                            value: "Name"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "name",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            autofocus: "",
                            autocomplete: "name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.name
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "slug",
                            value: "Slug"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "slug",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).slug,
                            "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                            autofocus: "",
                            readonly: "",
                            autocomplete: "slug"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.slug
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4 flex items-center" }, [
                          createVNode(PrimaryButton, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Update ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Advertisement/Edit.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$K
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$J = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    meta: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6" }, _attrs))}><div class="flex flex-1 justify-between sm:hidden"><a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a><a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a></div><div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"><div><p class="text-sm text-gray-700"> Showing ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate(__props.meta.from)}</span> ${ssrInterpolate(" ")} to ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate(__props.meta.to)}</span> ${ssrInterpolate(" ")} of ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate(__props.meta.total)}</span> ${ssrInterpolate(" ")} results </p></div><div><nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination"><!--[-->`);
      ssrRenderList(__props.meta.links, (link, index) => {
        _push(`<!--[-->`);
        if (link.label === "pagination.previous") {
          _push(`<a${ssrRenderAttr("href", link.url)} class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"><span class="sr-only">Previous</span>`);
          _push(ssrRenderComponent(unref(ChevronLeftIcon), {
            class: "size-5",
            "aria-hidden": "true"
          }, null, _parent));
          _push(`</a>`);
        } else if (link.label === "pagination.next") {
          _push(`<a${ssrRenderAttr("href", link.url)} class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"><span class="sr-only">Next</span>`);
          _push(ssrRenderComponent(unref(ChevronRightIcon), {
            class: "size-5",
            "aria-hidden": "true"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<a${ssrRenderAttr("href", link.url)} aria-current="page" class="${ssrRenderClass({
            "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0": true,
            "bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-indigo-600": link.active
          })}">${ssrInterpolate(link.label)}</a>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></nav></div></div></div>`);
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Core/Pagination.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _sfc_main$I = {
  __name: "RecordStatus",
  __ssrInlineRender: true,
  props: {
    status: Number
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.status == 1) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-green-400" }, _attrs))}>Active</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-red-400" }, _attrs))}>Inactive</div>`);
      }
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/RecordStatus.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    advertisements: Array
  },
  setup(__props) {
    const handleDelete = (advertisement) => {
      const confirm = window.confirm("Are you sure you want to delete this advertisement?");
      if (confirm) {
        router.delete(route("dashboard.advertisements.destroy", advertisement));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Advertisements" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Advertisements </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Advertisements ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><div class="sm:flex sm:items-center sm:justify-between"${_scopeId}><div class="max-w-sm sm:flex-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$Z, {
              placeholder: "Search advertisement...",
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("dashboard.advertisements.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(PrimaryButton, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Add New`);
                      } else {
                        return [
                          createTextVNode("Add New")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(PrimaryButton, null, {
                      default: withCtx(() => [
                        createTextVNode("Add New")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-8 flow-root"${_scopeId}><div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId}><div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"${_scopeId}><table class="min-w-full divide-y divide-gray-300"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"${_scopeId}> Title </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"${_scopeId}> Position </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"${_scopeId}> Target URL </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"${_scopeId}> Start Date </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"${_scopeId}> End Date </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"${_scopeId}> Status </th><th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0"${_scopeId}><span class="sr-only"${_scopeId}>Edit</span></th></tr></thead><tbody class="divide-y divide-gray-200"${_scopeId}><!--[-->`);
            ssrRenderList(__props.advertisements.data, (advertisement) => {
              _push2(`<tr${_scopeId}><td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"${_scopeId}>${ssrInterpolate(advertisement.title)}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(advertisement.position)}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(advertisement.target_url)}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(advertisement.start_date)}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(advertisement.end_date)}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$I, {
                status: advertisement.is_active
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="relative flex gap-x-5 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route(
                  "dashboard.advertisements.edit",
                  advertisement.id
                ),
                class: "text-indigo-600 hover:text-indigo-900"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Edit <span class="sr-only"${_scopeId2}>, ${ssrInterpolate(advertisement.title)}</span>`);
                  } else {
                    return [
                      createTextVNode(" Edit "),
                      createVNode("span", { class: "sr-only" }, ", " + toDisplayString(advertisement.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button class="text-red-600 hover:text-red-900"${_scopeId}> Delete <span class="sr-only"${_scopeId}>, ${ssrInterpolate(advertisement.title)}</span></button></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
            if (__props.advertisements.meta.last_page > 1) {
              _push2(ssrRenderComponent(_sfc_main$J, {
                meta: __props.advertisements.meta
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("div", { class: "sm:flex sm:items-center sm:justify-between" }, [
                        createVNode("div", { class: "max-w-sm sm:flex-auto" }, [
                          createVNode(_sfc_main$Z, {
                            placeholder: "Search advertisement...",
                            id: "name",
                            type: "text",
                            class: "mt-1 block w-full",
                            autofocus: ""
                          })
                        ]),
                        createVNode("div", { class: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none" }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("dashboard.advertisements.create")
                          }, {
                            default: withCtx(() => [
                              createVNode(PrimaryButton, null, {
                                default: withCtx(() => [
                                  createTextVNode("Add New")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ]),
                      createVNode("div", { class: "mt-8 flow-root" }, [
                        createVNode("div", { class: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                          createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                            createVNode("table", { class: "min-w-full divide-y divide-gray-300" }, [
                              createVNode("thead", null, [
                                createVNode("tr", null, [
                                  createVNode("th", {
                                    scope: "col",
                                    class: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                  }, " Title "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  }, " Position "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  }, " Target URL "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  }, " Start Date "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  }, " End Date "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  }, " Status "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "relative py-3.5 pl-3 pr-4 sm:pr-0"
                                  }, [
                                    createVNode("span", { class: "sr-only" }, "Edit")
                                  ])
                                ])
                              ]),
                              createVNode("tbody", { class: "divide-y divide-gray-200" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.advertisements.data, (advertisement) => {
                                  return openBlock(), createBlock("tr", {
                                    key: advertisement.id
                                  }, [
                                    createVNode("td", { class: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0" }, toDisplayString(advertisement.title), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, toDisplayString(advertisement.position), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, toDisplayString(advertisement.target_url), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, toDisplayString(advertisement.start_date), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, toDisplayString(advertisement.end_date), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, [
                                      createVNode(_sfc_main$I, {
                                        status: advertisement.is_active
                                      }, null, 8, ["status"])
                                    ]),
                                    createVNode("td", { class: "relative flex gap-x-5 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0" }, [
                                      createVNode(unref(Link), {
                                        href: _ctx.route(
                                          "dashboard.advertisements.edit",
                                          advertisement.id
                                        ),
                                        class: "text-indigo-600 hover:text-indigo-900"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Edit "),
                                          createVNode("span", { class: "sr-only" }, ", " + toDisplayString(advertisement.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["href"]),
                                      createVNode("button", {
                                        class: "text-red-600 hover:text-red-900",
                                        onClick: ($event) => handleDelete(advertisement)
                                      }, [
                                        createTextVNode(" Delete "),
                                        createVNode("span", { class: "sr-only" }, ", " + toDisplayString(advertisement.title), 1)
                                      ], 8, ["onClick"])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      __props.advertisements.meta.last_page > 1 ? (openBlock(), createBlock(_sfc_main$J, {
                        key: 0,
                        meta: __props.advertisements.meta
                      }, null, 8, ["meta"])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Advertisement/Index.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$H
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    const form = useForm({
      name: "",
      slug: ""
    });
    const submit = () => {
      form.post(route("dashboard.categories.store"));
    };
    watch(form, () => {
      form.slug = form.name.toLowerCase().replace(/ /g, "-");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create Category" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Create Category </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Create Category ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><form class="max-w-xl space-y-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "slug",
              value: "Slug"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "slug",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).slug,
              "onUpdate:modelValue": ($event) => unref(form).slug = $event,
              readonly: "",
              autocomplete: "slug"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.slug
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "max-w-xl space-y-4"
                      }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "name",
                            value: "Name"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "name",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            autofocus: "",
                            autocomplete: "name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.name
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "slug",
                            value: "Slug"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "slug",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).slug,
                            "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                            readonly: "",
                            autocomplete: "slug"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.slug
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4 flex items-center" }, [
                          createVNode(PrimaryButton, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Category/Create.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$G
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$F = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    category: Object
  },
  setup(__props) {
    const form = useForm({
      name: __props.category.name,
      slug: __props.category.slug
    });
    const submit = () => {
      form.patch(route("dashboard.categories.update", __props.category.id));
    };
    watch(form, () => {
      form.slug = form.name.toLowerCase().replace(/ /g, "-");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Category" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Edit Category </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Edit Category ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><form class="max-w-xl space-y-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "slug",
              value: "Slug"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "slug",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).slug,
              "onUpdate:modelValue": ($event) => unref(form).slug = $event,
              autofocus: "",
              readonly: "",
              autocomplete: "slug"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.slug
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update `);
                } else {
                  return [
                    createTextVNode(" Update ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "max-w-xl space-y-4"
                      }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "name",
                            value: "Name"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "name",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            autofocus: "",
                            autocomplete: "name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.name
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "slug",
                            value: "Slug"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "slug",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).slug,
                            "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                            autofocus: "",
                            readonly: "",
                            autocomplete: "slug"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.slug
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4 flex items-center" }, [
                          createVNode(PrimaryButton, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Update ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Category/Edit.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$F
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    const handleDelete = (category) => {
      const confirm = window.confirm("Are you sure you want to delete this category?");
      if (confirm) {
        router.delete(route("dashboard.categories.delete", category));
      }
    };
    const handleEnable = (category) => {
      const confirm = window.confirm("Are you sure you want to enable this category?");
      if (confirm) {
        router.patch(route("dashboard.categories.enable", category));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Categories" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Categories </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Categories ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><div class="sm:flex sm:items-center sm:justify-between"${_scopeId}><div class="max-w-sm sm:flex-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$Z, {
              placeholder: "Search category...",
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("dashboard.categories.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(PrimaryButton, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Add New`);
                      } else {
                        return [
                          createTextVNode("Add New")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(PrimaryButton, null, {
                      default: withCtx(() => [
                        createTextVNode("Add New")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-8 flow-root"${_scopeId}><div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId}><div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"${_scopeId}><table class="min-w-full divide-y divide-gray-300"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"${_scopeId}> Name </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"${_scopeId}> Slug </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"${_scopeId}> Status </th><th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0"${_scopeId}><span class="sr-only"${_scopeId}>Edit</span></th></tr></thead><tbody class="divide-y divide-gray-200"${_scopeId}><!--[-->`);
            ssrRenderList(__props.categories.data, (category) => {
              _push2(`<tr${_scopeId}><td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"${_scopeId}>${ssrInterpolate(category.name)}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(category.slug)}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$I, {
                status: category.record_status
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="relative flex gap-x-5 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route(
                  "dashboard.categories.edit",
                  category.id
                ),
                class: "text-indigo-600 hover:text-indigo-900"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Edit <span class="sr-only"${_scopeId2}>, ${ssrInterpolate(category.name)}</span>`);
                  } else {
                    return [
                      createTextVNode(" Edit "),
                      createVNode("span", { class: "sr-only" }, ", " + toDisplayString(category.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (category.record_status) {
                _push2(`<button href="#" class="text-red-600 hover:text-red-900"${_scopeId}> Delete <span class="sr-only"${_scopeId}>, ${ssrInterpolate(category.name)}</span></button>`);
              } else {
                _push2(`<button href="#" class="text-cyan-600 hover:text-cyan-900"${_scopeId}> Enable <span class="sr-only"${_scopeId}>${ssrInterpolate(category.name)}</span></button>`);
              }
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
            if (__props.categories.meta.last_page > 1) {
              _push2(ssrRenderComponent(_sfc_main$J, {
                meta: __props.categories.meta
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("div", { class: "sm:flex sm:items-center sm:justify-between" }, [
                        createVNode("div", { class: "max-w-sm sm:flex-auto" }, [
                          createVNode(_sfc_main$Z, {
                            placeholder: "Search category...",
                            id: "name",
                            type: "text",
                            class: "mt-1 block w-full",
                            autofocus: ""
                          })
                        ]),
                        createVNode("div", { class: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none" }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("dashboard.categories.create")
                          }, {
                            default: withCtx(() => [
                              createVNode(PrimaryButton, null, {
                                default: withCtx(() => [
                                  createTextVNode("Add New")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ]),
                      createVNode("div", { class: "mt-8 flow-root" }, [
                        createVNode("div", { class: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                          createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                            createVNode("table", { class: "min-w-full divide-y divide-gray-300" }, [
                              createVNode("thead", null, [
                                createVNode("tr", null, [
                                  createVNode("th", {
                                    scope: "col",
                                    class: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                  }, " Name "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  }, " Slug "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  }, " Status "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "relative py-3.5 pl-3 pr-4 sm:pr-0"
                                  }, [
                                    createVNode("span", { class: "sr-only" }, "Edit")
                                  ])
                                ])
                              ]),
                              createVNode("tbody", { class: "divide-y divide-gray-200" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.categories.data, (category) => {
                                  return openBlock(), createBlock("tr", {
                                    key: category.id
                                  }, [
                                    createVNode("td", { class: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0" }, toDisplayString(category.name), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, toDisplayString(category.slug), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, [
                                      createVNode(_sfc_main$I, {
                                        status: category.record_status
                                      }, null, 8, ["status"])
                                    ]),
                                    createVNode("td", { class: "relative flex gap-x-5 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0" }, [
                                      createVNode(unref(Link), {
                                        href: _ctx.route(
                                          "dashboard.categories.edit",
                                          category.id
                                        ),
                                        class: "text-indigo-600 hover:text-indigo-900"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Edit "),
                                          createVNode("span", { class: "sr-only" }, ", " + toDisplayString(category.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["href"]),
                                      category.record_status ? (openBlock(), createBlock("button", {
                                        key: 0,
                                        href: "#",
                                        class: "text-red-600 hover:text-red-900",
                                        onClick: ($event) => handleDelete(category)
                                      }, [
                                        createTextVNode(" Delete "),
                                        createVNode("span", { class: "sr-only" }, ", " + toDisplayString(category.name), 1)
                                      ], 8, ["onClick"])) : (openBlock(), createBlock("button", {
                                        key: 1,
                                        href: "#",
                                        class: "text-cyan-600 hover:text-cyan-900",
                                        onClick: ($event) => handleEnable(category)
                                      }, [
                                        createTextVNode(" Enable "),
                                        createVNode("span", { class: "sr-only" }, toDisplayString(category.name), 1)
                                      ], 8, ["onClick"]))
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      __props.categories.meta.last_page > 1 ? (openBlock(), createBlock(_sfc_main$J, {
                        key: 0,
                        meta: __props.categories.meta
                      }, null, 8, ["meta"])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Category/Index.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$E
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {
  __name: "TiptapEditor",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: "<p>Tulis Detail Artikel Disini...</p>"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editor = ref(null);
    watch(() => props.modelValue, (value) => {
      const isSame = editor.value.getHTML() === value;
      if (isSame) {
        return;
      }
      editor.value.commands.setContent(value, false);
    });
    onMounted(() => {
      editor.value = new Editor({
        extensions: [
          StarterKit,
          Link$1.configure({
            openOnClick: false,
            defaultProtocol: "https"
          })
        ],
        content: props.modelValue,
        onUpdate: () => {
          emit("update:modelValue", editor.value.getHTML());
        }
      });
    });
    onBeforeUnmount(() => {
      editor.value.destroy();
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (editor.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container border rounded-lg p-3" }, _attrs))}><div class="border-b pb-2 flex flex-wrap gap-x-5 gap-y-2"><button type="button"${ssrIncludeBooleanAttr(!editor.value.can().chain().focus().toggleBold().run()) ? " disabled" : ""} class="${ssrRenderClass({ "is-active": editor.value.isActive("bold") })}">`);
        _push(ssrRenderComponent(unref(BoldIcon), { class: "size-4" }, null, _parent));
        _push(`</button><button type="button"${ssrIncludeBooleanAttr(!editor.value.can().chain().focus().toggleItalic().run()) ? " disabled" : ""} class="${ssrRenderClass({ "is-active": editor.value.isActive("italic") })}">`);
        _push(ssrRenderComponent(unref(ItalicIcon), { class: "size-4" }, null, _parent));
        _push(`</button><button type="button"${ssrIncludeBooleanAttr(!editor.value.can().chain().focus().toggleStrike().run()) ? " disabled" : ""} class="${ssrRenderClass({ "is-active": editor.value.isActive("strike") })}">`);
        _push(ssrRenderComponent(unref(StrikethroughIcon), { class: "size-4" }, null, _parent));
        _push(`</button><button type="button" class="${ssrRenderClass({ "is-active": editor.value.isActive("heading", { level: 1 }) })}">`);
        _push(ssrRenderComponent(unref(H1Icon), { class: "size-4" }, null, _parent));
        _push(`</button><button type="button" class="${ssrRenderClass({ "is-active": editor.value.isActive("heading", { level: 2 }) })}">`);
        _push(ssrRenderComponent(unref(H2Icon), { class: "size-4" }, null, _parent));
        _push(`</button><button type="button" class="${ssrRenderClass({ "is-active": editor.value.isActive("heading", { level: 3 }) })}">`);
        _push(ssrRenderComponent(unref(H3Icon), { class: "size-4" }, null, _parent));
        _push(`</button><button type="button" class="${ssrRenderClass({ "is-active": editor.value.isActive("bulletList") })}">`);
        _push(ssrRenderComponent(unref(ListBulletIcon), { class: "size-4" }, null, _parent));
        _push(`</button><button type="button" class="${ssrRenderClass({ "is-active": editor.value.isActive("orderedList") })}">`);
        _push(ssrRenderComponent(unref(NumberedListIcon), { class: "size-4" }, null, _parent));
        _push(`</button><button type="button" class="${ssrRenderClass({ "is-active": editor.value.isActive("link") })}">`);
        _push(ssrRenderComponent(unref(LinkIcon), { class: "size-4" }, null, _parent));
        _push(`</button><button${ssrIncludeBooleanAttr(!editor.value.isActive("link")) ? " disabled" : ""}>`);
        _push(ssrRenderComponent(unref(LinkSlashIcon), { class: "size-4" }, null, _parent));
        _push(`</button><button type="button" class="${ssrRenderClass({ "is-active": editor.value.isActive("blockquote") })}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-quote size-4"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 12a2 2 0 0 0 2-2V8H8"></path><path d="M14 12a2 2 0 0 0 2-2V8h-2"></path></svg></button><button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-between-horizontal-start size-4"><rect width="13" height="7" x="8" y="3" rx="1"></rect><path d="m2 9 3 3-3 3"></path><rect width="13" height="7" x="8" y="14" rx="1"></rect></svg></button></div><div class="bg-gray-50 rounded min-h-16 px-2 -mt-1">`);
        _push(ssrRenderComponent(unref(EditorContent), { editor: editor.value }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TiptapEditor.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = {
  __name: "Editor",
  __ssrInlineRender: true,
  props: {
    initialContent: String
  },
  emits: ["updateContent"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const content = ref(__props.initialContent);
    watch(content, () => {
      emit("updateContent", content.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$D, mergeProps({
        modelValue: content.value,
        "onUpdate:modelValue": ($event) => content.value = $event
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Editor.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const generateSlug = (text) => {
  return text.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
};
const getAppName = () => {
  const appName = "wartabengkulu.co";
  return appName;
};
const getSeoTitle = (title) => {
  return title ? `${title} | ${getAppName()}` : `${getAppName()} | Berita Bengkulu Hari Ini`;
};
const getAppUrl = () => {
  return "http://carokito.test";
};
const _sfc_main$B = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    const query = ref("");
    const filteredCategories = computed(
      () => query.value === "" ? __props.categories : __props.categories.filter((category) => {
        return category.name.toLowerCase().includes(query.value.toLowerCase());
      })
    );
    const form = useForm({
      title: "",
      slug: "",
      category: null,
      content: null,
      coverImage: null,
      seo_description: ""
    });
    const submit = () => {
      const { title, slug, category, content, coverImage, ...seoValues } = form;
      router.post(route("dashboard.posts.store"), {
        title,
        slug,
        categoryId: category.id,
        content,
        coverImage,
        ...seoValues
      });
    };
    watch(form, () => {
      form.slug = generateSlug(form.title);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create Category" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Write a Post </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Write a Post ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><form class="space-y-4 max-w-2xl" enctype="multipart/form-data"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "title",
              value: "Title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "title",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).title,
              "onUpdate:modelValue": ($event) => unref(form).title = $event,
              autofocus: "",
              autocomplete: "title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.title
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "slug",
              value: "Slug"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "slug",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).slug,
              "onUpdate:modelValue": ($event) => unref(form).slug = $event,
              autofocus: "",
              readonly: "",
              autocomplete: "slug"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.slug
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Combobox), {
              as: "div",
              modelValue: unref(form).category,
              "onUpdate:modelValue": [($event) => unref(form).category = $event, ($event) => query.value = ""]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxLabel), { class: "block text-sm/6 font-medium text-gray-900" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Category `);
                      } else {
                        return [
                          createTextVNode(" Category ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(ComboboxInput), {
                    class: "block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                    onChange: ($event) => query.value = $event.target.value,
                    onBlur: ($event) => query.value = "",
                    "display-value": (category) => category == null ? void 0 : category.name
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ComboboxButton), { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ChevronUpDownIcon), {
                          class: "size-5 text-gray-400",
                          "aria-hidden": "true"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ChevronUpDownIcon), {
                            class: "size-5 text-gray-400",
                            "aria-hidden": "true"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (filteredCategories.value.length > 0) {
                    _push3(ssrRenderComponent(unref(ComboboxOptions), { class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(filteredCategories.value, (category) => {
                            _push4(ssrRenderComponent(unref(ComboboxOption), {
                              key: category.id,
                              value: category,
                              as: "template"
                            }, {
                              default: withCtx(({ active, selected }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<li class="${ssrRenderClass(["relative cursor-default select-none py-2 pl-3 pr-9", active ? "bg-indigo-600 text-white outline-none" : "text-gray-900"])}"${_scopeId4}><span class="${ssrRenderClass(["block truncate", selected && "font-semibold"])}"${_scopeId4}>${ssrInterpolate(category.name)}</span>`);
                                  if (selected) {
                                    _push5(`<span class="${ssrRenderClass(["absolute inset-y-0 right-0 flex items-center pr-4", active ? "text-white" : "text-indigo-600"])}"${_scopeId4}>`);
                                    _push5(ssrRenderComponent(unref(CheckIcon), {
                                      class: "size-5",
                                      "aria-hidden": "true"
                                    }, null, _parent5, _scopeId4));
                                    _push5(`</span>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</li>`);
                                } else {
                                  return [
                                    createVNode("li", {
                                      class: ["relative cursor-default select-none py-2 pl-3 pr-9", active ? "bg-indigo-600 text-white outline-none" : "text-gray-900"]
                                    }, [
                                      createVNode("span", {
                                        class: ["block truncate", selected && "font-semibold"]
                                      }, toDisplayString(category.name), 3),
                                      selected ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: ["absolute inset-y-0 right-0 flex items-center pr-4", active ? "text-white" : "text-indigo-600"]
                                      }, [
                                        createVNode(unref(CheckIcon), {
                                          class: "size-5",
                                          "aria-hidden": "true"
                                        })
                                      ], 2)) : createCommentVNode("", true)
                                    ], 2)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(filteredCategories.value, (category) => {
                              return openBlock(), createBlock(unref(ComboboxOption), {
                                key: category.id,
                                value: category,
                                as: "template"
                              }, {
                                default: withCtx(({ active, selected }) => [
                                  createVNode("li", {
                                    class: ["relative cursor-default select-none py-2 pl-3 pr-9", active ? "bg-indigo-600 text-white outline-none" : "text-gray-900"]
                                  }, [
                                    createVNode("span", {
                                      class: ["block truncate", selected && "font-semibold"]
                                    }, toDisplayString(category.name), 3),
                                    selected ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: ["absolute inset-y-0 right-0 flex items-center pr-4", active ? "text-white" : "text-indigo-600"]
                                    }, [
                                      createVNode(unref(CheckIcon), {
                                        class: "size-5",
                                        "aria-hidden": "true"
                                      })
                                    ], 2)) : createCommentVNode("", true)
                                  ], 2)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(unref(ComboboxLabel), { class: "block text-sm/6 font-medium text-gray-900" }, {
                      default: withCtx(() => [
                        createTextVNode(" Category ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "relative" }, [
                      createVNode(unref(ComboboxInput), {
                        class: "block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                        onChange: ($event) => query.value = $event.target.value,
                        onBlur: ($event) => query.value = "",
                        "display-value": (category) => category == null ? void 0 : category.name
                      }, null, 8, ["onChange", "onBlur", "display-value"]),
                      createVNode(unref(ComboboxButton), { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, {
                        default: withCtx(() => [
                          createVNode(unref(ChevronUpDownIcon), {
                            class: "size-5 text-gray-400",
                            "aria-hidden": "true"
                          })
                        ]),
                        _: 1
                      }),
                      filteredCategories.value.length > 0 ? (openBlock(), createBlock(unref(ComboboxOptions), {
                        key: 0,
                        class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredCategories.value, (category) => {
                            return openBlock(), createBlock(unref(ComboboxOption), {
                              key: category.id,
                              value: category,
                              as: "template"
                            }, {
                              default: withCtx(({ active, selected }) => [
                                createVNode("li", {
                                  class: ["relative cursor-default select-none py-2 pl-3 pr-9", active ? "bg-indigo-600 text-white outline-none" : "text-gray-900"]
                                }, [
                                  createVNode("span", {
                                    class: ["block truncate", selected && "font-semibold"]
                                  }, toDisplayString(category.name), 3),
                                  selected ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ["absolute inset-y-0 right-0 flex items-center pr-4", active ? "text-white" : "text-indigo-600"]
                                  }, [
                                    createVNode(unref(CheckIcon), {
                                      class: "size-5",
                                      "aria-hidden": "true"
                                    })
                                  ], 2)) : createCommentVNode("", true)
                                ], 2)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.slug
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "content",
              value: "Content"
            }, null, _parent2, _scopeId));
            _push2(`<article class="prose"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              onUpdateContent: ($event) => unref(form).content = $event
            }, null, _parent2, _scopeId));
            _push2(`</article>`);
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.content
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "coverImage",
              value: "Image Cover"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "title",
              type: "file",
              class: "mt-1 block w-full",
              onInput: ($event) => unref(form).coverImage = $event.target.files[0],
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.coverImage
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h2 class="font-semibold"${_scopeId}>SEO Tags (Opsional)</h2><div class="space-y-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "seo_description",
              value: "SEO Description"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "seo_description",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).seo_description,
              "onUpdate:modelValue": ($event) => unref(form).seo_description = $event,
              autofocus: "",
              autocomplete: "seo_description"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.seo_description
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="mt-4 flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing,
              type: "submit"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "space-y-4 max-w-2xl",
                        enctype: "multipart/form-data"
                      }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "title",
                            value: "Title"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "title",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).title,
                            "onUpdate:modelValue": ($event) => unref(form).title = $event,
                            autofocus: "",
                            autocomplete: "title"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.title
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "slug",
                            value: "Slug"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "slug",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).slug,
                            "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                            autofocus: "",
                            readonly: "",
                            autocomplete: "slug"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.slug
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(unref(Combobox), {
                            as: "div",
                            modelValue: unref(form).category,
                            "onUpdate:modelValue": [($event) => unref(form).category = $event, ($event) => query.value = ""]
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ComboboxLabel), { class: "block text-sm/6 font-medium text-gray-900" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Category ")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "relative" }, [
                                createVNode(unref(ComboboxInput), {
                                  class: "block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                                  onChange: ($event) => query.value = $event.target.value,
                                  onBlur: ($event) => query.value = "",
                                  "display-value": (category) => category == null ? void 0 : category.name
                                }, null, 8, ["onChange", "onBlur", "display-value"]),
                                createVNode(unref(ComboboxButton), { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ChevronUpDownIcon), {
                                      class: "size-5 text-gray-400",
                                      "aria-hidden": "true"
                                    })
                                  ]),
                                  _: 1
                                }),
                                filteredCategories.value.length > 0 ? (openBlock(), createBlock(unref(ComboboxOptions), {
                                  key: 0,
                                  class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredCategories.value, (category) => {
                                      return openBlock(), createBlock(unref(ComboboxOption), {
                                        key: category.id,
                                        value: category,
                                        as: "template"
                                      }, {
                                        default: withCtx(({ active, selected }) => [
                                          createVNode("li", {
                                            class: ["relative cursor-default select-none py-2 pl-3 pr-9", active ? "bg-indigo-600 text-white outline-none" : "text-gray-900"]
                                          }, [
                                            createVNode("span", {
                                              class: ["block truncate", selected && "font-semibold"]
                                            }, toDisplayString(category.name), 3),
                                            selected ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: ["absolute inset-y-0 right-0 flex items-center pr-4", active ? "text-white" : "text-indigo-600"]
                                            }, [
                                              createVNode(unref(CheckIcon), {
                                                class: "size-5",
                                                "aria-hidden": "true"
                                              })
                                            ], 2)) : createCommentVNode("", true)
                                          ], 2)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.slug
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "content",
                            value: "Content"
                          }),
                          createVNode("article", { class: "prose" }, [
                            createVNode(_sfc_main$C, {
                              onUpdateContent: ($event) => unref(form).content = $event
                            }, null, 8, ["onUpdateContent"])
                          ]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.content
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "coverImage",
                            value: "Image Cover"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "title",
                            type: "file",
                            class: "mt-1 block w-full",
                            onInput: ($event) => unref(form).coverImage = $event.target.files[0],
                            autofocus: ""
                          }, null, 8, ["onInput"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.coverImage
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode("h2", { class: "font-semibold" }, "SEO Tags (Opsional)"),
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", null, [
                              createVNode(_sfc_main$$, {
                                for: "seo_description",
                                value: "SEO Description"
                              }),
                              createVNode(_sfc_main$Z, {
                                id: "seo_description",
                                type: "text",
                                class: "mt-1 block w-full",
                                modelValue: unref(form).seo_description,
                                "onUpdate:modelValue": ($event) => unref(form).seo_description = $event,
                                autofocus: "",
                                autocomplete: "seo_description"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_sfc_main$10, {
                                class: "mt-2",
                                message: unref(form).errors.seo_description
                              }, null, 8, ["message"])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "mt-4 flex items-center" }, [
                          createVNode(PrimaryButton, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing,
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Post/Create.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$B
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    categories: Array,
    post: Object
  },
  setup(__props) {
    const selectedCategory = __props.categories.find((e) => e.id === __props.post.category_id);
    const query = ref("");
    const filteredCategories = computed(
      () => query.value === "" ? __props.categories : __props.categories.filter((category) => {
        return category.name.toLowerCase().includes(query.value.toLowerCase());
      })
    );
    const form = useForm({
      title: __props.post.title,
      slug: __props.post.slug,
      category: selectedCategory,
      content: __props.post.content,
      coverImage: null,
      seo_description: __props.post.seo_description
    });
    const submit = () => {
      const { title, slug, category, content, coverImage, ...seoValues } = form;
      router.post(route("dashboard.posts.update", __props.post), {
        _method: "patch",
        title,
        slug,
        categoryId: category.id,
        content,
        coverImage,
        ...seoValues
      });
    };
    watch(form, () => {
      form.slug = form.title.toLowerCase().replace(/ /g, "-");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create Category" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Write a Post </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Write a Post ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900 grid grid-cols-2 gap-5"${_scopeId}><form class="space-y-4 max-w-2xl" enctype="multipart/form-data"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "title",
              value: "Title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "title",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).title,
              "onUpdate:modelValue": ($event) => unref(form).title = $event,
              autofocus: "",
              autocomplete: "title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.title
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "slug",
              value: "Slug"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "slug",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).slug,
              "onUpdate:modelValue": ($event) => unref(form).slug = $event,
              autofocus: "",
              readonly: "",
              autocomplete: "slug"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.slug
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Combobox), {
              as: "div",
              modelValue: unref(form).category,
              "onUpdate:modelValue": [($event) => unref(form).category = $event, ($event) => query.value = ""]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxLabel), { class: "block text-sm/6 font-medium text-gray-900" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Category `);
                      } else {
                        return [
                          createTextVNode(" Category ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(ComboboxInput), {
                    class: "block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                    onChange: ($event) => query.value = $event.target.value,
                    onBlur: ($event) => query.value = "",
                    "display-value": (category) => category == null ? void 0 : category.name
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ComboboxButton), { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ChevronUpDownIcon), {
                          class: "size-5 text-gray-400",
                          "aria-hidden": "true"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ChevronUpDownIcon), {
                            class: "size-5 text-gray-400",
                            "aria-hidden": "true"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (filteredCategories.value.length > 0) {
                    _push3(ssrRenderComponent(unref(ComboboxOptions), { class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(filteredCategories.value, (category) => {
                            _push4(ssrRenderComponent(unref(ComboboxOption), {
                              key: category.id,
                              value: category,
                              as: "template"
                            }, {
                              default: withCtx(({ active, selected }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<li class="${ssrRenderClass(["relative cursor-default select-none py-2 pl-3 pr-9", active ? "bg-indigo-600 text-white outline-none" : "text-gray-900"])}"${_scopeId4}><span class="${ssrRenderClass(["block truncate", selected && "font-semibold"])}"${_scopeId4}>${ssrInterpolate(category.name)}</span>`);
                                  if (selected) {
                                    _push5(`<span class="${ssrRenderClass(["absolute inset-y-0 right-0 flex items-center pr-4", active ? "text-white" : "text-indigo-600"])}"${_scopeId4}>`);
                                    _push5(ssrRenderComponent(unref(CheckIcon), {
                                      class: "size-5",
                                      "aria-hidden": "true"
                                    }, null, _parent5, _scopeId4));
                                    _push5(`</span>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</li>`);
                                } else {
                                  return [
                                    createVNode("li", {
                                      class: ["relative cursor-default select-none py-2 pl-3 pr-9", active ? "bg-indigo-600 text-white outline-none" : "text-gray-900"]
                                    }, [
                                      createVNode("span", {
                                        class: ["block truncate", selected && "font-semibold"]
                                      }, toDisplayString(category.name), 3),
                                      selected ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: ["absolute inset-y-0 right-0 flex items-center pr-4", active ? "text-white" : "text-indigo-600"]
                                      }, [
                                        createVNode(unref(CheckIcon), {
                                          class: "size-5",
                                          "aria-hidden": "true"
                                        })
                                      ], 2)) : createCommentVNode("", true)
                                    ], 2)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(filteredCategories.value, (category) => {
                              return openBlock(), createBlock(unref(ComboboxOption), {
                                key: category.id,
                                value: category,
                                as: "template"
                              }, {
                                default: withCtx(({ active, selected }) => [
                                  createVNode("li", {
                                    class: ["relative cursor-default select-none py-2 pl-3 pr-9", active ? "bg-indigo-600 text-white outline-none" : "text-gray-900"]
                                  }, [
                                    createVNode("span", {
                                      class: ["block truncate", selected && "font-semibold"]
                                    }, toDisplayString(category.name), 3),
                                    selected ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: ["absolute inset-y-0 right-0 flex items-center pr-4", active ? "text-white" : "text-indigo-600"]
                                    }, [
                                      createVNode(unref(CheckIcon), {
                                        class: "size-5",
                                        "aria-hidden": "true"
                                      })
                                    ], 2)) : createCommentVNode("", true)
                                  ], 2)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(unref(ComboboxLabel), { class: "block text-sm/6 font-medium text-gray-900" }, {
                      default: withCtx(() => [
                        createTextVNode(" Category ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "relative" }, [
                      createVNode(unref(ComboboxInput), {
                        class: "block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                        onChange: ($event) => query.value = $event.target.value,
                        onBlur: ($event) => query.value = "",
                        "display-value": (category) => category == null ? void 0 : category.name
                      }, null, 8, ["onChange", "onBlur", "display-value"]),
                      createVNode(unref(ComboboxButton), { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, {
                        default: withCtx(() => [
                          createVNode(unref(ChevronUpDownIcon), {
                            class: "size-5 text-gray-400",
                            "aria-hidden": "true"
                          })
                        ]),
                        _: 1
                      }),
                      filteredCategories.value.length > 0 ? (openBlock(), createBlock(unref(ComboboxOptions), {
                        key: 0,
                        class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredCategories.value, (category) => {
                            return openBlock(), createBlock(unref(ComboboxOption), {
                              key: category.id,
                              value: category,
                              as: "template"
                            }, {
                              default: withCtx(({ active, selected }) => [
                                createVNode("li", {
                                  class: ["relative cursor-default select-none py-2 pl-3 pr-9", active ? "bg-indigo-600 text-white outline-none" : "text-gray-900"]
                                }, [
                                  createVNode("span", {
                                    class: ["block truncate", selected && "font-semibold"]
                                  }, toDisplayString(category.name), 3),
                                  selected ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ["absolute inset-y-0 right-0 flex items-center pr-4", active ? "text-white" : "text-indigo-600"]
                                  }, [
                                    createVNode(unref(CheckIcon), {
                                      class: "size-5",
                                      "aria-hidden": "true"
                                    })
                                  ], 2)) : createCommentVNode("", true)
                                ], 2)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.slug
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "content",
              value: "Content"
            }, null, _parent2, _scopeId));
            _push2(`<article class="prose"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              onUpdateContent: ($event) => unref(form).content = $event,
              "initial-content": unref(form).content
            }, null, _parent2, _scopeId));
            _push2(`</article>`);
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.content
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "coverImage",
              value: "Image Cover"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "title",
              type: "file",
              class: "mt-1 block w-full",
              onInput: ($event) => unref(form).coverImage = $event.target.files[0],
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.coverImage
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h2 class="font-semibold"${_scopeId}>SEO Tags (Opsional)</h2><div class="space-y-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "seo_description",
              value: "SEO Description"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "seo_description",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).seo_description,
              "onUpdate:modelValue": ($event) => unref(form).seo_description = $event,
              autofocus: "",
              autocomplete: "seo_description"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.seo_description
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="mt-4 flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing,
              type: "submit"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update `);
                } else {
                  return [
                    createTextVNode(" Update ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
            if (!!__props.post.cover_image_url) {
              _push2(`<div${_scopeId}><div class="mb-1"${_scopeId}>Cover Image</div><img${ssrRenderAttr("src", __props.post.cover_image_url)}${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900 grid grid-cols-2 gap-5" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "space-y-4 max-w-2xl",
                        enctype: "multipart/form-data"
                      }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "title",
                            value: "Title"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "title",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).title,
                            "onUpdate:modelValue": ($event) => unref(form).title = $event,
                            autofocus: "",
                            autocomplete: "title"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.title
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "slug",
                            value: "Slug"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "slug",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).slug,
                            "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                            autofocus: "",
                            readonly: "",
                            autocomplete: "slug"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.slug
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(unref(Combobox), {
                            as: "div",
                            modelValue: unref(form).category,
                            "onUpdate:modelValue": [($event) => unref(form).category = $event, ($event) => query.value = ""]
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ComboboxLabel), { class: "block text-sm/6 font-medium text-gray-900" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Category ")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "relative" }, [
                                createVNode(unref(ComboboxInput), {
                                  class: "block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                                  onChange: ($event) => query.value = $event.target.value,
                                  onBlur: ($event) => query.value = "",
                                  "display-value": (category) => category == null ? void 0 : category.name
                                }, null, 8, ["onChange", "onBlur", "display-value"]),
                                createVNode(unref(ComboboxButton), { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ChevronUpDownIcon), {
                                      class: "size-5 text-gray-400",
                                      "aria-hidden": "true"
                                    })
                                  ]),
                                  _: 1
                                }),
                                filteredCategories.value.length > 0 ? (openBlock(), createBlock(unref(ComboboxOptions), {
                                  key: 0,
                                  class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredCategories.value, (category) => {
                                      return openBlock(), createBlock(unref(ComboboxOption), {
                                        key: category.id,
                                        value: category,
                                        as: "template"
                                      }, {
                                        default: withCtx(({ active, selected }) => [
                                          createVNode("li", {
                                            class: ["relative cursor-default select-none py-2 pl-3 pr-9", active ? "bg-indigo-600 text-white outline-none" : "text-gray-900"]
                                          }, [
                                            createVNode("span", {
                                              class: ["block truncate", selected && "font-semibold"]
                                            }, toDisplayString(category.name), 3),
                                            selected ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: ["absolute inset-y-0 right-0 flex items-center pr-4", active ? "text-white" : "text-indigo-600"]
                                            }, [
                                              createVNode(unref(CheckIcon), {
                                                class: "size-5",
                                                "aria-hidden": "true"
                                              })
                                            ], 2)) : createCommentVNode("", true)
                                          ], 2)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.slug
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "content",
                            value: "Content"
                          }),
                          createVNode("article", { class: "prose" }, [
                            createVNode(_sfc_main$C, {
                              onUpdateContent: ($event) => unref(form).content = $event,
                              "initial-content": unref(form).content
                            }, null, 8, ["onUpdateContent", "initial-content"])
                          ]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.content
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "coverImage",
                            value: "Image Cover"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "title",
                            type: "file",
                            class: "mt-1 block w-full",
                            onInput: ($event) => unref(form).coverImage = $event.target.files[0],
                            autofocus: ""
                          }, null, 8, ["onInput"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.coverImage
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode("h2", { class: "font-semibold" }, "SEO Tags (Opsional)"),
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", null, [
                              createVNode(_sfc_main$$, {
                                for: "seo_description",
                                value: "SEO Description"
                              }),
                              createVNode(_sfc_main$Z, {
                                id: "seo_description",
                                type: "text",
                                class: "mt-1 block w-full",
                                modelValue: unref(form).seo_description,
                                "onUpdate:modelValue": ($event) => unref(form).seo_description = $event,
                                autofocus: "",
                                autocomplete: "seo_description"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_sfc_main$10, {
                                class: "mt-2",
                                message: unref(form).errors.seo_description
                              }, null, 8, ["message"])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "mt-4 flex items-center" }, [
                          createVNode(PrimaryButton, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing,
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Update ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ])
                      ], 32),
                      !!__props.post.cover_image_url ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("div", { class: "mb-1" }, "Cover Image"),
                        createVNode("img", {
                          src: __props.post.cover_image_url
                        }, null, 8, ["src"])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Post/Edit.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$A
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {
  __name: "Select",
  __ssrInlineRender: true,
  props: {
    "modelValue": {
      type: String,
      required: true
    },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<select${ssrRenderAttrs(mergeProps({ class: "border border-gray-300 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</select>`);
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Core/Select.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const _sfc_main$y = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    posts: Array
  },
  setup(__props) {
    const isFeatured = ref("");
    watch(isFeatured, (value) => {
      router.get(route("dashboard.posts.index"), { is_featured: value }, { preserveState: true, replace: true });
    });
    const handleDelete = (post) => {
      const confirm = window.confirm("Are you sure you want to delete this post?");
      if (confirm) {
        router.delete(route("dashboard.posts.destroy", post));
      }
    };
    const handlePublish = (post) => {
      const confirm = window.confirm("Are you sure you want to publish this post?");
      if (confirm) {
        router.patch(route("dashboard.posts.publish", post));
      }
    };
    const handleUnpublish = (post) => {
      const confirm = window.confirm("Are you sure you want to unpublish this post?");
      if (confirm) {
        router.patch(route("dashboard.posts.unpublish", post));
      }
    };
    const handleFeaturing = (post) => {
      const confirm = window.confirm("Are you sure you want to featuring this post?");
      if (confirm) {
        router.patch(route("dashboard.posts.featuring", post));
      }
    };
    const handleUnfeaturing = (post) => {
      const confirm = window.confirm("Are you sure you want to unfeaturing this post?");
      if (confirm) {
        router.patch(route("dashboard.posts.unfeaturing", post));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Posts" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Posts </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Posts ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><div class="sm:flex sm:items-center sm:justify-between"${_scopeId}><div class="flex gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$Z, {
              placeholder: "Search post...",
              id: "name",
              type: "text",
              class: "block w-full",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$z, {
              modelValue: isFeatured.value,
              "onUpdate:modelValue": ($event) => isFeatured.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value=""${_scopeId2}>Is Featuring?</option><option value="1"${_scopeId2}>Yes</option><option value="0"${_scopeId2}>No</option>`);
                } else {
                  return [
                    createVNode("option", { value: "" }, "Is Featuring?"),
                    createVNode("option", { value: "1" }, "Yes"),
                    createVNode("option", { value: "0" }, "No")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("dashboard.posts.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(PrimaryButton, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Write a Post`);
                      } else {
                        return [
                          createTextVNode("Write a Post")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(PrimaryButton, null, {
                      default: withCtx(() => [
                        createTextVNode("Write a Post")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-8 flow-root"${_scopeId}><div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId}><div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"${_scopeId}><table class="min-w-full divide-y divide-gray-300"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"${_scopeId}> Title </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"${_scopeId}> Slug </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"${_scopeId}> Views </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"${_scopeId}> Author </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"${_scopeId}> Is Published? </th><th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0"${_scopeId}><span class="sr-only"${_scopeId}>Actions</span></th></tr></thead><tbody class="divide-y divide-gray-200"${_scopeId}><!--[-->`);
            ssrRenderList(__props.posts.data, (post) => {
              var _a;
              _push2(`<tr${_scopeId}><td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"${_scopeId}>${ssrInterpolate(post.title)}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(post.slug)}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(post.views)}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(post.author.name)}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"${_scopeId}>`);
              if (post.is_published) {
                _push2(`<!--[--> Yes, at ${ssrInterpolate(post.published_at)} <br${_scopeId}> by: ${ssrInterpolate((_a = post.editor) == null ? void 0 : _a.name)}<!--]-->`);
              } else {
                _push2(`<!--[--> No <!--]-->`);
              }
              _push2(`</td><td class="relative flex gap-x-5 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"${_scopeId}>`);
              if (post.can.edit) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("dashboard.posts.edit", post.id),
                  class: "text-indigo-600 hover:text-indigo-900"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Edit <span class="sr-only"${_scopeId2}>${ssrInterpolate(post.name)}</span>`);
                    } else {
                      return [
                        createTextVNode(" Edit "),
                        createVNode("span", { class: "sr-only" }, toDisplayString(post.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (post.can.delete) {
                _push2(`<button class="text-red-600 hover:text-red-900"${_scopeId}> Delete <span class="sr-only"${_scopeId}>${ssrInterpolate(post.name)}</span></button>`);
              } else {
                _push2(`<!---->`);
              }
              if (post.can.featuring && post.is_published && !post.is_featured) {
                _push2(`<button class="text-indigo-600 hover:text-indigo-900"${_scopeId}> Set as Featured <span class="sr-only"${_scopeId}>${ssrInterpolate(post.name)}</span></button>`);
              } else {
                _push2(`<!---->`);
              }
              if (post.can.unfeaturing && post.is_published && post.is_featured) {
                _push2(`<button class="text-amber-600 hover:text-amber-900"${_scopeId}> Unfeatured <span class="sr-only"${_scopeId}>${ssrInterpolate(post.name)}</span></button>`);
              } else {
                _push2(`<!---->`);
              }
              if (post.can.publish) {
                _push2(`<button class="text-zinc-600 hover:text-zinc-900"${_scopeId}> Publish <span class="sr-only"${_scopeId}>${ssrInterpolate(post.name)}</span></button>`);
              } else {
                _push2(`<!---->`);
              }
              if (post.can.unpublish) {
                _push2(`<button class="text-rose-600 hover:text-rose-900"${_scopeId}> Unpublish <span class="sr-only"${_scopeId}>${ssrInterpolate(post.name)}</span></button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
            if (__props.posts.meta.last_page > 1) {
              _push2(ssrRenderComponent(_sfc_main$J, {
                meta: __props.posts.meta
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("div", { class: "sm:flex sm:items-center sm:justify-between" }, [
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_sfc_main$Z, {
                            placeholder: "Search post...",
                            id: "name",
                            type: "text",
                            class: "block w-full",
                            autofocus: ""
                          }),
                          createVNode(_sfc_main$z, {
                            modelValue: isFeatured.value,
                            "onUpdate:modelValue": ($event) => isFeatured.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode("option", { value: "" }, "Is Featuring?"),
                              createVNode("option", { value: "1" }, "Yes"),
                              createVNode("option", { value: "0" }, "No")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none" }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("dashboard.posts.create")
                          }, {
                            default: withCtx(() => [
                              createVNode(PrimaryButton, null, {
                                default: withCtx(() => [
                                  createTextVNode("Write a Post")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ]),
                      createVNode("div", { class: "mt-8 flow-root" }, [
                        createVNode("div", { class: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                          createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                            createVNode("table", { class: "min-w-full divide-y divide-gray-300" }, [
                              createVNode("thead", null, [
                                createVNode("tr", null, [
                                  createVNode("th", {
                                    scope: "col",
                                    class: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                  }, " Title "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  }, " Slug "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  }, " Views "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  }, " Author "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  }, " Is Published? "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "relative py-3.5 pl-3 pr-4 sm:pr-0"
                                  }, [
                                    createVNode("span", { class: "sr-only" }, "Actions")
                                  ])
                                ])
                              ]),
                              createVNode("tbody", { class: "divide-y divide-gray-200" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.posts.data, (post) => {
                                  var _a;
                                  return openBlock(), createBlock("tr", {
                                    key: post.id
                                  }, [
                                    createVNode("td", { class: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0" }, toDisplayString(post.title), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, toDisplayString(post.slug), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, toDisplayString(post.views), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, toDisplayString(post.author.name), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, [
                                      post.is_published ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                        createTextVNode(" Yes, at " + toDisplayString(post.published_at) + " ", 1),
                                        createVNode("br"),
                                        createTextVNode(" by: " + toDisplayString((_a = post.editor) == null ? void 0 : _a.name), 1)
                                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createTextVNode(" No ")
                                      ], 64))
                                    ]),
                                    createVNode("td", { class: "relative flex gap-x-5 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0" }, [
                                      post.can.edit ? (openBlock(), createBlock(unref(Link), {
                                        key: 0,
                                        href: _ctx.route("dashboard.posts.edit", post.id),
                                        class: "text-indigo-600 hover:text-indigo-900"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Edit "),
                                          createVNode("span", { class: "sr-only" }, toDisplayString(post.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["href"])) : createCommentVNode("", true),
                                      post.can.delete ? (openBlock(), createBlock("button", {
                                        key: 1,
                                        class: "text-red-600 hover:text-red-900",
                                        onClick: ($event) => handleDelete(post)
                                      }, [
                                        createTextVNode(" Delete "),
                                        createVNode("span", { class: "sr-only" }, toDisplayString(post.name), 1)
                                      ], 8, ["onClick"])) : createCommentVNode("", true),
                                      post.can.featuring && post.is_published && !post.is_featured ? (openBlock(), createBlock("button", {
                                        key: 2,
                                        class: "text-indigo-600 hover:text-indigo-900",
                                        onClick: ($event) => handleFeaturing(post)
                                      }, [
                                        createTextVNode(" Set as Featured "),
                                        createVNode("span", { class: "sr-only" }, toDisplayString(post.name), 1)
                                      ], 8, ["onClick"])) : createCommentVNode("", true),
                                      post.can.unfeaturing && post.is_published && post.is_featured ? (openBlock(), createBlock("button", {
                                        key: 3,
                                        class: "text-amber-600 hover:text-amber-900",
                                        onClick: ($event) => handleUnfeaturing(post)
                                      }, [
                                        createTextVNode(" Unfeatured "),
                                        createVNode("span", { class: "sr-only" }, toDisplayString(post.name), 1)
                                      ], 8, ["onClick"])) : createCommentVNode("", true),
                                      post.can.publish ? (openBlock(), createBlock("button", {
                                        key: 4,
                                        class: "text-zinc-600 hover:text-zinc-900",
                                        onClick: ($event) => handlePublish(post)
                                      }, [
                                        createTextVNode(" Publish "),
                                        createVNode("span", { class: "sr-only" }, toDisplayString(post.name), 1)
                                      ], 8, ["onClick"])) : createCommentVNode("", true),
                                      post.can.unpublish ? (openBlock(), createBlock("button", {
                                        key: 5,
                                        class: "text-rose-600 hover:text-rose-900",
                                        onClick: ($event) => handleUnpublish(post)
                                      }, [
                                        createTextVNode(" Unpublish "),
                                        createVNode("span", { class: "sr-only" }, toDisplayString(post.name), 1)
                                      ], 8, ["onClick"])) : createCommentVNode("", true)
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      __props.posts.meta.last_page > 1 ? (openBlock(), createBlock(_sfc_main$J, {
                        key: 0,
                        meta: __props.posts.meta
                      }, null, 8, ["meta"])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Post/Index.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    roles: Array
  },
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      roleId: ""
    });
    const submit = () => {
      form.post(route("dashboard.users.store"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create User" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Create User </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Create User ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><form class="max-w-xl space-y-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              autocomplete: "email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              value: "Roles",
              class: "mb-1"
            }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(__props.roles, (role) => {
              _push2(`<div class="flex items-center gap-x-1.5"${_scopeId}><input${ssrRenderAttr("id", role.id)} type="radio" name="roleId"${ssrRenderAttr("value", role.id)}${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).roleId, role.id)) ? " checked" : ""}${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$$, {
                class: "capitalize",
                for: role.id,
                value: role.name
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.roleId
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "max-w-xl space-y-4"
                      }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "name",
                            value: "Name"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "name",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            autofocus: "",
                            autocomplete: "name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.name
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "email",
                            value: "Email"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "email",
                            type: "email",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            autocomplete: "email"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.email
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "password",
                            value: "Password"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "password",
                            type: "password",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.password
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            value: "Roles",
                            class: "mb-1"
                          }),
                          createVNode("div", { class: "space-y-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
                              return openBlock(), createBlock("div", {
                                key: role.id,
                                class: "flex items-center gap-x-1.5"
                              }, [
                                withDirectives(createVNode("input", {
                                  id: role.id,
                                  type: "radio",
                                  name: "roleId",
                                  value: role.id,
                                  "onUpdate:modelValue": ($event) => unref(form).roleId = $event
                                }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                  [vModelRadio, unref(form).roleId]
                                ]),
                                createVNode(_sfc_main$$, {
                                  class: "capitalize",
                                  for: role.id,
                                  value: role.name
                                }, null, 8, ["for", "value"])
                              ]);
                            }), 128))
                          ]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.roleId
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4 flex items-center" }, [
                          createVNode(PrimaryButton, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/User/Create.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$x
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    user: Object,
    roles: Array
  },
  setup(__props) {
    const form = useForm({
      name: __props.user.name,
      email: __props.user.email,
      roleId: __props.user.roles[0].id
    });
    const submit = () => {
      form.patch(route("dashboard.users.update", __props.user));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create User" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Edit User </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Edit User ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><form class="max-w-xl space-y-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              autocomplete: "email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              value: "Roles",
              class: "mb-1"
            }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(__props.roles, (role) => {
              _push2(`<div class="flex items-center gap-x-1.5"${_scopeId}><input${ssrRenderAttr("id", role.id)} type="radio" name="roleId"${ssrRenderAttr("value", role.id)}${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).roleId, role.id)) ? " checked" : ""}${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$$, {
                class: "capitalize",
                for: role.id,
                value: role.name
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_sfc_main$10, {
              class: "mt-2",
              message: unref(form).errors.roleId
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update `);
                } else {
                  return [
                    createTextVNode(" Update ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "max-w-xl space-y-4"
                      }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "name",
                            value: "Name"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "name",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            autofocus: "",
                            autocomplete: "name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.name
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            for: "email",
                            value: "Email"
                          }),
                          createVNode(_sfc_main$Z, {
                            id: "email",
                            type: "email",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            autocomplete: "email"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.email
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$$, {
                            value: "Roles",
                            class: "mb-1"
                          }),
                          createVNode("div", { class: "space-y-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
                              return openBlock(), createBlock("div", {
                                key: role.id,
                                class: "flex items-center gap-x-1.5"
                              }, [
                                withDirectives(createVNode("input", {
                                  id: role.id,
                                  type: "radio",
                                  name: "roleId",
                                  value: role.id,
                                  "onUpdate:modelValue": ($event) => unref(form).roleId = $event
                                }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                  [vModelRadio, unref(form).roleId]
                                ]),
                                createVNode(_sfc_main$$, {
                                  class: "capitalize",
                                  for: role.id,
                                  value: role.name
                                }, null, 8, ["for", "value"])
                              ]);
                            }), 128))
                          ]),
                          createVNode(_sfc_main$10, {
                            class: "mt-2",
                            message: unref(form).errors.roleId
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4 flex items-center" }, [
                          createVNode(PrimaryButton, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Update ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/User/Edit.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$w
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    users: Array
  },
  setup(__props) {
    const handleDelete = (user) => {
      const confirm = window.confirm("Are you sure you want to delete this user?");
      if (confirm) {
        router.delete(route("dashboard.users.destroy", user));
      }
    };
    const handleRestore = (user) => {
      const confirm = window.confirm("Are you sure you want to restore this user?");
      if (confirm) {
        router.post(route("dashboard.users.restore", user));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Users" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Users </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Users ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><div class="sm:flex sm:items-center sm:justify-between"${_scopeId}><div class="max-w-sm sm:flex-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$Z, {
              placeholder: "Search user...",
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("dashboard.users.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(PrimaryButton, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Add New`);
                      } else {
                        return [
                          createTextVNode("Add New")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(PrimaryButton, null, {
                      default: withCtx(() => [
                        createTextVNode("Add New")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-8 flow-root"${_scopeId}><div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId}><div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"${_scopeId}><table class="min-w-full divide-y divide-gray-300"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"${_scopeId}> Name </th><th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"${_scopeId}> Email </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"${_scopeId}> Roles </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"${_scopeId}> Status </th><th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0"${_scopeId}><span class="sr-only"${_scopeId}>Actions</span></th></tr></thead><tbody class="divide-y divide-gray-200"${_scopeId}><!--[-->`);
            ssrRenderList(__props.users.data, (user) => {
              _push2(`<tr${_scopeId}><td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"${_scopeId}>${ssrInterpolate(user.name)}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(user.email)}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize"${_scopeId}>${ssrInterpolate(user.roles.map((role) => role.name).join(","))}</td><td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"${_scopeId}>`);
              if (user.deleted_at) {
                _push2(`<span class="text-red-500 font-bold"${_scopeId}>Deleted</span>`);
              } else {
                _push2(`<span class="text-green-500"${_scopeId}>Active</span>`);
              }
              _push2(`</td><td class="relative flex gap-x-5 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"${_scopeId}>`);
              if (!user.deleted_at) {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("dashboard.users.edit", user.id),
                  class: "text-indigo-600 hover:text-indigo-900"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Edit <span class="sr-only"${_scopeId2}>${ssrInterpolate(user.name)}</span>`);
                    } else {
                      return [
                        createTextVNode(" Edit "),
                        createVNode("span", { class: "sr-only" }, toDisplayString(user.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<button href="#" class="text-red-600 hover:text-red-900"${_scopeId}> Delete <span class="sr-only"${_scopeId}>${ssrInterpolate(user.name)}</span></button><!--]-->`);
              } else {
                _push2(`<button href="#" class="text-green-600 hover:text-green-900"${_scopeId}> Restore <span class="sr-only"${_scopeId}>${ssrInterpolate(user.name)}</span></button>`);
              }
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
            if (__props.users.meta.last_page > 1) {
              _push2(ssrRenderComponent(_sfc_main$J, {
                meta: __props.users.meta
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("div", { class: "sm:flex sm:items-center sm:justify-between" }, [
                        createVNode("div", { class: "max-w-sm sm:flex-auto" }, [
                          createVNode(_sfc_main$Z, {
                            placeholder: "Search user...",
                            id: "name",
                            type: "text",
                            class: "mt-1 block w-full",
                            autofocus: ""
                          })
                        ]),
                        createVNode("div", { class: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none" }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("dashboard.users.create")
                          }, {
                            default: withCtx(() => [
                              createVNode(PrimaryButton, null, {
                                default: withCtx(() => [
                                  createTextVNode("Add New")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ]),
                      createVNode("div", { class: "mt-8 flow-root" }, [
                        createVNode("div", { class: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                          createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                            createVNode("table", { class: "min-w-full divide-y divide-gray-300" }, [
                              createVNode("thead", null, [
                                createVNode("tr", null, [
                                  createVNode("th", {
                                    scope: "col",
                                    class: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                  }, " Name "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                  }, " Email "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  }, " Roles "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  }, " Status "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "relative py-3.5 pl-3 pr-4 sm:pr-0"
                                  }, [
                                    createVNode("span", { class: "sr-only" }, "Actions")
                                  ])
                                ])
                              ]),
                              createVNode("tbody", { class: "divide-y divide-gray-200" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (user) => {
                                  return openBlock(), createBlock("tr", {
                                    key: user.id
                                  }, [
                                    createVNode("td", { class: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0" }, toDisplayString(user.name), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, toDisplayString(user.email), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize" }, toDisplayString(user.roles.map((role) => role.name).join(",")), 1),
                                    createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, [
                                      user.deleted_at ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "text-red-500 font-bold"
                                      }, "Deleted")) : (openBlock(), createBlock("span", {
                                        key: 1,
                                        class: "text-green-500"
                                      }, "Active"))
                                    ]),
                                    createVNode("td", { class: "relative flex gap-x-5 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0" }, [
                                      !user.deleted_at ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                        createVNode(unref(Link), {
                                          href: _ctx.route("dashboard.users.edit", user.id),
                                          class: "text-indigo-600 hover:text-indigo-900"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Edit "),
                                            createVNode("span", { class: "sr-only" }, toDisplayString(user.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["href"]),
                                        createVNode("button", {
                                          href: "#",
                                          class: "text-red-600 hover:text-red-900",
                                          onClick: ($event) => handleDelete(user)
                                        }, [
                                          createTextVNode(" Delete "),
                                          createVNode("span", { class: "sr-only" }, toDisplayString(user.name), 1)
                                        ], 8, ["onClick"])
                                      ], 64)) : (openBlock(), createBlock("button", {
                                        key: 1,
                                        href: "#",
                                        class: "text-green-600 hover:text-green-900",
                                        onClick: ($event) => handleRestore(user)
                                      }, [
                                        createTextVNode(" Restore "),
                                        createVNode("span", { class: "sr-only" }, toDisplayString(user.name), 1)
                                      ], 8, ["onClick"]))
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      __props.users.meta.last_page > 1 ? (openBlock(), createBlock(_sfc_main$J, {
                        key: 0,
                        meta: __props.users.meta
                      }, null, 8, ["meta"])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/User/Index.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$v
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {
  __name: "PostCard",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    },
    showImage: Boolean,
    post: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "relative group flex gap-5",
          __props.variant === "default" ? "pb-5" : "pb-3"
        ]
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("posts.show", {
          category: __props.post.category.slug,
          post: __props.post.slug
        }),
        class: "absolute inset-0 z-10"
      }, null, _parent));
      if (__props.post.cover_image_url && __props.variant === "simplified" && __props.showImage) {
        _push(`<figure class="h-16 aspect-square self-start"><img${ssrRenderAttr("src", __props.post.cover_image_url)}${ssrRenderAttr("alt", __props.post.title)} class="h-full w-full object-cover rounded-sm text-xs" loading="lazy"></figure>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.post.cover_image_url && __props.variant === "default") {
        _push(`<figure class="h-16 md:h-28 aspect-video self-start"><img${ssrRenderAttr("src", __props.post.cover_image_url)}${ssrRenderAttr("alt", __props.post.title)} class="h-full w-full object-cover rounded-sm text-xs" loading="lazy"></figure>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><h2 class="${ssrRenderClass({
        "group-hover:text-primary": true,
        "text-sm md:text-lg font-semibold": __props.variant === "default",
        "text-sm md:text-base font-medium": __props.variant === "simplified"
      })}">${ssrInterpolate(__props.post.title)}</h2><div class="${ssrRenderClass(["flex gap-2 mt-2 text-sm md:text-base", { "text-sm": __props.variant === "simplified" || __props.size === "sm" }])}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("posts.category.index", __props.post.category),
        class: "font-normal underline z-20 hover:text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.post.category.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.post.category.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` · <div>${ssrInterpolate(__props.post.created_at_formatted)}</div></div></div></div>`);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PostCard.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<h2${ssrRenderAttrs(mergeProps({ class: "text-lg md:text-xl font-extrabold mb-3 uppercase" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h2>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/SectionTitle.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const SectionTitle = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$s = {
  __name: "PopularPost",
  __ssrInlineRender: true,
  props: {
    posts: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 px-2 rounded border" }, _attrs))}>`);
      _push(ssrRenderComponent(SectionTitle, { class: "-mx-2 pl-4 border-b border-b-gray-200 py-2 !text-lg !mb-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Artikel Populer `);
          } else {
            return [
              createTextVNode(" Artikel Populer ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="py-2"><!--[-->`);
      ssrRenderList(__props.posts, (post, index) => {
        _push(`<div class="flex items-center gap-x-3"><div class="bg-gray-100 size-10 text-xl font-medium rounded-full flex items-center justify-center shrink-0">${ssrInterpolate(index + 1)}</div>`);
        _push(ssrRenderComponent(_sfc_main$u, {
          post,
          variant: "simplified"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (__props.posts.length === 0) {
        _push(`<p>Belum ada artikel populer.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/PopularPost.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = {
  __name: "DefaultSeoMeta",
  __ssrInlineRender: true,
  setup(__props) {
    const seoTitle = computed(() => getSeoTitle());
    const seoDescription = computed(() => "Berita terbaru, akurat dan terpercaya di Wartabengkulu.co. Baca di sini biar kamu gak ketinggalan informasi terbaru seputar Politik, Hukum, Ekonomi, Teknologi, dan Lainnya.");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Head), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta property="description"${ssrRenderAttr("content", seoDescription.value)} head-key="description"${_scopeId}><meta property="og:type" content="website" head-key="og:type"${_scopeId}><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} head-key="og:title"${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} head-key="og:description"${_scopeId}><meta property="og:url"${ssrRenderAttr("content", unref(getAppUrl)())} head-key="og:url"${_scopeId}><meta property="og:locale" content="id_ID"${_scopeId}><meta property="og:site_name"${ssrRenderAttr("content", unref(getAppName)())}${_scopeId}><meta name="twitter:card" content="summary"${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} head-key="twitter:title"${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} head-key="twitter:description"${_scopeId}><meta name="twitter:image"${ssrRenderAttr("content", unref(getAppUrl)() + "/logo.png")} head-key="twitter:image"${_scopeId}><meta name="robots" content="index, follow"${_scopeId}><meta http-equiv="Content-Language" content="id"${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                property: "description",
                content: seoDescription.value,
                "head-key": "description"
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:type",
                content: "website",
                "head-key": "og:type"
              }),
              createVNode("meta", {
                property: "og:title",
                content: seoTitle.value,
                "head-key": "og:title"
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: seoDescription.value,
                "head-key": "og:description"
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:url",
                content: unref(getAppUrl)(),
                "head-key": "og:url"
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:locale",
                content: "id_ID"
              }),
              createVNode("meta", {
                property: "og:site_name",
                content: unref(getAppName)()
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:card",
                content: "summary"
              }),
              createVNode("meta", {
                name: "twitter:title",
                content: seoTitle.value,
                "head-key": "twitter:title"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:description",
                content: seoDescription.value,
                "head-key": "twitter:description"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:image",
                content: unref(getAppUrl)() + "/logo.png",
                "head-key": "twitter:image"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "robots",
                content: "index, follow"
              }),
              createVNode("meta", {
                "http-equiv": "Content-Language",
                content: "id"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/BaseLayout/Partials/DefaultSeoMeta.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<p${ssrRenderAttrs(mergeProps({ class: "text-sm text-gray-500 p-3" }, _attrs))}> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}. All Right Reserved. </p>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Copyright.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const Copyright = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$p = {
  __name: "SocialLinks",
  __ssrInlineRender: true,
  props: {
    showLabel: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "grid sm:flex gap-y-5" }, _attrs))}><li><a class="flex items-center gap-3" href="https://www.instagram.com/wartabengkulu.id/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5 text-gray-500 lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>`);
      if (__props.showLabel) {
        _push(`<span> Instagram </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a></li><li><a class="flex items-center gap-3" href="https://www.facebook.com/share/15iuzXfuaY/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5 text-gray-500 lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`);
      if (__props.showLabel) {
        _push(`<span> Facebook </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a></li><li><a class="flex items-center gap-3" href="https://www.youtube.com/@wartabengkulu4357" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5 text-gray-500 lucide lucide-instagram"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>`);
      if (__props.showLabel) {
        _push(`<span> Youtube </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a></li><li><a class="flex items-center gap-3" href="https://www.tiktok.com/@wartabengkulu?_t=ZS-8tnd7nbZ4Aq&amp;_r=1" target="_blank"><svg fill="currentColor" class="size-5 text-gray-500" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path></svg>`);
      if (__props.showLabel) {
        _push(`<span> Tiktok </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a></li></ul>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SocialLinks.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {
  __name: "MobileMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const openNavigation = ref(false);
    const categories = computed(() => usePage().props.categories);
    onMounted(() => {
      watch(openNavigation, () => {
        if (openNavigation.value) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><button class="absolute left-4 top-5">`);
      _push(ssrRenderComponent(unref(Bars3Icon), { class: "size-5" }, null, _parent));
      _push(`</button>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(openNavigation.value ? null : { display: "none" })}" class="fixed inset-0 bg-black/50 z-50"><div class="fixed h-full w-full max-w-[275px] left-0 bg-white overflow-auto"><div class="flex items-center justify-between border-b p-4 sticky top-0 left-0 bg-white"><div class="font-bold">Menu</div><button class="p-1">`);
        _push2(ssrRenderComponent(unref(XMarkIcon), { class: "size-6" }, null, _parent));
        _push2(`</button></div><nav class="p-4 border-b"><ul class="grid gap-y-5"><!--[-->`);
        ssrRenderList(categories.value, (category) => {
          _push2(`<li>`);
          _push2(ssrRenderComponent(unref(Link), {
            href: _ctx.route("posts.category.index", category),
            class: "capitalize py-2 pr-2",
            onClick: ($event) => openNavigation.value = false
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`${ssrInterpolate(category.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(category.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push2(`</li>`);
        });
        _push2(`<!--]--></ul></nav><nav class="p-4 border-b">`);
        _push2(ssrRenderComponent(_sfc_main$p, null, null, _parent));
        _push2(`</nav>`);
        _push2(ssrRenderComponent(Copyright, null, null, _parent));
        _push2(`</div></div>`);
      }, "#sidenav", false, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/BaseLayout/Partials/MobileMenu.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = {
  __name: "BrandLink",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: "/",
        class: "flex items-center"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/logo.png" alt="" class="w-10"${_scopeId}><span class="font-bold text-red-700 text-xl"${_scopeId}> Warta Bengkulu </span>`);
          } else {
            return [
              createVNode("img", {
                src: "/logo.png",
                alt: "",
                class: "w-10"
              }),
              createVNode("span", { class: "font-bold text-red-700 text-xl" }, " Warta Bengkulu ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/BrandLink.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const openSearch = ref(false);
    const search = ref("");
    const categories = computed(() => usePage().props.categories);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sticky top-0 bg-white z-40" }, _attrs))}><header class="max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto py-2 lg:py-3 relative"><div class="md:hidden">`);
      _push(ssrRenderComponent(_sfc_main$o, null, null, _parent));
      _push(`</div><button class="absolute right-4 top-5 md:hidden">`);
      _push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "size-5" }, null, _parent));
      _push(`</button><div class="flex flex-col gap-3 md:flex-row items-center justify-between lg:px-5"><div class="flex items-center">`);
      _push(ssrRenderComponent(_sfc_main$n, null, null, _parent));
      _push(`</div><div class="flex items-center"><div class="${ssrRenderClass([
        "gap-2 w-full md:flex md:w-auto",
        openSearch.value ? "block" : "hidden"
      ])}"><div class="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end"><form class="grid w-full mx-2 grid-cols-1 lg:max-w-xs"><input type="search" name="search" class="col-start-1 row-start-1 block w-full rounded-sm bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6" placeholder="Pencarian berita..."${ssrRenderAttr("value", search.value)}>`);
      _push(ssrRenderComponent(unref(MagnifyingGlassIcon), {
        class: "pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</form></div></div><nav class="p-4 hidden md:block">`);
      _push(ssrRenderComponent(_sfc_main$p, {
        class: "gap-5",
        "show-label": false
      }, null, _parent));
      _push(`</nav></div></div></header><nav class="bg-primary pl-5"><ul class="max-w-2xl lg:max-w-6xl mx-auto flex gap-x-5 py-3 md:flex-wrap overflow-auto md:overflow-visible gap-y-3"><!--[-->`);
      ssrRenderList(categories.value, (category, index) => {
        _push(`<li class="${ssrRenderClass({
          "flex shrink-0 grow-0 flex-row": true,
          "mr-5": index === categories.value.length - 1
        })}">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("posts.category.index", category),
          class: "text-white text-sm font-bold capitalize"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(category.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/BaseLayout/Partials/Header.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = {
  __name: "AdsHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const pageProps = usePage().props;
    const ads = computed(() => pageProps.advertisement);
    return (_ctx, _push, _parent, _attrs) => {
      if (ads.value.header) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="max-w-2xl lg:max-w-6xl mx-auto bg-gray-100 p-2 lg:rounded my-5"><a${ssrRenderAttr("href", ads.value.header.target_url)} target="_blank"><img${ssrRenderAttr("src", ads.value.header.image_path)}${ssrRenderAttr("alt", ads.value.header.title)} class="w-full max-h-[250px] object-cover rounded"></a></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/AdsHeader.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "AdsSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const pageProps = usePage().props;
    const ads = computed(() => pageProps.advertisement);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 gap-2" }, _attrs))}><!--[-->`);
      ssrRenderList(ads.value.sidebar, (ad) => {
        _push(`<div class="p-2 bg-gray-100 rounded mt-2.5"><a${ssrRenderAttr("href", ad.target_url)} target="_blank"><img class="h-[150px] w-full rounded object-cover"${ssrRenderAttr("src", ad.image_path)}></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/AdsSidebar.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const pageProps = usePage().props;
    const ads = computed(() => pageProps.advertisement);
    const popularPosts = computed(() => pageProps.popularPosts);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div id="sidenav"></div>`);
      _push(ssrRenderComponent(_sfc_main$r, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$m, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, null, _parent));
      _push(`<main class="px-5 xl:p-0"><div class="max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto my-5 mb-10"><section class="grid lg:grid-cols-12 gap-10"><div class="grid lg:col-span-8 w-full">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="lg:col-span-4 hidden lg:block"><div class="sticky top-32">`);
      _push(ssrRenderComponent(_sfc_main$s, { posts: popularPosts.value }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</div></div></section><section class="block lg:hidden mt-7">`);
      _push(ssrRenderComponent(_sfc_main$s, { posts: popularPosts.value }, null, _parent));
      _push(`<div class="grid grid-cols-2 gap-5"><!--[-->`);
      ssrRenderList(ads.value.sidebar, (ad) => {
        _push(`<div class="p-2 bg-gray-100 mt-2.5"><a${ssrRenderAttr("href", ad.target_url)} target="_blank"><img class="h-[150px] w-full rounded object-cover"${ssrRenderAttr("src", ad.image_path)}></a></div>`);
      });
      _push(`<!--]--></div></section>`);
      if (_ctx.$slots.category_posts) {
        _push(`<section class="border-t mt-10 pt-5">`);
        ssrRenderSlot(_ctx.$slots, "category_posts", {}, null, _push, _parent);
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main>`);
      _push(ssrRenderComponent(Copyright, { class: "py-3 lg:py-4 border-t text-center lg:text-end px-5" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/BaseLayout/Index.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "Categorized",
  __ssrInlineRender: true,
  props: {
    postsByCategory: Array
  },
  setup(__props) {
    const filteredPostsByCategory = computed(() => {
      return __props.postsByCategory.filter((postByCategory) => {
        return postByCategory.posts.length > 0;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-3 gap-10" }, _attrs))}><!--[-->`);
      ssrRenderList(filteredPostsByCategory.value, (postByCategory, index) => {
        _push(`<!--[--><div class="grid gap-4"><div class="h-auto max-w-full"><div class="flex items-center justify-between mb-5">`);
        _push(ssrRenderComponent(SectionTitle, { class: "!mb-0" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(postByCategory.category.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(postByCategory.category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("posts.category.index", postByCategory.category),
          class: "hover:text-primary-400 hover:underline text-sm font-medium flex items-center gap-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Artikel Lainnya `);
              _push2(ssrRenderComponent(unref(ArrowRightIcon), { class: "size-4" }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" Artikel Lainnya "),
                createVNode(unref(ArrowRightIcon), { class: "size-4" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="grid grid-cols-1 gap-y-5"><!--[-->`);
        ssrRenderList(postByCategory.posts, (post, index2) => {
          _push(ssrRenderComponent(_sfc_main$u, {
            post,
            variant: "simplified",
            size: "sm",
            "show-image": postByCategory.posts.length > 1 && index2 === 0,
            class: { "border-b": index2 !== postByCategory.posts.length - 1 }
          }, null, _parent));
        });
        _push(`<!--]--></div></div></div>`);
        if (index < filteredPostsByCategory.value.length - 1) {
          _push(`<hr class="-mx-5 lg:hidden">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Categorized.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  __name: "Featured",
  __ssrInlineRender: true,
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const firstPost = computed(() => __props.posts[0]);
    const otherPosts = computed(() => __props.posts.length > 1 ? __props.posts.slice(1) : []);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid md:grid-cols-12 gap-5 mb-7 relative" }, _attrs))}>`);
      _push(ssrRenderComponent(SectionTitle, { class: "absolute top-0 left-0 z-20 bg-zinc-800 !text-base text-white p-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Headline `);
          } else {
            return [
              createTextVNode(" Headline ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass(["col-span-12 md:col-span-5 h-96 relative rounded overflow-hidden group", { "!col-span-12": __props.posts.length === 1 }])}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("posts.show", {
          category: firstPost.value.category,
          post: firstPost.value
        }),
        class: "absolute inset-0 z-10"
      }, null, _parent));
      _push(`<img${ssrRenderAttr("src", firstPost.value.cover_image_url)} alt="" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"><div class="bg-black/70 absolute bottom-0 inset-x-0 px-2 py-3"><h2 class="text-white font-bold text-lg">${ssrInterpolate(firstPost.value.title)}</h2><div class="flex gap-2 mt-2 text-sm text-white">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("posts.category.index", firstPost.value.category),
        class: "font-medium underline z-20 hover:text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(firstPost.value.category.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(firstPost.value.category.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` · <div>${ssrInterpolate(firstPost.value.created_at_formatted)}</div></div></div></div>`);
      if (__props.posts.length > 1) {
        _push(`<div class="col-span-12 md:col-span-7 overflow-y-auto h-96"><div class="grid grid-cols-1 gap-y-3"><!--[-->`);
        ssrRenderList(otherPosts.value, (post) => {
          _push(ssrRenderComponent(_sfc_main$u, {
            class: "border-b",
            key: post.id,
            "show-image": "",
            variant: "simplified",
            post
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Featured.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  __name: "Newest",
  __ssrInlineRender: true,
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(SectionTitle, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Berita Terkini `);
          } else {
            return [
              createTextVNode(" Berita Terkini ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 gap-y-5"><!--[-->`);
      ssrRenderList(__props.posts, (post) => {
        _push(ssrRenderComponent(_sfc_main$u, {
          post,
          key: post.id,
          class: "border-b"
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (__props.posts.length === 0) {
        _push(`<p>Belum ada artikel terbaru.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.posts.length) {
        _push(`<div class="pt-7 flex md:justify-center">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("posts.newests"),
          class: "relative items-center font-medium justify-center gap-2 whitespace-nowrap disabled:opacity-75 dark:disabled:opacity-75 disabled:cursor-default disabled:pointer-events-none h-10 text-sm rounded-lg px-4 inline-flex bg-white hover:bg-zinc-50 dark:bg-zinc-700 dark:hover:bg-zinc-600/75 text-zinc-800 dark:text-white border border-zinc-200 hover:border-zinc-200 border-b-zinc-300/80 dark:border-zinc-600 dark:hover:border-zinc-600 shadow-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Lihat Indeks Artikel `);
            } else {
              return [
                createTextVNode(" Lihat Indeks Artikel ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Newest.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    newestPosts: Array,
    featuringPosts: Array,
    postsByCategory: Array
  },
  setup(__props) {
    computed(() => usePage().props.categories);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$j, _attrs, {
        category_posts: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$i, { postsByCategory: __props.postsByCategory }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$i, { postsByCategory: __props.postsByCategory }, null, 8, ["postsByCategory"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.featuringPosts.length > 0) {
              _push2(ssrRenderComponent(_sfc_main$h, { posts: __props.featuringPosts }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$g, { posts: __props.newestPosts }, null, _parent2, _scopeId));
          } else {
            return [
              __props.featuringPosts.length > 0 ? (openBlock(), createBlock(_sfc_main$h, {
                key: 0,
                posts: __props.featuringPosts
              }, null, 8, ["posts"])) : createCommentVNode("", true),
              createVNode(_sfc_main$g, { posts: __props.newestPosts }, null, 8, ["posts"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Index.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  __name: "PostPagination",
  __ssrInlineRender: true,
  props: {
    meta: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="font-medium mb-2.5 mt-7">Halaman</div><nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination"><!--[-->`);
      ssrRenderList(__props.meta.links, (link, index) => {
        _push(`<!--[-->`);
        if (link.label === "pagination.previous") {
          _push(`<a${ssrRenderAttr("href", link.url)} class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"><span class="sr-only">Previous</span>`);
          _push(ssrRenderComponent(unref(ChevronLeftIcon), {
            class: "size-5",
            "aria-hidden": "true"
          }, null, _parent));
          _push(`</a>`);
        } else if (link.label === "pagination.next") {
          _push(`<a${ssrRenderAttr("href", link.url)} class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"><span class="sr-only">Next</span>`);
          _push(ssrRenderComponent(unref(ChevronRightIcon), {
            class: "size-5",
            "aria-hidden": "true"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<a${ssrRenderAttr("href", link.url)} aria-current="page" class="${ssrRenderClass({
            "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0": true,
            "bg-primary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:bg-primary": link.active
          })}">${ssrInterpolate(link.label)}</a>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></nav></div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/PostPagination.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$j
}, {
  __name: "Newest",
  __ssrInlineRender: true,
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(SectionTitle, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Berita Terkini `);
          } else {
            return [
              createTextVNode(" Berita Terkini ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(__props.posts.data, (post) => {
        _push(ssrRenderComponent(_sfc_main$u, {
          post,
          key: post.id
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (__props.posts.meta.total === 0) {
        _push(`<p>Belum ada artikel.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$e, {
        meta: __props.posts.meta
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Newest.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$j
}, {
  __name: "PostByCategory",
  __ssrInlineRender: true,
  props: {
    category: Object,
    posts: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(SectionTitle, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.category.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.category.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 gap-y-5"><!--[-->`);
      ssrRenderList(__props.posts.data, (post) => {
        _push(ssrRenderComponent(_sfc_main$u, {
          post,
          key: post.id,
          class: "border-b"
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (__props.posts.meta.last_page > 1) {
        _push(ssrRenderComponent(_sfc_main$e, {
          meta: __props.posts.meta
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.posts.meta.total === 0) {
        _push(`<p>Belum ada artikel.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PostByCategory.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    pages: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "flex",
        "aria-label": "Breadcrumb"
      }, _attrs))}><ol role="list" class="flex items-center space-x-2"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "text-sm font-medium text-primary hover:text-primary-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Beranda `);
          } else {
            return [
              createTextVNode(" Beranda ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><!--[-->`);
      ssrRenderList(__props.pages, (page) => {
        _push(`<li><div class="flex items-center"><svg class="size-5 shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path></svg>`);
        _push(ssrRenderComponent(unref(Link), {
          href: page.href,
          class: "ml-2 text-sm font-medium text-primary hover:text-primary-400",
          "aria-current": page.current ? "page" : void 0
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(page.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(page.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ol></nav>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Core/Breadcrumb.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "SeoMeta",
  __ssrInlineRender: true,
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const appUrl = computed(() => getAppUrl());
    const seoImageUrl = computed(() => appUrl.value + __props.post.cover_image_url);
    const seoUrl = computed(() => appUrl.value + usePage().url);
    const seoTitle = computed(() => getSeoTitle(__props.post.title));
    const seoDescription = computed(() => __props.post.seo.description || __props.post.title);
    const seoPublishedAt = computed(() => __props.post.seo.published_at);
    const seoDateModifiedAt = computed(() => __props.post.seo.updated_at);
    const jsonLd = computed(() => JSON.stringify({
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": __props.post.title,
      "image": [seoImageUrl.value],
      "datePublished": seoPublishedAt.value,
      "dateModified": seoDateModifiedAt.value,
      "author": { "@type": "Person", "name": __props.post.author.name }
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Head), mergeProps({
        title: __props.post.title
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta property="description"${ssrRenderAttr("content", seoDescription.value)} head-key="description"${_scopeId}><script type="application/ld+json"${_scopeId}>${ssrInterpolate(jsonLd.value)}<\/script><meta property="og:title"${ssrRenderAttr("content", seoTitle.value)} head-key="og:title"${_scopeId}><meta property="og:description"${ssrRenderAttr("content", seoDescription.value)} head-key="og:description"${_scopeId}><meta property="og:image"${ssrRenderAttr("content", seoImageUrl.value)} head-key="og:image"${_scopeId}><meta property="og:url"${ssrRenderAttr("content", seoUrl.value)} head-key="og:url"${_scopeId}><meta property="og:type" content="article" head-key="og:type"${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", seoTitle.value)} head-key="twitter:title"${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", seoDescription.value)} head-key="twitter:description"${_scopeId}><meta name="twitter:image"${ssrRenderAttr("content", seoImageUrl.value)} head-key="twitter:image"${_scopeId}><link rel="canonical"${ssrRenderAttr("href", seoUrl.value)}${_scopeId}><meta name="googlebot" content="index, follow"${_scopeId}><meta name="googlebot-news" content="index, follow"${_scopeId}><meta name="yahoobot" content="index, follow"${_scopeId}><meta property="article:published_time"${ssrRenderAttr("content", seoPublishedAt.value)}${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                property: "description",
                content: seoDescription.value,
                "head-key": "description"
              }, null, 8, ["content"]),
              createVNode("script", {
                type: "application/ld+json",
                textContent: toDisplayString(jsonLd.value)
              }, null, 8, ["textContent"]),
              createVNode("meta", {
                property: "og:title",
                content: seoTitle.value,
                "head-key": "og:title"
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: seoDescription.value,
                "head-key": "og:description"
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:image",
                content: seoImageUrl.value,
                "head-key": "og:image"
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:url",
                content: seoUrl.value,
                "head-key": "og:url"
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:type",
                content: "article",
                "head-key": "og:type"
              }),
              createVNode("meta", {
                name: "twitter:title",
                content: seoTitle.value,
                "head-key": "twitter:title"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:description",
                content: seoDescription.value,
                "head-key": "twitter:description"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:image",
                content: seoImageUrl.value,
                "head-key": "twitter:image"
              }, null, 8, ["content"]),
              createVNode("link", {
                rel: "canonical",
                href: seoUrl.value
              }, null, 8, ["href"]),
              createVNode("meta", {
                name: "googlebot",
                content: "index, follow"
              }),
              createVNode("meta", {
                name: "googlebot-news",
                content: "index, follow"
              }),
              createVNode("meta", {
                name: "yahoobot",
                content: "index, follow"
              }),
              createVNode("meta", {
                property: "article:published_time",
                content: seoPublishedAt.value
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SeoMeta.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$j
}, {
  __name: "PostDetail",
  __ssrInlineRender: true,
  props: {
    post: Object,
    category: Object
  },
  setup(__props) {
    const breadcrumbPages = computed(() => [
      { name: __props.category.name, href: `/${__props.category.slug}`, current: false }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$a, { post: __props.post }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, {
        pages: breadcrumbPages.value,
        class: "mb-4"
      }, null, _parent));
      _push(`<article class="prose-sm md:prose-lg"><header><h1 class="capitalize md:text-4xl mb-2.5 font-semibold">${ssrInterpolate(__props.post.title)}</h1><div class="flex flex-col gap-1"><div class="text-gray-400 text-sm"> Reporter: ${ssrInterpolate(__props.post.author.name)} `);
      if (__props.post.editor) {
        _push(`<span> ‐ Editor: ${ssrInterpolate(__props.post.editor.name)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="my-0 text-sm text-gray-500">${ssrInterpolate(__props.post.created_at)} · waktu baca ${ssrInterpolate(__props.post.minutes_to_read)} menit </div></div></header><main class="mt-6">`);
      if (!!__props.post.cover_image_url) {
        _push(`<figure><img${ssrRenderAttr("src", __props.post.cover_image_url)}${ssrRenderAttr("alt", __props.post.title)}></figure>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>${__props.post.content ?? ""}</div></main></article></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PostDetail.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DangerButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const DangerButton = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$7 = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dialog = ref();
    const showSlot = ref(props.show);
    watch(
      () => props.show,
      () => {
        var _a;
        if (props.show) {
          document.body.style.overflow = "hidden";
          showSlot.value = true;
          (_a = dialog.value) == null ? void 0 : _a.showModal();
        } else {
          document.body.style.overflow = "";
          setTimeout(() => {
            var _a2;
            (_a2 = dialog.value) == null ? void 0 : _a2.close();
            showSlot.value = false;
          }, 200);
        }
      }
    );
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        if (props.show) {
          close();
        }
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    });
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        class: "z-50 m-0 min-h-full min-w-full overflow-y-auto bg-transparent backdrop:bg-transparent",
        ref_key: "dialog",
        ref: dialog
      }, _attrs))}><div class="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0" scroll-region><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="${ssrRenderClass([maxWidthClass.value, "mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full"])}">`);
      if (showSlot.value) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></dialog>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SecondaryButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const confirmingUserDeletion = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      nextTick(() => passwordInput.value.focus());
    };
    const deleteUser = () => {
      form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.clearErrors();
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><header><h2 class="text-lg font-medium text-gray-900"> Delete Account </h2><p class="mt-1 text-sm text-gray-600"> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </p></header>`);
      _push(ssrRenderComponent(DangerButton, { onClick: confirmUserDeletion }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Delete Account`);
          } else {
            return [
              createTextVNode("Delete Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        show: confirmingUserDeletion.value,
        onClose: closeModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900"${_scopeId}> Are you sure you want to delete your account? </h2><p class="mt-1 text-sm text-gray-600"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. </p><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$$, {
              for: "password",
              value: "Password",
              class: "sr-only"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Z, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              onKeyup: deleteUser
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$10, {
              message: unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, { onClick: closeModal }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(DangerButton, {
              class: ["ms-3", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing,
              onClick: deleteUser
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    createTextVNode(" Delete Account ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete your account? "),
                createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                createVNode("div", { class: "mt-6" }, [
                  createVNode(_sfc_main$$, {
                    for: "password",
                    value: "Password",
                    class: "sr-only"
                  }),
                  createVNode(_sfc_main$Z, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    onKeyup: withKeys(deleteUser, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$10, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode(_sfc_main$6, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(DangerButton, {
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete Account ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900"> Update Password </h2><p class="mt-1 text-sm text-gray-600"> Ensure your account is using a long, random password to stay secure. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$$, {
        for: "current_password",
        value: "Current Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, {
        id: "current_password",
        ref_key: "currentPasswordInput",
        ref: currentPasswordInput,
        modelValue: unref(form).current_password,
        "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "current-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$10, {
        message: unref(form).errors.current_password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$$, {
        for: "password",
        value: "New Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, {
        id: "password",
        ref_key: "passwordInput",
        ref: passwordInput,
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$10, {
        message: unref(form).errors.password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$$, {
        for: "password_confirmation",
        value: "Confirm Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, {
        id: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$10, {
        message: unref(form).errors.password_confirmation,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600"> Saved. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const user = usePage().props.auth.user;
    const form = useForm({
      name: user.name,
      email: user.email
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900"> Profile Information </h2><p class="mt-1 text-sm text-gray-600"> Update your account&#39;s profile information and email address. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$$, {
        for: "name",
        value: "Name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, {
        id: "name",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        autofocus: "",
        autocomplete: "name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$10, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$$, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$10, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div>`);
      if (__props.mustVerifyEmail && unref(user).email_verified_at === null) {
        _push(`<div><p class="mt-2 text-sm text-gray-800"> Your email address is unverified. `);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("verification.send"),
          method: "post",
          as: "button",
          class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Click here to re-send the verification email. `);
            } else {
              return [
                createTextVNode(" Click here to re-send the verification email. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><div style="${ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}" class="mt-2 text-sm font-medium text-green-600"> A new verification link has been sent to your email address. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600"> Saved. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Profile </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Profile ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8"${_scopeId}><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              "must-verify-email": __props.mustVerifyEmail,
              status: __props.status,
              class: "max-w-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [
                    createVNode(_sfc_main$3, {
                      "must-verify-email": __props.mustVerifyEmail,
                      status: __props.status,
                      class: "max-w-xl"
                    }, null, 8, ["must-verify-email", "status"])
                  ]),
                  createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [
                    createVNode(_sfc_main$4, { class: "max-w-xl" })
                  ]),
                  createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [
                    createVNode(_sfc_main$5, { class: "max-w-xl" })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$j
}, {
  __name: "Search",
  __ssrInlineRender: true,
  props: {
    keyword: String,
    posts: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PostPagination = resolveComponent("PostPagination");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(SectionTitle, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pencarian dengan kata kunci: <em${_scopeId}>&#39;${ssrInterpolate(__props.keyword)}&#39;</em>`);
          } else {
            return [
              createTextVNode(" Pencarian dengan kata kunci: "),
              createVNode("em", null, "'" + toDisplayString(__props.keyword) + "'", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 gap-y-5"><!--[-->`);
      ssrRenderList(__props.posts.data, (post, index) => {
        _push(ssrRenderComponent(_sfc_main$u, {
          post,
          key: post.id,
          class: "border-b"
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (__props.posts.meta.last_page > 1) {
        _push(ssrRenderComponent(_component_PostPagination, {
          meta: __props.posts.meta
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.posts.meta.total === 0) {
        _push(`<p>Tidak dapat menemukan artikel dengan kata kunci diatas.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Search.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    laravelVersion: {
      type: String,
      required: true
    },
    phpVersion: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(`<div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"><img id="background" class="absolute -left-20 top-0 max-w-[877px]" src="https://laravel.com/assets/img/welcome/background.svg"><div class="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"><div class="relative w-full max-w-2xl px-6 lg:max-w-7xl"><header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"><div class="flex lg:col-start-2 lg:justify-center"><svg class="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]" viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z" fill="currentColor"></path></svg></div>`);
      if (__props.canLogin) {
        _push(`<nav class="-mx-3 flex flex-1 justify-end">`);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Dashboard `);
              } else {
                return [
                  createTextVNode(" Dashboard ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Log in `);
              } else {
                return [
                  createTextVNode(" Log in ")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (__props.canRegister) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main class="mt-6"><div class="grid gap-6 lg:grid-cols-2 lg:gap-8"><a href="https://laravel.com/docs" id="docs-card" class="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"><div id="screenshot-container" class="relative flex w-full flex-1 items-stretch"><img src="https://laravel.com/assets/img/welcome/docs-light.svg" alt="Laravel documentation screenshot" class="aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"><img src="https://laravel.com/assets/img/welcome/docs-dark.svg" alt="Laravel documentation screenshot" class="hidden aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"><div class="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div></div><div class="relative flex items-center gap-6 lg:items-end"><div id="docs-card-content" class="flex items-start gap-6 lg:flex-col"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#FF2D20" d="M23 4a1 1 0 0 0-1.447-.894L12.224 7.77a.5.5 0 0 1-.448 0L2.447 3.106A1 1 0 0 0 1 4v13.382a1.99 1.99 0 0 0 1.105 1.79l9.448 4.728c.14.065.293.1.447.1.154-.005.306-.04.447-.105l9.453-4.724a1.99 1.99 0 0 0 1.1-1.789V4ZM3 6.023a.25.25 0 0 1 .362-.223l7.5 3.75a.251.251 0 0 1 .138.223v11.2a.25.25 0 0 1-.362.224l-7.5-3.75a.25.25 0 0 1-.138-.22V6.023Zm18 11.2a.25.25 0 0 1-.138.224l-7.5 3.75a.249.249 0 0 1-.329-.099.249.249 0 0 1-.033-.12V9.772a.251.251 0 0 1 .138-.224l7.5-3.75a.25.25 0 0 1 .362.224v11.2Z"></path><path fill="#FF2D20" d="m3.55 1.893 8 4.048a1.008 1.008 0 0 0 .9 0l8-4.048a1 1 0 0 0-.9-1.785l-7.322 3.706a.506.506 0 0 1-.452 0L4.454.108a1 1 0 0 0-.9 1.785H3.55Z"></path></svg></div><div class="pt-3 sm:pt-5 lg:pt-0"><h2 class="text-xl font-semibold text-black dark:text-white"> Documentation </h2><p class="mt-4 text-sm/relaxed"> Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. </p></div></div><svg class="size-6 shrink-0 stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></div></a><a href="https://laracasts.com" class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M24 8.25a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-12Zm-7.765 5.868a1.221 1.221 0 0 1 0 2.264l-6.626 2.776A1.153 1.153 0 0 1 8 18.123v-5.746a1.151 1.151 0 0 1 1.609-1.035l6.626 2.776ZM19.564 1.677a.25.25 0 0 0-.177-.427H15.6a.106.106 0 0 0-.072.03l-4.54 4.543a.25.25 0 0 0 .177.427h3.783c.027 0 .054-.01.073-.03l4.543-4.543ZM22.071 1.318a.047.047 0 0 0-.045.013l-4.492 4.492a.249.249 0 0 0 .038.385.25.25 0 0 0 .14.042h5.784a.5.5 0 0 0 .5-.5v-2a2.5 2.5 0 0 0-1.925-2.432ZM13.014 1.677a.25.25 0 0 0-.178-.427H9.101a.106.106 0 0 0-.073.03l-4.54 4.543a.25.25 0 0 0 .177.427H8.4a.106.106 0 0 0 .073-.03l4.54-4.543ZM6.513 1.677a.25.25 0 0 0-.177-.427H2.5A2.5 2.5 0 0 0 0 3.75v2a.5.5 0 0 0 .5.5h1.4a.106.106 0 0 0 .073-.03l4.54-4.543Z"></path></g></svg></div><div class="pt-3 sm:pt-5"><h2 class="text-xl font-semibold text-black dark:text-white"> Laracasts </h2><p class="mt-4 text-sm/relaxed"> Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process. </p></div><svg class="size-6 shrink-0 self-center stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laravel-news.com" class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z"></path><path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z"></path><path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z"></path></g></svg></div><div class="pt-3 sm:pt-5"><h2 class="text-xl font-semibold text-black dark:text-white"> Laravel News </h2><p class="mt-4 text-sm/relaxed"> Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials. </p></div><svg class="size-6 shrink-0 self-center stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><div class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M16.597 12.635a.247.247 0 0 0-.08-.237 2.234 2.234 0 0 1-.769-1.68c.001-.195.03-.39.084-.578a.25.25 0 0 0-.09-.267 8.8 8.8 0 0 0-4.826-1.66.25.25 0 0 0-.268.181 2.5 2.5 0 0 1-2.4 1.824.045.045 0 0 0-.045.037 12.255 12.255 0 0 0-.093 3.86.251.251 0 0 0 .208.214c2.22.366 4.367 1.08 6.362 2.118a.252.252 0 0 0 .32-.079 10.09 10.09 0 0 0 1.597-3.733ZM13.616 17.968a.25.25 0 0 0-.063-.407A19.697 19.697 0 0 0 8.91 15.98a.25.25 0 0 0-.287.325c.151.455.334.898.548 1.328.437.827.981 1.594 1.619 2.28a.249.249 0 0 0 .32.044 29.13 29.13 0 0 0 2.506-1.99ZM6.303 14.105a.25.25 0 0 0 .265-.274 13.048 13.048 0 0 1 .205-4.045.062.062 0 0 0-.022-.07 2.5 2.5 0 0 1-.777-.982.25.25 0 0 0-.271-.149 11 11 0 0 0-5.6 2.815.255.255 0 0 0-.075.163c-.008.135-.02.27-.02.406.002.8.084 1.598.246 2.381a.25.25 0 0 0 .303.193 19.924 19.924 0 0 1 5.746-.438ZM9.228 20.914a.25.25 0 0 0 .1-.393 11.53 11.53 0 0 1-1.5-2.22 12.238 12.238 0 0 1-.91-2.465.248.248 0 0 0-.22-.187 18.876 18.876 0 0 0-5.69.33.249.249 0 0 0-.179.336c.838 2.142 2.272 4 4.132 5.353a.254.254 0 0 0 .15.048c1.41-.01 2.807-.282 4.117-.802ZM18.93 12.957l-.005-.008a.25.25 0 0 0-.268-.082 2.21 2.21 0 0 1-.41.081.25.25 0 0 0-.217.2c-.582 2.66-2.127 5.35-5.75 7.843a.248.248 0 0 0-.09.299.25.25 0 0 0 .065.091 28.703 28.703 0 0 0 2.662 2.12.246.246 0 0 0 .209.037c2.579-.701 4.85-2.242 6.456-4.378a.25.25 0 0 0 .048-.189 13.51 13.51 0 0 0-2.7-6.014ZM5.702 7.058a.254.254 0 0 0 .2-.165A2.488 2.488 0 0 1 7.98 5.245a.093.093 0 0 0 .078-.062 19.734 19.734 0 0 1 3.055-4.74.25.25 0 0 0-.21-.41 12.009 12.009 0 0 0-10.4 8.558.25.25 0 0 0 .373.281 12.912 12.912 0 0 1 4.826-1.814ZM10.773 22.052a.25.25 0 0 0-.28-.046c-.758.356-1.55.635-2.365.833a.25.25 0 0 0-.022.48c1.252.43 2.568.65 3.893.65.1 0 .2 0 .3-.008a.25.25 0 0 0 .147-.444c-.526-.424-1.1-.917-1.673-1.465ZM18.744 8.436a.249.249 0 0 0 .15.228 2.246 2.246 0 0 1 1.352 2.054c0 .337-.08.67-.23.972a.25.25 0 0 0 .042.28l.007.009a15.016 15.016 0 0 1 2.52 4.6.25.25 0 0 0 .37.132.25.25 0 0 0 .096-.114c.623-1.464.944-3.039.945-4.63a12.005 12.005 0 0 0-5.78-10.258.25.25 0 0 0-.373.274c.547 2.109.85 4.274.901 6.453ZM9.61 5.38a.25.25 0 0 0 .08.31c.34.24.616.561.8.935a.25.25 0 0 0 .3.127.631.631 0 0 1 .206-.034c2.054.078 4.036.772 5.69 1.991a.251.251 0 0 0 .267.024c.046-.024.093-.047.141-.067a.25.25 0 0 0 .151-.23A29.98 29.98 0 0 0 15.957.764a.25.25 0 0 0-.16-.164 11.924 11.924 0 0 0-2.21-.518.252.252 0 0 0-.215.076A22.456 22.456 0 0 0 9.61 5.38Z"></path></g></svg></div><div class="pt-3 sm:pt-5"><h2 class="text-xl font-semibold text-black dark:text-white"> Vibrant Ecosystem </h2><p class="mt-4 text-sm/relaxed"> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white dark:focus-visible:ring-[#FF2D20]">Forge</a>, <a href="https://vapor.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Vapor</a>, <a href="https://nova.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Nova</a>, <a href="https://envoyer.io" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Envoyer</a>, and <a href="https://herd.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Herd</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Cashier</a>, <a href="https://laravel.com/docs/dusk" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Echo</a>, <a href="https://laravel.com/docs/horizon" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Telescope</a>, and more. </p></div></div></div></main><footer class="py-16 text-center text-sm text-black dark:text-white/70"> Laravel v${ssrInterpolate(__props.laravelVersion)} (PHP v${ssrInterpolate(__props.phpVersion)}) </footer></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const Ziggy = { "url": "http://carokito.test", "port": null, "defaults": {}, "routes": { "debugbar.openhandler": { "uri": "_debugbar/open", "methods": ["GET", "HEAD"] }, "debugbar.clockwork": { "uri": "_debugbar/clockwork/{id}", "methods": ["GET", "HEAD"], "parameters": ["id"] }, "debugbar.telescope": { "uri": "_debugbar/telescope/{id}", "methods": ["GET", "HEAD"], "parameters": ["id"] }, "debugbar.assets.css": { "uri": "_debugbar/assets/stylesheets", "methods": ["GET", "HEAD"] }, "debugbar.assets.js": { "uri": "_debugbar/assets/javascript", "methods": ["GET", "HEAD"] }, "debugbar.cache.delete": { "uri": "_debugbar/cache/{key}/{tags?}", "methods": ["DELETE"], "parameters": ["key", "tags"] }, "debugbar.queries.explain": { "uri": "_debugbar/queries/explain", "methods": ["POST"] }, "sanctum.csrf-cookie": { "uri": "sanctum/csrf-cookie", "methods": ["GET", "HEAD"] }, "home": { "uri": "/", "methods": ["GET", "HEAD"] }, "profile.edit": { "uri": "profile", "methods": ["GET", "HEAD"] }, "profile.update": { "uri": "profile", "methods": ["PATCH"] }, "profile.destroy": { "uri": "profile", "methods": ["DELETE"] }, "register": { "uri": "register", "methods": ["GET", "HEAD"] }, "login": { "uri": "login", "methods": ["GET", "HEAD"] }, "password.request": { "uri": "forgot-password", "methods": ["GET", "HEAD"] }, "password.email": { "uri": "forgot-password", "methods": ["POST"] }, "password.reset": { "uri": "reset-password/{token}", "methods": ["GET", "HEAD"], "parameters": ["token"] }, "password.store": { "uri": "reset-password", "methods": ["POST"] }, "verification.notice": { "uri": "verify-email", "methods": ["GET", "HEAD"] }, "verification.verify": { "uri": "verify-email/{id}/{hash}", "methods": ["GET", "HEAD"], "parameters": ["id", "hash"] }, "verification.send": { "uri": "email/verification-notification", "methods": ["POST"] }, "password.confirm": { "uri": "confirm-password", "methods": ["GET", "HEAD"] }, "password.update": { "uri": "password", "methods": ["PUT"] }, "logout": { "uri": "logout", "methods": ["POST"] }, "dashboard": { "uri": "dashboard", "methods": ["GET", "HEAD"] }, "dashboard.posts.index": { "uri": "dashboard/posts", "methods": ["GET", "HEAD"] }, "dashboard.users.index": { "uri": "dashboard/users", "methods": ["GET", "HEAD"] }, "dashboard.users.create": { "uri": "dashboard/users/create", "methods": ["GET", "HEAD"] }, "dashboard.users.store": { "uri": "dashboard/users", "methods": ["POST"] }, "dashboard.users.show": { "uri": "dashboard/users/{user}", "methods": ["GET", "HEAD"], "parameters": ["user"] }, "dashboard.users.edit": { "uri": "dashboard/users/{user}/edit", "methods": ["GET", "HEAD"], "parameters": ["user"], "bindings": { "user": "id" } }, "dashboard.users.update": { "uri": "dashboard/users/{user}", "methods": ["PUT", "PATCH"], "parameters": ["user"], "bindings": { "user": "id" } }, "dashboard.users.destroy": { "uri": "dashboard/users/{user}", "methods": ["DELETE"], "parameters": ["user"], "bindings": { "user": "id" } }, "dashboard.users.restore": { "uri": "dashboard/users/{userId}/restore", "methods": ["POST"], "parameters": ["userId"] }, "dashboard.advertisements.index": { "uri": "dashboard/advertisements", "methods": ["GET", "HEAD"] }, "dashboard.advertisements.create": { "uri": "dashboard/advertisements/create", "methods": ["GET", "HEAD"] }, "dashboard.advertisements.store": { "uri": "dashboard/advertisements", "methods": ["POST"] }, "dashboard.advertisements.show": { "uri": "dashboard/advertisements/{advertisement}", "methods": ["GET", "HEAD"], "parameters": ["advertisement"] }, "dashboard.advertisements.edit": { "uri": "dashboard/advertisements/{advertisement}/edit", "methods": ["GET", "HEAD"], "parameters": ["advertisement"] }, "dashboard.advertisements.update": { "uri": "dashboard/advertisements/{advertisement}", "methods": ["PUT", "PATCH"], "parameters": ["advertisement"] }, "dashboard.advertisements.destroy": { "uri": "dashboard/advertisements/{advertisement}", "methods": ["DELETE"], "parameters": ["advertisement"], "bindings": { "advertisement": "id" } }, "dashboard.posts.create": { "uri": "dashboard/posts/create", "methods": ["GET", "HEAD"] }, "dashboard.posts.store": { "uri": "dashboard/posts", "methods": ["POST"] }, "dashboard.posts.show": { "uri": "dashboard/posts/{post}", "methods": ["GET", "HEAD"], "parameters": ["post"] }, "dashboard.posts.edit": { "uri": "dashboard/posts/{post}/edit", "methods": ["GET", "HEAD"], "parameters": ["post"], "bindings": { "post": "id" } }, "dashboard.posts.update": { "uri": "dashboard/posts/{post}", "methods": ["PUT", "PATCH"], "parameters": ["post"], "bindings": { "post": "id" } }, "dashboard.posts.destroy": { "uri": "dashboard/posts/{post}", "methods": ["DELETE"], "parameters": ["post"], "bindings": { "post": "id" } }, "dashboard.posts.publish": { "uri": "dashboard/{post}/publish", "methods": ["PATCH"], "parameters": ["post"], "bindings": { "post": "id" } }, "dashboard.posts.unpublish": { "uri": "dashboard/{post}/unpublish", "methods": ["PATCH"], "parameters": ["post"], "bindings": { "post": "id" } }, "dashboard.posts.featuring": { "uri": "dashboard/{post}/featuring", "methods": ["PATCH"], "parameters": ["post"], "bindings": { "post": "id" } }, "dashboard.posts.unfeaturing": { "uri": "dashboard/{post}/unfeaturing", "methods": ["PATCH"], "parameters": ["post"], "bindings": { "post": "id" } }, "dashboard.categories.index": { "uri": "dashboard/categories", "methods": ["GET", "HEAD"] }, "dashboard.categories.store": { "uri": "dashboard/categories", "methods": ["POST"] }, "dashboard.categories.create": { "uri": "dashboard/categories/create", "methods": ["GET", "HEAD"] }, "dashboard.categories.edit": { "uri": "dashboard/categories/{category}/edit", "methods": ["GET", "HEAD"], "parameters": ["category"], "bindings": { "category": "id" } }, "dashboard.categories.update": { "uri": "dashboard/categories/{category}", "methods": ["PATCH"], "parameters": ["category"], "bindings": { "category": "id" } }, "dashboard.categories.delete": { "uri": "dashboard/categories/{category}", "methods": ["DELETE"], "parameters": ["category"], "bindings": { "category": "id" } }, "dashboard.categories.enable": { "uri": "dashboard/categories/{category}/enable", "methods": ["PATCH"], "parameters": ["category"], "bindings": { "category": "id" } }, "posts.search": { "uri": "search", "methods": ["GET", "HEAD"] }, "posts.newests": { "uri": "terkini", "methods": ["GET", "HEAD"] }, "posts.category.index": { "uri": "{category}", "methods": ["GET", "HEAD"], "parameters": ["category"], "bindings": { "category": "slug" } }, "posts.show": { "uri": "{category}/{post}", "methods": ["GET", "HEAD"], "parameters": ["category", "post"], "bindings": { "category": "slug", "post": "slug" } }, "storage.local": { "uri": "storage/{path}", "methods": ["GET", "HEAD"], "wheres": { "path": ".*" }, "parameters": ["path"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.vue": __vite_glob_0_0, "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_1, "./Pages/Auth/Login.vue": __vite_glob_0_2, "./Pages/Auth/Register.vue": __vite_glob_0_3, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_4, "./Pages/Auth/VerifyEmail.vue": __vite_glob_0_5, "./Pages/Dashboard.vue": __vite_glob_0_6, "./Pages/Dashboard/Advertisement/Create.vue": __vite_glob_0_7, "./Pages/Dashboard/Advertisement/Edit.vue": __vite_glob_0_8, "./Pages/Dashboard/Advertisement/Index.vue": __vite_glob_0_9, "./Pages/Dashboard/Category/Create.vue": __vite_glob_0_10, "./Pages/Dashboard/Category/Edit.vue": __vite_glob_0_11, "./Pages/Dashboard/Category/Index.vue": __vite_glob_0_12, "./Pages/Dashboard/Post/Create.vue": __vite_glob_0_13, "./Pages/Dashboard/Post/Edit.vue": __vite_glob_0_14, "./Pages/Dashboard/Post/Index.vue": __vite_glob_0_15, "./Pages/Dashboard/User/Create.vue": __vite_glob_0_16, "./Pages/Dashboard/User/Edit.vue": __vite_glob_0_17, "./Pages/Dashboard/User/Index.vue": __vite_glob_0_18, "./Pages/Home/Index.vue": __vite_glob_0_19, "./Pages/Home/Partials/Categorized.vue": __vite_glob_0_20, "./Pages/Home/Partials/Featured.vue": __vite_glob_0_21, "./Pages/Home/Partials/Newest.vue": __vite_glob_0_22, "./Pages/Newest.vue": __vite_glob_0_23, "./Pages/PostByCategory.vue": __vite_glob_0_24, "./Pages/PostDetail.vue": __vite_glob_0_25, "./Pages/Profile/Edit.vue": __vite_glob_0_26, "./Pages/Profile/Partials/DeleteUserForm.vue": __vite_glob_0_27, "./Pages/Profile/Partials/UpdatePasswordForm.vue": __vite_glob_0_28, "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": __vite_glob_0_29, "./Pages/Search.vue": __vite_glob_0_30, "./Pages/Welcome.vue": __vite_glob_0_31 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin).use(ZiggyVue, Ziggy);
    }
  })
);
