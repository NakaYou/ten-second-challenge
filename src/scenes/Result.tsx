import { FC } from 'react'
import '../index.css'

type Props = {
    score: number
    onClickRetry: () => void
}

export const Result: FC<Props> = ({ score, onClickRetry }) => {
    return (
        <>
            <h1>SCORE:{score}</h1>
            <input type="button" value="RETRY" className="input" onClick={onClickRetry} />
        </>
    )
}