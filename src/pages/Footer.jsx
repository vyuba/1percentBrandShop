// import React from 'react'

function Footer(props) {
  return (
    <div className="font-Truculenta text-white capitalize">
            <h1 className="text-lg lg:text-xl font-semibold">{props.Header}</h1>
            <p className="text-lg lg:text-xl font-normal">{props.row1}</p>
            <p className="text-lg lg:text-xl font-normal">{props.row2}</p>
            <p className="text-lg lg:text-xl font-normal">{props.row3}</p>
            <p className="text-lg lg:text-xl font-normal">{props.row4}</p>
        </div>
  )
}

export default Footer