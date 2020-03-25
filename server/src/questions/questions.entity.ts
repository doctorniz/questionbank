import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";

export class Option {
    @Column()
    optionKey: string;

    @Column()
    text: string;
}


@Entity('questions')
export class Question {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    question: string;

    @Column(type => Option)
    options: Option[];

    @Column()
    answer: string;

    @Column()
    explanation: string;

    @Column()
    tags: string[];

}