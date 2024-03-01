import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { AttributeKey } from "./attribute.enum";

export class WeaponDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    mod: number;

    @IsNotEmpty()
    attr: AttributeKey;

    @IsNotEmpty()
    equipped: boolean;
}