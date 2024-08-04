
const ButtonA = ({text, backgroundColor, fontColor}) => {
  return <div style={{backgroundColor: backgroundColor}} className={`mx-2 px-4 py-3 w-28 rounded-sm flex justify-center items-center`}>
            <button style={{color: fontColor}} className={`font-medium`}>{text}</button>
        </div>
}

export default ButtonA