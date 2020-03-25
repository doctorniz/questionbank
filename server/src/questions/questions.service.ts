import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "./questions.entity";
import { MongoRepository } from "typeorm";
import { inputQuestion } from "./input/questions.input";

@Injectable()
export class QuestionsService {
    constructor(
        @InjectRepository(Question)
        private readonly QuestionRepository: MongoRepository<Question>,
    ) {}

    async createQuestion(data:inputQuestion): Promise<Question> {
        let question = new Question()
        //if(data.id) question.id = require("mongodb").ObjectID(data.id)
        question.question = data.question
        question.answer = data.answer
        question.options = data.options
        question.explanation = data.explanation
        if(data.tags) question.tags = data.tags
        await this.QuestionRepository.save(question)
        return question
    }

    async getQuestions(): Promise<Question[]> {
        const questions = await this.QuestionRepository.find()
        return questions
    }

    async getQuestionById(id:string): Promise<Question> {
        const question = await this.QuestionRepository.findOne(id)
        return question
    }
}