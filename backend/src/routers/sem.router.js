import { Router } from "express";
import { SemesterModel } from "../models/semester.model.js";
import handler from "express-async-handler";

const router = Router();

router.get(
  "/scheme/:scheme/sem/:sem",
  handler(async (req, res) => {
    const { scheme, sem } = req.params;
    const result = await SemesterModel.find({ scheme: scheme, sem: sem });
    res.send(result[0].subjects);
  })
);

router.get(
  "/:semsId",
  handler(async (req, res) => {
    const { semsId } = req.params;
    const sems = await SemesterModel.findById(semsId);
    res.send(sems);
  })
);

export default router;
