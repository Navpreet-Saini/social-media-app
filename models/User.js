import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // hashed password if using credentials
  name: { type: String },
  profile_picture: { type: String },
  bio: { type: String },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
