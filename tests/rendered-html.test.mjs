import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Kaedin's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Kaedin Vizitiu/);
  assert.match(html, /Learning/);
  assert.match(html, /Leading intentionally/);
  assert.match(html, /Serving faithfully/);
  assert.match(html, /California Baptist University/);
  assert.match(html, /kaedinvizitiu@icloud\.com/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("keeps approved contact destinations in the page source", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /linkedin\.com\/in\/kaedin-vizitiu-9aa9a6383/);
  assert.match(page, /instagram\.com\/kaedin\.vizitiu/);
  assert.match(page, /mailto:kaedinvizitiu@icloud\.com/);
  assert.match(page, /Integrity/);
  assert.match(page, /Discipline/);
  assert.match(page, /Courage/);
  assert.match(page, /Excellence/);
});
