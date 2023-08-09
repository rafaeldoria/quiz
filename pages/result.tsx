import styles from "../styles/Result.module.css"
import Statistic from "../components/Statistic"
import { useRouter } from "next/router"
import Button from "../components/Button"

export default function Result(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    const total = +router.query.total
    const corrects = +router.query.corrects
    const percentage = Math.round((corrects/total) * 100)

    function backgroundPercent(percentage: number):string {
        let color = "#dbde33";

        if(percentage < 33){
            color = "#DE6A33";
        }else if(percentage > 66){
            color = "#33de5e";
        }

        return color;
    }

    return (
        <div className={styles.result}>
            <h1>Final Result</h1>
            <div className={styles.content}>
                <Statistic 
                    value={total}
                    text="Questions"
                />

                <Statistic 
                    value={corrects}
                    text="Corrects"
                    background="#9CD2A4"
                />

                <Statistic 
                    value={`${percentage}%`}
                    text="Percent"
                    background={backgroundPercent(percentage)}
                />
            </div>
            <Button 
                href="/"
                text="Try Again"
            />
        </div>
    )
}