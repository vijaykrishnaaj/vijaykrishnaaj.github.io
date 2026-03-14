function vw(e, i) {
    for (var a = 0; a < i.length; a++) {
        const o = i[a];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const l in o)
                if (l !== "default" && !(l in e)) {
                    const c = Object.getOwnPropertyDescriptor(o, l);
                    c && Object.defineProperty(e, l, c.get ? c : {
                        enumerable: !0,
                        get: () => o[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) o(l);
    new MutationObserver(l => {
        for (const c of l)
            if (c.type === "childList")
                for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && o(f)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function a(l) {
        const c = {};
        return l.integrity && (c.integrity = l.integrity), l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? c.credentials = "include" : l.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c
    }

    function o(l) {
        if (l.ep) return;
        l.ep = !0;
        const c = a(l);
        fetch(l.href, c)
    }
})();

function v0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Kc = {
        exports: {}
    },
    Wa = {};
var ty;

function bw() {
    if (ty) return Wa;
    ty = 1;
    var e = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.fragment");

    function a(o, l, c) {
        var f = null;
        if (c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), "key" in l) {
            c = {};
            for (var h in l) h !== "key" && (c[h] = l[h])
        } else c = l;
        return l = c.ref, {
            $$typeof: e,
            type: o,
            key: f,
            ref: l !== void 0 ? l : null,
            props: c
        }
    }
    return Wa.Fragment = i, Wa.jsx = a, Wa.jsxs = a, Wa
}
var ey;

function xw() {
    return ey || (ey = 1, Kc.exports = bw()), Kc.exports
}
var S = xw(),
    Qc = {
        exports: {}
    },
    Ja = {},
    Fc = {
        exports: {}
    },
    Zc = {};
var ny;

function Sw() {
    return ny || (ny = 1, (function(e) {
        function i(V, F) {
            var X = V.length;
            V.push(F);
            t: for (; 0 < X;) {
                var tt = X - 1 >>> 1,
                    w = V[tt];
                if (0 < l(w, F)) V[tt] = F, V[X] = w, X = tt;
                else break t
            }
        }

        function a(V) {
            return V.length === 0 ? null : V[0]
        }

        function o(V) {
            if (V.length === 0) return null;
            var F = V[0],
                X = V.pop();
            if (X !== F) {
                V[0] = X;
                t: for (var tt = 0, w = V.length, G = w >>> 1; tt < G;) {
                    var I = 2 * (tt + 1) - 1,
                        J = V[I],
                        rt = I + 1,
                        dt = V[rt];
                    if (0 > l(J, X)) rt < w && 0 > l(dt, J) ? (V[tt] = dt, V[rt] = X, tt = rt) : (V[tt] = J, V[I] = X, tt = I);
                    else if (rt < w && 0 > l(dt, X)) V[tt] = dt, V[rt] = X, tt = rt;
                    else break t
                }
            }
            return F
        }

        function l(V, F) {
            var X = V.sortIndex - F.sortIndex;
            return X !== 0 ? X : V.id - F.id
        }
        if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            e.unstable_now = function() {
                return c.now()
            }
        } else {
            var f = Date,
                h = f.now();
            e.unstable_now = function() {
                return f.now() - h
            }
        }
        var p = [],
            m = [],
            g = 1,
            v = null,
            b = 3,
            T = !1,
            A = !1,
            C = !1,
            M = !1,
            O = typeof setTimeout == "function" ? setTimeout : null,
            _ = typeof clearTimeout == "function" ? clearTimeout : null,
            j = typeof setImmediate < "u" ? setImmediate : null;

        function k(V) {
            for (var F = a(m); F !== null;) {
                if (F.callback === null) o(m);
                else if (F.startTime <= V) o(m), F.sortIndex = F.expirationTime, i(p, F);
                else break;
                F = a(m)
            }
        }

        function P(V) {
            if (C = !1, k(V), !A)
                if (a(p) !== null) A = !0, Q || (Q = !0, ut());
                else {
                    var F = a(m);
                    F !== null && ft(P, F.startTime - V)
                }
        }
        var Q = !1,
            Z = -1,
            H = 5,
            W = -1;

        function ot() {
            return M ? !0 : !(e.unstable_now() - W < H)
        }

        function pt() {
            if (M = !1, Q) {
                var V = e.unstable_now();
                W = V;
                var F = !0;
                try {
                    t: {
                        A = !1,
                        C && (C = !1, _(Z), Z = -1),
                        T = !0;
                        var X = b;
                        try {
                            e: {
                                for (k(V), v = a(p); v !== null && !(v.expirationTime > V && ot());) {
                                    var tt = v.callback;
                                    if (typeof tt == "function") {
                                        v.callback = null, b = v.priorityLevel;
                                        var w = tt(v.expirationTime <= V);
                                        if (V = e.unstable_now(), typeof w == "function") {
                                            v.callback = w, k(V), F = !0;
                                            break e
                                        }
                                        v === a(p) && o(p), k(V)
                                    } else o(p);
                                    v = a(p)
                                }
                                if (v !== null) F = !0;
                                else {
                                    var G = a(m);
                                    G !== null && ft(P, G.startTime - V), F = !1
                                }
                            }
                            break t
                        }
                        finally {
                            v = null, b = X, T = !1
                        }
                        F = void 0
                    }
                }
                finally {
                    F ? ut() : Q = !1
                }
            }
        }
        var ut;
        if (typeof j == "function") ut = function() {
            j(pt)
        };
        else if (typeof MessageChannel < "u") {
            var bt = new MessageChannel,
                $ = bt.port2;
            bt.port1.onmessage = pt, ut = function() {
                $.postMessage(null)
            }
        } else ut = function() {
            O(pt, 0)
        };

        function ft(V, F) {
            Z = O(function() {
                V(e.unstable_now())
            }, F)
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(V) {
            V.callback = null
        }, e.unstable_forceFrameRate = function(V) {
            0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < V ? Math.floor(1e3 / V) : 5
        }, e.unstable_getCurrentPriorityLevel = function() {
            return b
        }, e.unstable_next = function(V) {
            switch (b) {
                case 1:
                case 2:
                case 3:
                    var F = 3;
                    break;
                default:
                    F = b
            }
            var X = b;
            b = F;
            try {
                return V()
            } finally {
                b = X
            }
        }, e.unstable_requestPaint = function() {
            M = !0
        }, e.unstable_runWithPriority = function(V, F) {
            switch (V) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    V = 3
            }
            var X = b;
            b = V;
            try {
                return F()
            } finally {
                b = X
            }
        }, e.unstable_scheduleCallback = function(V, F, X) {
            var tt = e.unstable_now();
            switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? tt + X : tt) : X = tt, V) {
                case 1:
                    var w = -1;
                    break;
                case 2:
                    w = 250;
                    break;
                case 5:
                    w = 1073741823;
                    break;
                case 4:
                    w = 1e4;
                    break;
                default:
                    w = 5e3
            }
            return w = X + w, V = {
                id: g++,
                callback: F,
                priorityLevel: V,
                startTime: X,
                expirationTime: w,
                sortIndex: -1
            }, X > tt ? (V.sortIndex = X, i(m, V), a(p) === null && V === a(m) && (C ? (_(Z), Z = -1) : C = !0, ft(P, X - tt))) : (V.sortIndex = w, i(p, V), A || T || (A = !0, Q || (Q = !0, ut()))), V
        }, e.unstable_shouldYield = ot, e.unstable_wrapCallback = function(V) {
            var F = b;
            return function() {
                var X = b;
                b = F;
                try {
                    return V.apply(this, arguments)
                } finally {
                    b = X
                }
            }
        }
    })(Zc)), Zc
}
var iy;

function Tw() {
    return iy || (iy = 1, Fc.exports = Sw()), Fc.exports
}
var Wc = {
        exports: {}
    },
    gt = {};
var sy;

function ww() {
    if (sy) return gt;
    sy = 1;
    var e = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.portal"),
        a = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        l = Symbol.for("react.profiler"),
        c = Symbol.for("react.consumer"),
        f = Symbol.for("react.context"),
        h = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        m = Symbol.for("react.memo"),
        g = Symbol.for("react.lazy"),
        v = Symbol.iterator;

    function b(w) {
        return w === null || typeof w != "object" ? null : (w = v && w[v] || w["@@iterator"], typeof w == "function" ? w : null)
    }
    var T = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        A = Object.assign,
        C = {};

    function M(w, G, I) {
        this.props = w, this.context = G, this.refs = C, this.updater = I || T
    }
    M.prototype.isReactComponent = {}, M.prototype.setState = function(w, G) {
        if (typeof w != "object" && typeof w != "function" && w != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, w, G, "setState")
    }, M.prototype.forceUpdate = function(w) {
        this.updater.enqueueForceUpdate(this, w, "forceUpdate")
    };

    function O() {}
    O.prototype = M.prototype;

    function _(w, G, I) {
        this.props = w, this.context = G, this.refs = C, this.updater = I || T
    }
    var j = _.prototype = new O;
    j.constructor = _, A(j, M.prototype), j.isPureReactComponent = !0;
    var k = Array.isArray,
        P = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        Q = Object.prototype.hasOwnProperty;

    function Z(w, G, I, J, rt, dt) {
        return I = dt.ref, {
            $$typeof: e,
            type: w,
            key: G,
            ref: I !== void 0 ? I : null,
            props: dt
        }
    }

    function H(w, G) {
        return Z(w.type, G, void 0, void 0, void 0, w.props)
    }

    function W(w) {
        return typeof w == "object" && w !== null && w.$$typeof === e
    }

    function ot(w) {
        var G = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + w.replace(/[=:]/g, function(I) {
            return G[I]
        })
    }
    var pt = /\/+/g;

    function ut(w, G) {
        return typeof w == "object" && w !== null && w.key != null ? ot("" + w.key) : G.toString(36)
    }

    function bt() {}

    function $(w) {
        switch (w.status) {
            case "fulfilled":
                return w.value;
            case "rejected":
                throw w.reason;
            default:
                switch (typeof w.status == "string" ? w.then(bt, bt) : (w.status = "pending", w.then(function(G) {
                        w.status === "pending" && (w.status = "fulfilled", w.value = G)
                    }, function(G) {
                        w.status === "pending" && (w.status = "rejected", w.reason = G)
                    })), w.status) {
                    case "fulfilled":
                        return w.value;
                    case "rejected":
                        throw w.reason
                }
        }
        throw w
    }

    function ft(w, G, I, J, rt) {
        var dt = typeof w;
        (dt === "undefined" || dt === "boolean") && (w = null);
        var at = !1;
        if (w === null) at = !0;
        else switch (dt) {
            case "bigint":
            case "string":
            case "number":
                at = !0;
                break;
            case "object":
                switch (w.$$typeof) {
                    case e:
                    case i:
                        at = !0;
                        break;
                    case g:
                        return at = w._init, ft(at(w._payload), G, I, J, rt)
                }
        }
        if (at) return rt = rt(w), at = J === "" ? "." + ut(w, 0) : J, k(rt) ? (I = "", at != null && (I = at.replace(pt, "$&/") + "/"), ft(rt, G, I, "", function(Rt) {
            return Rt
        })) : rt != null && (W(rt) && (rt = H(rt, I + (rt.key == null || w && w.key === rt.key ? "" : ("" + rt.key).replace(pt, "$&/") + "/") + at)), G.push(rt)), 1;
        at = 0;
        var Lt = J === "" ? "." : J + ":";
        if (k(w))
            for (var Ct = 0; Ct < w.length; Ct++) J = w[Ct], dt = Lt + ut(J, Ct), at += ft(J, G, I, dt, rt);
        else if (Ct = b(w), typeof Ct == "function")
            for (w = Ct.call(w), Ct = 0; !(J = w.next()).done;) J = J.value, dt = Lt + ut(J, Ct++), at += ft(J, G, I, dt, rt);
        else if (dt === "object") {
            if (typeof w.then == "function") return ft($(w), G, I, J, rt);
            throw G = String(w), Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.")
        }
        return at
    }

    function V(w, G, I) {
        if (w == null) return w;
        var J = [],
            rt = 0;
        return ft(w, J, "", "", function(dt) {
            return G.call(I, dt, rt++)
        }), J
    }

    function F(w) {
        if (w._status === -1) {
            var G = w._result;
            G = G(), G.then(function(I) {
                (w._status === 0 || w._status === -1) && (w._status = 1, w._result = I)
            }, function(I) {
                (w._status === 0 || w._status === -1) && (w._status = 2, w._result = I)
            }), w._status === -1 && (w._status = 0, w._result = G)
        }
        if (w._status === 1) return w._result.default;
        throw w._result
    }
    var X = typeof reportError == "function" ? reportError : function(w) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var G = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
                error: w
            });
            if (!window.dispatchEvent(G)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", w);
            return
        }
        console.error(w)
    };

    function tt() {}
    return gt.Children = {
        map: V,
        forEach: function(w, G, I) {
            V(w, function() {
                G.apply(this, arguments)
            }, I)
        },
        count: function(w) {
            var G = 0;
            return V(w, function() {
                G++
            }), G
        },
        toArray: function(w) {
            return V(w, function(G) {
                return G
            }) || []
        },
        only: function(w) {
            if (!W(w)) throw Error("React.Children.only expected to receive a single React element child.");
            return w
        }
    }, gt.Component = M, gt.Fragment = a, gt.Profiler = l, gt.PureComponent = _, gt.StrictMode = o, gt.Suspense = p, gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, gt.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(w) {
            return P.H.useMemoCache(w)
        }
    }, gt.cache = function(w) {
        return function() {
            return w.apply(null, arguments)
        }
    }, gt.cloneElement = function(w, G, I) {
        if (w == null) throw Error("The argument must be a React element, but you passed " + w + ".");
        var J = A({}, w.props),
            rt = w.key,
            dt = void 0;
        if (G != null)
            for (at in G.ref !== void 0 && (dt = void 0), G.key !== void 0 && (rt = "" + G.key), G) !Q.call(G, at) || at === "key" || at === "__self" || at === "__source" || at === "ref" && G.ref === void 0 || (J[at] = G[at]);
        var at = arguments.length - 2;
        if (at === 1) J.children = I;
        else if (1 < at) {
            for (var Lt = Array(at), Ct = 0; Ct < at; Ct++) Lt[Ct] = arguments[Ct + 2];
            J.children = Lt
        }
        return Z(w.type, rt, void 0, void 0, dt, J)
    }, gt.createContext = function(w) {
        return w = {
            $$typeof: f,
            _currentValue: w,
            _currentValue2: w,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, w.Provider = w, w.Consumer = {
            $$typeof: c,
            _context: w
        }, w
    }, gt.createElement = function(w, G, I) {
        var J, rt = {},
            dt = null;
        if (G != null)
            for (J in G.key !== void 0 && (dt = "" + G.key), G) Q.call(G, J) && J !== "key" && J !== "__self" && J !== "__source" && (rt[J] = G[J]);
        var at = arguments.length - 2;
        if (at === 1) rt.children = I;
        else if (1 < at) {
            for (var Lt = Array(at), Ct = 0; Ct < at; Ct++) Lt[Ct] = arguments[Ct + 2];
            rt.children = Lt
        }
        if (w && w.defaultProps)
            for (J in at = w.defaultProps, at) rt[J] === void 0 && (rt[J] = at[J]);
        return Z(w, dt, void 0, void 0, null, rt)
    }, gt.createRef = function() {
        return {
            current: null
        }
    }, gt.forwardRef = function(w) {
        return {
            $$typeof: h,
            render: w
        }
    }, gt.isValidElement = W, gt.lazy = function(w) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: w
            },
            _init: F
        }
    }, gt.memo = function(w, G) {
        return {
            $$typeof: m,
            type: w,
            compare: G === void 0 ? null : G
        }
    }, gt.startTransition = function(w) {
        var G = P.T,
            I = {};
        P.T = I;
        try {
            var J = w(),
                rt = P.S;
            rt !== null && rt(I, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(tt, X)
        } catch (dt) {
            X(dt)
        } finally {
            P.T = G
        }
    }, gt.unstable_useCacheRefresh = function() {
        return P.H.useCacheRefresh()
    }, gt.use = function(w) {
        return P.H.use(w)
    }, gt.useActionState = function(w, G, I) {
        return P.H.useActionState(w, G, I)
    }, gt.useCallback = function(w, G) {
        return P.H.useCallback(w, G)
    }, gt.useContext = function(w) {
        return P.H.useContext(w)
    }, gt.useDebugValue = function() {}, gt.useDeferredValue = function(w, G) {
        return P.H.useDeferredValue(w, G)
    }, gt.useEffect = function(w, G, I) {
        var J = P.H;
        if (typeof I == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return J.useEffect(w, G)
    }, gt.useId = function() {
        return P.H.useId()
    }, gt.useImperativeHandle = function(w, G, I) {
        return P.H.useImperativeHandle(w, G, I)
    }, gt.useInsertionEffect = function(w, G) {
        return P.H.useInsertionEffect(w, G)
    }, gt.useLayoutEffect = function(w, G) {
        return P.H.useLayoutEffect(w, G)
    }, gt.useMemo = function(w, G) {
        return P.H.useMemo(w, G)
    }, gt.useOptimistic = function(w, G) {
        return P.H.useOptimistic(w, G)
    }, gt.useReducer = function(w, G, I) {
        return P.H.useReducer(w, G, I)
    }, gt.useRef = function(w) {
        return P.H.useRef(w)
    }, gt.useState = function(w) {
        return P.H.useState(w)
    }, gt.useSyncExternalStore = function(w, G, I) {
        return P.H.useSyncExternalStore(w, G, I)
    }, gt.useTransition = function() {
        return P.H.useTransition()
    }, gt.version = "19.1.0", gt
}
var ay;

function yl() {
    return ay || (ay = 1, Wc.exports = ww()), Wc.exports
}
var Jc = {
        exports: {}
    },
    ce = {};
var ry;

function Ew() {
    if (ry) return ce;
    ry = 1;
    var e = yl();

    function i(p) {
        var m = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var g = 2; g < arguments.length; g++) m += "&args[]=" + encodeURIComponent(arguments[g])
        }
        return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function a() {}
    var o = {
            d: {
                f: a,
                r: function() {
                    throw Error(i(522))
                },
                D: a,
                C: a,
                L: a,
                m: a,
                X: a,
                S: a,
                M: a
            },
            p: 0,
            findDOMNode: null
        },
        l = Symbol.for("react.portal");

    function c(p, m, g) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: l,
            key: v == null ? null : "" + v,
            children: p,
            containerInfo: m,
            implementation: g
        }
    }
    var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function h(p, m) {
        if (p === "font") return "";
        if (typeof m == "string") return m === "use-credentials" ? m : ""
    }
    return ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, ce.createPortal = function(p, m) {
        var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(i(299));
        return c(p, m, null, g)
    }, ce.flushSync = function(p) {
        var m = f.T,
            g = o.p;
        try {
            if (f.T = null, o.p = 2, p) return p()
        } finally {
            f.T = m, o.p = g, o.d.f()
        }
    }, ce.preconnect = function(p, m) {
        typeof p == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, o.d.C(p, m))
    }, ce.prefetchDNS = function(p) {
        typeof p == "string" && o.d.D(p)
    }, ce.preinit = function(p, m) {
        if (typeof p == "string" && m && typeof m.as == "string") {
            var g = m.as,
                v = h(g, m.crossOrigin),
                b = typeof m.integrity == "string" ? m.integrity : void 0,
                T = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            g === "style" ? o.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: v,
                integrity: b,
                fetchPriority: T
            }) : g === "script" && o.d.X(p, {
                crossOrigin: v,
                integrity: b,
                fetchPriority: T,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }, ce.preinitModule = function(p, m) {
        if (typeof p == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var g = h(m.as, m.crossOrigin);
                    o.d.M(p, {
                        crossOrigin: g,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else m == null && o.d.M(p)
    }, ce.preload = function(p, m) {
        if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var g = m.as,
                v = h(g, m.crossOrigin);
            o.d.L(p, g, {
                crossOrigin: v,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }, ce.preloadModule = function(p, m) {
        if (typeof p == "string")
            if (m) {
                var g = h(m.as, m.crossOrigin);
                o.d.m(p, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: g,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else o.d.m(p)
    }, ce.requestFormReset = function(p) {
        o.d.r(p)
    }, ce.unstable_batchedUpdates = function(p, m) {
        return p(m)
    }, ce.useFormState = function(p, m, g) {
        return f.H.useFormState(p, m, g)
    }, ce.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
    }, ce.version = "19.1.0", ce
}
var oy;

function b0() {
    if (oy) return Jc.exports;
    oy = 1;

    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (i) {
            console.error(i)
        }
    }
    return e(), Jc.exports = Ew(), Jc.exports
}
var ly;

function Aw() {
    if (ly) return Ja;
    ly = 1;
    var e = Tw(),
        i = yl(),
        a = b0();

    function o(t) {
        var n = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            n += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var s = 2; s < arguments.length; s++) n += "&args[]=" + encodeURIComponent(arguments[s])
        }
        return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function l(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function c(t) {
        var n = t,
            s = t;
        if (t.alternate)
            for (; n.return;) n = n.return;
        else {
            t = n;
            do n = t, (n.flags & 4098) !== 0 && (s = n.return), t = n.return; while (t)
        }
        return n.tag === 3 ? s : null
    }

    function f(t) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated
        }
        return null
    }

    function h(t) {
        if (c(t) !== t) throw Error(o(188))
    }

    function p(t) {
        var n = t.alternate;
        if (!n) {
            if (n = c(t), n === null) throw Error(o(188));
            return n !== t ? null : t
        }
        for (var s = t, r = n;;) {
            var u = s.return;
            if (u === null) break;
            var d = u.alternate;
            if (d === null) {
                if (r = u.return, r !== null) {
                    s = r;
                    continue
                }
                break
            }
            if (u.child === d.child) {
                for (d = u.child; d;) {
                    if (d === s) return h(u), t;
                    if (d === r) return h(u), n;
                    d = d.sibling
                }
                throw Error(o(188))
            }
            if (s.return !== r.return) s = u, r = d;
            else {
                for (var y = !1, x = u.child; x;) {
                    if (x === s) {
                        y = !0, s = u, r = d;
                        break
                    }
                    if (x === r) {
                        y = !0, r = u, s = d;
                        break
                    }
                    x = x.sibling
                }
                if (!y) {
                    for (x = d.child; x;) {
                        if (x === s) {
                            y = !0, s = d, r = u;
                            break
                        }
                        if (x === r) {
                            y = !0, r = d, s = u;
                            break
                        }
                        x = x.sibling
                    }
                    if (!y) throw Error(o(189))
                }
            }
            if (s.alternate !== r) throw Error(o(190))
        }
        if (s.tag !== 3) throw Error(o(188));
        return s.stateNode.current === s ? t : n
    }

    function m(t) {
        var n = t.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return t;
        for (t = t.child; t !== null;) {
            if (n = m(t), n !== null) return n;
            t = t.sibling
        }
        return null
    }
    var g = Object.assign,
        v = Symbol.for("react.element"),
        b = Symbol.for("react.transitional.element"),
        T = Symbol.for("react.portal"),
        A = Symbol.for("react.fragment"),
        C = Symbol.for("react.strict_mode"),
        M = Symbol.for("react.profiler"),
        O = Symbol.for("react.provider"),
        _ = Symbol.for("react.consumer"),
        j = Symbol.for("react.context"),
        k = Symbol.for("react.forward_ref"),
        P = Symbol.for("react.suspense"),
        Q = Symbol.for("react.suspense_list"),
        Z = Symbol.for("react.memo"),
        H = Symbol.for("react.lazy"),
        W = Symbol.for("react.activity"),
        ot = Symbol.for("react.memo_cache_sentinel"),
        pt = Symbol.iterator;

    function ut(t) {
        return t === null || typeof t != "object" ? null : (t = pt && t[pt] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var bt = Symbol.for("react.client.reference");

    function $(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.$$typeof === bt ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case A:
                return "Fragment";
            case M:
                return "Profiler";
            case C:
                return "StrictMode";
            case P:
                return "Suspense";
            case Q:
                return "SuspenseList";
            case W:
                return "Activity"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case T:
                return "Portal";
            case j:
                return (t.displayName || "Context") + ".Provider";
            case _:
                return (t._context.displayName || "Context") + ".Consumer";
            case k:
                var n = t.render;
                return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case Z:
                return n = t.displayName || null, n !== null ? n : $(t.type) || "Memo";
            case H:
                n = t._payload, t = t._init;
                try {
                    return $(t(n))
                } catch {}
        }
        return null
    }
    var ft = Array.isArray,
        V = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        F = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        X = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        tt = [],
        w = -1;

    function G(t) {
        return {
            current: t
        }
    }

    function I(t) {
        0 > w || (t.current = tt[w], tt[w] = null, w--)
    }

    function J(t, n) {
        w++, tt[w] = t.current, t.current = n
    }
    var rt = G(null),
        dt = G(null),
        at = G(null),
        Lt = G(null);

    function Ct(t, n) {
        switch (J(at, n), J(dt, t), J(rt, null), n.nodeType) {
            case 9:
            case 11:
                t = (t = n.documentElement) && (t = t.namespaceURI) ? Mg(t) : 0;
                break;
            default:
                if (t = n.tagName, n = n.namespaceURI) n = Mg(n), t = Dg(n, t);
                else switch (t) {
                    case "svg":
                        t = 1;
                        break;
                    case "math":
                        t = 2;
                        break;
                    default:
                        t = 0
                }
        }
        I(rt), J(rt, t)
    }

    function Rt() {
        I(rt), I(dt), I(at)
    }

    function Bn(t) {
        t.memoizedState !== null && J(Lt, t);
        var n = rt.current,
            s = Dg(n, t.type);
        n !== s && (J(dt, t), J(rt, s))
    }

    function Qe(t) {
        dt.current === t && (I(rt), I(dt)), Lt.current === t && (I(Lt), Xa._currentValue = X)
    }
    var on = Object.prototype.hasOwnProperty,
        ze = e.unstable_scheduleCallback,
        Hn = e.unstable_cancelCallback,
        W1 = e.unstable_shouldYield,
        J1 = e.unstable_requestPaint,
        ln = e.unstable_now,
        I1 = e.unstable_getCurrentPriorityLevel,
        lh = e.unstable_ImmediatePriority,
        uh = e.unstable_UserBlockingPriority,
        Tr = e.unstable_NormalPriority,
        $1 = e.unstable_LowPriority,
        ch = e.unstable_IdlePriority,
        tS = e.log,
        eS = e.unstable_setDisableYieldValue,
        $s = null,
        Ee = null;

    function qn(t) {
        if (typeof tS == "function" && eS(t), Ee && typeof Ee.setStrictMode == "function") try {
            Ee.setStrictMode($s, t)
        } catch {}
    }
    var Ae = Math.clz32 ? Math.clz32 : sS,
        nS = Math.log,
        iS = Math.LN2;

    function sS(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (nS(t) / iS | 0) | 0
    }
    var wr = 256,
        Er = 4194304;

    function Ei(t) {
        var n = t & 42;
        if (n !== 0) return n;
        switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t
        }
    }

    function Ar(t, n, s) {
        var r = t.pendingLanes;
        if (r === 0) return 0;
        var u = 0,
            d = t.suspendedLanes,
            y = t.pingedLanes;
        t = t.warmLanes;
        var x = r & 134217727;
        return x !== 0 ? (r = x & ~d, r !== 0 ? u = Ei(r) : (y &= x, y !== 0 ? u = Ei(y) : s || (s = x & ~t, s !== 0 && (u = Ei(s))))) : (x = r & ~d, x !== 0 ? u = Ei(x) : y !== 0 ? u = Ei(y) : s || (s = r & ~t, s !== 0 && (u = Ei(s)))), u === 0 ? 0 : n !== 0 && n !== u && (n & d) === 0 && (d = u & -u, s = n & -n, d >= s || d === 32 && (s & 4194048) !== 0) ? n : u
    }

    function ta(t, n) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0
    }

    function aS(t, n) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return n + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return n + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function fh() {
        var t = wr;
        return wr <<= 1, (wr & 4194048) === 0 && (wr = 256), t
    }

    function dh() {
        var t = Er;
        return Er <<= 1, (Er & 62914560) === 0 && (Er = 4194304), t
    }

    function zl(t) {
        for (var n = [], s = 0; 31 > s; s++) n.push(t);
        return n
    }

    function ea(t, n) {
        t.pendingLanes |= n, n !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
    }

    function rS(t, n, s, r, u, d) {
        var y = t.pendingLanes;
        t.pendingLanes = s, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= s, t.entangledLanes &= s, t.errorRecoveryDisabledLanes &= s, t.shellSuspendCounter = 0;
        var x = t.entanglements,
            R = t.expirationTimes,
            L = t.hiddenUpdates;
        for (s = y & ~s; 0 < s;) {
            var q = 31 - Ae(s),
                K = 1 << q;
            x[q] = 0, R[q] = -1;
            var U = L[q];
            if (U !== null)
                for (L[q] = null, q = 0; q < U.length; q++) {
                    var B = U[q];
                    B !== null && (B.lane &= -536870913)
                }
            s &= ~K
        }
        r !== 0 && hh(t, r, 0), d !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(y & ~n))
    }

    function hh(t, n, s) {
        t.pendingLanes |= n, t.suspendedLanes &= ~n;
        var r = 31 - Ae(n);
        t.entangledLanes |= n, t.entanglements[r] = t.entanglements[r] | 1073741824 | s & 4194090
    }

    function mh(t, n) {
        var s = t.entangledLanes |= n;
        for (t = t.entanglements; s;) {
            var r = 31 - Ae(s),
                u = 1 << r;
            u & n | t[r] & n && (t[r] |= n), s &= ~u
        }
    }

    function Ll(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0
        }
        return t
    }

    function kl(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function ph() {
        var t = F.p;
        return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Fg(t.type))
    }

    function oS(t, n) {
        var s = F.p;
        try {
            return F.p = t, n()
        } finally {
            F.p = s
        }
    }
    var Gn = Math.random().toString(36).slice(2),
        le = "__reactFiber$" + Gn,
        ye = "__reactProps$" + Gn,
        Ji = "__reactContainer$" + Gn,
        Pl = "__reactEvents$" + Gn,
        lS = "__reactListeners$" + Gn,
        uS = "__reactHandles$" + Gn,
        gh = "__reactResources$" + Gn,
        na = "__reactMarker$" + Gn;

    function Ul(t) {
        delete t[le], delete t[ye], delete t[Pl], delete t[lS], delete t[uS]
    }

    function Ii(t) {
        var n = t[le];
        if (n) return n;
        for (var s = t.parentNode; s;) {
            if (n = s[Ji] || s[le]) {
                if (s = n.alternate, n.child !== null || s !== null && s.child !== null)
                    for (t = _g(t); t !== null;) {
                        if (s = t[le]) return s;
                        t = _g(t)
                    }
                return n
            }
            t = s, s = t.parentNode
        }
        return null
    }

    function $i(t) {
        if (t = t[le] || t[Ji]) {
            var n = t.tag;
            if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3) return t
        }
        return null
    }

    function ia(t) {
        var n = t.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
        throw Error(o(33))
    }

    function ts(t) {
        var n = t[gh];
        return n || (n = t[gh] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), n
    }

    function te(t) {
        t[na] = !0
    }
    var yh = new Set,
        vh = {};

    function Ai(t, n) {
        es(t, n), es(t + "Capture", n)
    }

    function es(t, n) {
        for (vh[t] = n, t = 0; t < n.length; t++) yh.add(n[t])
    }
    var cS = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        bh = {},
        xh = {};

    function fS(t) {
        return on.call(xh, t) ? !0 : on.call(bh, t) ? !1 : cS.test(t) ? xh[t] = !0 : (bh[t] = !0, !1)
    }

    function Cr(t, n, s) {
        if (fS(n))
            if (s === null) t.removeAttribute(n);
            else {
                switch (typeof s) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(n);
                        return;
                    case "boolean":
                        var r = n.toLowerCase().slice(0, 5);
                        if (r !== "data-" && r !== "aria-") {
                            t.removeAttribute(n);
                            return
                        }
                }
                t.setAttribute(n, "" + s)
            }
    }

    function Rr(t, n, s) {
        if (s === null) t.removeAttribute(n);
        else {
            switch (typeof s) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(n);
                    return
            }
            t.setAttribute(n, "" + s)
        }
    }

    function xn(t, n, s, r) {
        if (r === null) t.removeAttribute(s);
        else {
            switch (typeof r) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(s);
                    return
            }
            t.setAttributeNS(n, s, "" + r)
        }
    }
    var Bl, Sh;

    function ns(t) {
        if (Bl === void 0) try {
            throw Error()
        } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            Bl = n && n[1] || "", Sh = -1 < s.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < s.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + Bl + t + Sh
    }
    var Hl = !1;

    function ql(t, n) {
        if (!t || Hl) return "";
        Hl = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (n) {
                            var K = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(K.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(K, [])
                                } catch (B) {
                                    var U = B
                                }
                                Reflect.construct(t, [], K)
                            } else {
                                try {
                                    K.call()
                                } catch (B) {
                                    U = B
                                }
                                t.call(K.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (B) {
                                U = B
                            }(K = t()) && typeof K.catch == "function" && K.catch(function() {})
                        }
                    } catch (B) {
                        if (B && U && typeof B.stack == "string") return [B.stack, U.stack]
                    }
                    return [null, null]
                }
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var d = r.DetermineComponentFrameRoot(),
                y = d[0],
                x = d[1];
            if (y && x) {
                var R = y.split(`
`),
                    L = x.split(`
`);
                for (u = r = 0; r < R.length && !R[r].includes("DetermineComponentFrameRoot");) r++;
                for (; u < L.length && !L[u].includes("DetermineComponentFrameRoot");) u++;
                if (r === R.length || u === L.length)
                    for (r = R.length - 1, u = L.length - 1; 1 <= r && 0 <= u && R[r] !== L[u];) u--;
                for (; 1 <= r && 0 <= u; r--, u--)
                    if (R[r] !== L[u]) {
                        if (r !== 1 || u !== 1)
                            do
                                if (r--, u--, 0 > u || R[r] !== L[u]) {
                                    var q = `
` + R[r].replace(" at new ", " at ");
                                    return t.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", t.displayName)), q
                                } while (1 <= r && 0 <= u);
                        break
                    }
            }
        } finally {
            Hl = !1, Error.prepareStackTrace = s
        }
        return (s = t ? t.displayName || t.name : "") ? ns(s) : ""
    }

    function dS(t) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return ns(t.type);
            case 16:
                return ns("Lazy");
            case 13:
                return ns("Suspense");
            case 19:
                return ns("SuspenseList");
            case 0:
            case 15:
                return ql(t.type, !1);
            case 11:
                return ql(t.type.render, !1);
            case 1:
                return ql(t.type, !0);
            case 31:
                return ns("Activity");
            default:
                return ""
        }
    }

    function Th(t) {
        try {
            var n = "";
            do n += dS(t), t = t.return; while (t);
            return n
        } catch (s) {
            return `
Error generating stack: ` + s.message + `
` + s.stack
        }
    }

    function Le(t) {
        switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function wh(t) {
        var n = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
    }

    function hS(t) {
        var n = wh(t) ? "checked" : "value",
            s = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
            r = "" + t[n];
        if (!t.hasOwnProperty(n) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
            var u = s.get,
                d = s.set;
            return Object.defineProperty(t, n, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(y) {
                    r = "" + y, d.call(this, y)
                }
            }), Object.defineProperty(t, n, {
                enumerable: s.enumerable
            }), {
                getValue: function() {
                    return r
                },
                setValue: function(y) {
                    r = "" + y
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[n]
                }
            }
        }
    }

    function Mr(t) {
        t._valueTracker || (t._valueTracker = hS(t))
    }

    function Eh(t) {
        if (!t) return !1;
        var n = t._valueTracker;
        if (!n) return !0;
        var s = n.getValue(),
            r = "";
        return t && (r = wh(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== s ? (n.setValue(t), !0) : !1
    }

    function Dr(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var mS = /[\n"\\]/g;

    function ke(t) {
        return t.replace(mS, function(n) {
            return "\\" + n.charCodeAt(0).toString(16) + " "
        })
    }

    function Gl(t, n, s, r, u, d, y, x) {
        t.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.type = y : t.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + Le(n)) : t.value !== "" + Le(n) && (t.value = "" + Le(n)) : y !== "submit" && y !== "reset" || t.removeAttribute("value"), n != null ? Yl(t, y, Le(n)) : s != null ? Yl(t, y, Le(s)) : r != null && t.removeAttribute("value"), u == null && d != null && (t.defaultChecked = !!d), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? t.name = "" + Le(x) : t.removeAttribute("name")
    }

    function Ah(t, n, s, r, u, d, y, x) {
        if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.type = d), n != null || s != null) {
            if (!(d !== "submit" && d !== "reset" || n != null)) return;
            s = s != null ? "" + Le(s) : "", n = n != null ? "" + Le(n) : s, x || n === t.value || (t.value = n), t.defaultValue = n
        }
        r = r ?? u, r = typeof r != "function" && typeof r != "symbol" && !!r, t.checked = x ? t.checked : !!r, t.defaultChecked = !!r, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (t.name = y)
    }

    function Yl(t, n, s) {
        n === "number" && Dr(t.ownerDocument) === t || t.defaultValue === "" + s || (t.defaultValue = "" + s)
    }

    function is(t, n, s, r) {
        if (t = t.options, n) {
            n = {};
            for (var u = 0; u < s.length; u++) n["$" + s[u]] = !0;
            for (s = 0; s < t.length; s++) u = n.hasOwnProperty("$" + t[s].value), t[s].selected !== u && (t[s].selected = u), u && r && (t[s].defaultSelected = !0)
        } else {
            for (s = "" + Le(s), n = null, u = 0; u < t.length; u++) {
                if (t[u].value === s) {
                    t[u].selected = !0, r && (t[u].defaultSelected = !0);
                    return
                }
                n !== null || t[u].disabled || (n = t[u])
            }
            n !== null && (n.selected = !0)
        }
    }

    function Ch(t, n, s) {
        if (n != null && (n = "" + Le(n), n !== t.value && (t.value = n), s == null)) {
            t.defaultValue !== n && (t.defaultValue = n);
            return
        }
        t.defaultValue = s != null ? "" + Le(s) : ""
    }

    function Rh(t, n, s, r) {
        if (n == null) {
            if (r != null) {
                if (s != null) throw Error(o(92));
                if (ft(r)) {
                    if (1 < r.length) throw Error(o(93));
                    r = r[0]
                }
                s = r
            }
            s == null && (s = ""), n = s
        }
        s = Le(n), t.defaultValue = s, r = t.textContent, r === s && r !== "" && r !== null && (t.value = r)
    }

    function ss(t, n) {
        if (n) {
            var s = t.firstChild;
            if (s && s === t.lastChild && s.nodeType === 3) {
                s.nodeValue = n;
                return
            }
        }
        t.textContent = n
    }
    var pS = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Mh(t, n, s) {
        var r = n.indexOf("--") === 0;
        s == null || typeof s == "boolean" || s === "" ? r ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "" : r ? t.setProperty(n, s) : typeof s != "number" || s === 0 || pS.has(n) ? n === "float" ? t.cssFloat = s : t[n] = ("" + s).trim() : t[n] = s + "px"
    }

    function Dh(t, n, s) {
        if (n != null && typeof n != "object") throw Error(o(62));
        if (t = t.style, s != null) {
            for (var r in s) !s.hasOwnProperty(r) || n != null && n.hasOwnProperty(r) || (r.indexOf("--") === 0 ? t.setProperty(r, "") : r === "float" ? t.cssFloat = "" : t[r] = "");
            for (var u in n) r = n[u], n.hasOwnProperty(u) && s[u] !== r && Mh(t, u, r)
        } else
            for (var d in n) n.hasOwnProperty(d) && Mh(t, d, n[d])
    }

    function Xl(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var gS = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        yS = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Or(t) {
        return yS.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var Kl = null;

    function Ql(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var as = null,
        rs = null;

    function Oh(t) {
        var n = $i(t);
        if (n && (t = n.stateNode)) {
            var s = t[ye] || null;
            t: switch (t = n.stateNode, n.type) {
                case "input":
                    if (Gl(t, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name), n = s.name, s.type === "radio" && n != null) {
                        for (s = t; s.parentNode;) s = s.parentNode;
                        for (s = s.querySelectorAll('input[name="' + ke("" + n) + '"][type="radio"]'), n = 0; n < s.length; n++) {
                            var r = s[n];
                            if (r !== t && r.form === t.form) {
                                var u = r[ye] || null;
                                if (!u) throw Error(o(90));
                                Gl(r, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                            }
                        }
                        for (n = 0; n < s.length; n++) r = s[n], r.form === t.form && Eh(r)
                    }
                    break t;
                case "textarea":
                    Ch(t, s.value, s.defaultValue);
                    break t;
                case "select":
                    n = s.value, n != null && is(t, !!s.multiple, n, !1)
            }
        }
    }
    var Fl = !1;

    function Nh(t, n, s) {
        if (Fl) return t(n, s);
        Fl = !0;
        try {
            var r = t(n);
            return r
        } finally {
            if (Fl = !1, (as !== null || rs !== null) && (go(), as && (n = as, t = rs, rs = as = null, Oh(n), t)))
                for (n = 0; n < t.length; n++) Oh(t[n])
        }
    }

    function sa(t, n) {
        var s = t.stateNode;
        if (s === null) return null;
        var r = s[ye] || null;
        if (r === null) return null;
        s = r[n];
        t: switch (n) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (t = t.type, r = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !r;
                break t;
            default:
                t = !1
        }
        if (t) return null;
        if (s && typeof s != "function") throw Error(o(231, n, typeof s));
        return s
    }
    var Sn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Zl = !1;
    if (Sn) try {
        var aa = {};
        Object.defineProperty(aa, "passive", {
            get: function() {
                Zl = !0
            }
        }), window.addEventListener("test", aa, aa), window.removeEventListener("test", aa, aa)
    } catch {
        Zl = !1
    }
    var Yn = null,
        Wl = null,
        Nr = null;

    function jh() {
        if (Nr) return Nr;
        var t, n = Wl,
            s = n.length,
            r, u = "value" in Yn ? Yn.value : Yn.textContent,
            d = u.length;
        for (t = 0; t < s && n[t] === u[t]; t++);
        var y = s - t;
        for (r = 1; r <= y && n[s - r] === u[d - r]; r++);
        return Nr = u.slice(t, 1 < r ? 1 - r : void 0)
    }

    function jr(t) {
        var n = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function _r() {
        return !0
    }

    function _h() {
        return !1
    }

    function ve(t) {
        function n(s, r, u, d, y) {
            this._reactName = s, this._targetInst = u, this.type = r, this.nativeEvent = d, this.target = y, this.currentTarget = null;
            for (var x in t) t.hasOwnProperty(x) && (s = t[x], this[x] = s ? s(d) : d[x]);
            return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? _r : _h, this.isPropagationStopped = _h, this
        }
        return g(n.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var s = this.nativeEvent;
                s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = _r)
            },
            stopPropagation: function() {
                var s = this.nativeEvent;
                s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = _r)
            },
            persist: function() {},
            isPersistent: _r
        }), n
    }
    var Ci = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Vr = ve(Ci),
        ra = g({}, Ci, {
            view: 0,
            detail: 0
        }),
        vS = ve(ra),
        Jl, Il, oa, zr = g({}, ra, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: tu,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== oa && (oa && t.type === "mousemove" ? (Jl = t.screenX - oa.screenX, Il = t.screenY - oa.screenY) : Il = Jl = 0, oa = t), Jl)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : Il
            }
        }),
        Vh = ve(zr),
        bS = g({}, zr, {
            dataTransfer: 0
        }),
        xS = ve(bS),
        SS = g({}, ra, {
            relatedTarget: 0
        }),
        $l = ve(SS),
        TS = g({}, Ci, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        wS = ve(TS),
        ES = g({}, Ci, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        AS = ve(ES),
        CS = g({}, Ci, {
            data: 0
        }),
        zh = ve(CS),
        RS = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        MS = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        DS = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function OS(t) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(t) : (t = DS[t]) ? !!n[t] : !1
    }

    function tu() {
        return OS
    }
    var NS = g({}, ra, {
            key: function(t) {
                if (t.key) {
                    var n = RS[t.key] || t.key;
                    if (n !== "Unidentified") return n
                }
                return t.type === "keypress" ? (t = jr(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? MS[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: tu,
            charCode: function(t) {
                return t.type === "keypress" ? jr(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? jr(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        jS = ve(NS),
        _S = g({}, zr, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Lh = ve(_S),
        VS = g({}, ra, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: tu
        }),
        zS = ve(VS),
        LS = g({}, Ci, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        kS = ve(LS),
        PS = g({}, zr, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        US = ve(PS),
        BS = g({}, Ci, {
            newState: 0,
            oldState: 0
        }),
        HS = ve(BS),
        qS = [9, 13, 27, 32],
        eu = Sn && "CompositionEvent" in window,
        la = null;
    Sn && "documentMode" in document && (la = document.documentMode);
    var GS = Sn && "TextEvent" in window && !la,
        kh = Sn && (!eu || la && 8 < la && 11 >= la),
        Ph = " ",
        Uh = !1;

    function Bh(t, n) {
        switch (t) {
            case "keyup":
                return qS.indexOf(n.keyCode) !== -1;
            case "keydown":
                return n.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Hh(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var os = !1;

    function YS(t, n) {
        switch (t) {
            case "compositionend":
                return Hh(n);
            case "keypress":
                return n.which !== 32 ? null : (Uh = !0, Ph);
            case "textInput":
                return t = n.data, t === Ph && Uh ? null : t;
            default:
                return null
        }
    }

    function XS(t, n) {
        if (os) return t === "compositionend" || !eu && Bh(t, n) ? (t = jh(), Nr = Wl = Yn = null, os = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                    if (n.char && 1 < n.char.length) return n.char;
                    if (n.which) return String.fromCharCode(n.which)
                }
                return null;
            case "compositionend":
                return kh && n.locale !== "ko" ? null : n.data;
            default:
                return null
        }
    }
    var KS = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function qh(t) {
        var n = t && t.nodeName && t.nodeName.toLowerCase();
        return n === "input" ? !!KS[t.type] : n === "textarea"
    }

    function Gh(t, n, s, r) {
        as ? rs ? rs.push(r) : rs = [r] : as = r, n = To(n, "onChange"), 0 < n.length && (s = new Vr("onChange", "change", null, s, r), t.push({
            event: s,
            listeners: n
        }))
    }
    var ua = null,
        ca = null;

    function QS(t) {
        wg(t, 0)
    }

    function Lr(t) {
        var n = ia(t);
        if (Eh(n)) return t
    }

    function Yh(t, n) {
        if (t === "change") return n
    }
    var Xh = !1;
    if (Sn) {
        var nu;
        if (Sn) {
            var iu = "oninput" in document;
            if (!iu) {
                var Kh = document.createElement("div");
                Kh.setAttribute("oninput", "return;"), iu = typeof Kh.oninput == "function"
            }
            nu = iu
        } else nu = !1;
        Xh = nu && (!document.documentMode || 9 < document.documentMode)
    }

    function Qh() {
        ua && (ua.detachEvent("onpropertychange", Fh), ca = ua = null)
    }

    function Fh(t) {
        if (t.propertyName === "value" && Lr(ca)) {
            var n = [];
            Gh(n, ca, t, Ql(t)), Nh(QS, n)
        }
    }

    function FS(t, n, s) {
        t === "focusin" ? (Qh(), ua = n, ca = s, ua.attachEvent("onpropertychange", Fh)) : t === "focusout" && Qh()
    }

    function ZS(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return Lr(ca)
    }

    function WS(t, n) {
        if (t === "click") return Lr(n)
    }

    function JS(t, n) {
        if (t === "input" || t === "change") return Lr(n)
    }

    function IS(t, n) {
        return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n
    }
    var Ce = typeof Object.is == "function" ? Object.is : IS;

    function fa(t, n) {
        if (Ce(t, n)) return !0;
        if (typeof t != "object" || t === null || typeof n != "object" || n === null) return !1;
        var s = Object.keys(t),
            r = Object.keys(n);
        if (s.length !== r.length) return !1;
        for (r = 0; r < s.length; r++) {
            var u = s[r];
            if (!on.call(n, u) || !Ce(t[u], n[u])) return !1
        }
        return !0
    }

    function Zh(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function Wh(t, n) {
        var s = Zh(t);
        t = 0;
        for (var r; s;) {
            if (s.nodeType === 3) {
                if (r = t + s.textContent.length, t <= n && r >= n) return {
                    node: s,
                    offset: n - t
                };
                t = r
            }
            t: {
                for (; s;) {
                    if (s.nextSibling) {
                        s = s.nextSibling;
                        break t
                    }
                    s = s.parentNode
                }
                s = void 0
            }
            s = Zh(s)
        }
    }

    function Jh(t, n) {
        return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Jh(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1
    }

    function Ih(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var n = Dr(t.document); n instanceof t.HTMLIFrameElement;) {
            try {
                var s = typeof n.contentWindow.location.href == "string"
            } catch {
                s = !1
            }
            if (s) t = n.contentWindow;
            else break;
            n = Dr(t.document)
        }
        return n
    }

    function su(t) {
        var n = t && t.nodeName && t.nodeName.toLowerCase();
        return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true")
    }
    var $S = Sn && "documentMode" in document && 11 >= document.documentMode,
        ls = null,
        au = null,
        da = null,
        ru = !1;

    function $h(t, n, s) {
        var r = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
        ru || ls == null || ls !== Dr(r) || (r = ls, "selectionStart" in r && su(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), da && fa(da, r) || (da = r, r = To(au, "onSelect"), 0 < r.length && (n = new Vr("onSelect", "select", null, n, s), t.push({
            event: n,
            listeners: r
        }), n.target = ls)))
    }

    function Ri(t, n) {
        var s = {};
        return s[t.toLowerCase()] = n.toLowerCase(), s["Webkit" + t] = "webkit" + n, s["Moz" + t] = "moz" + n, s
    }
    var us = {
            animationend: Ri("Animation", "AnimationEnd"),
            animationiteration: Ri("Animation", "AnimationIteration"),
            animationstart: Ri("Animation", "AnimationStart"),
            transitionrun: Ri("Transition", "TransitionRun"),
            transitionstart: Ri("Transition", "TransitionStart"),
            transitioncancel: Ri("Transition", "TransitionCancel"),
            transitionend: Ri("Transition", "TransitionEnd")
        },
        ou = {},
        tm = {};
    Sn && (tm = document.createElement("div").style, "AnimationEvent" in window || (delete us.animationend.animation, delete us.animationiteration.animation, delete us.animationstart.animation), "TransitionEvent" in window || delete us.transitionend.transition);

    function Mi(t) {
        if (ou[t]) return ou[t];
        if (!us[t]) return t;
        var n = us[t],
            s;
        for (s in n)
            if (n.hasOwnProperty(s) && s in tm) return ou[t] = n[s];
        return t
    }
    var em = Mi("animationend"),
        nm = Mi("animationiteration"),
        im = Mi("animationstart"),
        tT = Mi("transitionrun"),
        eT = Mi("transitionstart"),
        nT = Mi("transitioncancel"),
        sm = Mi("transitionend"),
        am = new Map,
        lu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    lu.push("scrollEnd");

    function Fe(t, n) {
        am.set(t, n), Ai(n, [t])
    }
    var rm = new WeakMap;

    function Pe(t, n) {
        if (typeof t == "object" && t !== null) {
            var s = rm.get(t);
            return s !== void 0 ? s : (n = {
                value: t,
                source: n,
                stack: Th(n)
            }, rm.set(t, n), n)
        }
        return {
            value: t,
            source: n,
            stack: Th(n)
        }
    }
    var Ue = [],
        cs = 0,
        uu = 0;

    function kr() {
        for (var t = cs, n = uu = cs = 0; n < t;) {
            var s = Ue[n];
            Ue[n++] = null;
            var r = Ue[n];
            Ue[n++] = null;
            var u = Ue[n];
            Ue[n++] = null;
            var d = Ue[n];
            if (Ue[n++] = null, r !== null && u !== null) {
                var y = r.pending;
                y === null ? u.next = u : (u.next = y.next, y.next = u), r.pending = u
            }
            d !== 0 && om(s, u, d)
        }
    }

    function Pr(t, n, s, r) {
        Ue[cs++] = t, Ue[cs++] = n, Ue[cs++] = s, Ue[cs++] = r, uu |= r, t.lanes |= r, t = t.alternate, t !== null && (t.lanes |= r)
    }

    function cu(t, n, s, r) {
        return Pr(t, n, s, r), Ur(t)
    }

    function fs(t, n) {
        return Pr(t, null, null, n), Ur(t)
    }

    function om(t, n, s) {
        t.lanes |= s;
        var r = t.alternate;
        r !== null && (r.lanes |= s);
        for (var u = !1, d = t.return; d !== null;) d.childLanes |= s, r = d.alternate, r !== null && (r.childLanes |= s), d.tag === 22 && (t = d.stateNode, t === null || t._visibility & 1 || (u = !0)), t = d, d = d.return;
        return t.tag === 3 ? (d = t.stateNode, u && n !== null && (u = 31 - Ae(s), t = d.hiddenUpdates, r = t[u], r === null ? t[u] = [n] : r.push(n), n.lane = s | 536870912), d) : null
    }

    function Ur(t) {
        if (50 < ka) throw ka = 0, gc = null, Error(o(185));
        for (var n = t.return; n !== null;) t = n, n = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var ds = {};

    function iT(t, n, s, r) {
        this.tag = t, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Re(t, n, s, r) {
        return new iT(t, n, s, r)
    }

    function fu(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function Tn(t, n) {
        var s = t.alternate;
        return s === null ? (s = Re(t.tag, n, t.key, t.mode), s.elementType = t.elementType, s.type = t.type, s.stateNode = t.stateNode, s.alternate = t, t.alternate = s) : (s.pendingProps = n, s.type = t.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = t.flags & 65011712, s.childLanes = t.childLanes, s.lanes = t.lanes, s.child = t.child, s.memoizedProps = t.memoizedProps, s.memoizedState = t.memoizedState, s.updateQueue = t.updateQueue, n = t.dependencies, s.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }, s.sibling = t.sibling, s.index = t.index, s.ref = t.ref, s.refCleanup = t.refCleanup, s
    }

    function lm(t, n) {
        t.flags &= 65011714;
        var s = t.alternate;
        return s === null ? (t.childLanes = 0, t.lanes = n, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = s.childLanes, t.lanes = s.lanes, t.child = s.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = s.memoizedProps, t.memoizedState = s.memoizedState, t.updateQueue = s.updateQueue, t.type = s.type, n = s.dependencies, t.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }), t
    }

    function Br(t, n, s, r, u, d) {
        var y = 0;
        if (r = t, typeof t == "function") fu(t) && (y = 1);
        else if (typeof t == "string") y = aw(t, s, rt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else t: switch (t) {
            case W:
                return t = Re(31, s, n, u), t.elementType = W, t.lanes = d, t;
            case A:
                return Di(s.children, u, d, n);
            case C:
                y = 8, u |= 24;
                break;
            case M:
                return t = Re(12, s, n, u | 2), t.elementType = M, t.lanes = d, t;
            case P:
                return t = Re(13, s, n, u), t.elementType = P, t.lanes = d, t;
            case Q:
                return t = Re(19, s, n, u), t.elementType = Q, t.lanes = d, t;
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case O:
                    case j:
                        y = 10;
                        break t;
                    case _:
                        y = 9;
                        break t;
                    case k:
                        y = 11;
                        break t;
                    case Z:
                        y = 14;
                        break t;
                    case H:
                        y = 16, r = null;
                        break t
                }
                y = 29, s = Error(o(130, t === null ? "null" : typeof t, "")), r = null
        }
        return n = Re(y, s, n, u), n.elementType = t, n.type = r, n.lanes = d, n
    }

    function Di(t, n, s, r) {
        return t = Re(7, t, r, n), t.lanes = s, t
    }

    function du(t, n, s) {
        return t = Re(6, t, null, n), t.lanes = s, t
    }

    function hu(t, n, s) {
        return n = Re(4, t.children !== null ? t.children : [], t.key, n), n.lanes = s, n.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, n
    }
    var hs = [],
        ms = 0,
        Hr = null,
        qr = 0,
        Be = [],
        He = 0,
        Oi = null,
        wn = 1,
        En = "";

    function Ni(t, n) {
        hs[ms++] = qr, hs[ms++] = Hr, Hr = t, qr = n
    }

    function um(t, n, s) {
        Be[He++] = wn, Be[He++] = En, Be[He++] = Oi, Oi = t;
        var r = wn;
        t = En;
        var u = 32 - Ae(r) - 1;
        r &= ~(1 << u), s += 1;
        var d = 32 - Ae(n) + u;
        if (30 < d) {
            var y = u - u % 5;
            d = (r & (1 << y) - 1).toString(32), r >>= y, u -= y, wn = 1 << 32 - Ae(n) + u | s << u | r, En = d + t
        } else wn = 1 << d | s << u | r, En = t
    }

    function mu(t) {
        t.return !== null && (Ni(t, 1), um(t, 1, 0))
    }

    function pu(t) {
        for (; t === Hr;) Hr = hs[--ms], hs[ms] = null, qr = hs[--ms], hs[ms] = null;
        for (; t === Oi;) Oi = Be[--He], Be[He] = null, En = Be[--He], Be[He] = null, wn = Be[--He], Be[He] = null
    }
    var he = null,
        Ht = null,
        At = !1,
        ji = null,
        un = !1,
        gu = Error(o(519));

    function _i(t) {
        var n = Error(o(418, ""));
        throw pa(Pe(n, t)), gu
    }

    function cm(t) {
        var n = t.stateNode,
            s = t.type,
            r = t.memoizedProps;
        switch (n[le] = t, n[ye] = r, s) {
            case "dialog":
                Tt("cancel", n), Tt("close", n);
                break;
            case "iframe":
            case "object":
            case "embed":
                Tt("load", n);
                break;
            case "video":
            case "audio":
                for (s = 0; s < Ua.length; s++) Tt(Ua[s], n);
                break;
            case "source":
                Tt("error", n);
                break;
            case "img":
            case "image":
            case "link":
                Tt("error", n), Tt("load", n);
                break;
            case "details":
                Tt("toggle", n);
                break;
            case "input":
                Tt("invalid", n), Ah(n, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), Mr(n);
                break;
            case "select":
                Tt("invalid", n);
                break;
            case "textarea":
                Tt("invalid", n), Rh(n, r.value, r.defaultValue, r.children), Mr(n)
        }
        s = r.children, typeof s != "string" && typeof s != "number" && typeof s != "bigint" || n.textContent === "" + s || r.suppressHydrationWarning === !0 || Rg(n.textContent, s) ? (r.popover != null && (Tt("beforetoggle", n), Tt("toggle", n)), r.onScroll != null && Tt("scroll", n), r.onScrollEnd != null && Tt("scrollend", n), r.onClick != null && (n.onclick = wo), n = !0) : n = !1, n || _i(t)
    }

    function fm(t) {
        for (he = t.return; he;) switch (he.tag) {
            case 5:
            case 13:
                un = !1;
                return;
            case 27:
            case 3:
                un = !0;
                return;
            default:
                he = he.return
        }
    }

    function ha(t) {
        if (t !== he) return !1;
        if (!At) return fm(t), At = !0, !1;
        var n = t.tag,
            s;
        if ((s = n !== 3 && n !== 27) && ((s = n === 5) && (s = t.type, s = !(s !== "form" && s !== "button") || jc(t.type, t.memoizedProps)), s = !s), s && Ht && _i(t), fm(t), n === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
            t: {
                for (t = t.nextSibling, n = 0; t;) {
                    if (t.nodeType === 8)
                        if (s = t.data, s === "/$") {
                            if (n === 0) {
                                Ht = We(t.nextSibling);
                                break t
                            }
                            n--
                        } else s !== "$" && s !== "$!" && s !== "$?" || n++;
                    t = t.nextSibling
                }
                Ht = null
            }
        } else n === 27 ? (n = Ht, ri(t.type) ? (t = Lc, Lc = null, Ht = t) : Ht = n) : Ht = he ? We(t.stateNode.nextSibling) : null;
        return !0
    }

    function ma() {
        Ht = he = null, At = !1
    }

    function dm() {
        var t = ji;
        return t !== null && (Se === null ? Se = t : Se.push.apply(Se, t), ji = null), t
    }

    function pa(t) {
        ji === null ? ji = [t] : ji.push(t)
    }
    var yu = G(null),
        Vi = null,
        An = null;

    function Xn(t, n, s) {
        J(yu, n._currentValue), n._currentValue = s
    }

    function Cn(t) {
        t._currentValue = yu.current, I(yu)
    }

    function vu(t, n, s) {
        for (; t !== null;) {
            var r = t.alternate;
            if ((t.childLanes & n) !== n ? (t.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), t === s) break;
            t = t.return
        }
    }

    function bu(t, n, s, r) {
        var u = t.child;
        for (u !== null && (u.return = t); u !== null;) {
            var d = u.dependencies;
            if (d !== null) {
                var y = u.child;
                d = d.firstContext;
                t: for (; d !== null;) {
                    var x = d;
                    d = u;
                    for (var R = 0; R < n.length; R++)
                        if (x.context === n[R]) {
                            d.lanes |= s, x = d.alternate, x !== null && (x.lanes |= s), vu(d.return, s, t), r || (y = null);
                            break t
                        } d = x.next
                }
            } else if (u.tag === 18) {
                if (y = u.return, y === null) throw Error(o(341));
                y.lanes |= s, d = y.alternate, d !== null && (d.lanes |= s), vu(y, s, t), y = null
            } else y = u.child;
            if (y !== null) y.return = u;
            else
                for (y = u; y !== null;) {
                    if (y === t) {
                        y = null;
                        break
                    }
                    if (u = y.sibling, u !== null) {
                        u.return = y.return, y = u;
                        break
                    }
                    y = y.return
                }
            u = y
        }
    }

    function ga(t, n, s, r) {
        t = null;
        for (var u = n, d = !1; u !== null;) {
            if (!d) {
                if ((u.flags & 524288) !== 0) d = !0;
                else if ((u.flags & 262144) !== 0) break
            }
            if (u.tag === 10) {
                var y = u.alternate;
                if (y === null) throw Error(o(387));
                if (y = y.memoizedProps, y !== null) {
                    var x = u.type;
                    Ce(u.pendingProps.value, y.value) || (t !== null ? t.push(x) : t = [x])
                }
            } else if (u === Lt.current) {
                if (y = u.alternate, y === null) throw Error(o(387));
                y.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Xa) : t = [Xa])
            }
            u = u.return
        }
        t !== null && bu(n, t, s, r), n.flags |= 262144
    }

    function Gr(t) {
        for (t = t.firstContext; t !== null;) {
            if (!Ce(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next
        }
        return !1
    }

    function zi(t) {
        Vi = t, An = null, t = t.dependencies, t !== null && (t.firstContext = null)
    }

    function ue(t) {
        return hm(Vi, t)
    }

    function Yr(t, n) {
        return Vi === null && zi(t), hm(t, n)
    }

    function hm(t, n) {
        var s = n._currentValue;
        if (n = {
                context: n,
                memoizedValue: s,
                next: null
            }, An === null) {
            if (t === null) throw Error(o(308));
            An = n, t.dependencies = {
                lanes: 0,
                firstContext: n
            }, t.flags |= 524288
        } else An = An.next = n;
        return s
    }
    var sT = typeof AbortController < "u" ? AbortController : function() {
            var t = [],
                n = this.signal = {
                    aborted: !1,
                    addEventListener: function(s, r) {
                        t.push(r)
                    }
                };
            this.abort = function() {
                n.aborted = !0, t.forEach(function(s) {
                    return s()
                })
            }
        },
        aT = e.unstable_scheduleCallback,
        rT = e.unstable_NormalPriority,
        Zt = {
            $$typeof: j,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function xu() {
        return {
            controller: new sT,
            data: new Map,
            refCount: 0
        }
    }

    function ya(t) {
        t.refCount--, t.refCount === 0 && aT(rT, function() {
            t.controller.abort()
        })
    }
    var va = null,
        Su = 0,
        ps = 0,
        gs = null;

    function oT(t, n) {
        if (va === null) {
            var s = va = [];
            Su = 0, ps = wc(), gs = {
                status: "pending",
                value: void 0,
                then: function(r) {
                    s.push(r)
                }
            }
        }
        return Su++, n.then(mm, mm), n
    }

    function mm() {
        if (--Su === 0 && va !== null) {
            gs !== null && (gs.status = "fulfilled");
            var t = va;
            va = null, ps = 0, gs = null;
            for (var n = 0; n < t.length; n++)(0, t[n])()
        }
    }

    function lT(t, n) {
        var s = [],
            r = {
                status: "pending",
                value: null,
                reason: null,
                then: function(u) {
                    s.push(u)
                }
            };
        return t.then(function() {
            r.status = "fulfilled", r.value = n;
            for (var u = 0; u < s.length; u++)(0, s[u])(n)
        }, function(u) {
            for (r.status = "rejected", r.reason = u, u = 0; u < s.length; u++)(0, s[u])(void 0)
        }), r
    }
    var pm = V.S;
    V.S = function(t, n) {
        typeof n == "object" && n !== null && typeof n.then == "function" && oT(t, n), pm !== null && pm(t, n)
    };
    var Li = G(null);

    function Tu() {
        var t = Li.current;
        return t !== null ? t : Vt.pooledCache
    }

    function Xr(t, n) {
        n === null ? J(Li, Li.current) : J(Li, n.pool)
    }

    function gm() {
        var t = Tu();
        return t === null ? null : {
            parent: Zt._currentValue,
            pool: t
        }
    }
    var ba = Error(o(460)),
        ym = Error(o(474)),
        Kr = Error(o(542)),
        wu = {
            then: function() {}
        };

    function vm(t) {
        return t = t.status, t === "fulfilled" || t === "rejected"
    }

    function Qr() {}

    function bm(t, n, s) {
        switch (s = t[s], s === void 0 ? t.push(n) : s !== n && (n.then(Qr, Qr), n = s), n.status) {
            case "fulfilled":
                return n.value;
            case "rejected":
                throw t = n.reason, Sm(t), t;
            default:
                if (typeof n.status == "string") n.then(Qr, Qr);
                else {
                    if (t = Vt, t !== null && 100 < t.shellSuspendCounter) throw Error(o(482));
                    t = n, t.status = "pending", t.then(function(r) {
                        if (n.status === "pending") {
                            var u = n;
                            u.status = "fulfilled", u.value = r
                        }
                    }, function(r) {
                        if (n.status === "pending") {
                            var u = n;
                            u.status = "rejected", u.reason = r
                        }
                    })
                }
                switch (n.status) {
                    case "fulfilled":
                        return n.value;
                    case "rejected":
                        throw t = n.reason, Sm(t), t
                }
                throw xa = n, ba
        }
    }
    var xa = null;

    function xm() {
        if (xa === null) throw Error(o(459));
        var t = xa;
        return xa = null, t
    }

    function Sm(t) {
        if (t === ba || t === Kr) throw Error(o(483))
    }
    var Kn = !1;

    function Eu(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function Au(t, n) {
        t = t.updateQueue, n.updateQueue === t && (n.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }

    function Qn(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Fn(t, n, s) {
        var r = t.updateQueue;
        if (r === null) return null;
        if (r = r.shared, (Mt & 2) !== 0) {
            var u = r.pending;
            return u === null ? n.next = n : (n.next = u.next, u.next = n), r.pending = n, n = Ur(t), om(t, null, s), n
        }
        return Pr(t, r, n, s), Ur(t)
    }

    function Sa(t, n, s) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (s & 4194048) !== 0)) {
            var r = n.lanes;
            r &= t.pendingLanes, s |= r, n.lanes = s, mh(t, s)
        }
    }

    function Cu(t, n) {
        var s = t.updateQueue,
            r = t.alternate;
        if (r !== null && (r = r.updateQueue, s === r)) {
            var u = null,
                d = null;
            if (s = s.firstBaseUpdate, s !== null) {
                do {
                    var y = {
                        lane: s.lane,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null
                    };
                    d === null ? u = d = y : d = d.next = y, s = s.next
                } while (s !== null);
                d === null ? u = d = n : d = d.next = n
            } else u = d = n;
            s = {
                baseState: r.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: d,
                shared: r.shared,
                callbacks: r.callbacks
            }, t.updateQueue = s;
            return
        }
        t = s.lastBaseUpdate, t === null ? s.firstBaseUpdate = n : t.next = n, s.lastBaseUpdate = n
    }
    var Ru = !1;

    function Ta() {
        if (Ru) {
            var t = gs;
            if (t !== null) throw t
        }
    }

    function wa(t, n, s, r) {
        Ru = !1;
        var u = t.updateQueue;
        Kn = !1;
        var d = u.firstBaseUpdate,
            y = u.lastBaseUpdate,
            x = u.shared.pending;
        if (x !== null) {
            u.shared.pending = null;
            var R = x,
                L = R.next;
            R.next = null, y === null ? d = L : y.next = L, y = R;
            var q = t.alternate;
            q !== null && (q = q.updateQueue, x = q.lastBaseUpdate, x !== y && (x === null ? q.firstBaseUpdate = L : x.next = L, q.lastBaseUpdate = R))
        }
        if (d !== null) {
            var K = u.baseState;
            y = 0, q = L = R = null, x = d;
            do {
                var U = x.lane & -536870913,
                    B = U !== x.lane;
                if (B ? (wt & U) === U : (r & U) === U) {
                    U !== 0 && U === ps && (Ru = !0), q !== null && (q = q.next = {
                        lane: 0,
                        tag: x.tag,
                        payload: x.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var mt = t,
                            ct = x;U = n;
                        var jt = s;
                        switch (ct.tag) {
                            case 1:
                                if (mt = ct.payload, typeof mt == "function") {
                                    K = mt.call(jt, K, U);
                                    break t
                                }
                                K = mt;
                                break t;
                            case 3:
                                mt.flags = mt.flags & -65537 | 128;
                            case 0:
                                if (mt = ct.payload, U = typeof mt == "function" ? mt.call(jt, K, U) : mt, U == null) break t;
                                K = g({}, K, U);
                                break t;
                            case 2:
                                Kn = !0
                        }
                    }
                    U = x.callback, U !== null && (t.flags |= 64, B && (t.flags |= 8192), B = u.callbacks, B === null ? u.callbacks = [U] : B.push(U))
                } else B = {
                    lane: U,
                    tag: x.tag,
                    payload: x.payload,
                    callback: x.callback,
                    next: null
                }, q === null ? (L = q = B, R = K) : q = q.next = B, y |= U;
                if (x = x.next, x === null) {
                    if (x = u.shared.pending, x === null) break;
                    B = x, x = B.next, B.next = null, u.lastBaseUpdate = B, u.shared.pending = null
                }
            } while (!0);
            q === null && (R = K), u.baseState = R, u.firstBaseUpdate = L, u.lastBaseUpdate = q, d === null && (u.shared.lanes = 0), ni |= y, t.lanes = y, t.memoizedState = K
        }
    }

    function Tm(t, n) {
        if (typeof t != "function") throw Error(o(191, t));
        t.call(n)
    }

    function wm(t, n) {
        var s = t.callbacks;
        if (s !== null)
            for (t.callbacks = null, t = 0; t < s.length; t++) Tm(s[t], n)
    }
    var ys = G(null),
        Fr = G(0);

    function Em(t, n) {
        t = _n, J(Fr, t), J(ys, n), _n = t | n.baseLanes
    }

    function Mu() {
        J(Fr, _n), J(ys, ys.current)
    }

    function Du() {
        _n = Fr.current, I(ys), I(Fr)
    }
    var Zn = 0,
        yt = null,
        Ot = null,
        Kt = null,
        Zr = !1,
        vs = !1,
        ki = !1,
        Wr = 0,
        Ea = 0,
        bs = null,
        uT = 0;

    function Yt() {
        throw Error(o(321))
    }

    function Ou(t, n) {
        if (n === null) return !1;
        for (var s = 0; s < n.length && s < t.length; s++)
            if (!Ce(t[s], n[s])) return !1;
        return !0
    }

    function Nu(t, n, s, r, u, d) {
        return Zn = d, yt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, V.H = t === null || t.memoizedState === null ? op : lp, ki = !1, d = s(r, u), ki = !1, vs && (d = Cm(n, s, r, u)), Am(t), d
    }

    function Am(t) {
        V.H = no;
        var n = Ot !== null && Ot.next !== null;
        if (Zn = 0, Kt = Ot = yt = null, Zr = !1, Ea = 0, bs = null, n) throw Error(o(300));
        t === null || ee || (t = t.dependencies, t !== null && Gr(t) && (ee = !0))
    }

    function Cm(t, n, s, r) {
        yt = t;
        var u = 0;
        do {
            if (vs && (bs = null), Ea = 0, vs = !1, 25 <= u) throw Error(o(301));
            if (u += 1, Kt = Ot = null, t.updateQueue != null) {
                var d = t.updateQueue;
                d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0)
            }
            V.H = gT, d = n(s, r)
        } while (vs);
        return d
    }

    function cT() {
        var t = V.H,
            n = t.useState()[0];
        return n = typeof n.then == "function" ? Aa(n) : n, t = t.useState()[0], (Ot !== null ? Ot.memoizedState : null) !== t && (yt.flags |= 1024), n
    }

    function ju() {
        var t = Wr !== 0;
        return Wr = 0, t
    }

    function _u(t, n, s) {
        n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~s
    }

    function Vu(t) {
        if (Zr) {
            for (t = t.memoizedState; t !== null;) {
                var n = t.queue;
                n !== null && (n.pending = null), t = t.next
            }
            Zr = !1
        }
        Zn = 0, Kt = Ot = yt = null, vs = !1, Ea = Wr = 0, bs = null
    }

    function be() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Kt === null ? yt.memoizedState = Kt = t : Kt = Kt.next = t, Kt
    }

    function Qt() {
        if (Ot === null) {
            var t = yt.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = Ot.next;
        var n = Kt === null ? yt.memoizedState : Kt.next;
        if (n !== null) Kt = n, Ot = t;
        else {
            if (t === null) throw yt.alternate === null ? Error(o(467)) : Error(o(310));
            Ot = t, t = {
                memoizedState: Ot.memoizedState,
                baseState: Ot.baseState,
                baseQueue: Ot.baseQueue,
                queue: Ot.queue,
                next: null
            }, Kt === null ? yt.memoizedState = Kt = t : Kt = Kt.next = t
        }
        return Kt
    }

    function zu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function Aa(t) {
        var n = Ea;
        return Ea += 1, bs === null && (bs = []), t = bm(bs, t, n), n = yt, (Kt === null ? n.memoizedState : Kt.next) === null && (n = n.alternate, V.H = n === null || n.memoizedState === null ? op : lp), t
    }

    function Jr(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return Aa(t);
            if (t.$$typeof === j) return ue(t)
        }
        throw Error(o(438, String(t)))
    }

    function Lu(t) {
        var n = null,
            s = yt.updateQueue;
        if (s !== null && (n = s.memoCache), n == null) {
            var r = yt.alternate;
            r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (n = {
                data: r.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (n == null && (n = {
                data: [],
                index: 0
            }), s === null && (s = zu(), yt.updateQueue = s), s.memoCache = n, s = n.data[n.index], s === void 0)
            for (s = n.data[n.index] = Array(t), r = 0; r < t; r++) s[r] = ot;
        return n.index++, s
    }

    function Rn(t, n) {
        return typeof n == "function" ? n(t) : n
    }

    function Ir(t) {
        var n = Qt();
        return ku(n, Ot, t)
    }

    function ku(t, n, s) {
        var r = t.queue;
        if (r === null) throw Error(o(311));
        r.lastRenderedReducer = s;
        var u = t.baseQueue,
            d = r.pending;
        if (d !== null) {
            if (u !== null) {
                var y = u.next;
                u.next = d.next, d.next = y
            }
            n.baseQueue = u = d, r.pending = null
        }
        if (d = t.baseState, u === null) t.memoizedState = d;
        else {
            n = u.next;
            var x = y = null,
                R = null,
                L = n,
                q = !1;
            do {
                var K = L.lane & -536870913;
                if (K !== L.lane ? (wt & K) === K : (Zn & K) === K) {
                    var U = L.revertLane;
                    if (U === 0) R !== null && (R = R.next = {
                        lane: 0,
                        revertLane: 0,
                        action: L.action,
                        hasEagerState: L.hasEagerState,
                        eagerState: L.eagerState,
                        next: null
                    }), K === ps && (q = !0);
                    else if ((Zn & U) === U) {
                        L = L.next, U === ps && (q = !0);
                        continue
                    } else K = {
                        lane: 0,
                        revertLane: L.revertLane,
                        action: L.action,
                        hasEagerState: L.hasEagerState,
                        eagerState: L.eagerState,
                        next: null
                    }, R === null ? (x = R = K, y = d) : R = R.next = K, yt.lanes |= U, ni |= U;
                    K = L.action, ki && s(d, K), d = L.hasEagerState ? L.eagerState : s(d, K)
                } else U = {
                    lane: K,
                    revertLane: L.revertLane,
                    action: L.action,
                    hasEagerState: L.hasEagerState,
                    eagerState: L.eagerState,
                    next: null
                }, R === null ? (x = R = U, y = d) : R = R.next = U, yt.lanes |= K, ni |= K;
                L = L.next
            } while (L !== null && L !== n);
            if (R === null ? y = d : R.next = x, !Ce(d, t.memoizedState) && (ee = !0, q && (s = gs, s !== null))) throw s;
            t.memoizedState = d, t.baseState = y, t.baseQueue = R, r.lastRenderedState = d
        }
        return u === null && (r.lanes = 0), [t.memoizedState, r.dispatch]
    }

    function Pu(t) {
        var n = Qt(),
            s = n.queue;
        if (s === null) throw Error(o(311));
        s.lastRenderedReducer = t;
        var r = s.dispatch,
            u = s.pending,
            d = n.memoizedState;
        if (u !== null) {
            s.pending = null;
            var y = u = u.next;
            do d = t(d, y.action), y = y.next; while (y !== u);
            Ce(d, n.memoizedState) || (ee = !0), n.memoizedState = d, n.baseQueue === null && (n.baseState = d), s.lastRenderedState = d
        }
        return [d, r]
    }

    function Rm(t, n, s) {
        var r = yt,
            u = Qt(),
            d = At;
        if (d) {
            if (s === void 0) throw Error(o(407));
            s = s()
        } else s = n();
        var y = !Ce((Ot || u).memoizedState, s);
        y && (u.memoizedState = s, ee = !0), u = u.queue;
        var x = Om.bind(null, r, u, t);
        if (Ca(2048, 8, x, [t]), u.getSnapshot !== n || y || Kt !== null && Kt.memoizedState.tag & 1) {
            if (r.flags |= 2048, xs(9, $r(), Dm.bind(null, r, u, s, n), null), Vt === null) throw Error(o(349));
            d || (Zn & 124) !== 0 || Mm(r, n, s)
        }
        return s
    }

    function Mm(t, n, s) {
        t.flags |= 16384, t = {
            getSnapshot: n,
            value: s
        }, n = yt.updateQueue, n === null ? (n = zu(), yt.updateQueue = n, n.stores = [t]) : (s = n.stores, s === null ? n.stores = [t] : s.push(t))
    }

    function Dm(t, n, s, r) {
        n.value = s, n.getSnapshot = r, Nm(n) && jm(t)
    }

    function Om(t, n, s) {
        return s(function() {
            Nm(n) && jm(t)
        })
    }

    function Nm(t) {
        var n = t.getSnapshot;
        t = t.value;
        try {
            var s = n();
            return !Ce(t, s)
        } catch {
            return !0
        }
    }

    function jm(t) {
        var n = fs(t, 2);
        n !== null && je(n, t, 2)
    }

    function Uu(t) {
        var n = be();
        if (typeof t == "function") {
            var s = t;
            if (t = s(), ki) {
                qn(!0);
                try {
                    s()
                } finally {
                    qn(!1)
                }
            }
        }
        return n.memoizedState = n.baseState = t, n.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Rn,
            lastRenderedState: t
        }, n
    }

    function _m(t, n, s, r) {
        return t.baseState = s, ku(t, Ot, typeof r == "function" ? r : Rn)
    }

    function fT(t, n, s, r, u) {
        if (eo(t)) throw Error(o(485));
        if (t = n.action, t !== null) {
            var d = {
                payload: u,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(y) {
                    d.listeners.push(y)
                }
            };
            V.T !== null ? s(!0) : d.isTransition = !1, r(d), s = n.pending, s === null ? (d.next = n.pending = d, Vm(n, d)) : (d.next = s.next, n.pending = s.next = d)
        }
    }

    function Vm(t, n) {
        var s = n.action,
            r = n.payload,
            u = t.state;
        if (n.isTransition) {
            var d = V.T,
                y = {};
            V.T = y;
            try {
                var x = s(u, r),
                    R = V.S;
                R !== null && R(y, x), zm(t, n, x)
            } catch (L) {
                Bu(t, n, L)
            } finally {
                V.T = d
            }
        } else try {
            d = s(u, r), zm(t, n, d)
        } catch (L) {
            Bu(t, n, L)
        }
    }

    function zm(t, n, s) {
        s !== null && typeof s == "object" && typeof s.then == "function" ? s.then(function(r) {
            Lm(t, n, r)
        }, function(r) {
            return Bu(t, n, r)
        }) : Lm(t, n, s)
    }

    function Lm(t, n, s) {
        n.status = "fulfilled", n.value = s, km(n), t.state = s, n = t.pending, n !== null && (s = n.next, s === n ? t.pending = null : (s = s.next, n.next = s, Vm(t, s)))
    }

    function Bu(t, n, s) {
        var r = t.pending;
        if (t.pending = null, r !== null) {
            r = r.next;
            do n.status = "rejected", n.reason = s, km(n), n = n.next; while (n !== r)
        }
        t.action = null
    }

    function km(t) {
        t = t.listeners;
        for (var n = 0; n < t.length; n++)(0, t[n])()
    }

    function Pm(t, n) {
        return n
    }

    function Um(t, n) {
        if (At) {
            var s = Vt.formState;
            if (s !== null) {
                t: {
                    var r = yt;
                    if (At) {
                        if (Ht) {
                            e: {
                                for (var u = Ht, d = un; u.nodeType !== 8;) {
                                    if (!d) {
                                        u = null;
                                        break e
                                    }
                                    if (u = We(u.nextSibling), u === null) {
                                        u = null;
                                        break e
                                    }
                                }
                                d = u.data,
                                u = d === "F!" || d === "F" ? u : null
                            }
                            if (u) {
                                Ht = We(u.nextSibling), r = u.data === "F!";
                                break t
                            }
                        }
                        _i(r)
                    }
                    r = !1
                }
                r && (n = s[0])
            }
        }
        return s = be(), s.memoizedState = s.baseState = n, r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Pm,
            lastRenderedState: n
        }, s.queue = r, s = sp.bind(null, yt, r), r.dispatch = s, r = Uu(!1), d = Xu.bind(null, yt, !1, r.queue), r = be(), u = {
            state: n,
            dispatch: null,
            action: t,
            pending: null
        }, r.queue = u, s = fT.bind(null, yt, u, d, s), u.dispatch = s, r.memoizedState = t, [n, s, !1]
    }

    function Bm(t) {
        var n = Qt();
        return Hm(n, Ot, t)
    }

    function Hm(t, n, s) {
        if (n = ku(t, n, Pm)[0], t = Ir(Rn)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
            var r = Aa(n)
        } catch (y) {
            throw y === ba ? Kr : y
        } else r = n;
        n = Qt();
        var u = n.queue,
            d = u.dispatch;
        return s !== n.memoizedState && (yt.flags |= 2048, xs(9, $r(), dT.bind(null, u, s), null)), [r, d, t]
    }

    function dT(t, n) {
        t.action = n
    }

    function qm(t) {
        var n = Qt(),
            s = Ot;
        if (s !== null) return Hm(n, s, t);
        Qt(), n = n.memoizedState, s = Qt();
        var r = s.queue.dispatch;
        return s.memoizedState = t, [n, r, !1]
    }

    function xs(t, n, s, r) {
        return t = {
            tag: t,
            create: s,
            deps: r,
            inst: n,
            next: null
        }, n = yt.updateQueue, n === null && (n = zu(), yt.updateQueue = n), s = n.lastEffect, s === null ? n.lastEffect = t.next = t : (r = s.next, s.next = t, t.next = r, n.lastEffect = t), t
    }

    function $r() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function Gm() {
        return Qt().memoizedState
    }

    function to(t, n, s, r) {
        var u = be();
        r = r === void 0 ? null : r, yt.flags |= t, u.memoizedState = xs(1 | n, $r(), s, r)
    }

    function Ca(t, n, s, r) {
        var u = Qt();
        r = r === void 0 ? null : r;
        var d = u.memoizedState.inst;
        Ot !== null && r !== null && Ou(r, Ot.memoizedState.deps) ? u.memoizedState = xs(n, d, s, r) : (yt.flags |= t, u.memoizedState = xs(1 | n, d, s, r))
    }

    function Ym(t, n) {
        to(8390656, 8, t, n)
    }

    function Xm(t, n) {
        Ca(2048, 8, t, n)
    }

    function Km(t, n) {
        return Ca(4, 2, t, n)
    }

    function Qm(t, n) {
        return Ca(4, 4, t, n)
    }

    function Fm(t, n) {
        if (typeof n == "function") {
            t = t();
            var s = n(t);
            return function() {
                typeof s == "function" ? s() : n(null)
            }
        }
        if (n != null) return t = t(), n.current = t,
            function() {
                n.current = null
            }
    }

    function Zm(t, n, s) {
        s = s != null ? s.concat([t]) : null, Ca(4, 4, Fm.bind(null, n, t), s)
    }

    function Hu() {}

    function Wm(t, n) {
        var s = Qt();
        n = n === void 0 ? null : n;
        var r = s.memoizedState;
        return n !== null && Ou(n, r[1]) ? r[0] : (s.memoizedState = [t, n], t)
    }

    function Jm(t, n) {
        var s = Qt();
        n = n === void 0 ? null : n;
        var r = s.memoizedState;
        if (n !== null && Ou(n, r[1])) return r[0];
        if (r = t(), ki) {
            qn(!0);
            try {
                t()
            } finally {
                qn(!1)
            }
        }
        return s.memoizedState = [r, n], r
    }

    function qu(t, n, s) {
        return s === void 0 || (Zn & 1073741824) !== 0 ? t.memoizedState = n : (t.memoizedState = s, t = tg(), yt.lanes |= t, ni |= t, s)
    }

    function Im(t, n, s, r) {
        return Ce(s, n) ? s : ys.current !== null ? (t = qu(t, s, r), Ce(t, n) || (ee = !0), t) : (Zn & 42) === 0 ? (ee = !0, t.memoizedState = s) : (t = tg(), yt.lanes |= t, ni |= t, n)
    }

    function $m(t, n, s, r, u) {
        var d = F.p;
        F.p = d !== 0 && 8 > d ? d : 8;
        var y = V.T,
            x = {};
        V.T = x, Xu(t, !1, n, s);
        try {
            var R = u(),
                L = V.S;
            if (L !== null && L(x, R), R !== null && typeof R == "object" && typeof R.then == "function") {
                var q = lT(R, r);
                Ra(t, n, q, Ne(t))
            } else Ra(t, n, r, Ne(t))
        } catch (K) {
            Ra(t, n, {
                then: function() {},
                status: "rejected",
                reason: K
            }, Ne())
        } finally {
            F.p = d, V.T = y
        }
    }

    function hT() {}

    function Gu(t, n, s, r) {
        if (t.tag !== 5) throw Error(o(476));
        var u = tp(t).queue;
        $m(t, u, n, X, s === null ? hT : function() {
            return ep(t), s(r)
        })
    }

    function tp(t) {
        var n = t.memoizedState;
        if (n !== null) return n;
        n = {
            memoizedState: X,
            baseState: X,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Rn,
                lastRenderedState: X
            },
            next: null
        };
        var s = {};
        return n.next = {
            memoizedState: s,
            baseState: s,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Rn,
                lastRenderedState: s
            },
            next: null
        }, t.memoizedState = n, t = t.alternate, t !== null && (t.memoizedState = n), n
    }

    function ep(t) {
        var n = tp(t).next.queue;
        Ra(t, n, {}, Ne())
    }

    function Yu() {
        return ue(Xa)
    }

    function np() {
        return Qt().memoizedState
    }

    function ip() {
        return Qt().memoizedState
    }

    function mT(t) {
        for (var n = t.return; n !== null;) {
            switch (n.tag) {
                case 24:
                case 3:
                    var s = Ne();
                    t = Qn(s);
                    var r = Fn(n, t, s);
                    r !== null && (je(r, n, s), Sa(r, n, s)), n = {
                        cache: xu()
                    }, t.payload = n;
                    return
            }
            n = n.return
        }
    }

    function pT(t, n, s) {
        var r = Ne();
        s = {
            lane: r,
            revertLane: 0,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, eo(t) ? ap(n, s) : (s = cu(t, n, s, r), s !== null && (je(s, t, r), rp(s, n, r)))
    }

    function sp(t, n, s) {
        var r = Ne();
        Ra(t, n, s, r)
    }

    function Ra(t, n, s, r) {
        var u = {
            lane: r,
            revertLane: 0,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (eo(t)) ap(n, u);
        else {
            var d = t.alternate;
            if (t.lanes === 0 && (d === null || d.lanes === 0) && (d = n.lastRenderedReducer, d !== null)) try {
                var y = n.lastRenderedState,
                    x = d(y, s);
                if (u.hasEagerState = !0, u.eagerState = x, Ce(x, y)) return Pr(t, n, u, 0), Vt === null && kr(), !1
            } catch {}
            if (s = cu(t, n, u, r), s !== null) return je(s, t, r), rp(s, n, r), !0
        }
        return !1
    }

    function Xu(t, n, s, r) {
        if (r = {
                lane: 2,
                revertLane: wc(),
                action: r,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, eo(t)) {
            if (n) throw Error(o(479))
        } else n = cu(t, s, r, 2), n !== null && je(n, t, 2)
    }

    function eo(t) {
        var n = t.alternate;
        return t === yt || n !== null && n === yt
    }

    function ap(t, n) {
        vs = Zr = !0;
        var s = t.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), t.pending = n
    }

    function rp(t, n, s) {
        if ((s & 4194048) !== 0) {
            var r = n.lanes;
            r &= t.pendingLanes, s |= r, n.lanes = s, mh(t, s)
        }
    }
    var no = {
            readContext: ue,
            use: Jr,
            useCallback: Yt,
            useContext: Yt,
            useEffect: Yt,
            useImperativeHandle: Yt,
            useLayoutEffect: Yt,
            useInsertionEffect: Yt,
            useMemo: Yt,
            useReducer: Yt,
            useRef: Yt,
            useState: Yt,
            useDebugValue: Yt,
            useDeferredValue: Yt,
            useTransition: Yt,
            useSyncExternalStore: Yt,
            useId: Yt,
            useHostTransitionStatus: Yt,
            useFormState: Yt,
            useActionState: Yt,
            useOptimistic: Yt,
            useMemoCache: Yt,
            useCacheRefresh: Yt
        },
        op = {
            readContext: ue,
            use: Jr,
            useCallback: function(t, n) {
                return be().memoizedState = [t, n === void 0 ? null : n], t
            },
            useContext: ue,
            useEffect: Ym,
            useImperativeHandle: function(t, n, s) {
                s = s != null ? s.concat([t]) : null, to(4194308, 4, Fm.bind(null, n, t), s)
            },
            useLayoutEffect: function(t, n) {
                return to(4194308, 4, t, n)
            },
            useInsertionEffect: function(t, n) {
                to(4, 2, t, n)
            },
            useMemo: function(t, n) {
                var s = be();
                n = n === void 0 ? null : n;
                var r = t();
                if (ki) {
                    qn(!0);
                    try {
                        t()
                    } finally {
                        qn(!1)
                    }
                }
                return s.memoizedState = [r, n], r
            },
            useReducer: function(t, n, s) {
                var r = be();
                if (s !== void 0) {
                    var u = s(n);
                    if (ki) {
                        qn(!0);
                        try {
                            s(n)
                        } finally {
                            qn(!1)
                        }
                    }
                } else u = n;
                return r.memoizedState = r.baseState = u, t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: u
                }, r.queue = t, t = t.dispatch = pT.bind(null, yt, t), [r.memoizedState, t]
            },
            useRef: function(t) {
                var n = be();
                return t = {
                    current: t
                }, n.memoizedState = t
            },
            useState: function(t) {
                t = Uu(t);
                var n = t.queue,
                    s = sp.bind(null, yt, n);
                return n.dispatch = s, [t.memoizedState, s]
            },
            useDebugValue: Hu,
            useDeferredValue: function(t, n) {
                var s = be();
                return qu(s, t, n)
            },
            useTransition: function() {
                var t = Uu(!1);
                return t = $m.bind(null, yt, t.queue, !0, !1), be().memoizedState = t, [!1, t]
            },
            useSyncExternalStore: function(t, n, s) {
                var r = yt,
                    u = be();
                if (At) {
                    if (s === void 0) throw Error(o(407));
                    s = s()
                } else {
                    if (s = n(), Vt === null) throw Error(o(349));
                    (wt & 124) !== 0 || Mm(r, n, s)
                }
                u.memoizedState = s;
                var d = {
                    value: s,
                    getSnapshot: n
                };
                return u.queue = d, Ym(Om.bind(null, r, d, t), [t]), r.flags |= 2048, xs(9, $r(), Dm.bind(null, r, d, s, n), null), s
            },
            useId: function() {
                var t = be(),
                    n = Vt.identifierPrefix;
                if (At) {
                    var s = En,
                        r = wn;
                    s = (r & ~(1 << 32 - Ae(r) - 1)).toString(32) + s, n = "«" + n + "R" + s, s = Wr++, 0 < s && (n += "H" + s.toString(32)), n += "»"
                } else s = uT++, n = "«" + n + "r" + s.toString(32) + "»";
                return t.memoizedState = n
            },
            useHostTransitionStatus: Yu,
            useFormState: Um,
            useActionState: Um,
            useOptimistic: function(t) {
                var n = be();
                n.memoizedState = n.baseState = t;
                var s = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return n.queue = s, n = Xu.bind(null, yt, !0, s), s.dispatch = n, [t, n]
            },
            useMemoCache: Lu,
            useCacheRefresh: function() {
                return be().memoizedState = mT.bind(null, yt)
            }
        },
        lp = {
            readContext: ue,
            use: Jr,
            useCallback: Wm,
            useContext: ue,
            useEffect: Xm,
            useImperativeHandle: Zm,
            useInsertionEffect: Km,
            useLayoutEffect: Qm,
            useMemo: Jm,
            useReducer: Ir,
            useRef: Gm,
            useState: function() {
                return Ir(Rn)
            },
            useDebugValue: Hu,
            useDeferredValue: function(t, n) {
                var s = Qt();
                return Im(s, Ot.memoizedState, t, n)
            },
            useTransition: function() {
                var t = Ir(Rn)[0],
                    n = Qt().memoizedState;
                return [typeof t == "boolean" ? t : Aa(t), n]
            },
            useSyncExternalStore: Rm,
            useId: np,
            useHostTransitionStatus: Yu,
            useFormState: Bm,
            useActionState: Bm,
            useOptimistic: function(t, n) {
                var s = Qt();
                return _m(s, Ot, t, n)
            },
            useMemoCache: Lu,
            useCacheRefresh: ip
        },
        gT = {
            readContext: ue,
            use: Jr,
            useCallback: Wm,
            useContext: ue,
            useEffect: Xm,
            useImperativeHandle: Zm,
            useInsertionEffect: Km,
            useLayoutEffect: Qm,
            useMemo: Jm,
            useReducer: Pu,
            useRef: Gm,
            useState: function() {
                return Pu(Rn)
            },
            useDebugValue: Hu,
            useDeferredValue: function(t, n) {
                var s = Qt();
                return Ot === null ? qu(s, t, n) : Im(s, Ot.memoizedState, t, n)
            },
            useTransition: function() {
                var t = Pu(Rn)[0],
                    n = Qt().memoizedState;
                return [typeof t == "boolean" ? t : Aa(t), n]
            },
            useSyncExternalStore: Rm,
            useId: np,
            useHostTransitionStatus: Yu,
            useFormState: qm,
            useActionState: qm,
            useOptimistic: function(t, n) {
                var s = Qt();
                return Ot !== null ? _m(s, Ot, t, n) : (s.baseState = t, [t, s.queue.dispatch])
            },
            useMemoCache: Lu,
            useCacheRefresh: ip
        },
        Ss = null,
        Ma = 0;

    function io(t) {
        var n = Ma;
        return Ma += 1, Ss === null && (Ss = []), bm(Ss, t, n)
    }

    function Da(t, n) {
        n = n.props.ref, t.ref = n !== void 0 ? n : null
    }

    function so(t, n) {
        throw n.$$typeof === v ? Error(o(525)) : (t = Object.prototype.toString.call(n), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t)))
    }

    function up(t) {
        var n = t._init;
        return n(t._payload)
    }

    function cp(t) {
        function n(N, D) {
            if (t) {
                var z = N.deletions;
                z === null ? (N.deletions = [D], N.flags |= 16) : z.push(D)
            }
        }

        function s(N, D) {
            if (!t) return null;
            for (; D !== null;) n(N, D), D = D.sibling;
            return null
        }

        function r(N) {
            for (var D = new Map; N !== null;) N.key !== null ? D.set(N.key, N) : D.set(N.index, N), N = N.sibling;
            return D
        }

        function u(N, D) {
            return N = Tn(N, D), N.index = 0, N.sibling = null, N
        }

        function d(N, D, z) {
            return N.index = z, t ? (z = N.alternate, z !== null ? (z = z.index, z < D ? (N.flags |= 67108866, D) : z) : (N.flags |= 67108866, D)) : (N.flags |= 1048576, D)
        }

        function y(N) {
            return t && N.alternate === null && (N.flags |= 67108866), N
        }

        function x(N, D, z, Y) {
            return D === null || D.tag !== 6 ? (D = du(z, N.mode, Y), D.return = N, D) : (D = u(D, z), D.return = N, D)
        }

        function R(N, D, z, Y) {
            var et = z.type;
            return et === A ? q(N, D, z.props.children, Y, z.key) : D !== null && (D.elementType === et || typeof et == "object" && et !== null && et.$$typeof === H && up(et) === D.type) ? (D = u(D, z.props), Da(D, z), D.return = N, D) : (D = Br(z.type, z.key, z.props, null, N.mode, Y), Da(D, z), D.return = N, D)
        }

        function L(N, D, z, Y) {
            return D === null || D.tag !== 4 || D.stateNode.containerInfo !== z.containerInfo || D.stateNode.implementation !== z.implementation ? (D = hu(z, N.mode, Y), D.return = N, D) : (D = u(D, z.children || []), D.return = N, D)
        }

        function q(N, D, z, Y, et) {
            return D === null || D.tag !== 7 ? (D = Di(z, N.mode, Y, et), D.return = N, D) : (D = u(D, z), D.return = N, D)
        }

        function K(N, D, z) {
            if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint") return D = du("" + D, N.mode, z), D.return = N, D;
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                    case b:
                        return z = Br(D.type, D.key, D.props, null, N.mode, z), Da(z, D), z.return = N, z;
                    case T:
                        return D = hu(D, N.mode, z), D.return = N, D;
                    case H:
                        var Y = D._init;
                        return D = Y(D._payload), K(N, D, z)
                }
                if (ft(D) || ut(D)) return D = Di(D, N.mode, z, null), D.return = N, D;
                if (typeof D.then == "function") return K(N, io(D), z);
                if (D.$$typeof === j) return K(N, Yr(N, D), z);
                so(N, D)
            }
            return null
        }

        function U(N, D, z, Y) {
            var et = D !== null ? D.key : null;
            if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return et !== null ? null : x(N, D, "" + z, Y);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                    case b:
                        return z.key === et ? R(N, D, z, Y) : null;
                    case T:
                        return z.key === et ? L(N, D, z, Y) : null;
                    case H:
                        return et = z._init, z = et(z._payload), U(N, D, z, Y)
                }
                if (ft(z) || ut(z)) return et !== null ? null : q(N, D, z, Y, null);
                if (typeof z.then == "function") return U(N, D, io(z), Y);
                if (z.$$typeof === j) return U(N, D, Yr(N, z), Y);
                so(N, z)
            }
            return null
        }

        function B(N, D, z, Y, et) {
            if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint") return N = N.get(z) || null, x(D, N, "" + Y, et);
            if (typeof Y == "object" && Y !== null) {
                switch (Y.$$typeof) {
                    case b:
                        return N = N.get(Y.key === null ? z : Y.key) || null, R(D, N, Y, et);
                    case T:
                        return N = N.get(Y.key === null ? z : Y.key) || null, L(D, N, Y, et);
                    case H:
                        var xt = Y._init;
                        return Y = xt(Y._payload), B(N, D, z, Y, et)
                }
                if (ft(Y) || ut(Y)) return N = N.get(z) || null, q(D, N, Y, et, null);
                if (typeof Y.then == "function") return B(N, D, z, io(Y), et);
                if (Y.$$typeof === j) return B(N, D, z, Yr(D, Y), et);
                so(D, Y)
            }
            return null
        }

        function mt(N, D, z, Y) {
            for (var et = null, xt = null, lt = D, ht = D = 0, ie = null; lt !== null && ht < z.length; ht++) {
                lt.index > ht ? (ie = lt, lt = null) : ie = lt.sibling;
                var Et = U(N, lt, z[ht], Y);
                if (Et === null) {
                    lt === null && (lt = ie);
                    break
                }
                t && lt && Et.alternate === null && n(N, lt), D = d(Et, D, ht), xt === null ? et = Et : xt.sibling = Et, xt = Et, lt = ie
            }
            if (ht === z.length) return s(N, lt), At && Ni(N, ht), et;
            if (lt === null) {
                for (; ht < z.length; ht++) lt = K(N, z[ht], Y), lt !== null && (D = d(lt, D, ht), xt === null ? et = lt : xt.sibling = lt, xt = lt);
                return At && Ni(N, ht), et
            }
            for (lt = r(lt); ht < z.length; ht++) ie = B(lt, N, ht, z[ht], Y), ie !== null && (t && ie.alternate !== null && lt.delete(ie.key === null ? ht : ie.key), D = d(ie, D, ht), xt === null ? et = ie : xt.sibling = ie, xt = ie);
            return t && lt.forEach(function(fi) {
                return n(N, fi)
            }), At && Ni(N, ht), et
        }

        function ct(N, D, z, Y) {
            if (z == null) throw Error(o(151));
            for (var et = null, xt = null, lt = D, ht = D = 0, ie = null, Et = z.next(); lt !== null && !Et.done; ht++, Et = z.next()) {
                lt.index > ht ? (ie = lt, lt = null) : ie = lt.sibling;
                var fi = U(N, lt, Et.value, Y);
                if (fi === null) {
                    lt === null && (lt = ie);
                    break
                }
                t && lt && fi.alternate === null && n(N, lt), D = d(fi, D, ht), xt === null ? et = fi : xt.sibling = fi, xt = fi, lt = ie
            }
            if (Et.done) return s(N, lt), At && Ni(N, ht), et;
            if (lt === null) {
                for (; !Et.done; ht++, Et = z.next()) Et = K(N, Et.value, Y), Et !== null && (D = d(Et, D, ht), xt === null ? et = Et : xt.sibling = Et, xt = Et);
                return At && Ni(N, ht), et
            }
            for (lt = r(lt); !Et.done; ht++, Et = z.next()) Et = B(lt, N, ht, Et.value, Y), Et !== null && (t && Et.alternate !== null && lt.delete(Et.key === null ? ht : Et.key), D = d(Et, D, ht), xt === null ? et = Et : xt.sibling = Et, xt = Et);
            return t && lt.forEach(function(yw) {
                return n(N, yw)
            }), At && Ni(N, ht), et
        }

        function jt(N, D, z, Y) {
            if (typeof z == "object" && z !== null && z.type === A && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                    case b:
                        t: {
                            for (var et = z.key; D !== null;) {
                                if (D.key === et) {
                                    if (et = z.type, et === A) {
                                        if (D.tag === 7) {
                                            s(N, D.sibling), Y = u(D, z.props.children), Y.return = N, N = Y;
                                            break t
                                        }
                                    } else if (D.elementType === et || typeof et == "object" && et !== null && et.$$typeof === H && up(et) === D.type) {
                                        s(N, D.sibling), Y = u(D, z.props), Da(Y, z), Y.return = N, N = Y;
                                        break t
                                    }
                                    s(N, D);
                                    break
                                } else n(N, D);
                                D = D.sibling
                            }
                            z.type === A ? (Y = Di(z.props.children, N.mode, Y, z.key), Y.return = N, N = Y) : (Y = Br(z.type, z.key, z.props, null, N.mode, Y), Da(Y, z), Y.return = N, N = Y)
                        }
                        return y(N);
                    case T:
                        t: {
                            for (et = z.key; D !== null;) {
                                if (D.key === et)
                                    if (D.tag === 4 && D.stateNode.containerInfo === z.containerInfo && D.stateNode.implementation === z.implementation) {
                                        s(N, D.sibling), Y = u(D, z.children || []), Y.return = N, N = Y;
                                        break t
                                    } else {
                                        s(N, D);
                                        break
                                    }
                                else n(N, D);
                                D = D.sibling
                            }
                            Y = hu(z, N.mode, Y),
                            Y.return = N,
                            N = Y
                        }
                        return y(N);
                    case H:
                        return et = z._init, z = et(z._payload), jt(N, D, z, Y)
                }
                if (ft(z)) return mt(N, D, z, Y);
                if (ut(z)) {
                    if (et = ut(z), typeof et != "function") throw Error(o(150));
                    return z = et.call(z), ct(N, D, z, Y)
                }
                if (typeof z.then == "function") return jt(N, D, io(z), Y);
                if (z.$$typeof === j) return jt(N, D, Yr(N, z), Y);
                so(N, z)
            }
            return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, D !== null && D.tag === 6 ? (s(N, D.sibling), Y = u(D, z), Y.return = N, N = Y) : (s(N, D), Y = du(z, N.mode, Y), Y.return = N, N = Y), y(N)) : s(N, D)
        }
        return function(N, D, z, Y) {
            try {
                Ma = 0;
                var et = jt(N, D, z, Y);
                return Ss = null, et
            } catch (lt) {
                if (lt === ba || lt === Kr) throw lt;
                var xt = Re(29, lt, null, N.mode);
                return xt.lanes = Y, xt.return = N, xt
            }
        }
    }
    var Ts = cp(!0),
        fp = cp(!1),
        qe = G(null),
        cn = null;

    function Wn(t) {
        var n = t.alternate;
        J(Wt, Wt.current & 1), J(qe, t), cn === null && (n === null || ys.current !== null || n.memoizedState !== null) && (cn = t)
    }

    function dp(t) {
        if (t.tag === 22) {
            if (J(Wt, Wt.current), J(qe, t), cn === null) {
                var n = t.alternate;
                n !== null && n.memoizedState !== null && (cn = t)
            }
        } else Jn()
    }

    function Jn() {
        J(Wt, Wt.current), J(qe, qe.current)
    }

    function Mn(t) {
        I(qe), cn === t && (cn = null), I(Wt)
    }
    var Wt = G(0);

    function ao(t) {
        for (var n = t; n !== null;) {
            if (n.tag === 13) {
                var s = n.memoizedState;
                if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || zc(s))) return n
            } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
                if ((n.flags & 128) !== 0) return n
            } else if (n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === t) return null;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
        return null
    }

    function Ku(t, n, s, r) {
        n = t.memoizedState, s = s(r, n), s = s == null ? n : g({}, n, s), t.memoizedState = s, t.lanes === 0 && (t.updateQueue.baseState = s)
    }
    var Qu = {
        enqueueSetState: function(t, n, s) {
            t = t._reactInternals;
            var r = Ne(),
                u = Qn(r);
            u.payload = n, s != null && (u.callback = s), n = Fn(t, u, r), n !== null && (je(n, t, r), Sa(n, t, r))
        },
        enqueueReplaceState: function(t, n, s) {
            t = t._reactInternals;
            var r = Ne(),
                u = Qn(r);
            u.tag = 1, u.payload = n, s != null && (u.callback = s), n = Fn(t, u, r), n !== null && (je(n, t, r), Sa(n, t, r))
        },
        enqueueForceUpdate: function(t, n) {
            t = t._reactInternals;
            var s = Ne(),
                r = Qn(s);
            r.tag = 2, n != null && (r.callback = n), n = Fn(t, r, s), n !== null && (je(n, t, s), Sa(n, t, s))
        }
    };

    function hp(t, n, s, r, u, d, y) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, d, y) : n.prototype && n.prototype.isPureReactComponent ? !fa(s, r) || !fa(u, d) : !0
    }

    function mp(t, n, s, r) {
        t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(s, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(s, r), n.state !== t && Qu.enqueueReplaceState(n, n.state, null)
    }

    function Pi(t, n) {
        var s = n;
        if ("ref" in n) {
            s = {};
            for (var r in n) r !== "ref" && (s[r] = n[r])
        }
        if (t = t.defaultProps) {
            s === n && (s = g({}, s));
            for (var u in t) s[u] === void 0 && (s[u] = t[u])
        }
        return s
    }
    var ro = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var n = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(n)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    };

    function pp(t) {
        ro(t)
    }

    function gp(t) {
        console.error(t)
    }

    function yp(t) {
        ro(t)
    }

    function oo(t, n) {
        try {
            var s = t.onUncaughtError;
            s(n.value, {
                componentStack: n.stack
            })
        } catch (r) {
            setTimeout(function() {
                throw r
            })
        }
    }

    function vp(t, n, s) {
        try {
            var r = t.onCaughtError;
            r(s.value, {
                componentStack: s.stack,
                errorBoundary: n.tag === 1 ? n.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }

    function Fu(t, n, s) {
        return s = Qn(s), s.tag = 3, s.payload = {
            element: null
        }, s.callback = function() {
            oo(t, n)
        }, s
    }

    function bp(t) {
        return t = Qn(t), t.tag = 3, t
    }

    function xp(t, n, s, r) {
        var u = s.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var d = r.value;
            t.payload = function() {
                return u(d)
            }, t.callback = function() {
                vp(n, s, r)
            }
        }
        var y = s.stateNode;
        y !== null && typeof y.componentDidCatch == "function" && (t.callback = function() {
            vp(n, s, r), typeof u != "function" && (ii === null ? ii = new Set([this]) : ii.add(this));
            var x = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: x !== null ? x : ""
            })
        })
    }

    function yT(t, n, s, r, u) {
        if (s.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
            if (n = s.alternate, n !== null && ga(n, s, u, !0), s = qe.current, s !== null) {
                switch (s.tag) {
                    case 13:
                        return cn === null ? vc() : s.alternate === null && qt === 0 && (qt = 3), s.flags &= -257, s.flags |= 65536, s.lanes = u, r === wu ? s.flags |= 16384 : (n = s.updateQueue, n === null ? s.updateQueue = new Set([r]) : n.add(r), xc(t, r, u)), !1;
                    case 22:
                        return s.flags |= 65536, r === wu ? s.flags |= 16384 : (n = s.updateQueue, n === null ? (n = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([r])
                        }, s.updateQueue = n) : (s = n.retryQueue, s === null ? n.retryQueue = new Set([r]) : s.add(r)), xc(t, r, u)), !1
                }
                throw Error(o(435, s.tag))
            }
            return xc(t, r, u), vc(), !1
        }
        if (At) return n = qe.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = u, r !== gu && (t = Error(o(422), {
            cause: r
        }), pa(Pe(t, s)))) : (r !== gu && (n = Error(o(423), {
            cause: r
        }), pa(Pe(n, s))), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, r = Pe(r, s), u = Fu(t.stateNode, r, u), Cu(t, u), qt !== 4 && (qt = 2)), !1;
        var d = Error(o(520), {
            cause: r
        });
        if (d = Pe(d, s), La === null ? La = [d] : La.push(d), qt !== 4 && (qt = 2), n === null) return !0;
        r = Pe(r, s), s = n;
        do {
            switch (s.tag) {
                case 3:
                    return s.flags |= 65536, t = u & -u, s.lanes |= t, t = Fu(s.stateNode, r, t), Cu(s, t), !1;
                case 1:
                    if (n = s.type, d = s.stateNode, (s.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ii === null || !ii.has(d)))) return s.flags |= 65536, u &= -u, s.lanes |= u, u = bp(u), xp(u, t, s, r), Cu(s, u), !1
            }
            s = s.return
        } while (s !== null);
        return !1
    }
    var Sp = Error(o(461)),
        ee = !1;

    function se(t, n, s, r) {
        n.child = t === null ? fp(n, null, s, r) : Ts(n, t.child, s, r)
    }

    function Tp(t, n, s, r, u) {
        s = s.render;
        var d = n.ref;
        if ("ref" in r) {
            var y = {};
            for (var x in r) x !== "ref" && (y[x] = r[x])
        } else y = r;
        return zi(n), r = Nu(t, n, s, y, d, u), x = ju(), t !== null && !ee ? (_u(t, n, u), Dn(t, n, u)) : (At && x && mu(n), n.flags |= 1, se(t, n, r, u), n.child)
    }

    function wp(t, n, s, r, u) {
        if (t === null) {
            var d = s.type;
            return typeof d == "function" && !fu(d) && d.defaultProps === void 0 && s.compare === null ? (n.tag = 15, n.type = d, Ep(t, n, d, r, u)) : (t = Br(s.type, null, r, n, n.mode, u), t.ref = n.ref, t.return = n, n.child = t)
        }
        if (d = t.child, !nc(t, u)) {
            var y = d.memoizedProps;
            if (s = s.compare, s = s !== null ? s : fa, s(y, r) && t.ref === n.ref) return Dn(t, n, u)
        }
        return n.flags |= 1, t = Tn(d, r), t.ref = n.ref, t.return = n, n.child = t
    }

    function Ep(t, n, s, r, u) {
        if (t !== null) {
            var d = t.memoizedProps;
            if (fa(d, r) && t.ref === n.ref)
                if (ee = !1, n.pendingProps = r = d, nc(t, u))(t.flags & 131072) !== 0 && (ee = !0);
                else return n.lanes = t.lanes, Dn(t, n, u)
        }
        return Zu(t, n, s, r, u)
    }

    function Ap(t, n, s) {
        var r = n.pendingProps,
            u = r.children,
            d = t !== null ? t.memoizedState : null;
        if (r.mode === "hidden") {
            if ((n.flags & 128) !== 0) {
                if (r = d !== null ? d.baseLanes | s : s, t !== null) {
                    for (u = n.child = t.child, d = 0; u !== null;) d = d | u.lanes | u.childLanes, u = u.sibling;
                    n.childLanes = d & ~r
                } else n.childLanes = 0, n.child = null;
                return Cp(t, n, r, s)
            }
            if ((s & 536870912) !== 0) n.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, t !== null && Xr(n, d !== null ? d.cachePool : null), d !== null ? Em(n, d) : Mu(), dp(n);
            else return n.lanes = n.childLanes = 536870912, Cp(t, n, d !== null ? d.baseLanes | s : s, s)
        } else d !== null ? (Xr(n, d.cachePool), Em(n, d), Jn(), n.memoizedState = null) : (t !== null && Xr(n, null), Mu(), Jn());
        return se(t, n, u, s), n.child
    }

    function Cp(t, n, s, r) {
        var u = Tu();
        return u = u === null ? null : {
            parent: Zt._currentValue,
            pool: u
        }, n.memoizedState = {
            baseLanes: s,
            cachePool: u
        }, t !== null && Xr(n, null), Mu(), dp(n), t !== null && ga(t, n, r, !0), null
    }

    function lo(t, n) {
        var s = n.ref;
        if (s === null) t !== null && t.ref !== null && (n.flags |= 4194816);
        else {
            if (typeof s != "function" && typeof s != "object") throw Error(o(284));
            (t === null || t.ref !== s) && (n.flags |= 4194816)
        }
    }

    function Zu(t, n, s, r, u) {
        return zi(n), s = Nu(t, n, s, r, void 0, u), r = ju(), t !== null && !ee ? (_u(t, n, u), Dn(t, n, u)) : (At && r && mu(n), n.flags |= 1, se(t, n, s, u), n.child)
    }

    function Rp(t, n, s, r, u, d) {
        return zi(n), n.updateQueue = null, s = Cm(n, r, s, u), Am(t), r = ju(), t !== null && !ee ? (_u(t, n, d), Dn(t, n, d)) : (At && r && mu(n), n.flags |= 1, se(t, n, s, d), n.child)
    }

    function Mp(t, n, s, r, u) {
        if (zi(n), n.stateNode === null) {
            var d = ds,
                y = s.contextType;
            typeof y == "object" && y !== null && (d = ue(y)), d = new s(r, d), n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Qu, n.stateNode = d, d._reactInternals = n, d = n.stateNode, d.props = r, d.state = n.memoizedState, d.refs = {}, Eu(n), y = s.contextType, d.context = typeof y == "object" && y !== null ? ue(y) : ds, d.state = n.memoizedState, y = s.getDerivedStateFromProps, typeof y == "function" && (Ku(n, s, y, r), d.state = n.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (y = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), y !== d.state && Qu.enqueueReplaceState(d, d.state, null), wa(n, r, d, u), Ta(), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308), r = !0
        } else if (t === null) {
            d = n.stateNode;
            var x = n.memoizedProps,
                R = Pi(s, x);
            d.props = R;
            var L = d.context,
                q = s.contextType;
            y = ds, typeof q == "object" && q !== null && (y = ue(q));
            var K = s.getDerivedStateFromProps;
            q = typeof K == "function" || typeof d.getSnapshotBeforeUpdate == "function", x = n.pendingProps !== x, q || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (x || L !== y) && mp(n, d, r, y), Kn = !1;
            var U = n.memoizedState;
            d.state = U, wa(n, r, d, u), Ta(), L = n.memoizedState, x || U !== L || Kn ? (typeof K == "function" && (Ku(n, s, K, r), L = n.memoizedState), (R = Kn || hp(n, s, R, r, U, L, y)) ? (q || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = L), d.props = r, d.state = L, d.context = y, r = R) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), r = !1)
        } else {
            d = n.stateNode, Au(t, n), y = n.memoizedProps, q = Pi(s, y), d.props = q, K = n.pendingProps, U = d.context, L = s.contextType, R = ds, typeof L == "object" && L !== null && (R = ue(L)), x = s.getDerivedStateFromProps, (L = typeof x == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y !== K || U !== R) && mp(n, d, r, R), Kn = !1, U = n.memoizedState, d.state = U, wa(n, r, d, u), Ta();
            var B = n.memoizedState;
            y !== K || U !== B || Kn || t !== null && t.dependencies !== null && Gr(t.dependencies) ? (typeof x == "function" && (Ku(n, s, x, r), B = n.memoizedState), (q = Kn || hp(n, s, q, r, U, B, R) || t !== null && t.dependencies !== null && Gr(t.dependencies)) ? (L || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, B, R), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, B, R)), typeof d.componentDidUpdate == "function" && (n.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || y === t.memoizedProps && U === t.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && U === t.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = B), d.props = r, d.state = B, d.context = R, r = q) : (typeof d.componentDidUpdate != "function" || y === t.memoizedProps && U === t.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && U === t.memoizedState || (n.flags |= 1024), r = !1)
        }
        return d = r, lo(t, n), r = (n.flags & 128) !== 0, d || r ? (d = n.stateNode, s = r && typeof s.getDerivedStateFromError != "function" ? null : d.render(), n.flags |= 1, t !== null && r ? (n.child = Ts(n, t.child, null, u), n.child = Ts(n, null, s, u)) : se(t, n, s, u), n.memoizedState = d.state, t = n.child) : t = Dn(t, n, u), t
    }

    function Dp(t, n, s, r) {
        return ma(), n.flags |= 256, se(t, n, s, r), n.child
    }
    var Wu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Ju(t) {
        return {
            baseLanes: t,
            cachePool: gm()
        }
    }

    function Iu(t, n, s) {
        return t = t !== null ? t.childLanes & ~s : 0, n && (t |= Ge), t
    }

    function Op(t, n, s) {
        var r = n.pendingProps,
            u = !1,
            d = (n.flags & 128) !== 0,
            y;
        if ((y = d) || (y = t !== null && t.memoizedState === null ? !1 : (Wt.current & 2) !== 0), y && (u = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, t === null) {
            if (At) {
                if (u ? Wn(n) : Jn(), At) {
                    var x = Ht,
                        R;
                    if (R = x) {
                        t: {
                            for (R = x, x = un; R.nodeType !== 8;) {
                                if (!x) {
                                    x = null;
                                    break t
                                }
                                if (R = We(R.nextSibling), R === null) {
                                    x = null;
                                    break t
                                }
                            }
                            x = R
                        }
                        x !== null ? (n.memoizedState = {
                            dehydrated: x,
                            treeContext: Oi !== null ? {
                                id: wn,
                                overflow: En
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, R = Re(18, null, null, 0), R.stateNode = x, R.return = n, n.child = R, he = n, Ht = null, R = !0) : R = !1
                    }
                    R || _i(n)
                }
                if (x = n.memoizedState, x !== null && (x = x.dehydrated, x !== null)) return zc(x) ? n.lanes = 32 : n.lanes = 536870912, null;
                Mn(n)
            }
            return x = r.children, r = r.fallback, u ? (Jn(), u = n.mode, x = uo({
                mode: "hidden",
                children: x
            }, u), r = Di(r, u, s, null), x.return = n, r.return = n, x.sibling = r, n.child = x, u = n.child, u.memoizedState = Ju(s), u.childLanes = Iu(t, y, s), n.memoizedState = Wu, r) : (Wn(n), $u(n, x))
        }
        if (R = t.memoizedState, R !== null && (x = R.dehydrated, x !== null)) {
            if (d) n.flags & 256 ? (Wn(n), n.flags &= -257, n = tc(t, n, s)) : n.memoizedState !== null ? (Jn(), n.child = t.child, n.flags |= 128, n = null) : (Jn(), u = r.fallback, x = n.mode, r = uo({
                mode: "visible",
                children: r.children
            }, x), u = Di(u, x, s, null), u.flags |= 2, r.return = n, u.return = n, r.sibling = u, n.child = r, Ts(n, t.child, null, s), r = n.child, r.memoizedState = Ju(s), r.childLanes = Iu(t, y, s), n.memoizedState = Wu, n = u);
            else if (Wn(n), zc(x)) {
                if (y = x.nextSibling && x.nextSibling.dataset, y) var L = y.dgst;
                y = L, r = Error(o(419)), r.stack = "", r.digest = y, pa({
                    value: r,
                    source: null,
                    stack: null
                }), n = tc(t, n, s)
            } else if (ee || ga(t, n, s, !1), y = (s & t.childLanes) !== 0, ee || y) {
                if (y = Vt, y !== null && (r = s & -s, r = (r & 42) !== 0 ? 1 : Ll(r), r = (r & (y.suspendedLanes | s)) !== 0 ? 0 : r, r !== 0 && r !== R.retryLane)) throw R.retryLane = r, fs(t, r), je(y, t, r), Sp;
                x.data === "$?" || vc(), n = tc(t, n, s)
            } else x.data === "$?" ? (n.flags |= 192, n.child = t.child, n = null) : (t = R.treeContext, Ht = We(x.nextSibling), he = n, At = !0, ji = null, un = !1, t !== null && (Be[He++] = wn, Be[He++] = En, Be[He++] = Oi, wn = t.id, En = t.overflow, Oi = n), n = $u(n, r.children), n.flags |= 4096);
            return n
        }
        return u ? (Jn(), u = r.fallback, x = n.mode, R = t.child, L = R.sibling, r = Tn(R, {
            mode: "hidden",
            children: r.children
        }), r.subtreeFlags = R.subtreeFlags & 65011712, L !== null ? u = Tn(L, u) : (u = Di(u, x, s, null), u.flags |= 2), u.return = n, r.return = n, r.sibling = u, n.child = r, r = u, u = n.child, x = t.child.memoizedState, x === null ? x = Ju(s) : (R = x.cachePool, R !== null ? (L = Zt._currentValue, R = R.parent !== L ? {
            parent: L,
            pool: L
        } : R) : R = gm(), x = {
            baseLanes: x.baseLanes | s,
            cachePool: R
        }), u.memoizedState = x, u.childLanes = Iu(t, y, s), n.memoizedState = Wu, r) : (Wn(n), s = t.child, t = s.sibling, s = Tn(s, {
            mode: "visible",
            children: r.children
        }), s.return = n, s.sibling = null, t !== null && (y = n.deletions, y === null ? (n.deletions = [t], n.flags |= 16) : y.push(t)), n.child = s, n.memoizedState = null, s)
    }

    function $u(t, n) {
        return n = uo({
            mode: "visible",
            children: n
        }, t.mode), n.return = t, t.child = n
    }

    function uo(t, n) {
        return t = Re(22, t, null, n), t.lanes = 0, t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, t
    }

    function tc(t, n, s) {
        return Ts(n, t.child, null, s), t = $u(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t
    }

    function Np(t, n, s) {
        t.lanes |= n;
        var r = t.alternate;
        r !== null && (r.lanes |= n), vu(t.return, n, s)
    }

    function ec(t, n, s, r, u) {
        var d = t.memoizedState;
        d === null ? t.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: s,
            tailMode: u
        } : (d.isBackwards = n, d.rendering = null, d.renderingStartTime = 0, d.last = r, d.tail = s, d.tailMode = u)
    }

    function jp(t, n, s) {
        var r = n.pendingProps,
            u = r.revealOrder,
            d = r.tail;
        if (se(t, n, r.children, s), r = Wt.current, (r & 2) !== 0) r = r & 1 | 2, n.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0) t: for (t = n.child; t !== null;) {
                if (t.tag === 13) t.memoizedState !== null && Np(t, s, n);
                else if (t.tag === 19) Np(t, s, n);
                else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === n) break t;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === n) break t;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            r &= 1
        }
        switch (J(Wt, r), u) {
            case "forwards":
                for (s = n.child, u = null; s !== null;) t = s.alternate, t !== null && ao(t) === null && (u = s), s = s.sibling;
                s = u, s === null ? (u = n.child, n.child = null) : (u = s.sibling, s.sibling = null), ec(n, !1, u, s, d);
                break;
            case "backwards":
                for (s = null, u = n.child, n.child = null; u !== null;) {
                    if (t = u.alternate, t !== null && ao(t) === null) {
                        n.child = u;
                        break
                    }
                    t = u.sibling, u.sibling = s, s = u, u = t
                }
                ec(n, !0, s, null, d);
                break;
            case "together":
                ec(n, !1, null, null, void 0);
                break;
            default:
                n.memoizedState = null
        }
        return n.child
    }

    function Dn(t, n, s) {
        if (t !== null && (n.dependencies = t.dependencies), ni |= n.lanes, (s & n.childLanes) === 0)
            if (t !== null) {
                if (ga(t, n, s, !1), (s & n.childLanes) === 0) return null
            } else return null;
        if (t !== null && n.child !== t.child) throw Error(o(153));
        if (n.child !== null) {
            for (t = n.child, s = Tn(t, t.pendingProps), n.child = s, s.return = n; t.sibling !== null;) t = t.sibling, s = s.sibling = Tn(t, t.pendingProps), s.return = n;
            s.sibling = null
        }
        return n.child
    }

    function nc(t, n) {
        return (t.lanes & n) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Gr(t)))
    }

    function vT(t, n, s) {
        switch (n.tag) {
            case 3:
                Ct(n, n.stateNode.containerInfo), Xn(n, Zt, t.memoizedState.cache), ma();
                break;
            case 27:
            case 5:
                Bn(n);
                break;
            case 4:
                Ct(n, n.stateNode.containerInfo);
                break;
            case 10:
                Xn(n, n.type, n.memoizedProps.value);
                break;
            case 13:
                var r = n.memoizedState;
                if (r !== null) return r.dehydrated !== null ? (Wn(n), n.flags |= 128, null) : (s & n.child.childLanes) !== 0 ? Op(t, n, s) : (Wn(n), t = Dn(t, n, s), t !== null ? t.sibling : null);
                Wn(n);
                break;
            case 19:
                var u = (t.flags & 128) !== 0;
                if (r = (s & n.childLanes) !== 0, r || (ga(t, n, s, !1), r = (s & n.childLanes) !== 0), u) {
                    if (r) return jp(t, n, s);
                    n.flags |= 128
                }
                if (u = n.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), J(Wt, Wt.current), r) break;
                return null;
            case 22:
            case 23:
                return n.lanes = 0, Ap(t, n, s);
            case 24:
                Xn(n, Zt, t.memoizedState.cache)
        }
        return Dn(t, n, s)
    }

    function _p(t, n, s) {
        if (t !== null)
            if (t.memoizedProps !== n.pendingProps) ee = !0;
            else {
                if (!nc(t, s) && (n.flags & 128) === 0) return ee = !1, vT(t, n, s);
                ee = (t.flags & 131072) !== 0
            }
        else ee = !1, At && (n.flags & 1048576) !== 0 && um(n, qr, n.index);
        switch (n.lanes = 0, n.tag) {
            case 16:
                t: {
                    t = n.pendingProps;
                    var r = n.elementType,
                        u = r._init;
                    if (r = u(r._payload), n.type = r, typeof r == "function") fu(r) ? (t = Pi(r, t), n.tag = 1, n = Mp(null, n, r, t, s)) : (n.tag = 0, n = Zu(null, n, r, t, s));
                    else {
                        if (r != null) {
                            if (u = r.$$typeof, u === k) {
                                n.tag = 11, n = Tp(null, n, r, t, s);
                                break t
                            } else if (u === Z) {
                                n.tag = 14, n = wp(null, n, r, t, s);
                                break t
                            }
                        }
                        throw n = $(r) || r, Error(o(306, n, ""))
                    }
                }
                return n;
            case 0:
                return Zu(t, n, n.type, n.pendingProps, s);
            case 1:
                return r = n.type, u = Pi(r, n.pendingProps), Mp(t, n, r, u, s);
            case 3:
                t: {
                    if (Ct(n, n.stateNode.containerInfo), t === null) throw Error(o(387));r = n.pendingProps;
                    var d = n.memoizedState;u = d.element,
                    Au(t, n),
                    wa(n, r, null, s);
                    var y = n.memoizedState;
                    if (r = y.cache, Xn(n, Zt, r), r !== d.cache && bu(n, [Zt], s, !0), Ta(), r = y.element, d.isDehydrated)
                        if (d = {
                                element: r,
                                isDehydrated: !1,
                                cache: y.cache
                            }, n.updateQueue.baseState = d, n.memoizedState = d, n.flags & 256) {
                            n = Dp(t, n, r, s);
                            break t
                        } else if (r !== u) {
                        u = Pe(Error(o(424)), n), pa(u), n = Dp(t, n, r, s);
                        break t
                    } else
                        for (t = n.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ht = We(t.firstChild), he = n, At = !0, ji = null, un = !0, s = fp(n, null, r, s), n.child = s; s;) s.flags = s.flags & -3 | 4096, s = s.sibling;
                    else {
                        if (ma(), r === u) {
                            n = Dn(t, n, s);
                            break t
                        }
                        se(t, n, r, s)
                    }
                    n = n.child
                }
                return n;
            case 26:
                return lo(t, n), t === null ? (s = kg(n.type, null, n.pendingProps, null)) ? n.memoizedState = s : At || (s = n.type, t = n.pendingProps, r = Eo(at.current).createElement(s), r[le] = n, r[ye] = t, re(r, s, t), te(r), n.stateNode = r) : n.memoizedState = kg(n.type, t.memoizedProps, n.pendingProps, t.memoizedState), null;
            case 27:
                return Bn(n), t === null && At && (r = n.stateNode = Vg(n.type, n.pendingProps, at.current), he = n, un = !0, u = Ht, ri(n.type) ? (Lc = u, Ht = We(r.firstChild)) : Ht = u), se(t, n, n.pendingProps.children, s), lo(t, n), t === null && (n.flags |= 4194304), n.child;
            case 5:
                return t === null && At && ((u = r = Ht) && (r = KT(r, n.type, n.pendingProps, un), r !== null ? (n.stateNode = r, he = n, Ht = We(r.firstChild), un = !1, u = !0) : u = !1), u || _i(n)), Bn(n), u = n.type, d = n.pendingProps, y = t !== null ? t.memoizedProps : null, r = d.children, jc(u, d) ? r = null : y !== null && jc(u, y) && (n.flags |= 32), n.memoizedState !== null && (u = Nu(t, n, cT, null, null, s), Xa._currentValue = u), lo(t, n), se(t, n, r, s), n.child;
            case 6:
                return t === null && At && ((t = s = Ht) && (s = QT(s, n.pendingProps, un), s !== null ? (n.stateNode = s, he = n, Ht = null, t = !0) : t = !1), t || _i(n)), null;
            case 13:
                return Op(t, n, s);
            case 4:
                return Ct(n, n.stateNode.containerInfo), r = n.pendingProps, t === null ? n.child = Ts(n, null, r, s) : se(t, n, r, s), n.child;
            case 11:
                return Tp(t, n, n.type, n.pendingProps, s);
            case 7:
                return se(t, n, n.pendingProps, s), n.child;
            case 8:
                return se(t, n, n.pendingProps.children, s), n.child;
            case 12:
                return se(t, n, n.pendingProps.children, s), n.child;
            case 10:
                return r = n.pendingProps, Xn(n, n.type, r.value), se(t, n, r.children, s), n.child;
            case 9:
                return u = n.type._context, r = n.pendingProps.children, zi(n), u = ue(u), r = r(u), n.flags |= 1, se(t, n, r, s), n.child;
            case 14:
                return wp(t, n, n.type, n.pendingProps, s);
            case 15:
                return Ep(t, n, n.type, n.pendingProps, s);
            case 19:
                return jp(t, n, s);
            case 31:
                return r = n.pendingProps, s = n.mode, r = {
                    mode: r.mode,
                    children: r.children
                }, t === null ? (s = uo(r, s), s.ref = n.ref, n.child = s, s.return = n, n = s) : (s = Tn(t.child, r), s.ref = n.ref, n.child = s, s.return = n, n = s), n;
            case 22:
                return Ap(t, n, s);
            case 24:
                return zi(n), r = ue(Zt), t === null ? (u = Tu(), u === null && (u = Vt, d = xu(), u.pooledCache = d, d.refCount++, d !== null && (u.pooledCacheLanes |= s), u = d), n.memoizedState = {
                    parent: r,
                    cache: u
                }, Eu(n), Xn(n, Zt, u)) : ((t.lanes & s) !== 0 && (Au(t, n), wa(n, null, null, s), Ta()), u = t.memoizedState, d = n.memoizedState, u.parent !== r ? (u = {
                    parent: r,
                    cache: r
                }, n.memoizedState = u, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = u), Xn(n, Zt, r)) : (r = d.cache, Xn(n, Zt, r), r !== u.cache && bu(n, [Zt], s, !0))), se(t, n, n.pendingProps.children, s), n.child;
            case 29:
                throw n.pendingProps
        }
        throw Error(o(156, n.tag))
    }

    function On(t) {
        t.flags |= 4
    }

    function Vp(t, n) {
        if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (t.flags |= 16777216, !qg(n)) {
            if (n = qe.current, n !== null && ((wt & 4194048) === wt ? cn !== null : (wt & 62914560) !== wt && (wt & 536870912) === 0 || n !== cn)) throw xa = wu, ym;
            t.flags |= 8192
        }
    }

    function co(t, n) {
        n !== null && (t.flags |= 4), t.flags & 16384 && (n = t.tag !== 22 ? dh() : 536870912, t.lanes |= n, Cs |= n)
    }

    function Oa(t, n) {
        if (!At) switch (t.tailMode) {
            case "hidden":
                n = t.tail;
                for (var s = null; n !== null;) n.alternate !== null && (s = n), n = n.sibling;
                s === null ? t.tail = null : s.sibling = null;
                break;
            case "collapsed":
                s = t.tail;
                for (var r = null; s !== null;) s.alternate !== null && (r = s), s = s.sibling;
                r === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
        }
    }

    function Pt(t) {
        var n = t.alternate !== null && t.alternate.child === t.child,
            s = 0,
            r = 0;
        if (n)
            for (var u = t.child; u !== null;) s |= u.lanes | u.childLanes, r |= u.subtreeFlags & 65011712, r |= u.flags & 65011712, u.return = t, u = u.sibling;
        else
            for (u = t.child; u !== null;) s |= u.lanes | u.childLanes, r |= u.subtreeFlags, r |= u.flags, u.return = t, u = u.sibling;
        return t.subtreeFlags |= r, t.childLanes = s, n
    }

    function bT(t, n, s) {
        var r = n.pendingProps;
        switch (pu(n), n.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Pt(n), null;
            case 1:
                return Pt(n), null;
            case 3:
                return s = n.stateNode, r = null, t !== null && (r = t.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), Cn(Zt), Rt(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (t === null || t.child === null) && (ha(n) ? On(n) : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, dm())), Pt(n), null;
            case 26:
                return s = n.memoizedState, t === null ? (On(n), s !== null ? (Pt(n), Vp(n, s)) : (Pt(n), n.flags &= -16777217)) : s ? s !== t.memoizedState ? (On(n), Pt(n), Vp(n, s)) : (Pt(n), n.flags &= -16777217) : (t.memoizedProps !== r && On(n), Pt(n), n.flags &= -16777217), null;
            case 27:
                Qe(n), s = at.current;
                var u = n.type;
                if (t !== null && n.stateNode != null) t.memoizedProps !== r && On(n);
                else {
                    if (!r) {
                        if (n.stateNode === null) throw Error(o(166));
                        return Pt(n), null
                    }
                    t = rt.current, ha(n) ? cm(n) : (t = Vg(u, r, s), n.stateNode = t, On(n))
                }
                return Pt(n), null;
            case 5:
                if (Qe(n), s = n.type, t !== null && n.stateNode != null) t.memoizedProps !== r && On(n);
                else {
                    if (!r) {
                        if (n.stateNode === null) throw Error(o(166));
                        return Pt(n), null
                    }
                    if (t = rt.current, ha(n)) cm(n);
                    else {
                        switch (u = Eo(at.current), t) {
                            case 1:
                                t = u.createElementNS("http://www.w3.org/2000/svg", s);
                                break;
                            case 2:
                                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                                break;
                            default:
                                switch (s) {
                                    case "svg":
                                        t = u.createElementNS("http://www.w3.org/2000/svg", s);
                                        break;
                                    case "math":
                                        t = u.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                                        break;
                                    case "script":
                                        t = u.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                                        break;
                                    case "select":
                                        t = typeof r.is == "string" ? u.createElement("select", {
                                            is: r.is
                                        }) : u.createElement("select"), r.multiple ? t.multiple = !0 : r.size && (t.size = r.size);
                                        break;
                                    default:
                                        t = typeof r.is == "string" ? u.createElement(s, {
                                            is: r.is
                                        }) : u.createElement(s)
                                }
                        }
                        t[le] = n, t[ye] = r;
                        t: for (u = n.child; u !== null;) {
                            if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
                            else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                                u.child.return = u, u = u.child;
                                continue
                            }
                            if (u === n) break t;
                            for (; u.sibling === null;) {
                                if (u.return === null || u.return === n) break t;
                                u = u.return
                            }
                            u.sibling.return = u.return, u = u.sibling
                        }
                        n.stateNode = t;
                        t: switch (re(t, s, r), s) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                t = !!r.autoFocus;
                                break t;
                            case "img":
                                t = !0;
                                break t;
                            default:
                                t = !1
                        }
                        t && On(n)
                    }
                }
                return Pt(n), n.flags &= -16777217, null;
            case 6:
                if (t && n.stateNode != null) t.memoizedProps !== r && On(n);
                else {
                    if (typeof r != "string" && n.stateNode === null) throw Error(o(166));
                    if (t = at.current, ha(n)) {
                        if (t = n.stateNode, s = n.memoizedProps, r = null, u = he, u !== null) switch (u.tag) {
                            case 27:
                            case 5:
                                r = u.memoizedProps
                        }
                        t[le] = n, t = !!(t.nodeValue === s || r !== null && r.suppressHydrationWarning === !0 || Rg(t.nodeValue, s)), t || _i(n)
                    } else t = Eo(t).createTextNode(r), t[le] = n, n.stateNode = t
                }
                return Pt(n), null;
            case 13:
                if (r = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (u = ha(n), r !== null && r.dehydrated !== null) {
                        if (t === null) {
                            if (!u) throw Error(o(318));
                            if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
                            u[le] = n
                        } else ma(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                        Pt(n), u = !1
                    } else u = dm(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
                    if (!u) return n.flags & 256 ? (Mn(n), n) : (Mn(n), null)
                }
                if (Mn(n), (n.flags & 128) !== 0) return n.lanes = s, n;
                if (s = r !== null, t = t !== null && t.memoizedState !== null, s) {
                    r = n.child, u = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (u = r.alternate.memoizedState.cachePool.pool);
                    var d = null;
                    r.memoizedState !== null && r.memoizedState.cachePool !== null && (d = r.memoizedState.cachePool.pool), d !== u && (r.flags |= 2048)
                }
                return s !== t && s && (n.child.flags |= 8192), co(n, n.updateQueue), Pt(n), null;
            case 4:
                return Rt(), t === null && Rc(n.stateNode.containerInfo), Pt(n), null;
            case 10:
                return Cn(n.type), Pt(n), null;
            case 19:
                if (I(Wt), u = n.memoizedState, u === null) return Pt(n), null;
                if (r = (n.flags & 128) !== 0, d = u.rendering, d === null)
                    if (r) Oa(u, !1);
                    else {
                        if (qt !== 0 || t !== null && (t.flags & 128) !== 0)
                            for (t = n.child; t !== null;) {
                                if (d = ao(t), d !== null) {
                                    for (n.flags |= 128, Oa(u, !1), t = d.updateQueue, n.updateQueue = t, co(n, t), n.subtreeFlags = 0, t = s, s = n.child; s !== null;) lm(s, t), s = s.sibling;
                                    return J(Wt, Wt.current & 1 | 2), n.child
                                }
                                t = t.sibling
                            }
                        u.tail !== null && ln() > mo && (n.flags |= 128, r = !0, Oa(u, !1), n.lanes = 4194304)
                    }
                else {
                    if (!r)
                        if (t = ao(d), t !== null) {
                            if (n.flags |= 128, r = !0, t = t.updateQueue, n.updateQueue = t, co(n, t), Oa(u, !0), u.tail === null && u.tailMode === "hidden" && !d.alternate && !At) return Pt(n), null
                        } else 2 * ln() - u.renderingStartTime > mo && s !== 536870912 && (n.flags |= 128, r = !0, Oa(u, !1), n.lanes = 4194304);
                    u.isBackwards ? (d.sibling = n.child, n.child = d) : (t = u.last, t !== null ? t.sibling = d : n.child = d, u.last = d)
                }
                return u.tail !== null ? (n = u.tail, u.rendering = n, u.tail = n.sibling, u.renderingStartTime = ln(), n.sibling = null, t = Wt.current, J(Wt, r ? t & 1 | 2 : t & 1), n) : (Pt(n), null);
            case 22:
            case 23:
                return Mn(n), Du(), r = n.memoizedState !== null, t !== null ? t.memoizedState !== null !== r && (n.flags |= 8192) : r && (n.flags |= 8192), r ? (s & 536870912) !== 0 && (n.flags & 128) === 0 && (Pt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Pt(n), s = n.updateQueue, s !== null && co(n, s.retryQueue), s = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), r = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== s && (n.flags |= 2048), t !== null && I(Li), null;
            case 24:
                return s = null, t !== null && (s = t.memoizedState.cache), n.memoizedState.cache !== s && (n.flags |= 2048), Cn(Zt), Pt(n), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(o(156, n.tag))
    }

    function xT(t, n) {
        switch (pu(n), n.tag) {
            case 1:
                return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
            case 3:
                return Cn(Zt), Rt(), t = n.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128, n) : null;
            case 26:
            case 27:
            case 5:
                return Qe(n), null;
            case 13:
                if (Mn(n), t = n.memoizedState, t !== null && t.dehydrated !== null) {
                    if (n.alternate === null) throw Error(o(340));
                    ma()
                }
                return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
            case 19:
                return I(Wt), null;
            case 4:
                return Rt(), null;
            case 10:
                return Cn(n.type), null;
            case 22:
            case 23:
                return Mn(n), Du(), t !== null && I(Li), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
            case 24:
                return Cn(Zt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function zp(t, n) {
        switch (pu(n), n.tag) {
            case 3:
                Cn(Zt), Rt();
                break;
            case 26:
            case 27:
            case 5:
                Qe(n);
                break;
            case 4:
                Rt();
                break;
            case 13:
                Mn(n);
                break;
            case 19:
                I(Wt);
                break;
            case 10:
                Cn(n.type);
                break;
            case 22:
            case 23:
                Mn(n), Du(), t !== null && I(Li);
                break;
            case 24:
                Cn(Zt)
        }
    }

    function Na(t, n) {
        try {
            var s = n.updateQueue,
                r = s !== null ? s.lastEffect : null;
            if (r !== null) {
                var u = r.next;
                s = u;
                do {
                    if ((s.tag & t) === t) {
                        r = void 0;
                        var d = s.create,
                            y = s.inst;
                        r = d(), y.destroy = r
                    }
                    s = s.next
                } while (s !== u)
            }
        } catch (x) {
            _t(n, n.return, x)
        }
    }

    function In(t, n, s) {
        try {
            var r = n.updateQueue,
                u = r !== null ? r.lastEffect : null;
            if (u !== null) {
                var d = u.next;
                r = d;
                do {
                    if ((r.tag & t) === t) {
                        var y = r.inst,
                            x = y.destroy;
                        if (x !== void 0) {
                            y.destroy = void 0, u = n;
                            var R = s,
                                L = x;
                            try {
                                L()
                            } catch (q) {
                                _t(u, R, q)
                            }
                        }
                    }
                    r = r.next
                } while (r !== d)
            }
        } catch (q) {
            _t(n, n.return, q)
        }
    }

    function Lp(t) {
        var n = t.updateQueue;
        if (n !== null) {
            var s = t.stateNode;
            try {
                wm(n, s)
            } catch (r) {
                _t(t, t.return, r)
            }
        }
    }

    function kp(t, n, s) {
        s.props = Pi(t.type, t.memoizedProps), s.state = t.memoizedState;
        try {
            s.componentWillUnmount()
        } catch (r) {
            _t(t, n, r)
        }
    }

    function ja(t, n) {
        try {
            var s = t.ref;
            if (s !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var r = t.stateNode;
                        break;
                    case 30:
                        r = t.stateNode;
                        break;
                    default:
                        r = t.stateNode
                }
                typeof s == "function" ? t.refCleanup = s(r) : s.current = r
            }
        } catch (u) {
            _t(t, n, u)
        }
    }

    function fn(t, n) {
        var s = t.ref,
            r = t.refCleanup;
        if (s !== null)
            if (typeof r == "function") try {
                r()
            } catch (u) {
                _t(t, n, u)
            } finally {
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
            } else if (typeof s == "function") try {
                s(null)
            } catch (u) {
                _t(t, n, u)
            } else s.current = null
    }

    function Pp(t) {
        var n = t.type,
            s = t.memoizedProps,
            r = t.stateNode;
        try {
            t: switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    s.autoFocus && r.focus();
                    break t;
                case "img":
                    s.src ? r.src = s.src : s.srcSet && (r.srcset = s.srcSet)
            }
        }
        catch (u) {
            _t(t, t.return, u)
        }
    }

    function ic(t, n, s) {
        try {
            var r = t.stateNode;
            HT(r, t.type, s, n), r[ye] = n
        } catch (u) {
            _t(t, t.return, u)
        }
    }

    function Up(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ri(t.type) || t.tag === 4
    }

    function sc(t) {
        t: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || Up(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.tag === 27 && ri(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function ac(t, n, s) {
        var r = t.tag;
        if (r === 5 || r === 6) t = t.stateNode, n ? (s.nodeType === 9 ? s.body : s.nodeName === "HTML" ? s.ownerDocument.body : s).insertBefore(t, n) : (n = s.nodeType === 9 ? s.body : s.nodeName === "HTML" ? s.ownerDocument.body : s, n.appendChild(t), s = s._reactRootContainer, s != null || n.onclick !== null || (n.onclick = wo));
        else if (r !== 4 && (r === 27 && ri(t.type) && (s = t.stateNode, n = null), t = t.child, t !== null))
            for (ac(t, n, s), t = t.sibling; t !== null;) ac(t, n, s), t = t.sibling
    }

    function fo(t, n, s) {
        var r = t.tag;
        if (r === 5 || r === 6) t = t.stateNode, n ? s.insertBefore(t, n) : s.appendChild(t);
        else if (r !== 4 && (r === 27 && ri(t.type) && (s = t.stateNode), t = t.child, t !== null))
            for (fo(t, n, s), t = t.sibling; t !== null;) fo(t, n, s), t = t.sibling
    }

    function Bp(t) {
        var n = t.stateNode,
            s = t.memoizedProps;
        try {
            for (var r = t.type, u = n.attributes; u.length;) n.removeAttributeNode(u[0]);
            re(n, r, s), n[le] = t, n[ye] = s
        } catch (d) {
            _t(t, t.return, d)
        }
    }
    var Nn = !1,
        Xt = !1,
        rc = !1,
        Hp = typeof WeakSet == "function" ? WeakSet : Set,
        ne = null;

    function ST(t, n) {
        if (t = t.containerInfo, Oc = Oo, t = Ih(t), su(t)) {
            if ("selectionStart" in t) var s = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else t: {
                s = (s = t.ownerDocument) && s.defaultView || window;
                var r = s.getSelection && s.getSelection();
                if (r && r.rangeCount !== 0) {
                    s = r.anchorNode;
                    var u = r.anchorOffset,
                        d = r.focusNode;
                    r = r.focusOffset;
                    try {
                        s.nodeType, d.nodeType
                    } catch {
                        s = null;
                        break t
                    }
                    var y = 0,
                        x = -1,
                        R = -1,
                        L = 0,
                        q = 0,
                        K = t,
                        U = null;
                    e: for (;;) {
                        for (var B; K !== s || u !== 0 && K.nodeType !== 3 || (x = y + u), K !== d || r !== 0 && K.nodeType !== 3 || (R = y + r), K.nodeType === 3 && (y += K.nodeValue.length), (B = K.firstChild) !== null;) U = K, K = B;
                        for (;;) {
                            if (K === t) break e;
                            if (U === s && ++L === u && (x = y), U === d && ++q === r && (R = y), (B = K.nextSibling) !== null) break;
                            K = U, U = K.parentNode
                        }
                        K = B
                    }
                    s = x === -1 || R === -1 ? null : {
                        start: x,
                        end: R
                    }
                } else s = null
            }
            s = s || {
                start: 0,
                end: 0
            }
        } else s = null;
        for (Nc = {
                focusedElem: t,
                selectionRange: s
            }, Oo = !1, ne = n; ne !== null;)
            if (n = ne, t = n.child, (n.subtreeFlags & 1024) !== 0 && t !== null) t.return = n, ne = t;
            else
                for (; ne !== null;) {
                    switch (n = ne, d = n.alternate, t = n.flags, n.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && d !== null) {
                                t = void 0, s = n, u = d.memoizedProps, d = d.memoizedState, r = s.stateNode;
                                try {
                                    var mt = Pi(s.type, u, s.elementType === s.type);
                                    t = r.getSnapshotBeforeUpdate(mt, d), r.__reactInternalSnapshotBeforeUpdate = t
                                } catch (ct) {
                                    _t(s, s.return, ct)
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (t = n.stateNode.containerInfo, s = t.nodeType, s === 9) Vc(t);
                                else if (s === 1) switch (t.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Vc(t);
                                        break;
                                    default:
                                        t.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((t & 1024) !== 0) throw Error(o(163))
                    }
                    if (t = n.sibling, t !== null) {
                        t.return = n.return, ne = t;
                        break
                    }
                    ne = n.return
                }
    }

    function qp(t, n, s) {
        var r = s.flags;
        switch (s.tag) {
            case 0:
            case 11:
            case 15:
                $n(t, s), r & 4 && Na(5, s);
                break;
            case 1:
                if ($n(t, s), r & 4)
                    if (t = s.stateNode, n === null) try {
                        t.componentDidMount()
                    } catch (y) {
                        _t(s, s.return, y)
                    } else {
                        var u = Pi(s.type, n.memoizedProps);
                        n = n.memoizedState;
                        try {
                            t.componentDidUpdate(u, n, t.__reactInternalSnapshotBeforeUpdate)
                        } catch (y) {
                            _t(s, s.return, y)
                        }
                    }
                r & 64 && Lp(s), r & 512 && ja(s, s.return);
                break;
            case 3:
                if ($n(t, s), r & 64 && (t = s.updateQueue, t !== null)) {
                    if (n = null, s.child !== null) switch (s.child.tag) {
                        case 27:
                        case 5:
                            n = s.child.stateNode;
                            break;
                        case 1:
                            n = s.child.stateNode
                    }
                    try {
                        wm(t, n)
                    } catch (y) {
                        _t(s, s.return, y)
                    }
                }
                break;
            case 27:
                n === null && r & 4 && Bp(s);
            case 26:
            case 5:
                $n(t, s), n === null && r & 4 && Pp(s), r & 512 && ja(s, s.return);
                break;
            case 12:
                $n(t, s);
                break;
            case 13:
                $n(t, s), r & 4 && Xp(t, s), r & 64 && (t = s.memoizedState, t !== null && (t = t.dehydrated, t !== null && (s = OT.bind(null, s), FT(t, s))));
                break;
            case 22:
                if (r = s.memoizedState !== null || Nn, !r) {
                    n = n !== null && n.memoizedState !== null || Xt, u = Nn;
                    var d = Xt;
                    Nn = r, (Xt = n) && !d ? ti(t, s, (s.subtreeFlags & 8772) !== 0) : $n(t, s), Nn = u, Xt = d
                }
                break;
            case 30:
                break;
            default:
                $n(t, s)
        }
    }

    function Gp(t) {
        var n = t.alternate;
        n !== null && (t.alternate = null, Gp(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && Ul(n)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }
    var kt = null,
        xe = !1;

    function jn(t, n, s) {
        for (s = s.child; s !== null;) Yp(t, n, s), s = s.sibling
    }

    function Yp(t, n, s) {
        if (Ee && typeof Ee.onCommitFiberUnmount == "function") try {
            Ee.onCommitFiberUnmount($s, s)
        } catch {}
        switch (s.tag) {
            case 26:
                Xt || fn(s, n), jn(t, n, s), s.memoizedState ? s.memoizedState.count-- : s.stateNode && (s = s.stateNode, s.parentNode.removeChild(s));
                break;
            case 27:
                Xt || fn(s, n);
                var r = kt,
                    u = xe;
                ri(s.type) && (kt = s.stateNode, xe = !1), jn(t, n, s), Ha(s.stateNode), kt = r, xe = u;
                break;
            case 5:
                Xt || fn(s, n);
            case 6:
                if (r = kt, u = xe, kt = null, jn(t, n, s), kt = r, xe = u, kt !== null)
                    if (xe) try {
                        (kt.nodeType === 9 ? kt.body : kt.nodeName === "HTML" ? kt.ownerDocument.body : kt).removeChild(s.stateNode)
                    } catch (d) {
                        _t(s, n, d)
                    } else try {
                        kt.removeChild(s.stateNode)
                    } catch (d) {
                        _t(s, n, d)
                    }
                break;
            case 18:
                kt !== null && (xe ? (t = kt, jg(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, s.stateNode), Za(t)) : jg(kt, s.stateNode));
                break;
            case 4:
                r = kt, u = xe, kt = s.stateNode.containerInfo, xe = !0, jn(t, n, s), kt = r, xe = u;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Xt || In(2, s, n), Xt || In(4, s, n), jn(t, n, s);
                break;
            case 1:
                Xt || (fn(s, n), r = s.stateNode, typeof r.componentWillUnmount == "function" && kp(s, n, r)), jn(t, n, s);
                break;
            case 21:
                jn(t, n, s);
                break;
            case 22:
                Xt = (r = Xt) || s.memoizedState !== null, jn(t, n, s), Xt = r;
                break;
            default:
                jn(t, n, s)
        }
    }

    function Xp(t, n) {
        if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            Za(t)
        } catch (s) {
            _t(n, n.return, s)
        }
    }

    function TT(t) {
        switch (t.tag) {
            case 13:
            case 19:
                var n = t.stateNode;
                return n === null && (n = t.stateNode = new Hp), n;
            case 22:
                return t = t.stateNode, n = t._retryCache, n === null && (n = t._retryCache = new Hp), n;
            default:
                throw Error(o(435, t.tag))
        }
    }

    function oc(t, n) {
        var s = TT(t);
        n.forEach(function(r) {
            var u = NT.bind(null, t, r);
            s.has(r) || (s.add(r), r.then(u, u))
        })
    }

    function Me(t, n) {
        var s = n.deletions;
        if (s !== null)
            for (var r = 0; r < s.length; r++) {
                var u = s[r],
                    d = t,
                    y = n,
                    x = y;
                t: for (; x !== null;) {
                    switch (x.tag) {
                        case 27:
                            if (ri(x.type)) {
                                kt = x.stateNode, xe = !1;
                                break t
                            }
                            break;
                        case 5:
                            kt = x.stateNode, xe = !1;
                            break t;
                        case 3:
                        case 4:
                            kt = x.stateNode.containerInfo, xe = !0;
                            break t
                    }
                    x = x.return
                }
                if (kt === null) throw Error(o(160));
                Yp(d, y, u), kt = null, xe = !1, d = u.alternate, d !== null && (d.return = null), u.return = null
            }
        if (n.subtreeFlags & 13878)
            for (n = n.child; n !== null;) Kp(n, t), n = n.sibling
    }
    var Ze = null;

    function Kp(t, n) {
        var s = t.alternate,
            r = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Me(n, t), De(t), r & 4 && (In(3, t, t.return), Na(3, t), In(5, t, t.return));
                break;
            case 1:
                Me(n, t), De(t), r & 512 && (Xt || s === null || fn(s, s.return)), r & 64 && Nn && (t = t.updateQueue, t !== null && (r = t.callbacks, r !== null && (s = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = s === null ? r : s.concat(r))));
                break;
            case 26:
                var u = Ze;
                if (Me(n, t), De(t), r & 512 && (Xt || s === null || fn(s, s.return)), r & 4) {
                    var d = s !== null ? s.memoizedState : null;
                    if (r = t.memoizedState, s === null)
                        if (r === null)
                            if (t.stateNode === null) {
                                t: {
                                    r = t.type,
                                    s = t.memoizedProps,
                                    u = u.ownerDocument || u;e: switch (r) {
                                        case "title":
                                            d = u.getElementsByTagName("title")[0], (!d || d[na] || d[le] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = u.createElement(r), u.head.insertBefore(d, u.querySelector("head > title"))), re(d, r, s), d[le] = t, te(d), r = d;
                                            break t;
                                        case "link":
                                            var y = Bg("link", "href", u).get(r + (s.href || ""));
                                            if (y) {
                                                for (var x = 0; x < y.length; x++)
                                                    if (d = y[x], d.getAttribute("href") === (s.href == null || s.href === "" ? null : s.href) && d.getAttribute("rel") === (s.rel == null ? null : s.rel) && d.getAttribute("title") === (s.title == null ? null : s.title) && d.getAttribute("crossorigin") === (s.crossOrigin == null ? null : s.crossOrigin)) {
                                                        y.splice(x, 1);
                                                        break e
                                                    }
                                            }
                                            d = u.createElement(r), re(d, r, s), u.head.appendChild(d);
                                            break;
                                        case "meta":
                                            if (y = Bg("meta", "content", u).get(r + (s.content || ""))) {
                                                for (x = 0; x < y.length; x++)
                                                    if (d = y[x], d.getAttribute("content") === (s.content == null ? null : "" + s.content) && d.getAttribute("name") === (s.name == null ? null : s.name) && d.getAttribute("property") === (s.property == null ? null : s.property) && d.getAttribute("http-equiv") === (s.httpEquiv == null ? null : s.httpEquiv) && d.getAttribute("charset") === (s.charSet == null ? null : s.charSet)) {
                                                        y.splice(x, 1);
                                                        break e
                                                    }
                                            }
                                            d = u.createElement(r), re(d, r, s), u.head.appendChild(d);
                                            break;
                                        default:
                                            throw Error(o(468, r))
                                    }
                                    d[le] = t,
                                    te(d),
                                    r = d
                                }
                                t.stateNode = r
                            }
                    else Hg(u, t.type, t.stateNode);
                    else t.stateNode = Ug(u, r, t.memoizedProps);
                    else d !== r ? (d === null ? s.stateNode !== null && (s = s.stateNode, s.parentNode.removeChild(s)) : d.count--, r === null ? Hg(u, t.type, t.stateNode) : Ug(u, r, t.memoizedProps)) : r === null && t.stateNode !== null && ic(t, t.memoizedProps, s.memoizedProps)
                }
                break;
            case 27:
                Me(n, t), De(t), r & 512 && (Xt || s === null || fn(s, s.return)), s !== null && r & 4 && ic(t, t.memoizedProps, s.memoizedProps);
                break;
            case 5:
                if (Me(n, t), De(t), r & 512 && (Xt || s === null || fn(s, s.return)), t.flags & 32) {
                    u = t.stateNode;
                    try {
                        ss(u, "")
                    } catch (B) {
                        _t(t, t.return, B)
                    }
                }
                r & 4 && t.stateNode != null && (u = t.memoizedProps, ic(t, u, s !== null ? s.memoizedProps : u)), r & 1024 && (rc = !0);
                break;
            case 6:
                if (Me(n, t), De(t), r & 4) {
                    if (t.stateNode === null) throw Error(o(162));
                    r = t.memoizedProps, s = t.stateNode;
                    try {
                        s.nodeValue = r
                    } catch (B) {
                        _t(t, t.return, B)
                    }
                }
                break;
            case 3:
                if (Ro = null, u = Ze, Ze = Ao(n.containerInfo), Me(n, t), Ze = u, De(t), r & 4 && s !== null && s.memoizedState.isDehydrated) try {
                    Za(n.containerInfo)
                } catch (B) {
                    _t(t, t.return, B)
                }
                rc && (rc = !1, Qp(t));
                break;
            case 4:
                r = Ze, Ze = Ao(t.stateNode.containerInfo), Me(n, t), De(t), Ze = r;
                break;
            case 12:
                Me(n, t), De(t);
                break;
            case 13:
                Me(n, t), De(t), t.child.flags & 8192 && t.memoizedState !== null != (s !== null && s.memoizedState !== null) && (hc = ln()), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, oc(t, r)));
                break;
            case 22:
                u = t.memoizedState !== null;
                var R = s !== null && s.memoizedState !== null,
                    L = Nn,
                    q = Xt;
                if (Nn = L || u, Xt = q || R, Me(n, t), Xt = q, Nn = L, De(t), r & 8192) t: for (n = t.stateNode, n._visibility = u ? n._visibility & -2 : n._visibility | 1, u && (s === null || R || Nn || Xt || Ui(t)), s = null, n = t;;) {
                    if (n.tag === 5 || n.tag === 26) {
                        if (s === null) {
                            R = s = n;
                            try {
                                if (d = R.stateNode, u) y = d.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                                else {
                                    x = R.stateNode;
                                    var K = R.memoizedProps.style,
                                        U = K != null && K.hasOwnProperty("display") ? K.display : null;
                                    x.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim()
                                }
                            } catch (B) {
                                _t(R, R.return, B)
                            }
                        }
                    } else if (n.tag === 6) {
                        if (s === null) {
                            R = n;
                            try {
                                R.stateNode.nodeValue = u ? "" : R.memoizedProps
                            } catch (B) {
                                _t(R, R.return, B)
                            }
                        }
                    } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === t) && n.child !== null) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break t;
                    for (; n.sibling === null;) {
                        if (n.return === null || n.return === t) break t;
                        s === n && (s = null), n = n.return
                    }
                    s === n && (s = null), n.sibling.return = n.return, n = n.sibling
                }
                r & 4 && (r = t.updateQueue, r !== null && (s = r.retryQueue, s !== null && (r.retryQueue = null, oc(t, s))));
                break;
            case 19:
                Me(n, t), De(t), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, oc(t, r)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                Me(n, t), De(t)
        }
    }

    function De(t) {
        var n = t.flags;
        if (n & 2) {
            try {
                for (var s, r = t.return; r !== null;) {
                    if (Up(r)) {
                        s = r;
                        break
                    }
                    r = r.return
                }
                if (s == null) throw Error(o(160));
                switch (s.tag) {
                    case 27:
                        var u = s.stateNode,
                            d = sc(t);
                        fo(t, d, u);
                        break;
                    case 5:
                        var y = s.stateNode;
                        s.flags & 32 && (ss(y, ""), s.flags &= -33);
                        var x = sc(t);
                        fo(t, x, y);
                        break;
                    case 3:
                    case 4:
                        var R = s.stateNode.containerInfo,
                            L = sc(t);
                        ac(t, L, R);
                        break;
                    default:
                        throw Error(o(161))
                }
            } catch (q) {
                _t(t, t.return, q)
            }
            t.flags &= -3
        }
        n & 4096 && (t.flags &= -4097)
    }

    function Qp(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) {
                var n = t;
                Qp(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), t = t.sibling
            }
    }

    function $n(t, n) {
        if (n.subtreeFlags & 8772)
            for (n = n.child; n !== null;) qp(t, n.alternate, n), n = n.sibling
    }

    function Ui(t) {
        for (t = t.child; t !== null;) {
            var n = t;
            switch (n.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    In(4, n, n.return), Ui(n);
                    break;
                case 1:
                    fn(n, n.return);
                    var s = n.stateNode;
                    typeof s.componentWillUnmount == "function" && kp(n, n.return, s), Ui(n);
                    break;
                case 27:
                    Ha(n.stateNode);
                case 26:
                case 5:
                    fn(n, n.return), Ui(n);
                    break;
                case 22:
                    n.memoizedState === null && Ui(n);
                    break;
                case 30:
                    Ui(n);
                    break;
                default:
                    Ui(n)
            }
            t = t.sibling
        }
    }

    function ti(t, n, s) {
        for (s = s && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) {
            var r = n.alternate,
                u = t,
                d = n,
                y = d.flags;
            switch (d.tag) {
                case 0:
                case 11:
                case 15:
                    ti(u, d, s), Na(4, d);
                    break;
                case 1:
                    if (ti(u, d, s), r = d, u = r.stateNode, typeof u.componentDidMount == "function") try {
                        u.componentDidMount()
                    } catch (L) {
                        _t(r, r.return, L)
                    }
                    if (r = d, u = r.updateQueue, u !== null) {
                        var x = r.stateNode;
                        try {
                            var R = u.shared.hiddenCallbacks;
                            if (R !== null)
                                for (u.shared.hiddenCallbacks = null, u = 0; u < R.length; u++) Tm(R[u], x)
                        } catch (L) {
                            _t(r, r.return, L)
                        }
                    }
                    s && y & 64 && Lp(d), ja(d, d.return);
                    break;
                case 27:
                    Bp(d);
                case 26:
                case 5:
                    ti(u, d, s), s && r === null && y & 4 && Pp(d), ja(d, d.return);
                    break;
                case 12:
                    ti(u, d, s);
                    break;
                case 13:
                    ti(u, d, s), s && y & 4 && Xp(u, d);
                    break;
                case 22:
                    d.memoizedState === null && ti(u, d, s), ja(d, d.return);
                    break;
                case 30:
                    break;
                default:
                    ti(u, d, s)
            }
            n = n.sibling
        }
    }

    function lc(t, n) {
        var s = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), t = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool), t !== s && (t != null && t.refCount++, s != null && ya(s))
    }

    function uc(t, n) {
        t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && ya(t))
    }

    function dn(t, n, s, r) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null;) Fp(t, n, s, r), n = n.sibling
    }

    function Fp(t, n, s, r) {
        var u = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                dn(t, n, s, r), u & 2048 && Na(9, n);
                break;
            case 1:
                dn(t, n, s, r);
                break;
            case 3:
                dn(t, n, s, r), u & 2048 && (t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && ya(t)));
                break;
            case 12:
                if (u & 2048) {
                    dn(t, n, s, r), t = n.stateNode;
                    try {
                        var d = n.memoizedProps,
                            y = d.id,
                            x = d.onPostCommit;
                        typeof x == "function" && x(y, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                    } catch (R) {
                        _t(n, n.return, R)
                    }
                } else dn(t, n, s, r);
                break;
            case 13:
                dn(t, n, s, r);
                break;
            case 23:
                break;
            case 22:
                d = n.stateNode, y = n.alternate, n.memoizedState !== null ? d._visibility & 2 ? dn(t, n, s, r) : _a(t, n) : d._visibility & 2 ? dn(t, n, s, r) : (d._visibility |= 2, ws(t, n, s, r, (n.subtreeFlags & 10256) !== 0)), u & 2048 && lc(y, n);
                break;
            case 24:
                dn(t, n, s, r), u & 2048 && uc(n.alternate, n);
                break;
            default:
                dn(t, n, s, r)
        }
    }

    function ws(t, n, s, r, u) {
        for (u = u && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null;) {
            var d = t,
                y = n,
                x = s,
                R = r,
                L = y.flags;
            switch (y.tag) {
                case 0:
                case 11:
                case 15:
                    ws(d, y, x, R, u), Na(8, y);
                    break;
                case 23:
                    break;
                case 22:
                    var q = y.stateNode;
                    y.memoizedState !== null ? q._visibility & 2 ? ws(d, y, x, R, u) : _a(d, y) : (q._visibility |= 2, ws(d, y, x, R, u)), u && L & 2048 && lc(y.alternate, y);
                    break;
                case 24:
                    ws(d, y, x, R, u), u && L & 2048 && uc(y.alternate, y);
                    break;
                default:
                    ws(d, y, x, R, u)
            }
            n = n.sibling
        }
    }

    function _a(t, n) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null;) {
                var s = t,
                    r = n,
                    u = r.flags;
                switch (r.tag) {
                    case 22:
                        _a(s, r), u & 2048 && lc(r.alternate, r);
                        break;
                    case 24:
                        _a(s, r), u & 2048 && uc(r.alternate, r);
                        break;
                    default:
                        _a(s, r)
                }
                n = n.sibling
            }
    }
    var Va = 8192;

    function Es(t) {
        if (t.subtreeFlags & Va)
            for (t = t.child; t !== null;) Zp(t), t = t.sibling
    }

    function Zp(t) {
        switch (t.tag) {
            case 26:
                Es(t), t.flags & Va && t.memoizedState !== null && ow(Ze, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                Es(t);
                break;
            case 3:
            case 4:
                var n = Ze;
                Ze = Ao(t.stateNode.containerInfo), Es(t), Ze = n;
                break;
            case 22:
                t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = Va, Va = 16777216, Es(t), Va = n) : Es(t));
                break;
            default:
                Es(t)
        }
    }

    function Wp(t) {
        var n = t.alternate;
        if (n !== null && (t = n.child, t !== null)) {
            n.child = null;
            do n = t.sibling, t.sibling = null, t = n; while (t !== null)
        }
    }

    function za(t) {
        var n = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (n !== null)
                for (var s = 0; s < n.length; s++) {
                    var r = n[s];
                    ne = r, Ip(r, t)
                }
            Wp(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) Jp(t), t = t.sibling
    }

    function Jp(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                za(t), t.flags & 2048 && In(9, t, t.return);
                break;
            case 3:
                za(t);
                break;
            case 12:
                za(t);
                break;
            case 22:
                var n = t.stateNode;
                t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3, ho(t)) : za(t);
                break;
            default:
                za(t)
        }
    }

    function ho(t) {
        var n = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (n !== null)
                for (var s = 0; s < n.length; s++) {
                    var r = n[s];
                    ne = r, Ip(r, t)
                }
            Wp(t)
        }
        for (t = t.child; t !== null;) {
            switch (n = t, n.tag) {
                case 0:
                case 11:
                case 15:
                    In(8, n, n.return), ho(n);
                    break;
                case 22:
                    s = n.stateNode, s._visibility & 2 && (s._visibility &= -3, ho(n));
                    break;
                default:
                    ho(n)
            }
            t = t.sibling
        }
    }

    function Ip(t, n) {
        for (; ne !== null;) {
            var s = ne;
            switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    In(8, s, n);
                    break;
                case 23:
                case 22:
                    if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
                        var r = s.memoizedState.cachePool.pool;
                        r != null && r.refCount++
                    }
                    break;
                case 24:
                    ya(s.memoizedState.cache)
            }
            if (r = s.child, r !== null) r.return = s, ne = r;
            else t: for (s = t; ne !== null;) {
                r = ne;
                var u = r.sibling,
                    d = r.return;
                if (Gp(r), r === s) {
                    ne = null;
                    break t
                }
                if (u !== null) {
                    u.return = d, ne = u;
                    break t
                }
                ne = d
            }
        }
    }
    var wT = {
            getCacheForType: function(t) {
                var n = ue(Zt),
                    s = n.data.get(t);
                return s === void 0 && (s = t(), n.data.set(t, s)), s
            }
        },
        ET = typeof WeakMap == "function" ? WeakMap : Map,
        Mt = 0,
        Vt = null,
        St = null,
        wt = 0,
        Dt = 0,
        Oe = null,
        ei = !1,
        As = !1,
        cc = !1,
        _n = 0,
        qt = 0,
        ni = 0,
        Bi = 0,
        fc = 0,
        Ge = 0,
        Cs = 0,
        La = null,
        Se = null,
        dc = !1,
        hc = 0,
        mo = 1 / 0,
        po = null,
        ii = null,
        ae = 0,
        si = null,
        Rs = null,
        Ms = 0,
        mc = 0,
        pc = null,
        $p = null,
        ka = 0,
        gc = null;

    function Ne() {
        if ((Mt & 2) !== 0 && wt !== 0) return wt & -wt;
        if (V.T !== null) {
            var t = ps;
            return t !== 0 ? t : wc()
        }
        return ph()
    }

    function tg() {
        Ge === 0 && (Ge = (wt & 536870912) === 0 || At ? fh() : 536870912);
        var t = qe.current;
        return t !== null && (t.flags |= 32), Ge
    }

    function je(t, n, s) {
        (t === Vt && (Dt === 2 || Dt === 9) || t.cancelPendingCommit !== null) && (Ds(t, 0), ai(t, wt, Ge, !1)), ea(t, s), ((Mt & 2) === 0 || t !== Vt) && (t === Vt && ((Mt & 2) === 0 && (Bi |= s), qt === 4 && ai(t, wt, Ge, !1)), hn(t))
    }

    function eg(t, n, s) {
        if ((Mt & 6) !== 0) throw Error(o(327));
        var r = !s && (n & 124) === 0 && (n & t.expiredLanes) === 0 || ta(t, n),
            u = r ? RT(t, n) : bc(t, n, !0),
            d = r;
        do {
            if (u === 0) {
                As && !r && ai(t, n, 0, !1);
                break
            } else {
                if (s = t.current.alternate, d && !AT(s)) {
                    u = bc(t, n, !1), d = !1;
                    continue
                }
                if (u === 2) {
                    if (d = n, t.errorRecoveryDisabledLanes & d) var y = 0;
                    else y = t.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
                    if (y !== 0) {
                        n = y;
                        t: {
                            var x = t;u = La;
                            var R = x.current.memoizedState.isDehydrated;
                            if (R && (Ds(x, y).flags |= 256), y = bc(x, y, !1), y !== 2) {
                                if (cc && !R) {
                                    x.errorRecoveryDisabledLanes |= d, Bi |= d, u = 4;
                                    break t
                                }
                                d = Se, Se = u, d !== null && (Se === null ? Se = d : Se.push.apply(Se, d))
                            }
                            u = y
                        }
                        if (d = !1, u !== 2) continue
                    }
                }
                if (u === 1) {
                    Ds(t, 0), ai(t, n, 0, !0);
                    break
                }
                t: {
                    switch (r = t, d = u, d) {
                        case 0:
                        case 1:
                            throw Error(o(345));
                        case 4:
                            if ((n & 4194048) !== n) break;
                        case 6:
                            ai(r, n, Ge, !ei);
                            break t;
                        case 2:
                            Se = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(o(329))
                    }
                    if ((n & 62914560) === n && (u = hc + 300 - ln(), 10 < u)) {
                        if (ai(r, n, Ge, !ei), Ar(r, 0, !0) !== 0) break t;
                        r.timeoutHandle = Og(ng.bind(null, r, s, Se, po, dc, n, Ge, Bi, Cs, ei, d, 2, -0, 0), u);
                        break t
                    }
                    ng(r, s, Se, po, dc, n, Ge, Bi, Cs, ei, d, 0, -0, 0)
                }
            }
            break
        } while (!0);
        hn(t)
    }

    function ng(t, n, s, r, u, d, y, x, R, L, q, K, U, B) {
        if (t.timeoutHandle = -1, K = n.subtreeFlags, (K & 8192 || (K & 16785408) === 16785408) && (Ya = {
                stylesheets: null,
                count: 0,
                unsuspend: rw
            }, Zp(n), K = lw(), K !== null)) {
            t.cancelPendingCommit = K(ug.bind(null, t, n, d, s, r, u, y, x, R, q, 1, U, B)), ai(t, d, y, !L);
            return
        }
        ug(t, n, d, s, r, u, y, x, R)
    }

    function AT(t) {
        for (var n = t;;) {
            var s = n.tag;
            if ((s === 0 || s === 11 || s === 15) && n.flags & 16384 && (s = n.updateQueue, s !== null && (s = s.stores, s !== null)))
                for (var r = 0; r < s.length; r++) {
                    var u = s[r],
                        d = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!Ce(d(), u)) return !1
                    } catch {
                        return !1
                    }
                }
            if (s = n.child, n.subtreeFlags & 16384 && s !== null) s.return = n, n = s;
            else {
                if (n === t) break;
                for (; n.sibling === null;) {
                    if (n.return === null || n.return === t) return !0;
                    n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
            }
        }
        return !0
    }

    function ai(t, n, s, r) {
        n &= ~fc, n &= ~Bi, t.suspendedLanes |= n, t.pingedLanes &= ~n, r && (t.warmLanes |= n), r = t.expirationTimes;
        for (var u = n; 0 < u;) {
            var d = 31 - Ae(u),
                y = 1 << d;
            r[d] = -1, u &= ~y
        }
        s !== 0 && hh(t, s, n)
    }

    function go() {
        return (Mt & 6) === 0 ? (Pa(0), !1) : !0
    }

    function yc() {
        if (St !== null) {
            if (Dt === 0) var t = St.return;
            else t = St, An = Vi = null, Vu(t), Ss = null, Ma = 0, t = St;
            for (; t !== null;) zp(t.alternate, t), t = t.return;
            St = null
        }
    }

    function Ds(t, n) {
        var s = t.timeoutHandle;
        s !== -1 && (t.timeoutHandle = -1, GT(s)), s = t.cancelPendingCommit, s !== null && (t.cancelPendingCommit = null, s()), yc(), Vt = t, St = s = Tn(t.current, null), wt = n, Dt = 0, Oe = null, ei = !1, As = ta(t, n), cc = !1, Cs = Ge = fc = Bi = ni = qt = 0, Se = La = null, dc = !1, (n & 8) !== 0 && (n |= n & 32);
        var r = t.entangledLanes;
        if (r !== 0)
            for (t = t.entanglements, r &= n; 0 < r;) {
                var u = 31 - Ae(r),
                    d = 1 << u;
                n |= t[u], r &= ~d
            }
        return _n = n, kr(), s
    }

    function ig(t, n) {
        yt = null, V.H = no, n === ba || n === Kr ? (n = xm(), Dt = 3) : n === ym ? (n = xm(), Dt = 4) : Dt = n === Sp ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Oe = n, St === null && (qt = 1, oo(t, Pe(n, t.current)))
    }

    function sg() {
        var t = V.H;
        return V.H = no, t === null ? no : t
    }

    function ag() {
        var t = V.A;
        return V.A = wT, t
    }

    function vc() {
        qt = 4, ei || (wt & 4194048) !== wt && qe.current !== null || (As = !0), (ni & 134217727) === 0 && (Bi & 134217727) === 0 || Vt === null || ai(Vt, wt, Ge, !1)
    }

    function bc(t, n, s) {
        var r = Mt;
        Mt |= 2;
        var u = sg(),
            d = ag();
        (Vt !== t || wt !== n) && (po = null, Ds(t, n)), n = !1;
        var y = qt;
        t: do try {
                if (Dt !== 0 && St !== null) {
                    var x = St,
                        R = Oe;
                    switch (Dt) {
                        case 8:
                            yc(), y = 6;
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            qe.current === null && (n = !0);
                            var L = Dt;
                            if (Dt = 0, Oe = null, Os(t, x, R, L), s && As) {
                                y = 0;
                                break t
                            }
                            break;
                        default:
                            L = Dt, Dt = 0, Oe = null, Os(t, x, R, L)
                    }
                }
                CT(), y = qt;
                break
            } catch (q) {
                ig(t, q)
            }
            while (!0);
        return n && t.shellSuspendCounter++, An = Vi = null, Mt = r, V.H = u, V.A = d, St === null && (Vt = null, wt = 0, kr()), y
    }

    function CT() {
        for (; St !== null;) rg(St)
    }

    function RT(t, n) {
        var s = Mt;
        Mt |= 2;
        var r = sg(),
            u = ag();
        Vt !== t || wt !== n ? (po = null, mo = ln() + 500, Ds(t, n)) : As = ta(t, n);
        t: do try {
                if (Dt !== 0 && St !== null) {
                    n = St;
                    var d = Oe;
                    e: switch (Dt) {
                        case 1:
                            Dt = 0, Oe = null, Os(t, n, d, 1);
                            break;
                        case 2:
                        case 9:
                            if (vm(d)) {
                                Dt = 0, Oe = null, og(n);
                                break
                            }
                            n = function() {
                                Dt !== 2 && Dt !== 9 || Vt !== t || (Dt = 7), hn(t)
                            }, d.then(n, n);
                            break t;
                        case 3:
                            Dt = 7;
                            break t;
                        case 4:
                            Dt = 5;
                            break t;
                        case 7:
                            vm(d) ? (Dt = 0, Oe = null, og(n)) : (Dt = 0, Oe = null, Os(t, n, d, 7));
                            break;
                        case 5:
                            var y = null;
                            switch (St.tag) {
                                case 26:
                                    y = St.memoizedState;
                                case 5:
                                case 27:
                                    var x = St;
                                    if (!y || qg(y)) {
                                        Dt = 0, Oe = null;
                                        var R = x.sibling;
                                        if (R !== null) St = R;
                                        else {
                                            var L = x.return;
                                            L !== null ? (St = L, yo(L)) : St = null
                                        }
                                        break e
                                    }
                            }
                            Dt = 0, Oe = null, Os(t, n, d, 5);
                            break;
                        case 6:
                            Dt = 0, Oe = null, Os(t, n, d, 6);
                            break;
                        case 8:
                            yc(), qt = 6;
                            break t;
                        default:
                            throw Error(o(462))
                    }
                }
                MT();
                break
            } catch (q) {
                ig(t, q)
            }
            while (!0);
        return An = Vi = null, V.H = r, V.A = u, Mt = s, St !== null ? 0 : (Vt = null, wt = 0, kr(), qt)
    }

    function MT() {
        for (; St !== null && !W1();) rg(St)
    }

    function rg(t) {
        var n = _p(t.alternate, t, _n);
        t.memoizedProps = t.pendingProps, n === null ? yo(t) : St = n
    }

    function og(t) {
        var n = t,
            s = n.alternate;
        switch (n.tag) {
            case 15:
            case 0:
                n = Rp(s, n, n.pendingProps, n.type, void 0, wt);
                break;
            case 11:
                n = Rp(s, n, n.pendingProps, n.type.render, n.ref, wt);
                break;
            case 5:
                Vu(n);
            default:
                zp(s, n), n = St = lm(n, _n), n = _p(s, n, _n)
        }
        t.memoizedProps = t.pendingProps, n === null ? yo(t) : St = n
    }

    function Os(t, n, s, r) {
        An = Vi = null, Vu(n), Ss = null, Ma = 0;
        var u = n.return;
        try {
            if (yT(t, u, n, s, wt)) {
                qt = 1, oo(t, Pe(s, t.current)), St = null;
                return
            }
        } catch (d) {
            if (u !== null) throw St = u, d;
            qt = 1, oo(t, Pe(s, t.current)), St = null;
            return
        }
        n.flags & 32768 ? (At || r === 1 ? t = !0 : As || (wt & 536870912) !== 0 ? t = !1 : (ei = t = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = qe.current, r !== null && r.tag === 13 && (r.flags |= 16384))), lg(n, t)) : yo(n)
    }

    function yo(t) {
        var n = t;
        do {
            if ((n.flags & 32768) !== 0) {
                lg(n, ei);
                return
            }
            t = n.return;
            var s = bT(n.alternate, n, _n);
            if (s !== null) {
                St = s;
                return
            }
            if (n = n.sibling, n !== null) {
                St = n;
                return
            }
            St = n = t
        } while (n !== null);
        qt === 0 && (qt = 5)
    }

    function lg(t, n) {
        do {
            var s = xT(t.alternate, t);
            if (s !== null) {
                s.flags &= 32767, St = s;
                return
            }
            if (s = t.return, s !== null && (s.flags |= 32768, s.subtreeFlags = 0, s.deletions = null), !n && (t = t.sibling, t !== null)) {
                St = t;
                return
            }
            St = t = s
        } while (t !== null);
        qt = 6, St = null
    }

    function ug(t, n, s, r, u, d, y, x, R) {
        t.cancelPendingCommit = null;
        do vo(); while (ae !== 0);
        if ((Mt & 6) !== 0) throw Error(o(327));
        if (n !== null) {
            if (n === t.current) throw Error(o(177));
            if (d = n.lanes | n.childLanes, d |= uu, rS(t, s, d, y, x, R), t === Vt && (St = Vt = null, wt = 0), Rs = n, si = t, Ms = s, mc = d, pc = u, $p = r, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, jT(Tr, function() {
                    return mg(), null
                })) : (t.callbackNode = null, t.callbackPriority = 0), r = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || r) {
                r = V.T, V.T = null, u = F.p, F.p = 2, y = Mt, Mt |= 4;
                try {
                    ST(t, n, s)
                } finally {
                    Mt = y, F.p = u, V.T = r
                }
            }
            ae = 1, cg(), fg(), dg()
        }
    }

    function cg() {
        if (ae === 1) {
            ae = 0;
            var t = si,
                n = Rs,
                s = (n.flags & 13878) !== 0;
            if ((n.subtreeFlags & 13878) !== 0 || s) {
                s = V.T, V.T = null;
                var r = F.p;
                F.p = 2;
                var u = Mt;
                Mt |= 4;
                try {
                    Kp(n, t);
                    var d = Nc,
                        y = Ih(t.containerInfo),
                        x = d.focusedElem,
                        R = d.selectionRange;
                    if (y !== x && x && x.ownerDocument && Jh(x.ownerDocument.documentElement, x)) {
                        if (R !== null && su(x)) {
                            var L = R.start,
                                q = R.end;
                            if (q === void 0 && (q = L), "selectionStart" in x) x.selectionStart = L, x.selectionEnd = Math.min(q, x.value.length);
                            else {
                                var K = x.ownerDocument || document,
                                    U = K && K.defaultView || window;
                                if (U.getSelection) {
                                    var B = U.getSelection(),
                                        mt = x.textContent.length,
                                        ct = Math.min(R.start, mt),
                                        jt = R.end === void 0 ? ct : Math.min(R.end, mt);
                                    !B.extend && ct > jt && (y = jt, jt = ct, ct = y);
                                    var N = Wh(x, ct),
                                        D = Wh(x, jt);
                                    if (N && D && (B.rangeCount !== 1 || B.anchorNode !== N.node || B.anchorOffset !== N.offset || B.focusNode !== D.node || B.focusOffset !== D.offset)) {
                                        var z = K.createRange();
                                        z.setStart(N.node, N.offset), B.removeAllRanges(), ct > jt ? (B.addRange(z), B.extend(D.node, D.offset)) : (z.setEnd(D.node, D.offset), B.addRange(z))
                                    }
                                }
                            }
                        }
                        for (K = [], B = x; B = B.parentNode;) B.nodeType === 1 && K.push({
                            element: B,
                            left: B.scrollLeft,
                            top: B.scrollTop
                        });
                        for (typeof x.focus == "function" && x.focus(), x = 0; x < K.length; x++) {
                            var Y = K[x];
                            Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top
                        }
                    }
                    Oo = !!Oc, Nc = Oc = null
                } finally {
                    Mt = u, F.p = r, V.T = s
                }
            }
            t.current = n, ae = 2
        }
    }

    function fg() {
        if (ae === 2) {
            ae = 0;
            var t = si,
                n = Rs,
                s = (n.flags & 8772) !== 0;
            if ((n.subtreeFlags & 8772) !== 0 || s) {
                s = V.T, V.T = null;
                var r = F.p;
                F.p = 2;
                var u = Mt;
                Mt |= 4;
                try {
                    qp(t, n.alternate, n)
                } finally {
                    Mt = u, F.p = r, V.T = s
                }
            }
            ae = 3
        }
    }

    function dg() {
        if (ae === 4 || ae === 3) {
            ae = 0, J1();
            var t = si,
                n = Rs,
                s = Ms,
                r = $p;
            (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ae = 5 : (ae = 0, Rs = si = null, hg(t, t.pendingLanes));
            var u = t.pendingLanes;
            if (u === 0 && (ii = null), kl(s), n = n.stateNode, Ee && typeof Ee.onCommitFiberRoot == "function") try {
                Ee.onCommitFiberRoot($s, n, void 0, (n.current.flags & 128) === 128)
            } catch {}
            if (r !== null) {
                n = V.T, u = F.p, F.p = 2, V.T = null;
                try {
                    for (var d = t.onRecoverableError, y = 0; y < r.length; y++) {
                        var x = r[y];
                        d(x.value, {
                            componentStack: x.stack
                        })
                    }
                } finally {
                    V.T = n, F.p = u
                }
            }(Ms & 3) !== 0 && vo(), hn(t), u = t.pendingLanes, (s & 4194090) !== 0 && (u & 42) !== 0 ? t === gc ? ka++ : (ka = 0, gc = t) : ka = 0, Pa(0)
        }
    }

    function hg(t, n) {
        (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache, n != null && (t.pooledCache = null, ya(n)))
    }

    function vo(t) {
        return cg(), fg(), dg(), mg()
    }

    function mg() {
        if (ae !== 5) return !1;
        var t = si,
            n = mc;
        mc = 0;
        var s = kl(Ms),
            r = V.T,
            u = F.p;
        try {
            F.p = 32 > s ? 32 : s, V.T = null, s = pc, pc = null;
            var d = si,
                y = Ms;
            if (ae = 0, Rs = si = null, Ms = 0, (Mt & 6) !== 0) throw Error(o(331));
            var x = Mt;
            if (Mt |= 4, Jp(d.current), Fp(d, d.current, y, s), Mt = x, Pa(0, !1), Ee && typeof Ee.onPostCommitFiberRoot == "function") try {
                Ee.onPostCommitFiberRoot($s, d)
            } catch {}
            return !0
        } finally {
            F.p = u, V.T = r, hg(t, n)
        }
    }

    function pg(t, n, s) {
        n = Pe(s, n), n = Fu(t.stateNode, n, 2), t = Fn(t, n, 2), t !== null && (ea(t, 2), hn(t))
    }

    function _t(t, n, s) {
        if (t.tag === 3) pg(t, t, s);
        else
            for (; n !== null;) {
                if (n.tag === 3) {
                    pg(n, t, s);
                    break
                } else if (n.tag === 1) {
                    var r = n.stateNode;
                    if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ii === null || !ii.has(r))) {
                        t = Pe(s, t), s = bp(2), r = Fn(n, s, 2), r !== null && (xp(s, r, n, t), ea(r, 2), hn(r));
                        break
                    }
                }
                n = n.return
            }
    }

    function xc(t, n, s) {
        var r = t.pingCache;
        if (r === null) {
            r = t.pingCache = new ET;
            var u = new Set;
            r.set(n, u)
        } else u = r.get(n), u === void 0 && (u = new Set, r.set(n, u));
        u.has(s) || (cc = !0, u.add(s), t = DT.bind(null, t, n, s), n.then(t, t))
    }

    function DT(t, n, s) {
        var r = t.pingCache;
        r !== null && r.delete(n), t.pingedLanes |= t.suspendedLanes & s, t.warmLanes &= ~s, Vt === t && (wt & s) === s && (qt === 4 || qt === 3 && (wt & 62914560) === wt && 300 > ln() - hc ? (Mt & 2) === 0 && Ds(t, 0) : fc |= s, Cs === wt && (Cs = 0)), hn(t)
    }

    function gg(t, n) {
        n === 0 && (n = dh()), t = fs(t, n), t !== null && (ea(t, n), hn(t))
    }

    function OT(t) {
        var n = t.memoizedState,
            s = 0;
        n !== null && (s = n.retryLane), gg(t, s)
    }

    function NT(t, n) {
        var s = 0;
        switch (t.tag) {
            case 13:
                var r = t.stateNode,
                    u = t.memoizedState;
                u !== null && (s = u.retryLane);
                break;
            case 19:
                r = t.stateNode;
                break;
            case 22:
                r = t.stateNode._retryCache;
                break;
            default:
                throw Error(o(314))
        }
        r !== null && r.delete(n), gg(t, s)
    }

    function jT(t, n) {
        return ze(t, n)
    }
    var bo = null,
        Ns = null,
        Sc = !1,
        xo = !1,
        Tc = !1,
        Hi = 0;

    function hn(t) {
        t !== Ns && t.next === null && (Ns === null ? bo = Ns = t : Ns = Ns.next = t), xo = !0, Sc || (Sc = !0, VT())
    }

    function Pa(t, n) {
        if (!Tc && xo) {
            Tc = !0;
            do
                for (var s = !1, r = bo; r !== null;) {
                    if (t !== 0) {
                        var u = r.pendingLanes;
                        if (u === 0) var d = 0;
                        else {
                            var y = r.suspendedLanes,
                                x = r.pingedLanes;
                            d = (1 << 31 - Ae(42 | t) + 1) - 1, d &= u & ~(y & ~x), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0
                        }
                        d !== 0 && (s = !0, xg(r, d))
                    } else d = wt, d = Ar(r, r === Vt ? d : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), (d & 3) === 0 || ta(r, d) || (s = !0, xg(r, d));
                    r = r.next
                }
            while (s);
            Tc = !1
        }
    }

    function _T() {
        yg()
    }

    function yg() {
        xo = Sc = !1;
        var t = 0;
        Hi !== 0 && (qT() && (t = Hi), Hi = 0);
        for (var n = ln(), s = null, r = bo; r !== null;) {
            var u = r.next,
                d = vg(r, n);
            d === 0 ? (r.next = null, s === null ? bo = u : s.next = u, u === null && (Ns = s)) : (s = r, (t !== 0 || (d & 3) !== 0) && (xo = !0)), r = u
        }
        Pa(t)
    }

    function vg(t, n) {
        for (var s = t.suspendedLanes, r = t.pingedLanes, u = t.expirationTimes, d = t.pendingLanes & -62914561; 0 < d;) {
            var y = 31 - Ae(d),
                x = 1 << y,
                R = u[y];
            R === -1 ? ((x & s) === 0 || (x & r) !== 0) && (u[y] = aS(x, n)) : R <= n && (t.expiredLanes |= x), d &= ~x
        }
        if (n = Vt, s = wt, s = Ar(t, t === n ? s : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), r = t.callbackNode, s === 0 || t === n && (Dt === 2 || Dt === 9) || t.cancelPendingCommit !== null) return r !== null && r !== null && Hn(r), t.callbackNode = null, t.callbackPriority = 0;
        if ((s & 3) === 0 || ta(t, s)) {
            if (n = s & -s, n === t.callbackPriority) return n;
            switch (r !== null && Hn(r), kl(s)) {
                case 2:
                case 8:
                    s = uh;
                    break;
                case 32:
                    s = Tr;
                    break;
                case 268435456:
                    s = ch;
                    break;
                default:
                    s = Tr
            }
            return r = bg.bind(null, t), s = ze(s, r), t.callbackPriority = n, t.callbackNode = s, n
        }
        return r !== null && r !== null && Hn(r), t.callbackPriority = 2, t.callbackNode = null, 2
    }

    function bg(t, n) {
        if (ae !== 0 && ae !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
        var s = t.callbackNode;
        if (vo() && t.callbackNode !== s) return null;
        var r = wt;
        return r = Ar(t, t === Vt ? r : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), r === 0 ? null : (eg(t, r, n), vg(t, ln()), t.callbackNode != null && t.callbackNode === s ? bg.bind(null, t) : null)
    }

    function xg(t, n) {
        if (vo()) return null;
        eg(t, n, !0)
    }

    function VT() {
        YT(function() {
            (Mt & 6) !== 0 ? ze(lh, _T) : yg()
        })
    }

    function wc() {
        return Hi === 0 && (Hi = fh()), Hi
    }

    function Sg(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Or("" + t)
    }

    function Tg(t, n) {
        var s = n.ownerDocument.createElement("input");
        return s.name = n.name, s.value = n.value, t.id && s.setAttribute("form", t.id), n.parentNode.insertBefore(s, n), t = new FormData(t), s.parentNode.removeChild(s), t
    }

    function zT(t, n, s, r, u) {
        if (n === "submit" && s && s.stateNode === u) {
            var d = Sg((u[ye] || null).action),
                y = r.submitter;
            y && (n = (n = y[ye] || null) ? Sg(n.formAction) : y.getAttribute("formAction"), n !== null && (d = n, y = null));
            var x = new Vr("action", "action", null, r, u);
            t.push({
                event: x,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (r.defaultPrevented) {
                            if (Hi !== 0) {
                                var R = y ? Tg(u, y) : new FormData(u);
                                Gu(s, {
                                    pending: !0,
                                    data: R,
                                    method: u.method,
                                    action: d
                                }, null, R)
                            }
                        } else typeof d == "function" && (x.preventDefault(), R = y ? Tg(u, y) : new FormData(u), Gu(s, {
                            pending: !0,
                            data: R,
                            method: u.method,
                            action: d
                        }, d, R))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var Ec = 0; Ec < lu.length; Ec++) {
        var Ac = lu[Ec],
            LT = Ac.toLowerCase(),
            kT = Ac[0].toUpperCase() + Ac.slice(1);
        Fe(LT, "on" + kT)
    }
    Fe(em, "onAnimationEnd"), Fe(nm, "onAnimationIteration"), Fe(im, "onAnimationStart"), Fe("dblclick", "onDoubleClick"), Fe("focusin", "onFocus"), Fe("focusout", "onBlur"), Fe(tT, "onTransitionRun"), Fe(eT, "onTransitionStart"), Fe(nT, "onTransitionCancel"), Fe(sm, "onTransitionEnd"), es("onMouseEnter", ["mouseout", "mouseover"]), es("onMouseLeave", ["mouseout", "mouseover"]), es("onPointerEnter", ["pointerout", "pointerover"]), es("onPointerLeave", ["pointerout", "pointerover"]), Ai("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ai("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ai("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ai("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ai("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ai("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ua = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        PT = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ua));

    function wg(t, n) {
        n = (n & 4) !== 0;
        for (var s = 0; s < t.length; s++) {
            var r = t[s],
                u = r.event;
            r = r.listeners;
            t: {
                var d = void 0;
                if (n)
                    for (var y = r.length - 1; 0 <= y; y--) {
                        var x = r[y],
                            R = x.instance,
                            L = x.currentTarget;
                        if (x = x.listener, R !== d && u.isPropagationStopped()) break t;
                        d = x, u.currentTarget = L;
                        try {
                            d(u)
                        } catch (q) {
                            ro(q)
                        }
                        u.currentTarget = null, d = R
                    } else
                        for (y = 0; y < r.length; y++) {
                            if (x = r[y], R = x.instance, L = x.currentTarget, x = x.listener, R !== d && u.isPropagationStopped()) break t;
                            d = x, u.currentTarget = L;
                            try {
                                d(u)
                            } catch (q) {
                                ro(q)
                            }
                            u.currentTarget = null, d = R
                        }
            }
        }
    }

    function Tt(t, n) {
        var s = n[Pl];
        s === void 0 && (s = n[Pl] = new Set);
        var r = t + "__bubble";
        s.has(r) || (Eg(n, t, 2, !1), s.add(r))
    }

    function Cc(t, n, s) {
        var r = 0;
        n && (r |= 4), Eg(s, t, r, n)
    }
    var So = "_reactListening" + Math.random().toString(36).slice(2);

    function Rc(t) {
        if (!t[So]) {
            t[So] = !0, yh.forEach(function(s) {
                s !== "selectionchange" && (PT.has(s) || Cc(s, !1, t), Cc(s, !0, t))
            });
            var n = t.nodeType === 9 ? t : t.ownerDocument;
            n === null || n[So] || (n[So] = !0, Cc("selectionchange", !1, n))
        }
    }

    function Eg(t, n, s, r) {
        switch (Fg(n)) {
            case 2:
                var u = fw;
                break;
            case 8:
                u = dw;
                break;
            default:
                u = Hc
        }
        s = u.bind(null, n, s, t), u = void 0, !Zl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (u = !0), r ? u !== void 0 ? t.addEventListener(n, s, {
            capture: !0,
            passive: u
        }) : t.addEventListener(n, s, !0) : u !== void 0 ? t.addEventListener(n, s, {
            passive: u
        }) : t.addEventListener(n, s, !1)
    }

    function Mc(t, n, s, r, u) {
        var d = r;
        if ((n & 1) === 0 && (n & 2) === 0 && r !== null) t: for (;;) {
            if (r === null) return;
            var y = r.tag;
            if (y === 3 || y === 4) {
                var x = r.stateNode.containerInfo;
                if (x === u) break;
                if (y === 4)
                    for (y = r.return; y !== null;) {
                        var R = y.tag;
                        if ((R === 3 || R === 4) && y.stateNode.containerInfo === u) return;
                        y = y.return
                    }
                for (; x !== null;) {
                    if (y = Ii(x), y === null) return;
                    if (R = y.tag, R === 5 || R === 6 || R === 26 || R === 27) {
                        r = d = y;
                        continue t
                    }
                    x = x.parentNode
                }
            }
            r = r.return
        }
        Nh(function() {
            var L = d,
                q = Ql(s),
                K = [];
            t: {
                var U = am.get(t);
                if (U !== void 0) {
                    var B = Vr,
                        mt = t;
                    switch (t) {
                        case "keypress":
                            if (jr(s) === 0) break t;
                        case "keydown":
                        case "keyup":
                            B = jS;
                            break;
                        case "focusin":
                            mt = "focus", B = $l;
                            break;
                        case "focusout":
                            mt = "blur", B = $l;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            B = $l;
                            break;
                        case "click":
                            if (s.button === 2) break t;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            B = Vh;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            B = xS;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            B = zS;
                            break;
                        case em:
                        case nm:
                        case im:
                            B = wS;
                            break;
                        case sm:
                            B = kS;
                            break;
                        case "scroll":
                        case "scrollend":
                            B = vS;
                            break;
                        case "wheel":
                            B = US;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            B = AS;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            B = Lh;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            B = HS
                    }
                    var ct = (n & 4) !== 0,
                        jt = !ct && (t === "scroll" || t === "scrollend"),
                        N = ct ? U !== null ? U + "Capture" : null : U;
                    ct = [];
                    for (var D = L, z; D !== null;) {
                        var Y = D;
                        if (z = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || z === null || N === null || (Y = sa(D, N), Y != null && ct.push(Ba(D, Y, z))), jt) break;
                        D = D.return
                    }
                    0 < ct.length && (U = new B(U, mt, null, s, q), K.push({
                        event: U,
                        listeners: ct
                    }))
                }
            }
            if ((n & 7) === 0) {
                t: {
                    if (U = t === "mouseover" || t === "pointerover", B = t === "mouseout" || t === "pointerout", U && s !== Kl && (mt = s.relatedTarget || s.fromElement) && (Ii(mt) || mt[Ji])) break t;
                    if ((B || U) && (U = q.window === q ? q : (U = q.ownerDocument) ? U.defaultView || U.parentWindow : window, B ? (mt = s.relatedTarget || s.toElement, B = L, mt = mt ? Ii(mt) : null, mt !== null && (jt = c(mt), ct = mt.tag, mt !== jt || ct !== 5 && ct !== 27 && ct !== 6) && (mt = null)) : (B = null, mt = L), B !== mt)) {
                        if (ct = Vh, Y = "onMouseLeave", N = "onMouseEnter", D = "mouse", (t === "pointerout" || t === "pointerover") && (ct = Lh, Y = "onPointerLeave", N = "onPointerEnter", D = "pointer"), jt = B == null ? U : ia(B), z = mt == null ? U : ia(mt), U = new ct(Y, D + "leave", B, s, q), U.target = jt, U.relatedTarget = z, Y = null, Ii(q) === L && (ct = new ct(N, D + "enter", mt, s, q), ct.target = z, ct.relatedTarget = jt, Y = ct), jt = Y, B && mt) e: {
                            for (ct = B, N = mt, D = 0, z = ct; z; z = js(z)) D++;
                            for (z = 0, Y = N; Y; Y = js(Y)) z++;
                            for (; 0 < D - z;) ct = js(ct),
                            D--;
                            for (; 0 < z - D;) N = js(N),
                            z--;
                            for (; D--;) {
                                if (ct === N || N !== null && ct === N.alternate) break e;
                                ct = js(ct), N = js(N)
                            }
                            ct = null
                        }
                        else ct = null;
                        B !== null && Ag(K, U, B, ct, !1), mt !== null && jt !== null && Ag(K, jt, mt, ct, !0)
                    }
                }
                t: {
                    if (U = L ? ia(L) : window, B = U.nodeName && U.nodeName.toLowerCase(), B === "select" || B === "input" && U.type === "file") var et = Yh;
                    else if (qh(U))
                        if (Xh) et = JS;
                        else {
                            et = ZS;
                            var xt = FS
                        }
                    else B = U.nodeName,
                    !B || B.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? L && Xl(L.elementType) && (et = Yh) : et = WS;
                    if (et && (et = et(t, L))) {
                        Gh(K, et, s, q);
                        break t
                    }
                    xt && xt(t, U, L),
                    t === "focusout" && L && U.type === "number" && L.memoizedProps.value != null && Yl(U, "number", U.value)
                }
                switch (xt = L ? ia(L) : window, t) {
                    case "focusin":
                        (qh(xt) || xt.contentEditable === "true") && (ls = xt, au = L, da = null);
                        break;
                    case "focusout":
                        da = au = ls = null;
                        break;
                    case "mousedown":
                        ru = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ru = !1, $h(K, s, q);
                        break;
                    case "selectionchange":
                        if ($S) break;
                    case "keydown":
                    case "keyup":
                        $h(K, s, q)
                }
                var lt;
                if (eu) t: {
                    switch (t) {
                        case "compositionstart":
                            var ht = "onCompositionStart";
                            break t;
                        case "compositionend":
                            ht = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            ht = "onCompositionUpdate";
                            break t
                    }
                    ht = void 0
                }
                else os ? Bh(t, s) && (ht = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (ht = "onCompositionStart");ht && (kh && s.locale !== "ko" && (os || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && os && (lt = jh()) : (Yn = q, Wl = "value" in Yn ? Yn.value : Yn.textContent, os = !0)), xt = To(L, ht), 0 < xt.length && (ht = new zh(ht, t, null, s, q), K.push({
                    event: ht,
                    listeners: xt
                }), lt ? ht.data = lt : (lt = Hh(s), lt !== null && (ht.data = lt)))),
                (lt = GS ? YS(t, s) : XS(t, s)) && (ht = To(L, "onBeforeInput"), 0 < ht.length && (xt = new zh("onBeforeInput", "beforeinput", null, s, q), K.push({
                    event: xt,
                    listeners: ht
                }), xt.data = lt)),
                zT(K, t, L, s, q)
            }
            wg(K, n)
        })
    }

    function Ba(t, n, s) {
        return {
            instance: t,
            listener: n,
            currentTarget: s
        }
    }

    function To(t, n) {
        for (var s = n + "Capture", r = []; t !== null;) {
            var u = t,
                d = u.stateNode;
            if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || d === null || (u = sa(t, s), u != null && r.unshift(Ba(t, u, d)), u = sa(t, n), u != null && r.push(Ba(t, u, d))), t.tag === 3) return r;
            t = t.return
        }
        return []
    }

    function js(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }

    function Ag(t, n, s, r, u) {
        for (var d = n._reactName, y = []; s !== null && s !== r;) {
            var x = s,
                R = x.alternate,
                L = x.stateNode;
            if (x = x.tag, R !== null && R === r) break;
            x !== 5 && x !== 26 && x !== 27 || L === null || (R = L, u ? (L = sa(s, d), L != null && y.unshift(Ba(s, L, R))) : u || (L = sa(s, d), L != null && y.push(Ba(s, L, R)))), s = s.return
        }
        y.length !== 0 && t.push({
            event: n,
            listeners: y
        })
    }
    var UT = /\r\n?/g,
        BT = /\u0000|\uFFFD/g;

    function Cg(t) {
        return (typeof t == "string" ? t : "" + t).replace(UT, `
`).replace(BT, "")
    }

    function Rg(t, n) {
        return n = Cg(n), Cg(t) === n
    }

    function wo() {}

    function Nt(t, n, s, r, u, d) {
        switch (s) {
            case "children":
                typeof r == "string" ? n === "body" || n === "textarea" && r === "" || ss(t, r) : (typeof r == "number" || typeof r == "bigint") && n !== "body" && ss(t, "" + r);
                break;
            case "className":
                Rr(t, "class", r);
                break;
            case "tabIndex":
                Rr(t, "tabindex", r);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Rr(t, s, r);
                break;
            case "style":
                Dh(t, r, d);
                break;
            case "data":
                if (n !== "object") {
                    Rr(t, "data", r);
                    break
                }
            case "src":
            case "href":
                if (r === "" && (n !== "a" || s !== "href")) {
                    t.removeAttribute(s);
                    break
                }
                if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
                    t.removeAttribute(s);
                    break
                }
                r = Or("" + r), t.setAttribute(s, r);
                break;
            case "action":
            case "formAction":
                if (typeof r == "function") {
                    t.setAttribute(s, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof d == "function" && (s === "formAction" ? (n !== "input" && Nt(t, n, "name", u.name, u, null), Nt(t, n, "formEncType", u.formEncType, u, null), Nt(t, n, "formMethod", u.formMethod, u, null), Nt(t, n, "formTarget", u.formTarget, u, null)) : (Nt(t, n, "encType", u.encType, u, null), Nt(t, n, "method", u.method, u, null), Nt(t, n, "target", u.target, u, null)));
                if (r == null || typeof r == "symbol" || typeof r == "boolean") {
                    t.removeAttribute(s);
                    break
                }
                r = Or("" + r), t.setAttribute(s, r);
                break;
            case "onClick":
                r != null && (t.onclick = wo);
                break;
            case "onScroll":
                r != null && Tt("scroll", t);
                break;
            case "onScrollEnd":
                r != null && Tt("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (r != null) {
                    if (typeof r != "object" || !("__html" in r)) throw Error(o(61));
                    if (s = r.__html, s != null) {
                        if (u.children != null) throw Error(o(60));
                        t.innerHTML = s
                    }
                }
                break;
            case "multiple":
                t.multiple = r && typeof r != "function" && typeof r != "symbol";
                break;
            case "muted":
                t.muted = r && typeof r != "function" && typeof r != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
                    t.removeAttribute("xlink:href");
                    break
                }
                s = Or("" + r), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(s, "" + r) : t.removeAttribute(s);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                r && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(s, "") : t.removeAttribute(s);
                break;
            case "capture":
            case "download":
                r === !0 ? t.setAttribute(s, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(s, r) : t.removeAttribute(s);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? t.setAttribute(s, r) : t.removeAttribute(s);
                break;
            case "rowSpan":
            case "start":
                r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? t.removeAttribute(s) : t.setAttribute(s, r);
                break;
            case "popover":
                Tt("beforetoggle", t), Tt("toggle", t), Cr(t, "popover", r);
                break;
            case "xlinkActuate":
                xn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                break;
            case "xlinkArcrole":
                xn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                break;
            case "xlinkRole":
                xn(t, "http://www.w3.org/1999/xlink", "xlink:role", r);
                break;
            case "xlinkShow":
                xn(t, "http://www.w3.org/1999/xlink", "xlink:show", r);
                break;
            case "xlinkTitle":
                xn(t, "http://www.w3.org/1999/xlink", "xlink:title", r);
                break;
            case "xlinkType":
                xn(t, "http://www.w3.org/1999/xlink", "xlink:type", r);
                break;
            case "xmlBase":
                xn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                break;
            case "xmlLang":
                xn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                break;
            case "xmlSpace":
                xn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                break;
            case "is":
                Cr(t, "is", r);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (s = gS.get(s) || s, Cr(t, s, r))
        }
    }

    function Dc(t, n, s, r, u, d) {
        switch (s) {
            case "style":
                Dh(t, r, d);
                break;
            case "dangerouslySetInnerHTML":
                if (r != null) {
                    if (typeof r != "object" || !("__html" in r)) throw Error(o(61));
                    if (s = r.__html, s != null) {
                        if (u.children != null) throw Error(o(60));
                        t.innerHTML = s
                    }
                }
                break;
            case "children":
                typeof r == "string" ? ss(t, r) : (typeof r == "number" || typeof r == "bigint") && ss(t, "" + r);
                break;
            case "onScroll":
                r != null && Tt("scroll", t);
                break;
            case "onScrollEnd":
                r != null && Tt("scrollend", t);
                break;
            case "onClick":
                r != null && (t.onclick = wo);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!vh.hasOwnProperty(s)) t: {
                    if (s[0] === "o" && s[1] === "n" && (u = s.endsWith("Capture"), n = s.slice(2, u ? s.length - 7 : void 0), d = t[ye] || null, d = d != null ? d[s] : null, typeof d == "function" && t.removeEventListener(n, d, u), typeof r == "function")) {
                        typeof d != "function" && d !== null && (s in t ? t[s] = null : t.hasAttribute(s) && t.removeAttribute(s)), t.addEventListener(n, r, u);
                        break t
                    }
                    s in t ? t[s] = r : r === !0 ? t.setAttribute(s, "") : Cr(t, s, r)
                }
        }
    }

    function re(t, n, s) {
        switch (n) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                Tt("error", t), Tt("load", t);
                var r = !1,
                    u = !1,
                    d;
                for (d in s)
                    if (s.hasOwnProperty(d)) {
                        var y = s[d];
                        if (y != null) switch (d) {
                            case "src":
                                r = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(o(137, n));
                            default:
                                Nt(t, n, d, y, s, null)
                        }
                    } u && Nt(t, n, "srcSet", s.srcSet, s, null), r && Nt(t, n, "src", s.src, s, null);
                return;
            case "input":
                Tt("invalid", t);
                var x = d = y = u = null,
                    R = null,
                    L = null;
                for (r in s)
                    if (s.hasOwnProperty(r)) {
                        var q = s[r];
                        if (q != null) switch (r) {
                            case "name":
                                u = q;
                                break;
                            case "type":
                                y = q;
                                break;
                            case "checked":
                                R = q;
                                break;
                            case "defaultChecked":
                                L = q;
                                break;
                            case "value":
                                d = q;
                                break;
                            case "defaultValue":
                                x = q;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (q != null) throw Error(o(137, n));
                                break;
                            default:
                                Nt(t, n, r, q, s, null)
                        }
                    } Ah(t, d, x, R, L, y, u, !1), Mr(t);
                return;
            case "select":
                Tt("invalid", t), r = y = d = null;
                for (u in s)
                    if (s.hasOwnProperty(u) && (x = s[u], x != null)) switch (u) {
                        case "value":
                            d = x;
                            break;
                        case "defaultValue":
                            y = x;
                            break;
                        case "multiple":
                            r = x;
                        default:
                            Nt(t, n, u, x, s, null)
                    }
                n = d, s = y, t.multiple = !!r, n != null ? is(t, !!r, n, !1) : s != null && is(t, !!r, s, !0);
                return;
            case "textarea":
                Tt("invalid", t), d = u = r = null;
                for (y in s)
                    if (s.hasOwnProperty(y) && (x = s[y], x != null)) switch (y) {
                        case "value":
                            r = x;
                            break;
                        case "defaultValue":
                            u = x;
                            break;
                        case "children":
                            d = x;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (x != null) throw Error(o(91));
                            break;
                        default:
                            Nt(t, n, y, x, s, null)
                    }
                Rh(t, r, u, d), Mr(t);
                return;
            case "option":
                for (R in s) s.hasOwnProperty(R) && (r = s[R], r != null) && (R === "selected" ? t.selected = r && typeof r != "function" && typeof r != "symbol" : Nt(t, n, R, r, s, null));
                return;
            case "dialog":
                Tt("beforetoggle", t), Tt("toggle", t), Tt("cancel", t), Tt("close", t);
                break;
            case "iframe":
            case "object":
                Tt("load", t);
                break;
            case "video":
            case "audio":
                for (r = 0; r < Ua.length; r++) Tt(Ua[r], t);
                break;
            case "image":
                Tt("error", t), Tt("load", t);
                break;
            case "details":
                Tt("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                Tt("error", t), Tt("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (L in s)
                    if (s.hasOwnProperty(L) && (r = s[L], r != null)) switch (L) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, n));
                        default:
                            Nt(t, n, L, r, s, null)
                    }
                return;
            default:
                if (Xl(n)) {
                    for (q in s) s.hasOwnProperty(q) && (r = s[q], r !== void 0 && Dc(t, n, q, r, s, void 0));
                    return
                }
        }
        for (x in s) s.hasOwnProperty(x) && (r = s[x], r != null && Nt(t, n, x, r, s, null))
    }

    function HT(t, n, s, r) {
        switch (n) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var u = null,
                    d = null,
                    y = null,
                    x = null,
                    R = null,
                    L = null,
                    q = null;
                for (B in s) {
                    var K = s[B];
                    if (s.hasOwnProperty(B) && K != null) switch (B) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            R = K;
                        default:
                            r.hasOwnProperty(B) || Nt(t, n, B, null, r, K)
                    }
                }
                for (var U in r) {
                    var B = r[U];
                    if (K = s[U], r.hasOwnProperty(U) && (B != null || K != null)) switch (U) {
                        case "type":
                            d = B;
                            break;
                        case "name":
                            u = B;
                            break;
                        case "checked":
                            L = B;
                            break;
                        case "defaultChecked":
                            q = B;
                            break;
                        case "value":
                            y = B;
                            break;
                        case "defaultValue":
                            x = B;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (B != null) throw Error(o(137, n));
                            break;
                        default:
                            B !== K && Nt(t, n, U, B, r, K)
                    }
                }
                Gl(t, y, x, R, L, q, d, u);
                return;
            case "select":
                B = y = x = U = null;
                for (d in s)
                    if (R = s[d], s.hasOwnProperty(d) && R != null) switch (d) {
                        case "value":
                            break;
                        case "multiple":
                            B = R;
                        default:
                            r.hasOwnProperty(d) || Nt(t, n, d, null, r, R)
                    }
                for (u in r)
                    if (d = r[u], R = s[u], r.hasOwnProperty(u) && (d != null || R != null)) switch (u) {
                        case "value":
                            U = d;
                            break;
                        case "defaultValue":
                            x = d;
                            break;
                        case "multiple":
                            y = d;
                        default:
                            d !== R && Nt(t, n, u, d, r, R)
                    }
                n = x, s = y, r = B, U != null ? is(t, !!s, U, !1) : !!r != !!s && (n != null ? is(t, !!s, n, !0) : is(t, !!s, s ? [] : "", !1));
                return;
            case "textarea":
                B = U = null;
                for (x in s)
                    if (u = s[x], s.hasOwnProperty(x) && u != null && !r.hasOwnProperty(x)) switch (x) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Nt(t, n, x, null, r, u)
                    }
                for (y in r)
                    if (u = r[y], d = s[y], r.hasOwnProperty(y) && (u != null || d != null)) switch (y) {
                        case "value":
                            U = u;
                            break;
                        case "defaultValue":
                            B = u;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (u != null) throw Error(o(91));
                            break;
                        default:
                            u !== d && Nt(t, n, y, u, r, d)
                    }
                Ch(t, U, B);
                return;
            case "option":
                for (var mt in s) U = s[mt], s.hasOwnProperty(mt) && U != null && !r.hasOwnProperty(mt) && (mt === "selected" ? t.selected = !1 : Nt(t, n, mt, null, r, U));
                for (R in r) U = r[R], B = s[R], r.hasOwnProperty(R) && U !== B && (U != null || B != null) && (R === "selected" ? t.selected = U && typeof U != "function" && typeof U != "symbol" : Nt(t, n, R, U, r, B));
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var ct in s) U = s[ct], s.hasOwnProperty(ct) && U != null && !r.hasOwnProperty(ct) && Nt(t, n, ct, null, r, U);
                for (L in r)
                    if (U = r[L], B = s[L], r.hasOwnProperty(L) && U !== B && (U != null || B != null)) switch (L) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (U != null) throw Error(o(137, n));
                            break;
                        default:
                            Nt(t, n, L, U, r, B)
                    }
                return;
            default:
                if (Xl(n)) {
                    for (var jt in s) U = s[jt], s.hasOwnProperty(jt) && U !== void 0 && !r.hasOwnProperty(jt) && Dc(t, n, jt, void 0, r, U);
                    for (q in r) U = r[q], B = s[q], !r.hasOwnProperty(q) || U === B || U === void 0 && B === void 0 || Dc(t, n, q, U, r, B);
                    return
                }
        }
        for (var N in s) U = s[N], s.hasOwnProperty(N) && U != null && !r.hasOwnProperty(N) && Nt(t, n, N, null, r, U);
        for (K in r) U = r[K], B = s[K], !r.hasOwnProperty(K) || U === B || U == null && B == null || Nt(t, n, K, U, r, B)
    }
    var Oc = null,
        Nc = null;

    function Eo(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }

    function Mg(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Dg(t, n) {
        if (t === 0) switch (n) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return t === 1 && n === "foreignObject" ? 0 : t
    }

    function jc(t, n) {
        return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
    }
    var _c = null;

    function qT() {
        var t = window.event;
        return t && t.type === "popstate" ? t === _c ? !1 : (_c = t, !0) : (_c = null, !1)
    }
    var Og = typeof setTimeout == "function" ? setTimeout : void 0,
        GT = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Ng = typeof Promise == "function" ? Promise : void 0,
        YT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ng < "u" ? function(t) {
            return Ng.resolve(null).then(t).catch(XT)
        } : Og;

    function XT(t) {
        setTimeout(function() {
            throw t
        })
    }

    function ri(t) {
        return t === "head"
    }

    function jg(t, n) {
        var s = n,
            r = 0,
            u = 0;
        do {
            var d = s.nextSibling;
            if (t.removeChild(s), d && d.nodeType === 8)
                if (s = d.data, s === "/$") {
                    if (0 < r && 8 > r) {
                        s = r;
                        var y = t.ownerDocument;
                        if (s & 1 && Ha(y.documentElement), s & 2 && Ha(y.body), s & 4)
                            for (s = y.head, Ha(s), y = s.firstChild; y;) {
                                var x = y.nextSibling,
                                    R = y.nodeName;
                                y[na] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && y.rel.toLowerCase() === "stylesheet" || s.removeChild(y), y = x
                            }
                    }
                    if (u === 0) {
                        t.removeChild(d), Za(n);
                        return
                    }
                    u--
                } else s === "$" || s === "$?" || s === "$!" ? u++ : r = s.charCodeAt(0) - 48;
            else r = 0;
            s = d
        } while (s);
        Za(n)
    }

    function Vc(t) {
        var n = t.firstChild;
        for (n && n.nodeType === 10 && (n = n.nextSibling); n;) {
            var s = n;
            switch (n = n.nextSibling, s.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Vc(s), Ul(s);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (s.rel.toLowerCase() === "stylesheet") continue
            }
            t.removeChild(s)
        }
    }

    function KT(t, n, s, r) {
        for (; t.nodeType === 1;) {
            var u = s;
            if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
                if (!r && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
            } else if (r) {
                if (!t[na]) switch (n) {
                    case "meta":
                        if (!t.hasAttribute("itemprop")) break;
                        return t;
                    case "link":
                        if (d = t.getAttribute("rel"), d === "stylesheet" && t.hasAttribute("data-precedence")) break;
                        if (d !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence")) break;
                        return t;
                    case "script":
                        if (d = t.getAttribute("src"), (d !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && d && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                        return t;
                    default:
                        return t
                }
            } else if (n === "input" && t.type === "hidden") {
                var d = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && t.getAttribute("name") === d) return t
            } else return t;
            if (t = We(t.nextSibling), t === null) break
        }
        return null
    }

    function QT(t, n, s) {
        if (n === "") return null;
        for (; t.nodeType !== 3;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !s || (t = We(t.nextSibling), t === null)) return null;
        return t
    }

    function zc(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
    }

    function FT(t, n) {
        var s = t.ownerDocument;
        if (t.data !== "$?" || s.readyState === "complete") n();
        else {
            var r = function() {
                n(), s.removeEventListener("DOMContentLoaded", r)
            };
            s.addEventListener("DOMContentLoaded", r), t._reactRetry = r
        }
    }

    function We(t) {
        for (; t != null; t = t.nextSibling) {
            var n = t.nodeType;
            if (n === 1 || n === 3) break;
            if (n === 8) {
                if (n = t.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F") break;
                if (n === "/$") return null
            }
        }
        return t
    }
    var Lc = null;

    function _g(t) {
        t = t.previousSibling;
        for (var n = 0; t;) {
            if (t.nodeType === 8) {
                var s = t.data;
                if (s === "$" || s === "$!" || s === "$?") {
                    if (n === 0) return t;
                    n--
                } else s === "/$" && n++
            }
            t = t.previousSibling
        }
        return null
    }

    function Vg(t, n, s) {
        switch (n = Eo(s), t) {
            case "html":
                if (t = n.documentElement, !t) throw Error(o(452));
                return t;
            case "head":
                if (t = n.head, !t) throw Error(o(453));
                return t;
            case "body":
                if (t = n.body, !t) throw Error(o(454));
                return t;
            default:
                throw Error(o(451))
        }
    }

    function Ha(t) {
        for (var n = t.attributes; n.length;) t.removeAttributeNode(n[0]);
        Ul(t)
    }
    var Ye = new Map,
        zg = new Set;

    function Ao(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var Vn = F.d;
    F.d = {
        f: ZT,
        r: WT,
        D: JT,
        C: IT,
        L: $T,
        m: tw,
        X: nw,
        S: ew,
        M: iw
    };

    function ZT() {
        var t = Vn.f(),
            n = go();
        return t || n
    }

    function WT(t) {
        var n = $i(t);
        n !== null && n.tag === 5 && n.type === "form" ? ep(n) : Vn.r(t)
    }
    var _s = typeof document > "u" ? null : document;

    function Lg(t, n, s) {
        var r = _s;
        if (r && typeof n == "string" && n) {
            var u = ke(n);
            u = 'link[rel="' + t + '"][href="' + u + '"]', typeof s == "string" && (u += '[crossorigin="' + s + '"]'), zg.has(u) || (zg.add(u), t = {
                rel: t,
                crossOrigin: s,
                href: n
            }, r.querySelector(u) === null && (n = r.createElement("link"), re(n, "link", t), te(n), r.head.appendChild(n)))
        }
    }

    function JT(t) {
        Vn.D(t), Lg("dns-prefetch", t, null)
    }

    function IT(t, n) {
        Vn.C(t, n), Lg("preconnect", t, n)
    }

    function $T(t, n, s) {
        Vn.L(t, n, s);
        var r = _s;
        if (r && t && n) {
            var u = 'link[rel="preload"][as="' + ke(n) + '"]';
            n === "image" && s && s.imageSrcSet ? (u += '[imagesrcset="' + ke(s.imageSrcSet) + '"]', typeof s.imageSizes == "string" && (u += '[imagesizes="' + ke(s.imageSizes) + '"]')) : u += '[href="' + ke(t) + '"]';
            var d = u;
            switch (n) {
                case "style":
                    d = Vs(t);
                    break;
                case "script":
                    d = zs(t)
            }
            Ye.has(d) || (t = g({
                rel: "preload",
                href: n === "image" && s && s.imageSrcSet ? void 0 : t,
                as: n
            }, s), Ye.set(d, t), r.querySelector(u) !== null || n === "style" && r.querySelector(qa(d)) || n === "script" && r.querySelector(Ga(d)) || (n = r.createElement("link"), re(n, "link", t), te(n), r.head.appendChild(n)))
        }
    }

    function tw(t, n) {
        Vn.m(t, n);
        var s = _s;
        if (s && t) {
            var r = n && typeof n.as == "string" ? n.as : "script",
                u = 'link[rel="modulepreload"][as="' + ke(r) + '"][href="' + ke(t) + '"]',
                d = u;
            switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    d = zs(t)
            }
            if (!Ye.has(d) && (t = g({
                    rel: "modulepreload",
                    href: t
                }, n), Ye.set(d, t), s.querySelector(u) === null)) {
                switch (r) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (s.querySelector(Ga(d))) return
                }
                r = s.createElement("link"), re(r, "link", t), te(r), s.head.appendChild(r)
            }
        }
    }

    function ew(t, n, s) {
        Vn.S(t, n, s);
        var r = _s;
        if (r && t) {
            var u = ts(r).hoistableStyles,
                d = Vs(t);
            n = n || "default";
            var y = u.get(d);
            if (!y) {
                var x = {
                    loading: 0,
                    preload: null
                };
                if (y = r.querySelector(qa(d))) x.loading = 5;
                else {
                    t = g({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": n
                    }, s), (s = Ye.get(d)) && kc(t, s);
                    var R = y = r.createElement("link");
                    te(R), re(R, "link", t), R._p = new Promise(function(L, q) {
                        R.onload = L, R.onerror = q
                    }), R.addEventListener("load", function() {
                        x.loading |= 1
                    }), R.addEventListener("error", function() {
                        x.loading |= 2
                    }), x.loading |= 4, Co(y, n, r)
                }
                y = {
                    type: "stylesheet",
                    instance: y,
                    count: 1,
                    state: x
                }, u.set(d, y)
            }
        }
    }

    function nw(t, n) {
        Vn.X(t, n);
        var s = _s;
        if (s && t) {
            var r = ts(s).hoistableScripts,
                u = zs(t),
                d = r.get(u);
            d || (d = s.querySelector(Ga(u)), d || (t = g({
                src: t,
                async: !0
            }, n), (n = Ye.get(u)) && Pc(t, n), d = s.createElement("script"), te(d), re(d, "link", t), s.head.appendChild(d)), d = {
                type: "script",
                instance: d,
                count: 1,
                state: null
            }, r.set(u, d))
        }
    }

    function iw(t, n) {
        Vn.M(t, n);
        var s = _s;
        if (s && t) {
            var r = ts(s).hoistableScripts,
                u = zs(t),
                d = r.get(u);
            d || (d = s.querySelector(Ga(u)), d || (t = g({
                src: t,
                async: !0,
                type: "module"
            }, n), (n = Ye.get(u)) && Pc(t, n), d = s.createElement("script"), te(d), re(d, "link", t), s.head.appendChild(d)), d = {
                type: "script",
                instance: d,
                count: 1,
                state: null
            }, r.set(u, d))
        }
    }

    function kg(t, n, s, r) {
        var u = (u = at.current) ? Ao(u) : null;
        if (!u) throw Error(o(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof s.precedence == "string" && typeof s.href == "string" ? (n = Vs(s.href), s = ts(u).hoistableStyles, r = s.get(n), r || (r = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, s.set(n, r)), r) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (s.rel === "stylesheet" && typeof s.href == "string" && typeof s.precedence == "string") {
                    t = Vs(s.href);
                    var d = ts(u).hoistableStyles,
                        y = d.get(t);
                    if (y || (u = u.ownerDocument || u, y = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, d.set(t, y), (d = u.querySelector(qa(t))) && !d._p && (y.instance = d, y.state.loading = 5), Ye.has(t) || (s = {
                            rel: "preload",
                            as: "style",
                            href: s.href,
                            crossOrigin: s.crossOrigin,
                            integrity: s.integrity,
                            media: s.media,
                            hrefLang: s.hrefLang,
                            referrerPolicy: s.referrerPolicy
                        }, Ye.set(t, s), d || sw(u, t, s, y.state))), n && r === null) throw Error(o(528, ""));
                    return y
                }
                if (n && r !== null) throw Error(o(529, ""));
                return null;
            case "script":
                return n = s.async, s = s.src, typeof s == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = zs(s), s = ts(u).hoistableScripts, r = s.get(n), r || (r = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, s.set(n, r)), r) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(o(444, t))
        }
    }

    function Vs(t) {
        return 'href="' + ke(t) + '"'
    }

    function qa(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }

    function Pg(t) {
        return g({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }

    function sw(t, n, s, r) {
        t.querySelector('link[rel="preload"][as="style"][' + n + "]") ? r.loading = 1 : (n = t.createElement("link"), r.preload = n, n.addEventListener("load", function() {
            return r.loading |= 1
        }), n.addEventListener("error", function() {
            return r.loading |= 2
        }), re(n, "link", s), te(n), t.head.appendChild(n))
    }

    function zs(t) {
        return '[src="' + ke(t) + '"]'
    }

    function Ga(t) {
        return "script[async]" + t
    }

    function Ug(t, n, s) {
        if (n.count++, n.instance === null) switch (n.type) {
            case "style":
                var r = t.querySelector('style[data-href~="' + ke(s.href) + '"]');
                if (r) return n.instance = r, te(r), r;
                var u = g({}, s, {
                    "data-href": s.href,
                    "data-precedence": s.precedence,
                    href: null,
                    precedence: null
                });
                return r = (t.ownerDocument || t).createElement("style"), te(r), re(r, "style", u), Co(r, s.precedence, t), n.instance = r;
            case "stylesheet":
                u = Vs(s.href);
                var d = t.querySelector(qa(u));
                if (d) return n.state.loading |= 4, n.instance = d, te(d), d;
                r = Pg(s), (u = Ye.get(u)) && kc(r, u), d = (t.ownerDocument || t).createElement("link"), te(d);
                var y = d;
                return y._p = new Promise(function(x, R) {
                    y.onload = x, y.onerror = R
                }), re(d, "link", r), n.state.loading |= 4, Co(d, s.precedence, t), n.instance = d;
            case "script":
                return d = zs(s.src), (u = t.querySelector(Ga(d))) ? (n.instance = u, te(u), u) : (r = s, (u = Ye.get(d)) && (r = g({}, s), Pc(r, u)), t = t.ownerDocument || t, u = t.createElement("script"), te(u), re(u, "link", r), t.head.appendChild(u), n.instance = u);
            case "void":
                return null;
            default:
                throw Error(o(443, n.type))
        } else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (r = n.instance, n.state.loading |= 4, Co(r, s.precedence, t));
        return n.instance
    }

    function Co(t, n, s) {
        for (var r = s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = r.length ? r[r.length - 1] : null, d = u, y = 0; y < r.length; y++) {
            var x = r[y];
            if (x.dataset.precedence === n) d = x;
            else if (d !== u) break
        }
        d ? d.parentNode.insertBefore(t, d.nextSibling) : (n = s.nodeType === 9 ? s.head : s, n.insertBefore(t, n.firstChild))
    }

    function kc(t, n) {
        t.crossOrigin == null && (t.crossOrigin = n.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy), t.title == null && (t.title = n.title)
    }

    function Pc(t, n) {
        t.crossOrigin == null && (t.crossOrigin = n.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy), t.integrity == null && (t.integrity = n.integrity)
    }
    var Ro = null;

    function Bg(t, n, s) {
        if (Ro === null) {
            var r = new Map,
                u = Ro = new Map;
            u.set(s, r)
        } else u = Ro, r = u.get(s), r || (r = new Map, u.set(s, r));
        if (r.has(t)) return r;
        for (r.set(t, null), s = s.getElementsByTagName(t), u = 0; u < s.length; u++) {
            var d = s[u];
            if (!(d[na] || d[le] || t === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
                var y = d.getAttribute(n) || "";
                y = t + y;
                var x = r.get(y);
                x ? x.push(d) : r.set(y, [d])
            }
        }
        return r
    }

    function Hg(t, n, s) {
        t = t.ownerDocument || t, t.head.insertBefore(s, n === "title" ? t.querySelector("head > title") : null)
    }

    function aw(t, n, s) {
        if (s === 1 || n.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
                return !0;
            case "link":
                if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
                return n.rel === "stylesheet" ? (t = n.disabled, typeof n.precedence == "string" && t == null) : !0;
            case "script":
                if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return !0
        }
        return !1
    }

    function qg(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var Ya = null;

    function rw() {}

    function ow(t, n, s) {
        if (Ya === null) throw Error(o(475));
        var r = Ya;
        if (n.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var u = Vs(s.href),
                    d = t.querySelector(qa(u));
                if (d) {
                    t = d._p, t !== null && typeof t == "object" && typeof t.then == "function" && (r.count++, r = Mo.bind(r), t.then(r, r)), n.state.loading |= 4, n.instance = d, te(d);
                    return
                }
                d = t.ownerDocument || t, s = Pg(s), (u = Ye.get(u)) && kc(s, u), d = d.createElement("link"), te(d);
                var y = d;
                y._p = new Promise(function(x, R) {
                    y.onload = x, y.onerror = R
                }), re(d, "link", s), n.instance = d
            }
            r.stylesheets === null && (r.stylesheets = new Map), r.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (r.count++, n = Mo.bind(r), t.addEventListener("load", n), t.addEventListener("error", n))
        }
    }

    function lw() {
        if (Ya === null) throw Error(o(475));
        var t = Ya;
        return t.stylesheets && t.count === 0 && Uc(t, t.stylesheets), 0 < t.count ? function(n) {
            var s = setTimeout(function() {
                if (t.stylesheets && Uc(t, t.stylesheets), t.unsuspend) {
                    var r = t.unsuspend;
                    t.unsuspend = null, r()
                }
            }, 6e4);
            return t.unsuspend = n,
                function() {
                    t.unsuspend = null, clearTimeout(s)
                }
        } : null
    }

    function Mo() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) Uc(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null, t()
            }
        }
    }
    var Do = null;

    function Uc(t, n) {
        t.stylesheets = null, t.unsuspend !== null && (t.count++, Do = new Map, n.forEach(uw, t), Do = null, Mo.call(t))
    }

    function uw(t, n) {
        if (!(n.state.loading & 4)) {
            var s = Do.get(t);
            if (s) var r = s.get(null);
            else {
                s = new Map, Do.set(t, s);
                for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), d = 0; d < u.length; d++) {
                    var y = u[d];
                    (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (s.set(y.dataset.precedence, y), r = y)
                }
                r && s.set(null, r)
            }
            u = n.instance, y = u.getAttribute("data-precedence"), d = s.get(y) || r, d === r && s.set(null, u), s.set(y, u), this.count++, r = Mo.bind(this), u.addEventListener("load", r), u.addEventListener("error", r), d ? d.parentNode.insertBefore(u, d.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), n.state.loading |= 4
        }
    }
    var Xa = {
        $$typeof: j,
        Provider: null,
        Consumer: null,
        _currentValue: X,
        _currentValue2: X,
        _threadCount: 0
    };

    function cw(t, n, s, r, u, d, y, x) {
        this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = zl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.hiddenUpdates = zl(null), this.identifierPrefix = r, this.onUncaughtError = u, this.onCaughtError = d, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.incompleteTransitions = new Map
    }

    function Gg(t, n, s, r, u, d, y, x, R, L, q, K) {
        return t = new cw(t, n, s, y, x, R, L, K), n = 1, d === !0 && (n |= 24), d = Re(3, null, null, n), t.current = d, d.stateNode = t, n = xu(), n.refCount++, t.pooledCache = n, n.refCount++, d.memoizedState = {
            element: r,
            isDehydrated: s,
            cache: n
        }, Eu(d), t
    }

    function Yg(t) {
        return t ? (t = ds, t) : ds
    }

    function Xg(t, n, s, r, u, d) {
        u = Yg(u), r.context === null ? r.context = u : r.pendingContext = u, r = Qn(n), r.payload = {
            element: s
        }, d = d === void 0 ? null : d, d !== null && (r.callback = d), s = Fn(t, r, n), s !== null && (je(s, t, n), Sa(s, t, n))
    }

    function Kg(t, n) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var s = t.retryLane;
            t.retryLane = s !== 0 && s < n ? s : n
        }
    }

    function Bc(t, n) {
        Kg(t, n), (t = t.alternate) && Kg(t, n)
    }

    function Qg(t) {
        if (t.tag === 13) {
            var n = fs(t, 67108864);
            n !== null && je(n, t, 67108864), Bc(t, 67108864)
        }
    }
    var Oo = !0;

    function fw(t, n, s, r) {
        var u = V.T;
        V.T = null;
        var d = F.p;
        try {
            F.p = 2, Hc(t, n, s, r)
        } finally {
            F.p = d, V.T = u
        }
    }

    function dw(t, n, s, r) {
        var u = V.T;
        V.T = null;
        var d = F.p;
        try {
            F.p = 8, Hc(t, n, s, r)
        } finally {
            F.p = d, V.T = u
        }
    }

    function Hc(t, n, s, r) {
        if (Oo) {
            var u = qc(r);
            if (u === null) Mc(t, n, r, No, s), Zg(t, r);
            else if (mw(u, t, n, s, r)) r.stopPropagation();
            else if (Zg(t, r), n & 4 && -1 < hw.indexOf(t)) {
                for (; u !== null;) {
                    var d = $i(u);
                    if (d !== null) switch (d.tag) {
                        case 3:
                            if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                                var y = Ei(d.pendingLanes);
                                if (y !== 0) {
                                    var x = d;
                                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; y;) {
                                        var R = 1 << 31 - Ae(y);
                                        x.entanglements[1] |= R, y &= ~R
                                    }
                                    hn(d), (Mt & 6) === 0 && (mo = ln() + 500, Pa(0))
                                }
                            }
                            break;
                        case 13:
                            x = fs(d, 2), x !== null && je(x, d, 2), go(), Bc(d, 2)
                    }
                    if (d = qc(r), d === null && Mc(t, n, r, No, s), d === u) break;
                    u = d
                }
                u !== null && r.stopPropagation()
            } else Mc(t, n, r, null, s)
        }
    }

    function qc(t) {
        return t = Ql(t), Gc(t)
    }
    var No = null;

    function Gc(t) {
        if (No = null, t = Ii(t), t !== null) {
            var n = c(t);
            if (n === null) t = null;
            else {
                var s = n.tag;
                if (s === 13) {
                    if (t = f(n), t !== null) return t;
                    t = null
                } else if (s === 3) {
                    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
                    t = null
                } else n !== t && (t = null)
            }
        }
        return No = t, null
    }

    function Fg(t) {
        switch (t) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (I1()) {
                    case lh:
                        return 2;
                    case uh:
                        return 8;
                    case Tr:
                    case $1:
                        return 32;
                    case ch:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Yc = !1,
        oi = null,
        li = null,
        ui = null,
        Ka = new Map,
        Qa = new Map,
        ci = [],
        hw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function Zg(t, n) {
        switch (t) {
            case "focusin":
            case "focusout":
                oi = null;
                break;
            case "dragenter":
            case "dragleave":
                li = null;
                break;
            case "mouseover":
            case "mouseout":
                ui = null;
                break;
            case "pointerover":
            case "pointerout":
                Ka.delete(n.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Qa.delete(n.pointerId)
        }
    }

    function Fa(t, n, s, r, u, d) {
        return t === null || t.nativeEvent !== d ? (t = {
            blockedOn: n,
            domEventName: s,
            eventSystemFlags: r,
            nativeEvent: d,
            targetContainers: [u]
        }, n !== null && (n = $i(n), n !== null && Qg(n)), t) : (t.eventSystemFlags |= r, n = t.targetContainers, u !== null && n.indexOf(u) === -1 && n.push(u), t)
    }

    function mw(t, n, s, r, u) {
        switch (n) {
            case "focusin":
                return oi = Fa(oi, t, n, s, r, u), !0;
            case "dragenter":
                return li = Fa(li, t, n, s, r, u), !0;
            case "mouseover":
                return ui = Fa(ui, t, n, s, r, u), !0;
            case "pointerover":
                var d = u.pointerId;
                return Ka.set(d, Fa(Ka.get(d) || null, t, n, s, r, u)), !0;
            case "gotpointercapture":
                return d = u.pointerId, Qa.set(d, Fa(Qa.get(d) || null, t, n, s, r, u)), !0
        }
        return !1
    }

    function Wg(t) {
        var n = Ii(t.target);
        if (n !== null) {
            var s = c(n);
            if (s !== null) {
                if (n = s.tag, n === 13) {
                    if (n = f(s), n !== null) {
                        t.blockedOn = n, oS(t.priority, function() {
                            if (s.tag === 13) {
                                var r = Ne();
                                r = Ll(r);
                                var u = fs(s, r);
                                u !== null && je(u, s, r), Bc(s, r)
                            }
                        });
                        return
                    }
                } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function jo(t) {
        if (t.blockedOn !== null) return !1;
        for (var n = t.targetContainers; 0 < n.length;) {
            var s = qc(t.nativeEvent);
            if (s === null) {
                s = t.nativeEvent;
                var r = new s.constructor(s.type, s);
                Kl = r, s.target.dispatchEvent(r), Kl = null
            } else return n = $i(s), n !== null && Qg(n), t.blockedOn = s, !1;
            n.shift()
        }
        return !0
    }

    function Jg(t, n, s) {
        jo(t) && s.delete(n)
    }

    function pw() {
        Yc = !1, oi !== null && jo(oi) && (oi = null), li !== null && jo(li) && (li = null), ui !== null && jo(ui) && (ui = null), Ka.forEach(Jg), Qa.forEach(Jg)
    }

    function _o(t, n) {
        t.blockedOn === n && (t.blockedOn = null, Yc || (Yc = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, pw)))
    }
    var Vo = null;

    function Ig(t) {
        Vo !== t && (Vo = t, e.unstable_scheduleCallback(e.unstable_NormalPriority, function() {
            Vo === t && (Vo = null);
            for (var n = 0; n < t.length; n += 3) {
                var s = t[n],
                    r = t[n + 1],
                    u = t[n + 2];
                if (typeof r != "function") {
                    if (Gc(r || s) === null) continue;
                    break
                }
                var d = $i(s);
                d !== null && (t.splice(n, 3), n -= 3, Gu(d, {
                    pending: !0,
                    data: u,
                    method: s.method,
                    action: r
                }, r, u))
            }
        }))
    }

    function Za(t) {
        function n(R) {
            return _o(R, t)
        }
        oi !== null && _o(oi, t), li !== null && _o(li, t), ui !== null && _o(ui, t), Ka.forEach(n), Qa.forEach(n);
        for (var s = 0; s < ci.length; s++) {
            var r = ci[s];
            r.blockedOn === t && (r.blockedOn = null)
        }
        for (; 0 < ci.length && (s = ci[0], s.blockedOn === null);) Wg(s), s.blockedOn === null && ci.shift();
        if (s = (t.ownerDocument || t).$$reactFormReplay, s != null)
            for (r = 0; r < s.length; r += 3) {
                var u = s[r],
                    d = s[r + 1],
                    y = u[ye] || null;
                if (typeof d == "function") y || Ig(s);
                else if (y) {
                    var x = null;
                    if (d && d.hasAttribute("formAction")) {
                        if (u = d, y = d[ye] || null) x = y.formAction;
                        else if (Gc(u) !== null) continue
                    } else x = y.action;
                    typeof x == "function" ? s[r + 1] = x : (s.splice(r, 3), r -= 3), Ig(s)
                }
            }
    }

    function Xc(t) {
        this._internalRoot = t
    }
    zo.prototype.render = Xc.prototype.render = function(t) {
        var n = this._internalRoot;
        if (n === null) throw Error(o(409));
        var s = n.current,
            r = Ne();
        Xg(s, r, t, n, null, null)
    }, zo.prototype.unmount = Xc.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var n = t.containerInfo;
            Xg(t.current, 2, null, t, null, null), go(), n[Ji] = null
        }
    };

    function zo(t) {
        this._internalRoot = t
    }
    zo.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var n = ph();
            t = {
                blockedOn: null,
                target: t,
                priority: n
            };
            for (var s = 0; s < ci.length && n !== 0 && n < ci[s].priority; s++);
            ci.splice(s, 0, t), s === 0 && Wg(t)
        }
    };
    var $g = i.version;
    if ($g !== "19.1.0") throw Error(o(527, $g, "19.1.0"));
    F.findDOMNode = function(t) {
        var n = t._reactInternals;
        if (n === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
        return t = p(n), t = t !== null ? m(t) : null, t = t === null ? null : t.stateNode, t
    };
    var gw = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: V,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Lo.isDisabled && Lo.supportsFiber) try {
            $s = Lo.inject(gw), Ee = Lo
        } catch {}
    }
    return Ja.createRoot = function(t, n) {
        if (!l(t)) throw Error(o(299));
        var s = !1,
            r = "",
            u = pp,
            d = gp,
            y = yp,
            x = null;
        return n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (x = n.unstable_transitionCallbacks)), n = Gg(t, 1, !1, null, null, s, r, u, d, y, x, null), t[Ji] = n.current, Rc(t), new Xc(n)
    }, Ja.hydrateRoot = function(t, n, s) {
        if (!l(t)) throw Error(o(299));
        var r = !1,
            u = "",
            d = pp,
            y = gp,
            x = yp,
            R = null,
            L = null;
        return s != null && (s.unstable_strictMode === !0 && (r = !0), s.identifierPrefix !== void 0 && (u = s.identifierPrefix), s.onUncaughtError !== void 0 && (d = s.onUncaughtError), s.onCaughtError !== void 0 && (y = s.onCaughtError), s.onRecoverableError !== void 0 && (x = s.onRecoverableError), s.unstable_transitionCallbacks !== void 0 && (R = s.unstable_transitionCallbacks), s.formState !== void 0 && (L = s.formState)), n = Gg(t, 1, !0, n, s ?? null, r, u, d, y, x, R, L), n.context = Yg(null), s = n.current, r = Ne(), r = Ll(r), u = Qn(r), u.callback = null, Fn(s, u, r), s = r, n.current.lanes = s, ea(n, s), hn(n), t[Ji] = n.current, Rc(t), new zo(n)
    }, Ja.version = "19.1.0", Ja
}
var uy;

function Cw() {
    if (uy) return Qc.exports;
    uy = 1;

    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (i) {
            console.error(i)
        }
    }
    return e(), Qc.exports = Aw(), Qc.exports
}
var Rw = Cw();

function Mw(e, i) {
    if (e instanceof RegExp) return {
        keys: !1,
        pattern: e
    };
    var a, o, l, c, f = [],
        h = "",
        p = e.split("/");
    for (p[0] || p.shift(); l = p.shift();) a = l[0], a === "*" ? (f.push(a), h += l[1] === "?" ? "(?:/(.*))?" : "/(.*)") : a === ":" ? (o = l.indexOf("?", 1), c = l.indexOf(".", 1), f.push(l.substring(1, ~o ? o : ~c ? c : l.length)), h += ~o && !~c ? "(?:/([^/]+?))?" : "/([^/]+?)", ~c && (h += (~o ? "?" : "") + "\\" + l.substring(c))) : h += "/" + l;
    return {
        keys: f,
        pattern: new RegExp("^" + h + (i ? "(?=$|/)" : "/?$"), "i")
    }
}
var E = yl();
const mi = v0(E),
    x0 = vw({
        __proto__: null,
        default: mi
    }, [E]);
var Ic = {
        exports: {}
    },
    $c = {};
var cy;

function Dw() {
    if (cy) return $c;
    cy = 1;
    var e = yl();

    function i(v, b) {
        return v === b && (v !== 0 || 1 / v === 1 / b) || v !== v && b !== b
    }
    var a = typeof Object.is == "function" ? Object.is : i,
        o = e.useState,
        l = e.useEffect,
        c = e.useLayoutEffect,
        f = e.useDebugValue;

    function h(v, b) {
        var T = b(),
            A = o({
                inst: {
                    value: T,
                    getSnapshot: b
                }
            }),
            C = A[0].inst,
            M = A[1];
        return c(function() {
            C.value = T, C.getSnapshot = b, p(C) && M({
                inst: C
            })
        }, [v, T, b]), l(function() {
            return p(C) && M({
                inst: C
            }), v(function() {
                p(C) && M({
                    inst: C
                })
            })
        }, [v]), f(T), T
    }

    function p(v) {
        var b = v.getSnapshot;
        v = v.value;
        try {
            var T = b();
            return !a(v, T)
        } catch {
            return !0
        }
    }

    function m(v, b) {
        return b()
    }
    var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : h;
    return $c.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g, $c
}
var fy;

function Ow() {
    return fy || (fy = 1, Ic.exports = Dw()), Ic.exports
}
var Nw = Ow();
const jw = x0.useInsertionEffect,
    _w = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    Vw = _w ? E.useLayoutEffect : E.useEffect,
    zw = jw || Vw,
    S0 = e => {
        const i = E.useRef([e, (...a) => i[0](...a)]).current;
        return zw(() => {
            i[0] = e
        }), i[1]
    },
    Lw = "popstate",
    cd = "pushState",
    fd = "replaceState",
    kw = "hashchange",
    dy = [Lw, cd, fd, kw],
    Pw = e => {
        for (const i of dy) addEventListener(i, e);
        return () => {
            for (const i of dy) removeEventListener(i, e)
        }
    },
    T0 = (e, i) => Nw.useSyncExternalStore(Pw, e, i),
    hy = () => location.search,
    Uw = ({
        ssrSearch: e
    } = {}) => T0(hy, e != null ? () => e : hy),
    my = () => location.pathname,
    Bw = ({
        ssrPath: e
    } = {}) => T0(my, e != null ? () => e : my),
    Hw = (e, {
        replace: i = !1,
        state: a = null
    } = {}) => history[i ? fd : cd](a, "", e),
    qw = (e = {}) => [Bw(e), Hw],
    py = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[py] > "u") {
    for (const e of [cd, fd]) {
        const i = history[e];
        history[e] = function() {
            const a = i.apply(this, arguments),
                o = new Event(e);
            return o.arguments = arguments, dispatchEvent(o), a
        }
    }
    Object.defineProperty(window, py, {
        value: !0
    })
}
const Gw = (e, i) => i.toLowerCase().indexOf(e.toLowerCase()) ? "~" + i : i.slice(e.length) || "/",
    w0 = (e = "") => e === "/" ? "" : e,
    Yw = (e, i) => e[0] === "~" ? e.slice(1) : w0(i) + e,
    Xw = (e = "", i) => Gw(gy(w0(e)), gy(i)),
    gy = e => {
        try {
            return decodeURI(e)
        } catch {
            return e
        }
    },
    E0 = {
        hook: qw,
        searchHook: Uw,
        parser: Mw,
        base: "",
        ssrPath: void 0,
        ssrSearch: void 0,
        ssrContext: void 0,
        hrefs: e => e,
        aroundNav: (e, i, a) => e(i, a)
    },
    A0 = E.createContext(E0),
    vl = () => E.useContext(A0),
    C0 = {},
    R0 = E.createContext(C0),
    Kw = () => E.useContext(R0),
    dd = e => {
        const [i, a] = e.hook(e);
        return [Xw(e.base, i), S0((o, l) => e.aroundNav(a, Yw(o, e.base), l))]
    },
    M0 = (e, i, a, o) => {
        const {
            pattern: l,
            keys: c
        } = i instanceof RegExp ? {
            keys: !1,
            pattern: i
        } : e(i || "*", o), f = l.exec(a) || [], [h, ...p] = f;
        return h !== void 0 ? [!0, (() => {
            const m = c !== !1 ? Object.fromEntries(c.map((v, b) => [v, p[b]])) : f.groups;
            let g = {
                ...p
            };
            return m && Object.assign(g, m), g
        })(), ...o ? [h] : []] : [!1, null]
    },
    D0 = ({
        children: e,
        ...i
    }) => {
        const a = vl(),
            o = i.hook ? E0 : a;
        let l = o;
        const [c, f = i.ssrSearch ?? ""] = i.ssrPath?.split("?") ?? [];
        c && (i.ssrSearch = f, i.ssrPath = c), i.hrefs = i.hrefs ?? i.hook?.hrefs, i.searchHook = i.searchHook ?? i.hook?.searchHook;
        let h = E.useRef({}),
            p = h.current,
            m = p;
        for (let g in o) {
            const v = g === "base" ? o[g] + (i[g] ?? "") : i[g] ?? o[g];
            p === m && v !== m[g] && (h.current = m = {
                ...m
            }), m[g] = v, (v !== o[g] || v !== l[g]) && (l = m)
        }
        return E.createElement(A0.Provider, {
            value: l,
            children: e
        })
    },
    yy = ({
        children: e,
        component: i
    }, a) => i ? E.createElement(i, {
        params: a
    }) : typeof e == "function" ? e(a) : e,
    Qw = e => {
        let i = E.useRef(C0);
        const a = i.current;
        return i.current = Object.keys(e).length !== Object.keys(a).length || Object.entries(e).some(([o, l]) => l !== a[o]) ? e : a
    },
    vy = ({
        path: e,
        nest: i,
        match: a,
        ...o
    }) => {
        const l = vl(),
            [c] = dd(l),
            [f, h, p] = a ?? M0(l.parser, e, c, i),
            m = Qw({
                ...Kw(),
                ...h
            });
        if (!f) return null;
        const g = p ? E.createElement(D0, {
            base: p
        }, yy(o, m)) : yy(o, m);
        return E.createElement(R0.Provider, {
            value: m,
            children: g
        })
    };
E.forwardRef((e, i) => {
    const a = vl(),
        [o, l] = dd(a),
        {
            to: c = "",
            href: f = c,
            onClick: h,
            asChild: p,
            children: m,
            className: g,
            replace: v,
            state: b,
            transition: T,
            ...A
        } = e,
        C = S0(O => {
            O.ctrlKey || O.metaKey || O.altKey || O.shiftKey || O.button !== 0 || (h?.(O), O.defaultPrevented || (O.preventDefault(), l(f, e)))
        }),
        M = a.hrefs(f[0] === "~" ? f.slice(1) : a.base + f, a);
    return p && E.isValidElement(m) ? E.cloneElement(m, {
        onClick: C,
        href: M
    }) : E.createElement("a", {
        ...A,
        onClick: C,
        href: M,
        className: g?.call ? g(o === f) : g,
        children: m,
        ref: i
    })
});
const O0 = e => Array.isArray(e) ? e.flatMap(i => O0(i && i.type === E.Fragment ? i.props.children : i)) : [e],
    Fw = ({
        children: e,
        location: i
    }) => {
        const a = vl(),
            [o] = dd(a);
        for (const l of O0(e)) {
            let c = 0;
            if (E.isValidElement(l) && (c = M0(a.parser, l.props.path, i || o, l.props.nest))[0]) return E.cloneElement(l, {
                match: c
            })
        }
        return null
    };
var bl = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Zw = {
        setTimeout: (e, i) => setTimeout(e, i),
        clearTimeout: e => clearTimeout(e),
        setInterval: (e, i) => setInterval(e, i),
        clearInterval: e => clearInterval(e)
    },
    Ww = class {
        #t = Zw;
        #n = !1;
        setTimeoutProvider(e) {
            this.#t = e
        }
        setTimeout(e, i) {
            return this.#t.setTimeout(e, i)
        }
        clearTimeout(e) {
            this.#t.clearTimeout(e)
        }
        setInterval(e, i) {
            return this.#t.setInterval(e, i)
        }
        clearInterval(e) {
            this.#t.clearInterval(e)
        }
    },
    Af = new Ww;

function Jw(e) {
    setTimeout(e, 0)
}
var xl = typeof window > "u" || "Deno" in globalThis;

function $e() {}

function Iw(e, i) {
    return typeof e == "function" ? e(i) : e
}

function $w(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function tE(e, i) {
    return Math.max(e + (i || 0) - Date.now(), 0)
}

function Cf(e, i) {
    return typeof e == "function" ? e(i) : e
}

function eE(e, i) {
    return typeof e == "function" ? e(i) : e
}

function by(e, i) {
    const {
        type: a = "all",
        exact: o,
        fetchStatus: l,
        predicate: c,
        queryKey: f,
        stale: h
    } = e;
    if (f) {
        if (o) {
            if (i.queryHash !== hd(f, i.options)) return !1
        } else if (!lr(i.queryKey, f)) return !1
    }
    if (a !== "all") {
        const p = i.isActive();
        if (a === "active" && !p || a === "inactive" && p) return !1
    }
    return !(typeof h == "boolean" && i.isStale() !== h || l && l !== i.state.fetchStatus || c && !c(i))
}

function xy(e, i) {
    const {
        exact: a,
        status: o,
        predicate: l,
        mutationKey: c
    } = e;
    if (c) {
        if (!i.options.mutationKey) return !1;
        if (a) {
            if (or(i.options.mutationKey) !== or(c)) return !1
        } else if (!lr(i.options.mutationKey, c)) return !1
    }
    return !(o && i.state.status !== o || l && !l(i))
}

function hd(e, i) {
    return (i?.queryKeyHashFn || or)(e)
}

function or(e) {
    return JSON.stringify(e, (i, a) => Rf(a) ? Object.keys(a).sort().reduce((o, l) => (o[l] = a[l], o), {}) : a)
}

function lr(e, i) {
    return e === i ? !0 : typeof e != typeof i ? !1 : e && i && typeof e == "object" && typeof i == "object" ? Object.keys(i).every(a => lr(e[a], i[a])) : !1
}
var nE = Object.prototype.hasOwnProperty;

function N0(e, i, a = 0) {
    if (e === i) return e;
    if (a > 500) return i;
    const o = Sy(e) && Sy(i);
    if (!o && !(Rf(e) && Rf(i))) return i;
    const c = (o ? e : Object.keys(e)).length,
        f = o ? i : Object.keys(i),
        h = f.length,
        p = o ? new Array(h) : {};
    let m = 0;
    for (let g = 0; g < h; g++) {
        const v = o ? g : f[g],
            b = e[v],
            T = i[v];
        if (b === T) {
            p[v] = b, (o ? g < c : nE.call(e, v)) && m++;
            continue
        }
        if (b === null || T === null || typeof b != "object" || typeof T != "object") {
            p[v] = T;
            continue
        }
        const A = N0(b, T, a + 1);
        p[v] = A, A === b && m++
    }
    return c === h && m === c ? e : p
}

function Sy(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Rf(e) {
    if (!Ty(e)) return !1;
    const i = e.constructor;
    if (i === void 0) return !0;
    const a = i.prototype;
    return !(!Ty(a) || !a.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Ty(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function iE(e) {
    return new Promise(i => {
        Af.setTimeout(i, e)
    })
}

function sE(e, i, a) {
    return typeof a.structuralSharing == "function" ? a.structuralSharing(e, i) : a.structuralSharing !== !1 ? N0(e, i) : i
}

function aE(e, i, a = 0) {
    const o = [...e, i];
    return a && o.length > a ? o.slice(1) : o
}

function rE(e, i, a = 0) {
    const o = [i, ...e];
    return a && o.length > a ? o.slice(0, -1) : o
}
var md = Symbol();

function j0(e, i) {
    return !e.queryFn && i?.initialPromise ? () => i.initialPromise : !e.queryFn || e.queryFn === md ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}

function oE(e, i, a) {
    let o = !1,
        l;
    return Object.defineProperty(e, "signal", {
        enumerable: !0,
        get: () => (l ??= i(), o || (o = !0, l.aborted ? a() : l.addEventListener("abort", a, {
            once: !0
        })), l)
    }), e
}
var lE = class extends bl {
        #t;
        #n;
        #e;
        constructor() {
            super(), this.#e = e => {
                if (!xl && window.addEventListener) {
                    const i = () => e();
                    return window.addEventListener("visibilitychange", i, !1), () => {
                        window.removeEventListener("visibilitychange", i)
                    }
                }
            }
        }
        onSubscribe() {
            this.#n || this.setEventListener(this.#e)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#n?.(), this.#n = void 0)
        }
        setEventListener(e) {
            this.#e = e, this.#n?.(), this.#n = e(i => {
                typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
            })
        }
        setFocused(e) {
            this.#t !== e && (this.#t = e, this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(i => {
                i(e)
            })
        }
        isFocused() {
            return typeof this.#t == "boolean" ? this.#t : globalThis.document?.visibilityState !== "hidden"
        }
    },
    _0 = new lE;

function uE() {
    let e, i;
    const a = new Promise((l, c) => {
        e = l, i = c
    });
    a.status = "pending", a.catch(() => {});

    function o(l) {
        Object.assign(a, l), delete a.resolve, delete a.reject
    }
    return a.resolve = l => {
        o({
            status: "fulfilled",
            value: l
        }), e(l)
    }, a.reject = l => {
        o({
            status: "rejected",
            reason: l
        }), i(l)
    }, a
}
var cE = Jw;

function fE() {
    let e = [],
        i = 0,
        a = h => {
            h()
        },
        o = h => {
            h()
        },
        l = cE;
    const c = h => {
            i ? e.push(h) : l(() => {
                a(h)
            })
        },
        f = () => {
            const h = e;
            e = [], h.length && l(() => {
                o(() => {
                    h.forEach(p => {
                        a(p)
                    })
                })
            })
        };
    return {
        batch: h => {
            let p;
            i++;
            try {
                p = h()
            } finally {
                i--, i || f()
            }
            return p
        },
        batchCalls: h => (...p) => {
            c(() => {
                h(...p)
            })
        },
        schedule: c,
        setNotifyFunction: h => {
            a = h
        },
        setBatchNotifyFunction: h => {
            o = h
        },
        setScheduler: h => {
            l = h
        }
    }
}
var me = fE(),
    dE = class extends bl {
        #t = !0;
        #n;
        #e;
        constructor() {
            super(), this.#e = e => {
                if (!xl && window.addEventListener) {
                    const i = () => e(!0),
                        a = () => e(!1);
                    return window.addEventListener("online", i, !1), window.addEventListener("offline", a, !1), () => {
                        window.removeEventListener("online", i), window.removeEventListener("offline", a)
                    }
                }
            }
        }
        onSubscribe() {
            this.#n || this.setEventListener(this.#e)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#n?.(), this.#n = void 0)
        }
        setEventListener(e) {
            this.#e = e, this.#n?.(), this.#n = e(this.setOnline.bind(this))
        }
        setOnline(e) {
            this.#t !== e && (this.#t = e, this.listeners.forEach(a => {
                a(e)
            }))
        }
        isOnline() {
            return this.#t
        }
    },
    il = new dE;

function hE(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function V0(e) {
    return (e ?? "online") === "online" ? il.isOnline() : !0
}
var Mf = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent
    }
};

function z0(e) {
    let i = !1,
        a = 0,
        o;
    const l = uE(),
        c = () => l.status !== "pending",
        f = C => {
            if (!c()) {
                const M = new Mf(C);
                b(M), e.onCancel?.(M)
            }
        },
        h = () => {
            i = !0
        },
        p = () => {
            i = !1
        },
        m = () => _0.isFocused() && (e.networkMode === "always" || il.isOnline()) && e.canRun(),
        g = () => V0(e.networkMode) && e.canRun(),
        v = C => {
            c() || (o?.(), l.resolve(C))
        },
        b = C => {
            c() || (o?.(), l.reject(C))
        },
        T = () => new Promise(C => {
            o = M => {
                (c() || m()) && C(M)
            }, e.onPause?.()
        }).then(() => {
            o = void 0, c() || e.onContinue?.()
        }),
        A = () => {
            if (c()) return;
            let C;
            const M = a === 0 ? e.initialPromise : void 0;
            try {
                C = M ?? e.fn()
            } catch (O) {
                C = Promise.reject(O)
            }
            Promise.resolve(C).then(v).catch(O => {
                if (c()) return;
                const _ = e.retry ?? (xl ? 0 : 3),
                    j = e.retryDelay ?? hE,
                    k = typeof j == "function" ? j(a, O) : j,
                    P = _ === !0 || typeof _ == "number" && a < _ || typeof _ == "function" && _(a, O);
                if (i || !P) {
                    b(O);
                    return
                }
                a++, e.onFail?.(a, O), iE(k).then(() => m() ? void 0 : T()).then(() => {
                    i ? b(O) : A()
                })
            })
        };
    return {
        promise: l,
        status: () => l.status,
        cancel: f,
        continue: () => (o?.(), l),
        cancelRetry: h,
        continueRetry: p,
        canStart: g,
        start: () => (g() ? A() : T().then(A), l)
    }
}
var L0 = class {
        #t;
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), $w(this.gcTime) && (this.#t = Af.setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (xl ? 1 / 0 : 300 * 1e3))
        }
        clearGcTimeout() {
            this.#t && (Af.clearTimeout(this.#t), this.#t = void 0)
        }
    },
    mE = class extends L0 {
        #t;
        #n;
        #e;
        #s;
        #i;
        #r;
        #o;
        constructor(e) {
            super(), this.#o = !1, this.#r = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#s = e.client, this.#e = this.#s.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#t = Ey(this.options), this.state = e.state ?? this.#t, this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            return this.#i?.promise
        }
        setOptions(e) {
            if (this.options = {
                    ...this.#r,
                    ...e
                }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
                const i = Ey(this.options);
                i.data !== void 0 && (this.setState(wy(i.data, i.dataUpdatedAt)), this.#t = i)
            }
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && this.#e.remove(this)
        }
        setData(e, i) {
            const a = sE(this.state.data, e, this.options);
            return this.#a({
                data: a,
                type: "success",
                dataUpdatedAt: i?.updatedAt,
                manual: i?.manual
            }), a
        }
        setState(e, i) {
            this.#a({
                type: "setState",
                state: e,
                setStateOptions: i
            })
        }
        cancel(e) {
            const i = this.#i?.promise;
            return this.#i?.cancel(e), i ? i.then($e).catch($e) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(this.#t)
        }
        isActive() {
            return this.observers.some(e => eE(e.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === md || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(e => Cf(e.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(e = 0) {
            return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !tE(this.state.dataUpdatedAt, e)
        }
        onFocus() {
            this.observers.find(i => i.shouldFetchOnWindowFocus())?.refetch({
                cancelRefetch: !1
            }), this.#i?.continue()
        }
        onOnline() {
            this.observers.find(i => i.shouldFetchOnReconnect())?.refetch({
                cancelRefetch: !1
            }), this.#i?.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#e.notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(i => i !== e), this.observers.length || (this.#i && (this.#o ? this.#i.cancel({
                revert: !0
            }) : this.#i.cancelRetry()), this.scheduleGc()), this.#e.notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || this.#a({
                type: "invalidate"
            })
        }
        async fetch(e, i) {
            if (this.state.fetchStatus !== "idle" && this.#i?.status() !== "rejected") {
                if (this.state.data !== void 0 && i?.cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.#i) return this.#i.continueRetry(), this.#i.promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                const h = this.observers.find(p => p.options.queryFn);
                h && this.setOptions(h.options)
            }
            const a = new AbortController,
                o = h => {
                    Object.defineProperty(h, "signal", {
                        enumerable: !0,
                        get: () => (this.#o = !0, a.signal)
                    })
                },
                l = () => {
                    const h = j0(this.options, i),
                        m = (() => {
                            const g = {
                                client: this.#s,
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return o(g), g
                        })();
                    return this.#o = !1, this.options.persister ? this.options.persister(h, m, this) : h(m)
                },
                f = (() => {
                    const h = {
                        fetchOptions: i,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: this.#s,
                        state: this.state,
                        fetchFn: l
                    };
                    return o(h), h
                })();
            this.options.behavior?.onFetch(f, this), this.#n = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== f.fetchOptions?.meta) && this.#a({
                type: "fetch",
                meta: f.fetchOptions?.meta
            }), this.#i = z0({
                initialPromise: i?.initialPromise,
                fn: f.fetchFn,
                onCancel: h => {
                    h instanceof Mf && h.revert && this.setState({
                        ...this.#n,
                        fetchStatus: "idle"
                    }), a.abort()
                },
                onFail: (h, p) => {
                    this.#a({
                        type: "failed",
                        failureCount: h,
                        error: p
                    })
                },
                onPause: () => {
                    this.#a({
                        type: "pause"
                    })
                },
                onContinue: () => {
                    this.#a({
                        type: "continue"
                    })
                },
                retry: f.options.retry,
                retryDelay: f.options.retryDelay,
                networkMode: f.options.networkMode,
                canRun: () => !0
            });
            try {
                const h = await this.#i.start();
                if (h === void 0) throw new Error(`${this.queryHash} data is undefined`);
                return this.setData(h), this.#e.config.onSuccess?.(h, this), this.#e.config.onSettled?.(h, this.state.error, this), h
            } catch (h) {
                if (h instanceof Mf) {
                    if (h.silent) return this.#i.promise;
                    if (h.revert) {
                        if (this.state.data === void 0) throw h;
                        return this.state.data
                    }
                }
                throw this.#a({
                    type: "error",
                    error: h
                }), this.#e.config.onError?.(h, this), this.#e.config.onSettled?.(this.state.data, h, this), h
            } finally {
                this.scheduleGc()
            }
        }
        #a(e) {
            const i = a => {
                switch (e.type) {
                    case "failed":
                        return {
                            ...a, fetchFailureCount: e.failureCount, fetchFailureReason: e.error
                        };
                    case "pause":
                        return {
                            ...a, fetchStatus: "paused"
                        };
                    case "continue":
                        return {
                            ...a, fetchStatus: "fetching"
                        };
                    case "fetch":
                        return {
                            ...a, ...pE(a.data, this.options), fetchMeta: e.meta ?? null
                        };
                    case "success":
                        const o = {
                            ...a,
                            ...wy(e.data, e.dataUpdatedAt),
                            dataUpdateCount: a.dataUpdateCount + 1,
                            ...!e.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                        return this.#n = e.manual ? o : void 0, o;
                    case "error":
                        const l = e.error;
                        return {
                            ...a, error: l, errorUpdateCount: a.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: a.fetchFailureCount + 1, fetchFailureReason: l, fetchStatus: "idle", status: "error", isInvalidated: !0
                        };
                    case "invalidate":
                        return {
                            ...a, isInvalidated: !0
                        };
                    case "setState":
                        return {
                            ...a, ...e.state
                        }
                }
            };
            this.state = i(this.state), me.batch(() => {
                this.observers.forEach(a => {
                    a.onQueryUpdate()
                }), this.#e.notify({
                    query: this,
                    type: "updated",
                    action: e
                })
            })
        }
    };

function pE(e, i) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: V0(i.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function wy(e, i) {
    return {
        data: e,
        dataUpdatedAt: i ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}

function Ey(e) {
    const i = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        a = i !== void 0,
        o = a ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: i,
        dataUpdateCount: 0,
        dataUpdatedAt: a ? o ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: a ? "success" : "pending",
        fetchStatus: "idle"
    }
}

function Ay(e) {
    return {
        onFetch: (i, a) => {
            const o = i.options,
                l = i.fetchOptions?.meta?.fetchMore?.direction,
                c = i.state.data?.pages || [],
                f = i.state.data?.pageParams || [];
            let h = {
                    pages: [],
                    pageParams: []
                },
                p = 0;
            const m = async () => {
                let g = !1;
                const v = A => {
                        oE(A, () => i.signal, () => g = !0)
                    },
                    b = j0(i.options, i.fetchOptions),
                    T = async (A, C, M) => {
                        if (g) return Promise.reject();
                        if (C == null && A.pages.length) return Promise.resolve(A);
                        const _ = (() => {
                                const Q = {
                                    client: i.client,
                                    queryKey: i.queryKey,
                                    pageParam: C,
                                    direction: M ? "backward" : "forward",
                                    meta: i.options.meta
                                };
                                return v(Q), Q
                            })(),
                            j = await b(_),
                            {
                                maxPages: k
                            } = i.options,
                            P = M ? rE : aE;
                        return {
                            pages: P(A.pages, j, k),
                            pageParams: P(A.pageParams, C, k)
                        }
                    };
                if (l && c.length) {
                    const A = l === "backward",
                        C = A ? gE : Cy,
                        M = {
                            pages: c,
                            pageParams: f
                        },
                        O = C(o, M);
                    h = await T(M, O, A)
                } else {
                    const A = e ?? c.length;
                    do {
                        const C = p === 0 ? f[0] ?? o.initialPageParam : Cy(o, h);
                        if (p > 0 && C == null) break;
                        h = await T(h, C), p++
                    } while (p < A)
                }
                return h
            };
            i.options.persister ? i.fetchFn = () => i.options.persister?.(m, {
                client: i.client,
                queryKey: i.queryKey,
                meta: i.options.meta,
                signal: i.signal
            }, a) : i.fetchFn = m
        }
    }
}

function Cy(e, {
    pages: i,
    pageParams: a
}) {
    const o = i.length - 1;
    return i.length > 0 ? e.getNextPageParam(i[o], i, a[o], a) : void 0
}

function gE(e, {
    pages: i,
    pageParams: a
}) {
    return i.length > 0 ? e.getPreviousPageParam?.(i[0], i, a[0], a) : void 0
}
var yE = class extends L0 {
    #t;
    #n;
    #e;
    #s;
    constructor(e) {
        super(), this.#t = e.client, this.mutationId = e.mutationId, this.#e = e.mutationCache, this.#n = [], this.state = e.state || vE(), this.setOptions(e.options), this.scheduleGc()
    }
    setOptions(e) {
        this.options = e, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        this.#n.includes(e) || (this.#n.push(e), this.clearGcTimeout(), this.#e.notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.#n = this.#n.filter(i => i !== e), this.scheduleGc(), this.#e.notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        this.#n.length || (this.state.status === "pending" ? this.scheduleGc() : this.#e.remove(this))
    }
    continue () {
        return this.#s?.continue() ?? this.execute(this.state.variables)
    }
    async execute(e) {
        const i = () => {
                this.#i({
                    type: "continue"
                })
            },
            a = {
                client: this.#t,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
        this.#s = z0({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, a) : Promise.reject(new Error("No mutationFn found")),
            onFail: (c, f) => {
                this.#i({
                    type: "failed",
                    failureCount: c,
                    error: f
                })
            },
            onPause: () => {
                this.#i({
                    type: "pause"
                })
            },
            onContinue: i,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#e.canRun(this)
        });
        const o = this.state.status === "pending",
            l = !this.#s.canStart();
        try {
            if (o) i();
            else {
                this.#i({
                    type: "pending",
                    variables: e,
                    isPaused: l
                }), this.#e.config.onMutate && await this.#e.config.onMutate(e, this, a);
                const f = await this.options.onMutate?.(e, a);
                f !== this.state.context && this.#i({
                    type: "pending",
                    context: f,
                    variables: e,
                    isPaused: l
                })
            }
            const c = await this.#s.start();
            return await this.#e.config.onSuccess?.(c, e, this.state.context, this, a), await this.options.onSuccess?.(c, e, this.state.context, a), await this.#e.config.onSettled?.(c, null, this.state.variables, this.state.context, this, a), await this.options.onSettled?.(c, null, e, this.state.context, a), this.#i({
                type: "success",
                data: c
            }), c
        } catch (c) {
            try {
                await this.#e.config.onError?.(c, e, this.state.context, this, a)
            } catch (f) {
                Promise.reject(f)
            }
            try {
                await this.options.onError?.(c, e, this.state.context, a)
            } catch (f) {
                Promise.reject(f)
            }
            try {
                await this.#e.config.onSettled?.(void 0, c, this.state.variables, this.state.context, this, a)
            } catch (f) {
                Promise.reject(f)
            }
            try {
                await this.options.onSettled?.(void 0, c, e, this.state.context, a)
            } catch (f) {
                Promise.reject(f)
            }
            throw this.#i({
                type: "error",
                error: c
            }), c
        } finally {
            this.#e.runNext(this)
        }
    }
    #i(e) {
        const i = a => {
            switch (e.type) {
                case "failed":
                    return {
                        ...a, failureCount: e.failureCount, failureReason: e.error
                    };
                case "pause":
                    return {
                        ...a, isPaused: !0
                    };
                case "continue":
                    return {
                        ...a, isPaused: !1
                    };
                case "pending":
                    return {
                        ...a, context: e.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: e.isPaused, status: "pending", variables: e.variables, submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...a, data: e.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
                    };
                case "error":
                    return {
                        ...a, data: void 0, error: e.error, failureCount: a.failureCount + 1, failureReason: e.error, isPaused: !1, status: "error"
                    }
            }
        };
        this.state = i(this.state), me.batch(() => {
            this.#n.forEach(a => {
                a.onMutationUpdate(e)
            }), this.#e.notify({
                mutation: this,
                type: "updated",
                action: e
            })
        })
    }
};

function vE() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var bE = class extends bl {
    constructor(e = {}) {
        super(), this.config = e, this.#t = new Set, this.#n = new Map, this.#e = 0
    }
    #t;
    #n;
    #e;
    build(e, i, a) {
        const o = new yE({
            client: e,
            mutationCache: this,
            mutationId: ++this.#e,
            options: e.defaultMutationOptions(i),
            state: a
        });
        return this.add(o), o
    }
    add(e) {
        this.#t.add(e);
        const i = ko(e);
        if (typeof i == "string") {
            const a = this.#n.get(i);
            a ? a.push(e) : this.#n.set(i, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (this.#t.delete(e)) {
            const i = ko(e);
            if (typeof i == "string") {
                const a = this.#n.get(i);
                if (a)
                    if (a.length > 1) {
                        const o = a.indexOf(e);
                        o !== -1 && a.splice(o, 1)
                    } else a[0] === e && this.#n.delete(i)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const i = ko(e);
        if (typeof i == "string") {
            const o = this.#n.get(i)?.find(l => l.state.status === "pending");
            return !o || o === e
        } else return !0
    }
    runNext(e) {
        const i = ko(e);
        return typeof i == "string" ? this.#n.get(i)?.find(o => o !== e && o.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve()
    }
    clear() {
        me.batch(() => {
            this.#t.forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }), this.#t.clear(), this.#n.clear()
        })
    }
    getAll() {
        return Array.from(this.#t)
    }
    find(e) {
        const i = {
            exact: !0,
            ...e
        };
        return this.getAll().find(a => xy(i, a))
    }
    findAll(e = {}) {
        return this.getAll().filter(i => xy(e, i))
    }
    notify(e) {
        me.batch(() => {
            this.listeners.forEach(i => {
                i(e)
            })
        })
    }
    resumePausedMutations() {
        const e = this.getAll().filter(i => i.state.isPaused);
        return me.batch(() => Promise.all(e.map(i => i.continue().catch($e))))
    }
};

function ko(e) {
    return e.options.scope?.id
}
var xE = class extends bl {
        constructor(e = {}) {
            super(), this.config = e, this.#t = new Map
        }
        #t;
        build(e, i, a) {
            const o = i.queryKey,
                l = i.queryHash ?? hd(o, i);
            let c = this.get(l);
            return c || (c = new mE({
                client: e,
                queryKey: o,
                queryHash: l,
                options: e.defaultQueryOptions(i),
                state: a,
                defaultOptions: e.getQueryDefaults(o)
            }), this.add(c)), c
        }
        add(e) {
            this.#t.has(e.queryHash) || (this.#t.set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }))
        }
        remove(e) {
            const i = this.#t.get(e.queryHash);
            i && (e.destroy(), i === e && this.#t.delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }))
        }
        clear() {
            me.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return this.#t.get(e)
        }
        getAll() {
            return [...this.#t.values()]
        }
        find(e) {
            const i = {
                exact: !0,
                ...e
            };
            return this.getAll().find(a => by(i, a))
        }
        findAll(e = {}) {
            const i = this.getAll();
            return Object.keys(e).length > 0 ? i.filter(a => by(e, a)) : i
        }
        notify(e) {
            me.batch(() => {
                this.listeners.forEach(i => {
                    i(e)
                })
            })
        }
        onFocus() {
            me.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            me.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    },
    SE = class {
        #t;
        #n;
        #e;
        #s;
        #i;
        #r;
        #o;
        #a;
        constructor(e = {}) {
            this.#t = e.queryCache || new xE, this.#n = e.mutationCache || new bE, this.#e = e.defaultOptions || {}, this.#s = new Map, this.#i = new Map, this.#r = 0
        }
        mount() {
            this.#r++, this.#r === 1 && (this.#o = _0.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#t.onFocus())
            }), this.#a = il.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#t.onOnline())
            }))
        }
        unmount() {
            this.#r--, this.#r === 0 && (this.#o?.(), this.#o = void 0, this.#a?.(), this.#a = void 0)
        }
        isFetching(e) {
            return this.#t.findAll({
                ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return this.#n.findAll({
                ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            const i = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#t.get(i.queryHash)?.state.data
        }
        ensureQueryData(e) {
            const i = this.defaultQueryOptions(e),
                a = this.#t.build(this, i),
                o = a.state.data;
            return o === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && a.isStaleByTime(Cf(i.staleTime, a)) && this.prefetchQuery(i), Promise.resolve(o))
        }
        getQueriesData(e) {
            return this.#t.findAll(e).map(({
                queryKey: i,
                state: a
            }) => {
                const o = a.data;
                return [i, o]
            })
        }
        setQueryData(e, i, a) {
            const o = this.defaultQueryOptions({
                    queryKey: e
                }),
                c = this.#t.get(o.queryHash)?.state.data,
                f = Iw(i, c);
            if (f !== void 0) return this.#t.build(this, o).setData(f, {
                ...a,
                manual: !0
            })
        }
        setQueriesData(e, i, a) {
            return me.batch(() => this.#t.findAll(e).map(({
                queryKey: o
            }) => [o, this.setQueryData(o, i, a)]))
        }
        getQueryState(e) {
            const i = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#t.get(i.queryHash)?.state
        }
        removeQueries(e) {
            const i = this.#t;
            me.batch(() => {
                i.findAll(e).forEach(a => {
                    i.remove(a)
                })
            })
        }
        resetQueries(e, i) {
            const a = this.#t;
            return me.batch(() => (a.findAll(e).forEach(o => {
                o.reset()
            }), this.refetchQueries({
                type: "active",
                ...e
            }, i)))
        }
        cancelQueries(e, i = {}) {
            const a = {
                    revert: !0,
                    ...i
                },
                o = me.batch(() => this.#t.findAll(e).map(l => l.cancel(a)));
            return Promise.all(o).then($e).catch($e)
        }
        invalidateQueries(e, i = {}) {
            return me.batch(() => (this.#t.findAll(e).forEach(a => {
                a.invalidate()
            }), e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
                ...e,
                type: e?.refetchType ?? e?.type ?? "active"
            }, i)))
        }
        refetchQueries(e, i = {}) {
            const a = {
                    ...i,
                    cancelRefetch: i.cancelRefetch ?? !0
                },
                o = me.batch(() => this.#t.findAll(e).filter(l => !l.isDisabled() && !l.isStatic()).map(l => {
                    let c = l.fetch(void 0, a);
                    return a.throwOnError || (c = c.catch($e)), l.state.fetchStatus === "paused" ? Promise.resolve() : c
                }));
            return Promise.all(o).then($e)
        }
        fetchQuery(e) {
            const i = this.defaultQueryOptions(e);
            i.retry === void 0 && (i.retry = !1);
            const a = this.#t.build(this, i);
            return a.isStaleByTime(Cf(i.staleTime, a)) ? a.fetch(i) : Promise.resolve(a.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then($e).catch($e)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = Ay(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then($e).catch($e)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = Ay(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return il.isOnline() ? this.#n.resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return this.#t
        }
        getMutationCache() {
            return this.#n
        }
        getDefaultOptions() {
            return this.#e
        }
        setDefaultOptions(e) {
            this.#e = e
        }
        setQueryDefaults(e, i) {
            this.#s.set(or(e), {
                queryKey: e,
                defaultOptions: i
            })
        }
        getQueryDefaults(e) {
            const i = [...this.#s.values()],
                a = {};
            return i.forEach(o => {
                lr(e, o.queryKey) && Object.assign(a, o.defaultOptions)
            }), a
        }
        setMutationDefaults(e, i) {
            this.#i.set(or(e), {
                mutationKey: e,
                defaultOptions: i
            })
        }
        getMutationDefaults(e) {
            const i = [...this.#i.values()],
                a = {};
            return i.forEach(o => {
                lr(e, o.mutationKey) && Object.assign(a, o.defaultOptions)
            }), a
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const i = {
                ...this.#e.queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return i.queryHash || (i.queryHash = hd(i.queryKey, i)), i.refetchOnReconnect === void 0 && (i.refetchOnReconnect = i.networkMode !== "always"), i.throwOnError === void 0 && (i.throwOnError = !!i.suspense), !i.networkMode && i.persister && (i.networkMode = "offlineFirst"), i.queryFn === md && (i.enabled = !1), i
        }
        defaultMutationOptions(e) {
            return e?._defaulted ? e : {
                ...this.#e.mutations,
                ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            this.#t.clear(), this.#n.clear()
        }
    },
    TE = E.createContext(void 0),
    wE = ({
        client: e,
        children: i
    }) => (E.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), S.jsx(TE.Provider, {
        value: e,
        children: i
    }));
const EE = 1,
    AE = 1e6;
let tf = 0;

function CE() {
    return tf = (tf + 1) % Number.MAX_SAFE_INTEGER, tf.toString()
}
const ef = new Map,
    Ry = e => {
        if (ef.has(e)) return;
        const i = setTimeout(() => {
            ef.delete(e), nr({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, AE);
        ef.set(e, i)
    },
    RE = (e, i) => {
        switch (i.type) {
            case "ADD_TOAST":
                return {
                    ...e, toasts: [i.toast, ...e.toasts].slice(0, EE)
                };
            case "UPDATE_TOAST":
                return {
                    ...e, toasts: e.toasts.map(a => a.id === i.toast.id ? {
                        ...a,
                        ...i.toast
                    } : a)
                };
            case "DISMISS_TOAST": {
                const {
                    toastId: a
                } = i;
                return a ? Ry(a) : e.toasts.forEach(o => {
                    Ry(o.id)
                }), {
                    ...e,
                    toasts: e.toasts.map(o => o.id === a || a === void 0 ? {
                        ...o,
                        open: !1
                    } : o)
                }
            }
            case "REMOVE_TOAST":
                return i.toastId === void 0 ? {
                    ...e,
                    toasts: []
                } : {
                    ...e,
                    toasts: e.toasts.filter(a => a.id !== i.toastId)
                }
        }
    },
    Qo = [];
let Fo = {
    toasts: []
};

function nr(e) {
    Fo = RE(Fo, e), Qo.forEach(i => {
        i(Fo)
    })
}

function ME({
    ...e
}) {
    const i = CE(),
        a = l => nr({
            type: "UPDATE_TOAST",
            toast: {
                ...l,
                id: i
            }
        }),
        o = () => nr({
            type: "DISMISS_TOAST",
            toastId: i
        });
    return nr({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: i,
            open: !0,
            onOpenChange: l => {
                l || o()
            }
        }
    }), {
        id: i,
        dismiss: o,
        update: a
    }
}

function DE() {
    const [e, i] = E.useState(Fo);
    return E.useEffect(() => (Qo.push(i), () => {
        const a = Qo.indexOf(i);
        a > -1 && Qo.splice(a, 1)
    }), [e]), {
        ...e,
        toast: ME,
        dismiss: a => nr({
            type: "DISMISS_TOAST",
            toastId: a
        })
    }
}
var Sl = b0();
const OE = v0(Sl);

function $t(e, i, {
    checkForDefaultPrevented: a = !0
} = {}) {
    return function(l) {
        if (e?.(l), a === !1 || !l.defaultPrevented) return i?.(l)
    }
}

function My(e, i) {
    if (typeof e == "function") return e(i);
    e != null && (e.current = i)
}

function k0(...e) {
    return i => {
        let a = !1;
        const o = e.map(l => {
            const c = My(l, i);
            return !a && typeof c == "function" && (a = !0), c
        });
        if (a) return () => {
            for (let l = 0; l < o.length; l++) {
                const c = o[l];
                typeof c == "function" ? c() : My(e[l], null)
            }
        }
    }
}

function nn(...e) {
    return E.useCallback(k0(...e), e)
}

function Tl(e, i = []) {
    let a = [];

    function o(c, f) {
        const h = E.createContext(f),
            p = a.length;
        a = [...a, f];
        const m = v => {
            const {
                scope: b,
                children: T,
                ...A
            } = v, C = b?.[e]?.[p] || h, M = E.useMemo(() => A, Object.values(A));
            return S.jsx(C.Provider, {
                value: M,
                children: T
            })
        };
        m.displayName = c + "Provider";

        function g(v, b) {
            const T = b?.[e]?.[p] || h,
                A = E.useContext(T);
            if (A) return A;
            if (f !== void 0) return f;
            throw new Error(`\`${v}\` must be used within \`${c}\``)
        }
        return [m, g]
    }
    const l = () => {
        const c = a.map(f => E.createContext(f));
        return function(h) {
            const p = h?.[e] || c;
            return E.useMemo(() => ({
                [`__scope${e}`]: {
                    ...h,
                    [e]: p
                }
            }), [h, p])
        }
    };
    return l.scopeName = e, [o, NE(l, ...i)]
}

function NE(...e) {
    const i = e[0];
    if (e.length === 1) return i;
    const a = () => {
        const o = e.map(l => ({
            useScope: l(),
            scopeName: l.scopeName
        }));
        return function(c) {
            const f = o.reduce((h, {
                useScope: p,
                scopeName: m
            }) => {
                const v = p(c)[`__scope${m}`];
                return {
                    ...h,
                    ...v
                }
            }, {});
            return E.useMemo(() => ({
                [`__scope${i.scopeName}`]: f
            }), [f])
        }
    };
    return a.scopeName = i.scopeName, a
}

function Df(e) {
    const i = jE(e),
        a = E.forwardRef((o, l) => {
            const {
                children: c,
                ...f
            } = o, h = E.Children.toArray(c), p = h.find(VE);
            if (p) {
                const m = p.props.children,
                    g = h.map(v => v === p ? E.Children.count(m) > 1 ? E.Children.only(null) : E.isValidElement(m) ? m.props.children : null : v);
                return S.jsx(i, {
                    ...f,
                    ref: l,
                    children: E.isValidElement(m) ? E.cloneElement(m, void 0, g) : null
                })
            }
            return S.jsx(i, {
                ...f,
                ref: l,
                children: c
            })
        });
    return a.displayName = `${e}.Slot`, a
}

function jE(e) {
    const i = E.forwardRef((a, o) => {
        const {
            children: l,
            ...c
        } = a;
        if (E.isValidElement(l)) {
            const f = LE(l),
                h = zE(c, l.props);
            return l.type !== E.Fragment && (h.ref = o ? k0(o, f) : f), E.cloneElement(l, h)
        }
        return E.Children.count(l) > 1 ? E.Children.only(null) : null
    });
    return i.displayName = `${e}.SlotClone`, i
}
var P0 = Symbol("radix.slottable");

function _E(e) {
    const i = ({
        children: a
    }) => S.jsx(S.Fragment, {
        children: a
    });
    return i.displayName = `${e}.Slottable`, i.__radixId = P0, i
}

function VE(e) {
    return E.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === P0
}

function zE(e, i) {
    const a = {
        ...i
    };
    for (const o in i) {
        const l = e[o],
            c = i[o];
        /^on[A-Z]/.test(o) ? l && c ? a[o] = (...h) => {
            const p = c(...h);
            return l(...h), p
        } : l && (a[o] = l) : o === "style" ? a[o] = {
            ...l,
            ...c
        } : o === "className" && (a[o] = [l, c].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...a
    }
}

function LE(e) {
    let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
        a = i && "isReactWarning" in i && i.isReactWarning;
    return a ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning, a ? e.props.ref : e.props.ref || e.ref)
}

function kE(e) {
    const i = e + "CollectionProvider",
        [a, o] = Tl(i),
        [l, c] = a(i, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        f = C => {
            const {
                scope: M,
                children: O
            } = C, _ = mi.useRef(null), j = mi.useRef(new Map).current;
            return S.jsx(l, {
                scope: M,
                itemMap: j,
                collectionRef: _,
                children: O
            })
        };
    f.displayName = i;
    const h = e + "CollectionSlot",
        p = Df(h),
        m = mi.forwardRef((C, M) => {
            const {
                scope: O,
                children: _
            } = C, j = c(h, O), k = nn(M, j.collectionRef);
            return S.jsx(p, {
                ref: k,
                children: _
            })
        });
    m.displayName = h;
    const g = e + "CollectionItemSlot",
        v = "data-radix-collection-item",
        b = Df(g),
        T = mi.forwardRef((C, M) => {
            const {
                scope: O,
                children: _,
                ...j
            } = C, k = mi.useRef(null), P = nn(M, k), Q = c(g, O);
            return mi.useEffect(() => (Q.itemMap.set(k, {
                ref: k,
                ...j
            }), () => {
                Q.itemMap.delete(k)
            })), S.jsx(b, {
                [v]: "",
                ref: P,
                children: _
            })
        });
    T.displayName = g;

    function A(C) {
        const M = c(e + "CollectionConsumer", C);
        return mi.useCallback(() => {
            const _ = M.collectionRef.current;
            if (!_) return [];
            const j = Array.from(_.querySelectorAll(`[${v}]`));
            return Array.from(M.itemMap.values()).sort((Q, Z) => j.indexOf(Q.ref.current) - j.indexOf(Z.ref.current))
        }, [M.collectionRef, M.itemMap])
    }
    return [{
        Provider: f,
        Slot: m,
        ItemSlot: T
    }, A, o]
}
var PE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    Te = PE.reduce((e, i) => {
        const a = Df(`Primitive.${i}`),
            o = E.forwardRef((l, c) => {
                const {
                    asChild: f,
                    ...h
                } = l, p = f ? a : i;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), S.jsx(p, {
                    ...h,
                    ref: c
                })
            });
        return o.displayName = `Primitive.${i}`, {
            ...e,
            [i]: o
        }
    }, {});

function U0(e, i) {
    e && Sl.flushSync(() => e.dispatchEvent(i))
}

function yi(e) {
    const i = E.useRef(e);
    return E.useEffect(() => {
        i.current = e
    }), E.useMemo(() => (...a) => i.current?.(...a), [])
}

function UE(e, i = globalThis?.document) {
    const a = yi(e);
    E.useEffect(() => {
        const o = l => {
            l.key === "Escape" && a(l)
        };
        return i.addEventListener("keydown", o, {
            capture: !0
        }), () => i.removeEventListener("keydown", o, {
            capture: !0
        })
    }, [a, i])
}
var BE = "DismissableLayer",
    Of = "dismissableLayer.update",
    HE = "dismissableLayer.pointerDownOutside",
    qE = "dismissableLayer.focusOutside",
    Dy, B0 = E.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    pd = E.forwardRef((e, i) => {
        const {
            disableOutsidePointerEvents: a = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onInteractOutside: f,
            onDismiss: h,
            ...p
        } = e, m = E.useContext(B0), [g, v] = E.useState(null), b = g?.ownerDocument ?? globalThis?.document, [, T] = E.useState({}), A = nn(i, Z => v(Z)), C = Array.from(m.layers), [M] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), O = C.indexOf(M), _ = g ? C.indexOf(g) : -1, j = m.layersWithOutsidePointerEventsDisabled.size > 0, k = _ >= O, P = YE(Z => {
            const H = Z.target,
                W = [...m.branches].some(ot => ot.contains(H));
            !k || W || (l?.(Z), f?.(Z), Z.defaultPrevented || h?.())
        }, b), Q = XE(Z => {
            const H = Z.target;
            [...m.branches].some(ot => ot.contains(H)) || (c?.(Z), f?.(Z), Z.defaultPrevented || h?.())
        }, b);
        return UE(Z => {
            _ === m.layers.size - 1 && (o?.(Z), !Z.defaultPrevented && h && (Z.preventDefault(), h()))
        }, b), E.useEffect(() => {
            if (g) return a && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Dy = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(g)), m.layers.add(g), Oy(), () => {
                a && m.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = Dy)
            }
        }, [g, b, a, m]), E.useEffect(() => () => {
            g && (m.layers.delete(g), m.layersWithOutsidePointerEventsDisabled.delete(g), Oy())
        }, [g, m]), E.useEffect(() => {
            const Z = () => T({});
            return document.addEventListener(Of, Z), () => document.removeEventListener(Of, Z)
        }, []), S.jsx(Te.div, {
            ...p,
            ref: A,
            style: {
                pointerEvents: j ? k ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: $t(e.onFocusCapture, Q.onFocusCapture),
            onBlurCapture: $t(e.onBlurCapture, Q.onBlurCapture),
            onPointerDownCapture: $t(e.onPointerDownCapture, P.onPointerDownCapture)
        })
    });
pd.displayName = BE;
var GE = "DismissableLayerBranch",
    H0 = E.forwardRef((e, i) => {
        const a = E.useContext(B0),
            o = E.useRef(null),
            l = nn(i, o);
        return E.useEffect(() => {
            const c = o.current;
            if (c) return a.branches.add(c), () => {
                a.branches.delete(c)
            }
        }, [a.branches]), S.jsx(Te.div, {
            ...e,
            ref: l
        })
    });
H0.displayName = GE;

function YE(e, i = globalThis?.document) {
    const a = yi(e),
        o = E.useRef(!1),
        l = E.useRef(() => {});
    return E.useEffect(() => {
        const c = h => {
                if (h.target && !o.current) {
                    let p = function() {
                        q0(HE, a, m, {
                            discrete: !0
                        })
                    };
                    const m = {
                        originalEvent: h
                    };
                    h.pointerType === "touch" ? (i.removeEventListener("click", l.current), l.current = p, i.addEventListener("click", l.current, {
                        once: !0
                    })) : p()
                } else i.removeEventListener("click", l.current);
                o.current = !1
            },
            f = window.setTimeout(() => {
                i.addEventListener("pointerdown", c)
            }, 0);
        return () => {
            window.clearTimeout(f), i.removeEventListener("pointerdown", c), i.removeEventListener("click", l.current)
        }
    }, [i, a]), {
        onPointerDownCapture: () => o.current = !0
    }
}

function XE(e, i = globalThis?.document) {
    const a = yi(e),
        o = E.useRef(!1);
    return E.useEffect(() => {
        const l = c => {
            c.target && !o.current && q0(qE, a, {
                originalEvent: c
            }, {
                discrete: !1
            })
        };
        return i.addEventListener("focusin", l), () => i.removeEventListener("focusin", l)
    }, [i, a]), {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}

function Oy() {
    const e = new CustomEvent(Of);
    document.dispatchEvent(e)
}

function q0(e, i, a, {
    discrete: o
}) {
    const l = a.originalEvent.target,
        c = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: a
        });
    i && l.addEventListener(e, i, {
        once: !0
    }), o ? U0(l, c) : l.dispatchEvent(c)
}
var KE = pd,
    QE = H0,
    vi = globalThis?.document ? E.useLayoutEffect : () => {},
    FE = "Portal",
    gd = E.forwardRef((e, i) => {
        const {
            container: a,
            ...o
        } = e, [l, c] = E.useState(!1);
        vi(() => c(!0), []);
        const f = a || l && globalThis?.document?.body;
        return f ? OE.createPortal(S.jsx(Te.div, {
            ...o,
            ref: i
        }), f) : null
    });
gd.displayName = FE;

function ZE(e, i) {
    return E.useReducer((a, o) => i[a][o] ?? a, e)
}
var wl = e => {
    const {
        present: i,
        children: a
    } = e, o = WE(i), l = typeof a == "function" ? a({
        present: o.isPresent
    }) : E.Children.only(a), c = nn(o.ref, JE(l));
    return typeof a == "function" || o.isPresent ? E.cloneElement(l, {
        ref: c
    }) : null
};
wl.displayName = "Presence";

function WE(e) {
    const [i, a] = E.useState(), o = E.useRef(null), l = E.useRef(e), c = E.useRef("none"), f = e ? "mounted" : "unmounted", [h, p] = ZE(f, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return E.useEffect(() => {
        const m = Po(o.current);
        c.current = h === "mounted" ? m : "none"
    }, [h]), vi(() => {
        const m = o.current,
            g = l.current;
        if (g !== e) {
            const b = c.current,
                T = Po(m);
            e ? p("MOUNT") : T === "none" || m?.display === "none" ? p("UNMOUNT") : p(g && b !== T ? "ANIMATION_OUT" : "UNMOUNT"), l.current = e
        }
    }, [e, p]), vi(() => {
        if (i) {
            let m;
            const g = i.ownerDocument.defaultView ?? window,
                v = T => {
                    const C = Po(o.current).includes(CSS.escape(T.animationName));
                    if (T.target === i && C && (p("ANIMATION_END"), !l.current)) {
                        const M = i.style.animationFillMode;
                        i.style.animationFillMode = "forwards", m = g.setTimeout(() => {
                            i.style.animationFillMode === "forwards" && (i.style.animationFillMode = M)
                        })
                    }
                },
                b = T => {
                    T.target === i && (c.current = Po(o.current))
                };
            return i.addEventListener("animationstart", b), i.addEventListener("animationcancel", v), i.addEventListener("animationend", v), () => {
                g.clearTimeout(m), i.removeEventListener("animationstart", b), i.removeEventListener("animationcancel", v), i.removeEventListener("animationend", v)
            }
        } else p("ANIMATION_END")
    }, [i, p]), {
        isPresent: ["mounted", "unmountSuspended"].includes(h),
        ref: E.useCallback(m => {
            o.current = m ? getComputedStyle(m) : null, a(m)
        }, [])
    }
}

function Po(e) {
    return e?.animationName || "none"
}

function JE(e) {
    let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
        a = i && "isReactWarning" in i && i.isReactWarning;
    return a ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning, a ? e.props.ref : e.props.ref || e.ref)
}
var IE = x0[" useInsertionEffect ".trim().toString()] || vi;

function $E({
    prop: e,
    defaultProp: i,
    onChange: a = () => {},
    caller: o
}) {
    const [l, c, f] = tA({
        defaultProp: i,
        onChange: a
    }), h = e !== void 0, p = h ? e : l;
    {
        const g = E.useRef(e !== void 0);
        E.useEffect(() => {
            const v = g.current;
            v !== h && console.warn(`${o} is changing from ${v?"controlled":"uncontrolled"} to ${h?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), g.current = h
        }, [h, o])
    }
    const m = E.useCallback(g => {
        if (h) {
            const v = eA(g) ? g(e) : g;
            v !== e && f.current?.(v)
        } else c(g)
    }, [h, e, c, f]);
    return [p, m]
}

function tA({
    defaultProp: e,
    onChange: i
}) {
    const [a, o] = E.useState(e), l = E.useRef(a), c = E.useRef(i);
    return IE(() => {
        c.current = i
    }, [i]), E.useEffect(() => {
        l.current !== a && (c.current?.(a), l.current = a)
    }, [a, l]), [a, o, c]
}

function eA(e) {
    return typeof e == "function"
}
var nA = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    iA = "VisuallyHidden",
    El = E.forwardRef((e, i) => S.jsx(Te.span, {
        ...e,
        ref: i,
        style: {
            ...nA,
            ...e.style
        }
    }));
El.displayName = iA;
var sA = El,
    yd = "ToastProvider",
    [vd, aA, rA] = kE("Toast"),
    [G0] = Tl("Toast", [rA]),
    [oA, Al] = G0(yd),
    Y0 = e => {
        const {
            __scopeToast: i,
            label: a = "Notification",
            duration: o = 5e3,
            swipeDirection: l = "right",
            swipeThreshold: c = 50,
            children: f
        } = e, [h, p] = E.useState(null), [m, g] = E.useState(0), v = E.useRef(!1), b = E.useRef(!1);
        return a.trim() || console.error(`Invalid prop \`label\` supplied to \`${yd}\`. Expected non-empty \`string\`.`), S.jsx(vd.Provider, {
            scope: i,
            children: S.jsx(oA, {
                scope: i,
                label: a,
                duration: o,
                swipeDirection: l,
                swipeThreshold: c,
                toastCount: m,
                viewport: h,
                onViewportChange: p,
                onToastAdd: E.useCallback(() => g(T => T + 1), []),
                onToastRemove: E.useCallback(() => g(T => T - 1), []),
                isFocusedToastEscapeKeyDownRef: v,
                isClosePausedRef: b,
                children: f
            })
        })
    };
Y0.displayName = yd;
var X0 = "ToastViewport",
    lA = ["F8"],
    Nf = "toast.viewportPause",
    jf = "toast.viewportResume",
    K0 = E.forwardRef((e, i) => {
        const {
            __scopeToast: a,
            hotkey: o = lA,
            label: l = "Notifications ({hotkey})",
            ...c
        } = e, f = Al(X0, a), h = aA(a), p = E.useRef(null), m = E.useRef(null), g = E.useRef(null), v = E.useRef(null), b = nn(i, v, f.onViewportChange), T = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), A = f.toastCount > 0;
        E.useEffect(() => {
            const M = O => {
                o.length !== 0 && o.every(j => O[j] || O.code === j) && v.current?.focus()
            };
            return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M)
        }, [o]), E.useEffect(() => {
            const M = p.current,
                O = v.current;
            if (A && M && O) {
                const _ = () => {
                        if (!f.isClosePausedRef.current) {
                            const Q = new CustomEvent(Nf);
                            O.dispatchEvent(Q), f.isClosePausedRef.current = !0
                        }
                    },
                    j = () => {
                        if (f.isClosePausedRef.current) {
                            const Q = new CustomEvent(jf);
                            O.dispatchEvent(Q), f.isClosePausedRef.current = !1
                        }
                    },
                    k = Q => {
                        !M.contains(Q.relatedTarget) && j()
                    },
                    P = () => {
                        M.contains(document.activeElement) || j()
                    };
                return M.addEventListener("focusin", _), M.addEventListener("focusout", k), M.addEventListener("pointermove", _), M.addEventListener("pointerleave", P), window.addEventListener("blur", _), window.addEventListener("focus", j), () => {
                    M.removeEventListener("focusin", _), M.removeEventListener("focusout", k), M.removeEventListener("pointermove", _), M.removeEventListener("pointerleave", P), window.removeEventListener("blur", _), window.removeEventListener("focus", j)
                }
            }
        }, [A, f.isClosePausedRef]);
        const C = E.useCallback(({
            tabbingDirection: M
        }) => {
            const _ = h().map(j => {
                const k = j.ref.current,
                    P = [k, ...SA(k)];
                return M === "forwards" ? P : P.reverse()
            });
            return (M === "forwards" ? _.reverse() : _).flat()
        }, [h]);
        return E.useEffect(() => {
            const M = v.current;
            if (M) {
                const O = _ => {
                    const j = _.altKey || _.ctrlKey || _.metaKey;
                    if (_.key === "Tab" && !j) {
                        const P = document.activeElement,
                            Q = _.shiftKey;
                        if (_.target === M && Q) {
                            m.current?.focus();
                            return
                        }
                        const W = C({
                                tabbingDirection: Q ? "backwards" : "forwards"
                            }),
                            ot = W.findIndex(pt => pt === P);
                        nf(W.slice(ot + 1)) ? _.preventDefault() : Q ? m.current?.focus() : g.current?.focus()
                    }
                };
                return M.addEventListener("keydown", O), () => M.removeEventListener("keydown", O)
            }
        }, [h, C]), S.jsxs(QE, {
            ref: p,
            role: "region",
            "aria-label": l.replace("{hotkey}", T),
            tabIndex: -1,
            style: {
                pointerEvents: A ? void 0 : "none"
            },
            children: [A && S.jsx(_f, {
                ref: m,
                onFocusFromOutsideViewport: () => {
                    const M = C({
                        tabbingDirection: "forwards"
                    });
                    nf(M)
                }
            }), S.jsx(vd.Slot, {
                scope: a,
                children: S.jsx(Te.ol, {
                    tabIndex: -1,
                    ...c,
                    ref: b
                })
            }), A && S.jsx(_f, {
                ref: g,
                onFocusFromOutsideViewport: () => {
                    const M = C({
                        tabbingDirection: "backwards"
                    });
                    nf(M)
                }
            })]
        })
    });
K0.displayName = X0;
var Q0 = "ToastFocusProxy",
    _f = E.forwardRef((e, i) => {
        const {
            __scopeToast: a,
            onFocusFromOutsideViewport: o,
            ...l
        } = e, c = Al(Q0, a);
        return S.jsx(El, {
            tabIndex: 0,
            ...l,
            ref: i,
            style: {
                position: "fixed"
            },
            onFocus: f => {
                const h = f.relatedTarget;
                !c.viewport?.contains(h) && o()
            }
        })
    });
_f.displayName = Q0;
var pr = "Toast",
    uA = "toast.swipeStart",
    cA = "toast.swipeMove",
    fA = "toast.swipeCancel",
    dA = "toast.swipeEnd",
    F0 = E.forwardRef((e, i) => {
        const {
            forceMount: a,
            open: o,
            defaultOpen: l,
            onOpenChange: c,
            ...f
        } = e, [h, p] = $E({
            prop: o,
            defaultProp: l ?? !0,
            onChange: c,
            caller: pr
        });
        return S.jsx(wl, {
            present: a || h,
            children: S.jsx(pA, {
                open: h,
                ...f,
                ref: i,
                onClose: () => p(!1),
                onPause: yi(e.onPause),
                onResume: yi(e.onResume),
                onSwipeStart: $t(e.onSwipeStart, m => {
                    m.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: $t(e.onSwipeMove, m => {
                    const {
                        x: g,
                        y: v
                    } = m.detail.delta;
                    m.currentTarget.setAttribute("data-swipe", "move"), m.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${g}px`), m.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${v}px`)
                }),
                onSwipeCancel: $t(e.onSwipeCancel, m => {
                    m.currentTarget.setAttribute("data-swipe", "cancel"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: $t(e.onSwipeEnd, m => {
                    const {
                        x: g,
                        y: v
                    } = m.detail.delta;
                    m.currentTarget.setAttribute("data-swipe", "end"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), m.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${g}px`), m.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${v}px`), p(!1)
                })
            })
        })
    });
F0.displayName = pr;
var [hA, mA] = G0(pr, {
    onClose() {}
}), pA = E.forwardRef((e, i) => {
    const {
        __scopeToast: a,
        type: o = "foreground",
        duration: l,
        open: c,
        onClose: f,
        onEscapeKeyDown: h,
        onPause: p,
        onResume: m,
        onSwipeStart: g,
        onSwipeMove: v,
        onSwipeCancel: b,
        onSwipeEnd: T,
        ...A
    } = e, C = Al(pr, a), [M, O] = E.useState(null), _ = nn(i, $ => O($)), j = E.useRef(null), k = E.useRef(null), P = l || C.duration, Q = E.useRef(0), Z = E.useRef(P), H = E.useRef(0), {
        onToastAdd: W,
        onToastRemove: ot
    } = C, pt = yi(() => {
        M?.contains(document.activeElement) && C.viewport?.focus(), f()
    }), ut = E.useCallback($ => {
        !$ || $ === 1 / 0 || (window.clearTimeout(H.current), Q.current = new Date().getTime(), H.current = window.setTimeout(pt, $))
    }, [pt]);
    E.useEffect(() => {
        const $ = C.viewport;
        if ($) {
            const ft = () => {
                    ut(Z.current), m?.()
                },
                V = () => {
                    const F = new Date().getTime() - Q.current;
                    Z.current = Z.current - F, window.clearTimeout(H.current), p?.()
                };
            return $.addEventListener(Nf, V), $.addEventListener(jf, ft), () => {
                $.removeEventListener(Nf, V), $.removeEventListener(jf, ft)
            }
        }
    }, [C.viewport, P, p, m, ut]), E.useEffect(() => {
        c && !C.isClosePausedRef.current && ut(P)
    }, [c, P, C.isClosePausedRef, ut]), E.useEffect(() => (W(), () => ot()), [W, ot]);
    const bt = E.useMemo(() => M ? eb(M) : null, [M]);
    return C.viewport ? S.jsxs(S.Fragment, {
        children: [bt && S.jsx(gA, {
            __scopeToast: a,
            role: "status",
            "aria-live": o === "foreground" ? "assertive" : "polite",
            children: bt
        }), S.jsx(hA, {
            scope: a,
            onClose: pt,
            children: Sl.createPortal(S.jsx(vd.ItemSlot, {
                scope: a,
                children: S.jsx(KE, {
                    asChild: !0,
                    onEscapeKeyDown: $t(h, () => {
                        C.isFocusedToastEscapeKeyDownRef.current || pt(), C.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: S.jsx(Te.li, {
                        tabIndex: 0,
                        "data-state": c ? "open" : "closed",
                        "data-swipe-direction": C.swipeDirection,
                        ...A,
                        ref: _,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: $t(e.onKeyDown, $ => {
                            $.key === "Escape" && (h?.($.nativeEvent), $.nativeEvent.defaultPrevented || (C.isFocusedToastEscapeKeyDownRef.current = !0, pt()))
                        }),
                        onPointerDown: $t(e.onPointerDown, $ => {
                            $.button === 0 && (j.current = {
                                x: $.clientX,
                                y: $.clientY
                            })
                        }),
                        onPointerMove: $t(e.onPointerMove, $ => {
                            if (!j.current) return;
                            const ft = $.clientX - j.current.x,
                                V = $.clientY - j.current.y,
                                F = !!k.current,
                                X = ["left", "right"].includes(C.swipeDirection),
                                tt = ["left", "up"].includes(C.swipeDirection) ? Math.min : Math.max,
                                w = X ? tt(0, ft) : 0,
                                G = X ? 0 : tt(0, V),
                                I = $.pointerType === "touch" ? 10 : 2,
                                J = {
                                    x: w,
                                    y: G
                                },
                                rt = {
                                    originalEvent: $,
                                    delta: J
                                };
                            F ? (k.current = J, Uo(cA, v, rt, {
                                discrete: !1
                            })) : Ny(J, C.swipeDirection, I) ? (k.current = J, Uo(uA, g, rt, {
                                discrete: !1
                            }), $.target.setPointerCapture($.pointerId)) : (Math.abs(ft) > I || Math.abs(V) > I) && (j.current = null)
                        }),
                        onPointerUp: $t(e.onPointerUp, $ => {
                            const ft = k.current,
                                V = $.target;
                            if (V.hasPointerCapture($.pointerId) && V.releasePointerCapture($.pointerId), k.current = null, j.current = null, ft) {
                                const F = $.currentTarget,
                                    X = {
                                        originalEvent: $,
                                        delta: ft
                                    };
                                Ny(ft, C.swipeDirection, C.swipeThreshold) ? Uo(dA, T, X, {
                                    discrete: !0
                                }) : Uo(fA, b, X, {
                                    discrete: !0
                                }), F.addEventListener("click", tt => tt.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), C.viewport)
        })]
    }) : null
}), gA = e => {
    const {
        __scopeToast: i,
        children: a,
        ...o
    } = e, l = Al(pr, i), [c, f] = E.useState(!1), [h, p] = E.useState(!1);
    return bA(() => f(!0)), E.useEffect(() => {
        const m = window.setTimeout(() => p(!0), 1e3);
        return () => window.clearTimeout(m)
    }, []), h ? null : S.jsx(gd, {
        asChild: !0,
        children: S.jsx(El, {
            ...o,
            children: c && S.jsxs(S.Fragment, {
                children: [l.label, " ", a]
            })
        })
    })
}, yA = "ToastTitle", Z0 = E.forwardRef((e, i) => {
    const {
        __scopeToast: a,
        ...o
    } = e;
    return S.jsx(Te.div, {
        ...o,
        ref: i
    })
});
Z0.displayName = yA;
var vA = "ToastDescription",
    W0 = E.forwardRef((e, i) => {
        const {
            __scopeToast: a,
            ...o
        } = e;
        return S.jsx(Te.div, {
            ...o,
            ref: i
        })
    });
W0.displayName = vA;
var J0 = "ToastAction",
    I0 = E.forwardRef((e, i) => {
        const {
            altText: a,
            ...o
        } = e;
        return a.trim() ? S.jsx(tb, {
            altText: a,
            asChild: !0,
            children: S.jsx(bd, {
                ...o,
                ref: i
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${J0}\`. Expected non-empty \`string\`.`), null)
    });
I0.displayName = J0;
var $0 = "ToastClose",
    bd = E.forwardRef((e, i) => {
        const {
            __scopeToast: a,
            ...o
        } = e, l = mA($0, a);
        return S.jsx(tb, {
            asChild: !0,
            children: S.jsx(Te.button, {
                type: "button",
                ...o,
                ref: i,
                onClick: $t(e.onClick, l.onClose)
            })
        })
    });
bd.displayName = $0;
var tb = E.forwardRef((e, i) => {
    const {
        __scopeToast: a,
        altText: o,
        ...l
    } = e;
    return S.jsx(Te.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": o || void 0,
        ...l,
        ref: i
    })
});

function eb(e) {
    const i = [];
    return Array.from(e.childNodes).forEach(o => {
        if (o.nodeType === o.TEXT_NODE && o.textContent && i.push(o.textContent), xA(o)) {
            const l = o.ariaHidden || o.hidden || o.style.display === "none",
                c = o.dataset.radixToastAnnounceExclude === "";
            if (!l)
                if (c) {
                    const f = o.dataset.radixToastAnnounceAlt;
                    f && i.push(f)
                } else i.push(...eb(o))
        }
    }), i
}

function Uo(e, i, a, {
    discrete: o
}) {
    const l = a.originalEvent.currentTarget,
        c = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: a
        });
    i && l.addEventListener(e, i, {
        once: !0
    }), o ? U0(l, c) : l.dispatchEvent(c)
}
var Ny = (e, i, a = 0) => {
    const o = Math.abs(e.x),
        l = Math.abs(e.y),
        c = o > l;
    return i === "left" || i === "right" ? c && o > a : !c && l > a
};

function bA(e = () => {}) {
    const i = yi(e);
    vi(() => {
        let a = 0,
            o = 0;
        return a = window.requestAnimationFrame(() => o = window.requestAnimationFrame(i)), () => {
            window.cancelAnimationFrame(a), window.cancelAnimationFrame(o)
        }
    }, [i])
}

function xA(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function SA(e) {
    const i = [],
        a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: o => {
                const l = o.tagName === "INPUT" && o.type === "hidden";
                return o.disabled || o.hidden || l ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; a.nextNode();) i.push(a.currentNode);
    return i
}

function nf(e) {
    const i = document.activeElement;
    return e.some(a => a === i ? !0 : (a.focus(), document.activeElement !== i))
}
var TA = Y0,
    nb = K0,
    ib = F0,
    sb = Z0,
    ab = W0,
    rb = I0,
    ob = bd;

function lb(e) {
    var i, a, o = "";
    if (typeof e == "string" || typeof e == "number") o += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var l = e.length;
            for (i = 0; i < l; i++) e[i] && (a = lb(e[i])) && (o && (o += " "), o += a)
        } else
            for (a in e) e[a] && (o && (o += " "), o += a);
    return o
}

function ub() {
    for (var e, i, a = 0, o = "", l = arguments.length; a < l; a++)(e = arguments[a]) && (i = lb(e)) && (o && (o += " "), o += i);
    return o
}
const jy = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    _y = ub,
    wA = (e, i) => a => {
        var o;
        if (i?.variants == null) return _y(e, a?.class, a?.className);
        const {
            variants: l,
            defaultVariants: c
        } = i, f = Object.keys(l).map(m => {
            const g = a?.[m],
                v = c?.[m];
            if (g === null) return null;
            const b = jy(g) || jy(v);
            return l[m][b]
        }), h = a && Object.entries(a).reduce((m, g) => {
            let [v, b] = g;
            return b === void 0 || (m[v] = b), m
        }, {}), p = i == null || (o = i.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((m, g) => {
            let {
                class: v,
                className: b,
                ...T
            } = g;
            return Object.entries(T).every(A => {
                let [C, M] = A;
                return Array.isArray(M) ? M.includes({
                    ...c,
                    ...h
                } [C]) : {
                    ...c,
                    ...h
                } [C] === M
            }) ? [...m, v, b] : m
        }, []);
        return _y(e, f, p, a?.class, a?.className)
    };
const EA = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    AA = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, a, o) => o ? o.toUpperCase() : a.toLowerCase()),
    Vy = e => {
        const i = AA(e);
        return i.charAt(0).toUpperCase() + i.slice(1)
    },
    cb = (...e) => e.filter((i, a, o) => !!i && i.trim() !== "" && o.indexOf(i) === a).join(" ").trim(),
    CA = e => {
        for (const i in e)
            if (i.startsWith("aria-") || i === "role" || i === "title") return !0
    };
var RA = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const MA = E.forwardRef(({
    color: e = "currentColor",
    size: i = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: o,
    className: l = "",
    children: c,
    iconNode: f,
    ...h
}, p) => E.createElement("svg", {
    ref: p,
    ...RA,
    width: i,
    height: i,
    stroke: e,
    strokeWidth: o ? Number(a) * 24 / Number(i) : a,
    className: cb("lucide", l),
    ...!c && !CA(h) && {
        "aria-hidden": "true"
    },
    ...h
}, [...f.map(([m, g]) => E.createElement(m, g)), ...Array.isArray(c) ? c : [c]]));
const rn = (e, i) => {
    const a = E.forwardRef(({
        className: o,
        ...l
    }, c) => E.createElement(MA, {
        ref: c,
        iconNode: i,
        className: cb(`lucide-${EA(Vy(e))}`, `lucide-${e}`, o),
        ...l
    }));
    return a.displayName = Vy(e), a
};
const DA = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ],
    OA = rn("arrow-right", DA);
const NA = [
        ["path", {
            d: "m5 12 7-7 7 7",
            key: "hav0vg"
        }],
        ["path", {
            d: "M12 19V5",
            key: "x0mq9r"
        }]
    ],
    jA = rn("arrow-up", NA);
const _A = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }]
    ],
    VA = rn("circle-alert", _A);
const zA = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ],
    LA = rn("circle-check", zA);
const kA = [
        ["path", {
            d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
            key: "1pdavp"
        }],
        ["path", {
            d: "M20.054 15.987H3.946",
            key: "14rxg9"
        }]
    ],
    PA = rn("laptop", kA);
const UA = [
        ["path", {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }],
        ["rect", {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }]
    ],
    BA = rn("mail", UA);
const HA = [
        ["path", {
            d: "M4 5h16",
            key: "1tepv9"
        }],
        ["path", {
            d: "M4 12h16",
            key: "1lakjw"
        }],
        ["path", {
            d: "M4 19h16",
            key: "1djgab"
        }]
    ],
    qA = rn("menu", HA);
const GA = [
        ["path", {
            d: "M9 18V5l12-2v13",
            key: "1jmyc2"
        }],
        ["circle", {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }],
        ["circle", {
            cx: "18",
            cy: "16",
            r: "3",
            key: "1hluhg"
        }]
    ],
    YA = rn("music", GA);
const XA = [
        ["path", {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }]
    ],
    KA = rn("phone", XA);
const QA = [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["path", {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }],
        ["path", {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }]
    ],
    FA = rn("users", QA);
const ZA = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    fb = rn("x", ZA),
    WA = (e, i) => {
        const a = new Array(e.length + i.length);
        for (let o = 0; o < e.length; o++) a[o] = e[o];
        for (let o = 0; o < i.length; o++) a[e.length + o] = i[o];
        return a
    },
    JA = (e, i) => ({
        classGroupId: e,
        validator: i
    }),
    db = (e = new Map, i = null, a) => ({
        nextPart: e,
        validators: i,
        classGroupId: a
    }),
    sl = "-",
    zy = [],
    IA = "arbitrary..",
    $A = e => {
        const i = e2(e),
            {
                conflictingClassGroups: a,
                conflictingClassGroupModifiers: o
            } = e;
        return {
            getClassGroupId: f => {
                if (f.startsWith("[") && f.endsWith("]")) return t2(f);
                const h = f.split(sl),
                    p = h[0] === "" && h.length > 1 ? 1 : 0;
                return hb(h, p, i)
            },
            getConflictingClassGroupIds: (f, h) => {
                if (h) {
                    const p = o[f],
                        m = a[f];
                    return p ? m ? WA(m, p) : p : m || zy
                }
                return a[f] || zy
            }
        }
    },
    hb = (e, i, a) => {
        if (e.length - i === 0) return a.classGroupId;
        const l = e[i],
            c = a.nextPart.get(l);
        if (c) {
            const m = hb(e, i + 1, c);
            if (m) return m
        }
        const f = a.validators;
        if (f === null) return;
        const h = i === 0 ? e.join(sl) : e.slice(i).join(sl),
            p = f.length;
        for (let m = 0; m < p; m++) {
            const g = f[m];
            if (g.validator(h)) return g.classGroupId
        }
    },
    t2 = e => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
        const i = e.slice(1, -1),
            a = i.indexOf(":"),
            o = i.slice(0, a);
        return o ? IA + o : void 0
    })(),
    e2 = e => {
        const {
            theme: i,
            classGroups: a
        } = e;
        return n2(a, i)
    },
    n2 = (e, i) => {
        const a = db();
        for (const o in e) {
            const l = e[o];
            xd(l, a, o, i)
        }
        return a
    },
    xd = (e, i, a, o) => {
        const l = e.length;
        for (let c = 0; c < l; c++) {
            const f = e[c];
            i2(f, i, a, o)
        }
    },
    i2 = (e, i, a, o) => {
        if (typeof e == "string") {
            s2(e, i, a);
            return
        }
        if (typeof e == "function") {
            a2(e, i, a, o);
            return
        }
        r2(e, i, a, o)
    },
    s2 = (e, i, a) => {
        const o = e === "" ? i : mb(i, e);
        o.classGroupId = a
    },
    a2 = (e, i, a, o) => {
        if (o2(e)) {
            xd(e(o), i, a, o);
            return
        }
        i.validators === null && (i.validators = []), i.validators.push(JA(a, e))
    },
    r2 = (e, i, a, o) => {
        const l = Object.entries(e),
            c = l.length;
        for (let f = 0; f < c; f++) {
            const [h, p] = l[f];
            xd(p, mb(i, h), a, o)
        }
    },
    mb = (e, i) => {
        let a = e;
        const o = i.split(sl),
            l = o.length;
        for (let c = 0; c < l; c++) {
            const f = o[c];
            let h = a.nextPart.get(f);
            h || (h = db(), a.nextPart.set(f, h)), a = h
        }
        return a
    },
    o2 = e => "isThemeGetter" in e && e.isThemeGetter === !0,
    l2 = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let i = 0,
            a = Object.create(null),
            o = Object.create(null);
        const l = (c, f) => {
            a[c] = f, i++, i > e && (i = 0, o = a, a = Object.create(null))
        };
        return {
            get(c) {
                let f = a[c];
                if (f !== void 0) return f;
                if ((f = o[c]) !== void 0) return l(c, f), f
            },
            set(c, f) {
                c in a ? a[c] = f : l(c, f)
            }
        }
    },
    Vf = "!",
    Ly = ":",
    u2 = [],
    ky = (e, i, a, o, l) => ({
        modifiers: e,
        hasImportantModifier: i,
        baseClassName: a,
        maybePostfixModifierPosition: o,
        isExternal: l
    }),
    c2 = e => {
        const {
            prefix: i,
            experimentalParseClassName: a
        } = e;
        let o = l => {
            const c = [];
            let f = 0,
                h = 0,
                p = 0,
                m;
            const g = l.length;
            for (let C = 0; C < g; C++) {
                const M = l[C];
                if (f === 0 && h === 0) {
                    if (M === Ly) {
                        c.push(l.slice(p, C)), p = C + 1;
                        continue
                    }
                    if (M === "/") {
                        m = C;
                        continue
                    }
                }
                M === "[" ? f++ : M === "]" ? f-- : M === "(" ? h++ : M === ")" && h--
            }
            const v = c.length === 0 ? l : l.slice(p);
            let b = v,
                T = !1;
            v.endsWith(Vf) ? (b = v.slice(0, -1), T = !0) : v.startsWith(Vf) && (b = v.slice(1), T = !0);
            const A = m && m > p ? m - p : void 0;
            return ky(c, T, b, A)
        };
        if (i) {
            const l = i + Ly,
                c = o;
            o = f => f.startsWith(l) ? c(f.slice(l.length)) : ky(u2, !1, f, void 0, !0)
        }
        if (a) {
            const l = o;
            o = c => a({
                className: c,
                parseClassName: l
            })
        }
        return o
    },
    f2 = e => {
        const i = new Map;
        return e.orderSensitiveModifiers.forEach((a, o) => {
            i.set(a, 1e6 + o)
        }), a => {
            const o = [];
            let l = [];
            for (let c = 0; c < a.length; c++) {
                const f = a[c],
                    h = f[0] === "[",
                    p = i.has(f);
                h || p ? (l.length > 0 && (l.sort(), o.push(...l), l = []), o.push(f)) : l.push(f)
            }
            return l.length > 0 && (l.sort(), o.push(...l)), o
        }
    },
    d2 = e => ({
        cache: l2(e.cacheSize),
        parseClassName: c2(e),
        sortModifiers: f2(e),
        ...$A(e)
    }),
    h2 = /\s+/,
    m2 = (e, i) => {
        const {
            parseClassName: a,
            getClassGroupId: o,
            getConflictingClassGroupIds: l,
            sortModifiers: c
        } = i, f = [], h = e.trim().split(h2);
        let p = "";
        for (let m = h.length - 1; m >= 0; m -= 1) {
            const g = h[m],
                {
                    isExternal: v,
                    modifiers: b,
                    hasImportantModifier: T,
                    baseClassName: A,
                    maybePostfixModifierPosition: C
                } = a(g);
            if (v) {
                p = g + (p.length > 0 ? " " + p : p);
                continue
            }
            let M = !!C,
                O = o(M ? A.substring(0, C) : A);
            if (!O) {
                if (!M) {
                    p = g + (p.length > 0 ? " " + p : p);
                    continue
                }
                if (O = o(A), !O) {
                    p = g + (p.length > 0 ? " " + p : p);
                    continue
                }
                M = !1
            }
            const _ = b.length === 0 ? "" : b.length === 1 ? b[0] : c(b).join(":"),
                j = T ? _ + Vf : _,
                k = j + O;
            if (f.indexOf(k) > -1) continue;
            f.push(k);
            const P = l(O, M);
            for (let Q = 0; Q < P.length; ++Q) {
                const Z = P[Q];
                f.push(j + Z)
            }
            p = g + (p.length > 0 ? " " + p : p)
        }
        return p
    },
    p2 = (...e) => {
        let i = 0,
            a, o, l = "";
        for (; i < e.length;)(a = e[i++]) && (o = pb(a)) && (l && (l += " "), l += o);
        return l
    },
    pb = e => {
        if (typeof e == "string") return e;
        let i, a = "";
        for (let o = 0; o < e.length; o++) e[o] && (i = pb(e[o])) && (a && (a += " "), a += i);
        return a
    },
    g2 = (e, ...i) => {
        let a, o, l, c;
        const f = p => {
                const m = i.reduce((g, v) => v(g), e());
                return a = d2(m), o = a.cache.get, l = a.cache.set, c = h, h(p)
            },
            h = p => {
                const m = o(p);
                if (m) return m;
                const g = m2(p, a);
                return l(p, g), g
            };
        return c = f, (...p) => c(p2(...p))
    },
    y2 = [],
    Jt = e => {
        const i = a => a[e] || y2;
        return i.isThemeGetter = !0, i
    },
    gb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    yb = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    v2 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    b2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    x2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    S2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    T2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    w2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    di = e => v2.test(e),
    vt = e => !!e && !Number.isNaN(Number(e)),
    hi = e => !!e && Number.isInteger(Number(e)),
    sf = e => e.endsWith("%") && vt(e.slice(0, -1)),
    zn = e => b2.test(e),
    vb = () => !0,
    E2 = e => x2.test(e) && !S2.test(e),
    Sd = () => !1,
    A2 = e => T2.test(e),
    C2 = e => w2.test(e),
    R2 = e => !nt(e) && !st(e),
    M2 = e => Ti(e, Sb, Sd),
    nt = e => gb.test(e),
    qi = e => Ti(e, Tb, E2),
    Py = e => Ti(e, L2, vt),
    D2 = e => Ti(e, Eb, vb),
    O2 = e => Ti(e, wb, Sd),
    Uy = e => Ti(e, bb, Sd),
    N2 = e => Ti(e, xb, C2),
    Bo = e => Ti(e, Ab, A2),
    st = e => yb.test(e),
    Ia = e => Wi(e, Tb),
    j2 = e => Wi(e, wb),
    By = e => Wi(e, bb),
    _2 = e => Wi(e, Sb),
    V2 = e => Wi(e, xb),
    Ho = e => Wi(e, Ab, !0),
    z2 = e => Wi(e, Eb, !0),
    Ti = (e, i, a) => {
        const o = gb.exec(e);
        return o ? o[1] ? i(o[1]) : a(o[2]) : !1
    },
    Wi = (e, i, a = !1) => {
        const o = yb.exec(e);
        return o ? o[1] ? i(o[1]) : a : !1
    },
    bb = e => e === "position" || e === "percentage",
    xb = e => e === "image" || e === "url",
    Sb = e => e === "length" || e === "size" || e === "bg-size",
    Tb = e => e === "length",
    L2 = e => e === "number",
    wb = e => e === "family-name",
    Eb = e => e === "number" || e === "weight",
    Ab = e => e === "shadow",
    k2 = () => {
        const e = Jt("color"),
            i = Jt("font"),
            a = Jt("text"),
            o = Jt("font-weight"),
            l = Jt("tracking"),
            c = Jt("leading"),
            f = Jt("breakpoint"),
            h = Jt("container"),
            p = Jt("spacing"),
            m = Jt("radius"),
            g = Jt("shadow"),
            v = Jt("inset-shadow"),
            b = Jt("text-shadow"),
            T = Jt("drop-shadow"),
            A = Jt("blur"),
            C = Jt("perspective"),
            M = Jt("aspect"),
            O = Jt("ease"),
            _ = Jt("animate"),
            j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            k = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            P = () => [...k(), st, nt],
            Q = () => ["auto", "hidden", "clip", "visible", "scroll"],
            Z = () => ["auto", "contain", "none"],
            H = () => [st, nt, p],
            W = () => [di, "full", "auto", ...H()],
            ot = () => [hi, "none", "subgrid", st, nt],
            pt = () => ["auto", {
                span: ["full", hi, st, nt]
            }, hi, st, nt],
            ut = () => [hi, "auto", st, nt],
            bt = () => ["auto", "min", "max", "fr", st, nt],
            $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            ft = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            V = () => ["auto", ...H()],
            F = () => [di, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...H()],
            X = () => [di, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...H()],
            tt = () => [di, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...H()],
            w = () => [e, st, nt],
            G = () => [...k(), By, Uy, {
                position: [st, nt]
            }],
            I = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            J = () => ["auto", "cover", "contain", _2, M2, {
                size: [st, nt]
            }],
            rt = () => [sf, Ia, qi],
            dt = () => ["", "none", "full", m, st, nt],
            at = () => ["", vt, Ia, qi],
            Lt = () => ["solid", "dashed", "dotted", "double"],
            Ct = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            Rt = () => [vt, sf, By, Uy],
            Bn = () => ["", "none", A, st, nt],
            Qe = () => ["none", vt, st, nt],
            on = () => ["none", vt, st, nt],
            ze = () => [vt, st, nt],
            Hn = () => [di, "full", ...H()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [zn],
                breakpoint: [zn],
                color: [vb],
                container: [zn],
                "drop-shadow": [zn],
                ease: ["in", "out", "in-out"],
                font: [R2],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [zn],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [zn],
                shadow: [zn],
                spacing: ["px", vt],
                text: [zn],
                "text-shadow": [zn],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", di, nt, st, M]
                }],
                container: ["container"],
                columns: [{
                    columns: [vt, nt, st, h]
                }],
                "break-after": [{
                    "break-after": j()
                }],
                "break-before": [{
                    "break-before": j()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: P()
                }],
                overflow: [{
                    overflow: Q()
                }],
                "overflow-x": [{
                    "overflow-x": Q()
                }],
                "overflow-y": [{
                    "overflow-y": Q()
                }],
                overscroll: [{
                    overscroll: Z()
                }],
                "overscroll-x": [{
                    "overscroll-x": Z()
                }],
                "overscroll-y": [{
                    "overscroll-y": Z()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: W()
                }],
                "inset-x": [{
                    "inset-x": W()
                }],
                "inset-y": [{
                    "inset-y": W()
                }],
                start: [{
                    "inset-s": W(),
                    start: W()
                }],
                end: [{
                    "inset-e": W(),
                    end: W()
                }],
                "inset-bs": [{
                    "inset-bs": W()
                }],
                "inset-be": [{
                    "inset-be": W()
                }],
                top: [{
                    top: W()
                }],
                right: [{
                    right: W()
                }],
                bottom: [{
                    bottom: W()
                }],
                left: [{
                    left: W()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [hi, "auto", st, nt]
                }],
                basis: [{
                    basis: [di, "full", "auto", h, ...H()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [vt, di, "auto", "initial", "none", nt]
                }],
                grow: [{
                    grow: ["", vt, st, nt]
                }],
                shrink: [{
                    shrink: ["", vt, st, nt]
                }],
                order: [{
                    order: [hi, "first", "last", "none", st, nt]
                }],
                "grid-cols": [{
                    "grid-cols": ot()
                }],
                "col-start-end": [{
                    col: pt()
                }],
                "col-start": [{
                    "col-start": ut()
                }],
                "col-end": [{
                    "col-end": ut()
                }],
                "grid-rows": [{
                    "grid-rows": ot()
                }],
                "row-start-end": [{
                    row: pt()
                }],
                "row-start": [{
                    "row-start": ut()
                }],
                "row-end": [{
                    "row-end": ut()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": bt()
                }],
                "auto-rows": [{
                    "auto-rows": bt()
                }],
                gap: [{
                    gap: H()
                }],
                "gap-x": [{
                    "gap-x": H()
                }],
                "gap-y": [{
                    "gap-y": H()
                }],
                "justify-content": [{
                    justify: [...$(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...ft(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...ft()]
                }],
                "align-content": [{
                    content: ["normal", ...$()]
                }],
                "align-items": [{
                    items: [...ft(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...ft(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": $()
                }],
                "place-items": [{
                    "place-items": [...ft(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...ft()]
                }],
                p: [{
                    p: H()
                }],
                px: [{
                    px: H()
                }],
                py: [{
                    py: H()
                }],
                ps: [{
                    ps: H()
                }],
                pe: [{
                    pe: H()
                }],
                pbs: [{
                    pbs: H()
                }],
                pbe: [{
                    pbe: H()
                }],
                pt: [{
                    pt: H()
                }],
                pr: [{
                    pr: H()
                }],
                pb: [{
                    pb: H()
                }],
                pl: [{
                    pl: H()
                }],
                m: [{
                    m: V()
                }],
                mx: [{
                    mx: V()
                }],
                my: [{
                    my: V()
                }],
                ms: [{
                    ms: V()
                }],
                me: [{
                    me: V()
                }],
                mbs: [{
                    mbs: V()
                }],
                mbe: [{
                    mbe: V()
                }],
                mt: [{
                    mt: V()
                }],
                mr: [{
                    mr: V()
                }],
                mb: [{
                    mb: V()
                }],
                ml: [{
                    ml: V()
                }],
                "space-x": [{
                    "space-x": H()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": H()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: F()
                }],
                "inline-size": [{
                    inline: ["auto", ...X()]
                }],
                "min-inline-size": [{
                    "min-inline": ["auto", ...X()]
                }],
                "max-inline-size": [{
                    "max-inline": ["none", ...X()]
                }],
                "block-size": [{
                    block: ["auto", ...tt()]
                }],
                "min-block-size": [{
                    "min-block": ["auto", ...tt()]
                }],
                "max-block-size": [{
                    "max-block": ["none", ...tt()]
                }],
                w: [{
                    w: [h, "screen", ...F()]
                }],
                "min-w": [{
                    "min-w": [h, "screen", "none", ...F()]
                }],
                "max-w": [{
                    "max-w": [h, "screen", "none", "prose", {
                        screen: [f]
                    }, ...F()]
                }],
                h: [{
                    h: ["screen", "lh", ...F()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...F()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...F()]
                }],
                "font-size": [{
                    text: ["base", a, Ia, qi]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [o, z2, D2]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", sf, nt]
                }],
                "font-family": [{
                    font: [j2, O2, i]
                }],
                "font-features": [{
                    "font-features": [nt]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [l, st, nt]
                }],
                "line-clamp": [{
                    "line-clamp": [vt, "none", st, Py]
                }],
                leading: [{
                    leading: [c, ...H()]
                }],
                "list-image": [{
                    "list-image": ["none", st, nt]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", st, nt]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: w()
                }],
                "text-color": [{
                    text: w()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...Lt(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [vt, "from-font", "auto", st, qi]
                }],
                "text-decoration-color": [{
                    decoration: w()
                }],
                "underline-offset": [{
                    "underline-offset": [vt, "auto", st, nt]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: H()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", st, nt]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", st, nt]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: G()
                }],
                "bg-repeat": [{
                    bg: I()
                }],
                "bg-size": [{
                    bg: J()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, hi, st, nt],
                        radial: ["", st, nt],
                        conic: [hi, st, nt]
                    }, V2, N2]
                }],
                "bg-color": [{
                    bg: w()
                }],
                "gradient-from-pos": [{
                    from: rt()
                }],
                "gradient-via-pos": [{
                    via: rt()
                }],
                "gradient-to-pos": [{
                    to: rt()
                }],
                "gradient-from": [{
                    from: w()
                }],
                "gradient-via": [{
                    via: w()
                }],
                "gradient-to": [{
                    to: w()
                }],
                rounded: [{
                    rounded: dt()
                }],
                "rounded-s": [{
                    "rounded-s": dt()
                }],
                "rounded-e": [{
                    "rounded-e": dt()
                }],
                "rounded-t": [{
                    "rounded-t": dt()
                }],
                "rounded-r": [{
                    "rounded-r": dt()
                }],
                "rounded-b": [{
                    "rounded-b": dt()
                }],
                "rounded-l": [{
                    "rounded-l": dt()
                }],
                "rounded-ss": [{
                    "rounded-ss": dt()
                }],
                "rounded-se": [{
                    "rounded-se": dt()
                }],
                "rounded-ee": [{
                    "rounded-ee": dt()
                }],
                "rounded-es": [{
                    "rounded-es": dt()
                }],
                "rounded-tl": [{
                    "rounded-tl": dt()
                }],
                "rounded-tr": [{
                    "rounded-tr": dt()
                }],
                "rounded-br": [{
                    "rounded-br": dt()
                }],
                "rounded-bl": [{
                    "rounded-bl": dt()
                }],
                "border-w": [{
                    border: at()
                }],
                "border-w-x": [{
                    "border-x": at()
                }],
                "border-w-y": [{
                    "border-y": at()
                }],
                "border-w-s": [{
                    "border-s": at()
                }],
                "border-w-e": [{
                    "border-e": at()
                }],
                "border-w-bs": [{
                    "border-bs": at()
                }],
                "border-w-be": [{
                    "border-be": at()
                }],
                "border-w-t": [{
                    "border-t": at()
                }],
                "border-w-r": [{
                    "border-r": at()
                }],
                "border-w-b": [{
                    "border-b": at()
                }],
                "border-w-l": [{
                    "border-l": at()
                }],
                "divide-x": [{
                    "divide-x": at()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": at()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...Lt(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...Lt(), "hidden", "none"]
                }],
                "border-color": [{
                    border: w()
                }],
                "border-color-x": [{
                    "border-x": w()
                }],
                "border-color-y": [{
                    "border-y": w()
                }],
                "border-color-s": [{
                    "border-s": w()
                }],
                "border-color-e": [{
                    "border-e": w()
                }],
                "border-color-bs": [{
                    "border-bs": w()
                }],
                "border-color-be": [{
                    "border-be": w()
                }],
                "border-color-t": [{
                    "border-t": w()
                }],
                "border-color-r": [{
                    "border-r": w()
                }],
                "border-color-b": [{
                    "border-b": w()
                }],
                "border-color-l": [{
                    "border-l": w()
                }],
                "divide-color": [{
                    divide: w()
                }],
                "outline-style": [{
                    outline: [...Lt(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [vt, st, nt]
                }],
                "outline-w": [{
                    outline: ["", vt, Ia, qi]
                }],
                "outline-color": [{
                    outline: w()
                }],
                shadow: [{
                    shadow: ["", "none", g, Ho, Bo]
                }],
                "shadow-color": [{
                    shadow: w()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", v, Ho, Bo]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": w()
                }],
                "ring-w": [{
                    ring: at()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: w()
                }],
                "ring-offset-w": [{
                    "ring-offset": [vt, qi]
                }],
                "ring-offset-color": [{
                    "ring-offset": w()
                }],
                "inset-ring-w": [{
                    "inset-ring": at()
                }],
                "inset-ring-color": [{
                    "inset-ring": w()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", b, Ho, Bo]
                }],
                "text-shadow-color": [{
                    "text-shadow": w()
                }],
                opacity: [{
                    opacity: [vt, st, nt]
                }],
                "mix-blend": [{
                    "mix-blend": [...Ct(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": Ct()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [vt]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": Rt()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": Rt()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": w()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": w()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": Rt()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": Rt()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": w()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": w()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": Rt()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": Rt()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": w()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": w()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": Rt()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": Rt()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": w()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": w()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": Rt()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": Rt()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": w()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": w()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": Rt()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": Rt()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": w()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": w()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": Rt()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": Rt()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": w()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": w()
                }],
                "mask-image-radial": [{
                    "mask-radial": [st, nt]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": Rt()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": Rt()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": w()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": w()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": k()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [vt]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": Rt()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": Rt()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": w()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": w()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: G()
                }],
                "mask-repeat": [{
                    mask: I()
                }],
                "mask-size": [{
                    mask: J()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", st, nt]
                }],
                filter: [{
                    filter: ["", "none", st, nt]
                }],
                blur: [{
                    blur: Bn()
                }],
                brightness: [{
                    brightness: [vt, st, nt]
                }],
                contrast: [{
                    contrast: [vt, st, nt]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", T, Ho, Bo]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": w()
                }],
                grayscale: [{
                    grayscale: ["", vt, st, nt]
                }],
                "hue-rotate": [{
                    "hue-rotate": [vt, st, nt]
                }],
                invert: [{
                    invert: ["", vt, st, nt]
                }],
                saturate: [{
                    saturate: [vt, st, nt]
                }],
                sepia: [{
                    sepia: ["", vt, st, nt]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", st, nt]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": Bn()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [vt, st, nt]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [vt, st, nt]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", vt, st, nt]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [vt, st, nt]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", vt, st, nt]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [vt, st, nt]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [vt, st, nt]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", vt, st, nt]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": H()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": H()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": H()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", st, nt]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [vt, "initial", st, nt]
                }],
                ease: [{
                    ease: ["linear", "initial", O, st, nt]
                }],
                delay: [{
                    delay: [vt, st, nt]
                }],
                animate: [{
                    animate: ["none", _, st, nt]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [C, st, nt]
                }],
                "perspective-origin": [{
                    "perspective-origin": P()
                }],
                rotate: [{
                    rotate: Qe()
                }],
                "rotate-x": [{
                    "rotate-x": Qe()
                }],
                "rotate-y": [{
                    "rotate-y": Qe()
                }],
                "rotate-z": [{
                    "rotate-z": Qe()
                }],
                scale: [{
                    scale: on()
                }],
                "scale-x": [{
                    "scale-x": on()
                }],
                "scale-y": [{
                    "scale-y": on()
                }],
                "scale-z": [{
                    "scale-z": on()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: ze()
                }],
                "skew-x": [{
                    "skew-x": ze()
                }],
                "skew-y": [{
                    "skew-y": ze()
                }],
                transform: [{
                    transform: [st, nt, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: P()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: Hn()
                }],
                "translate-x": [{
                    "translate-x": Hn()
                }],
                "translate-y": [{
                    "translate-y": Hn()
                }],
                "translate-z": [{
                    "translate-z": Hn()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: w()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: w()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", st, nt]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": H()
                }],
                "scroll-mx": [{
                    "scroll-mx": H()
                }],
                "scroll-my": [{
                    "scroll-my": H()
                }],
                "scroll-ms": [{
                    "scroll-ms": H()
                }],
                "scroll-me": [{
                    "scroll-me": H()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": H()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": H()
                }],
                "scroll-mt": [{
                    "scroll-mt": H()
                }],
                "scroll-mr": [{
                    "scroll-mr": H()
                }],
                "scroll-mb": [{
                    "scroll-mb": H()
                }],
                "scroll-ml": [{
                    "scroll-ml": H()
                }],
                "scroll-p": [{
                    "scroll-p": H()
                }],
                "scroll-px": [{
                    "scroll-px": H()
                }],
                "scroll-py": [{
                    "scroll-py": H()
                }],
                "scroll-ps": [{
                    "scroll-ps": H()
                }],
                "scroll-pe": [{
                    "scroll-pe": H()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": H()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": H()
                }],
                "scroll-pt": [{
                    "scroll-pt": H()
                }],
                "scroll-pr": [{
                    "scroll-pr": H()
                }],
                "scroll-pb": [{
                    "scroll-pb": H()
                }],
                "scroll-pl": [{
                    "scroll-pl": H()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", st, nt]
                }],
                fill: [{
                    fill: ["none", ...w()]
                }],
                "stroke-w": [{
                    stroke: [vt, Ia, qi, Py]
                }],
                stroke: [{
                    stroke: ["none", ...w()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    P2 = g2(k2);

function we(...e) {
    return P2(ub(e))
}
const U2 = TA,
    Cb = E.forwardRef(({
        className: e,
        ...i
    }, a) => S.jsx(nb, {
        ref: a,
        className: we("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...i
    }));
Cb.displayName = nb.displayName;
const B2 = wA("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    Rb = E.forwardRef(({
        className: e,
        variant: i,
        ...a
    }, o) => S.jsx(ib, {
        ref: o,
        className: we(B2({
            variant: i
        }), e),
        ...a
    }));
Rb.displayName = ib.displayName;
const H2 = E.forwardRef(({
    className: e,
    ...i
}, a) => S.jsx(rb, {
    ref: a,
    className: we("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...i
}));
H2.displayName = rb.displayName;
const Mb = E.forwardRef(({
    className: e,
    ...i
}, a) => S.jsx(ob, {
    ref: a,
    className: we("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...i,
    children: S.jsx(fb, {
        className: "h-4 w-4"
    })
}));
Mb.displayName = ob.displayName;
const Db = E.forwardRef(({
    className: e,
    ...i
}, a) => S.jsx(sb, {
    ref: a,
    className: we("text-sm font-semibold", e),
    ...i
}));
Db.displayName = sb.displayName;
const Ob = E.forwardRef(({
    className: e,
    ...i
}, a) => S.jsx(ab, {
    ref: a,
    className: we("text-sm opacity-90", e),
    ...i
}));
Ob.displayName = ab.displayName;

function q2() {
    const {
        toasts: e
    } = DE();
    return S.jsxs(U2, {
        children: [e.map(function({
            id: i,
            title: a,
            description: o,
            action: l,
            ...c
        }) {
            return S.jsxs(Rb, {
                ...c,
                children: [S.jsxs("div", {
                    className: "grid gap-1",
                    children: [a && S.jsx(Db, {
                        children: a
                    }), o && S.jsx(Ob, {
                        children: o
                    })]
                }), l, S.jsx(Mb, {})]
            }, i)
        }), S.jsx(Cb, {})]
    })
}
const G2 = ["top", "right", "bottom", "left"],
    bi = Math.min,
    _e = Math.max,
    al = Math.round,
    qo = Math.floor,
    gn = e => ({
        x: e,
        y: e
    }),
    Y2 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

function zf(e, i, a) {
    return _e(e, bi(i, a))
}

function Ln(e, i) {
    return typeof e == "function" ? e(i) : e
}

function kn(e) {
    return e.split("-")[0]
}

function Fs(e) {
    return e.split("-")[1]
}

function Td(e) {
    return e === "x" ? "y" : "x"
}

function wd(e) {
    return e === "y" ? "height" : "width"
}

function pn(e) {
    const i = e[0];
    return i === "t" || i === "b" ? "y" : "x"
}

function Ed(e) {
    return Td(pn(e))
}

function X2(e, i, a) {
    a === void 0 && (a = !1);
    const o = Fs(e),
        l = Ed(e),
        c = wd(l);
    let f = l === "x" ? o === (a ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
    return i.reference[c] > i.floating[c] && (f = rl(f)), [f, rl(f)]
}

function K2(e) {
    const i = rl(e);
    return [Lf(e), i, Lf(i)]
}

function Lf(e) {
    return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
}
const Hy = ["left", "right"],
    qy = ["right", "left"],
    Q2 = ["top", "bottom"],
    F2 = ["bottom", "top"];

function Z2(e, i, a) {
    switch (e) {
        case "top":
        case "bottom":
            return a ? i ? qy : Hy : i ? Hy : qy;
        case "left":
        case "right":
            return i ? Q2 : F2;
        default:
            return []
    }
}

function W2(e, i, a, o) {
    const l = Fs(e);
    let c = Z2(kn(e), a === "start", o);
    return l && (c = c.map(f => f + "-" + l), i && (c = c.concat(c.map(Lf)))), c
}

function rl(e) {
    const i = kn(e);
    return Y2[i] + e.slice(i.length)
}

function J2(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function Nb(e) {
    return typeof e != "number" ? J2(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function ol(e) {
    const {
        x: i,
        y: a,
        width: o,
        height: l
    } = e;
    return {
        width: o,
        height: l,
        top: a,
        left: i,
        right: i + o,
        bottom: a + l,
        x: i,
        y: a
    }
}

function Gy(e, i, a) {
    let {
        reference: o,
        floating: l
    } = e;
    const c = pn(i),
        f = Ed(i),
        h = wd(f),
        p = kn(i),
        m = c === "y",
        g = o.x + o.width / 2 - l.width / 2,
        v = o.y + o.height / 2 - l.height / 2,
        b = o[h] / 2 - l[h] / 2;
    let T;
    switch (p) {
        case "top":
            T = {
                x: g,
                y: o.y - l.height
            };
            break;
        case "bottom":
            T = {
                x: g,
                y: o.y + o.height
            };
            break;
        case "right":
            T = {
                x: o.x + o.width,
                y: v
            };
            break;
        case "left":
            T = {
                x: o.x - l.width,
                y: v
            };
            break;
        default:
            T = {
                x: o.x,
                y: o.y
            }
    }
    switch (Fs(i)) {
        case "start":
            T[f] -= b * (a && m ? -1 : 1);
            break;
        case "end":
            T[f] += b * (a && m ? -1 : 1);
            break
    }
    return T
}
async function I2(e, i) {
    var a;
    i === void 0 && (i = {});
    const {
        x: o,
        y: l,
        platform: c,
        rects: f,
        elements: h,
        strategy: p
    } = e, {
        boundary: m = "clippingAncestors",
        rootBoundary: g = "viewport",
        elementContext: v = "floating",
        altBoundary: b = !1,
        padding: T = 0
    } = Ln(i, e), A = Nb(T), M = h[b ? v === "floating" ? "reference" : "floating" : v], O = ol(await c.getClippingRect({
        element: (a = await (c.isElement == null ? void 0 : c.isElement(M))) == null || a ? M : M.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(h.floating)),
        boundary: m,
        rootBoundary: g,
        strategy: p
    })), _ = v === "floating" ? {
        x: o,
        y: l,
        width: f.floating.width,
        height: f.floating.height
    } : f.reference, j = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(h.floating)), k = await (c.isElement == null ? void 0 : c.isElement(j)) ? await (c.getScale == null ? void 0 : c.getScale(j)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, P = ol(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: h,
        rect: _,
        offsetParent: j,
        strategy: p
    }) : _);
    return {
        top: (O.top - P.top + A.top) / k.y,
        bottom: (P.bottom - O.bottom + A.bottom) / k.y,
        left: (O.left - P.left + A.left) / k.x,
        right: (P.right - O.right + A.right) / k.x
    }
}
const $2 = 50,
    tC = async (e, i, a) => {
        const {
            placement: o = "bottom",
            strategy: l = "absolute",
            middleware: c = [],
            platform: f
        } = a, h = f.detectOverflow ? f : {
            ...f,
            detectOverflow: I2
        }, p = await (f.isRTL == null ? void 0 : f.isRTL(i));
        let m = await f.getElementRects({
                reference: e,
                floating: i,
                strategy: l
            }),
            {
                x: g,
                y: v
            } = Gy(m, o, p),
            b = o,
            T = 0;
        const A = {};
        for (let C = 0; C < c.length; C++) {
            const M = c[C];
            if (!M) continue;
            const {
                name: O,
                fn: _
            } = M, {
                x: j,
                y: k,
                data: P,
                reset: Q
            } = await _({
                x: g,
                y: v,
                initialPlacement: o,
                placement: b,
                strategy: l,
                middlewareData: A,
                rects: m,
                platform: h,
                elements: {
                    reference: e,
                    floating: i
                }
            });
            g = j ?? g, v = k ?? v, A[O] = {
                ...A[O],
                ...P
            }, Q && T < $2 && (T++, typeof Q == "object" && (Q.placement && (b = Q.placement), Q.rects && (m = Q.rects === !0 ? await f.getElementRects({
                reference: e,
                floating: i,
                strategy: l
            }) : Q.rects), {
                x: g,
                y: v
            } = Gy(m, b, p)), C = -1)
        }
        return {
            x: g,
            y: v,
            placement: b,
            strategy: l,
            middlewareData: A
        }
    }, eC = e => ({
        name: "arrow",
        options: e,
        async fn(i) {
            const {
                x: a,
                y: o,
                placement: l,
                rects: c,
                platform: f,
                elements: h,
                middlewareData: p
            } = i, {
                element: m,
                padding: g = 0
            } = Ln(e, i) || {};
            if (m == null) return {};
            const v = Nb(g),
                b = {
                    x: a,
                    y: o
                },
                T = Ed(l),
                A = wd(T),
                C = await f.getDimensions(m),
                M = T === "y",
                O = M ? "top" : "left",
                _ = M ? "bottom" : "right",
                j = M ? "clientHeight" : "clientWidth",
                k = c.reference[A] + c.reference[T] - b[T] - c.floating[A],
                P = b[T] - c.reference[T],
                Q = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m));
            let Z = Q ? Q[j] : 0;
            (!Z || !await (f.isElement == null ? void 0 : f.isElement(Q))) && (Z = h.floating[j] || c.floating[A]);
            const H = k / 2 - P / 2,
                W = Z / 2 - C[A] / 2 - 1,
                ot = bi(v[O], W),
                pt = bi(v[_], W),
                ut = ot,
                bt = Z - C[A] - pt,
                $ = Z / 2 - C[A] / 2 + H,
                ft = zf(ut, $, bt),
                V = !p.arrow && Fs(l) != null && $ !== ft && c.reference[A] / 2 - ($ < ut ? ot : pt) - C[A] / 2 < 0,
                F = V ? $ < ut ? $ - ut : $ - bt : 0;
            return {
                [T]: b[T] + F,
                data: {
                    [T]: ft,
                    centerOffset: $ - ft - F,
                    ...V && {
                        alignmentOffset: F
                    }
                },
                reset: V
            }
        }
    }), nC = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(i) {
                var a, o;
                const {
                    placement: l,
                    middlewareData: c,
                    rects: f,
                    initialPlacement: h,
                    platform: p,
                    elements: m
                } = i, {
                    mainAxis: g = !0,
                    crossAxis: v = !0,
                    fallbackPlacements: b,
                    fallbackStrategy: T = "bestFit",
                    fallbackAxisSideDirection: A = "none",
                    flipAlignment: C = !0,
                    ...M
                } = Ln(e, i);
                if ((a = c.arrow) != null && a.alignmentOffset) return {};
                const O = kn(l),
                    _ = pn(h),
                    j = kn(h) === h,
                    k = await (p.isRTL == null ? void 0 : p.isRTL(m.floating)),
                    P = b || (j || !C ? [rl(h)] : K2(h)),
                    Q = A !== "none";
                !b && Q && P.push(...W2(h, C, A, k));
                const Z = [h, ...P],
                    H = await p.detectOverflow(i, M),
                    W = [];
                let ot = ((o = c.flip) == null ? void 0 : o.overflows) || [];
                if (g && W.push(H[O]), v) {
                    const $ = X2(l, f, k);
                    W.push(H[$[0]], H[$[1]])
                }
                if (ot = [...ot, {
                        placement: l,
                        overflows: W
                    }], !W.every($ => $ <= 0)) {
                    var pt, ut;
                    const $ = (((pt = c.flip) == null ? void 0 : pt.index) || 0) + 1,
                        ft = Z[$];
                    if (ft && (!(v === "alignment" ? _ !== pn(ft) : !1) || ot.every(X => pn(X.placement) === _ ? X.overflows[0] > 0 : !0))) return {
                        data: {
                            index: $,
                            overflows: ot
                        },
                        reset: {
                            placement: ft
                        }
                    };
                    let V = (ut = ot.filter(F => F.overflows[0] <= 0).sort((F, X) => F.overflows[1] - X.overflows[1])[0]) == null ? void 0 : ut.placement;
                    if (!V) switch (T) {
                        case "bestFit": {
                            var bt;
                            const F = (bt = ot.filter(X => {
                                if (Q) {
                                    const tt = pn(X.placement);
                                    return tt === _ || tt === "y"
                                }
                                return !0
                            }).map(X => [X.placement, X.overflows.filter(tt => tt > 0).reduce((tt, w) => tt + w, 0)]).sort((X, tt) => X[1] - tt[1])[0]) == null ? void 0 : bt[0];
                            F && (V = F);
                            break
                        }
                        case "initialPlacement":
                            V = h;
                            break
                    }
                    if (l !== V) return {
                        reset: {
                            placement: V
                        }
                    }
                }
                return {}
            }
        }
    };

function Yy(e, i) {
    return {
        top: e.top - i.height,
        right: e.right - i.width,
        bottom: e.bottom - i.height,
        left: e.left - i.width
    }
}

function Xy(e) {
    return G2.some(i => e[i] >= 0)
}
const iC = function(e) {
        return e === void 0 && (e = {}), {
            name: "hide",
            options: e,
            async fn(i) {
                const {
                    rects: a,
                    platform: o
                } = i, {
                    strategy: l = "referenceHidden",
                    ...c
                } = Ln(e, i);
                switch (l) {
                    case "referenceHidden": {
                        const f = await o.detectOverflow(i, {
                                ...c,
                                elementContext: "reference"
                            }),
                            h = Yy(f, a.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: h,
                                referenceHidden: Xy(h)
                            }
                        }
                    }
                    case "escaped": {
                        const f = await o.detectOverflow(i, {
                                ...c,
                                altBoundary: !0
                            }),
                            h = Yy(f, a.floating);
                        return {
                            data: {
                                escapedOffsets: h,
                                escaped: Xy(h)
                            }
                        }
                    }
                    default:
                        return {}
                }
            }
        }
    },
    jb = new Set(["left", "top"]);
async function sC(e, i) {
    const {
        placement: a,
        platform: o,
        elements: l
    } = e, c = await (o.isRTL == null ? void 0 : o.isRTL(l.floating)), f = kn(a), h = Fs(a), p = pn(a) === "y", m = jb.has(f) ? -1 : 1, g = c && p ? -1 : 1, v = Ln(i, e);
    let {
        mainAxis: b,
        crossAxis: T,
        alignmentAxis: A
    } = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: v.mainAxis || 0,
        crossAxis: v.crossAxis || 0,
        alignmentAxis: v.alignmentAxis
    };
    return h && typeof A == "number" && (T = h === "end" ? A * -1 : A), p ? {
        x: T * g,
        y: b * m
    } : {
        x: b * m,
        y: T * g
    }
}
const aC = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(i) {
                var a, o;
                const {
                    x: l,
                    y: c,
                    placement: f,
                    middlewareData: h
                } = i, p = await sC(i, e);
                return f === ((a = h.offset) == null ? void 0 : a.placement) && (o = h.arrow) != null && o.alignmentOffset ? {} : {
                    x: l + p.x,
                    y: c + p.y,
                    data: {
                        ...p,
                        placement: f
                    }
                }
            }
        }
    },
    rC = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(i) {
                const {
                    x: a,
                    y: o,
                    placement: l,
                    platform: c
                } = i, {
                    mainAxis: f = !0,
                    crossAxis: h = !1,
                    limiter: p = {
                        fn: O => {
                            let {
                                x: _,
                                y: j
                            } = O;
                            return {
                                x: _,
                                y: j
                            }
                        }
                    },
                    ...m
                } = Ln(e, i), g = {
                    x: a,
                    y: o
                }, v = await c.detectOverflow(i, m), b = pn(kn(l)), T = Td(b);
                let A = g[T],
                    C = g[b];
                if (f) {
                    const O = T === "y" ? "top" : "left",
                        _ = T === "y" ? "bottom" : "right",
                        j = A + v[O],
                        k = A - v[_];
                    A = zf(j, A, k)
                }
                if (h) {
                    const O = b === "y" ? "top" : "left",
                        _ = b === "y" ? "bottom" : "right",
                        j = C + v[O],
                        k = C - v[_];
                    C = zf(j, C, k)
                }
                const M = p.fn({
                    ...i,
                    [T]: A,
                    [b]: C
                });
                return {
                    ...M,
                    data: {
                        x: M.x - a,
                        y: M.y - o,
                        enabled: {
                            [T]: f,
                            [b]: h
                        }
                    }
                }
            }
        }
    },
    oC = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(i) {
                const {
                    x: a,
                    y: o,
                    placement: l,
                    rects: c,
                    middlewareData: f
                } = i, {
                    offset: h = 0,
                    mainAxis: p = !0,
                    crossAxis: m = !0
                } = Ln(e, i), g = {
                    x: a,
                    y: o
                }, v = pn(l), b = Td(v);
                let T = g[b],
                    A = g[v];
                const C = Ln(h, i),
                    M = typeof C == "number" ? {
                        mainAxis: C,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...C
                    };
                if (p) {
                    const j = b === "y" ? "height" : "width",
                        k = c.reference[b] - c.floating[j] + M.mainAxis,
                        P = c.reference[b] + c.reference[j] - M.mainAxis;
                    T < k ? T = k : T > P && (T = P)
                }
                if (m) {
                    var O, _;
                    const j = b === "y" ? "width" : "height",
                        k = jb.has(kn(l)),
                        P = c.reference[v] - c.floating[j] + (k && ((O = f.offset) == null ? void 0 : O[v]) || 0) + (k ? 0 : M.crossAxis),
                        Q = c.reference[v] + c.reference[j] + (k ? 0 : ((_ = f.offset) == null ? void 0 : _[v]) || 0) - (k ? M.crossAxis : 0);
                    A < P ? A = P : A > Q && (A = Q)
                }
                return {
                    [b]: T,
                    [v]: A
                }
            }
        }
    },
    lC = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(i) {
                var a, o;
                const {
                    placement: l,
                    rects: c,
                    platform: f,
                    elements: h
                } = i, {
                    apply: p = () => {},
                    ...m
                } = Ln(e, i), g = await f.detectOverflow(i, m), v = kn(l), b = Fs(l), T = pn(l) === "y", {
                    width: A,
                    height: C
                } = c.floating;
                let M, O;
                v === "top" || v === "bottom" ? (M = v, O = b === (await (f.isRTL == null ? void 0 : f.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (O = v, M = b === "end" ? "top" : "bottom");
                const _ = C - g.top - g.bottom,
                    j = A - g.left - g.right,
                    k = bi(C - g[M], _),
                    P = bi(A - g[O], j),
                    Q = !i.middlewareData.shift;
                let Z = k,
                    H = P;
                if ((a = i.middlewareData.shift) != null && a.enabled.x && (H = j), (o = i.middlewareData.shift) != null && o.enabled.y && (Z = _), Q && !b) {
                    const ot = _e(g.left, 0),
                        pt = _e(g.right, 0),
                        ut = _e(g.top, 0),
                        bt = _e(g.bottom, 0);
                    T ? H = A - 2 * (ot !== 0 || pt !== 0 ? ot + pt : _e(g.left, g.right)) : Z = C - 2 * (ut !== 0 || bt !== 0 ? ut + bt : _e(g.top, g.bottom))
                }
                await p({
                    ...i,
                    availableWidth: H,
                    availableHeight: Z
                });
                const W = await f.getDimensions(h.floating);
                return A !== W.width || C !== W.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Cl() {
    return typeof window < "u"
}

function Zs(e) {
    return _b(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function Ve(e) {
    var i;
    return (e == null || (i = e.ownerDocument) == null ? void 0 : i.defaultView) || window
}

function bn(e) {
    var i;
    return (i = (_b(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : i.documentElement
}

function _b(e) {
    return Cl() ? e instanceof Node || e instanceof Ve(e).Node : !1
}

function sn(e) {
    return Cl() ? e instanceof Element || e instanceof Ve(e).Element : !1
}

function Un(e) {
    return Cl() ? e instanceof HTMLElement || e instanceof Ve(e).HTMLElement : !1
}

function Ky(e) {
    return !Cl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ve(e).ShadowRoot
}

function gr(e) {
    const {
        overflow: i,
        overflowX: a,
        overflowY: o,
        display: l
    } = an(e);
    return /auto|scroll|overlay|hidden|clip/.test(i + o + a) && l !== "inline" && l !== "contents"
}

function uC(e) {
    return /^(table|td|th)$/.test(Zs(e))
}

function Rl(e) {
    try {
        if (e.matches(":popover-open")) return !0
    } catch {}
    try {
        return e.matches(":modal")
    } catch {
        return !1
    }
}
const cC = /transform|translate|scale|rotate|perspective|filter/,
    fC = /paint|layout|strict|content/,
    Gi = e => !!e && e !== "none";
let af;

function Ad(e) {
    const i = sn(e) ? an(e) : e;
    return Gi(i.transform) || Gi(i.translate) || Gi(i.scale) || Gi(i.rotate) || Gi(i.perspective) || !Cd() && (Gi(i.backdropFilter) || Gi(i.filter)) || cC.test(i.willChange || "") || fC.test(i.contain || "")
}

function dC(e) {
    let i = xi(e);
    for (; Un(i) && !Xs(i);) {
        if (Ad(i)) return i;
        if (Rl(i)) return null;
        i = xi(i)
    }
    return null
}

function Cd() {
    return af == null && (af = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), af
}

function Xs(e) {
    return /^(html|body|#document)$/.test(Zs(e))
}

function an(e) {
    return Ve(e).getComputedStyle(e)
}

function Ml(e) {
    return sn(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function xi(e) {
    if (Zs(e) === "html") return e;
    const i = e.assignedSlot || e.parentNode || Ky(e) && e.host || bn(e);
    return Ky(i) ? i.host : i
}

function Vb(e) {
    const i = xi(e);
    return Xs(i) ? e.ownerDocument ? e.ownerDocument.body : e.body : Un(i) && gr(i) ? i : Vb(i)
}

function ur(e, i, a) {
    var o;
    i === void 0 && (i = []), a === void 0 && (a = !0);
    const l = Vb(e),
        c = l === ((o = e.ownerDocument) == null ? void 0 : o.body),
        f = Ve(l);
    if (c) {
        const h = kf(f);
        return i.concat(f, f.visualViewport || [], gr(l) ? l : [], h && a ? ur(h) : [])
    } else return i.concat(l, ur(l, [], a))
}

function kf(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function zb(e) {
    const i = an(e);
    let a = parseFloat(i.width) || 0,
        o = parseFloat(i.height) || 0;
    const l = Un(e),
        c = l ? e.offsetWidth : a,
        f = l ? e.offsetHeight : o,
        h = al(a) !== c || al(o) !== f;
    return h && (a = c, o = f), {
        width: a,
        height: o,
        $: h
    }
}

function Rd(e) {
    return sn(e) ? e : e.contextElement
}

function Gs(e) {
    const i = Rd(e);
    if (!Un(i)) return gn(1);
    const a = i.getBoundingClientRect(),
        {
            width: o,
            height: l,
            $: c
        } = zb(i);
    let f = (c ? al(a.width) : a.width) / o,
        h = (c ? al(a.height) : a.height) / l;
    return (!f || !Number.isFinite(f)) && (f = 1), (!h || !Number.isFinite(h)) && (h = 1), {
        x: f,
        y: h
    }
}
const hC = gn(0);

function Lb(e) {
    const i = Ve(e);
    return !Cd() || !i.visualViewport ? hC : {
        x: i.visualViewport.offsetLeft,
        y: i.visualViewport.offsetTop
    }
}

function mC(e, i, a) {
    return i === void 0 && (i = !1), !a || i && a !== Ve(e) ? !1 : i
}

function Zi(e, i, a, o) {
    i === void 0 && (i = !1), a === void 0 && (a = !1);
    const l = e.getBoundingClientRect(),
        c = Rd(e);
    let f = gn(1);
    i && (o ? sn(o) && (f = Gs(o)) : f = Gs(e));
    const h = mC(c, a, o) ? Lb(c) : gn(0);
    let p = (l.left + h.x) / f.x,
        m = (l.top + h.y) / f.y,
        g = l.width / f.x,
        v = l.height / f.y;
    if (c) {
        const b = Ve(c),
            T = o && sn(o) ? Ve(o) : o;
        let A = b,
            C = kf(A);
        for (; C && o && T !== A;) {
            const M = Gs(C),
                O = C.getBoundingClientRect(),
                _ = an(C),
                j = O.left + (C.clientLeft + parseFloat(_.paddingLeft)) * M.x,
                k = O.top + (C.clientTop + parseFloat(_.paddingTop)) * M.y;
            p *= M.x, m *= M.y, g *= M.x, v *= M.y, p += j, m += k, A = Ve(C), C = kf(A)
        }
    }
    return ol({
        width: g,
        height: v,
        x: p,
        y: m
    })
}

function Dl(e, i) {
    const a = Ml(e).scrollLeft;
    return i ? i.left + a : Zi(bn(e)).left + a
}

function kb(e, i) {
    const a = e.getBoundingClientRect(),
        o = a.left + i.scrollLeft - Dl(e, a),
        l = a.top + i.scrollTop;
    return {
        x: o,
        y: l
    }
}

function pC(e) {
    let {
        elements: i,
        rect: a,
        offsetParent: o,
        strategy: l
    } = e;
    const c = l === "fixed",
        f = bn(o),
        h = i ? Rl(i.floating) : !1;
    if (o === f || h && c) return a;
    let p = {
            scrollLeft: 0,
            scrollTop: 0
        },
        m = gn(1);
    const g = gn(0),
        v = Un(o);
    if ((v || !v && !c) && ((Zs(o) !== "body" || gr(f)) && (p = Ml(o)), v)) {
        const T = Zi(o);
        m = Gs(o), g.x = T.x + o.clientLeft, g.y = T.y + o.clientTop
    }
    const b = f && !v && !c ? kb(f, p) : gn(0);
    return {
        width: a.width * m.x,
        height: a.height * m.y,
        x: a.x * m.x - p.scrollLeft * m.x + g.x + b.x,
        y: a.y * m.y - p.scrollTop * m.y + g.y + b.y
    }
}

function gC(e) {
    return Array.from(e.getClientRects())
}

function yC(e) {
    const i = bn(e),
        a = Ml(e),
        o = e.ownerDocument.body,
        l = _e(i.scrollWidth, i.clientWidth, o.scrollWidth, o.clientWidth),
        c = _e(i.scrollHeight, i.clientHeight, o.scrollHeight, o.clientHeight);
    let f = -a.scrollLeft + Dl(e);
    const h = -a.scrollTop;
    return an(o).direction === "rtl" && (f += _e(i.clientWidth, o.clientWidth) - l), {
        width: l,
        height: c,
        x: f,
        y: h
    }
}
const Qy = 25;

function vC(e, i) {
    const a = Ve(e),
        o = bn(e),
        l = a.visualViewport;
    let c = o.clientWidth,
        f = o.clientHeight,
        h = 0,
        p = 0;
    if (l) {
        c = l.width, f = l.height;
        const g = Cd();
        (!g || g && i === "fixed") && (h = l.offsetLeft, p = l.offsetTop)
    }
    const m = Dl(o);
    if (m <= 0) {
        const g = o.ownerDocument,
            v = g.body,
            b = getComputedStyle(v),
            T = g.compatMode === "CSS1Compat" && parseFloat(b.marginLeft) + parseFloat(b.marginRight) || 0,
            A = Math.abs(o.clientWidth - v.clientWidth - T);
        A <= Qy && (c -= A)
    } else m <= Qy && (c += m);
    return {
        width: c,
        height: f,
        x: h,
        y: p
    }
}

function bC(e, i) {
    const a = Zi(e, !0, i === "fixed"),
        o = a.top + e.clientTop,
        l = a.left + e.clientLeft,
        c = Un(e) ? Gs(e) : gn(1),
        f = e.clientWidth * c.x,
        h = e.clientHeight * c.y,
        p = l * c.x,
        m = o * c.y;
    return {
        width: f,
        height: h,
        x: p,
        y: m
    }
}

function Fy(e, i, a) {
    let o;
    if (i === "viewport") o = vC(e, a);
    else if (i === "document") o = yC(bn(e));
    else if (sn(i)) o = bC(i, a);
    else {
        const l = Lb(e);
        o = {
            x: i.x - l.x,
            y: i.y - l.y,
            width: i.width,
            height: i.height
        }
    }
    return ol(o)
}

function Pb(e, i) {
    const a = xi(e);
    return a === i || !sn(a) || Xs(a) ? !1 : an(a).position === "fixed" || Pb(a, i)
}

function xC(e, i) {
    const a = i.get(e);
    if (a) return a;
    let o = ur(e, [], !1).filter(h => sn(h) && Zs(h) !== "body"),
        l = null;
    const c = an(e).position === "fixed";
    let f = c ? xi(e) : e;
    for (; sn(f) && !Xs(f);) {
        const h = an(f),
            p = Ad(f);
        !p && h.position === "fixed" && (l = null), (c ? !p && !l : !p && h.position === "static" && !!l && (l.position === "absolute" || l.position === "fixed") || gr(f) && !p && Pb(e, f)) ? o = o.filter(g => g !== f) : l = h, f = xi(f)
    }
    return i.set(e, o), o
}

function SC(e) {
    let {
        element: i,
        boundary: a,
        rootBoundary: o,
        strategy: l
    } = e;
    const f = [...a === "clippingAncestors" ? Rl(i) ? [] : xC(i, this._c) : [].concat(a), o],
        h = Fy(i, f[0], l);
    let p = h.top,
        m = h.right,
        g = h.bottom,
        v = h.left;
    for (let b = 1; b < f.length; b++) {
        const T = Fy(i, f[b], l);
        p = _e(T.top, p), m = bi(T.right, m), g = bi(T.bottom, g), v = _e(T.left, v)
    }
    return {
        width: m - v,
        height: g - p,
        x: v,
        y: p
    }
}

function TC(e) {
    const {
        width: i,
        height: a
    } = zb(e);
    return {
        width: i,
        height: a
    }
}

function wC(e, i, a) {
    const o = Un(i),
        l = bn(i),
        c = a === "fixed",
        f = Zi(e, !0, c, i);
    let h = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const p = gn(0);

    function m() {
        p.x = Dl(l)
    }
    if (o || !o && !c)
        if ((Zs(i) !== "body" || gr(l)) && (h = Ml(i)), o) {
            const T = Zi(i, !0, c, i);
            p.x = T.x + i.clientLeft, p.y = T.y + i.clientTop
        } else l && m();
    c && !o && l && m();
    const g = l && !o && !c ? kb(l, h) : gn(0),
        v = f.left + h.scrollLeft - p.x - g.x,
        b = f.top + h.scrollTop - p.y - g.y;
    return {
        x: v,
        y: b,
        width: f.width,
        height: f.height
    }
}

function rf(e) {
    return an(e).position === "static"
}

function Zy(e, i) {
    if (!Un(e) || an(e).position === "fixed") return null;
    if (i) return i(e);
    let a = e.offsetParent;
    return bn(e) === a && (a = a.ownerDocument.body), a
}

function Ub(e, i) {
    const a = Ve(e);
    if (Rl(e)) return a;
    if (!Un(e)) {
        let l = xi(e);
        for (; l && !Xs(l);) {
            if (sn(l) && !rf(l)) return l;
            l = xi(l)
        }
        return a
    }
    let o = Zy(e, i);
    for (; o && uC(o) && rf(o);) o = Zy(o, i);
    return o && Xs(o) && rf(o) && !Ad(o) ? a : o || dC(e) || a
}
const EC = async function(e) {
    const i = this.getOffsetParent || Ub,
        a = this.getDimensions,
        o = await a(e.floating);
    return {
        reference: wC(e.reference, await i(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: o.width,
            height: o.height
        }
    }
};

function AC(e) {
    return an(e).direction === "rtl"
}
const CC = {
    convertOffsetParentRelativeRectToViewportRelativeRect: pC,
    getDocumentElement: bn,
    getClippingRect: SC,
    getOffsetParent: Ub,
    getElementRects: EC,
    getClientRects: gC,
    getDimensions: TC,
    getScale: Gs,
    isElement: sn,
    isRTL: AC
};

function Bb(e, i) {
    return e.x === i.x && e.y === i.y && e.width === i.width && e.height === i.height
}

function RC(e, i) {
    let a = null,
        o;
    const l = bn(e);

    function c() {
        var h;
        clearTimeout(o), (h = a) == null || h.disconnect(), a = null
    }

    function f(h, p) {
        h === void 0 && (h = !1), p === void 0 && (p = 1), c();
        const m = e.getBoundingClientRect(),
            {
                left: g,
                top: v,
                width: b,
                height: T
            } = m;
        if (h || i(), !b || !T) return;
        const A = qo(v),
            C = qo(l.clientWidth - (g + b)),
            M = qo(l.clientHeight - (v + T)),
            O = qo(g),
            j = {
                rootMargin: -A + "px " + -C + "px " + -M + "px " + -O + "px",
                threshold: _e(0, bi(1, p)) || 1
            };
        let k = !0;

        function P(Q) {
            const Z = Q[0].intersectionRatio;
            if (Z !== p) {
                if (!k) return f();
                Z ? f(!1, Z) : o = setTimeout(() => {
                    f(!1, 1e-7)
                }, 1e3)
            }
            Z === 1 && !Bb(m, e.getBoundingClientRect()) && f(), k = !1
        }
        try {
            a = new IntersectionObserver(P, {
                ...j,
                root: l.ownerDocument
            })
        } catch {
            a = new IntersectionObserver(P, j)
        }
        a.observe(e)
    }
    return f(!0), c
}

function MC(e, i, a, o) {
    o === void 0 && (o = {});
    const {
        ancestorScroll: l = !0,
        ancestorResize: c = !0,
        elementResize: f = typeof ResizeObserver == "function",
        layoutShift: h = typeof IntersectionObserver == "function",
        animationFrame: p = !1
    } = o, m = Rd(e), g = l || c ? [...m ? ur(m) : [], ...i ? ur(i) : []] : [];
    g.forEach(O => {
        l && O.addEventListener("scroll", a, {
            passive: !0
        }), c && O.addEventListener("resize", a)
    });
    const v = m && h ? RC(m, a) : null;
    let b = -1,
        T = null;
    f && (T = new ResizeObserver(O => {
        let [_] = O;
        _ && _.target === m && T && i && (T.unobserve(i), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
            var j;
            (j = T) == null || j.observe(i)
        })), a()
    }), m && !p && T.observe(m), i && T.observe(i));
    let A, C = p ? Zi(e) : null;
    p && M();

    function M() {
        const O = Zi(e);
        C && !Bb(C, O) && a(), C = O, A = requestAnimationFrame(M)
    }
    return a(), () => {
        var O;
        g.forEach(_ => {
            l && _.removeEventListener("scroll", a), c && _.removeEventListener("resize", a)
        }), v?.(), (O = T) == null || O.disconnect(), T = null, p && cancelAnimationFrame(A)
    }
}
const DC = aC,
    OC = rC,
    NC = nC,
    jC = lC,
    _C = iC,
    Wy = eC,
    VC = oC,
    zC = (e, i, a) => {
        const o = new Map,
            l = {
                platform: CC,
                ...a
            },
            c = {
                ...l.platform,
                _c: o
            };
        return tC(e, i, {
            ...l,
            platform: c
        })
    };
var LC = typeof document < "u",
    kC = function() {},
    Zo = LC ? E.useLayoutEffect : kC;

function ll(e, i) {
    if (e === i) return !0;
    if (typeof e != typeof i) return !1;
    if (typeof e == "function" && e.toString() === i.toString()) return !0;
    let a, o, l;
    if (e && i && typeof e == "object") {
        if (Array.isArray(e)) {
            if (a = e.length, a !== i.length) return !1;
            for (o = a; o-- !== 0;)
                if (!ll(e[o], i[o])) return !1;
            return !0
        }
        if (l = Object.keys(e), a = l.length, a !== Object.keys(i).length) return !1;
        for (o = a; o-- !== 0;)
            if (!{}.hasOwnProperty.call(i, l[o])) return !1;
        for (o = a; o-- !== 0;) {
            const c = l[o];
            if (!(c === "_owner" && e.$$typeof) && !ll(e[c], i[c])) return !1
        }
        return !0
    }
    return e !== e && i !== i
}

function Hb(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Jy(e, i) {
    const a = Hb(e);
    return Math.round(i * a) / a
}

function of(e) {
    const i = E.useRef(e);
    return Zo(() => {
        i.current = e
    }), i
}

function PC(e) {
    e === void 0 && (e = {});
    const {
        placement: i = "bottom",
        strategy: a = "absolute",
        middleware: o = [],
        platform: l,
        elements: {
            reference: c,
            floating: f
        } = {},
        transform: h = !0,
        whileElementsMounted: p,
        open: m
    } = e, [g, v] = E.useState({
        x: 0,
        y: 0,
        strategy: a,
        placement: i,
        middlewareData: {},
        isPositioned: !1
    }), [b, T] = E.useState(o);
    ll(b, o) || T(o);
    const [A, C] = E.useState(null), [M, O] = E.useState(null), _ = E.useCallback(X => {
        X !== Q.current && (Q.current = X, C(X))
    }, []), j = E.useCallback(X => {
        X !== Z.current && (Z.current = X, O(X))
    }, []), k = c || A, P = f || M, Q = E.useRef(null), Z = E.useRef(null), H = E.useRef(g), W = p != null, ot = of(p), pt = of(l), ut = of(m), bt = E.useCallback(() => {
        if (!Q.current || !Z.current) return;
        const X = {
            placement: i,
            strategy: a,
            middleware: b
        };
        pt.current && (X.platform = pt.current), zC(Q.current, Z.current, X).then(tt => {
            const w = {
                ...tt,
                isPositioned: ut.current !== !1
            };
            $.current && !ll(H.current, w) && (H.current = w, Sl.flushSync(() => {
                v(w)
            }))
        })
    }, [b, i, a, pt, ut]);
    Zo(() => {
        m === !1 && H.current.isPositioned && (H.current.isPositioned = !1, v(X => ({
            ...X,
            isPositioned: !1
        })))
    }, [m]);
    const $ = E.useRef(!1);
    Zo(() => ($.current = !0, () => {
        $.current = !1
    }), []), Zo(() => {
        if (k && (Q.current = k), P && (Z.current = P), k && P) {
            if (ot.current) return ot.current(k, P, bt);
            bt()
        }
    }, [k, P, bt, ot, W]);
    const ft = E.useMemo(() => ({
            reference: Q,
            floating: Z,
            setReference: _,
            setFloating: j
        }), [_, j]),
        V = E.useMemo(() => ({
            reference: k,
            floating: P
        }), [k, P]),
        F = E.useMemo(() => {
            const X = {
                position: a,
                left: 0,
                top: 0
            };
            if (!V.floating) return X;
            const tt = Jy(V.floating, g.x),
                w = Jy(V.floating, g.y);
            return h ? {
                ...X,
                transform: "translate(" + tt + "px, " + w + "px)",
                ...Hb(V.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: a,
                left: tt,
                top: w
            }
        }, [a, h, V.floating, g.x, g.y]);
    return E.useMemo(() => ({
        ...g,
        update: bt,
        refs: ft,
        elements: V,
        floatingStyles: F
    }), [g, bt, ft, V, F])
}
const UC = e => {
        function i(a) {
            return {}.hasOwnProperty.call(a, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(a) {
                const {
                    element: o,
                    padding: l
                } = typeof e == "function" ? e(a) : e;
                return o && i(o) ? o.current != null ? Wy({
                    element: o.current,
                    padding: l
                }).fn(a) : {} : o ? Wy({
                    element: o,
                    padding: l
                }).fn(a) : {}
            }
        }
    },
    BC = (e, i) => {
        const a = DC(e);
        return {
            name: a.name,
            fn: a.fn,
            options: [e, i]
        }
    },
    HC = (e, i) => {
        const a = OC(e);
        return {
            name: a.name,
            fn: a.fn,
            options: [e, i]
        }
    },
    qC = (e, i) => ({
        fn: VC(e).fn,
        options: [e, i]
    }),
    GC = (e, i) => {
        const a = NC(e);
        return {
            name: a.name,
            fn: a.fn,
            options: [e, i]
        }
    },
    YC = (e, i) => {
        const a = jC(e);
        return {
            name: a.name,
            fn: a.fn,
            options: [e, i]
        }
    },
    XC = (e, i) => {
        const a = _C(e);
        return {
            name: a.name,
            fn: a.fn,
            options: [e, i]
        }
    },
    KC = (e, i) => {
        const a = UC(e);
        return {
            name: a.name,
            fn: a.fn,
            options: [e, i]
        }
    };
var QC = "Arrow",
    qb = E.forwardRef((e, i) => {
        const {
            children: a,
            width: o = 10,
            height: l = 5,
            ...c
        } = e;
        return S.jsx(Te.svg, {
            ...c,
            ref: i,
            width: o,
            height: l,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? a : S.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
qb.displayName = QC;
var FC = qb;

function ZC(e) {
    const [i, a] = E.useState(void 0);
    return vi(() => {
        if (e) {
            a({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const o = new ResizeObserver(l => {
                if (!Array.isArray(l) || !l.length) return;
                const c = l[0];
                let f, h;
                if ("borderBoxSize" in c) {
                    const p = c.borderBoxSize,
                        m = Array.isArray(p) ? p[0] : p;
                    f = m.inlineSize, h = m.blockSize
                } else f = e.offsetWidth, h = e.offsetHeight;
                a({
                    width: f,
                    height: h
                })
            });
            return o.observe(e, {
                box: "border-box"
            }), () => o.unobserve(e)
        } else a(void 0)
    }, [e]), i
}
var Gb = "Popper",
    [Yb, Xb] = Tl(Gb),
    [O3, Kb] = Yb(Gb),
    Qb = "PopperAnchor",
    Fb = E.forwardRef((e, i) => {
        const {
            __scopePopper: a,
            virtualRef: o,
            ...l
        } = e, c = Kb(Qb, a), f = E.useRef(null), h = nn(i, f), p = E.useRef(null);
        return E.useEffect(() => {
            const m = p.current;
            p.current = o?.current || f.current, m !== p.current && c.onAnchorChange(p.current)
        }), o ? null : S.jsx(Te.div, {
            ...l,
            ref: h
        })
    });
Fb.displayName = Qb;
var Md = "PopperContent",
    [WC, JC] = Yb(Md),
    Zb = E.forwardRef((e, i) => {
        const {
            __scopePopper: a,
            side: o = "bottom",
            sideOffset: l = 0,
            align: c = "center",
            alignOffset: f = 0,
            arrowPadding: h = 0,
            avoidCollisions: p = !0,
            collisionBoundary: m = [],
            collisionPadding: g = 0,
            sticky: v = "partial",
            hideWhenDetached: b = !1,
            updatePositionStrategy: T = "optimized",
            onPlaced: A,
            ...C
        } = e, M = Kb(Md, a), [O, _] = E.useState(null), j = nn(i, Lt => _(Lt)), [k, P] = E.useState(null), Q = ZC(k), Z = Q?.width ?? 0, H = Q?.height ?? 0, W = o + (c !== "center" ? "-" + c : ""), ot = typeof g == "number" ? g : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...g
        }, pt = Array.isArray(m) ? m : [m], ut = pt.length > 0, bt = {
            padding: ot,
            boundary: pt.filter($C),
            altBoundary: ut
        }, {
            refs: $,
            floatingStyles: ft,
            placement: V,
            isPositioned: F,
            middlewareData: X
        } = PC({
            strategy: "fixed",
            placement: W,
            whileElementsMounted: (...Lt) => MC(...Lt, {
                animationFrame: T === "always"
            }),
            elements: {
                reference: M.anchor
            },
            middleware: [BC({
                mainAxis: l + H,
                alignmentAxis: f
            }), p && HC({
                mainAxis: !0,
                crossAxis: !1,
                limiter: v === "partial" ? qC() : void 0,
                ...bt
            }), p && GC({
                ...bt
            }), YC({
                ...bt,
                apply: ({
                    elements: Lt,
                    rects: Ct,
                    availableWidth: Rt,
                    availableHeight: Bn
                }) => {
                    const {
                        width: Qe,
                        height: on
                    } = Ct.reference, ze = Lt.floating.style;
                    ze.setProperty("--radix-popper-available-width", `${Rt}px`), ze.setProperty("--radix-popper-available-height", `${Bn}px`), ze.setProperty("--radix-popper-anchor-width", `${Qe}px`), ze.setProperty("--radix-popper-anchor-height", `${on}px`)
                }
            }), k && KC({
                element: k,
                padding: h
            }), tR({
                arrowWidth: Z,
                arrowHeight: H
            }), b && XC({
                strategy: "referenceHidden",
                ...bt
            })]
        }), [tt, w] = Ib(V), G = yi(A);
        vi(() => {
            F && G?.()
        }, [F, G]);
        const I = X.arrow?.x,
            J = X.arrow?.y,
            rt = X.arrow?.centerOffset !== 0,
            [dt, at] = E.useState();
        return vi(() => {
            O && at(window.getComputedStyle(O).zIndex)
        }, [O]), S.jsx("div", {
            ref: $.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
                ...ft,
                transform: F ? ft.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: dt,
                "--radix-popper-transform-origin": [X.transformOrigin?.x, X.transformOrigin?.y].join(" "),
                ...X.hide?.referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: S.jsx(WC, {
                scope: a,
                placedSide: tt,
                onArrowChange: P,
                arrowX: I,
                arrowY: J,
                shouldHideArrow: rt,
                children: S.jsx(Te.div, {
                    "data-side": tt,
                    "data-align": w,
                    ...C,
                    ref: j,
                    style: {
                        ...C.style,
                        animation: F ? void 0 : "none"
                    }
                })
            })
        })
    });
Zb.displayName = Md;
var Wb = "PopperArrow",
    IC = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Jb = E.forwardRef(function(i, a) {
        const {
            __scopePopper: o,
            ...l
        } = i, c = JC(Wb, o), f = IC[c.placedSide];
        return S.jsx("span", {
            ref: c.onArrowChange,
            style: {
                position: "absolute",
                left: c.arrowX,
                top: c.arrowY,
                [f]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                } [c.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                } [c.placedSide],
                visibility: c.shouldHideArrow ? "hidden" : void 0
            },
            children: S.jsx(FC, {
                ...l,
                ref: a,
                style: {
                    ...l.style,
                    display: "block"
                }
            })
        })
    });
Jb.displayName = Wb;

function $C(e) {
    return e !== null
}
var tR = e => ({
    name: "transformOrigin",
    options: e,
    fn(i) {
        const {
            placement: a,
            rects: o,
            middlewareData: l
        } = i, f = l.arrow?.centerOffset !== 0, h = f ? 0 : e.arrowWidth, p = f ? 0 : e.arrowHeight, [m, g] = Ib(a), v = {
            start: "0%",
            center: "50%",
            end: "100%"
        } [g], b = (l.arrow?.x ?? 0) + h / 2, T = (l.arrow?.y ?? 0) + p / 2;
        let A = "",
            C = "";
        return m === "bottom" ? (A = f ? v : `${b}px`, C = `${-p}px`) : m === "top" ? (A = f ? v : `${b}px`, C = `${o.floating.height+p}px`) : m === "right" ? (A = `${-p}px`, C = f ? v : `${T}px`) : m === "left" && (A = `${o.floating.width+p}px`, C = f ? v : `${T}px`), {
            data: {
                x: A,
                y: C
            }
        }
    }
});

function Ib(e) {
    const [i, a = "center"] = e.split("-");
    return [i, a]
}
var eR = Fb,
    nR = Zb,
    iR = Jb,
    [Ol] = Tl("Tooltip", [Xb]),
    Dd = Xb(),
    $b = "TooltipProvider",
    sR = 700,
    Iy = "tooltip.open",
    [aR, tx] = Ol($b),
    ex = e => {
        const {
            __scopeTooltip: i,
            delayDuration: a = sR,
            skipDelayDuration: o = 300,
            disableHoverableContent: l = !1,
            children: c
        } = e, f = E.useRef(!0), h = E.useRef(!1), p = E.useRef(0);
        return E.useEffect(() => {
            const m = p.current;
            return () => window.clearTimeout(m)
        }, []), S.jsx(aR, {
            scope: i,
            isOpenDelayedRef: f,
            delayDuration: a,
            onOpen: E.useCallback(() => {
                window.clearTimeout(p.current), f.current = !1
            }, []),
            onClose: E.useCallback(() => {
                window.clearTimeout(p.current), p.current = window.setTimeout(() => f.current = !0, o)
            }, [o]),
            isPointerInTransitRef: h,
            onPointerInTransitChange: E.useCallback(m => {
                h.current = m
            }, []),
            disableHoverableContent: l,
            children: c
        })
    };
ex.displayName = $b;
var nx = "Tooltip",
    [N3, yr] = Ol(nx),
    Pf = "TooltipTrigger",
    rR = E.forwardRef((e, i) => {
        const {
            __scopeTooltip: a,
            ...o
        } = e, l = yr(Pf, a), c = tx(Pf, a), f = Dd(a), h = E.useRef(null), p = nn(i, h, l.onTriggerChange), m = E.useRef(!1), g = E.useRef(!1), v = E.useCallback(() => m.current = !1, []);
        return E.useEffect(() => () => document.removeEventListener("pointerup", v), [v]), S.jsx(eR, {
            asChild: !0,
            ...f,
            children: S.jsx(Te.button, {
                "aria-describedby": l.open ? l.contentId : void 0,
                "data-state": l.stateAttribute,
                ...o,
                ref: p,
                onPointerMove: $t(e.onPointerMove, b => {
                    b.pointerType !== "touch" && !g.current && !c.isPointerInTransitRef.current && (l.onTriggerEnter(), g.current = !0)
                }),
                onPointerLeave: $t(e.onPointerLeave, () => {
                    l.onTriggerLeave(), g.current = !1
                }),
                onPointerDown: $t(e.onPointerDown, () => {
                    l.open && l.onClose(), m.current = !0, document.addEventListener("pointerup", v, {
                        once: !0
                    })
                }),
                onFocus: $t(e.onFocus, () => {
                    m.current || l.onOpen()
                }),
                onBlur: $t(e.onBlur, l.onClose),
                onClick: $t(e.onClick, l.onClose)
            })
        })
    });
rR.displayName = Pf;
var Od = "TooltipPortal",
    [oR, lR] = Ol(Od, {
        forceMount: void 0
    }),
    ix = e => {
        const {
            __scopeTooltip: i,
            forceMount: a,
            children: o,
            container: l
        } = e, c = yr(Od, i);
        return S.jsx(oR, {
            scope: i,
            forceMount: a,
            children: S.jsx(wl, {
                present: a || c.open,
                children: S.jsx(gd, {
                    asChild: !0,
                    container: l,
                    children: o
                })
            })
        })
    };
ix.displayName = Od;
var Ks = "TooltipContent",
    sx = E.forwardRef((e, i) => {
        const a = lR(Ks, e.__scopeTooltip),
            {
                forceMount: o = a.forceMount,
                side: l = "top",
                ...c
            } = e,
            f = yr(Ks, e.__scopeTooltip);
        return S.jsx(wl, {
            present: o || f.open,
            children: f.disableHoverableContent ? S.jsx(ax, {
                side: l,
                ...c,
                ref: i
            }) : S.jsx(uR, {
                side: l,
                ...c,
                ref: i
            })
        })
    }),
    uR = E.forwardRef((e, i) => {
        const a = yr(Ks, e.__scopeTooltip),
            o = tx(Ks, e.__scopeTooltip),
            l = E.useRef(null),
            c = nn(i, l),
            [f, h] = E.useState(null),
            {
                trigger: p,
                onClose: m
            } = a,
            g = l.current,
            {
                onPointerInTransitChange: v
            } = o,
            b = E.useCallback(() => {
                h(null), v(!1)
            }, [v]),
            T = E.useCallback((A, C) => {
                const M = A.currentTarget,
                    O = {
                        x: A.clientX,
                        y: A.clientY
                    },
                    _ = mR(O, M.getBoundingClientRect()),
                    j = pR(O, _),
                    k = gR(C.getBoundingClientRect()),
                    P = vR([...j, ...k]);
                h(P), v(!0)
            }, [v]);
        return E.useEffect(() => () => b(), [b]), E.useEffect(() => {
            if (p && g) {
                const A = M => T(M, g),
                    C = M => T(M, p);
                return p.addEventListener("pointerleave", A), g.addEventListener("pointerleave", C), () => {
                    p.removeEventListener("pointerleave", A), g.removeEventListener("pointerleave", C)
                }
            }
        }, [p, g, T, b]), E.useEffect(() => {
            if (f) {
                const A = C => {
                    const M = C.target,
                        O = {
                            x: C.clientX,
                            y: C.clientY
                        },
                        _ = p?.contains(M) || g?.contains(M),
                        j = !yR(O, f);
                    _ ? b() : j && (b(), m())
                };
                return document.addEventListener("pointermove", A), () => document.removeEventListener("pointermove", A)
            }
        }, [p, g, f, m, b]), S.jsx(ax, {
            ...e,
            ref: c
        })
    }),
    [cR, fR] = Ol(nx, {
        isInside: !1
    }),
    dR = _E("TooltipContent"),
    ax = E.forwardRef((e, i) => {
        const {
            __scopeTooltip: a,
            children: o,
            "aria-label": l,
            onEscapeKeyDown: c,
            onPointerDownOutside: f,
            ...h
        } = e, p = yr(Ks, a), m = Dd(a), {
            onClose: g
        } = p;
        return E.useEffect(() => (document.addEventListener(Iy, g), () => document.removeEventListener(Iy, g)), [g]), E.useEffect(() => {
            if (p.trigger) {
                const v = b => {
                    b.target?.contains(p.trigger) && g()
                };
                return window.addEventListener("scroll", v, {
                    capture: !0
                }), () => window.removeEventListener("scroll", v, {
                    capture: !0
                })
            }
        }, [p.trigger, g]), S.jsx(pd, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: c,
            onPointerDownOutside: f,
            onFocusOutside: v => v.preventDefault(),
            onDismiss: g,
            children: S.jsxs(nR, {
                "data-state": p.stateAttribute,
                ...m,
                ...h,
                ref: i,
                style: {
                    ...h.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [S.jsx(dR, {
                    children: o
                }), S.jsx(cR, {
                    scope: a,
                    isInside: !0,
                    children: S.jsx(sA, {
                        id: p.contentId,
                        role: "tooltip",
                        children: l || o
                    })
                })]
            })
        })
    });
sx.displayName = Ks;
var rx = "TooltipArrow",
    hR = E.forwardRef((e, i) => {
        const {
            __scopeTooltip: a,
            ...o
        } = e, l = Dd(a);
        return fR(rx, a).isInside ? null : S.jsx(iR, {
            ...l,
            ...o,
            ref: i
        })
    });
hR.displayName = rx;

function mR(e, i) {
    const a = Math.abs(i.top - e.y),
        o = Math.abs(i.bottom - e.y),
        l = Math.abs(i.right - e.x),
        c = Math.abs(i.left - e.x);
    switch (Math.min(a, o, l, c)) {
        case c:
            return "left";
        case l:
            return "right";
        case a:
            return "top";
        case o:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function pR(e, i, a = 5) {
    const o = [];
    switch (i) {
        case "top":
            o.push({
                x: e.x - a,
                y: e.y + a
            }, {
                x: e.x + a,
                y: e.y + a
            });
            break;
        case "bottom":
            o.push({
                x: e.x - a,
                y: e.y - a
            }, {
                x: e.x + a,
                y: e.y - a
            });
            break;
        case "left":
            o.push({
                x: e.x + a,
                y: e.y - a
            }, {
                x: e.x + a,
                y: e.y + a
            });
            break;
        case "right":
            o.push({
                x: e.x - a,
                y: e.y - a
            }, {
                x: e.x - a,
                y: e.y + a
            });
            break
    }
    return o
}

function gR(e) {
    const {
        top: i,
        right: a,
        bottom: o,
        left: l
    } = e;
    return [{
        x: l,
        y: i
    }, {
        x: a,
        y: i
    }, {
        x: a,
        y: o
    }, {
        x: l,
        y: o
    }]
}

function yR(e, i) {
    const {
        x: a,
        y: o
    } = e;
    let l = !1;
    for (let c = 0, f = i.length - 1; c < i.length; f = c++) {
        const h = i[c],
            p = i[f],
            m = h.x,
            g = h.y,
            v = p.x,
            b = p.y;
        g > o != b > o && a < (v - m) * (o - g) / (b - g) + m && (l = !l)
    }
    return l
}

function vR(e) {
    const i = e.slice();
    return i.sort((a, o) => a.x < o.x ? -1 : a.x > o.x ? 1 : a.y < o.y ? -1 : a.y > o.y ? 1 : 0), bR(i)
}

function bR(e) {
    if (e.length <= 1) return e.slice();
    const i = [];
    for (let o = 0; o < e.length; o++) {
        const l = e[o];
        for (; i.length >= 2;) {
            const c = i[i.length - 1],
                f = i[i.length - 2];
            if ((c.x - f.x) * (l.y - f.y) >= (c.y - f.y) * (l.x - f.x)) i.pop();
            else break
        }
        i.push(l)
    }
    i.pop();
    const a = [];
    for (let o = e.length - 1; o >= 0; o--) {
        const l = e[o];
        for (; a.length >= 2;) {
            const c = a[a.length - 1],
                f = a[a.length - 2];
            if ((c.x - f.x) * (l.y - f.y) >= (c.y - f.y) * (l.x - f.x)) a.pop();
            else break
        }
        a.push(l)
    }
    return a.pop(), i.length === 1 && a.length === 1 && i[0].x === a[0].x && i[0].y === a[0].y ? i : i.concat(a)
}
var xR = ex,
    SR = ix,
    ox = sx;
const TR = xR,
    wR = E.forwardRef(({
        className: e,
        sideOffset: i = 4,
        ...a
    }, o) => S.jsx(SR, {
        children: S.jsx(ox, {
            ref: o,
            sideOffset: i,
            className: we("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e),
            ...a
        })
    }));
wR.displayName = ox.displayName;
const lx = E.forwardRef(({
    className: e,
    ...i
}, a) => S.jsx("div", {
    ref: a,
    className: we("rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md", e),
    ...i
}));
lx.displayName = "Card";
const ER = E.forwardRef(({
    className: e,
    ...i
}, a) => S.jsx("div", {
    ref: a,
    className: we("flex flex-col space-y-1.5 p-6", e),
    ...i
}));
ER.displayName = "CardHeader";
const AR = E.forwardRef(({
    className: e,
    ...i
}, a) => S.jsx("h3", {
    ref: a,
    className: we("text-xl font-semibold leading-none tracking-tight font-display text-foreground", e),
    ...i
}));
AR.displayName = "CardTitle";
const CR = E.forwardRef(({
    className: e,
    ...i
}, a) => S.jsx("p", {
    ref: a,
    className: we("text-sm text-muted-foreground", e),
    ...i
}));
CR.displayName = "CardDescription";
const ux = E.forwardRef(({
    className: e,
    ...i
}, a) => S.jsx("div", {
    ref: a,
    className: we("p-6 pt-0", e),
    ...i
}));
ux.displayName = "CardContent";
const RR = E.forwardRef(({
    className: e,
    ...i
}, a) => S.jsx("div", {
    ref: a,
    className: we("flex items-center p-6 pt-0", e),
    ...i
}));
RR.displayName = "CardFooter";

function MR() {
    return S.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: S.jsx(lx, {
            className: "w-full max-w-md mx-4",
            children: S.jsxs(ux, {
                className: "pt-6",
                children: [S.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [S.jsx(VA, {
                        className: "h-8 w-8 text-red-500"
                    }), S.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 Page Not Found"
                    })]
                }), S.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "Did you forget to add the page to the router?"
                })]
            })
        })
    })
}
const Nd = E.createContext({});

function jd(e) {
    const i = E.useRef(null);
    return i.current === null && (i.current = e()), i.current
}
const DR = typeof window < "u",
    cx = DR ? E.useLayoutEffect : E.useEffect,
    Nl = E.createContext(null);

function _d(e, i) {
    e.indexOf(i) === -1 && e.push(i)
}

function ul(e, i) {
    const a = e.indexOf(i);
    a > -1 && e.splice(a, 1)
}
const vn = (e, i, a) => a > i ? i : a < e ? e : a;
let Vd = () => {};
const Pn = {},
    fx = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);

function dx(e) {
    return typeof e == "object" && e !== null
}
const hx = e => /^0[^.\s]+$/u.test(e);

function mx(e) {
    let i;
    return () => (i === void 0 && (i = e()), i)
}
const Ke = e => e,
    OR = (e, i) => a => i(e(a)),
    vr = (...e) => e.reduce(OR),
    cr = (e, i, a) => {
        const o = i - e;
        return o === 0 ? 1 : (a - e) / o
    };
class zd {
    constructor() {
        this.subscriptions = []
    }
    add(i) {
        return _d(this.subscriptions, i), () => ul(this.subscriptions, i)
    }
    notify(i, a, o) {
        const l = this.subscriptions.length;
        if (l)
            if (l === 1) this.subscriptions[0](i, a, o);
            else
                for (let c = 0; c < l; c++) {
                    const f = this.subscriptions[c];
                    f && f(i, a, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const tn = e => e * 1e3,
    Xe = e => e / 1e3;

function px(e, i) {
    return i ? e * (1e3 / i) : 0
}
const gx = (e, i, a) => (((1 - 3 * a + 3 * i) * e + (3 * a - 6 * i)) * e + 3 * i) * e,
    NR = 1e-7,
    jR = 12;

function _R(e, i, a, o, l) {
    let c, f, h = 0;
    do f = i + (a - i) / 2, c = gx(f, o, l) - e, c > 0 ? a = f : i = f; while (Math.abs(c) > NR && ++h < jR);
    return f
}

function br(e, i, a, o) {
    if (e === i && a === o) return Ke;
    const l = c => _R(c, 0, 1, e, a);
    return c => c === 0 || c === 1 ? c : gx(l(c), i, o)
}
const yx = e => i => i <= .5 ? e(2 * i) / 2 : (2 - e(2 * (1 - i))) / 2,
    vx = e => i => 1 - e(1 - i),
    bx = br(.33, 1.53, .69, .99),
    Ld = vx(bx),
    xx = yx(Ld),
    Sx = e => (e *= 2) < 1 ? .5 * Ld(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    kd = e => 1 - Math.sin(Math.acos(e)),
    Tx = vx(kd),
    wx = yx(kd),
    VR = br(.42, 0, 1, 1),
    zR = br(0, 0, .58, 1),
    Ex = br(.42, 0, .58, 1),
    LR = e => Array.isArray(e) && typeof e[0] != "number",
    Ax = e => Array.isArray(e) && typeof e[0] == "number",
    kR = {
        linear: Ke,
        easeIn: VR,
        easeInOut: Ex,
        easeOut: zR,
        circIn: kd,
        circInOut: wx,
        circOut: Tx,
        backIn: Ld,
        backInOut: xx,
        backOut: bx,
        anticipate: Sx
    },
    PR = e => typeof e == "string",
    $y = e => {
        if (Ax(e)) {
            Vd(e.length === 4);
            const [i, a, o, l] = e;
            return br(i, a, o, l)
        } else if (PR(e)) return kR[e];
        return e
    },
    Go = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

function UR(e, i) {
    let a = new Set,
        o = new Set,
        l = !1,
        c = !1;
    const f = new WeakSet;
    let h = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function p(g) {
        f.has(g) && (m.schedule(g), e()), g(h)
    }
    const m = {
        schedule: (g, v = !1, b = !1) => {
            const A = b && l ? a : o;
            return v && f.add(g), A.has(g) || A.add(g), g
        },
        cancel: g => {
            o.delete(g), f.delete(g)
        },
        process: g => {
            if (h = g, l) {
                c = !0;
                return
            }
            l = !0, [a, o] = [o, a], a.forEach(p), a.clear(), l = !1, c && (c = !1, m.process(g))
        }
    };
    return m
}
const BR = 40;

function Cx(e, i) {
    let a = !1,
        o = !0;
    const l = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        c = () => a = !0,
        f = Go.reduce((j, k) => (j[k] = UR(c), j), {}),
        {
            setup: h,
            read: p,
            resolveKeyframes: m,
            preUpdate: g,
            update: v,
            preRender: b,
            render: T,
            postRender: A
        } = f,
        C = () => {
            const j = Pn.useManualTiming ? l.timestamp : performance.now();
            a = !1, Pn.useManualTiming || (l.delta = o ? 1e3 / 60 : Math.max(Math.min(j - l.timestamp, BR), 1)), l.timestamp = j, l.isProcessing = !0, h.process(l), p.process(l), m.process(l), g.process(l), v.process(l), b.process(l), T.process(l), A.process(l), l.isProcessing = !1, a && i && (o = !1, e(C))
        },
        M = () => {
            a = !0, o = !0, l.isProcessing || e(C)
        };
    return {
        schedule: Go.reduce((j, k) => {
            const P = f[k];
            return j[k] = (Q, Z = !1, H = !1) => (a || M(), P.schedule(Q, Z, H)), j
        }, {}),
        cancel: j => {
            for (let k = 0; k < Go.length; k++) f[Go[k]].cancel(j)
        },
        state: l,
        steps: f
    }
}
const {
    schedule: zt,
    cancel: Si,
    state: oe,
    steps: lf
} = Cx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ke, !0);
let Wo;

function HR() {
    Wo = void 0
}
const pe = {
        now: () => (Wo === void 0 && pe.set(oe.isProcessing || Pn.useManualTiming ? oe.timestamp : performance.now()), Wo),
        set: e => {
            Wo = e, queueMicrotask(HR)
        }
    },
    Rx = e => i => typeof i == "string" && i.startsWith(e),
    Mx = Rx("--"),
    qR = Rx("var(--"),
    Pd = e => qR(e) ? GR.test(e.split("/*")[0].trim()) : !1,
    GR = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function tv(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const Ws = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    fr = {
        ...Ws,
        transform: e => vn(0, 1, e)
    },
    Yo = {
        ...Ws,
        default: 1
    },
    ir = e => Math.round(e * 1e5) / 1e5,
    Ud = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function YR(e) {
    return e == null
}
const XR = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Bd = (e, i) => a => !!(typeof a == "string" && XR.test(a) && a.startsWith(e) || i && !YR(a) && Object.prototype.hasOwnProperty.call(a, i)),
    Dx = (e, i, a) => o => {
        if (typeof o != "string") return o;
        const [l, c, f, h] = o.match(Ud);
        return {
            [e]: parseFloat(l),
            [i]: parseFloat(c),
            [a]: parseFloat(f),
            alpha: h !== void 0 ? parseFloat(h) : 1
        }
    },
    KR = e => vn(0, 255, e),
    uf = {
        ...Ws,
        transform: e => Math.round(KR(e))
    },
    Ki = {
        test: Bd("rgb", "red"),
        parse: Dx("red", "green", "blue"),
        transform: ({
            red: e,
            green: i,
            blue: a,
            alpha: o = 1
        }) => "rgba(" + uf.transform(e) + ", " + uf.transform(i) + ", " + uf.transform(a) + ", " + ir(fr.transform(o)) + ")"
    };

function QR(e) {
    let i = "",
        a = "",
        o = "",
        l = "";
    return e.length > 5 ? (i = e.substring(1, 3), a = e.substring(3, 5), o = e.substring(5, 7), l = e.substring(7, 9)) : (i = e.substring(1, 2), a = e.substring(2, 3), o = e.substring(3, 4), l = e.substring(4, 5), i += i, a += a, o += o, l += l), {
        red: parseInt(i, 16),
        green: parseInt(a, 16),
        blue: parseInt(o, 16),
        alpha: l ? parseInt(l, 16) / 255 : 1
    }
}
const Uf = {
        test: Bd("#"),
        parse: QR,
        transform: Ki.transform
    },
    xr = e => ({
        test: i => typeof i == "string" && i.endsWith(e) && i.split(" ").length === 1,
        parse: parseFloat,
        transform: i => `${i}${e}`
    }),
    pi = xr("deg"),
    yn = xr("%"),
    it = xr("px"),
    FR = xr("vh"),
    ZR = xr("vw"),
    ev = {
        ...yn,
        parse: e => yn.parse(e) / 100,
        transform: e => yn.transform(e * 100)
    },
    Ps = {
        test: Bd("hsl", "hue"),
        parse: Dx("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: i,
            lightness: a,
            alpha: o = 1
        }) => "hsla(" + Math.round(e) + ", " + yn.transform(ir(i)) + ", " + yn.transform(ir(a)) + ", " + ir(fr.transform(o)) + ")"
    },
    Ft = {
        test: e => Ki.test(e) || Uf.test(e) || Ps.test(e),
        parse: e => Ki.test(e) ? Ki.parse(e) : Ps.test(e) ? Ps.parse(e) : Uf.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Ki.transform(e) : Ps.transform(e),
        getAnimatableNone: e => {
            const i = Ft.parse(e);
            return i.alpha = 0, Ft.transform(i)
        }
    },
    WR = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function JR(e) {
    return isNaN(e) && typeof e == "string" && (e.match(Ud)?.length || 0) + (e.match(WR)?.length || 0) > 0
}
const Ox = "number",
    Nx = "color",
    IR = "var",
    $R = "var(",
    nv = "${}",
    tM = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function dr(e) {
    const i = e.toString(),
        a = [],
        o = {
            color: [],
            number: [],
            var: []
        },
        l = [];
    let c = 0;
    const h = i.replace(tM, p => (Ft.test(p) ? (o.color.push(c), l.push(Nx), a.push(Ft.parse(p))) : p.startsWith($R) ? (o.var.push(c), l.push(IR), a.push(p)) : (o.number.push(c), l.push(Ox), a.push(parseFloat(p))), ++c, nv)).split(nv);
    return {
        values: a,
        split: h,
        indexes: o,
        types: l
    }
}

function jx(e) {
    return dr(e).values
}

function _x(e) {
    const {
        split: i,
        types: a
    } = dr(e), o = i.length;
    return l => {
        let c = "";
        for (let f = 0; f < o; f++)
            if (c += i[f], l[f] !== void 0) {
                const h = a[f];
                h === Ox ? c += ir(l[f]) : h === Nx ? c += Ft.transform(l[f]) : c += l[f]
            } return c
    }
}
const eM = e => typeof e == "number" ? 0 : Ft.test(e) ? Ft.getAnimatableNone(e) : e;

function nM(e) {
    const i = jx(e);
    return _x(e)(i.map(eM))
}
const en = {
    test: JR,
    parse: jx,
    createTransformer: _x,
    getAnimatableNone: nM
};

function cf(e, i, a) {
    return a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6 ? e + (i - e) * 6 * a : a < 1 / 2 ? i : a < 2 / 3 ? e + (i - e) * (2 / 3 - a) * 6 : e
}

function iM({
    hue: e,
    saturation: i,
    lightness: a,
    alpha: o
}) {
    e /= 360, i /= 100, a /= 100;
    let l = 0,
        c = 0,
        f = 0;
    if (!i) l = c = f = a;
    else {
        const h = a < .5 ? a * (1 + i) : a + i - a * i,
            p = 2 * a - h;
        l = cf(p, h, e + 1 / 3), c = cf(p, h, e), f = cf(p, h, e - 1 / 3)
    }
    return {
        red: Math.round(l * 255),
        green: Math.round(c * 255),
        blue: Math.round(f * 255),
        alpha: o
    }
}

function cl(e, i) {
    return a => a > 0 ? i : e
}
const Bt = (e, i, a) => e + (i - e) * a,
    ff = (e, i, a) => {
        const o = e * e,
            l = a * (i * i - o) + o;
        return l < 0 ? 0 : Math.sqrt(l)
    },
    sM = [Uf, Ki, Ps],
    aM = e => sM.find(i => i.test(e));

function iv(e) {
    const i = aM(e);
    if (!i) return !1;
    let a = i.parse(e);
    return i === Ps && (a = iM(a)), a
}
const sv = (e, i) => {
        const a = iv(e),
            o = iv(i);
        if (!a || !o) return cl(e, i);
        const l = {
            ...a
        };
        return c => (l.red = ff(a.red, o.red, c), l.green = ff(a.green, o.green, c), l.blue = ff(a.blue, o.blue, c), l.alpha = Bt(a.alpha, o.alpha, c), Ki.transform(l))
    },
    Bf = new Set(["none", "hidden"]);

function rM(e, i) {
    return Bf.has(e) ? a => a <= 0 ? e : i : a => a >= 1 ? i : e
}

function oM(e, i) {
    return a => Bt(e, i, a)
}

function Hd(e) {
    return typeof e == "number" ? oM : typeof e == "string" ? Pd(e) ? cl : Ft.test(e) ? sv : cM : Array.isArray(e) ? Vx : typeof e == "object" ? Ft.test(e) ? sv : lM : cl
}

function Vx(e, i) {
    const a = [...e],
        o = a.length,
        l = e.map((c, f) => Hd(c)(c, i[f]));
    return c => {
        for (let f = 0; f < o; f++) a[f] = l[f](c);
        return a
    }
}

function lM(e, i) {
    const a = {
            ...e,
            ...i
        },
        o = {};
    for (const l in a) e[l] !== void 0 && i[l] !== void 0 && (o[l] = Hd(e[l])(e[l], i[l]));
    return l => {
        for (const c in o) a[c] = o[c](l);
        return a
    }
}

function uM(e, i) {
    const a = [],
        o = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let l = 0; l < i.values.length; l++) {
        const c = i.types[l],
            f = e.indexes[c][o[c]],
            h = e.values[f] ?? 0;
        a[l] = h, o[c]++
    }
    return a
}
const cM = (e, i) => {
    const a = en.createTransformer(i),
        o = dr(e),
        l = dr(i);
    return o.indexes.var.length === l.indexes.var.length && o.indexes.color.length === l.indexes.color.length && o.indexes.number.length >= l.indexes.number.length ? Bf.has(e) && !l.values.length || Bf.has(i) && !o.values.length ? rM(e, i) : vr(Vx(uM(o, l), l.values), a) : cl(e, i)
};

function zx(e, i, a) {
    return typeof e == "number" && typeof i == "number" && typeof a == "number" ? Bt(e, i, a) : Hd(e)(e, i)
}
const fM = e => {
        const i = ({
            timestamp: a
        }) => e(a);
        return {
            start: (a = !0) => zt.update(i, a),
            stop: () => Si(i),
            now: () => oe.isProcessing ? oe.timestamp : pe.now()
        }
    },
    Lx = (e, i, a = 10) => {
        let o = "";
        const l = Math.max(Math.round(i / a), 2);
        for (let c = 0; c < l; c++) o += Math.round(e(c / (l - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${o.substring(0,o.length-2)})`
    },
    fl = 2e4;

function qd(e) {
    let i = 0;
    const a = 50;
    let o = e.next(i);
    for (; !o.done && i < fl;) i += a, o = e.next(i);
    return i >= fl ? 1 / 0 : i
}

function dM(e, i = 100, a) {
    const o = a({
            ...e,
            keyframes: [0, i]
        }),
        l = Math.min(qd(o), fl);
    return {
        type: "keyframes",
        ease: c => o.next(l * c).value / i,
        duration: Xe(l)
    }
}
const hM = 5;

function kx(e, i, a) {
    const o = Math.max(i - hM, 0);
    return px(a - e(o), i - o)
}
const Gt = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    df = .001;

function mM({
    duration: e = Gt.duration,
    bounce: i = Gt.bounce,
    velocity: a = Gt.velocity,
    mass: o = Gt.mass
}) {
    let l, c, f = 1 - i;
    f = vn(Gt.minDamping, Gt.maxDamping, f), e = vn(Gt.minDuration, Gt.maxDuration, Xe(e)), f < 1 ? (l = m => {
        const g = m * f,
            v = g * e,
            b = g - a,
            T = Hf(m, f),
            A = Math.exp(-v);
        return df - b / T * A
    }, c = m => {
        const v = m * f * e,
            b = v * a + a,
            T = Math.pow(f, 2) * Math.pow(m, 2) * e,
            A = Math.exp(-v),
            C = Hf(Math.pow(m, 2), f);
        return (-l(m) + df > 0 ? -1 : 1) * ((b - T) * A) / C
    }) : (l = m => {
        const g = Math.exp(-m * e),
            v = (m - a) * e + 1;
        return -df + g * v
    }, c = m => {
        const g = Math.exp(-m * e),
            v = (a - m) * (e * e);
        return g * v
    });
    const h = 5 / e,
        p = gM(l, c, h);
    if (e = tn(e), isNaN(p)) return {
        stiffness: Gt.stiffness,
        damping: Gt.damping,
        duration: e
    };
    {
        const m = Math.pow(p, 2) * o;
        return {
            stiffness: m,
            damping: f * 2 * Math.sqrt(o * m),
            duration: e
        }
    }
}
const pM = 12;

function gM(e, i, a) {
    let o = a;
    for (let l = 1; l < pM; l++) o = o - e(o) / i(o);
    return o
}

function Hf(e, i) {
    return e * Math.sqrt(1 - i * i)
}
const yM = ["duration", "bounce"],
    vM = ["stiffness", "damping", "mass"];

function av(e, i) {
    return i.some(a => e[a] !== void 0)
}

function bM(e) {
    let i = {
        velocity: Gt.velocity,
        stiffness: Gt.stiffness,
        damping: Gt.damping,
        mass: Gt.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!av(e, vM) && av(e, yM))
        if (i.velocity = 0, e.visualDuration) {
            const a = e.visualDuration,
                o = 2 * Math.PI / (a * 1.2),
                l = o * o,
                c = 2 * vn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(l);
            i = {
                ...i,
                mass: Gt.mass,
                stiffness: l,
                damping: c
            }
        } else {
            const a = mM({
                ...e,
                velocity: 0
            });
            i = {
                ...i,
                ...a,
                mass: Gt.mass
            }, i.isResolvedFromDuration = !0
        } return i
}

function dl(e = Gt.visualDuration, i = Gt.bounce) {
    const a = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: i
    } : e;
    let {
        restSpeed: o,
        restDelta: l
    } = a;
    const c = a.keyframes[0],
        f = a.keyframes[a.keyframes.length - 1],
        h = {
            done: !1,
            value: c
        },
        {
            stiffness: p,
            damping: m,
            mass: g,
            duration: v,
            velocity: b,
            isResolvedFromDuration: T
        } = bM({
            ...a,
            velocity: -Xe(a.velocity || 0)
        }),
        A = b || 0,
        C = m / (2 * Math.sqrt(p * g)),
        M = f - c,
        O = Xe(Math.sqrt(p / g)),
        _ = Math.abs(M) < 5;
    o || (o = _ ? Gt.restSpeed.granular : Gt.restSpeed.default), l || (l = _ ? Gt.restDelta.granular : Gt.restDelta.default);
    let j;
    if (C < 1) {
        const P = Hf(O, C);
        j = Q => {
            const Z = Math.exp(-C * O * Q);
            return f - Z * ((A + C * O * M) / P * Math.sin(P * Q) + M * Math.cos(P * Q))
        }
    } else if (C === 1) j = P => f - Math.exp(-O * P) * (M + (A + O * M) * P);
    else {
        const P = O * Math.sqrt(C * C - 1);
        j = Q => {
            const Z = Math.exp(-C * O * Q),
                H = Math.min(P * Q, 300);
            return f - Z * ((A + C * O * M) * Math.sinh(H) + P * M * Math.cosh(H)) / P
        }
    }
    const k = {
        calculatedDuration: T && v || null,
        next: P => {
            const Q = j(P);
            if (T) h.done = P >= v;
            else {
                let Z = P === 0 ? A : 0;
                C < 1 && (Z = P === 0 ? tn(A) : kx(j, P, Q));
                const H = Math.abs(Z) <= o,
                    W = Math.abs(f - Q) <= l;
                h.done = H && W
            }
            return h.value = h.done ? f : Q, h
        },
        toString: () => {
            const P = Math.min(qd(k), fl),
                Q = Lx(Z => k.next(P * Z).value, P, 30);
            return P + "ms " + Q
        },
        toTransition: () => {}
    };
    return k
}
dl.applyToOptions = e => {
    const i = dM(e, 100, dl);
    return e.ease = i.ease, e.duration = tn(i.duration), e.type = "keyframes", e
};

function qf({
    keyframes: e,
    velocity: i = 0,
    power: a = .8,
    timeConstant: o = 325,
    bounceDamping: l = 10,
    bounceStiffness: c = 500,
    modifyTarget: f,
    min: h,
    max: p,
    restDelta: m = .5,
    restSpeed: g
}) {
    const v = e[0],
        b = {
            done: !1,
            value: v
        },
        T = H => h !== void 0 && H < h || p !== void 0 && H > p,
        A = H => h === void 0 ? p : p === void 0 || Math.abs(h - H) < Math.abs(p - H) ? h : p;
    let C = a * i;
    const M = v + C,
        O = f === void 0 ? M : f(M);
    O !== M && (C = O - v);
    const _ = H => -C * Math.exp(-H / o),
        j = H => O + _(H),
        k = H => {
            const W = _(H),
                ot = j(H);
            b.done = Math.abs(W) <= m, b.value = b.done ? O : ot
        };
    let P, Q;
    const Z = H => {
        T(b.value) && (P = H, Q = dl({
            keyframes: [b.value, A(b.value)],
            velocity: kx(j, H, b.value),
            damping: l,
            stiffness: c,
            restDelta: m,
            restSpeed: g
        }))
    };
    return Z(0), {
        calculatedDuration: null,
        next: H => {
            let W = !1;
            return !Q && P === void 0 && (W = !0, k(H), Z(H)), P !== void 0 && H >= P ? Q.next(H - P) : (!W && k(H), b)
        }
    }
}

function xM(e, i, a) {
    const o = [],
        l = a || Pn.mix || zx,
        c = e.length - 1;
    for (let f = 0; f < c; f++) {
        let h = l(e[f], e[f + 1]);
        if (i) {
            const p = Array.isArray(i) ? i[f] || Ke : i;
            h = vr(p, h)
        }
        o.push(h)
    }
    return o
}

function SM(e, i, {
    clamp: a = !0,
    ease: o,
    mixer: l
} = {}) {
    const c = e.length;
    if (Vd(c === i.length), c === 1) return () => i[0];
    if (c === 2 && i[0] === i[1]) return () => i[1];
    const f = e[0] === e[1];
    e[0] > e[c - 1] && (e = [...e].reverse(), i = [...i].reverse());
    const h = xM(i, o, l),
        p = h.length,
        m = g => {
            if (f && g < e[0]) return i[0];
            let v = 0;
            if (p > 1)
                for (; v < e.length - 2 && !(g < e[v + 1]); v++);
            const b = cr(e[v], e[v + 1], g);
            return h[v](b)
        };
    return a ? g => m(vn(e[0], e[c - 1], g)) : m
}

function TM(e, i) {
    const a = e[e.length - 1];
    for (let o = 1; o <= i; o++) {
        const l = cr(0, i, o);
        e.push(Bt(a, 1, l))
    }
}

function wM(e) {
    const i = [0];
    return TM(i, e.length - 1), i
}

function EM(e, i) {
    return e.map(a => a * i)
}

function AM(e, i) {
    return e.map(() => i || Ex).splice(0, e.length - 1)
}

function sr({
    duration: e = 300,
    keyframes: i,
    times: a,
    ease: o = "easeInOut"
}) {
    const l = LR(o) ? o.map($y) : $y(o),
        c = {
            done: !1,
            value: i[0]
        },
        f = EM(a && a.length === i.length ? a : wM(i), e),
        h = SM(f, i, {
            ease: Array.isArray(l) ? l : AM(i, l)
        });
    return {
        calculatedDuration: e,
        next: p => (c.value = h(p), c.done = p >= e, c)
    }
}
const CM = e => e !== null;

function Gd(e, {
    repeat: i,
    repeatType: a = "loop"
}, o, l = 1) {
    const c = e.filter(CM),
        h = l < 0 || i && a !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
    return !h || o === void 0 ? c[h] : o
}
const RM = {
    decay: qf,
    inertia: qf,
    tween: sr,
    keyframes: sr,
    spring: dl
};

function Px(e) {
    typeof e.type == "string" && (e.type = RM[e.type])
}
class Yd {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(i => {
            this.resolve = i
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(i, a) {
        return this.finished.then(i, a)
    }
}
const MM = e => e / 100;
class Xd extends Yd {
    constructor(i) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
            const {
                motionValue: a
            } = this.options;
            a && a.updatedAt !== pe.now() && this.tick(pe.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.())
        }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {
            options: i
        } = this;
        Px(i);
        const {
            type: a = sr,
            repeat: o = 0,
            repeatDelay: l = 0,
            repeatType: c,
            velocity: f = 0
        } = i;
        let {
            keyframes: h
        } = i;
        const p = a || sr;
        p !== sr && typeof h[0] != "number" && (this.mixKeyframes = vr(MM, zx(h[0], h[1])), h = [0, 100]);
        const m = p({
            ...i,
            keyframes: h
        });
        c === "mirror" && (this.mirroredGenerator = p({
            ...i,
            keyframes: [...h].reverse(),
            velocity: -f
        })), m.calculatedDuration === null && (m.calculatedDuration = qd(m));
        const {
            calculatedDuration: g
        } = m;
        this.calculatedDuration = g, this.resolvedDuration = g + l, this.totalDuration = this.resolvedDuration * (o + 1) - l, this.generator = m
    }
    updateTime(i) {
        const a = Math.round(i - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = a
    }
    tick(i, a = !1) {
        const {
            generator: o,
            totalDuration: l,
            mixKeyframes: c,
            mirroredGenerator: f,
            resolvedDuration: h,
            calculatedDuration: p
        } = this;
        if (this.startTime === null) return o.next(0);
        const {
            delay: m = 0,
            keyframes: g,
            repeat: v,
            repeatType: b,
            repeatDelay: T,
            type: A,
            onUpdate: C,
            finalKeyframe: M
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - l / this.speed, this.startTime)), a ? this.currentTime = i : this.updateTime(i);
        const O = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
            _ = this.playbackSpeed >= 0 ? O < 0 : O > l;
        this.currentTime = Math.max(O, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
        let j = this.currentTime,
            k = o;
        if (v) {
            const H = Math.min(this.currentTime, l) / h;
            let W = Math.floor(H),
                ot = H % 1;
            !ot && H >= 1 && (ot = 1), ot === 1 && W--, W = Math.min(W, v + 1), W % 2 && (b === "reverse" ? (ot = 1 - ot, T && (ot -= T / h)) : b === "mirror" && (k = f)), j = vn(0, 1, ot) * h
        }
        const P = _ ? {
            done: !1,
            value: g[0]
        } : k.next(j);
        c && !_ && (P.value = c(P.value));
        let {
            done: Q
        } = P;
        !_ && p !== null && (Q = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
        const Z = this.holdTime === null && (this.state === "finished" || this.state === "running" && Q);
        return Z && A !== qf && (P.value = Gd(g, this.options, M, this.speed)), C && C(P.value), Z && this.finish(), P
    }
    then(i, a) {
        return this.finished.then(i, a)
    }
    get duration() {
        return Xe(this.calculatedDuration)
    }
    get iterationDuration() {
        const {
            delay: i = 0
        } = this.options || {};
        return this.duration + Xe(i)
    }
    get time() {
        return Xe(this.currentTime)
    }
    set time(i) {
        i = tn(i), this.currentTime = i, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = i, this.tick(i))
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(i) {
        const a = this.playbackSpeed !== i;
        a && this.driver && this.updateTime(pe.now()), this.playbackSpeed = i, a && this.driver && (this.time = Xe(this.currentTime))
    }
    play() {
        if (this.isStopped) return;
        const {
            driver: i = fM,
            startTime: a
        } = this.options;
        this.driver || (this.driver = i(l => this.tick(l))), this.options.onPlay?.();
        const o = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = a ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(pe.now()), this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.()
    }
    cancel() {
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(i) {
        return this.startTime = 0, this.tick(i, !0)
    }
    attachTimeline(i) {
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), i.observe(this)
    }
}

function DM(e) {
    for (let i = 1; i < e.length; i++) e[i] ?? (e[i] = e[i - 1])
}
const Qi = e => e * 180 / Math.PI,
    Gf = e => {
        const i = Qi(Math.atan2(e[1], e[0]));
        return Yf(i)
    },
    OM = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: Gf,
        rotateZ: Gf,
        skewX: e => Qi(Math.atan(e[1])),
        skewY: e => Qi(Math.atan(e[2])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
    },
    Yf = e => (e = e % 360, e < 0 && (e += 360), e),
    rv = Gf,
    ov = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
    lv = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
    NM = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: ov,
        scaleY: lv,
        scale: e => (ov(e) + lv(e)) / 2,
        rotateX: e => Yf(Qi(Math.atan2(e[6], e[5]))),
        rotateY: e => Yf(Qi(Math.atan2(-e[2], e[0]))),
        rotateZ: rv,
        rotate: rv,
        skewX: e => Qi(Math.atan(e[4])),
        skewY: e => Qi(Math.atan(e[1])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
    };

function Xf(e) {
    return e.includes("scale") ? 1 : 0
}

function Kf(e, i) {
    if (!e || e === "none") return Xf(i);
    const a = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, l;
    if (a) o = NM, l = a;
    else {
        const h = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = OM, l = h
    }
    if (!l) return Xf(i);
    const c = o[i],
        f = l[1].split(",").map(_M);
    return typeof c == "function" ? c(f) : f[c]
}
const jM = (e, i) => {
    const {
        transform: a = "none"
    } = getComputedStyle(e);
    return Kf(a, i)
};

function _M(e) {
    return parseFloat(e.trim())
}
const Js = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Is = new Set(Js),
    uv = e => e === Ws || e === it,
    VM = new Set(["x", "y", "z"]),
    zM = Js.filter(e => !VM.has(e));

function LM(e) {
    const i = [];
    return zM.forEach(a => {
        const o = e.getValue(a);
        o !== void 0 && (i.push([a, o.get()]), o.set(a.startsWith("scale") ? 1 : 0))
    }), i
}
const gi = {
    width: ({
        x: e
    }, {
        paddingLeft: i = "0",
        paddingRight: a = "0"
    }) => e.max - e.min - parseFloat(i) - parseFloat(a),
    height: ({
        y: e
    }, {
        paddingTop: i = "0",
        paddingBottom: a = "0"
    }) => e.max - e.min - parseFloat(i) - parseFloat(a),
    top: (e, {
        top: i
    }) => parseFloat(i),
    left: (e, {
        left: i
    }) => parseFloat(i),
    bottom: ({
        y: e
    }, {
        top: i
    }) => parseFloat(i) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: i
    }) => parseFloat(i) + (e.max - e.min),
    x: (e, {
        transform: i
    }) => Kf(i, "x"),
    y: (e, {
        transform: i
    }) => Kf(i, "y")
};
gi.translateX = gi.x;
gi.translateY = gi.y;
const Fi = new Set;
let Qf = !1,
    Ff = !1,
    Zf = !1;

function Ux() {
    if (Ff) {
        const e = Array.from(Fi).filter(o => o.needsMeasurement),
            i = new Set(e.map(o => o.element)),
            a = new Map;
        i.forEach(o => {
            const l = LM(o);
            l.length && (a.set(o, l), o.render())
        }), e.forEach(o => o.measureInitialState()), i.forEach(o => {
            o.render();
            const l = a.get(o);
            l && l.forEach(([c, f]) => {
                o.getValue(c)?.set(f)
            })
        }), e.forEach(o => o.measureEndState()), e.forEach(o => {
            o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
        })
    }
    Ff = !1, Qf = !1, Fi.forEach(e => e.complete(Zf)), Fi.clear()
}

function Bx() {
    Fi.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (Ff = !0)
    })
}

function kM() {
    Zf = !0, Bx(), Ux(), Zf = !1
}
class Kd {
    constructor(i, a, o, l, c, f = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...i], this.onComplete = a, this.name = o, this.motionValue = l, this.element = c, this.isAsync = f
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (Fi.add(this), Qf || (Qf = !0, zt.read(Bx), zt.resolveKeyframes(Ux))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: i,
            name: a,
            element: o,
            motionValue: l
        } = this;
        if (i[0] === null) {
            const c = l?.get(),
                f = i[i.length - 1];
            if (c !== void 0) i[0] = c;
            else if (o && a) {
                const h = o.readValue(a, f);
                h != null && (i[0] = h)
            }
            i[0] === void 0 && (i[0] = f), l && c === void 0 && l.set(i[0])
        }
        DM(i)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(i = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), Fi.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Fi.delete(this), this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const PM = e => e.startsWith("--");

function Hx(e, i, a) {
    PM(i) ? e.style.setProperty(i, a) : e.style[i] = a
}
const UM = {};

function qx(e, i) {
    const a = mx(e);
    return () => UM[i] ?? a()
}
const BM = qx(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
    Gx = qx(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    er = ([e, i, a, o]) => `cubic-bezier(${e}, ${i}, ${a}, ${o})`,
    cv = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: er([0, .65, .55, 1]),
        circOut: er([.55, 0, 1, .45]),
        backIn: er([.31, .01, .66, -.59]),
        backOut: er([.33, 1.53, .69, .99])
    };

function Yx(e, i) {
    if (e) return typeof e == "function" ? Gx() ? Lx(e, i) : "ease-out" : Ax(e) ? er(e) : Array.isArray(e) ? e.map(a => Yx(a, i) || cv.easeOut) : cv[e]
}

function HM(e, i, a, {
    delay: o = 0,
    duration: l = 300,
    repeat: c = 0,
    repeatType: f = "loop",
    ease: h = "easeOut",
    times: p
} = {}, m = void 0) {
    const g = {
        [i]: a
    };
    p && (g.offset = p);
    const v = Yx(h, l);
    Array.isArray(v) && (g.easing = v);
    const b = {
        delay: o,
        duration: l,
        easing: Array.isArray(v) ? "linear" : v,
        fill: "both",
        iterations: c + 1,
        direction: f === "reverse" ? "alternate" : "normal"
    };
    return m && (b.pseudoElement = m), e.animate(g, b)
}

function Xx(e) {
    return typeof e == "function" && "applyToOptions" in e
}

function qM({
    type: e,
    ...i
}) {
    return Xx(e) && Gx() ? e.applyToOptions(i) : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i)
}
class Kx extends Yd {
    constructor(i) {
        if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !i) return;
        const {
            element: a,
            name: o,
            keyframes: l,
            pseudoElement: c,
            allowFlatten: f = !1,
            finalKeyframe: h,
            onComplete: p
        } = i;
        this.isPseudoElement = !!c, this.allowFlatten = f, this.options = i, Vd(typeof i.type != "string");
        const m = qM(i);
        this.animation = HM(a, o, l, m, c), m.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !c) {
                const g = Gd(l, this.options, h, this.speed);
                this.updateMotionValue && this.updateMotionValue(g), Hx(a, o, g), this.animation.cancel()
            }
            p?.(), this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.finish?.()
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: i
        } = this;
        i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        const i = this.options?.element;
        !this.isPseudoElement && i?.isConnected && this.animation.commitStyles?.()
    }
    get duration() {
        const i = this.animation.effect?.getComputedTiming?.().duration || 0;
        return Xe(Number(i))
    }
    get iterationDuration() {
        const {
            delay: i = 0
        } = this.options || {};
        return this.duration + Xe(i)
    }
    get time() {
        return Xe(Number(this.animation.currentTime) || 0)
    }
    set time(i) {
        const a = this.finishedTime !== null;
        this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = tn(i), a && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(i) {
        i < 0 && (this.finishedTime = null), this.animation.playbackRate = i
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(i) {
        this.manualStartTime = this.animation.startTime = i
    }
    attachTimeline({
        timeline: i,
        rangeStart: a,
        rangeEnd: o,
        observe: l
    }) {
        return this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
        }), this.animation.onfinish = null, i && BM() ? (this.animation.timeline = i, a && (this.animation.rangeStart = a), o && (this.animation.rangeEnd = o), Ke) : l(this)
    }
}
const Qx = {
    anticipate: Sx,
    backInOut: xx,
    circInOut: wx
};

function GM(e) {
    return e in Qx
}

function YM(e) {
    typeof e.ease == "string" && GM(e.ease) && (e.ease = Qx[e.ease])
}
const hf = 10;
class XM extends Kx {
    constructor(i) {
        YM(i), Px(i), super(i), i.startTime !== void 0 && (this.startTime = i.startTime), this.options = i
    }
    updateMotionValue(i) {
        const {
            motionValue: a,
            onUpdate: o,
            onComplete: l,
            element: c,
            ...f
        } = this.options;
        if (!a) return;
        if (i !== void 0) {
            a.set(i);
            return
        }
        const h = new Xd({
                ...f,
                autoplay: !1
            }),
            p = Math.max(hf, pe.now() - this.startTime),
            m = vn(0, hf, p - hf),
            g = h.sample(p).value,
            {
                name: v
            } = this.options;
        c && v && Hx(c, v, g), a.setWithVelocity(h.sample(Math.max(0, p - m)).value, g, m), h.stop()
    }
}
const fv = (e, i) => i === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (en.test(e) || e === "0") && !e.startsWith("url("));

function KM(e) {
    const i = e[0];
    if (e.length === 1) return !0;
    for (let a = 0; a < e.length; a++)
        if (e[a] !== i) return !0
}

function QM(e, i, a, o) {
    const l = e[0];
    if (l === null) return !1;
    if (i === "display" || i === "visibility") return !0;
    const c = e[e.length - 1],
        f = fv(l, i),
        h = fv(c, i);
    return !f || !h ? !1 : KM(e) || (a === "spring" || Xx(a)) && o
}

function Wf(e) {
    e.duration = 0, e.type = "keyframes"
}
const FM = new Set(["opacity", "clipPath", "filter", "transform"]),
    ZM = mx(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function WM(e) {
    const {
        motionValue: i,
        name: a,
        repeatDelay: o,
        repeatType: l,
        damping: c,
        type: f
    } = e;
    if (!(i?.owner?.current instanceof HTMLElement)) return !1;
    const {
        onUpdate: p,
        transformTemplate: m
    } = i.owner.getProps();
    return ZM() && a && FM.has(a) && (a !== "transform" || !m) && !p && !o && l !== "mirror" && c !== 0 && f !== "inertia"
}
const JM = 40;
class IM extends Yd {
    constructor({
        autoplay: i = !0,
        delay: a = 0,
        type: o = "keyframes",
        repeat: l = 0,
        repeatDelay: c = 0,
        repeatType: f = "loop",
        keyframes: h,
        name: p,
        motionValue: m,
        element: g,
        ...v
    }) {
        super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
        }, this.createdAt = pe.now();
        const b = {
                autoplay: i,
                delay: a,
                type: o,
                repeat: l,
                repeatDelay: c,
                repeatType: f,
                name: p,
                motionValue: m,
                element: g,
                ...v
            },
            T = g?.KeyframeResolver || Kd;
        this.keyframeResolver = new T(h, (A, C, M) => this.onKeyframesResolved(A, C, b, !M), p, m, g), this.keyframeResolver?.scheduleResolve()
    }
    onKeyframesResolved(i, a, o, l) {
        this.keyframeResolver = void 0;
        const {
            name: c,
            type: f,
            velocity: h,
            delay: p,
            isHandoff: m,
            onUpdate: g
        } = o;
        this.resolvedAt = pe.now(), QM(i, c, f, h) || ((Pn.instantAnimations || !p) && g?.(Gd(i, o, a)), i[0] = i[i.length - 1], Wf(o), o.repeat = 0);
        const b = {
                startTime: l ? this.resolvedAt ? this.resolvedAt - this.createdAt > JM ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                finalKeyframe: a,
                ...o,
                keyframes: i
            },
            T = !m && WM(b),
            A = b.motionValue?.owner?.current,
            C = T ? new XM({
                ...b,
                element: A
            }) : new Xd(b);
        C.finished.then(() => {
            this.notifyFinished()
        }).catch(Ke), this.pendingTimeline && (this.stopTimeline = C.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = C
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(i, a) {
        return this.finished.finally(i).then(() => {})
    }
    get animation() {
        return this._animation || (this.keyframeResolver?.resume(), kM()), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(i) {
        this.animation.time = i
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(i) {
        this.animation.speed = i
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(i) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this._animation && this.animation.cancel(), this.keyframeResolver?.cancel()
    }
}

function Fx(e, i, a, o = 0, l = 1) {
    const c = Array.from(e).sort((m, g) => m.sortNodePosition(g)).indexOf(i),
        f = e.size,
        h = (f - 1) * o;
    return typeof a == "function" ? a(c, f) : l === 1 ? c * o : h - c * o
}
const $M = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function tD(e) {
    const i = $M.exec(e);
    if (!i) return [, ];
    const [, a, o, l] = i;
    return [`--${a??o}`, l]
}

function Zx(e, i, a = 1) {
    const [o, l] = tD(e);
    if (!o) return;
    const c = window.getComputedStyle(i).getPropertyValue(o);
    if (c) {
        const f = c.trim();
        return fx(f) ? parseFloat(f) : f
    }
    return Pd(l) ? Zx(l, i, a + 1) : l
}
const eD = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    nD = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    iD = {
        type: "keyframes",
        duration: .8
    },
    sD = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    aD = (e, {
        keyframes: i
    }) => i.length > 2 ? iD : Is.has(e) ? e.startsWith("scale") ? nD(i[1]) : eD : sD,
    rD = e => e !== null;

function oD(e, {
    repeat: i,
    repeatType: a = "loop"
}, o) {
    const l = e.filter(rD),
        c = i && a !== "loop" && i % 2 === 1 ? 0 : l.length - 1;
    return l[c]
}

function Wx(e, i) {
    if (e?.inherit && i) {
        const {
            inherit: a,
            ...o
        } = e;
        return {
            ...i,
            ...o
        }
    }
    return e
}

function Qd(e, i) {
    const a = e?.[i] ?? e?.default ?? e;
    return a !== e ? Wx(a, e) : a
}

function lD({
    when: e,
    delay: i,
    delayChildren: a,
    staggerChildren: o,
    staggerDirection: l,
    repeat: c,
    repeatType: f,
    repeatDelay: h,
    from: p,
    elapsed: m,
    ...g
}) {
    return !!Object.keys(g).length
}
const Fd = (e, i, a, o = {}, l, c) => f => {
    const h = Qd(o, e) || {},
        p = h.delay || o.delay || 0;
    let {
        elapsed: m = 0
    } = o;
    m = m - tn(p);
    const g = {
        keyframes: Array.isArray(a) ? a : [null, a],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...h,
        delay: -m,
        onUpdate: b => {
            i.set(b), h.onUpdate && h.onUpdate(b)
        },
        onComplete: () => {
            f(), h.onComplete && h.onComplete()
        },
        name: e,
        motionValue: i,
        element: c ? void 0 : l
    };
    lD(h) || Object.assign(g, aD(e, g)), g.duration && (g.duration = tn(g.duration)), g.repeatDelay && (g.repeatDelay = tn(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
    let v = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (Wf(g), g.delay === 0 && (v = !0)), (Pn.instantAnimations || Pn.skipAnimations || l?.shouldSkipAnimations) && (v = !0, Wf(g), g.delay = 0), g.allowFlatten = !h.type && !h.ease, v && !c && i.get() !== void 0) {
        const b = oD(g.keyframes, h);
        if (b !== void 0) {
            zt.update(() => {
                g.onUpdate(b), g.onComplete()
            });
            return
        }
    }
    return h.isSync ? new Xd(g) : new IM(g)
};

function dv(e) {
    const i = [{}, {}];
    return e?.values.forEach((a, o) => {
        i[0][o] = a.get(), i[1][o] = a.getVelocity()
    }), i
}

function Zd(e, i, a, o) {
    if (typeof i == "function") {
        const [l, c] = dv(o);
        i = i(a !== void 0 ? a : e.custom, l, c)
    }
    if (typeof i == "string" && (i = e.variants && e.variants[i]), typeof i == "function") {
        const [l, c] = dv(o);
        i = i(a !== void 0 ? a : e.custom, l, c)
    }
    return i
}

function Ys(e, i, a) {
    const o = e.getProps();
    return Zd(o, i, a !== void 0 ? a : o.custom, e)
}
const Jx = new Set(["width", "height", "top", "left", "right", "bottom", ...Js]),
    hv = 30,
    uD = e => !isNaN(parseFloat(e));
class cD {
    constructor(i, a = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = o => {
            const l = pe.now();
            if (this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
                for (const c of this.dependents) c.dirty()
        }, this.hasAnimated = !1, this.setCurrent(i), this.owner = a.owner
    }
    setCurrent(i) {
        this.current = i, this.updatedAt = pe.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = uD(this.current))
    }
    setPrevFrameValue(i = this.current) {
        this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt
    }
    onChange(i) {
        return this.on("change", i)
    }
    on(i, a) {
        this.events[i] || (this.events[i] = new zd);
        const o = this.events[i].add(a);
        return i === "change" ? () => {
            o(), zt.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : o
    }
    clearListeners() {
        for (const i in this.events) this.events[i].clear()
    }
    attach(i, a) {
        this.passiveEffect = i, this.stopPassiveEffect = a
    }
    set(i) {
        this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i)
    }
    setWithVelocity(i, a, o) {
        this.set(a), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - o
    }
    jump(i, a = !0) {
        this.updateAndNotify(i), this.prev = i, this.prevUpdatedAt = this.prevFrameValue = void 0, a && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        this.events.change?.notify(this.current)
    }
    addDependent(i) {
        this.dependents || (this.dependents = new Set), this.dependents.add(i)
    }
    removeDependent(i) {
        this.dependents && this.dependents.delete(i)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const i = pe.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > hv) return 0;
        const a = Math.min(this.updatedAt - this.prevUpdatedAt, hv);
        return px(parseFloat(this.current) - parseFloat(this.prevFrameValue), a)
    }
    start(i) {
        return this.stop(), new Promise(a => {
            this.hasAnimated = !0, this.animation = i(a), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Qs(e, i) {
    return new cD(e, i)
}
const Jf = e => Array.isArray(e);

function fD(e, i, a) {
    e.hasValue(i) ? e.getValue(i).set(a) : e.addValue(i, Qs(a))
}

function dD(e) {
    return Jf(e) ? e[e.length - 1] || 0 : e
}

function hD(e, i) {
    const a = Ys(e, i);
    let {
        transitionEnd: o = {},
        transition: l = {},
        ...c
    } = a || {};
    c = {
        ...c,
        ...o
    };
    for (const f in c) {
        const h = dD(c[f]);
        fD(e, f, h)
    }
}
const de = e => !!(e && e.getVelocity);

function mD(e) {
    return !!(de(e) && e.add)
}

function If(e, i) {
    const a = e.getValue("willChange");
    if (mD(a)) return a.add(i);
    if (!a && Pn.WillChange) {
        const o = new Pn.WillChange("auto");
        e.addValue("willChange", o), o.add(i)
    }
}

function Wd(e) {
    return e.replace(/([A-Z])/g, i => `-${i.toLowerCase()}`)
}
const pD = "framerAppearId",
    Ix = "data-" + Wd(pD);

function $x(e) {
    return e.props[Ix]
}

function gD({
    protectedKeys: e,
    needsAnimating: i
}, a) {
    const o = e.hasOwnProperty(a) && i[a] !== !0;
    return i[a] = !1, o
}

function t1(e, i, {
    delay: a = 0,
    transitionOverride: o,
    type: l
} = {}) {
    let {
        transition: c,
        transitionEnd: f,
        ...h
    } = i;
    const p = e.getDefaultTransition();
    c = c ? Wx(c, p) : p;
    const m = c?.reduceMotion;
    o && (c = o);
    const g = [],
        v = l && e.animationState && e.animationState.getState()[l];
    for (const b in h) {
        const T = e.getValue(b, e.latestValues[b] ?? null),
            A = h[b];
        if (A === void 0 || v && gD(v, b)) continue;
        const C = {
                delay: a,
                ...Qd(c || {}, b)
            },
            M = T.get();
        if (M !== void 0 && !T.isAnimating && !Array.isArray(A) && A === M && !C.velocity) continue;
        let O = !1;
        if (window.MotionHandoffAnimation) {
            const k = $x(e);
            if (k) {
                const P = window.MotionHandoffAnimation(k, b, zt);
                P !== null && (C.startTime = P, O = !0)
            }
        }
        If(e, b);
        const _ = m ?? e.shouldReduceMotion;
        T.start(Fd(b, T, A, _ && Jx.has(b) ? {
            type: !1
        } : C, e, O));
        const j = T.animation;
        j && g.push(j)
    }
    if (f) {
        const b = () => zt.update(() => {
            f && hD(e, f)
        });
        g.length ? Promise.all(g).then(b) : b()
    }
    return g
}

function $f(e, i, a = {}) {
    const o = Ys(e, i, a.type === "exit" ? e.presenceContext?.custom : void 0);
    let {
        transition: l = e.getDefaultTransition() || {}
    } = o || {};
    a.transitionOverride && (l = a.transitionOverride);
    const c = o ? () => Promise.all(t1(e, o, a)) : () => Promise.resolve(),
        f = e.variantChildren && e.variantChildren.size ? (p = 0) => {
            const {
                delayChildren: m = 0,
                staggerChildren: g,
                staggerDirection: v
            } = l;
            return yD(e, i, p, m, g, v, a)
        } : () => Promise.resolve(),
        {
            when: h
        } = l;
    if (h) {
        const [p, m] = h === "beforeChildren" ? [c, f] : [f, c];
        return p().then(() => m())
    } else return Promise.all([c(), f(a.delay)])
}

function yD(e, i, a = 0, o = 0, l = 0, c = 1, f) {
    const h = [];
    for (const p of e.variantChildren) p.notify("AnimationStart", i), h.push($f(p, i, {
        ...f,
        delay: a + (typeof o == "function" ? 0 : o) + Fx(e.variantChildren, p, o, l, c)
    }).then(() => p.notify("AnimationComplete", i)));
    return Promise.all(h)
}

function vD(e, i, a = {}) {
    e.notify("AnimationStart", i);
    let o;
    if (Array.isArray(i)) {
        const l = i.map(c => $f(e, c, a));
        o = Promise.all(l)
    } else if (typeof i == "string") o = $f(e, i, a);
    else {
        const l = typeof i == "function" ? Ys(e, i, a.custom) : i;
        o = Promise.all(t1(e, l, a))
    }
    return o.then(() => {
        e.notify("AnimationComplete", i)
    })
}
const bD = {
        test: e => e === "auto",
        parse: e => e
    },
    e1 = e => i => i.test(e),
    n1 = [Ws, it, yn, pi, ZR, FR, bD],
    mv = e => n1.find(e1(e));

function xD(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || hx(e) : !0
}
const SD = new Set(["brightness", "contrast", "saturate", "opacity"]);

function TD(e) {
    const [i, a] = e.slice(0, -1).split("(");
    if (i === "drop-shadow") return e;
    const [o] = a.match(Ud) || [];
    if (!o) return e;
    const l = a.replace(o, "");
    let c = SD.has(i) ? 1 : 0;
    return o !== a && (c *= 100), i + "(" + c + l + ")"
}
const wD = /\b([a-z-]*)\(.*?\)/gu,
    td = {
        ...en,
        getAnimatableNone: e => {
            const i = e.match(wD);
            return i ? i.map(TD).join(" ") : e
        }
    },
    ed = {
        ...en,
        getAnimatableNone: e => {
            const i = en.parse(e);
            return en.createTransformer(e)(i.map(o => typeof o == "number" ? 0 : typeof o == "object" ? {
                ...o,
                alpha: 1
            } : o))
        }
    },
    pv = {
        ...Ws,
        transform: Math.round
    },
    ED = {
        rotate: pi,
        rotateX: pi,
        rotateY: pi,
        rotateZ: pi,
        scale: Yo,
        scaleX: Yo,
        scaleY: Yo,
        scaleZ: Yo,
        skew: pi,
        skewX: pi,
        skewY: pi,
        distance: it,
        translateX: it,
        translateY: it,
        translateZ: it,
        x: it,
        y: it,
        z: it,
        perspective: it,
        transformPerspective: it,
        opacity: fr,
        originX: ev,
        originY: ev,
        originZ: it
    },
    Jd = {
        borderWidth: it,
        borderTopWidth: it,
        borderRightWidth: it,
        borderBottomWidth: it,
        borderLeftWidth: it,
        borderRadius: it,
        borderTopLeftRadius: it,
        borderTopRightRadius: it,
        borderBottomRightRadius: it,
        borderBottomLeftRadius: it,
        width: it,
        maxWidth: it,
        height: it,
        maxHeight: it,
        top: it,
        right: it,
        bottom: it,
        left: it,
        inset: it,
        insetBlock: it,
        insetBlockStart: it,
        insetBlockEnd: it,
        insetInline: it,
        insetInlineStart: it,
        insetInlineEnd: it,
        padding: it,
        paddingTop: it,
        paddingRight: it,
        paddingBottom: it,
        paddingLeft: it,
        paddingBlock: it,
        paddingBlockStart: it,
        paddingBlockEnd: it,
        paddingInline: it,
        paddingInlineStart: it,
        paddingInlineEnd: it,
        margin: it,
        marginTop: it,
        marginRight: it,
        marginBottom: it,
        marginLeft: it,
        marginBlock: it,
        marginBlockStart: it,
        marginBlockEnd: it,
        marginInline: it,
        marginInlineStart: it,
        marginInlineEnd: it,
        fontSize: it,
        backgroundPositionX: it,
        backgroundPositionY: it,
        ...ED,
        zIndex: pv,
        fillOpacity: fr,
        strokeOpacity: fr,
        numOctaves: pv
    },
    AD = {
        ...Jd,
        color: Ft,
        backgroundColor: Ft,
        outlineColor: Ft,
        fill: Ft,
        stroke: Ft,
        borderColor: Ft,
        borderTopColor: Ft,
        borderRightColor: Ft,
        borderBottomColor: Ft,
        borderLeftColor: Ft,
        filter: td,
        WebkitFilter: td,
        mask: ed,
        WebkitMask: ed
    },
    i1 = e => AD[e],
    CD = new Set([td, ed]);

function s1(e, i) {
    let a = i1(e);
    return CD.has(a) || (a = en), a.getAnimatableNone ? a.getAnimatableNone(i) : void 0
}
const RD = new Set(["auto", "none", "0"]);

function MD(e, i, a) {
    let o = 0,
        l;
    for (; o < e.length && !l;) {
        const c = e[o];
        typeof c == "string" && !RD.has(c) && dr(c).values.length && (l = e[o]), o++
    }
    if (l && a)
        for (const c of i) e[c] = s1(a, l)
}
class DD extends Kd {
    constructor(i, a, o, l, c) {
        super(i, a, o, l, c, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: i,
            element: a,
            name: o
        } = this;
        if (!a || !a.current) return;
        super.readKeyframes();
        for (let g = 0; g < i.length; g++) {
            let v = i[g];
            if (typeof v == "string" && (v = v.trim(), Pd(v))) {
                const b = Zx(v, a.current);
                b !== void 0 && (i[g] = b), g === i.length - 1 && (this.finalKeyframe = v)
            }
        }
        if (this.resolveNoneKeyframes(), !Jx.has(o) || i.length !== 2) return;
        const [l, c] = i, f = mv(l), h = mv(c), p = tv(l), m = tv(c);
        if (p !== m && gi[o]) {
            this.needsMeasurement = !0;
            return
        }
        if (f !== h)
            if (uv(f) && uv(h))
                for (let g = 0; g < i.length; g++) {
                    const v = i[g];
                    typeof v == "string" && (i[g] = parseFloat(v))
                } else gi[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: i,
            name: a
        } = this, o = [];
        for (let l = 0; l < i.length; l++)(i[l] === null || xD(i[l])) && o.push(l);
        o.length && MD(i, o, a)
    }
    measureInitialState() {
        const {
            element: i,
            unresolvedKeyframes: a,
            name: o
        } = this;
        if (!i || !i.current) return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = gi[o](i.measureViewportBox(), window.getComputedStyle(i.current)), a[0] = this.measuredOrigin;
        const l = a[a.length - 1];
        l !== void 0 && i.getValue(o, l).jump(l, !1)
    }
    measureEndState() {
        const {
            element: i,
            name: a,
            unresolvedKeyframes: o
        } = this;
        if (!i || !i.current) return;
        const l = i.getValue(a);
        l && l.jump(this.measuredOrigin, !1);
        const c = o.length - 1,
            f = o[c];
        o[c] = gi[a](i.measureViewportBox(), window.getComputedStyle(i.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), this.removedTransforms?.length && this.removedTransforms.forEach(([h, p]) => {
            i.getValue(h).set(p)
        }), this.resolveNoneKeyframes()
    }
}
const OD = new Set(["opacity", "clipPath", "filter", "transform"]);

function a1(e, i, a) {
    if (e == null) return [];
    if (e instanceof EventTarget) return [e];
    if (typeof e == "string") {
        let o = document;
        const l = a?.[e] ?? o.querySelectorAll(e);
        return l ? Array.from(l) : []
    }
    return Array.from(e).filter(o => o != null)
}
const r1 = (e, i) => i && typeof e == "number" ? i.transform(e) : e;

function nd(e) {
    return dx(e) && "offsetHeight" in e
}
const {
    schedule: Id
} = Cx(queueMicrotask, !1), Ie = {
    x: !1,
    y: !1
};

function o1() {
    return Ie.x || Ie.y
}

function ND(e) {
    return e === "x" || e === "y" ? Ie[e] ? null : (Ie[e] = !0, () => {
        Ie[e] = !1
    }) : Ie.x || Ie.y ? null : (Ie.x = Ie.y = !0, () => {
        Ie.x = Ie.y = !1
    })
}

function l1(e, i) {
    const a = a1(e),
        o = new AbortController,
        l = {
            passive: !0,
            ...i,
            signal: o.signal
        };
    return [a, l, () => o.abort()]
}

function jD(e) {
    return !(e.pointerType === "touch" || o1())
}

function _D(e, i, a = {}) {
    const [o, l, c] = l1(e, a);
    return o.forEach(f => {
        let h = !1,
            p = !1,
            m;
        const g = () => {
                f.removeEventListener("pointerleave", A)
            },
            v = M => {
                m && (m(M), m = void 0), g()
            },
            b = M => {
                h = !1, window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), p && (p = !1, v(M))
            },
            T = () => {
                h = !0, window.addEventListener("pointerup", b, l), window.addEventListener("pointercancel", b, l)
            },
            A = M => {
                if (M.pointerType !== "touch") {
                    if (h) {
                        p = !0;
                        return
                    }
                    v(M)
                }
            },
            C = M => {
                if (!jD(M)) return;
                p = !1;
                const O = i(f, M);
                typeof O == "function" && (m = O, f.addEventListener("pointerleave", A, l))
            };
        f.addEventListener("pointerenter", C, l), f.addEventListener("pointerdown", T, l)
    }), c
}
const u1 = (e, i) => i ? e === i ? !0 : u1(e, i.parentElement) : !1,
    $d = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
    VD = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function zD(e) {
    return VD.has(e.tagName) || e.isContentEditable === !0
}
const LD = new Set(["INPUT", "SELECT", "TEXTAREA"]);

function kD(e) {
    return LD.has(e.tagName) || e.isContentEditable === !0
}
const Jo = new WeakSet;

function gv(e) {
    return i => {
        i.key === "Enter" && e(i)
    }
}

function mf(e, i) {
    e.dispatchEvent(new PointerEvent("pointer" + i, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const PD = (e, i) => {
    const a = e.currentTarget;
    if (!a) return;
    const o = gv(() => {
        if (Jo.has(a)) return;
        mf(a, "down");
        const l = gv(() => {
                mf(a, "up")
            }),
            c = () => mf(a, "cancel");
        a.addEventListener("keyup", l, i), a.addEventListener("blur", c, i)
    });
    a.addEventListener("keydown", o, i), a.addEventListener("blur", () => a.removeEventListener("keydown", o), i)
};

function yv(e) {
    return $d(e) && !o1()
}
const vv = new WeakSet;

function UD(e, i, a = {}) {
    const [o, l, c] = l1(e, a), f = h => {
        const p = h.currentTarget;
        if (!yv(h) || vv.has(h)) return;
        Jo.add(p), a.stopPropagation && vv.add(h);
        const m = i(p, h),
            g = (T, A) => {
                window.removeEventListener("pointerup", v), window.removeEventListener("pointercancel", b), Jo.has(p) && Jo.delete(p), yv(T) && typeof m == "function" && m(T, {
                    success: A
                })
            },
            v = T => {
                g(T, p === window || p === document || a.useGlobalTarget || u1(p, T.target))
            },
            b = T => {
                g(T, !1)
            };
        window.addEventListener("pointerup", v, l), window.addEventListener("pointercancel", b, l)
    };
    return o.forEach(h => {
        (a.useGlobalTarget ? window : h).addEventListener("pointerdown", f, l), nd(h) && (h.addEventListener("focus", m => PD(m, l)), !zD(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0))
    }), c
}

function th(e) {
    return dx(e) && "ownerSVGElement" in e
}
const Io = new WeakMap;
let $o;
const c1 = (e, i, a) => (o, l) => l && l[0] ? l[0][e + "Size"] : th(o) && "getBBox" in o ? o.getBBox()[i] : o[a],
    BD = c1("inline", "width", "offsetWidth"),
    HD = c1("block", "height", "offsetHeight");

function qD({
    target: e,
    borderBoxSize: i
}) {
    Io.get(e)?.forEach(a => {
        a(e, {
            get width() {
                return BD(e, i)
            },
            get height() {
                return HD(e, i)
            }
        })
    })
}

function GD(e) {
    e.forEach(qD)
}

function YD() {
    typeof ResizeObserver > "u" || ($o = new ResizeObserver(GD))
}

function XD(e, i) {
    $o || YD();
    const a = a1(e);
    return a.forEach(o => {
        let l = Io.get(o);
        l || (l = new Set, Io.set(o, l)), l.add(i), $o?.observe(o)
    }), () => {
        a.forEach(o => {
            const l = Io.get(o);
            l?.delete(i), l?.size || $o?.unobserve(o)
        })
    }
}
const tl = new Set;
let Us;

function KD() {
    Us = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        tl.forEach(i => i(e))
    }, window.addEventListener("resize", Us)
}

function QD(e) {
    return tl.add(e), Us || KD(), () => {
        tl.delete(e), !tl.size && typeof Us == "function" && (window.removeEventListener("resize", Us), Us = void 0)
    }
}

function bv(e, i) {
    return typeof e == "function" ? QD(e) : XD(e, i)
}

function FD(e) {
    return th(e) && e.tagName === "svg"
}
const ZD = [...n1, Ft, en],
    WD = e => ZD.find(e1(e)),
    xv = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Bs = () => ({
        x: xv(),
        y: xv()
    }),
    Sv = () => ({
        min: 0,
        max: 0
    }),
    It = () => ({
        x: Sv(),
        y: Sv()
    }),
    JD = new WeakMap;

function jl(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}

function hr(e) {
    return typeof e == "string" || Array.isArray(e)
}
const eh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    nh = ["initial", ...eh];

function _l(e) {
    return jl(e.animate) || nh.some(i => hr(e[i]))
}

function f1(e) {
    return !!(_l(e) || e.variants)
}

function ID(e, i, a) {
    for (const o in i) {
        const l = i[o],
            c = a[o];
        if (de(l)) e.addValue(o, l);
        else if (de(c)) e.addValue(o, Qs(l, {
            owner: e
        }));
        else if (c !== l)
            if (e.hasValue(o)) {
                const f = e.getValue(o);
                f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l)
            } else {
                const f = e.getStaticValue(o);
                e.addValue(o, Qs(f !== void 0 ? f : l, {
                    owner: e
                }))
            }
    }
    for (const o in a) i[o] === void 0 && e.removeValue(o);
    return i
}
const id = {
        current: null
    },
    d1 = {
        current: !1
    },
    $D = typeof window < "u";

function tO() {
    if (d1.current = !0, !!$D)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                i = () => id.current = e.matches;
            e.addEventListener("change", i), i()
        } else id.current = !1
}
const Tv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let hl = {};

function h1(e) {
    hl = e
}

function eO() {
    return hl
}
class nO {
    scrapeMotionValuesFromProps(i, a, o) {
        return {}
    }
    constructor({
        parent: i,
        props: a,
        presenceContext: o,
        reducedMotionConfig: l,
        skipAnimations: c,
        blockInitialAnimation: f,
        visualState: h
    }, p = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = Kd, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const T = pe.now();
            this.renderScheduledAt < T && (this.renderScheduledAt = T, zt.render(this.render, !1, !0))
        };
        const {
            latestValues: m,
            renderState: g
        } = h;
        this.latestValues = m, this.baseTarget = {
            ...m
        }, this.initialValues = a.initial ? {
            ...m
        } : {}, this.renderState = g, this.parent = i, this.props = a, this.presenceContext = o, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = l, this.skipAnimationsConfig = c, this.options = p, this.blockInitialAnimation = !!f, this.isControllingVariants = _l(a), this.isVariantNode = f1(a), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(i && i.current);
        const {
            willChange: v,
            ...b
        } = this.scrapeMotionValuesFromProps(a, {}, this);
        for (const T in b) {
            const A = b[T];
            m[T] !== void 0 && de(A) && A.set(m[T])
        }
    }
    mount(i) {
        if (this.hasBeenMounted)
            for (const a in this.initialValues) this.values.get(a)?.jump(this.initialValues[a]), this.latestValues[a] = this.initialValues[a];
        this.current = i, JD.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((a, o) => this.bindToMotionValue(o, a)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (d1.current || tO(), this.shouldReduceMotion = id.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
    }
    unmount() {
        this.projection && this.projection.unmount(), Si(this.notifyUpdate), Si(this.render), this.valueSubscriptions.forEach(i => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
        for (const i in this.events) this.events[i].clear();
        for (const i in this.features) {
            const a = this.features[i];
            a && (a.unmount(), a.isMounted = !1)
        }
        this.current = null
    }
    addChild(i) {
        this.children.add(i), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(i)
    }
    removeChild(i) {
        this.children.delete(i), this.enteringChildren && this.enteringChildren.delete(i)
    }
    bindToMotionValue(i, a) {
        if (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(), a.accelerate && OD.has(i) && this.current instanceof HTMLElement) {
            const {
                factory: f,
                keyframes: h,
                times: p,
                ease: m,
                duration: g
            } = a.accelerate, v = new Kx({
                element: this.current,
                name: i,
                keyframes: h,
                times: p,
                ease: m,
                duration: tn(g)
            }), b = f(v);
            this.valueSubscriptions.set(i, () => {
                b(), v.cancel()
            });
            return
        }
        const o = Is.has(i);
        o && this.onBindTransform && this.onBindTransform();
        const l = a.on("change", f => {
            this.latestValues[i] = f, this.props.onUpdate && zt.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
        });
        let c;
        typeof window < "u" && window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, i, a)), this.valueSubscriptions.set(i, () => {
            l(), c && c(), a.owner && a.stop()
        })
    }
    sortNodePosition(i) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current)
    }
    updateFeatures() {
        let i = "animation";
        for (i in hl) {
            const a = hl[i];
            if (!a) continue;
            const {
                isEnabled: o,
                Feature: l
            } = a;
            if (!this.features[i] && l && o(this.props) && (this.features[i] = new l(this)), this.features[i]) {
                const c = this.features[i];
                c.isMounted ? c.update() : (c.mount(), c.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : It()
    }
    getStaticValue(i) {
        return this.latestValues[i]
    }
    setStaticValue(i, a) {
        this.latestValues[i] = a
    }
    update(i, a) {
        (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = i, this.prevPresenceContext = this.presenceContext, this.presenceContext = a;
        for (let o = 0; o < Tv.length; o++) {
            const l = Tv[o];
            this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](), delete this.propEventSubscriptions[l]);
            const c = "on" + l,
                f = i[c];
            f && (this.propEventSubscriptions[l] = this.on(l, f))
        }
        this.prevMotionValues = ID(this, this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(i) {
        return this.props.variants ? this.props.variants[i] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(i) {
        const a = this.getClosestVariantNode();
        if (a) return a.variantChildren && a.variantChildren.add(i), () => a.variantChildren.delete(i)
    }
    addValue(i, a) {
        const o = this.values.get(i);
        a !== o && (o && this.removeValue(i), this.bindToMotionValue(i, a), this.values.set(i, a), this.latestValues[i] = a.get())
    }
    removeValue(i) {
        this.values.delete(i);
        const a = this.valueSubscriptions.get(i);
        a && (a(), this.valueSubscriptions.delete(i)), delete this.latestValues[i], this.removeValueFromRenderState(i, this.renderState)
    }
    hasValue(i) {
        return this.values.has(i)
    }
    getValue(i, a) {
        if (this.props.values && this.props.values[i]) return this.props.values[i];
        let o = this.values.get(i);
        return o === void 0 && a !== void 0 && (o = Qs(a === null ? void 0 : a, {
            owner: this
        }), this.addValue(i, o)), o
    }
    readValue(i, a) {
        let o = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
        return o != null && (typeof o == "string" && (fx(o) || hx(o)) ? o = parseFloat(o) : !WD(o) && en.test(a) && (o = s1(i, a)), this.setBaseTarget(i, de(o) ? o.get() : o)), de(o) ? o.get() : o
    }
    setBaseTarget(i, a) {
        this.baseTarget[i] = a
    }
    getBaseTarget(i) {
        const {
            initial: a
        } = this.props;
        let o;
        if (typeof a == "string" || typeof a == "object") {
            const c = Zd(this.props, a, this.presenceContext?.custom);
            c && (o = c[i])
        }
        if (a && o !== void 0) return o;
        const l = this.getBaseTargetFromProps(this.props, i);
        return l !== void 0 && !de(l) ? l : this.initialValues[i] !== void 0 && o === void 0 ? void 0 : this.baseTarget[i]
    }
    on(i, a) {
        return this.events[i] || (this.events[i] = new zd), this.events[i].add(a)
    }
    notify(i, ...a) {
        this.events[i] && this.events[i].notify(...a)
    }
    scheduleRenderMicrotask() {
        Id.render(this.render)
    }
}
class m1 extends nO {
    constructor() {
        super(...arguments), this.KeyframeResolver = DD
    }
    sortInstanceNodePosition(i, a) {
        return i.compareDocumentPosition(a) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(i, a) {
        const o = i.style;
        return o ? o[a] : void 0
    }
    removeValueFromRenderState(i, {
        vars: a,
        style: o
    }) {
        delete a[i], delete o[i]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: i
        } = this.props;
        de(i) && (this.childSubscription = i.on("change", a => {
            this.current && (this.current.textContent = `${a}`)
        }))
    }
}
class wi {
    constructor(i) {
        this.isMounted = !1, this.node = i
    }
    update() {}
}

function p1({
    top: e,
    left: i,
    right: a,
    bottom: o
}) {
    return {
        x: {
            min: i,
            max: a
        },
        y: {
            min: e,
            max: o
        }
    }
}

function iO({
    x: e,
    y: i
}) {
    return {
        top: i.min,
        right: e.max,
        bottom: i.max,
        left: e.min
    }
}

function sO(e, i) {
    if (!i) return e;
    const a = i({
            x: e.left,
            y: e.top
        }),
        o = i({
            x: e.right,
            y: e.bottom
        });
    return {
        top: a.y,
        left: a.x,
        bottom: o.y,
        right: o.x
    }
}

function pf(e) {
    return e === void 0 || e === 1
}

function sd({
    scale: e,
    scaleX: i,
    scaleY: a
}) {
    return !pf(e) || !pf(i) || !pf(a)
}

function Xi(e) {
    return sd(e) || g1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function g1(e) {
    return wv(e.x) || wv(e.y)
}

function wv(e) {
    return e && e !== "0%"
}

function ml(e, i, a) {
    const o = e - a,
        l = i * o;
    return a + l
}

function Ev(e, i, a, o, l) {
    return l !== void 0 && (e = ml(e, l, o)), ml(e, a, o) + i
}

function ad(e, i = 0, a = 1, o, l) {
    e.min = Ev(e.min, i, a, o, l), e.max = Ev(e.max, i, a, o, l)
}

function y1(e, {
    x: i,
    y: a
}) {
    ad(e.x, i.translate, i.scale, i.originPoint), ad(e.y, a.translate, a.scale, a.originPoint)
}
const Av = .999999999999,
    Cv = 1.0000000000001;

function aO(e, i, a, o = !1) {
    const l = a.length;
    if (!l) return;
    i.x = i.y = 1;
    let c, f;
    for (let h = 0; h < l; h++) {
        c = a[h], f = c.projectionDelta;
        const {
            visualElement: p
        } = c.options;
        p && p.props.style && p.props.style.display === "contents" || (o && c.options.layoutScroll && c.scroll && c !== c.root && qs(e, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
        }), f && (i.x *= f.x.scale, i.y *= f.y.scale, y1(e, f)), o && Xi(c.latestValues) && qs(e, c.latestValues))
    }
    i.x < Cv && i.x > Av && (i.x = 1), i.y < Cv && i.y > Av && (i.y = 1)
}

function Hs(e, i) {
    e.min = e.min + i, e.max = e.max + i
}

function Rv(e, i, a, o, l = .5) {
    const c = Bt(e.min, e.max, l);
    ad(e, i, a, c, o)
}

function Mv(e, i) {
    return typeof e == "string" ? parseFloat(e) / 100 * (i.max - i.min) : e
}

function qs(e, i) {
    Rv(e.x, Mv(i.x, e.x), i.scaleX, i.scale, i.originX), Rv(e.y, Mv(i.y, e.y), i.scaleY, i.scale, i.originY)
}

function v1(e, i) {
    return p1(sO(e.getBoundingClientRect(), i))
}

function rO(e, i, a) {
    const o = v1(e, a),
        {
            scroll: l
        } = i;
    return l && (Hs(o.x, l.offset.x), Hs(o.y, l.offset.y)), o
}
const oO = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    lO = Js.length;

function uO(e, i, a) {
    let o = "",
        l = !0;
    for (let c = 0; c < lO; c++) {
        const f = Js[c],
            h = e[f];
        if (h === void 0) continue;
        let p = !0;
        if (typeof h == "number") p = h === (f.startsWith("scale") ? 1 : 0);
        else {
            const m = parseFloat(h);
            p = f.startsWith("scale") ? m === 1 : m === 0
        }
        if (!p || a) {
            const m = r1(h, Jd[f]);
            if (!p) {
                l = !1;
                const g = oO[f] || f;
                o += `${g}(${m}) `
            }
            a && (i[f] = m)
        }
    }
    return o = o.trim(), a ? o = a(i, l ? "" : o) : l && (o = "none"), o
}

function ih(e, i, a) {
    const {
        style: o,
        vars: l,
        transformOrigin: c
    } = e;
    let f = !1,
        h = !1;
    for (const p in i) {
        const m = i[p];
        if (Is.has(p)) {
            f = !0;
            continue
        } else if (Mx(p)) {
            l[p] = m;
            continue
        } else {
            const g = r1(m, Jd[p]);
            p.startsWith("origin") ? (h = !0, c[p] = g) : o[p] = g
        }
    }
    if (i.transform || (f || a ? o.transform = uO(i, e.transform, a) : o.transform && (o.transform = "none")), h) {
        const {
            originX: p = "50%",
            originY: m = "50%",
            originZ: g = 0
        } = c;
        o.transformOrigin = `${p} ${m} ${g}`
    }
}

function b1(e, {
    style: i,
    vars: a
}, o, l) {
    const c = e.style;
    let f;
    for (f in i) c[f] = i[f];
    l?.applyProjectionStyles(c, o);
    for (f in a) c.setProperty(f, a[f])
}

function Dv(e, i) {
    return i.max === i.min ? 0 : e / (i.max - i.min) * 100
}
const $a = {
        correct: (e, i) => {
            if (!i.target) return e;
            if (typeof e == "string")
                if (it.test(e)) e = parseFloat(e);
                else return e;
            const a = Dv(e, i.target.x),
                o = Dv(e, i.target.y);
            return `${a}% ${o}%`
        }
    },
    cO = {
        correct: (e, {
            treeScale: i,
            projectionDelta: a
        }) => {
            const o = e,
                l = en.parse(e);
            if (l.length > 5) return o;
            const c = en.createTransformer(e),
                f = typeof l[0] != "number" ? 1 : 0,
                h = a.x.scale * i.x,
                p = a.y.scale * i.y;
            l[0 + f] /= h, l[1 + f] /= p;
            const m = Bt(h, p, .5);
            return typeof l[2 + f] == "number" && (l[2 + f] /= m), typeof l[3 + f] == "number" && (l[3 + f] /= m), c(l)
        }
    },
    rd = {
        borderRadius: {
            ...$a,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: $a,
        borderTopRightRadius: $a,
        borderBottomLeftRadius: $a,
        borderBottomRightRadius: $a,
        boxShadow: cO
    };

function x1(e, {
    layout: i,
    layoutId: a
}) {
    return Is.has(e) || e.startsWith("origin") || (i || a !== void 0) && (!!rd[e] || e === "opacity")
}

function sh(e, i, a) {
    const o = e.style,
        l = i?.style,
        c = {};
    if (!o) return c;
    for (const f in o)(de(o[f]) || l && de(l[f]) || x1(f, e) || a?.getValue(f)?.liveStyle !== void 0) && (c[f] = o[f]);
    return c
}

function fO(e) {
    return window.getComputedStyle(e)
}
class dO extends m1 {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = b1
    }
    readValueFromInstance(i, a) {
        if (Is.has(a)) return this.projection?.isProjecting ? Xf(a) : jM(i, a);
        {
            const o = fO(i),
                l = (Mx(a) ? o.getPropertyValue(a) : o[a]) || 0;
            return typeof l == "string" ? l.trim() : l
        }
    }
    measureInstanceViewportBox(i, {
        transformPagePoint: a
    }) {
        return v1(i, a)
    }
    build(i, a, o) {
        ih(i, a, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(i, a, o) {
        return sh(i, a, o)
    }
}
const hO = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    mO = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function pO(e, i, a = 1, o = 0, l = !0) {
    e.pathLength = 1;
    const c = l ? hO : mO;
    e[c.offset] = `${-o}`, e[c.array] = `${i} ${a}`
}
const gO = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

function S1(e, {
    attrX: i,
    attrY: a,
    attrScale: o,
    pathLength: l,
    pathSpacing: c = 1,
    pathOffset: f = 0,
    ...h
}, p, m, g) {
    if (ih(e, h, m), p) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: v,
        style: b
    } = e;
    v.transform && (b.transform = v.transform, delete v.transform), (b.transform || v.transformOrigin) && (b.transformOrigin = v.transformOrigin ?? "50% 50%", delete v.transformOrigin), b.transform && (b.transformBox = g?.transformBox ?? "fill-box", delete v.transformBox);
    for (const T of gO) v[T] !== void 0 && (b[T] = v[T], delete v[T]);
    i !== void 0 && (v.x = i), a !== void 0 && (v.y = a), o !== void 0 && (v.scale = o), l !== void 0 && pO(v, l, c, f, !1)
}
const T1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
    w1 = e => typeof e == "string" && e.toLowerCase() === "svg";

function yO(e, i, a, o) {
    b1(e, i, void 0, o);
    for (const l in i.attrs) e.setAttribute(T1.has(l) ? l : Wd(l), i.attrs[l])
}

function E1(e, i, a) {
    const o = sh(e, i, a);
    for (const l in e)
        if (de(e[l]) || de(i[l])) {
            const c = Js.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
            o[c] = e[l]
        } return o
}
class vO extends m1 {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = It
    }
    getBaseTargetFromProps(i, a) {
        return i[a]
    }
    readValueFromInstance(i, a) {
        if (Is.has(a)) {
            const o = i1(a);
            return o && o.default || 0
        }
        return a = T1.has(a) ? a : Wd(a), i.getAttribute(a)
    }
    scrapeMotionValuesFromProps(i, a, o) {
        return E1(i, a, o)
    }
    build(i, a, o) {
        S1(i, a, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(i, a, o, l) {
        yO(i, a, o, l)
    }
    mount(i) {
        this.isSVGTag = w1(i.tagName), super.mount(i)
    }
}
const bO = nh.length;

function A1(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const a = e.parent ? A1(e.parent) || {} : {};
        return e.props.initial !== void 0 && (a.initial = e.props.initial), a
    }
    const i = {};
    for (let a = 0; a < bO; a++) {
        const o = nh[a],
            l = e.props[o];
        (hr(l) || l === !1) && (i[o] = l)
    }
    return i
}

function C1(e, i) {
    if (!Array.isArray(i)) return !1;
    const a = i.length;
    if (a !== e.length) return !1;
    for (let o = 0; o < a; o++)
        if (i[o] !== e[o]) return !1;
    return !0
}
const xO = [...eh].reverse(),
    SO = eh.length;

function TO(e) {
    return i => Promise.all(i.map(({
        animation: a,
        options: o
    }) => vD(e, a, o)))
}

function wO(e) {
    let i = TO(e),
        a = Ov(),
        o = !0,
        l = !1;
    const c = m => (g, v) => {
        const b = Ys(e, v, m === "exit" ? e.presenceContext?.custom : void 0);
        if (b) {
            const {
                transition: T,
                transitionEnd: A,
                ...C
            } = b;
            g = {
                ...g,
                ...C,
                ...A
            }
        }
        return g
    };

    function f(m) {
        i = m(e)
    }

    function h(m) {
        const {
            props: g
        } = e, v = A1(e.parent) || {}, b = [], T = new Set;
        let A = {},
            C = 1 / 0;
        for (let O = 0; O < SO; O++) {
            const _ = xO[O],
                j = a[_],
                k = g[_] !== void 0 ? g[_] : v[_],
                P = hr(k),
                Q = _ === m ? j.isActive : null;
            Q === !1 && (C = O);
            let Z = k === v[_] && k !== g[_] && P;
            if (Z && (o || l) && e.manuallyAnimateOnMount && (Z = !1), j.protectedKeys = {
                    ...A
                }, !j.isActive && Q === null || !k && !j.prevProp || jl(k) || typeof k == "boolean") continue;
            if (_ === "exit" && j.isActive && Q !== !0) {
                j.prevResolvedValues && (A = {
                    ...A,
                    ...j.prevResolvedValues
                });
                continue
            }
            const H = EO(j.prevProp, k);
            let W = H || _ === m && j.isActive && !Z && P || O > C && P,
                ot = !1;
            const pt = Array.isArray(k) ? k : [k];
            let ut = pt.reduce(c(_), {});
            Q === !1 && (ut = {});
            const {
                prevResolvedValues: bt = {}
            } = j, $ = {
                ...bt,
                ...ut
            }, ft = X => {
                W = !0, T.has(X) && (ot = !0, T.delete(X)), j.needsAnimating[X] = !0;
                const tt = e.getValue(X);
                tt && (tt.liveStyle = !1)
            };
            for (const X in $) {
                const tt = ut[X],
                    w = bt[X];
                if (A.hasOwnProperty(X)) continue;
                let G = !1;
                Jf(tt) && Jf(w) ? G = !C1(tt, w) : G = tt !== w, G ? tt != null ? ft(X) : T.add(X) : tt !== void 0 && T.has(X) ? ft(X) : j.protectedKeys[X] = !0
            }
            j.prevProp = k, j.prevResolvedValues = ut, j.isActive && (A = {
                ...A,
                ...ut
            }), (o || l) && e.blockInitialAnimation && (W = !1);
            const V = Z && H;
            W && (!V || ot) && b.push(...pt.map(X => {
                const tt = {
                    type: _
                };
                if (typeof X == "string" && (o || l) && !V && e.manuallyAnimateOnMount && e.parent) {
                    const {
                        parent: w
                    } = e, G = Ys(w, X);
                    if (w.enteringChildren && G) {
                        const {
                            delayChildren: I
                        } = G.transition || {};
                        tt.delay = Fx(w.enteringChildren, e, I)
                    }
                }
                return {
                    animation: X,
                    options: tt
                }
            }))
        }
        if (T.size) {
            const O = {};
            if (typeof g.initial != "boolean") {
                const _ = Ys(e, Array.isArray(g.initial) ? g.initial[0] : g.initial);
                _ && _.transition && (O.transition = _.transition)
            }
            T.forEach(_ => {
                const j = e.getBaseTarget(_),
                    k = e.getValue(_);
                k && (k.liveStyle = !0), O[_] = j ?? null
            }), b.push({
                animation: O
            })
        }
        let M = !!b.length;
        return o && (g.initial === !1 || g.initial === g.animate) && !e.manuallyAnimateOnMount && (M = !1), o = !1, l = !1, M ? i(b) : Promise.resolve()
    }

    function p(m, g) {
        if (a[m].isActive === g) return Promise.resolve();
        e.variantChildren?.forEach(b => b.animationState?.setActive(m, g)), a[m].isActive = g;
        const v = h(m);
        for (const b in a) a[b].protectedKeys = {};
        return v
    }
    return {
        animateChanges: h,
        setActive: p,
        setAnimateFunction: f,
        getState: () => a,
        reset: () => {
            a = Ov(), l = !0
        }
    }
}

function EO(e, i) {
    return typeof i == "string" ? i !== e : Array.isArray(i) ? !C1(i, e) : !1
}

function Yi(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Ov() {
    return {
        animate: Yi(!0),
        whileInView: Yi(),
        whileHover: Yi(),
        whileTap: Yi(),
        whileDrag: Yi(),
        whileFocus: Yi(),
        exit: Yi()
    }
}

function Nv(e, i) {
    e.min = i.min, e.max = i.max
}

function Je(e, i) {
    Nv(e.x, i.x), Nv(e.y, i.y)
}

function jv(e, i) {
    e.translate = i.translate, e.scale = i.scale, e.originPoint = i.originPoint, e.origin = i.origin
}
const R1 = 1e-4,
    AO = 1 - R1,
    CO = 1 + R1,
    M1 = .01,
    RO = 0 - M1,
    MO = 0 + M1;

function ge(e) {
    return e.max - e.min
}

function DO(e, i, a) {
    return Math.abs(e - i) <= a
}

function _v(e, i, a, o = .5) {
    e.origin = o, e.originPoint = Bt(i.min, i.max, e.origin), e.scale = ge(a) / ge(i), e.translate = Bt(a.min, a.max, e.origin) - e.originPoint, (e.scale >= AO && e.scale <= CO || isNaN(e.scale)) && (e.scale = 1), (e.translate >= RO && e.translate <= MO || isNaN(e.translate)) && (e.translate = 0)
}

function ar(e, i, a, o) {
    _v(e.x, i.x, a.x, o ? o.originX : void 0), _v(e.y, i.y, a.y, o ? o.originY : void 0)
}

function Vv(e, i, a) {
    e.min = a.min + i.min, e.max = e.min + ge(i)
}

function OO(e, i, a) {
    Vv(e.x, i.x, a.x), Vv(e.y, i.y, a.y)
}

function zv(e, i, a) {
    e.min = i.min - a.min, e.max = e.min + ge(i)
}

function pl(e, i, a) {
    zv(e.x, i.x, a.x), zv(e.y, i.y, a.y)
}

function Lv(e, i, a, o, l) {
    return e -= i, e = ml(e, 1 / a, o), l !== void 0 && (e = ml(e, 1 / l, o)), e
}

function NO(e, i = 0, a = 1, o = .5, l, c = e, f = e) {
    if (yn.test(i) && (i = parseFloat(i), i = Bt(f.min, f.max, i / 100) - f.min), typeof i != "number") return;
    let h = Bt(c.min, c.max, o);
    e === c && (h -= i), e.min = Lv(e.min, i, a, h, l), e.max = Lv(e.max, i, a, h, l)
}

function kv(e, i, [a, o, l], c, f) {
    NO(e, i[a], i[o], i[l], i.scale, c, f)
}
const jO = ["x", "scaleX", "originX"],
    _O = ["y", "scaleY", "originY"];

function Pv(e, i, a, o) {
    kv(e.x, i, jO, a ? a.x : void 0, o ? o.x : void 0), kv(e.y, i, _O, a ? a.y : void 0, o ? o.y : void 0)
}

function Uv(e) {
    return e.translate === 0 && e.scale === 1
}

function D1(e) {
    return Uv(e.x) && Uv(e.y)
}

function Bv(e, i) {
    return e.min === i.min && e.max === i.max
}

function VO(e, i) {
    return Bv(e.x, i.x) && Bv(e.y, i.y)
}

function Hv(e, i) {
    return Math.round(e.min) === Math.round(i.min) && Math.round(e.max) === Math.round(i.max)
}

function O1(e, i) {
    return Hv(e.x, i.x) && Hv(e.y, i.y)
}

function qv(e) {
    return ge(e.x) / ge(e.y)
}

function Gv(e, i) {
    return e.translate === i.translate && e.scale === i.scale && e.originPoint === i.originPoint
}

function mn(e) {
    return [e("x"), e("y")]
}

function zO(e, i, a) {
    let o = "";
    const l = e.x.translate / i.x,
        c = e.y.translate / i.y,
        f = a?.z || 0;
    if ((l || c || f) && (o = `translate3d(${l}px, ${c}px, ${f}px) `), (i.x !== 1 || i.y !== 1) && (o += `scale(${1/i.x}, ${1/i.y}) `), a) {
        const {
            transformPerspective: m,
            rotate: g,
            rotateX: v,
            rotateY: b,
            skewX: T,
            skewY: A
        } = a;
        m && (o = `perspective(${m}px) ${o}`), g && (o += `rotate(${g}deg) `), v && (o += `rotateX(${v}deg) `), b && (o += `rotateY(${b}deg) `), T && (o += `skewX(${T}deg) `), A && (o += `skewY(${A}deg) `)
    }
    const h = e.x.scale * i.x,
        p = e.y.scale * i.y;
    return (h !== 1 || p !== 1) && (o += `scale(${h}, ${p})`), o || "none"
}
const N1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    LO = N1.length,
    Yv = e => typeof e == "string" ? parseFloat(e) : e,
    Xv = e => typeof e == "number" || it.test(e);

function kO(e, i, a, o, l, c) {
    l ? (e.opacity = Bt(0, a.opacity ?? 1, PO(o)), e.opacityExit = Bt(i.opacity ?? 1, 0, UO(o))) : c && (e.opacity = Bt(i.opacity ?? 1, a.opacity ?? 1, o));
    for (let f = 0; f < LO; f++) {
        const h = `border${N1[f]}Radius`;
        let p = Kv(i, h),
            m = Kv(a, h);
        if (p === void 0 && m === void 0) continue;
        p || (p = 0), m || (m = 0), p === 0 || m === 0 || Xv(p) === Xv(m) ? (e[h] = Math.max(Bt(Yv(p), Yv(m), o), 0), (yn.test(m) || yn.test(p)) && (e[h] += "%")) : e[h] = m
    }(i.rotate || a.rotate) && (e.rotate = Bt(i.rotate || 0, a.rotate || 0, o))
}

function Kv(e, i) {
    return e[i] !== void 0 ? e[i] : e.borderRadius
}
const PO = j1(0, .5, Tx),
    UO = j1(.5, .95, Ke);

function j1(e, i, a) {
    return o => o < e ? 0 : o > i ? 1 : a(cr(e, i, o))
}

function BO(e, i, a) {
    const o = de(e) ? e : Qs(e);
    return o.start(Fd("", o, i, a)), o.animation
}

function mr(e, i, a, o = {
    passive: !0
}) {
    return e.addEventListener(i, a, o), () => e.removeEventListener(i, a)
}
const HO = (e, i) => e.depth - i.depth;
class qO {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(i) {
        _d(this.children, i), this.isDirty = !0
    }
    remove(i) {
        ul(this.children, i), this.isDirty = !0
    }
    forEach(i) {
        this.isDirty && this.children.sort(HO), this.isDirty = !1, this.children.forEach(i)
    }
}

function GO(e, i) {
    const a = pe.now(),
        o = ({
            timestamp: l
        }) => {
            const c = l - a;
            c >= i && (Si(o), e(c - i))
        };
    return zt.setup(o, !0), () => Si(o)
}

function el(e) {
    return de(e) ? e.get() : e
}
class YO {
    constructor() {
        this.members = []
    }
    add(i) {
        _d(this.members, i);
        for (let a = this.members.length - 1; a >= 0; a--) {
            const o = this.members[a];
            if (o === i || o === this.lead || o === this.prevLead) continue;
            const l = o.instance;
            (!l || l.isConnected === !1) && !o.snapshot && (ul(this.members, o), o.unmount())
        }
        i.scheduleRender()
    }
    remove(i) {
        if (ul(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
            const a = this.members[this.members.length - 1];
            a && this.promote(a)
        }
    }
    relegate(i) {
        for (let a = this.members.indexOf(i) - 1; a >= 0; a--) {
            const o = this.members[a];
            if (o.isPresent !== !1 && o.instance?.isConnected !== !1) return this.promote(o), !0
        }
        return !1
    }
    promote(i, a) {
        const o = this.lead;
        if (i !== o && (this.prevLead = o, this.lead = i, i.show(), o)) {
            o.updateSnapshot(), i.scheduleRender();
            const {
                layoutDependency: l
            } = o.options, {
                layoutDependency: c
            } = i.options;
            (l === void 0 || l !== c) && (i.resumeFrom = o, a && (o.preserveOpacity = !0), o.snapshot && (i.snapshot = o.snapshot, i.snapshot.latestValues = o.animationValues || o.latestValues), i.root?.isUpdating && (i.isLayoutDirty = !0)), i.options.crossfade === !1 && o.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(i => {
            i.options.onExitComplete?.(), i.resumingFrom?.options.onExitComplete?.()
        })
    }
    scheduleRender() {
        this.members.forEach(i => i.instance && i.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        this.lead?.snapshot && (this.lead.snapshot = void 0)
    }
}
const nl = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    },
    gf = ["", "X", "Y", "Z"],
    XO = 1e3;
let KO = 0;

function yf(e, i, a, o) {
    const {
        latestValues: l
    } = i;
    l[e] && (a[e] = l[e], i.setStaticValue(e, 0), o && (o[e] = 0))
}

function _1(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: i
    } = e.options;
    if (!i) return;
    const a = $x(i);
    if (window.MotionHasOptimisedAnimation(a, "transform")) {
        const {
            layout: l,
            layoutId: c
        } = e.options;
        window.MotionCancelOptimisedAnimation(a, "transform", zt, !(l || c))
    }
    const {
        parent: o
    } = e;
    o && !o.hasCheckedOptimisedAppear && _1(o)
}

function V1({
    attachResizeListener: e,
    defaultParent: i,
    measureScroll: a,
    checkIsScrollRoot: o,
    resetTransform: l
}) {
    return class {
        constructor(f = {}, h = i?.()) {
            this.id = KO++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(ZO), this.nodes.forEach($O), this.nodes.forEach(tN), this.nodes.forEach(WO)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = f, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++) this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new qO)
        }
        addEventListener(f, h) {
            return this.eventHandlers.has(f) || this.eventHandlers.set(f, new zd), this.eventHandlers.get(f).add(h)
        }
        notifyListeners(f, ...h) {
            const p = this.eventHandlers.get(f);
            p && p.notify(...h)
        }
        hasListeners(f) {
            return this.eventHandlers.has(f)
        }
        mount(f) {
            if (this.instance) return;
            this.isSVG = th(f) && !FD(f), this.instance = f;
            const {
                layoutId: h,
                layout: p,
                visualElement: m
            } = this.options;
            if (m && !m.current && m.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (p || h) && (this.isLayoutDirty = !0), e) {
                let g, v = 0;
                const b = () => this.root.updateBlockedByResize = !1;
                zt.read(() => {
                    v = window.innerWidth
                }), e(f, () => {
                    const T = window.innerWidth;
                    T !== v && (v = T, this.root.updateBlockedByResize = !0, g && g(), g = GO(b, 250), nl.hasAnimatedSinceResize && (nl.hasAnimatedSinceResize = !1, this.nodes.forEach(Zv)))
                })
            }
            h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && m && (h || p) && this.addEventListener("didUpdate", ({
                delta: g,
                hasLayoutChanged: v,
                hasRelativeLayoutChanged: b,
                layout: T
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const A = this.options.transition || m.getDefaultTransition() || aN,
                    {
                        onLayoutAnimationStart: C,
                        onLayoutAnimationComplete: M
                    } = m.getProps(),
                    O = !this.targetLayout || !O1(this.targetLayout, T),
                    _ = !v && b;
                if (this.options.layoutRoot || this.resumeFrom || _ || v && (O || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const j = {
                        ...Qd(A, "layout"),
                        onPlay: C,
                        onComplete: M
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (j.delay = 0, j.type = !1), this.startAnimation(j), this.setAnimationOrigin(g, _)
                } else v || Zv(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = T
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const f = this.getStack();
            f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Si(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(eN), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: f
            } = this.options;
            return f && f.getProps().transformTemplate
        }
        willUpdate(f = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && _1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g];
                v.shouldResetTransform = !0, v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1)
            }
            const {
                layoutId: h,
                layout: p
            } = this.options;
            if (h === void 0 && !p) return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Qv);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Fv);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(IO), this.nodes.forEach(QO), this.nodes.forEach(FO)) : this.nodes.forEach(Fv), this.clearAllSnapshots();
            const h = pe.now();
            oe.delta = vn(0, 1e3 / 60, h - oe.timestamp), oe.timestamp = h, oe.isProcessing = !0, lf.update.process(oe), lf.preRender.process(oe), lf.render.process(oe), oe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Id.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(JO), this.sharedNodes.forEach(nN)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, zt.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            zt.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !ge(this.snapshot.measuredBox.x) && !ge(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
            const f = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = It(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: h
            } = this.options;
            h && h.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
        }
        updateScroll(f = "measure") {
            let h = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (h = !1), h && this.instance) {
                const p = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: f,
                    isRoot: p,
                    offset: a(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!l) return;
            const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                h = this.projectionDelta && !D1(this.projectionDelta),
                p = this.getTransformTemplate(),
                m = p ? p(this.latestValues, "") : void 0,
                g = m !== this.prevTransformTemplateValue;
            f && this.instance && (h || Xi(this.latestValues) || g) && (l(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(f = !0) {
            const h = this.measurePageBox();
            let p = this.removeElementScroll(h);
            return f && (p = this.removeTransform(p)), rN(p), {
                animationId: this.root.animationId,
                measuredBox: h,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: f
            } = this.options;
            if (!f) return It();
            const h = f.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(oN))) {
                const {
                    scroll: m
                } = this.root;
                m && (Hs(h.x, m.offset.x), Hs(h.y, m.offset.y))
            }
            return h
        }
        removeElementScroll(f) {
            const h = It();
            if (Je(h, f), this.scroll?.wasRoot) return h;
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p],
                    {
                        scroll: g,
                        options: v
                    } = m;
                m !== this.root && g && v.layoutScroll && (g.wasRoot && Je(h, f), Hs(h.x, g.offset.x), Hs(h.y, g.offset.y))
            }
            return h
        }
        applyTransform(f, h = !1) {
            const p = It();
            Je(p, f);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                !h && g.options.layoutScroll && g.scroll && g !== g.root && qs(p, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }), Xi(g.latestValues) && qs(p, g.latestValues)
            }
            return Xi(this.latestValues) && qs(p, this.latestValues), p
        }
        removeTransform(f) {
            const h = It();
            Je(h, f);
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p];
                if (!m.instance || !Xi(m.latestValues)) continue;
                sd(m.latestValues) && m.updateSnapshot();
                const g = It(),
                    v = m.measurePageBox();
                Je(g, v), Pv(h, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g)
            }
            return Xi(this.latestValues) && Pv(h, this.latestValues), h
        }
        setTargetDelta(f) {
            this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(f) {
            this.options = {
                ...this.options,
                ...f,
                crossfade: f.crossfade !== void 0 ? f.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== oe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(f = !1) {
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== h;
            if (!(f || p && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: g,
                layoutId: v
            } = this.options;
            if (!this.layout || !(g || v)) return;
            this.resolvedRelativeTargetAt = oe.timestamp;
            const b = this.getClosestProjectingParent();
            b && this.linkedParentVersion !== b.layoutVersion && !b.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (b && b.layout ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = It(), this.targetWithTransforms = It()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), OO(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Je(this.target, this.layout.layoutBox), y1(this.target, this.targetDelta)) : Je(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || sd(this.parent.latestValues) || g1(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(f, h, p) {
            this.relativeParent = f, this.linkedParentVersion = f.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = It(), this.relativeTargetOrigin = It(), pl(this.relativeTargetOrigin, h, p), Je(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            const f = this.getLead(),
                h = !!this.resumingFrom || this !== f;
            let p = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1), this.resolvedRelativeTargetAt === oe.timestamp && (p = !1), p) return;
            const {
                layout: m,
                layoutId: g
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(m || g)) return;
            Je(this.layoutCorrected, this.layout.layoutBox);
            const v = this.treeScale.x,
                b = this.treeScale.y;
            aO(this.layoutCorrected, this.treeScale, this.path, h), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = It());
            const {
                target: T
            } = f;
            if (!T) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (jv(this.prevProjectionDelta.x, this.projectionDelta.x), jv(this.prevProjectionDelta.y, this.projectionDelta.y)), ar(this.projectionDelta, this.layoutCorrected, T, this.latestValues), (this.treeScale.x !== v || this.treeScale.y !== b || !Gv(this.projectionDelta.x, this.prevProjectionDelta.x) || !Gv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", T))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(f = !0) {
            if (this.options.visualElement?.scheduleRender(), f) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Bs(), this.projectionDelta = Bs(), this.projectionDeltaWithTransform = Bs()
        }
        setAnimationOrigin(f, h = !1) {
            const p = this.snapshot,
                m = p ? p.latestValues : {},
                g = {
                    ...this.latestValues
                },
                v = Bs();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
            const b = It(),
                T = p ? p.source : void 0,
                A = this.layout ? this.layout.source : void 0,
                C = T !== A,
                M = this.getStack(),
                O = !M || M.members.length <= 1,
                _ = !!(C && !O && this.options.crossfade === !0 && !this.path.some(sN));
            this.animationProgress = 0;
            let j;
            this.mixTargetDelta = k => {
                const P = k / 1e3;
                Wv(v.x, f.x, P), Wv(v.y, f.y, P), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (pl(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox), iN(this.relativeTarget, this.relativeTargetOrigin, b, P), j && VO(this.relativeTarget, j) && (this.isProjectionDirty = !1), j || (j = It()), Je(j, this.relativeTarget)), C && (this.animationValues = g, kO(g, m, this.latestValues, P, _, O)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = P
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(f) {
            this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Si(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = zt.update(() => {
                nl.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Qs(0)), this.motionValue.jump(0, !1), this.currentAnimation = BO(this.motionValue, [0, 1e3], {
                    ...f,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: h => {
                        this.mixTargetDelta(h), f.onUpdate && f.onUpdate(h)
                    },
                    onStop: () => {},
                    onComplete: () => {
                        f.onComplete && f.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const f = this.getStack();
            f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(XO), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const f = this.getLead();
            let {
                targetWithTransforms: h,
                target: p,
                layout: m,
                latestValues: g
            } = f;
            if (!(!h || !p || !m)) {
                if (this !== f && this.layout && m && z1(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    p = this.target || It();
                    const v = ge(this.layout.layoutBox.x);
                    p.x.min = f.target.x.min, p.x.max = p.x.min + v;
                    const b = ge(this.layout.layoutBox.y);
                    p.y.min = f.target.y.min, p.y.max = p.y.min + b
                }
                Je(h, p), qs(h, g), ar(this.projectionDeltaWithTransform, this.layoutCorrected, h, g)
            }
        }
        registerSharedNode(f, h) {
            this.sharedNodes.has(f) || this.sharedNodes.set(f, new YO), this.sharedNodes.get(f).add(h);
            const m = h.options.initialPromotionConfig;
            h.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(h) : void 0
            })
        }
        isLead() {
            const f = this.getStack();
            return f ? f.lead === this : !0
        }
        getLead() {
            const {
                layoutId: f
            } = this.options;
            return f ? this.getStack()?.lead || this : this
        }
        getPrevLead() {
            const {
                layoutId: f
            } = this.options;
            return f ? this.getStack()?.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: f
            } = this.options;
            if (f) return this.root.sharedNodes.get(f)
        }
        promote({
            needsReset: f,
            transition: h,
            preserveFollowOpacity: p
        } = {}) {
            const m = this.getStack();
            m && m.promote(this, p), f && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({
                transition: h
            })
        }
        relegate() {
            const f = this.getStack();
            return f ? f.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: f
            } = this.options;
            if (!f) return;
            let h = !1;
            const {
                latestValues: p
            } = f;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (h = !0), !h) return;
            const m = {};
            p.z && yf("z", f, m, this.animationValues);
            for (let g = 0; g < gf.length; g++) yf(`rotate${gf[g]}`, f, m, this.animationValues), yf(`skew${gf[g]}`, f, m, this.animationValues);
            f.render();
            for (const g in m) f.setStaticValue(g, m[g]), this.animationValues && (this.animationValues[g] = m[g]);
            f.scheduleRender()
        }
        applyProjectionStyles(f, h) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                f.visibility = "hidden";
                return
            }
            const p = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = el(h?.pointerEvents) || "", f.transform = p ? p(this.latestValues, "") : "none";
                return
            }
            const m = this.getLead();
            if (!this.projectionDelta || !this.layout || !m.target) {
                this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = el(h?.pointerEvents) || ""), this.hasProjected && !Xi(this.latestValues) && (f.transform = p ? p({}, "") : "none", this.hasProjected = !1);
                return
            }
            f.visibility = "";
            const g = m.animationValues || m.latestValues;
            this.applyTransformsToTarget();
            let v = zO(this.projectionDeltaWithTransform, this.treeScale, g);
            p && (v = p(g, v)), f.transform = v;
            const {
                x: b,
                y: T
            } = this.projectionDelta;
            f.transformOrigin = `${b.origin*100}% ${T.origin*100}% 0`, m.animationValues ? f.opacity = m === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : f.opacity = m === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
            for (const A in rd) {
                if (g[A] === void 0) continue;
                const {
                    correct: C,
                    applyTo: M,
                    isCSSVariable: O
                } = rd[A], _ = v === "none" ? g[A] : C(g[A], m);
                if (M) {
                    const j = M.length;
                    for (let k = 0; k < j; k++) f[M[k]] = _
                } else O ? this.options.visualElement.renderState.vars[A] = _ : f[A] = _
            }
            this.options.layoutId && (f.pointerEvents = m === this ? el(h?.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(f => f.currentAnimation?.stop()), this.root.nodes.forEach(Qv), this.root.sharedNodes.clear()
        }
    }
}

function QO(e) {
    e.updateLayout()
}

function FO(e) {
    const i = e.resumeFrom?.snapshot || e.snapshot;
    if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
        const {
            layoutBox: a,
            measuredBox: o
        } = e.layout, {
            animationType: l
        } = e.options, c = i.source !== e.layout.source;
        l === "size" ? mn(g => {
            const v = c ? i.measuredBox[g] : i.layoutBox[g],
                b = ge(v);
            v.min = a[g].min, v.max = v.min + b
        }) : z1(l, i.layoutBox, a) && mn(g => {
            const v = c ? i.measuredBox[g] : i.layoutBox[g],
                b = ge(a[g]);
            v.max = v.min + b, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[g].max = e.relativeTarget[g].min + b)
        });
        const f = Bs();
        ar(f, a, i.layoutBox);
        const h = Bs();
        c ? ar(h, e.applyTransform(o, !0), i.measuredBox) : ar(h, a, i.layoutBox);
        const p = !D1(f);
        let m = !1;
        if (!e.resumeFrom) {
            const g = e.getClosestProjectingParent();
            if (g && !g.resumeFrom) {
                const {
                    snapshot: v,
                    layout: b
                } = g;
                if (v && b) {
                    const T = It();
                    pl(T, i.layoutBox, v.layoutBox);
                    const A = It();
                    pl(A, a, b.layoutBox), O1(T, A) || (m = !0), g.options.layoutRoot && (e.relativeTarget = A, e.relativeTargetOrigin = T, e.relativeParent = g)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: a,
            snapshot: i,
            delta: h,
            layoutDelta: f,
            hasLayoutChanged: p,
            hasRelativeLayoutChanged: m
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: a
        } = e.options;
        a && a()
    }
    e.options.transition = void 0
}

function ZO(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function WO(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function JO(e) {
    e.clearSnapshot()
}

function Qv(e) {
    e.clearMeasurements()
}

function Fv(e) {
    e.isLayoutDirty = !1
}

function IO(e) {
    const {
        visualElement: i
    } = e.options;
    i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Zv(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function $O(e) {
    e.resolveTargetDelta()
}

function tN(e) {
    e.calcProjection()
}

function eN(e) {
    e.resetSkewAndRotation()
}

function nN(e) {
    e.removeLeadSnapshot()
}

function Wv(e, i, a) {
    e.translate = Bt(i.translate, 0, a), e.scale = Bt(i.scale, 1, a), e.origin = i.origin, e.originPoint = i.originPoint
}

function Jv(e, i, a, o) {
    e.min = Bt(i.min, a.min, o), e.max = Bt(i.max, a.max, o)
}

function iN(e, i, a, o) {
    Jv(e.x, i.x, a.x, o), Jv(e.y, i.y, a.y, o)
}

function sN(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const aN = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Iv = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    $v = Iv("applewebkit/") && !Iv("chrome/") ? Math.round : Ke;

function t0(e) {
    e.min = $v(e.min), e.max = $v(e.max)
}

function rN(e) {
    t0(e.x), t0(e.y)
}

function z1(e, i, a) {
    return e === "position" || e === "preserve-aspect" && !DO(qv(i), qv(a), .2)
}

function oN(e) {
    return e !== e.root && e.scroll?.wasRoot
}
const lN = V1({
        attachResizeListener: (e, i) => mr(e, "resize", i),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body?.scrollTop || 0
        }),
        checkIsScrollRoot: () => !0
    }),
    vf = {
        current: void 0
    },
    L1 = V1({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!vf.current) {
                const e = new lN({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), vf.current = e
            }
            return vf.current
        },
        resetTransform: (e, i) => {
            e.style.transform = i !== void 0 ? i : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    ah = E.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });

function e0(e, i) {
    if (typeof e == "function") return e(i);
    e != null && (e.current = i)
}

function uN(...e) {
    return i => {
        let a = !1;
        const o = e.map(l => {
            const c = e0(l, i);
            return !a && typeof c == "function" && (a = !0), c
        });
        if (a) return () => {
            for (let l = 0; l < o.length; l++) {
                const c = o[l];
                typeof c == "function" ? c() : e0(e[l], null)
            }
        }
    }
}

function cN(...e) {
    return E.useCallback(uN(...e), e)
}
class fN extends E.Component {
    getSnapshotBeforeUpdate(i) {
        const a = this.props.childRef.current;
        if (a && i.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const o = a.offsetParent,
                l = nd(o) && o.offsetWidth || 0,
                c = nd(o) && o.offsetHeight || 0,
                f = this.props.sizeRef.current;
            f.height = a.offsetHeight || 0, f.width = a.offsetWidth || 0, f.top = a.offsetTop, f.left = a.offsetLeft, f.right = l - f.width - f.left, f.bottom = c - f.height - f.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function dN({
    children: e,
    isPresent: i,
    anchorX: a,
    anchorY: o,
    root: l,
    pop: c
}) {
    const f = E.useId(),
        h = E.useRef(null),
        p = E.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }),
        {
            nonce: m
        } = E.useContext(ah),
        g = e.props?.ref ?? e?.ref,
        v = cN(h, g);
    return E.useInsertionEffect(() => {
        const {
            width: b,
            height: T,
            top: A,
            left: C,
            right: M,
            bottom: O
        } = p.current;
        if (i || c === !1 || !h.current || !b || !T) return;
        const _ = a === "left" ? `left: ${C}` : `right: ${M}`,
            j = o === "bottom" ? `bottom: ${O}` : `top: ${A}`;
        h.current.dataset.motionPopId = f;
        const k = document.createElement("style");
        m && (k.nonce = m);
        const P = l ?? document.head;
        return P.appendChild(k), k.sheet && k.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${T}px !important;
            ${_}px !important;
            ${j}px !important;
          }
        `), () => {
            P.contains(k) && P.removeChild(k)
        }
    }, [i]), S.jsx(fN, {
        isPresent: i,
        childRef: h,
        sizeRef: p,
        pop: c,
        children: c === !1 ? e : E.cloneElement(e, {
            ref: v
        })
    })
}
const hN = ({
    children: e,
    initial: i,
    isPresent: a,
    onExitComplete: o,
    custom: l,
    presenceAffectsLayout: c,
    mode: f,
    anchorX: h,
    anchorY: p,
    root: m
}) => {
    const g = jd(mN),
        v = E.useId();
    let b = !0,
        T = E.useMemo(() => (b = !1, {
            id: v,
            initial: i,
            isPresent: a,
            custom: l,
            onExitComplete: A => {
                g.set(A, !0);
                for (const C of g.values())
                    if (!C) return;
                o && o()
            },
            register: A => (g.set(A, !1), () => g.delete(A))
        }), [a, g, o]);
    return c && b && (T = {
        ...T
    }), E.useMemo(() => {
        g.forEach((A, C) => g.set(C, !1))
    }, [a]), E.useEffect(() => {
        !a && !g.size && o && o()
    }, [a]), e = S.jsx(dN, {
        pop: f === "popLayout",
        isPresent: a,
        anchorX: h,
        anchorY: p,
        root: m,
        children: e
    }), S.jsx(Nl.Provider, {
        value: T,
        children: e
    })
};

function mN() {
    return new Map
}

function k1(e = !0) {
    const i = E.useContext(Nl);
    if (i === null) return [!0, null];
    const {
        isPresent: a,
        onExitComplete: o,
        register: l
    } = i, c = E.useId();
    E.useEffect(() => {
        if (e) return l(c)
    }, [e]);
    const f = E.useCallback(() => e && o && o(c), [c, o, e]);
    return !a && o ? [!1, f] : [!0]
}
const Xo = e => e.key || "";

function n0(e) {
    const i = [];
    return E.Children.forEach(e, a => {
        E.isValidElement(a) && i.push(a)
    }), i
}
const pN = ({
        children: e,
        custom: i,
        initial: a = !0,
        onExitComplete: o,
        presenceAffectsLayout: l = !0,
        mode: c = "sync",
        propagate: f = !1,
        anchorX: h = "left",
        anchorY: p = "top",
        root: m
    }) => {
        const [g, v] = k1(f), b = E.useMemo(() => n0(e), [e]), T = f && !g ? [] : b.map(Xo), A = E.useRef(!0), C = E.useRef(b), M = jd(() => new Map), O = E.useRef(new Set), [_, j] = E.useState(b), [k, P] = E.useState(b);
        cx(() => {
            A.current = !1, C.current = b;
            for (let H = 0; H < k.length; H++) {
                const W = Xo(k[H]);
                T.includes(W) ? (M.delete(W), O.current.delete(W)) : M.get(W) !== !0 && M.set(W, !1)
            }
        }, [k, T.length, T.join("-")]);
        const Q = [];
        if (b !== _) {
            let H = [...b];
            for (let W = 0; W < k.length; W++) {
                const ot = k[W],
                    pt = Xo(ot);
                T.includes(pt) || (H.splice(W, 0, ot), Q.push(ot))
            }
            return c === "wait" && Q.length && (H = Q), P(n0(H)), j(b), null
        }
        const {
            forceRender: Z
        } = E.useContext(Nd);
        return S.jsx(S.Fragment, {
            children: k.map(H => {
                const W = Xo(H),
                    ot = f && !g ? !1 : b === k || T.includes(W),
                    pt = () => {
                        if (O.current.has(W)) return;
                        if (O.current.add(W), M.has(W)) M.set(W, !0);
                        else return;
                        let ut = !0;
                        M.forEach(bt => {
                            bt || (ut = !1)
                        }), ut && (Z?.(), P(C.current), f && v?.(), o && o())
                    };
                return S.jsx(hN, {
                    isPresent: ot,
                    initial: !A.current || a ? void 0 : !1,
                    custom: i,
                    presenceAffectsLayout: l,
                    mode: c,
                    root: m,
                    onExitComplete: ot ? void 0 : pt,
                    anchorX: h,
                    anchorY: p,
                    children: H
                }, W)
            })
        })
    },
    P1 = E.createContext({
        strict: !1
    }),
    i0 = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    };
let s0 = !1;

function gN() {
    if (s0) return;
    const e = {};
    for (const i in i0) e[i] = {
        isEnabled: a => i0[i].some(o => !!a[o])
    };
    h1(e), s0 = !0
}

function U1() {
    return gN(), eO()
}

function yN(e) {
    const i = U1();
    for (const a in e) i[a] = {
        ...i[a],
        ...e[a]
    };
    h1(i)
}
const vN = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

function gl(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || vN.has(e)
}
let B1 = e => !gl(e);

function bN(e) {
    typeof e == "function" && (B1 = i => i.startsWith("on") ? !gl(i) : e(i))
}
try {
    bN(require("@emotion/is-prop-valid").default)
} catch {}

function xN(e, i, a) {
    const o = {};
    for (const l in e) l === "values" && typeof e.values == "object" || (B1(l) || a === !0 && gl(l) || !i && !gl(l) || e.draggable && l.startsWith("onDrag")) && (o[l] = e[l]);
    return o
}
const Vl = E.createContext({});

function SN(e, i) {
    if (_l(e)) {
        const {
            initial: a,
            animate: o
        } = e;
        return {
            initial: a === !1 || hr(a) ? a : void 0,
            animate: hr(o) ? o : void 0
        }
    }
    return e.inherit !== !1 ? i : {}
}

function TN(e) {
    const {
        initial: i,
        animate: a
    } = SN(e, E.useContext(Vl));
    return E.useMemo(() => ({
        initial: i,
        animate: a
    }), [a0(i), a0(a)])
}

function a0(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const rh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function H1(e, i, a) {
    for (const o in i) !de(i[o]) && !x1(o, a) && (e[o] = i[o])
}

function wN({
    transformTemplate: e
}, i) {
    return E.useMemo(() => {
        const a = rh();
        return ih(a, i, e), Object.assign({}, a.vars, a.style)
    }, [i])
}

function EN(e, i) {
    const a = e.style || {},
        o = {};
    return H1(o, a, e), Object.assign(o, wN(e, i)), o
}

function AN(e, i) {
    const a = {},
        o = EN(e, i);
    return e.drag && e.dragListener !== !1 && (a.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (a.tabIndex = 0), a.style = o, a
}
const q1 = () => ({
    ...rh(),
    attrs: {}
});

function CN(e, i, a, o) {
    const l = E.useMemo(() => {
        const c = q1();
        return S1(c, i, w1(o), e.transformTemplate, e.style), {
            ...c.attrs,
            style: {
                ...c.style
            }
        }
    }, [i]);
    if (e.style) {
        const c = {};
        H1(c, e.style, e), l.style = {
            ...c,
            ...l.style
        }
    }
    return l
}
const RN = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function oh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(RN.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function MN(e, i, a, {
    latestValues: o
}, l, c = !1, f) {
    const p = (f ?? oh(e) ? CN : AN)(i, o, l, e),
        m = xN(i, typeof e == "string", c),
        g = e !== E.Fragment ? {
            ...m,
            ...p,
            ref: a
        } : {},
        {
            children: v
        } = i,
        b = E.useMemo(() => de(v) ? v.get() : v, [v]);
    return E.createElement(e, {
        ...g,
        children: b
    })
}

function DN({
    scrapeMotionValuesFromProps: e,
    createRenderState: i
}, a, o, l) {
    return {
        latestValues: ON(a, o, l, e),
        renderState: i()
    }
}

function ON(e, i, a, o) {
    const l = {},
        c = o(e, {});
    for (const b in c) l[b] = el(c[b]);
    let {
        initial: f,
        animate: h
    } = e;
    const p = _l(e),
        m = f1(e);
    i && m && !p && e.inherit !== !1 && (f === void 0 && (f = i.initial), h === void 0 && (h = i.animate));
    let g = a ? a.initial === !1 : !1;
    g = g || f === !1;
    const v = g ? h : f;
    if (v && typeof v != "boolean" && !jl(v)) {
        const b = Array.isArray(v) ? v : [v];
        for (let T = 0; T < b.length; T++) {
            const A = Zd(e, b[T]);
            if (A) {
                const {
                    transitionEnd: C,
                    transition: M,
                    ...O
                } = A;
                for (const _ in O) {
                    let j = O[_];
                    if (Array.isArray(j)) {
                        const k = g ? j.length - 1 : 0;
                        j = j[k]
                    }
                    j !== null && (l[_] = j)
                }
                for (const _ in C) l[_] = C[_]
            }
        }
    }
    return l
}
const G1 = e => (i, a) => {
        const o = E.useContext(Vl),
            l = E.useContext(Nl),
            c = () => DN(e, i, o, l);
        return a ? c() : jd(c)
    },
    NN = G1({
        scrapeMotionValuesFromProps: sh,
        createRenderState: rh
    }),
    jN = G1({
        scrapeMotionValuesFromProps: E1,
        createRenderState: q1
    }),
    _N = Symbol.for("motionComponentSymbol");

function VN(e, i, a) {
    const o = E.useRef(a);
    E.useInsertionEffect(() => {
        o.current = a
    });
    const l = E.useRef(null);
    return E.useCallback(c => {
        c && e.onMount?.(c);
        const f = o.current;
        if (typeof f == "function")
            if (c) {
                const h = f(c);
                typeof h == "function" && (l.current = h)
            } else l.current ? (l.current(), l.current = null) : f(c);
        else f && (f.current = c);
        i && (c ? i.mount(c) : i.unmount())
    }, [i])
}
const Y1 = E.createContext({});

function ks(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function zN(e, i, a, o, l, c) {
    const {
        visualElement: f
    } = E.useContext(Vl), h = E.useContext(P1), p = E.useContext(Nl), m = E.useContext(ah), g = m.reducedMotion, v = m.skipAnimations, b = E.useRef(null), T = E.useRef(!1);
    o = o || h.renderer, !b.current && o && (b.current = o(e, {
        visualState: i,
        parent: f,
        props: a,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: g,
        skipAnimations: v,
        isSVG: c
    }), T.current && b.current && (b.current.manuallyAnimateOnMount = !0));
    const A = b.current,
        C = E.useContext(Y1);
    A && !A.projection && l && (A.type === "html" || A.type === "svg") && LN(b.current, a, l, C);
    const M = E.useRef(!1);
    E.useInsertionEffect(() => {
        A && M.current && A.update(a, p)
    });
    const O = a[Ix],
        _ = E.useRef(!!O && typeof window < "u" && !window.MotionHandoffIsComplete?.(O) && window.MotionHasOptimisedAnimation?.(O));
    return cx(() => {
        T.current = !0, A && (M.current = !0, window.MotionIsMounted = !0, A.updateFeatures(), A.scheduleRenderMicrotask(), _.current && A.animationState && A.animationState.animateChanges())
    }), E.useEffect(() => {
        A && (!_.current && A.animationState && A.animationState.animateChanges(), _.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(O)
        }), _.current = !1), A.enteringChildren = void 0)
    }), A
}

function LN(e, i, a, o) {
    const {
        layoutId: l,
        layout: c,
        drag: f,
        dragConstraints: h,
        layoutScroll: p,
        layoutRoot: m,
        layoutCrossfade: g
    } = i;
    e.projection = new a(e.latestValues, i["data-framer-portal-id"] ? void 0 : X1(e.parent)), e.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!f || h && ks(h),
        visualElement: e,
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: o,
        crossfade: g,
        layoutScroll: p,
        layoutRoot: m
    })
}

function X1(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : X1(e.parent)
}

function bf(e, {
    forwardMotionProps: i = !1,
    type: a
} = {}, o, l) {
    o && yN(o);
    const c = a ? a === "svg" : oh(e),
        f = c ? jN : NN;

    function h(m, g) {
        let v;
        const b = {
                ...E.useContext(ah),
                ...m,
                layoutId: kN(m)
            },
            {
                isStatic: T
            } = b,
            A = TN(m),
            C = f(m, T);
        if (!T && typeof window < "u") {
            PN();
            const M = UN(b);
            v = M.MeasureLayout, A.visualElement = zN(e, C, b, l, M.ProjectionNode, c)
        }
        return S.jsxs(Vl.Provider, {
            value: A,
            children: [v && A.visualElement ? S.jsx(v, {
                visualElement: A.visualElement,
                ...b
            }) : null, MN(e, m, VN(C, A.visualElement, g), C, T, i, c)]
        })
    }
    h.displayName = `motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;
    const p = E.forwardRef(h);
    return p[_N] = e, p
}

function kN({
    layoutId: e
}) {
    const i = E.useContext(Nd).id;
    return i && e !== void 0 ? i + "-" + e : e
}

function PN(e, i) {
    E.useContext(P1).strict
}

function UN(e) {
    const i = U1(),
        {
            drag: a,
            layout: o
        } = i;
    if (!a && !o) return {};
    const l = {
        ...a,
        ...o
    };
    return {
        MeasureLayout: a?.isEnabled(e) || o?.isEnabled(e) ? l.MeasureLayout : void 0,
        ProjectionNode: l.ProjectionNode
    }
}

function BN(e, i) {
    if (typeof Proxy > "u") return bf;
    const a = new Map,
        o = (c, f) => bf(c, f, e, i),
        l = (c, f) => o(c, f);
    return new Proxy(l, {
        get: (c, f) => f === "create" ? o : (a.has(f) || a.set(f, bf(f, void 0, e, i)), a.get(f))
    })
}
const HN = (e, i) => i.isSVG ?? oh(e) ? new vO(i) : new dO(i, {
    allowProjection: e !== E.Fragment
});
class qN extends wi {
    constructor(i) {
        super(i), i.animationState || (i.animationState = wO(i))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: i
        } = this.node.getProps();
        jl(i) && (this.unmountControls = i.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: i
        } = this.node.getProps(), {
            animate: a
        } = this.node.prevProps || {};
        i !== a && this.updateAnimationControlsSubscription()
    }
    unmount() {
        this.node.animationState.reset(), this.unmountControls?.()
    }
}
let GN = 0;
class YN extends wi {
    constructor() {
        super(...arguments), this.id = GN++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: i,
            onExitComplete: a
        } = this.node.presenceContext, {
            isPresent: o
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || i === o) return;
        const l = this.node.animationState.setActive("exit", !i);
        a && !i && l.then(() => {
            a(this.id)
        })
    }
    mount() {
        const {
            register: i,
            onExitComplete: a
        } = this.node.presenceContext || {};
        a && a(this.id), i && (this.unmount = i(this.id))
    }
    unmount() {}
}
const XN = {
    animation: {
        Feature: qN
    },
    exit: {
        Feature: YN
    }
};

function Sr(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const KN = e => i => $d(i) && e(i, Sr(i));

function rr(e, i, a, o) {
    return mr(e, i, KN(a), o)
}
const K1 = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    r0 = (e, i) => Math.abs(e - i);

function QN(e, i) {
    const a = r0(e.x, i.x),
        o = r0(e.y, i.y);
    return Math.sqrt(a ** 2 + o ** 2)
}
const o0 = new Set(["auto", "scroll"]);
class Q1 {
    constructor(i, a, {
        transformPagePoint: o,
        contextWindow: l = window,
        dragSnapToOrigin: c = !1,
        distanceThreshold: f = 3,
        element: h
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = T => {
                this.handleScroll(T.target)
            }, this.onWindowScroll = () => {
                this.handleScroll(window)
            }, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const T = Sf(this.lastMoveEventInfo, this.history),
                    A = this.startEvent !== null,
                    C = QN(T.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!A && !C) return;
                const {
                    point: M
                } = T, {
                    timestamp: O
                } = oe;
                this.history.push({
                    ...M,
                    timestamp: O
                });
                const {
                    onStart: _,
                    onMove: j
                } = this.handlers;
                A || (_ && _(this.lastMoveEvent, T), this.startEvent = this.lastMoveEvent), j && j(this.lastMoveEvent, T)
            }, this.handlePointerMove = (T, A) => {
                this.lastMoveEvent = T, this.lastMoveEventInfo = xf(A, this.transformPagePoint), zt.update(this.updatePoint, !0)
            }, this.handlePointerUp = (T, A) => {
                this.end();
                const {
                    onEnd: C,
                    onSessionEnd: M,
                    resumeAnimation: O
                } = this.handlers;
                if ((this.dragSnapToOrigin || !this.startEvent) && O && O(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const _ = Sf(T.type === "pointercancel" ? this.lastMoveEventInfo : xf(A, this.transformPagePoint), this.history);
                this.startEvent && C && C(T, _), M && M(T, _)
            }, !$d(i)) return;
        this.dragSnapToOrigin = c, this.handlers = a, this.transformPagePoint = o, this.distanceThreshold = f, this.contextWindow = l || window;
        const p = Sr(i),
            m = xf(p, this.transformPagePoint),
            {
                point: g
            } = m,
            {
                timestamp: v
            } = oe;
        this.history = [{
            ...g,
            timestamp: v
        }];
        const {
            onSessionStart: b
        } = a;
        b && b(i, Sf(m, this.history)), this.removeListeners = vr(rr(this.contextWindow, "pointermove", this.handlePointerMove), rr(this.contextWindow, "pointerup", this.handlePointerUp), rr(this.contextWindow, "pointercancel", this.handlePointerUp)), h && this.startScrollTracking(h)
    }
    startScrollTracking(i) {
        let a = i.parentElement;
        for (; a;) {
            const o = getComputedStyle(a);
            (o0.has(o.overflowX) || o0.has(o.overflowY)) && this.scrollPositions.set(a, {
                x: a.scrollLeft,
                y: a.scrollTop
            }), a = a.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }), window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(i) {
        const a = this.scrollPositions.get(i);
        if (!a) return;
        const o = i === window,
            l = o ? {
                x: window.scrollX,
                y: window.scrollY
            } : {
                x: i.scrollLeft,
                y: i.scrollTop
            },
            c = {
                x: l.x - a.x,
                y: l.y - a.y
            };
        c.x === 0 && c.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += c.x, this.lastMoveEventInfo.point.y += c.y) : this.history.length > 0 && (this.history[0].x -= c.x, this.history[0].y -= c.y), this.scrollPositions.set(i, l), zt.update(this.updatePoint, !0))
    }
    updateHandlers(i) {
        this.handlers = i
    }
    end() {
        this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Si(this.updatePoint)
    }
}

function xf(e, i) {
    return i ? {
        point: i(e.point)
    } : e
}

function l0(e, i) {
    return {
        x: e.x - i.x,
        y: e.y - i.y
    }
}

function Sf({
    point: e
}, i) {
    return {
        point: e,
        delta: l0(e, F1(i)),
        offset: l0(e, FN(i)),
        velocity: ZN(i, .1)
    }
}

function FN(e) {
    return e[0]
}

function F1(e) {
    return e[e.length - 1]
}

function ZN(e, i) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let a = e.length - 1,
        o = null;
    const l = F1(e);
    for (; a >= 0 && (o = e[a], !(l.timestamp - o.timestamp > tn(i)));) a--;
    if (!o) return {
        x: 0,
        y: 0
    };
    o === e[0] && e.length > 2 && l.timestamp - o.timestamp > tn(i) * 2 && (o = e[1]);
    const c = Xe(l.timestamp - o.timestamp);
    if (c === 0) return {
        x: 0,
        y: 0
    };
    const f = {
        x: (l.x - o.x) / c,
        y: (l.y - o.y) / c
    };
    return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f
}

function WN(e, {
    min: i,
    max: a
}, o) {
    return i !== void 0 && e < i ? e = o ? Bt(i, e, o.min) : Math.max(e, i) : a !== void 0 && e > a && (e = o ? Bt(a, e, o.max) : Math.min(e, a)), e
}

function u0(e, i, a) {
    return {
        min: i !== void 0 ? e.min + i : void 0,
        max: a !== void 0 ? e.max + a - (e.max - e.min) : void 0
    }
}

function JN(e, {
    top: i,
    left: a,
    bottom: o,
    right: l
}) {
    return {
        x: u0(e.x, a, l),
        y: u0(e.y, i, o)
    }
}

function c0(e, i) {
    let a = i.min - e.min,
        o = i.max - e.max;
    return i.max - i.min < e.max - e.min && ([a, o] = [o, a]), {
        min: a,
        max: o
    }
}

function IN(e, i) {
    return {
        x: c0(e.x, i.x),
        y: c0(e.y, i.y)
    }
}

function $N(e, i) {
    let a = .5;
    const o = ge(e),
        l = ge(i);
    return l > o ? a = cr(i.min, i.max - o, e.min) : o > l && (a = cr(e.min, e.max - l, i.min)), vn(0, 1, a)
}

function t3(e, i) {
    const a = {};
    return i.min !== void 0 && (a.min = i.min - e.min), i.max !== void 0 && (a.max = i.max - e.min), a
}
const od = .35;

function e3(e = od) {
    return e === !1 ? e = 0 : e === !0 && (e = od), {
        x: f0(e, "left", "right"),
        y: f0(e, "top", "bottom")
    }
}

function f0(e, i, a) {
    return {
        min: d0(e, i),
        max: d0(e, a)
    }
}

function d0(e, i) {
    return typeof e == "number" ? e : e[i] || 0
}
const n3 = new WeakMap;
class i3 {
    constructor(i) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = It(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = i
    }
    start(i, {
        snapToCursor: a = !1,
        distanceThreshold: o
    } = {}) {
        const {
            presenceContext: l
        } = this.visualElement;
        if (l && l.isPresent === !1) return;
        const c = v => {
                a && this.snapToCursor(Sr(v).point), this.stopAnimation()
            },
            f = (v, b) => {
                const {
                    drag: T,
                    dragPropagation: A,
                    onDragStart: C
                } = this.getProps();
                if (T && !A && (this.openDragLock && this.openDragLock(), this.openDragLock = ND(T), !this.openDragLock)) return;
                this.latestPointerEvent = v, this.latestPanInfo = b, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), mn(O => {
                    let _ = this.getAxisMotionValue(O).get() || 0;
                    if (yn.test(_)) {
                        const {
                            projection: j
                        } = this.visualElement;
                        if (j && j.layout) {
                            const k = j.layout.layoutBox[O];
                            k && (_ = ge(k) * (parseFloat(_) / 100))
                        }
                    }
                    this.originPoint[O] = _
                }), C && zt.update(() => C(v, b), !1, !0), If(this.visualElement, "transform");
                const {
                    animationState: M
                } = this.visualElement;
                M && M.setActive("whileDrag", !0)
            },
            h = (v, b) => {
                this.latestPointerEvent = v, this.latestPanInfo = b;
                const {
                    dragPropagation: T,
                    dragDirectionLock: A,
                    onDirectionLock: C,
                    onDrag: M
                } = this.getProps();
                if (!T && !this.openDragLock) return;
                const {
                    offset: O
                } = b;
                if (A && this.currentDirection === null) {
                    this.currentDirection = a3(O), this.currentDirection !== null && C && C(this.currentDirection);
                    return
                }
                this.updateAxis("x", b.point, O), this.updateAxis("y", b.point, O), this.visualElement.render(), M && zt.update(() => M(v, b), !1, !0)
            },
            p = (v, b) => {
                this.latestPointerEvent = v, this.latestPanInfo = b, this.stop(v, b), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            m = () => {
                const {
                    dragSnapToOrigin: v
                } = this.getProps();
                (v || this.constraints) && this.startAnimation({
                    x: 0,
                    y: 0
                })
            },
            {
                dragSnapToOrigin: g
            } = this.getProps();
        this.panSession = new Q1(i, {
            onSessionStart: c,
            onStart: f,
            onMove: h,
            onSessionEnd: p,
            resumeAnimation: m
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: g,
            distanceThreshold: o,
            contextWindow: K1(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(i, a) {
        const o = i || this.latestPointerEvent,
            l = a || this.latestPanInfo,
            c = this.isDragging;
        if (this.cancel(), !c || !l || !o) return;
        const {
            velocity: f
        } = l;
        this.startAnimation(f);
        const {
            onDragEnd: h
        } = this.getProps();
        h && zt.postRender(() => h(o, l))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: i,
            animationState: a
        } = this.visualElement;
        i && (i.isAnimationBlocked = !1), this.endPanSession();
        const {
            dragPropagation: o
        } = this.getProps();
        !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), a && a.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(), this.panSession = void 0
    }
    updateAxis(i, a, o) {
        const {
            drag: l
        } = this.getProps();
        if (!o || !Ko(i, l, this.currentDirection)) return;
        const c = this.getAxisMotionValue(i);
        let f = this.originPoint[i] + o[i];
        this.constraints && this.constraints[i] && (f = WN(f, this.constraints[i], this.elastic[i])), c.set(f)
    }
    resolveConstraints() {
        const {
            dragConstraints: i,
            dragElastic: a
        } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, l = this.constraints;
        i && ks(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && o ? this.constraints = JN(o.layoutBox, i) : this.constraints = !1, this.elastic = e3(a), l !== this.constraints && !ks(i) && o && this.constraints && !this.hasMutatedConstraints && mn(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = t3(o.layoutBox[c], this.constraints[c]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: i,
            onMeasureDragConstraints: a
        } = this.getProps();
        if (!i || !ks(i)) return !1;
        const o = i.current,
            {
                projection: l
            } = this.visualElement;
        if (!l || !l.layout) return !1;
        const c = rO(o, l.root, this.visualElement.getTransformPagePoint());
        let f = IN(l.layout.layoutBox, c);
        if (a) {
            const h = a(iO(f));
            this.hasMutatedConstraints = !!h, h && (f = p1(h))
        }
        return f
    }
    startAnimation(i) {
        const {
            drag: a,
            dragMomentum: o,
            dragElastic: l,
            dragTransition: c,
            dragSnapToOrigin: f,
            onDragTransitionEnd: h
        } = this.getProps(), p = this.constraints || {}, m = mn(g => {
            if (!Ko(g, a, this.currentDirection)) return;
            let v = p && p[g] || {};
            f && (v = {
                min: 0,
                max: 0
            });
            const b = l ? 200 : 1e6,
                T = l ? 40 : 1e7,
                A = {
                    type: "inertia",
                    velocity: o ? i[g] : 0,
                    bounceStiffness: b,
                    bounceDamping: T,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...c,
                    ...v
                };
            return this.startAxisValueAnimation(g, A)
        });
        return Promise.all(m).then(h)
    }
    startAxisValueAnimation(i, a) {
        const o = this.getAxisMotionValue(i);
        return If(this.visualElement, i), o.start(Fd(i, o, 0, a, this.visualElement, !1))
    }
    stopAnimation() {
        mn(i => this.getAxisMotionValue(i).stop())
    }
    getAxisMotionValue(i) {
        const a = `_drag${i.toUpperCase()}`,
            o = this.visualElement.getProps(),
            l = o[a];
        return l || this.visualElement.getValue(i, (o.initial ? o.initial[i] : void 0) || 0)
    }
    snapToCursor(i) {
        mn(a => {
            const {
                drag: o
            } = this.getProps();
            if (!Ko(a, o, this.currentDirection)) return;
            const {
                projection: l
            } = this.visualElement, c = this.getAxisMotionValue(a);
            if (l && l.layout) {
                const {
                    min: f,
                    max: h
                } = l.layout.layoutBox[a], p = c.get() || 0;
                c.set(i[a] - Bt(f, h, .5) + p)
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: i,
            dragConstraints: a
        } = this.getProps(), {
            projection: o
        } = this.visualElement;
        if (!ks(a) || !o || !this.constraints) return;
        this.stopAnimation();
        const l = {
            x: 0,
            y: 0
        };
        mn(f => {
            const h = this.getAxisMotionValue(f);
            if (h && this.constraints !== !1) {
                const p = h.get();
                l[f] = $N({
                    min: p,
                    max: p
                }, this.constraints[f])
            }
        });
        const {
            transformTemplate: c
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), mn(f => {
            if (!Ko(f, i, null)) return;
            const h = this.getAxisMotionValue(f),
                {
                    min: p,
                    max: m
                } = this.constraints[f];
            h.set(Bt(p, m, l[f]))
        }), this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current) return;
        n3.set(this.visualElement, this);
        const i = this.visualElement.current,
            a = rr(i, "pointerdown", m => {
                const {
                    drag: g,
                    dragListener: v = !0
                } = this.getProps(), b = m.target, T = b !== i && kD(b);
                g && v && !T && this.start(m)
            });
        let o;
        const l = () => {
                const {
                    dragConstraints: m
                } = this.getProps();
                ks(m) && m.current && (this.constraints = this.resolveRefConstraints(), o || (o = s3(i, m.current, () => this.scalePositionWithinConstraints())))
            },
            {
                projection: c
            } = this.visualElement,
            f = c.addEventListener("measure", l);
        c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), zt.read(l);
        const h = mr(window, "resize", () => this.scalePositionWithinConstraints()),
            p = c.addEventListener("didUpdate", (({
                delta: m,
                hasLayoutChanged: g
            }) => {
                this.isDragging && g && (mn(v => {
                    const b = this.getAxisMotionValue(v);
                    b && (this.originPoint[v] += m[v].translate, b.set(b.get() + m[v].translate))
                }), this.visualElement.render())
            }));
        return () => {
            h(), a(), f(), p && p(), o && o()
        }
    }
    getProps() {
        const i = this.visualElement.getProps(),
            {
                drag: a = !1,
                dragDirectionLock: o = !1,
                dragPropagation: l = !1,
                dragConstraints: c = !1,
                dragElastic: f = od,
                dragMomentum: h = !0
            } = i;
        return {
            ...i,
            drag: a,
            dragDirectionLock: o,
            dragPropagation: l,
            dragConstraints: c,
            dragElastic: f,
            dragMomentum: h
        }
    }
}

function h0(e) {
    let i = !0;
    return () => {
        if (i) {
            i = !1;
            return
        }
        e()
    }
}

function s3(e, i, a) {
    const o = bv(e, h0(a)),
        l = bv(i, h0(a));
    return () => {
        o(), l()
    }
}

function Ko(e, i, a) {
    return (i === !0 || i === e) && (a === null || a === e)
}

function a3(e, i = 10) {
    let a = null;
    return Math.abs(e.y) > i ? a = "y" : Math.abs(e.x) > i && (a = "x"), a
}
class r3 extends wi {
    constructor(i) {
        super(i), this.removeGroupControls = Ke, this.removeListeners = Ke, this.controls = new i3(i)
    }
    mount() {
        const {
            dragControls: i
        } = this.node.getProps();
        i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ke
    }
    update() {
        const {
            dragControls: i
        } = this.node.getProps(), {
            dragControls: a
        } = this.node.prevProps || {};
        i !== a && (this.removeGroupControls(), i && (this.removeGroupControls = i.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
    }
}
const Tf = e => (i, a) => {
    e && zt.update(() => e(i, a), !1, !0)
};
class o3 extends wi {
    constructor() {
        super(...arguments), this.removePointerDownListener = Ke
    }
    onPointerDown(i) {
        this.session = new Q1(i, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: K1(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: i,
            onPanStart: a,
            onPan: o,
            onPanEnd: l
        } = this.node.getProps();
        return {
            onSessionStart: Tf(i),
            onStart: Tf(a),
            onMove: Tf(o),
            onEnd: (c, f) => {
                delete this.session, l && zt.postRender(() => l(c, f))
            }
        }
    }
    mount() {
        this.removePointerDownListener = rr(this.node.current, "pointerdown", i => this.onPointerDown(i))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
let wf = !1;
class l3 extends E.Component {
    componentDidMount() {
        const {
            visualElement: i,
            layoutGroup: a,
            switchLayoutGroup: o,
            layoutId: l
        } = this.props, {
            projection: c
        } = i;
        c && (a.group && a.group.add(c), o && o.register && l && o.register(c), wf && c.root.didUpdate(), c.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), c.setOptions({
            ...c.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })), nl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(i) {
        const {
            layoutDependency: a,
            visualElement: o,
            drag: l,
            isPresent: c
        } = this.props, {
            projection: f
        } = o;
        return f && (f.isPresent = c, i.layoutDependency !== a && f.setOptions({
            ...f.options,
            layoutDependency: a
        }), wf = !0, l || i.layoutDependency !== a || a === void 0 || i.isPresent !== c ? f.willUpdate() : this.safeToRemove(), i.isPresent !== c && (c ? f.promote() : f.relegate() || zt.postRender(() => {
            const h = f.getStack();
            (!h || !h.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: i
        } = this.props.visualElement;
        i && (i.root.didUpdate(), Id.postRender(() => {
            !i.currentAnimation && i.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: i,
            layoutGroup: a,
            switchLayoutGroup: o
        } = this.props, {
            projection: l
        } = i;
        wf = !0, l && (l.scheduleCheckAfterUnmount(), a && a.group && a.group.remove(l), o && o.deregister && o.deregister(l))
    }
    safeToRemove() {
        const {
            safeToRemove: i
        } = this.props;
        i && i()
    }
    render() {
        return null
    }
}

function Z1(e) {
    const [i, a] = k1(), o = E.useContext(Nd);
    return S.jsx(l3, {
        ...e,
        layoutGroup: o,
        switchLayoutGroup: E.useContext(Y1),
        isPresent: i,
        safeToRemove: a
    })
}
const u3 = {
    pan: {
        Feature: o3
    },
    drag: {
        Feature: r3,
        ProjectionNode: L1,
        MeasureLayout: Z1
    }
};

function m0(e, i, a) {
    const {
        props: o
    } = e;
    e.animationState && o.whileHover && e.animationState.setActive("whileHover", a === "Start");
    const l = "onHover" + a,
        c = o[l];
    c && zt.postRender(() => c(i, Sr(i)))
}
class c3 extends wi {
    mount() {
        const {
            current: i
        } = this.node;
        i && (this.unmount = _D(i, (a, o) => (m0(this.node, o, "Start"), l => m0(this.node, l, "End"))))
    }
    unmount() {}
}
class f3 extends wi {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let i = !1;
        try {
            i = this.node.current.matches(":focus-visible")
        } catch {
            i = !0
        }!i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = vr(mr(this.node.current, "focus", () => this.onFocus()), mr(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function p0(e, i, a) {
    const {
        props: o
    } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState && o.whileTap && e.animationState.setActive("whileTap", a === "Start");
    const l = "onTap" + (a === "End" ? "" : a),
        c = o[l];
    c && zt.postRender(() => c(i, Sr(i)))
}
class d3 extends wi {
    mount() {
        const {
            current: i
        } = this.node;
        if (!i) return;
        const {
            globalTapTarget: a,
            propagate: o
        } = this.node.props;
        this.unmount = UD(i, (l, c) => (p0(this.node, c, "Start"), (f, {
            success: h
        }) => p0(this.node, f, h ? "End" : "Cancel")), {
            useGlobalTarget: a,
            stopPropagation: o?.tap === !1
        })
    }
    unmount() {}
}
const ld = new WeakMap,
    Ef = new WeakMap,
    h3 = e => {
        const i = ld.get(e.target);
        i && i(e)
    },
    m3 = e => {
        e.forEach(h3)
    };

function p3({
    root: e,
    ...i
}) {
    const a = e || document;
    Ef.has(a) || Ef.set(a, {});
    const o = Ef.get(a),
        l = JSON.stringify(i);
    return o[l] || (o[l] = new IntersectionObserver(m3, {
        root: e,
        ...i
    })), o[l]
}

function g3(e, i, a) {
    const o = p3(i);
    return ld.set(e, a), o.observe(e), () => {
        ld.delete(e), o.unobserve(e)
    }
}
const y3 = {
    some: 0,
    all: 1
};
class v3 extends wi {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: i = {}
        } = this.node.getProps(), {
            root: a,
            margin: o,
            amount: l = "some",
            once: c
        } = i, f = {
            root: a ? a.current : void 0,
            rootMargin: o,
            threshold: typeof l == "number" ? l : y3[l]
        }, h = p => {
            const {
                isIntersecting: m
            } = p;
            if (this.isInView === m || (this.isInView = m, c && !m && this.hasEnteredView)) return;
            m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {
                onViewportEnter: g,
                onViewportLeave: v
            } = this.node.getProps(), b = m ? g : v;
            b && b(p)
        };
        return g3(this.node.current, f, h)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: i,
            prevProps: a
        } = this.node;
        ["amount", "margin", "root"].some(b3(i, a)) && this.startObserver()
    }
    unmount() {}
}

function b3({
    viewport: e = {}
}, {
    viewport: i = {}
} = {}) {
    return a => e[a] !== i[a]
}
const x3 = {
        inView: {
            Feature: v3
        },
        tap: {
            Feature: d3
        },
        focus: {
            Feature: f3
        },
        hover: {
            Feature: c3
        }
    },
    S3 = {
        layout: {
            ProjectionNode: L1,
            MeasureLayout: Z1
        }
    },
    T3 = {
        ...XN,
        ...x3,
        ...u3,
        ...S3
    },
    Ut = BN(T3, HN),
    g0 = [{
        name: "About",
        href: "#about"
    }, {
        name: "Experience",
        href: "#experience"
    }, {
        name: "Education",
        href: "#education"
    }, {
        name: "Projects",
        href: "#projects"
    }, {
        name: "Skills",
        href: "#skills"
    }, {
        name: "Certifications",
        href: "#certifications"
    }, {
        name: "Activities",
        href: "#activities"
    }];

function w3() {
    const [e, i] = E.useState(!1), [a, o] = E.useState(0), [l, c] = E.useState(!1), [f, h] = E.useState("");
    E.useEffect(() => {
        const m = () => {
            i(window.scrollY > 20);
            const g = document.documentElement.scrollTop,
                v = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            o(v > 0 ? g / v * 100 : 0)
        };
        return window.addEventListener("scroll", m, {
            passive: !0
        }), () => window.removeEventListener("scroll", m)
    }, []), E.useEffect(() => {
        const m = ["about", "experience", "education", "projects", "skills", "certifications", "activities"],
            g = new IntersectionObserver(v => {
                v.forEach(b => {
                    b.isIntersecting && h(b.target.id)
                })
            }, {
                rootMargin: "-40% 0px -55% 0px",
                threshold: 0
            });
        return m.forEach(v => {
            const b = document.getElementById(v);
            b && g.observe(b)
        }), () => g.disconnect()
    }, []);
    const p = () => c(!1);
    return S.jsxs(S.Fragment, {
        children: [S.jsx("div", {
            className: "fixed top-0 left-0 h-[2px] bg-primary z-[60] transition-all duration-150 ease-out",
            style: {
                width: `${a}%`
            }
        }), S.jsxs("header", {
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-background/80 backdrop-blur-xl border-b border-primary/10 py-3 shadow-sm":"bg-transparent py-4 sm:py-5"}`,
            children: [S.jsx("div", {
                className: "max-w-6xl mx-auto px-5 sm:px-8 lg:px-14",
                children: S.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [S.jsx("a", {
                        href: "#",
                        style: {
                            fontFamily: "'Dancing Script', cursive"
                        },
                        className: "text-2xl sm:text-3xl text-primary hover:opacity-80 transition-opacity shrink-0",
                        children: "Vijay Krishna A J"
                    }), S.jsx("nav", {
                        className: "hidden lg:flex items-center gap-5 xl:gap-7",
                        children: g0.map(m => {
                            const g = f === m.href.replace("#", "");
                            return S.jsx("a", {
                                href: m.href,
                                className: `text-[11px] xl:text-xs font-semibold uppercase tracking-widest transition-colors pb-0.5 ${g?"text-primary border-b border-primary":"text-foreground/60 hover:text-foreground border-b border-transparent"}`,
                                children: m.name
                            }, m.name)
                        })
                    }), S.jsx("a", {
                        href: "#contact",
                        className: "hidden lg:inline-flex items-center bg-primary text-primary-foreground px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-sm shrink-0",
                        children: "Contact"
                    }), S.jsx("button", {
                        className: "lg:hidden text-foreground p-2 -mr-2 touch-manipulation",
                        onClick: () => c(!l),
                        "aria-label": "Toggle menu",
                        children: l ? S.jsx(fb, {
                            size: 22
                        }) : S.jsx(qA, {
                            size: 22
                        })
                    })]
                })
            }), S.jsx(pN, {
                children: l && S.jsx(Ut.div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    transition: {
                        duration: .2
                    },
                    className: "lg:hidden bg-background/95 backdrop-blur-xl border-b border-primary/20 absolute top-full left-0 right-0 overflow-hidden",
                    children: S.jsxs("div", {
                        className: "px-5 py-5 flex flex-col gap-1",
                        children: [g0.map(m => S.jsx("a", {
                            href: m.href,
                            className: "text-base font-medium text-foreground/80 py-3 border-b border-border/20 last:border-0 hover:text-primary transition-colors",
                            onClick: p,
                            children: m.name
                        }, m.name)), S.jsx("a", {
                            href: "#contact",
                            className: "mt-3 text-center bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors",
                            onClick: p,
                            children: "Contact"
                        })]
                    })
                })
            })]
        })]
    })
}

function E3() {
    return S.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: S.jsx("path", {
            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        })
    })
}

function A3() {
    const e = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };
    return S.jsx("footer", {
        id: "contact",
        className: "bg-background py-28 lg:py-36 relative overflow-hidden border-t border-border/50 flex flex-col items-center",
        children: S.jsxs("div", {
            className: "max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full flex flex-col items-center text-center",
            children: [S.jsx("h2", {
                className: "font-display text-4xl md:text-5xl font-bold mb-4 text-foreground",
                children: "Let's Connect"
            }), S.jsx("p", {
                className: "text-foreground/70 max-w-2xl mx-auto text-lg mb-12 leading-relaxed",
                children: "I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
            }), S.jsxs("div", {
                className: "flex justify-center gap-6 mb-16",
                children: [S.jsx("a", {
                    href: "mailto:vijaykrishnaaj@gmail.com",
                    title: "Send me an email",
                    className: "w-14 h-14 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all",
                    children: S.jsx(BA, {
                        size: 22
                    })
                }), S.jsx("a", {
                    href: "tel:+917034427404",
                    title: "Call me",
                    className: "w-14 h-14 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all",
                    children: S.jsx(KA, {
                        size: 22
                    })
                }), S.jsx("a", {
                    href: "https://www.linkedin.com/in/vijaykrishnaaj",
                    target: "_blank",
                    rel: "noreferrer",
                    title: "Connect on LinkedIn",
                    className: "w-14 h-14 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all",
                    children: S.jsx(E3, {})
                })]
            }), S.jsxs("div", {
                className: "pt-8 w-full border-t border-border/30 flex flex-col items-center justify-center gap-4",
                children: [S.jsxs("p", {
                    className: "text-muted-foreground text-sm",
                    children: ["© ", new Date().getFullYear(), " Vijay Krishna A J. All rights reserved."]
                }), S.jsxs("button", {
                    onClick: e,
                    className: "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-wider font-semibold",
                    children: ["Back to top ", S.jsx(jA, {
                        size: 14
                    })]
                })]
            })]
        })
    })
}
const ud = E.forwardRef(({
    className: e,
    variant: i = "default",
    size: a = "default",
    asChild: o = !1,
    ...l
}, c) => {
    const f = {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md hover:-translate-y-0.5",
            outline: "border border-input bg-background hover:bg-accent/10 hover:text-accent-foreground hover:-translate-y-0.5 shadow-sm",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent/10 hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        h = {
            default: "h-11 px-6 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-xl px-8 text-base",
            icon: "h-11 w-11"
        };
    return S.jsx("button", {
        className: we("inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", f[i], h[a], e),
        ref: c,
        ...l
    })
});
ud.displayName = "Button";
const fe = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: .7,
                ease: "easeOut"
            }
        }
    },
    Ls = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .12
            }
        }
    },
    tr = ({
        label: e,
        title: i
    }) => S.jsxs("div", {
        className: "mb-12 md:mb-16",
        children: [S.jsxs("div", {
            className: "text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-3 flex items-center gap-3",
            children: [S.jsx("span", {
                className: "w-8 h-[1px] bg-primary shrink-0"
            }), e]
        }), S.jsx("h2", {
            className: "font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight",
            children: i
        })]
    });

function C3() {
    return S.jsxs("div", {
        className: "min-h-screen flex flex-col w-full overflow-x-hidden",
        children: [S.jsx(w3, {}), S.jsxs("main", {
            className: "flex-1",
            children: [S.jsxs("section", {
                id: "hero",
                className: "relative pt-28 pb-16 sm:pt-36 md:pt-44 md:pb-28 flex items-center min-h-[100svh] bg-background overflow-hidden",
                children: [S.jsx("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
                }), S.jsx("div", {
                    className: "max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 w-full relative z-10",
                    children: S.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center",
                        children: [S.jsxs(Ut.div, {
                            initial: "hidden",
                            animate: "visible",
                            variants: Ls,
                            className: "lg:col-span-7 order-2 lg:order-1",
                            children: [S.jsxs(Ut.div, {
                                variants: fe,
                                className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider mb-7 border border-primary/20",
                                children: [S.jsx("span", {
                                    className: "w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"
                                }), "MBA Candidate & Digital Marketer"]
                            }), S.jsx(Ut.h1, {
                                variants: fe,
                                className: "text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold font-display text-foreground leading-tight mb-5",
                                children: "Hi, I'm Vijay Krishna A J"
                            }), S.jsx(Ut.p, {
                                variants: fe,
                                className: "text-base sm:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed",
                                children: "MBA Candidate · Digital Marketer · Finance Enthusiast"
                            }), S.jsxs(Ut.div, {
                                variants: fe,
                                className: "flex flex-wrap gap-3 mb-14",
                                children: [S.jsx("a", {
                                    href: "#contact",
                                    children: S.jsxs(ud, {
                                        size: "lg",
                                        className: "rounded-full px-7 text-sm uppercase tracking-wider font-semibold shadow-none hover:shadow-lg transition-all group",
                                        children: ["Get in Touch", S.jsx(OA, {
                                            className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                        })]
                                    })
                                }), S.jsx("a", {
                                    href: "#projects",
                                    children: S.jsx(ud, {
                                        size: "lg",
                                        variant: "outline",
                                        className: "rounded-full px-7 text-sm uppercase tracking-wider font-semibold border-primary/30 hover:bg-primary/5 hover:border-primary/50 shadow-none",
                                        children: "View My Work"
                                    })
                                })]
                            }), S.jsx(Ut.div, {
                                variants: fe,
                                className: "pt-7 border-t border-border/40 grid grid-cols-3 gap-4",
                                children: [{
                                    value: "1.5",
                                    label: "Years Exp."
                                }, {
                                    value: "100+",
                                    label: "Survey Resp."
                                }, {
                                    value: "2",
                                    label: "Certifications"
                                }].map(e => S.jsxs("div", {
                                    children: [S.jsx("div", {
                                        className: "text-primary font-display text-2xl sm:text-3xl font-bold mb-1",
                                        children: e.value
                                    }), S.jsx("div", {
                                        className: "text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-medium",
                                        children: e.label
                                    })]
                                }, e.label))
                            })]
                        }), S.jsx(Ut.div, {
                            initial: "hidden",
                            animate: "visible",
                            variants: fe,
                            className: "lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end relative",
                            children: S.jsxs("div", {
                                className: "relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-sm",
                                children: [S.jsx("div", {
                                    className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-56 bg-primary/20 rounded-full blur-[80px] pointer-events-none"
                                }), S.jsx("img", {
                                    src: "/portfolio/images/vijay-nobg.png",
                                    alt: "Vijay Krishna A J",
                                    className: "relative z-10 w-full object-contain",
                                    style: {
                                        maxHeight: "520px"
                                    },
                                    onError: e => {
                                        e.target.src = "https://raw.githubusercontent.com/vijaykrishnaaj/portfolio/main/Sources/Profile1.png"
                                    }
                                })]
                            })
                        })]
                    })
                })]
            }), S.jsx("section", {
                id: "about",
                className: "py-20 md:py-28 lg:py-36 bg-card/10 relative",
                children: S.jsx("div", {
                    className: "max-w-6xl mx-auto px-5 sm:px-8 lg:px-14",
                    children: S.jsx(Ut.div, {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: !0,
                            margin: "-60px"
                        },
                        variants: Ls,
                        children: S.jsxs(Ut.div, {
                            variants: fe,
                            className: "max-w-3xl",
                            children: [S.jsx(tr, {
                                label: "Discover",
                                title: "About Me"
                            }), S.jsx("p", {
                                className: "text-base sm:text-lg text-foreground/70 mb-5 leading-relaxed",
                                children: "I am a driven MBA candidate with a strong foundation in Commerce and a burgeoning expertise in Digital Marketing. My journey bridges the analytical rigour of finance with the creative strategies of marketing."
                            }), S.jsx("p", {
                                className: "text-base sm:text-lg text-foreground/70 mb-12 leading-relaxed",
                                children: "Beyond academics, I have a deep interest in Technology and Spirituality, which grounds my perspective and fuels my continuous learning. I thrive in dynamic environments where data meets creativity."
                            }), S.jsxs("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-7 pt-8 border-t border-border/30",
                                children: [S.jsxs("div", {
                                    children: [S.jsx("h4", {
                                        className: "text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1",
                                        children: "Date of Birth"
                                    }), S.jsx("p", {
                                        className: "text-foreground font-medium text-sm sm:text-base",
                                        children: "18th July 2002"
                                    })]
                                }), S.jsxs("div", {
                                    children: [S.jsx("h4", {
                                        className: "text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1",
                                        children: "Nationality"
                                    }), S.jsx("p", {
                                        className: "text-foreground font-medium text-sm sm:text-base",
                                        children: "Indian"
                                    })]
                                }), S.jsxs("div", {
                                    children: [S.jsx("h4", {
                                        className: "text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1",
                                        children: "Focus Area"
                                    }), S.jsx("p", {
                                        className: "text-foreground font-medium text-sm sm:text-base",
                                        children: "Marketing"
                                    })]
                                }), S.jsxs("div", {
                                    className: "col-span-2 sm:col-span-3",
                                    children: [S.jsx("h4", {
                                        className: "text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3",
                                        children: "Languages"
                                    }), S.jsx("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: ["English", "Hindi", "Malayalam", "Tamil"].map(e => S.jsx("span", {
                                            className: "text-xs font-medium bg-primary/5 text-primary border border-primary/20 px-3 py-1 rounded-full",
                                            children: e
                                        }, e))
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }), S.jsx("section", {
                id: "experience",
                className: "py-20 md:py-28 lg:py-36 bg-background",
                children: S.jsx("div", {
                    className: "max-w-6xl mx-auto px-5 sm:px-8 lg:px-14",
                    children: S.jsxs(Ut.div, {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: !0,
                            margin: "-60px"
                        },
                        variants: Ls,
                        children: [S.jsx(tr, {
                            label: "Experience",
                            title: "Career Journey"
                        }), S.jsxs("div", {
                            className: "relative",
                            children: [S.jsx("div", {
                                className: "hidden md:block absolute left-[7.5rem] top-2 bottom-0 w-px bg-primary/20"
                            }), S.jsxs("div", {
                                className: "space-y-14 md:space-y-16",
                                children: [S.jsx(y0, {
                                    date: "2025 – Present",
                                    company: "GUSTORA FOODS PVT LTD",
                                    role: "Digital Marketing Intern",
                                    isPresent: !0,
                                    bullets: ["Contributing to digital marketing initiatives applying skills in content strategy.", "Managing brand presence and driving online engagement across platforms."]
                                }), S.jsx(y0, {
                                    date: "2024 – 2025",
                                    company: "INTERVAL LEARNING PLATFORM",
                                    role: "Tutor",
                                    bullets: ["Delivered personalised tutoring sessions to students across subjects.", "Developed structured learning plans to improve academic performance.", "Mentored students on critical thinking and problem-solving skills."]
                                }), S.jsxs(Ut.div, {
                                    variants: fe,
                                    className: "relative flex flex-col md:flex-row gap-4 md:gap-12",
                                    children: [S.jsx("div", {
                                        className: "md:w-28 shrink-0 pt-1",
                                        children: S.jsx("span", {
                                            className: "text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold",
                                            children: "May 2023 – Sep 2024"
                                        })
                                    }), S.jsx("div", {
                                        className: "hidden md:block absolute left-[7.3rem] top-2.5 w-3 h-3 rounded-full bg-primary/50 ring-4 ring-background z-10"
                                    }), S.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [S.jsx("h3", {
                                            className: "text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-5",
                                            children: "POSITIVE BUSINESS SOLUTIONS"
                                        }), S.jsxs("div", {
                                            className: "space-y-8 pl-4 md:pl-6 border-l-2 border-border/30",
                                            children: [S.jsxs("div", {
                                                className: "relative",
                                                children: [S.jsx("span", {
                                                    className: "absolute -left-[1.35rem] top-2 w-1.5 h-1.5 rounded-full bg-primary/40"
                                                }), S.jsx("span", {
                                                    className: "text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-1",
                                                    children: "Jan 2024 – Sep 2024"
                                                }), S.jsx("h4", {
                                                    className: "text-lg sm:text-xl text-primary font-display mb-3",
                                                    children: "Junior Accountant"
                                                }), S.jsxs("ul", {
                                                    className: "space-y-1.5 text-sm text-foreground/70",
                                                    children: [S.jsx("li", {
                                                        children: "• Accurate data entry and meticulous record-keeping."
                                                    }), S.jsx("li", {
                                                        children: "• Assisted Senior Accountant in financial operations & reporting."
                                                    }), S.jsx("li", {
                                                        children: "• Managed Accounts Payables & Receivables."
                                                    }), S.jsx("li", {
                                                        children: "• Conducted regular Bank Reconciliations."
                                                    })]
                                                })]
                                            }), S.jsxs("div", {
                                                className: "relative",
                                                children: [S.jsx("span", {
                                                    className: "absolute -left-[1.35rem] top-2 w-1.5 h-1.5 rounded-full bg-primary/40"
                                                }), S.jsx("span", {
                                                    className: "text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-1",
                                                    children: "May 2023 – Dec 2023"
                                                }), S.jsx("h4", {
                                                    className: "text-lg sm:text-xl text-primary font-display mb-3",
                                                    children: "Digital Marketing Associate"
                                                }), S.jsxs("ul", {
                                                    className: "space-y-1.5 text-sm text-foreground/70",
                                                    children: [S.jsx("li", {
                                                        children: "• Content creation strategies across digital platforms."
                                                    }), S.jsx("li", {
                                                        children: "• Comprehensive market research to identify trends & opportunities."
                                                    }), S.jsx("li", {
                                                        children: "• Lead generation campaigns to build sales pipelines."
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }), S.jsx("section", {
                id: "education",
                className: "py-20 md:py-28 lg:py-36 bg-card/10 relative",
                children: S.jsx("div", {
                    className: "max-w-6xl mx-auto px-5 sm:px-8 lg:px-14",
                    children: S.jsxs(Ut.div, {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: !0,
                            margin: "-60px"
                        },
                        variants: Ls,
                        children: [S.jsx(tr, {
                            label: "Academia",
                            title: "Education"
                        }), S.jsx("div", {
                            className: "w-full divide-y divide-border/20",
                            children: [{
                                degree: "MBA in Marketing",
                                inst: "ICFAI Business School, Jaipur",
                                score: "8.25 CGPA",
                                year: "2027 (Expected)",
                                highlight: !0
                            }, {
                                degree: "B.Com in Finance",
                                inst: "University of Calicut",
                                score: "7.6 CGPA",
                                year: "Apr 2023",
                                highlight: !1
                            }, {
                                degree: "XII (Commerce)",
                                inst: "Directorate of Higher Secondary Education, Kerala",
                                score: "94.4%",
                                year: "Mar 2020",
                                highlight: !1
                            }, {
                                degree: "Class X",
                                inst: "Kerala Board of Public Examination",
                                score: "99%",
                                year: "Mar 2018",
                                highlight: !1
                            }].map((e, i) => S.jsxs(Ut.div, {
                                variants: fe,
                                className: `flex flex-col sm:flex-row sm:items-center py-5 sm:py-6 gap-2 sm:gap-0 transition-colors ${e.highlight?"bg-primary/5 border-l-2 border-l-primary pl-4 -ml-4 sm:-ml-0 sm:pl-5":"hover:bg-card/20"}`,
                                children: [S.jsx("div", {
                                    className: "sm:w-[38%]",
                                    children: S.jsx("h4", {
                                        className: "text-base sm:text-lg md:text-xl font-display font-semibold text-foreground leading-snug",
                                        children: e.degree
                                    })
                                }), S.jsx("div", {
                                    className: "sm:w-[38%]",
                                    children: S.jsx("p", {
                                        className: "text-sm sm:text-base text-foreground/70 leading-snug",
                                        children: e.inst
                                    })
                                }), S.jsxs("div", {
                                    className: "sm:w-[24%] flex sm:flex-col sm:items-end gap-3 sm:gap-1",
                                    children: [S.jsx("span", {
                                        className: "text-lg sm:text-xl font-semibold text-primary",
                                        children: e.score
                                    }), S.jsxs("span", {
                                        className: "text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
                                        children: [e.year, e.highlight && S.jsx("span", {
                                            className: "w-2 h-2 rounded-full bg-primary animate-pulse inline-block"
                                        })]
                                    })]
                                })]
                            }, i))
                        })]
                    })
                })
            }), S.jsx("section", {
                id: "projects",
                className: "py-20 md:py-28 lg:py-36 bg-background",
                children: S.jsx("div", {
                    className: "max-w-6xl mx-auto px-5 sm:px-8 lg:px-14",
                    children: S.jsxs(Ut.div, {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: !0,
                            margin: "-60px"
                        },
                        variants: Ls,
                        children: [S.jsx(tr, {
                            label: "Portfolio",
                            title: "Projects & Research"
                        }), S.jsxs("div", {
                            className: "grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8",
                            children: [S.jsx(Ut.div, {
                                variants: fe,
                                className: "lg:col-span-7",
                                children: S.jsxs("div", {
                                    className: "h-full border border-border/30 bg-card/10 p-7 sm:p-10 lg:p-12 flex flex-col justify-between hover:border-primary/30 transition-all rounded-xl",
                                    children: [S.jsxs("div", {
                                        children: [S.jsx("span", {
                                            className: "text-xs font-bold uppercase tracking-wider text-primary mb-4 block",
                                            children: "Academic Project"
                                        }), S.jsx("h3", {
                                            className: "text-2xl sm:text-3xl lg:text-4xl leading-snug font-display mb-4 text-foreground",
                                            children: "Effectiveness of Social Media Advertising"
                                        }), S.jsx("p", {
                                            className: "text-base sm:text-lg text-foreground/70 mb-8 leading-relaxed",
                                            children: "A comprehensive study evaluating how social media ads influence consumer purchasing behavior with special reference to Palakkad District."
                                        })]
                                    }), S.jsxs("div", {
                                        className: "mt-6 border-t border-border/30 pt-6",
                                        children: [S.jsx("div", {
                                            className: "text-4xl sm:text-5xl font-display text-primary mb-2",
                                            children: "85%"
                                        }), S.jsx("p", {
                                            className: "text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-medium",
                                            children: "Purchase rate after viewing social media ads"
                                        })]
                                    })]
                                })
                            }), S.jsx(Ut.div, {
                                variants: fe,
                                className: "lg:col-span-5",
                                children: S.jsxs("div", {
                                    className: "h-full border border-border/30 bg-card/10 p-7 sm:p-10 hover:border-primary/30 transition-all rounded-xl",
                                    children: [S.jsx("span", {
                                        className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 block",
                                        children: "Position of Responsibility"
                                    }), S.jsx("h3", {
                                        className: "text-xl sm:text-2xl leading-snug font-display mb-2 text-foreground",
                                        children: "Research Analyst"
                                    }), S.jsx("p", {
                                        className: "text-sm text-foreground/60 mb-8",
                                        children: "Consumer Perception Study"
                                    }), S.jsx("ul", {
                                        className: "space-y-4",
                                        children: ["Designed and distributed detailed questionnaires for data collection.", "Collected and analyzed data from 100 diverse respondents.", "Conducted comparative analysis between digital and traditional advertising.", "Authored and presented the final comprehensive research report."].map((e, i) => S.jsxs("li", {
                                            className: "flex items-start gap-3",
                                            children: [S.jsx(LA, {
                                                className: "w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5"
                                            }), S.jsx("span", {
                                                className: "text-foreground/70 text-sm leading-relaxed",
                                                children: e
                                            })]
                                        }, i))
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }), S.jsx("section", {
                id: "skills",
                className: "py-20 md:py-28 lg:py-36 bg-card/10 relative border-t border-border/30",
                children: S.jsx("div", {
                    className: "max-w-6xl mx-auto px-5 sm:px-8 lg:px-14",
                    children: S.jsxs(Ut.div, {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: !0,
                            margin: "-60px"
                        },
                        variants: Ls,
                        children: [S.jsx(tr, {
                            label: "Expertise",
                            title: "Skills & Beyond"
                        }), S.jsxs("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mb-16",
                            children: [S.jsxs(Ut.div, {
                                variants: fe,
                                children: [S.jsx("h3", {
                                    className: "text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground mb-5 pb-2 border-b border-border/30",
                                    children: "Technical Skills"
                                }), S.jsx("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: ["Programming", "MS Office Suite", "Tally ERP", "Linux OS"].map(e => S.jsx("span", {
                                        className: "px-3 sm:px-4 py-2 bg-background border border-border/50 text-xs font-medium text-foreground hover:border-primary/30 transition-colors rounded",
                                        children: e
                                    }, e))
                                })]
                            }), S.jsxs(Ut.div, {
                                variants: fe,
                                id: "certifications",
                                children: [S.jsx("h3", {
                                    className: "text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground mb-5 pb-2 border-b border-border/30",
                                    children: "Certifications"
                                }), S.jsxs("div", {
                                    className: "space-y-3",
                                    children: [S.jsxs("div", {
                                        className: "p-4 bg-background border border-border/50 hover:border-primary/30 transition-colors rounded",
                                        children: [S.jsx("p", {
                                            className: "font-semibold text-foreground text-sm mb-1",
                                            children: "Bloomberg Market Concepts"
                                        }), S.jsx("p", {
                                            className: "text-xs text-muted-foreground uppercase tracking-wider",
                                            children: "Issued: Nov 2025"
                                        })]
                                    }), S.jsxs("div", {
                                        className: "p-4 bg-background border border-border/50 hover:border-primary/30 transition-colors rounded",
                                        children: [S.jsx("p", {
                                            className: "font-semibold text-foreground text-sm mb-1",
                                            children: "Generative AI by Google"
                                        }), S.jsx("p", {
                                            className: "text-xs text-primary uppercase tracking-wider font-medium",
                                            children: "Pursuing"
                                        })]
                                    })]
                                })]
                            }), S.jsxs(Ut.div, {
                                variants: fe,
                                id: "activities",
                                className: "sm:col-span-2 md:col-span-1",
                                children: [S.jsx("h3", {
                                    className: "text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground mb-5 pb-2 border-b border-border/30",
                                    children: "Activities & Interests"
                                }), S.jsx("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-3",
                                    children: [{
                                        icon: S.jsx(FA, {
                                            className: "text-primary w-5 h-5"
                                        }),
                                        label: "NSS Volunteer"
                                    }, {
                                        icon: S.jsx(YA, {
                                            className: "text-primary w-5 h-5"
                                        }),
                                        label: "Cultural Events"
                                    }, {
                                        icon: S.jsx(PA, {
                                            className: "text-primary w-5 h-5"
                                        }),
                                        label: "Technology"
                                    }, {
                                        icon: S.jsx("span", {
                                            className: "text-lg leading-none",
                                            children: "🕉️"
                                        }),
                                        label: "Spirituality"
                                    }].map(e => S.jsxs("div", {
                                        className: "p-3 sm:p-4 bg-background border border-border/50 flex flex-col items-center justify-center text-center gap-2 hover:border-primary/30 transition-colors rounded",
                                        children: [e.icon, S.jsx("span", {
                                            className: "text-xs font-medium",
                                            children: e.label
                                        })]
                                    }, e.label))
                                })]
                            })]
                        }), S.jsxs(Ut.div, {
                            variants: fe,
                            className: "pt-10 border-t border-border/30",
                            children: [S.jsx("h3", {
                                className: "text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground mb-6",
                                children: "Scholastic Engagements"
                            }), S.jsx("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                                children: [{
                                    title: "Webinar on New Age Technologies",
                                    speaker: "Mr. Rajeev B. C."
                                }, {
                                    title: "Guest Lecture on Logistics",
                                    speaker: "Mr. Rajesh Kumar"
                                }, {
                                    title: "Discussion on Capital Markets",
                                    speaker: "Prof. P. G. Apte"
                                }, {
                                    title: "Leadership in Real Estate",
                                    speaker: "Dr. Najeeb Khan"
                                }].map((e, i) => S.jsxs("div", {
                                    className: "p-5 bg-background border border-border/50 hover:border-primary/30 transition-colors rounded",
                                    children: [S.jsx("h4", {
                                        className: "text-sm font-semibold text-foreground mb-2 leading-snug",
                                        children: e.title
                                    }), S.jsx("p", {
                                        className: "text-xs text-muted-foreground uppercase tracking-wider",
                                        children: e.speaker
                                    })]
                                }, i))
                            })]
                        })]
                    })
                })
            })]
        }), S.jsx(A3, {})]
    })
}

function y0({
    date: e,
    company: i,
    role: a,
    bullets: o,
    isPresent: l = !1
}) {
    return S.jsxs(Ut.div, {
        variants: fe,
        className: "relative flex flex-col md:flex-row gap-4 md:gap-12",
        children: [S.jsx("div", {
            className: "md:w-28 shrink-0 pt-1",
            children: S.jsx("span", {
                className: "text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold",
                children: e
            })
        }), S.jsx("div", {
            className: `hidden md:block absolute left-[7.3rem] top-2.5 w-3 h-3 rounded-full ring-4 ring-background z-10 ${l?"bg-green-500":"bg-primary/50"}`
        }), S.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [S.jsxs("div", {
                className: "flex flex-wrap items-center gap-2 sm:gap-3 mb-2",
                children: [S.jsx("h3", {
                    className: "text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider",
                    children: i
                }), l && S.jsx("span", {
                    className: "text-[10px] bg-green-500/10 text-green-500 border border-green-500/30 rounded px-2 py-0.5 font-bold uppercase tracking-wider",
                    children: "Present"
                })]
            }), S.jsx("h4", {
                className: "text-xl sm:text-2xl text-primary font-display mb-4",
                children: a
            }), S.jsx("ul", {
                className: "space-y-1.5 text-sm text-foreground/70 max-w-2xl",
                children: o.map((c, f) => S.jsxs("li", {
                    children: ["• ", c]
                }, f))
            })]
        })]
    })
}
const R3 = new SE;

function M3() {
    return S.jsxs(Fw, {
        children: [S.jsx(vy, {
            path: "/",
            component: C3
        }), S.jsx(vy, {
            component: MR
        })]
    })
}

function D3() {
    return S.jsx(wE, {
        client: R3,
        children: S.jsx("div", {
            className: "dark min-h-screen bg-background text-foreground w-full",
            children: S.jsxs(TR, {
                children: [S.jsx(D0, {
                    base: "/portfolio/".replace(/\/$/, ""),
                    children: S.jsx(M3, {})
                }), S.jsx(q2, {})]
            })
        })
    })
}
Rw.createRoot(document.getElementById("root")).render(S.jsx(D3, {}));
