import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateNicknameDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'WWallace' })
    nickname: string;
}