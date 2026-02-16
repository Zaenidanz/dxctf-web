import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import challenges from "./data/challenges.json";

const app = new Elysia()
  .use(cors());

app.get("/api/challenges", () => challenges);

app.post("/api/submit", ({ body }) => {
  const { challengeId, flag } = body as any;

  const chall = challenges.find(
    (c: any) => c.id === challengeId
  );

  if (chall && chall.flag === flag) {
    return { success: true };
  }

  return { success: false };
});

const port = process.env.PORT || 3000;

app.listen(port);

console.log(`DXCTF backend running on port ${port}`);

