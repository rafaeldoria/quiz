import styles from "../styles/Quiz.module.css"
import IssueModel from "../model/issue"
import Issue from './Issue';
import Button from "./Button";

interface QuizProps {
    issue: IssueModel
    last: boolean
    issueAnswered: (issue: IssueModel) => void
    nextStep: () => void
}

export default function Quiz(props: QuizProps){

    function issueAnswered(index: number) {
        if(props.issue.notAnswerd){
            props.issueAnswered(props.issue.chosenAnswer(index))
        }
    }
    return (
        <div className={styles.quiz}>
            {props.issue ? 
                <Issue 
                    value={props.issue}
                    timeToAnswer={6}
                    onResponse={issueAnswered} 
                    timeout={props.nextStep}
                /> : false
            }
            
            <Button 
                onClick={props.nextStep}
                text={props.last ? 'End' : 'Next'}
            />
        </div>
    )
}