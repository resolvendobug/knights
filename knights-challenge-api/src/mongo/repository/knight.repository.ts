import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Knight } from "../interfaces/knight.interface";
import { Model } from "mongoose";
import { UpdateNicknameDto } from "src/knights/Dto/updateNickname.dto";
import { KnightDto } from "src/knights/Dto/knights.dto";

@Injectable()
export class KnightRepository {
    constructor(
        @InjectModel('knight') private readonly knightModel: Model<Knight>
    ) { }

    public async getKnightById(knightId: string): Promise<Knight> {
        try {
            return await this.knightModel.findById(knightId, { __v: false }).exec();

        } catch (error) {
            throw new BadRequestException('Error fetching knight by id');
        }
    }

    public async getHeroes(): Promise<Knight[]> {
        return await this.knightModel.find({ isHeroes: true }, { __v: false }).sort({ name: +1 }).exec();

    }

    public async getKnights(): Promise<Knight[]> {
        return await this.knightModel.find({}, { __v: false }).sort({ name: +1 }).exec();

    }

    public async saveKnight(knight: KnightDto): Promise<Knight> {
        const newKnight = new this.knightModel(knight);
        return await newKnight.save();

    }

    public async updateKnight(knightId: string, body: UpdateNicknameDto): Promise<Knight> {
        try {
            return await this.knightModel.findByIdAndUpdate({ _id: knightId }, body, { new: true })
        } catch (error) {
            throw new BadRequestException('Error updating knight by id');
        }
    }

    public async deleteKnight(knightId: string): Promise<Knight> {
        try {
            return this.knightModel.findByIdAndUpdate({ _id: knightId }, { isHeroes: true }, { new: true })
        } catch (error) {
            throw new BadRequestException('Error deleting knight by id');
        }
    }
}