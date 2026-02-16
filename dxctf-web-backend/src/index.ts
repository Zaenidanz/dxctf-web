import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import challenges from "./data/challenges.json";

const app = new Elysia()
  .use(cors());

/* GET CHALLENGES */
app.get("/api/challenges", () => challenges);

/* SUBMIT FLAG */
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

app.listen(3000);

console.log("DXCTF backend running http://localhost:3000");

