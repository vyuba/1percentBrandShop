import PropTypes from 'prop-types'

function Button({handleClick, text}) {
  return (
    <div>
        <button onClick={handleClick} className="button px-[15px] py-[11px] text-white bg-red-600 font-inter capitalize font-bold text-lg">
            {text}
        </button>
    </div>
    
  )
}

Button.propTypes = {
    handleClick: PropTypes.func,
    text: PropTypes.string,
  }
export default Button