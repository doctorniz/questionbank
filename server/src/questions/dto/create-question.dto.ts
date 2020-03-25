import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class CreateQuestionDto {
    @Field() readonly id?: string
    @Field() readonly question: string
    @Field(type => [OptionDto], {nullable: 'itemsAndList'}) 
        options?: [OptionDto];
    @Field() readonly answer: string
    @Field() readonly explanation: string
    @Field(type => [String], {nullable: 'itemsAndList'}) 
        tags?: Array<string>;
}

@ObjectType()
export class OptionDto {
    @Field() readonly optionKey: string
    @Field() readonly text: string
}