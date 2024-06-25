import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        async
        referrerPolicy="no-referrer-when-downgrade"
      >
          {`(function() {
    var s = {
        ac: "GujD99Q6",
        vid: "YeZuLiYM",
        surl: "https://binkiesproductionweu.servicebus.windows.net/binkiesproductionp2weu/messages",
        sauth: "SharedAccessSignature sr=https%3a%2f%2fbinkiesproductionweu.servicebus.windows.net%2fbinkiesproductionp2weu%2fmessages&sig=5LtnIlP0A8B8hT5mIezVZJlDYB%2fsnQ64JxWENn9d68Q%3d&se=1719331106&skn=Send"
    };
    var errors = new Set();
    window.addEventListener("error", function(e) {
        var isPlayerError = e.filename.startsWith("https://az589851.vo.msecnd.net/players");
        var isIntegrationError = e.filename.startsWith("https://az589851.vo.msecnd.net/integrations") || e.filename.startsWith("https://embed.binkies3d.com");
        if (isPlayerError || isIntegrationError) {
            try {
                var errorMessage = e.error && e.error.stack ? e.error.stack : e.message + ":" + e.filename + ": " + e.lineno + ":" + e.colno;
                if (errors.has(errorMessage))
                    return;
                errors.add(errorMessage);
                var message = {
                    accessKey: s.ac,
                    messageType: "Error",
                    viewId: s.vid,
                    source: isPlayerError ? "player" : "integration",
                    href: window.location.href,
                    message: errorMessage,
                    userAgent: navigator.userAgent
                }
                var req = new XMLHttpRequest();
                req.withCredentials = true;
                req.open("POST", s.surl, true);
                req.setRequestHeader("Content-type", "application/atom+xml;type=entry;charset=utf-8");
                req.setRequestHeader("Authorization", s.sauth);
                req.send(JSON.stringify(message));
            } catch (e) {}
        }
    });
}
)();
(function() {
    var regex = /biv=([0-9a-zA-Z]*)/;
    var match = regex.exec(location.search);

    if (match != null) {
        var script = document.createElement('script');
        script.crossOrigin = "anonymous";
        script.async = true;
        script.src = 'https://embed.binkies3d.com/integrations/GujD99Q6/krpxeb72/' + match[1] + '/script.js';
        document.head.appendChild(script);
    } else {
        !function(t) {
            "use strict";
            var n = function() {};
            n.main = function() {
                var t = {
                    IntegrationUrlPath: "https://az589851.vo.msecnd.net/integrations/GujD99Q6/krpxeb72/f370323",
                    IntegrationId: "krpxeb72",
                    IntegrationVersion: "f370323",
                    AccessKey: "GujD99Q6",
                    IsLive: !0
                };
                window.BinkiesSettings = {
                    ViewSettings: e.ViewSettings,
                    IntegrationSettings: t,
                    Supports3D: e.Supports3D
                };
                var n = window.document.createElement("script");
                n.crossOrigin = "anonymous";
                n.async = true;
                n.src = t.IntegrationUrlPath + "/integration_static.js",
                window.document.head.appendChild(n)
            }
            ;
            var e = function() {};
            e.Supports3D = function(t, n) {
                null == n && (n = !1),
                t(!0, "", null)
            }
            ,
            e.ViewSettings = {
                ViewId: "YeZuLiYM",
                StatsUrl: "https://binkiesproductionweu.servicebus.windows.net/binkiesproductionp2weu/messages",
                StatsToken: "SharedAccessSignature sr=https%3a%2f%2fbinkiesproductionweu.servicebus.windows.net%2fbinkiesproductionp2weu%2fmessages&sig=5LtnIlP0A8B8hT5mIezVZJlDYB%2fsnQ64JxWENn9d68Q%3d&se=1719331106&skn=Send",
                LightmapPath: "https://az589851.vo.msecnd.net/lightmaps/js/photo-studio-with-umbrella-1",
                PlayerPath: "https://az589851.vo.msecnd.net/players/v93",
                HotspotPath: "https://hotspot3d.blob.core.windows.net/players/v3",
                BrowserSupportsBrotli: true,
                BrowserSupportsGzip: true
            },
            n.main()
        }();
    }
}
)()
`}
      </Script>
    </html>
  );
}
