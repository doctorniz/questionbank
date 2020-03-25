import { InputType, Field } from "@nestjs/graphql";
import { Option } from '../questions.entity'
import { OptionDto } from "../dto/create-question.dto";

@InputType()
export class inputQuestion {
    @Field() readonly question: string
    @Field(type => [inputOption], {nullable: 'itemsAndList'}) 
        options: Array<inputOption>;
    @Field() readonly answer: string
    @Field() readonly explanation: string
    @Field(type => [String], {nullable: 'itemsAndList'})
        tags?: Array<string>;
}

@InputType()
export class inputOption {
    @Field() readonly optionKey: string
    @Field() readonly text: string
}