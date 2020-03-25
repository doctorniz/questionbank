import { Module } from '@nestjs/common';
import { QuestionsResolver } from './questions.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './questions.entity';
import { QuestionsService } from './questions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [QuestionsResolver, QuestionsService]
})
export class QuestionsModule {}