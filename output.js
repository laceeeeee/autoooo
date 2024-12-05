//Thu Dec 05 2024 02:33:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
import { connect } from "cloudflare:sockets";
let a0_0x1ae8a2 = "86c50e3a-5b87-49dd-bd20-03c7f2735e40";
const a0_0x15a644 = ["ts.hpc.tw"],
  a0_0x1716a7 = [""];
let a0_0x1d3b88 = "www.visa.com.sg",
  a0_0x1acc37 = "www.visa.com",
  a0_0x138aea = "cis.visa.com",
  a0_0x4bae21 = "africa.visa.com",
  a0_0x50715c = "www.visa.com.sg",
  a0_0x4b44af = "www.visaeurope.at",
  a0_0x37e431 = "www.visa.com.mt",
  a0_0xcf212e = "qa.visamiddleeast.com",
  a0_0x548e30 = "usa.visa.com",
  a0_0x3fccdb = "myanmar.visa.com",
  a0_0x2fa391 = "www.visa.com.tw",
  a0_0x33619e = "www.visaeurope.ch",
  a0_0x257853 = "www.visa.com.br",
  a0_0x27fc5d = "www.visasoutheasteurope.com",
  a0_0xb64aaf = "80",
  a0_0xcbf9cd = "8080",
  a0_0xa26a8c = "8880",
  a0_0xc04563 = "2052",
  a0_0x388fa3 = "2082",
  a0_0x1abd16 = "2086",
  a0_0x28068d = "2095",
  a0_0xd1042f = "443",
  a0_0x4d29f2 = "8443",
  a0_0x110c99 = "2053",
  a0_0x1e0c3c = "2083",
  a0_0x2ff406 = "2087",
  a0_0x315d89 = "2096",
  a0_0x35a0aa = a0_0x15a644[Math["floor"](Math["random"]() * a0_0x15a644["length"])],
  a0_0x26728e = a0_0x35a0aa["includes"](":") ? a0_0x35a0aa["split"](":")[1] : "443";
