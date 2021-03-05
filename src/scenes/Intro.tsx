import { FC } from 'react';
import '../index.css';

type Props = {
  onClickStart: () => void
}

export const Intro: FC<Props> = ({ onClickStart }) => {
  return (
    <div className="scene">
      <h1>10秒連打チャレンジ</h1>
      <p>ルール<br />10秒以内にたくさん連打しろ！</p>
      <input type="submit" value="START" className="input" onClick={onClickStart} />
    </div>
  )
}