import { Test, TestingModule } from '@nestjs/testing';
import { KnightsController } from './knights.controller';
import { KnightsService } from '../Services/knights.service';
import { KnightDto } from '../Dto/knights.dto';
import { UpdateNicknameDto } from '../Dto/updateNickname.dto';

describe('KnightsController', () => {
  let controller: KnightsController;
  let service: KnightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KnightsController],
      providers: [
        {
          provide: KnightsService,
          useValue: {
            getKnights: jest.fn().mockResolvedValue([]),
            getKnightById: jest.fn().mockResolvedValue(new KnightDto()),
            saveKnight: jest.fn().mockResolvedValue(new KnightDto()),
            updateKnight: jest.fn().mockResolvedValue(new KnightDto()),
            deleteKnight: jest.fn().mockResolvedValue(new KnightDto()),
            getHeroes: jest.fn().mockResolvedValue([]),
            toResponse: jest.fn().mockReturnValue({}),
          },
        },
      ],
    }).compile();

    controller = module.get<KnightsController>(KnightsController);
    service = module.get<KnightsService>(KnightsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get knights', async () => {
    await controller.getKnights();
    expect(service.getKnights).toHaveBeenCalled();
  });

  it('should get knight by id', async () => {
    const id = '1';
    await controller.getKnightById(id);
    expect(service.getKnightById).toHaveBeenCalledWith(id);
  });

  it('should save knight', async () => {
    const dto = new KnightDto();
    await controller.saveKnight(dto);
    expect(service.saveKnight).toHaveBeenCalledWith(dto);
  });

  it('should update knight', async () => {
    const id = '1';
    const dto = new UpdateNicknameDto();
    await controller.updateKnight(id, dto);
    expect(service.updateKnight).toHaveBeenCalledWith(id, dto);
  });

  it('should delete knight', async () => {
    const id = '1';
    await controller.deleteKnight(id);
    expect(service.deleteKnight).toHaveBeenCalledWith(id);
  });

  it('should get heroes', async () => {
    await controller.getKnights('heroes');
    expect(service.getHeroes).toHaveBeenCalled();
  });
});