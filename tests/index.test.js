import base32 from "js-base32j";
import { test, expect } from "@jest/globals";

test("base32j empty", () => {
  expect(base32.encode("")).toBe("");
  expect(base32.decode("")).toBe("");
});

test("base32j encode simple", () => {
  let got = base32.encode("hello world");
  expect(got).toBe("d1kqsv3f41vqywmccg");
});

test("base32j decode simple", () => {
  let got = base32.decode("d1kqsv3f41vqywmccg");
  expect(got).toBe("hello world");
});

test("base32j encode unicode", () => {
  let got = base32.encode("小飼弾");
  expect(got).toBe("wqs8zud3rmkvtfg");
});

test("base32j decode unicode", () => {
  let got = base32.decode("wqs8zud3rmkvtfg");
  expect(got).toBe("小飼弾");
});

test("base32j complex", () => {
  let chars = Array.from(
    "Base32 编码会将字节切为 5 个一组，每 5 个字节可以重组为 8 个字符😄。如果不够 5 个字节，那么就在切出的最后一组后边充 0，充够 5 位，然后右边充 =，充够 8组。"
  );
  for (let i = 0; i < chars.length; i++) {
    let value = chars.slice(0, i).join("");
    let got = base32.decode(base32.encode(value));
    expect(got).toBe(value);
  }
});
