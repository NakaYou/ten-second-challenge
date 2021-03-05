import { FC, useState, useEffect } from 'react'
import '../index.css'

type Props = {
    onCountOvered: (count: number) => void
}

export const Play: FC<Props> = ({ onCountOvered }) => {
    const [count, setCount] = useState(0)
    const [countDown, setCountDown] = useState(10);
    useEffect(() => {
        if (countDown === 0) { onCountOvered(count) }
    })
    setTimeout(() => setCountDown(countDown - 1), 1000)
    return (
        <>
            <h1>{countDown}</h1>
            <h2>{count}</h2>
            <input type="button" value="PUSH" className="input" onClick={() => setCount(count + 1)} />
        </>
    )
}