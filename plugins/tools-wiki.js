// No enc buy di gwe anjay buy wkwkwk
// Chat gw di tele 5k aja https://t.me/pnggilajacn
// By Chandra XD
// Follow bang
// TikTok : @pnggilajacn
// Github : https://github.com/Chandra-XD

function _0x37f5() {
  const _0x5a3aac = [
    "6CVqUeS",
    "view",
    "1263345RkWtWl",
    "164nuCVCQ",
    "trim",
    "4YmJWcH",
    "\x20hasil\x20pencarian\x20yang\x20kita\x20temukan.\x0aKlik\x20tombol\x20dibawah\x20untuk\x20menuju\x20berikutnya.",
    "load",
    "attr",
    "\x20<query>",
    "command",
    "Berikut\x20adalah\x20informasi\x20yang\x20kita\x20dapat\x20dari\x20wikihow\x0a",
    "Query\x20\x22",
    "div\x20a.result_link",
    "get",
    "each",
    "WIKIHOW",
    "generateWAMessageFromContent",
    "status",
    "3450491gsZbgI",
    "Input\x20Query",
    "title",
    "text",
    "Terdapat\x20",
    "then",
    "246969BlCsov",
    "wikihow",
    "div.result_title",
    "find",
    "tools",
    "div.step",
    "URL_REGEX",
    "16227wuSLIV",
    "41569MdGhcC",
    "24jTAkwR",
    "match",
    "length",
    "\x22\x20Not\x20Found",
    "1694539VueSho",
    "10wacwAi",
    "replace",
    "sendMessage",
    "li.sr_view",
    "data",
    "6816564wqyVPj",
  ];
  _0x37f5 = function () {
    return _0x5a3aac;
  };
  return _0x37f5();
}
const _0x150112 = _0x9bfc;
(function (_0x176cd2, _0x476207) {
  const _0x3065d1 = _0x9bfc,
    _0xfc9f0f = _0x176cd2();
  while (!![]) {
    try {
      const _0x250edb =
        (-parseInt(_0x3065d1(0xde)) / 0x1) * (parseInt(_0x3065d1(0xef)) / 0x2) +
        (-parseInt(_0x3065d1(0xdd)) / 0x3) * (parseInt(_0x3065d1(0xed)) / 0x4) +
        -parseInt(_0x3065d1(0xec)) / 0x5 +
        (parseInt(_0x3065d1(0xea)) / 0x6) * (-parseInt(_0x3065d1(0xe3)) / 0x7) +
        (-parseInt(_0x3065d1(0xdf)) / 0x8) *
          (-parseInt(_0x3065d1(0xd6)) / 0x9) +
        (-parseInt(_0x3065d1(0xe4)) / 0xa) *
          (-parseInt(_0x3065d1(0xd0)) / 0xb) +
        parseInt(_0x3065d1(0xe9)) / 0xc;
      if (_0x250edb === _0x476207) break;
      else _0xfc9f0f["push"](_0xfc9f0f["shift"]());
    } catch (_0x3c841e) {
      _0xfc9f0f["push"](_0xfc9f0f["shift"]());
    }
  }
})(_0x37f5, 0x2822e);
import _0xf6cb01 from "axios";
import _0x25c8de from "cheerio";
import _0x4ad2c3 from "@whiskeysockets/baileys";
import { apivisit } from "./kanghit.js";
function _0x9bfc(_0x42a2a5, _0xd3aae3) {
  const _0x37f543 = _0x37f5();
  return (
    (_0x9bfc = function (_0x9bfc1a, _0x37138f) {
      _0x9bfc1a = _0x9bfc1a - 0xca;
      let _0x21e6f6 = _0x37f543[_0x9bfc1a];
      return _0x21e6f6;
    }),
    _0x9bfc(_0x42a2a5, _0xd3aae3)
  );
}
let handler = async (
  _0x35acb9,
  {
    conn: _0x2afd1e,
    text: _0x59fdd8,
    usedPrefix: _0x2775ed,
    command: _0x1c1be9,
  }
) => {
  const _0x2dd225 = _0x9bfc;
  if (_0x59fdd8[_0x2dd225(0xe0)](_0x4ad2c3[_0x2dd225(0xdc)])) {
    let _0x3e66c8 = await wiGetDatalink(_0x59fdd8),
      _0x37e347 = "";
    for (
      let _0x91938a = 0x0;
      _0x91938a < _0x3e66c8[_0x2dd225(0xe1)];
      _0x91938a++
    ) {
      (_0x37e347 += "\x0a*Langkah\x20" + (_0x91938a + 0x1) + "*\x0a"),
        (_0x37e347 += "\x09" + _0x3e66c8[_0x91938a][_0x2dd225(0xd2)] + "\x0a"),
        (_0x37e347 +=
          "\x09\x09" + _0x3e66c8[_0x91938a][_0x2dd225(0xe8)] + "\x0a");
    }
    _0x35acb9["reply"](_0x37e347[_0x2dd225(0xee)]());
  } else {
    if (_0x59fdd8) {
      let _0x4c5ba4 = await wiSearchQuery(_0x59fdd8);
      if (!_0x4c5ba4[_0x2dd225(0xe1)])
        throw _0x2dd225(0xf6) + _0x59fdd8 + _0x2dd225(0xe2);
      let _0x3e0c9b = [];
      for (
        let _0x4b48ba = 0x0;
        _0x4b48ba < _0x4c5ba4[_0x2dd225(0xe1)];
        _0x4b48ba++
      )
        _0x3e0c9b["push"]({
          title: _0x4c5ba4[_0x4b48ba][_0x2dd225(0xd2)],
          description: _0x4c5ba4[_0x4b48ba][_0x2dd225(0xeb)],
          rowId: _0x2775ed + _0x1c1be9 + "\x20" + _0x4c5ba4[_0x4b48ba]["link"],
        });
      let _0x1043da = {
          listMessage: {
            title: _0x2dd225(0xf5),
            description:
              _0x2dd225(0xd4) + _0x4c5ba4[_0x2dd225(0xe1)] + _0x2dd225(0xf0),
            buttonText: "Tap\x20Here\x20!",
            listType: 0x1,
            sections: [{ title: _0x2dd225(0xcd), rows: [..._0x3e0c9b] }],
            productListInfo: {},
            footerText: "Powered\x20by\x20Chandra-XD",
            contextlnfo: {},
          },
        },
        _0xb64a5 = await _0x4ad2c3[_0x2dd225(0xce)](
          _0x35acb9["chat"],
          _0x1043da,
          {}
        );
      await _0x2afd1e[_0x2dd225(0xe6)](
        _0x35acb9["chat"],
        { forward: _0xb64a5 },
        { quoted: _0x35acb9 }
      ),
        await apivisit;
    } else throw _0x2dd225(0xd1);
  }
};
(handler["help"] = [_0x150112(0xd7)]["map"](
  (_0x25a774) => _0x25a774 + _0x150112(0xf3)
)),
  (handler["tags"] = [_0x150112(0xda)]),
  (handler[_0x150112(0xf4)] = /^(wikihow)$/i);
