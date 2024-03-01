import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { AttributeDto } from "./attribute.dto";
import { WeaponDto } from "./weapon.dto";
import { Transform } from "class-transformer";
import { AttributeKey } from "./attribute.enum";
import { ApiProperty } from "@nestjs/swagger";


export class KnightsDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'John Doe' })
    name: string;

    @IsNotEmpty()
    @IsString()
    nickname: string;

    @IsDate()
    @IsNotEmpty()
    @Transform(({ value }) => new Date(value))
    birthday: Date;
    
    weapons: [WeaponDto];
    attributes: AttributeDto;
    
    keyAttribute: AttributeKey;    
}