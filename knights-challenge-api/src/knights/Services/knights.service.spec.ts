import { Test, TestingModule } from '@nestjs/testing';
import { KnightsService } from './knights.service';
import { KnightRepository } from '../../mongo/repository/knight.repository';
import { KnightDto } from '../Dto/knights.dto';
import { AttributeDto } from '../Dto/attribute.dto';
import { AttributeKey } from '../Dto/attribute.enum';

describe('KnightsService', () => {
  let service: KnightsService;
  let mockKnightRepository: any;

  beforeEach(async () => {
    mockKnightRepository = {
      getHeroes: jest.fn(),
      getKnightById: jest.fn(),
      getKnights: jest.fn(),
      saveKnight: jest.fn(),
      updateKnight: jest.fn(),
      deleteKnight: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        KnightsService,
        { provide: KnightRepository, useValue: mockKnightRepository },
      ],
    }).compile();

    service = module.get<KnightsService>(KnightsService);
  });

  it('should get heroes', async () => {
    const result = [{ name: 'hero1' }, { name: 'hero2' }];
    mockKnightRepository.getHeroes.mockReturnValue(result);

    expect(await service.getHeroes()).toEqual(result);
    expect(mockKnightRepository.getHeroes).toHaveBeenCalled();
  });

  
  it('should get knight by id', async () => {
    const result = { name: 'knight1' };
    mockKnightRepository.getKnightById.mockReturnValue(result);

    expect(await service.getKnightById('1')).toEqual(result);
    expect(mockKnightRepository.getKnightById).toHaveBeenCalledWith('1');
  });

  it('should get knights', async () => {
    const result = [{ name: 'knight1' }, { name: 'knight2' }];
    mockKnightRepository.getKnights.mockReturnValue(result);

    expect(await service.getKnights()).toEqual(result);
    expect(mockKnightRepository.getKnights).toHaveBeenCalled();
  });

  it('should save knight', async () => {
    const knight: KnightDto = {
      _id: '1',
      name: 'knight1',
      nickname: '',
      birthday: undefined,
      weapons: [],
      attributes: new AttributeDto,
      keyAttribute: AttributeKey.Strength
    };
    mockKnightRepository.saveKnight.mockReturnValue(knight);

    expect(await service.saveKnight(knight)).toEqual(knight);
    expect(mockKnightRepository.saveKnight).toHaveBeenCalledWith(knight);
  });

  it('should update knight', async () => {
    const knight = { name: 'knight1' };
    const body = { nickname: 'new nickname' };
    mockKnightRepository.updateKnight.mockReturnValue({ ...knight, ...body });

    expect(await service.updateKnight('1', body)).toEqual({ ...knight, ...body });
    expect(mockKnightRepository.updateKnight).toHaveBeenCalledWith('1', body);
  });

  it('should delete knight', async () => {
    const knight = { name: 'knight1' };
    mockKnightRepository.deleteKnight.mockReturnValue(knight);

    expect(await service.deleteKnight('1')).toEqual(knight);
    expect(mockKnightRepository.deleteKnight).toHaveBeenCalledWith('1');
  });
});
