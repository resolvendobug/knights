import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Knight } from "../interfaces/knight.interface";
import { Model } from "mongoose";
import { KnightDto } from "src/knights/Dto/knights.dto";
import { WeaponDto } from "src/knights/Dto/weapon.dto";
import { AttributeDto } from "src/knights/Dto/attribute.dto";
import { AttributeKey } from "src/knights/Dto/attribute.enum";

@Injectable()
export class KnightRepository {
    constructor(
        @InjectModel('knight') private readonly knightModel: Model<Knight>
    ) { }

    public async getKnightById(knightId: string): Promise<KnightDto> {
        try {
            return await this.knightModel.findById(knightId, { __v: false }).exec()
                .then(this.toKnightDto);

        } catch (error) {
            throw new BadRequestException('Error fetching knight by id');
        }
    }

    public async getKnights(): Promise<KnightDto[]> {
        const knights = await this.knightModel.find({}, { __v: false }).sort({ name: +1 }).exec();
        return knights.map(this.toKnightDto);
    }
   
    public async saveKnight(knight: KnightDto): Promise<KnightDto> {
        const newKnight = new this.knightModel(knight);
        const savedKnight = await newKnight.save();
        return this.toKnightDto(savedKnight);
    }

    public async updateKnight(knightId: string, body: KnightDto): Promise<KnightDto> {
        try{
        return await this.knightModel.findByIdAndUpdate( { _id: knightId }, body)
        } catch (error) {
            throw new BadRequestException('Error updating knight by id');
        }
    }

    public async deleteKnight(knightId: string):Promise<KnightDto> {
        try {
          const knightDeleted = await this.knightModel.findOneAndDelete({ _id: knightId }).exec();    
          return this.toKnightDto(knightDeleted);
        } catch (error) {
           throw new BadRequestException('Error deleting knight by id'); 
        }        
    }

    private toKnightDto(knight: Knight): KnightDto {
        return {
            _id: knight._id.toString(),
            name: knight.name,
            nickname: knight.nickname,
            birthday: knight.birthday,
            weapons: knight.weapons as WeaponDto[],
            attributes: knight.attributes as AttributeDto,
            keyAttribute: knight.keyAttribute as AttributeKey
        };
    }


}