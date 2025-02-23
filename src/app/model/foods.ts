
import mongoose,{Schema,Document,Model} from "mongoose";

export interface IFoods extends Document{
    name:string;
    price:number;
    url:string;
    description:string;
    category:string;
}

const foodSchema :Schema = new Schema({
    name: {type: String, required :true},
    price:{type: String, required :true},
    url:{type: String, required:true},
    description:{type: String, required:true},
    category:{type: String,enum:["mainDish","desert","beverage"], required:true}
},{timestamps:true});

foodSchema.index({ category:1 });

// create collection model
const FoodsModel: Model<IFoods> = 
    mongoose.models.foods || mongoose.model<IFoods>("foods",foodSchema)

export default FoodsModel;