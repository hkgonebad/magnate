/*!
 * GSAP 3.10.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {}) }(this, function(e) { "use strict";

    function _inheritsLoose(t, e) { t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e }

    function _assertThisInitialized(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

    function o(t) { return "string" == typeof t }

    function p(t) { return "function" == typeof t }

    function q(t) { return "number" == typeof t }

    function r(t) { return void 0 === t }

    function s(t) { return "object" == typeof t }

    function t(t) { return !1 !== t }

    function u() { return "undefined" != typeof window }

    function v(t) { return p(t) || o(t) }

    function M(t) { return (h = mt(t, ot)) && he }

    function N(t, e) { return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()") }

    function O(t, e) { return !e && console.warn(t) }

    function P(t, e) { return t && (ot[t] = e) && h && (h[t] = e) || ot }

    function Q() { return 0 }

    function $(t) { var e, r, i = t[0]; if (s(i) || p(i) || (t = [t]), !(e = (i._gsap || {}).harness)) { for (r = pt.length; r-- && !pt[r].targetTest(i););
            e = pt[r] } for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Lt(t[r], e))) || t.splice(r, 1); return t }

    function _(t) { return t._gsap || $(xt(t))[0]._gsap }

    function aa(t, e, i) { return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i }

    function ba(t, e) { return (t = t.split(",")).forEach(e) || t }

    function ca(t) { return Math.round(1e5 * t) / 1e5 || 0 }

    function da(t) { return Math.round(1e7 * t) / 1e7 || 0 }

    function ea(t, e) { var r = e.charAt(0),
            i = parseFloat(e.substr(2)); return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i }

    function fa(t, e) { for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;); return i < r }

    function ga() { var t, e, r = ht.length,
            i = ht.slice(0); for (lt = {}, t = ht.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0) }

    function ha(t, e, r, i) { ht.length && ga(), t.render(e, r, i), ht.length && ga() }

    function ia(t) { var e = parseFloat(t); return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t }

    function ja(t) { return t }

    function ka(t, e) { for (var r in e) r in t || (t[r] = e[r]); return t }

    function na(t, e) { for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? na(t[r] || (t[r] = {}), e[r]) : e[r]); return t }

    function oa(t, e) { var r, i = {}; for (r in t) r in e || (i[r] = t[r]); return i }

    function pa(e) { var r = e.parent || I,
            i = e.keyframes ? function _setKeyframeDefaults(i) { return function(t, e) { for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r]) } }(J(e.keyframes)) : ka; if (t(e.inherit))
            for (; r;) i(e, r.vars.defaults), r = r.parent || r._dp; return e }

    function ra(t, e, r, i, n) { void 0 === r && (r = "_first"), void 0 === i && (i = "_last"); var a, s = t[i]; if (n)
            for (a = e[n]; s && s[n] > a;) s = s._prev; return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e }

    function sa(t, e, r, i) { void 0 === r && (r = "_first"), void 0 === i && (i = "_last"); var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null }

    function ta(t, e) {!t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0 }

    function ua(t, e) { if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent; return t }

    function xa(t) { return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0 }

    function za(t, e) { return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur) }

    function Aa(t) { return t._end = da(t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0)) }

    function Ba(t, e) { var r = t._dp; return r && r.smoothChildTiming && t._ts && (t._start = da(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Aa(t), r._dirty || ua(r, t)), t }

    function Ca(t, e) { var r; if ((e._time || e._initted && !e._dur) && (r = za(t.rawTime(), e), (!e._dur || bt(0, e.totalDuration(), r) - e._tTime > V) && e.render(r, !0)), ua(t, e)._dp && t._initted && t._time >= t._dur && t._ts) { if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -V } }

    function Da(t, e, r, i) { return e.parent && ta(e), e._start = da((q(r) ? r : r || t !== I ? Tt(t, r, e) : t._time) + e._delay), e._end = da(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), ra(t, e, "_first", "_last", t._sort ? "_start" : 0), vt(e) || (t._recent = e), i || Ca(t, e), t }

    function Ea(t, e) { return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t) }

    function Fa(t, e, r, i) { return Xt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Dt.frame ? (ht.push(t), t._lazy = [e, i], 1) : void 0 : 1 }

    function Ka(t, e, r, i) { var n = t._repeat,
            a = da(e) || 0,
            s = t._tTime / t._tDur; return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : da(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i ? Ba(t, t._tTime = t._tDur * s) : t.parent && Aa(t), r || ua(t.parent, t), t }

    function La(t) { return t instanceof Ut ? ua(t) : Ka(t, t._dur) }

    function Oa(e, r, i) { var n, a, s = q(r[1]),
            o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            u = r[o]; if (s && (u.duration = r[1]), u.parent = i, e) { for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = t(a.vars.inherit) && a.parent;
            u.immediateRender = t(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1] } return new $t(r[0], u, r[1 + o]) }

    function Pa(t, e) { return t || 0 === t ? e(t) : e }

    function Ra(t, e) { return o(t) && (e = st.exec(t)) ? e[1] : "" }

    function Ua(t, e) { return t && s(t) && "length" in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i }

    function Ya(t) { return t.sort(function() { return .5 - Math.random() }) }

    function Za(t) { if (p(t)) return t; var c = s(t) ? t : { each: t },
            m = Bt(c.ease),
            g = c.from || 0,
            v = parseFloat(c.base) || 0,
            y = {},
            e = 0 < g && g < 1,
            T = isNaN(g) || e,
            b = c.axis,
            w = g,
            x = g; return o(g) ? w = x = { center: .5, edges: .5, end: 1 }[g] || 0 : !e && T && (w = g[0], x = g[1]),
            function(t, e, r) { var i, n, a, s, o, u, h, l, f, d = (r || c).length,
                    _ = y[d]; if (!_) { if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, Y])[1])) { for (h = -Y; h < (h = r[f++].getBoundingClientRect().left) && f < d;);
                        f-- } for (_ = y[d] = [], i = T ? Math.min(f, d) * w - .5 : g % f, n = f === Y ? 0 : T ? d * x / f - .5 : g / f | 0, l = Y, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), _[u] = o = b ? Math.abs("y" === b ? s : a) : G(a * a + s * s), h < o && (h = o), o < l && (l = o); "random" === g && Ya(_), _.max = h - l, _.min = l, _.v = d = (parseFloat(c.amount) || parseFloat(c.each) * (d < f ? d - 1 : b ? "y" === b ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === g ? -1 : 1), _.b = d < 0 ? v - d : v, _.u = Ra(c.amount || c.each) || 0, m = m && d < 0 ? Ft(m) : m } return d = (_[t] - _.min) / _.max || 0, da(_.b + (m ? m(d) : d) * _.v) + _.u } }

    function $a(r) { var i = Math.pow(10, ((r + "").split(".")[1] || "").length); return function(t) { var e = Math.round(parseFloat(t) / r) * r * i; return (e - e % 1) / i + (q(t) ? 0 : Ra(t)) } }

    function _a(u, t) { var h, l, e = J(u); return !e && s(u) && (h = e = u.radius || Y, u.values ? (u = xt(u.values), (l = !q(u[0])) && (h *= h)) : u = $a(u.increment)), Pa(t, e ? p(u) ? function(t) { return l = u(t), Math.abs(l - t) <= h ? l : t } : function(t) { for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = Y, s = 0, o = u.length; o--;)(e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o); return s = !h || a <= h ? u[s] : t, l || s === t || q(t) ? s : s + Ra(t) } : $a(u)) }

    function ab(t, e, r, i) { return Pa(J(t) ? !e : !0 === r ? !!(r = 0) : !i, function() { return J(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i }) }

    function eb(e, r, t) { return Pa(t, function(t) { return e[~~r(t)] }) }

    function hb(t) { for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + ab(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1; return s + t.substr(a, t.length - a) }

    function kb(t, e, r) { var i, n, a, s = t.labels,
            o = Y; for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n); return a }

    function mb(t) { return ta(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Ot(t, "onInterrupt"), t }

    function rb(t, e, r) { return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Pt + .5 | 0 }

    function sb(t, e, r) { var i, n, a, s, o, u, h, l, f, d, _ = t ? q(t) ? [t >> 16, t >> 8 & Pt, t & Pt] : 0 : Mt.black; if (!_) { if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Mt[t]) _ = Mt[t];
            else if ("#" === t.charAt(0)) { if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(_ = parseInt(t.substr(1, 6), 16)) >> 16, _ >> 8 & Pt, _ & Pt, parseInt(t.substr(7), 16) / 255];
                _ = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Pt, t & Pt] } else if ("hsl" === t.substr(0, 3))
                if (_ = d = t.match(tt), e) { if (~t.indexOf("=")) return _ = t.match(et), r && _.length < 4 && (_[3] = 1), _ } else s = +_[0] % 360 / 360, o = _[1] / 100, i = 2 * (u = _[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < _.length && (_[3] *= 1), _[0] = rb(s + 1 / 3, i, n), _[1] = rb(s, i, n), _[2] = rb(s - 1 / 3, i, n);
            else _ = t.match(tt) || Mt.transparent;
            _ = _.map(Number) } return e && !d && (i = _[0] / Pt, n = _[1] / Pt, a = _[2] / Pt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), _[0] = ~~(s + .5), _[1] = ~~(100 * o + .5), _[2] = ~~(100 * u + .5)), r && _.length < 4 && (_[3] = 1), _ }

    function tb(t) { var r = [],
            i = [],
            n = -1; return t.split(Ct).forEach(function(t) { var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1) }), r.c = i, r }

    function ub(t, e, r) { var i, n, a, s, o = "",
            u = (t + o).match(Ct),
            h = e ? "hsla(" : "rgba(",
            l = 0; if (!u) return t; if (u = u.map(function(t) { return (t = sb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")" }), r && (a = tb(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(Ct, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift()); if (!n)
            for (s = (n = t.split(Ct)).length - 1; l < s; l++) o += n[l] + u[l]; return o + n[s] }

    function xb(t) { var e, r = t.join(" "); if (Ct.lastIndex = 0, Ct.test(r)) return e = At.test(r), t[1] = ub(t[1], e), t[0] = ub(t[0], e, tb(t[1])), !0 }

    function Gb(t) { var e = (t + "").split("("),
            r = zt[e[0]]; return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) { for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Et, "").trim() : +i, s = r.substr(e + 1).trim(); return n }(e[1])] : function _valueInParentheses(t) { var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e); return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r) }(t).split(",").map(ia)) : zt._CE && Rt.test(t) ? zt._CE("", t) : r }

    function Ib(t, e) { for (var r, i = t._first; i;) i instanceof Ut ? Ib(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Ib(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next }

    function Kb(t, e, r, i) { void 0 === r && (r = function easeOut(t) { return 1 - e(1 - t) }), void 0 === i && (i = function easeInOut(t) { return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2 }); var n, a = { easeIn: e, easeOut: r, easeInOut: i }; return ba(t, function(t) { for (var e in zt[t] = ot[t] = a, zt[n = t.toLowerCase()] = r, a) zt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = zt[t + "." + e] = a[e] }), a }

    function Lb(e) { return function(t) { return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2 } }

    function Mb(r, t, e) {
        function em(t) { return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Z((t - a) * n) + 1 } var i = 1 <= t ? t : 1,
            n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
            a = n / X * (Math.asin(1 / i) || 0),
            s = "out" === r ? em : "in" === r ? function(t) { return 1 - em(1 - t) } : Lb(em); return n = X / n, s.config = function(t, e) { return Mb(r, t, e) }, s }

    function Nb(e, r) {
        function mm(t) { return t ? --t * t * ((r + 1) * t + r) + 1 : 0 }
        void 0 === r && (r = 1.70158); var t = "out" === e ? mm : "in" === e ? function(t) { return 1 - mm(1 - t) } : Lb(mm); return t.config = function(t) { return Nb(e, t) }, t } var B, I, i, n, a, h, l, f, d, c, m, g, y, T, b, w, x, k, C, A, D, S, z, R, E, F, U = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
        L = { duration: .5, overwrite: !1, delay: 0 },
        Y = 1e8,
        V = 1 / Y,
        X = 2 * Math.PI,
        j = X / 4,
        K = 0,
        G = Math.sqrt,
        W = Math.cos,
        Z = Math.sin,
        H = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        J = Array.isArray,
        tt = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        nt = /[+-]=-?[.\d]+/,
        at = /[^,'"\[\]\s]+/gi,
        st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ot = {},
        ut = {},
        ht = [],
        lt = {},
        ft = {},
        dt = {},
        _t = 30,
        pt = [],
        ct = "",
        mt = function _merge(t, e) { for (var r in e) t[r] = e[r]; return t },
        gt = function _animationCycle(t, e) { var r = Math.floor(t /= e); return t && r === t ? r - 1 : r },
        vt = function _isFromOrFromStart(t) { var e = t.data; return "isFromStart" === e || "isStart" === e },
        yt = { _start: 0, endTime: Q, totalDuration: Q },
        Tt = function _parsePosition(t, e, r) { var i, n, a, s = t.labels,
                u = t._recent || yt,
                h = t.duration() >= Y ? u.endTime(!1) : t._dur; return o(e) && (isNaN(e) || e in s) ? (n = e.charAt(0), a = "%" === e.substr(-1), i = e.indexOf("="), "<" === n || ">" === n ? (0 <= i && (e = e.replace(/=/, "")), ("<" === n ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (a ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (e in s || (s[e] = h), s[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)), a && r && (n = n / 100 * (J(r) ? r[0] : r).totalDuration()), 1 < i ? _parsePosition(t, e.substr(0, i - 1), r) + n : h + n)) : null == e ? h : +e },
        bt = function _clamp(t, e, r) { return r < t ? t : e < r ? e : r },
        wt = [].slice,
        xt = function toArray(t, e, r) { return !o(t) || r || !n && St() ? J(t) ? function _flatten(t, e, r) { return void 0 === r && (r = []), t.forEach(function(t) { return o(t) && !e || Ua(t, 1) ? r.push.apply(r, xt(t)) : r.push(t) }) || r }(t, r) : Ua(t) ? wt.call(t, 0) : t ? [t] : [] : wt.call((e || a).querySelectorAll(t), 0) },
        kt = function mapRange(e, t, r, i, n) { var a = t - e,
                s = i - r; return Pa(n, function(t) { return r + ((t - e) / a * s || 0) }) },
        Ot = function _callback(t, e, r) { var i, n, a = t.vars,
                s = a[e]; if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && ga(), i ? s.apply(n, i) : s.call(n) },
        Pt = 255,
        Mt = { aqua: [0, Pt, Pt], lime: [0, Pt, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, Pt], navy: [0, 0, 128], white: [Pt, Pt, Pt], olive: [128, 128, 0], yellow: [Pt, Pt, 0], orange: [Pt, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [Pt, 0, 0], pink: [Pt, 192, 203], cyan: [0, Pt, Pt], transparent: [Pt, Pt, Pt, 0] },
        Ct = function() { var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b"; for (t in Mt) e += "|" + t + "\\b"; return new RegExp(e + ")", "gi") }(),
        At = /hsl[a]?\(/,
        Dt = (x = Date.now, k = 500, C = 33, A = x(), D = A, z = S = 1e3 / 240, T = { time: 0, frame: 0, tick: function tick() { Vk(!0) }, deltaRatio: function deltaRatio(t) { return b / (1e3 / (t || 60)) }, wake: function wake() { l && (!n && u() && (i = n = window, a = i.document || {}, ot.gsap = he, (i.gsapVersions || (i.gsapVersions = [])).push(he.version), M(h || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), m && T.sleep(), g = y || function(t) { return setTimeout(t, z - 1e3 * T.time + 1 | 0) }, c = 1, Vk(2)) }, sleep: function sleep() {
                (y ? i.cancelAnimationFrame : clearTimeout)(m), c = 0, g = Q }, lagSmoothing: function lagSmoothing(t, e) { k = t || 1e8, C = Math.min(e, k, 0) }, fps: function fps(t) { S = 1e3 / (t || 240), z = 1e3 * T.time + S }, add: function add(n, t, e) { var a = t ? function(t, e, r, i) { n(t, e, r, i), T.remove(a) } : n; return T.remove(n), R[e ? "unshift" : "push"](a), St(), a }, remove: function remove(t, e) {~(e = R.indexOf(t)) && R.splice(e, 1) && e <= w && w-- }, _listeners: R = [] }),
        St = function _wake() { return !c && Dt.wake() },
        zt = {},
        Rt = /^[\d.\-M][\d.\-,\s]/,
        Et = /["']/g,
        Ft = function _invertEase(e) { return function(t) { return 1 - e(1 - t) } },
        Bt = function _parseEase(t, e) { return t && (p(t) ? t : zt[t] || Gb(t)) || e };

    function Vk(t) { var e, r, i, n, a = x() - D,
            s = !0 === t; if (k < a && (A += a - C), (0 < (e = (i = (D += a) - A) - z) || s) && (n = ++T.frame, b = i - 1e3 * T.time, T.time = i /= 1e3, z += e + (S <= e ? 4 : S - e), r = 1), s || (m = g(Vk)), r)
            for (w = 0; w < R.length; w++) R[w](i, b, n, t) }

    function Dm(t) { return t < F ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / 2.75) * t + .9375 : E * Math.pow(t - 2.625 / 2.75, 2) + .984375 }
    ba("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) { var r = e < 5 ? e + 1 : e;
        Kb(t + ",Power" + (r - 1), e ? function(t) { return Math.pow(t, r) } : function(t) { return t }, function(t) { return 1 - Math.pow(1 - t, r) }, function(t) { return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2 }) }), zt.Linear.easeNone = zt.none = zt.Linear.easeIn, Kb("Elastic", Mb("in"), Mb("out"), Mb()), E = 7.5625, F = 1 / 2.75, Kb("Bounce", function(t) { return 1 - Dm(1 - t) }, Dm), Kb("Expo", function(t) { return t ? Math.pow(2, 10 * (t - 1)) : 0 }), Kb("Circ", function(t) { return -(G(1 - t * t) - 1) }), Kb("Sine", function(t) { return 1 === t ? 1 : 1 - W(t * j) }), Kb("Back", Nb("in"), Nb("out"), Nb()), zt.SteppedEase = zt.steps = ot.SteppedEase = { config: function config(t, e) { void 0 === t && (t = 1); var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0; return function(t) { return ((i * bt(0, .99999999, t) | 0) + n) * r } } }, L.ease = zt["quad.out"], ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) { return ct += t + "," + t + "Params," }); var It, Lt = function GSCache(t, e) { this.id = K++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : aa, this.set = e ? e.getSetter : Ht },
        Nt = ((It = Animation.prototype).delay = function delay(t) { return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay }, It.duration = function duration(t) { return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur }, It.totalDuration = function totalDuration(t) { return arguments.length ? (this._dirty = 0, Ka(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur }, It.totalTime = function totalTime(t, e) { if (St(), !arguments.length) return this._tTime; var r = this._dp; if (r && r.smoothChildTiming && this._ts) { for (Ba(this, t), !r._dp || r.parent || Ca(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;!this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Da(this._dp, this, this._start - this._delay) } return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === V || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ha(this, t, e)), this }, It.time = function time(t, e) { return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + xa(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time }, It.totalProgress = function totalProgress(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio }, It.progress = function progress(t, e) { return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + xa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio }, It.iteration = function iteration(t, e) { var r = this.duration() + this._rDelay; return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1 }, It.timeScale = function timeScale(t) { if (!arguments.length) return this._rts === -V ? 0 : this._rts; if (this._rts === t) return this; var e = this.parent && this._ts ? za(this.parent._time, this) : this._tTime; return this._rts = +t || 0, this._ts = this._ps || t === -V ? 0 : this._rts, this.totalTime(bt(-this._delay, this._tDur, e), !0), Aa(this),
                function _recacheAncestors(t) { for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent; return t }(this) }, It.paused = function paused(t) { return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (St(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== V && (this._tTime -= V)))), this) : this._ps }, It.startTime = function startTime(t) { if (arguments.length) { this._start = t; var e = this.parent || this._dp; return !e || !e._sort && this.parent || Da(e, this, t - this._delay), this } return this._start }, It.endTime = function endTime(e) { return this._start + (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1) }, It.rawTime = function rawTime(t) { var e = this.parent || this._dp; return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? za(e.rawTime(t), this) : this._tTime : this._tTime }, It.globalTime = function globalTime(t) { for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp; return r }, It.repeat = function repeat(t) { return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, La(this)) : -2 === this._repeat ? 1 / 0 : this._repeat }, It.repeatDelay = function repeatDelay(t) { if (arguments.length) { var e = this._time; return this._rDelay = t, La(this), e ? this.time(e) : this } return this._rDelay }, It.yoyo = function yoyo(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, It.seek = function seek(e, r) { return this.totalTime(Tt(this, e), t(r)) }, It.restart = function restart(e, r) { return this.play().totalTime(e ? -this._delay : 0, t(r)) }, It.play = function play(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, It.reverse = function reverse(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, It.pause = function pause(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, It.resume = function resume() { return this.paused(!1) }, It.reversed = function reversed(t) { return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -V : 0)), this) : this._rts < 0 }, It.invalidate = function invalidate() { return this._initted = this._act = 0, this._zTime = -V, this }, It.isActive = function isActive() { var t, e = this.parent || this._dp,
                r = this._start; return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - V)) }, It.eventCallback = function eventCallback(t, e, r) { var i = this.vars; return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t] }, It.then = function then(t) { var i = this; return new Promise(function(e) {
                function Un() { var t = i.then;
                    i.then = null, p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t } var r = p(t) ? t : ja;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Un() : i._prom = Un }) }, It.kill = function kill() { mb(this) }, Animation);

    function Animation(t) { this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ka(this, +t.duration, 1, 1), this.data = t.data, c || Dt.wake() }
    ka(Nt.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -V, _prom: 0, _ps: !1, _rts: 1 }); var Ut = function(n) {
        function Timeline(e, r) { var i; return void 0 === e && (e = {}), (i = n.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = t(e.sortChildren), I && Da(e.parent || I, _assertThisInitialized(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Ea(_assertThisInitialized(i), e.scrollTrigger), i }
        _inheritsLoose(Timeline, n); var e = Timeline.prototype; return e.to = function to(t, e, r) { return Oa(0, arguments, this), this }, e.from = function from(t, e, r) { return Oa(1, arguments, this), this }, e.fromTo = function fromTo(t, e, r, i) { return Oa(2, arguments, this), this }, e.set = function set(t, e, r) { return e.duration = 0, e.parent = this, pa(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new $t(t, e, Tt(this, r), 1), this }, e.call = function call(t, e, r) { return Da(this, $t.delayedCall(0, t, e), r) }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) { return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new $t(t, r, Tt(this, n)), this }, e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) { return i.runBackwards = 1, pa(i).immediateRender = t(i.immediateRender), this.staggerTo(e, r, i, n, a, s, o) }, e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) { return n.startAt = i, pa(n).immediateRender = t(n.immediateRender), this.staggerTo(e, r, n, a, s, o, u) }, e.render = function render(t, e, r) { var i, n, a, s, o, u, h, l, f, d, _, p, c = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = t <= 0 ? 0 : da(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !g); if (this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) { if (c !== this._time && g && (v += this._time - c, t += this._time - c), i = v, f = this._start, u = !(l = this._ts), y && (g || (c = this._zTime), !t && e || (this._zTime = t)), this._repeat) { if (_ = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r); if (i = da(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = gt(this._tTime, o), !c && this._tTime && d !== s && (d = s), _ && 1 & s && (i = g - i, p = 1), s !== d && !this._lock) { var T = _ && 1 & d,
                            b = T === (_ && 1 & s); if (s < d && (T = !T), c = T ? 0 : g, this._lock = 1, this.render(c || (p ? 0 : da(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Ot(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), c && c !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this; if (g = this._dur, m = this._tDur, b && (this._lock = 2, c = T ? g : -1e-4, this.render(c, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        Ib(this, p) } } if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) { var i; if (e < r)
                            for (i = t._first; i && i._start <= r;) { if ("isPause" === i.data && i._start > e) return i;
                                i = i._next } else
                                for (i = t._last; i && i._start >= r;) { if ("isPause" === i.data && i._start < e) return i;
                                    i = i._prev } }(this, da(c), da(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, c = 0), !c && i && !e && (Ot(this, "onStart"), this._tTime !== v)) return this; if (c <= i && 0 <= t)
                    for (n = this._first; n;) { if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) { if (n.parent !== this) return this.render(t, e, r); if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) { h = 0, a && (v += this._zTime = -V); break } }
                        n = a } else { n = this._last; for (var w = t < 0 ? t : i; n;) { if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) { if (n.parent !== this) return this.render(t, e, r); if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) { h = 0, a && (v += this._zTime = w ? -V : V); break } }
                            n = a } }
                if (h && !e && (this.pause(), h.render(c <= i ? 0 : -V)._zTime = c <= i ? 1 : -1, this._ts)) return this._start = f, Aa(this), this.render(t, e, r);
                this._onUpdate && !e && Ot(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && c) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || ta(this, 1), e || t < 0 && !c || !v && !c && m || (Ot(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom()))) } return this }, e.add = function add(t, e) { var r = this; if (q(e) || (e = Tt(this, e, t)), !(t instanceof Nt)) { if (J(t)) return t.forEach(function(t) { return r.add(t, e) }), this; if (o(t)) return this.addLabel(t, e); if (!p(t)) return this;
                t = $t.delayedCall(0, t) } return this !== t ? Da(this, t, e) : this }, e.getChildren = function getChildren(t, e, r, i) { void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -Y); for (var n = [], a = this._first; a;) a._start >= i && (a instanceof $t ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next; return n }, e.getById = function getById(t) { for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r] }, e.remove = function remove(t) { return o(t) ? this.removeLabel(t) : p(t) ? this.killTweensOf(t) : (sa(this, t), t === this._recent && (this._recent = this._last), ua(this)) }, e.totalTime = function totalTime(t, e) { return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = da(Dt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), n.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime }, e.addLabel = function addLabel(t, e) { return this.labels[t] = Tt(this, e), this }, e.removeLabel = function removeLabel(t) { return delete this.labels[t], this }, e.addPause = function addPause(t, e, r) { var i = $t.delayedCall(0, e || Q, r); return i.data = "isPause", this._hasPause = 1, Da(this, i, Tt(this, t)) }, e.removePause = function removePause(t) { var e = this._first; for (t = Tt(this, t); e;) e._start === t && "isPause" === e.data && ta(e), e = e._next }, e.killTweensOf = function killTweensOf(t, e, r) { for (var i = this.getTweensOf(t, r), n = i.length; n--;) Yt !== i[n] && i[n].kill(t, e); return this }, e.getTweensOf = function getTweensOf(t, e) { for (var r, i = [], n = xt(t), a = this._first, s = q(e); a;) a instanceof $t ? fa(a._targets, n) && (s ? (!Yt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next; return i }, e.tweenTo = function tweenTo(t, e) { e = e || {}; var r, i = this,
                n = Tt(i, t),
                a = e.startAt,
                s = e.onStart,
                o = e.onStartParams,
                u = e.immediateRender,
                h = $t.to(i, ka({ ease: e.ease || "none", lazy: !1, immediateRender: !1, time: n, overwrite: "auto", duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || V, onStart: function onStart() { if (i.pause(), !r) { var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            h._dur !== t && Ka(h, t, 0, 1).render(h._time, !0, !0), r = 1 }
                        s && s.apply(h, o || []) } }, e)); return u ? h.render(0) : h }, e.tweenFromTo = function tweenFromTo(t, e, r) { return this.tweenTo(e, ka({ startAt: { time: Tt(this, t) } }, r)) }, e.recent = function recent() { return this._recent }, e.nextLabel = function nextLabel(t) { return void 0 === t && (t = this._time), kb(this, Tt(this, t)) }, e.previousLabel = function previousLabel(t) { return void 0 === t && (t = this._time), kb(this, Tt(this, t), 1) }, e.currentLabel = function currentLabel(t) { return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + V) }, e.shiftChildren = function shiftChildren(t, e, r) { void 0 === r && (r = 0); for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next; if (e)
                for (i in a) a[i] >= r && (a[i] += t); return ua(this) }, e.invalidate = function invalidate() { var t = this._first; for (this._lock = 0; t;) t.invalidate(), t = t._next; return n.prototype.invalidate.call(this) }, e.clear = function clear(t) { void 0 === t && (t = !0); for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e; return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), ua(this) }, e.totalDuration = function totalDuration(t) { var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = Y; if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t)); if (a._dirty) { for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Da(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Ka(a, a === I && a._time > n ? a._time : n, 1, 1), a._dirty = 0 } return a._tDur }, Timeline.updateRoot = function updateRoot(t) { if (I._ts && (ha(I, za(t, I)), f = Dt.frame), Dt.frame >= _t) { _t += U.autoSleep || 120; var e = I._first; if ((!e || !e._ts) && U.autoSleep && Dt._listeners.length < 2) { for (; e && !e._ts;) e = e._next;
                    e || Dt.sleep() } } }, Timeline }(Nt);
    ka(Ut.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });

    function Ub(t, e, r, i, n, a) { var u, h, l, f; if (ft[t] && !1 !== (u = new ft[t]).init(n, u.rawVars ? e[t] : function _processVars(t, e, r, i, n) { if (p(t) && (t = Qt(t, n, e, r, i)), !s(t) || t.style && t.nodeType || J(t) || H(t)) return o(t) ? Qt(t, n, e, r, i) : t; var a, u = {}; for (a in t) u[a] = Qt(t[a], n, e, r, i); return u }(e[t], i, n, a, r), r, i, a) && (r._pt = h = new oe(r._pt, n, t, 0, 1, u.render, u, 0, u.priority), r !== d))
            for (l = r._ptLookup[r._targets.indexOf(n)], f = u._props.length; f--;) l[u._props[f]] = h; return u }

    function $b(t, r, e, i) { var n, a, s = r.ease || i || "power1.inOut"; if (J(r)) a = e[t] || (e[t] = []), r.forEach(function(t, e) { return a.push({ t: e / (r.length - 1) * 100, v: t, e: s }) });
        else
            for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({ t: parseFloat(t), v: r[n], e: s }) } var Yt, qt, Vt = function _addPropTween(t, e, r, i, n, a, s, u, h) { p(i) && (i = i(n || 0, t, a)); var l, f = t[e],
                d = "get" !== r ? r : p(f) ? h ? t[e.indexOf("set") || !p(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : f,
                _ = p(f) ? h ? Zt : Wt : Gt; if (o(i) && (~i.indexOf("random(") && (i = hb(i)), "=" === i.charAt(1) && (!(l = ea(d, i) + (Ra(d) || 0)) && 0 !== l || (i = l))), d !== i || qt) return isNaN(d * i) || "" === i ? (f || e in t || N(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) { var o, u, h, l, f, d, _, p, c = new oe(this._pt, t, e, 0, 1, ee, null, n),
                    m = 0,
                    g = 0; for (c.b = r, c.e = i, r += "", (_ = ~(i += "").indexOf("random(")) && (i = hb(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, c._pt = { _next: c._pt, p: f || 1 === g ? f : ",", s: d, c: "=" === l.charAt(1) ? ea(d, l) - d : parseFloat(l) - d, m: h && h < 4 ? Math.round : 0 }, m = it.lastIndex); return c.c = m < i.length ? i.substring(m, i.length) : "", c.fp = s, (nt.test(i) || _) && (c.e = 0), this._pt = c }.call(this, t, e, d, i, _, u || U.stringFilter, h)) : (l = new oe(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof f ? te : Jt, 0, _), h && (l.fp = h), s && l.modifier(s, this, t), this._pt = l) },
        Xt = function _initTween(e, r) { var i, n, a, s, o, u, h, l, f, d, p, c, m, g = e.vars,
                v = g.ease,
                y = g.startAt,
                T = g.immediateRender,
                b = g.lazy,
                w = g.onUpdate,
                x = g.onUpdateParams,
                k = g.callbackScope,
                O = g.runBackwards,
                P = g.yoyoEase,
                M = g.keyframes,
                C = g.autoRevert,
                A = e._dur,
                D = e._startAt,
                S = e._targets,
                z = e.parent,
                R = z && "nested" === z.data ? z.parent._targets : S,
                E = "auto" === e._overwrite && !B,
                F = e.timeline; if (!F || M && v || (v = "none"), e._ease = Bt(v, L.ease), e._yEase = P ? Ft(Bt(!0 === P ? v : P, L.ease)) : 0, P && e._yoyo && !e._repeat && (P = e._yEase, e._yEase = e._ease, e._ease = P), e._from = !F && !!g.runBackwards, !F || M && !g.stagger) { if (c = (l = S[0] ? _(S[0]).harness : 0) && g[l.prop], i = oa(g, ut), D && (ta(D.render(-1, !0)), D._lazy = 0), y)
                    if (ta(e._startAt = $t.set(S, ka({ data: "isStart", overwrite: !1, parent: z, immediateRender: !0, lazy: t(b), startAt: null, delay: 0, onUpdate: w, onUpdateParams: x, callbackScope: k, stagger: 0 }, y))), r < 0 && !T && !C && e._startAt.render(-1, !0), T) { if (0 < r && !C && (e._startAt = 0), A && r <= 0) return void(r && (e._zTime = r)) } else !1 === C && (e._startAt = 0);
                else if (O && A)
                    if (D) C || (e._startAt = 0);
                    else if (r && (T = !1), a = ka({ overwrite: !1, data: "isFromStart", lazy: T && t(b), immediateRender: T, stagger: 0, parent: z }, i), c && (a[l.prop] = c), ta(e._startAt = $t.set(S, a)), r < 0 && e._startAt.render(-1, !0), e._zTime = r, T) { if (!r) return } else _initTween(e._startAt, V); for (e._pt = e._ptCache = 0, b = A && t(b) || b && !A, n = 0; n < S.length; n++) { if (h = (o = S[n])._gsap || $(S)[n]._gsap, e._ptLookup[n] = d = {}, lt[h.id] && ht.length && ga(), p = R === S ? n : R.indexOf(o), l && !1 !== (f = new l).init(o, c || i, e, p, R) && (e._pt = s = new oe(e._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) { d[t] = s }), f.priority && (u = 1)), !l || c)
                        for (a in i) ft[a] && (f = Ub(a, i, e, p, o, R)) ? f.priority && (u = 1) : d[a] = s = Vt.call(e, o, a, "get", i[a], p, R, 0, g.stringFilter);
                    e._op && e._op[n] && e.kill(o, e._op[n]), E && e._pt && (Yt = e, I.killTweensOf(o, d, e.globalTime(r)), m = !e.parent, Yt = 0), e._pt && b && (lt[h.id] = 1) }
                u && se(e), e._onInit && e._onInit(e) }
            e._onUpdate = w, e._initted = (!e._op || e._pt) && !m, M && r <= 0 && F.render(Y, !0, !0) },
        Qt = function _parseFuncOrString(t, e, r, i, n) { return p(t) ? t.call(e, r, i, n) : o(t) && ~t.indexOf("random(") ? hb(t) : t },
        jt = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Kt = {};
    ba(jt + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) { return Kt[t] = 1 }); var $t = function(R) {
        function Tween(e, r, i, n) { var a; "number" == typeof r && (i.duration = r, r = i, i = null); var o, u, h, l, f, d, _, p, c = (a = R.call(this, n ? r : pa(r)) || this).vars,
                m = c.duration,
                g = c.delay,
                y = c.immediateRender,
                T = c.stagger,
                b = c.overwrite,
                w = c.keyframes,
                x = c.defaults,
                k = c.scrollTrigger,
                P = c.yoyoEase,
                M = r.parent || I,
                C = (J(e) || H(e) ? q(e[0]) : "length" in r) ? [e] : xt(e); if (a._targets = C.length ? $(C) : O("GSAP target " + e + " not found. https://greensock.com", !U.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, w || T || v(m) || v(g)) { if (r = a.vars, (o = a.timeline = new Ut({ data: "nested", defaults: x || {} })).kill(), o.parent = o._dp = _assertThisInitialized(a), o._start = 0, T || v(m) || v(g)) { if (l = C.length, _ = T && Za(T), s(T))
                        for (f in T) ~jt.indexOf(f) && ((p = p || {})[f] = T[f]); for (u = 0; u < l; u++)(h = oa(r, Kt)).stagger = 0, P && (h.yoyoEase = P), p && mt(h, p), d = C[u], h.duration = +Qt(m, _assertThisInitialized(a), u, d, C), h.delay = (+Qt(g, _assertThisInitialized(a), u, d, C) || 0) - a._delay, !T && 1 === l && h.delay && (a._delay = g = h.delay, a._start += g, h.delay = 0), o.to(d, h, _ ? _(u, d, C) : 0), o._ease = zt.none;
                    o.duration() ? m = g = 0 : a.timeline = 0 } else if (w) { pa(ka(o.vars.defaults, { ease: "none" })), o._ease = Bt(w.ease || r.ease || "none"); var A, D, S, z = 0; if (J(w)) w.forEach(function(t) { return o.to(C, t, ">") });
                    else { for (f in h = {}, w) "ease" === f || "easeEach" === f || $b(f, w[f], h, w.easeEach); for (f in h)
                            for (A = h[f].sort(function(t, e) { return t.t - e.t }), u = z = 0; u < A.length; u++)(S = { ease: (D = A[u]).e, duration: (D.t - (u ? A[u - 1].t : 0)) / 100 * m })[f] = D.v, o.to(C, S, z), z += S.duration;
                        o.duration() < m && o.to({}, { duration: m - o.duration() }) } }
                m || a.duration(m = o.duration()) } else a.timeline = 0; return !0 !== b || B || (Yt = _assertThisInitialized(a), I.killTweensOf(C), Yt = 0), Da(M, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (y || !m && !w && a._start === da(M._time) && t(y) && function _hasNoPausedAncestors(t) { return !t || t._ts && _hasNoPausedAncestors(t.parent) }(_assertThisInitialized(a)) && "nested" !== M.data) && (a._tTime = -V, a.render(Math.max(0, -g))), k && Ea(_assertThisInitialized(a), k), a }
        _inheritsLoose(Tween, R); var e = Tween.prototype; return e.render = function render(t, e, r) { var i, n, a, s, o, u, h, l, f, d = this._time,
                _ = this._tDur,
                p = this._dur,
                c = _ - V < t && 0 <= t ? _ : t < V ? 0 : t; if (p) { if (c !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) { if (i = c, l = this.timeline, this._repeat) { if (s = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r); if (i = da(c % s), c === _ ? (a = this._repeat, i = p) : ((a = ~~(c / s)) && a === c / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = gt(this._tTime, s), i === d && !r && this._initted) return this._tTime = c, this;
                        a !== o && (l && this._yEase && Ib(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(da(s * a), !0).invalidate()._lock = 0)) } if (!this._initted) { if (Fa(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this; if (d !== this._time) return this; if (p !== this._dur) return this.render(t, e, r) } if (this._tTime = c, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !d && !e && (Ot(this, "onStart"), this._tTime !== c)) return this; for (n = this._pt; n;) n.r(h, n.d), n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -V : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), Ot(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Ot(this, "onRepeat"), c !== this._tDur && c || this._tTime !== c || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && p || !(c === this._tDur && 0 < this._ts || !c && this._ts < 0) || ta(this, 1), e || t < 0 && !d || !c && !d || (Ot(this, c === _ ? "onComplete" : "onReverseComplete", !0), !this._prom || c < _ && 0 < this.timeScale() || this._prom())) } } else ! function _renderZeroDurationTween(t, e, r, i) { var n, a, s, o = t.ratio,
                    u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) { var e = t.parent; return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e)) }(t) && (t._initted || !vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !vt(t)) ? 0 : 1,
                    h = t._rDelay,
                    l = 0; if (h && t._repeat && (l = bt(0, t._tDur, e), a = gt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== gt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || i || t._zTime === V || !e && t._zTime) { if (!t._initted && Fa(t, e, i, r)) return; for (s = t._zTime, t._zTime = e || (r ? V : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                    t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && Ot(t, "onUpdate"), l && t._repeat && !r && t.parent && Ot(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && ta(t, 1), r || (Ot(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom())) } else t._zTime || (t._zTime = e) }(this, t, e, r); return this }, e.targets = function targets() { return this._targets }, e.invalidate = function invalidate() { return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), R.prototype.invalidate.call(this) }, e.resetTo = function resetTo(t, e, r, i) { c || Dt.wake(), this._ts || this.play(); var n, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts); return this._initted || Xt(this, a), n = this._ease(a / this._dur),
                function _updatePropTweens(t, e, r, i, n, a, s) { var o, u, h, l = (t._pt && t._ptCache || (t._ptCache = {}))[e]; if (!l)
                        for (l = t._ptCache[e] = [], u = t._ptLookup, h = t._targets.length; h--;) { if ((o = u[h][e]) && o.d && o.d._pt)
                                for (o = o.d._pt; o && o.p !== e;) o = o._next; if (!o) return qt = 1, t.vars[e] = "+=0", Xt(t, s), qt = 0, 1;
                            l.push(o) }
                    for (h = l.length; h--;)(o = l[h]).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, o.e && (o.e = ca(r) + Ra(o.e)), o.b && (o.b = o.s + Ra(o.b)) }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ba(this, 0), this.parent || ra(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0)) }, e.kill = function kill(t, e) { if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? mb(this) : this; if (this.timeline) { var r = this.timeline.totalDuration(); return this.timeline.killTweensOf(t, e, Yt && !0 !== Yt.vars.overwrite)._first || mb(this), this.parent && r !== this.timeline.totalDuration() && Ka(this, this._dur * this.timeline._tDur / r, 0, 1), this } var i, n, a, s, u, h, l, f = this._targets,
                d = t ? xt(t) : f,
                p = this._ptLookup,
                c = this._pt; if ((!e || "all" === e) && function _arraysMatch(t, e) { for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];); return r < 0 }(f, d)) return "all" === e && (this._pt = 0), mb(this); for (i = this._op = this._op || [], "all" !== e && (o(e) && (u = {}, ba(e, function(t) { return u[t] = 1 }), e = u), e = function _addAliasesToVars(t, e) { var r, i, n, a, s = t[0] ? _(t[0]).harness : 0,
                        o = s && s.aliases; if (!o) return e; for (i in r = mt({}, e), o)
                        if (i in r)
                            for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                    return r }(f, e)), l = f.length; l--;)
                if (~d.indexOf(f[l]))
                    for (u in n = p[l], "all" === e ? (i[l] = e, s = n, a = {}) : (a = i[l] = i[l] || {}, s = e), s)(h = n && n[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || sa(this, h, "_pt"), delete n[u]), "all" !== a && (a[u] = 1);
            return this._initted && !this._pt && c && mb(this), this }, Tween.to = function to(t, e, r) { return new Tween(t, e, r) }, Tween.from = function from(t, e) { return Oa(1, arguments) }, Tween.delayedCall = function delayedCall(t, e, r, i) { return new Tween(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: r, onReverseCompleteParams: r, callbackScope: i }) }, Tween.fromTo = function fromTo(t, e, r) { return Oa(2, arguments) }, Tween.set = function set(t, e) { return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e) }, Tween.killTweensOf = function killTweensOf(t, e, r) { return I.killTweensOf(t, e, r) }, Tween }(Nt);
    ka($t.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), ba("staggerTo,staggerFrom,staggerFromTo", function(r) { $t[r] = function() { var t = new Ut,
                e = wt.call(arguments, 0); return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e) } });

    function gc(t, e, r) { return t.setAttribute(e, r) }

    function oc(t, e, r, i) { i.mSet(t, e, i.m.call(i.tween, r, i.mt), i) } var Gt = function _setterPlain(t, e, r) { return t[e] = r },
        Wt = function _setterFunc(t, e, r) { return t[e](r) },
        Zt = function _setterFuncWithParam(t, e, r, i) { return t[e](i.fp, r) },
        Ht = function _getSetter(t, e) { return p(t[e]) ? Wt : r(t[e]) && t.setAttribute ? gc : Gt },
        Jt = function _renderPlain(t, e) { return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e) },
        te = function _renderBoolean(t, e) { return e.set(e.t, e.p, !!(e.s + e.c * t), e) },
        ee = function _renderComplexString(t, e) { var r = e._pt,
                i = ""; if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else { for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c }
            e.set(e.t, e.p, i, e) },
        re = function _renderPropTweens(t, e) { for (var r = e._pt; r;) r.r(t, r.d), r = r._next },
        ie = function _addPluginModifier(t, e, r, i) { for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n },
        ne = function _killPropTweensOf(t) { for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? sa(this, i, "_pt") : i.dep || (e = 1), i = r; return !e },
        se = function _sortPropTweensByPriority(t) { for (var e, r, i, n, a = t._pt; a;) { for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e }
            t._pt = i },
        oe = (PropTween.prototype.modifier = function modifier(t, e, r) { this.mSet = this.mSet || this.set, this.set = oc, this.m = t, this.mt = r, this.tween = e }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) { this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Jt, this.d = s || this, this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this) }
    ba(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) { return ut[t] = 1 }), ot.TweenMax = ot.TweenLite = $t, ot.TimelineLite = ot.TimelineMax = Ut, I = new Ut({ sortChildren: !1, defaults: L, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 }), U.stringFilter = xb; var ue = { registerPlugin: function registerPlugin() { for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) { return function _createPlugin(t) { var e = (t = !t.name && t.default || t).name,
                        r = p(t),
                        i = e && !r && t.init ? function() { this._props = [] } : t,
                        n = { init: Q, render: re, add: Vt, kill: ne, modifier: ie, rawVars: 0 },
                        a = { targetTest: 0, get: 0, getSetter: Ht, aliases: {}, register: 0 }; if (St(), t !== i) { if (ft[e]) return;
                        ka(i, ka(oa(t, n), a)), mt(i.prototype, mt(n, oa(t, a))), ft[i.prop = e] = i, t.targetTest && (pt.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin" }
                    P(e, i), t.register && t.register(he, i, oe) }(t) }) }, timeline: function timeline(t) { return new Ut(t) }, getTweensOf: function getTweensOf(t, e) { return I.getTweensOf(t, e) }, getProperty: function getProperty(i, t, e, r) { o(i) && (i = xt(i)[0]); var n = _(i || {}).get,
                a = e ? ja : ia; return "native" === e && (e = ""), i ? t ? a((ft[t] && ft[t].get || n)(i, t, e, r)) : function(t, e, r) { return a((ft[t] && ft[t].get || n)(i, t, e, r)) } : i }, quickSetter: function quickSetter(r, e, i) { if (1 < (r = xt(r)).length) { var n = r.map(function(t) { return he.quickSetter(t, e, i) }),
                    a = n.length; return function(t) { for (var e = a; e--;) n[e](t) } }
            r = r[0] || {}; var s = ft[e],
                o = _(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) { var e = new s;
                    d._pt = 0, e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && re(1, d) } : o.set(r, u); return s ? h : function(t) { return h(r, u, i ? t + i : t, o, 1) } }, quickTo: function quickTo(t, i, e) {
            function iw(t, e, r) { return n.resetTo(i, t, e, r) } var r, n = he.to(t, mt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {})); return iw.tween = n, iw }, isTweening: function isTweening(t) { return 0 < I.getTweensOf(t, !0).length }, defaults: function defaults(t) { return t && t.ease && (t.ease = Bt(t.ease, L.ease)), na(L, t || {}) }, config: function config(t) { return na(U, t || {}) }, registerEffect: function registerEffect(t) { var i = t.name,
                n = t.effect,
                e = t.plugins,
                a = t.defaults,
                r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) { return t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.") }), dt[i] = function(t, e, r) { return n(xt(t), ka(e || {}, a), r) }, r && (Ut.prototype[i] = function(t, e, r) { return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r) }) }, registerEase: function registerEase(t, e) { zt[t] = Bt(e) }, parseEase: function parseEase(t, e) { return arguments.length ? Bt(t, e) : zt }, getById: function getById(t) { return I.getById(t) }, exportRoot: function exportRoot(e, r) { void 0 === e && (e = {}); var i, n, a = new Ut(e); for (a.smoothChildTiming = t(e.smoothChildTiming), I.remove(a), a._dp = 0, a._time = a._tTime = I._time, i = I._first; i;) n = i._next, !r && !i._dur && i instanceof $t && i.vars.onComplete === i._targets[0] || Da(a, i, i._start - i._delay), i = n; return Da(I, a, 0), a }, utils: { wrap: function wrap(e, t, r) { var i = t - e; return J(e) ? eb(e, wrap(0, e.length), t) : Pa(r, function(t) { return (i + (t - e) % i) % i + e }) }, wrapYoyo: function wrapYoyo(e, t, r) { var i = t - e,
                    n = 2 * i; return J(e) ? eb(e, wrapYoyo(0, e.length - 1), t) : Pa(r, function(t) { return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t) }) }, distribute: Za, random: ab, snap: _a, normalize: function normalize(t, e, r) { return kt(t, e, 0, 1, r) }, getUnit: Ra, clamp: function clamp(e, r, t) { return Pa(t, function(t) { return bt(e, r, t) }) }, splitColor: sb, toArray: xt, selector: function selector(r) { return r = xt(r)[0] || O("Invalid scope") || {},
                    function(t) { var e = r.current || r.nativeElement || r; return xt(t, e.querySelectorAll ? e : e === r ? O("Invalid scope") || a.createElement("div") : r) } }, mapRange: kt, pipe: function pipe() { for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]; return function(t) { return e.reduce(function(t, e) { return e(t) }, t) } }, unitize: function unitize(e, r) { return function(t) { return e(parseFloat(t)) + (r || Ra(t)) } }, interpolate: function interpolate(e, r, t, i) { var n = isNaN(e + r) ? 0 : function(t) { return (1 - t) * e + t * r }; if (!n) { var a, s, u, h, l, f = o(e),
                        d = {}; if (!0 === t && (i = 1) && (t = null), f) e = { p: e }, r = { p: r };
                    else if (J(e) && !J(r)) { for (u = [], h = e.length, l = h - 2, s = 1; s < h; s++) u.push(interpolate(e[s - 1], e[s]));
                        h--, n = function func(t) { t *= h; var e = Math.min(l, ~~t); return u[e](t - e) }, t = r } else i || (e = mt(J(e) ? [] : {}, e)); if (!u) { for (a in r) Vt.call(d, e, a, "get", r[a]);
                        n = function func(t) { return re(t, d) || (f ? e.p : e) } } } return Pa(t, n) }, shuffle: Ya }, install: M, effects: dt, ticker: Dt, updateRoot: Ut.updateRoot, plugins: ft, globalTimeline: I, core: { PropTween: oe, globals: P, Tween: $t, Timeline: Ut, Animation: Nt, getCache: _, _removeLinkedListItem: sa, suppressOverwrites: function suppressOverwrites(t) { return B = t } } };
    ba("to,from,fromTo,delayedCall,set,killTweensOf", function(t) { return ue[t] = $t[t] }), Dt.add(Ut.updateRoot), d = ue.to({}, { duration: 0 });

    function sc(t, e) { for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next; return r }

    function uc(t, n) { return { name: t, rawVars: 1, init: function init(t, i, e) { e._onInit = function(t) { var e, r; if (o(i) && (e = {}, ba(i, function(t) { return e[t] = 1 }), i = e), n) { for (r in e = {}, i) e[r] = n(i[r]);
                        i = e }! function _addModifiers(t, e) { var r, i, n, a = t._targets; for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = sc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r)) }(t, i) } } } } var he = ue.registerPlugin({ name: "attr", init: function init(t, e, r, i, n) { var a, s; for (a in e)(s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a) } }, { name: "endArray", init: function init(t, e) { for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r]) } }, uc("roundProps", $a), uc("modifiers"), uc("snap", _a)) || ue;
    $t.version = Ut.version = he.version = "3.10.4", l = 1, u() && St();

    function dd(t, e) { return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e) }

    function ed(t, e) { return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e) }

    function fd(t, e) { return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e) }

    function gd(t, e) { var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e) }

    function hd(t, e) { return e.set(e.t, e.p, t ? e.e : e.b, e) }

    function id(t, e) { return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e) }

    function jd(t, e, r) { return t.style[e] = r }

    function kd(t, e, r) { return t.style.setProperty(e, r) }

    function ld(t, e, r) { return t._gsap[e] = r }

    function md(t, e, r) { return t._gsap.scaleX = t._gsap.scaleY = r }

    function nd(t, e, r, i, n) { var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a) }

    function od(t, e, r, i, n) { var a = t._gsap;
        a[e] = r, a.renderTransform(n, a) }

    function sd(t, e) { var r = fe.createElementNS ? fe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : fe.createElement(t); return r.style ? r : fe.createElement(t) }

    function td(t, e, r) { var i = getComputedStyle(t); return i[e] || i.getPropertyValue(e.replace(Ne, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && td(t, je(e) || e, 1) || "" }

    function wd() {
        (function _windowExists() { return "undefined" != typeof window })() && window.document && (le = window, fe = le.document, de = fe.documentElement, pe = sd("div") || { style: {} }, sd("div"), Ve = je(Ve), Xe = Ve + "Origin", pe.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", me = !!je("perspective"), _e = 1) }

    function xd(t) { var e, r = sd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            a = this.style.cssText; if (de.appendChild(r), r.appendChild(this), this.style.display = "block", t) try { e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = xd } catch (t) {} else this._gsapBBox && (e = this._gsapBBox()); return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), de.removeChild(r), this.style.cssText = a, e }

    function yd(t, e) { for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r]) }

    function zd(e) { var r; try { r = e.getBBox() } catch (t) { r = xd.call(e, !0) } return r && (r.width || r.height) || e.getBBox === xd || (r = xd.call(e, !0)), !r || r.width || r.x || r.y ? r : { x: +yd(e, ["x", "cx", "x1"]) || 0, y: +yd(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } }

    function Ad(t) { return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !zd(t)) }

    function Bd(t, e) { if (e) { var r = t.style;
            e in Fe && e !== Xe && (e = Ve), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Ne, "-$1").toLowerCase())) : r.removeAttribute(e) } }

    function Cd(t, e, r, i, n, a) { var s = new oe(t._pt, e, r, 0, 1, a ? id : hd); return (t._pt = s).b = i, s.e = n, t._props.push(r), s }

    function Ed(t, e, r, i) { var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = pe.style,
            f = Ue.test(e),
            d = "svg" === t.tagName.toLowerCase(),
            p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            c = "px" === i,
            m = "%" === i; return i === h || !u || Ke[i] || Ke[h] ? u : ("px" === h || c || (u = Ed(t, e, r, "px")), o = t.getCTM && Ad(t), !m && "%" !== h || !Fe[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (c ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== fe && a.appendChild || (a = fe.body), (s = a._gsap) && m && s.width && f && s.time === Dt.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = td(t, "position")), a === t && (l.position = "static"), a.appendChild(pe), n = pe[p], a.removeChild(pe), l.position = "absolute", f && m && ((s = _(a)).time = Dt.time, s.width = a[p]), ca(c ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[p], ca(m ? u / n * 100 : u / 100 * n))) }

    function Fd(t, e, r, i) { var n; return _e || wd(), e in qe && "transform" !== e && ~(e = qe[e]).indexOf(",") && (e = e.split(",")[0]), Fe[e] && "transform" !== e ? (n = He(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Je(td(t, Xe)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ge[e] && Ge[e](t, e, r) || td(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Ed(t, e, n, r) + r : n }

    function Gd(t, e, r, i) { if (!r || "none" === r) { var n = je(e, t, 1),
                a = n && td(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = td(t, "borderTopColor")) } var s, o, u, h, l, f, d, _, p, c, m, g = new oe(this._pt, t.style, e, 0, 1, ee),
            v = 0,
            y = 0; if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = td(t, e) || i, t.style[e] = r), xb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) { for (; o = rt.exec(i);) d = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === d.charAt(1) && (d = ea(h, d) + m), _ = parseFloat(d), c = d.substr((_ + "").length), v = rt.lastIndex - c.length, c || (c = c || U.units[e] || m, v === i.length && (i += c, g.e += c)), m !== c && (h = Ed(t, e, f, c) || 0), g._pt = { _next: g._pt, p: p || 1 === y ? p : ",", s: h, c: _ - h, m: l && l < 4 || "zIndex" === e ? Math.round : 0 });
            g.c = v < i.length ? i.substring(v, i.length) : "" } else g.r = "display" === e && "none" === i ? id : hd; return nt.test(i) && (g.e = 0), this._pt = g }

    function Id(t) { var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%"; return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = $e[r] || r, e[1] = $e[i] || i, e.join(" ") }

    function Jd(t, e) { if (e.tween && e.tween._time === e.tween._dur) { var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap; if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], Fe[r] && (i = 1, r = "transformOrigin" === r ? Xe : Ve), Bd(a, r);
            i && (Bd(a, Ve), u && (u.svg && a.removeAttribute("transform"), He(a, 1), u.uncache = 1)) } }

    function Nd(t) { return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t }

    function Od(t) { var e = td(t, Ve); return Nd(e) ? We : e.substr(7).match(et).map(ca) }

    function Pd(t, e) { var r, i, n, a, s = t._gsap || _(t),
            o = t.style,
            u = Od(t); return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? We : u : (u !== We || t.offsetParent || t === de || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, de.appendChild(t)), u = Od(t), n ? o.display = n : Bd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : de.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u) }

    function Qd(t, e, r, i, n, a) { var s, o, u, h = t._gsap,
            l = n || Pd(t, !0),
            f = h.xOrigin || 0,
            d = h.yOrigin || 0,
            _ = h.xOffset || 0,
            p = h.yOffset || 0,
            c = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            T = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
        r ? l !== We && (o = c * v - m * g) && (u = w * (-m / o) + x * (c / o) - (c * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = zd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = _ + (y * c + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Xe] = "0px 0px", a && (Cd(a, h, "xOrigin", f, w), Cd(a, h, "yOrigin", d, x), Cd(a, h, "xOffset", _, h.xOffset), Cd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x) }

    function Td(t, e, r) { var i = Ra(e); return ca(parseFloat(e) + parseFloat(Ed(t, "x", r + "px", i))) + i }

    function $d(t, e, r, i, n) { var a, s, u = 360,
            h = o(n),
            l = parseFloat(n) * (h && ~n.indexOf("rad") ? Be : 1) - i,
            f = i + l + "deg"; return h && ("short" === (a = n.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === a && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === a && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = s = new oe(t._pt, e, r, i, l, ed), s.e = f, s.u = "deg", t._props.push(r), s }

    function _d(t, e) { for (var r in e) t[r] = e[r]; return t }

    function ae(t, e, r) { var i, n, a, s, o, u, h, l = _d({}, r._gsap),
            f = r.style; for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[Ve] = e, i = He(r, 1), Bd(r, Ve), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[Ve], f[Ve] = e, i = He(r, 1), f[Ve] = a), Fe)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ra(a) !== (h = Ra(s)) ? Ed(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new oe(t._pt, i, n, o, u - o, dd), t._pt.u = h || 0, t._props.push(n));
        _d(i, l) } var le, fe, de, _e, pe, ce, me, ge = zt.Power0,
        ve = zt.Power1,
        ye = zt.Power2,
        Te = zt.Power3,
        be = zt.Power4,
        we = zt.Linear,
        xe = zt.Quad,
        ke = zt.Cubic,
        Oe = zt.Quart,
        Pe = zt.Quint,
        Me = zt.Strong,
        Ce = zt.Elastic,
        Ae = zt.Back,
        De = zt.SteppedEase,
        Se = zt.Bounce,
        ze = zt.Sine,
        Re = zt.Expo,
        Ee = zt.Circ,
        Fe = {},
        Be = 180 / Math.PI,
        Ie = Math.PI / 180,
        Le = Math.atan2,
        Ne = /([A-Z])/g,
        Ue = /(left|right|width|margin|padding|x)/i,
        Ye = /[\s,\(]\S/,
        qe = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
        Ve = "transform",
        Xe = Ve + "Origin",
        Qe = "O,Moz,ms,Ms,Webkit".split(","),
        je = function _checkPropPrefix(t, e, r) { var i = (e || pe).style,
                n = 5; if (t in i && !r) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Qe[n] + t in i);); return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Qe[n] : "") + t },
        Ke = { deg: 1, rad: 1, turn: 1 },
        $e = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
        Ge = { clearProps: function clearProps(t, e, r, i, n) { if ("isFromStart" !== n.data) { var a = t._pt = new oe(t._pt, e, r, 0, 0, Jd); return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1 } } },
        We = [1, 0, 0, 1, 0, 0],
        Ze = {},
        He = function _parseTransform(t, e) { var r = t._gsap || new Lt(t); if ("x" in r && !e && !r.uncache) return r; var i, n, a, s, o, u, h, l, f, d, _, p, c, m, g, v, y, T, b, w, x, k, O, P, M, C, A, D, S, z, R, E, F = t.style,
                B = r.scaleX < 0,
                I = "deg",
                L = td(t, Xe) || "0"; return i = n = a = u = h = l = f = d = _ = 0, s = o = 1, r.svg = !(!t.getCTM || !Ad(t)), m = Pd(t, r.svg), r.svg && (P = (!r.uncache || "0px 0px" === L) && !e && t.getAttribute("data-svg-origin"), Qd(t, P || L, !!P || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, c = r.yOrigin || 0, m !== We && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? Le(b, T) * Be : 0, (f = w || x ? Le(w, x) * Be + u : 0) && (o *= Math.abs(Math.cos(f * Ie))), r.svg && (i -= p - (p * T + c * w), n -= c - (p * b + c * x))) : (E = m[6], z = m[7], A = m[8], D = m[9], S = m[10], R = m[11], i = m[12], n = m[13], a = m[14], h = (g = Le(E, S)) * Be, g && (P = k * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), M = O * v + D * y, C = E * v + S * y, A = k * -y + A * v, D = O * -y + D * v, S = E * -y + S * v, R = z * -y + R * v, k = P, O = M, E = C), l = (g = Le(-w, S)) * Be, g && (v = Math.cos(-g), R = x * (y = Math.sin(-g)) + R * v, T = P = T * v - A * y, b = M = b * v - D * y, w = C = w * v - S * y), u = (g = Le(b, T)) * Be, g && (P = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), M = k * v + O * y, b = b * v - T * y, O = O * v - k * y, T = P, k = M), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ca(Math.sqrt(T * T + b * b + w * w)), o = ca(Math.sqrt(O * O + E * E)), g = Le(k, O), f = 2e-4 < Math.abs(g) ? g * Be : 0, _ = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (P = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Nd(td(t, Ve)), P && t.setAttribute("transform", P))), 90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ca(s), r.scaleY = ca(o), r.rotation = ca(u) + I, r.rotationX = ca(h) + I, r.rotationY = ca(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = _ + "px", (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (F[Xe] = Je(L)), r.xOffset = r.yOffset = 0, r.force3D = U.force3D, r.renderTransform = r.svg ? ar : me ? nr : tr, r.uncache = 0, r },
        Je = function _firstTwoOnly(t) { return (t = t.split(" "))[0] + " " + t[1] },
        tr = function _renderNon3DTransforms(t, e) { e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, nr(t, e) },
        er = "0deg",
        rr = "0px",
        ir = ") ",
        nr = function _renderCSSTransforms(t, e) { var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                d = r.skewY,
                _ = r.scaleX,
                p = r.scaleY,
                c = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m; if (v && (l !== er || h !== er)) { var b, w = parseFloat(h) * Ie,
                    x = Math.sin(w),
                    k = Math.cos(w);
                w = parseFloat(l) * Ie, b = Math.cos(w), a = Td(g, a, x * b * -v), s = Td(g, s, -Math.sin(w) * -v), o = Td(g, o, k * b * -v + v) }
            c !== rr && (y += "perspective(" + c + ir), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === rr && s === rr && o === rr || (y += o !== rr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + ir), u !== er && (y += "rotate(" + u + ir), h !== er && (y += "rotateY(" + h + ir), l !== er && (y += "rotateX(" + l + ir), f === er && d === er || (y += "skew(" + f + ", " + d + ir), 1 === _ && 1 === p || (y += "scale(" + _ + ", " + p + ir), g.style[Ve] = y || "translate(0, 0)" },
        ar = function _renderSVGTransforms(t, e) { var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                d = o.rotation,
                _ = o.skewX,
                p = o.skewY,
                c = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                b = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                k = parseFloat(f);
            d = parseFloat(d), _ = parseFloat(_), (p = parseFloat(p)) && (_ += p = parseFloat(p), d += p), d || _ ? (d *= Ie, _ *= Ie, r = Math.cos(d) * c, i = Math.sin(d) * c, n = Math.sin(d - _) * -m, a = Math.cos(d - _) * m, _ && (p *= Ie, s = Math.tan(_ - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ca(r), i = ca(i), n = ca(n), a = ca(a)) : (r = c, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = Ed(g, "x", l, "px"), k = Ed(g, "y", f, "px")), (v || y || T || b) && (x = ca(x + v - (v * r + y * n) + T), k = ca(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ca(x + u / 100 * s.width), k = ca(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[Ve] = s) };
    ba("padding,margin,Width,Radius", function(e, r) { var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) { return r < 2 ? e + t : "border" + t + e });
        Ge[1 < r ? "border" + e : e] = function(e, t, r, i, n) { var a, s; if (arguments.length < 4) return a = o.map(function(t) { return Fd(e, t, r) }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) { return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0] }), e.init(t, s, n) } }); var sr, or, ur, hr = { name: "css", register: wd, targetTest: function targetTest(t) { return t.style && t.nodeType }, init: function init(t, e, r, i, n) { var a, s, u, h, l, f, d, _, p, c, m, g, v, y, T, b = this._props,
                w = t.style,
                x = r.vars.startAt; for (d in _e || wd(), e)
                if ("autoRound" !== d && (s = e[d], !ft[d] || !Ub(d, e, r, i, t, n)))
                    if (l = typeof s, f = Ge[d], "function" === l && (l = typeof(s = s.call(r, i, t, n))), "string" === l && ~s.indexOf("random(") && (s = hb(s)), f) f(this, t, d, s, r) && (T = 1);
                    else if ("--" === d.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(d) + "").trim(), s += "", Ct.lastIndex = 0, Ct.test(a) || (_ = Ra(a), p = Ra(s)), p ? _ !== p && (a = Ed(t, d, a, p) + p) : _ && (s += _), this.add(w, "setProperty", a, s, i, n, 0, 0, d), b.push(d);
            else if ("undefined" !== l) { if (x && d in x ? (a = "function" == typeof x[d] ? x[d].call(r, i, t, n) : x[d], o(a) && ~a.indexOf("random(") && (a = hb(a)), Ra(a + "") || (a += U.units[d] || Ra(Fd(t, d)) || ""), "=" === (a + "").charAt(1) && (a = Fd(t, d))) : a = Fd(t, d), h = parseFloat(a), (c = "string" === l && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), u = parseFloat(s), d in qe && ("autoAlpha" === d && (1 === h && "hidden" === Fd(t, "visibility") && u && (h = 0), Cd(this, w, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== d && "transform" !== d && ~(d = qe[d]).indexOf(",") && (d = d.split(",")[0])), m = d in Fe)
                    if (g || ((v = t._gsap).renderTransform && !e.parseTransform || He(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new oe(this._pt, w, Ve, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new oe(this._pt, v, "scaleY", v.scaleY, (c ? ea(v.scaleY, c + u) : u) - v.scaleY || 0), b.push("scaleY", d), d += "X";
                    else { if ("transformOrigin" === d) { s = Id(s), v.svg ? Qd(t, s, 0, y, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && Cd(this, v, "zOrigin", v.zOrigin, p), Cd(this, w, d, Je(a), Je(s))); continue } if ("svgOrigin" === d) { Qd(t, s, 1, y, 0, this); continue } if (d in Ze) { $d(this, v, d, h, c ? ea(h, c + s) : s); continue } if ("smoothOrigin" === d) { Cd(this, v, "smooth", v.smooth, s); continue } if ("force3D" === d) { v[d] = s; continue } if ("transform" === d) { ae(this, s, t); continue } }
                else d in w || (d = je(d) || d); if (m || (u || 0 === u) && (h || 0 === h) && !Ye.test(s) && d in w) u = u || 0, (_ = (a + "").substr((h + "").length)) !== (p = Ra(s) || (d in U.units ? U.units[d] : _)) && (h = Ed(t, d, a, p)), this._pt = new oe(this._pt, m ? v : w, d, h, (c ? ea(h, c + u) : u) - h, m || "px" !== p && "zIndex" !== d || !1 === e.autoRound ? dd : gd), this._pt.u = p || 0, _ !== p && "%" !== p && (this._pt.b = a, this._pt.r = fd);
                else if (d in w) Gd.call(this, t, d, a, c ? c + s : s);
                else { if (!(d in t)) { N(d, s); continue }
                    this.add(t, d, a || t[d], c ? c + s : s, i, n) }
                b.push(d) }
            T && se(this) }, get: Fd, aliases: qe, getSetter: function getSetter(t, e, i) { var n = qe[e]; return n && n.indexOf(",") < 0 && (e = n), e in Fe && e !== Xe && (t._gsap.x || Fd(t, "x")) ? i && ce === i ? "scale" === e ? md : ld : (ce = i || {}) && ("scale" === e ? nd : od) : t.style && !r(t.style[e]) ? jd : ~e.indexOf("-") ? kd : Ht(t, e) }, core: { _removeProperty: Bd, _getMatrix: Pd } };
    he.utils.checkPrefix = je, ur = ba((sr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (or = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) { Fe[t] = 1 }), ba(or, function(t) { U.units[t] = "deg", Ze[t] = 1 }), qe[ur[13]] = sr + "," + or, ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) { var e = t.split(":");
        qe[e[1]] = ur[e[0]] }), ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) { U.units[t] = "px" }), he.registerPlugin(hr); var lr = he.registerPlugin(hr) || he,
        fr = lr.core.Tween;
    e.Back = Ae, e.Bounce = Se, e.CSSPlugin = hr, e.Circ = Ee, e.Cubic = ke, e.Elastic = Ce, e.Expo = Re, e.Linear = we, e.Power0 = ge, e.Power1 = ve, e.Power2 = ye, e.Power3 = Te, e.Power4 = be, e.Quad = xe, e.Quart = Oe, e.Quint = Pe, e.Sine = ze, e.SteppedEase = De, e.Strong = Me, e.TimelineLite = Ut, e.TimelineMax = Ut, e.TweenLite = $t, e.TweenMax = fr, e.default = lr, e.gsap = lr; if (typeof(window) === "undefined" || window !== e) { Object.defineProperty(e, "__esModule", { value: !0 }) } else { delete e.default } });

    /*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {}) }(this, function(e) { "use strict";

function _defineProperties(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } }

function q() { return we || "undefined" != typeof window && (we = window.gsap) && we.registerPlugin && we }

function y(e, t) { return ~Le.indexOf(e) && Le[Le.indexOf(e) + 1][t] }

function z(e) { return !!~t.indexOf(e) }

function A(e, t, r, n, i) { return e.addEventListener(t, r, { passive: !n, capture: !!i }) }

function B(e, t, r, n) { return e.removeEventListener(t, r, !!n) }

function E() { return De && De.isPressed || T.cache++ }

function F(r, n) {
    function Uc(e) { if (e || 0 === e) { i && (Me.history.scrollRestoration = "manual"); var t = De && De.isPressed;
            e = Uc.v = Math.round(e) || (De && De.iOS ? 1 : 0), r(e), Uc.cacheID = T.cache, t && o("ss", e) } else(n || T.cache !== Uc.cacheID || o("ref")) && (Uc.cacheID = T.cache, Uc.v = r()); return Uc.v + Uc.offset } return Uc.offset = 0, r && Uc }

function I(e) { return we.utils.toArray(e)[0] || ("string" == typeof e && !1 !== we.config().nullTargetWarn ? console.warn("Element not found:", e) : null) }

function J(t, e) { var r = e.s,
        n = e.sc,
        i = T.indexOf(t),
        o = n === Ne.sc ? 1 : 2; return ~i || (i = T.push(t) - 1), T[i + o] || (T[i + o] = F(y(t, r), !0) || (z(t) ? n : F(function(e) { return arguments.length ? t[r] = e : t[r] }))) }

function K(e, t, i) {
    function od(e, t) { var r = He();
        t || n < r - s ? (a = o, o = e, l = s, s = r) : i ? o += e : o = a + (e - a) / (r - l) * (s - l) } var o = e,
        a = e,
        s = He(),
        l = s,
        n = t || 50,
        c = Math.max(500, 3 * n); return { update: od, reset: function reset() { a = o = i ? 0 : o, l = s = 0 }, getVelocity: function getVelocity(e) { var t = l,
                r = a,
                n = He(); return !e && 0 !== e || e === o || od(e), s === l || c < n - l ? 0 : (o + (i ? r : -r)) / ((i ? n : s) - t) * 1e3 } } }

function L(e, t) { return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e }

function M(e) { var t = Math.max.apply(Math, e),
        r = Math.min.apply(Math, e); return Math.abs(t) >= Math.abs(r) ? t : r }

function N() {
    (Be = we.core.globals().ScrollTrigger) && Be.core && function _integrate() { var e = Be.core,
            r = e.bridge || {},
            t = e._scrollers,
            n = e._proxies;
        t.push.apply(t, T), n.push.apply(n, Le), T = t, Le = n, o = function _bridge(e, t) { return r[e](t) } }() }

function O(e) { return (we = e || q()) && "undefined" != typeof document && document.body && (Me = window, Ce = (Ae = document).documentElement, Oe = Ae.body, t = [Me, Ae, Ce, Oe], we.utils.clamp, Ie = "onpointerenter" in Oe ? "pointer" : "mouse", Ee = k.isTouch = Me.matchMedia && Me.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Me || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, ze = k.eventTypes = ("ontouchstart" in Ce ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Ce ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() { return i = 0 }, 500), N(), ke = 1), ke } var we, ke, Me, Ae, Ce, Oe, Ee, Ie, Be, t, De, ze, i = 1,
    Fe = [],
    T = [],
    Le = [],
    He = Date.now,
    o = function _bridge(e, t) { return t },
    r = "scrollLeft",
    n = "scrollTop",
    Re = { s: r, p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: F(function(e) { return arguments.length ? Me.scrollTo(e, Ne.sc()) : Me.pageXOffset || Ae[r] || Ce[r] || Oe[r] || 0 }) },
    Ne = { s: n, p: "top", p2: "Top", os: "bottom", os2: "Bottom", d: "height", d2: "Height", a: "y", op: Re, sc: F(function(e) { return arguments.length ? Me.scrollTo(Re.sc(), e) : Me.pageYOffset || Ae[n] || Ce[n] || Oe[n] || 0 }) };
Re.op = Ne, T.cache = 0; var k = (Observer.prototype.init = function init(e) { ke || O(we) || console.warn("Please gsap.registerPlugin(Observer)"), Be || N(); var i = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        n = e.target,
        r = e.lineHeight,
        o = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        w = e.onDown,
        S = e.onChangeX,
        _ = e.onChangeY,
        T = e.onChange,
        k = e.onToggleX,
        C = e.onToggleY,
        P = e.onHover,
        D = e.onHoverEnd,
        Y = e.onMove,
        X = e.ignoreCheck,
        F = e.isNormalizer,
        H = e.onGestureStart,
        R = e.onGestureEnd,
        U = e.onWheel,
        V = e.onEnable,
        W = e.onDisable,
        j = e.onClick,
        Q = e.scrollSpeed,
        q = e.capture,
        G = e.allowClicks,
        Z = e.lockAxis,
        $ = e.onLockAxis;

    function Pe() { return ye = He() }

    function Qe(e, t) { return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || X && X(e, t) }

    function Se() { var e = se.deltaX = M(be),
            t = se.deltaY = M(me),
            r = Math.abs(e) >= i,
            n = Math.abs(t) >= i;
        T && (r || n) && T(se, e, t, be, me), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), S && S(se), k && se.deltaX < 0 != le < 0 && k(se), le = se.deltaX, be[0] = be[1] = be[2] = 0), n && (w && 0 < se.deltaY && w(se), x && se.deltaY < 0 && x(se), _ && _(se), C && se.deltaY < 0 != ce < 0 && C(se), ce = se.deltaY, me[0] = me[1] = me[2] = 0), (ne || re) && (Y && Y(se), $ && oe && $(se), re && (h(se), re = !1), ne = oe = !1), ie && (U(se), ie = !1), ee = 0 }

    function Te(e, t, r) { be[r] += e, me[r] += t, se._vx.update(e), se._vy.update(t), o ? ee = ee || requestAnimationFrame(Se) : Se() }

    function Ue(e, t) { "y" !== ae && (be[2] += e, se._vx.update(e, !0)), "x" !== ae && (me[2] += t, se._vy.update(t, !0)), Z && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", oe = !0), o ? ee = ee || requestAnimationFrame(Se) : Se() }

    function Ve(e) { if (!Qe(e, 1)) { var t = (e = L(e, s)).clientX,
                r = e.clientY,
                n = t - se.x,
                i = r - se.y,
                o = se.isDragging;
            se.x = t, se.y = r, (o || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), o || (se.isDragging = !0), Ue(n, i), o || p && p(se)) } }

    function Xe(t) { if (!Qe(t, 1)) { B(F ? n : ve, ze[1], Ve, !0); var e = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
                r = L(t);
            e || (se._vx.reset(), se._vy.reset(), s && G && we.delayedCall(.08, function() { if (300 < He() - ye && !t.defaultPrevented)
                    if (t.target.click) t.target.click();
                    else if (ve.createEvent) { var e = ve.createEvent("MouseEvents");
                    e.initMouseEvent("click", !0, !0, Me, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e) } })), se.isDragging = se.isGesturing = se.isPressed = !1, l && !F && te.restart(!0), g && e && g(se), b && b(se, e) } }

    function Ye(e) { return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && H(e, se.isDragging) }

    function Ze() { return (se.isGesturing = !1) || R(se) }

    function $e(e) { if (!Qe(e)) { var t = ue(),
                r = fe();
            Te((t - de) * Q, (r - pe) * Q, 1), de = t, pe = r, l && te.restart(!0) } }

    function _e(e) { if (!Qe(e)) { e = L(e, s), U && (ie = !0); var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Me.innerHeight : 1) * f;
            Te(e.deltaX * t, e.deltaY * t, 0), l && !F && te.restart(!0) } }

    function af(e) { if (!Qe(e)) { var t = e.clientX,
                r = e.clientY,
                n = t - se.x,
                i = r - se.y;
            se.x = t, se.y = r, ne = !0, (n || i) && Ue(n, i) } }

    function bf(e) { se.event = e, P(se) }

    function cf(e) { se.event = e, D(se) }

    function df(e) { return Qe(e) || L(e, s) && j(se) }
    this.target = n = I(n) || Ce, this.vars = e, u = u && we.utils.toArray(u), i = i || 0, a = a || 0, f = f || 1, Q = Q || 1, t = t || "wheel,touch,pointer", o = !1 !== o, r = r || parseFloat(Me.getComputedStyle(Oe).lineHeight) || 22; var ee, te, re, ne, ie, oe, ae, se = this,
        le = 0,
        ce = 0,
        ue = J(n, Re),
        fe = J(n, Ne),
        de = ue(),
        pe = fe(),
        ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === ze[0],
        he = z(n),
        ve = n.ownerDocument || Ae,
        be = [0, 0, 0],
        me = [0, 0, 0],
        ye = 0,
        xe = se.onPress = function(e) { Qe(e, 1) || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = L(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), A(F ? n : ve, ze[1], Ve, s, !0), se.deltaX = se.deltaY = 0, v && v(se)) };
    te = se._dc = we.delayedCall(c || .25, function onStopFunc() { se._vx.reset(), se._vy.reset(), te.pause(), l && l(se) }).pause(), se.deltaX = se.deltaY = 0, se._vx = K(0, 50, !0), se._vy = K(0, 50, !0), se.scrollX = ue, se.scrollY = fe, se.isDragging = se.isGesturing = se.isPressed = !1, se.enable = function(e) { return se.isEnabled || (A(he ? ve : n, "scroll", E), 0 <= t.indexOf("scroll") && A(he ? ve : n, "scroll", $e, s, q), 0 <= t.indexOf("wheel") && A(n, "wheel", _e, s, q), (0 <= t.indexOf("touch") && Ee || 0 <= t.indexOf("pointer")) && (A(n, ze[0], xe, s, q), A(ve, ze[2], Xe), A(ve, ze[3], Xe), G && A(n, "click", Pe, !1, !0), j && A(n, "click", df), H && A(ve, "gesturestart", Ye), R && A(ve, "gestureend", Ze), P && A(n, Ie + "enter", bf), D && A(n, Ie + "leave", cf), Y && A(n, Ie + "move", af)), se.isEnabled = !0, e && e.type && xe(e), V && V(se)), se }, se.disable = function() { se.isEnabled && (Fe.filter(function(e) { return e !== se && z(e.target) }).length || B(he ? ve : n, "scroll", E), se.isPressed && (se._vx.reset(), se._vy.reset(), B(F ? n : ve, ze[1], Ve, !0)), B(he ? ve : n, "scroll", $e, q), B(n, "wheel", _e, q), B(n, ze[0], xe, q), B(ve, ze[2], Xe), B(ve, ze[3], Xe), B(n, "click", Pe, !0), B(n, "click", df), B(ve, "gesturestart", Ye), B(ve, "gestureend", Ze), B(n, Ie + "enter", bf), B(n, Ie + "leave", cf), B(n, Ie + "move", af), se.isEnabled = se.isPressed = se.isDragging = !1, W && W(se)) }, se.kill = function() { se.disable(); var e = Fe.indexOf(se);
        0 <= e && Fe.splice(e, 1), De === se && (De = 0) }, Fe.push(se), F && z(n) && (De = se), se.enable(d) }, function _createClass(e, t, r) { return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e }(Observer, [{ key: "velocityX", get: function get() { return this._vx.getVelocity() } }, { key: "velocityY", get: function get() { return this._vy.getVelocity() } }]), Observer);

function Observer(e) { this.init(e) }
k.version = "3.10.4", k.create = function(e) { return new k(e) }, k.register = O, k.getAll = function() { return Fe.slice() }, k.getById = function(t) { return Fe.filter(function(e) { return e.vars.id === t })[0] }, q() && we.registerPlugin(k);

function va() { return nt = 1 }

function wa() { return nt = 0 }

function xa(e) { return e }

function ya(e) { return Math.round(1e5 * e) / 1e5 || 0 }

function za() { return "undefined" != typeof window }

function Aa() { return We || za() && (We = window.gsap) && We.registerPlugin && We }

function Ba(e) { return !!~s.indexOf(e) }

function Ca(e) { return y(e, "getBoundingClientRect") || (Ba(e) ? function() { return Bt.width = je.innerWidth, Bt.height = je.innerHeight, Bt } : function() { return Mt(e) }) }

function Fa(e, t) { var r = t.s,
        n = t.d2,
        i = t.d,
        o = t.a; return (r = "scroll" + n) && (o = y(e, r)) ? o() - Ca(e)()[i] : Ba(e) ? (qe[r] || Ge[r]) - (je["inner" + n] || qe["client" + n] || Ge["client" + n]) : e[r] - e["offset" + n] }

function Ga(e, t) { for (var r = 0; r < p.length; r += 3) t && !~t.indexOf(p[r + 1]) || e(p[r], p[r + 1], p[r + 2]) }

function Ha(e) { return "string" == typeof e }

function Ia(e) { return "function" == typeof e }

function Ja(e) { return "number" == typeof e }

function Ka(e) { return "object" == typeof e }

function La(e) { return Ia(e) && e() }

function Ma(r, n) { return function() { var e = La(r),
            t = La(n); return function() { La(e), La(t) } } }

function Na(e, t, r) { return e && e.progress(t ? 0 : 1) && r && e.pause() }

function Oa(e, t) { if (e.enabled) { var r = t(e);
        r && r.totalTime && (e.callbackAnimation = r) } }

function db(e) { return je.getComputedStyle(e) }

function fb(e, t) { for (var r in t) r in e || (e[r] = t[r]); return e }

function hb(e, t) { var r = t.d2; return e["offset" + r] || e["client" + r] || 0 }

function ib(e) { var t, r = [],
        n = e.labels,
        i = e.duration(); for (t in n) r.push(n[t] / i); return r }

function kb(i) { var o = We.utils.snap(i),
        a = Array.isArray(i) && i.slice(0).sort(function(e, t) { return e - t }); return a ? function(e, t, r) { var n; if (void 0 === r && (r = .001), !t) return o(e); if (0 < t) { for (e -= r, n = 0; n < a.length; n++)
                if (a[n] >= e) return a[n];
            return a[n - 1] } for (n = a.length, e += r; n--;)
            if (a[n] <= e) return a[n];
        return a[0] } : function(e, t, r) { void 0 === r && (r = .001); var n = o(e); return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : o(t < 0 ? e - i : e + i) } }

function mb(t, r, e, n) { return e.split(",").forEach(function(e) { return t(r, e, n) }) }

function nb(e, t, r, n, i) { return e.addEventListener(t, r, { passive: !n, capture: !!i }) }

function ob(e, t, r, n) { return e.removeEventListener(t, r, !!n) }

function pb(e, t, r) { return r && r.wheelHandler && e(t, "wheel", r) }

function tb(e, t) { if (Ha(e)) { var r = e.indexOf("="),
            n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in Y ? Y[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0) } return e }

function ub(e, t, r, n, i, o, a, s) { var l = i.startColor,
        c = i.endColor,
        u = i.fontSize,
        f = i.indent,
        d = i.fontWeight,
        p = Je.createElement("div"),
        g = Ba(r) || "fixed" === y(r, "pinType"),
        h = -1 !== e.indexOf("scroller"),
        v = g ? Ge : r,
        b = -1 !== e.indexOf("start"),
        m = b ? l : c,
        x = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;"; return x += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (x += (n === Ne ? _ : P) + ":" + (o + parseFloat(f)) + "px;"), a && (x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = b, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = x, p.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p), p._offset = p["offset" + n.op.d2], X(p, 0, n, b), p }

function zb() { return 34 < dt() - pt && ee() }

function Ab() { h && h.isPressed && !(h.startX > Ge.clientWidth) || (T.cache++, x = x || requestAnimationFrame(ee), pt || V("scrollStart"), pt = dt()) }

function Bb() { m = je.innerWidth, b = je.innerHeight }

function Cb() { T.cache++, rt || g || Je.fullscreenElement || Je.webkitFullscreenElement || v && m === je.innerWidth && !(Math.abs(je.innerHeight - b) > .25 * je.innerHeight) || l.restart(!0) }

function Ib(e) { var t, r = We.ticker.frame,
        n = [],
        i = 0; if (w !== r || ft) { for (Q(); i < U.length; i += 4)(t = je.matchMedia(U[i]).matches) !== U[i + 3] && ((U[i + 3] = t) ? n.push(i) : Q(1, U[i]) || Ia(U[i + 2]) && U[i + 2]()); for (j(), i = 0; i < n.length; i++) t = n[i], lt = U[t], U[t + 2] = U[t + 1](e);
        lt = 0, a && Z(0, 1), w = r, V("matchMedia") } }

function Jb() { return ob(oe, "scrollEnd", Jb) || Z(!0) }

function Ob() { return T.cache++ && T.forEach(function(e) { return "function" == typeof e && (e.rec = 0) }) }

function Zb(e, t, r, n) { if (e.parentNode !== t) { for (var i, o = te.length, a = t.style, s = e.style; o--;) a[i = te[o]] = r[i];
        a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[P] = s[_] = a.flexBasis = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[vt] = hb(e, Re) + kt, a[bt] = hb(e, Ne) + kt, a[St] = s[_t] = s.top = s.left = "0", It(n), s[vt] = s.maxWidth = r[vt], s[bt] = s.maxHeight = r[bt], s[St] = r[St], e.parentNode.insertBefore(t, e), t.appendChild(e) } }

function ac(e) { for (var t = re.length, r = e.style, n = [], i = 0; i < t; i++) n.push(re[i], r[re[i]]); return n.t = e, n }

function dc(e, t, r, n, i, o, a, s, l, c, u, f, d) { Ia(e) && (e = e(s)), Ha(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? tb("0" + e.substr(3), r) : 0)); var p, g, h, v = d ? d.time() : 0; if (d && d.seek(0), Ja(e)) a && X(a, r, n, !0);
    else { Ia(t) && (t = t(s)); var b, m, y, x, w = e.split(" ");
        h = I(t) || Ge, (b = Mt(h) || {}) && (b.left || b.top) || "none" !== db(h).display || (x = h.style.display, h.style.display = "block", b = Mt(h), x ? h.style.display = x : h.style.removeProperty("display")), m = tb(w[0], b[n.d]), y = tb(w[1] || "0", r), e = b[n.p] - l[n.p] - c + m + i - y, a && X(a, y, n, r - y < 20 || a._isStart && 20 < y), r -= r - y } if (o) { var S = e + r,
            _ = o._isStart;
        p = "scroll" + n.d2, X(o, S, n, _ && 20 < S || !_ && (u ? Math.max(Ge[p], qe[p]) : o.parentNode[p]) <= S + 1), u && (l = Mt(a), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + kt)) } return d && h && (p = Mt(h), d.seek(f), g = Mt(h), d._caScrollDist = p[n.p] - g[n.p], e = e / d._caScrollDist * f), d && d.seek(v), d ? e : Math.round(e) }

function fc(e, t, r, n) { if (e.parentNode !== t) { var i, o, a = e.style; if (t === Ge) { for (i in e._stOrig = a.cssText, o = db(e)) + i || ie.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
            a.top = r, a.left = n } else a.cssText = e._stOrig;
        We.core.getCache(e).uncache = 1, t.appendChild(e) } }

function gc(l, e) {
    function Qj(e, t, r, n, i) { var o = Qj.tween,
            a = t.onComplete,
            s = {}; return r = r || f(), i = n && i || 0, n = n || e - r, o && o.kill(), c = Math.round(r), t[d] = e, (t.modifiers = s)[d] = function(e) { return (e = ya(f())) !== c && e !== u && 2 < Math.abs(e - c) && 2 < Math.abs(e - u) ? (o.kill(), Qj.tween = 0) : e = r + n * o.ratio + i * o.ratio * o.ratio, u = c, c = ya(e) }, t.onComplete = function() { Qj.tween = 0, a && a.call(o) }, o = Qj.tween = We.to(l, t) } var c, u, f = J(l, e),
        d = "_scroll" + e.p2; return (l[d] = f).wheelHandler = function() { return Qj.tween && Qj.tween.kill() && (Qj.tween = 0) }, nb(l, "wheel", f.wheelHandler), Qj } var We, a, je, Je, qe, Ge, s, l, Ke, et, tt, c, rt, nt, u, it, f, d, p, ot, at, g, h, v, b, m, C, st, x, lt, w, ct, ut, ft = 1,
    dt = Date.now,
    S = dt(),
    pt = 0,
    gt = 0,
    ht = Math.abs,
    _ = "right",
    P = "bottom",
    vt = "width",
    bt = "height",
    mt = "Right",
    yt = "Left",
    xt = "Top",
    wt = "Bottom",
    St = "padding",
    _t = "margin",
    Tt = "Width",
    D = "Height",
    kt = "px",
    Mt = function _getBounds(e, t) { var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== db(e)[u] && We.to(e, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),
            n = e.getBoundingClientRect(); return r && r.progress(0).kill(), n },
    At = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" },
    Ct = { toggleActions: "play", anticipatePin: 0 },
    Y = { top: 0, left: 0, center: .5, bottom: 1, right: 1 },
    X = function _positionMarker(e, t, r, n) { var i = { display: "block" },
            o = r[n ? "os2" : "p2"],
            a = r[n ? "p2" : "os2"];
        e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + Tt] = 1, i["border" + a + Tt] = 0, i[r.p] = t + "px", We.set(e, i) },
    Ot = [],
    Pt = {},
    H = {},
    R = [],
    U = [],
    V = function _dispatch(e) { return H[e] && H[e].map(function(e) { return e() }) || R },
    W = [],
    j = function _revertRecorded(e) { for (var t = 0; t < W.length; t += 5) e && W[t + 4] !== e || (W[t].style.cssText = W[t + 1], W[t].getBBox && W[t].setAttribute("transform", W[t + 2] || ""), W[t + 3].uncache = 1) },
    Q = function _revertAll(e, t) { var r; for (it = 0; it < Ot.length; it++) r = Ot[it], t && r.media !== t || (e ? r.kill(1) : r.revert());
        t && j(t), t || V("revert") },
    G = 0,
    Z = function _refreshAll(e, t) { if (!pt || e) { ct = !0; var r = V("refreshInit");
            ot && oe.sort(), t || Q(), Ot.slice(0).forEach(function(e) { return e.refresh() }), Ot.forEach(function(e) { return "max" === e.vars.end && e.setPositions(e.start, Fa(e.scroller, e._dir)) }), r.forEach(function(e) { return e && e.render && e.render(-1) }), Ob(), l.pause(), G++, ct = !1, V("refresh") } else nb(oe, "scrollEnd", Jb) },
    $ = 0,
    Et = 1,
    ee = function _updateAll() { if (!ct) { oe.isUpdating = !0, ut && ut.update(0); var e = Ot.length,
                t = dt(),
                r = 50 <= t - S,
                n = e && Ot[0].scroll(); if (Et = n < $ ? -1 : 1, $ = n, r && (pt && !nt && 200 < t - pt && (pt = 0, V("scrollEnd")), tt = S, S = t), Et < 0) { for (it = e; 0 < it--;) Ot[it] && Ot[it].update(0, r);
                Et = 1 } else
                for (it = 0; it < e; it++) Ot[it] && Ot[it].update(0, r);
            oe.isUpdating = !1 }
        x = 0 },
    te = ["left", "top", P, _, _t + wt, _t + mt, _t + xt, _t + yt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    re = te.concat([vt, bt, "boxSizing", "max" + Tt, "max" + D, "position", _t, St, St + xt, St + mt, St + wt, St + yt]),
    ne = /([A-Z])/g,
    It = function _setState(e) { if (e) { var t, r, n = e.t.style,
                i = e.length,
                o = 0; for ((e.t._gsap || We.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(ne, "-$1").toLowerCase()) } },
    Bt = { left: 0, top: 0 },
    ie = /(webkit|moz|length|cssText|inset)/i,
    oe = (ScrollTrigger.prototype.init = function init(_, T) { if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), gt) { var k, n, p, M, A, C, O, P, E, B, D, e, z, Y, X, F, L, t, H, b, R, N, m, U, x, w, r, S, V, W, i, g, j, Q, q, G, K, o, Z = (_ = fb(Ha(_) || Ja(_) || _.nodeType ? { trigger: _ } : _, Ct)).onUpdate,
                $ = _.toggleClass,
                a = _.id,
                ee = _.onToggle,
                te = _.onRefresh,
                re = _.scrub,
                ne = _.trigger,
                ie = _.pin,
                oe = _.pinSpacing,
                ae = _.invalidateOnRefresh,
                se = _.anticipatePin,
                s = _.onScrubComplete,
                h = _.onSnapComplete,
                le = _.once,
                ce = _.snap,
                ue = _.pinReparent,
                l = _.pinSpacer,
                fe = _.containerAnimation,
                de = _.fastScrollEnd,
                pe = _.preventOverlaps,
                ge = _.horizontal || _.containerAnimation && !1 !== _.horizontal ? Re : Ne,
                he = !re && 0 !== re,
                ve = I(_.scroller || je),
                c = We.core.getCache(ve),
                be = Ba(ve),
                me = "fixed" === ("pinType" in _ ? _.pinType : y(ve, "pinType") || be && "fixed"),
                ye = [_.onEnter, _.onLeave, _.onEnterBack, _.onLeaveBack],
                xe = he && _.toggleActions.split(" "),
                u = "markers" in _ ? _.markers : Ct.markers,
                we = be ? 0 : parseFloat(db(ve)["border" + ge.p2 + Tt]) || 0,
                Se = this,
                _e = _.onRefreshInit && function() { return _.onRefreshInit(Se) },
                Te = function _getSizeFunc(e, t, r) { var n = r.d,
                        i = r.d2,
                        o = r.a; return (o = y(e, "getBoundingClientRect")) ? function() { return o()[n] } : function() { return (t ? je["inner" + i] : e["client" + i]) || 0 } }(ve, be, ge),
                ke = function _getOffsetsFunc(e, t) { return !t || ~Le.indexOf(e) ? Ca(e) : function() { return Bt } }(ve, be),
                Me = 0,
                Ae = 0,
                Ce = J(ve, ge); if (Se.media = lt, Se._dir = ge, se *= 45, Se.scroller = ve, Se.scroll = fe ? fe.time.bind(fe) : Ce, M = Ce(), Se.vars = _, T = T || _.animation, "refreshPriority" in _ && (ot = 1, -9999 === _.refreshPriority && (ut = Se)), c.tweenScroll = c.tweenScroll || { top: gc(ve, Ne), left: gc(ve, Re) }, Se.tweenTo = k = c.tweenScroll[ge.p], Se.scrubDuration = function(e) {
                    (i = Ja(e) && e) ? W ? W.duration(e) : W = We.to(T, { ease: "expo", totalProgress: "+=0.001", duration: i, paused: !0, onComplete: function onComplete() { return s && s(Se) } }): (W && W.progress(1).kill(), W = 0) }, T && (T.vars.lazy = !1, T._initted || !1 !== T.vars.immediateRender && !1 !== _.immediateRender && T.render(0, !0, !0), Se.animation = T.pause(), (T.scrollTrigger = Se).scrubDuration(re), S = 0, a = a || T.vars.id), Ot.push(Se), ce && (Ka(ce) && !ce.push || (ce = { snapTo: ce }), "scrollBehavior" in Ge.style && We.set(be ? [Ge, qe] : ve, { scrollBehavior: "auto" }), p = Ia(ce.snapTo) ? ce.snapTo : "labels" === ce.snapTo ? function _getClosestLabel(t) { return function(e) { return We.utils.snap(ib(t), e) } }(T) : "labelsDirectional" === ce.snapTo ? function _getLabelAtDirection(r) { return function(e, t) { return kb(ib(r))(e, t.direction) } }(T) : !1 !== ce.directional ? function(e, t) { return kb(ce.snapTo)(e, dt() - Ae < 500 ? 0 : t.direction) } : We.utils.snap(ce.snapTo), g = ce.duration || { min: .1, max: 2 }, g = Ka(g) ? et(g.min, g.max) : et(g, g), j = We.delayedCall(ce.delay || i / 2 || .1, function() { var e = Ce(),
                        t = dt() - Ae < 500,
                        r = k.tween; if (!(t || Math.abs(Se.getVelocity()) < 10) || r || nt || Me === e) Se.isActive && Me !== e && j.restart(!0);
                    else { var n = (e - C) / z,
                            i = T && !he ? T.totalProgress() : n,
                            o = t ? 0 : (i - V) / (dt() - tt) * 1e3 || 0,
                            a = We.utils.clamp(-n, 1 - n, ht(o / 2) * o / .185),
                            s = n + (!1 === ce.inertia ? 0 : a),
                            l = et(0, 1, p(s, Se)),
                            c = Math.round(C + l * z),
                            u = ce.onStart,
                            f = ce.onInterrupt,
                            d = ce.onComplete; if (e <= O && C <= e && c !== e) { if (r && !r._initted && r.data <= ht(c - e)) return;!1 === ce.inertia && (a = l - n), k(c, { duration: g(ht(.185 * Math.max(ht(s - i), ht(l - i)) / o / .05 || 0)), ease: ce.ease || "power3", data: ht(c - e), onInterrupt: function onInterrupt() { return j.restart(!0) && f && f(Se) }, onComplete: function onComplete() { Se.update(), Me = Ce(), S = V = T && !he ? T.totalProgress() : Se.progress, h && h(Se), d && d(Se) } }, e, a * z, c - e - a * z), u && u(Se, k.tween) } } }).pause()), a && (Pt[a] = Se), o = (o = (ne = Se.trigger = I(ne || ie)) && ne._gsap && ne._gsap.stRevert) && o(Se), ie = !0 === ie ? ne : I(ie), Ha($) && ($ = { targets: ne, className: $ }), ie && (!1 === oe || oe === _t || (oe = !(!oe && "flex" === db(ie.parentNode).display) && St), Se.pin = ie, !1 !== _.force3D && We.set(ie, { force3D: !0 }), (n = We.core.getCache(ie)).spacer ? Y = n.pinState : (l && ((l = I(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = ac(l))), n.spacer = L = l || Je.createElement("div"), L.classList.add("pin-spacer"), a && L.classList.add("pin-spacer-" + a), n.pinState = Y = ac(ie)), Se.spacer = L = n.spacer, r = db(ie), m = r[oe + ge.os2], H = We.getProperty(ie), b = We.quickSetter(ie, ge.a, kt), Zb(ie, L, r), F = ac(ie)), u) { e = Ka(u) ? fb(u, At) : At, B = ub("scroller-start", a, ve, ge, e, 0), D = ub("scroller-end", a, ve, ge, e, 0, B), t = B["offset" + ge.op.d2]; var f = I(y(ve, "content") || ve);
                P = this.markerStart = ub("start", a, f, ge, e, t, 0, fe), E = this.markerEnd = ub("end", a, f, ge, e, t, 0, fe), fe && (K = We.quickSetter([P, E], ge.a, kt)), me || Le.length && !0 === y(ve, "fixedMarkers") || (function _makePositionable(e) { var t = db(e).position;
                    e.style.position = "absolute" === t || "fixed" === t ? t : "relative" }(be ? Ge : ve), We.set([B, D], { force3D: !0 }), x = We.quickSetter(B, ge.a, kt), w = We.quickSetter(D, ge.a, kt)) } if (fe) { var d = fe.vars.onUpdate,
                    v = fe.vars.onUpdateParams;
                fe.eventCallback("onUpdate", function() { Se.update(0, 0, 1), d && d.apply(v || []) }) }
            Se.previous = function() { return Ot[Ot.indexOf(Se) - 1] }, Se.next = function() { return Ot[Ot.indexOf(Se) + 1] }, Se.revert = function(e) { var t = !1 !== e || !Se.enabled,
                    r = rt;
                t !== Se.isReverted && (t && (!Se.scroll.rec && rt && ct && (Se.scroll.rec = Ce()), q = Math.max(Ce(), Se.scroll.rec || 0), Q = Se.progress, G = T && T.progress()), P && [P, E, B, D].forEach(function(e) { return e.style.display = t ? "none" : "block" }), t && (rt = 1), Se.update(t), rt = r, ie && (t ? function _swapPinOut(e, t, r) { It(r); var n = e._gsap; if (n.spacerIsNative) It(n.spacerState);
                    else if (e.parentNode === t) { var i = t.parentNode;
                        i && (i.insertBefore(e, t), i.removeChild(t)) } }(ie, L, Y) : ue && Se.isActive || Zb(ie, L, db(ie), U)), Se.isReverted = t) }, Se.refresh = function(e, t) { if (!rt && Se.enabled || t)
                    if (ie && e && pt) nb(ScrollTrigger, "scrollEnd", Jb);
                    else {!ct && _e && _e(Se), rt = 1, Ae = dt(), k.tween && (k.tween.kill(), k.tween = 0), W && W.pause(), ae && T && T.time(-.01, !0).invalidate(), Se.isReverted || Se.revert(); for (var r, n, i, o, a, s, l, c, u, f, d = Te(), p = ke(), g = fe ? fe.duration() : Fa(ve, ge), h = 0, v = 0, b = _.end, m = _.endTrigger || ne, y = _.start || (0 !== _.start && ne ? ie ? "0 0" : "0 100%" : 0), x = Se.pinnedContainer = _.pinnedContainer && I(_.pinnedContainer), w = ne && Math.max(0, Ot.indexOf(Se)) || 0, S = w; S--;)(s = Ot[S]).end || s.refresh(0, 1) || (rt = 1), !(l = s.pin) || l !== ne && l !== ie || s.isReverted || ((f = f || []).unshift(s), s.revert()), s !== Ot[S] && (w--, S--); for (Ia(y) && (y = y(Se)), C = dc(y, ne, d, ge, Ce(), P, B, Se, p, we, me, g, fe) || (ie ? -.001 : 0), Ia(b) && (b = b(Se)), Ha(b) && !b.indexOf("+=") && (~b.indexOf(" ") ? b = (Ha(y) ? y.split(" ")[0] : "") + b : (h = tb(b.substr(2), d), b = Ha(y) ? y : C + h, m = ne)), O = Math.max(C, dc(b || (m ? "100% 0" : g), m, d, ge, Ce() + h, E, D, Se, p, we, me, g, fe)) || -.001, z = O - C || (C -= .01) && .001, h = 0, S = w; S--;)(l = (s = Ot[S]).pin) && s.start - s._pinPush < C && !fe && 0 < s.end && (r = s.end - s.start, l !== ne && l !== x || Ja(y) || (h += r * (1 - s.progress)), l === ie && (v += r)); if (C += h, O += h, Se._pinPush = v, P && h && ((r = {})[ge.a] = "+=" + h, x && (r[ge.p] = "-=" + Ce()), We.set([P, E], r)), ie) r = db(ie), o = ge === Ne, i = Ce(), R = parseFloat(H(ge.a)) + v, !g && 1 < O && ((be ? Ge : ve).style["overflow-" + ge.a] = "scroll"), Zb(ie, L, r), F = ac(ie), n = Mt(ie, !0), c = me && J(ve, o ? Re : Ne)(), oe && ((U = [oe + ge.os2, z + v + kt]).t = L, (S = oe === St ? hb(ie, ge) + z + v : 0) && U.push(ge.d, S + kt), It(U), me && Ce(q)), me && ((a = { top: n.top + (o ? i - C : c) + kt, left: n.left + (o ? c : i - C) + kt, boxSizing: "border-box", position: "fixed" })[vt] = a.maxWidth = Math.ceil(n.width) + kt, a[bt] = a.maxHeight = Math.ceil(n.height) + kt, a[_t] = a[_t + xt] = a[_t + mt] = a[_t + wt] = a[_t + yt] = "0", a[St] = r[St], a[St + xt] = r[St + xt], a[St + mt] = r[St + mt], a[St + wt] = r[St + wt], a[St + yt] = r[St + yt], X = function _copyState(e, t, r) { for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]); return i.t = e.t, i }(Y, a, ue)), T ? (u = T._initted, at(1), T.render(T.duration(), !0, !0), N = H(ge.a) - R + z + v, z !== N && me && X.splice(X.length - 2, 2), T.render(0, !0, !0), u || T.invalidate(), at(0)) : N = z;
                        else if (ne && Ce() && !fe)
                            for (n = ne.parentNode; n && n !== Ge;) n._pinOffset && (C -= n._pinOffset, O -= n._pinOffset), n = n.parentNode;
                        f && f.forEach(function(e) { return e.revert(!1) }), Se.start = C, Se.end = O, M = A = Ce(), fe || (M < q && Ce(q), Se.scroll.rec = 0), Se.revert(!1), j && (Me = -1, Se.isActive && Ce(C + z * Q), j.restart(!0)), rt = 0, T && he && (T._initted || G) && T.progress() !== G && T.progress(G, !0).render(T.time(), !0, !0), Q === Se.progress && !fe || (T && !he && T.totalProgress(Q, !0), Se.progress = Q, Se.update(0, 0, 1)), ie && oe && (L._pinOffset = Math.round(Se.progress * N)), te && te(Se) } }, Se.getVelocity = function() { return (Ce() - A) / (dt() - tt) * 1e3 || 0 }, Se.endAnimation = function() { Na(Se.callbackAnimation), T && (W ? W.progress(1) : T.paused() ? he || Na(T, Se.direction < 0, 1) : Na(T, T.reversed())) }, Se.labelToScroll = function(e) { return T && T.labels && (C || Se.refresh() || C) + T.labels[e] / T.duration() * z || 0 }, Se.getTrailing = function(t) { var e = Ot.indexOf(Se),
                    r = 0 < Se.direction ? Ot.slice(0, e).reverse() : Ot.slice(e + 1); return (Ha(t) ? r.filter(function(e) { return e.vars.preventOverlaps === t }) : r).filter(function(e) { return 0 < Se.direction ? e.end <= C : e.start >= O }) }, Se.update = function(e, t, r) { if (!fe || r || e) { var n, i, o, a, s, l, c, u = Se.scroll(),
                        f = e ? 0 : (u - C) / z,
                        d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                        p = Se.progress; if (t && (A = M, M = fe ? Ce() : u, ce && (V = S, S = T && !he ? T.totalProgress() : d)), se && !d && ie && !rt && !ft && pt && C < u + (u - A) / (dt() - tt) * se && (d = 1e-4), d !== p && Se.enabled) { if (a = (s = (n = Se.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p, Se.direction = p < d ? 1 : -1, Se.progress = d, a && !rt && (i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3, he && (o = !s && "none" !== xe[i + 1] && xe[i + 1] || xe[i], c = T && ("complete" === o || "reset" === o || o in T))), pe && (s || c) && (c || re || !T) && (Ia(pe) ? pe(Se) : Se.getTrailing(pe).forEach(function(e) { return e.endAnimation() })), he || (!W || rt || ft ? T && T.totalProgress(d, !!rt) : ((fe || ut && ut !== Se) && W.render(W._dp._time - W._start), W.resetTo ? W.resetTo("totalProgress", d, T._tTime / T._tDur) : (W.vars.totalProgress = d, W.invalidate().restart()))), ie)
                            if (e && oe && (L.style[oe + ge.os2] = m), me) { if (a) { if (l = !e && p < d && u < O + 1 && u + 1 >= Fa(ve, ge), ue)
                                        if (e || !n && !l) fc(ie, L);
                                        else { var g = Mt(ie, !0),
                                                h = u - C;
                                            fc(ie, Ge, g.top + (ge === Ne ? h : 0) + kt, g.left + (ge === Ne ? 0 : h) + kt) }
                                    It(n || l ? X : F), N !== z && d < 1 && n || b(R + (1 !== d || l ? 0 : N)) } } else b(ya(R + N * d));
                            !ce || k.tween || rt || ft || j.restart(!0), $ && (s || le && d && (d < 1 || !st)) && Ke($.targets).forEach(function(e) { return e.classList[n || le ? "add" : "remove"]($.className) }), !Z || he || e || Z(Se), a && !rt ? (he && (c && ("complete" === o ? T.pause().totalProgress(1) : "reset" === o ? T.restart(!0).pause() : "restart" === o ? T.restart(!0) : T[o]()), Z && Z(Se)), !s && st || (ee && s && Oa(Se, ee), ye[i] && Oa(Se, ye[i]), le && (1 === d ? Se.kill(!1, 1) : ye[i] = 0), s || ye[i = 1 === d ? 1 : 3] && Oa(Se, ye[i])), de && !n && Math.abs(Se.getVelocity()) > (Ja(de) ? de : 2500) && (Na(Se.callbackAnimation), W ? W.progress(1) : Na(T, !d, 1))) : he && Z && !rt && Z(Se) } if (w) { var v = fe ? u / fe.duration() * (fe._caScrollDist || 0) : u;
                        x(v + (B._isFlipped ? 1 : 0)), w(v) }
                    K && K(-u / fe.duration() * (fe._caScrollDist || 0)) } }, Se.enable = function(e, t) { Se.enabled || (Se.enabled = !0, nb(ve, "resize", Cb), nb(be ? Je : ve, "scroll", Ab), _e && nb(ScrollTrigger, "refreshInit", _e), !1 !== e && (Se.progress = Q = 0, M = A = Me = Ce()), !1 !== t && Se.refresh()) }, Se.getTween = function(e) { return e && k ? k.tween : W }, Se.setPositions = function(e, t) { ie && (R += e - C, N += t - e - z), Se.start = C = e, Se.end = O = t, z = t - e, Se.update() }, Se.disable = function(e, t) { if (Se.enabled && (!1 !== e && Se.revert(), Se.enabled = Se.isActive = !1, t || W && W.pause(), q = 0, n && (n.uncache = 1), _e && ob(ScrollTrigger, "refreshInit", _e), j && (j.pause(), k.tween && k.tween.kill() && (k.tween = 0)), !be)) { for (var r = Ot.length; r--;)
                        if (Ot[r].scroller === ve && Ot[r] !== Se) return;
                    ob(ve, "resize", Cb), ob(ve, "scroll", Ab) } }, Se.kill = function(e, t) { Se.disable(e, t), W && !t && W.kill(), a && delete Pt[a]; var r = Ot.indexOf(Se);
                0 <= r && Ot.splice(r, 1), r === it && 0 < Et && it--, r = 0, Ot.forEach(function(e) { return e.scroller === Se.scroller && (r = 1) }), r || (Se.scroll.rec = 0), T && (T.scrollTrigger = null, e && T.render(-1), t || T.kill()), P && [P, E, B, D].forEach(function(e) { return e.parentNode && e.parentNode.removeChild(e) }), ut === Se && (ut = 0), ie && (n && (n.uncache = 1), r = 0, Ot.forEach(function(e) { return e.pin === ie && r++ }), r || (n.spacer = 0)), _.onKill && _.onKill(Se) }, Se.enable(!1, !1), o && o(Se), T && T.add && !z ? We.delayedCall(.01, function() { return C || O || Se.refresh() }) && (z = .01) && (C = O = 0) : Se.refresh() } else this.update = this.refresh = this.kill = xa }, ScrollTrigger.register = function register(e) { return a || (We = e || Aa(), za() && window.document && ScrollTrigger.enable(), a = gt), a }, ScrollTrigger.defaults = function defaults(e) { if (e)
            for (var t in e) Ct[t] = e[t]; return Ct }, ScrollTrigger.disable = function disable(t, r) { gt = 0, Ot.forEach(function(e) { return e[r ? "kill" : "disable"](t) }), ob(je, "wheel", Ab), ob(Je, "scroll", Ab), clearInterval(c), ob(Je, "touchcancel", xa), ob(Ge, "touchstart", xa), mb(ob, Je, "pointerdown,touchstart,mousedown", va), mb(ob, Je, "pointerup,touchend,mouseup", wa), l.kill(), Ga(ob); for (var e = 0; e < T.length; e += 3) pb(ob, T[e], T[e + 1]), pb(ob, T[e], T[e + 2]) }, ScrollTrigger.enable = function enable() { if (je = window, Je = document, qe = Je.documentElement, Ge = Je.body, We && (Ke = We.utils.toArray, et = We.utils.clamp, at = We.core.suppressOverwrites || xa, We.core.globals("ScrollTrigger", ScrollTrigger), Ge)) { gt = 1, k.register(We), ScrollTrigger.isTouch = k.isTouch, C = k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), nb(je, "wheel", Ab), s = [je, Je, qe, Ge], ScrollTrigger.matchMedia({ "(orientation: portrait)": function orientationPortrait() { return Bb(), Bb } }), nb(Je, "scroll", Ab); var e, t, r = Ge.style,
                n = r.borderTopStyle; for (r.borderTopStyle = "solid", e = Mt(Ge), Ne.m = Math.round(e.top + Ne.sc()) || 0, Re.m = Math.round(e.left + Re.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), c = setInterval(zb, 250), We.delayedCall(.5, function() { return ft = 0 }), nb(Je, "touchcancel", xa), nb(Ge, "touchstart", xa), mb(nb, Je, "pointerdown,touchstart,mousedown", va), mb(nb, Je, "pointerup,touchend,mouseup", wa), u = We.utils.checkPrefix("transform"), re.push(u), a = dt(), l = We.delayedCall(.2, Z).pause(), p = [Je, "visibilitychange", function() { var e = je.innerWidth,
                        t = je.innerHeight;
                    Je.hidden ? (f = e, d = t) : f === e && d === t || Cb() }, Je, "DOMContentLoaded", Z, je, "load", Z, je, "resize", Cb], Ga(nb), Ot.forEach(function(e) { return e.enable(0, 1) }), t = 0; t < T.length; t += 3) pb(ob, T[t], T[t + 1]), pb(ob, T[t], T[t + 2]) } }, ScrollTrigger.config = function config(e) { "limitCallbacks" in e && (st = !!e.limitCallbacks); var t = e.syncInterval;
        t && clearInterval(c) || (c = t) && setInterval(zb, t), "ignoreMobileResize" in e && (v = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ga(ob) || Ga(nb, e.autoRefreshEvents || "none"), g = -1 === (e.autoRefreshEvents + "").indexOf("resize")) }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) { var r = I(e),
            n = T.indexOf(r),
            i = Ba(r);~n && T.splice(n, i ? 6 : 2), t && (i ? Le.unshift(je, t, Ge, t, qe, t) : Le.unshift(r, t)) }, ScrollTrigger.matchMedia = function matchMedia(e) { var t, r, n, i, o; for (r in e) n = U.indexOf(r), i = e[r], "all" === (lt = r) ? i() : (t = je.matchMedia(r)) && (t.matches && (o = i()), ~n ? (U[n + 1] = Ma(U[n + 1], i), U[n + 2] = Ma(U[n + 2], o)) : (n = U.length, U.push(r, i, o), t.addListener ? t.addListener(Ib) : t.addEventListener("change", Ib)), U[n + 3] = t.matches), lt = 0; return U }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) { e || (U.length = 0), 0 <= (e = U.indexOf(e)) && U.splice(e, 4) }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) { var n = (Ha(e) ? I(e) : e).getBoundingClientRect(),
            i = n[r ? vt : bt] * t || 0; return r ? 0 < n.right - i && n.left + i < je.innerWidth : 0 < n.bottom - i && n.top + i < je.innerHeight }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) { Ha(e) && (e = I(e)); var n = e.getBoundingClientRect(),
            i = n[r ? vt : bt],
            o = null == t ? i / 2 : t in Y ? Y[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0; return r ? (n.left + o) / je.innerWidth : (n.top + o) / je.innerHeight }, ScrollTrigger);

function ScrollTrigger(e, t) { a || ScrollTrigger.register(We) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t) }
oe.version = "3.10.4", oe.saveStyles = function(e) { return e ? Ke(e).forEach(function(e) { if (e && e.style) { var t = W.indexOf(e);
            0 <= t && W.splice(t, 5), W.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), We.core.getCache(e), lt) } }) : W }, oe.revert = function(e, t) { return Q(!e, t) }, oe.create = function(e, t) { return new oe(e, t) }, oe.refresh = function(e) { return e ? Cb() : (a || oe.register()) && Z(!0) }, oe.update = ee, oe.clearScrollMemory = Ob, oe.maxScroll = function(e, t) { return Fa(e, t ? Re : Ne) }, oe.getScrollFunc = function(e, t) { return J(I(e), t ? Re : Ne) }, oe.getById = function(e) { return Pt[e] }, oe.getAll = function() { return Ot.filter(function(e) { return "ScrollSmoother" !== e.vars.id }) }, oe.isScrolling = function() { return !!pt }, oe.snapDirectional = kb, oe.addEventListener = function(e, t) { var r = H[e] || (H[e] = []);~r.indexOf(t) || r.push(t) }, oe.removeEventListener = function(e, t) { var r = H[e],
        n = r && r.indexOf(t);
    0 <= n && r.splice(n, 1) }, oe.batch = function(e, t) {
    function to(e, t) { var r = [],
            n = [],
            i = We.delayedCall(o, function() { t(r, n), r = [], n = [] }).pause(); return function(e) { r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1) } } var r, n = [],
        i = {},
        o = t.interval || .016,
        a = t.batchMax || 1e9; for (r in t) i[r] = "on" === r.substr(0, 2) && Ia(t[r]) && "onRefreshInit" !== r ? to(0, t[r]) : t[r]; return Ia(a) && (a = a(), nb(oe, "refresh", function() { return a = t.batchMax() })), Ke(e).forEach(function(e) { var t = {}; for (r in i) t[r] = i[r];
        t.trigger = e, n.push(oe.create(t)) }), n };

function ic(e, t, r, n) { return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1 }

function jc(e, t) {!0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (k.isTouch ? " pinch-zoom" : "") : "none", e === qe && jc(Ge, t) }

function lc(e) { var t, r = e.event,
        n = e.target,
        i = e.axis,
        o = (r.changedTouches ? r.changedTouches[0] : r).target,
        a = o._gsap || We.core.getCache(o),
        s = dt(); if (!a._isScrollT || 2e3 < s - a._isScrollT) { for (; o && o.scrollHeight <= o.clientHeight;) o = o.parentNode;
        a._isScroll = o && !Ba(o) && o !== n && (se[(t = db(o)).overflowY] || se[t.overflowX]), a._isScrollT = s }!a._isScroll && "x" !== i || (r._gsapAllow = !0) }

function mc(e, t, r, n) { return k.create({ target: e, capture: !0, debounce: !1, lockAxis: !0, type: t, onWheel: n = n && lc, onPress: n, onDrag: n, onScroll: n, onEnable: function onEnable() { return r && nb(Je, k.eventTypes[0], ce, !1, !0) }, onDisable: function onDisable() { return ob(Je, k.eventTypes[0], ce, !0) } }) }

function qc(e) {
    function op() { return n = !1 }

    function rp() { o = Fa(d, Ne), _ = et(C ? 1 : 0, o), f && (S = et(0, Fa(d, Re))), a = G }

    function xp() { rp(), s.isActive() && s.vars.scrollY > o && (h() > o ? s.progress(1) && h(o) : s.resetTo("scrollY", o)) }
    Ka(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer"; var r, o, n, a, s, l, c, u, f = e.normalizeScrollX,
        t = e.momentum,
        i = e.allowNestedScroll,
        d = I(e.target) || qe,
        p = We.core.globals().ScrollSmoother,
        g = C && (e.content && I(e.content) || p && p.get() && p.get().content()),
        h = J(d, Ne),
        v = J(d, Re),
        b = 1,
        m = (k.isTouch && je.visualViewport ? je.visualViewport.scale * je.visualViewport.width : je.outerWidth) / je.innerWidth,
        y = 0,
        x = Ia(t) ? function() { return t(r) } : function() { return t || 2.8 },
        w = mc(d, e.type, !0, i),
        S = xa,
        _ = xa; return e.ignoreCheck = function(e) { return C && "touchmove" === e.type && function ignoreDrag() { if (n) { requestAnimationFrame(op); var e = ya(r.deltaY / 2),
                    t = _(h.v - e); return g && t !== h.v + h.offset && (h.offset = t - h.v, g.style.transform = "translateY(" + -h.offset + "px)", g._gsap && (g._gsap.y = -h.offset + "px"), h.cacheID = T.cache, ee()), !0 }
            g && (g.style.transform = "translateY(0px)", h.offset = h.cacheID = 0, g._gsap && (g._gsap.y = "0px")), n = !0 }() || 1.05 < b && "touchstart" !== e.type || r.isGesturing || e.touches && 1 < e.touches.length }, e.onPress = function() { var e = b;
        b = ya((je.visualViewport && je.visualViewport.scale || 1) / m), s.pause(), e !== b && jc(d, 1.01 < b || !f && "x"), n = !1, l = v(), c = h(), rp(), a = G }, e.onRelease = e.onGestureStart = function(e, t) { if (g && (g.style.transform = "translateY(0px)", h.offset = h.cacheID = 0, g._gsap && (g._gsap.y = "0px")), t) { T.cache++; var r, n, i = x();
            f && (n = (r = v()) + .05 * i * -e.velocityX / .227, i *= ic(v, r, n, Fa(d, Re)), s.vars.scrollX = S(n)), n = (r = h()) + .05 * i * -e.velocityY / .227, i *= ic(h, r, n, Fa(d, Ne)), s.vars.scrollY = _(n), s.invalidate().duration(i).play(.01), (C && s.vars.scrollY >= o || o - 1 <= r) && We.to({}, { onUpdate: xp, duration: i }) } else u.restart(!0) }, e.onWheel = function() { s._ts && s.pause(), 1e3 < dt() - y && (a = 0, y = dt()) }, e.onChange = function(e, t, r, n, i) { G !== a && rp(), t && f && v(S(n[2] === t ? l + (e.startX - e.x) : v() + t - n[1])), r && h(_(i[2] === r ? c + (e.startY - e.y) : h() + r - i[1])), ee() }, e.onEnable = function() { jc(d, !f && "x"), nb(je, "resize", xp), w.enable() }, e.onDisable = function() { jc(d, !0), ob(je, "resize", xp), w.kill() }, ((r = new k(e)).iOS = C) && !h() && h(1), u = r._dc, s = We.to(r, { ease: "power4", paused: !0, scrollX: f ? "+=0.1" : "+=0", scrollY: "+=0.1", onComplete: u.vars.onComplete }), r } var ae, se = { auto: 1, scroll: 1 },
    le = /(input|label|select|textarea)/i,
    ce = function _captureInputs(e) { var t = le.test(e.target.tagName);
        (t || ae) && (e._gsapAllow = !0, ae = t) };
oe.sort = function(e) { return Ot.sort(e || function(e, t) { return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0)) }) }, oe.observe = function(e) { return new k(e) }, oe.normalizeScroll = function(e) { if (void 0 === e) return h; if (!0 === e && h) return h.enable(); if (!1 === e) return h && h.kill(); var t = e instanceof k ? e : qc(e); return h && h.target === t.target && h.kill(), Ba(t.target) && (h = t), t }, oe.core = { _getVelocityProp: K, _inputObserver: mc, _scrollers: T, _proxies: Le, bridge: { ss: function ss() { pt || V("scrollStart"), pt = dt() }, ref: function ref() { return rt } } }, Aa() && We.registerPlugin(oe), e.ScrollTrigger = oe, e.default = oe; if (typeof(window) === "undefined" || window !== e) { Object.defineProperty(e, "__esModule", { value: !0 }) } else { delete e.default } });

//

gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});
