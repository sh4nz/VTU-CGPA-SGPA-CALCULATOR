import { model, Schema } from 'mongoose';

// Define the Subject schema
const SubjectSchema = new Schema({
  sub_code: { type: String, required: true },
  credit: { type: Number, required: true },
});

// Define the main schema for the semester data
const SemesterSchema = new Schema({
  id: { type: String, required: true },
  sem: { type: String, required: true },
  scheme: { type: String, required: true },
  subjects: [SubjectSchema], // An array of Subject documents
});

// Create the model
const SemesterModel = model('Semester', SemesterSchema);

export { SemesterModel };