
import mongoose,{Schema,Document,Model} from "mongoose";

export interface IFoods extends Document{
    name:string;
    pricle:number;
    url:string
}

const foodSchema :Schema = new Schema({
    name: {type: String, required :true},
    price:{type: Number, required :true},
    url:{type: String, required:true},
    description:{type: String, required:false},
},{timestamps:true});

const FoodsModel: Model<IFoods> = 
    mongoose.models.foods || mongoose.model<IFoods>("foods",foodSchema)

export default FoodsModel;