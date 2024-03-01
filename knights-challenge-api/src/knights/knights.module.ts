import { Module } from '@nestjs/common';
import { KnightsController } from './Controller/knights.controller';
import { KnightsService } from './Services/knights.service';
import { KnightRepository } from 'src/mongo/repository/knight.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { knightSchema } from 'src/mongo/schemas/knight.schema';

@Module({
  controllers: [KnightsController],
  providers: [KnightsService,KnightRepository],
  imports: [MongooseModule.forRoot('mongodb://localhost/knights'),
  MongooseModule.forFeature([
    { name: 'knight', schema: knightSchema }
  ])],
})
export class KnightsModule {}
