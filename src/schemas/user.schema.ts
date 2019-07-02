import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  email: String,
  passportId: String,
  inn: String,
})
