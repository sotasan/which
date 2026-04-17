import type { Input } from "@which/core";

export async function loadFixture(name: string): Promise<Input> {
  const html = await Bun.file(
    new URL(`./${name}.html`, import.meta.url),
  ).text();
  const meta = await Bun.file(
    new URL(`./${name}.json`, import.meta.url),
  ).json();
  return { html, headers: meta.headers ?? {} };
}
