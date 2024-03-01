import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class AttributeDto {
    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    @IsNumber()
    strength: number;

    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    @IsNumber()
    dexterity: number;

    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    @IsNumber()
    constitution: number;

    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    @IsNumber()
    intelligence: number;
    
    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    @IsNumber()
    wisdom: number;
    
    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    @IsNumber()
    charisma: number;
}