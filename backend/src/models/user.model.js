import { model, Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    fullName: { type: String, required: true },
    usn: { type: String, required: true, unique: true },
    currentSem: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

export const UserModel = model('user', UserSchema);
