import { Schema, models, model, Document} from 'mongoose'

export interface IShopList extends Document {
    title: string,
    description: string,
    ingredients: { ingredient: string, owned: boolean}[],
    dateAdded: Date
}

const ShopListSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    ingredients: [
        {
            ingredient: { type: String, required: true },
            owned: { type: Boolean, default: false}
        }
    ],
    dateAdded: { type: Date, required: true, default: Date.now },
});

const ShopList = models.ShopList || model('ShopList', ShopListSchema)

export default ShopList;