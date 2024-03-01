import { Schema } from "mongoose";
import { WeaponSchema } from "./weapon.schema";
import { AttributesSchema } from "./attributes.schema";

export const knightSchema = new Schema({
    name: String,
    nickname: String,
    birthday: Date,
    weapons: [WeaponSchema],
    attributes: AttributesSchema,
    keyAttribute: String, 
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

});