import AnswerModel from "../model/answer"
import styles from "../styles/Answer.module.css"

interface AnswerProps {
    value: AnswerModel
    index: number
    letter: string
    colorBackLetter: string
    onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.value
    return (
        <div className={styles.answer}
            onClick={() => props.onResponse(props.index)}
        >
            <div className={styles.content}>
                {!answer.revealed ? (
                    <div className={styles.front}>
                        <div className={styles.letter} 
                            style={{ backgroundColor: props.colorBackLetter }}
                        >
                            {props.letter}
                        </div>
                        <div className={styles.value}>
                            {answer.value}
                        </div>
                    </div>
                ) : (
                    <div className={styles.back}>
                        {answer.correct ? (
                            <div className={styles.correct}>
                                <div>A resposta certa é ...</div>
                                <div className={styles.value}>{answer.value}</div>
                            </div>
                        ) : (
                            <div className={styles.incorrect}>
                                <div>A resposta informada está errada...</div>
                                <div className={styles.value}>{answer.value}</div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}