import express from "express";
import {
  createNotepad,
  deleteNotepad,
  listNotepads,
  readNotepad,
  updateNotepad,
} from "./notepad.model.service.mjs";
import cors from "cors";

const app = express();
app.use(cors());

const notepadController = express.Router();

notepadController.get("/", async (req, res) => {
  const notepads = await listNotepads();
  res.status(200).json(notepads);
});

//Read Notepad
notepadController.get("/:id", async (req, res) => {
  const notepadId = req.params.id;
  const notepad = await readNotepad(notepadId);
  res.status(200).json(notepad);
});

//Create Notepad

notepadController.post("/", async (req, res) => {
  const notepadData = req.body;
  const notepad = await createNotepad(notepadData);
  res.status(200).json(notepad);
});

// Delete Notepad
notepadController.delete("/:id", async (req, res) => {
  const notepadId = req.params.id;
  const notepad = await deleteNotepad(notepadId);
  res.status(200).json(notepad);
});

notepadController.patch("/:id", async (req, res) => {
  const partialNotepad = req.body;
  const notepadId = req.params.id;
  const notepad = await updateNotepad(notepadId, partialNotepad);
  res.status(200).json(notepad);
});

export default notepadController;
