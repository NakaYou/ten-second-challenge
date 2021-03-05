import { useState } from 'react';
import { Intro } from './scenes/Intro'
import { CountDown } from './scenes/CountDown'
import { Play } from './scenes/Play'
import { Result } from './scenes/Result'


type SceneName = 'intro' | 'countDown' | 'play' | 'result'

export const Scene = () => {
  const [score, setScore] = useState(0);
  const [scene, setScene] = useState<SceneName>('intro');
  const handleCountOvered = (finalscore: number) => {
    setScene('result')
    setScore(finalscore)
  }

  return (
    <>
      {scene === 'intro' && <Intro onClickStart={() => setScene('countDown')} />}
      {scene === 'countDown' && <CountDown onCountOvered={() => setScene('play')} />}
      {scene === 'play' && <Play onCountOvered={handleCountOvered} />}
      {scene === 'result' && <Result score={score} onClickRetry={() => setScene('countDown')} />}
    </>
  )
}