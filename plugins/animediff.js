(function (_0x15334d, _0x2afb17) {
  const _0x27e189 = _0x15334d();
  function _0x1e1c84(_0x3be34e, _0xa78bf3) {
    return _0x56a6(_0x3be34e - -0x109, _0xa78bf3);
  }
  while (!![]) {
    try {
      const _0xa4d3cf =
        -parseInt(_0x1e1c84(-0x9f, -0x95)) / 0x1 +
        (-parseInt(_0x1e1c84(-0x8b, -0x9f)) / 0x2) *
          (parseInt(_0x1e1c84(-0x85, -0x87)) / 0x3) +
        (parseInt(_0x1e1c84(-0x9e, -0x89)) / 0x4) *
          (parseInt(_0x1e1c84(-0x94, -0x93)) / 0x5) +
        (-parseInt(_0x1e1c84(-0xa2, -0xad)) / 0x6) *
          (-parseInt(_0x1e1c84(-0x8a, -0x8f)) / 0x7) +
        parseInt(_0x1e1c84(-0x87, -0x88)) / 0x8 +
        parseInt(_0x1e1c84(-0x8e, -0x85)) / 0x9 +
        (parseInt(_0x1e1c84(-0x83, -0x87)) / 0xa) *
          (-parseInt(_0x1e1c84(-0x95, -0x84)) / 0xb);
      if (_0xa4d3cf === _0x2afb17) break;
      else _0x27e189["push"](_0x27e189["shift"]());
    } catch (_0x232a83) {
      _0x27e189["push"](_0x27e189["shift"]());
    }
  }
})(_0x149b, 0x367ef);
import _0x1bd9e5 from "node-fetch";
import _0x5ddcf6 from "form-data";
function _0x149b() {
  const _0x3fa363 = [
    "model_version",
    "multipart/form-data;\x20charset=uttf-8",
    "Masukan\x20Promptnya\x0aExample:\x0a.animedif\x20neko\x20girl,\x20cute\x20face,\x20upper\x20body,\x20white\x20hair,\x20look\x20at\x20viewer",
    "https://api-inference.huggingface.co/models/Ojimi/anime-kawai-diffusion",
    "3512349alKMXr",
    "error",
    "enhance",
    "2SerQax",
    "39172giBAGr",
    "image",
    ".ai/",
    "3438056lMNPWD",
    "arrayBuffer",
    "645132UdYVNi",
    "blob",
    "160MrtFWd",
    ".vyro",
    "data",
    "https:",
    "okhttp/4.9.3",
    "help",
    "binary",
    "sendFile",
    "Keep-Alive",
    "append",
    "concat",
    "command",
    "POST",
    "://",
    "96aTiatc",
    "from",
    "image/jpeg",
    "342820GuYRMd",
    "927956RopqEL",
    ".ai",
    "limit",
    "chat",
    "animedif",
    "recolor",
    "base64",
    "Prompt:\x20",
    "Bearer\x20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",
    "247819EUAWam",
    "5htTKjF",
    "inferenceengine",
  ];
  _0x149b = function () {
    return _0x3fa363;
  };
  return _0x149b();
}
import _0xf5497d from "jimp";
let handler = async (
  _0x36aa1d,
  {
    conn: _0x13933c,
    isOwner: _0x2ae70e,
    usedPrefix: _0x1a50cd,
    command: _0x213cd8,
    text: _0x2888e2,
  }
) => {
  if (!_0x2888e2) throw _0x109e51(-0x1c7, -0x1cf);
  _0x36aa1d["reply"](wait);
  let _0xd53a81 = await query(_0x2888e2),
    _0x342c44 = await processing(_0xd53a81, _0x109e51(-0x1b7, -0x1cb));
  function _0x109e51(_0x43f63b, _0x107491) {
    return _0x56a6(_0x107491 - -0x248, _0x43f63b);
  }
  _0x13933c[_0x109e51(-0x1d2, -0x1bb)](
    _0x36aa1d[_0x109e51(-0x1e5, -0x1da)],
    _0x342c44,
    "anu.jpg",
    _0x109e51(-0x1c9, -0x1d6) + _0x2888e2,
    _0x36aa1d
  );
};
function _0x56a6(_0x562051, _0x114a4a) {
  const _0x149b4f = _0x149b();
  return (
    (_0x56a6 = function (_0x56a68e, _0x2f2d95) {
      _0x56a68e = _0x56a68e - 0x66;
      let _0x396bde = _0x149b4f[_0x56a68e];
      return _0x396bde;
    }),
    _0x56a6(_0x562051, _0x114a4a)
  );
}
handler[_0x374124(0x41b, 0x430)] = [_0x374124(0x3ff, 0x40d)];
function _0x374124(_0x57ac9d, _0x35fc82) {
  return _0x56a6(_0x57ac9d - 0x390, _0x35fc82);
}
(handler["tags"] = ["ai"]),
  (handler[_0x374124(0x421, 0x41e)] = /^(animedif)$/i),
  (handler[_0x374124(0x3fd, 0x40a)] = !![]);
