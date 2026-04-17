import { expect, test } from "bun:test";
import { detect } from "@which/core";
import { loadFixture } from "../fixtures";

test("detects WordPress", async () => {
  expect(detect(await loadFixture("wordpress"))).toContain("WordPress");
});
