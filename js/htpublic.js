function xxx1() {
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        a()
    } else {
        if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", a, false)
        } else {
            if (document.attachEvent) {
                document.attachEvent("WeixinJSBridgeReady", a);
                document.attachEvent("onWeixinJSBridgeReady", a)
            }
        }
    }
    function a() {
        WeixinJSBridge.invoke("setFontSizeCallback", {
            fontSize: 0
        });
        WeixinJSBridge.on("menu:setfont", function() {
            WeixinJSBridge.invoke("setFontSizeCallback", {
                fontSize: 0
            })
        })
    }
}
var docSize;
function xxx2(a, i) {
    var b = a.documentElement
      , d = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      , c = d ? Math.min(i.devicePixelRatio, 3) : 1
      , c = window.top === window.self ? c : 1
      , c = 1
      , h = 1 / c
      , g = "orientationchange"in window ? "orientationchange" : "resize";
    b.dataset.dpr = c;
    var e = a.createElement("meta");
    e.name = "viewport";
    e.content = "initial-scale=" + h + ",maximum-scale=" + h + ", minimum-scale=" + h;
    b.firstElementChild.appendChild(e);
    var f = function() {
        var j = b.clientWidth;
        if (j / c > 750) {
            j = 750 * c
        }
        b.style.fontSize = 100 * (j / 750) + "px";
        docSize = 100 * (j / 750)
    };
    f();
    if (!a.addEventListener) {
        return
    }
    i.addEventListener(g, f, false)
}
// )(document, window);
function addLoadEvent(a) {
    var b = window.onload;
    if (typeof window.onload != "function") {
        window.onload = a
    } else {
        window.onload = function() {
            b();
            a()
        }
    }
}
