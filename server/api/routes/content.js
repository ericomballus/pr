const express = require("express");
const mongoose = require("mongoose");
const ContentModel = require("../models/ContentModel");
const router = express.Router();
let io = require("socket.io");

router.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:byQuery", async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
  } catch (e) {
    console.error(e);
  }
});

router.patch("/:id", async (req, res, next) => {});

module.exports = router;
