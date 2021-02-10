import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255
  },
  email: {
    type: String,
    required: true,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  id: { type: String }
});

const UserModel = mongoose.model('UserModel', userSchema);

export default UserModel;