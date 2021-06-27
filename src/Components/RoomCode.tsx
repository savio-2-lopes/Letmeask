import copyImg from '../assets/images/copy.svg';
import '../styles/roomCode.scss'

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <div className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar código da room" />
      </div>
      <span>Sala #{props.code}</span>
    </div>
  )
}