import express from "express";
import {
  fetchCharacters,
  loadMore,
  fetchDetails,
  setFavourite,
  removeFavourite,
  fetchFavourites,
} from "../controllers/characters.js";
// import verify from "../middleware/verify.js";

const router = express.Router();

//rick and morty api requests
router.get("/fetch", fetchCharacters);
router.get("/load/:nextPage", loadMore);
router.get("/fetch/:id", fetchDetails);

// db requests
router.get("/favourites", fetchFavourites);
router.post("/favourites/:id", setFavourite);
router.delete("/favourites/:id", removeFavourite);

export default router;
