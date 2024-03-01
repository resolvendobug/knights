import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { AttributeKey } from "./attribute.enum";
import { ApiProperty } from "@nestjs/swagger";

export class WeaponDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Excalibur' })
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    mod: number;

    @IsNotEmpty()
    @ApiProperty({ example: 'strength' })
    attr: AttributeKey;

    @IsNotEmpty()
    @ApiProperty({ example: true })
    equipped: boolean;
}