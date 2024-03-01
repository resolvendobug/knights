import mongoose from "mongoose";

export interface Knight extends Document {
    readonly _id: mongoose.Schema.Types.ObjectId; 
    readonly name: string;
    readonly nickname: number;
    readonly birthday: Date;
    readonly weapon: object;
    readonly attributes: object;
    readonly keyAttribute: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}