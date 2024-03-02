import { Schema,Document } from "mongoose";

export interface Knight extends Document {
    readonly _id: Schema.Types.ObjectId; 
    readonly name: string;
    readonly nickname: string;
    readonly birthday: Date;
    readonly weapons: object[];
    readonly attributes: object;
    readonly keyAttribute: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly isHeroes: boolean;
}