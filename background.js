(() => {
    var Ve = Object.create;
    var L = Object.defineProperty,
        Ze = Object.defineProperties,
        Ye = Object.getOwnPropertyDescriptor,
        Ke = Object.getOwnPropertyDescriptors,
        Qe = Object.getOwnPropertyNames,
        Te = Object.getOwnPropertySymbols,
        Xe = Object.getPrototypeOf,
        Ie = Object.prototype.hasOwnProperty,
        et = Object.prototype.propertyIsEnumerable;
    var ee = (e, t, n) => t in e ? L(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n,
        R = (e, t) => {
            for (var n in t || (t = {})) Ie.call(t, n) && ee(e, n, t[n]);
            if (Te)
                for (var n of Te(t)) et.call(t, n) && ee(e, n, t[n]);
            return e
        },
        $ = (e, t) => Ze(e, Ke(t)),
        ke = e => L(e, "__esModule", {
            value: !0
        });
    var Me = (e, t) => () => (e && (t = e(e = 0)), t);
    var te = (e, t) => () => (t || e((t = {
                exports: {}
            })
            .exports, t), t.exports),
        Ce = (e, t) => {
            ke(e);
            for (var n in t) L(e, n, {
                get: t[n],
                enumerable: !0
            })
        },
        tt = (e, t, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let r of Qe(t)) !Ie.call(e, r) && r !== "default" && L(e, r, {
                    get: () => t[r],
                    enumerable: !(n = Ye(t, r)) || n.enumerable
                });
            return e
        },
        nt = e => tt(ke(L(e != null ? Ve(Xe(e)) : {}, "default", e && e.__esModule && "default" in e ? {
            get: () => e.default,
            enumerable: !0
        } : {
            value: e,
            enumerable: !0
        })), e);
    var Ee = (e, t, n) => (ee(e, typeof t != "symbol" ? t + "" : t, n), n);
    var ne = {};
    Ce(ne, {
        createNanoEvents: () => rt
    });
    var rt, re = Me(() => {
        rt = () => ({
            events: {},
            emit(e, ...t) {
                (this.events[e] || [])
                .forEach(n => n(...t))
            },
            on(e, t) {
                return (this.events[e] = this.events[e] || [])
                    .push(t), () => this.events[e] = (this.events[e] || [])
                    .filter(n => n !== t)
            }
        })
    });
    var oe = te((se, Se) => {
        (function(e, t) {
            if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], t);
            else if (typeof se != "undefined") t(Se);
            else {
                var n = {
                    exports: {}
                };
                t(n), e.browser = n.exports
            }
        })(typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : se, function(e) {
            "use strict";
            if (typeof globalThis != "object" || typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser == "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                let t = "The message port closed before a response was received.",
                    n = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                    r = o => {
                        let i = {
                            alarms: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                clearAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            bookmarks: {
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getChildren: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getRecent: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getSubTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTree: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            browserAction: {
                                disable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                enable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                getBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                openPopup: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            browsingData: {
                                remove: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                removeCache: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCookies: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeDownloads: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFormData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeHistory: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeLocalStorage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePasswords: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePluginData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                settings: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            commands: {
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            contextMenus: {
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            cookies: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAllCookieStores: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            devtools: {
                                inspectedWindow: {
                                    eval: {
                                        minArgs: 1,
                                        maxArgs: 2,
                                        singleCallbackArg: !1
                                    }
                                },
                                panels: {
                                    create: {
                                        minArgs: 3,
                                        maxArgs: 3,
                                        singleCallbackArg: !0
                                    },
                                    elements: {
                                        createSidebarPane: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    }
                                }
                            },
                            downloads: {
                                cancel: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                download: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                erase: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFileIcon: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                open: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                pause: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFile: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                resume: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                isAllowedIncognitoAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            history: {
                                addUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                deleteRange: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getVisits: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            i18n: {
                                detectLanguage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAcceptLanguages: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            identity: {
                                launchWebAuthFlow: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            idle: {
                                queryState: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            management: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSelf: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setEnabled: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                uninstallSelf: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            notifications: {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPermissionLevel: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            pageAction: {
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                hide: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            permissions: {
                                contains: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                request: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            runtime: {
                                getBackgroundPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPlatformInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                openOptionsPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                requestUpdateCheck: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                sendMessage: {
                                    minArgs: 1,
                                    maxArgs: 3
                                },
                                sendNativeMessage: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                setUninstallURL: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            sessions: {
                                getDevices: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getRecentlyClosed: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                restore: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            storage: {
                                local: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                managed: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                sync: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            },
                            tabs: {
                                captureVisibleTab: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                detectLanguage: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                discard: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                duplicate: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                executeScript: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getZoom: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getZoomSettings: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goBack: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goForward: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                highlight: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                insertCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                query: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                reload: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                sendMessage: {
                                    minArgs: 2,
                                    maxArgs: 3
                                },
                                setZoom: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                setZoomSettings: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                update: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            topSites: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            webNavigation: {
                                getAllFrames: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFrame: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            webRequest: {
                                handlerBehaviorChanged: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            windows: {
                                create: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getLastFocused: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            }
                        };
                        if (Object.keys(i)
                            .length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class c extends WeakMap {
                            constructor(a, m = void 0) {
                                super(m);
                                this.createItem = a
                            }
                            get(a) {
                                return this.has(a) || this.set(a, this.createItem(a)), super.get(a)
                            }
                        }
                        let l = s => s && typeof s == "object" && typeof s.then == "function",
                            p = (s, a) => (...m) => {
                                o.runtime.lastError ? s.reject(new Error(o.runtime.lastError.message)) : a.singleCallbackArg || m.length <= 1 && a.singleCallbackArg !== !1 ? s.resolve(m[0]) : s.resolve(m)
                            },
                            x = s => s == 1 ? "argument" : "arguments",
                            F = (s, a) => function(d, ...A) {
                                if (A.length < a.minArgs) throw new Error(`Expected at least ${a.minArgs} ${x(a.minArgs)} for ${s}(), got ${A.length}`);
                                if (A.length > a.maxArgs) throw new Error(`Expected at most ${a.maxArgs} ${x(a.maxArgs)} for ${s}(), got ${A.length}`);
                                return new Promise((h, w) => {
                                    if (a.fallbackToNoCallback) try {
                                        d[s](...A, p({
                                            resolve: h,
                                            reject: w
                                        }, a))
                                    } catch (g) {
                                        console.warn(`${s} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, g), d[s](...A), a.fallbackToNoCallback = !1, a.noCallback = !0, h()
                                    } else a.noCallback ? (d[s](...A), h()) : d[s](...A, p({
                                        resolve: h,
                                        reject: w
                                    }, a))
                                })
                            },
                            O = (s, a, m) => new Proxy(a, {
                                apply(d, A, h) {
                                    return m.call(A, s, ...h)
                                }
                            }),
                            k = Function.call.bind(Object.prototype.hasOwnProperty),
                            B = (s, a = {}, m = {}) => {
                                let d = Object.create(null),
                                    A = {
                                        has(w, g) {
                                            return g in s || g in d
                                        },
                                        get(w, g, y) {
                                            if (g in d) return d[g];
                                            if (!(g in s)) return;
                                            let f = s[g];
                                            if (typeof f == "function")
                                                if (typeof a[g] == "function") f = O(s, s[g], a[g]);
                                                else if (k(m, g)) {
                                                let E = F(g, m[g]);
                                                f = O(s, s[g], E)
                                            } else f = f.bind(s);
                                            else if (typeof f == "object" && f !== null && (k(a, g) || k(m, g))) f = B(f, a[g], m[g]);
                                            else if (k(m, "*")) f = B(f, a[g], m["*"]);
                                            else return Object.defineProperty(d, g, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return s[g]
                                                },
                                                set(E) {
                                                    s[g] = E
                                                }
                                            }), f;
                                            return d[g] = f, f
                                        },
                                        set(w, g, y, f) {
                                            return g in d ? d[g] = y : s[g] = y, !0
                                        },
                                        defineProperty(w, g, y) {
                                            return Reflect.defineProperty(d, g, y)
                                        },
                                        deleteProperty(w, g) {
                                            return Reflect.deleteProperty(d, g)
                                        }
                                    },
                                    h = Object.create(s);
                                return new Proxy(h, A)
                            },
                            K = s => ({
                                addListener(a, m, ...d) {
                                    a.addListener(s.get(m), ...d)
                                },
                                hasListener(a, m) {
                                    return a.hasListener(s.get(m))
                                },
                                removeListener(a, m) {
                                    a.removeListener(s.get(m))
                                }
                            }),
                            ze = new c(s => typeof s != "function" ? s : function(m) {
                                let d = B(m, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                s(d)
                            }),
                            ye = !1,
                            ve = new c(s => typeof s != "function" ? s : function(m, d, A) {
                                let h = !1,
                                    w, g = new Promise(j => {
                                        w = function(v) {
                                            ye || (console.warn(n, new Error()
                                                .stack), ye = !0), h = !0, j(v)
                                        }
                                    }),
                                    y;
                                try {
                                    y = s(m, d, w)
                                } catch (j) {
                                    y = Promise.reject(j)
                                }
                                let f = y !== !0 && l(y);
                                if (y !== !0 && !f && !h) return !1;
                                let E = j => {
                                    j.then(v => {
                                            A(v)
                                        }, v => {
                                            let X;
                                            v && (v instanceof Error || typeof v.message == "string") ? X = v.message : X = "An unexpected error occurred", A({
                                                __mozWebExtensionPolyfillReject__: !0,
                                                message: X
                                            })
                                        })
                                        .catch(v => {
                                            console.error("Failed to send onMessage rejected reply", v)
                                        })
                                };
                                return E(f ? y : g), !0
                            }),
                            Ge = ({
                                reject: s,
                                resolve: a
                            }, m) => {
                                o.runtime.lastError ? o.runtime.lastError.message === t ? a() : s(new Error(o.runtime.lastError.message)) : m && m.__mozWebExtensionPolyfillReject__ ? s(new Error(m.message)) : a(m)
                            },
                            _e = (s, a, m, ...d) => {
                                if (d.length < a.minArgs) throw new Error(`Expected at least ${a.minArgs} ${x(a.minArgs)} for ${s}(), got ${d.length}`);
                                if (d.length > a.maxArgs) throw new Error(`Expected at most ${a.maxArgs} ${x(a.maxArgs)} for ${s}(), got ${d.length}`);
                                return new Promise((A, h) => {
                                    let w = Ge.bind(null, {
                                        resolve: A,
                                        reject: h
                                    });
                                    d.push(w), m.sendMessage(...d)
                                })
                            },
                            Je = {
                                devtools: {
                                    network: {
                                        onRequestFinished: K(ze)
                                    }
                                },
                                runtime: {
                                    onMessage: K(ve),
                                    onMessageExternal: K(ve),
                                    sendMessage: _e.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: _e.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            Q = {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            };
                        return i.privacy = {
                            network: {
                                "*": Q
                            },
                            services: {
                                "*": Q
                            },
                            websites: {
                                "*": Q
                            }
                        }, B(o, Je, i)
                    };
                e.exports = r(chrome)
            } else e.exports = globalThis.browser
        })
    });
    var Pe = {};
    Ce(Pe, {
        NonError: () => D,
        deserializeError: () => it,
        serializeError: () => at
    });
    function at(e, t = {}) {
        let {
            maxDepth: n = Number.POSITIVE_INFINITY
        } = t;
        return typeof e == "object" && e !== null ? ie({
            from: e,
            seen: [],
            forceEnumerable: !0,
            maxDepth: n,
            depth: 0
        }) : typeof e == "function" ? `[Function: ${e.name||"anonymous"}]` : e
    }
    function it(e, t = {}) {
        let {
            maxDepth: n = Number.POSITIVE_INFINITY
        } = t;
        if (e instanceof Error) return e;
        if (typeof e == "object" && e !== null && !Array.isArray(e)) {
            let r = new Error;
            return ie({
                from: e,
                seen: [],
                to_: r,
                maxDepth: n,
                depth: 0
            }), r
        }
        return new D(e)
    }
    var D, st, ae, ot, ie, Ne = Me(() => {
        D = class extends Error {
            constructor(t) {
                super(D._prepareSuperMessage(t));
                Ee(this, "name", "NonError")
            }
            static _prepareSuperMessage(t) {
                try {
                    return JSON.stringify(t)
                } catch {
                    return String(t)
                }
            }
        }, st = [{
            property: "name",
            enumerable: !1
        }, {
            property: "message",
            enumerable: !1
        }, {
            property: "stack",
            enumerable: !1
        }, {
            property: "code",
            enumerable: !0
        }], ae = Symbol(".toJSON was called"), ot = e => {
            e[ae] = !0;
            let t = e.toJSON();
            return delete e[ae], t
        }, ie = ({
            from: e,
            seen: t,
            to_: n,
            forceEnumerable: r,
            maxDepth: o,
            depth: i
        }) => {
            let c = n || (Array.isArray(e) ? [] : {});
            if (t.push(e), i >= o) return c;
            if (typeof e.toJSON == "function" && e[ae] !== !0) return ot(e);
            for (let [l, p] of Object.entries(e)) {
                if (typeof Buffer == "function" && Buffer.isBuffer(p)) {
                    c[l] = "[object Buffer]";
                    continue
                }
                if (p !== null && typeof p == "object" && typeof p.pipe == "function") {
                    c[l] = "[object Stream]";
                    continue
                }
                if (typeof p != "function") {
                    if (!p || typeof p != "object") {
                        c[l] = p;
                        continue
                    }
                    if (!t.includes(e[l])) {
                        i++, c[l] = ie({
                            from: e[l],
                            seen: [...t],
                            forceEnumerable: r,
                            maxDepth: o,
                            depth: i
                        });
                        continue
                    }
                    c[l] = "[Circular]"
                }
            }
            for (let {
                    property: l,
                    enumerable: p
                } of st) typeof e[l] == "string" && Object.defineProperty(c, l, {
                value: e[l],
                enumerable: r ? !0 : p,
                configurable: !0,
                writable: !0
            });
            return c
        }
    });
    var z = te((Vt, ce) => {
        var ct = e => typeof crypto != "undefined" && typeof crypto.getRandomValues == "function" ? () => {
                let t = crypto.getRandomValues(new Uint8Array(1))[0];
                return (t >= e ? t % e : t)
                    .toString(e)
            } : () => Math.floor(Math.random() * e)
            .toString(e),
            Oe = (e = 7, t = !1) => Array.from({
                length: e
            }, ct(t ? 16 : 36))
            .join("");
        ce.exports = Oe;
        ce.exports.default = Oe
    });
    var He = te((Zt, We) => {
        var lt = Object.create,
            G = Object.defineProperty,
            gt = Object.getOwnPropertyDescriptor,
            mt = Object.getOwnPropertyNames,
            dt = Object.getPrototypeOf,
            ut = Object.prototype.hasOwnProperty,
            pt = (e, t) => {
                for (var n in t) G(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            },
            je = (e, t, n, r) => {
                if (t && typeof t == "object" || typeof t == "function")
                    for (let o of mt(t)) !ut.call(e, o) && o !== n && G(e, o, {
                        get: () => t[o],
                        enumerable: !(r = gt(t, o)) || r.enumerable
                    });
                return e
            },
            W = (e, t, n) => (n = e != null ? lt(dt(e)) : {}, je(t || !e || !e.__esModule ? G(n, "default", {
                value: e,
                enumerable: !0
            }) : n, e)),
            ft = e => je(G({}, "__esModule", {
                value: !0
            }), e),
            Le = {};
        pt(Le, {
            Stream: () => U,
            allowWindowMessaging: () => _t,
            getCurrentContext: () => Ct,
            isInternalEndpoint: () => wt,
            onMessage: () => fe,
            onOpenStreamChannel: () => Ot,
            openStream: () => Nt,
            parseEndpoint: () => V,
            sendMessage: () => Z,
            setNamespace: () => vt
        });
        We.exports = ft(Le);
        var At = (re(), ne),
            S = W(oe()),
            bt = (Ne(), Pe),
            xt = W(z()),
            J = W(oe()),
            ht = /^((?:background$)|devtools|popup|options|content-script|window)(?:@(\d+)(?:\.(\d+))?)?$/,
            V = e => {
                let [, t, n, r] = e.match(ht) || [];
                return {
                    context: t,
                    tabId: +n,
                    frameId: r ? +r : void 0
                }
            },
            wt = ({
                context: e
            }) => ["content-script", "background", "devtools"].includes(e),
            le = e => J.default[e],
            yt = () => {
                var e, t, n;
                let r = J.default.runtime.getManifest();
                if (typeof window == "undefined") return "background";
                let o = ((e = r.browser_action) == null ? void 0 : e.default_popup) || ((t = r.action) == null ? void 0 : t.default_popup);
                return o && new URL(J.default.runtime.getURL(o))
                    .pathname === window.location.pathname ? "popup" : ((n = r.options_ui) == null ? void 0 : n.page) && new URL(J.default.runtime.getURL(r.options_ui.page))
                    .pathname === window.location.pathname ? "options" : "background"
            },
            u = le("devtools") ? "devtools" : le("tabs") ? yt() : le("extension") ? "content-script" : typeof document != "undefined" ? "window" : null,
            Re = (0, xt.default)(),
            ge = new Map,
            $e = new Map,
            me = new Set,
            de = new Map,
            b = null,
            T, ue;
        H();
        function vt(e) {
            T = e
        }
        function _t(e) {
            ue = !0, T = e
        }
        function H() {
            if (u === null) throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
            if ((u === "window" || u === "content-script") && window.addEventListener("message", kt), u === "content-script" && top === window && (b = S.default.runtime.connect(), b.onMessage.addListener(e => {
                    I(e)
                }), b.onDisconnect.addListener(() => {
                    b = null, H()
                })), u === "content-script" && top !== window && (b = S.default.runtime.connect(), b.onMessage.addListener(e => {
                    I(e)
                }), b.onDisconnect.addListener(() => {
                    b = null, H()
                })), u === "devtools") {
                let {
                    tabId: e
                } = S.default.devtools.inspectedWindow, t = `devtools@${e}`;
                b = S.default.runtime.connect(void 0, {
                    name: t
                }), b.onMessage.addListener(n => {
                    I(n)
                }), b.onDisconnect.addListener(() => {
                    b = null, H()
                })
            }
            if (u === "popup" || u === "options") {
                let e = `${u}`;
                b = S.default.runtime.connect(void 0, {
                    name: e
                }), b.onMessage.addListener(t => {
                    I(t)
                }), b.onDisconnect.addListener(() => {
                    b = null, H()
                })
            }
            u === "background" && S.default.runtime.onConnect.addListener(e => {
                let t = e.name || `content-script@${e.sender.tab.id}`,
                    n = e.sender.frameId;
                n && (t = `${t}.${n}`);
                let {
                    context: r,
                    tabId: o,
                    frameId: i
                } = V(t);
                !o && r !== "popup" && r !== "options" || (de.set(t, e), me.forEach(c => {
                    c.resolvedDestination === t && (e.postMessage(c.message), me.delete(c))
                }), e.onDisconnect.addListener(() => {
                    de.delete(t)
                }), e.onMessage.addListener(c => {
                    var l;
                    ((l = c == null ? void 0 : c.origin) == null ? void 0 : l.context) && (c.origin.tabId = o, c.origin.frameId = i, I(c))
                }))
            })
        }
        function I(e) {
            let {
                origin: t,
                destination: n
            } = e;
            if (!e.hops.includes(Re) && (e.hops.push(Re), !(u === "content-script" && [n, t].some(r => (r == null ? void 0 : r.context) === "window") && !ue))) {
                if (!n) return Tt(e);
                if (n.context) {
                    if (u === "window") return pe(window, e);
                    if (u === "content-script" && n.context === "window") return e.destination = null, pe(window, e);
                    if (["devtools", "content-script", "popup", "options"].includes(u)) return n.context === "background" && (e.destination = null), b.postMessage(e);
                    if (u === "background") {
                        let {
                            context: r,
                            tabId: o,
                            frameId: i
                        } = n, {
                            tabId: c
                        } = t;
                        r !== "window" ? e.destination = null : e.destination.tabId = null;
                        let l = ["popup", "options"].includes(r) ? r : `${r==="window"?"content-script":r}@${o||c}`;
                        i && (l = `${l}.${i}`);
                        let p = de.get(l);
                        p ? p.postMessage(e) : me.add({
                            resolvedDestination: l,
                            message: e
                        })
                    }
                }
            }
        }
        async function Tt(e) {
            let {
                transactionId: t,
                messageID: n,
                messageType: r
            } = e, o = () => {
                let c = ge.get(t);
                if (c) {
                    let {
                        err: l,
                        data: p
                    } = e;
                    if (l) {
                        let x = l,
                            F = self[x.name],
                            O = new(typeof F == "function" ? F : Error)(x.message);
                        for (let k in x) O[k] = x[k];
                        c.reject(O)
                    } else c.resolve(p);
                    ge.delete(t)
                }
            }, i = async () => {
                let c, l, p = !1;
                try {
                    let x = $e.get(n);
                    if (typeof x == "function") c = await x({
                        sender: e.origin,
                        id: n,
                        data: e.data,
                        timestamp: e.timestamp
                    });
                    else throw p = !0, new Error(`[webext-bridge] No handler registered in '${u}' to accept messages with id '${n}'`)
                } catch (x) {
                    l = x
                } finally {
                    if (l && (e.err = (0, bt.serializeError)(l)), I($(R({}, e), {
                            messageType: "reply",
                            data: c,
                            origin: {
                                context: u,
                                tabId: null
                            },
                            destination: e.origin,
                            hops: []
                        })), l && !p) throw c
                }
            };
            switch (r) {
                case "reply":
                    return o();
                case "message":
                    return i()
            }
        }
        function It(e) {}
        async function kt({
            data: e,
            ports: t
        }) {
            if (!(u === "content-script" && !ue)) {
                if (e.cmd === "__crx_bridge_verify_listening" && e.scope === T && e.context !== u) t[0].postMessage(!0);
                else if (e.cmd === "__crx_bridge_route_message" && e.scope === T && e.context !== u) {
                    let {
                        payload: n
                    } = e;
                    It(n), u === "content-script" && (n.origin = {
                        context: "window",
                        tabId: null
                    }), I(n)
                }
            }
        }
        function pe(e, t) {
            Mt();
            let n = new MessageChannel,
                r = setTimeout(() => {
                    n.port1.onmessage = null, pe(e, t)
                }, 300);
            n.port1.onmessage = () => {
                clearTimeout(r), e.postMessage({
                    cmd: "__crx_bridge_route_message",
                    scope: T,
                    context: u,
                    payload: t
                }, "*")
            }, e.postMessage({
                cmd: "__crx_bridge_verify_listening",
                scope: T,
                context: u
            }, "*", [n.port2])
        }
        function Mt() {
            if (typeof T != "string" || T.length === 0) throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``)
        }
        function Ct() {
            return u
        }
        function fe(e, t) {
            $e.set(e, t)
        }
        var Et = W(z());
        async function Z(e, t, n = "background") {
            let r = typeof n == "string" ? V(n) : n,
                o = "Bridge#sendMessage ->";
            if (!r.context) throw new TypeError(`${o} Destination must be any one of known destinations`);
            if (u === "background") {
                let {
                    context: i,
                    tabId: c
                } = r;
                if (i !== "background" && !c) throw new TypeError(`${o} When sending messages from background page, use @tabId syntax to target specific tab`)
            }
            return new Promise((i, c) => {
                let l = {
                    messageID: e,
                    data: t,
                    destination: r,
                    messageType: "message",
                    transactionId: (0, Et.default)(),
                    origin: {
                        context: u,
                        tabId: null
                    },
                    hops: [],
                    timestamp: Date.now()
                };
                ge.set(l.transactionId, {
                    resolve: i,
                    reject: c
                }), I(l)
            })
        }
        var P = class {
                constructor(e) {
                    this.handleStreamClose = () => {
                        this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {})
                    }, this.internalInfo = e, this.emitter = (0, At.createNanoEvents)(), this.isClosed = !1, P.initDone || (fe("__crx_bridge_stream_transfer__", t => {
                        let {
                            streamId: n,
                            streamTransfer: r,
                            action: o
                        } = t.data, i = P.openStreams.get(n);
                        i && !i.isClosed && (o === "transfer" && i.emitter.emit("message", r), o === "close" && (P.openStreams.delete(n), i.handleStreamClose()))
                    }), P.initDone = !0), P.openStreams.set(e.streamId, this)
                }
                get info() {
                    return this.internalInfo
                }
                send(e) {
                    if (this.isClosed) throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
                    Z("__crx_bridge_stream_transfer__", {
                        streamId: this.internalInfo.streamId,
                        streamTransfer: e,
                        action: "transfer"
                    }, this.internalInfo.endpoint)
                }
                close(e) {
                    e && this.send(e), this.handleStreamClose(), Z("__crx_bridge_stream_transfer__", {
                        streamId: this.internalInfo.streamId,
                        streamTransfer: null,
                        action: "close"
                    }, this.internalInfo.endpoint)
                }
                onMessage(e) {
                    return this.getDisposable("message", e)
                }
                onClose(e) {
                    return this.getDisposable("closed", e)
                }
                getDisposable(e, t) {
                    let n = this.emitter.on(e, t);
                    return Object.assign(n, {
                        dispose: n,
                        close: n
                    })
                }
            },
            U = P;
        U.initDone = !1;
        U.openStreams = new Map;
        var St = W(z()),
            Pt = (re(), ne),
            Ae = new Map,
            be = new Map,
            De = (0, Pt.createNanoEvents)();
        fe("__crx_bridge_stream_open__", e => new Promise(t => {
            let {
                sender: n,
                data: r
            } = e, {
                channel: o
            } = r, i = !1, c = () => {}, l = () => {
                let p = be.get(o);
                typeof p == "function" ? (p(new U($(R({}, r), {
                    endpoint: n
                }))), i && c(), t(!0)) : i || (i = !0, c = De.on("did-change-stream-callbacks", l))
            };
            l()
        }));
        async function Nt(e, t) {
            if (Ae.has(e)) throw new Error("webext-bridge: A Stream is already open at this channel");
            let n = typeof t == "string" ? V(t) : t,
                r = {
                    streamId: (0, St.default)(),
                    channel: e,
                    endpoint: n
                },
                o = new U(r);
            return o.onClose(() => Ae.delete(e)), await Z("__crx_bridge_stream_open__", r, n), Ae.set(e, o), o
        }
        function Ot(e, t) {
            if (be.has(e)) throw new Error("webext-bridge: This channel has already been claimed. Stream allows only one-on-one communication");
            be.set(e, t), De.emit("did-change-stream-callbacks")
        }
    });
    var Y = nt(He());
    var jt = "one-tab-group",
        Lt = "One Tab Group - Tab/Tab Group Manager",
        Rt = "Your all-in-one tab/tab group manager for Chrome.",
        $t = "0.4.2",
        Dt = !0,
        Wt = {
            dev: "rimraf extension/dev && run-p dev:*",
            "dev:prepare": "esno scripts/prepare-dev.ts dev",
            "dev:web": "vite",
            "dev:js": "npm run build:dev -- --watch src",
            build: "run-s clear build:web build:prepare build:prod",
            "build:prepare": "esno scripts/prepare-prod.ts build",
            "build:web": "vite build",
            "build:dev": "tsup src/background src/content --format iife --out-dir extension/dev/dist --no-splitting --onSuccess 'esno scripts/mvsw-dev.ts'",
            "build:prod": "tsup src/background src/content --minify --format iife --out-dir extension/prod/dist --no-splitting --onSuccess 'esno scripts/mvsw-prod.ts'",
            pack: "cross-env NODE_ENV=production run-p pack:*",
            "pack:zip": "rimraf extension/one-tab-group.zip && jszip-cli add extension/prod/* -o ./extension/one-tab-group.zip",
            "pack:key": "crx pack extension/prod -p extension/one-tab-group-key.pem -o ./extension/one-tab-group.crx",
            clear: "rimraf extension/prod",
            changelog: "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
            lint: "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
            "p:ish": "pnpm install --shamefully-hoist",
            "p:up": "pnpm up"
        },
        Ht = {
            "@bytebase/vue-kbar": "^0.1.6",
            axios: "^0.27.2",
            dayjs: "^1.11.5",
            "fancy-qrcode": "^0.1.0",
            "fuse.js": "^6.6.2",
            global: "^4.4.0",
            idb: "^7.1.0",
            "lodash.clonedeep": "^4.5.0",
            "naive-ui": "^2.33.3",
            nanoid: "^4.0.0",
            papaparse: "^5.3.1",
            pinia: "^2.0.22",
            splitpanes: "^3.1.1",
            "vue-i18n": "^9.2.2",
            vuedraggable: "^4.1.0"
        },
        Ut = {
            "@ffflorian/jszip-cli": "^3.1.6",
            "@iconify/json": "^2.1.19",
            "@intlify/vite-plugin-vue-i18n": "^3.3.1",
            "@rushstack/eslint-patch": "^1.2.0",
            "@types/chrome": "^0.0.197",
            "@types/fs-extra": "^9.0.12",
            "@types/lodash.clonedeep": "^4.5.6",
            "@types/node": "^16.4.1",
            "@types/papaparse": "^5.3.1",
            "@types/splitpanes": "^2.2.1",
            "@types/webextension-polyfill": "^0.9.1",
            "@typescript-eslint/eslint-plugin": "^4.28.4",
            "@typescript-eslint/parser": "v4.0.0",
            "@vitejs/plugin-vue": "^2.2.4",
            "@vue/compiler-sfc": "^3.2.31",
            "@vue/eslint-config-prettier": "^7.0.0",
            "@vue/eslint-config-typescript": "^11.0.2",
            "@vueuse/core": "^9.2.0",
            chokidar: "^3.5.2",
            "conventional-changelog-cli": "^2.2.2",
            "cross-env": "^7.0.3",
            crx: "^5.0.1",
            eslint: "^8.23.1",
            "eslint-plugin-vue": "^9.5.1",
            esno: "^0.14.1",
            "fs-extra": "^10.0.0",
            kolorist: "^1.5.0",
            "npm-run-all": "^4.1.5",
            prettier: "^2.7.1",
            rimraf: "^3.0.2",
            sass: "^1.43.4",
            tsup: "^4.12.5",
            typescript: "^4.3.5",
            "unplugin-icons": "^0.14.1",
            "unplugin-vue-components": "^0.18.4",
            vfonts: "^0.1.0",
            vite: "^3.1.3",
            "vite-plugin-windicss": "^1.8.3",
            vue: "^3.2.31",
            "webext-bridge": "^5.0.4"
        },
        xe = {
            name: jt,
            displayName: Lt,
            description: Rt,
            version: $t,
            private: Dt,
            scripts: Wt,
            dependencies: Ht,
            devDependencies: Ut
        };
    async function Ue() {
        let e = ["all", "page", "link", "action"],
            t = () => {},
            n = {
                type: "normal",
                id: "root",
                title: xe.displayName,
                visible: !0,
                contexts: e
            };
        chrome.contextMenus.create(n, t);
        let r = (o, i) => chrome.contextMenus.create({
            type: "normal",
            parentId: "root",
            id: o,
            title: i,
            visible: !0,
            contexts: e
        }, t);
        r("openAction", `Open ${xe.displayName}`), r("sendAllTabs", "Send all tabs/tab groups to new session"), chrome.contextMenus.create({
            type: "separator",
            id: "separator1",
            parentId: "root",
            visible: !0,
            contexts: e
        }, t), r("sendCurrentTab", "Send the current tab to new session"), r("sendHighlightedTabs", "Send the selected tabs to new session"), r("openHelp", "Help")
    }
    var M = "home/index.html";
    chrome.runtime.onInstalled.addListener(async () => {
        console.log("onInstalled One Tab Groups"), await Fe(), await Bt(), await Ue(), await q(M)
    });
    (0, Y.onMessage)("oauth-code", async ({
        data: e
    }) => {
        console.log("[onetab.group] GitHub OAuth Code", e), (0, Y.sendMessage)("do-oauth", e);
        let {
            extHomePage: t
        } = await N(["extHomePage"]), n = await C(), o = (await chrome.tabs.query({
                windowId: n.id || -1
            }))
            .find(i => i.id === t.id);
        o && o.id && (await he({
            oauthCode: e == null ? void 0 : e.code
        }), await chrome.tabs.highlight({
            tabs: o.index
        }), await chrome.tabs.reload(o.id))
    });
    var qe = async e => {
        console.log("onetab.group: stored all tabs for you!");
        let t = await C();
        if (!t || t.id !== e.windowId) return;
        let {
            extensionUrl: n
        } = await N(["extensionUrl"]);
        !e.url || e.url === n || (await Fe(), await q(M), await zt())
    };
    chrome.action.onClicked.addListener(qe);
    chrome.contextMenus.onClicked.addListener(async e => {
        if (e.menuItemId === "openAction" && (await q(M), chrome.contextMenus.update("openAction", {
                enabled: !1
            })), e.menuItemId === "sendAllTabs") {
            let [t] = await chrome.tabs.query({
                url: e.pageUrl
            });
            t && await qe(t)
        }
        if (e.menuItemId === "sendCurrentTab") {
            let t = await Be();
            t.length === 1 && await Ft(t)
        }
        if (e.menuItemId === "sendHighlightedTabs") {
            let t = await Be();
            t.length > 0 && await qt(t)
        }
        if (e.menuItemId === "openHelp") {
            let t = "https://onetab.group";
            await chrome.tabs.create({
                url: t
            })
        }
    });
    chrome.tabs.onActivated.addListener(async e => {
        let {
            tabId: t
        } = e, {
            extHomePage: n
        } = await N(["extHomePage"]), r = (n == null ? void 0 : n.id) !== t;
        chrome.contextMenus.update("openAction", {
            enabled: r
        })
    });
    chrome.tabs.onHighlighted.addListener(async e => {
        let {
            tabIds: t
        } = e, {
            extHomePage: n
        } = await N(["extHomePage"]);
        t.length === 1 ? (chrome.contextMenus.update("sendAllTabs", {
            enabled: t[0] !== n.id
        }), chrome.contextMenus.update("sendCurrentTab", {
            enabled: t[0] !== n.id
        }), chrome.contextMenus.update("sendHighlightedTabs", {
            enabled: t[0] !== n.id,
            title: "Send the selected tabs to new session"
        })) : (chrome.contextMenus.update("sendCurrentTab", {
            enabled: !1
        }), chrome.contextMenus.update("sendHighlightedTabs", {
            enabled: t.length > 0,
            title: `Send ${t.length} selected tabs to new session`
        }))
    });
    async function Fe() {
        let {
            tabs: e,
            tabGroups: t
        } = await Gt(), n = chrome.runtime.getURL(M), r = e.filter(o => o.url !== n);
        await we(JSON.stringify(r), JSON.stringify(t))
    }
    async function qt(e) {
        if (await we(JSON.stringify(e), JSON.stringify([])), e.length > 0) {
            let n = await C(),
                r = await chrome.tabs.query({
                    windowId: n.id || -1
                }),
                {
                    extHomePage: o
                } = await N(["extHomePage"]),
                i = r.find(c => c.id === o.id);
            i && i.id ? (await chrome.tabs.highlight({
                tabs: i.index
            }), await chrome.tabs.reload(i.id)) : await q(M)
        }
        let t = e.map(n => n.id || -1);
        await chrome.tabs.remove(t)
    }
    async function Ft(e) {
        if (await we(JSON.stringify(e), JSON.stringify([])), e.length > 0) {
            let n = await C(),
                r = await chrome.tabs.query({
                    windowId: n.id || -1
                }),
                {
                    extHomePage: o
                } = await N(["extHomePage"]),
                i = r.find(c => c.id === o.id);
            i && i.id ? (await chrome.tabs.highlight({
                tabs: i.index
            }), await chrome.tabs.reload(i.id)) : await q(M)
        }
        let t = e.map(n => n.id || -1);
        await chrome.tabs.remove(t)
    }
    async function q(e) {
        let t = chrome.runtime.getURL(e),
            n = await chrome.tabs.create({
                url: t,
                pinned: !0
            });
        await he({
            extHomePage: n
        }), console.log(`Created tab ${n.id}`)
    }
    async function Bt() {
        let e = chrome.runtime.getURL(M);
        return he({
            extensionUrl: e
        })
    }
    async function zt() {
        let e = await C(),
            n = (await chrome.tabs.query({
                active: !1,
                windowId: e.id
            }))
            .map(r => r.id || -1);
        await chrome.tabs.remove(n)
    }
    async function Be() {
        let e = await C();
        return (await chrome.tabs.query({
                highlighted: !0,
                windowId: e.id
            }))
            .map(n => $(R({}, n), {
                groupId: -1
            }))
    }
    async function he(e) {
        return chrome.storage.local.set(e)
    }
    async function we(e, t) {
        return chrome.storage.local.set({
            tabs: e,
            tabGroups: t,
            timestamp: new Date()
                .getTime()
        })
    }
    function N(e) {
        return new Promise((t, n) => {
            chrome.storage.local.get(e, r => {
                if (chrome.runtime.lastError) return n(chrome.runtime.lastError);
                t(r)
            })
        })
    }
    async function C() {
        return chrome.windows.getCurrent()
    }
    async function Gt() {
        let e = await C(),
            t = await chrome.tabs.query({
                windowId: e.id
            }),
            n = await chrome.tabGroups.query({
                windowId: e.id
            });
        return {
            tabs: t,
            tabGroups: n
        }
    }
})();
