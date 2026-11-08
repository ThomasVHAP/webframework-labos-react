import { useEffect, useState } from "react"
import styles from "./css.module.css"

interface SquareProps {
    setWork: React.Dispatch<React.SetStateAction<number>>;
    work: number;
}

const Square = ({setWork, work} : SquareProps) => {
    const [face, setFace] = useState<string>("😐")
    const [productivity, setProductivity] = useState<number>(1)
    const [clicked, setClicked] = useState<number>(0);

    useEffect(() => {
        if (work >= 100) {
            setProductivity(0);
            setFace("😃")
        }

        if (clicked === 10) {
            setFace("😵")
            setProductivity(0)
            let handle = setTimeout(() => {
                setFace("😐")
                setProductivity(1)
                setClicked(0)
            }, 5000);
 

            return () => {
                clearTimeout(handle)
            }
        }
    }, [clicked, work])

    const clickHandle : React.MouseEventHandler<HTMLDivElement> = () => {
        if (productivity === 0) return;
        setClicked(prev => {
            const nextClick = prev + 1
            setWork(prev => prev + (nextClick * productivity))
            return nextClick
        })
        
    }

    return (
        <>  
            <div className={styles.square} onClick={clickHandle} >
                <p>{face}</p>
            </div>  
        </>
    )
}

const HappyApp = () => {    
    const [work, setWork] = useState<number>(0)

    return (
        <>
            <h3>Happy</h3>

            <div>
                {work}
            </div>

            <div className={styles.squareList}>
                <Square work={work} setWork={setWork}/>
                <Square work={work} setWork={setWork}/>
                <Square work={work} setWork={setWork}/>
            </div>
        </>
    )
}

export default HappyApp;