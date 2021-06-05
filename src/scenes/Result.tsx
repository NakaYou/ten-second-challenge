import {FC, useEffect, useState} from 'react'
import '../index.css'

type Props = {
    score: number
    onClickRetry: () => void
}

async function postAndGet(score: number, setScoreState: React.Dispatch<React.SetStateAction<number[]>>){
    await fetch("http://localhost:3000", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            score
        })
    })

    fetch("http://localhost:3000", {
        credentials: "omit"
    })
        .then(res => res.json())
        .then(data => setScoreState(data))
}

export const Result: FC<Props> = ({score, onClickRetry}) => {
    const [ScoreState, setScoreState] = useState<number[]>([])
    useEffect(() => {
        postAndGet(score,setScoreState)
    }, [])
    return (
        <>
            <h1>SCORE:{score}</h1>
            <h1>:RANKING:</h1>
            {ScoreState.map(x => <h1>{x}</h1>)}
            <input type="button" value="RETRY" className="input" onClick={onClickRetry}/>
            <br/>
            <br/>
            <a href="https://github.com/NakaYou/ten-second-challenge">コードだよ</a>
        </>
    )
}