if (!a0_0x3b3ab2(a0_0x1ae8a2)) throw new Error("uuid is not valid");
export default {
  async "fetch"(_0x58ca73, _0x382128, _0x4aeeca) {
    try {
      const {
        proxyip: _0x3849d3
      } = _0x382128;
      a0_0x1ae8a2 = _0x382128["uuid"] || a0_0x1ae8a2;
      if (_0x3849d3) {
        if (_0x3849d3["includes"]("]:")) {
          let _0x21ca78 = _0x3849d3["lastIndexOf"](":");
          a0_0x26728e = _0x3849d3["slice"](_0x21ca78 + 1), a0_0x35a0aa = _0x3849d3["slice"](0, _0x21ca78);
        } else !_0x3849d3["includes"]("]:") && !_0x3849d3["includes"]("]") ? [a0_0x35a0aa, a0_0x26728e = "443"] = _0x3849d3["split"](":") : (a0_0x26728e = "443", a0_0x35a0aa = _0x3849d3);
      } else {
        if (a0_0x35a0aa["includes"]("]:")) {
          let _0x526624 = a0_0x35a0aa["lastIndexOf"](":");
          a0_0x26728e = a0_0x35a0aa["slice"](_0x526624 + 1), a0_0x35a0aa = a0_0x35a0aa["slice"](0, _0x526624);
        } else !a0_0x35a0aa["includes"]("]:") && !a0_0x35a0aa["includes"]("]") ? [a0_0x35a0aa, a0_0x26728e = "443"] = a0_0x35a0aa["split"](":") : a0_0x26728e = "443";
      }
      console["log"]("ProxyIP:", a0_0x35a0aa), console["log"]("ProxyPort:", a0_0x26728e), a0_0x1d3b88 = _0x382128["cdnip"] || a0_0x1d3b88, a0_0x1acc37 = _0x382128["ip1"] || a0_0x1acc37, a0_0x138aea = _0x382128["ip2"] || a0_0x138aea, a0_0x4bae21 = _0x382128["ip3"] || a0_0x4bae21, a0_0x50715c = _0x382128["ip4"] || a0_0x50715c, a0_0x4b44af = _0x382128["ip5"] || a0_0x4b44af, a0_0x37e431 = _0x382128["ip6"] || a0_0x37e431, a0_0xcf212e = _0x382128["ip7"] || a0_0xcf212e, a0_0x548e30 = _0x382128["ip8"] || a0_0x548e30, a0_0x3fccdb = _0x382128["ip9"] || a0_0x3fccdb, a0_0x2fa391 = _0x382128["ip10"] || a0_0x2fa391, a0_0x33619e = _0x382128["ip11"] || a0_0x33619e, a0_0x257853 = _0x382128["ip12"] || a0_0x257853, a0_0x27fc5d = _0x382128["ip13"] || a0_0x27fc5d, a0_0xb64aaf = _0x382128["pt1"] || a0_0xb64aaf, a0_0xcbf9cd = _0x382128["pt2"] || a0_0xcbf9cd, a0_0xa26a8c = _0x382128["pt3"] || a0_0xa26a8c, a0_0xc04563 = _0x382128["pt4"] || a0_0xc04563, a0_0x388fa3 = _0x382128["pt5"] || a0_0x388fa3, a0_0x1abd16 = _0x382128["pt6"] || a0_0x1abd16, a0_0x28068d = _0x382128["pt7"] || a0_0x28068d, a0_0xd1042f = _0x382128["pt8"] || a0_0xd1042f, a0_0x4d29f2 = _0x382128["pt9"] || a0_0x4d29f2, a0_0x110c99 = _0x382128["pt10"] || a0_0x110c99, a0_0x1e0c3c = _0x382128["pt11"] || a0_0x1e0c3c, a0_0x2ff406 = _0x382128["pt12"] || a0_0x2ff406, a0_0x315d89 = _0x382128["pt13"] || a0_0x315d89;
      const _0x5077c6 = _0x58ca73["headers"]["get"]("Upgrade"),
        _0x5a118d = new URL(_0x58ca73["url"]);
      if (!_0x5077c6 || _0x5077c6 !== "websocket") {
        const _0x2aea23 = new URL(_0x58ca73["url"]);
        switch (_0x2aea23["pathname"]) {
          case "/" + a0_0x1ae8a2:
            {
              const _0xc8be18 = a0_0x35102c(a0_0x1ae8a2, _0x58ca73["headers"]["get"]("Host")),
                _0x3fee07 = {};
              _0x3fee07["Content-Type"] = "text/html;charset=utf-8";
              const _0x3bd57a = {};
              return _0x3bd57a["status"] = 200, _0x3bd57a["headers"] = _0x3fee07, new Response("" + _0xc8be18, _0x3bd57a);
            }
          case "/" + a0_0x1ae8a2 + "/ty":
            {
              const _0x3aed7d = a0_0x20954a(a0_0x1ae8a2, _0x58ca73["headers"]["get"]("Host")),
                _0x1ad19a = {};
              _0x1ad19a["Content-Type"] = "text/plain;charset=utf-8";
              const _0xa10a3b = {};
              return _0xa10a3b["status"] = 200, _0xa10a3b["headers"] = _0x1ad19a, new Response("" + _0x3aed7d, _0xa10a3b);
            }
          case "/" + a0_0x1ae8a2 + "/cl":
            {
              const _0x1d58c2 = a0_0x401c8b(a0_0x1ae8a2, _0x58ca73["headers"]["get"]("Host")),
                _0x2107d1 = {};
              _0x2107d1["Content-Type"] = "text/plain;charset=utf-8";
              const _0x50e0af = {};
              return _0x50e0af["status"] = 200, _0x50e0af["headers"] = _0x2107d1, new Response("" + _0x1d58c2, _0x50e0af);
            }
          case "/" + a0_0x1ae8a2 + "/sb":
            {
              const _0x2f8de1 = a0_0x34a7ab(a0_0x1ae8a2, _0x58ca73["headers"]["get"]("Host")),
                _0x37079d = {};
              _0x37079d["Content-Type"] = "application/json;charset=utf-8";
              const _0x28cabf = {};
              return _0x28cabf["status"] = 200, _0x28cabf["headers"] = _0x37079d, new Response("" + _0x2f8de1, _0x28cabf);
            }
          case "/" + a0_0x1ae8a2 + "/pty":
            {
              const _0x3ae2aa = a0_0x1c941e(a0_0x1ae8a2, _0x58ca73["headers"]["get"]("Host")),
                _0x40be83 = {};
              _0x40be83["Content-Type"] = "text/plain;charset=utf-8";
              const _0x50d697 = {};
              return _0x50d697["status"] = 200, _0x50d697["headers"] = _0x40be83, new Response("" + _0x3ae2aa, _0x50d697);
            }
          case "/" + a0_0x1ae8a2 + "/pcl":
            {
              const _0x50f2ae = a0_0x31622f(a0_0x1ae8a2, _0x58ca73["headers"]["get"]("Host")),
                _0x2917c9 = {};
              _0x2917c9["Content-Type"] = "text/plain;charset=utf-8";
              const _0x6ad02a = {};
              return _0x6ad02a["status"] = 200, _0x6ad02a["headers"] = _0x2917c9, new Response("" + _0x50f2ae, _0x6ad02a);
            }
          case "/" + a0_0x1ae8a2 + "/psb":
            {
              const _0xba0974 = a0_0x5d96a0(a0_0x1ae8a2, _0x58ca73["headers"]["get"]("Host")),
                _0x47a2f0 = {};
              _0x47a2f0["Content-Type"] = "application/json;charset=utf-8";
              const _0x517e3e = {};
              return _0x517e3e["status"] = 200, _0x517e3e["headers"] = _0x47a2f0, new Response("" + _0xba0974, _0x517e3e);
            }
          default:
            if (a0_0x1716a7["includes"]("")) {
              const _0x21e46c = {};
              _0x21e46c["Content-Type"] = "application/json;charset=utf-8";
              const _0x5ac4c7 = {};
              return _0x5ac4c7["status"] = 200, _0x5ac4c7["headers"] = _0x21e46c, new Response(JSON["stringify"](_0x58ca73["cf"], null, 4), _0x5ac4c7);
            }
            const _0x2a7a54 = a0_0x1716a7[Math["floor"](Math["random"]() * a0_0x1716a7["length"])],
              _0x5539ac = new Headers(_0x58ca73["headers"]);
            _0x5539ac["set"]("cf-connecting-ip", "1.2.3.4"), _0x5539ac["set"]("x-forwarded-for", "1.2.3.4"), _0x5539ac["set"]("x-real-ip", "1.2.3.4"), _0x5539ac["set"]("referer", "https://www.google.com/search?q=edtunnel");
            const _0x4417c8 = "https://" + _0x2a7a54 + _0x2aea23["pathname"] + _0x2aea23["search"],
              _0x2c7367 = {};
            _0x2c7367["method"] = _0x58ca73["method"], _0x2c7367["headers"] = _0x5539ac, _0x2c7367["body"] = _0x58ca73["body"], _0x2c7367["redirect"] = "manual";
            let _0x54673e = new Request(_0x4417c8, _0x2c7367);
            const _0x5945b0 = {};
            _0x5945b0["redirect"] = "manual";
            const _0x49fc3f = await fetch(_0x54673e, _0x5945b0);
            if ([301, 302]["includes"](_0x49fc3f["status"])) {
              const _0x117b79 = {};
              return _0x117b79["status"] = 403, _0x117b79["statusText"] = "Forbidden", new Response("Redirects to " + _0x2a7a54 + " are not allowed.", _0x117b79);
            }
            return _0x49fc3f;
        }
      } else {
        if (_0x5a118d["pathname"]["includes"]("/pyip=")) {
          const _0x3f36b8 = _0x5a118d["pathname"]["split"]("=")[1];
          if (a0_0x31c810(_0x3f36b8)) {
            a0_0x35a0aa = _0x3f36b8;
            if (a0_0x35a0aa["includes"]("]:")) {
              let _0x27d90d = a0_0x35a0aa["lastIndexOf"](":");
              a0_0x26728e = a0_0x35a0aa["slice"](_0x27d90d + 1), a0_0x35a0aa = a0_0x35a0aa["slice"](0, _0x27d90d);
            } else !a0_0x35a0aa["includes"]("]:") && !a0_0x35a0aa["includes"]("]") ? [a0_0x35a0aa, a0_0x26728e = "443"] = a0_0x35a0aa["split"](":") : a0_0x26728e = "443";
          }
        }
        return await a0_0x59fc2c(_0x58ca73);
      }
    } catch (_0x4c840a) {
      let _0x26cecc = _0x4c840a;
      return new Response(_0x26cecc["toString"]());
    }
  }
};
function a0_0x31c810(_0x56feda) {
  var _0xef8b9a = /^[\s\S]*$/;
  return _0xef8b9a["test"](_0x56feda);
}
async function a0_0x59fc2c(_0x14b21f) {
  const _0x51bbcc = new WebSocketPair(),
    [_0x12d5f1, _0x500d9f] = Object["values"](_0x51bbcc);
  _0x500d9f["accept"]();
  let _0x147760 = "",
    _0x57281e = "";
  const _0x37f898 = (_0x3bd126, _0x42a6d4) => {
      console["log"]("[" + _0x147760 + ":" + _0x57281e + "] " + _0x3bd126, _0x42a6d4 || "");
    },
    _0x36d09d = _0x14b21f["headers"]["get"]("sec-websocket-protocol") || "",
    _0x5ba39d = a0_0x5aa3c3(_0x500d9f, _0x36d09d, _0x37f898),
    _0x5ee3ce = {};
  _0x5ee3ce["value"] = null;
  let _0x5400b = _0x5ee3ce,
    _0x3d2597 = null,
    _0x2cf688 = ![];
  _0x5ba39d["pipeTo"](new WritableStream({
    async "write"(_0x32f734, _0x1246e8) {
      if (_0x2cf688 && _0x3d2597) return _0x3d2597(_0x32f734);
      if (_0x5400b["value"]) {
        const _0x398d34 = _0x5400b["value"]["writable"]["getWriter"]();
        await _0x398d34["write"](_0x32f734), _0x398d34["releaseLock"]();
        return;
      }
      const {
        hasError: _0x5163c8,
        message: _0x53732e,
        portRemote = 443,
        addressRemote = "",
        rawDataIndex: _0x29a07f,
        vlessVersion = new Uint8Array([0, 0]),
        isUDP: _0x3301e0
      } = await a0_0x5ace75(_0x32f734, a0_0x1ae8a2);
      _0x147760 = addressRemote, _0x57281e = portRemote + "--" + Math["random"]() + " " + (_0x3301e0 ? "udp " : "tcp ") + " ";
      if (_0x5163c8) {
        throw new Error(_0x53732e);
        return;
      }
      if (_0x3301e0) {
        if (portRemote === 53) _0x2cf688 = !![];else {
          throw new Error("UDP proxy only enable for DNS which is port 53");
          return;
        }
      }
      const _0xd6f1e3 = new Uint8Array([vlessVersion[0], 0]),
        _0x4cc2bf = _0x32f734["slice"](_0x29a07f);
      if (_0x2cf688) {
        const {
          write: _0x3a723b
        } = await a0_0x426b6a(_0x500d9f, _0xd6f1e3, _0x37f898);
        _0x3d2597 = _0x3a723b, _0x3d2597(_0x4cc2bf);
        return;
      }
      a0_0x4f6505(_0x5400b, addressRemote, portRemote, _0x4cc2bf, _0x500d9f, _0xd6f1e3, _0x37f898);
    },
    "close"() {
      _0x37f898("readableWebSocketStream is close");
    },
    "abort"(_0x589eda) {
      _0x37f898("readableWebSocketStream is abort", JSON["stringify"](_0x589eda));
    }
  }))["catch"](_0x32940d => {
    _0x37f898("readableWebSocketStream pipeTo error", _0x32940d);
  });
  const _0x4152e6 = {};
  return _0x4152e6["status"] = 101, _0x4152e6["webSocket"] = _0x12d5f1, new Response(null, _0x4152e6);
}
async function a0_0x285ba3(_0xe11642) {
  try {
    const _0xa8bc41 = await getApiResponse();
    if (!_0xa8bc41) return ![];
    const _0x472663 = _0xa8bc41["users"]["some"](_0x365c0e => _0x365c0e["uuid"] === _0xe11642);
    return _0x472663;
  } catch (_0x365a04) {
    return console["error"]("Error:", _0x365a04), ![];
  }
}
async function a0_0x4f6505(_0x430766, _0x594aa6, _0x337704, _0x41ec1c, _0x56223d, _0x2a863b, _0x3d00bc) {
  async function _0x499c82(_0x18b979, _0x3b21dd) {
    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/["test"](_0x18b979)) _0x18b979 = "" + atob("d3d3Lg==") + _0x18b979 + atob("LnNzbGlwLmlv");
    const _0x2282d1 = {};
    _0x2282d1["hostname"] = _0x18b979, _0x2282d1["port"] = _0x3b21dd;
    const _0x3af406 = connect(_0x2282d1);
    _0x430766["value"] = _0x3af406, _0x3d00bc("connected to " + _0x18b979 + ":" + _0x3b21dd);
    const _0x10a843 = _0x3af406["writable"]["getWriter"]();
    return await _0x10a843["write"](_0x41ec1c), _0x10a843["releaseLock"](), _0x3af406;
  }
  async function _0x2f5a90() {
    const _0x2f162a = await _0x499c82(a0_0x35a0aa || _0x594aa6, a0_0x26728e || _0x337704);
    _0x2f162a["closed"]["catch"](_0x43f57d => {
      console["log"]("retry tcpSocket closed error", _0x43f57d);
    })["finally"](() => {
      a0_0x111d63(_0x56223d);
    }), a0_0x3bdf1a(_0x2f162a, _0x56223d, _0x2a863b, null, _0x3d00bc);
  }
  const _0x1b5b35 = await _0x499c82(_0x594aa6, _0x337704);
  a0_0x3bdf1a(_0x1b5b35, _0x56223d, _0x2a863b, _0x2f5a90, _0x3d00bc);
}
function a0_0x5aa3c3(_0x4d8259, _0x4eac8a, _0x17759e) {
  let _0x22486b = ![];
  const _0x147299 = new ReadableStream({
    "start"(_0x4408be) {
      _0x4d8259["addEventListener"]("message", _0x33d0c1 => {
        if (_0x22486b) return;
        const _0x4dd6d = _0x33d0c1["data"];
        _0x4408be["enqueue"](_0x4dd6d);
      }), _0x4d8259["addEventListener"]("close", () => {
        a0_0x111d63(_0x4d8259);
        if (_0x22486b) return;
        _0x4408be["close"]();
      }), _0x4d8259["addEventListener"]("error", _0x1dd260 => {
        _0x17759e("webSocketServer has error"), _0x4408be["error"](_0x1dd260);
      });
      const {
        earlyData: _0x182a2a,
        error: _0x18f0fa
      } = a0_0x396579(_0x4eac8a);
      if (_0x18f0fa) _0x4408be["error"](_0x18f0fa);else _0x182a2a && _0x4408be["enqueue"](_0x182a2a);
    },
    "pull"(_0x36b226) {},
    "cancel"(_0x52ca32) {
      if (_0x22486b) return;
      _0x17759e("ReadableStream was canceled, due to " + _0x52ca32), _0x22486b = !![], a0_0x111d63(_0x4d8259);
    }
  });
  return _0x147299;
}
async function a0_0x5ace75(_0x37f7d2, _0x535395) {
  if (_0x37f7d2["byteLength"] < 24) {
    const _0x55f839 = {};
    return _0x55f839["hasError"] = !![], _0x55f839["message"] = "invalid data", _0x55f839;
  }
  const _0x789841 = new Uint8Array(_0x37f7d2["slice"](0, 1));
  let _0x357ec0 = ![],
    _0x21c6f8 = ![];
  const _0x2ff381 = new Uint8Array(_0x37f7d2["slice"](1, 17)),
    _0x56140e = a0_0x2c5169(_0x2ff381),
    _0x774ded = _0x535395["includes"](",") ? _0x535395["split"](",") : [_0x535395],
    _0x2de535 = await a0_0x285ba3(_0x56140e);
  _0x357ec0 = _0x774ded["some"](_0x2e6dda => _0x2de535 || _0x56140e === _0x2e6dda["trim"]()), console["log"]("checkUuidInApi: " + (await a0_0x285ba3(_0x56140e)) + ", userID: " + _0x56140e);
  if (!_0x357ec0) {
    const _0x55917a = {};
    return _0x55917a["hasError"] = !![], _0x55917a["message"] = "invalid user", _0x55917a;
  }
  const _0x3ffaf3 = new Uint8Array(_0x37f7d2["slice"](17, 18))[0],
    _0x30ed44 = new Uint8Array(_0x37f7d2["slice"](18 + _0x3ffaf3, 18 + _0x3ffaf3 + 1))[0];
  if (_0x30ed44 === 1) {} else {
    if (_0x30ed44 === 2) _0x21c6f8 = !![];else {
      const _0x3b2a2a = {};
      return _0x3b2a2a["hasError"] = !![], _0x3b2a2a["message"] = "command " + _0x30ed44 + " is not support, command 01-tcp,02-udp,03-mux", _0x3b2a2a;
    }
  }
  const _0x5129c4 = 18 + _0x3ffaf3 + 1,
    _0x4d3284 = _0x37f7d2["slice"](_0x5129c4, _0x5129c4 + 2),
    _0x1b9cd1 = new DataView(_0x4d3284)["getUint16"](0);
  let _0x1511b2 = _0x5129c4 + 2;
  const _0x2d79d0 = new Uint8Array(_0x37f7d2["slice"](_0x1511b2, _0x1511b2 + 1)),
    _0x3cd9df = _0x2d79d0[0];
  let _0x579fa8 = 0,
    _0x27781d = _0x1511b2 + 1,
    _0x34167f = "";
  switch (_0x3cd9df) {
    case 1:
      _0x579fa8 = 4, _0x34167f = new Uint8Array(_0x37f7d2["slice"](_0x27781d, _0x27781d + _0x579fa8))["join"](".");
      break;
    case 2:
      _0x579fa8 = new Uint8Array(_0x37f7d2["slice"](_0x27781d, _0x27781d + 1))[0], _0x27781d += 1, _0x34167f = new TextDecoder()["decode"](_0x37f7d2["slice"](_0x27781d, _0x27781d + _0x579fa8));
      break;
    case 3:
      _0x579fa8 = 16;
      const _0x24e305 = new DataView(_0x37f7d2["slice"](_0x27781d, _0x27781d + _0x579fa8)),
        _0x176d2e = [];
      for (let _0x16fd66 = 0; _0x16fd66 < 8; _0x16fd66++) {
        _0x176d2e["push"](_0x24e305["getUint16"](_0x16fd66 * 2)["toString"](16));
      }
      _0x34167f = _0x176d2e["join"](":");
      break;
    default:
      const _0x3c64a3 = {};
      _0x3c64a3["hasError"] = !![], _0x3c64a3["message"] = "invild  addressType is " + _0x3cd9df;
      return _0x3c64a3;
  }
  if (!_0x34167f) {
    const _0x51b92c = {};
    return _0x51b92c["hasError"] = !![], _0x51b92c["message"] = "addressValue is empty, addressType is " + _0x3cd9df, _0x51b92c;
  }
  const _0x5c0dc4 = {};
  return _0x5c0dc4["hasError"] = ![], _0x5c0dc4["addressRemote"] = _0x34167f, _0x5c0dc4["addressType"] = _0x3cd9df, _0x5c0dc4["portRemote"] = _0x1b9cd1, _0x5c0dc4["rawDataIndex"] = _0x27781d + _0x579fa8, _0x5c0dc4["vlessVersion"] = _0x789841, _0x5c0dc4["isUDP"] = _0x21c6f8, _0x5c0dc4;
}
async function a0_0x3bdf1a(_0x5ae7b6, _0x2d6d52, _0x5ab8b6, _0x24be5b, _0x14a907) {
  let _0x9454c5 = 0,
    _0x41a36a = [],
    _0x5da55b = _0x5ab8b6,
    _0x246576 = ![];
  await _0x5ae7b6["readable"]["pipeTo"](new WritableStream({
    "start"() {},
    async "write"(_0x1bc584, _0x110dcf) {
      _0x246576 = !![], _0x2d6d52["readyState"] !== a0_0x43c52a && _0x110dcf["error"]("webSocket.readyState is not open, maybe close"), _0x5da55b ? (_0x2d6d52["send"](await new Blob([_0x5da55b, _0x1bc584])["arrayBuffer"]()), _0x5da55b = null) : _0x2d6d52["send"](_0x1bc584);
    },
    "close"() {
      _0x14a907("remoteConnection!.readable is close with hasIncomingData is " + _0x246576);
    },
    "abort"(_0x45fb7d) {
      console["error"]("remoteConnection!.readable abort", _0x45fb7d);
    }
  }))["catch"](_0x1480f3 => {
    console["error"]("remoteSocketToWS has exception ", _0x1480f3["stack"] || _0x1480f3), a0_0x111d63(_0x2d6d52);
  }), _0x246576 === ![] && _0x24be5b && (_0x14a907("retry"), _0x24be5b());
}
function a0_0x396579(_0x1cba22) {
  if (!_0x1cba22) {
    const _0xfc1e0f = {};
    return _0xfc1e0f["error"] = null, _0xfc1e0f;
  }
  try {
    _0x1cba22 = _0x1cba22["replace"](/-/g, "+")["replace"](/_/g, "/");
    const _0x29fca8 = atob(_0x1cba22),
      _0x16c566 = Uint8Array["from"](_0x29fca8, _0x3bff81 => _0x3bff81["charCodeAt"](0)),
      _0x2be1e1 = {};
    return _0x2be1e1["earlyData"] = _0x16c566["buffer"], _0x2be1e1["error"] = null, _0x2be1e1;
  } catch (_0x3206b6) {
    const _0x56bc79 = {};
    return _0x56bc79["error"] = _0x3206b6, _0x56bc79;
  }
}
function a0_0x3b3ab2(_0x4837a1) {
  const _0x3eeadf = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return _0x3eeadf["test"](_0x4837a1);
}
const a0_0x43c52a = 1,
  a0_0x2f2040 = 2;
