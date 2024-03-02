import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { KnightDto } from '../Dto/knights.dto';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { KnightsService } from '../Services/knights.service';
import { UpdateNicknameDto } from '../Dto/updateNickname.dto';
import { KnightResponseDto } from '../Dto/knightResponse.dto';

@ApiTags('knights')
@Controller('knights')
export class KnightsController {
    constructor(
        readonly knightsService: KnightsService
    ) { }

    @Get()
    @ApiQuery({ name: 'filter', required: false, description: 'Filter knights who became heroes', enum: ['heroes'] })
    public async getKnights(@Query('filter') filter?: string): Promise<KnightResponseDto[]> {
        if (filter === 'heroes') {
            const resHeroes = await this.knightsService.getHeroes();
            return resHeroes.map(this.knightsService.toResponse);
        }
        const res = await this.knightsService.getKnights();
        return res.map(this.knightsService.toResponse);
    }

    @Get(':id')
    public async getKnightById(@Param('id') knightId: string): Promise<KnightDto> {
        return await this.knightsService.getKnightById(knightId);
    }

    @Post()
    @ApiBody({ type: KnightDto })
    public async saveKnight(@Body() body: KnightDto): Promise<KnightDto> {
        return await this.knightsService.saveKnight(body);
    }


    @Patch(':id')
    @ApiBody({ type: UpdateNicknameDto })
    public async updateKnight(@Param('id') knightId: string, @Body() body: UpdateNicknameDto): Promise<KnightDto> {
        return await this.knightsService.updateKnight(knightId, body);
    }

    @Delete(':id')
    public async deleteKnight(@Param('id') knightId: string): Promise<KnightDto> {
        return await this.knightsService.deleteKnight(knightId);
    }
}
