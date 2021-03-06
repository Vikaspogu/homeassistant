console.info(
    `%c  CUSTOM-UI (JS)  \n%c  Version 20201218 adapted for HA 2020.X.X +  `,
        'color: gold; font-weight: bold; background: black',
        'color: white; font-weight: bold; background: steelblue' );
    !function (t) {
        var e = {};
        function s(i) {
            if (e[i])
                return e[i].exports;
            var n = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(n.exports, n, n.exports, s),
            n.l = !0,
            n.exports
        }
        s.m = t,
        s.c = e,
        s.d = function (t, e, i) {
            s.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        },
        s.r = function (t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        s.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            }
             : function () {
                return t
            };
            return s.d(e, "a", e),
            e
        },
        s.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        s.p = "",
        s(s.s = 0)
    }
    ([function (t, e, s) {
                "use strict";
                function i(t, e, s, i = !1) {
                    t._themes || (t._themes = {});
                    let n = e.default_theme;
                    ("default" === s || s && e.themes[s]) && (n = s);
                    const a = {
                        ...t._themes
                    };
                    if ("default" !== n) {
                        const s = e.themes[n];
                        Object.keys(s).forEach(e => {
                            const i = "--" + e;
                            t._themes[i] = "",
                            a[i] = s[e]
                        })
                    }
                    if (t.updateStyles ? t.updateStyles(a) : window.ShadyCSS && window.ShadyCSS.styleSubtree(t, a), !i)
                        return;
                    const o = document.querySelector("meta[name=theme-color]");
                    if (o) {
                        o.hasAttribute("default-content") || o.setAttribute("default-content", o.getAttribute("content"));
                        const t = a["--primary-color"] || o.getAttribute("default-content");
                        o.setAttribute("content", t)
                    }
                }
                function n(t) {
                    return t.substr(0, t.indexOf("."))
                }
                function a(t) {
                    return n(t.entity_id)
                }
                function o(t, e, s) {
                    const i = t;
                    let n;
                    i.lastChild && i.lastChild.tagName === e ? n = i.lastChild : (i.lastChild && i.removeChild(i.lastChild), n = document.createElement(e.toLowerCase())),
                    n.setProperties ? n.setProperties(s) : Object.keys(s).forEach(t => {
                        n[t] = s[t]
                    }),
                    null === n.parentNode && i.appendChild(n)
                }
                s.r(e);
                const r = (t, e) => 0 != (t.attributes.supported_features & e),
                l = ["climate", "cover", "configurator", "input_select", "input_number", "input_text", "lock", "media_player", "scene", "script", "timer", "vacuum", "water_heater", "weblink"];
                new Set(["fan", "input_boolean", "light", "switch", "group", "automation"]);
                const c = new WeakMap,
                d = t => "function" == typeof t && c.has(t),
                u = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
                h = (t, e, s = null) => {
                    let i = e;
                    for (; i !== s; ) {
                        const e = i.nextSibling;
                        t.removeChild(i),
                        i = e
                    }
                },
                p = {},
                m = {},
                g = `{{lit-${String(Math.random()).slice(2)}}}`,
                y = `\x3c!--${g}--\x3e`,
                b = new RegExp(`${g}|${y}`),
                _ = "$lit$";
                class f {
                    constructor(t, e) {
                        this.parts = [],
                        this.element = e;
                        let s = -1,
                        i = 0;
                        const n = [],
                        a = e => {
                            const o = e.content,
                            r = document.createTreeWalker(o, 133, null, !1);
                            let l = 0;
                            for (; r.nextNode(); ) {
                                s++;
                                const e = r.currentNode;
                                if (1 === e.nodeType) {
                                    if (e.hasAttributes()) {
                                        const n = e.attributes;
                                        let a = 0;
                                        for (let t = 0; t < n.length; t++)
                                            n[t].value.indexOf(g) >= 0 && a++;
                                        for (; a-- > 0; ) {
                                            const n = t.strings[i],
                                            a = S.exec(n)[2],
                                            o = a.toLowerCase() + _,
                                            r = e.getAttribute(o).split(b);
                                            this.parts.push({
                                                type: "attribute",
                                                index: s,
                                                name: a,
                                                strings: r
                                            }),
                                            e.removeAttribute(o),
                                            i += r.length - 1
                                        }
                                    }
                                    "TEMPLATE" === e.tagName && a(e)
                                } else if (3 === e.nodeType) {
                                    const t = e.data;
                                    if (t.indexOf(g) >= 0) {
                                        const a = e.parentNode,
                                        o = t.split(b),
                                        r = o.length - 1;
                                        for (let t = 0; t < r; t++)
                                            a.insertBefore("" === o[t] ? v() : document.createTextNode(o[t]), e), this.parts.push({
                                                type: "node",
                                                index: ++s
                                            });
                                        "" === o[r] ? (a.insertBefore(v(), e), n.push(e)) : e.data = o[r],
                                        i += r
                                    }
                                } else if (8 === e.nodeType)
                                    if (e.data === g) {
                                        const t = e.parentNode;
                                        null !== e.previousSibling && s !== l || (s++, t.insertBefore(v(), e)),
                                        l = s,
                                        this.parts.push({
                                            type: "node",
                                            index: s
                                        }),
                                        null === e.nextSibling ? e.data = "" : (n.push(e), s--),
                                        i++
                                    } else {
                                        let t = -1;
                                        for (; -1 !== (t = e.data.indexOf(g, t + 1)); )
                                            this.parts.push({
                                                type: "node",
                                                index: -1
                                            })
                                    }
                            }
                        };
                        a(e);
                        for (const t of n)
                            t.parentNode.removeChild(t)
                    }
                }
                const w = t => -1 !== t.index,
                v = () => document.createComment(""),
                S = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
                class C {
                    constructor(t, e, s) {
                        this._parts = [],
                        this.template = t,
                        this.processor = e,
                        this.options = s
                    }
                    update(t) {
                        let e = 0;
                        for (const s of this._parts)
                            void 0 !== s && s.setValue(t[e]), e++;
                        for (const t of this._parts)
                            void 0 !== t && t.commit()
                    }
                    _clone() {
                        const t = u ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
                        e = this.template.parts;
                        let s = 0,
                        i = 0;
                        const n = t => {
                            const a = document.createTreeWalker(t, 133, null, !1);
                            let o = a.nextNode();
                            for (; s < e.length && null !== o; ) {
                                const t = e[s];
                                if (w(t))
                                    if (i === t.index) {
                                        if ("node" === t.type) {
                                            const t = this.processor.handleTextExpression(this.options);
                                            t.insertAfterNode(o.previousSibling),
                                            this._parts.push(t)
                                        } else
                                            this._parts.push(...this.processor.handleAttributeExpressions(o, t.name, t.strings, this.options));
                                        s++
                                    } else
                                        i++, "TEMPLATE" === o.nodeName && n(o.content), o = a.nextNode();
                                else
                                    this._parts.push(void 0), s++
                            }
                        };
                        return n(t),
                        u && (document.adoptNode(t), customElements.upgrade(t)),
                        t
                    }
                }
                class x {
                    constructor(t, e, s, i) {
                        this.strings = t,
                        this.values = e,
                        this.type = s,
                        this.processor = i
                    }
                    getHTML() {
                        const t = this.strings.length - 1;
                        let e = "";
                        for (let s = 0; s < t; s++) {
                            const t = this.strings[s],
                            i = S.exec(t);
                            e += i ? t.substr(0, i.index) + i[1] + i[2] + _ + i[3] + g : t + y
                        }
                        return e + this.strings[t]
                    }
                    getTemplateElement() {
                        const t = document.createElement("template");
                        return t.innerHTML = this.getHTML(),
                        t
                    }
                }
                const E = t => null === t || !("object" == typeof t || "function" == typeof t);
                class O {
                    constructor(t, e, s) {
                        this.dirty = !0,
                        this.element = t,
                        this.name = e,
                        this.strings = s,
                        this.parts = [];
                        for (let t = 0; t < s.length - 1; t++)
                            this.parts[t] = this._createPart()
                    }
                    _createPart() {
                        return new T(this)
                    }
                    _getValue() {
                        const t = this.strings,
                        e = t.length - 1;
                        let s = "";
                        for (let i = 0; i < e; i++) {
                            s += t[i];
                            const e = this.parts[i];
                            if (void 0 !== e) {
                                const t = e.value;
                                if (null != t && (Array.isArray(t) || "string" != typeof t && t[Symbol.iterator]))
                                    for (const e of t)
                                        s += "string" == typeof e ? e : String(e);
                                else
                                    s += "string" == typeof t ? t : String(t)
                            }
                        }
                        return s + t[e]
                    }
                    commit() {
                        this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()))
                    }
                }
                class T {
                    constructor(t) {
                        this.value = void 0,
                        this.committer = t
                    }
                    setValue(t) {
                        t === p || E(t) && t === this.value || (this.value = t, d(t) || (this.committer.dirty = !0))
                    }
                    commit() {
                        for (; d(this.value); ) {
                            const t = this.value;
                            this.value = p,
                            t(this)
                        }
                        this.value !== p && this.committer.commit()
                    }
                }
                class A {
                    constructor(t) {
                        this.value = void 0,
                        this._pendingValue = void 0,
                        this.options = t
                    }
                    appendInto(t) {
                        this.startNode = t.appendChild(v()),
                        this.endNode = t.appendChild(v())
                    }
                    insertAfterNode(t) {
                        this.startNode = t,
                        this.endNode = t.nextSibling
                    }
                    appendIntoPart(t) {
                        t._insert(this.startNode = v()),
                        t._insert(this.endNode = v())
                    }
                    insertAfterPart(t) {
                        t._insert(this.startNode = v()),
                        this.endNode = t.endNode,
                        t.endNode = this.startNode
                    }
                    setValue(t) {
                        this._pendingValue = t
                    }
                    commit() {
                        for (; d(this._pendingValue); ) {
                            const t = this._pendingValue;
                            this._pendingValue = p,
                            t(this)
                        }
                        const t = this._pendingValue;
                        t !== p && (E(t) ? t !== this.value && this._commitText(t) : t instanceof x ? this._commitTemplateResult(t) : t instanceof Node ? this._commitNode(t) : Array.isArray(t) || t[Symbol.iterator] ? this._commitIterable(t) : t === m ? (this.value = m, this.clear()) : this._commitText(t))
                    }
                    _insert(t) {
                        this.endNode.parentNode.insertBefore(t, this.endNode)
                    }
                    _commitNode(t) {
                        this.value !== t && (this.clear(), this._insert(t), this.value = t)
                    }
                    _commitText(t) {
                        const e = this.startNode.nextSibling;
                        t = null == t ? "" : t,
                        e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = t : this._commitNode(document.createTextNode("string" == typeof t ? t : String(t))),
                        this.value = t
                    }
                    _commitTemplateResult(t) {
                        const e = this.options.templateFactory(t);
                        if (this.value instanceof C && this.value.template === e)
                            this.value.update(t.values);
                        else {
                            const s = new C(e, t.processor, this.options),
                            i = s._clone();
                            s.update(t.values),
                            this._commitNode(i),
                            this.value = s
                        }
                    }
                    _commitIterable(t) {
                        Array.isArray(this.value) || (this.value = [], this.clear());
                        const e = this.value;
                        let s,
                        i = 0;
                        for (const n of t)
                            void 0 === (s = e[i]) && (s = new A(this.options), e.push(s), 0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])), s.setValue(n), s.commit(), i++;
                        i < e.length && (e.length = i, this.clear(s && s.endNode))
                    }
                    clear(t = this.startNode) {
                        h(this.startNode.parentNode, t.nextSibling, this.endNode)
                    }
                }
                class I extends T {}
                let U = !1;
                try {
                    const t = {
                        get capture() {
                            return U = !0,
                            !1
                        }
                    };
                    window.addEventListener("test", t, t),
                    window.removeEventListener("test", t, t)
                } catch (t) {}
                const N = t => t && (U ? {
                        capture: t.capture,
                        passive: t.passive,
                        once: t.once
                    }
                         : t.capture),
                k = new class {
                    handleAttributeExpressions(t, e, s, i) {
                        const n = e[0];
                        return "." === n ? new class extends O {
                            constructor(t, e, s) {
                                super(t, e, s),
                                this.single = 2 === s.length && "" === s[0] && "" === s[1]
                            }
                            _createPart() {
                                return new I(this)
                            }
                            _getValue() {
                                return this.single ? this.parts[0].value : super._getValue()
                            }
                            commit() {
                                this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue())
                            }
                        }
                        (t, e.slice(1), s).parts : "@" === n ? [new class {
                                constructor(t, e, s) {
                                    this.value = void 0,
                                    this._pendingValue = void 0,
                                    this.element = t,
                                    this.eventName = e,
                                    this.eventContext = s,
                                    this._boundHandleEvent = (t => this.handleEvent(t))
                                }
                                setValue(t) {
                                    this._pendingValue = t
                                }
                                commit() {
                                    for (; d(this._pendingValue); ) {
                                        const t = this._pendingValue;
                                        this._pendingValue = p,
                                        t(this)
                                    }
                                    if (this._pendingValue === p)
                                        return;
                                    const t = this._pendingValue,
                                    e = this.value,
                                    s = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive),
                                    i = null != t && (null == e || s);
                                    s && this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options),
                                    i && (this._options = N(t), this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options)),
                                    this.value = t,
                                    this._pendingValue = p
                                }
                                handleEvent(t) {
                                    "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
                                }
                            }
                            (t, e.slice(1), i.eventContext)] : "?" === n ? [new class {
                                constructor(t, e, s) {
                                    if (this.value = void 0, this._pendingValue = void 0, 2 !== s.length || "" !== s[0] || "" !== s[1])
                                        throw new Error("Boolean attributes can only contain a single expression");
                                    this.element = t,
                                    this.name = e,
                                    this.strings = s
                                }
                                setValue(t) {
                                    this._pendingValue = t
                                }
                                commit() {
                                    for (; d(this._pendingValue); ) {
                                        const t = this._pendingValue;
                                        this._pendingValue = p,
                                        t(this)
                                    }
                                    if (this._pendingValue === p)
                                        return;
                                    const t = !!this._pendingValue;
                                    this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name)),
                                    this.value = t,
                                    this._pendingValue = p
                                }
                            }
                            (t, e.slice(1), s)] : new O(t, e, s).parts
                    }
                    handleTextExpression(t) {
                        return new A(t)
                    }
                };
                function P(t) {
                    let e = j.get(t.type);
                    void 0 === e && (e = {
                            stringsArray: new WeakMap,
                            keyString: new Map
                        }, j.set(t.type, e));
                    let s = e.stringsArray.get(t.strings);
                    if (void 0 !== s)
                        return s;
                    const i = t.strings.join(g);
                    return void 0 === (s = e.keyString.get(i)) && (s = new f(t, t.getTemplateElement()), e.keyString.set(i, s)),
                    e.stringsArray.set(t.strings, s),
                    s
                }
                const j = new Map,
                D = new WeakMap;
                (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.0.0");
                const L = (t, ...e) => new x(t, e, "html", k),
                M = 133;
                function R(t, e) {
                    const {
                        element: {
                            content: s
                        },
                        parts: i
                    } = t,
                    n = document.createTreeWalker(s, M, null, !1);
                    let a = V(i),
                    o = i[a],
                    r = -1,
                    l = 0;
                    const c = [];
                    let d = null;
                    for (; n.nextNode(); ) {
                        r++;
                        const t = n.currentNode;
                        for (t.previousSibling === d && (d = null), e.has(t) && (c.push(t), null === d && (d = t)), null !== d && l++; void 0 !== o && o.index === r; )
                            o.index = null !== d ? -1 : o.index - l, o = i[a = V(i, a)]
                    }
                    c.forEach(t => t.parentNode.removeChild(t))
                }
                const B = t => {
                    let e = 11 === t.nodeType ? 0 : 1;
                    const s = document.createTreeWalker(t, M, null, !1);
                    for (; s.nextNode(); )
                        e++;
                    return e
                },
                V = (t, e = -1) => {
                    for (let s = e + 1; s < t.length; s++) {
                        const e = t[s];
                        if (w(e))
                            return s
                    }
                    return -1
                },
                H = (t, e) => `${t}--${e}`;
                let z = !0;
                void 0 === window.ShadyCSS ? z = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."), z = !1);
                const W = ["html", "svg"],
                F = new Set;
                window.JSCompiler_renameProperty = ((t, e) => t);
                const $ = {
                    toAttribute(t, e) {
                        switch (e) {
                        case Boolean:
                            return t ? "" : null;
                        case Object:
                        case Array:
                            return null == t ? t : JSON.stringify(t)
                        }
                        return t
                    },
                    fromAttribute(t, e) {
                        switch (e) {
                        case Boolean:
                            return null !== t;
                        case Number:
                            return null === t ? null : Number(t);
                        case Object:
                        case Array:
                            return JSON.parse(t)
                        }
                        return t
                    }
                },
                q = (t, e) => e !== t && (e == e || t == t),
                G = {
                    attribute: !0,
                    type: String,
                    converter: $,
                    reflect: !1,
                    hasChanged: q
                },
                J = Promise.resolve(!0),
                K = 1,
                Y = 4,
                Q = 8,
                X = 16,
                Z = 32;
                class tt extends HTMLElement {
                    constructor() {
                        super(),
                        this._updateState = 0,
                        this._instanceProperties = void 0,
                        this._updatePromise = J,
                        this._hasConnectedResolver = void 0,
                        this._changedProperties = new Map,
                        this._reflectingProperties = void 0,
                        this.initialize()
                    }
                    static get observedAttributes() {
                        this.finalize();
                        const t = [];
                        return this._classProperties.forEach((e, s) => {
                            const i = this._attributeNameForProperty(s, e);
                            void 0 !== i && (this._attributeToPropertyMap.set(i, s), t.push(i))
                        }),
                        t
                    }
                    static _ensureClassProperties() {
                        if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                            this._classProperties = new Map;
                            const t = Object.getPrototypeOf(this)._classProperties;
                            void 0 !== t && t.forEach((t, e) => this._classProperties.set(e, t))
                        }
                    }
                    static createProperty(t, e = G) {
                        if (this._ensureClassProperties(), this._classProperties.set(t, e), e.noAccessor || this.prototype.hasOwnProperty(t))
                            return;
                        const s = "symbol" == typeof t ? Symbol() : `__${t}`;
                        Object.defineProperty(this.prototype, t, {
                            get() {
                                return this[s]
                            },
                            set(e) {
                                const i = this[t];
                                this[s] = e,
                                this._requestUpdate(t, i)
                            },
                            configurable: !0,
                            enumerable: !0
                        })
                    }
                    static finalize() {
                        if (this.hasOwnProperty(JSCompiler_renameProperty("finalized", this)) && this.finalized)
                            return;
                        const t = Object.getPrototypeOf(this);
                        if ("function" == typeof t.finalize && t.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                            const t = this.properties,
                            e = [...Object.getOwnPropertyNames(t), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []];
                            for (const s of e)
                                this.createProperty(s, t[s])
                        }
                    }
                    static _attributeNameForProperty(t, e) {
                        const s = e.attribute;
                        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0
                    }
                    static _valueHasChanged(t, e, s = q) {
                        return s(t, e)
                    }
                    static _propertyValueFromAttribute(t, e) {
                        const s = e.type,
                        i = e.converter || $,
                        n = "function" == typeof i ? i : i.fromAttribute;
                        return n ? n(t, s) : t
                    }
                    static _propertyValueToAttribute(t, e) {
                        if (void 0 === e.reflect)
                            return;
                        const s = e.type,
                        i = e.converter;
                        return (i && i.toAttribute || $.toAttribute)(t, s)
                    }
                    initialize() {
                        this._saveInstanceProperties(),
                        this._requestUpdate()
                    }
                    _saveInstanceProperties() {
                        this.constructor._classProperties.forEach((t, e) => {
                            if (this.hasOwnProperty(e)) {
                                const t = this[e];
                                delete this[e],
                                this._instanceProperties || (this._instanceProperties = new Map),
                                this._instanceProperties.set(e, t)
                            }
                        })
                    }
                    _applyInstanceProperties() {
                        this._instanceProperties.forEach((t, e) => this[e] = t),
                        this._instanceProperties = void 0
                    }
                    connectedCallback() {
                        this._updateState = this._updateState | Z,
                        this._hasConnectedResolver && (this._hasConnectedResolver(), this._hasConnectedResolver = void 0)
                    }
                    disconnectedCallback() {}
                    attributeChangedCallback(t, e, s) {
                        e !== s && this._attributeToProperty(t, s)
                    }
                    _propertyToAttribute(t, e, s = G) {
                        const i = this.constructor,
                        n = i._attributeNameForProperty(t, s);
                        if (void 0 !== n) {
                            const t = i._propertyValueToAttribute(e, s);
                            if (void 0 === t)
                                return;
                            this._updateState = this._updateState | Q,
                            null == t ? this.removeAttribute(n) : this.setAttribute(n, t),
                            this._updateState = this._updateState & ~Q
                        }
                    }
                    _attributeToProperty(t, e) {
                        if (this._updateState & Q)
                            return;
                        const s = this.constructor,
                        i = s._attributeToPropertyMap.get(t);
                        if (void 0 !== i) {
                            const t = s._classProperties.get(i) || G;
                            this._updateState = this._updateState | X,
                            this[i] = s._propertyValueFromAttribute(e, t),
                            this._updateState = this._updateState & ~X
                        }
                    }
                    _requestUpdate(t, e) {
                        let s = !0;
                        if (void 0 !== t) {
                            const i = this.constructor,
                            n = i._classProperties.get(t) || G;
                            i._valueHasChanged(this[t], e, n.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e), !0 !== n.reflect || this._updateState & X || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(t, n))) : s = !1
                        }
                        !this._hasRequestedUpdate && s && this._enqueueUpdate()
                    }
                    requestUpdate(t, e) {
                        return this._requestUpdate(t, e),
                        this.updateComplete
                    }
                    async _enqueueUpdate() {
                        let t,
                        e;
                        this._updateState = this._updateState | Y;
                        const s = this._updatePromise;
                        this._updatePromise = new Promise((s, i) => {
                                t = s,
                                e = i
                            });
                        try {
                            await s
                        } catch (t) {}
                        this._hasConnected || await new Promise(t => this._hasConnectedResolver = t);
                        try {
                            const t = this.performUpdate();
                            null != t && await t
                        } catch (t) {
                            e(t)
                        }
                        t(!this._hasRequestedUpdate)
                    }
                    get _hasConnected() {
                        return this._updateState & Z
                    }
                    get _hasRequestedUpdate() {
                        return this._updateState & Y
                    }
                    get hasUpdated() {
                        return this._updateState & K
                    }
                    performUpdate() {
                        this._instanceProperties && this._applyInstanceProperties();
                        let t = !1;
                        const e = this._changedProperties;
                        try {
                            (t = this.shouldUpdate(e)) && this.update(e)
                        } catch (e) {
                            throw t = !1,
                            e
                        }
                        finally {
                            this._markUpdated()
                        }
                        t && (this._updateState & K || (this._updateState = this._updateState | K, this.firstUpdated(e)), this.updated(e))
                    }
                    _markUpdated() {
                        this._changedProperties = new Map,
                        this._updateState = this._updateState & ~Y
                    }
                    get updateComplete() {
                        return this._updatePromise
                    }
                    shouldUpdate(t) {
                        return !0
                    }
                    update(t) {
                        void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((t, e) => this._propertyToAttribute(e, this[e], t)), this._reflectingProperties = void 0)
                    }
                    updated(t) {}
                    firstUpdated(t) {}
                }
                tt.finalized = !0;
                const et = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
                Symbol(),
                (window.litElementVersions || (window.litElementVersions = [])).push("2.0.1");
                const st = t => t.flat ? t.flat(1 / 0) : function t(e, s = []) {
                    for (let i = 0, n = e.length; i < n; i++) {
                        const n = e[i];
                        Array.isArray(n) ? t(n, s) : s.push(n)
                    }
                    return s
                }
                (t);
                class it extends tt {
                    static finalize() {
                        super.finalize(),
                        this._styles = this.hasOwnProperty(JSCompiler_renameProperty("styles", this)) ? this._getUniqueStyles() : this._styles || []
                    }
                    static _getUniqueStyles() {
                        const t = this.styles,
                        e = [];
                        return Array.isArray(t) ? st(t).reduceRight((t, e) => (t.add(e), t), new Set).forEach(t => e.unshift(t)) : t && e.push(t),
                        e
                    }
                    initialize() {
                        super.initialize(),
                        this.renderRoot = this.createRenderRoot(),
                        window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
                    }
                    createRenderRoot() {
                        return this.attachShadow({
                            mode: "open"
                        })
                    }
                    adoptStyles() {
                        const t = this.constructor._styles;
                        0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? et ? this.renderRoot.adoptedStyleSheets = t.map(t => t.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t => t.cssText), this.localName))
                    }
                    connectedCallback() {
                        super.connectedCallback(),
                        this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
                    }
                    update(t) {
                        super.update(t);
                        const e = this.render();
                        e instanceof x && this.constructor.render(e, this.renderRoot, {
                            scopeName: this.localName,
                            eventContext: this
                        }),
                        this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach(t => {
                                const e = document.createElement("style");
                                e.textContent = t.cssText,
                                this.renderRoot.appendChild(e)
                            }))
                    }
                    render() {}
                }
                it.finalized = !0,
                it.render = ((t, e, s) => {
                    const i = s.scopeName,
                    n = D.has(e),
                    a = e instanceof ShadowRoot && z && t instanceof x,
                    o = a && !F.has(i),
                    r = o ? document.createDocumentFragment() : e;
                    if (((t, e, s) => {
                            let i = D.get(e);
                            void 0 === i && (h(e, e.firstChild), D.set(e, i = new A(Object.assign({
                                                templateFactory: P
                                            }, s))), i.appendInto(e)),
                            i.setValue(t),
                            i.commit()
                        })(t, r, Object.assign({
                                templateFactory: (t => e => {
                                    const s = H(e.type, t);
                                    let i = j.get(s);
                                    void 0 === i && (i = {
                                            stringsArray: new WeakMap,
                                            keyString: new Map
                                        }, j.set(s, i));
                                    let n = i.stringsArray.get(e.strings);
                                    if (void 0 !== n)
                                        return n;
                                    const a = e.strings.join(g);
                                    if (void 0 === (n = i.keyString.get(a))) {
                                        const s = e.getTemplateElement();
                                        z && window.ShadyCSS.prepareTemplateDom(s, t),
                                        n = new f(e, s),
                                        i.keyString.set(a, n)
                                    }
                                    return i.stringsArray.set(e.strings, n),
                                    n
                                })(i)
                            }, s)), o) {
                        const t = D.get(r);
                        D.delete(r),
                        t.value instanceof C && ((t, e, s) => {
                            F.add(s);
                            const i = t.querySelectorAll("style");
                            if (0 === i.length)
                                return void window.ShadyCSS.prepareTemplateStyles(e.element, s);
                            const n = document.createElement("style");
                            for (let t = 0; t < i.length; t++) {
                                const e = i[t];
                                e.parentNode.removeChild(e),
                                n.textContent += e.textContent
                            }
                            if (s = s, W.forEach(t => {
                                    const e = j.get(H(t, s));
                                    void 0 !== e && e.keyString.forEach(t => {
                                        const {
                                            element: {
                                                content: e
                                            }
                                        } = t,
                                        s = new Set;
                                        Array.from(e.querySelectorAll("style")).forEach(t => {
                                            s.add(t)
                                        }),
                                        R(t, s)
                                    })
                                }), function (t, e, s = null) {
                                const {
                                    element: {
                                        content: i
                                    },
                                    parts: n
                                } = t;
                                if (null === s || void 0 === s)
                                    return void i.appendChild(e);
                                    const a = document.createTreeWalker(i, M, null, !1);
                                    let o = V(n),
                                    r = 0,
                                    l = -1;
                                    for (; a.nextNode(); )
                                        for (l++, a.currentNode === s && (r = B(e), s.parentNode.insertBefore(e, s)); -1 !== o && n[o].index === l; ) {
                                            if (r > 0) {
                                                for (; -1 !== o; )
                                                    n[o].index += r, o = V(n, o);
                                                return
                                            }
                                            o = V(n, o)
                                        }
                                }
                                    (e, n, e.element.content.firstChild), window.ShadyCSS.prepareTemplateStyles(e.element, s), window.ShadyCSS.nativeShadow) {
                                    const s = e.element.content.querySelector("style");
                                    t.insertBefore(s.cloneNode(!0), t.firstChild)
                                }
                            else {
                                e.element.content.insertBefore(n, e.element.content.firstChild);
                                const t = new Set;
                                t.add(n),
                                R(e, t)
                            }
                        })(r, t.value.template, i),
                        h(e, e.firstChild),
                        e.appendChild(r),
                        D.set(e, t)
                    }
                    !n && a && window.ShadyCSS.styleElement(e.host)
                }),
                customElements.define("ha-config-custom-ui", class extends it {
                    render() {
                        return L `
        <style include="ha-style"></style>
        <app-header-layout has-scrolling-region>
          <app-header slot="header" fixed>
            <app-toolbar>
              <paper-icon-button
                icon='hass:arrow-left'
                @click="${this._backHandler}"
              ></paper-icon-button>
              <div main-title>Custom UI settings</div>
            </app-toolbar>
          </app-header>
    
          <ha-config-section .is-wide="${this.isWide}">
            <paper-card heading='Device name'>
              <div class='card-content'>
                Set device name so that you can reference it in per-device settings
                <paper-input
                  label='Name'
                  .value="@{this.name}"
                ></paper-input>
              </div>
            </paper-card>
          </ha-config-section>
        </app-header-layout>
        `
                    }
                    static get properties() {
                        return {
                            isWide: {
                                type: Boolean,
                                attribute: "is-wide"
                            },
                            name: {
                                type: String,
                                reflect: !0,
                                observer: "nameChanged"
                            }
                        }
                    }
                    attributeChangedCallback(t, e, s) {
                        "name" === t && this.nameChanged(s),
                        super.attributeChangedCallback(t, e, s)
                    }
                    connectedCallback() {
                        super.connectedCallback(),
                        this.name = window.customUI.getName()
                    }
                    nameChanged(t) {
                        window.customUI.setName(t)
                    }
                    _backHandler() {
                        window.history.back();
                        const t = new CustomEvent("location-changed");
                        this.dispatchEvent(t)
                    }
                });
                const nt = {
                    DOMAIN_DEVICE_CLASS: {
                        binary_sensor: ["battery", "cold", "connectivity", "door", "garage_door", "gas", "heat", "light", "lock", "moisture", "motion", "moving", "occupancy", "opening", "plug", "power", "presence", "problem", "safety", "smoke", "sound", "vibration", "window"],
                        cover: ["awning", "blind", "curtain", "damper", "door", "garage", "shade", "shutter", "window"],
                        sensor: ["battery", "humidity", "illuminance", "temperature", "pressure", "power", "signal_strength"],
                        switch : ["switch", "outlet"]
                },
                UNKNOWN_TYPE: "json",
                ADD_TYPE: "key-value",
                TYPE_TO_TAG: {
                    string: "ha-customize-string",
                    json: "ha-customize-string",
                    icon: "ha-customize-icon",
                    boolean: "ha-customize-boolean",
                    array: "ha-customize-array",
                    "key-value": "ha-customize-key-value"
                }
            };
            nt.LOGIC_STATE_ATTRIBUTES = nt.LOGIC_STATE_ATTRIBUTES || {
                entity_picture: void 0,
                friendly_name: {
                    type: "string",
                    description: "Name"
                },
                icon: {
                    type: "icon"
                },
                emulated_hue: {
                    type: "boolean",
                    domains: ["emulated_hue"]
                },
                emulated_hue_name: {
                    type: "string",
                    domains: ["emulated_hue"]
                },
                haaska_hidden: void 0,
                haaska_name: void 0,
                homebridge_hidden: {
                    type: "boolean"
                },
                homebridge_name: {
                    type: "string"
                },
                supported_features: void 0,
                attribution: void 0,
                custom_ui_more_info: {
                    type: "string"
                },
                custom_ui_state_card: {
                    type: "string"
                },
                device_class: {
                    type: "array",
                    options: nt.DOMAIN_DEVICE_CLASS,
                    description: "Device class",
                    domains: ["binary_sensor", "cover", "sensor", "switch"]
                },
                hidden: {
                    type: "boolean",
                    description: "Hide from UI"
                },
                assumed_state: {
                    type: "boolean",
                    domains: ["switch", "light", "cover", "climate", "fan", "group", "water_heater"]
                },
                initial_state: {
                    type: "string",
                    domains: ["automation"]
                },
                unit_of_measurement: {
                    type: "string"
                }
            };
            var at = nt;
            window.hassAttributeUtil = window.hassAttributeUtil || {};
            const ot = ["single-line", "break-slider", "break-slider-toggle", "hide-slider", "no-slider"],
            rt = {
                group: void 0,
                device: void 0,
                templates: void 0,
                state: void 0,
                _stateDisplay: void 0,
                control_element: {
                    type: "string"
                },
                state_card_mode: {
                    type: "array",
                    options: {
                        light: ot.concat("badges"),
                        cover: ot.concat("badges"),
                        climate: ot.concat("badges"),
                        "*": ["badges"]
                    }
                },
                state_card_custom_ui_secondary: {
                    type: "string"
                },
                badges_list: {
                    type: "json"
                },
                show_last_changed: {
                    type: "boolean"
                },
                hide_control: {
                    type: "boolean"
                },
                extra_data_template: {
                    type: "string"
                },
                extra_badge: {
                    type: "json"
                },
                stretch_slider: {
                    type: "boolean"
                },
                slider_theme: {
                    type: "json"
                },
                theme: {
                    type: "string"
                },
                confirm_controls: {
                    type: "boolean"
                },
                confirm_controls_show_lock: {
                    type: "boolean"
                },
                hide_in_default_view: {
                    type: "boolean"
                },
                icon_color: {
                    type: "string"
                }
            };
            window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES = at.LOGIC_STATE_ATTRIBUTES,
            window.hassAttributeUtil.UNKNOWN_TYPE = at.UNKNOWN_TYPE,
            Object.assign(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES, rt),
            window.customUI = window.customUI || {
                SUPPORTED_SLIDER_MODES: ["single-line", "break-slider", "break-slider-toggle", "hide-slider", "no-slider"],
                domHost(t) {
                    if (t === document)
                        return null;
                    const e = t.getRootNode();
                    return e instanceof DocumentFragment ? e.host : e
                },
                lightOrShadow: (t, e) => t.shadowRoot ? t.shadowRoot.querySelector(e) : t.querySelector(e),
                getElementHierarchy(t, e) {
                    if (null === t)
                        return null;
                    const s = e.shift();
                    return s ? window.customUI.getElementHierarchy(window.customUI.lightOrShadow(t, s), e) : t
                },
                getContext(t) {
                    if (void 0 === t._context) {
                        t._context = [];
                        for (let e = "HA-ENTITIES-CARD" === t.tagName ? window.customUI.domHost(t) : t; e; e = window.customUI.domHost(e))
                            switch (e.tagName) {
                            case "HA-ENTITIES-CARD":
                                e.groupEntity ? t._context.push(e.groupEntity.entity_id) : !1 === e.groupEntity && e.states && e.states.length && t._context.push(`group.${a(e.states[0])}`);
                                break;
                            case "MORE-INFO-GROUP":
                            case "STATE-CARD-CONTENT":
                                e.stateObj && t._context.push(e.stateObj.entity_id);
                                break;
                            case "HA-CARDS":
                                t._context.push(e.getAttribute("data-view") || "default_view")
                            }
                        t._context.reverse()
                    }
                    return t._context
                },
                findMatch: (t, e) => e ? e[t] ? t : Object.keys(e).find(e => t.match(`^${e}$`)) : null,
                maybeChangeObjectByDevice(t) {
                    const e = window.customUI.getName();
                    if (!e)
                        return t;
                    const s = this.findMatch(e, t.attributes.device);
                    if (!s)
                        return t;
                    const i = Object.assign({}, t.attributes.device[s]);
                    return Object.keys(i).length ? window.customUI.applyAttributes(t, i) : t
                },
                maybeChangeObjectByGroup(t, e) {
                    const s = window.customUI.getContext(t);
                    if (!s)
                        return e;
                    if (!e.attributes.group)
                        return e;
                    const i = {};
                    return s.forEach(t => {
                        const s = this.findMatch(t, e.attributes.group);
                        e.attributes.group[s] && Object.assign(i, e.attributes.group[s])
                    }),
                    Object.keys(i).length ? window.customUI.applyAttributes(e, i) : e
                },
                _setKeep(t, e) {
                    void 0 === t._cui_keep ? t._cui_keep = e : t._cui_keep = t._cui_keep && e
                },
                maybeApplyTemplateAttributes(t, e, s, i) {
                    if (!i.templates)
                        return window.customUI._setKeep(s, !0) , s;
                        const n = {};
                        let a = !1,
                        o = !1;
                        if (Object.keys(i.templates).forEach(r => {
                                const l = i.templates[r];
                                l.match(/\b(entities|hass)\b/) && (a = !0);
                                const c = window.customUI.computeTemplate(l, t, e, s, i, s.untemplated_attributes && s.untemplated_attributes[r] || i[r], s.untemplated_state || s.state);
                                null !== c && (n[r] = c, "state" === r ? c !== s.state && (o = !0) : "_stateDisplay" === r ? c !== s._stateDisplay && (o = !0) : c !== i[r] && (o = !0))
                            }), window.customUI._setKeep(s, !a), !o)
                            return s;
                        if (s.attributes === i) {
                            const t = window.customUI.applyAttributes(s, n);
                            return Object.prototype.hasOwnProperty.call(n, "state") && null !== n.state && (t.state = String(n.state), t.untemplated_state = s.state),
                            Object.prototype.hasOwnProperty.call(n, "_stateDisplay") && (t._stateDisplay = n._stateDisplay, t.untemplated_stateDisplay = s._stateDisplay),
                            window.customUI._setKeep(t, !a),
                            t
                        }
                        return Object.assign({}, s)
                    },
                    maybeApplyTemplates(t, e, s) {
                        const i = window.customUI.maybeApplyTemplateAttributes(t, e, s, s.attributes);
                        let n = i !== s;
                        function a(s) {
                            s && (Object.values(s).forEach(s => {
                                    const a = window.customUI.maybeApplyTemplateAttributes(t, e, i, s);
                                    n |= a !== i
                                }), a(s.device), a(s.group))
                        }
                        return a(s.attributes.device),
                        a(s.attributes.group),
                        i !== s ? i : n ? Object.assign({}, s) : s
                    },
                    applyAttributes: (t, e) => ({
                        entity_id: t.entity_id,
                        state: t.state,
                        attributes: Object.assign({}, t.attributes, e),
                        untemplated_attributes: t.attributes,
                        last_changed: t.last_changed
                    }),
                    maybeChangeObject(t, e, s, i) {
                        if (s)
                            return e;
                        let n = window.customUI.maybeChangeObjectByDevice(e);
                        return n = window.customUI.maybeChangeObjectByGroup(t, n),
                        (n = window.customUI.maybeApplyTemplateAttributes(t.hass, t.hass.states, n, n.attributes)) !== e && n.attributes.hidden && i ? null : n
                    },
                    fixGroupTitles() {
                        const t = window.customUI.getElementHierarchy(document, ["home-assistant", "home-assistant-main"]);
                        if (null === t)
                            return void window.setTimeout(window.customUI.fixGroupTitles, 1e3);
                        const e = window.customUI.getElementHierarchy(t, ["partial-cards", "ha-cards[view-visible]"]);
                        null !== e && (window.customUI.lightOrShadow(e, ".main") || e.$.main).querySelectorAll("ha-entities-card").forEach(t => {
                            if (t.groupEntity) {
                                const e = window.customUI.maybeChangeObject(t, t.groupEntity, !1, !1);
                                e !== t.groupEntity && e.attributes.friendly_name && (window.customUI.lightOrShadow(t, ".name").textContent = e.attributes.friendly_name)
                            }
                        })
                    },
                    controlColumns(t) {
                        const e = window.customUI.getElementHierarchy(document, ["home-assistant", "home-assistant-main", "partial-cards"]);
                        if (null === e)
                            return void window.setTimeout(window.customUI.controlColumns.bind(null, t), 1e3);
                        const s = e.handleWindowChange || e._updateColumns;
                        e.mqls.forEach(t => {
                            t.removeListener(s)
                        }),
                        e.mqls = t.map(t => {
                                const e = window.matchMedia(`(min-width: ${t}px)`);
                                return e.addListener(s),
                                e
                            }),
                        s()
                    },
                    updateMoreInfo() {
                        var majorVersion = window.customUI.lightOrShadow(document, "home-assistant").hass.connection.haVersion.split(".")[0];
                        var minorVersion = window.customUI.lightOrShadow(document, "home-assistant").hass.connection.haVersion.split(".")[1];
                        s = 0,
                        i = setInterval(function () {
                                ++s >= 2 && clearInterval(i);
                                try {
                                    var t;
                                    if (majorVersion > 0 || minorVersion >= 118) {
                                       var moreInfoNodeName;
                                       var contentChild;
                                       contentChild = document.querySelector("home-assistant").shadowRoot.querySelector("ha-more-info-dialog").shadowRoot.querySelector("ha-dialog").getElementsByClassName("content")[0].querySelector("more-info-content").childNodes;
                                       for(var c=0; c< contentChild.length;c++){
                                         var nodeItem = contentChild.item(c);
                                         if(nodeItem.nodeName.toLowerCase().startsWith("more-info-")){
                                           moreInfoNodeName = nodeItem.nodeName.toLowerCase()
                                         }
                                       }
                                       if (moreInfoNodeName == "more-info-group") {
                                         var moreInfoNestedNodeName;
                                         var contentChildNested;
                                         contentChildNested = document.querySelector("home-assistant").shadowRoot.querySelector("ha-more-info-dialog").shadowRoot.querySelector("ha-dialog").getElementsByClassName("content")[0].querySelector("more-info-group").shadowRoot.childNodes;
                                         for(var c=0; c< contentChildNested.length;c++){
                                           var nodeItemNested = contentChildNested.item(c);
                                           if(nodeItemNested.nodeName.toLowerCase().startsWith("more-info-")){
                                             moreInfoNestedNodeName = nodeItemNested.nodeName.toLowerCase()
                                           }
                                         }
                                         t = document.querySelector("home-assistant").shadowRoot.querySelector("ha-more-info-dialog").shadowRoot.querySelector("ha-dialog").getElementsByClassName("content")[0].querySelector("more-info-group").shadowRoot.querySelector(moreInfoNestedNodeName).shadowRoot.querySelector("ha-attributes").shadowRoot.querySelectorAll(".data-entry")
                                       } else {
                                         t = document.querySelector("home-assistant").shadowRoot.querySelector("ha-more-info-dialog").shadowRoot.querySelector("ha-dialog").getElementsByClassName("content")[0].querySelector(moreInfoNodeName).shadowRoot.querySelector("ha-attributes").shadowRoot.querySelectorAll(".data-entry")
                                       }
                                     } else if (minorVersion >= 115) {
                                      var moreInfoNodeName;
                                      var contentChild;
                                      contentChild = document.querySelector("home-assistant").shadowRoot.querySelector("ha-more-info-dialog").shadowRoot.querySelector("ha-dialog").getElementsByClassName("content")[0].childNodes;
                                      for(var c=0; c< contentChild.length;c++){
                                        var nodeItem = contentChild.item(c);
                                        if(nodeItem.nodeName.toLowerCase().startsWith("more-info-")){
                                          moreInfoNodeName = nodeItem.nodeName.toLowerCase()
                                        }
                                      }
                                      if (moreInfoNodeName == "more-info-group") {
                                        var moreInfoNestedNodeName;
                                        var contentChildNested;
                                        contentChildNested = document.querySelector("home-assistant").shadowRoot.querySelector("ha-more-info-dialog").shadowRoot.querySelector("ha-dialog").getElementsByClassName("content")[0].querySelector("more-info-group").shadowRoot.childNodes;
                                        for(var c=0; c< contentChildNested.length;c++){
                                          var nodeItemNested = contentChildNested.item(c);
                                          if(nodeItemNested.nodeName.toLowerCase().startsWith("more-info-")){
                                            moreInfoNestedNodeName = nodeItemNested.nodeName.toLowerCase()
                                          }
                                        }
                                        t = document.querySelector("home-assistant").shadowRoot.querySelector("ha-more-info-dialog").shadowRoot.querySelector("ha-dialog").getElementsByClassName("content")[0].querySelector("more-info-group").shadowRoot.querySelector(moreInfoNestedNodeName).shadowRoot.querySelector("ha-attributes").shadowRoot.querySelectorAll(".data-entry")
                                      } else {
                                        t = document.querySelector("home-assistant").shadowRoot.querySelector("ha-more-info-dialog").shadowRoot.querySelector("ha-dialog").getElementsByClassName("content")[0].querySelector(moreInfoNodeName).shadowRoot.querySelector("ha-attributes").shadowRoot.querySelectorAll(".data-entry")
                                      }
                                    } else if (minorVersion >= 113) {
                                      // >= 113
                                      t = document.getElementsByTagName("home-assistant")[0].shadowRoot.querySelector("ha-more-info-dialog").shadowRoot.querySelector("ha-dialog").getElementsByClassName("content")[0].querySelector("more-info-content").childNodes[0].shadowRoot.querySelector("ha-attributes").shadowRoot.querySelectorAll(".data-entry")
                                      } else {
                                      // < 113
                                      t = document.getElementsByTagName("home-assistant")[0].shadowRoot.querySelector("ha-more-info-dialog").shadowRoot.querySelector("more-info-controls").shadowRoot.querySelector("paper-dialog-scrollable").querySelector("more-info-content").childNodes[0].shadowRoot.querySelector("ha-attributes").shadowRoot.querySelectorAll(".data-entry")
                                    }
                                    if (t.length) {
                                        var e;
                                        for (var n = 0; n < t.length; n++) {
                                            var o = t[n].getElementsByClassName("key")[0];
                                            if (o.innerText.toLowerCase().trim() == "hide attributes") {
                                              e = o.parentNode.getElementsByClassName("value")[0].innerText.split(",").map(function(item) { return item.replace("_", " ").trim(); });
                                              e.push("hide attributes");
                                            }
                                        }
                                        for (var n = 0; n < t.length; n++) {
                                            var o = t[n].getElementsByClassName("key")[0];
                                            (e.includes(o.innerText.toLowerCase().trim()) || e.includes("all")) && (o.parentNode.style.display = "none")
                                        }
                                        clearInterval(i)
                                    }
                                } catch (err) {}
                            }, 100)
                    },
                    updateConfigPanel() {
                        if (!window.location.pathname.startsWith("/config"))
                            return;
                        const t = window.customUI.getElementHierarchy(document, ["home-assistant", "home-assistant-main", "partial-panel-resolver", "ha-panel-config"]);
                        if (!t)
                            return void window.setTimeout(window.customUI.updateConfigPanel, 100);
                        const e = window.customUI.getElementHierarchy(t, ["ha-config-dashboard", "ha-config-navigation"]);
                        try {
                            e && (e.localize && !e.cuiPatch && (e.cuiPatch = !0, e._originalComputeLoaded = e._computeLoaded, e._originalComputeCaption = e._computeCaption, e._originalComputeDescription = e._computeDescription, e._computeLoaded = ((t, s) => "customui" === s || e._originalComputeLoaded(t, s)), e._computeCaption = ((t, s) => "customui" === t ? "Custom UI" : e._originalComputeCaption(t, s)), e._computeDescription = ((t, s) => "customui" === t ? "SetUI tweaks" : e._originalComputeDescription(t, s))), e.pages.some(t => "customui" === t || "customui" === t.domain) || e.push("pages", e.localize ? "customui" : {
                                    domain: "customui",
                                    caption: "Custom UI",
                                    description: "Set UI tweaks.",
                                    loaded: !0
                                }));
                        } catch (err) {}
                        const s = () => {
                            const e = document.createElement("ha-config-custom-ui");
                            return e.isWide = t.isWide,
                            e.setAttribute("page-name", "customui"),
                            e
                        },
                        i = window.customUI.lightOrShadow(t, "iron-pages");
                        if (i) {
                            if ("HA-CONFIG-CUSTOM-UI" !== i.lastElementChild.tagName) {
                                const t = s();
                                i.appendChild(t),
                                i.addEventListener("iron-items-changed", () => {
                                    window.location.pathname.startsWith("/config/customui") && i.select("customui")
                                })
                            }
                        } else if (t.shadowRoot) {
                            const e = t.shadowRoot || t;
                            if ("HA-CONFIG-CUSTOM-UI" !== e.lastElementChild.tagName) {
                                const t = s();
                                e.appendChild(t)
                            }
                            const i = window.location.pathname.startsWith("/config/customui");
                            e.lastElementChild.style.display = i ? "" : "none"
                        } else
                            t.routerOptions && t.routerOptions.routes && (t.routerOptions.routes.customui || (t.routerOptions.routes.customui = {
                                        tag: "ha-config-custom-ui",
                                        load: () => Promise.resolve()
                                    }, window.location.pathname.startsWith("/config/customui") && t.update(new Map([["route", void 0]]))))
                    },
                    installStatesHook() {
                        customElements.whenDefined("home-assistant").then(() => {
                            const t = customElements.get("home-assistant");
                            if (!t || !t.prototype._updateHass)
                                return;
                            const e = t.prototype._updateHass;
                            t.prototype._updateHass = function (t) {
                                const {
                                    hass: s
                                } = this;
                                t.states && Object.keys(t.states).forEach(e => {
                                    const i = t.states[e];
                                    if (i._cui_keep)
                                        return;
                                    const n = window.customUI.maybeApplyTemplates(s, t.states, i);
                                    s.states && i !== s.states[e] ? t.states[e] = n : i !== n && (t.states[e] = n)
                                }),
                                e.call(this, t),
                                t.themes && s._themeWaiters && (s._themeWaiters.forEach(t => t.stateChanged(t.state)), s._themeWaiters = void 0)
                            };
                            const s = window.customUI.lightOrShadow(document, "home-assistant");
                            s.hass && s.hass.states && s._updateHass({
                                states: s.hass.states
                            })
                        })
                    },
                    installPartialCards() {
                        customElements.whenDefined("partial-cards").then(() => {
                            const t = customElements.get("partial-cards");
                            t && t.prototype._defaultViewFilter && (t.prototype._defaultViewFilter = ((t, e) => {
                                    if (t.states[e].attributes.hidden)
                                        return !1;
                                    const s = {};
                                    return Object.values(t.states).forEach(e => {
                                        if (e.attributes && e.attributes.hide_in_default_view) {
                                            const i = e.entity_id;
                                            if (s[i])
                                                return;
                                            if (s[i] = e, e.attributes.view) {
                                                const i = function (t, s) {
                                                    const i = {};
                                                    return e.attributes.entity_id.forEach(e => {
                                                        const s = t[e];
                                                        if (s && !s.attributes.hidden && (i[s.entity_id] = s, "group" === n(s.entity_id))) {
                                                            const e = function (t, e) {
                                                                const i = {};
                                                                return s.attributes.entity_id.forEach(e => {
                                                                    const s = t[e];
                                                                    s && (i[s.entity_id] = s)
                                                                }),
                                                                i
                                                            }
                                                            (t);
                                                            Object.keys(e).forEach(t => {
                                                                const s = e[t];
                                                                s.attributes.hidden || (i[t] = s)
                                                            })
                                                        }
                                                    }),
                                                    i
                                                }
                                                (t.states);
                                                Object.keys(i).filter(t => !1 !== i[t].attributes.hide_in_default_view).forEach(t => {
                                                    s[t] = i[t]
                                                })
                                            }
                                        }
                                    }),
                                    !s[e]
                                }))
                        })
                    },
                    installActionName(t) {
                        customElements.whenDefined(t).then(() => {
                            const e = customElements.get(t);
                            e && e.prototype && Object.defineProperty(e.prototype, "localize", {
                                get: () => (function (t) {
                                    return this.stateObj && this.stateObj.attributes && this.stateObj.attributes.action_name ? this.stateObj.attributes.action_name : this.__data.localize(t)
                                }),
                                set() {}
                            })
                        })
                    },
                    installHaStateLabelBadge() {
                        customElements.whenDefined("ha-state-label-badge").then(() => {
                            const t = customElements.get("ha-state-label-badge");
                            t && t.prototype.stateChanged && (t.prototype.stateChanged = function (t) {
                                t.attributes.theme && (null === this.hass.themes ? (this.hass._themeWaiters = this.hass._themeWaiters || [], this.hass._themeWaiters.push(this)) : i(this, this.hass.themes || {
                                        default_theme: "default",
                                        themes: {}
                                    }, t.attributes.theme || "default")),
                                this.updateStyles(),
                                this.startInterval && this.startInterval(t)
                            })
                        })
                    },
                    installStateBadge() {
                        customElements.whenDefined("state-badge").then(() => {
                            const t = customElements.get("state-badge");
                            if (t)
                                if (t.prototype._updateIconAppearance) {
                                    const e = t.prototype._updateIconAppearance;
                                    t.prototype._updateIconAppearance = function (t) {
                                        t.attributes.icon_color && !t.attributes.entity_picture ? (this.style.backgroundImage = "", Object.assign(this.$.icon.style, {
                                                color: t.attributes.icon_color,
                                                filter: ""
                                            })) : e.call(this, t)
                                    }
                                } else if (t.prototype.updated) {
                                    const e = t.prototype.updated;
                                    t.prototype.updated = function (t) {
                                        if (!t.has("stateObj"))
                                            return;
                                        const {
                                            stateObj: s
                                        } = this;
                                        s.attributes.icon_color && !s.attributes.entity_picture ? (this.style.backgroundImage = "", this._showIcon = true, this._iconStyle = {
                                                color: s.attributes.icon_color
                                            }) : e.call(this, t)
                                    }
                                }
                        })
                    },
                    installHaAttributes() {
                        customElements.whenDefined("ha-attributes").then(() => {
                            const t = customElements.get("ha-attributes");
                            t && t.prototype.computeFiltersArray && window.hassAttributeUtil && (t.prototype.computeFiltersArray = function (t) {
                                return Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES).concat(t ? t.split(",") : [])
                            })
                        })
                    },
                    installHaFormCustomize() {
                        window.location.pathname.startsWith("/config") && customElements.whenDefined("ha-form-customize").then(() => {
                            const t = customElements.get("ha-form-customize");
                            t ? window.customUI.haFormCustomizeInitDone || (window.customUI.haFormCustomizeInitDone = !0, window.hassAttributeUtil && (t.prototype._computeSingleAttribute && (t.prototype._computeSingleAttribute = function (t, e, s) {
                                        const i = window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[t] || {
                                            type: window.hassAttributeUtil.UNKNOWN_TYPE
                                        };
                                        return this._initOpenObject(t, "json" === i.type ? JSON.stringify(e) : e, s, i)
                                    }), t.prototype.getNewAttributesOptions && (t.prototype.getNewAttributesOptions = function (t, e, s, i) {
                                        return Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES).filter(t => {
                                            const e = window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[t];
                                            return e && (!e.domains || !this.entity || e.domains.includes(a(this.entity)))
                                        }).filter(this.filterFromAttributes(t)).filter(this.filterFromAttributes(e)).filter(this.filterFromAttributes(s)).filter(this.filterFromAttributes(i)).sort().concat("Other")
                                    }))) : window.setTimeout(window.customUI.installHaFormCustomize, 100)
                        })
                    },
                    installClassHooks() {
                        window.customUI.classInitDone || (window.customUI.classInitDone = !0, window.customUI.installPartialCards(), window.customUI.installStatesHook(), window.customUI.installHaStateLabelBadge(), window.customUI.installStateBadge(), window.customUI.installHaAttributes(), window.customUI.installActionName("state-card-scene"), window.customUI.installActionName("state-card-script"))
                    },
                    init() {
                        if (window.customUI.initDone)
                            return;
                        window.customUI.installClassHooks();
                        const t = window.customUI.lightOrShadow(document, "home-assistant");
                        t.hass && t.hass.states ? (window.customUI.initDone = !0, window.customUI.runHooks(), window.addEventListener("location-changed", window.setTimeout.bind(null, window.customUI.runHooks, 100)), console.log("Loaded CustomUI JS 20201218 adapted for HA 2020.X.X+"), window.addEventListener("hass-more-info", window.customUI.updateMoreInfo), window.CUSTOM_UI_LIST || (window.CUSTOM_UI_LIST = []), window.CUSTOM_UI_LIST.push({
                                name: "CustomUI",
                                version: "JS 20201218 adapted for HA 2020.X.X +",
                                url: "https://github.com/Mariusthvdb/custom-ui"
                            })) : window.setTimeout(window.customUI.init, 1e3)
                    },
                    runHooks() {
                        window.customUI.fixGroupTitles(),
                        window.customUI.updateConfigPanel(),
                        window.customUI.installHaFormCustomize()
                    },
                    getName: () => window.localStorage.getItem("ha-device-name") || "",
                    setName(t) {
                        window.localStorage.setItem("ha-device-name", t || "")
                    },
                    computeTemplate(t, e, s, i, n, a, o) {
                        const r = t.indexOf("return") >= 0 ? t : `return \`${t}\`;`;
                        try {
                            return new Function("hass", "entities", "entity", "attributes", "attribute", "state", r)(e, s, i, n, a, o)
                        } catch (t) {
                            if (t instanceof SyntaxError || t instanceof ReferenceError)
                                return console.warn(`${t.name}: ${t.message} in template ${r}`), null;
                            throw t
                        }
                    }
                },
                window.customUI.init(),
                s(1);
                class lt {
                    constructor(t) {
                        this.value = t.toString()
                    }
                    toString() {
                        return this.value
                    }
                }
                const ct = function (t, ...e) {
                    const s = document.createElement("template");
                    return s.innerHTML = e.reduce((e, s, i) => e + function (t) {
                            if (t instanceof HTMLTemplateElement)
                                return t.innerHTML;
                            if (t instanceof lt)
                                return function (t) {
                                    if (t instanceof lt)
                                        return t.value;
                                    throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)
                                }
                            (t);
                            throw new Error(`non-template value passed to Polymer's html function: ${t}`)
                        }
                            (s) + t[i + 1], t[0]),
                    s
                };
                var dt = t => (class extends t {
                        static get properties() {
                            return {
                                hass: Object,
                                inDialog: {
                                    type: Boolean,
                                    value: !1
                                },
                                stateObj: Object,
                                controlElement: String,
                                extra: {
                                    type: Array,
                                    computed: "computeExtra(hass, stateObj)"
                                }
                            }
                        }
                        computeExtra(t, e) {
                            let s = e.attributes.extra_data_template;
                            return s ? (Array.isArray(s) || (s = [s]), s.map(s => window.customUI.computeTemplate(s, t, t.states, e, e.attributes, void 0, e.state)).filter(t => null !== t)) : []
                        }
                        showLastChanged(t, e, s) {
                            return !!e || !s.length && !!t.attributes.show_last_changed
                        }
                        hasExtra(t) {
                            return t.length > 0
                        }
                    });
                function ut() {
                    customElements.define("dynamic-element", class extends Polymer.Element {
                        static get properties() {
                            return {
                                hass: Object,
                                stateObj: Object,
                                elementName: String,
                                inDialog: {
                                    type: Boolean,
                                    value: !1
                                }
                            }
                        }
                        static get observers() {
                            return ["observerFunc(hass, stateObj, elementName, inDialog)"]
                        }
                        observerFunc(t, e, s, i) {
                            o(this, s ? s.toUpperCase() : "DIV", {
                                hass: t,
                                stateObj: e,
                                inDialog: i
                            })
                        }
                    })
                }
                function ht() {
                    customElements.define("ha-themed-slider", class extends Polymer.Element {
                        static get template() {
                            return ct `
          <style>
            :host {
              margin: var(--ha-themed-slider-margin, initial);
            }
            .disable-off-when-min {
              --paper-slider-pin-start-color:  var(--paper-slider-pin-color);
            }
    
            .disable-off-when-min.is-on {
              --paper-slider-knob-start-color: var(--paper-slider-knob-color);
              --paper-slider-knob-start-border-color: var(--paper-slider-knob-color);
            }
            paper-slider {
              margin: 4px 0;
              max-width: 100%;
              min-width: 100px;
              width: var(--ha-paper-slider-width, 200px);
            }
          </style>
    
          <paper-slider
               id='slider'
               min='[[_themedMin]]'
               max='[[_computeAttribute(theme, "max", max)]]'
               pin='[[_computeAttribute(theme, "pin", pin)]]'
               class$='[[computeClass(theme, isOn, _themedMin)]]' value='[[value]]'
               on-change='valueChanged'>
          </paper-slider>
          `
                        }
                        ready() {
                            super.ready(),
                            this.disableOffWhenMin = !this._computeAttribute(this.theme, "off_when_min", !this.disableOffWhenMin),
                            this.computeEnabledThemedReportWhenNotChanged(this.theme, this.disableReportWhenNotChanged)
                        }
                        connectedCallback() {
                            super.connectedCallback(),
                            this.$.slider._keyBindings = this.$.slider._keyBindings || {}
                        }
                        static get properties() {
                            return {
                                min: {
                                    type: Number,
                                    value: 0
                                },
                                max: {
                                    type: Number,
                                    value: 100
                                },
                                pin: {
                                    type: Boolean,
                                    value: !1
                                },
                                isOn: {
                                    type: Boolean,
                                    value: !1
                                },
                                disableOffWhenMin: {
                                    type: Boolean,
                                    value: !1,
                                    notify: !0
                                },
                                disableReportWhenNotChanged: {
                                    type: Boolean,
                                    value: !1
                                },
                                theme: Object,
                                value: {
                                    type: Number,
                                    notify: !0
                                },
                                _themedMin: {
                                    type: Number,
                                    computed: '_computeAttribute(theme, "min", min)'
                                }
                            }
                        }
                        static get observers() {
                            return ["computeEnabledThemedReportWhenNotChanged(theme, disableReportWhenNotChanged)"]
                        }
                        computeEnabledThemedReportWhenNotChanged(t, e) {
                            this._enabledThemedReportWhenNotChanged = this._computeAttribute(t, "report_when_not_changed", !e)
                        }
                        _computeAttribute(t, e, s) {
                            return t && e in t ? t[e] : s
                        }
                        computeClass(t, e, s) {
                            let i = "";
                            return e && (i += "is-on "),
                            this._computeAttribute(t, "off_when_min", !this.disableOffWhenMin) || 0 === s ? "" : `${i}disable-off-when-min`
                        }
                        valueChanged(t) {
                            this._enabledThemedReportWhenNotChanged || this.value !== t.target.value ? this.value = t.target.value : t.stopPropagation()
                        }
                    })
                }
                function pt() {
                    customElements.define("state-card-with-slider", class extends(dt(Polymer.Element)) {
                        static get template() {
                            return ct `
          <style is="custom-style" include="iron-flex iron-flex-alignment iron-flex-factors"></style>
          <style>
            #container {
              position: relative;
            }
            .second-line, .state-and-toggle, .state-info {
              max-width: 100%;
            }
            .nowrap .state-and-toggle {
              overflow: hidden;
              flex-grow: 0;
            }
            .nowrap .second-line {
              overflow: hidden;
            }
    
            .second-line {
              padding-top: 20px;
              padding-bottom: 16px;
              margin-top: -20px;
              margin-bottom: -16px;
            }
            .stretch .second-line, .stretch ha-themed-slider {
              width: 100%;
              --ha-paper-slider-width: 100%;
            }
            .nowrap .state-info {
              min-width: initial;
            }
            ha-themed-slider, .top-wrapper {
              min-width: 100px;
              max-width: 100%;
            }
            .top-wrapper.stretch {
              display: block;
            }
    
            .hidden {
              display: none;
            }
          </style>
    
          <div id='container' class$='horizontal layout flex top-wrapper [[_computeWrapClass(mode, stretchSlider, lineTooLong, inDialog)]]'>
            <div class='horizontal layout justified flex-auto state-and-toggle'>
              <state-info
                  class='state-info flex-auto'
                  hass='[[hass]]'
                  state-obj='[[stateObj]]'
                  in-dialog='[[showLastChanged(stateObj, inDialog, extra)]]'
                  secondary-line$='[[hasExtra(extra)]]'
              >
                <template is='dom-repeat' items='[[extra]]'>
                  <div>[[item]]</div>
                </template>
              </state-info>
              <template is='dom-if' if='[[breakSlider]]' class='hidden'>
                <dynamic-with-extra hass='[[hass]]' state-obj='[[stateObj]]' control-element='[[controlElement]]' in-dialog='[[inDialog]]'></dynamic-with-extra>
              </template>
            </div>
            <template is='dom-if' if='[[showSlider]]' restamp>
              <div class='horizontal layout flex-auto end-justified second-line'>
                <ha-themed-slider
                  id='slider'
                  max=[[max]]
                  min=[[min]]
                  theme='[[stateObj.attributes.slider_theme]]'
                  is-on='[[isOn(stateObj, nameOn)]]'
                  value='{{sliderValue}}'
                  disable-off-when-min='{{disableOffWhenMin}}'
                  on-change='sliderChanged'
                  on-click='stopPropagation'>
                </ha-themed-slider>
                <template is='dom-if' if='[[!breakSlider]]'>
                  <dynamic-with-extra hass='[[hass]]' state-obj='[[stateObj]]' control-element='[[controlElement]]' in-dialog='[[inDialog]]'></dynamic-with-extra>
                </template>
              </div>
            </template>
          </div>
          `
                        }
                        static get properties() {
                            return {
                                domain: String,
                                serviceMin: String,
                                serviceMax: String,
                                valueName: String,
                                setValueName: String,
                                nameOn: {
                                    type: String,
                                    value: "on"
                                },
                                min: {
                                    type: Number,
                                    value: 0
                                },
                                max: {
                                    type: Number,
                                    value: 255
                                },
                                sliderValue: {
                                    type: Number,
                                    value: 0
                                },
                                disableOffWhenMin: Boolean,
                                mode: String,
                                stretchSlider: {
                                    type: Boolean,
                                    value: !1
                                },
                                breakSlider: {
                                    type: Boolean,
                                    value: !1
                                },
                                hideSlider: {
                                    type: Boolean,
                                    value: !1
                                },
                                lineTooLong: {
                                    type: Boolean,
                                    value: !1
                                },
                                minLineBreak: Number,
                                maxLineBreak: Number,
                                showSlider: {
                                    type: Number,
                                    computed: "_showSlider(inDialog, stateObj, hideSlider)"
                                }
                            }
                        }
                        ready() {
                            super.ready(),
                            this._onIronResize = this._onIronResize.bind(this)
                        }
                        connectedCallback() {
                            super.connectedCallback(),
                            this._isConnected = !0,
                            window.addEventListener("resize", this._onIronResize),
                            this._waitForLayout()
                        }
                        disconnectedCallback() {
                            window.removeEventListener("resize", this._onIronResize),
                            this._isConnected = !1,
                            super.disconnectedCallback()
                        }
                        static get observers() {
                            return ["stateObjChanged(stateObj, nameOn, valueName)"]
                        }
                        _waitForLayout() {
                            this._isConnected && (this._setMode(), this._frameId || (this.readyToCompute = !1, this._frameId = window.requestAnimationFrame(() => {
                                            this._frameId = null,
                                            this.readyToCompute = !0,
                                            this._onIronResize()
                                        })))
                        }
                        _setMode() {
                            const t = {
                                hideSlider: "hide-slider" === this.mode && this.lineTooLong,
                                breakSlider: ("break-slider" === this.mode || "hide-slider" === this.mode) && this.lineTooLong
                            };
                            this.showSlider || (t.breakSlider = !0),
                            this.setProperties(t)
                        }
                        _onIronResize() {
                            if (!this.readyToCompute)
                                return;
                            if ("no-slider" === this.mode)
                                return void this.setProperties({
                                    hideSlider: !0,
                                    breakSlider: !0
                                });
                            const t = this.breakSlider,
                            e = this.hideSlider;
                            this.setProperties({
                                lineTooLong: !1,
                                hideSlider: !1,
                                breakSlider: !1
                            });
                            const {
                                container: s
                            } = this.$,
                            i = s.clientWidth;
                            if (0 !== i) {
                                if (i <= this.minLineBreak)
                                    this.lineTooLong = !0;
                                else if (i >= this.maxLineBreak)
                                    this.lineTooLong = !1;
                                else {
                                    if (e && "hide-slider" === this.mode)
                                        return void this._waitForLayout();
                                    const n = s.clientHeight,
                                    a = this.root.querySelector(".state-info").clientHeight;
                                    this.lineTooLong = n > 1.5 * a,
                                    this.lineTooLong ? this.minLineBreak = i : t || (this.maxLineBreak = i)
                                }
                                this._setMode()
                            }
                        }
                        _computeWrapClass(t, e, s, i) {
                            return i ? "" : "single-line" === t ? "nowrap" : e && s ? "stretch wrap" : "wrap"
                        }
                        _showSlider(t, e, s) {
                            return !t && !s
                        }
                        sliderChanged(t) {
                            const e = parseInt(t.target.value, 10),
                            s = {
                                entity_id: this.stateObj.entity_id
                            };
                            if (Number.isNaN(e))
                                return;
                            let i = this.root.querySelector("#slider");
                            t.target !== i ? ({
                                target: i
                            } = t) : t.path ? [i] = t.path : t.composedPath && ([i] = t.composedPath()),
                            0 === e || e <= i.min && !this.disableOffWhenMin ? this.hass.callService(this.domain, this.serviceMin, s) : (s[this.setValueName || this.valueName] = e, this.hass.callService(this.domain, this.serviceMax, s))
                        }
                        stateObjChanged(t, e, s) {
                            const i = {
                                sliderValue: this.isOn(t, e) ? t.attributes[s] : 0
                            };
                            t && Object.assign(i, {
                                minLineBreak: 0,
                                maxLineBreak: 999,
                                hideSlider: !1,
                                breakSlider: !1,
                                lineTooLong: !1,
                                mode: t.attributes.state_card_mode,
                                stretchSlider: !!t.attributes.stretch_slider
                            }),
                            this.setProperties(i),
                            t && this._waitForLayout()
                        }
                        isOn(t, e) {
                            return t && (!e || t.state === e)
                        }
                        stopPropagation(t) {
                            t.stopPropagation()
                        }
                    })
                }
                function mt() {
                    customElements.define("state-card-without-slider", class extends(dt(Polymer.Element)) {
                        static get template() {
                            return ct `
          <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
          <style>
            #container {
              position: relative;
            }
          </style>
    
          <div id='container' class='horizontal layout justified'>
            <state-info
                hass='[[hass]]'
                class='state-info'
                state-obj='[[stateObj]]'
                in-dialog='[[showLastChanged(stateObj, inDialog, extra)]]'
                secondary-line$='[[hasExtra(extra)]]'>
              <template is='dom-repeat' items='[[extra]]'>
                <div>[[item]]</div>
              </template>
            </state-info>
            <dynamic-with-extra
                hass='[[hass]]'
                state-obj='[[stateObj]]'
                control-element='[[controlElement]]'
                in-dialog='[[inDialog]]'>
            </dynamic-with-extra>
          </div>
          `
                        }
                    })
                }
                function gt() {
                    const t = ["configurator"],
                    e = {
                        light: 1,
                        cover: 4,
                        climate: 1
                    },
                    s = {
                        toggle: "ha-entity-toggle",
                        display: "",
                        cover: "ha-cover-controls"
                    };
                    customElements.define("state-card-custom-ui", class extends Polymer.Element {
                        static get properties() {
                            return {
                                hass: Object,
                                inDialog: {
                                    type: Boolean,
                                    value: !1
                                },
                                stateObj: Object
                            }
                        }
                        static get observers() {
                            return ["inputChanged(hass, inDialog, stateObj)"]
                        }
                        connectedCallback() {
                            super.connectedCallback();
                            const t = this.parentNode.parentNode;
                            "DIV" === t.tagName && (t.classList.contains("state") || t.classList.contains("child-card")) && (this._container = t, t.style.setProperty("background-color", "var(--card-background-color, inherit)"), t.updateStyles || (t.updateStyles = (e => {
                                        Object.keys(e).forEach(s => {
                                            t.style.setProperty(s, e[s])
                                        })
                                    }))),
                            this._isAttached = !0,
                            this.inputChanged(this.hass, this.inDialog, this.stateObj)
                        }
                        disconnectedCallback() {
                            this._isAttached = !1,
                            this._container && (this._container.updateStyles({
                                    display: "",
                                    margin: "",
                                    padding: ""
                                }), i(this._container, this.hass.themes || {
                                    default_theme: "default",
                                    themes: {}
                                }, "default"), this._container = null),
                            super.disconnectedCallback()
                        }
                        badgeMode(t, e, s) {
                            const i = [];
                            if ("group" === s)
                                e.attributes.entity_id.forEach(s => {
                                    const n = t.states[s];
                                    n ? e.attributes.badges_list && !e.attributes.badges_list.includes(n.entity_id) || i.push(window.customUI.maybeChangeObject(this, n, !1, !1)) : console.warn(`Unknown ID ${s} in group ${e.entity_id}`)
                                });
                            else if (i.push(e), this._container) {
                                this._container.style.display = "inline-block";
                                const t = {
                                    display: "inline-block"
                                };
                                this._container.classList.contains("state") && (t.margin = "var(--ha-badges-card-margin, 0)"),
                                this.updateStyles(t)
                            }
                            o(this, "HA-BADGES-CARD", {
                                hass: t,
                                states: i
                            }),
                            this._container && this._container.updateStyles({
                                width: "var(--ha-badges-card-width, initial)",
                                "text-align": "var(--ha-badges-card-text-align, initial)"
                            }),
                            this.lastChild.style.fontSize = "85%",
                            this.style.setProperty("--ha-state-label-badge-margin-bottom", "0")
                        }
                        cleanBadgeStyle() {
                            this._container && this._container.updateStyles({
                                display: "",
                                width: "",
                                "text-align": ""
                            }),
                            this.updateStyles({
                                display: "",
                                margin: ""
                            })
                        }
                        applyThemes(t, e) {
                            let s = this,
                            n = "default";
                            this._container && (s = this._container),
                            e.attributes.theme && (n = e.attributes.theme),
                            i(s, t.themes || {
                                default_theme: "default",
                                themes: {}
                            }, n)
                        }
                        maybeHideEntity(t) {
                            return t ? (this._container && this._container.updateStyles({
                                    margin: "",
                                    padding: ""
                                }), !1) : (this.lastChild && this.removeChild(this.lastChild), this._container && this._container.updateStyles({
                                    margin: "0",
                                    padding: "0"
                                }), !0)
                        }
                        sliderEligible_(t, s, i) {
                            return !i && e[t] && e[t] & s.attributes.supported_features && s.attributes.state_card_mode && "no-slider" !== s.attributes.state_card_mode
                        }
                        inputChanged(t, e, s) {
                            if (!s || !t || !this._isAttached)
                                return;
                            const i = a(s),
                            n = window.customUI.maybeChangeObject(this, s, e, !0);
                            this.maybeHideEntity(n) || (this.applyThemes(t, n), e || "badges" !== n.attributes.state_card_mode ? this.regularMode_(t, e, n, i) : this.badgeMode(t, n, i))
                        }
                        regularMode_(e, i, n, c) {
                            this.cleanBadgeStyle();
                            const d = {
                                hass: e,
                                stateObj: n,
                                inDialog: i
                            },
                            u = function (t, e) {
                                if ("unavailable" === e.state)
                                    return "display";
                                const s = a(e);
                                return l.includes(s) ? s : function (t, e) {
                                    const s = a(e);
                                    return "group" === s ? "on" === e.state || "off" === e.state : "climate" === s ? r(e, 4096) : function (t, e) {
                                        const s = t.services[e];
                                        return !!s && ("lock" === e ? "lock" in s : "cover" === e ? "open_cover" in s : "turn_on" in s)
                                    }
                                    (t, s)
                                }
                                (t, e) && "hidden" !== e.attributes.control ? "toggle" : "display"
                            }
                            (e, n);
                            let h;
                            const p = n.attributes.state_card_custom_ui_secondary;
                            "light" === c && this.sliderEligible_(c, n, i) ? (Object.assign(d, {
                                    controlElement: "ha-entity-toggle",
                                    serviceMin: "turn_off",
                                    serviceMax: "turn_on",
                                    valueName: "brightness",
                                    domain: c
                                }), h = "state-card-with-slider") : "cover" === c && this.sliderEligible_(c, n, i) ? (Object.assign(d, {
                                    controlElement: "ha-cover-controls",
                                    max: 100,
                                    serviceMin: "close_cover",
                                    serviceMax: "set_cover_position",
                                    setValueName: "position",
                                    valueName: "current_position",
                                    nameOn: "open",
                                    domain: c
                                }), h = "state-card-with-slider") : "climate" === c && this.sliderEligible_(c, n, i) ? (Object.assign(d, {
                                    controlElement: "ha-climate-state",
                                    min: n.attributes.min_temp || -100,
                                    max: n.attributes.max_temp || 200,
                                    serviceMin: "set_temperature",
                                    serviceMax: "set_temperature",
                                    valueName: "temperature",
                                    nameOn: "",
                                    domain: c
                                }), h = "state-card-with-slider") : void 0 !== s[u] ? (d.controlElement = s[u], h = "state-card-without-slider") : n.attributes.show_last_changed && !t.includes(u) && (d.inDialog = !0),
                            "unavailable" === n.state && (d.controlElement = ""),
                            void 0 !== n.attributes.control_element && (d.controlElement = n.attributes.control_element),
                            o(this, (p || h || `STATE-CARD-${u}`).toUpperCase(), d)
                        }
                    })
                }
                Polymer && Polymer.Element && customElements.get("home-assistant") ? ut() : customElements.whenDefined("home-assistant").then(() => ut()),
                customElements.whenDefined("state-card-display").then(() => {
                    customElements.define("dynamic-with-extra", class extends(customElements.get("state-card-display")) {
                        static get template() {
                            return ct `
          <style is="custom-style" include="iron-flex iron-flex-alignment iron-flex-factors"></style>
          <style>
            :host {
              display: inline-block;
            }
            .control-wrapper {
              margin: -4px -16px -4px 0;
              padding: 4px 16px;
            }
            ha-state-label-badge {
              margin-left: 8px;
            }
            dynamic-element {
              display: block;
              text-align: right;
            }
            #overlay {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              text-align: right;
              z-index: 1;
            }
            #lock {
              margin-top: 8px;
              opacity: 0.3;
              margin-right: 7px;
            }
            #lock.ha-cover-controls {
              margin-right: 52px;
              background-color: white;
            }
            .extra {
              margin-bottom: -16px;
              --ha-label-badge-size: 36px;
              --ha-label-badge-font-size: 1.2em;
            }
            .state {
              @apply --paper-font-body1;
              color: var(--primary-text-color);
              margin-left: 16px;
              text-align: right;
              line-height: 40px;
            }
          </style>
          <div class$='[[extraClass(extraObjVisible)]] horizontal layout'>
            <template is='dom-if' if='[[extraObjVisible]]'>
              <template is='dom-repeat'
                        items='[[extraObj]]'
                        on-dom-change='extraDomChanged'>
                <ha-state-label-badge hass='[[hass]]' state='[[item]]'></ha-state-label-badge>
              </template>
            </template>
            <template is='dom-if' if='[[_showControl(inDialog, stateObj)]]'>
              <template is='dom-if' if='[[controlElement]]'>
                <div class="control-wrapper">
                  <dynamic-element
                      class='flex'
                      state-obj="[[stateObj]]"
                      hass='[[hass]]'
                      element-name='[[controlElement]]'>
                  </dynamic-element>
                  <template is='dom-if' if='[[isConfirmControls(stateObj)]]'>
                    <div id="overlay" on-click='clickHandler'>
                      <template is='dom-if' if='[[stateObj.attributes.confirm_controls_show_lock]]'>
                        <iron-icon id="lock" class$="[[controlElement]]" icon="mdi:lock-outline"></iron-icon>
                      </template>
                    </div>
                  </template>
                </div>
              </template>
              <template is='dom-if' if='[[!controlElement]]'>
                <div class='state'>[[computeStateDisplay(stateObj)]]</div>
              </template>
            </template>
          </div>
          `
                        }
                        static get properties() {
                            return {
                                hass: Object,
                                inDialog: {
                                    type: Boolean,
                                    value: !1
                                },
                                stateObj: Object,
                                controlElement: String,
                                extraObj: {
                                    type: Array,
                                    computed: "computeExtra(hass, stateObj, _attached)"
                                },
                                _attached: Boolean,
                                extraObjVisible: {
                                    type: Boolean,
                                    computed: "computeExtraVisible(extraObj, inDialog)"
                                }
                            }
                        }
                        connectedCallback() {
                            super.connectedCallback(),
                            this._attached = !0
                        }
                        disconnectedCallback() {
                            this._isAttached = !1,
                            super.disconnectedCallback()
                        }
                        computeExtra(t, e, s) {
                            if (!e.attributes.extra_badge || !s)
                                return [];
                            let i = e.attributes.extra_badge;
                            return Array.isArray(i) || (i = [i]),
                            i.map(s => {
                                let i = null;
                                if (s.entity_id && t.states[s.entity_id] ? i = Object.assign({}, window.customUI.maybeChangeObject(this, t.states[s.entity_id], this.inDialog, !1)) : s.attribute && void 0 !== e.attributes[s.attribute] && (i = {
                                                state: String(e.attributes[s.attribute]),
                                                entity_id: "none.none",
                                                attributes: {
                                                    unit_of_measurement: s.unit
                                                }
                                            }), !i)
                                    return null;
                                let n = s.blacklist_states;
                                return void 0 !== n && (Array.isArray(n) || (n = [n]), n.some(t => RegExp(t).test(i.state.toString()))) ? null : (i._entityDisplay = "", i.attributes = Object.assign({}, {
                                            friendly_name: ""
                                        }), i)
                            }).filter(t => null != t)
                        }
                        computeExtraVisible(t, e) {
                            return !(e || !t) && 0 !== t.length
                        }
                        extraClass(t) {
                            return t ? "extra" : ""
                        }
                        _showControl(t, e) {
                            return !!t || !e.attributes.hide_control
                        }
                        computeStateDisplay(t) {
                            return super.computeStateDisplay(this.haLocalize || this.localize, t)
                        }
                        isConfirmControls(t) {
                            return t.attributes.confirm_controls || t.attributes.confirm_controls_show_lock
                        }
                        clickHandler(t) {
                            this.root.querySelector("#overlay").style.pointerEvents = "none";
                            const e = this.root.querySelector("#lock");
                            e && (e.icon = "mdi:lock-open-outline", e.style.opacity = "0.1"),
                            window.setTimeout(() => {
                                this.root.querySelector("#overlay").style.pointerEvents = "",
                                e && (e.icon = "mdi:lock-outline", e.style.opacity = "")
                            }, 5e3),
                            t.stopPropagation()
                        }
                        applyThemes(t, e, s) {
                            const n = s.attributes.theme || "default";
                            i(e, t.themes || {
                                default_theme: "default",
                                themes: {}
                            }, n)
                        }
                        extraDomChanged() {
                            this.root.querySelectorAll("ha-state-label-badge").forEach(t => {
                                this.applyThemes(this.hass, t, t.state)
                            })
                        }
                    })
                }),
                Polymer && Polymer.Element && customElements.get("home-assistant") ? ht() : customElements.whenDefined("home-assistant").then(() => ht()),
                Polymer && Polymer.Element && customElements.get("home-assistant") ? pt() : customElements.whenDefined("home-assistant").then(() => pt()),
                Polymer && Polymer.Element && customElements.get("home-assistant") ? mt() : customElements.whenDefined("home-assistant").then(() => mt()),
                Polymer && Polymer.Element && customElements.get("home-assistant") ? gt() : customElements.whenDefined("home-assistant").then(() => gt())
            }, function (t, e) {
                window.JSCompiler_renameProperty = function (t) {
                    return t
                }
            }
        ]);