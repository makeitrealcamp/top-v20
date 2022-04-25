import express, { Application } from "express";
import cors from "cors";

function expressConfig(app: Application) {
  app.use(cors());
  app.use(express.json());
}

export default expressConfig;
