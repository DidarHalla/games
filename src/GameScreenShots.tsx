type ScreenShotsProps = {
  photoObj: [];
};
export function GameScreenShots(props: ScreenShotsProps) {
  return ({props.photoObj.map(v => {
    return <img src={v.image} alt="" />
  })})
}
