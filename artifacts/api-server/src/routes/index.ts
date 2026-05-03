import { Router, type IRouter } from "express";
import healthRouter from "./health";
import chatRouter from "./chat";
import visitorsRouter from "./visitors";

const router: IRouter = Router();

router.use(healthRouter);
router.use(chatRouter);
router.use(visitorsRouter);

export default router;
