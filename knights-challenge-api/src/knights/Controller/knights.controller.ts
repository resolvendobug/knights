import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { KnightDto } from '../Dto/knights.dto';
import { ApiBody } from '@nestjs/swagger';
import { KnightsService } from '../Services/knights.service';

@Controller('knights')
export class KnightsController {
    constructor(
        readonly knightsService: KnightsService
    ) {}

    @Get()
    public async getKnights(): Promise<KnightDto[]> {
        return await this.knightsService.getKnights();
    }

    @Get(':id')
    public async getKnightById(@Param('id') knightId:string): Promise<KnightDto> {
        return await this.knightsService.getKnightById(knightId);
    }

    @Post()
    @ApiBody({ type: KnightDto })
    public async saveKnight(@Body() body: KnightDto): Promise<KnightDto> {
        return await this.knightsService.saveKnight(body);      
    }

    @Patch(':id')
    @ApiBody({ type: KnightDto })
    public async updateKnight(@Param('id') knightId:string, @Body() body: KnightDto): Promise<KnightDto> {
        return await this.knightsService.updateKnight(knightId,body);
    }

    @Delete(':id')
    public async deleteKnight(@Param('id') knightId:string): Promise<KnightDto> {
        return await this.knightsService.deleteKnight(knightId);
    }
}
