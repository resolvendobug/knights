import { Schema } from "mongoose";

export const AttributesSchema = new Schema({
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number
    
});