function a0_0x111d63(_0x5b350e) {
  try {
    (_0x5b350e["readyState"] === a0_0x43c52a || _0x5b350e["readyState"] === a0_0x2f2040) && _0x5b350e["close"]();
  } catch (_0x57f006) {
    console["error"]("safeCloseWebSocket error", _0x57f006);
  }
}
const a0_0x4509b2 = [];
for (let a0_0x56aa48 = 0; a0_0x56aa48 < 256; ++a0_0x56aa48) {
  a0_0x4509b2["push"]((a0_0x56aa48 + 256)["toString"](16)["slice"](1));
}
function a0_0x39a656(_0x37daf0, _0x37adc1 = 0) {
  return (a0_0x4509b2[_0x37daf0[_0x37adc1 + 0]] + a0_0x4509b2[_0x37daf0[_0x37adc1 + 1]] + a0_0x4509b2[_0x37daf0[_0x37adc1 + 2]] + a0_0x4509b2[_0x37daf0[_0x37adc1 + 3]] + "-" + a0_0x4509b2[_0x37daf0[_0x37adc1 + 4]] + a0_0x4509b2[_0x37daf0[_0x37adc1 + 5]] + "-" + a0_0x4509b2[_0x37daf0[_0x37adc1 + 6]] + a0_0x4509b2[_0x37daf0[_0x37adc1 + 7]] + "-" + a0_0x4509b2[_0x37daf0[_0x37adc1 + 8]] + a0_0x4509b2[_0x37daf0[_0x37adc1 + 9]] + "-" + a0_0x4509b2[_0x37daf0[_0x37adc1 + 10]] + a0_0x4509b2[_0x37daf0[_0x37adc1 + 11]] + a0_0x4509b2[_0x37daf0[_0x37adc1 + 12]] + a0_0x4509b2[_0x37daf0[_0x37adc1 + 13]] + a0_0x4509b2[_0x37daf0[_0x37adc1 + 14]] + a0_0x4509b2[_0x37daf0[_0x37adc1 + 15]])["toLowerCase"]();
}
function a0_0x2c5169(_0x1cd458, _0x139bbc = 0) {
  const _0x20ca35 = a0_0x39a656(_0x1cd458, _0x139bbc);
  if (!a0_0x3b3ab2(_0x20ca35)) throw TypeError("Stringified UUID is invalid");
  return _0x20ca35;
}
async function a0_0x426b6a(_0x42c31c, _0x1454a5, _0x3de80) {
  let _0x30772 = ![];
  const _0x503a2c = new TransformStream({
    "start"(_0x3f9073) {},
    "transform"(_0x337a99, _0x188de8) {
      for (let _0x4ac9be = 0; _0x4ac9be < _0x337a99["byteLength"];) {
        const _0xaf520a = _0x337a99["slice"](_0x4ac9be, _0x4ac9be + 2),
          _0x36c8f6 = new DataView(_0xaf520a)["getUint16"](0),
          _0xbc2cc0 = new Uint8Array(_0x337a99["slice"](_0x4ac9be + 2, _0x4ac9be + 2 + _0x36c8f6));
        _0x4ac9be = _0x4ac9be + 2 + _0x36c8f6, _0x188de8["enqueue"](_0xbc2cc0);
      }
    },
    "flush"(_0x11d63c) {}
  });
  _0x503a2c["readable"]["pipeTo"](new WritableStream({
    async "write"(_0x236982) {
      const _0x113d5d = {};
      _0x113d5d["content-type"] = "application/dns-message";
      const _0xa6ae4 = {};
      _0xa6ae4["method"] = "POST", _0xa6ae4["headers"] = _0x113d5d, _0xa6ae4["body"] = _0x236982;
      const _0xf3552b = await fetch(dohURL, _0xa6ae4),
        _0x58a5a5 = await _0xf3552b["arrayBuffer"](),
        _0x5f58c6 = _0x58a5a5["byteLength"],
        _0xee7242 = new Uint8Array([_0x5f58c6 >> 8 & 255, _0x5f58c6 & 255]);
      _0x42c31c["readyState"] === a0_0x43c52a && (_0x3de80("doh success and dns message length is " + _0x5f58c6), _0x30772 ? _0x42c31c["send"](await new Blob([_0xee7242, _0x58a5a5])["arrayBuffer"]()) : (_0x42c31c["send"](await new Blob([_0x1454a5, _0xee7242, _0x58a5a5])["arrayBuffer"]()), _0x30772 = !![]));
    }
  }))["catch"](_0x11b489 => {
    _0x3de80("dns udp has error" + _0x11b489);
  });
  const _0xdf0cc8 = _0x503a2c["writable"]["getWriter"]();
  return {
    "write"(_0x4307dd) {
      _0xdf0cc8["write"](_0x4307dd);
    }
  };
}
function a0_0x35102c(_0x3d86a7, _0x4559c9) {
  const _0x5589f2 = "vless://" + _0x3d86a7 + "@" + a0_0x1d3b88 + ":8880?encryption=none&security=none&type=ws&host=" + _0x4559c9 + "&path=%2F%3Fed%3D2560#" + _0x4559c9,
    _0x5759a3 = "vless://" + _0x3d86a7 + "@" + a0_0x1d3b88 + ":8443?encryption=none&security=tls&type=ws&host=" + _0x4559c9 + "&sni=" + _0x4559c9 + "&fp=random&path=%2F%3Fed%3D2560#" + _0x4559c9,
    _0x5f588a = "\u752C\u54E5\u535A\u5BA2\u5730\u5740\uFF1Ahttps://ygkkk.blogspot.com\n\u752C\u54E5YouTube\u9891\u9053\uFF1Ahttps://www.youtube.com/@ygkkk\n\u752C\u54E5TG\u7535\u62A5\u7FA4\u7EC4\uFF1Ahttps://t.me/ygkkktg\n\u752C\u54E5TG\u7535\u62A5\u9891\u9053\uFF1Ahttps://t.me/ygkkktgpd\n\nProxyIP\u5168\u5C40\u8FD0\u884C\u4E2D\uFF1A" + a0_0x35a0aa,
    _0x1d5972 = "https://" + _0x4559c9 + "/" + _0x3d86a7 + "/ty",
    _0xfc9638 = "https://" + _0x4559c9 + "/" + _0x3d86a7 + "/cl",
    _0x255043 = "https://" + _0x4559c9 + "/" + _0x3d86a7 + "/sb",
    _0x3e204f = "https://" + _0x4559c9 + "/" + _0x3d86a7 + "/pty",
    _0xe44f7 = "https://" + _0x4559c9 + "/" + _0x3d86a7 + "/pcl",
    _0x4350d9 = "https://" + _0x4559c9 + "/" + _0x3d86a7 + "/psb",
    _0x2b3d8e = _0x5f588a["replace"](/\n/g, "<br>"),
    _0x1d98c9 = "\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\" crossorigin=\"anonymous\">\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\" crossorigin=\"anonymous\"></script>\n<style>\n.limited-width {\n    max-width: 200px;\n    overflow: auto;\n    word-wrap: break-word;\n}\n</style>\n</head>\n<script>\nfunction copyToClipboard(text) {\n  const input = document.createElement('textarea');\n  input.style.position = 'fixed';\n  input.style.opacity = 0;\n  input.value = text;\n  document.body.appendChild(input);\n  input.select();\n  document.execCommand('Copy');\n  document.body.removeChild(input);\n  alert('\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F');\n}\n</script>\n";
  return _0x4559c9["includes"]("workers.dev") ? "\n<br>\n<br>\n" + _0x1d98c9 + "\n<body>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Cloudflare-workers/pages-vless\u4EE3\u7406\u811A\u672C V24.10.18</h1>\n\t    <hr>\n            <p>" + _0x2b3d8e + "</p>\n            <hr>\n\t    <hr>\n\t    <hr>\n            <br>\n            <br>\n            <h3>1\uFF1ACF-workers-vless+ws\u8282\u70B9</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\u8282\u70B9\u7279\u8272\uFF1A</th>\n\t\t\t\t\t\t<th>\u5355\u8282\u70B9\u94FE\u63A5\u5982\u4E0B\uFF1A</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">\u5173\u95ED\u4E86TLS\u52A0\u5BC6\uFF0C\u65E0\u89C6\u57DF\u540D\u963B\u65AD</td>\n\t\t\t\t\t\t<td class=\"limited-width\">" + _0x5589f2 + "</td>\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x5589f2 + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>\u5BA2\u6237\u7AEF\u53C2\u6570\u5982\u4E0B\uFF1A</h5>\n            <ul>\n                <li>\u5BA2\u6237\u7AEF\u5730\u5740(address)\uFF1A\u81EA\u5B9A\u4E49\u7684\u57DF\u540D \u6216\u8005 \u4F18\u9009\u57DF\u540D \u6216\u8005 \u4F18\u9009IP \u6216\u8005 \u53CD\u4EE3IP</li>\n                <li>\u7AEF\u53E3(port)\uFF1A7\u4E2Ahttp\u7AEF\u53E3\u53EF\u4EFB\u610F\u9009\u62E9(80\u30018080\u30018880\u30012052\u30012082\u30012086\u30012095)\uFF0C\u6216\u53CD\u4EE3IP\u5BF9\u5E94\u7AEF\u53E3</li>\n                <li>\u7528\u6237ID(uuid)\uFF1A" + _0x3d86a7 + "</li>\n                <li>\u4F20\u8F93\u534F\u8BAE(network)\uFF1Aws \u6216\u8005 websocket</li>\n                <li>\u4F2A\u88C5\u57DF\u540D(host)\uFF1A" + _0x4559c9 + "</li>\n                <li>\u8DEF\u5F84(path)\uFF1A/?ed=2560</li>\n\t\t<li>\u4F20\u8F93\u5B89\u5168(TLS)\uFF1A\u5173\u95ED</li>\n            </ul>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n            <h3>2\uFF1ACF-workers-vless+ws+tls\u8282\u70B9</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\u8282\u70B9\u7279\u8272\uFF1A</th>\n\t\t\t\t\t\t<th>\u5355\u8282\u70B9\u94FE\u63A5\u5982\u4E0B\uFF1A</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">\u542F\u7528\u4E86TLS\u52A0\u5BC6\uFF0C<br>\u5982\u679C\u5BA2\u6237\u7AEF\u652F\u6301\u5206\u7247(Fragment)\u529F\u80FD\uFF0C\u5EFA\u8BAE\u5F00\u542F\uFF0C\u9632\u6B62\u57DF\u540D\u963B\u65AD</td>\n\t\t\t\t\t\t<td class=\"limited-width\">" + _0x5759a3 + "</td>\t\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x5759a3 + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>\u5BA2\u6237\u7AEF\u53C2\u6570\u5982\u4E0B\uFF1A</h5>\n            <ul>\n                <li>\u5BA2\u6237\u7AEF\u5730\u5740(address)\uFF1A\u81EA\u5B9A\u4E49\u7684\u57DF\u540D \u6216\u8005 \u4F18\u9009\u57DF\u540D \u6216\u8005 \u4F18\u9009IP \u6216\u8005 \u53CD\u4EE3IP</li>\n                <li>\u7AEF\u53E3(port)\uFF1A6\u4E2Ahttps\u7AEF\u53E3\u53EF\u4EFB\u610F\u9009\u62E9(443\u30018443\u30012053\u30012083\u30012087\u30012096)\uFF0C\u6216\u53CD\u4EE3IP\u5BF9\u5E94\u7AEF\u53E3</li>\n                <li>\u7528\u6237ID(uuid)\uFF1A" + _0x3d86a7 + "</li>\n                <li>\u4F20\u8F93\u534F\u8BAE(network)\uFF1Aws \u6216\u8005 websocket</li>\n                <li>\u4F2A\u88C5\u57DF\u540D(host)\uFF1A" + _0x4559c9 + "</li>\n                <li>\u8DEF\u5F84(path)\uFF1A/?ed=2560</li>\n                <li>\u4F20\u8F93\u5B89\u5168(TLS)\uFF1A\u5F00\u542F</li>\n                <li>\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1(allowlnsecure)\uFF1Afalse</li>\n\t\t\t</ul>\n\t\t\t<hr>\n\t\t\t<hr>\n\t\t\t<hr>\n\t\t\t<br>\t\n\t\t\t<br>\n\t\t\t<h3>3\uFF1A\u805A\u5408\u901A\u7528\u3001Clash-meta\u3001Sing-box\u8BA2\u9605\u94FE\u63A5\u5982\u4E0B\uFF1A</h3>\n\t\t\t<hr>\n\t\t\t<p>\u6CE8\u610F\uFF1A<br>1\u3001\u9ED8\u8BA4\u6BCF\u4E2A\u8BA2\u9605\u94FE\u63A5\u5305\u542BTLS+\u975ETLS\u517113\u4E2A\u7AEF\u53E3\u8282\u70B9<br>2\u3001\u5F53\u524Dworkers\u57DF\u540D\u4F5C\u4E3A\u8BA2\u9605\u94FE\u63A5\uFF0C\u9700\u901A\u8FC7\u4EE3\u7406\u8FDB\u884C\u8BA2\u9605\u66F4\u65B0<br>3\u3001\u5982\u4F7F\u7528\u7684\u5BA2\u6237\u7AEF\u4E0D\u652F\u6301\u5206\u7247\u529F\u80FD\uFF0C\u5219TLS\u8282\u70B9\u4E0D\u53EF\u7528</p>\n\t\t\t<hr>\n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>\u805A\u5408\u901A\u7528\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x1d5972 + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x1d5972 + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\t\n\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Clash-meta\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0xfc9638 + "</td>\t\n\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0xfc9638 + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Sing-box\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x255043 + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x255043 + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        </div>\n    </div>\n</div>\n</body>\n" : "\n<br>\n<br>\n" + _0x1d98c9 + "\n<body>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Cloudflare-workers/pages-vless\u4EE3\u7406\u811A\u672C V24.10.18</h1>\n\t\t\t<hr>\n            <p>" + _0x2b3d8e + "</p>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n            <h3>1\uFF1ACF-pages/workers/\u81EA\u5B9A\u4E49\u57DF-vless+ws+tls\u8282\u70B9</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\u8282\u70B9\u7279\u8272\uFF1A</th>\n\t\t\t\t\t\t<th>\u5355\u8282\u70B9\u94FE\u63A5\u5982\u4E0B\uFF1A</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">\u542F\u7528\u4E86TLS\u52A0\u5BC6\uFF0C<br>\u5982\u679C\u5BA2\u6237\u7AEF\u652F\u6301\u5206\u7247(Fragment)\u529F\u80FD\uFF0C\u53EF\u5F00\u542F\uFF0C\u9632\u6B62\u57DF\u540D\u963B\u65AD</td>\n\t\t\t\t\t\t<td class=\"limited-width\">" + _0x5759a3 + "</td>\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x5759a3 + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>\u5BA2\u6237\u7AEF\u53C2\u6570\u5982\u4E0B\uFF1A</h5>\n            <ul>\n                <li>\u5BA2\u6237\u7AEF\u5730\u5740(address)\uFF1A\u81EA\u5B9A\u4E49\u7684\u57DF\u540D \u6216\u8005 \u4F18\u9009\u57DF\u540D \u6216\u8005 \u4F18\u9009IP \u6216\u8005 \u53CD\u4EE3IP</li>\n                <li>\u7AEF\u53E3(port)\uFF1A6\u4E2Ahttps\u7AEF\u53E3\u53EF\u4EFB\u610F\u9009\u62E9(443\u30018443\u30012053\u30012083\u30012087\u30012096)\uFF0C\u6216\u53CD\u4EE3IP\u5BF9\u5E94\u7AEF\u53E3</li>\n                <li>\u7528\u6237ID(uuid)\uFF1A" + _0x3d86a7 + "</li>\n                <li>\u4F20\u8F93\u534F\u8BAE(network)\uFF1Aws \u6216\u8005 websocket</li>\n                <li>\u4F2A\u88C5\u57DF\u540D(host)\uFF1A" + _0x4559c9 + "</li>\n                <li>\u8DEF\u5F84(path)\uFF1A/?ed=2560</li>\n                <li>\u4F20\u8F93\u5B89\u5168(TLS)\uFF1A\u5F00\u542F</li>\n                <li>\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1(allowlnsecure)\uFF1Afalse</li>\n\t\t\t</ul>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n\t\t\t<h3>2\uFF1A\u805A\u5408\u901A\u7528\u3001Clash-meta\u3001Sing-box\u8BA2\u9605\u94FE\u63A5\u5982\u4E0B\uFF1A</h3>\n\t\t\t<hr>\n\t\t\t<p>\u6CE8\u610F\uFF1A\u4EE5\u4E0B\u8BA2\u9605\u94FE\u63A5\u4EC56\u4E2ATLS\u7AEF\u53E3\u8282\u70B9</p>\n\t\t\t<hr>\n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>\u805A\u5408\u901A\u7528\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x3e204f + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x3e204f + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\t\n\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Clash-meta\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0xe44f7 + "</td>\t\n\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0xe44f7 + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Sing-box\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x4350d9 + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x4350d9 + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        </div>\n    </div>\n</div>\n</body>\n";
}
function a0_0x20954a(_0x53d986, _0x2fe510) {
  const _0x2b968d = btoa("vless://" + _0x53d986 + "@" + a0_0x1acc37 + ":" + a0_0xb64aaf + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x2fe510 + "&path=%2F%3Fed%3D2560#CF_V1_" + a0_0x1acc37 + "_" + a0_0xb64aaf + "\nvless://" + _0x53d986 + "@" + a0_0x138aea + ":" + a0_0xcbf9cd + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x2fe510 + "&path=%2F%3Fed%3D2560#CF_V2_" + a0_0x138aea + "_" + a0_0xcbf9cd + "\nvless://" + _0x53d986 + "@" + a0_0x4bae21 + ":" + a0_0xa26a8c + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x2fe510 + "&path=%2F%3Fed%3D2560#CF_V3_" + a0_0x4bae21 + "_" + a0_0xa26a8c + "\nvless://" + _0x53d986 + "@" + a0_0x50715c + ":" + a0_0xc04563 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x2fe510 + "&path=%2F%3Fed%3D2560#CF_V4_" + a0_0x50715c + "_" + a0_0xc04563 + "\nvless://" + _0x53d986 + "@" + a0_0x4b44af + ":" + a0_0x388fa3 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x2fe510 + "&path=%2F%3Fed%3D2560#CF_V5_" + a0_0x4b44af + "_" + a0_0x388fa3 + "\nvless://" + _0x53d986 + "@" + a0_0x37e431 + ":" + a0_0x1abd16 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x2fe510 + "&path=%2F%3Fed%3D2560#CF_V6_" + a0_0x37e431 + "_" + a0_0x1abd16 + "\nvless://" + _0x53d986 + "@" + a0_0xcf212e + ":" + a0_0x28068d + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x2fe510 + "&path=%2F%3Fed%3D2560#CF_V7_" + a0_0xcf212e + "_" + a0_0x28068d + "\nvless://" + _0x53d986 + "@" + a0_0x548e30 + ":" + a0_0xd1042f + "?encryption=none&security=tls&sni=" + _0x2fe510 + "&fp=randomized&type=ws&host=" + _0x2fe510 + "&path=%2F%3Fed%3D2560#CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\nvless://" + _0x53d986 + "@" + a0_0x3fccdb + ":" + a0_0x4d29f2 + "?encryption=none&security=tls&sni=" + _0x2fe510 + "&fp=randomized&type=ws&host=" + _0x2fe510 + "&path=%2F%3Fed%3D2560#CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\nvless://" + _0x53d986 + "@" + a0_0x2fa391 + ":" + a0_0x110c99 + "?encryption=none&security=tls&sni=" + _0x2fe510 + "&fp=randomized&type=ws&host=" + _0x2fe510 + "&path=%2F%3Fed%3D2560#CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\nvless://" + _0x53d986 + "@" + a0_0x33619e + ":" + a0_0x1e0c3c + "?encryption=none&security=tls&sni=" + _0x2fe510 + "&fp=randomized&type=ws&host=" + _0x2fe510 + "&path=%2F%3Fed%3D2560#CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\nvless://" + _0x53d986 + "@" + a0_0x257853 + ":" + a0_0x2ff406 + "?encryption=none&security=tls&sni=" + _0x2fe510 + "&fp=randomized&type=ws&host=" + _0x2fe510 + "&path=%2F%3Fed%3D2560#CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\nvless://" + _0x53d986 + "@" + a0_0x27fc5d + ":" + a0_0x315d89 + "?encryption=none&security=tls&sni=" + _0x2fe510 + "&fp=randomized&type=ws&host=" + _0x2fe510 + "&path=%2F%3Fed%3D2560#CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89);
  return "" + _0x2b968d;
}
function a0_0x401c8b(_0x340eb1, _0xdbafd6) {
  return "\nport: 7890\nallow-lan: true\nmode: rule\nlog-level: info\nunified-delay: true\nglobal-client-fingerprint: chrome\ndns:\n  enable: true\n  listen: :53\n  ipv6: true\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  default-nameserver: \n    - 223.5.5.5\n    - 114.114.114.114\n    - 8.8.8.8\n  nameserver:\n    - https://dns.alidns.com/dns-query\n    - https://doh.pub/dns-query\n  fallback:\n    - https://1.0.0.1/dns-query\n    - tls://dns.google\n  fallback-filter:\n    geoip: true\n    geoip-code: CN\n    ipcidr:\n      - 240.0.0.0/4\n\nproxies:\n- name: CF_V1_" + a0_0x1acc37 + "_" + a0_0xb64aaf + "\n  type: vless\n  server: " + a0_0x1acc37 + "\n  port: " + a0_0xb64aaf + "\n  uuid: " + _0x340eb1 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xdbafd6 + "\n\n- name: CF_V2_" + a0_0x138aea + "_" + a0_0xcbf9cd + "\n  type: vless\n  server: " + a0_0x138aea + "\n  port: " + a0_0xcbf9cd + "\n  uuid: " + _0x340eb1 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xdbafd6 + "\n\n- name: CF_V3_" + a0_0x4bae21 + "_" + a0_0xa26a8c + "\n  type: vless\n  server: " + a0_0x4bae21 + "\n  port: " + a0_0xa26a8c + "\n  uuid: " + _0x340eb1 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xdbafd6 + "\n\n- name: CF_V4_" + a0_0x50715c + "_" + a0_0xc04563 + "\n  type: vless\n  server: " + a0_0x50715c + "\n  port: " + a0_0xc04563 + "\n  uuid: " + _0x340eb1 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xdbafd6 + "\n\n- name: CF_V5_" + a0_0x4b44af + "_" + a0_0x388fa3 + "\n  type: vless\n  server: " + a0_0x4b44af + "\n  port: " + a0_0x388fa3 + "\n  uuid: " + _0x340eb1 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xdbafd6 + "\n\n- name: CF_V6_" + a0_0x37e431 + "_" + a0_0x1abd16 + "\n  type: vless\n  server: " + a0_0x37e431 + "\n  port: " + a0_0x1abd16 + "\n  uuid: " + _0x340eb1 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xdbafd6 + "\n\n- name: CF_V7_" + a0_0xcf212e + "_" + a0_0x28068d + "\n  type: vless\n  server: " + a0_0xcf212e + "\n  port: " + a0_0x28068d + "\n  uuid: " + _0x340eb1 + "\n  udp: false\n  tls: false\n  network: ws\n  servername: " + _0xdbafd6 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xdbafd6 + "\n\n- name: CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\n  type: vless\n  server: " + a0_0x548e30 + "\n  port: " + a0_0xd1042f + "\n  uuid: " + _0x340eb1 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0xdbafd6 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xdbafd6 + "\n\n- name: CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\n  type: vless\n  server: " + a0_0x3fccdb + "\n  port: " + a0_0x4d29f2 + "\n  uuid: " + _0x340eb1 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0xdbafd6 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xdbafd6 + "\n\n- name: CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\n  type: vless\n  server: " + a0_0x2fa391 + "\n  port: " + a0_0x110c99 + "\n  uuid: " + _0x340eb1 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0xdbafd6 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xdbafd6 + "\n\n- name: CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\n  type: vless\n  server: " + a0_0x33619e + "\n  port: " + a0_0x1e0c3c + "\n  uuid: " + _0x340eb1 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0xdbafd6 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xdbafd6 + "\n\n- name: CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\n  type: vless\n  server: " + a0_0x257853 + "\n  port: " + a0_0x2ff406 + "\n  uuid: " + _0x340eb1 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0xdbafd6 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xdbafd6 + "\n\n- name: CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\n  type: vless\n  server: " + a0_0x27fc5d + "\n  port: " + a0_0x315d89 + "\n  uuid: " + _0x340eb1 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0xdbafd6 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0xdbafd6 + "\n\nproxy-groups:\n- name: \u8D1F\u8F7D\u5747\u8861\n  type: load-balance\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  proxies:\n    - CF_V1_" + a0_0x1acc37 + "_" + a0_0xb64aaf + "\n    - CF_V2_" + a0_0x138aea + "_" + a0_0xcbf9cd + "\n    - CF_V3_" + a0_0x4bae21 + "_" + a0_0xa26a8c + "\n    - CF_V4_" + a0_0x50715c + "_" + a0_0xc04563 + "\n    - CF_V5_" + a0_0x4b44af + "_" + a0_0x388fa3 + "\n    - CF_V6_" + a0_0x37e431 + "_" + a0_0x1abd16 + "\n    - CF_V7_" + a0_0xcf212e + "_" + a0_0x28068d + "\n    - CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\n    - CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\n    - CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\n    - CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\n    - CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\n    - CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\n\n- name: \u81EA\u52A8\u9009\u62E9\n  type: url-test\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  tolerance: 50\n  proxies:\n    - CF_V1_" + a0_0x1acc37 + "_" + a0_0xb64aaf + "\n    - CF_V2_" + a0_0x138aea + "_" + a0_0xcbf9cd + "\n    - CF_V3_" + a0_0x4bae21 + "_" + a0_0xa26a8c + "\n    - CF_V4_" + a0_0x50715c + "_" + a0_0xc04563 + "\n    - CF_V5_" + a0_0x4b44af + "_" + a0_0x388fa3 + "\n    - CF_V6_" + a0_0x37e431 + "_" + a0_0x1abd16 + "\n    - CF_V7_" + a0_0xcf212e + "_" + a0_0x28068d + "\n    - CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\n    - CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\n    - CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\n    - CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\n    - CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\n    - CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\n\n- name: \uD83C\uDF0D\u9009\u62E9\u4EE3\u7406\n  type: select\n  proxies:\n    - \u8D1F\u8F7D\u5747\u8861\n    - \u81EA\u52A8\u9009\u62E9\n    - DIRECT\n    - CF_V1_" + a0_0x1acc37 + "_" + a0_0xb64aaf + "\n    - CF_V2_" + a0_0x138aea + "_" + a0_0xcbf9cd + "\n    - CF_V3_" + a0_0x4bae21 + "_" + a0_0xa26a8c + "\n    - CF_V4_" + a0_0x50715c + "_" + a0_0xc04563 + "\n    - CF_V5_" + a0_0x4b44af + "_" + a0_0x388fa3 + "\n    - CF_V6_" + a0_0x37e431 + "_" + a0_0x1abd16 + "\n    - CF_V7_" + a0_0xcf212e + "_" + a0_0x28068d + "\n    - CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\n    - CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\n    - CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\n    - CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\n    - CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\n    - CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\n\nrules:\n  - GEOIP,LAN,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,\uD83C\uDF0D\u9009\u62E9\u4EE3\u7406";
}
function a0_0x34a7ab(_0x2951fc, _0x220ff8) {
  return "{\n\t  \"log\": {\n\t\t\"disabled\": false,\n\t\t\"level\": \"info\",\n\t\t\"timestamp\": true\n\t  },\n\t  \"experimental\": {\n\t\t\"clash_api\": {\n\t\t  \"external_controller\": \"127.0.0.1:9090\",\n\t\t  \"external_ui\": \"ui\",\n\t\t  \"external_ui_download_url\": \"\",\n\t\t  \"external_ui_download_detour\": \"\",\n\t\t  \"secret\": \"\",\n\t\t  \"default_mode\": \"Rule\"\n\t\t},\n\t\t\"cache_file\": {\n\t\t  \"enabled\": true,\n\t\t  \"path\": \"cache.db\",\n\t\t  \"store_fakeip\": true\n\t\t}\n\t  },\n\t  \"dns\": {\n\t\t\"servers\": [\n\t\t  {\n\t\t\t\"tag\": \"proxydns\",\n\t\t\t\"address\": \"tls://8.8.8.8/dns-query\",\n\t\t\t\"detour\": \"select\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"localdns\",\n\t\t\t\"address\": \"h3://223.5.5.5/dns-query\",\n\t\t\t\"detour\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"address\": \"rcode://refused\",\n\t\t\t\"tag\": \"block\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"dns_fakeip\",\n\t\t\t\"address\": \"fakeip\"\n\t\t  }\n\t\t],\n\t\t\"rules\": [\n\t\t  {\n\t\t\t\"outbound\": \"any\",\n\t\t\t\"server\": \"localdns\",\n\t\t\t\"disable_cache\": true\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\"server\": \"proxydns\"\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\"server\": \"localdns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\"server\": \"localdns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"server\": \"proxydns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"query_type\": [\n\t\t\t  \"A\",\n\t\t\t  \"AAAA\"\n\t\t\t],\n\t\t\t\"server\": \"dns_fakeip\"\n\t\t  }\n\t\t],\n\t\t\"fakeip\": {\n\t\t  \"enabled\": true,\n\t\t  \"inet4_range\": \"198.18.0.0/15\",\n\t\t  \"inet6_range\": \"fc00::/18\"\n\t\t},\n\t\t\"independent_cache\": true,\n\t\t\"final\": \"proxydns\"\n\t  },\n\t  \"inbounds\": [\n\t\t{\n\t\t  \"type\": \"tun\",\n\t\t  \"address\": [\n                    \"172.19.0.1/30\",\n\t\t    \"fd00::1/126\"\n      ],\n\t\t  \"auto_route\": true,\n\t\t  \"strict_route\": true,\n\t\t  \"sniff\": true,\n\t\t  \"sniff_override_destination\": true,\n\t\t  \"domain_strategy\": \"prefer_ipv4\"\n\t\t}\n\t  ],\n\t  \"outbounds\": [\n\t\t{\n\t\t  \"tag\": \"select\",\n\t\t  \"type\": \"selector\",\n\t\t  \"default\": \"auto\",\n\t\t  \"outbounds\": [\n\t\t\t\"auto\",\n\t\t\t\"CF_V1_" + a0_0x1acc37 + "_" + a0_0xb64aaf + "\",\n\t\t\t\"CF_V2_" + a0_0x138aea + "_" + a0_0xcbf9cd + "\",\n\t\t\t\"CF_V3_" + a0_0x4bae21 + "_" + a0_0xa26a8c + "\",\n\t\t\t\"CF_V4_" + a0_0x50715c + "_" + a0_0xc04563 + "\",\n\t\t\t\"CF_V5_" + a0_0x4b44af + "_" + a0_0x388fa3 + "\",\n\t\t\t\"CF_V6_" + a0_0x37e431 + "_" + a0_0x1abd16 + "\",\n\t\t\t\"CF_V7_" + a0_0xcf212e + "_" + a0_0x28068d + "\",\n\t\t\t\"CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\",\n\t\t\t\"CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\",\n\t\t\t\"CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\",\n\t\t\t\"CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\",\n\t\t\t\"CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\",\n\t\t\t\"CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\"\n\t\t  ]\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x1acc37 + "\",\n\t\t  \"server_port\": " + a0_0xb64aaf + ",\n\t\t  \"tag\": \"CF_V1_" + a0_0x1acc37 + "_" + a0_0xb64aaf + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220ff8 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x2951fc + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x138aea + "\",\n\t\t  \"server_port\": " + a0_0xcbf9cd + ",\n\t\t  \"tag\": \"CF_V2_" + a0_0x138aea + "_" + a0_0xcbf9cd + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220ff8 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x2951fc + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x4bae21 + "\",\n\t\t  \"server_port\": " + a0_0xa26a8c + ",\n\t\t  \"tag\": \"CF_V3_" + a0_0x4bae21 + "_" + a0_0xa26a8c + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220ff8 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x2951fc + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x50715c + "\",\n\t\t  \"server_port\": " + a0_0xc04563 + ",\n\t\t  \"tag\": \"CF_V4_" + a0_0x50715c + "_" + a0_0xc04563 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220ff8 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x2951fc + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x4b44af + "\",\n\t\t  \"server_port\": " + a0_0x388fa3 + ",\n\t\t  \"tag\": \"CF_V5_" + a0_0x4b44af + "_" + a0_0x388fa3 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220ff8 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x2951fc + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x37e431 + "\",\n\t\t  \"server_port\": " + a0_0x1abd16 + ",\n\t\t  \"tag\": \"CF_V6_" + a0_0x37e431 + "_" + a0_0x1abd16 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220ff8 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x2951fc + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0xcf212e + "\",\n\t\t  \"server_port\": " + a0_0x28068d + ",\n\t\t  \"tag\": \"CF_V7_" + a0_0xcf212e + "_" + a0_0x28068d + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220ff8 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x2951fc + "\"\n\t\t},\n\t\t{     \n\t\t  \"server\": \"" + a0_0x548e30 + "\",\n\t\t  \"server_port\": " + a0_0xd1042f + ",\n\t\t  \"tag\": \"CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x220ff8 + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220ff8 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x2951fc + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x3fccdb + "\",\n\t\t  \"server_port\": " + a0_0x4d29f2 + ",\n\t\t  \"tag\": \"CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x220ff8 + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220ff8 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x2951fc + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x2fa391 + "\",\n\t\t  \"server_port\": " + a0_0x110c99 + ",\n\t\t  \"tag\": \"CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x220ff8 + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220ff8 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x2951fc + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x33619e + "\",\n\t\t  \"server_port\": " + a0_0x1e0c3c + ",\n\t\t  \"tag\": \"CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x220ff8 + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220ff8 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x2951fc + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x257853 + "\",\n\t\t  \"server_port\": " + a0_0x2ff406 + ",\n\t\t  \"tag\": \"CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x220ff8 + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220ff8 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x2951fc + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x27fc5d + "\",\n\t\t  \"server_port\": " + a0_0x315d89 + ",\n\t\t  \"tag\": \"CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x220ff8 + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220ff8 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x2951fc + "\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"direct\",\n\t\t  \"type\": \"direct\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"block\",\n\t\t  \"type\": \"block\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"dns-out\",\n\t\t  \"type\": \"dns\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"auto\",\n\t\t  \"type\": \"urltest\",\n\t\t  \"outbounds\": [\n\t\t\t\"CF_V1_" + a0_0x1acc37 + "_" + a0_0xb64aaf + "\",\n\t\t\t\"CF_V2_" + a0_0x138aea + "_" + a0_0xcbf9cd + "\",\n\t\t\t\"CF_V3_" + a0_0x4bae21 + "_" + a0_0xa26a8c + "\",\n\t\t\t\"CF_V4_" + a0_0x50715c + "_" + a0_0xc04563 + "\",\n\t\t\t\"CF_V5_" + a0_0x4b44af + "_" + a0_0x388fa3 + "\",\n\t\t\t\"CF_V6_" + a0_0x37e431 + "_" + a0_0x1abd16 + "\",\n\t\t\t\"CF_V7_" + a0_0xcf212e + "_" + a0_0x28068d + "\",\n\t\t\t\"CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\",\n\t\t\t\"CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\",\n\t\t\t\"CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\",\n\t\t\t\"CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\",\n\t\t\t\"CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\",\n\t\t\t\"CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\"\n\t\t  ],\n\t\t  \"url\": \"https://www.gstatic.com/generate_204\",\n\t\t  \"interval\": \"1m\",\n\t\t  \"tolerance\": 50,\n\t\t  \"interrupt_exist_connections\": false\n\t\t}\n\t  ],\n\t  \"route\": {\n\t\t\"rule_set\": [\n\t\t  {\n\t\t\t\"tag\": \"geosite-geolocation-!cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"geosite-cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"geoip-cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  }\n\t\t],\n\t\t\"auto_detect_interface\": true,\n\t\t\"final\": \"select\",\n\t\t\"rules\": [\n\t\t  {\n\t\t\t\"outbound\": \"dns-out\",\n\t\t\t\"protocol\": \"dns\"\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\"outbound\": \"select\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geoip-cn\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"ip_is_private\": true,\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"outbound\": \"select\"\n\t\t  }\n\t\t]\n\t  },\n\t  \"ntp\": {\n\t\t\"enabled\": true,\n\t\t\"server\": \"time.apple.com\",\n\t\t\"server_port\": 123,\n\t\t\"interval\": \"30m\",\n\t\t\"detour\": \"direct\"\n\t  }\n\t}";
}
function a0_0x1c941e(_0x353562, _0x798d40) {
  const _0x1691fb = btoa("vless://" + _0x353562 + "@" + a0_0x548e30 + ":" + a0_0xd1042f + "?encryption=none&security=tls&sni=" + _0x798d40 + "&fp=randomized&type=ws&host=" + _0x798d40 + "&path=%2F%3Fed%3D2560#CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\nvless://" + _0x353562 + "@" + a0_0x3fccdb + ":" + a0_0x4d29f2 + "?encryption=none&security=tls&sni=" + _0x798d40 + "&fp=randomized&type=ws&host=" + _0x798d40 + "&path=%2F%3Fed%3D2560#CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\nvless://" + _0x353562 + "@" + a0_0x2fa391 + ":" + a0_0x110c99 + "?encryption=none&security=tls&sni=" + _0x798d40 + "&fp=randomized&type=ws&host=" + _0x798d40 + "&path=%2F%3Fed%3D2560#CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\nvless://" + _0x353562 + "@" + a0_0x33619e + ":" + a0_0x1e0c3c + "?encryption=none&security=tls&sni=" + _0x798d40 + "&fp=randomized&type=ws&host=" + _0x798d40 + "&path=%2F%3Fed%3D2560#CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\nvless://" + _0x353562 + "@" + a0_0x257853 + ":" + a0_0x2ff406 + "?encryption=none&security=tls&sni=" + _0x798d40 + "&fp=randomized&type=ws&host=" + _0x798d40 + "&path=%2F%3Fed%3D2560#CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\nvless://" + _0x353562 + "@" + a0_0x27fc5d + ":" + a0_0x315d89 + "?encryption=none&security=tls&sni=" + _0x798d40 + "&fp=randomized&type=ws&host=" + _0x798d40 + "&path=%2F%3Fed%3D2560#CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89);
  return "" + _0x1691fb;
}
function a0_0x31622f(_0x2d7a45, _0x39fea9) {
  return "\nport: 7890\nallow-lan: true\nmode: rule\nlog-level: info\nunified-delay: true\nglobal-client-fingerprint: chrome\ndns:\n  enable: true\n  listen: :53\n  ipv6: true\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  default-nameserver: \n    - 223.5.5.5\n    - 114.114.114.114\n    - 8.8.8.8\n  nameserver:\n    - https://dns.alidns.com/dns-query\n    - https://doh.pub/dns-query\n  fallback:\n    - https://1.0.0.1/dns-query\n    - tls://dns.google\n  fallback-filter:\n    geoip: true\n    geoip-code: CN\n    ipcidr:\n      - 240.0.0.0/4\n\nproxies:\n- name: CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\n  type: vless\n  server: " + a0_0x548e30 + "\n  port: " + a0_0xd1042f + "\n  uuid: " + _0x2d7a45 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x39fea9 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x39fea9 + "\n\n- name: CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\n  type: vless\n  server: " + a0_0x3fccdb + "\n  port: " + a0_0x4d29f2 + "\n  uuid: " + _0x2d7a45 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x39fea9 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x39fea9 + "\n\n- name: CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\n  type: vless\n  server: " + a0_0x2fa391 + "\n  port: " + a0_0x110c99 + "\n  uuid: " + _0x2d7a45 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x39fea9 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x39fea9 + "\n\n- name: CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\n  type: vless\n  server: " + a0_0x33619e + "\n  port: " + a0_0x1e0c3c + "\n  uuid: " + _0x2d7a45 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x39fea9 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x39fea9 + "\n\n- name: CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\n  type: vless\n  server: " + a0_0x257853 + "\n  port: " + a0_0x2ff406 + "\n  uuid: " + _0x2d7a45 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x39fea9 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x39fea9 + "\n\n- name: CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\n  type: vless\n  server: " + a0_0x27fc5d + "\n  port: " + a0_0x315d89 + "\n  uuid: " + _0x2d7a45 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x39fea9 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x39fea9 + "\n\nproxy-groups:\n- name: \u8D1F\u8F7D\u5747\u8861\n  type: load-balance\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  proxies:\n    - CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\n    - CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\n    - CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\n    - CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\n    - CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\n    - CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\n\n- name: \u81EA\u52A8\u9009\u62E9\n  type: url-test\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  tolerance: 50\n  proxies:\n    - CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\n    - CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\n    - CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\n    - CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\n    - CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\n    - CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\n\n- name: \uD83C\uDF0D\u9009\u62E9\u4EE3\u7406\n  type: select\n  proxies:\n    - \u8D1F\u8F7D\u5747\u8861\n    - \u81EA\u52A8\u9009\u62E9\n    - DIRECT\n    - CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\n    - CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\n    - CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\n    - CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\n    - CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\n    - CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\n\nrules:\n  - GEOIP,LAN,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,\uD83C\uDF0D\u9009\u62E9\u4EE3\u7406";
}
function a0_0x5d96a0(_0x2a58ed, _0x464f33) {
  return "{\n\t\t  \"log\": {\n\t\t\t\"disabled\": false,\n\t\t\t\"level\": \"info\",\n\t\t\t\"timestamp\": true\n\t\t  },\n\t\t  \"experimental\": {\n\t\t\t\"clash_api\": {\n\t\t\t  \"external_controller\": \"127.0.0.1:9090\",\n\t\t\t  \"external_ui\": \"ui\",\n\t\t\t  \"external_ui_download_url\": \"\",\n\t\t\t  \"external_ui_download_detour\": \"\",\n\t\t\t  \"secret\": \"\",\n\t\t\t  \"default_mode\": \"Rule\"\n\t\t\t},\n\t\t\t\"cache_file\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"path\": \"cache.db\",\n\t\t\t  \"store_fakeip\": true\n\t\t\t}\n\t\t  },\n\t\t  \"dns\": {\n\t\t\t\"servers\": [\n\t\t\t  {\n\t\t\t\t\"tag\": \"proxydns\",\n\t\t\t\t\"address\": \"tls://8.8.8.8/dns-query\",\n\t\t\t\t\"detour\": \"select\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"localdns\",\n\t\t\t\t\"address\": \"h3://223.5.5.5/dns-query\",\n\t\t\t\t\"detour\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"address\": \"rcode://refused\",\n\t\t\t\t\"tag\": \"block\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"dns_fakeip\",\n\t\t\t\t\"address\": \"fakeip\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"rules\": [\n\t\t\t  {\n\t\t\t\t\"outbound\": \"any\",\n\t\t\t\t\"server\": \"localdns\",\n\t\t\t\t\"disable_cache\": true\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\t\"server\": \"proxydns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\t\"server\": \"localdns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\t\"server\": \"localdns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"server\": \"proxydns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"query_type\": [\n\t\t\t\t  \"A\",\n\t\t\t\t  \"AAAA\"\n\t\t\t\t],\n\t\t\t\t\"server\": \"dns_fakeip\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"fakeip\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"inet4_range\": \"198.18.0.0/15\",\n\t\t\t  \"inet6_range\": \"fc00::/18\"\n\t\t\t},\n\t\t\t\"independent_cache\": true,\n\t\t\t\"final\": \"proxydns\"\n\t\t  },\n\t\t  \"inbounds\": [\n\t\t\t{\n\t\t\t  \"type\": \"tun\",\n\t\t  \"address\": [\n                    \"172.19.0.1/30\",\n\t\t    \"fd00::1/126\"\n      ],\n\t\t\t  \"auto_route\": true,\n\t\t\t  \"strict_route\": true,\n\t\t\t  \"sniff\": true,\n\t\t\t  \"sniff_override_destination\": true,\n\t\t\t  \"domain_strategy\": \"prefer_ipv4\"\n\t\t\t}\n\t\t  ],\n\t\t  \"outbounds\": [\n\t\t\t{\n\t\t\t  \"tag\": \"select\",\n\t\t\t  \"type\": \"selector\",\n\t\t\t  \"default\": \"auto\",\n\t\t\t  \"outbounds\": [\n\t\t\t\t\"auto\",\n\t\t\t\t\"CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\",\n\t\t\t\t\"CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\",\n\t\t\t\t\"CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\",\n\t\t\t\t\"CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\",\n\t\t\t\t\"CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\",\n\t\t\t\t\"CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + a0_0x548e30 + "\",\n\t\t\t  \"server_port\": " + a0_0xd1042f + ",\n\t\t\t  \"tag\": \"CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x464f33 + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x464f33 + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x2a58ed + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + a0_0x3fccdb + "\",\n\t\t\t  \"server_port\": " + a0_0x4d29f2 + ",\n\t\t\t  \"tag\": \"CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x464f33 + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x464f33 + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x2a58ed + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + a0_0x2fa391 + "\",\n\t\t\t  \"server_port\": " + a0_0x110c99 + ",\n\t\t\t  \"tag\": \"CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x464f33 + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x464f33 + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x2a58ed + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + a0_0x33619e + "\",\n\t\t\t  \"server_port\": " + a0_0x1e0c3c + ",\n\t\t\t  \"tag\": \"CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x464f33 + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x464f33 + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x2a58ed + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + a0_0x257853 + "\",\n\t\t\t  \"server_port\": " + a0_0x2ff406 + ",\n\t\t\t  \"tag\": \"CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x464f33 + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x464f33 + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x2a58ed + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + a0_0x27fc5d + "\",\n\t\t\t  \"server_port\": " + a0_0x315d89 + ",\n\t\t\t  \"tag\": \"CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x464f33 + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x464f33 + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x2a58ed + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"direct\",\n\t\t\t  \"type\": \"direct\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"block\",\n\t\t\t  \"type\": \"block\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"dns-out\",\n\t\t\t  \"type\": \"dns\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"auto\",\n\t\t\t  \"type\": \"urltest\",\n\t\t\t  \"outbounds\": [\n\t\t\t\t\"CF_V8_" + a0_0x548e30 + "_" + a0_0xd1042f + "\",\n\t\t\t\t\"CF_V9_" + a0_0x3fccdb + "_" + a0_0x4d29f2 + "\",\n\t\t\t\t\"CF_V10_" + a0_0x2fa391 + "_" + a0_0x110c99 + "\",\n\t\t\t\t\"CF_V11_" + a0_0x33619e + "_" + a0_0x1e0c3c + "\",\n\t\t\t\t\"CF_V12_" + a0_0x257853 + "_" + a0_0x2ff406 + "\",\n\t\t\t\t\"CF_V13_" + a0_0x27fc5d + "_" + a0_0x315d89 + "\"\n\t\t\t  ],\n\t\t\t  \"url\": \"https://www.gstatic.com/generate_204\",\n\t\t\t  \"interval\": \"1m\",\n\t\t\t  \"tolerance\": 50,\n\t\t\t  \"interrupt_exist_connections\": false\n\t\t\t}\n\t\t  ],\n\t\t  \"route\": {\n\t\t\t\"rule_set\": [\n\t\t\t  {\n\t\t\t\t\"tag\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"geosite-cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"geoip-cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"auto_detect_interface\": true,\n\t\t\t\"final\": \"select\",\n\t\t\t\"rules\": [\n\t\t\t  {\n\t\t\t\t\"outbound\": \"dns-out\",\n\t\t\t\t\"protocol\": \"dns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\t\"outbound\": \"select\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geoip-cn\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"ip_is_private\": true,\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"outbound\": \"select\"\n\t\t\t  }\n\t\t\t]\n\t\t  },\n\t\t  \"ntp\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server\": \"time.apple.com\",\n\t\t\t\"server_port\": 123,\n\t\t\t\"interval\": \"30m\",\n\t\t\t\"detour\": \"direct\"\n\t\t  }\n\t\t}";
}