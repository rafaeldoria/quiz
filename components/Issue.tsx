import IssueModel from "../model/issue"
import styles from "../styles/Issue.module.css"
import Answer from "./Answer"
import Subject from "./Subject"
import Timer from "./Timer"

const letters = [
    { value: 'A', color: '#F2C866' },
    { value: 'B', color: '#F266BA' },
    { value: 'C', color: '#85D4F2' },
    { value: 'D', color: '#BCE596' },
]

interface IssueProps {
    value: IssueModel
    timeToAnswer?: number 
    onResponse: (index: number) => void
    timeout: () => void
}

export default function Issue(props: IssueProps) {
    const issue = props.value
    const timeDefaultToAnswer = 10

    function renderAnswers() {
        return issue.answers.map((answer, i) => {
            return (
                <Answer 
                    key={i}
                    value={answer}
                    index={i}
                    letter={letters[i].value}
                    colorBackLetter={letters[i].color}
                    onResponse={props.onResponse}
                />
            )
        })
    }
    return (
        <div className={styles.issue}>
            <Subject text={issue.subject} />
            <Timer duration={props.timeToAnswer ?? timeDefaultToAnswer} timeout={props.timeout}/>
            {renderAnswers()}
        </div>
    )
}