import { FC, useEffect, useState } from 'react'

type Props = {
  onCountOvered: () => void
}

export const CountDown: FC<Props> = ({ onCountOvered }) => {
  const [countDown, setCountDown] = useState(3);
  useEffect(() => {
    if (countDown === 0) { onCountOvered() }
  }, [countDown, onCountOvered]
  )
  setTimeout(() => setCountDown(countDown - 1), 1000)
  return (
    <h1>{countDown}</h1>
  )
}