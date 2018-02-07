import { Document, Schema } from 'mongoose';

export interface User {
  _id?: any;
  name?: string;
  email?: string;
  password?: string;
}

export type UserDocument = User & Document;

export const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
