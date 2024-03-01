import { Body, Controller, Get, Post } from '@nestjs/common';
import { KnightsDto } from './Dto/knights.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('knights')
export class KnightsController {
    constructor() {}

    @Get()
    getKnights() {
        return 'Get all knights';
    }

    @Post()
    @ApiBody({ type: KnightsDto })
    saveKnight(@Body() body: KnightsDto): Promise<KnightsDto> {
        
        return Promise.resolve(body);
    }
}