export default handler;
async function query(_0x13776e) {
  const _0x3bb269 = await _0x1bd9e5(_0x37c2a5(0x7f, 0x8f), {
      headers: { Authorization: _0x37c2a5(0x9a, 0x88) },
      method: _0x37c2a5(0xa7, 0xa7),
      body: JSON["stringify"](_0x13776e),
    }),
    _0x6aa42 = await _0x3bb269[_0x37c2a5(0x98, 0x9a)]();
  function _0x37c2a5(_0x386e8e, _0x43b02c) {
    return _0x374124(_0x43b02c - -0x37b, _0x386e8e);
  }
  let _0x514f69 = await _0x6aa42[_0x37c2a5(0x9d, 0x98)]();
  const _0x39cf78 = Buffer[_0x37c2a5(0x8f, 0x7d)](
    _0x514f69,
    _0x37c2a5(0x84, 0x86)
  );
  return _0x39cf78;
}
async function processing(_0x25db8f, _0x340875) {
  return new Promise(async (_0x20390b, _0x10d286) => {
    function _0xd1403c(_0x1e5ea2, _0x1fde24) {
      return _0x56a6(_0x1e5ea2 - 0x1d4, _0x1fde24);
    }
    let _0x33db96 = [
      _0xd1403c(0x251, 0x24b),
      _0xd1403c(0x244, 0x240),
      "dehaze",
    ];
    _0x33db96["includes"](_0x340875)
      ? (_0x340875 = _0x340875)
      : (_0x340875 = _0x33db96[0x0]);
    let _0x2fd825,
      _0x57c668 = new _0x5ddcf6(),
      _0x1a27ad =
        "https" +
        _0xd1403c(0x23a, 0x244) +
        _0xd1403c(0x24a, 0x24b) +
        ".vyro" +
        _0xd1403c(0x255, 0x249) +
        _0x340875;
    _0x57c668[_0xd1403c(0x263, 0x256)](_0xd1403c(0x24b, 0x23f), 0x1, {
      "Content-Transfer-Encoding": _0xd1403c(0x260, 0x250),
      contentType: _0xd1403c(0x24c, 0x24c),
    }),
      _0x57c668[_0xd1403c(0x263, 0x258)](
        _0xd1403c(0x254, 0x249),
        Buffer[_0xd1403c(0x23c, 0x249)](_0x25db8f),
        {
          filename: "enhance_image_body.jpg",
          contentType: _0xd1403c(0x23d, 0x23f),
        }
      ),
      _0x57c668["submit"](
        {
          url: _0x1a27ad,
          host:
            "inferenceengine" +
            _0xd1403c(0x25b, 0x247) +
            _0xd1403c(0x240, 0x245),
          path: "/" + _0x340875,
          protocol: _0xd1403c(0x25d, 0x26a),
          headers: {
            "User-Agent": _0xd1403c(0x25e, 0x255),
            Connection: _0xd1403c(0x262, 0x25f),
            "Accept-Encoding": "gzip",
          },
        },
        function (_0x2c5649, _0x9dd200) {
          if (_0x2c5649) _0x10d286();
          function _0x4e85d3(_0x224974, _0x4ae4cc) {
            return _0xd1403c(_0x4ae4cc - -0xbb, _0x224974);
          }
          let _0x2130b4 = [];
          _0x9dd200["on"](
            _0x4e85d3(0x1b1, 0x1a1),
            function (_0x2ceae6, _0x485bb9) {
              _0x2130b4["push"](_0x2ceae6);
            }
          )["on"]("end", () => {
            function _0xa1af83(_0x5520d6, _0x1017ec) {
              return _0x4e85d3(_0x1017ec, _0x5520d6 - 0x1de);
            }
            _0x20390b(Buffer[_0xa1af83(0x387, 0x379)](_0x2130b4));
          }),
            _0x9dd200["on"](_0x4e85d3(0x19f, 0x195), (_0x215d07) => {
              _0x10d286();
            });
        }
      );
  });
}
``;
