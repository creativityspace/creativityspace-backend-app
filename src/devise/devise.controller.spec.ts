import { Test, TestingModule } from '@nestjs/testing';
import { DeviseController } from './devise.controller';
import { DeviseService } from './devise.service';

describe('DeviseController', () => {
  let controller: DeviseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviseController],
      providers: [DeviseService],
    }).compile();

    controller = module.get<DeviseController>(DeviseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
