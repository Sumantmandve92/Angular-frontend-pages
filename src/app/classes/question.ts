export class Question {
    id?:number;
    status: string;

    question: string;
    subtitle: string;

    constructor(status: string, question: string, subtitle: string) {
        this.status = status;
        this.question = question;
        this.subtitle = subtitle
    }

}
