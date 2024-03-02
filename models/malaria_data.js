import { Schema, model, models } from "mongoose";

const MalariaCaseSchema = new Schema({
    patientName: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true
    },
    location: {
      type: String,
      required: true
    },
    symptoms: {
      type: String,
    // required: true
    },
    diagnosis: {
      type: String,
    //required: true
    },
    treatment: {
      type: String,
    //required: true
    },
    reportedAt: {
      type: Date,
      default: Date.now,
    }
  });
  
  //create model
  const MalariaCase = models.MalariaCase || model('MalariaCase', MalariaCaseSchema);
  
  module.exports = MalariaCase;