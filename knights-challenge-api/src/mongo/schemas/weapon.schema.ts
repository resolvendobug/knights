import { Schema } from "mongoose";

export const WeaponSchema = new Schema({
    name: String,
    mod: Number,
    attr: String,
    equipped: Boolean,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});