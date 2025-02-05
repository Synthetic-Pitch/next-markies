
import mongoose,{Schema,Document,Model} from "mongoose";

export interface IFoods extends Document{
    name:string;
    pricle:number;
    url:string
}

const foodSchema :Schema = new Schema({
    name: {type: String, required :true},
    age: {type:Number, required :true},
},{timestamps:true});

foodSchema.index({ category:1 });

// create collection model
const TestModel: Model<IFoods> = 
    mongoose.models.test || mongoose.model<IFoods>("test",foodSchema)

export default TestModel;