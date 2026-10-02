import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { once } from "node:events";
import test from "node:test";
import axios from "axios";
import nodemailer from "nodemailer";
import sharp from "sharp";

test("Sharp processes a real site image with the installed native libraries", async () => {
  const source = await readFile(new URL("../assets/logo.png", import.meta.url));
  const output = await sharp(source).resize({ width: 64 }).webp().toBuffer();
  const metadata = await sharp(output).metadata();

  assert.equal(metadata.format, "webp");
  assert.equal(metadata.width, 64);
  assert.ok(metadata.height > 0);
});

test("Nodemailer composes a message locally without an SMTP connection", async () => {
  const transport = nodemailer.createTransport({ streamTransport: true, buffer: true });
  const result = await transport.sendMail({
    from: "Restaurant <sender@example.invalid>",
    to: "recipient@example.invalid",
    subject: "Dependency compatibility check",
    text: "Local message only.",
  });

  assert.ok(Buffer.isBuffer(result.message));
  assert.match(result.message.toString(), /Subject: Dependency compatibility check/);
  assert.match(result.message.toString(), /Local message only\./);
});

test("Axios serializes JSON and handles an HTTP error from a local server", async (t) => {
  const server = createServer(async (request, response) => {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ received: JSON.parse(Buffer.concat(chunks).toString()) }));
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => new Promise((resolve) => {
    server.close(resolve);
    server.closeAllConnections();
  }));

  await assert.rejects(
    axios.post(`http://127.0.0.1:${server.address().port}/booking`, { test: true }, {
      proxy: false,
      timeout: 5000,
    }),
    (error) => {
      assert.equal(error.response.status, 404);
      assert.deepEqual(error.response.data, { received: { test: true } });
      return true;
    }
  );
});
