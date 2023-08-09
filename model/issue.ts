import random from "../functions/array"
import AnswerModel from "./answer"

export default class IssueModel {
    #id: number
    #subject: string
    #answers: AnswerModel[]
    #hit: boolean
    // #respondida : boolean

    constructor(
        id: number,
        subject: string,
        answers: AnswerModel[],
        hit = false,
    ){
        this.#id = id,
        this.#subject = subject,
        this.#answers = answers,
        this.#hit = hit
    }

    get id() {
        return this.#id
    }

    get subject() {
        return this.#subject
    }

    get answers() {
        return this.#answers
    }

    get hit() {
        return this.#hit
    }

    get notAnswerd() {
        return !this.answered
    }

    get answered() {
        for(let answer of this.#answers) {
            if(answer.revealed) return true
        }
        //TODO: testar com reduce
        return false
    }

    randomAnswers(): IssueModel{
        let randomAnswers = random(this.#answers)
        return new IssueModel(this.#id, this.#subject, randomAnswers, this.#hit)
    }

    chosenAnswer(index: number): IssueModel {
        const hited = this.#answers[index]?.correct
        const answers = this.#answers.map((answer, i) => {
            const selectedAnswer = index === i
            const shouldReveal = selectedAnswer || answer.correct
            return shouldReveal ? answer.reveal() : answer
        })
        return new IssueModel(this.#id, this.#subject, answers, hited)
    }

    transformerToObject() {
        return {
            id: this.#id,
            subject: this.#subject,
            answers: this.#answers.map(ans => ans.transformerToObject()),
            answered: this.answered,
            hit: this.#hit,  
        }
    }

    static returnIssueModel(obj: IssueModel): IssueModel {
        const answers = obj.answers.map(answer => AnswerModel.returnAnswerModel(answer))
        return new IssueModel(
            obj.id,
            obj.subject,
            answers,
            obj.hit
        )
    }
}