import { Router } from "express";

const visitorRouter = Router();
let count = 0;

visitorRouter.get("/visitors", (_req, res) => {
  res.json({ count });
});

visitorRouter.post("/visitors", (_req, res) => {
  count += 1;
  res.json({ count });
});

export default visitorRouter;
