import styles from '../styles/Statistic.module.css'

interface StatisticProps {
    value: any
    text: string
    background?: string
    color?: string
}

export default function statistic(props: StatisticProps) {
    return (
        <div className={styles.statistic}>
            <div className={styles.value} style={{
                backgroundColor: props.background ?? '#FDD60F',
                color: props.color ?? '#333'
            }}>
                {props.value}
            </div>

            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    )
}