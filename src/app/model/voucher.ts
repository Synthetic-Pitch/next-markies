import mongoose,{Schema,Document,Model} from "mongoose";

export interface IFoods extends Document{
    url:string;
    discount:number;
    freeShipping:boolean
}

const foodSchema :Schema = new Schema({
    url:{type: String, required :true},
    discount:{type:Number,required:true},
    freeShipping:{type:Boolean,required:true},
    stocks:{type:Number,required:true},
},{timestamps:true});

// create collection model
const VoucherModel: Model<IFoods> = 
    mongoose.models.voucher || mongoose.model<IFoods>("voucher",foodSchema)

export default VoucherModel;