export default handler;
export function wiSearchQuery(_0x5b867a) {
  return new Promise((_0xd5b1e9, _0x852850) => {
    const _0x5e4b9f = _0x9bfc;
    _0xf6cb01[_0x5e4b9f(0xcb)](
      "https://id.wikihow.com/wikiHowTo?search=" + _0x5b867a
    )[_0x5e4b9f(0xd5)]((_0x2deeaa) => {
      const _0x5991c9 = _0x5e4b9f;
      if (_0x2deeaa[_0x5991c9(0xcf)] === 0xc8) {
        const _0x35f2e0 = _0x2deeaa["data"],
          _0x196d00 = _0x25c8de[_0x5991c9(0xf1)](_0x35f2e0);
        let _0x524a56 = [];
        _0x196d00(_0x5991c9(0xca))[_0x5991c9(0xcc)](function (
          _0x901c2,
          _0x177b4f
        ) {
          const _0x5d6e45 = _0x5991c9;
          _0x524a56["push"]({
            title: _0x196d00(_0x177b4f)
              ["find"](_0x5d6e45(0xd8))
              [_0x5d6e45(0xd3)]()
              [_0x5d6e45(0xee)](),
            view: _0x196d00(_0x177b4f)
              [_0x5d6e45(0xd9)](_0x5d6e45(0xe7))
              ["text"]()
              [_0x5d6e45(0xee)]()
              [_0x5d6e45(0xe5)](/[\t]/g, "")
              [_0x5d6e45(0xe5)](/[\n]/g, "\x20"),
            link: _0x196d00(_0x177b4f)[_0x5d6e45(0xf2)]("href"),
          });
        }),
          _0xd5b1e9(_0x524a56);
      }
    });
  });
}
export function wiGetDatalink(_0x7e864) {
  return new Promise((_0x3ecf59, _0x4f42e8) => {
    const _0xb06ecf = _0x9bfc;
    _0xf6cb01[_0xb06ecf(0xcb)](_0x7e864)[_0xb06ecf(0xd5)]((_0x146d73) => {
      const _0x3567f0 = _0xb06ecf;
      if (_0x146d73["status"] === 0xc8) {
        const _0x34dc0f = _0x146d73[_0x3567f0(0xe8)],
          _0x127929 = _0x25c8de[_0x3567f0(0xf1)](_0x34dc0f);
        let _0x4fe19e = [];
        _0x127929(_0x3567f0(0xdb))[_0x3567f0(0xcc)](function (
          _0x3199da,
          _0x567b88
        ) {
          const _0x29cded = _0x3567f0;
          _0x4fe19e["push"]({
            title: _0x127929(_0x567b88)
              [_0x29cded(0xd9)]("b")
              [_0x29cded(0xd3)]()
              [_0x29cded(0xee)](),
            data: _0x127929(_0x567b88)
              [_0x29cded(0xd9)]("li")
              ["text"]()
              [_0x29cded(0xee)]()
              [_0x29cded(0xe5)](/[\[\]0-9]/g, "")
              [_0x29cded(0xe5)](/[\t]/g, "")
              ["replace"](/[\n]/g, "\x20"),
          });
        }),
          _0x3ecf59(_0x4fe19e);
      }
    });
  });
}