var Sl = Object.defineProperty;
var Ol = (e, t, r) => t in e ? Sl(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var Te = (e, t, r) => (Ol(e, typeof t != "symbol" ? t + "" : t, r), r);
const Ml = function() {
    const t = document.createElement("link")
        .relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) u(n);
    new MutationObserver(n => {
            for (const o of n)
                if (o.type === "childList")
                    for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && u(s)
        })
        .observe(document, {
            childList: !0,
            subtree: !0
        });
    function r(n) {
        const o = {};
        return n.integrity && (o.integrity = n.integrity), n.referrerpolicy && (o.referrerPolicy = n.referrerpolicy), n.crossorigin === "use-credentials" ? o.credentials = "include" : n.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }
    function u(n) {
        if (n.ep) return;
        n.ep = !0;
        const o = r(n);
        fetch(n.href, o)
    }
};
Ml();
function xu(e, t) {
    const r = Object.create(null),
        u = e.split(",");
    for (let n = 0; n < u.length; n++) r[u[n]] = !0;
    return t ? n => !!r[n.toLowerCase()] : n => !!r[n]
}
const Ll = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Rl = xu(Ll);
function ks(e) {
    return !!e || e === ""
}
function Au(e) {
    if (K(e)) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const u = e[r],
                n = Be(u) ? Hl(u) : Au(u);
            if (n)
                for (const o in n) t[o] = n[o]
        }
        return t
    } else {
        if (Be(e)) return e;
        if (Ee(e)) return e
    }
}
const Il = /;(?![^(]*\))/g,
    Nl = /:(.+)/;
function Hl(e) {
    const t = {};
    return e.split(Il)
        .forEach(r => {
            if (r) {
                const u = r.split(Nl);
                u.length > 1 && (t[u[0].trim()] = u[1].trim())
            }
        }), t
}
function Ie(e) {
    let t = "";
    if (Be(e)) t = e;
    else if (K(e))
        for (let r = 0; r < e.length; r++) {
            const u = Ie(e[r]);
            u && (t += u + " ")
        } else if (Ee(e))
            for (const r in e) e[r] && (t += r + " ");
    return t.trim()
}
const vr = e => Be(e) ? e : e == null ? "" : K(e) || Ee(e) && (e.toString === Ms || !Z(e.toString)) ? JSON.stringify(e, Ps, 2) : String(e),
    Ps = (e, t) => t && t.__v_isRef ? Ps(e, t.value) : sr(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((r, [u, n]) => (r[`${u} =>`] = n, r), {})
    } : Ss(t) ? {
        [`Set(${t.size})`]: [...t.values()]
    } : Ee(t) && !K(t) && !Ls(t) ? String(t) : t,
    ae = {},
    or = [],
    it = () => {},
    jl = () => !1,
    Ul = /^on[^a-z]/,
    pn = e => Ul.test(e),
    Bu = e => e.startsWith("onUpdate:"),
    Ae = Object.assign,
    Tu = (e, t) => {
        const r = e.indexOf(t);
        r > -1 && e.splice(r, 1)
    },
    zl = Object.prototype.hasOwnProperty,
    se = (e, t) => zl.call(e, t),
    K = Array.isArray,
    sr = e => gn(e) === "[object Map]",
    Ss = e => gn(e) === "[object Set]",
    Z = e => typeof e == "function",
    Be = e => typeof e == "string",
    ku = e => typeof e == "symbol",
    Ee = e => e !== null && typeof e == "object",
    Os = e => Ee(e) && Z(e.then) && Z(e.catch),
    Ms = Object.prototype.toString,
    gn = e => Ms.call(e),
    Vl = e => gn(e)
    .slice(8, -1),
    Ls = e => gn(e) === "[object Object]",
    Pu = e => Be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Gr = xu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Cn = e => {
        const t = Object.create(null);
        return r => t[r] || (t[r] = e(r))
    },
    ql = /-(\w)/g,
    ar = Cn(e => e.replace(ql, (t, r) => r ? r.toUpperCase() : "")),
    Wl = /\B([A-Z])/g,
    dr = Cn(e => e.replace(Wl, "-$1")
        .toLowerCase()),
    Rs = Cn(e => e.charAt(0)
        .toUpperCase() + e.slice(1)),
    Rn = Cn(e => e ? `on${Rs(e)}` : ""),
    Tr = (e, t) => !Object.is(e, t),
    In = (e, t) => {
        for (let r = 0; r < e.length; r++) e[r](t)
    },
    tn = (e, t, r) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: r
        })
    },
    Is = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    };
let ao;
const Kl = () => ao || (ao = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
let Je;
class Xl {
    constructor(t = !1) {
        this.active = !0, this.effects = [], this.cleanups = [], !t && Je && (this.parent = Je, this.index = (Je.scopes || (Je.scopes = []))
            .push(this) - 1)
    }
    run(t) {
        if (this.active) {
            const r = Je;
            try {
                return Je = this, t()
            } finally {
                Je = r
            }
        }
    }
    on() {
        Je = this
    }
    off() {
        Je = this.parent
    }
    stop(t) {
        if (this.active) {
            let r, u;
            for (r = 0, u = this.effects.length; r < u; r++) this.effects[r].stop();
            for (r = 0, u = this.cleanups.length; r < u; r++) this.cleanups[r]();
            if (this.scopes)
                for (r = 0, u = this.scopes.length; r < u; r++) this.scopes[r].stop(!0);
            if (this.parent && !t) {
                const n = this.parent.scopes.pop();
                n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index)
            }
            this.active = !1
        }
    }
}
function Gl(e, t = Je) {
    t && t.active && t.effects.push(e)
}
function Jl() {
    return Je
}
function Zl(e) {
    Je && Je.cleanups.push(e)
}
const Su = e => {
        const t = new Set(e);
        return t.w = 0, t.n = 0, t
    },
    Ns = e => (e.w & Pt) > 0,
    Hs = e => (e.n & Pt) > 0,
    Ql = ({
        deps: e
    }) => {
        if (e.length)
            for (let t = 0; t < e.length; t++) e[t].w |= Pt
    },
    Yl = e => {
        const {
            deps: t
        } = e;
        if (t.length) {
            let r = 0;
            for (let u = 0; u < t.length; u++) {
                const n = t[u];
                Ns(n) && !Hs(n) ? n.delete(e) : t[r++] = n, n.w &= ~Pt, n.n &= ~Pt
            }
            t.length = r
        }
    },
    Zn = new WeakMap;
let yr = 0,
    Pt = 1;
const Qn = 30;
let st;
const Vt = Symbol(""),
    Yn = Symbol("");
class Ou {
    constructor(t, r = null, u) {
        this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, Gl(this, u)
    }
    run() {
        if (!this.active) return this.fn();
        let t = st,
            r = Bt;
        for (; t;) {
            if (t === this) return;
            t = t.parent
        }
        try {
            return this.parent = st, st = this, Bt = !0, Pt = 1 << ++yr, yr <= Qn ? Ql(this) : co(this), this.fn()
        } finally {
            yr <= Qn && Yl(this), Pt = 1 << --yr, st = this.parent, Bt = r, this.parent = void 0, this.deferStop && this.stop()
        }
    }
    stop() {
        st === this ? this.deferStop = !0 : this.active && (co(this), this.onStop && this.onStop(), this.active = !1)
    }
}
function co(e) {
    const {
        deps: t
    } = e;
    if (t.length) {
        for (let r = 0; r < t.length; r++) t[r].delete(e);
        t.length = 0
    }
}
let Bt = !0;
const js = [];
function hr() {
    js.push(Bt), Bt = !1
}
function mr() {
    const e = js.pop();
    Bt = e === void 0 ? !0 : e
}
function Ye(e, t, r) {
    if (Bt && st) {
        let u = Zn.get(e);
        u || Zn.set(e, u = new Map);
        let n = u.get(r);
        n || u.set(r, n = Su()), Us(n)
    }
}
function Us(e, t) {
    let r = !1;
    yr <= Qn ? Hs(e) || (e.n |= Pt, r = !Ns(e)) : r = !e.has(st), r && (e.add(st), st.deps.push(e))
}
function Ft(e, t, r, u, n, o) {
    const s = Zn.get(e);
    if (!s) return;
    let i = [];
    if (t === "clear") i = [...s.values()];
    else if (r === "length" && K(e)) s.forEach((l, c) => {
        (c === "length" || c >= u) && i.push(l)
    });
    else switch (r !== void 0 && i.push(s.get(r)), t) {
        case "add":
            K(e) ? Pu(r) && i.push(s.get("length")) : (i.push(s.get(Vt)), sr(e) && i.push(s.get(Yn)));
            break;
        case "delete":
            K(e) || (i.push(s.get(Vt)), sr(e) && i.push(s.get(Yn)));
            break;
        case "set":
            sr(e) && i.push(s.get(Vt));
            break
    }
    if (i.length === 1) i[0] && eu(i[0]);
    else {
        const l = [];
        for (const c of i) c && l.push(...c);
        eu(Su(l))
    }
}
function eu(e, t) {
    for (const r of K(e) ? e : [...e])(r !== st || r.allowRecurse) && (r.scheduler ? r.scheduler() : r.run())
}
const ea = xu("__proto__,__v_isRef,__isVue"),
    zs = new Set(Object.getOwnPropertyNames(Symbol)
        .map(e => Symbol[e])
        .filter(ku)),
    ta = Fn(),
    ra = Fn(!1, !0),
    na = Fn(!0),
    ua = Fn(!0, !0),
    fo = oa();
function oa() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...r) {
            const u = le(this);
            for (let o = 0, s = this.length; o < s; o++) Ye(u, "get", o + "");
            const n = u[t](...r);
            return n === -1 || n === !1 ? u[t](...r.map(le)) : n
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...r) {
            hr();
            const u = le(this)[t].apply(this, r);
            return mr(), u
        }
    }), e
}
function Fn(e = !1, t = !1) {
    return function(u, n, o) {
        if (n === "__v_isReactive") return !e;
        if (n === "__v_isReadonly") return e;
        if (n === "__v_isShallow") return t;
        if (n === "__v_raw" && o === (e ? t ? Js : Gs : t ? Xs : Ks)
            .get(u)) return u;
        const s = K(u);
        if (!e && s && se(fo, n)) return Reflect.get(fo, n, o);
        const i = Reflect.get(u, n, o);
        return (ku(n) ? zs.has(n) : ea(n)) || (e || Ye(u, "get", n), t) ? i : ye(i) ? !s || !Pu(n) ? i.value : i : Ee(i) ? e ? Lu(i) : pr(i) : i
    }
}
const sa = Vs(),
    ia = Vs(!0);
function Vs(e = !1) {
    return function(r, u, n, o) {
        let s = r[u];
        if (cr(s) && ye(s) && !ye(n)) return !1;
        if (!e && !cr(n) && (Qs(n) || (n = le(n), s = le(s)), !K(r) && ye(s) && !ye(n))) return s.value = n, !0;
        const i = K(r) && Pu(u) ? Number(u) < r.length : se(r, u),
            l = Reflect.set(r, u, n, o);
        return r === le(o) && (i ? Tr(n, s) && Ft(r, "set", u, n) : Ft(r, "add", u, n)), l
    }
}
function la(e, t) {
    const r = se(e, t);
    e[t];
    const u = Reflect.deleteProperty(e, t);
    return u && r && Ft(e, "delete", t, void 0), u
}
function aa(e, t) {
    const r = Reflect.has(e, t);
    return (!ku(t) || !zs.has(t)) && Ye(e, "has", t), r
}
function ca(e) {
    return Ye(e, "iterate", K(e) ? "length" : Vt), Reflect.ownKeys(e)
}
const qs = {
        get: ta,
        set: sa,
        deleteProperty: la,
        has: aa,
        ownKeys: ca
    },
    Ws = {
        get: na,
        set(e, t) {
            return !0
        },
        deleteProperty(e, t) {
            return !0
        }
    },
    fa = Ae({}, qs, {
        get: ra,
        set: ia
    }),
    Da = Ae({}, Ws, {
        get: ua
    }),
    Mu = e => e,
    yn = e => Reflect.getPrototypeOf(e);
function Hr(e, t, r = !1, u = !1) {
    e = e.__v_raw;
    const n = le(e),
        o = le(t);
    t !== o && !r && Ye(n, "get", t), !r && Ye(n, "get", o);
    const {
        has: s
    } = yn(n), i = u ? Mu : r ? Iu : kr;
    if (s.call(n, t)) return i(e.get(t));
    if (s.call(n, o)) return i(e.get(o));
    e !== n && e.get(t)
}
function jr(e, t = !1) {
    const r = this.__v_raw,
        u = le(r),
        n = le(e);
    return e !== n && !t && Ye(u, "has", e), !t && Ye(u, "has", n), e === n ? r.has(e) : r.has(e) || r.has(n)
}
function Ur(e, t = !1) {
    return e = e.__v_raw, !t && Ye(le(e), "iterate", Vt), Reflect.get(e, "size", e)
}
function Do(e) {
    e = le(e);
    const t = le(this);
    return yn(t)
        .has.call(t, e) || (t.add(e), Ft(t, "add", e, e)), this
}
function ho(e, t) {
    t = le(t);
    const r = le(this),
        {
            has: u,
            get: n
        } = yn(r);
    let o = u.call(r, e);
    o || (e = le(e), o = u.call(r, e));
    const s = n.call(r, e);
    return r.set(e, t), o ? Tr(t, s) && Ft(r, "set", e, t) : Ft(r, "add", e, t), this
}
function mo(e) {
    const t = le(this),
        {
            has: r,
            get: u
        } = yn(t);
    let n = r.call(t, e);
    n || (e = le(e), n = r.call(t, e)), u && u.call(t, e);
    const o = t.delete(e);
    return n && Ft(t, "delete", e, void 0), o
}
function po() {
    const e = le(this),
        t = e.size !== 0,
        r = e.clear();
    return t && Ft(e, "clear", void 0, void 0), r
}
function zr(e, t) {
    return function(u, n) {
        const o = this,
            s = o.__v_raw,
            i = le(s),
            l = t ? Mu : e ? Iu : kr;
        return !e && Ye(i, "iterate", Vt), s.forEach((c, a) => u.call(n, l(c), l(a), o))
    }
}
function Vr(e, t, r) {
    return function(...u) {
        const n = this.__v_raw,
            o = le(n),
            s = sr(o),
            i = e === "entries" || e === Symbol.iterator && s,
            l = e === "keys" && s,
            c = n[e](...u),
            a = r ? Mu : t ? Iu : kr;
        return !t && Ye(o, "iterate", l ? Yn : Vt), {
            next() {
                const {
                    value: D,
                    done: f
                } = c.next();
                return f ? {
                    value: D,
                    done: f
                } : {
                    value: i ? [a(D[0]), a(D[1])] : a(D),
                    done: f
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function _t(e) {
    return function(...t) {
        return e === "delete" ? !1 : this
    }
}
function da() {
    const e = {
            get(o) {
                return Hr(this, o)
            },
            get size() {
                return Ur(this)
            },
            has: jr,
            add: Do,
            set: ho,
            delete: mo,
            clear: po,
            forEach: zr(!1, !1)
        },
        t = {
            get(o) {
                return Hr(this, o, !1, !0)
            },
            get size() {
                return Ur(this)
            },
            has: jr,
            add: Do,
            set: ho,
            delete: mo,
            clear: po,
            forEach: zr(!1, !0)
        },
        r = {
            get(o) {
                return Hr(this, o, !0)
            },
            get size() {
                return Ur(this, !0)
            },
            has(o) {
                return jr.call(this, o, !0)
            },
            add: _t("add"),
            set: _t("set"),
            delete: _t("delete"),
            clear: _t("clear"),
            forEach: zr(!0, !1)
        },
        u = {
            get(o) {
                return Hr(this, o, !0, !0)
            },
            get size() {
                return Ur(this, !0)
            },
            has(o) {
                return jr.call(this, o, !0)
            },
            add: _t("add"),
            set: _t("set"),
            delete: _t("delete"),
            clear: _t("clear"),
            forEach: zr(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        e[o] = Vr(o, !1, !1), r[o] = Vr(o, !0, !1), t[o] = Vr(o, !1, !0), u[o] = Vr(o, !0, !0)
    }), [e, r, t, u]
}
const [ha, ma, pa, ga] = da();
function En(e, t) {
    const r = t ? e ? ga : pa : e ? ma : ha;
    return (u, n, o) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? u : Reflect.get(se(r, n) && n in u ? r : u, n, o)
}
const Ca = {
        get: En(!1, !1)
    },
    Fa = {
        get: En(!1, !0)
    },
    ya = {
        get: En(!0, !1)
    },
    Ea = {
        get: En(!0, !0)
    },
    Ks = new WeakMap,
    Xs = new WeakMap,
    Gs = new WeakMap,
    Js = new WeakMap;
function _a(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}
function va(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : _a(Vl(e))
}
function pr(e) {
    return cr(e) ? e : _n(e, !1, qs, Ca, Ks)
}
function Zs(e) {
    return _n(e, !1, fa, Fa, Xs)
}
function Lu(e) {
    return _n(e, !0, Ws, ya, Gs)
}
function $a(e) {
    return _n(e, !0, Da, Ea, Js)
}
function _n(e, t, r, u, n) {
    if (!Ee(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const o = n.get(e);
    if (o) return o;
    const s = va(e);
    if (s === 0) return e;
    const i = new Proxy(e, s === 2 ? u : r);
    return n.set(e, i), i
}
function ir(e) {
    return cr(e) ? ir(e.__v_raw) : !!(e && e.__v_isReactive)
}
function cr(e) {
    return !!(e && e.__v_isReadonly)
}
function Qs(e) {
    return !!(e && e.__v_isShallow)
}
function Ys(e) {
    return ir(e) || cr(e)
}
function le(e) {
    const t = e && e.__v_raw;
    return t ? le(t) : e
}
function Ru(e) {
    return tn(e, "__v_skip", !0), e
}
const kr = e => Ee(e) ? pr(e) : e,
    Iu = e => Ee(e) ? Lu(e) : e;
function Nu(e) {
    Bt && st && (e = le(e), Us(e.dep || (e.dep = Su())))
}
function vn(e, t) {
    e = le(e), e.dep && eu(e.dep)
}
function ye(e) {
    return !!(e && e.__v_isRef === !0)
}
function Me(e) {
    return ti(e, !1)
}
function ei(e) {
    return ti(e, !0)
}
function ti(e, t) {
    return ye(e) ? e : new ba(e, t)
}
class ba {
    constructor(t, r) {
        this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : le(t), this._value = r ? t : kr(t)
    }
    get value() {
        return Nu(this), this._value
    }
    set value(t) {
        t = this.__v_isShallow ? t : le(t), Tr(t, this._rawValue) && (this._rawValue = t, this._value = this.__v_isShallow ? t : kr(t), vn(this))
    }
}
function wa(e) {
    vn(e)
}
function ne(e) {
    return ye(e) ? e.value : e
}
const xa = {
    get: (e, t, r) => ne(Reflect.get(e, t, r)),
    set: (e, t, r, u) => {
        const n = e[t];
        return ye(n) && !ye(r) ? (n.value = r, !0) : Reflect.set(e, t, r, u)
    }
};
function ri(e) {
    return ir(e) ? e : new Proxy(e, xa)
}
class Aa {
    constructor(t) {
        this.dep = void 0, this.__v_isRef = !0;
        const {
            get: r,
            set: u
        } = t(() => Nu(this), () => vn(this));
        this._get = r, this._set = u
    }
    get value() {
        return this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function Ba(e) {
    return new Aa(e)
}
function Ta(e) {
    const t = K(e) ? new Array(e.length) : {};
    for (const r in e) t[r] = ni(e, r);
    return t
}
class ka {
    constructor(t, r, u) {
        this._object = t, this._key = r, this._defaultValue = u, this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
}
function ni(e, t, r) {
    const u = e[t];
    return ye(u) ? u : new ka(e, t, r)
}
class Pa {
    constructor(t, r, u, n) {
        this._setter = r, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new Ou(t, () => {
            this._dirty || (this._dirty = !0, vn(this))
        }), this.effect.computed = this, this.effect.active = this._cacheable = !n, this.__v_isReadonly = u
    }
    get value() {
        const t = le(this);
        return Nu(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
    }
    set value(t) {
        this._setter(t)
    }
}
function Sa(e, t, r = !1) {
    let u, n;
    const o = Z(e);
    return o ? (u = e, n = it) : (u = e.get, n = e.set), new Pa(u, n, o || !n, r)
}
function Tt(e, t, r, u) {
    let n;
    try {
        n = u ? e(...u) : e()
    } catch (o) {
        Lr(o, t, r)
    }
    return n
}
function nt(e, t, r, u) {
    if (Z(e)) {
        const o = Tt(e, t, r, u);
        return o && Os(o) && o.catch(s => {
            Lr(s, t, r)
        }), o
    }
    const n = [];
    for (let o = 0; o < e.length; o++) n.push(nt(e[o], t, r, u));
    return n
}
function Lr(e, t, r, u = !0) {
    const n = t ? t.vnode : null;
    if (t) {
        let o = t.parent;
        const s = t.proxy,
            i = r;
        for (; o;) {
            const c = o.ec;
            if (c) {
                for (let a = 0; a < c.length; a++)
                    if (c[a](e, s, i) === !1) return
            }
            o = o.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            Tt(l, null, 10, [e, s, i]);
            return
        }
    }
    Oa(e, r, n, u)
}
function Oa(e, t, r, u = !0) {
    console.error(e)
}
let rn = !1,
    tu = !1;
const Ze = [];
let Ct = 0;
const $r = [];
let Er = null,
    tr = 0;
const br = [];
let wt = null,
    rr = 0;
const ui = Promise.resolve();
let Hu = null,
    ru = null;
function $n(e) {
    const t = Hu || ui;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Ma(e) {
    let t = Ct + 1,
        r = Ze.length;
    for (; t < r;) {
        const u = t + r >>> 1;
        Pr(Ze[u]) < e ? t = u + 1 : r = u
    }
    return t
}
function ju(e) {
    (!Ze.length || !Ze.includes(e, rn && e.allowRecurse ? Ct + 1 : Ct)) && e !== ru && (e.id == null ? Ze.push(e) : Ze.splice(Ma(e.id), 0, e), oi())
}
function oi() {
    !rn && !tu && (tu = !0, Hu = ui.then(li))
}
function La(e) {
    const t = Ze.indexOf(e);
    t > Ct && Ze.splice(t, 1)
}
function si(e, t, r, u) {
    K(e) ? r.push(...e) : (!t || !t.includes(e, e.allowRecurse ? u + 1 : u)) && r.push(e), oi()
}
function Ra(e) {
    si(e, Er, $r, tr)
}
function Ia(e) {
    si(e, wt, br, rr)
}
function Uu(e, t = null) {
    if ($r.length) {
        for (ru = t, Er = [...new Set($r)], $r.length = 0, tr = 0; tr < Er.length; tr++) Er[tr]();
        Er = null, tr = 0, ru = null, Uu(e, t)
    }
}
function ii(e) {
    if (br.length) {
        const t = [...new Set(br)];
        if (br.length = 0, wt) {
            wt.push(...t);
            return
        }
        for (wt = t, wt.sort((r, u) => Pr(r) - Pr(u)), rr = 0; rr < wt.length; rr++) wt[rr]();
        wt = null, rr = 0
    }
}
const Pr = e => e.id == null ? 1 / 0 : e.id;
function li(e) {
    tu = !1, rn = !0, Uu(e), Ze.sort((r, u) => Pr(r) - Pr(u));
    const t = it;
    try {
        for (Ct = 0; Ct < Ze.length; Ct++) {
            const r = Ze[Ct];
            r && r.active !== !1 && Tt(r, null, 14)
        }
    } finally {
        Ct = 0, Ze.length = 0, ii(), rn = !1, Hu = null, (Ze.length || $r.length || br.length) && li(e)
    }
}
function Na(e, t, ...r) {
    if (e.isUnmounted) return;
    const u = e.vnode.props || ae;
    let n = r;
    const o = t.startsWith("update:"),
        s = o && t.slice(7);
    if (s && s in u) {
        const a = `${s==="modelValue"?"model":s}Modifiers`,
            {
                number: D,
                trim: f
            } = u[a] || ae;
        f ? n = r.map(d => d.trim()) : D && (n = r.map(Is))
    }
    let i, l = u[i = Rn(t)] || u[i = Rn(ar(t))];
    !l && o && (l = u[i = Rn(dr(t))]), l && nt(l, e, 6, n);
    const c = u[i + "Once"];
    if (c) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[i]) return;
        e.emitted[i] = !0, nt(c, e, 6, n)
    }
}
function ai(e, t, r = !1) {
    const u = t.emitsCache,
        n = u.get(e);
    if (n !== void 0) return n;
    const o = e.emits;
    let s = {},
        i = !1;
    if (!Z(e)) {
        const l = c => {
            const a = ai(c, t, !0);
            a && (i = !0, Ae(s, a))
        };
        !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return !o && !i ? (u.set(e, null), null) : (K(o) ? o.forEach(l => s[l] = null) : Ae(s, o), u.set(e, s), s)
}
function bn(e, t) {
    return !e || !pn(t) ? !1 : (t = t.slice(2)
        .replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, dr(t)) || se(e, t))
}
let Ke = null,
    wn = null;
function nn(e) {
    const t = Ke;
    return Ke = e, wn = e && e.type.__scopeId || null, t
}
function Ha(e) {
    wn = e
}
function ja() {
    wn = null
}
function zu(e, t = Ke, r) {
    if (!t || e._n) return e;
    const u = (...n) => {
        u._d && wo(-1);
        const o = nn(t),
            s = e(...n);
        return nn(o), u._d && wo(1), s
    };
    return u._n = !0, u._c = !0, u._d = !0, u
}
function Nn(e) {
    const {
        type: t,
        vnode: r,
        proxy: u,
        withProxy: n,
        props: o,
        propsOptions: [s],
        slots: i,
        attrs: l,
        emit: c,
        render: a,
        renderCache: D,
        data: f,
        setupState: d,
        ctx: C,
        inheritAttrs: m
    } = e;
    let h, p;
    const P = nn(e);
    try {
        if (r.shapeFlag & 4) {
            const v = n || u;
            h = dt(a.call(v, v, D, o, d, f, C)), p = l
        } else {
            const v = t;
            h = dt(v.length > 1 ? v(o, {
                attrs: l,
                slots: i,
                emit: c
            }) : v(o, null)), p = t.props ? l : Ua(l)
        }
    } catch (v) {
        xr.length = 0, Lr(v, e, 1), h = De(ut)
    }
    let w = h;
    if (p && m !== !1) {
        const v = Object.keys(p),
            {
                shapeFlag: V
            } = w;
        v.length && V & 7 && (s && v.some(Bu) && (p = za(p, s)), w = Kt(w, p))
    }
    return r.dirs && (w.dirs = w.dirs ? w.dirs.concat(r.dirs) : r.dirs), r.transition && (w.transition = r.transition), h = w, nn(P), h
}
const Ua = e => {
        let t;
        for (const r in e)(r === "class" || r === "style" || pn(r)) && ((t || (t = {}))[r] = e[r]);
        return t
    },
    za = (e, t) => {
        const r = {};
        for (const u in e)(!Bu(u) || !(u.slice(9) in t)) && (r[u] = e[u]);
        return r
    };
function Va(e, t, r) {
    const {
        props: u,
        children: n,
        component: o
    } = e, {
        props: s,
        children: i,
        patchFlag: l
    } = t, c = o.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (r && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return u ? go(u, s, c) : !!s;
        if (l & 8) {
            const a = t.dynamicProps;
            for (let D = 0; D < a.length; D++) {
                const f = a[D];
                if (s[f] !== u[f] && !bn(c, f)) return !0
            }
        }
    } else return (n || i) && (!i || !i.$stable) ? !0 : u === s ? !1 : u ? s ? go(u, s, c) : !0 : !!s;
    return !1
}
function go(e, t, r) {
    const u = Object.keys(t);
    if (u.length !== Object.keys(e)
        .length) return !0;
    for (let n = 0; n < u.length; n++) {
        const o = u[n];
        if (t[o] !== e[o] && !bn(r, o)) return !0
    }
    return !1
}
function qa({
    vnode: e,
    parent: t
}, r) {
    for (; t && t.subTree === e;)(e = t.vnode)
        .el = r, t = t.parent
}
const Wa = e => e.__isSuspense;
function Ka(e, t) {
    t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : Ia(e)
}
function ci(e, t) {
    if (xe) {
        let r = xe.provides;
        const u = xe.parent && xe.parent.provides;
        u === r && (r = xe.provides = Object.create(u)), r[e] = t
    }
}
function wr(e, t, r = !1) {
    const u = xe || Ke;
    if (u) {
        const n = u.parent == null ? u.vnode.appContext && u.vnode.appContext.provides : u.parent.provides;
        if (n && e in n) return n[e];
        if (arguments.length > 1) return r && Z(t) ? t.call(u.proxy) : t
    }
}
function Xa(e, t) {
    return Vu(e, null, t)
}
const Co = {};
function pt(e, t, r) {
    return Vu(e, t, r)
}
function Vu(e, t, {
    immediate: r,
    deep: u,
    flush: n,
    onTrack: o,
    onTrigger: s
} = ae) {
    const i = xe;
    let l, c = !1,
        a = !1;
    if (ye(e) ? (l = () => e.value, c = Qs(e)) : ir(e) ? (l = () => e, u = !0) : K(e) ? (a = !0, c = e.some(ir), l = () => e.map(p => {
            if (ye(p)) return p.value;
            if (ir(p)) return nr(p);
            if (Z(p)) return Tt(p, i, 2)
        })) : Z(e) ? t ? l = () => Tt(e, i, 2) : l = () => {
            if (!(i && i.isUnmounted)) return D && D(), nt(e, i, 3, [f])
        } : l = it, t && u) {
        const p = l;
        l = () => nr(p())
    }
    let D, f = p => {
        D = h.onStop = () => {
            Tt(p, i, 4)
        }
    };
    if (Dr) return f = it, t ? r && nt(t, i, 3, [l(), a ? [] : void 0, f]) : l(), it;
    let d = a ? [] : Co;
    const C = () => {
        if (!!h.active)
            if (t) {
                const p = h.run();
                (u || c || (a ? p.some((P, w) => Tr(P, d[w])) : Tr(p, d))) && (D && D(), nt(t, i, 3, [p, d === Co ? void 0 : d, f]), d = p)
            } else h.run()
    };
    C.allowRecurse = !!t;
    let m;
    n === "sync" ? m = C : n === "post" ? m = () => qe(C, i && i.suspense) : m = () => {
        !i || i.isMounted ? Ra(C) : C()
    };
    const h = new Ou(l, m);
    return t ? r ? C() : d = h.run() : n === "post" ? qe(h.run.bind(h), i && i.suspense) : h.run(), () => {
        h.stop(), i && i.scope && Tu(i.scope.effects, h)
    }
}
function Ga(e, t, r) {
    const u = this.proxy,
        n = Be(e) ? e.includes(".") ? fi(u, e) : () => u[e] : e.bind(u, u);
    let o;
    Z(t) ? o = t : (o = t.handler, r = t);
    const s = xe;
    fr(this);
    const i = Vu(n, o.bind(u), r);
    return s ? fr(s) : Wt(), i
}
function fi(e, t) {
    const r = t.split(".");
    return () => {
        let u = e;
        for (let n = 0; n < r.length && u; n++) u = u[r[n]];
        return u
    }
}
function nr(e, t) {
    if (!Ee(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
    if (t.add(e), ye(e)) nr(e.value, t);
    else if (K(e))
        for (let r = 0; r < e.length; r++) nr(e[r], t);
    else if (Ss(e) || sr(e)) e.forEach(r => {
        nr(r, t)
    });
    else if (Ls(e))
        for (const r in e) nr(e[r], t);
    return e
}
function Ja() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Jt(() => {
        e.isMounted = !0
    }), Wu(() => {
        e.isUnmounting = !0
    }), e
}
const tt = [Function, Array],
    Za = {
        name: "BaseTransition",
        props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: tt,
            onEnter: tt,
            onAfterEnter: tt,
            onEnterCancelled: tt,
            onBeforeLeave: tt,
            onLeave: tt,
            onAfterLeave: tt,
            onLeaveCancelled: tt,
            onBeforeAppear: tt,
            onAppear: tt,
            onAfterAppear: tt,
            onAppearCancelled: tt
        },
        setup(e, {
            slots: t
        }) {
            const r = St(),
                u = Ja();
            let n;
            return () => {
                const o = t.default && hi(t.default(), !0);
                if (!o || !o.length) return;
                let s = o[0];
                if (o.length > 1) {
                    for (const m of o)
                        if (m.type !== ut) {
                            s = m;
                            break
                        }
                }
                const i = le(e),
                    {
                        mode: l
                    } = i;
                if (u.isLeaving) return Hn(s);
                const c = Fo(s);
                if (!c) return Hn(s);
                const a = nu(c, i, u, r);
                uu(c, a);
                const D = r.subTree,
                    f = D && Fo(D);
                let d = !1;
                const {
                    getTransitionKey: C
                } = c.type;
                if (C) {
                    const m = C();
                    n === void 0 ? n = m : m !== n && (n = m, d = !0)
                }
                if (f && f.type !== ut && (!Ut(c, f) || d)) {
                    const m = nu(f, i, u, r);
                    if (uu(f, m), l === "out-in") return u.isLeaving = !0, m.afterLeave = () => {
                        u.isLeaving = !1, r.update()
                    }, Hn(s);
                    l === "in-out" && c.type !== ut && (m.delayLeave = (h, p, P) => {
                        const w = di(u, f);
                        w[String(f.key)] = f, h._leaveCb = () => {
                            p(), h._leaveCb = void 0, delete a.delayedLeave
                        }, a.delayedLeave = P
                    })
                }
                return s
            }
        }
    },
    Di = Za;
function di(e, t) {
    const {
        leavingVNodes: r
    } = e;
    let u = r.get(t.type);
    return u || (u = Object.create(null), r.set(t.type, u)), u
}
function nu(e, t, r, u) {
    const {
        appear: n,
        mode: o,
        persisted: s = !1,
        onBeforeEnter: i,
        onEnter: l,
        onAfterEnter: c,
        onEnterCancelled: a,
        onBeforeLeave: D,
        onLeave: f,
        onAfterLeave: d,
        onLeaveCancelled: C,
        onBeforeAppear: m,
        onAppear: h,
        onAfterAppear: p,
        onAppearCancelled: P
    } = t, w = String(e.key), v = di(r, e), V = (x, k) => {
        x && nt(x, u, 9, k)
    }, te = {
        mode: o,
        persisted: s,
        beforeEnter(x) {
            let k = i;
            if (!r.isMounted)
                if (n) k = m || i;
                else return;
            x._leaveCb && x._leaveCb(!0);
            const M = v[w];
            M && Ut(e, M) && M.el._leaveCb && M.el._leaveCb(), V(k, [x])
        },
        enter(x) {
            let k = l,
                M = c,
                I = a;
            if (!r.isMounted)
                if (n) k = h || l, M = p || c, I = P || a;
                else return;
            let z = !1;
            const A = x._enterCb = R => {
                z || (z = !0, R ? V(I, [x]) : V(M, [x]), te.delayedLeave && te.delayedLeave(), x._enterCb = void 0)
            };
            k ? (k(x, A), k.length <= 1 && A()) : A()
        },
        leave(x, k) {
            const M = String(e.key);
            if (x._enterCb && x._enterCb(!0), r.isUnmounting) return k();
            V(D, [x]);
            let I = !1;
            const z = x._leaveCb = A => {
                I || (I = !0, k(), A ? V(C, [x]) : V(d, [x]), x._leaveCb = void 0, v[M] === e && delete v[M])
            };
            v[M] = e, f ? (f(x, z), f.length <= 1 && z()) : z()
        },
        clone(x) {
            return nu(x, t, r, u)
        }
    };
    return te
}
function Hn(e) {
    if (Rr(e)) return e = Kt(e), e.children = null, e
}
function Fo(e) {
    return Rr(e) ? e.children ? e.children[0] : void 0 : e
}
function uu(e, t) {
    e.shapeFlag & 6 && e.component ? uu(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function hi(e, t = !1, r) {
    let u = [],
        n = 0;
    for (let o = 0; o < e.length; o++) {
        let s = e[o];
        const i = r == null ? s.key : String(r) + String(s.key != null ? s.key : o);
        s.type === Ne ? (s.patchFlag & 128 && n++, u = u.concat(hi(s.children, t, i))) : (t || s.type !== ut) && u.push(i != null ? Kt(s, {
            key: i
        }) : s)
    }
    if (n > 1)
        for (let o = 0; o < u.length; o++) u[o].patchFlag = -2;
    return u
}
function Gt(e) {
    return Z(e) ? {
        setup: e,
        name: e.name
    } : e
}
const un = e => !!e.type.__asyncLoader;
function Qa(e) {
    Z(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: r,
        errorComponent: u,
        delay: n = 200,
        timeout: o,
        suspensible: s = !0,
        onError: i
    } = e;
    let l = null,
        c, a = 0;
    const D = () => (a++, l = null, f()),
        f = () => {
            let d;
            return l || (d = l = t()
                .catch(C => {
                    if (C = C instanceof Error ? C : new Error(String(C)), i) return new Promise((m, h) => {
                        i(C, () => m(D()), () => h(C), a + 1)
                    });
                    throw C
                })
                .then(C => d !== l && l ? l : (C && (C.__esModule || C[Symbol.toStringTag] === "Module") && (C = C.default), c = C, C)))
        };
    return Gt({
        name: "AsyncComponentWrapper",
        __asyncLoader: f,
        get __asyncResolved() {
            return c
        },
        setup() {
            const d = xe;
            if (c) return () => jn(c, d);
            const C = P => {
                l = null, Lr(P, d, 13, !u)
            };
            if (s && d.suspense || Dr) return f()
                .then(P => () => jn(P, d))
                .catch(P => (C(P), () => u ? De(u, {
                    error: P
                }) : null));
            const m = Me(!1),
                h = Me(),
                p = Me(!!n);
            return n && setTimeout(() => {
                    p.value = !1
                }, n), o != null && setTimeout(() => {
                    if (!m.value && !h.value) {
                        const P = new Error(`Async component timed out after ${o}ms.`);
                        C(P), h.value = P
                    }
                }, o), f()
                .then(() => {
                    m.value = !0, d.parent && Rr(d.parent.vnode) && ju(d.parent.update)
                })
                .catch(P => {
                    C(P), h.value = P
                }), () => {
                    if (m.value && c) return jn(c, d);
                    if (h.value && u) return De(u, {
                        error: h.value
                    });
                    if (r && !p.value) return De(r)
                }
        }
    })
}
function jn(e, {
    vnode: {
        ref: t,
        props: r,
        children: u
    }
}) {
    const n = De(e, r, u);
    return n.ref = t, n
}
const Rr = e => e.type.__isKeepAlive;
function mi(e, t) {
    gi(e, "a", t)
}
function pi(e, t) {
    gi(e, "da", t)
}
function gi(e, t, r = xe) {
    const u = e.__wdc || (e.__wdc = () => {
        let n = r;
        for (; n;) {
            if (n.isDeactivated) return;
            n = n.parent
        }
        return e()
    });
    if (xn(t, u, r), r) {
        let n = r.parent;
        for (; n && n.parent;) Rr(n.parent.vnode) && Ya(u, t, r, n), n = n.parent
    }
}
function Ya(e, t, r, u) {
    const n = xn(t, e, u, !0);
    An(() => {
        Tu(u[t], n)
    }, r)
}
function xn(e, t, r = xe, u = !1) {
    if (r) {
        const n = r[e] || (r[e] = []),
            o = t.__weh || (t.__weh = (...s) => {
                if (r.isUnmounted) return;
                hr(), fr(r);
                const i = nt(t, r, e, s);
                return Wt(), mr(), i
            });
        return u ? n.unshift(o) : n.push(o), o
    }
}
const Et = e => (t, r = xe) => (!Dr || e === "sp") && xn(e, t, r),
    qu = Et("bm"),
    Jt = Et("m"),
    Ci = Et("bu"),
    Fi = Et("u"),
    Wu = Et("bum"),
    An = Et("um"),
    yi = Et("sp"),
    ec = Et("rtg"),
    tc = Et("rtc");
function Ei(e, t = xe) {
    xn("ec", e, t)
}
let ou = !0;
function rc(e) {
    const t = vi(e),
        r = e.proxy,
        u = e.ctx;
    ou = !1, t.beforeCreate && yo(t.beforeCreate, e, "bc");
    const {
        data: n,
        computed: o,
        methods: s,
        watch: i,
        provide: l,
        inject: c,
        created: a,
        beforeMount: D,
        mounted: f,
        beforeUpdate: d,
        updated: C,
        activated: m,
        deactivated: h,
        beforeDestroy: p,
        beforeUnmount: P,
        destroyed: w,
        unmounted: v,
        render: V,
        renderTracked: te,
        renderTriggered: x,
        errorCaptured: k,
        serverPrefetch: M,
        expose: I,
        inheritAttrs: z,
        components: A,
        directives: R,
        filters: W
    } = t;
    if (c && nc(c, u, null, e.appContext.config.unwrapInjectedRef), s)
        for (const X in s) {
            const oe = s[X];
            Z(oe) && (u[X] = oe.bind(r))
        }
    if (n) {
        const X = n.call(r, r);
        Ee(X) && (e.data = pr(X))
    }
    if (ou = !0, o)
        for (const X in o) {
            const oe = o[X],
                me = Z(oe) ? oe.bind(r, r) : Z(oe.get) ? oe.get.bind(r, r) : it,
                Fe = !Z(oe) && Z(oe.set) ? oe.set.bind(r) : it,
                _e = Qe({
                    get: me,
                    set: Fe
                });
            Object.defineProperty(u, X, {
                enumerable: !0,
                configurable: !0,
                get: () => _e.value,
                set: Se => _e.value = Se
            })
        }
    if (i)
        for (const X in i) _i(i[X], u, r, X);
    if (l) {
        const X = Z(l) ? l.call(r) : l;
        Reflect.ownKeys(X)
            .forEach(oe => {
                ci(oe, X[oe])
            })
    }
    a && yo(a, e, "c");
    function ue(X, oe) {
        K(oe) ? oe.forEach(me => X(me.bind(r))) : oe && X(oe.bind(r))
    }
    if (ue(qu, D), ue(Jt, f), ue(Ci, d), ue(Fi, C), ue(mi, m), ue(pi, h), ue(Ei, k), ue(tc, te), ue(ec, x), ue(Wu, P), ue(An, v), ue(yi, M), K(I))
        if (I.length) {
            const X = e.exposed || (e.exposed = {});
            I.forEach(oe => {
                Object.defineProperty(X, oe, {
                    get: () => r[oe],
                    set: me => r[oe] = me
                })
            })
        } else e.exposed || (e.exposed = {});
    V && e.render === it && (e.render = V), z != null && (e.inheritAttrs = z), A && (e.components = A), R && (e.directives = R)
}
function nc(e, t, r = it, u = !1) {
    K(e) && (e = su(e));
    for (const n in e) {
        const o = e[n];
        let s;
        Ee(o) ? "default" in o ? s = wr(o.from || n, o.default, !0) : s = wr(o.from || n) : s = wr(o), ye(s) && u ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: i => s.value = i
        }) : t[n] = s
    }
}
function yo(e, t, r) {
    nt(K(e) ? e.map(u => u.bind(t.proxy)) : e.bind(t.proxy), t, r)
}
function _i(e, t, r, u) {
    const n = u.includes(".") ? fi(r, u) : () => r[u];
    if (Be(e)) {
        const o = t[e];
        Z(o) && pt(n, o)
    } else if (Z(e)) pt(n, e.bind(r));
    else if (Ee(e))
        if (K(e)) e.forEach(o => _i(o, t, r, u));
        else {
            const o = Z(e.handler) ? e.handler.bind(r) : t[e.handler];
            Z(o) && pt(n, o, e)
        }
}
function vi(e) {
    const t = e.type,
        {
            mixins: r,
            extends: u
        } = t,
        {
            mixins: n,
            optionsCache: o,
            config: {
                optionMergeStrategies: s
            }
        } = e.appContext,
        i = o.get(t);
    let l;
    return i ? l = i : !n.length && !r && !u ? l = t : (l = {}, n.length && n.forEach(c => on(l, c, s, !0)), on(l, t, s)), o.set(t, l), l
}
function on(e, t, r, u = !1) {
    const {
        mixins: n,
        extends: o
    } = t;
    o && on(e, o, r, !0), n && n.forEach(s => on(e, s, r, !0));
    for (const s in t)
        if (!(u && s === "expose")) {
            const i = uc[s] || r && r[s];
            e[s] = i ? i(e[s], t[s]) : t[s]
        } return e
}
const uc = {
    data: Eo,
    props: Ht,
    emits: Ht,
    methods: Ht,
    computed: Ht,
    beforeCreate: Re,
    created: Re,
    beforeMount: Re,
    mounted: Re,
    beforeUpdate: Re,
    updated: Re,
    beforeDestroy: Re,
    beforeUnmount: Re,
    destroyed: Re,
    unmounted: Re,
    activated: Re,
    deactivated: Re,
    errorCaptured: Re,
    serverPrefetch: Re,
    components: Ht,
    directives: Ht,
    watch: sc,
    provide: Eo,
    inject: oc
};
function Eo(e, t) {
    return t ? e ? function() {
        return Ae(Z(e) ? e.call(this, this) : e, Z(t) ? t.call(this, this) : t)
    } : t : e
}
function oc(e, t) {
    return Ht(su(e), su(t))
}
function su(e) {
    if (K(e)) {
        const t = {};
        for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
        return t
    }
    return e
}
function Re(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Ht(e, t) {
    return e ? Ae(Ae(Object.create(null), e), t) : t
}
function sc(e, t) {
    if (!e) return t;
    if (!t) return e;
    const r = Ae(Object.create(null), e);
    for (const u in t) r[u] = Re(e[u], t[u]);
    return r
}
function ic(e, t, r, u = !1) {
    const n = {},
        o = {};
    tn(o, Bn, 1), e.propsDefaults = Object.create(null), $i(e, t, n, o);
    for (const s in e.propsOptions[0]) s in n || (n[s] = void 0);
    r ? e.props = u ? n : Zs(n) : e.type.props ? e.props = n : e.props = o, e.attrs = o
}
function lc(e, t, r, u) {
    const {
        props: n,
        attrs: o,
        vnode: {
            patchFlag: s
        }
    } = e, i = le(n), [l] = e.propsOptions;
    let c = !1;
    if ((u || s > 0) && !(s & 16)) {
        if (s & 8) {
            const a = e.vnode.dynamicProps;
            for (let D = 0; D < a.length; D++) {
                let f = a[D];
                if (bn(e.emitsOptions, f)) continue;
                const d = t[f];
                if (l)
                    if (se(o, f)) d !== o[f] && (o[f] = d, c = !0);
                    else {
                        const C = ar(f);
                        n[C] = iu(l, i, C, d, e, !1)
                    }
                else d !== o[f] && (o[f] = d, c = !0)
            }
        }
    } else {
        $i(e, t, n, o) && (c = !0);
        let a;
        for (const D in i)(!t || !se(t, D) && ((a = dr(D)) === D || !se(t, a))) && (l ? r && (r[D] !== void 0 || r[a] !== void 0) && (n[D] = iu(l, i, D, void 0, e, !0)) : delete n[D]);
        if (o !== i)
            for (const D in o)(!t || !se(t, D) && !0) && (delete o[D], c = !0)
    }
    c && Ft(e, "set", "$attrs")
}
function $i(e, t, r, u) {
    const [n, o] = e.propsOptions;
    let s = !1,
        i;
    if (t)
        for (let l in t) {
            if (Gr(l)) continue;
            const c = t[l];
            let a;
            n && se(n, a = ar(l)) ? !o || !o.includes(a) ? r[a] = c : (i || (i = {}))[a] = c : bn(e.emitsOptions, l) || (!(l in u) || c !== u[l]) && (u[l] = c, s = !0)
        }
    if (o) {
        const l = le(r),
            c = i || ae;
        for (let a = 0; a < o.length; a++) {
            const D = o[a];
            r[D] = iu(n, l, D, c[D], e, !se(c, D))
        }
    }
    return s
}
function iu(e, t, r, u, n, o) {
    const s = e[r];
    if (s != null) {
        const i = se(s, "default");
        if (i && u === void 0) {
            const l = s.default;
            if (s.type !== Function && Z(l)) {
                const {
                    propsDefaults: c
                } = n;
                r in c ? u = c[r] : (fr(n), u = c[r] = l.call(null, t), Wt())
            } else u = l
        }
        s[0] && (o && !i ? u = !1 : s[1] && (u === "" || u === dr(r)) && (u = !0))
    }
    return u
}
function bi(e, t, r = !1) {
    const u = t.propsCache,
        n = u.get(e);
    if (n) return n;
    const o = e.props,
        s = {},
        i = [];
    let l = !1;
    if (!Z(e)) {
        const a = D => {
            l = !0;
            const [f, d] = bi(D, t, !0);
            Ae(s, f), d && i.push(...d)
        };
        !r && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a)
    }
    if (!o && !l) return u.set(e, or), or;
    if (K(o))
        for (let a = 0; a < o.length; a++) {
            const D = ar(o[a]);
            _o(D) && (s[D] = ae)
        } else if (o)
            for (const a in o) {
                const D = ar(a);
                if (_o(D)) {
                    const f = o[a],
                        d = s[D] = K(f) || Z(f) ? {
                            type: f
                        } : f;
                    if (d) {
                        const C = bo(Boolean, d.type),
                            m = bo(String, d.type);
                        d[0] = C > -1, d[1] = m < 0 || C < m, (C > -1 || se(d, "default")) && i.push(D)
                    }
                }
            }
    const c = [s, i];
    return u.set(e, c), c
}
function _o(e) {
    return e[0] !== "$"
}
function vo(e) {
    const t = e && e.toString()
        .match(/^\s*function (\w+)/);
    return t ? t[1] : e === null ? "null" : ""
}
function $o(e, t) {
    return vo(e) === vo(t)
}
function bo(e, t) {
    return K(t) ? t.findIndex(r => $o(r, e)) : Z(t) && $o(t, e) ? 0 : -1
}
const wi = e => e[0] === "_" || e === "$stable",
    Ku = e => K(e) ? e.map(dt) : [dt(e)],
    ac = (e, t, r) => {
        const u = zu((...n) => Ku(t(...n)), r);
        return u._c = !1, u
    },
    xi = (e, t, r) => {
        const u = e._ctx;
        for (const n in e) {
            if (wi(n)) continue;
            const o = e[n];
            if (Z(o)) t[n] = ac(n, o, u);
            else if (o != null) {
                const s = Ku(o);
                t[n] = () => s
            }
        }
    },
    Ai = (e, t) => {
        const r = Ku(t);
        e.slots.default = () => r
    },
    cc = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const r = t._;
            r ? (e.slots = le(t), tn(t, "_", r)) : xi(t, e.slots = {})
        } else e.slots = {}, t && Ai(e, t);
        tn(e.slots, Bn, 1)
    },
    fc = (e, t, r) => {
        const {
            vnode: u,
            slots: n
        } = e;
        let o = !0,
            s = ae;
        if (u.shapeFlag & 32) {
            const i = t._;
            i ? r && i === 1 ? o = !1 : (Ae(n, t), !r && i === 1 && delete n._) : (o = !t.$stable, xi(t, n)), s = t
        } else t && (Ai(e, t), s = {
            default: 1
        });
        if (o)
            for (const i in n) !wi(i) && !(i in s) && delete n[i]
    };
function Rt(e, t, r, u) {
    const n = e.dirs,
        o = t && t.dirs;
    for (let s = 0; s < n.length; s++) {
        const i = n[s];
        o && (i.oldValue = o[s].value);
        let l = i.dir[u];
        l && (hr(), nt(l, r, 8, [e.el, i, e, t]), mr())
    }
}
function Bi() {
    return {
        app: null,
        config: {
            isNativeTag: jl,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Dc = 0;
function dc(e, t) {
    return function(u, n = null) {
        Z(u) || (u = Object.assign({}, u)), n != null && !Ee(n) && (n = null);
        const o = Bi(),
            s = new Set;
        let i = !1;
        const l = o.app = {
            _uid: Dc++,
            _component: u,
            _props: n,
            _container: null,
            _context: o,
            _instance: null,
            version: Mc,
            get config() {
                return o.config
            },
            set config(c) {},
            use(c, ...a) {
                return s.has(c) || (c && Z(c.install) ? (s.add(c), c.install(l, ...a)) : Z(c) && (s.add(c), c(l, ...a))), l
            },
            mixin(c) {
                return o.mixins.includes(c) || o.mixins.push(c), l
            },
            component(c, a) {
                return a ? (o.components[c] = a, l) : o.components[c]
            },
            directive(c, a) {
                return a ? (o.directives[c] = a, l) : o.directives[c]
            },
            mount(c, a, D) {
                if (!i) {
                    const f = De(u, n);
                    return f.appContext = o, a && t ? t(f, c) : e(f, c, D), i = !0, l._container = c, c.__vue_app__ = l, Gu(f.component) || f.component.proxy
                }
            },
            unmount() {
                i && (e(null, l._container), delete l._container.__vue_app__)
            },
            provide(c, a) {
                return o.provides[c] = a, l
            }
        };
        return l
    }
}
function lu(e, t, r, u, n = !1) {
    if (K(e)) {
        e.forEach((f, d) => lu(f, t && (K(t) ? t[d] : t), r, u, n));
        return
    }
    if (un(u) && !n) return;
    const o = u.shapeFlag & 4 ? Gu(u.component) || u.component.proxy : u.el,
        s = n ? null : o,
        {
            i,
            r: l
        } = e,
        c = t && t.r,
        a = i.refs === ae ? i.refs = {} : i.refs,
        D = i.setupState;
    if (c != null && c !== l && (Be(c) ? (a[c] = null, se(D, c) && (D[c] = null)) : ye(c) && (c.value = null)), Z(l)) Tt(l, i, 12, [s, a]);
    else {
        const f = Be(l),
            d = ye(l);
        if (f || d) {
            const C = () => {
                if (e.f) {
                    const m = f ? a[l] : l.value;
                    n ? K(m) && Tu(m, o) : K(m) ? m.includes(o) || m.push(o) : f ? (a[l] = [o], se(D, l) && (D[l] = a[l])) : (l.value = [o], e.k && (a[e.k] = l.value))
                } else f ? (a[l] = s, se(D, l) && (D[l] = s)) : ye(l) && (l.value = s, e.k && (a[e.k] = s))
            };
            s ? (C.id = -1, qe(C, r)) : C()
        }
    }
}
const qe = Ka;
function hc(e) {
    return mc(e)
}
function mc(e, t) {
    const r = Kl();
    r.__VUE__ = !0;
    const {
        insert: u,
        remove: n,
        patchProp: o,
        createElement: s,
        createText: i,
        createComment: l,
        setText: c,
        setElementText: a,
        parentNode: D,
        nextSibling: f,
        setScopeId: d = it,
        cloneNode: C,
        insertStaticContent: m
    } = e, h = (g, F, _, b = null, $ = null, T = null, O = !1, B = null, y = !!F.dynamicChildren) => {
        if (g === F) return;
        g && !Ut(g, F) && (b = re(g), Ce(g, $, T, !0), g = null), F.patchFlag === -2 && (y = !1, F.dynamicChildren = null);
        const {
            type: E,
            ref: L,
            shapeFlag: S
        } = F;
        switch (E) {
            case Sr:
                p(g, F, _, b);
                break;
            case ut:
                P(g, F, _, b);
                break;
            case Jr:
                g == null && w(F, _, b, O);
                break;
            case Ne:
                R(g, F, _, b, $, T, O, B, y);
                break;
            default:
                S & 1 ? te(g, F, _, b, $, T, O, B, y) : S & 6 ? W(g, F, _, b, $, T, O, B, y) : (S & 64 || S & 128) && E.process(g, F, _, b, $, T, O, B, y, $e)
        }
        L != null && $ && lu(L, g && g.ref, T, F || g, !F)
    }, p = (g, F, _, b) => {
        if (g == null) u(F.el = i(F.children), _, b);
        else {
            const $ = F.el = g.el;
            F.children !== g.children && c($, F.children)
        }
    }, P = (g, F, _, b) => {
        g == null ? u(F.el = l(F.children || ""), _, b) : F.el = g.el
    }, w = (g, F, _, b) => {
        [g.el, g.anchor] = m(g.children, F, _, b, g.el, g.anchor)
    }, v = ({
        el: g,
        anchor: F
    }, _, b) => {
        let $;
        for (; g && g !== F;) $ = f(g), u(g, _, b), g = $;
        u(F, _, b)
    }, V = ({
        el: g,
        anchor: F
    }) => {
        let _;
        for (; g && g !== F;) _ = f(g), n(g), g = _;
        n(F)
    }, te = (g, F, _, b, $, T, O, B, y) => {
        O = O || F.type === "svg", g == null ? x(F, _, b, $, T, O, B, y) : I(g, F, $, T, O, B, y)
    }, x = (g, F, _, b, $, T, O, B) => {
        let y, E;
        const {
            type: L,
            props: S,
            shapeFlag: H,
            transition: q,
            patchFlag: J,
            dirs: de
        } = g;
        if (g.el && C !== void 0 && J === -1) y = g.el = C(g.el);
        else {
            if (y = g.el = s(g.type, T, S && S.is, S), H & 8 ? a(y, g.children) : H & 16 && M(g.children, y, null, b, $, T && L !== "foreignObject", O, B), de && Rt(g, null, b, "created"), S) {
                for (const he in S) he !== "value" && !Gr(he) && o(y, he, null, S[he], T, g.children, b, $, Y);
                "value" in S && o(y, "value", null, S.value), (E = S.onVnodeBeforeMount) && ft(E, b, g)
            }
            k(y, g, g.scopeId, O, b)
        }
        de && Rt(g, null, b, "beforeMount");
        const ce = (!$ || $ && !$.pendingBranch) && q && !q.persisted;
        ce && q.beforeEnter(y), u(y, F, _), ((E = S && S.onVnodeMounted) || ce || de) && qe(() => {
            E && ft(E, b, g), ce && q.enter(y), de && Rt(g, null, b, "mounted")
        }, $)
    }, k = (g, F, _, b, $) => {
        if (_ && d(g, _), b)
            for (let T = 0; T < b.length; T++) d(g, b[T]);
        if ($) {
            let T = $.subTree;
            if (F === T) {
                const O = $.vnode;
                k(g, O, O.scopeId, O.slotScopeIds, $.parent)
            }
        }
    }, M = (g, F, _, b, $, T, O, B, y = 0) => {
        for (let E = y; E < g.length; E++) {
            const L = g[E] = B ? xt(g[E]) : dt(g[E]);
            h(null, L, F, _, b, $, T, O, B)
        }
    }, I = (g, F, _, b, $, T, O) => {
        const B = F.el = g.el;
        let {
            patchFlag: y,
            dynamicChildren: E,
            dirs: L
        } = F;
        y |= g.patchFlag & 16;
        const S = g.props || ae,
            H = F.props || ae;
        let q;
        _ && It(_, !1), (q = H.onVnodeBeforeUpdate) && ft(q, _, F, g), L && Rt(F, g, _, "beforeUpdate"), _ && It(_, !0);
        const J = $ && F.type !== "foreignObject";
        if (E ? z(g.dynamicChildren, E, B, _, b, J, T) : O || me(g, F, B, null, _, b, J, T, !1), y > 0) {
            if (y & 16) A(B, F, S, H, _, b, $);
            else if (y & 2 && S.class !== H.class && o(B, "class", null, H.class, $), y & 4 && o(B, "style", S.style, H.style, $), y & 8) {
                const de = F.dynamicProps;
                for (let ce = 0; ce < de.length; ce++) {
                    const he = de[ce],
                        ot = S[he],
                        Qt = H[he];
                    (Qt !== ot || he === "value") && o(B, he, ot, Qt, $, g.children, _, b, Y)
                }
            }
            y & 1 && g.children !== F.children && a(B, F.children)
        } else !O && E == null && A(B, F, S, H, _, b, $);
        ((q = H.onVnodeUpdated) || L) && qe(() => {
            q && ft(q, _, F, g), L && Rt(F, g, _, "updated")
        }, b)
    }, z = (g, F, _, b, $, T, O) => {
        for (let B = 0; B < F.length; B++) {
            const y = g[B],
                E = F[B],
                L = y.el && (y.type === Ne || !Ut(y, E) || y.shapeFlag & 70) ? D(y.el) : _;
            h(y, E, L, null, b, $, T, O, !0)
        }
    }, A = (g, F, _, b, $, T, O) => {
        if (_ !== b) {
            for (const B in b) {
                if (Gr(B)) continue;
                const y = b[B],
                    E = _[B];
                y !== E && B !== "value" && o(g, B, E, y, O, F.children, $, T, Y)
            }
            if (_ !== ae)
                for (const B in _) !Gr(B) && !(B in b) && o(g, B, _[B], null, O, F.children, $, T, Y);
            "value" in b && o(g, "value", _.value, b.value)
        }
    }, R = (g, F, _, b, $, T, O, B, y) => {
        const E = F.el = g ? g.el : i(""),
            L = F.anchor = g ? g.anchor : i("");
        let {
            patchFlag: S,
            dynamicChildren: H,
            slotScopeIds: q
        } = F;
        q && (B = B ? B.concat(q) : q), g == null ? (u(E, _, b), u(L, _, b), M(F.children, _, L, $, T, O, B, y)) : S > 0 && S & 64 && H && g.dynamicChildren ? (z(g.dynamicChildren, H, _, $, T, O, B), (F.key != null || $ && F === $.subTree) && Ti(g, F, !0)) : me(g, F, _, L, $, T, O, B, y)
    }, W = (g, F, _, b, $, T, O, B, y) => {
        F.slotScopeIds = B, g == null ? F.shapeFlag & 512 ? $.ctx.activate(F, _, b, O, y) : ge(F, _, b, $, T, O, y) : ue(g, F, y)
    }, ge = (g, F, _, b, $, T, O) => {
        const B = g.component = Bc(g, b, $);
        if (Rr(g) && (B.ctx.renderer = $e), Tc(B), B.asyncDep) {
            if ($ && $.registerDep(B, X), !g.el) {
                const y = B.subTree = De(ut);
                P(null, y, F, _)
            }
            return
        }
        X(B, g, F, _, $, T, O)
    }, ue = (g, F, _) => {
        const b = F.component = g.component;
        if (Va(g, F, _))
            if (b.asyncDep && !b.asyncResolved) {
                oe(b, F, _);
                return
            } else b.next = F, La(b.update), b.update();
        else F.component = g.component, F.el = g.el, b.vnode = F
    }, X = (g, F, _, b, $, T, O) => {
        const B = () => {
                if (g.isMounted) {
                    let {
                        next: L,
                        bu: S,
                        u: H,
                        parent: q,
                        vnode: J
                    } = g, de = L, ce;
                    It(g, !1), L ? (L.el = J.el, oe(g, L, O)) : L = J, S && In(S), (ce = L.props && L.props.onVnodeBeforeUpdate) && ft(ce, q, L, J), It(g, !0);
                    const he = Nn(g),
                        ot = g.subTree;
                    g.subTree = he, h(ot, he, D(ot.el), re(ot), g, $, T), L.el = he.el, de === null && qa(g, he.el), H && qe(H, $), (ce = L.props && L.props.onVnodeUpdated) && qe(() => ft(ce, q, L, J), $)
                } else {
                    let L;
                    const {
                        el: S,
                        props: H
                    } = F, {
                        bm: q,
                        m: J,
                        parent: de
                    } = g, ce = un(F);
                    if (It(g, !1), q && In(q), !ce && (L = H && H.onVnodeBeforeMount) && ft(L, de, F), It(g, !0), S && gt) {
                        const he = () => {
                            g.subTree = Nn(g), gt(S, g.subTree, g, $, null)
                        };
                        ce ? F.type.__asyncLoader()
                            .then(() => !g.isUnmounted && he()) : he()
                    } else {
                        const he = g.subTree = Nn(g);
                        h(null, he, _, b, g, $, T), F.el = he.el
                    }
                    if (J && qe(J, $), !ce && (L = H && H.onVnodeMounted)) {
                        const he = F;
                        qe(() => ft(L, de, he), $)
                    }
                    F.shapeFlag & 256 && g.a && qe(g.a, $), g.isMounted = !0, F = _ = b = null
                }
            },
            y = g.effect = new Ou(B, () => ju(g.update), g.scope),
            E = g.update = y.run.bind(y);
        E.id = g.uid, It(g, !0), E()
    }, oe = (g, F, _) => {
        F.component = g;
        const b = g.vnode.props;
        g.vnode = F, g.next = null, lc(g, F.props, b, _), fc(g, F.children, _), hr(), Uu(void 0, g.update), mr()
    }, me = (g, F, _, b, $, T, O, B, y = !1) => {
        const E = g && g.children,
            L = g ? g.shapeFlag : 0,
            S = F.children,
            {
                patchFlag: H,
                shapeFlag: q
            } = F;
        if (H > 0) {
            if (H & 128) {
                _e(E, S, _, b, $, T, O, B, y);
                return
            } else if (H & 256) {
                Fe(E, S, _, b, $, T, O, B, y);
                return
            }
        }
        q & 8 ? (L & 16 && Y(E, $, T), S !== E && a(_, S)) : L & 16 ? q & 16 ? _e(E, S, _, b, $, T, O, B, y) : Y(E, $, T, !0) : (L & 8 && a(_, ""), q & 16 && M(S, _, b, $, T, O, B, y))
    }, Fe = (g, F, _, b, $, T, O, B, y) => {
        g = g || or, F = F || or;
        const E = g.length,
            L = F.length,
            S = Math.min(E, L);
        let H;
        for (H = 0; H < S; H++) {
            const q = F[H] = y ? xt(F[H]) : dt(F[H]);
            h(g[H], q, _, null, $, T, O, B, y)
        }
        E > L ? Y(g, $, T, !0, !1, S) : M(F, _, b, $, T, O, B, y, S)
    }, _e = (g, F, _, b, $, T, O, B, y) => {
        let E = 0;
        const L = F.length;
        let S = g.length - 1,
            H = L - 1;
        for (; E <= S && E <= H;) {
            const q = g[E],
                J = F[E] = y ? xt(F[E]) : dt(F[E]);
            if (Ut(q, J)) h(q, J, _, null, $, T, O, B, y);
            else break;
            E++
        }
        for (; E <= S && E <= H;) {
            const q = g[S],
                J = F[H] = y ? xt(F[H]) : dt(F[H]);
            if (Ut(q, J)) h(q, J, _, null, $, T, O, B, y);
            else break;
            S--, H--
        }
        if (E > S) {
            if (E <= H) {
                const q = H + 1,
                    J = q < L ? F[q].el : b;
                for (; E <= H;) h(null, F[E] = y ? xt(F[E]) : dt(F[E]), _, J, $, T, O, B, y), E++
            }
        } else if (E > H)
            for (; E <= S;) Ce(g[E], $, T, !0), E++;
        else {
            const q = E,
                J = E,
                de = new Map;
            for (E = J; E <= H; E++) {
                const Xe = F[E] = y ? xt(F[E]) : dt(F[E]);
                Xe.key != null && de.set(Xe.key, E)
            }
            let ce, he = 0;
            const ot = H - J + 1;
            let Qt = !1,
                so = 0;
            const gr = new Array(ot);
            for (E = 0; E < ot; E++) gr[E] = 0;
            for (E = q; E <= S; E++) {
                const Xe = g[E];
                if (he >= ot) {
                    Ce(Xe, $, T, !0);
                    continue
                }
                let ct;
                if (Xe.key != null) ct = de.get(Xe.key);
                else
                    for (ce = J; ce <= H; ce++)
                        if (gr[ce - J] === 0 && Ut(Xe, F[ce])) {
                            ct = ce;
                            break
                        } ct === void 0 ? Ce(Xe, $, T, !0) : (gr[ct - J] = E + 1, ct >= so ? so = ct : Qt = !0, h(Xe, F[ct], _, null, $, T, O, B, y), he++)
            }
            const io = Qt ? pc(gr) : or;
            for (ce = io.length - 1, E = ot - 1; E >= 0; E--) {
                const Xe = J + E,
                    ct = F[Xe],
                    lo = Xe + 1 < L ? F[Xe + 1].el : b;
                gr[E] === 0 ? h(null, ct, _, lo, $, T, O, B, y) : Qt && (ce < 0 || E !== io[ce] ? Se(ct, _, lo, 2) : ce--)
            }
        }
    }, Se = (g, F, _, b, $ = null) => {
        const {
            el: T,
            type: O,
            transition: B,
            children: y,
            shapeFlag: E
        } = g;
        if (E & 6) {
            Se(g.component.subTree, F, _, b);
            return
        }
        if (E & 128) {
            g.suspense.move(F, _, b);
            return
        }
        if (E & 64) {
            O.move(g, F, _, $e);
            return
        }
        if (O === Ne) {
            u(T, F, _);
            for (let S = 0; S < y.length; S++) Se(y[S], F, _, b);
            u(g.anchor, F, _);
            return
        }
        if (O === Jr) {
            v(g, F, _);
            return
        }
        if (b !== 2 && E & 1 && B)
            if (b === 0) B.beforeEnter(T), u(T, F, _), qe(() => B.enter(T), $);
            else {
                const {
                    leave: S,
                    delayLeave: H,
                    afterLeave: q
                } = B, J = () => u(T, F, _), de = () => {
                    S(T, () => {
                        J(), q && q()
                    })
                };
                H ? H(T, J, de) : de()
            }
        else u(T, F, _)
    }, Ce = (g, F, _, b = !1, $ = !1) => {
        const {
            type: T,
            props: O,
            ref: B,
            children: y,
            dynamicChildren: E,
            shapeFlag: L,
            patchFlag: S,
            dirs: H
        } = g;
        if (B != null && lu(B, null, _, g, !0), L & 256) {
            F.ctx.deactivate(g);
            return
        }
        const q = L & 1 && H,
            J = !un(g);
        let de;
        if (J && (de = O && O.onVnodeBeforeUnmount) && ft(de, F, g), L & 6) Q(g.component, _, b);
        else {
            if (L & 128) {
                g.suspense.unmount(_, b);
                return
            }
            q && Rt(g, null, F, "beforeUnmount"), L & 64 ? g.type.remove(g, F, _, $, $e, b) : E && (T !== Ne || S > 0 && S & 64) ? Y(E, F, _, !1, !0) : (T === Ne && S & 384 || !$ && L & 16) && Y(y, F, _), b && Ve(g)
        }(J && (de = O && O.onVnodeUnmounted) || q) && qe(() => {
            de && ft(de, F, g), q && Rt(g, null, F, "unmounted")
        }, _)
    }, Ve = g => {
        const {
            type: F,
            el: _,
            anchor: b,
            transition: $
        } = g;
        if (F === Ne) {
            N(_, b);
            return
        }
        if (F === Jr) {
            V(g);
            return
        }
        const T = () => {
            n(_), $ && !$.persisted && $.afterLeave && $.afterLeave()
        };
        if (g.shapeFlag & 1 && $ && !$.persisted) {
            const {
                leave: O,
                delayLeave: B
            } = $, y = () => O(_, T);
            B ? B(g.el, T, y) : y()
        } else T()
    }, N = (g, F) => {
        let _;
        for (; g !== F;) _ = f(g), n(g), g = _;
        n(F)
    }, Q = (g, F, _) => {
        const {
            bum: b,
            scope: $,
            update: T,
            subTree: O,
            um: B
        } = g;
        b && In(b), $.stop(), T && (T.active = !1, Ce(O, g, F, _)), B && qe(B, F), qe(() => {
            g.isUnmounted = !0
        }, F), F && F.pendingBranch && !F.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === F.pendingId && (F.deps--, F.deps === 0 && F.resolve())
    }, Y = (g, F, _, b = !1, $ = !1, T = 0) => {
        for (let O = T; O < g.length; O++) Ce(g[O], F, _, b, $)
    }, re = g => g.shapeFlag & 6 ? re(g.component.subTree) : g.shapeFlag & 128 ? g.suspense.next() : f(g.anchor || g.el), ve = (g, F, _) => {
        g == null ? F._vnode && Ce(F._vnode, null, null, !0) : h(F._vnode || null, g, F, null, null, null, _), ii(), F._vnode = g
    }, $e = {
        p: h,
        um: Ce,
        m: Se,
        r: Ve,
        mt: ge,
        mc: M,
        pc: me,
        pbc: z,
        n: re,
        o: e
    };
    let at, gt;
    return t && ([at, gt] = t($e)), {
        render: ve,
        hydrate: at,
        createApp: dc(ve, at)
    }
}
function It({
    effect: e,
    update: t
}, r) {
    e.allowRecurse = t.allowRecurse = r
}
function Ti(e, t, r = !1) {
    const u = e.children,
        n = t.children;
    if (K(u) && K(n))
        for (let o = 0; o < u.length; o++) {
            const s = u[o];
            let i = n[o];
            i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = n[o] = xt(n[o]), i.el = s.el), r || Ti(s, i))
        }
}
function pc(e) {
    const t = e.slice(),
        r = [0];
    let u, n, o, s, i;
    const l = e.length;
    for (u = 0; u < l; u++) {
        const c = e[u];
        if (c !== 0) {
            if (n = r[r.length - 1], e[n] < c) {
                t[u] = n, r.push(u);
                continue
            }
            for (o = 0, s = r.length - 1; o < s;) i = o + s >> 1, e[r[i]] < c ? o = i + 1 : s = i;
            c < e[r[o]] && (o > 0 && (t[u] = r[o - 1]), r[o] = u)
        }
    }
    for (o = r.length, s = r[o - 1]; o-- > 0;) r[o] = s, s = t[s];
    return r
}
const gc = e => e.__isTeleport,
    Cc = Symbol(),
    Ne = Symbol(void 0),
    Sr = Symbol(void 0),
    ut = Symbol(void 0),
    Jr = Symbol(void 0),
    xr = [];
let qt = null;
function G(e = !1) {
    xr.push(qt = e ? null : [])
}
function Fc() {
    xr.pop(), qt = xr[xr.length - 1] || null
}
let sn = 1;
function wo(e) {
    sn += e
}
function ki(e) {
    return e.dynamicChildren = sn > 0 ? qt || or : null, Fc(), sn > 0 && qt && qt.push(e), e
}
function fe(e, t, r, u, n, o) {
    return ki(j(e, t, r, u, n, o, !0))
}
function He(e, t, r, u, n) {
    return ki(De(e, t, r, u, n, !0))
}
function ln(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function Ut(e, t) {
    return e.type === t.type && e.key === t.key
}
const Bn = "__vInternal",
    Pi = ({
        key: e
    }) => e != null ? e : null,
    Zr = ({
        ref: e,
        ref_key: t,
        ref_for: r
    }) => e != null ? Be(e) || ye(e) || Z(e) ? {
        i: Ke,
        r: e,
        k: t,
        f: !!r
    } : e : null;
function j(e, t = null, r = null, u = 0, n = null, o = e === Ne ? 0 : 1, s = !1, i = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Pi(t),
        ref: t && Zr(t),
        scopeId: wn,
        slotScopeIds: null,
        children: r,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: u,
        dynamicProps: n,
        dynamicChildren: null,
        appContext: null
    };
    return i ? (Xu(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Be(r) ? 8 : 16), sn > 0 && !s && qt && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && qt.push(l), l
}
const De = yc;
function yc(e, t = null, r = null, u = 0, n = null, o = !1) {
    if ((!e || e === Cc) && (e = ut), ln(e)) {
        const i = Kt(e, t, !0);
        return r && Xu(i, r), i
    }
    if (Oc(e) && (e = e.__vccOpts), t) {
        t = Ec(t);
        let {
            class: i,
            style: l
        } = t;
        i && !Be(i) && (t.class = Ie(i)), Ee(l) && (Ys(l) && !K(l) && (l = Ae({}, l)), t.style = Au(l))
    }
    const s = Be(e) ? 1 : Wa(e) ? 128 : gc(e) ? 64 : Ee(e) ? 4 : Z(e) ? 2 : 0;
    return j(e, t, r, u, n, s, o, !0)
}
function Ec(e) {
    return e ? Ys(e) || Bn in e ? Ae({}, e) : e : null
}
function Kt(e, t, r = !1) {
    const {
        props: u,
        ref: n,
        patchFlag: o,
        children: s
    } = e, i = t ? $c(u || {}, t) : u;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: i,
        key: i && Pi(i),
        ref: t && t.ref ? r && n ? K(n) ? n.concat(Zr(t)) : [n, Zr(t)] : Zr(t) : n,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ne ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Kt(e.ssContent),
        ssFallback: e.ssFallback && Kt(e.ssFallback),
        el: e.el,
        anchor: e.anchor
    }
}
function _c(e = " ", t = 0) {
    return De(Sr, null, e, t)
}
function vc(e, t) {
    const r = De(Jr, null, e);
    return r.staticCount = t, r
}
function Ar(e = "", t = !1) {
    return t ? (G(), He(ut, null, e)) : De(ut, null, e)
}
function dt(e) {
    return e == null || typeof e == "boolean" ? De(ut) : K(e) ? De(Ne, null, e.slice()) : typeof e == "object" ? xt(e) : De(Sr, null, String(e))
}
function xt(e) {
    return e.el === null || e.memo ? e : Kt(e)
}
function Xu(e, t) {
    let r = 0;
    const {
        shapeFlag: u
    } = e;
    if (t == null) t = null;
    else if (K(t)) r = 16;
    else if (typeof t == "object")
        if (u & 65) {
            const n = t.default;
            n && (n._c && (n._d = !1), Xu(e, n()), n._c && (n._d = !0));
            return
        } else {
            r = 32;
            const n = t._;
            !n && !(Bn in t) ? t._ctx = Ke : n === 3 && Ke && (Ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else Z(t) ? (t = {
        default: t,
        _ctx: Ke
    }, r = 32) : (t = String(t), u & 64 ? (r = 16, t = [_c(t)]) : r = 8);
    e.children = t, e.shapeFlag |= r
}
function $c(...e) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
        const u = e[r];
        for (const n in u)
            if (n === "class") t.class !== u.class && (t.class = Ie([t.class, u.class]));
            else if (n === "style") t.style = Au([t.style, u.style]);
        else if (pn(n)) {
            const o = t[n],
                s = u[n];
            s && o !== s && !(K(o) && o.includes(s)) && (t[n] = o ? [].concat(o, s) : s)
        } else n !== "" && (t[n] = u[n])
    }
    return t
}
function ft(e, t, r, u = null) {
    nt(e, t, 7, [r, u])
}
function bc(e, t, r, u) {
    let n;
    const o = r && r[u];
    if (K(e) || Be(e)) {
        n = new Array(e.length);
        for (let s = 0, i = e.length; s < i; s++) n[s] = t(e[s], s, void 0, o && o[s])
    } else if (typeof e == "number") {
        n = new Array(e);
        for (let s = 0; s < e; s++) n[s] = t(s + 1, s, void 0, o && o[s])
    } else if (Ee(e))
        if (e[Symbol.iterator]) n = Array.from(e, (s, i) => t(s, i, void 0, o && o[i]));
        else {
            const s = Object.keys(e);
            n = new Array(s.length);
            for (let i = 0, l = s.length; i < l; i++) {
                const c = s[i];
                n[i] = t(e[c], c, i, o && o[i])
            }
        }
    else n = [];
    return r && (r[u] = n), n
}
function Si(e, t, r = {}, u, n) {
    if (Ke.isCE || Ke.parent && un(Ke.parent) && Ke.parent.isCE) return De("slot", t === "default" ? null : {
        name: t
    }, u && u());
    let o = e[t];
    o && o._c && (o._d = !1), G();
    const s = o && Oi(o(r)),
        i = He(Ne, {
            key: r.key || `_${t}`
        }, s || (u ? u() : []), s && e._ === 1 ? 64 : -2);
    return !n && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), o && o._c && (o._d = !0), i
}
function Oi(e) {
    return e.some(t => ln(t) ? !(t.type === ut || t.type === Ne && !Oi(t.children)) : !0) ? e : null
}
const au = e => e ? Mi(e) ? Gu(e) || e.proxy : au(e.parent) : null,
    an = Ae(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => au(e.parent),
        $root: e => au(e.root),
        $emit: e => e.emit,
        $options: e => vi(e),
        $forceUpdate: e => () => ju(e.update),
        $nextTick: e => $n.bind(e.proxy),
        $watch: e => Ga.bind(e)
    }),
    wc = {
        get({
            _: e
        }, t) {
            const {
                ctx: r,
                setupState: u,
                data: n,
                props: o,
                accessCache: s,
                type: i,
                appContext: l
            } = e;
            let c;
            if (t[0] !== "$") {
                const d = s[t];
                if (d !== void 0) switch (d) {
                    case 1:
                        return u[t];
                    case 2:
                        return n[t];
                    case 4:
                        return r[t];
                    case 3:
                        return o[t]
                } else {
                    if (u !== ae && se(u, t)) return s[t] = 1, u[t];
                    if (n !== ae && se(n, t)) return s[t] = 2, n[t];
                    if ((c = e.propsOptions[0]) && se(c, t)) return s[t] = 3, o[t];
                    if (r !== ae && se(r, t)) return s[t] = 4, r[t];
                    ou && (s[t] = 0)
                }
            }
            const a = an[t];
            let D, f;
            if (a) return t === "$attrs" && Ye(e, "get", t), a(e);
            if ((D = i.__cssModules) && (D = D[t])) return D;
            if (r !== ae && se(r, t)) return s[t] = 4, r[t];
            if (f = l.config.globalProperties, se(f, t)) return f[t]
        },
        set({
            _: e
        }, t, r) {
            const {
                data: u,
                setupState: n,
                ctx: o
            } = e;
            return n !== ae && se(n, t) ? (n[t] = r, !0) : u !== ae && se(u, t) ? (u[t] = r, !0) : se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: r,
                ctx: u,
                appContext: n,
                propsOptions: o
            }
        }, s) {
            let i;
            return !!r[s] || e !== ae && se(e, s) || t !== ae && se(t, s) || (i = o[0]) && se(i, s) || se(u, s) || se(an, s) || se(n.config.globalProperties, s)
        },
        defineProperty(e, t, r) {
            return r.get != null ? e._.accessCache[t] = 0 : se(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
        }
    },
    xc = Bi();
let Ac = 0;
function Bc(e, t, r) {
    const u = e.type,
        n = (t ? t.appContext : e.appContext) || xc,
        o = {
            uid: Ac++,
            vnode: e,
            type: u,
            parent: t,
            appContext: n,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new Xl(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(n.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: bi(u, n),
            emitsOptions: ai(u, n),
            emit: null,
            emitted: null,
            propsDefaults: ae,
            inheritAttrs: u.inheritAttrs,
            ctx: ae,
            data: ae,
            props: ae,
            attrs: ae,
            slots: ae,
            refs: ae,
            setupState: ae,
            setupContext: null,
            suspense: r,
            suspenseId: r ? r.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return o.ctx = {
        _: o
    }, o.root = t ? t.root : o, o.emit = Na.bind(null, o), e.ce && e.ce(o), o
}
let xe = null;
const St = () => xe || Ke,
    fr = e => {
        xe = e, e.scope.on()
    },
    Wt = () => {
        xe && xe.scope.off(), xe = null
    };
function Mi(e) {
    return e.vnode.shapeFlag & 4
}
let Dr = !1;
function Tc(e, t = !1) {
    Dr = t;
    const {
        props: r,
        children: u
    } = e.vnode, n = Mi(e);
    ic(e, r, n, t), cc(e, u);
    const o = n ? kc(e, t) : void 0;
    return Dr = !1, o
}
function kc(e, t) {
    const r = e.type;
    e.accessCache = Object.create(null), e.proxy = Ru(new Proxy(e.ctx, wc));
    const {
        setup: u
    } = r;
    if (u) {
        const n = e.setupContext = u.length > 1 ? Sc(e) : null;
        fr(e), hr();
        const o = Tt(u, e, 0, [e.props, n]);
        if (mr(), Wt(), Os(o)) {
            if (o.then(Wt, Wt), t) return o.then(s => {
                    xo(e, s, t)
                })
                .catch(s => {
                    Lr(s, e, 0)
                });
            e.asyncDep = o
        } else xo(e, o, t)
    } else Li(e, t)
}
function xo(e, t, r) {
    Z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ee(t) && (e.setupState = ri(t)), Li(e, r)
}
let Ao;
function Li(e, t, r) {
    const u = e.type;
    if (!e.render) {
        if (!t && Ao && !u.render) {
            const n = u.template;
            if (n) {
                const {
                    isCustomElement: o,
                    compilerOptions: s
                } = e.appContext.config, {
                    delimiters: i,
                    compilerOptions: l
                } = u, c = Ae(Ae({
                    isCustomElement: o,
                    delimiters: i
                }, s), l);
                u.render = Ao(n, c)
            }
        }
        e.render = u.render || it
    }
    fr(e), hr(), rc(e), mr(), Wt()
}
function Pc(e) {
    return new Proxy(e.attrs, {
        get(t, r) {
            return Ye(e, "get", "$attrs"), t[r]
        }
    })
}
function Sc(e) {
    const t = u => {
        e.exposed = u || {}
    };
    let r;
    return {
        get attrs() {
            return r || (r = Pc(e))
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function Gu(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(ri(Ru(e.exposed)), {
        get(t, r) {
            if (r in t) return t[r];
            if (r in an) return an[r](e)
        }
    }))
}
function Oc(e) {
    return Z(e) && "__vccOpts" in e
}
const Qe = (e, t) => Sa(e, t, Dr);
function kt(e, t, r) {
    const u = arguments.length;
    return u === 2 ? Ee(t) && !K(t) ? ln(t) ? De(e, null, [t]) : De(e, t) : De(e, null, t) : (u > 3 ? r = Array.prototype.slice.call(arguments, 2) : u === 3 && ln(r) && (r = [r]), De(e, t, r))
}
const Mc = "3.2.33",
    Lc = "http://www.w3.org/2000/svg",
    zt = typeof document != "undefined" ? document : null,
    Bo = zt && zt.createElement("template"),
    Rc = {
        insert: (e, t, r) => {
            t.insertBefore(e, r || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, r, u) => {
            const n = t ? zt.createElementNS(Lc, e) : zt.createElement(e, r ? {
                is: r
            } : void 0);
            return e === "select" && u && u.multiple != null && n.setAttribute("multiple", u.multiple), n
        },
        createText: e => zt.createTextNode(e),
        createComment: e => zt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => zt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        cloneNode(e) {
            const t = e.cloneNode(!0);
            return "_value" in e && (t._value = e._value), t
        },
        insertStaticContent(e, t, r, u, n, o) {
            const s = r ? r.previousSibling : t.lastChild;
            if (n && (n === o || n.nextSibling))
                for (; t.insertBefore(n.cloneNode(!0), r), !(n === o || !(n = n.nextSibling)););
            else {
                Bo.innerHTML = u ? `<svg>${e}</svg>` : e;
                const i = Bo.content;
                if (u) {
                    const l = i.firstChild;
                    for (; l.firstChild;) i.appendChild(l.firstChild);
                    i.removeChild(l)
                }
                t.insertBefore(i, r)
            }
            return [s ? s.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild]
        }
    };
function Ic(e, t, r) {
    const u = e._vtc;
    u && (t = (t ? [t, ...u] : [...u])
        .join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
}
function Nc(e, t, r) {
    const u = e.style,
        n = Be(r);
    if (r && !n) {
        for (const o in r) cu(u, o, r[o]);
        if (t && !Be(t))
            for (const o in t) r[o] == null && cu(u, o, "")
    } else {
        const o = u.display;
        n ? t !== r && (u.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (u.display = o)
    }
}
const To = /\s*!important$/;
function cu(e, t, r) {
    if (K(r)) r.forEach(u => cu(e, t, u));
    else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
    else {
        const u = Hc(e, t);
        To.test(r) ? e.setProperty(dr(u), r.replace(To, ""), "important") : e[u] = r
    }
}
const ko = ["Webkit", "Moz", "ms"],
    Un = {};
function Hc(e, t) {
    const r = Un[t];
    if (r) return r;
    let u = ar(t);
    if (u !== "filter" && u in e) return Un[t] = u;
    u = Rs(u);
    for (let n = 0; n < ko.length; n++) {
        const o = ko[n] + u;
        if (o in e) return Un[t] = o
    }
    return t
}
const Po = "http://www.w3.org/1999/xlink";
function jc(e, t, r, u, n) {
    if (u && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(Po, t.slice(6, t.length)) : e.setAttributeNS(Po, t, r);
    else {
        const o = Rl(t);
        r == null || o && !ks(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r)
    }
}
function Uc(e, t, r, u, n, o, s) {
    if (t === "innerHTML" || t === "textContent") {
        u && s(u, n, o), e[t] = r == null ? "" : r;
        return
    }
    if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
        e._value = r;
        const l = r == null ? "" : r;
        (e.value !== l || e.tagName === "OPTION") && (e.value = l), r == null && e.removeAttribute(t);
        return
    }
    let i = !1;
    if (r === "" || r == null) {
        const l = typeof e[t];
        l === "boolean" ? r = ks(r) : r == null && l === "string" ? (r = "", i = !0) : l === "number" && (r = 0, i = !0)
    }
    try {
        e[t] = r
    } catch {}
    i && e.removeAttribute(t)
}
const [Ri, zc] = (() => {
    let e = Date.now,
        t = !1;
    if (typeof window != "undefined") {
        Date.now() > document.createEvent("Event")
            .timeStamp && (e = () => performance.now());
        const r = navigator.userAgent.match(/firefox\/(\d+)/i);
        t = !!(r && Number(r[1]) <= 53)
    }
    return [e, t]
})();
let fu = 0;
const Vc = Promise.resolve(),
    qc = () => {
        fu = 0
    },
    Wc = () => fu || (Vc.then(qc), fu = Ri());
function Kc(e, t, r, u) {
    e.addEventListener(t, r, u)
}
function Xc(e, t, r, u) {
    e.removeEventListener(t, r, u)
}
function Gc(e, t, r, u, n = null) {
    const o = e._vei || (e._vei = {}),
        s = o[t];
    if (u && s) s.value = u;
    else {
        const [i, l] = Jc(t);
        if (u) {
            const c = o[t] = Zc(u, n);
            Kc(e, i, c, l)
        } else s && (Xc(e, i, s, l), o[t] = void 0)
    }
}
const So = /(?:Once|Passive|Capture)$/;
function Jc(e) {
    let t;
    if (So.test(e)) {
        t = {};
        let r;
        for (; r = e.match(So);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [dr(e.slice(2)), t]
}
function Zc(e, t) {
    const r = u => {
        const n = u.timeStamp || Ri();
        (zc || n >= r.attached - 1) && nt(Qc(u, r.value), t, 5, [u])
    };
    return r.value = e, r.attached = Wc(), r
}
function Qc(e, t) {
    if (K(t)) {
        const r = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            r.call(e), e._stopped = !0
        }, t.map(u => n => !n._stopped && u && u(n))
    } else return t
}
const Oo = /^on[a-z]/,
    Yc = (e, t, r, u, n = !1, o, s, i, l) => {
        t === "class" ? Ic(e, u, n) : t === "style" ? Nc(e, r, u) : pn(t) ? Bu(t) || Gc(e, t, r, u, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ef(e, t, u, n)) ? Uc(e, t, u, o, s, i, l) : (t === "true-value" ? e._trueValue = u : t === "false-value" && (e._falseValue = u), jc(e, t, u, n))
    };
function ef(e, t, r, u) {
    return u ? !!(t === "innerHTML" || t === "textContent" || t in e && Oo.test(t) && Z(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Oo.test(t) && Be(r) ? !1 : t in e
}
function tf(e = "$style") {
    {
        const t = St();
        if (!t) return ae;
        const r = t.type.__cssModules;
        if (!r) return ae;
        const u = r[e];
        return u || ae
    }
}
const vt = "transition",
    Cr = "animation",
    Ju = (e, {
        slots: t
    }) => kt(Di, rf(e), t);
Ju.displayName = "Transition";
const Ii = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
Ju.props = Ae({}, Di.props, Ii);
const Nt = (e, t = []) => {
        K(e) ? e.forEach(r => r(...t)) : e && e(...t)
    },
    Mo = e => e ? K(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function rf(e) {
    const t = {};
    for (const A in e) A in Ii || (t[A] = e[A]);
    if (e.css === !1) return t;
    const {
        name: r = "v",
        type: u,
        duration: n,
        enterFromClass: o = `${r}-enter-from`,
        enterActiveClass: s = `${r}-enter-active`,
        enterToClass: i = `${r}-enter-to`,
        appearFromClass: l = o,
        appearActiveClass: c = s,
        appearToClass: a = i,
        leaveFromClass: D = `${r}-leave-from`,
        leaveActiveClass: f = `${r}-leave-active`,
        leaveToClass: d = `${r}-leave-to`
    } = e, C = nf(n), m = C && C[0], h = C && C[1], {
        onBeforeEnter: p,
        onEnter: P,
        onEnterCancelled: w,
        onLeave: v,
        onLeaveCancelled: V,
        onBeforeAppear: te = p,
        onAppear: x = P,
        onAppearCancelled: k = w
    } = t, M = (A, R, W) => {
        Yt(A, R ? a : i), Yt(A, R ? c : s), W && W()
    }, I = (A, R) => {
        Yt(A, d), Yt(A, f), R && R()
    }, z = A => (R, W) => {
        const ge = A ? x : P,
            ue = () => M(R, A, W);
        Nt(ge, [R, ue]), Lo(() => {
            Yt(R, A ? l : o), $t(R, A ? a : i), Mo(ge) || Ro(R, u, m, ue)
        })
    };
    return Ae(t, {
        onBeforeEnter(A) {
            Nt(p, [A]), $t(A, o), $t(A, s)
        },
        onBeforeAppear(A) {
            Nt(te, [A]), $t(A, l), $t(A, c)
        },
        onEnter: z(!1),
        onAppear: z(!0),
        onLeave(A, R) {
            const W = () => I(A, R);
            $t(A, D), sf(), $t(A, f), Lo(() => {
                Yt(A, D), $t(A, d), Mo(v) || Ro(A, u, h, W)
            }), Nt(v, [A, W])
        },
        onEnterCancelled(A) {
            M(A, !1), Nt(w, [A])
        },
        onAppearCancelled(A) {
            M(A, !0), Nt(k, [A])
        },
        onLeaveCancelled(A) {
            I(A), Nt(V, [A])
        }
    })
}
function nf(e) {
    if (e == null) return null;
    if (Ee(e)) return [zn(e.enter), zn(e.leave)]; {
        const t = zn(e);
        return [t, t]
    }
}
function zn(e) {
    return Is(e)
}
function $t(e, t) {
    t.split(/\s+/)
        .forEach(r => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set))
        .add(t)
}
function Yt(e, t) {
    t.split(/\s+/)
        .forEach(u => u && e.classList.remove(u));
    const {
        _vtc: r
    } = e;
    r && (r.delete(t), r.size || (e._vtc = void 0))
}
function Lo(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let uf = 0;
function Ro(e, t, r, u) {
    const n = e._endId = ++uf,
        o = () => {
            n === e._endId && u()
        };
    if (r) return setTimeout(o, r);
    const {
        type: s,
        timeout: i,
        propCount: l
    } = of (e, t);
    if (!s) return u();
    const c = s + "end";
    let a = 0;
    const D = () => {
            e.removeEventListener(c, f), o()
        },
        f = d => {
            d.target === e && ++a >= l && D()
        };
    setTimeout(() => {
        a < l && D()
    }, i + 1), e.addEventListener(c, f)
}
function of (e, t) {
    const r = window.getComputedStyle(e),
        u = C => (r[C] || "")
        .split(", "),
        n = u(vt + "Delay"),
        o = u(vt + "Duration"),
        s = Io(n, o),
        i = u(Cr + "Delay"),
        l = u(Cr + "Duration"),
        c = Io(i, l);
    let a = null,
        D = 0,
        f = 0;
    t === vt ? s > 0 && (a = vt, D = s, f = o.length) : t === Cr ? c > 0 && (a = Cr, D = c, f = l.length) : (D = Math.max(s, c), a = D > 0 ? s > c ? vt : Cr : null, f = a ? a === vt ? o.length : l.length : 0);
    const d = a === vt && /\b(transform|all)(,|$)/.test(r[vt + "Property"]);
    return {
        type: a,
        timeout: D,
        propCount: f,
        hasTransform: d
    }
}
function Io(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((r, u) => No(r) + No(e[u])))
}
function No(e) {
    return Number(e.slice(0, -1)
        .replace(",", ".")) * 1e3
}
function sf() {
    return document.body.offsetHeight
}
const lf = ["ctrl", "shift", "alt", "meta"],
    af = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => lf.some(r => e[`${r}Key`] && !t.includes(r))
    },
    cf = (e, t) => (r, ...u) => {
        for (let n = 0; n < t.length; n++) {
            const o = af[t[n]];
            if (o && o(r, t)) return
        }
        return e(r, ...u)
    },
    ff = Ae({
        patchProp: Yc
    }, Rc);
let Ho;
function Df() {
    return Ho || (Ho = hc(ff))
}
const df = (...e) => {
    const t = Df()
        .createApp(...e),
        {
            mount: r
        } = t;
    return t.mount = u => {
        const n = hf(u);
        if (!n) return;
        const o = t._component;
        !Z(o) && !o.render && !o.template && (o.template = n.innerHTML), n.innerHTML = "";
        const s = r(n, !1, n instanceof SVGElement);
        return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), s
    }, t
};
function hf(e) {
    return Be(e) ? document.querySelector(e) : e
}
globalThis.onActivated = mi;
globalThis.onBeforeMount = qu;
globalThis.onBeforeUnmount = Wu;
globalThis.onBeforeUpdate = Ci;
globalThis.onDeactivated = pi;
globalThis.onErrorCaptured = Ei;
globalThis.onMounted = Jt;
globalThis.onServerPrefetch = yi;
globalThis.onUnmounted = An;
globalThis.onUpdated = Fi;
globalThis.computed = Qe;
globalThis.customRef = Ba;
globalThis.isReadonly = cr;
globalThis.isRef = ye;
globalThis.markRaw = Ru;
globalThis.reactive = pr;
globalThis.readonly = Lu;
globalThis.ref = Me;
globalThis.shallowReactive = Zs;
globalThis.shallowReadonly = $a;
globalThis.shallowRef = ei;
globalThis.toRaw = le;
globalThis.toRef = ni;
globalThis.toRefs = Ta;
globalThis.triggerRef = wa;
globalThis.unref = ne;
globalThis.watch = pt;
globalThis.watchEffect = Xa;
globalThis.defineComponent = Gt;
globalThis.defineAsyncComponent = Qa;
globalThis.getCurrentInstance = St;
globalThis.h = kt;
globalThis.inject = wr;
globalThis.nextTick = $n;
globalThis.provide = ci;
globalThis.useCssModule = tf;
const mf = {
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 32 32",
        width: "1.2em",
        height: "1.2em"
    },
    pf = j("path", {
        d: "M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z",
        "fill-rule": "evenodd",
        fill: "currentColor"
    }, null, -1),
    gf = [pf];
function Cf(e, t) {
    return G(), fe("svg", mf, gf)
}
var Ff = {
    name: "carbon-logo-github",
    render: Cf
};
const yf = {
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 32 32",
        width: "1.2em",
        height: "1.2em"
    },
    Ef = j("path", {
        d: "M27 16.76V16v-.77l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1a2 2 0 0 0-.64.1l-2.43.82a11.35 11.35 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.48 11.48 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1a2 2 0 0 0 .64-.1l2.43-.82a11.35 11.35 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.48 11.48 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1a2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51zM25.21 24l-3.43-1.16a8.86 8.86 0 0 1-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.36 9.36 0 0 1-2.7-1.57L6.79 24l-2.36-4l2.72-2.4a8.9 8.9 0 0 1 0-3.13L4.43 12l2.36-4l3.43 1.16a8.86 8.86 0 0 1 2.71-1.57L13.64 4h4.72l.71 3.55a9.36 9.36 0 0 1 2.7 1.57L25.21 8l2.36 4l-2.72 2.4a8.9 8.9 0 0 1 0 3.13L27.57 20z",
        fill: "currentColor"
    }, null, -1),
    _f = j("path", {
        d: "M16 22a6 6 0 1 1 6-6a5.94 5.94 0 0 1-6 6zm0-10a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4z",
        fill: "currentColor"
    }, null, -1),
    vf = [Ef, _f];
function $f(e, t) {
    return G(), fe("svg", yf, vf)
}
var bf = {
    name: "carbon-settings",
    render: $f
};
const wf = {
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 32 32",
        width: "1.2em",
        height: "1.2em"
    },
    xf = vc('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>', 9),
    Af = [xf];
function Bf(e, t) {
    return G(), fe("svg", wf, Af)
}
var Tf = {
    name: "carbon-sun",
    render: Bf
};
const kf = {
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 32 32",
        width: "1.2em",
        height: "1.2em"
    },
    Pf = j("path", {
        d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",
        fill: "currentColor"
    }, null, -1),
    Sf = [Pf];
function Of(e, t) {
    return G(), fe("svg", kf, Sf)
}
var Mf = {
    name: "carbon-moon",
    render: Of
};
function Ni(e) {
    return Jl() ? (Zl(e), !0) : !1
}
const Hi = typeof window != "undefined",
    Lf = e => typeof e == "string",
    Vn = () => {};
function Rf(e, t) {
    function r(...u) {
        e(() => t.apply(this, u), {
            fn: t,
            thisArg: this,
            args: u
        })
    }
    return r
}
const ji = e => e();
function If(e = ji) {
    const t = Me(!0);
    function r() {
        t.value = !1
    }
    function u() {
        t.value = !0
    }
    return {
        isActive: t,
        pause: r,
        resume: u,
        eventFilter: (...o) => {
            t.value && e(...o)
        }
    }
}
function Nf(e, t = !0) {
    St() ? qu(e) : t ? e() : $n(e)
}
function Hf(e, t = !0) {
    St() ? Jt(e) : t ? e() : $n(e)
}
function jf(e = !1) {
    if (ye(e)) return t => (e.value = typeof t == "boolean" ? t : !e.value, e.value); {
        const t = Me(e);
        return [t, u => (t.value = typeof u == "boolean" ? u : !t.value, t.value)]
    }
}
var jo = Object.getOwnPropertySymbols,
    Uf = Object.prototype.hasOwnProperty,
    zf = Object.prototype.propertyIsEnumerable,
    Vf = (e, t) => {
        var r = {};
        for (var u in e) Uf.call(e, u) && t.indexOf(u) < 0 && (r[u] = e[u]);
        if (e != null && jo)
            for (var u of jo(e)) t.indexOf(u) < 0 && zf.call(e, u) && (r[u] = e[u]);
        return r
    };
function qf(e, t, r = {}) {
    const u = r,
        {
            eventFilter: n = ji
        } = u,
        o = Vf(u, ["eventFilter"]);
    return pt(e, Rf(n, t), o)
}
var Wf = Object.defineProperty,
    Kf = Object.defineProperties,
    Xf = Object.getOwnPropertyDescriptors,
    cn = Object.getOwnPropertySymbols,
    Ui = Object.prototype.hasOwnProperty,
    zi = Object.prototype.propertyIsEnumerable,
    Uo = (e, t, r) => t in e ? Wf(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    Gf = (e, t) => {
        for (var r in t || (t = {})) Ui.call(t, r) && Uo(e, r, t[r]);
        if (cn)
            for (var r of cn(t)) zi.call(t, r) && Uo(e, r, t[r]);
        return e
    },
    Jf = (e, t) => Kf(e, Xf(t)),
    Zf = (e, t) => {
        var r = {};
        for (var u in e) Ui.call(e, u) && t.indexOf(u) < 0 && (r[u] = e[u]);
        if (e != null && cn)
            for (var u of cn(e)) t.indexOf(u) < 0 && zi.call(e, u) && (r[u] = e[u]);
        return r
    };
function Qf(e, t, r = {}) {
    const u = r,
        {
            eventFilter: n
        } = u,
        o = Zf(u, ["eventFilter"]),
        {
            eventFilter: s,
            pause: i,
            resume: l,
            isActive: c
        } = If(n);
    return {
        stop: qf(e, t, Jf(Gf({}, o), {
            eventFilter: s
        })),
        pause: i,
        resume: l,
        isActive: c
    }
}
function Yf(e) {
    var t;
    const r = ne(e);
    return (t = r == null ? void 0 : r.$el) != null ? t : r
}
const Xt = Hi ? window : void 0;
function eD(...e) {
    let t, r, u, n;
    if (Lf(e[0]) ? ([r, u, n] = e, t = Xt) : [t, r, u, n] = e, !t) return Vn;
    let o = Vn;
    const s = pt(() => Yf(t), l => {
            o(), l && (l.addEventListener(r, u, n), o = () => {
                l.removeEventListener(r, u, n), o = Vn
            })
        }, {
            immediate: !0,
            flush: "post"
        }),
        i = () => {
            s(), o()
        };
    return Ni(i), i
}
function tD(e, t = {}) {
    const {
        window: r = Xt
    } = t;
    let u;
    const n = Me(!1),
        o = () => {
            !r || (u || (u = r.matchMedia(e)), n.value = u.matches)
        };
    return Nf(() => {
        o(), u && ("addEventListener" in u ? u.addEventListener("change", o) : u.addListener(o), Ni(() => {
            "removeEventListener" in u ? u.removeEventListener("change", o) : u.removeListener(o)
        }))
    }), n
}
const Du = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
    du = "__vueuse_ssr_handlers__";
Du[du] = Du[du] || {};
const rD = Du[du];
function Vi(e, t) {
    return rD[e] || t
}
function nD(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" || Array.isArray(e) ? "object" : Number.isNaN(e) ? "any" : "number"
}
const uD = {
    boolean: {
        read: e => e === "true",
        write: e => String(e)
    },
    object: {
        read: e => JSON.parse(e),
        write: e => JSON.stringify(e)
    },
    number: {
        read: e => Number.parseFloat(e),
        write: e => String(e)
    },
    any: {
        read: e => e,
        write: e => String(e)
    },
    string: {
        read: e => e,
        write: e => String(e)
    },
    map: {
        read: e => new Map(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e.entries()))
    },
    set: {
        read: e => new Set(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e))
    },
    date: {
        read: e => new Date(e),
        write: e => e.toISOString()
    }
};
function qi(e, t, r, u = {}) {
    var n;
    const {
        flush: o = "pre",
        deep: s = !0,
        listenToStorageChanges: i = !0,
        writeDefaults: l = !0,
        shallow: c,
        window: a = Xt,
        eventFilter: D,
        onError: f = te => {
            console.error(te)
        }
    } = u, d = (c ? ei : Me)(t);
    if (!r) try {
        r = Vi("getDefaultStorage", () => {
            var te;
            return (te = Xt) == null ? void 0 : te.localStorage
        })()
    } catch (te) {
        f(te)
    }
    if (!r) return d;
    const C = ne(t),
        m = nD(C),
        h = (n = u.serializer) != null ? n : uD[m],
        {
            pause: p,
            resume: P
        } = Qf(d, () => w(d.value), {
            flush: o,
            deep: s,
            eventFilter: D
        });
    return a && i && eD(a, "storage", V), V(), d;
    function w(te) {
        try {
            te == null ? r.removeItem(e) : r.setItem(e, h.write(te))
        } catch (x) {
            f(x)
        }
    }
    function v(te) {
        if (!(te && te.key !== e)) {
            p();
            try {
                const x = te ? te.newValue : r.getItem(e);
                return x == null ? (l && C !== null && r.setItem(e, h.write(C)), C) : typeof x != "string" ? x : h.read(x)
            } catch (x) {
                f(x)
            } finally {
                P()
            }
        }
    }
    function V(te) {
        te && te.key !== e || (d.value = v(te))
    }
}
function Wi(e) {
    return tD("(prefers-color-scheme: dark)", e)
}
var oD = Object.defineProperty,
    zo = Object.getOwnPropertySymbols,
    sD = Object.prototype.hasOwnProperty,
    iD = Object.prototype.propertyIsEnumerable,
    Vo = (e, t, r) => t in e ? oD(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    lD = (e, t) => {
        for (var r in t || (t = {})) sD.call(t, r) && Vo(e, r, t[r]);
        if (zo)
            for (var r of zo(t)) iD.call(t, r) && Vo(e, r, t[r]);
        return e
    };
function aD(e = {}) {
    const {
        selector: t = "html",
        attribute: r = "class",
        window: u = Xt,
        storage: n,
        storageKey: o = "vueuse-color-scheme",
        listenToStorageChanges: s = !0,
        storageRef: i
    } = e, l = lD({
        auto: "",
        light: "light",
        dark: "dark"
    }, e.modes || {}), c = Wi({
        window: u
    }), a = Qe(() => c.value ? "dark" : "light"), D = i || (o == null ? Me("auto") : qi(o, "auto", n, {
        window: u,
        listenToStorageChanges: s
    })), f = Qe({
        get() {
            return D.value === "auto" ? a.value : D.value
        },
        set(h) {
            D.value = h
        }
    }), d = Vi("updateHTMLAttrs", (h, p, P) => {
        const w = u == null ? void 0 : u.document.querySelector(h);
        if (!!w)
            if (p === "class") {
                const v = P.split(/\s/g);
                Object.values(l)
                    .flatMap(V => (V || "")
                        .split(/\s/g))
                    .filter(Boolean)
                    .forEach(V => {
                        v.includes(V) ? w.classList.add(V) : w.classList.remove(V)
                    })
            } else w.setAttribute(p, P)
    });
    function C(h) {
        var p;
        d(t, r, (p = l[h]) != null ? p : h)
    }
    function m(h) {
        e.onChanged ? e.onChanged(h, C) : C(h)
    }
    return pt(f, m, {
        flush: "post",
        immediate: !0
    }), Hf(() => m(f.value)), f
}
var cD = Object.defineProperty,
    fD = Object.defineProperties,
    DD = Object.getOwnPropertyDescriptors,
    qo = Object.getOwnPropertySymbols,
    dD = Object.prototype.hasOwnProperty,
    hD = Object.prototype.propertyIsEnumerable,
    Wo = (e, t, r) => t in e ? cD(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    mD = (e, t) => {
        for (var r in t || (t = {})) dD.call(t, r) && Wo(e, r, t[r]);
        if (qo)
            for (var r of qo(t)) hD.call(t, r) && Wo(e, r, t[r]);
        return e
    },
    pD = (e, t) => fD(e, DD(t));
function gD(e = {}) {
    const {
        valueDark: t = "dark",
        valueLight: r = "",
        window: u = Xt
    } = e, n = aD(pD(mD({}, e), {
        onChanged: (i, l) => {
            var c;
            e.onChanged ? (c = e.onChanged) == null || c.call(e, i === "dark") : l(i)
        },
        modes: {
            dark: t,
            light: r
        }
    })), o = Wi({
        window: u
    });
    return Qe({
        get() {
            return n.value === "dark"
        },
        set(i) {
            i === o.value ? n.value = "auto" : n.value = i ? "dark" : "light"
        }
    })
}
function CD(e, t, r = {}) {
    const {
        window: u = Xt
    } = r;
    return qi(e, t, u == null ? void 0 : u.localStorage, r)
}
var Ko, Xo;
Hi && (window == null ? void 0 : window.navigator) && ((Ko = window == null ? void 0 : window.navigator) == null ? void 0 : Ko.platform) && /iP(ad|hone|od)/.test((Xo = window == null ? void 0 : window.navigator) == null ? void 0 : Xo.platform);
const Ki = CD("web-bookmark", "Shared Link", {
        listenToStorageChanges: !0
    }),
    fn = gD(),
    FD = jf(fn),
    yD = {
        class: "text-xl space-x-1"
    },
    ED = ["title"],
    _D = ["href"],
    vD = {
        class: "btn-icon",
        rel: "noreferrer",
        href: "https://github.com/xiaoluoboding/chrome-web-bookmark",
        target: "_blank",
        title: "GitHub"
    },
    $D = Gt({
        setup(e) {
            const t = "https://bookmark.style",
                r = computed(() => {
                    const u = Ki.value;
                    return u ? `${t}/?url=${encodeURIComponent(u)}` : t
                });
            return (u, n) => {
                const o = Mf,
                    s = Tf,
                    i = bf,
                    l = Ff;
                return G(), fe("nav", yD, [Si(u.$slots, "default"), j("a", {
                    class: "btn-icon !outline-none",
                    href: "#",
                    title: u.$t("button.toggle_dark"),
                    onClick: n[0] || (n[0] = c => ne(FD)())
                }, [ne(fn) ? (G(), He(o, {
                    key: 0
                })) : (G(), He(s, {
                    key: 1
                }))], 8, ED), j("a", {
                    class: "btn-icon",
                    href: ne(r),
                    target: "_blank",
                    title: "Custom design visual web bookmark"
                }, [De(i)], 8, _D), j("a", vD, [De(l)])])
            }
        }
    });
var Xi = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [u, n] of t) r[u] = n;
    return r
};
const bD = {},
    wD = {
        class: "animate-spin box-content text-slate-700 dark:text-slate-200",
        width: "32",
        height: "32",
        viewBox: "0 0 16 16",
        fill: "none",
        "data-view-component": "true"
    },
    xD = j("circle", {
        cx: "8",
        cy: "8",
        r: "7",
        stroke: "currentColor",
        "stroke-opacity": "0.25",
        "stroke-width": "2",
        "vector-effect": "non-scaling-stroke"
    }, null, -1),
    AD = j("path", {
        d: "M15 8a7.002 7.002 0 00-7-7",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
    }, null, -1),
    BD = [xD, AD];
function TD(e, t) {
    return G(), fe("svg", wD, BD)
}
var kD = Xi(bD, [
    ["render", TD]
]);
const PD = {
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 32 32",
        width: "1.2em",
        height: "1.2em"
    },
    SD = j("path", {
        d: "M4 22H2V4a2.002 2.002 0 0 1 2-2h18v2H4z",
        fill: "currentColor"
    }, null, -1),
    OD = j("path", {
        d: "M21 17a3 3 0 1 0-3-3a3.003 3.003 0 0 0 3 3zm0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1z",
        fill: "currentColor"
    }, null, -1),
    MD = j("path", {
        d: "M28 7H9a2.002 2.002 0 0 0-2 2v19a2.002 2.002 0 0 0 2 2h19a2.002 2.002 0 0 0 2-2V9a2.002 2.002 0 0 0-2-2zm0 21H9v-6l4-3.997l5.586 5.586a2 2 0 0 0 2.828 0L23 22.003L28 27zm0-3.828l-3.586-3.586a2 2 0 0 0-2.828 0L20 22.172l-5.586-5.586a2 2 0 0 0-2.828 0L9 19.172V9h19z",
        fill: "currentColor"
    }, null, -1),
    LD = [SD, OD, MD];
function RD(e, t) {
    return G(), fe("svg", PD, LD)
}
var ID = {
    name: "carbon-image-copy",
    render: RD
};
const ND = {
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em"
    },
    HD = j("path", {
        d: "M5 5h2v2H5V5M1 1h10v10H1V1m2 2v6h6V3H3m2 14h2v2H5v-2m-4-4h10v10H1V13m2 2v6h6v-6H3m10-2h4v2h2v-2h4v2h-4v2h4v6h-4v-2h-4v2h-2v-2h2v-2h-2v-6m8 8v-2h-2v2h2m-2-4h-2v-2h-2v4h4v-2M15.17 1.76l-1.41 1.41L16.59 6l-2.83 2.83l1.41 1.41L18 7.41l2.83 2.83l1.41-1.41L19.41 6l2.83-2.83l-1.41-1.41L18 4.59l-2.83-2.83z",
        fill: "currentColor"
    }, null, -1),
    jD = [HD];
function UD(e, t) {
    return G(), fe("svg", ND, jD)
}
var zD = {
    name: "mdi-qrcode-remove",
    render: UD
};
const VD = {
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em"
    },
    qD = j("path", {
        d: "M5 5h2v2H5V5M1 1h10v10H1V1m2 2v6h6V3H3m2 14h2v2H5v-2m-4-4h10v10H1V13m2 2v6h6v-6H3m10-2h4v2h2v-2h4v2h-4v2h4v6h-4v-2h-4v2h-2v-2h2v-2h-2v-6m8 8v-2h-2v2h2m-2-4h-2v-2h-2v4h4v-2M17 2v3h-3v2h3v3h2V7h3V5h-3V2z",
        fill: "currentColor"
    }, null, -1),
    WD = [qD];
function KD(e, t) {
    return G(), fe("svg", VD, WD)
}
var XD = {
    name: "mdi-qrcode-plus",
    render: KD
};
const GD = {
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em"
    },
    JD = j("path", {
        d: "M4 20h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2m0-9h16v7H4v-7z",
        fill: "currentColor"
    }, null, -1),
    ZD = [JD];
function QD(e, t) {
    return G(), fe("svg", GD, ZD)
}
var YD = {
    name: "mdi-dock-top",
    render: QD
};
const e0 = {
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em"
    },
    t0 = j("path", {
        d: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-5 14H4V6h11z",
        fill: "currentColor"
    }, null, -1),
    r0 = [t0];
function n0(e, t) {
    return G(), fe("svg", e0, r0)
}
var u0 = {
        name: "mdi-dock-right",
        render: n0
    },
    Zu = {
        exports: {}
    },
    Gi = function(t, r) {
        return function() {
            for (var n = new Array(arguments.length), o = 0; o < n.length; o++) n[o] = arguments[o];
            return t.apply(r, n)
        }
    },
    o0 = Gi,
    Zt = Object.prototype.toString;
function Qu(e) {
    return Zt.call(e) === "[object Array]"
}
function hu(e) {
    return typeof e == "undefined"
}
function s0(e) {
    return e !== null && !hu(e) && e.constructor !== null && !hu(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}
function i0(e) {
    return Zt.call(e) === "[object ArrayBuffer]"
}
function l0(e) {
    return typeof FormData != "undefined" && e instanceof FormData
}
function a0(e) {
    var t;
    return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && e.buffer instanceof ArrayBuffer, t
}
function c0(e) {
    return typeof e == "string"
}
function f0(e) {
    return typeof e == "number"
}
function Ji(e) {
    return e !== null && typeof e == "object"
}
function Qr(e) {
    if (Zt.call(e) !== "[object Object]") return !1;
    var t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype
}
function D0(e) {
    return Zt.call(e) === "[object Date]"
}
function d0(e) {
    return Zt.call(e) === "[object File]"
}
function h0(e) {
    return Zt.call(e) === "[object Blob]"
}
function Zi(e) {
    return Zt.call(e) === "[object Function]"
}
function m0(e) {
    return Ji(e) && Zi(e.pipe)
}
function p0(e) {
    return typeof URLSearchParams != "undefined" && e instanceof URLSearchParams
}
function g0(e) {
    return e.replace(/^\s*/, "")
        .replace(/\s*$/, "")
}
function C0() {
    return typeof navigator != "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window != "undefined" && typeof document != "undefined"
}
function Yu(e, t) {
    if (!(e === null || typeof e == "undefined"))
        if (typeof e != "object" && (e = [e]), Qu(e))
            for (var r = 0, u = e.length; r < u; r++) t.call(null, e[r], r, e);
        else
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e)
}
function mu() {
    var e = {};
    function t(n, o) {
        Qr(e[o]) && Qr(n) ? e[o] = mu(e[o], n) : Qr(n) ? e[o] = mu({}, n) : Qu(n) ? e[o] = n.slice() : e[o] = n
    }
    for (var r = 0, u = arguments.length; r < u; r++) Yu(arguments[r], t);
    return e
}
function F0(e, t, r) {
    return Yu(t, function(n, o) {
        r && typeof n == "function" ? e[o] = o0(n, r) : e[o] = n
    }), e
}
function y0(e) {
    return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e
}
var et = {
        isArray: Qu,
        isArrayBuffer: i0,
        isBuffer: s0,
        isFormData: l0,
        isArrayBufferView: a0,
        isString: c0,
        isNumber: f0,
        isObject: Ji,
        isPlainObject: Qr,
        isUndefined: hu,
        isDate: D0,
        isFile: d0,
        isBlob: h0,
        isFunction: Zi,
        isStream: m0,
        isURLSearchParams: p0,
        isStandardBrowserEnv: C0,
        forEach: Yu,
        merge: mu,
        extend: F0,
        trim: g0,
        stripBOM: y0
    },
    er = et;
function Go(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]")
}
var Qi = function(t, r, u) {
        if (!r) return t;
        var n;
        if (u) n = u(r);
        else if (er.isURLSearchParams(r)) n = r.toString();
        else {
            var o = [];
            er.forEach(r, function(l, c) {
                l === null || typeof l == "undefined" || (er.isArray(l) ? c = c + "[]" : l = [l], er.forEach(l, function(D) {
                    er.isDate(D) ? D = D.toISOString() : er.isObject(D) && (D = JSON.stringify(D)), o.push(Go(c) + "=" + Go(D))
                }))
            }), n = o.join("&")
        }
        if (n) {
            var s = t.indexOf("#");
            s !== -1 && (t = t.slice(0, s)), t += (t.indexOf("?") === -1 ? "?" : "&") + n
        }
        return t
    },
    E0 = et;
function Tn() {
    this.handlers = []
}
Tn.prototype.use = function(t, r) {
    return this.handlers.push({
        fulfilled: t,
        rejected: r
    }), this.handlers.length - 1
};
Tn.prototype.eject = function(t) {
    this.handlers[t] && (this.handlers[t] = null)
};
Tn.prototype.forEach = function(t) {
    E0.forEach(this.handlers, function(u) {
        u !== null && t(u)
    })
};
var _0 = Tn,
    v0 = et,
    $0 = function(t, r, u) {
        return v0.forEach(u, function(o) {
            t = o(t, r)
        }), t
    },
    Yi = function(t) {
        return !!(t && t.__CANCEL__)
    },
    b0 = et,
    w0 = function(t, r) {
        b0.forEach(t, function(n, o) {
            o !== r && o.toUpperCase() === r.toUpperCase() && (t[r] = n, delete t[o])
        })
    },
    x0 = function(t, r, u, n, o) {
        return t.config = r, u && (t.code = u), t.request = n, t.response = o, t.isAxiosError = !0, t.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, t
    },
    A0 = x0,
    el = function(t, r, u, n, o) {
        var s = new Error(t);
        return A0(s, r, u, n, o)
    },
    B0 = el,
    T0 = function(t, r, u) {
        var n = u.config.validateStatus;
        !u.status || !n || n(u.status) ? t(u) : r(B0("Request failed with status code " + u.status, u.config, null, u.request, u))
    },
    qr = et,
    k0 = qr.isStandardBrowserEnv() ? function() {
        return {
            write: function(r, u, n, o, s, i) {
                var l = [];
                l.push(r + "=" + encodeURIComponent(u)), qr.isNumber(n) && l.push("expires=" + new Date(n)
                    .toGMTString()), qr.isString(o) && l.push("path=" + o), qr.isString(s) && l.push("domain=" + s), i === !0 && l.push("secure"), document.cookie = l.join("; ")
            },
            read: function(r) {
                var u = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
                return u ? decodeURIComponent(u[3]) : null
            },
            remove: function(r) {
                this.write(r, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }(),
    P0 = function(t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    },
    S0 = function(t, r) {
        return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t
    },
    O0 = P0,
    M0 = S0,
    L0 = function(t, r) {
        return t && !O0(r) ? M0(t, r) : r
    },
    qn = et,
    R0 = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
    I0 = function(t) {
        var r = {},
            u, n, o;
        return t && qn.forEach(t.split(`
`), function(i) {
            if (o = i.indexOf(":"), u = qn.trim(i.substr(0, o))
                .toLowerCase(), n = qn.trim(i.substr(o + 1)), u) {
                if (r[u] && R0.indexOf(u) >= 0) return;
                u === "set-cookie" ? r[u] = (r[u] ? r[u] : [])
                    .concat([n]) : r[u] = r[u] ? r[u] + ", " + n : n
            }
        }), r
    },
    Jo = et,
    N0 = Jo.isStandardBrowserEnv() ? function() {
        var t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a"),
            u;
        function n(o) {
            var s = o;
            return t && (r.setAttribute("href", s), s = r.href), r.setAttribute("href", s), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
            }
        }
        return u = n(window.location.href),
            function(s) {
                var i = Jo.isString(s) ? n(s) : s;
                return i.protocol === u.protocol && i.host === u.host
            }
    }() : function() {
        return function() {
            return !0
        }
    }(),
    Wr = et,
    H0 = T0,
    j0 = k0,
    U0 = Qi,
    z0 = L0,
    V0 = I0,
    q0 = N0,
    Wn = el,
    Zo = function(t) {
        return new Promise(function(u, n) {
            var o = t.data,
                s = t.headers;
            Wr.isFormData(o) && delete s["Content-Type"];
            var i = new XMLHttpRequest;
            if (t.auth) {
                var l = t.auth.username || "",
                    c = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                s.Authorization = "Basic " + btoa(l + ":" + c)
            }
            var a = z0(t.baseURL, t.url);
            if (i.open(t.method.toUpperCase(), U0(a, t.params, t.paramsSerializer), !0), i.timeout = t.timeout, i.onreadystatechange = function() {
                    if (!(!i || i.readyState !== 4) && !(i.status === 0 && !(i.responseURL && i.responseURL.indexOf("file:") === 0))) {
                        var d = "getAllResponseHeaders" in i ? V0(i.getAllResponseHeaders()) : null,
                            C = !t.responseType || t.responseType === "text" ? i.responseText : i.response,
                            m = {
                                data: C,
                                status: i.status,
                                statusText: i.statusText,
                                headers: d,
                                config: t,
                                request: i
                            };
                        H0(u, n, m), i = null
                    }
                }, i.onabort = function() {
                    !i || (n(Wn("Request aborted", t, "ECONNABORTED", i)), i = null)
                }, i.onerror = function() {
                    n(Wn("Network Error", t, null, i)), i = null
                }, i.ontimeout = function() {
                    var d = "timeout of " + t.timeout + "ms exceeded";
                    t.timeoutErrorMessage && (d = t.timeoutErrorMessage), n(Wn(d, t, "ECONNABORTED", i)), i = null
                }, Wr.isStandardBrowserEnv()) {
                var D = (t.withCredentials || q0(a)) && t.xsrfCookieName ? j0.read(t.xsrfCookieName) : void 0;
                D && (s[t.xsrfHeaderName] = D)
            }
            if ("setRequestHeader" in i && Wr.forEach(s, function(d, C) {
                    typeof o == "undefined" && C.toLowerCase() === "content-type" ? delete s[C] : i.setRequestHeader(C, d)
                }), Wr.isUndefined(t.withCredentials) || (i.withCredentials = !!t.withCredentials), t.responseType) try {
                i.responseType = t.responseType
            } catch (f) {
                if (t.responseType !== "json") throw f
            }
            typeof t.onDownloadProgress == "function" && i.addEventListener("progress", t.onDownloadProgress), typeof t.onUploadProgress == "function" && i.upload && i.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function(d) {
                !i || (i.abort(), n(d), i = null)
            }), o || (o = null), i.send(o)
        })
    },
    We = et,
    Qo = w0,
    W0 = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
function Yo(e, t) {
    !We.isUndefined(e) && We.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
}
function K0() {
    var e;
    return (typeof XMLHttpRequest != "undefined" || typeof process != "undefined" && Object.prototype.toString.call(process) === "[object process]") && (e = Zo), e
}
var kn = {
    adapter: K0(),
    transformRequest: [function(t, r) {
        return Qo(r, "Accept"), Qo(r, "Content-Type"), We.isFormData(t) || We.isArrayBuffer(t) || We.isBuffer(t) || We.isStream(t) || We.isFile(t) || We.isBlob(t) ? t : We.isArrayBufferView(t) ? t.buffer : We.isURLSearchParams(t) ? (Yo(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : We.isObject(t) ? (Yo(r, "application/json;charset=utf-8"), JSON.stringify(t)) : t
    }],
    transformResponse: [function(t) {
        if (typeof t == "string") try {
            t = JSON.parse(t)
        } catch {}
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function(t) {
        return t >= 200 && t < 300
    }
};
kn.headers = {
    common: {
        Accept: "application/json, text/plain, */*"
    }
};
We.forEach(["delete", "get", "head"], function(t) {
    kn.headers[t] = {}
});
We.forEach(["post", "put", "patch"], function(t) {
    kn.headers[t] = We.merge(W0)
});
var tl = kn,
    es = et,
    Kn = $0,
    X0 = Yi,
    G0 = tl;
function Xn(e) {
    e.cancelToken && e.cancelToken.throwIfRequested()
}
var J0 = function(t) {
        Xn(t), t.headers = t.headers || {}, t.data = Kn(t.data, t.headers, t.transformRequest), t.headers = es.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), es.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(n) {
            delete t.headers[n]
        });
        var r = t.adapter || G0.adapter;
        return r(t)
            .then(function(n) {
                return Xn(t), n.data = Kn(n.data, n.headers, t.transformResponse), n
            }, function(n) {
                return X0(n) || (Xn(t), n && n.response && (n.response.data = Kn(n.response.data, n.response.headers, t.transformResponse))), Promise.reject(n)
            })
    },
    Oe = et,
    rl = function(t, r) {
        r = r || {};
        var u = {},
            n = ["url", "method", "data"],
            o = ["headers", "auth", "proxy", "params"],
            s = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
            i = ["validateStatus"];
        function l(f, d) {
            return Oe.isPlainObject(f) && Oe.isPlainObject(d) ? Oe.merge(f, d) : Oe.isPlainObject(d) ? Oe.merge({}, d) : Oe.isArray(d) ? d.slice() : d
        }
        function c(f) {
            Oe.isUndefined(r[f]) ? Oe.isUndefined(t[f]) || (u[f] = l(void 0, t[f])) : u[f] = l(t[f], r[f])
        }
        Oe.forEach(n, function(d) {
            Oe.isUndefined(r[d]) || (u[d] = l(void 0, r[d]))
        }), Oe.forEach(o, c), Oe.forEach(s, function(d) {
            Oe.isUndefined(r[d]) ? Oe.isUndefined(t[d]) || (u[d] = l(void 0, t[d])) : u[d] = l(void 0, r[d])
        }), Oe.forEach(i, function(d) {
            d in r ? u[d] = l(t[d], r[d]) : d in t && (u[d] = l(void 0, t[d]))
        });
        var a = n.concat(o)
            .concat(s)
            .concat(i),
            D = Object.keys(t)
            .concat(Object.keys(r))
            .filter(function(d) {
                return a.indexOf(d) === -1
            });
        return Oe.forEach(D, c), u
    },
    nl = et,
    Z0 = Qi,
    ts = _0,
    Q0 = J0,
    Pn = rl;
function Ir(e) {
    this.defaults = e, this.interceptors = {
        request: new ts,
        response: new ts
    }
}
Ir.prototype.request = function(t) {
    typeof t == "string" ? (t = arguments[1] || {}, t.url = arguments[0]) : t = t || {}, t = Pn(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
    var r = [Q0, void 0],
        u = Promise.resolve(t);
    for (this.interceptors.request.forEach(function(o) {
            r.unshift(o.fulfilled, o.rejected)
        }), this.interceptors.response.forEach(function(o) {
            r.push(o.fulfilled, o.rejected)
        }); r.length;) u = u.then(r.shift(), r.shift());
    return u
};
Ir.prototype.getUri = function(t) {
    return t = Pn(this.defaults, t), Z0(t.url, t.params, t.paramsSerializer)
        .replace(/^\?/, "")
};
nl.forEach(["delete", "get", "head", "options"], function(t) {
    Ir.prototype[t] = function(r, u) {
        return this.request(Pn(u || {}, {
            method: t,
            url: r,
            data: (u || {})
                .data
        }))
    }
});
nl.forEach(["post", "put", "patch"], function(t) {
    Ir.prototype[t] = function(r, u, n) {
        return this.request(Pn(n || {}, {
            method: t,
            url: r,
            data: u
        }))
    }
});
var Y0 = Ir;
function eo(e) {
    this.message = e
}
eo.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "")
};
eo.prototype.__CANCEL__ = !0;
var ul = eo,
    e1 = ul;
function Dn(e) {
    if (typeof e != "function") throw new TypeError("executor must be a function.");
    var t;
    this.promise = new Promise(function(n) {
        t = n
    });
    var r = this;
    e(function(n) {
        r.reason || (r.reason = new e1(n), t(r.reason))
    })
}
Dn.prototype.throwIfRequested = function() {
    if (this.reason) throw this.reason
};
Dn.source = function() {
    var t, r = new Dn(function(n) {
        t = n
    });
    return {
        token: r,
        cancel: t
    }
};
var t1 = Dn,
    r1 = function(t) {
        return function(u) {
            return t.apply(null, u)
        }
    },
    n1 = function(t) {
        return typeof t == "object" && t.isAxiosError === !0
    },
    rs = et,
    u1 = Gi,
    Yr = Y0,
    o1 = rl,
    s1 = tl;
function ol(e) {
    var t = new Yr(e),
        r = u1(Yr.prototype.request, t);
    return rs.extend(r, Yr.prototype, t), rs.extend(r, t), r
}
var lt = ol(s1);
lt.Axios = Yr;
lt.create = function(t) {
    return ol(o1(lt.defaults, t))
};
lt.Cancel = ul;
lt.CancelToken = t1;
lt.isCancel = Yi;
lt.all = function(t) {
    return Promise.all(t)
};
lt.spread = r1;
lt.isAxiosError = n1;
Zu.exports = lt;
Zu.exports.default = lt;
var i1 = Zu.exports,
    l1 = () => /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFF\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFE\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFD\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFC\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFB\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|[\u2695\u2696\u2708]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])))|\u200D(?:\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?|\u200D(?:\uD83D\uDC8B\u200D)?)\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\u200D[\u2695\u2696\u2708])?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764(?:\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F?\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F?\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83D\uDC41\uFE0F?\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83C\uDFF3\uFE0F?\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F?\u200D\u26A7|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDEF1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764(?:\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\u200D(?:\uD83D\uDD25|\uD83E\uDE79))|\uD83D\uDC41\uFE0F?|\uD83C\uDFF3\uFE0F?|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F?\u20E3|\uD83E\uDD3C(?:\uD83C[\uDFFB-\uDFFF])|\u2764\uFE0F?|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF6])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD3C\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF6]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDDDE\uDDDF]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B50]|\uD83C[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDD-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC2\uDED0-\uDED9\uDEE0-\uDEE7]/g,
    sl = Object.defineProperty,
    ns = Object.getOwnPropertySymbols,
    a1 = Object.prototype.hasOwnProperty,
    c1 = Object.prototype.propertyIsEnumerable,
    pu = (e, t, r) => t in e ? sl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    us = (e, t) => {
        for (var r in t || (t = {})) a1.call(t, r) && pu(e, r, t[r]);
        if (ns)
            for (var r of ns(t)) c1.call(t, r) && pu(e, r, t[r]);
        return e
    },
    f1 = (e, t) => {
        for (var r in t) sl(e, r, {
            get: t[r],
            enumerable: !0
        })
    },
    gu = (e, t, r) => (pu(e, typeof t != "symbol" ? t + "" : t, r), r),
    il = {};
f1(il, {
    BaseRenderer: () => Sn,
    CircleRenderer: () => Dl,
    DsjRenderer: () => dl,
    FuncRenderer: () => hl,
    ImageFillRenderer: () => ml,
    ImageQrRenderer: () => pl,
    LineRenderer: () => gl,
    RandRectRenderer: () => Cl,
    ResImageRenderer: () => Fl,
    SolidRenderer: () => yl,
    createQRCode: () => fl,
    renderBase: () => cl,
    renderCircle: () => _1,
    renderDsj: () => b1,
    renderFunc: () => A1,
    renderImage: () => O1,
    renderImageFill: () => k1,
    renderLine: () => R1,
    renderRandRect: () => N1,
    renderResImage: () => z1,
    renderSolid: () => W1
});
var Gn = 0,
    os = 0;
function ke(e, t) {
    return Gn = (Gn * 9301 + 49297) % 233280, e + Gn / 233280 * (t - e)
}
function At() {
    return os += 1, os.toString()
}
function lr(e, t) {
    return typeof e != "string" || (e.length <= 0 && (e = t), isNaN(e) || (e = parseInt(e))), e
}
function mt(e) {
    return e.reduce((t, r) => (r && r.length > 0 && t.push(r), t), [])
        .join(`
`)
}
function D1(e) {
    return l1()
        .test(e)
}
var d1 = class {
        constructor(e) {
            Te(this, "mode");
            Te(this, "data");
            Te(this, "parsedData");
            this.mode = Ge.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
            for (let t = 0, r = this.data.length; t < r; t++) {
                let u = [],
                    n = this.data.charCodeAt(t);
                n > 65536 ? (u[0] = 240 | (n & 1835008) >>> 18, u[1] = 128 | (n & 258048) >>> 12, u[2] = 128 | (n & 4032) >>> 6, u[3] = 128 | n & 63) : n > 2048 ? (u[0] = 224 | (n & 61440) >>> 12, u[1] = 128 | (n & 4032) >>> 6, u[2] = 128 | n & 63) : n > 128 ? (u[0] = 192 | (n & 1984) >>> 6, u[1] = 128 | n & 63) : u[0] = n, this.parsedData.push(...u)
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
        }
        getLength() {
            return this.parsedData.length
        }
        write(e) {
            for (let t = 0, r = this.parsedData.length; t < r; t++) e.put(this.parsedData[t], 8)
        }
    },
    _r = class {
        constructor(e, t) {
            Te(this, "typeNumber");
            Te(this, "errorCorrectLevel");
            Te(this, "modules");
            Te(this, "moduleCount");
            Te(this, "position");
            Te(this, "dataCache");
            Te(this, "dataList");
            this.typeNumber = e, this.errorCorrectLevel = t, this.modules = [], this.moduleCount = 0, this.position = [], this.dataCache = null, this.dataList = []
        }
        addData(e) {
            let t = new d1(e);
            this.dataList.push(t), this.dataCache = null
        }
        isDark(e, t) {
            if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) throw new Error(e + "," + t);
            return this.modules[e][t]
        }
        getModuleCount() {
            return this.moduleCount
        }
        getPositionTable() {
            return this.position
        }
        make() {
            if (this.typeNumber < 1) {
                let e = 1;
                for (e = 1; e < 40; e++) {
                    let t = Fu.getRSBlocks(e, this.errorCorrectLevel),
                        r = new ss,
                        u = 0;
                    for (let n = 0; n < t.length; n++) u += t[n].dataCount;
                    for (let n = 0; n < this.dataList.length; n++) {
                        let o = this.dataList[n];
                        r.put(o.mode, 4), r.put(o.getLength(), pe.getLengthInBits(o.mode, e)), o.write(r)
                    }
                    if (r.getLengthInBits() <= u * 8) break
                }
                this.typeNumber = e
            }
            this.makeImpl(!1, this.getBestMaskPattern())
        }
        makeImpl(e, t) {
            this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
            for (let r = 0; r < this.moduleCount; r++) {
                this.modules[r] = new Array(this.moduleCount);
                for (let u = 0; u < this.moduleCount; u++) this.modules[r][u] = null
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), this.dataCache == null && (this.dataCache = _r.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
        }
        setupPositionProbePattern(e, t) {
            for (let r = -1; r <= 7; r++)
                if (!(e + r <= -1 || this.moduleCount <= e + r))
                    for (let u = -1; u <= 7; u++) t + u <= -1 || this.moduleCount <= t + u || (0 <= r && r <= 6 && (u == 0 || u == 6) || 0 <= u && u <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= u && u <= 4 ? this.modules[e + r][t + u] = !0 : this.modules[e + r][t + u] = !1)
        }
        getBestMaskPattern() {
            let e = 0,
                t = 0;
            for (let r = 0; r < 8; r++) {
                this.makeImpl(!0, r);
                let u = pe.getLostPoint(this);
                (r == 0 || e > u) && (e = u, t = r)
            }
            return t
        }
        setupTimingPattern() {
            for (let e = 8; e < this.moduleCount - 8; e++) this.modules[e][6] == null && (this.modules[e][6] = e % 2 == 0);
            for (let e = 8; e < this.moduleCount - 8; e++) this.modules[6][e] == null && (this.modules[6][e] = e % 2 == 0)
        }
        setupPositionAdjustPattern() {
            let e = pe.getPatternPosition(this.typeNumber);
            this.position = new Array;
            for (let t = 0; t < e.length; t++)
                for (let r = 0; r < e.length; r++) {
                    let u = e[t],
                        n = e[r];
                    if (this.modules[u][n] == null) {
                        this.position.push([u, n]);
                        for (let o = -2; o <= 2; o++)
                            for (let s = -2; s <= 2; s++) o == -2 || o == 2 || s == -2 || s == 2 || o == 0 && s == 0 ? this.modules[u + o][n + s] = !0 : this.modules[u + o][n + s] = !1
                    }
                }
        }
        setupTypeNumber(e) {
            let t = pe.getBCHTypeNumber(this.typeNumber);
            for (let r = 0; r < 18; r++) {
                let u = !e && (t >> r & 1) == 1;
                this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = u
            }
            for (let r = 0; r < 18; r++) {
                let u = !e && (t >> r & 1) == 1;
                this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = u
            }
        }
        setupTypeInfo(e, t) {
            let r = this.errorCorrectLevel << 3 | t,
                u = pe.getBCHTypeInfo(r);
            for (let n = 0; n < 15; n++) {
                let o = !e && (u >> n & 1) == 1;
                n < 6 ? this.modules[n][8] = o : n < 8 ? this.modules[n + 1][8] = o : this.modules[this.moduleCount - 15 + n][8] = o
            }
            for (let n = 0; n < 15; n++) {
                let o = !e && (u >> n & 1) == 1;
                n < 8 ? this.modules[8][this.moduleCount - n - 1] = o : n < 9 ? this.modules[8][15 - n - 1 + 1] = o : this.modules[8][15 - n - 1] = o
            }
            this.modules[this.moduleCount - 8][8] = !e
        }
        mapData(e, t) {
            let r = -1,
                u = this.moduleCount - 1,
                n = 7,
                o = 0;
            for (let s = this.moduleCount - 1; s > 0; s -= 2)
                for (s == 6 && s--;;) {
                    for (let i = 0; i < 2; i++)
                        if (this.modules[u][s - i] == null) {
                            let l = !1;
                            o < e.length && (l = (e[o] >>> n & 1) == 1), pe.getMask(t, u, s - i) && (l = !l), this.modules[u][s - i] = l, n--, n == -1 && (o++, n = 7)
                        } if (u += r, u < 0 || this.moduleCount <= u) {
                        u -= r, r = -r;
                        break
                    }
                }
        }
        static createData(e, t, r) {
            let u = Fu.getRSBlocks(e, t),
                n = new ss;
            for (let s = 0; s < r.length; s++) {
                let i = r[s];
                n.put(i.mode, 4), n.put(i.getLength(), pe.getLengthInBits(i.mode, e)), i.write(n)
            }
            let o = 0;
            for (let s = 0; s < u.length; s++) o += u[s].dataCount;
            if (n.getLengthInBits() > o * 8) throw new Error("code length overflow. (" + n.getLengthInBits() + ">" + o * 8 + ")");
            for (n.getLengthInBits() + 4 <= o * 8 && n.put(0, 4); n.getLengthInBits() % 8 != 0;) n.putBit(!1);
            for (; !(n.getLengthInBits() >= o * 8 || (n.put(_r.PAD0, 8), n.getLengthInBits() >= o * 8));) n.put(_r.PAD1, 8);
            return _r.createBytes(n, u)
        }
        static createBytes(e, t) {
            let r = 0,
                u = 0,
                n = 0,
                o = new Array(t.length),
                s = new Array(t.length);
            for (let a = 0; a < t.length; a++) {
                let D = t[a].dataCount,
                    f = t[a].totalCount - D;
                u = Math.max(u, D), n = Math.max(n, f), o[a] = new Array(D);
                for (let m = 0; m < o[a].length; m++) o[a][m] = 255 & e.buffer[m + r];
                r += D;
                let d = pe.getErrorCorrectPolynomial(f),
                    C = new Or(o[a], d.getLength() - 1)
                    .mod(d);
                s[a] = new Array(d.getLength() - 1);
                for (let m = 0; m < s[a].length; m++) {
                    let h = m + C.getLength() - s[a].length;
                    s[a][m] = h >= 0 ? C.get(h) : 0
                }
            }
            let i = 0;
            for (let a = 0; a < t.length; a++) i += t[a].totalCount;
            let l = new Array(i),
                c = 0;
            for (let a = 0; a < u; a++)
                for (let D = 0; D < t.length; D++) a < o[D].length && (l[c++] = o[D][a]);
            for (let a = 0; a < n; a++)
                for (let D = 0; D < t.length; D++) a < s[D].length && (l[c++] = s[D][a]);
            return l
        }
    },
    Cu = _r;
gu(Cu, "PAD0", 236), gu(Cu, "PAD1", 17);
var Ge = {
        MODE_NUMBER: 1 << 0,
        MODE_ALPHA_NUM: 1 << 1,
        MODE_8BIT_BYTE: 1 << 2,
        MODE_KANJI: 1 << 3
    },
    Kr = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    },
    bt = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    },
    pe = {
        PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
        ],
        G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
        G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
        G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
        getBCHTypeInfo: function(e) {
            let t = e << 10;
            for (; pe.getBCHDigit(t) - pe.getBCHDigit(pe.G15) >= 0;) t ^= pe.G15 << pe.getBCHDigit(t) - pe.getBCHDigit(pe.G15);
            return (e << 10 | t) ^ pe.G15_MASK
        },
        getBCHTypeNumber: function(e) {
            let t = e << 12;
            for (; pe.getBCHDigit(t) - pe.getBCHDigit(pe.G18) >= 0;) t ^= pe.G18 << pe.getBCHDigit(t) - pe.getBCHDigit(pe.G18);
            return e << 12 | t
        },
        getBCHDigit: function(e) {
            let t = 0;
            for (; e != 0;) t++, e >>>= 1;
            return t
        },
        getPatternPosition: function(e) {
            return pe.PATTERN_POSITION_TABLE[e - 1]
        },
        getMask: function(e, t, r) {
            switch (e) {
                case bt.PATTERN000:
                    return (t + r) % 2 == 0;
                case bt.PATTERN001:
                    return t % 2 == 0;
                case bt.PATTERN010:
                    return r % 3 == 0;
                case bt.PATTERN011:
                    return (t + r) % 3 == 0;
                case bt.PATTERN100:
                    return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
                case bt.PATTERN101:
                    return t * r % 2 + t * r % 3 == 0;
                case bt.PATTERN110:
                    return (t * r % 2 + t * r % 3) % 2 == 0;
                case bt.PATTERN111:
                    return (t * r % 3 + (t + r) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + e)
            }
        },
        getErrorCorrectPolynomial: function(e) {
            let t = new Or([1], 0);
            for (let r = 0; r < e; r++) t = t.multiply(new Or([1, we.gexp(r)], 0));
            return t
        },
        getLengthInBits: function(e, t) {
            if (1 <= t && t < 10) switch (e) {
                case Ge.MODE_NUMBER:
                    return 10;
                case Ge.MODE_ALPHA_NUM:
                    return 9;
                case Ge.MODE_8BIT_BYTE:
                    return 8;
                case Ge.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + e)
            } else if (t < 27) switch (e) {
                case Ge.MODE_NUMBER:
                    return 12;
                case Ge.MODE_ALPHA_NUM:
                    return 11;
                case Ge.MODE_8BIT_BYTE:
                    return 16;
                case Ge.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + e)
            } else if (t < 41) switch (e) {
                case Ge.MODE_NUMBER:
                    return 14;
                case Ge.MODE_ALPHA_NUM:
                    return 13;
                case Ge.MODE_8BIT_BYTE:
                    return 16;
                case Ge.MODE_KANJI:
                    return 12;
                default:
                    throw new Error("mode:" + e)
            } else throw new Error("type:" + t)
        },
        getLostPoint: function(e) {
            let t = e.getModuleCount(),
                r = 0;
            for (let n = 0; n < t; n++)
                for (let o = 0; o < t; o++) {
                    let s = 0,
                        i = e.isDark(n, o);
                    for (let l = -1; l <= 1; l++)
                        if (!(n + l < 0 || t <= n + l))
                            for (let c = -1; c <= 1; c++) o + c < 0 || t <= o + c || l == 0 && c == 0 || i == e.isDark(n + l, o + c) && s++;
                    s > 5 && (r += 3 + s - 5)
                }
            for (let n = 0; n < t - 1; n++)
                for (let o = 0; o < t - 1; o++) {
                    let s = 0;
                    e.isDark(n, o) && s++, e.isDark(n + 1, o) && s++, e.isDark(n, o + 1) && s++, e.isDark(n + 1, o + 1) && s++, (s == 0 || s == 4) && (r += 3)
                }
            for (let n = 0; n < t; n++)
                for (let o = 0; o < t - 6; o++) e.isDark(n, o) && !e.isDark(n, o + 1) && e.isDark(n, o + 2) && e.isDark(n, o + 3) && e.isDark(n, o + 4) && !e.isDark(n, o + 5) && e.isDark(n, o + 6) && (r += 40);
            for (let n = 0; n < t; n++)
                for (let o = 0; o < t - 6; o++) e.isDark(o, n) && !e.isDark(o + 1, n) && e.isDark(o + 2, n) && e.isDark(o + 3, n) && e.isDark(o + 4, n) && !e.isDark(o + 5, n) && e.isDark(o + 6, n) && (r += 40);
            let u = 0;
            for (let n = 0; n < t; n++)
                for (let o = 0; o < t; o++) e.isDark(o, n) && u++;
            return r += Math.abs(100 * u / t / t - 50) / 5 * 10, r
        }
    },
    we = {
        glog: function(e) {
            if (e < 1) throw new Error("glog(" + e + ")");
            return we.LOG_TABLE[e]
        },
        gexp: function(e) {
            for (; e < 0;) e += 255;
            for (; e >= 256;) e -= 255;
            return we.EXP_TABLE[e]
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    };
for (let e = 0; e < 8; e++) we.EXP_TABLE[e] = 1 << e;
for (let e = 8; e < 256; e++) we.EXP_TABLE[e] = we.EXP_TABLE[e - 4] ^ we.EXP_TABLE[e - 5] ^ we.EXP_TABLE[e - 6] ^ we.EXP_TABLE[e - 8];
for (let e = 0; e < 255; e++) we.LOG_TABLE[we.EXP_TABLE[e]] = e;
var Or = class {
        constructor(e, t) {
            Te(this, "num");
            if (e.length == null) throw new Error(e.length + "/" + t);
            let r = 0;
            for (; r < e.length && e[r] == 0;) r++;
            this.num = new Array(e.length - r + t);
            for (let u = 0; u < e.length - r; u++) this.num[u] = e[u + r]
        }
        get(e) {
            return this.num[e]
        }
        getLength() {
            return this.num.length
        }
        multiply(e) {
            let t = new Array(this.getLength() + e.getLength() - 1);
            for (let r = 0; r < this.getLength(); r++)
                for (let u = 0; u < e.getLength(); u++) t[r + u] ^= we.gexp(we.glog(this.get(r)) + we.glog(e.get(u)));
            return new Or(t, 0)
        }
        mod(e) {
            if (this.getLength() - e.getLength() < 0) return this;
            let t = we.glog(this.get(0)) - we.glog(e.get(0)),
                r = new Array(this.getLength());
            for (let u = 0; u < this.getLength(); u++) r[u] = this.get(u);
            for (let u = 0; u < e.getLength(); u++) r[u] ^= we.gexp(we.glog(e.get(u)) + t);
            return new Or(r, 0)
                .mod(e)
        }
    },
    jt = class {
        constructor(e, t) {
            Te(this, "totalCount");
            Te(this, "dataCount");
            this.totalCount = e, this.dataCount = t
        }
        static getRSBlocks(e, t) {
            let r = jt.getRsBlockTable(e, t);
            if (r == null) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
            let u = r.length / 3,
                n = [];
            for (let o = 0; o < u; o++) {
                let s = r[o * 3 + 0],
                    i = r[o * 3 + 1],
                    l = r[o * 3 + 2];
                for (let c = 0; c < s; c++) n.push(new jt(i, l))
            }
            return n
        }
        static getRsBlockTable(e, t) {
            switch (t) {
                case Kr.L:
                    return jt.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
                case Kr.M:
                    return jt.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
                case Kr.Q:
                    return jt.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
                case Kr.H:
                    return jt.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
                default:
                    return []
            }
        }
    },
    Fu = jt;
gu(Fu, "RS_BLOCK_TABLE", [
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12],
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16]
]);
var ss = class {
        constructor() {
            Te(this, "buffer");
            Te(this, "length");
            this.buffer = [], this.length = 0
        }
        get(e) {
            let t = Math.floor(e / 8);
            return (this.buffer[t] >>> 7 - e % 8 & 1) == 1
        }
        put(e, t) {
            for (let r = 0; r < t; r++) this.putBit((e >>> t - r - 1 & 1) == 1)
        }
        getLengthInBits() {
            return this.length
        }
        putBit(e) {
            let t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
        }
    },
    h1 = Cu,
    ee = {
        DATA: 0,
        POS_CENTER: 1,
        POS_OTHER: 2,
        ALIGN_CENTER: 3,
        ALIGN_OTHER: 4,
        TIMING: 5,
        FORMAT: 6,
        VERSION: 7
    },
    Br = {
        TOP_LEFT: 0,
        TOP_RIGHT: 1,
        BOTTOM_LEFT: 2
    };
function m1(e) {
    return e === "L" ? 1 : e === "M" ? 0 : e === "Q" ? 3 : e === "H" ? 2 : 0
}
function ll(e) {
    if (!e.text || e.text.length <= 0) return;
    e.typeNumber || (e.typeNumber = -1), e.correctLevel || (e.correctLevel = "M");
    let t = new h1(e.typeNumber, m1(e.correctLevel));
    return t.addData(e.text), t.make(), t
}
function yt(e) {
    let t = e.getModuleCount(),
        r = e.getPositionTable(),
        u = [
            [3, 3],
            [3, t - 4],
            [t - 4, 3]
        ],
        n = new Array(t);
    for (let o = 0; o < t; o++) n[o] = new Array(t);
    for (let o = 8; o < t - 7; o++) n[o][6] = n[6][o] = ee.TIMING;
    for (let o = 0; o < r.length; o++) {
        n[r[o][0]][r[o][1]] = ee.ALIGN_CENTER;
        for (let s = -2; s <= 2; s++)
            for (let i = -2; i <= 2; i++) s === 0 && i === 0 || (n[r[o][0] + s][r[o][1] + i] = ee.ALIGN_OTHER)
    }
    for (let o = 0; o < u.length; o++) {
        n[u[o][0]][u[o][1]] = ee.POS_CENTER;
        for (let s = -4; s <= 4; s++)
            for (let i = -4; i <= 4; i++) u[o][0] + s >= 0 && u[o][0] + s < t && u[o][1] + i >= 0 && u[o][1] + i < t && (s === 0 && i === 0 || (n[u[o][0] + s][u[o][1] + i] = ee.POS_OTHER))
    }
    for (let o = 0; o <= 8; o++) o !== 6 && (n[o][8] = n[8][o] = ee.FORMAT), o < 7 && (n[t - o - 1][8] = ee.FORMAT), o < 8 && (n[8][t - o - 1] = ee.FORMAT);
    for (let o = t - 11; o <= t - 9; o++)
        for (let s = 0; s <= 5; s++) n[o][s] = n[s][o] = ee.VERSION;
    for (let o = 0; o < t; o++)
        for (let s = 0; s < t; s++) n[o][s] || (n[o][s] = ee.DATA);
    return n
}
var al = (e, t, r) => t === 3 && r === 3 ? Br.TOP_LEFT : t === e - 4 && r === 3 ? Br.TOP_RIGHT : t === 3 && r === e - 4 ? Br.BOTTOM_LEFT : -1,
    to = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACcAJwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9UKRpAOppWOB7Vk6he+XNGgPqx/D/APXVxjzOxhVqqkrs0jMB3o89awTqOFJJqrLrAjXJIA9a6Vh2zxpZpCLtc6T7Upk2A84zRPepCFDNgscAetcX4e8SLfQy3ruPLkJZP9wcL+eM/jXnknxhj134oXOjWr7oNMhZ5WB43kgAfqfyNb08FUqSaS2E81pRjds9xk1OKOaOIuN75IGe1WUnVzgHNfMfgH4vSePviR4hNuxNjpaC3Qg8MSzZP/jh/OvePD188sTTSNx71WIwM8OveMaOc06tVU49TqCw78VE93FGrMzBQvUk1wfir4iW+g2xkeQNLJIIYIgeZHPQCvnT9oP9qF/CCpotjKPtW3zLqQH7g7L9TVYbLa2JdooVTPaMZqEdT64g12C7nEcThvpV2O4DOQDnBxxXx98BPi7qWo+FdS8SamGMS/JCp7t6D8SB+dfS3gHUptT0iK7mGDIOM9658dhXg58ktz3MDXWMjKcNo6fNnU3dx5CFvQZptnqMd2pIYZFV9XP+ilwc7ev0rg9N8QnTtea3dvlZtv59K5KS9o+XqdVa8KfOj0V9QjS6ELMAxGRU6yg968n+K3ieXwzLpeoxk7C5VgO/Gf6Guk0HxZFq9lbXcTho5VDAiuv6rJwU0eNPMI037x26uCKTeM4zzVeCYNGCD1qC4n8qYc9a5FC7sd0sQowUzRB3HFKBxUEUm4A+tTAmoasdUJcyuMlbahNcnqEjNeTyZ4UBAP1P866uYgIa5S+X9yW7sSx/OuvD/EeRmTtTdjIuL3aCK5Dx3r0mnaBcCJiJ5ytvFjqHc7Qfwzn8K6K4IMuMjntXI+JLY6n4i0S027o0eS6f22Lhf1b9K+ipRimrn5hVlOU3Yo+LfEcXgXwTd3WSI7S22oM9SBhR+eK+ZfhVq13pPg3x34ondjfTutvE7H+Mgnj8Xz+FeuftJXwTR7LSQ4USsZZhn+Fen6/yrxDXddt/Dnwy06wOEF3dzXcg9Qo2r+gNfQ4TlUElvJ/gjroYWcoucj1/9kjw61j4Q1LUZc+ffXzfMe6qqr/Pd+dfSs2prY6WqBgpxljnpXiv7PHmQ/CrRXkXy5JFkkZfTMjH/Cq/7QvxI/4QrwNcpDLjUL4G3gAPIyPmb8B+uK4K9J4uvZdWcU5/V60oR32Zy2t/EKHWvFmseIJJt2j+HImjt1LfLLO3G7+Yr5U8SWOofELxNFPvM7XV6FlJ53u2SFHsMfyrY13W7iLwZpOgWhaS4vZftk8adXkY7Y1/IZ/GvcvhJ8KYNP1bRftHzx6VbveyM/8Ay0ncgZPsMNj6CvQxNeOBlGjDd/kj6DLcuTw9XF1FpFaebex6D4c8C/Y7fwr4MszgRAXV6y9Nq+v1bJ/4DX1NpVhHp9lDbxgBI1CjFecfCPwy+LzxFeJi41Jv3IYcpbjhB+P3v+BV6mgCqMcV+d5hXeIrykfomWYf6rgoU3u9X6v/ACGzKJI2Q8ggivnD4leIT4V8TwLMxjJkMQY8cj5lP5Zr6Qc4PBr5r/bH8MTTeDZdXskJuLcebwOcp836gMPxrgoS9nVjJ9z2I0lWpzpPqtPVG18UNUTxX8MLW/jYPskjbg9Dnaf51h/A3xI82nXemyud9pLlAT/C3/1wa8g+GnxWTV/hbrul3Uw863aKaFWPJBYZA9ef51tfCzWp18XILLYq3kTKTLnAIGRwPxr9AhRUIypP1R+WYqMqkJNdGfWNn4p+zX9lYyDAuImdG9SpAI/JhXRaiC0McoPFeL6tfT2Fz4Wlnm82U38kJYDaArQscfmor17Trj7fpAJ5IFfN16Ps2pruXgcU60XQm9bafI1bB/MhXPar2fes3TG+TFaQHFeXUXvH1+Ek5U0yK6OIX+lc7qafLgdK6K65THrWJeJkHNbYd2dzmzCPPGxwcVt9r1q8mJ+WACBR7/eb+Y/KsHTNUTUPGGrsMGKxijgU+5JLfyFb+vPDo3hm71SSV7eSON5tyNjJOSMjoe1fO/gD4lxLpvi66uXKyJIzJKRhJCse7APr7V9NhqUq6bR8dVpwoxcnucF8aPFknj34sHRbJi0KSCF2U8LGvLn+n5V5r4nJ8TfEaz0VkZIYLr7N5bDjYHLHj6Zr0/8AZh8FTeL/ABNe67cgy/aZmQMw6IDlz+J4/Cop/Cq337Xmr6dGm2NLl3UAfdBRBx+D0VMdGGKnGD0hFpep9zhMrSwVBVF70mpP0PoH4Vqtr8P9GA724b8yT/Wvk/8AaV8bP4o+IdxaRSb7TTf9HRQeCw++fz4/CvprUtdTwV8Kb6+BCfYopooh/tLI6KPzx+VfC8dteeJdcitoiZr68m2gnklmPJP6mvoMscIUniZ7JfofmdTDSxGZTpw6ydvvPWf2d/h/d+PfGS6nPCWhgIig4yCwGC30UDFfV2n6Gt/4lutLsDiKadLMuvaCFf3x/FmZfqatfBzwBafCX4dNqE0ZRra1MnzDnAGT+JPP411nwa8NmHTDrFyGFzerlQw5VSxZj/wJyT9Ntfn+Ix7xGJqYiT8kfr1XBQoYang6fwppy82v+CejWsCwxoqqFVQAqjoAKsOcLUTNtB5AxXIeMvifpXhJktZ50k1CX/VWquAx92P8K+5rx2zvjCU3aCOruryGzgkmnlSGJBuZ5DgAepNedePhd/EnwtqOmaXaiO0kiYf2hdoQDx/yzTq31OB9ateH5IPGky3moXUd+Ym3JZxA/Z4vTIP329z+AFdwqqV24G3pjFK9zXllSn7y1R+Tng23uPA/ji70iTfdXQnNid45Y7wUOO3Rfzr1vwFrb6J8RI7K4Jjktb0KP9xjx+hqx8WvAw0L9r3S7ZI9sGpX9pdL6HLgH9VrN/aF0qTwF8bhPF+6iu0WVSOOVb/Aj8q+5w+KVSdBfzRa+Z8tjMFFUMTNdGmvR7n0p8QndL3wrtYgf2sn45jkr2DwZe74Hib0rxnV7ldas/Blz97zbuObP/bFzXpfhq6NtfKM4U8GrxdPnpNdUfl9Gq8PiYzvpex6Jp/ymtNelZGmSiTn3rXHSvkau5+pYNqVJNEc/asbVnEFpO5/hQn9K2ZxyK4j4k6uukeHp5CcM7LGPxIFaUIuUlFBi/djzM8O/aq8anwz8OhaRSYkuXWIYODtAyf5V8w+CdWaX4IeOUfEs1xexwxg8/NIqKPxrrv2yvExvvEOlacshKQwNKyj1Y4/pXjMni+1+FnguD+04J5Yr24g1WVEAA2R+ZgbmIAPypxmvvnOll+Bjz7yeh8bhcLUzKs7fDFq/pc+zv2afD6fD7w5awagu23ZVghvmwFLd1f0Yk8HoeO9VNH8IiP9szXLx1PlS6THexnHHOIz+sZr401f/gpzpt34Xi8P2PhrUbK3G4TShopPPU9ipHH4GvTf2W/2/vC114ittH8R3r3AnUW9rfX0IS7gTOREzAnemehzn61+aXqOUp23P2CdSg9Iy0jovkd9+0vrj6T4Fm0MMFe41q5BX/YWV3H/AKEtc5+xn8LP+Ez8aXmu3cBNhpihEdujStyR+C4/Os/9rrxFZ6x8RUTTbqO706WFb6KWFgyHzFVGwR7xGvsX9mr4fxfD/wCE2iWflbLy5iF5dFh8xlkAY5+gIH4V9jicZ7LKYU47y3Ph8BguTMala2id18zqvE/h+18WaPJoZvDbRJLC10kfBaMENsJ7BtuOO2a0tR1vTPCultcXl1BYWVunLSuFVVAqxc+HLS9vGuJg7M0flOm8hHXtuXocZPNcxc/A3wVd6ib6bRY5rnOQ0skjqD6hWYqPyr4NJrY+vTTep4H8XP2xrWCzvv8AhHLyLSdGtCFvPEWoRkLgj7tuh+83Tk8exr4K8dft0afp2t3M3hrQpdduDLufUtdmc+a397aDn88V9n/thfsfW/xF/wCEV0zRI5tO0WK4uL7VJ4hnCKoPLEn5mJAUfWuW+Hn/AASi8Ha94EnvPEt1eWOtX6tJaw2jjZZKf9WGzy5xgnnvXRSjzv39iq2Nlh0o4dWv16ny5oX/AAVh+KugSRomkeGnslP/AB7JaSIMf7wfOa+hvhj/AMFhvDmpT29t428J3OjF2Ae902bz4k9yhAbH0zX5u/GX4UX3wm+IeueF7s+ZPply9u0gHDYJAI+orP8AhrpWj614ts9I112trDUGFt9rVsG2duFfngjdjIPY17lTLnGHOloeVHFyn7zdz9e/EXxF8F/Hf45/CrxL4K1201u2eZo5hC2JIyhEgDoQGU4z1FL+3v4eEf8Awi2uIuGWV7dz65XP9K/Oz4e63rf7F/x70O78RWDalo9ncm4jMeQJo2UqZI29QG+70yMGv0o/aZ8a6B8ZP2abDxf4avYtR043dvNHKhyU3NtZWHZhuwR2xXNQlKjiKXZNfmdEpwr0Kke8WvwLvw01ca34L+HzFsursD7bInX/AAr1Wz1iIaq9orZmjVXbHbOcfyNfO37LuqnUdK0uyJBNgbpzz0B2Af8AoRr0HwJrrap8VPGMe7dHbvDCvPTCn+ua+/rUbzn2Wv3n4TiI2ml2PpfwzP5kS5PNdQvSuO8IvujWuxXpXwOKVqjP1DKZc+FiyKc8/hXgf7SviUaVZaLbFuJ71Nwz1AI/xr3m5bB/CvjL9s/xB9l1vQod2BE6yN9N4/wr0Mppe1xEULNqnLS06nzv8fb0+Ifi1fW6uTiSO2X24GT+ZNfOXxV1fWP2o/i1pfgHwyqx6Fo+YVnK8ALgSSse44wB/jXsfxVn1PVPFvii80W1nvr9TM0EVuhdy+NikAe5BrD/AOCePhaSXWvGF3cxst/9oitCsi4ZTyWB7jn+Vd+fzUq1Oh0irmWRRlSwc5LeT/I6u+/YF1rxN4Gu/D/w70+zgis4fM1HWtSH769mxnyY2wcepxgcgV+feqaBdeFtcms76N45rWcpKq/eBU8ge/FftR8LP25/hh4d+FGtLq2sxWWs6Rc3UTaeVPm3BEjbCgA5zkV+R/xi8aWvxA8VXWqWmmRaaJSxZYif3rFyd7e5z244rHL8I8Qp3jpbQ7/bOMkr37n6MWv7PVs2jfBjVtPA1CLXJYba8vIy2J4mVZY3ZCSFPlrLnHfNfofYRiGFEAAAGBivl7/gnZraeNf2UvBMt8q3U+m+daxtL8xQxSOiEeh2EfnX1QihVA9K+Zqym37OT0jc+iio25ktWOY0Ag96KRQPpWC0KsYXjhxD4R1uRl37LKZwPohP9K8S8Gft5/CrVfhnHrl54it7C+tbfFzpspxOJFHKqv8AFkjivfdatF1DS7u2cZWeJ4mHsQQa/nl1/wAI3ehfFPxD4alVo7myvp7dkPYq5Fe1lGDhjsVGhN2uebj5ulQdVaWO1/aP+Ntp8Z/EepXkOhWtnLPqVxeHUACbiZHPyI56YUdMV4ZJZNE6yKNrKQQfQ12Go+FtUt9RS2FnK5kI2uqEg/jW/wCLvANxomjpNKoDsAMe+K/Xo5Up0KlOMdILW6Pj1mFKlKEeZXntqfb/AIn+DEH7Q37J3hPXZl86/utNE1re4+aK5QFGUn0LKc18UfB742+JfhtY658PpmefQNUuY1ntXy32edJB86emduD68elfp/8AsNJFqH7B1uNQ+WGx+3OC/wDCEkZuPzNfMngv9mZfCHwI8Y/EzxHp6x6r4i1KJtMinT57e3NzuD+xbr9MV+QJr28YS3v+p9JRjKUJOO1mex/sc2csUHiXVpW/cRqkKDPAOC7f+y10f7OGqNq/i3xheOcma4V8/UvUPwltx4K/Z11LVZB5ct7FNcAnj73yp+gH51gfsh6gZPEPiGA9Gjik/HLCv0h+/TqT9F9x+TVvfqTfY+5PCUwj8tc8scfpmu6Q5WvO/C5zqFmnorsf5V6IgwtfmuM/is/R8njy4WNyjqDbWX3yK+Af2471n8VxIDgpAMfXJNffWttshVvRh/Ovz7/bZBfxmxxwIVH6V7OQf7wn5GGdX9nG3c0f2CtQtde+JmuzzxLJJdaeZI5GGcHepI/z6V7bpf7N1p4K+PGpeLNDt44tH19BJf2y8CO6UEBwPRgefce9fNP7Bd0+k+PbZW4Y3H2V89w0bEfqRX6Lzt5b5AHWvMzqanjJTPayiNsMoH89HxP8Kz6T8ZvGWiOpE1rq91EV+kjVhWXhiS71UWHlnzjn5ce1fW37ffghPhF+1ofFMunmXQ/EMS3qHGFaXbskHpkMA34iqPw/8X+BdK8Vafq02jHxLEeDp8EWZ5uOmFyTz+dfpWR1KDyr2rklKN73tr5any2ZVMTQxXsqVNyUtrdGfYv/AAS1tZbX9m5rd8jydZvEUEdsp/8AXr7J6YryX9nPUNEvvh3b3mheEJvA9pdTyynSZ4jG6NuwWK4GN2M16wkgYjNfkGJqxnXnOOzbP0CjGpGlFVN0h5HNJjkGnFhUckgA4OK5eY2QSYIxmvx//wCCgngCL4PftSweNbeFLnSPECi4njUgbJwNkin0JGGH1r9ZdU1qOxDbmBOK8c8feHvCfjS5Z9Z8M6Vq0h/iu7VJGP4kE10YXGVMJXhXp7xdztjlUswpSpSWjR+bOk+M/Dep6ZDdRTRwuR80TkZU16f8NPjN8AV019G8f+HbjWdSMm2KWBTIHz0UAMMGvpe9/Zt+EWpx5n8A6RGx6+RD5f8A6DiuTuf2OvgwdWtb6HwrLbzwSCRFt7yZVyDkZG6v0HMOOKmYYR4aVPlfdNo+TwnhvHC4n6yqjdulj6t+G3w78LeD/hXaeGdI0t7TQZ4ml+wXB3MolJdlf164IryL9toCf4a6F4eskxJqOqwW8MSDAwAcceg4/KvZPBusW8enQWqRmJIkEaJngADAHPtXlXxssLrxL8WfBO1lGmaS8s0sZXJeaSNtn5BGP4ivgsLVU8TBy7ntY3CywOHqRS2TPM/j5ND4M+Ddjolv8quIrRAvHyoMn/0GuK/Y1tXn8R6/KB8oihX8SzH+lQftc+IfN1vSdHR8pbxGZh6MxwP0Fd1+w/oROi63fsvyz3qorY/hVB/Umv1ab9jgpSfU/DKEZVderZ9Y+FY86304jhx+dd7XGeEUzfXEuOpI/DpXYhsivzHFS5p3P1fCQ9nQjEz9fB+xPjsDXwT+2hbNJrX2gD70CnP/AAGvvjWhutXHtXxT+1rp32uxWbGdkRQ49if6V6+TzUKupyZpDngjhv2cdHbw/wCONNux9271KzmX/vlENfe+tTwSWs8U7MiupUlWKnB4OCOR+FfC/wAKZxBqnhqUnCrPatx2wy19reK9Pmv4THGSueuO9eZmaftrnvZNCE4qMtD5b+LH7Ouj/Fi7t7HxP4l1vXPD1nN51tptzJG3ktjBAm2+btx23dq67wB8MvCnwxtEtPCnh6x0lOAZIYsyv9XOWP516HaeDp9/7wZJOfYV0GkeEUim3yfMe3FeJzz26H6FKeCoq6SbXkJaa5Houlpc37GNQVTP+0xwv5mr3g7xlD4pimZEMUkTYZDz9K0b7w7aatp81ldR+Zbypsdc4/8A1GoPCfgay8KQyxWzySCR9xMnJx2FJqTZ87Vq0Zxk2ve6HQZ4qpflljYr1q+YsAAVG8QkBBpyvFHBGSTTPNNftriYu2SzngDsK56Dw1K5LyfNIfSvWptISVyTihdGhA7flWOrPo6WaeyhyxR5TN4en4CqST39Ks6V4PcSZkDEk/eNeoDSos9AfwqwmnxpztFKzHPOZuPKjndN8Px2jLgHOOuK5n4nxxwX/h1QoVmuJXZscnbC3X869N2jPSvDf2gfFcOjanbSF1AsNMurlh3DNsVf616eXwc8TTj5nx+b4ic8JUlLsz4Z+M+sSeKvijrMgO9Em8hMc4VeP8a+3/2Z/Cf/AAiPwk0vzU2TyRNcvkc5clv5EV8bfCrwLc+M/FkMs6l2urgFifc5P9a/QrU3h0Dw3FbR4RQFiUD0Ar9JzivanChE/L8vw20mb3hOQRq7e2a6+E/uxXnXhK+84FQfvV6JBjyxX5/XVpH6BQ+HQp6xzbsPavlX9obSvtWkzBlysm8qfpxivqnWv+PZ/oa8C+N9rHceDDIpUy28hZh3wcg/0rqwVRU5qTZzYyPNBo8Ss/h3f6XpunarouZYvIjmayduVIAOUY/yP4V9v2ZTU7C0ul+ZJolkH4gGvnDwLOLvwfpMnGfs6r+XH9K9d+FXiePyx4dupcXECmS1LH/WRZ6D3XOPpiu7NKamlUj8zx8nxsqVaVCb32O0ezRWztAqVYlQdBVqWPd0FQkZPpXzB9ypcxHtxyKAdp61JnjFVr55o7WVreMTTBTsjLYDHtzTQ2WZJMd6bG6SgkHocVxHiCLxXb6VI9nc2t1dlcmHZsIOc4Vsnt611ljOZbaN2QxMyglG4K+xrOS5iuSyTLmFzihgqgHjmmUoOMZqLWIsBGKMnpSEg1Uvr2KxieaVgsajJJosXGLeiINd1WHRNOmu53CJGpPPevir4va3d+MNY1QSEr9rMMIHpGpZiP8A0GvcfHPiqTxVdGMMUsIjlV/vH1NfMfivxbbR69qLI4IjlKAZ6beD/KvZyWnKpjE19nUjOqUcLlrjU+KbS9Fuev8A7P3ha3tdXWVVGLOPeTj+I8D+tdr8VfGCxaxaacjglF3sAehNZnwWgfS/BMN5ONk14PtBz2Uj5R+XP414xqHjBvFXxA1C6V90RnKpz/COB/KvspUHVqynLoflcMUpVVCGyPqr4ZzGeNHPevX4P9UteNfCs/6JF9K9ltxiFa+Pxf8AEZ9zh9aaZU1gZt3+lfO/xXhM+nXMPIEgZTivo7UozJCwFeOeOvDzXccg2k8mvKrtql7u50SV2fIWjfErWvD9lJp8TgrbSPGAe3Of61ueBPiFq+veOtLgnupLed2AhkiOGQh1JwfoD+ta+sfCuSPVrq4SPidg7DH8WMVufCn4WNH44t9QkiP+hxu68dGYbR/M1x4XEYiti4qT0e6PJxVCFKnKcVqfR/hv4v6c+rnQdauEtdSVVZJm4jmB6c9m9q9CKB1DLgqeQQeK+NPHWlXM3ju8mUHam1Acegr0z4deOtY0RPs7TG5tlOBDMScD2PUV9VjMDCNp03v0Ly/F1JU0qi1PdnBFMrNt/GVle2gkEUySd49mf1rm9f8AHl5ZRubPR3nOODNMEH6AmvCdOV7H0UakWtTel0ueTWDd/bZDDtx9mwNv1zWmFVeOlfOPi/44eOdPVzaaTp1uB0yZJD/SvMNQ/aV+JqO2Z7O3/wByyz/MmqVGbNZVoaJs+4AwNBYHjNfA0v7S/wASpMhta8o+iWcQ/pUUP7SnxIgYZ1sy+z20f+FaewkZ+2h3PuvWtdtNBtmnupliQD+I4zXiHjX4mvr0pjjby7RTwAcbvc18x+Jfil478ZXizXms3BwMLGkKBF+g21lzJ4y1aIRHUphF1dVgUFh6ZGD+VYywtSWzPVwmMwtD35puR6n4u+IrQaffrpzKfs8TPNcnlIsDJ+p9q+bvAEdx428a6JpkjSSLe3SmdzySudzn8eR+Nel3PhnxRrPhYWzMtrbXKLH9nghCgKevPXpmu9+AHwWn0jxbaX06Fdqs+0jOAAQP1avpcmtgoTqVNZPRHzfEuLjmCjClfljdv16HqHxN8QL4L+Hd9LEBHJ5P2eBRxgngfkP5V85/De2d71GYEknOTXu3x50WfW57HS4kJii/fPgdWPA/TP51zfgj4fS2Equ0ZAHPSvp1XpwoN31Z+a4HB1FPml1PfvhYpEMQ7AV7RB/qxXl3w405rW2QMhBPOa9ShIEYFfB4iaqTbR+iUockEiSRA6EHpWDqWiJc5yuQa6A9aR1GK4mrqx02PPbnwLDK5JQH8KuaP4Ti0lJTFEDLJ+AAFdoYlz0oWNc9KUIqm+eO5MoKaszze5+G1pd3Uk9wpd3YsQOBVi28FW1gP3NvGnvtya9AMCDtSG3jz90VvKpOW7JjCMdkccmmFBggn8KSTRxKuPJzn1rs/s0f92hYUz90VndmljzLU/Aq3ykeSgz/ALNcRrHwIOolipWPP91R/hX0L5CelN8lP7op8zFY+Sr79lie4clLyRc+hrOX9ke4WTcb6XP+8a+xjCmPuigW6f3aOZhY+WdJ/ZmksGVjOZMdm5r0XTPg5ZW0Cb4EL45wK9iWFM/dFHlL6UczCx5I/wALofliSBNifdGK6Lw54LXTJJZHiVX27Rgdq7lYUznFLtHpVKpJdSJU1JWZ5tqXgOPUb6W5eMFnPcdqfb+BYoWVVjGOp4r0Tyl9KXyU3dK1lXnJWuZwo04O6RkaRpC2agKuK2QAoxQqiiuY6T//2Q==";
function p1(e, t, r) {
    return Math.pow((Math.pow(e, 2.2) + Math.pow(1.5 * t, 2.2) + Math.pow(.6 * r, 2.2)) / (1 + Math.pow(1.5, 2.2) + Math.pow(.6, 2.2)), 1 / 2.2)
}
var is = {
        roundRect: "M6,1.7v2.7C6,5.2,5.2,6,4.3,6H1.7C0.7,6,0,5.3,0,4.3V1.7C0,0.8,0.8,0,1.7,0h2.7C5.3,0,6,0.7,6,1.7z",
        leaf: "M76.3287,8.3422852e-16 L28.539,8.3422852e-16 C26.08095,8.3422852e-16 23.6964,0.31185 21.42945,0.91875 C16.41045,2.23755 11.9364,4.90245 8.3895,8.51655 C7.74165,9.1686 7.1232,9.86475 6.5499,10.57455 C2.47275,15.5799 0.0294,22.0227 0.0294,29.0136 L2.98719383e-15,105 L76.3287,105 C92.04825,105 104.8236,91.98315 104.8236,75.9885 L104.8236,29.0283 L104.8236,29.0136 L105,0.01575 C105,0.01575 86.15985,8.3422852e-16 76.3287,8.3422852e-16 Z"
    },
    g1 = {
        heart: "m20 10c0.97-5 2.911-10 9.702-10 6.792 0 12.128 5 9.703 15-2.426 10-13.584 15-19.405 25-5.821-10-16.979-15-19.405-25-2.4254-10 2.9109-15 9.703-15 6.791 0 8.732 5 9.702 10z",
        tile: "m20-3.5527e-15c4 11 9 16 20 20-11 4-16 9-20 20-4-11-9-16-20-20 11-4 16-9 20-20z",
        clover: "m20 0c-4.731 0-8.571 4.032-8.571 9 0.041 3.126 1.654 5.768 3.333 8.281-1.871-1.416-3.951-2.272-6.1906-2.281-4.7314 0-8.5714 4.032-8.5714 9s3.84 9 8.5714 9c3.8326-0.064 6.8986-2.746 9.9106-5-0.539 6.733-1.635 10.514-8.006 12h19.048c-6.371-1.486-7.467-5.267-8.006-12 2.977 2.552 6.1 4.717 9.911 5 4.731 0 8.571-4.032 8.571-9s-3.84-9-8.571-9c-2.297 0-4.281 1.057-6.191 2.281 1.9-2.487 3.151-5.17 3.333-8.281 0-4.968-3.84-9-8.571-9z",
        pike: "m9.9958 40c7.2112-1.603 7.9872-5.826 8.5312-13.594-1.253 2.075-3.531 3.607-7.25 3.594-6.1124-0.021-10.207-3.576-8.75-11.25 1.4688-7.737 12.469-10.737 17.469-18.75 5 8.0128 16 11.013 17.469 18.75 1.456 7.674-2.469 11.228-8.75 11.25-3.719 0.013-5.997-1.519-7.25-3.594 0.544 7.768 1.319 11.991 8.531 13.594h-20z"
    },
    Ot = class {
        constructor() {
            Te(this, "getEyeballShape", (e, t) => {
                let {
                    color: r = "#000",
                    x: u,
                    y: n,
                    r: o,
                    w: s,
                    h: i,
                    nCount: l,
                    emojiSymbol: c = "\u{1F537}"
                } = t, a = al(l, u, n) === Br.TOP_LEFT, D = () => `
        <path
          d="${g1[e]}"
          fill="${r}"
          transform='${`translate(${String(u-1.1)}, ${String(n-1.1)}) scale(${String(8/100)}, ${String(8/100)})`}'
        />
      `;
                switch (e) {
                    case "rect":
                        return `<rect width='${3}' height='${3}' fill='${r}' x='${u-1}' y='${n-1}' />`;
                    case "round":
                        return `<circle cx='${u+.5}' cy='${n+.5}' r='${1.5}' fill='${r}' />`;
                    case "roundRect":
                        return `
          <path
            d="${is[e]}"
            d="M6,1.7v2.7C6,5.2,5.2,6,4.3,6H1.7C0.7,6,0,5.3,0,4.3V1.7C0,0.8,0.8,0,1.7,0h2.7C5.3,0,6,0.7,6,1.7z"
            fill=${r}
            transform='${`translate(${String(u-1)}, ${String(n-1)}) scale(${String(50/100)}, ${String(50/100)})`}'
          />`;
                    case "leaf":
                        return `
          <path
            d="${is[e]}"
            fill=${r}
            transform='${`
              translate(${String(u+(a?2:-1))}, ${String(n-1)})
              scale(${String(2.8/100)}, ${String(2.8/100)})
              rotate(${String(a?90:0)})
            `}'
          />`;
                    case "heart":
                    case "tile":
                    case "clover":
                    case "pike":
                        return D();
                    case "emoji":
                        return `
          <text
            fill="${r}"
            transform='${`translate(${String(u-1.1)}, ${String(n+1.6)}) scale(${String(20/100)}, ${String(20/100)}) `}'>
            ${D1(c)?c:"???"}
          </text>`;
                    default:
                        return ""
                }
            })
        }
        getViewBox({
            qrcode: e
        }) {
            if (!e) return "0 0 0 0";
            let t = e.getModuleCount();
            return `${String(-t/5)} ${String(-t/5)} ${String(t+t/5*2)} ${String(t+t/5*2)}`
        }
        beforeListing(e) {
            return []
        }
        listPoints(e) {
            return []
        }
        listPointsOfEye(e) {
            return []
        }
        listEyeball(e) {
            return []
        }
        defaultDrawIcon({
            qrcode: e,
            icon: t
        }) {
            if (!e) return [];
            let r = e.getModuleCount(),
                u = [],
                n = "M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z";
            if (t) {
                let o = lr(t.enabled, 0),
                    {
                        src: s,
                        scale: i
                    } = t,
                    l = Number(r * (i > 33 ? 33 : i) / 100),
                    c = (r - l) / 2;
                if (t && o) {
                    let a = At(),
                        D = At(),
                        f = `translate(${String(c)},${String(c)}) scale(${String(l/100)},${String(l/100)})`;
                    u.push(`<path d='${n}' stroke='#FFF' stroke-width='${100/l}' fill='#FFF' transform='${f}' />`);
                    let d = `translate(${String(c)},${String(c)}) scale(${String(l/100)},${String(l/100)})`;
                    u.push(`
  <g>
    <defs>
      <path id='${`defs-path${a}`}' d='${n}' fill='#FFF' transform='${d}' />
    </defs>
    <clipPath id='${`clip-path${D}`}'>
      <use xlink:href='${`#defs-path${a}`}'  overflow='visible'/>
    </clipPath>
    <g clip-path='${`url(#clip-path${D})`}'>
      <image overflow='visible' xlink:href='${s}' width='${l}' x='${c}' y='${c}' />
    </g>
  </g>`)
                }
            }
            return u
        }
        getDefaultIcon(e) {
            return e === 2 ? `
  <g>
    <rect width='100' height='100' fill='#07c160'/>
    <path d='M39.061,44.018a4.375,4.375,0,1,1,4.374-4.375,4.375,4.375,0,0,1-4.374,4.375m21.877,0a4.375,4.375,0,1,1,4.376-4.375,4.375,4.375,0,0,1-4.376,4.375M28.522,69.063a2.184,2.184,0,0,1,.92,1.782,2.581,2.581,0,0,1-.116.7c-.552,2.06-1.437,5.361-1.478,5.516a3.237,3.237,0,0,0-.177.8,1.093,1.093,0,0,0,1.094,1.093,1.243,1.243,0,0,0,.633-.2L36.581,74.6a3.427,3.427,0,0,1,1.742-.5,3.3,3.3,0,0,1,.965.144A38.825,38.825,0,0,0,50,75.739c18.123,0,32.816-12.242,32.816-27.346S68.122,21.049,50,21.049,17.185,33.29,17.185,48.393c0,8.239,4.42,15.656,11.337,20.67' fill='#fff'/>
  </g>
  ` : e === 3 ? `
  <g>
    <rect width='100' height='100' fill='#07c160'/>
    <path d='M48.766,39.21a2.941,2.941,0,1,1,2.918-2.94,2.929,2.929,0,0,1-2.918,2.94m-16.455,0a2.941,2.941,0,1,1,2.918-2.941,2.93,2.93,0,0,1-2.918,2.941m8.227-17.039c-13.632,0-24.682,9.282-24.682,20.732,0,6.247,3.324,11.87,8.528,15.67a1.662,1.662,0,0,1,.691,1.352,1.984,1.984,0,0,1-.087.528c-.415,1.563-1.081,4.064-1.112,4.181a2.449,2.449,0,0,0-.132.607.825.825,0,0,0,.823.828.914.914,0,0,0,.474-.154l5.405-3.144a2.57,2.57,0,0,1,1.31-.382,2.442,2.442,0,0,1,.725.109,28.976,28.976,0,0,0,8.057,1.137c.455,0,.907-.012,1.356-.032a16.084,16.084,0,0,1-.829-5.082c0-10.442,10.078-18.908,22.511-18.908.45,0,.565.015,1.008.037-1.858-9.9-11.732-17.479-24.046-17.479' fill='#fff'/>
    <path d='M70.432,55.582A2.589,2.589,0,1,1,73,52.994a2.578,2.578,0,0,1-2.568,2.588m-13.713,0a2.589,2.589,0,1,1,2.568-2.588,2.578,2.578,0,0,1-2.568,2.588m20.319,16a16.3,16.3,0,0,0,7.106-13.058c0-9.542-9.208-17.276-20.568-17.276s-20.57,7.734-20.57,17.276S52.216,75.8,63.576,75.8a24.161,24.161,0,0,0,6.714-.947,2.079,2.079,0,0,1,.6-.091,2.138,2.138,0,0,1,1.092.319l4.5,2.62a.78.78,0,0,0,.4.129.688.688,0,0,0,.685-.691,2.081,2.081,0,0,0-.11-.5l-.927-3.486a1.641,1.641,0,0,1-.073-.44,1.385,1.385,0,0,1,.577-1.126' fill='#fff'/>
  </g>
      ` : e === 4 ? `
  <g>
    <rect width='100' height='100' fill='#07c160'/>
    <path d='M41.055,57.675a2.183,2.183,0,0,1-2.893-.883l-.143-.314L32.046,43.37a1.133,1.133,0,0,1-.105-.461,1.094,1.094,0,0,1,1.748-.877l7.049,5.019a3.249,3.249,0,0,0,2.914.333L76.8,32.63c-5.942-7-15.728-11.581-26.8-11.581-18.122,0-32.813,12.243-32.813,27.345,0,8.24,4.42,15.656,11.338,20.669a2.185,2.185,0,0,1,.919,1.781,2.569,2.569,0,0,1-.116.7c-.552,2.062-1.437,5.362-1.478,5.516a3.212,3.212,0,0,0-.177.8,1.094,1.094,0,0,0,1.1,1.094,1.236,1.236,0,0,0,.631-.2L36.583,74.6a3.438,3.438,0,0,1,1.742-.5,3.281,3.281,0,0,1,.965.145A38.844,38.844,0,0,0,50,75.739c18.122,0,32.813-12.243,32.813-27.345a23.668,23.668,0,0,0-3.738-12.671L41.3,57.537Z' fill='#fff'/>
  </g>
      ` : e === 5 ? `
  <g>
    <rect width='100' height='100' fill='#009ce1'/>
    <path d='M100,67.856c-.761-.1-4.8-.8-17.574-5.066-4.012-1.339-9.4-3.389-15.395-5.552A80.552,80.552,0,0,0,75.4,36.156H55.633v-7.1H79.848V25.094H55.633V13.258H45.749a1.68,1.68,0,0,0-1.733,1.707V25.094H19.524v3.963H44.016v7.1H23.8V40.12H63.013a69.579,69.579,0,0,1-5.65,13.763c-12.724-4.187-26.3-7.58-34.834-5.491C17.074,49.733,13.56,52.125,11.5,54.63,2.02,66.125,8.815,83.585,28.824,83.585c11.831,0,23.228-6.579,32.061-17.417C73.49,72.211,97.914,82.4,100,83.267ZM26.956,76.9c-15.6,0-20.215-12.255-12.5-18.958,2.573-2.266,7.276-3.372,9.782-3.621,9.268-.913,17.846,2.613,27.972,7.541C45.087,71.118,36.023,76.9,26.956,76.9Z' fill='#fff'/>
  </g>
      ` : ""
        }
        builtinDrawIcon({
            qrcode: e,
            icon: t
        }) {
            if (!e) return [];
            let r = e.getModuleCount(),
                u = [],
                n = "M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z";
            if (t) {
                let o = lr(t.enabled, 0),
                    {
                        scale: s
                    } = t,
                    i = Number(r * (s > 33 ? 33 : s) / 100),
                    l = (r - i) / 2;
                if (t && o) {
                    let c = At(),
                        a = At(),
                        D = this.getDefaultIcon(o),
                        f = `translate(${String(l)},${String(l)}) scale(${String(i/100)},${String(i/100)})`;
                    u.push(`<path d='${n}' stroke='#FFF' stroke-width='${100/i}' fill='#FFF' transform='${f}' />`);
                    let d = `translate(${String(l)},${String(l)}) scale(${String(i/100)},${String(i/100)})`,
                        C = `translate(${String(l)},${String(l)}) scale(${String(i/100)},${String(i/100)})`;
                    u.push(`
  <g>
    <defs>
      <path id='${`defs-path${c}`}' d='${n}' fill='#FFF' transform='${d}' />
    </defs>
    <clipPath id='${`clip-path${a}`}'>
      <use xlink:href='${`#defs-path${c}`}'  overflow='visible'/>
    </clipPath>
    <g clip-path='${`url(#clip-path${a})`}'>
      <g transform='${C}' >
        ${D}
      </g>
    </g>
  </g>
      `)
                }
            }
            return u
        }
        drawIcon(e) {
            return lr(e.icon.enabled, 0) === 1 ? this.defaultDrawIcon(e) : this.builtinDrawIcon(e)
        }
        getRendererParams(e, t) {
            return us(us({
                level: "H",
                opacity: 100,
                size: 100,
                icon: {
                    enabled: 0,
                    scale: 100,
                    src: ""
                }
            }, e), t)
        }
        render(e) {
            return t => {
                let r = this.getRendererParams(e, t);
                r.content = r.content || "??????????????????", r.level = r.icon ? "H" : r.level, r.qrcode = r.qrcode || ll({
                    text: r.content,
                    correctLevel: r.level,
                    typeNumber: -1
                });
                let u = [],
                    n = this.getViewBox(r);
                return u.push(`<svg width='100%' height='100%' viewBox='${n}' fill='white' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>`), u.push(mt(this.beforeListing(r))), u.push(mt(this.listPoints(r))), this.listPointsOfEye(r) && u.push(mt(this.listPointsOfEye(r))), u.push(mt(this.drawIcon(r))), u.push("</svg>"), mt(u)
                    .split(`
`)
                    .join(" ")
            }
        }
    },
    C1 = {
        type: "rect",
        size: 100,
        opacity: 100,
        eyeframeType: "rect",
        bodyColor: "#000",
        eyeColor: "#000",
        eyeballType: "rect",
        emojiSymbol: "\u{1F537}"
    },
    Sn = class extends Ot {
        listPoints(e) {
            let {
                qrcode: t,
                type: r,
                bodyColor: u
            } = e, {
                size: n,
                opacity: o
            } = e;
            if (!t) return [];
            let s = t.getModuleCount(),
                i = yt(t),
                l = [];
            n = n / 100, o = o / 100, n <= 0 && (n = 1);
            for (let c = 0; c < s; c++)
                for (let a = 0; a < s; a++) t.isDark(c, a) === !1 || i[c][a] === ee.POS_CENTER || i[c][a] === ee.POS_OTHER || (i[c][a] === ee.ALIGN_CENTER || i[c][a] === ee.ALIGN_OTHER || i[c][a] === ee.TIMING ? r === "rect" ? l.push(`<rect opacity='${o}' width='${n}' height='${n}' fill='${u}' x='${c+(1-n)/2}' y='${a+(1-n)/2}' />`) : r === "round" ? l.push(`<circle opacity='${o}' r='${n/2}' fill='${u}' cx='${c+.5}' cy='${a+.5}' />`) : r === "rand" && l.push(`<circle opacity='${o}' fill='${u}' cx='${c+.5}' cy='${a+.5}' r='${n/2}' />`) : r === "rect" ? l.push(`<rect
                opacity='${o}'
                width='${n}'
                height='${n}'
                fill='${u}'
                x='${c+(1-n)/2}'
                y='${a+(1-n)/2}'
              />`) : r === "round" ? l.push(`<circle
                opacity='${o}'
                r='${n/2}'
                fill='${u}'
                cx='${c+.5}'
                cy='${a+.5}'
              />`) : r === "rand" && l.push(`<circle
                opacity='${o}'
                fill='${u}'
                cx='${c+.5}'
                cy='${a+.5}'
                r='${.5*ke(.33,1)}'
              />`));
            return l
        }
        listPointsOfEye(e) {
            let {
                qrcode: t,
                eyeframeType: r = "rect",
                eyeballType: u = "rect",
                eyeColor: n,
                emojiSymbol: o = "\u{1F537}"
            } = e, {
                size: s,
                opacity: i
            } = e;
            if (!t) return [];
            let l = t.getModuleCount(),
                c = yt(t),
                a = [],
                D = [3, -3],
                f = [3, -3],
                d = "M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z",
                C = "M319.9875,0 L163.1574,0 C73.2228,0 0.0966,73.9956 0.0966,164.8962 L0,483 L319.9875,483 C409.8738,483 483,409.0044 483,318.1038 L483,164.8962 L483,0 L319.9875,0 Z M410.55,318.1038 C410.55,369.07962 369.92487,410.55 319.9875,410.55 L72.46932,410.55 L72.5466,164.92035 C72.5466,113.92038 113.19588,72.45 163.1574,72.45 L410.55,72.45 L410.55,318.1038 Z";
            s = s / 100, i = i / 100, s <= 0 && (s = 1);
            for (let m = 0; m < l; m++)
                for (let h = 0; h < l; h++)
                    if (t.isDark(m, h) !== !1) {
                        if (c[m][h] === ee.POS_CENTER) {
                            let p = al(l, m, h) === Br.TOP_LEFT,
                                P = {
                                    x: m,
                                    y: h,
                                    nCount: l,
                                    color: n,
                                    emojiSymbol: o
                                },
                                w = u ? this.getEyeballShape(u, P) : "";
                            if (r === "rect") a.push(w);
                            else if (r === "round") a.push(w), a.push(`
              <circle
                fill='none'
                stroke-width='1'
                stroke='${n}'
                cx='${m+.5}'
                cy='${h+.5}'
                r='${3}'
              />
            `);
                            else if (r === "planet") {
                                a.push(`
              <circle
                fill='${n}'
                cx='${m+.5}'
                cy='${h+.5}'
                r='${1.5}'
              />`), a.push(`<circle
                fill='none'
                stroke-width='0.15'
                stroke-dasharray='0.5,0.5'
                stroke='${n}'
                cx='${m+.5}'
                cy='${h+.5}'
                r='${3}'
              />`);
                                for (let v = 0; v < D.length; v++) a.push(`<circle fill='${n}' cx='${m+D[v]+.5}' cy='${h+.5}' r='${.5}' />`);
                                for (let v = 0; v < f.length; v++) a.push(`<circle
                  fill='${n}'
                  cx='${m+.5}'
                  cy='${h+f[v]+.5}'
                  r='${.5}'
                />`)
                            } else if (r === "roundRect") a.push(w), a.push(`
              <path
                d='${d}'
                stroke='${n}'
                stroke-width='${100/6*(1-(1-s)*.75)}'
                fill='none'
                transform='${`
                  translate(${String(m-2.5)}, ${String(h-2.5)})
                  scale(${String(6/100)}, ${String(6/100)})
                `}'
              />
            `);
                            else if (r === "leaf") {
                                a.push(w);
                                let v = String(p ? 90 : 0);
                                a.push(`
              <path
                d='${C}'
                transform='${`
                  translate(${String(m-3+(p?7:0))}, ${String(h-3)}) 
                  scale(${String(1.44/100)}, ${String(1.44/100)})
                  rotate(${v})
                `}'
                fill='${n}'
              />
            `)
                            }
                        }
                        if (c[m][h] === ee.POS_OTHER && r === "rect") {
                            let p = [2, 3, 4, 24, 25, 26],
                                P = [2, 3, 4, 24, 25, 26];
                            if (p.includes(m) && P.includes(h)) continue;
                            a.push(`
              <rect width='${1}' height='${1}' fill='${n}' x='${m}' y='${h}' />
            `)
                        }
                    } return a
        }
    },
    F1 = new Sn,
    cl = F1.render(C1),
    fl = cl,
    y1 = {
        eyeframeType: "round",
        eyeballType: "round",
        eyeColor: "#999",
        bodyColor: "#000"
    },
    Dl = class extends Sn {
        listPoints(e) {
            let {
                qrcode: t
            } = e;
            if (!t) return [];
            let r = t.getModuleCount(),
                u = yt(t),
                n = [],
                o = [],
                s = [],
                i = e.bodyColor;
            e.eyeColor;
            let l = [],
                c = [];
            for (let a = 0; a < r; a++) {
                l[a] = [], c[a] = [];
                for (let D = 0; D < r; D++) l[a][D] = !0, c[a][D] = !0
            }
            for (let a = 0; a < r; a++)
                for (let D = 0; D < r; D++)
                    if (!(t.isDark(D, a) && u[D][a] === ee.POS_CENTER) && !(t.isDark(D, a) && u[D][a] === ee.POS_OTHER)) {
                        if (l[D][a] && c[D][a] && D < r - 2 && a < r - 2) {
                            let f = !0;
                            for (let d = 0; d < 3; d++)
                                for (let C = 0; C < 3; C++) c[D + d][a + C] === !1 && (f = !1);
                            if (f && t.isDark(D + 1, a) && t.isDark(D + 1, a + 2) && t.isDark(D, a + 1) && t.isDark(D + 2, a + 1)) {
                                o.push(`<circle cx='${D+1+.5}' cy='${a+1+.5}' r='${1}' fill='#FFFFFF' stroke='${i}' stroke-width='${ke(.33,.6)}' />`), t.isDark(D + 1, a + 1) && o.push(`<circle r='${.5*ke(.5,1)}' fill='${i}' cx='${D+1+.5}' cy='${a+1+.5}'/>`), l[D + 1][a] = !1, l[D][a + 1] = !1, l[D + 2][a + 1] = !1, l[D + 1][a + 2] = !1;
                                for (let d = 0; d < 3; d++)
                                    for (let C = 0; C < 3; C++) c[D + d][a + C] = !1
                            }
                        }
                        if (D < r - 1 && a < r - 1 && t.isDark(D, a) && t.isDark(D + 1, a) && t.isDark(D, a + 1) && t.isDark(D + 1, a + 1)) {
                            o.push(`<circle cx='${D+1}' cy='${a+1}' r='${Math.sqrt(1/2)}' fill='#FFFFFF' stroke='${i}' stroke-width='${ke(.33,.6)}' />`);
                            for (let f = 0; f < 2; f++)
                                for (let d = 0; d < 2; d++) l[D + f][a + d] = !1, c[D + f][a + d] = !1
                        }
                        l[D][a] && a < r - 1 && t.isDark(D, a) && t.isDark(D, a + 1) && (n.push(`<circle cx='${D+.5}' cy='${a+1}' r='${.5*ke(.95,1.05)}' fill='#FFFFFF' stroke='${i}' stroke-width='${ke(.36,.4)}' />`), l[D][a] = !1, l[D][a + 1] = !1), l[D][a] && D < r - 1 && t.isDark(D, a) && t.isDark(D + 1, a) && (n.push(`<circle cx='${D+1}' cy='${a+.5}' r='${.5*ke(.95,1.05)}' fill='#FFFFFF' stroke='${i}' stroke-width='${ke(.36,.4)}' />`), l[D][a] = !1, l[D + 1][a] = !1), l[D][a] && (t.isDark(D, a) ? n.push(`<circle r='${.5*ke(.5,1)}' fill='${i}' cx='${D+.5}' cy='${a+.5}'/>`) : u[D][a] === ee.DATA && ke(0, 1) > .85 && s.push(`<circle r='${.5*ke(.85,1.3)}' fill='#FFFFFF' stroke='${i}' stroke-width='${ke(.15,.33)}' cx='${D+.5}' cy='${a+.5}'/>`))
                    } for (let a = 0; a < o.length; a++) n.push(o[a]);
            for (let a = 0; a < s.length; a++) n.push(s[a]);
            return n
        }
    },
    E1 = new Dl,
    _1 = E1.render(y1),
    v1 = {
        scale: 100,
        crossWidth: 100,
        posWidth: 100,
        posType: "rect"
    },
    dl = class extends Ot {
        listPoints(e) {
            let {
                qrcode: t,
                scale: r = 100,
                crossWidth: u = 100,
                posWidth: n = 100,
                posType: o
            } = e;
            if (!t) return [];
            let s = t.getModuleCount(),
                i = yt(t),
                l = [],
                c = [],
                a = [],
                D = r / 100,
                f = u / 100,
                d = n / 100;
            D <= 0 && (D = 70), f <= 0 && (f = 70);
            let C = [],
                m = [];
            for (let h = 0; h < s; h++) {
                C[h] = [], m[h] = [];
                for (let p = 0; p < s; p++) C[h][p] = !0, m[h][p] = !0
            }
            for (let h = 0; h < s; h++)
                for (let p = 0; p < s; p++)
                    if (t.isDark(p, h) !== !1)
                        if (i[p][h] === ee.POS_CENTER) o === "rect" ? l.push(`<rect width='${1}' height='${1}' fill='#0B2D97' x='${p}' y='${h}'/>`) : o === "dsj" && (l.push(`<rect width='${3-(1-d)}' height='${3-(1-d)}' fill='#0B2D97' x='${p-1+(1-d)/2}' y='${h-1+(1-d)/2}'/>`), l.push(`<rect width='${d}' height='${3-(1-d)}' fill='#0B2D97' x='${p-3+(1-d)/2}' y='${h-1+(1-d)/2}'/>`), l.push(`<rect width='${d}' height='${3-(1-d)}' fill='#0B2D97' x='${p+3+(1-d)/2}' y='${h-1+(1-d)/2}'/>`), l.push(`<rect width='${3-(1-d)}' height='${d}' fill='#0B2D97' x='${p-1+(1-d)/2}' y='${h-3+(1-d)/2}'/>`), l.push(`<rect width='${3-(1-d)}' height='${d}' fill='#0B2D97' x='${p-1+(1-d)/2}' y='${h+3+(1-d)/2}'/>`));
                        else if (i[p][h] === ee.POS_OTHER) o === "rect" && l.push(`<rect width='${1}' height='${1}' fill='#0B2D97' x='${p}' y='${h}'/>`);
            else {
                if (C[p][h] && m[p][h] && p < s - 2 && h < s - 2) {
                    let P = !0;
                    for (let w = 0; w < 3; w++)
                        for (let v = 0; v < 3; v++) m[p + w][h + v] === !1 && (P = !1);
                    if (P && t.isDark(p + 2, h) && t.isDark(p + 1, h + 1) && t.isDark(p, h + 2) && t.isDark(p + 2, h + 2)) {
                        c.push(`<line x1='${p+f/Math.sqrt(8)}' y1='${h+f/Math.sqrt(8)}' x2='${p+3-f/Math.sqrt(8)}' y2='${h+3-f/Math.sqrt(8)}' fill='none' stroke='#0B2D97' stroke-width='${f}' />`), c.push(`<line x1='${p+3-f/Math.sqrt(8)}' y1='${h+f/Math.sqrt(8)}' x2='${p+f/Math.sqrt(8)}' y2='${h+3-f/Math.sqrt(8)}' fill='none' stroke='#0B2D97' stroke-width='${f}' />`), C[p][h] = !1, C[p + 2][h] = !1, C[p][h + 2] = !1, C[p + 2][h + 2] = !1, C[p + 1][h + 1] = !1;
                        for (let w = 0; w < 3; w++)
                            for (let v = 0; v < 3; v++) m[p + w][h + v] = !1
                    }
                }
                if (C[p][h] && m[p][h] && p < s - 1 && h < s - 1) {
                    let P = !0;
                    for (let w = 0; w < 2; w++)
                        for (let v = 0; v < 2; v++) m[p + w][h + v] === !1 && (P = !1);
                    if (P && t.isDark(p + 1, h) && t.isDark(p, h + 1) && t.isDark(p + 1, h + 1)) {
                        c.push(`<line x1='${p+f/Math.sqrt(8)}' y1='${h+f/Math.sqrt(8)}' x2='${p+2-f/Math.sqrt(8)}' y2='${h+2-f/Math.sqrt(8)}' fill='none' stroke='#0B2D97' stroke-width='${f}' />`), c.push(`<line x1='${p+2-f/Math.sqrt(8)}' y1='${h+f/Math.sqrt(8)}' x2='${p+f/Math.sqrt(8)}' y2='${h+2-f/Math.sqrt(8)}' fill='none' stroke='#0B2D97' stroke-width='${f}' />`);
                        for (let w = 0; w < 2; w++)
                            for (let v = 0; v < 2; v++) C[p + w][h + v] = !1, m[p + w][h + v] = !1
                    }
                }
                if (C[p][h] && m[p][h] && (h === 0 || h > 0 && (!t.isDark(p, h - 1) || !m[p][h - 1]))) {
                    let P = h,
                        w = h,
                        v = !0;
                    for (; v && w < s;) t.isDark(p, w) && m[p][w] ? w++ : v = !1;
                    if (w - P > 2) {
                        for (let V = P; V < w; V++) m[p][V] = !1, C[p][V] = !1;
                        a.push(`<rect width='${D}' height='${w-P-1-(1-D)}' fill='#E02020' x='${p+(1-D)/2}' y='${h+(1-D)/2}'/>`), a.push(`<rect width='${D}' height='${D}' fill='#E02020' x='${p+(1-D)/2}' y='${w-1+(1-D)/2}'/>`)
                    }
                }
                if (C[p][h] && m[p][h] && (p === 0 || p > 0 && (!t.isDark(p - 1, h) || !m[p - 1][h]))) {
                    let P = p,
                        w = p,
                        v = !0;
                    for (; v && w < s;) t.isDark(w, h) && m[w][h] ? w++ : v = !1;
                    if (w - P > 1) {
                        for (let V = P; V < w; V++) m[V][h] = !1, C[V][h] = !1;
                        a.push(`<rect width='${w-P-(1-D)}' height='${D}' fill='#F6B506' x='${p+(1-D)/2}' y='${h+(1-D)/2}'/>`)
                    }
                }
                C[p][h] && l.push(`<rect width='${D}' height='${D}' fill='#F6B506' x='${p+(1-D)/2}' y='${h+(1-D)/2}'/>`)
            }
            for (let h = 0; h < c.length; h++) l.push(c[h]);
            for (let h = 0; h < a.length; h++) l.push(a[h]);
            return l
        }
    },
    $1 = new dl,
    b1 = $1.render(v1),
    w1 = {
        funcType: "A",
        type: "rect",
        eyeType: "rect",
        otherColor1: "#000",
        otherColor2: "#999",
        eyeColor: "#777"
    },
    hl = class extends Ot {
        listPoints(e) {
            let {
                qrcode: t
            } = e;
            if (!t) return [];
            let r = t.getModuleCount(),
                u = yt(t),
                n = [],
                {
                    type: o,
                    funcType: s,
                    eyeType: i,
                    otherColor1: l,
                    otherColor2: c,
                    eyeColor: a
                } = e;
            e.size;
            let D = [3, -3],
                f = [3, -3],
                d = "M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z";
            s === "A" && o === "rect" && n.push(`<circle fill='none' stroke-width='${r/15}' stroke='${c}'  cx='${r/2}' cy='${r/2}' r='${r/2*Math.sqrt(2)*13/40}' />`);
            for (let C = 0; C < r; C++)
                for (let m = 0; m < r; m++)
                    if (t.isDark(C, m) && u[C][m] === ee.POS_CENTER)
                        if (i === "rect") n.push(`<rect width='${1}' height='${1}' fill='${a}' x='${C}' y='${m}'/>`);
                        else if (i === "round") n.push(`<circle fill='${a}' cx='${C+.5}' cy='${m+.5}' r='${1.5}' />`), n.push(`<circle fill='none' stroke-width='1' stroke='${a}'  cx='${C+.5}' cy='${m+.5}' r='${3}' />`);
            else if (i === "planet") {
                n.push(`<circle fill='${a}' cx='${C+.5}' cy='${m+.5}' r='${1.5}' />`), n.push(`<circle fill='none' stroke-width='0.15' stroke-dasharray='0.5,0.5' stroke='${a}'  cx='${C+.5}' cy='${m+.5}' r='${3}' />`);
                for (let h = 0; h < D.length; h++) n.push(`<circle fill='${a}' cx='${C+D[h]+.5}' cy='${m+.5}' r='${.5}' />`);
                for (let h = 0; h < f.length; h++) n.push(`<circle fill='${a}' cx='${C+.5}' cy='${m+f[h]+.5}' r='${.5}' />`)
            } else i === "roundRect" && (n.push(`<circle fill='${a}' cx='${C+.5}' cy='${m+.5}' r='${1.5}' />`), n.push(`<path d='${d}' stroke='${a}' stroke-width='${100/6*(1-(1-.8)*.75)}' fill='none' transform='${`translate(${String(C-2.5)},${String(m-2.5)}) scale(${String(6/100)},${String(6/100)})`}' />`));
            else if (t.isDark(C, m) && u[C][m] === ee.POS_OTHER) i === "rect" && n.push(`<rect width='${1}' height='${1}' fill='${a}' x='${C}' y='${m}'/>`);
            else {
                let h = Math.sqrt(Math.pow((r - 1) / 2 - C, 2) + Math.pow((r - 1) / 2 - m, 2)) / (r / 2 * Math.sqrt(2));
                if (s === "A") {
                    let p = (1 - Math.cos(Math.PI * h)) / 6 + .2,
                        P = l,
                        w = Number(t.isDark(C, m));
                    o === "rect" ? (p = p + .2, n.push(`<rect opacity='${w}' width='${p}' height='${p}' fill='${P}' x='${C+(1-p)/2}' y='${m+(1-p)/2}'/>`)) : o === "round" && n.push(`<circle opacity='${w}' r='${p}' fill='${P}' cx='${C+.5}' cy='${m+.5}'/>`)
                }
                if (s === "B") {
                    let p = 0,
                        P = l,
                        w = Number(t.isDark(C, m));
                    h > 5 / 20 && h < 8 / 20 ? (p = 5 / 10, P = c, w = 1) : (p = 1 / 4, o === "rect" && (p = 1 / 4 - .1)), o === "rect" ? (p = 2 * p + .1, t.isDark(C, m) ? n.push(`<rect opacity='${w}' width='${p}' height='${p}' fill='${P}' x='${C+(1-p)/2}' y='${m+(1-p)/2}'/>`) : (p = p - .1, n.push(`<rect opacity='${w}' width='${p}' height='${p}' stroke='${P}' stroke-width='${.1}' fill='#FFFFFF' x='${C+(1-p)/2}' y='${m+(1-p)/2}'/>`))) : o === "round" && (t.isDark(C, m) ? n.push(`<circle opacity='${w}' r='${p}' fill='${P}' cx='${C+.5}' cy='${m+.5}'/>`) : n.push(`<circle opacity='${w}' r='${p}' stroke='${P}' stroke-width='${.1}' fill='#FFFFFF' cx='${C+.5}' cy='${m+.5}'/>`))
                }
            }
            return n
        }
    },
    x1 = new hl,
    A1 = x1.render(w1),
    B1 = {
        image: to,
        color: "rgba(0, 0, 0, 0.33)"
    },
    ml = class extends Ot {
        listPoints(e) {
            let {
                qrcode: t
            } = e;
            if (!t) return [];
            let r = t.getModuleCount(),
                u = new Array(r),
                n = e.color,
                o = e.opacity / 100,
                s = e.image;
            u.push(`<image x='-0.01' y='-0.01' width='${r+.02}' height='${r+.02}' xlink:href='${s}'/>`), u.push(`<rect x='-0.01' y='-0.01' width='${r+.02}' height='${r+.02}' fill='${n}' opacity='${o}'/>`);
            for (let i = 0; i < r; i++)
                for (let l = 0; l < r; l++) t.isDark(i, l) || u.push(`<rect width='${1.02}' height='${1.02}' fill='#FFF' x='${i-.01}' y='${l-.01}'/>`);
            return u
        }
    },
    T1 = new ml,
    k1 = T1.render(B1),
    P1 = {
        image: to,
        type: "rect",
        bodyColor: "#000000",
        size: 100,
        opacity: 100,
        darkColor: "#000000",
        lightColor: "#FFFFFF",
        eyeType: "rect"
    },
    pl = class extends Ot {
        listPoints(e) {
            let {
                qrcode: t
            } = e;
            if (!t) return [];
            let r = t.getModuleCount(),
                u = yt(t),
                n = new Array(r),
                o = e.size / 100 / 3,
                s = e.opacity / 100,
                {
                    type: i,
                    darkColor: l,
                    lightColor: c,
                    eyeType: a,
                    bodyColor: D,
                    image: f
                } = e,
                d = [3, -3],
                C = [3, -3];
            o <= 0 && (o = 1), n.push(`<image x='0' y='0' width='${r}' height='${r}' xlink:href='${f}'/>`);
            for (let m = 0; m < r; m++)
                for (let h = 0; h < r; h++)
                    if (u[m][h] === ee.ALIGN_CENTER || u[m][h] === ee.ALIGN_OTHER || u[m][h] === ee.TIMING) t.isDark(m, h) ? i === "rect" ? n.push(`<rect opacity='${s}' width='${o}' height='${o}' fill='${l}' x='${m+(1-o)/2}' y='${h+(1-o)/2}'/>`) : i === "round" && n.push(`<circle opacity='${s}' r='${o/2}' fill='${l}' cx='${m+.5}' cy='${h+.5}'/>`) : i === "rect" ? n.push(`<rect opacity='${s}' width='${o}' height='${o}' fill='${c}' x='${m+(1-o)/2}' y='${h+(1-o)/2}'/>`) : i === "round" && n.push(`<circle opacity='${s}' r='${o/2}' fill='${c}' cx='${m+.5}' cy='${h+.5}'/>`);
                    else if (u[m][h] === ee.POS_CENTER) {
                if (t.isDark(m, h)) {
                    if (a === "rect") n.push(`<rect width='${1}' height='${1}' fill='${D}' x='${m}' y='${h}'/>`);
                    else if (a === "round") n.push(`<circle fill='white' cx='${m+.5}' cy='${h+.5}' r='${5}' />`), n.push(`<circle fill='${D}' cx='${m+.5}' cy='${h+.5}' r='${1.5}' />`), n.push(`<circle fill='none' stroke-width='1' stroke='${D}'  cx='${m+.5}' cy='${h+.5}' r='${3}' />`);
                    else if (a === "planet") {
                        n.push(`<circle fill='white' cx='${m+.5}' cy='${h+.5}' r='${5}' />`), n.push(`<circle fill='${D}' cx='${m+.5}' cy='${h+.5}' r='${1.5}' />`), n.push(`<circle fill='none' stroke-width='0.15' stroke-dasharray='0.5,0.5' stroke='${D}'  cx='${m+.5}' cy='${h+.5}' r='${3}' />`);
                        for (let p = 0; p < d.length; p++) n.push(`<circle fill='${D}' cx='${m+d[p]+.5}' cy='${h+.5}' r='${.5}' />`);
                        for (let p = 0; p < C.length; p++) n.push(`<circle fill='${D}' cx='${m+.5}' cy='${h+C[p]+.5}' r='${.5}' />`)
                    }
                }
            } else u[m][h] === ee.POS_OTHER ? t.isDark(m, h) ? a === "rect" && n.push(`<rect width='${1}' height='${1}' fill='${D}' x='${m}' y='${h}'/>`) : a === "rect" && n.push(`<rect width='${1}' height='${1}' fill='white' x='${m}' y='${h}'/>`) : t.isDark(m, h) ? i === "rect" ? n.push(`<rect opacity='${s}' width='${o}' height='${o}' fill='${l}' x='${m+(1-o)/2}' y='${h+(1-o)/2}'/>`) : i === "round" && n.push(`<circle opacity='${s}' r='${o/2}' fill='${l}' cx='${m+.5}' cy='${h+.5}'/>`) : i === "rect" ? n.push(`<rect opacity='${s}' width='${o}' height='${o}' fill='${c}' x='${m+(1-o)/2}' y='${h+(1-o)/2}'/>`) : i === "round" && n.push(`<circle opacity='${s}' r='${o/2}' fill='${c}' cx='${m+.5}' cy='${h+.5}'/>`);
            return n
        }
    },
    S1 = new pl,
    O1 = S1.render(P1),
    M1 = {
        direction: "left-right",
        lineWidth: 50,
        lineOpacity: 100,
        lineColor: "#000000",
        eyeframeType: "round",
        eyeballType: "round",
        eyeColor: "#999"
    },
    gl = class extends Sn {
        listPoints(e) {
            let {
                qrcode: t
            } = e;
            if (!t) return [];
            let r = t.getModuleCount(),
                u = yt(t),
                n = [],
                {
                    direction: o,
                    eyeColor: s,
                    lineColor: i
                } = e,
                l = e.size / 100,
                c = e.opacity / 100;
            l <= 0 && (l = 1);
            let a = [],
                D = [];
            for (let f = 0; f < r; f++) {
                a[f] = [], D[f] = [];
                for (let d = 0; d < r; d++) a[f][d] = !0, D[f][d] = !0
            }
            for (let f = 0; f < r; f++)
                for (let d = 0; d < r; d++)
                    if (t.isDark(f, d) !== !1 && u[f][d] !== ee.POS_CENTER && u[f][d] !== ee.POS_OTHER) {
                        if (o === "left-right") {
                            if (f === 0 || f > 0 && (!t.isDark(f - 1, d) || !D[f - 1][d])) {
                                let C = 0,
                                    m = 0,
                                    h = !0;
                                for (; h && f + m < r;) t.isDark(f + m, d) && D[f + m][d] ? m++ : h = !1;
                                if (m - C > 1) {
                                    for (let p = C; p < m; p++) D[f + p][d] = !1, a[f + p][d] = !1;
                                    n.push(`<line opacity='${c}' x1='${f+.5}' y1='${d+.5}' x2='${f+m-C-.5}' y2='${d+.5}' stroke-width='${l}' stroke='${i}' stroke-linecap='round' />`)
                                }
                            }
                            a[f][d] && n.push(`<circle opacity='${c}' r='${l/2}'  fill='${i}' cx='${f+.5}' cy='${d+.5}'/>`)
                        }
                        if (o === "up-down") {
                            if (d === 0 || d > 0 && (!t.isDark(f, d - 1) || !D[f][d - 1])) {
                                let C = 0,
                                    m = 0,
                                    h = !0;
                                for (; h && d + m < r;) t.isDark(f, d + m) && D[f][d + m] ? m++ : h = !1;
                                if (m - C > 1) {
                                    for (let p = C; p < m; p++) D[f][d + p] = !1, a[f][d + p] = !1;
                                    n.push(`<line opacity='${c}' x1='${f+.5}' y1='${d+.5}' x2='${f+.5}' y2='${d+m-C-1+.5}' stroke-width='${l}' stroke='${i}' stroke-linecap='round' />`)
                                }
                            }
                            a[f][d] && n.push(`<circle opacity='${c}' r='${l/2}'  fill='${i}' cx='${f+.5}' cy='${d+.5}'/>`)
                        }
                        if (o === "h-v") {
                            if (d === 0 || d > 0 && (!t.isDark(f, d - 1) || !D[f][d - 1])) {
                                let C = 0,
                                    m = 0,
                                    h = !0;
                                for (; h && d + m < r;) t.isDark(f, d + m) && D[f][d + m] && m - C <= 3 ? m++ : h = !1;
                                if (m - C > 1) {
                                    for (let p = C; p < m; p++) D[f][d + p] = !1, a[f][d + p] = !1;
                                    n.push(`<line opacity='${c}' x1='${f+.5}' y1='${d+.5}' x2='${f+.5}' y2='${d+m-C-1+.5}' stroke-width='${l}' stroke='${i}' stroke-linecap='round' />`)
                                }
                            }
                            if (f === 0 || f > 0 && (!t.isDark(f - 1, d) || !D[f - 1][d])) {
                                let C = 0,
                                    m = 0,
                                    h = !0;
                                for (; h && f + m < r;) t.isDark(f + m, d) && D[f + m][d] && m - C <= 3 ? m++ : h = !1;
                                if (m - C > 1) {
                                    for (let p = C; p < m; p++) D[f + p][d] = !1, a[f + p][d] = !1;
                                    n.push(`<line opacity='${c}' x1='${f+.5}' y1='${d+.5}' x2='${f+m-C-.5}' y2='${d+.5}' stroke-width='${l}' stroke='${i}' stroke-linecap='round' />`)
                                }
                            }
                            a[f][d] && n.push(`<circle opacity='${c}' r='${l/2}'  fill='${i}' cx='${f+.5}' cy='${d+.5}'/>`)
                        }
                        if (o === "loop") {
                            if (Number(f > d) ^ Number(f + d < r)) {
                                if (d === 0 || d > 0 && (!t.isDark(f, d - 1) || !D[f][d - 1])) {
                                    let C = 0,
                                        m = 0,
                                        h = !0;
                                    for (; h && d + m < r;) t.isDark(f, d + m) && D[f][d + m] && m - C <= 3 ? m++ : h = !1;
                                    if (m - C > 1) {
                                        for (let p = C; p < m; p++) D[f][d + p] = !1, a[f][d + p] = !1;
                                        n.push(`<line opacity='${c}' x1='${f+.5}' y1='${d+.5}' x2='${f+.5}' y2='${d+m-C-1+.5}' stroke-width='${l}' stroke='${i}' stroke-linecap='round' />`)
                                    }
                                }
                            } else if (f === 0 || f > 0 && (!t.isDark(f - 1, d) || !D[f - 1][d])) {
                                let C = 0,
                                    m = 0,
                                    h = !0;
                                for (; h && f + m < r;) t.isDark(f + m, d) && D[f + m][d] && m - C <= 3 ? m++ : h = !1;
                                if (m - C > 1) {
                                    for (let p = C; p < m; p++) D[f + p][d] = !1, a[f + p][d] = !1;
                                    n.push(`<line opacity='${c}' x1='${f+.5}' y1='${d+.5}' x2='${f+m-C-.5}' y2='${d+.5}' stroke-width='${l}' stroke='${i}' stroke-linecap='round' />`)
                                }
                            }
                            a[f][d] && n.push(`<circle opacity='${c}' r='${l/2}'  fill='${i}' cx='${f+.5}' cy='${d+.5}'/>`)
                        }
                        if (o === "topLeft-bottomRight") {
                            if (d === 0 || f === 0 || d > 0 && f > 0 && (!t.isDark(f - 1, d - 1) || !D[f - 1][d - 1])) {
                                let C = 0,
                                    m = 0,
                                    h = !0;
                                for (; h && d + m < r && f + m < r;) t.isDark(f + m, d + m) && D[f + m][d + m] ? m++ : h = !1;
                                if (m - C > 1) {
                                    for (let p = C; p < m; p++) D[f + p][d + p] = !1, a[f + p][d + p] = !1;
                                    n.push(`<line opacity='${c}' x1='${f+.5}' y1='${d+.5}' x2='${f+m-C-1+.5}' y2='${d+m-C-1+.5}' stroke-width='${l}' stroke='${i}' stroke-linecap='round' />`)
                                }
                            }
                            a[f][d] && n.push(`<circle opacity='${c}' r='${l/2}'  fill='${i}' cx='${f+.5}' cy='${d+.5}'/>`)
                        }
                        if (o === "topRight-bottomLeft") {
                            if (f === 0 || d === r - 1 || f > 0 && d < r - 1 && (!t.isDark(f - 1, d + 1) || !D[f - 1][d + 1])) {
                                let C = 0,
                                    m = 0,
                                    h = !0;
                                for (; h && f + m < r && d - m >= 0;) t.isDark(f + m, d - m) && a[f + m][d - m] ? m++ : h = !1;
                                if (m - C > 1) {
                                    for (let p = C; p < m; p++) D[f + p][d - p] = !1, a[f + p][d - p] = !1;
                                    n.push(`<line opacity='${c}' x1='${f+.5}' y1='${d+.5}' x2='${f+(m-C-1)+.5}' y2='${d-(m-C-1)+.5}' stroke-width='${l}' stroke='${i}' stroke-linecap='round' />`)
                                }
                            }
                            a[f][d] && n.push(`<circle opacity='${c}' r='${l/2}'  fill='${i}' cx='${f+.5}' cy='${d+.5}'/>`)
                        }
                        if (o === "cross") {
                            if (f === 0 || d === r - 1 || f > 0 && d < r - 1 && (!t.isDark(f - 1, d + 1) || !D[f - 1][d + 1])) {
                                let C = 0,
                                    m = 0,
                                    h = !0;
                                for (; h && f + m < r && d - m >= 0;) t.isDark(f + m, d - m) && D[f + m][d - m] ? m++ : h = !1;
                                if (m - C > 1) {
                                    for (let p = C; p < m; p++) D[f + p][d - p] = !1;
                                    n.push(`<line opacity='${c}' x1='${f+.5}' y1='${d+.5}' x2='${f+(m-C-1)+.5}' y2='${d-(m-C-1)+.5}' stroke-width='${l/2*ke(.3,1)}' stroke='${i}' stroke-linecap='round' />`)
                                }
                            }
                            if (d === 0 || f === 0 || d > 0 && f > 0 && (!t.isDark(f - 1, d - 1) || !a[f - 1][d - 1])) {
                                let C = 0,
                                    m = 0,
                                    h = !0;
                                for (; h && d + m < r && f + m < r;) t.isDark(f + m, d + m) && a[f + m][d + m] ? m++ : h = !1;
                                if (m - C > 1) {
                                    for (let p = C; p < m; p++) a[f + p][d + p] = !1;
                                    n.push(`<line opacity='${c}' x1='${f+.5}' y1='${d+.5}' x2='${f+m-C-1+.5}' y2='${d+m-C-1+.5}' stroke-width='${l/2*ke(.3,1)}' stroke='${i}' stroke-linecap='round' />`)
                                }
                            }
                            n.push(`<circle opacity='${c}' r='${.5*ke(.33,.9)}'  fill='${i}' cx='${f+.5}' cy='${d+.5}'/>`)
                        }
                    } return n
        }
    },
    L1 = new gl,
    R1 = L1.render(M1),
    Cl = class extends Ot {
        listPoints(e) {
            let {
                qrcode: t
            } = e;
            if (!t) return [];
            let r = t.getModuleCount(),
                u = [],
                n = [];
            for (let o = 0; o < r; o++)
                for (let s = 0; s < r; s++) n.push([o, s]);
            n.sort(() => .5 - Math.random());
            for (let o = 0; o < n.length; o++) {
                let s = n[o][0],
                    i = n[o][1];
                if (t.isDark(s, i)) {
                    let l = ke(.8, 1.3),
                        c = ke(50, 230),
                        a = [`rgb(${Math.floor(20+c)},${Math.floor(170-c/2)},${Math.floor(60+c*2)})`, `rgb(${Math.floor(-20+c)},${Math.floor(130-c/2)},${Math.floor(20+c*2)})`],
                        D = .15;
                    u.push(`<rect opacity='0.9' fill='${a[1]}' width='${1*l+D}' height='${1*l+D}' x='${s-(l-1)/2}' y='${i-(l-1)/2}'/>`), u.push(`<rect fill='${a[0]}' width='${1*l}' height='${1*l}' x='${s-(l-1)/2}' y='${i-(l-1)/2}'/>`)
                }
            }
            return u
        }
    },
    I1 = new Cl,
    N1 = I1.render({}),
    H1 = {
        image: to,
        type: "rect",
        size: 100,
        opacity: 100,
        bodyColor: "#000",
        eyeColor: "#000",
        contrast: 0,
        exposure: 0
    },
    j1 = 3,
    Fl = class extends Ot {
        getViewBox({
            qrcode: e
        }) {
            if (!e) return "0 0 0 0";
            let t = e.getModuleCount() * j1;
            return `${String(-t/5)} ${String(-t/5)} ${String(t+t/5*2)} ${String(t+t/5*2)}`
        }
        getGrayPointList(e, t, r, u) {
            let {
                image: n,
                contrast: o = 0,
                exposure: s = 0
            } = e, i = document.createElement("canvas"), l = i.getContext("2d"), c = document.createElement("img"), a = [];
            return i.style.imageRendering = "pixelated", t *= 3, c.src = n, new Promise(D => {
                c.onload = () => {
                    i.width = t, i.height = t, l.imageSmoothingEnabled = !1, l.drawImage(c, 0, 0, t, t);
                    for (let f = 0; f < i.width; f++)
                        for (let d = 0; d < i.height; d++) {
                            let C = l.getImageData(f, d, 1, 1)
                                .data,
                                m = p1(C[0], C[1], C[2]);
                            Math.random() > (m / 255 + s / 100 - .5) * (o / 100 + 1) + .5 && (f % 3 !== 1 || d % 3 !== 1) && a.push(`<use key='g_${f}_${d}' x='${f}' y='${d}' xlink:Href='${r}' />`)
                        }
                    D(a)
                }
            })
        }
        listPoints(e) {
            let {
                qrcode: t,
                eyeColor: r,
                alignType: u,
                timingType: n
            } = e;
            if (!t) return [];
            let o = t.getModuleCount(),
                s = yt(t),
                i = new Array(o),
                l = 0;
            for (let c = 0; c < o; c++)
                for (let a = 0; a < o; a++) {
                    let D = 3 * c,
                        f = 3 * a;
                    s[c][a] === ee.ALIGN_CENTER || s[c][a] === ee.ALIGN_OTHER ? t.isDark(c, a) ? u === 2 ? i.push(`<use key='${l++}' xlink:href='#B-black' x='${D-.03}' y='${f-.03}'/>`) : i.push(`<use key='${l++}' xlink:href='#S-black' x='${D+1-.01}' y='${f+1-.01}'/>`) : u === 0 ? i.push(`<use key='${l++}' xlink:href='#S-white' x='${D+1}' y='${f+1}'/>`) : i.push(`<use key='${l++}' xlink:href='#B-white' x='${D-.03}' y='${f-.03}'/>`) : s[c][a] === ee.TIMING ? t.isDark(c, a) ? n === 2 ? i.push(`<use key='${l++}' xlink:href='#B-black' x='${D-.03}' y='${f-.03}'/>`) : i.push(`<use key='${l++}' xlink:href='#S-black' x='${D+1}' y='${f+1}'/>`) : n === 0 ? i.push(`<use key='${l++}' xlink:href='#S-white' x='${D+1}' y='${f+1}'/>`) : i.push(`<use key='${l++}' xlink:href='#B-white' x='${D-.03}' y='${f-.03}'/>`) : s[c][a] === ee.POS_CENTER ? t.isDark(c, a) && i.push(`<use key='${l++}' fill='${r}' xlink:href='#B' x='${D-.03}' y='${f-.03}'/>`) : s[c][a] === ee.POS_OTHER ? t.isDark(c, a) ? i.push(`<use
                key='${l++}'
                fill='${r}'
                xlink:href='#B'
                x='${D-.03}'
                y='${f-.03}'
              />`) : i.push(`<use key='${l++}' xlink:href='#B-white' x='${D-.03}' y='${f-.03}'/>`) : t.isDark(c, a) && i.push(`<use key='${l++}' xlink:href='#S-black' x='${D+1}' y='${f+1}'/>`)
                }
            return i
        }
        renderResImage(e) {
            return async t => {
                let r = this.getRendererParams(e, t);
                r.content = r.content || "??????????????????", r.level = r.icon ? "H" : r.level, r.qrcode = r.qrcode || ll({
                    text: r.content,
                    correctLevel: r.level,
                    typeNumber: -1
                });
                let u = [],
                    n = this.getViewBox(r),
                    o = await this.getGrayPointList(r, r.qrcode.getModuleCount(), "#S-black", "#S-white");
                return u.push(`<svg width='100%' height='100%' viewBox='${n}' fill='white' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>`), u.push(`<defs>
          <rect id="B-black" fill=${r.bodyColor} width='3.08' height='3.08'/>
          <rect id="B-white" fill="white" width='3.08' height='3.08'/>
          <rect id="S-black" fill=${r.bodyColor} width='1.02' height='1.02'/>
          <rect id="S-white" fill="white" width='1.02' height='1.02'/>
          <rect id="B" width='3.08' height='3.08'/>
          <rect id="S" width='1.02' height='1.02'/>
        </defs>
        `), u.push(mt(this.beforeListing(r))), u.push(mt(o)), u.push(mt(this.listPoints(r))), u.push(mt(this.drawIcon(r))), u.push("</svg>"), mt(u)
                    .split(`
`)
                    .join(" ")
            }
        }
    },
    U1 = new Fl,
    z1 = U1.renderResImage(H1),
    ls = [Math.sqrt(3) / 2, 1 / 2],
    as = [-Math.sqrt(3) / 2, 1 / 2],
    cs = [0, 0],
    Dt = `matrix(${String(ls[0])}, ${String(ls[1])}, ${String(as[0])}, ${String(as[1])}, ${String(cs[0])}, ${String(cs[1])})`,
    V1 = {
        upColor: "#333",
        leftColor: "#666",
        rightColor: "#999",
        height: .5,
        lpHeight: 1
    },
    yl = class extends Ot {
        listPoints(e) {
            let {
                qrcode: t,
                upColor: r,
                leftColor: u,
                rightColor: n
            } = e, {
                height: o = .5,
                lpHeight: s = 1
            } = e;
            if (!t) return [];
            let i = t.getModuleCount(),
                l = yt(t),
                c = [],
                a = 1.001,
                D = 1.001;
            o <= 0 && (o = 1), s <= 0 && (s = 1);
            for (let f = 0; f < i; f++)
                for (let d = 0; d < i; d++) t.isDark(f, d) === !1 || (l[f][d] === ee.POS_OTHER || l[f][d] === ee.POS_CENTER ? (c.push(`<rect width='${D}' height='${D}' fill='${r}' x='${f+(1-D)/2}' y='${d+(1-D)/2}' transform='${Dt}'/>`), c.push(`<rect width='${s}' height='${D}' fill='${u}' x='${0}' y='${0}' transform='${`${Dt}translate(${String(f+(1-D)/2+D)},${String(d+(1-D)/2)}) skewY(45) `}'/>`), c.push(`<rect width='${D}' height='${s}' fill='${n}' x='${0}' y='${0}' transform='${`${Dt}translate(${String(f+(1-D)/2)},${String(d+D+(1-D)/2)}) skewX(45) `}'/>`)) : (c.push(`<rect width='${a}' height='${a}' fill='${r}' x='${f+(1-a)/2}' y='${d+(1-a)/2}' transform='${Dt}'/>`), c.push(`<rect width='${o}' height='${a}' fill='${u}' x='${0}' y='${0}' transform='${`${Dt}translate(${String(f+(1-a)/2+a)},${String(d+(1-a)/2)}) skewY(45) `}'/>`), c.push(`<rect width='${a}' height='${o}' fill='${n}' x='${0}' y='${0}' transform='${`${Dt}translate(${String(f+(1-a)/2)},${String(d+a+(1-a)/2)}) skewX(45) `}'/>`)));
            return c
        }
        getViewBox({
            qrcode: e
        }) {
            if (!e) return "0 0 0 0";
            let t = e.getModuleCount();
            return `${String(-t)} ${String(-t/2)} ${String(t*2)} ${String(t*2)}`
        }
        drawIcon(e) {
            return lr(e.icon.enabled, 0) === 1 ? this.defaultDrawIcon(e) : this.builtinDrawIcon(e)
        }
        builtinDrawIcon(e) {
            let {
                qrcode: t,
                icon: r
            } = e;
            if (!t) return [];
            let u = 0,
                n = t.getModuleCount(),
                o = [],
                s = "M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z";
            if (r) {
                let i = lr(r.enabled, 0),
                    {
                        scale: l
                    } = r,
                    c = Number(n * (l > 33 ? 33 : l) / 100),
                    a = (n - c) / 2;
                if (r && i) {
                    let D = At(),
                        f = At(),
                        d = this.getDefaultIcon(i);
                    o.push(`
  <g transform='${Dt}'>
    <path d='${s}' stroke='#FFF' stroke-width='${100/c}' fill='#FFF' transform='${`translate(${String(a)},${String(a)}) scale(${String(c/100)},${String(c/100)})`}' />
  </g>`), o.push(`
  <g key='${u++}' transform='${Dt}'>
    <defs>
      <path id='${`defs-path${D}`}' d='${s}' fill='#FFF' transform='${`translate(${String(a)},${String(a)}) scale(${String(c/100)},${String(c/100)})`}' />
    </defs>
    <clipPath id='${`clip-path${f}`}'>
      <use xlink:href='${`#defs-path${D}`}'  overflow='visible'/>
    </clipPath>
    <g clip-path='${`url(#clip-path${f})`}'>
      <g transform='${`translate(${String(a)},${String(a)}) scale(${String(c/100)},${String(c/100)})`}' >
      ${d}
      </g>
    </g>
  </g>`)
                }
            }
            return o
        }
        defaultDrawIcon(e) {
            let {
                qrcode: t,
                icon: r
            } = e;
            if (!t) return [];
            let u = 0,
                n = t.getModuleCount(),
                o = [],
                s = "M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z";
            if (r) {
                let i = lr(r.enabled, 0),
                    {
                        src: l,
                        scale: c
                    } = r,
                    a = Number(n * (c > 33 ? 33 : c) / 100),
                    D = (n - a) / 2;
                if (r && i) {
                    let f = At(),
                        d = At();
                    o.push(`<g transform='${Dt}'>
          <path d='${s}' stroke='#FFF' stroke-width='${100/a}' fill='#FFF' transform='${`translate(${String(D)},${String(D)}) scale(${String(a/100)},${String(a/100)})`}' />
        </g>`), o.push(`
  <g key='${u++}' transform='${Dt}'>
        <defs>
          <path id='${`defs-path${f}`}' d='${s}' fill='#FFF' transform='${`translate(${String(D)},${String(D)}) scale(${String(a/100)},${String(a/100)})`}' />                    </defs>
        <clipPath id='${`clip-path${d}`}'>
        <use xlink:href='${`#defs-path${f}`}'  overflow='visible'/>
          </clipPath>
          <g clip-path='${`url(#clip-path${d})`}'>
        <image overflow='visible' key='${u++}' xlink:href='${l}' width='${a}' x='${D}' y='${D}' />
        </g>
        </g>`)
                }
            }
            return o
        }
    },
    q1 = new yl,
    W1 = q1.render(V1),
    K1 = il;
const X1 = ["innerHTML"],
    G1 = Gt({
        props: {
            url: {
                type: String,
                require: !0,
                default: ""
            },
            size: {
                type: String,
                default: "medium"
            }
        },
        setup(e) {
            const t = e,
                r = Qe(() => fl({
                    content: t.url,
                    eyeframeType: "round",
                    eyeballType: "round",
                    eyeColor: fn.value ? "#f9f9f9" : "#333",
                    type: "round",
                    size: 50,
                    bodyColor: fn.value ? "#fafafa" : "#222"
                })),
                u = ref();
            return Jt(async () => {
                u.value = await K1.renderResImage({
                    contrast: 50,
                    eyeColor: "#1af",
                    bodyColor: "#1af"
                })
            }), (n, o) => (G(), fe("div", {
                class: "qrcode-svg",
                innerHTML: ne(r)
            }, null, 8, X1))
        }
    }),
    J1 = e => {
        const t = new Image;
        return t.crossOrigin = "anonymous", t.src = e, new Promise((r, u) => {
            t.onload = () => {
                const n = document.createElement("canvas");
                n.width = t.width, n.height = t.height;
                const o = n.getContext("2d");
                o && o.drawImage(t, 0, 0, n.width, n.height), r(n.toDataURL())
            }, t.onerror = n => {
                u(n)
            }
        })
    },
    fs = e => e[Math.floor(Math.random() * e.length)];
const El = e => (Ha("data-v-494223ba"), e = e(), ja(), e),
    Z1 = ["href"],
    Q1 = {
        class: "items-center flex truncate mt-3"
    },
    Y1 = {
        class: "flex items-center truncate"
    },
    e2 = ["src"],
    t2 = {
        key: 0,
        class: "w-32 h-32"
    },
    r2 = ["src"],
    n2 = {
        key: 1,
        class: "text-center p-20 flex flex-col justify-center items-center !bg-opacity-30 backdrop-filter backdrop-blur-lg backdrop-saturate-[180%] filter drop-shadow-xl transition-all duration-300 ease-out z-10",
        bg: "!opacity-75 white dark:slate-800"
    },
    u2 = El(() => j("svg", {
        class: "animate-spin box-content text-slate-700 dark:text-slate-200",
        width: "32",
        height: "32",
        viewBox: "0 0 16 16",
        fill: "none",
        "data-view-component": "true"
    }, [j("circle", {
        cx: "8",
        cy: "8",
        r: "7",
        stroke: "currentColor",
        "stroke-opacity": "0.25",
        "stroke-width": "2",
        "vector-effect": "non-scaling-stroke"
    }), j("path", {
        d: "M15 8a7.002 7.002 0 00-7-7",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
    })], -1)),
    o2 = El(() => j("span", {
        class: "mt-4 text-slate-800 dark:text-slate-200"
    }, " Styling your visual web bookmark... ", -1)),
    s2 = [u2, o2],
    i2 = Gt({
        props: {
            url: {
                type: String,
                require: !0,
                default: ""
            },
            size: {
                type: String,
                default: "medium"
            },
            corner: {
                type: String,
                default: "xl"
            },
            cover: {
                type: String,
                default: "right"
            },
            shadow: {
                type: String,
                default: "always"
            },
            horizontal: {
                type: Boolean,
                default: !1
            },
            qrcode: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const t = e,
                r = "https://metafy.vercel.app/api?url=",
                u = Me(!1),
                n = pr({
                    title: "",
                    description: "",
                    url: "",
                    image: "",
                    logo: "",
                    author: "",
                    publisher: "",
                    base64Image: "",
                    base64Logo: ""
                }),
                o = async () => {
                    u.value = !0;
                    const {
                        data: i
                    } = await i1.get(`${r}${t.url}`);
                    if (i) {
                        let l = "";
                        if (i != null && i.image) try {
                            l = await J1(i.image)
                        } catch {
                            console.log("Oops, something went wrong: Maybe caused by CORS!!!")
                        }
                        n.title = i.title, n.description = i.description, n.url = t.url, n.image = i.image, n.logo = i.logo, n.author = i.author, n.publisher = i.publisher, n.base64Image = l
                    } else n.description = "\u{1FA84} Turn any link into a stylish visual web bookmark, one-click to copy the beautiful web bookmark image.", n.image = "https://bookmark.style/preview.png", n.logo = "https://bookmark.style/favicon.svg", n.title = "bookmark.style: stylish your visual web bookmark", n.url = t.url;
                    u.value = !1
                }, s = Qe(() => [{
                    "web-bookmark-card--large": t.size === "large",
                    "web-bookmark-card--medium": t.size === "medium",
                    "web-bookmark-card--small": t.size === "small",
                    "web-bookmark-card--horizontal": t.horizontal,
                    "is-always-shadow": t.shadow === "always",
                    "is-hover-shadow": t.shadow === "hover",
                    "is-never-shadow": t.shadow === "never"
                }, `rounded-${t.corner}`]);
            return pt(() => t.url, async i => {
                i !== "" && await o()
            }, {
                deep: !0,
                immediate: !0
            }), (i, l) => (G(), fe("figure", {
                class: Ie(["web-bookmark-card relative inset-0 overflow-hidden text-left transition-all duration-300 ease-out", [ne(s), e.horizontal ? "w-[720px]" : "w-120"]])
            }, [Si(i.$slots, "default", {}, void 0, !0), u.value ? (G(), fe("div", n2, s2)) : (G(), fe("a", {
                key: 0,
                class: Ie(["glass w-full flex flex-wrap text-current no-underline hover:no-underline inset-0 transition-all duration-300 ease-out z-10", [e.cover === "right" ? "flex-row-reverse" : "flex-row"]]),
                bg: "!opacity-75 white dark:slate-800",
                href: ne(n)
                    .url,
                target: "_blank"
            }, [j("div", {
                    class: Ie(["relative flex order-1 min-w-1/2 flex-grow-[999] basis-[0]", [e.qrcode ? "justify-between !pl-4" : "p-4"]])
                }, [j("div", {
                        class: Ie(["flex-1 flex flex-col justify-center font-sans", e.qrcode && ne(n)
                            .url ? "has-qrcode" : "w-full"
                        ])
                    }, [j("div", {
                        class: Ie(["items-center font-semibold line-clamp-1", [e.horizontal ? "text-sm" : "text-base"]]),
                        text: "slate-800 dark:white"
                    }, [j("span", null, vr(ne(n)
                        .title), 1)], 2), j("div", {
                        class: Ie(["items-center mt-3 line-clamp-2", [e.horizontal ? "text-xs" : "text-sm"]]),
                        text: "slate-800 dark:slate-400"
                    }, vr(ne(n)
                        .description), 3), j("div", Q1, [j("div", Y1, [ne(n)
                        .logo ? (G(), fe("img", {
                            key: 0,
                            src: ne(n)
                                .logo,
                            class: Ie(["inline-block align-text-bottom mr-2 h-4 w-4", [e.horizontal ? "h-3.5 w-3.5" : "h-4 w-4"]])
                        }, null, 10, e2)) : Ar("", !0), j("span", {
                            class: Ie(["truncate", [e.horizontal ? "text-xs" : "text-sm"]]),
                            text: "slate-800 dark:slate-400"
                        }, vr(ne(n)
                            .author || ne(n)
                            .publisher || ne(n)
                            .url), 3)
                    ])])], 2), e.qrcode && ne(n)
                    .url ? (G(), fe("div", t2, [De(G1, {
                        url: ne(n)
                            .url,
                        class: "w-32 h-32"
                    }, null, 8, ["url"])])) : Ar("", !0)
                ], 2), ne(n)
                .image ? (G(), fe("div", {
                    key: 0,
                    class: Ie(["relative max-h-full", [e.horizontal ? "h-32 basis-[13.5rem]" : "h-64 basis-[16rem] flex-grow"]])
                }, [j("img", {
                    class: "relative m-0 w-full h-full align-bottom object-cover",
                    src: ne(n)
                        .base64Image || ne(n)
                        .image
                }, null, 8, r2)], 2)) : Ar("", !0)
            ], 10, Z1))], 2))
        }
    });
var l2 = Xi(i2, [
        ["__scopeId", "data-v-494223ba"]
    ]),
    a2 = "/assets/logo-full-dark.dd0eec03.png";
/*!
 * @intlify/shared v9.1.7
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
const c2 = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
    Mt = e => c2 ? Symbol(e) : e,
    f2 = (e, t, r) => D2({
        l: e,
        k: t,
        s: r
    }),
    D2 = e => JSON.stringify(e)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029")
    .replace(/\u0027/g, "\\u0027"),
    Pe = e => typeof e == "number" && isFinite(e),
    d2 = e => no(e) === "[object Date]",
    dn = e => no(e) === "[object RegExp]",
    On = e => ie(e) && Object.keys(e)
    .length === 0;
function h2(e, t) {
    typeof console != "undefined" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const Ue = Object.assign;
let Ds;
const ro = () => Ds || (Ds = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function ds(e) {
    return e.replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;")
}
const m2 = Object.prototype.hasOwnProperty;
function _l(e, t) {
    return m2.call(e, t)
}
const Le = Array.isArray,
    je = e => typeof e == "function",
    U = e => typeof e == "string",
    be = e => typeof e == "boolean",
    ze = e => e !== null && typeof e == "object",
    vl = Object.prototype.toString,
    no = e => vl.call(e),
    ie = e => no(e) === "[object Object]",
    p2 = e => e == null ? "" : Le(e) || ie(e) && e.toString === vl ? JSON.stringify(e, null, 2) : String(e);
/*!
 * @intlify/message-resolver v9.1.7
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
const g2 = Object.prototype.hasOwnProperty;
function C2(e, t) {
    return g2.call(e, t)
}
const en = e => e !== null && typeof e == "object",
    Lt = [];
Lt[0] = {
    w: [0],
    i: [3, 0],
    ["["]: [4],
    o: [7]
};
Lt[1] = {
    w: [1],
    ["."]: [2],
    ["["]: [4],
    o: [7]
};
Lt[2] = {
    w: [2],
    i: [3, 0],
    ["0"]: [3, 0]
};
Lt[3] = {
    i: [3, 0],
    ["0"]: [3, 0],
    w: [1, 1],
    ["."]: [2, 1],
    ["["]: [4, 1],
    o: [7, 1]
};
Lt[4] = {
    ["'"]: [5, 0],
    ['"']: [6, 0],
    ["["]: [4, 2],
    ["]"]: [1, 3],
    o: 8,
    l: [4, 0]
};
Lt[5] = {
    ["'"]: [4, 0],
    o: 8,
    l: [5, 0]
};
Lt[6] = {
    ['"']: [4, 0],
    o: 8,
    l: [6, 0]
};
const F2 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function y2(e) {
    return F2.test(e)
}
function E2(e) {
    const t = e.charCodeAt(0),
        r = e.charCodeAt(e.length - 1);
    return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function _2(e) {
    if (e == null) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}
function v2(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : y2(t) ? E2(t) : "*" + t
}
function $2(e) {
    const t = [];
    let r = -1,
        u = 0,
        n = 0,
        o, s, i, l, c, a, D;
    const f = [];
    f[0] = () => {
        s === void 0 ? s = i : s += i
    }, f[1] = () => {
        s !== void 0 && (t.push(s), s = void 0)
    }, f[2] = () => {
        f[0](), n++
    }, f[3] = () => {
        if (n > 0) n--, u = 4, f[0]();
        else {
            if (n = 0, s === void 0 || (s = v2(s), s === !1)) return !1;
            f[1]()
        }
    };
    function d() {
        const C = e[r + 1];
        if (u === 5 && C === "'" || u === 6 && C === '"') return r++, i = "\\" + C, f[0](), !0
    }
    for (; u !== null;)
        if (r++, o = e[r], !(o === "\\" && d())) {
            if (l = _2(o), D = Lt[u], c = D[l] || D.l || 8, c === 8 || (u = c[0], c[1] !== void 0 && (a = f[c[1]], a && (i = o, a() === !1)))) return;
            if (u === 7) return t
        }
}
const hs = new Map;
function hn(e, t) {
    if (!en(e)) return null;
    let r = hs.get(t);
    if (r || (r = $2(t), r && hs.set(t, r)), !r) return null;
    const u = r.length;
    let n = e,
        o = 0;
    for (; o < u;) {
        const s = n[r[o]];
        if (s === void 0) return null;
        n = s, o++
    }
    return n
}
function yu(e) {
    if (!en(e)) return e;
    for (const t in e)
        if (!!C2(e, t))
            if (!t.includes(".")) en(e[t]) && yu(e[t]);
            else {
                const r = t.split("."),
                    u = r.length - 1;
                let n = e;
                for (let o = 0; o < u; o++) r[o] in n || (n[r[o]] = {}), n = n[r[o]];
                n[r[u]] = e[t], delete e[t], en(n[r[u]]) && yu(n[r[u]])
            } return e
}
/*!
 * @intlify/runtime v9.1.7
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
const b2 = e => e,
    w2 = e => "",
    x2 = "text",
    A2 = e => e.length === 0 ? "" : e.join(""),
    B2 = p2;
function ms(e, t) {
    return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function T2(e) {
    const t = Pe(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (Pe(e.named.count) || Pe(e.named.n)) ? Pe(e.named.count) ? e.named.count : Pe(e.named.n) ? e.named.n : t : t
}
function k2(e, t) {
    t.count || (t.count = e), t.n || (t.n = e)
}
function P2(e = {}) {
    const t = e.locale,
        r = T2(e),
        u = ze(e.pluralRules) && U(t) && je(e.pluralRules[t]) ? e.pluralRules[t] : ms,
        n = ze(e.pluralRules) && U(t) && je(e.pluralRules[t]) ? ms : void 0,
        o = h => h[u(r, h.length, n)],
        s = e.list || [],
        i = h => s[h],
        l = e.named || {};
    Pe(e.pluralIndex) && k2(r, l);
    const c = h => l[h];
    function a(h) {
        const p = je(e.messages) ? e.messages(h) : ze(e.messages) ? e.messages[h] : !1;
        return p || (e.parent ? e.parent.message(h) : w2)
    }
    const D = h => e.modifiers ? e.modifiers[h] : b2,
        f = ie(e.processor) && je(e.processor.normalize) ? e.processor.normalize : A2,
        d = ie(e.processor) && je(e.processor.interpolate) ? e.processor.interpolate : B2,
        C = ie(e.processor) && U(e.processor.type) ? e.processor.type : x2,
        m = {
            list: i,
            named: c,
            plural: o,
            linked: (h, p) => {
                const P = a(h)(m);
                return U(p) ? D(p)(P) : P
            },
            message: a,
            type: C,
            interpolate: d,
            normalize: f
        };
    return m
}
/*!
 * @intlify/message-compiler v9.1.7
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
function $l(e, t, r = {}) {
    const {
        domain: u,
        messages: n,
        args: o
    } = r, s = e, i = new SyntaxError(String(s));
    return i.code = e, t && (i.location = t), i.domain = u, i
}
/*!
 * @intlify/devtools-if v9.1.7
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
const bl = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
};
/*!
 * @intlify/core-base v9.1.7
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
let Mr = null;
function S2(e) {
    Mr = e
}
function O2(e, t, r) {
    Mr && Mr.emit(bl.I18nInit, {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: r
    })
}
const M2 = L2(bl.FunctionTranslate);
function L2(e) {
    return t => Mr && Mr.emit(e, t)
}
const R2 = "9.1.7",
    Mn = -1,
    ps = "";
function I2() {
    return {
        upper: e => U(e) ? e.toUpperCase() : e,
        lower: e => U(e) ? e.toLowerCase() : e,
        capitalize: e => U(e) ? `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}` : e
    }
}
let N2, wl = null;
const gs = e => {
        wl = e
    },
    H2 = () => wl;
let Cs = 0;
function j2(e = {}) {
    const t = U(e.version) ? e.version : R2,
        r = U(e.locale) ? e.locale : "en-US",
        u = Le(e.fallbackLocale) || ie(e.fallbackLocale) || U(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r,
        n = ie(e.messages) ? e.messages : {
            [r]: {}
        },
        o = ie(e.datetimeFormats) ? e.datetimeFormats : {
            [r]: {}
        },
        s = ie(e.numberFormats) ? e.numberFormats : {
            [r]: {}
        },
        i = Ue({}, e.modifiers || {}, I2()),
        l = e.pluralRules || {},
        c = je(e.missing) ? e.missing : null,
        a = be(e.missingWarn) || dn(e.missingWarn) ? e.missingWarn : !0,
        D = be(e.fallbackWarn) || dn(e.fallbackWarn) ? e.fallbackWarn : !0,
        f = !!e.fallbackFormat,
        d = !!e.unresolving,
        C = je(e.postTranslation) ? e.postTranslation : null,
        m = ie(e.processor) ? e.processor : null,
        h = be(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        p = !!e.escapeParameter,
        P = je(e.messageCompiler) ? e.messageCompiler : N2,
        w = je(e.onWarn) ? e.onWarn : h2,
        v = e,
        V = ze(v.__datetimeFormatters) ? v.__datetimeFormatters : new Map,
        te = ze(v.__numberFormatters) ? v.__numberFormatters : new Map,
        x = ze(v.__meta) ? v.__meta : {};
    Cs++;
    const k = {
        version: t,
        cid: Cs,
        locale: r,
        fallbackLocale: u,
        messages: n,
        datetimeFormats: o,
        numberFormats: s,
        modifiers: i,
        pluralRules: l,
        missing: c,
        missingWarn: a,
        fallbackWarn: D,
        fallbackFormat: f,
        unresolving: d,
        postTranslation: C,
        processor: m,
        warnHtmlMessage: h,
        escapeParameter: p,
        messageCompiler: P,
        onWarn: w,
        __datetimeFormatters: V,
        __numberFormatters: te,
        __meta: x
    };
    return __INTLIFY_PROD_DEVTOOLS__ && O2(k, t, x), k
}
function uo(e, t, r, u, n) {
    const {
        missing: o,
        onWarn: s
    } = e;
    if (o !== null) {
        const i = o(e, r, t, n);
        return U(i) ? i : t
    } else return t
}
function Nr(e, t, r) {
    const u = e;
    u.__localeChainCache || (u.__localeChainCache = new Map);
    let n = u.__localeChainCache.get(r);
    if (!n) {
        n = [];
        let o = [r];
        for (; Le(o);) o = Fs(n, o, t);
        const s = Le(t) ? t : ie(t) ? t.default ? t.default : null : t;
        o = U(s) ? [s] : s, Le(o) && Fs(n, o, !1), u.__localeChainCache.set(r, n)
    }
    return n
}
function Fs(e, t, r) {
    let u = !0;
    for (let n = 0; n < t.length && be(u); n++) {
        const o = t[n];
        U(o) && (u = U2(e, t[n], r))
    }
    return u
}
function U2(e, t, r) {
    let u;
    const n = t.split("-");
    do {
        const o = n.join("-");
        u = z2(e, o, r), n.splice(-1, 1)
    } while (n.length && u === !0);
    return u
}
function z2(e, t, r) {
    let u = !1;
    if (!e.includes(t) && (u = !0, t)) {
        u = t[t.length - 1] !== "!";
        const n = t.replace(/!/g, "");
        e.push(n), (Le(r) || ie(r)) && r[n] && (u = r[n])
    }
    return u
}
function Fr(e, t, r) {
    const u = e;
    u.__localeChainCache = new Map, Nr(e, r, t)
}
function ur(e) {
    return $l(e, null, void 0)
}
const ys = () => "",
    ht = e => je(e);
function Es(e, ...t) {
    const {
        fallbackFormat: r,
        postTranslation: u,
        unresolving: n,
        fallbackLocale: o,
        messages: s
    } = e, [i, l] = Eu(...t), c = be(l.missingWarn) ? l.missingWarn : e.missingWarn, a = be(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, D = be(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, f = !!l.resolvedMessage, d = U(l.default) || be(l.default) ? be(l.default) ? i : l.default : r ? i : "", C = r || d !== "", m = U(l.locale) ? l.locale : e.locale;
    D && V2(l);
    let [h, p, P] = f ? [i, m, s[m] || {}] : q2(e, i, m, o, a, c), w = i;
    if (!f && !(U(h) || ht(h)) && C && (h = d, w = h), !f && (!(U(h) || ht(h)) || !U(p))) return n ? Mn : i;
    let v = !1;
    const V = () => {
            v = !0
        },
        te = ht(h) ? h : xl(e, i, p, h, w, V);
    if (v) return h;
    const x = X2(e, p, P, l),
        k = P2(x),
        M = W2(e, te, k),
        I = u ? u(M) : M;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const z = {
            timestamp: Date.now(),
            key: U(i) ? i : ht(h) ? h.key : "",
            locale: p || (ht(h) ? h.locale : ""),
            format: U(h) ? h : ht(h) ? h.source : "",
            message: I
        };
        z.meta = Ue({}, e.__meta, H2() || {}), M2(z)
    }
    return I
}
function V2(e) {
    Le(e.list) ? e.list = e.list.map(t => U(t) ? ds(t) : t) : ze(e.named) && Object.keys(e.named)
        .forEach(t => {
            U(e.named[t]) && (e.named[t] = ds(e.named[t]))
        })
}
function q2(e, t, r, u, n, o) {
    const {
        messages: s,
        onWarn: i
    } = e, l = Nr(e, u, r);
    let c = {},
        a, D = null;
    const f = "translate";
    for (let d = 0; d < l.length && (a = l[d], c = s[a] || {}, (D = hn(c, t)) === null && (D = c[t]), !(U(D) || je(D))); d++) {
        const C = uo(e, t, a, o, f);
        C !== t && (D = C)
    }
    return [D, a, c]
}
function xl(e, t, r, u, n, o) {
    const {
        messageCompiler: s,
        warnHtmlMessage: i
    } = e;
    if (ht(u)) {
        const c = u;
        return c.locale = c.locale || r, c.key = c.key || t, c
    }
    const l = s(u, K2(e, r, n, u, i, o));
    return l.locale = r, l.key = t, l.source = u, l
}
function W2(e, t, r) {
    return t(r)
}
function Eu(...e) {
    const [t, r, u] = e, n = {};
    if (!U(t) && !Pe(t) && !ht(t)) throw ur(14);
    const o = Pe(t) ? String(t) : (ht(t), t);
    return Pe(r) ? n.plural = r : U(r) ? n.default = r : ie(r) && !On(r) ? n.named = r : Le(r) && (n.list = r), Pe(u) ? n.plural = u : U(u) ? n.default = u : ie(u) && Ue(n, u), [o, n]
}
function K2(e, t, r, u, n, o) {
    return {
        warnHtmlMessage: n,
        onError: s => {
            throw o && o(s), s
        },
        onCacheKey: s => f2(t, r, s)
    }
}
function X2(e, t, r, u) {
    const {
        modifiers: n,
        pluralRules: o
    } = e, i = {
        locale: t,
        modifiers: n,
        pluralRules: o,
        messages: l => {
            const c = hn(r, l);
            if (U(c)) {
                let a = !1;
                const f = xl(e, l, t, c, l, () => {
                    a = !0
                });
                return a ? ys : f
            } else return ht(c) ? c : ys
        }
    };
    return e.processor && (i.processor = e.processor), u.list && (i.list = u.list), u.named && (i.named = u.named), Pe(u.plural) && (i.pluralIndex = u.plural), i
}
function _s(e, ...t) {
    const {
        datetimeFormats: r,
        unresolving: u,
        fallbackLocale: n,
        onWarn: o
    } = e, {
        __datetimeFormatters: s
    } = e, [i, l, c, a] = _u(...t), D = be(c.missingWarn) ? c.missingWarn : e.missingWarn;
    be(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const f = !!c.part,
        d = U(c.locale) ? c.locale : e.locale,
        C = Nr(e, n, d);
    if (!U(i) || i === "") return new Intl.DateTimeFormat(d)
        .format(l);
    let m = {},
        h, p = null;
    const P = "datetime format";
    for (let V = 0; V < C.length && (h = C[V], m = r[h] || {}, p = m[i], !ie(p)); V++) uo(e, i, h, D, P);
    if (!ie(p) || !U(h)) return u ? Mn : i;
    let w = `${h}__${i}`;
    On(a) || (w = `${w}__${JSON.stringify(a)}`);
    let v = s.get(w);
    return v || (v = new Intl.DateTimeFormat(h, Ue({}, p, a)), s.set(w, v)), f ? v.formatToParts(l) : v.format(l)
}
function _u(...e) {
    const [t, r, u, n] = e;
    let o = {},
        s = {},
        i;
    if (U(t)) {
        if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t)) throw ur(16);
        i = new Date(t);
        try {
            i.toISOString()
        } catch {
            throw ur(16)
        }
    } else if (d2(t)) {
        if (isNaN(t.getTime())) throw ur(15);
        i = t
    } else if (Pe(t)) i = t;
    else throw ur(14);
    return U(r) ? o.key = r : ie(r) && (o = r), U(u) ? o.locale = u : ie(u) && (s = u), ie(n) && (s = n), [o.key || "", i, o, s]
}
function vs(e, t, r) {
    const u = e;
    for (const n in r) {
        const o = `${t}__${n}`;
        !u.__datetimeFormatters.has(o) || u.__datetimeFormatters.delete(o)
    }
}
function $s(e, ...t) {
    const {
        numberFormats: r,
        unresolving: u,
        fallbackLocale: n,
        onWarn: o
    } = e, {
        __numberFormatters: s
    } = e, [i, l, c, a] = vu(...t), D = be(c.missingWarn) ? c.missingWarn : e.missingWarn;
    be(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const f = !!c.part,
        d = U(c.locale) ? c.locale : e.locale,
        C = Nr(e, n, d);
    if (!U(i) || i === "") return new Intl.NumberFormat(d)
        .format(l);
    let m = {},
        h, p = null;
    const P = "number format";
    for (let V = 0; V < C.length && (h = C[V], m = r[h] || {}, p = m[i], !ie(p)); V++) uo(e, i, h, D, P);
    if (!ie(p) || !U(h)) return u ? Mn : i;
    let w = `${h}__${i}`;
    On(a) || (w = `${w}__${JSON.stringify(a)}`);
    let v = s.get(w);
    return v || (v = new Intl.NumberFormat(h, Ue({}, p, a)), s.set(w, v)), f ? v.formatToParts(l) : v.format(l)
}
function vu(...e) {
    const [t, r, u, n] = e;
    let o = {},
        s = {};
    if (!Pe(t)) throw ur(14);
    const i = t;
    return U(r) ? o.key = r : ie(r) && (o = r), U(u) ? o.locale = u : ie(u) && (s = u), ie(n) && (s = n), [o.key || "", i, o, s]
}
function bs(e, t, r) {
    const u = e;
    for (const n in r) {
        const o = `${t}__${n}`;
        !u.__numberFormatters.has(o) || u.__numberFormatters.delete(o)
    }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ro()
    .__INTLIFY_PROD_DEVTOOLS__ = !1);
/*!
 * vue-i18n v9.1.7
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
const G2 = "9.1.7";
function J2() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ro()
        .__INTLIFY_PROD_DEVTOOLS__ = !1)
}
function rt(e, ...t) {
    return $l(e, null, void 0)
}
const Jn = "__INTLIFY_META__",
    $u = Mt("__transrateVNode"),
    bu = Mt("__datetimeParts"),
    wu = Mt("__numberParts");
Mt("__enableEmitter");
Mt("__disableEmitter");
const Z2 = Mt("__setPluralRules");
Mt("__intlifyMeta");
let ws = 0;
function xs(e) {
    return (t, r, u, n) => e(r, u, St() || void 0, n)
}
function Al(e, t) {
    const {
        messages: r,
        __i18n: u
    } = t, n = ie(r) ? r : Le(u) ? {} : {
        [e]: {}
    };
    if (Le(u) && u.forEach(({
            locale: o,
            resource: s
        }) => {
            o ? (n[o] = n[o] || {}, mn(s, n[o])) : mn(s, n)
        }), t.flatJson)
        for (const o in n) _l(n, o) && yu(n[o]);
    return n
}
const Xr = e => !ze(e) || Le(e);
function mn(e, t) {
    if (Xr(e) || Xr(t)) throw rt(20);
    for (const r in e) _l(e, r) && (Xr(e[r]) || Xr(t[r]) ? t[r] = e[r] : mn(e[r], t[r]))
}
const Q2 = () => {
    const e = St();
    return e && e.type[Jn] ? {
        [Jn]: e.type[Jn]
    } : null
};
function Bl(e = {}) {
    const {
        __root: t
    } = e, r = t === void 0;
    let u = be(e.inheritLocale) ? e.inheritLocale : !0;
    const n = Me(t && u ? t.locale.value : U(e.locale) ? e.locale : "en-US"),
        o = Me(t && u ? t.fallbackLocale.value : U(e.fallbackLocale) || Le(e.fallbackLocale) || ie(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n.value),
        s = Me(Al(n.value, e)),
        i = Me(ie(e.datetimeFormats) ? e.datetimeFormats : {
            [n.value]: {}
        }),
        l = Me(ie(e.numberFormats) ? e.numberFormats : {
            [n.value]: {}
        });
    let c = t ? t.missingWarn : be(e.missingWarn) || dn(e.missingWarn) ? e.missingWarn : !0,
        a = t ? t.fallbackWarn : be(e.fallbackWarn) || dn(e.fallbackWarn) ? e.fallbackWarn : !0,
        D = t ? t.fallbackRoot : be(e.fallbackRoot) ? e.fallbackRoot : !0,
        f = !!e.fallbackFormat,
        d = je(e.missing) ? e.missing : null,
        C = je(e.missing) ? xs(e.missing) : null,
        m = je(e.postTranslation) ? e.postTranslation : null,
        h = be(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        p = !!e.escapeParameter;
    const P = t ? t.modifiers : ie(e.modifiers) ? e.modifiers : {};
    let w = e.pluralRules || t && t.pluralRules,
        v;
    function V() {
        return j2({
            version: G2,
            locale: n.value,
            fallbackLocale: o.value,
            messages: s.value,
            datetimeFormats: i.value,
            numberFormats: l.value,
            modifiers: P,
            pluralRules: w,
            missing: C === null ? void 0 : C,
            missingWarn: c,
            fallbackWarn: a,
            fallbackFormat: f,
            unresolving: !0,
            postTranslation: m === null ? void 0 : m,
            warnHtmlMessage: h,
            escapeParameter: p,
            __datetimeFormatters: ie(v) ? v.__datetimeFormatters : void 0,
            __numberFormatters: ie(v) ? v.__numberFormatters : void 0,
            __v_emitter: ie(v) ? v.__v_emitter : void 0,
            __meta: {
                framework: "vue"
            }
        })
    }
    v = V(), Fr(v, n.value, o.value);
    function te() {
        return [n.value, o.value, s.value, i.value, l.value]
    }
    const x = Qe({
            get: () => n.value,
            set: y => {
                n.value = y, v.locale = n.value
            }
        }),
        k = Qe({
            get: () => o.value,
            set: y => {
                o.value = y, v.fallbackLocale = o.value, Fr(v, n.value, y)
            }
        }),
        M = Qe(() => s.value),
        I = Qe(() => i.value),
        z = Qe(() => l.value);
    function A() {
        return je(m) ? m : null
    }
    function R(y) {
        m = y, v.postTranslation = y
    }
    function W() {
        return d
    }
    function ge(y) {
        y !== null && (C = xs(y)), d = y, v.missing = C
    }
    function ue(y, E, L, S, H, q) {
        te();
        let J;
        if (__INTLIFY_PROD_DEVTOOLS__) try {
            gs(Q2()), J = y(v)
        } finally {
            gs(null)
        } else J = y(v);
        if (Pe(J) && J === Mn) {
            const [de, ce] = E();
            return t && D ? S(t) : H(de)
        } else {
            if (q(J)) return J;
            throw rt(14)
        }
    }
    function X(...y) {
        return ue(E => Es(E, ...y), () => Eu(...y), "translate", E => E.t(...y), E => E, E => U(E))
    }
    function oe(...y) {
        const [E, L, S] = y;
        if (S && !ze(S)) throw rt(15);
        return X(E, L, Ue({
            resolvedMessage: !0
        }, S || {}))
    }
    function me(...y) {
        return ue(E => _s(E, ...y), () => _u(...y), "datetime format", E => E.d(...y), () => ps, E => U(E))
    }
    function Fe(...y) {
        return ue(E => $s(E, ...y), () => vu(...y), "number format", E => E.n(...y), () => ps, E => U(E))
    }
    function _e(y) {
        return y.map(E => U(E) ? De(Sr, null, E, 0) : E)
    }
    const Ce = {
        normalize: _e,
        interpolate: y => y,
        type: "vnode"
    };
    function Ve(...y) {
        return ue(E => {
            let L;
            const S = E;
            try {
                S.processor = Ce, L = Es(S, ...y)
            } finally {
                S.processor = null
            }
            return L
        }, () => Eu(...y), "translate", E => E[$u](...y), E => [De(Sr, null, E, 0)], E => Le(E))
    }
    function N(...y) {
        return ue(E => $s(E, ...y), () => vu(...y), "number format", E => E[wu](...y), () => [], E => U(E) || Le(E))
    }
    function Q(...y) {
        return ue(E => _s(E, ...y), () => _u(...y), "datetime format", E => E[bu](...y), () => [], E => U(E) || Le(E))
    }
    function Y(y) {
        w = y, v.pluralRules = w
    }
    function re(y, E) {
        const L = U(E) ? E : n.value,
            S = at(L);
        return hn(S, y) !== null
    }
    function ve(y) {
        let E = null;
        const L = Nr(v, o.value, n.value);
        for (let S = 0; S < L.length; S++) {
            const H = s.value[L[S]] || {},
                q = hn(H, y);
            if (q != null) {
                E = q;
                break
            }
        }
        return E
    }
    function $e(y) {
        const E = ve(y);
        return E != null ? E : t ? t.tm(y) || {} : {}
    }
    function at(y) {
        return s.value[y] || {}
    }
    function gt(y, E) {
        s.value[y] = E, v.messages = s.value
    }
    function g(y, E) {
        s.value[y] = s.value[y] || {}, mn(E, s.value[y]), v.messages = s.value
    }
    function F(y) {
        return i.value[y] || {}
    }
    function _(y, E) {
        i.value[y] = E, v.datetimeFormats = i.value, vs(v, y, E)
    }
    function b(y, E) {
        i.value[y] = Ue(i.value[y] || {}, E), v.datetimeFormats = i.value, vs(v, y, E)
    }
    function $(y) {
        return l.value[y] || {}
    }
    function T(y, E) {
        l.value[y] = E, v.numberFormats = l.value, bs(v, y, E)
    }
    function O(y, E) {
        l.value[y] = Ue(l.value[y] || {}, E), v.numberFormats = l.value, bs(v, y, E)
    }
    return ws++, t && (pt(t.locale, y => {
        u && (n.value = y, v.locale = y, Fr(v, n.value, o.value))
    }), pt(t.fallbackLocale, y => {
        u && (o.value = y, v.fallbackLocale = y, Fr(v, n.value, o.value))
    })), {
        id: ws,
        locale: x,
        fallbackLocale: k,
        get inheritLocale() {
            return u
        },
        set inheritLocale(y) {
            u = y, y && t && (n.value = t.locale.value, o.value = t.fallbackLocale.value, Fr(v, n.value, o.value))
        },
        get availableLocales() {
            return Object.keys(s.value)
                .sort()
        },
        messages: M,
        datetimeFormats: I,
        numberFormats: z,
        get modifiers() {
            return P
        },
        get pluralRules() {
            return w || {}
        },
        get isGlobal() {
            return r
        },
        get missingWarn() {
            return c
        },
        set missingWarn(y) {
            c = y, v.missingWarn = c
        },
        get fallbackWarn() {
            return a
        },
        set fallbackWarn(y) {
            a = y, v.fallbackWarn = a
        },
        get fallbackRoot() {
            return D
        },
        set fallbackRoot(y) {
            D = y
        },
        get fallbackFormat() {
            return f
        },
        set fallbackFormat(y) {
            f = y, v.fallbackFormat = f
        },
        get warnHtmlMessage() {
            return h
        },
        set warnHtmlMessage(y) {
            h = y, v.warnHtmlMessage = y
        },
        get escapeParameter() {
            return p
        },
        set escapeParameter(y) {
            p = y, v.escapeParameter = y
        },
        t: X,
        rt: oe,
        d: me,
        n: Fe,
        te: re,
        tm: $e,
        getLocaleMessage: at,
        setLocaleMessage: gt,
        mergeLocaleMessage: g,
        getDateTimeFormat: F,
        setDateTimeFormat: _,
        mergeDateTimeFormat: b,
        getNumberFormat: $,
        setNumberFormat: T,
        mergeNumberFormat: O,
        getPostTranslationHandler: A,
        setPostTranslationHandler: R,
        getMissingHandler: W,
        setMissingHandler: ge,
        [$u]: Ve,
        [wu]: N,
        [bu]: Q,
        [Z2]: Y
    }
}
const oo = {
        tag: {
            type: [String, Object]
        },
        locale: {
            type: String
        },
        scope: {
            type: String,
            validator: e => e === "parent" || e === "global",
            default: "parent"
        },
        i18n: {
            type: Object
        }
    },
    As = {
        name: "i18n-t",
        props: Ue({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => Pe(e) || !isNaN(e)
            }
        }, oo),
        setup(e, t) {
            const {
                slots: r,
                attrs: u
            } = t, n = e.i18n || Ln({
                    useScope: e.scope
                }), o = Object.keys(r)
                .filter(s => s !== "_");
            return () => {
                const s = {};
                e.locale && (s.locale = e.locale), e.plural !== void 0 && (s.plural = U(e.plural) ? +e.plural : e.plural);
                const i = Y2(t, o),
                    l = n[$u](e.keypath, i, s),
                    c = Ue({}, u);
                return U(e.tag) || ze(e.tag) ? kt(e.tag, c, l) : kt(Ne, c, l)
            }
        }
    };
function Y2({
    slots: e
}, t) {
    return t.length === 1 && t[0] === "default" ? e.default ? e.default() : [] : t.reduce((r, u) => {
        const n = e[u];
        return n && (r[u] = n()), r
    }, {})
}
function Tl(e, t, r, u) {
    const {
        slots: n,
        attrs: o
    } = t;
    return () => {
        const s = {
            part: !0
        };
        let i = {};
        e.locale && (s.locale = e.locale), U(e.format) ? s.key = e.format : ze(e.format) && (U(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format)
            .reduce((D, f) => r.includes(f) ? Ue({}, D, {
                [f]: e.format[f]
            }) : D, {}));
        const l = u(e.value, s, i);
        let c = [s.key];
        Le(l) ? c = l.map((D, f) => {
            const d = n[D.type];
            return d ? d({
                [D.type]: D.value,
                index: f,
                parts: l
            }) : [D.value]
        }) : U(l) && (c = [l]);
        const a = Ue({}, o);
        return U(e.tag) || ze(e.tag) ? kt(e.tag, a, c) : kt(Ne, a, c)
    }
}
const ed = ["localeMatcher", "style", "unit", "unitDisplay", "currency", "currencyDisplay", "useGrouping", "numberingSystem", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "notation", "formatMatcher"],
    Bs = {
        name: "i18n-n",
        props: Ue({
            value: {
                type: Number,
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, oo),
        setup(e, t) {
            const r = e.i18n || Ln({
                useScope: "parent"
            });
            return Tl(e, t, ed, (...u) => r[wu](...u))
        }
    },
    td = ["dateStyle", "timeStyle", "fractionalSecondDigits", "calendar", "dayPeriod", "numberingSystem", "localeMatcher", "timeZone", "hour12", "hourCycle", "formatMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"],
    Ts = {
        name: "i18n-d",
        props: Ue({
            value: {
                type: [Number, Date],
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, oo),
        setup(e, t) {
            const r = e.i18n || Ln({
                useScope: "parent"
            });
            return Tl(e, t, td, (...u) => r[bu](...u))
        }
    };
function rd(e, t) {
    const r = e;
    if (e.mode === "composition") return r.__getInstance(t) || e.global; {
        const u = r.__getInstance(t);
        return u != null ? u.__composer : e.global.__composer
    }
}
function nd(e) {
    const t = (r, {
        instance: u,
        value: n,
        modifiers: o
    }) => {
        if (!u || !u.$) throw rt(22);
        const s = rd(e, u.$),
            i = ud(n);
        r.textContent = s.t(...od(i))
    };
    return {
        beforeMount: t,
        beforeUpdate: t
    }
}
function ud(e) {
    if (U(e)) return {
        path: e
    };
    if (ie(e)) {
        if (!("path" in e)) throw rt(19, "path");
        return e
    } else throw rt(20)
}
function od(e) {
    const {
        path: t,
        locale: r,
        args: u,
        choice: n,
        plural: o
    } = e, s = {}, i = u || {};
    return U(r) && (s.locale = r), Pe(n) && (s.plural = n), Pe(o) && (s.plural = o), [t, i, s]
}
function sd(e, t, ...r) {
    const u = ie(r[0]) ? r[0] : {},
        n = !!u.useI18nComponentName;
    (be(u.globalInstall) ? u.globalInstall : !0) && (e.component(n ? "i18n" : As.name, As), e.component(Bs.name, Bs), e.component(Ts.name, Ts)), e.directive("t", nd(t))
}
function id(e = {}) {
    const t = !!e.globalInjection,
        r = new Map,
        u = Bl(e),
        n = Mt(""),
        o = {
            get mode() {
                return "composition"
            },
            async install(s, ...i) {
                s.__VUE_I18N_SYMBOL__ = n, s.provide(s.__VUE_I18N_SYMBOL__, o), t && Dd(s, o.global), sd(s, o, ...i)
            },
            get global() {
                return u
            },
            __instances: r,
            __getInstance(s) {
                return r.get(s) || null
            },
            __setInstance(s, i) {
                r.set(s, i)
            },
            __deleteInstance(s) {
                r.delete(s)
            }
        };
    return o
}
function Ln(e = {}) {
    const t = St();
    if (t == null) throw rt(16);
    if (!t.appContext.app.__VUE_I18N_SYMBOL__) throw rt(17);
    const r = wr(t.appContext.app.__VUE_I18N_SYMBOL__);
    if (!r) throw rt(22);
    const u = r.mode === "composition" ? r.global : r.global.__composer,
        n = On(e) ? "__i18n" in t.type ? "local" : "global" : e.useScope ? e.useScope : "local";
    if (n === "global") {
        let i = ze(e.messages) ? e.messages : {};
        "__i18nGlobal" in t.type && (i = Al(u.locale.value, {
            messages: i,
            __i18n: t.type.__i18nGlobal
        }));
        const l = Object.keys(i);
        if (l.length && l.forEach(c => {
                u.mergeLocaleMessage(c, i[c])
            }), ze(e.datetimeFormats)) {
            const c = Object.keys(e.datetimeFormats);
            c.length && c.forEach(a => {
                u.mergeDateTimeFormat(a, e.datetimeFormats[a])
            })
        }
        if (ze(e.numberFormats)) {
            const c = Object.keys(e.numberFormats);
            c.length && c.forEach(a => {
                u.mergeNumberFormat(a, e.numberFormats[a])
            })
        }
        return u
    }
    if (n === "parent") {
        let i = ld(r, t);
        return i == null && (i = u), i
    }
    if (r.mode === "legacy") throw rt(18);
    const o = r;
    let s = o.__getInstance(t);
    if (s == null) {
        const i = t.type,
            l = Ue({}, e);
        i.__i18n && (l.__i18n = i.__i18n), u && (l.__root = u), s = Bl(l), ad(o, t), o.__setInstance(t, s)
    }
    return s
}
function ld(e, t) {
    let r = null;
    const u = t.root;
    let n = t.parent;
    for (; n != null;) {
        const o = e;
        if (e.mode === "composition") r = o.__getInstance(n);
        else {
            const s = o.__getInstance(n);
            s != null && (r = s.__composer)
        }
        if (r != null || u === n) break;
        n = n.parent
    }
    return r
}
function ad(e, t, r) {
    Jt(() => {}, t), An(() => {
        e.__deleteInstance(t)
    }, t)
}
const cd = ["locale", "fallbackLocale", "availableLocales"],
    fd = ["t", "rt", "d", "n", "tm"];
function Dd(e, t) {
    const r = Object.create(null);
    cd.forEach(u => {
        const n = Object.getOwnPropertyDescriptor(t, u);
        if (!n) throw rt(22);
        const o = ye(n.value) ? {
            get() {
                return n.value.value
            },
            set(s) {
                n.value.value = s
            }
        } : {
            get() {
                return n.get && n.get()
            }
        };
        Object.defineProperty(r, u, o)
    }), e.config.globalProperties.$i18n = r, fd.forEach(u => {
        const n = Object.getOwnPropertyDescriptor(t, u);
        if (!n || !n.value) throw rt(22);
        Object.defineProperty(e.config.globalProperties, `$${u}`, n)
    })
}
J2();
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = ro();
    e.__INTLIFY__ = !0, S2(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
function dd(e, t, r, u) {
    function n(o) {
        return o instanceof r ? o : new r(function(s) {
            s(o)
        })
    }
    return new(r || (r = Promise))(function(o, s) {
        function i(a) {
            try {
                c(u.next(a))
            } catch (D) {
                s(D)
            }
        }
        function l(a) {
            try {
                c(u.throw(a))
            } catch (D) {
                s(D)
            }
        }
        function c(a) {
            a.done ? o(a.value) : n(a.value)
                .then(i, l)
        }
        c((u = u.apply(e, t || []))
            .next())
    })
}
function hd(e) {
    return dd(this, void 0, void 0, function*() {
        const t = {
                [e.type]: e
            },
            r = new ClipboardItem(t);
        yield navigator.clipboard.write([r])
    })
}
var kl = {
    exports: {}
};
(function(e) {
    (function(t) {
        var r = w(),
            u = v(),
            n = V(),
            o = te(),
            s = {
                imagePlaceholder: void 0,
                cacheBust: !1
            },
            i = {
                toSvg: l,
                toPng: a,
                toJpeg: D,
                toBlob: f,
                toPixelData: c,
                impl: {
                    fontFaces: n,
                    images: o,
                    util: r,
                    inliner: u,
                    options: {}
                }
            };
        e.exports = i;
        function l(x, k) {
            return k = k || {}, d(k), Promise.resolve(x)
                .then(function(I) {
                    return m(I, k.filter, !0)
                })
                .then(h)
                .then(p)
                .then(M)
                .then(function(I) {
                    return P(I, k.width || r.width(x), k.height || r.height(x))
                });
            function M(I) {
                return k.bgcolor && (I.style.backgroundColor = k.bgcolor), k.width && (I.style.width = k.width + "px"), k.height && (I.style.height = k.height + "px"), k.style && Object.keys(k.style)
                    .forEach(function(z) {
                        I.style[z] = k.style[z]
                    }), I
            }
        }
        function c(x, k) {
            return C(x, k || {})
                .then(function(M) {
                    return M.getContext("2d")
                        .getImageData(0, 0, r.width(x), r.height(x))
                        .data
                })
        }
        function a(x, k) {
            return C(x, k || {})
                .then(function(M) {
                    return M.toDataURL()
                })
        }
        function D(x, k) {
            return k = k || {}, C(x, k)
                .then(function(M) {
                    return M.toDataURL("image/jpeg", k.quality || 1)
                })
        }
        function f(x, k) {
            return C(x, k || {})
                .then(r.canvasToBlob)
        }
        function d(x) {
            typeof x.imagePlaceholder == "undefined" ? i.impl.options.imagePlaceholder = s.imagePlaceholder : i.impl.options.imagePlaceholder = x.imagePlaceholder, typeof x.cacheBust == "undefined" ? i.impl.options.cacheBust = s.cacheBust : i.impl.options.cacheBust = x.cacheBust
        }
        function C(x, k) {
            return l(x, k)
                .then(r.makeImage)
                .then(r.delay(100))
                .then(function(I) {
                    var z = M(x);
                    return z.getContext("2d")
                        .drawImage(I, 0, 0), z
                });
            function M(I) {
                var z = document.createElement("canvas");
                if (z.width = k.width || r.width(I), z.height = k.height || r.height(I), k.bgcolor) {
                    var A = z.getContext("2d");
                    A.fillStyle = k.bgcolor, A.fillRect(0, 0, z.width, z.height)
                }
                return z
            }
        }
        function m(x, k, M) {
            if (!M && k && !k(x)) return Promise.resolve();
            return Promise.resolve(x)
                .then(I)
                .then(function(R) {
                    return z(x, R, k)
                })
                .then(function(R) {
                    return A(x, R)
                });
            function I(R) {
                return R instanceof HTMLCanvasElement ? r.makeImage(R.toDataURL()) : R.cloneNode(!1)
            }
            function z(R, W, ge) {
                var ue = R.childNodes;
                if (ue.length === 0) return Promise.resolve(W);
                return X(W, r.asArray(ue), ge)
                    .then(function() {
                        return W
                    });
                function X(oe, me, Fe) {
                    var _e = Promise.resolve();
                    return me.forEach(function(Se) {
                        _e = _e.then(function() {
                                return m(Se, Fe)
                            })
                            .then(function(Ce) {
                                Ce && oe.appendChild(Ce)
                            })
                    }), _e
                }
            }
            function A(R, W) {
                if (!(W instanceof Element)) return W;
                return Promise.resolve()
                    .then(ge)
                    .then(ue)
                    .then(X)
                    .then(oe)
                    .then(function() {
                        return W
                    });
                function ge() {
                    me(window.getComputedStyle(R), W.style);
                    function me(Fe, _e) {
                        Fe.cssText ? _e.cssText = Fe.cssText : Se(Fe, _e);
                        function Se(Ce, Ve) {
                            r.asArray(Ce)
                                .forEach(function(N) {
                                    Ve.setProperty(N, Ce.getPropertyValue(N), Ce.getPropertyPriority(N))
                                })
                        }
                    }
                }
                function ue() {
                    [":before", ":after"].forEach(function(Fe) {
                        me(Fe)
                    });
                    function me(Fe) {
                        var _e = window.getComputedStyle(R, Fe),
                            Se = _e.getPropertyValue("content");
                        if (Se === "" || Se === "none") return;
                        var Ce = r.uid();
                        W.className = W.className + " " + Ce;
                        var Ve = document.createElement("style");
                        Ve.appendChild(N(Ce, Fe, _e)), W.appendChild(Ve);
                        function N(Q, Y, re) {
                            var ve = "." + Q + ":" + Y,
                                $e = re.cssText ? at(re) : gt(re);
                            return document.createTextNode(ve + "{" + $e + "}");
                            function at(g) {
                                var F = g.getPropertyValue("content");
                                return g.cssText + " content: " + F + ";"
                            }
                            function gt(g) {
                                return r.asArray(g)
                                    .map(F)
                                    .join("; ") + ";";
                                function F(_) {
                                    return _ + ": " + g.getPropertyValue(_) + (g.getPropertyPriority(_) ? " !important" : "")
                                }
                            }
                        }
                    }
                }
                function X() {
                    R instanceof HTMLTextAreaElement && (W.innerHTML = R.value), R instanceof HTMLInputElement && W.setAttribute("value", R.value)
                }
                function oe() {
                    W instanceof SVGElement && (W.setAttribute("xmlns", "http://www.w3.org/2000/svg"), W instanceof SVGRectElement && ["width", "height"].forEach(function(me) {
                        var Fe = W.getAttribute(me);
                        !Fe || W.style.setProperty(me, Fe)
                    }))
                }
            }
        }
        function h(x) {
            return n.resolveAll()
                .then(function(k) {
                    var M = document.createElement("style");
                    return x.appendChild(M), M.appendChild(document.createTextNode(k)), x
                })
        }
        function p(x) {
            return o.inlineAll(x)
                .then(function() {
                    return x
                })
        }
        function P(x, k, M) {
            return Promise.resolve(x)
                .then(function(I) {
                    return I.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), new XMLSerializer()
                        .serializeToString(I)
                })
                .then(r.escapeXhtml)
                .then(function(I) {
                    return '<foreignObject x="0" y="0" width="100%" height="100%">' + I + "</foreignObject>"
                })
                .then(function(I) {
                    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + k + '" height="' + M + '">' + I + "</svg>"
                })
                .then(function(I) {
                    return "data:image/svg+xml;charset=utf-8," + I
                })
        }
        function w() {
            return {
                escape: oe,
                parseExtension: k,
                mimeType: M,
                dataAsUrl: X,
                isDataUrl: I,
                canvasToBlob: A,
                resolveUrl: R,
                getAndEncode: ue,
                uid: W(),
                delay: me,
                asArray: Fe,
                escapeXhtml: _e,
                makeImage: ge,
                width: Se,
                height: Ce
            };
            function x() {
                var N = "application/font-woff",
                    Q = "image/jpeg";
                return {
                    woff: N,
                    woff2: N,
                    ttf: "application/font-truetype",
                    eot: "application/vnd.ms-fontobject",
                    png: "image/png",
                    jpg: Q,
                    jpeg: Q,
                    gif: "image/gif",
                    tiff: "image/tiff",
                    svg: "image/svg+xml"
                }
            }
            function k(N) {
                var Q = /\.([^\.\/]*?)$/g.exec(N);
                return Q ? Q[1] : ""
            }
            function M(N) {
                var Q = k(N)
                    .toLowerCase();
                return x()[Q] || ""
            }
            function I(N) {
                return N.search(/^(data:)/) !== -1
            }
            function z(N) {
                return new Promise(function(Q) {
                    for (var Y = window.atob(N.toDataURL()
                            .split(",")[1]), re = Y.length, ve = new Uint8Array(re), $e = 0; $e < re; $e++) ve[$e] = Y.charCodeAt($e);
                    Q(new Blob([ve], {
                        type: "image/png"
                    }))
                })
            }
            function A(N) {
                return N.toBlob ? new Promise(function(Q) {
                    N.toBlob(Q)
                }) : z(N)
            }
            function R(N, Q) {
                var Y = document.implementation.createHTMLDocument(),
                    re = Y.createElement("base");
                Y.head.appendChild(re);
                var ve = Y.createElement("a");
                return Y.body.appendChild(ve), re.href = Q, ve.href = N, ve.href
            }
            function W() {
                var N = 0;
                return function() {
                    return "u" + Q() + N++;
                    function Q() {
                        return ("0000" + (Math.random() * Math.pow(36, 4) << 0)
                                .toString(36))
                            .slice(-4)
                    }
                }
            }
            function ge(N) {
                return new Promise(function(Q, Y) {
                    var re = new Image;
                    re.onload = function() {
                        Q(re)
                    }, re.onerror = Y, re.src = N
                })
            }
            function ue(N) {
                var Q = 3e4;
                return i.impl.options.cacheBust && (N += (/\?/.test(N) ? "&" : "?") + new Date()
                    .getTime()), new Promise(function(Y) {
                    var re = new XMLHttpRequest;
                    re.onreadystatechange = at, re.ontimeout = gt, re.responseType = "blob", re.timeout = Q, re.open("GET", N, !0), re.send();
                    var ve;
                    if (i.impl.options.imagePlaceholder) {
                        var $e = i.impl.options.imagePlaceholder.split(/,/);
                        $e && $e[1] && (ve = $e[1])
                    }
                    function at() {
                        if (re.readyState === 4) {
                            if (re.status !== 200) {
                                ve ? Y(ve) : g("cannot fetch resource: " + N + ", status: " + re.status);
                                return
                            }
                            var F = new FileReader;
                            F.onloadend = function() {
                                var _ = F.result.split(/,/)[1];
                                Y(_)
                            }, F.readAsDataURL(re.response)
                        }
                    }
                    function gt() {
                        ve ? Y(ve) : g("timeout of " + Q + "ms occured while fetching resource: " + N)
                    }
                    function g(F) {
                        console.error(F), Y("")
                    }
                })
            }
            function X(N, Q) {
                return "data:" + Q + ";base64," + N
            }
            function oe(N) {
                return N.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")
            }
            function me(N) {
                return function(Q) {
                    return new Promise(function(Y) {
                        setTimeout(function() {
                            Y(Q)
                        }, N)
                    })
                }
            }
            function Fe(N) {
                for (var Q = [], Y = N.length, re = 0; re < Y; re++) Q.push(N[re]);
                return Q
            }
            function _e(N) {
                return N.replace(/#/g, "%23")
                    .replace(/\n/g, "%0A")
            }
            function Se(N) {
                var Q = Ve(N, "border-left-width"),
                    Y = Ve(N, "border-right-width");
                return N.scrollWidth + Q + Y
            }
            function Ce(N) {
                var Q = Ve(N, "border-top-width"),
                    Y = Ve(N, "border-bottom-width");
                return N.scrollHeight + Q + Y
            }
            function Ve(N, Q) {
                var Y = window.getComputedStyle(N)
                    .getPropertyValue(Q);
                return parseFloat(Y.replace("px", ""))
            }
        }
        function v() {
            var x = /url\(['"]?([^'"]+?)['"]?\)/g;
            return {
                inlineAll: z,
                shouldProcess: k,
                impl: {
                    readUrls: M,
                    inline: I
                }
            };
            function k(A) {
                return A.search(x) !== -1
            }
            function M(A) {
                for (var R = [], W;
                    (W = x.exec(A)) !== null;) R.push(W[1]);
                return R.filter(function(ge) {
                    return !r.isDataUrl(ge)
                })
            }
            function I(A, R, W, ge) {
                return Promise.resolve(R)
                    .then(function(X) {
                        return W ? r.resolveUrl(X, W) : X
                    })
                    .then(ge || r.getAndEncode)
                    .then(function(X) {
                        return r.dataAsUrl(X, r.mimeType(R))
                    })
                    .then(function(X) {
                        return A.replace(ue(R), "$1" + X + "$3")
                    });
                function ue(X) {
                    return new RegExp(`(url\\(['"]?)(` + r.escape(X) + `)(['"]?\\))`, "g")
                }
            }
            function z(A, R, W) {
                if (ge()) return Promise.resolve(A);
                return Promise.resolve(A)
                    .then(M)
                    .then(function(ue) {
                        var X = Promise.resolve(A);
                        return ue.forEach(function(oe) {
                            X = X.then(function(me) {
                                return I(me, oe, R, W)
                            })
                        }), X
                    });
                function ge() {
                    return !k(A)
                }
            }
        }
        function V() {
            return {
                resolveAll: x,
                impl: {
                    readAll: k
                }
            };
            function x() {
                return k()
                    .then(function(M) {
                        return Promise.all(M.map(function(I) {
                            return I.resolve()
                        }))
                    })
                    .then(function(M) {
                        return M.join(`
`)
                    })
            }
            function k() {
                return Promise.resolve(r.asArray(document.styleSheets))
                    .then(I)
                    .then(M)
                    .then(function(A) {
                        return A.map(z)
                    });
                function M(A) {
                    return A.filter(function(R) {
                            return R.type === CSSRule.FONT_FACE_RULE
                        })
                        .filter(function(R) {
                            return u.shouldProcess(R.style.getPropertyValue("src"))
                        })
                }
                function I(A) {
                    var R = [];
                    return A.forEach(function(W) {
                        try {
                            r.asArray(W.cssRules || [])
                                .forEach(R.push.bind(R))
                        } catch (ge) {
                            console.log("Error while reading CSS rules from " + W.href, ge.toString())
                        }
                    }), R
                }
                function z(A) {
                    return {
                        resolve: function() {
                            var W = (A.parentStyleSheet || {})
                                .href;
                            return u.inlineAll(A.cssText, W)
                        },
                        src: function() {
                            return A.style.getPropertyValue("src")
                        }
                    }
                }
            }
        }
        function te() {
            return {
                inlineAll: k,
                impl: {
                    newImage: x
                }
            };
            function x(M) {
                return {
                    inline: I
                };
                function I(z) {
                    return r.isDataUrl(M.src) ? Promise.resolve() : Promise.resolve(M.src)
                        .then(z || r.getAndEncode)
                        .then(function(A) {
                            return r.dataAsUrl(A, r.mimeType(M.src))
                        })
                        .then(function(A) {
                            return new Promise(function(R, W) {
                                M.onload = R, M.onerror = W, M.src = A
                            })
                        })
                }
            }
            function k(M) {
                if (!(M instanceof Element)) return Promise.resolve(M);
                return I(M)
                    .then(function() {
                        return M instanceof HTMLImageElement ? x(M)
                            .inline() : Promise.all(r.asArray(M.childNodes)
                                .map(function(z) {
                                    return k(z)
                                }))
                    });
                function I(z) {
                    var A = z.style.getPropertyValue("background");
                    return A ? u.inlineAll(A)
                        .then(function(R) {
                            z.style.setProperty("background", R, z.style.getPropertyPriority("background"))
                        })
                        .then(function() {
                            return z
                        }) : Promise.resolve(z)
                }
            }
        }
    })()
})(kl);
var md = kl.exports;
const pd = async e => {
    const r = Me(),
        u = {
            quality: 1,
            height: e.offsetHeight * 2,
            width: e.offsetWidth * 2,
            style: {
                transform: `scale(${2}) translate(${e.offsetWidth/2/2}px, ${e.offsetHeight/2/2}px)`
            },
            cacheBust: !0
        };
    try {
        r.value = await md.toBlob(e, u)
    } catch (n) {
        console.error("oops, something went wrong!", n)
    }
    return {
        imageBlob: r
    }
}, gd = {
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 20 20",
    width: "1.2em",
    height: "1.2em"
}, Cd = j("g", {
    fill: "none"
}, [j("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10L4.293 5.707a1 1 0 0 1 0-1.414z",
    fill: "currentColor"
})], -1), Fd = [Cd];
function yd(e, t) {
    return G(), fe("svg", gd, Fd)
}
var Ed = {
    name: "heroicons-solid-x",
    render: yd
};
const _d = {
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em"
    },
    vd = j("g", {
        fill: "none"
    }, [j("path", {
        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1),
    $d = [vd];
function bd(e, t) {
    return G(), fe("svg", _d, $d)
}
var wd = {
    name: "heroicons-outline-information-circle",
    render: bd
};
const xd = {
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em"
    },
    Ad = j("g", {
        fill: "none"
    }, [j("path", {
        d: "M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1),
    Bd = [Ad];
function Td(e, t) {
    return G(), fe("svg", xd, Bd)
}
var kd = {
    name: "heroicons-outline-exclamation-circle",
    render: Td
};
const Pd = {
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em"
    },
    Sd = j("g", {
        fill: "none"
    }, [j("path", {
        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1),
    Od = [Sd];
function Md(e, t) {
    return G(), fe("svg", Pd, Od)
}
var Ld = {
    name: "heroicons-outline-exclamation",
    render: Md
};
const Rd = {
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em"
    },
    Id = j("g", {
        fill: "none"
    }, [j("path", {
        d: "M9 12l2 2l4-4m6 2a9 9 0 1 1-18 0a9 9 0 0 1 18 0z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1),
    Nd = [Id];
function Hd(e, t) {
    return G(), fe("svg", Rd, Nd)
}
var jd = {
    name: "heroicons-outline-check-circle",
    render: Hd
};
const Ud = {
        class: "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
    },
    zd = {
        class: "p-4"
    },
    Vd = {
        class: "flex items-start"
    },
    qd = {
        class: "flex-shrink-0"
    },
    Wd = {
        class: "ml-3 w-0 flex-1 pt-0.5"
    },
    Kd = {
        class: "text-sm font-medium text-gray-900 whitespace-pre-wrap"
    },
    Xd = {
        class: "mt-1 text-sm text-gray-500 whitespace-pre-wrap"
    },
    Gd = {
        class: "ml-4 flex-shrink-0 flex"
    },
    Jd = ["onClick"],
    Zd = j("span", {
        class: "sr-only"
    }, "Close", -1),
    Qd = Gt({
        props: {
            notifyList: null,
            placement: {
                default: "CENTER"
            }
        },
        emits: ["close"],
        setup(e) {
            const t = e,
                r = new Map([
                    ["TOP_LEFT", "flex flex-col-reverse items-start justify-center sm:justify-end"],
                    ["TOP", "flex flex-col items-center justify-start"],
                    ["TOP_RIGHT", "flex flex-col-reverse items-end justify-center sm:justify-end"],
                    ["BOTTOM_LEFT", "flex flex-col space-y-2 items-start justify-center sm:justify-end"],
                    ["BOTTOM", "flex flex-col-reverse space-y-2 items-center justify-start"],
                    ["BOTTOM_RIGHT", "flex flex-col space-y-2 items-end justify-center sm:justify-end"],
                    ["CENTER", "flex flex-col space-y-2 items-center justify-center sm:justify-center"]
                ]),
                u = Qe(() => r.get(t.placement));
            return (n, o) => {
                const s = jd,
                    i = Ld,
                    l = kd,
                    c = wd,
                    a = Ed;
                return G(), fe("div", {
                    class: Ie(["fixed inset-0 px-4 py-6 pointer-events-none sm:p-6 z-50", ne(u)])
                }, [(G(!0), fe(Ne, null, bc(e.notifyList.slice()
                    .reverse(), (D, f) => (G(), He(Ju, {
                        key: f,
                        "enter-active-class": "transform ease-out duration-300 transition",
                        "enter-from-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
                        "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
                        "leave-active-class": "transition ease-in duration-100",
                        "leave-from-class": "opacity-100",
                        "leave-to-class": "opacity-0"
                    }, {
                        default: zu(() => [j("div", Ud, [j("div", zd, [j("div", Vd, [j("div", qd, [D.style == "SUCCESS" ? (G(), He(s, {
                            key: 0,
                            class: "h-6 w-6 text-green-500"
                        })) : D.style == "WARN" ? (G(), He(i, {
                            key: 1,
                            class: "h-6 w-6 text-yellow-600"
                        })) : D.style == "CRITICAL" ? (G(), He(l, {
                            key: 2,
                            class: "h-6 w-6 text-red-600"
                        })) : (G(), He(c, {
                            key: 3,
                            class: "w-6 h-6 text-blue-600"
                        }))]), j("div", Wd, [j("p", Kd, vr(D.title), 1), j("p", Xd, vr(D.description), 1)]), j("div", Gd, [j("button", {
                            class: "bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none",
                            onClick: cf(d => n.$emit("close", D), ["prevent"])
                        }, [Zd, De(a, {
                            class: "h-5 w-5"
                        })], 8, Jd)])])])])]),
                        _: 2
                    }, 1024))), 128))], 2)
            }
        }
    }),
    Yd = {
        class: "relative"
    },
    eh = j("header", {
        class: "absolute top-6 left-0 z-10 flex justify-center w-full"
    }, [j("img", {
        src: a2,
        alt: "logo",
        class: "w-64"
    })], -1),
    th = ["title"],
    rh = ["title"],
    nh = ["title"],
    uh = ["title"],
    oh = Gt({
        setup(e) {
            const {
                t
            } = Ln(), r = pr({
                currentUrl: "",
                isHorizontal: !1,
                showQRCode: !0,
                notifyList: [],
                isCopying: !1,
                gradientColor: ""
            }), u = () => {
                const c = fs(["tl", "tr", "bl", "br"]);
                return fs([{
                    name: "OCEANIC",
                    class: `bg-gradient-to-${c} from-green-300 via-blue-500 to-purple-600`
                }, {
                    name: "HYPER",
                    class: `bg-gradient-to-${c} from-pink-500 via-red-500 to-yellow-500`
                }, {
                    name: "COTTON CANDY",
                    class: `bg-gradient-to-${c} from-pink-300 via-purple-300 to-indigo-400`
                }, {
                    name: "SUNSET",
                    class: `bg-gradient-to-${c} from-indigo-200 via-red-200 to-yellow-100`
                }, {
                    name: "PEACHY",
                    class: `bg-gradient-to-${c} from-red-200 via-red-300 to-yellow-200`
                }, {
                    name: "POWERPUFF",
                    class: `bg-gradient-to-${c} from-sky-400 via-rose-400 to-lime-400`
                }, {
                    name: "GOTHAM",
                    class: `bg-gradient-to-${c} from-gray-700 via-gray-900 to-black`
                }, {
                    name: "SPACE",
                    class: `bg-gradient-to-${c} from-gray-900 to-gray-600`
                }, {
                    name: "GUNMETAL",
                    class: `bg-gradient-to-${c} from-gray-200 via-gray-400 to-gray-600`
                }, {
                    name: "MIDNIGHT",
                    class: `bg-gradient-to-${c} from-blue-700 via-blue-800 to-gray-900`
                }, {
                    name: "MESSENGER",
                    class: `bg-gradient-to-${c} from-sky-400 to-blue-500`
                }, {
                    name: "SEA",
                    class: `bg-gradient-to-${c} from-teal-200 to-lime-200`
                }])
            }, n = () => {
                r.isHorizontal = !r.isHorizontal
            }, o = () => {
                r.showQRCode = !r.showQRCode
            }, s = l => {
                const c = r.notifyList.indexOf(l);
                c >= 0 && r.notifyList.splice(c, 1)
            }, i = async () => {
                r.isCopying = !0;
                const l = document.getElementById("bookmark");
                let c = null;
                try {
                    const {
                        imageBlob: a
                    } = await pd(l), D = {
                        style: "SUCCESS",
                        title: t("popup.notify_image_copied")
                    };
                    return r.notifyList.push(D), c && clearTimeout(c), c = setTimeout(() => {
                        s(D)
                    }, 3333), r.isCopying = !1, hd(a.value)
                } catch (a) {
                    r.isCopying = !1, console.log(a)
                }
            };
            return chrome.tabs.query({
                active: !0,
                currentWindow: !0
            }, l => {
                const c = l[0];
                r.currentUrl = c.url, Ki.value = r.currentUrl
            }), Jt(() => {
                const l = u();
                r.gradientColor = l.class
            }), (l, c) => {
                const a = l2,
                    D = u0,
                    f = YD,
                    d = XD,
                    C = zD,
                    m = ID,
                    h = kD,
                    p = $D;
                return G(), fe("div", Yd, [eh, j("main", {
                    class: Ie(["min-h-[36rem] grid place-content-center px-6 py-4 transform-gpu transition-all duration-200 ease-linear bg-gradient-to-br from-slate-700 via-sky-900 to-slate-900", [{
                            column: ne(r)
                                .isHorizontal
                        }, ne(r)
                        .isHorizontal ? "min-w-screen-md" : "min-w-screen-sm"
                    ]])
                }, [j("div", {
                        id: "bookmark",
                        class: Ie(["overflow-hidden bg-black shadow-xl relative transform-gpu transition-all duration-200 ease-linear rounded-lg pointer-events-none", ne(r)
                            .gradientColor
                        ])
                    }, [ne(r)
                        .currentUrl ? (G(), He(a, {
                            key: 0,
                            url: ne(r)
                                .currentUrl,
                            horizontal: ne(r)
                                .isHorizontal,
                            qrcode: ne(r)
                                .showQRCode
                        }, null, 8, ["url", "horizontal", "qrcode"])) : Ar("", !0)
                    ], 2), De(p, {
                        class: "fixed bottom-6 left-0 flex justify-center w-full"
                    }, {
                        default: zu(() => [j("a", {
                                class: "btn-icon",
                                title: l.$t("button.toggle_layout"),
                                onClick: n
                            }, [ne(r)
                                .isHorizontal ? (G(), He(D, {
                                    key: 0
                                })) : (G(), He(f, {
                                    key: 1
                                }))
                            ], 8, th), j("a", {
                                class: "btn-icon",
                                title: l.$t("button.show_qrcode"),
                                onClick: o
                            }, [ne(r)
                                .showQRCode ? (G(), He(d, {
                                    key: 0
                                })) : (G(), He(C, {
                                    key: 1
                                }))
                            ], 8, rh), ne(r)
                            .isCopying ? (G(), fe("a", {
                                key: 1,
                                class: "btn-icon text-sm",
                                title: l.$t("button.close")
                            }, [De(h, {
                                class: "w-6 h-6"
                            })], 8, uh)) : (G(), fe("a", {
                                key: 0,
                                class: "btn-icon",
                                title: l.$t("button.copy_image"),
                                onClick: i
                            }, [De(m)], 8, nh))
                        ]),
                        _: 1
                    }), ne(r)
                    .notifyList.length > 0 ? (G(), He(Qd, {
                        key: 0,
                        placement: "CENTER",
                        "notify-list": ne(r)
                            .notifyList,
                        onClose: s
                    }, null, 8, ["notify-list"])) : Ar("", !0)
                ], 2)])
            }
        }
    });
var sh = {
        common: {
            extension_name: e => {
                const {
                    normalize: t
                } = e;
                return t(["Vitesse Chrome Extensionbutton"])
            }
        },
        button: {
            toggle_dark: e => {
                const {
                    normalize: t
                } = e;
                return t(["Toggle dark mode"])
            },
            toggle_langs: e => {
                const {
                    normalize: t
                } = e;
                return t(["Change languages"])
            },
            toggle_layout: e => {
                const {
                    normalize: t
                } = e;
                return t(["Toggle Bookmark Layout"])
            },
            show_qrcode: e => {
                const {
                    normalize: t
                } = e;
                return t(["Toggle show QRCode in web bookmark!"])
            },
            copy_image: e => {
                const {
                    normalize: t
                } = e;
                return t(["Copy Image to Clipboard!"])
            }
        },
        popup: {
            desc: e => {
                const {
                    normalize: t
                } = e;
                return t(["This is the popup page"])
            },
            open_options: e => {
                const {
                    normalize: t
                } = e;
                return t(["Open Options"])
            },
            storage: e => {
                const {
                    normalize: t
                } = e;
                return t(["Storage"])
            },
            notify_image_copied: e => {
                const {
                    normalize: t
                } = e;
                return t(["Image copied to clipboard!"])
            }
        },
        options: {
            desc: e => {
                const {
                    normalize: t
                } = e;
                return t(["This is the options page"])
            },
            sync_storage: e => {
                const {
                    normalize: t
                } = e;
                return t(["Sync Storage Message"])
            },
            powered_by_vite: e => {
                const {
                    normalize: t
                } = e;
                return t(["Powered By Vite"])
            }
        }
    },
    ih = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: sh
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    lh = {
        common: {
            extension_name: e => {
                const {
                    normalize: t
                } = e;
                return t(["Vitesse Chrome Extensionbutton"])
            }
        },
        button: {
            toggle_dark: e => {
                const {
                    normalize: t
                } = e;
                return t(["??????????????????"])
            },
            toggle_langs: e => {
                const {
                    normalize: t
                } = e;
                return t(["????????????"])
            },
            toggle_layout: e => {
                const {
                    normalize: t
                } = e;
                return t(["??????????????????"])
            },
            show_qrcode: e => {
                const {
                    normalize: t
                } = e;
                return t(["?????????????????????"])
            },
            copy_image: e => {
                const {
                    normalize: t
                } = e;
                return t(["???????????????????????????"])
            }
        },
        popup: {
            desc: e => {
                const {
                    normalize: t
                } = e;
                return t(["????????????"])
            },
            open_options: e => {
                const {
                    normalize: t
                } = e;
                return t(["??????????????????"])
            },
            storage: e => {
                const {
                    normalize: t
                } = e;
                return t(["????????????"])
            },
            notify_image_copied: e => {
                const {
                    normalize: t
                } = e;
                return t(["??????????????????????????????"])
            }
        },
        options: {
            desc: e => {
                const {
                    normalize: t
                } = e;
                return t(["????????????"])
            },
            sync_storage: e => {
                const {
                    normalize: t
                } = e;
                return t(["?????? Storage ??????"])
            },
            powered_by_vite: e => {
                const {
                    normalize: t
                } = e;
                return t(["??? Vite ????????????"])
            }
        }
    },
    ah = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: lh
    }, Symbol.toStringTag, {
        value: "Module"
    }));
const ch = "../locales/",
    fh = Object.fromEntries(Object.entries({
            "../locales/en.yml": ih,
            "../locales/zh-CN.yml": ah
        })
        .map(([e, t]) => {
            const r = e.endsWith(".yaml");
            return [e.slice(ch.length, r ? -5 : -4), t.default]
        })),
    Dh = e => {
        const t = id({
            legacy: !1,
            locale: "en",
            globalInjection: !0,
            messages: fh
        });
        e.use(t)
    };
const Pl = df(oh);
Pl.use(Dh);
Pl.mount("#app");
