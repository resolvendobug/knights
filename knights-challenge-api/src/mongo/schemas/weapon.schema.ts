import { Schema } from "mongoose";

export const WeaponSchema = new Schema({
    name: String,
    mod: Number,
    attr: String,
    equipped: Boolean    
});