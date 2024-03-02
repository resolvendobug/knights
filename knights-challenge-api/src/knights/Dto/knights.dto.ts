import { ArrayMaxSize, ArrayMinSize, IsDate, IsNotEmpty, IsNotEmptyObject, IsString, ValidateNested, arrayMaxSize, arrayMinSize } from "class-validator";
import { AttributeDto } from "./attribute.dto";
import { WeaponDto } from "./weapon.dto";
import { Transform, Type } from "class-transformer";
import { AttributeKey } from "./attribute.enum";
import { ApiProperty } from "@nestjs/swagger";


export class KnightDto {

    _id?: string;
    isHeroes?: boolean;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'William Wallace' })
    name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'WWallace' })
    nickname: string;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({ example: '1980-02-09' })
    @Transform(({ value }) => new Date(value))
    birthday: Date;
    
    @IsNotEmpty()
    @Type(() => WeaponDto)
    @ArrayMinSize(1)
    @ArrayMaxSize(2)
    @ApiProperty({ type: [WeaponDto] })
    @ValidateNested({ each: true })
    weapons: WeaponDto[];

    @IsNotEmpty()
    @Type(() => AttributeDto)
    @ValidateNested()
    @ApiProperty({ type: AttributeDto })
    attributes: AttributeDto;
    
    @IsNotEmpty()
    @ApiProperty({ example: 'strength' })
    keyAttribute: AttributeKey;    
}