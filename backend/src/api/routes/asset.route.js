import { Router } from "express";
import { createAsset } from "../controllers/asset.controller";

const assetRouter = Router();

assetRouter.post("/", createAsset);

