import { Injectable } from '@nestjs/common';
import { KnightDto } from '../Dto/knights.dto';
import { KnightRepository } from 'src/mongo/repository/knight.repository';

@Injectable()
export class KnightsService {
    constructor(
        readonly knightRepository: KnightRepository
        ) { }
        
    public async getKnightById(knightId: string): Promise<KnightDto> {
        return await this.knightRepository.getKnightById(knightId);        
    }
    
    public async getKnights(): Promise<KnightDto[]> {
        return await this.knightRepository.getKnights();
    }

    public async saveKnight(knight: KnightDto): Promise<KnightDto> {
        return await this.knightRepository.saveKnight(knight);
    }

    public async updateKnight(knightId: string, body: KnightDto): Promise<KnightDto> {
        return await this.knightRepository.updateKnight(knightId, body);
    }

    public async deleteKnight(knightId: string): Promise<KnightDto> {
        return await this.knightRepository.deleteKnight(knightId);
    }
}
