import mongoose, { Schema, Document, Model } from "mongoose";

// Define TypeScript interface for Company
export interface ICompany extends Document {
  name: string;
  email: string;
}

// Define Mongoose schema
const companySchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

// Export the Company model
const Company: Model<ICompany> =
  mongoose.models.user || mongoose.model<ICompany>("user", companySchema);

export default Company;