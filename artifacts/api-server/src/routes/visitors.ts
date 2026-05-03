import { Router } from "express";

const visitorRouter = Router();

let totalCount = 0;
let dailyCount = 0;
let currentDay = new Date().toDateString();

function checkDayReset() {
  const today = new Date().toDateString();
  if (today !== currentDay) {
    dailyCount = 0;
    currentDay = today;
  }
}

visitorRouter.get("/visitors", (_req, res) => {
  checkDayReset();
  res.json({ total: totalCount, daily: dailyCount });
});

visitorRouter.post("/visitors", (_req, res) => {
  checkDayReset();
  totalCount += 1;
  dailyCount += 1;
  res.json({ total: totalCount, daily: dailyCount });
});

export default visitorRouter;
