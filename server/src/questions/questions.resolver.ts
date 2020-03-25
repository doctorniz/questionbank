import { Resolver, Query, Mutation, Args } from "@nestjs/graphql"
import { QuestionsService } from "./questions.service"
import { CreateQuestionDto } from "./dto/create-question.dto"
import { inputQuestion } from "./input/questions.input"
import { Question } from "./questions.entity"

@Resolver()
export class QuestionsResolver {
    constructor( 
          private readonly questionsService: QuestionsService
    ) {}

    @Query(() => [ CreateQuestionDto ])
    async getQuestions() {
        return this.questionsService.getQuestions()
    }

    @Query(() => CreateQuestionDto)
    async getQuestionById(@Args('id') id: string) {
        return this.questionsService.getQuestionById(id)
    }

    @Mutation(() => CreateQuestionDto)
    async createQuestion(@Args('data') data: inputQuestion) {
        return this.questionsService.createQuestion(data)
    }
}