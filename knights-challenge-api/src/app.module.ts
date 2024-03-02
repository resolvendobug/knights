import { Module } from '@nestjs/common';
import { KnightsModule } from './knights/knights.module';
import { MongooseModule } from '@nestjs/mongoose';
import { knightSchema } from './mongo/schemas/knight.schema';

@Module({
  imports: [KnightsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
