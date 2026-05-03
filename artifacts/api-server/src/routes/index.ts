import { Router, type IRouter } from "express";
import healthRouter from "./health";
import chatRouter from "./chat";
import visitorsRouter from "./visitors";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(chatRouter);
router.use(visitorsRouter);
router.use(contactRouter);

export default router;
