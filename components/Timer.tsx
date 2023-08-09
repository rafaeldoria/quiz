import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Timer.module.css'
interface TimerProps {
    key: any
    duration: number
    timeout: () => void
}

export default function Timer(props: TimerProps) {
    const partDuration = (props.duration / 3) - 1;
    return (
        <div className={styles.timer}>
            <CountdownCircleTimer 
                duration={props.duration}
                size={120}
                isPlaying
                onComplete={props.timeout}
                colors={['#BCE596', '#F7B801', '#ED827A', '#A30000']}
                colorsTime={[
                    props.duration - partDuration,
                    props.duration - 2*partDuration,
                    props.duration - 3*partDuration,
                    0
                ]}
            >
                {({ remainingTime }) => remainingTime }
            </CountdownCircleTimer>
        </div>
    )
}