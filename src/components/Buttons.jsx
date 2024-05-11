import React from 'react'
import styles from "../App.module.css"

const Buttons = ({onButtonClick}) => {

    const numbers = ["+","-","*","/","%",".",1,2,3,4,5,6,7,8,9,0,"C","="]

  return (
    <div className={styles.buttonsContainer}>
        {numbers.map((buttonName)=>
            <button className={styles.buttons} onClick={() => onButtonClick(buttonName)}>{buttonName}</button>
        )}
      </div>
  )
}

export default Buttons
