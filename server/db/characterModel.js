import mongoose from 'mongoose';

// model for favouriting characters
const characterSchema = mongoose.Schema({
  characterId: Number,
});

var CharacterModel = mongoose.model('CharacterModel', characterSchema);

export default CharacterModel;