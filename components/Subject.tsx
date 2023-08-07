import styles from '../styles/Subject.module.css'

interface SubjectProps {
    text: string
}

export default function Subject(props: SubjectProps) {
    return (
        <div className={styles.subject}>
            <span className={styles.text}>
                {props.text}
            </span>
        </div>
    )
}