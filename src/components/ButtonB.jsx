const ButtonB = ({text, bgcolor, fontcolor}) => {
  return <div style={{backgroundColor: bgcolor}} className={`m-2 w-28 rounded-md py-3 flex justify-center items-center`}>
  <button style={{color:fontcolor}}>
    {text}
  </button>
</div>
}

export default ButtonB