import express from 'express';
import mongoose from 'mongoose';

import CharacterModel from '../db/characterModel.js';

export const fetchFavourites = async (req, res) => {
  try {
    const favourites = await CharacterModel.find();

    res.status(200).json(favourites);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const setFavourite =  async (req, res) => {
  const { id } = req.params;

  const newFav = new CharacterModel({characterId: id});

  try {
    await newFav.save();

    res.status(201).json(newFav);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const removeFavourite =  async (req, res) => {
  const { id } = req.params;

  const idInt = parseInt(id);

  try {
    await CharacterModel.deleteMany({ characterId: idInt })

    res.status(200).json({ message: "Favourite removed successfully. "});
  } catch (error) {
    res.status(404).json({ message: "Cannot find character with that id" });
  }
};