import express from "express";
import { BandController } from "../controller/bandController";

export const bandRouter = express.Router();

const bandController = new BandController();


bandRouter.post("/signup-band", bandController.signup)
bandRouter.post("/approve", bandController.approvesBand)

bandRouter.get("/approve-band", bandController.getApprovedBand)