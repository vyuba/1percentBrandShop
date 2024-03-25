

function Button({ handleClick }) {
  return (
    <div>
        <button onClick={handleClick} className="px-[15px] py-[11px] bg-red-600 font-inter capitalize font-bold text-lg">
            welcome
        </button>
    </div>
    
  )
}

export default Button