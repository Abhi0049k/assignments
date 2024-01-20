import { useState, useRef } from "react";
import PropTypes from "prop-types";
import PinInput from "./PinInput";

const Pin = ({ length, setPin }) => {
  const [inputBox] = useState(new Array(length).fill("a"));
  const inputRef = useRef([]);
  const [indexBoxValue] = useState(new Array(length).fill(""));
  const onChangeHandler = (e, index) => {
    indexBoxValue[index] = e.target.value;
    if (index < length - 1) inputRef.current[index + 1].focus();
    setPin(indexBoxValue.join(''));
  };
  
  const backspaceHandler = (e, index) => {
    if (index > 0) inputRef.current[index - 1].focus();
    indexBoxValue[index] = e.target.value;
    setPin(indexBoxValue.join(''));
  };

  const pasteHandler = (e)=>{
    const data = e.clipboardData.getData('text').split('').filter((_, i)=> i<length);
    data.forEach((item, index)=>{
      indexBoxValue[index] = item
      inputRef.current[index].value = item;
      if(index < length-1){
        inputRef.current[index+1].focus();
      }
    })
  }

  return (
    <div onPaste={pasteHandler}>
      {inputBox.map((_, index) => {
        return (
          //   <input
          //     ref={(element) => {
          //       inputRef.current[index] = element;
          //     }}
          //     key={index}
          //     maxLength={1}
          //     onChange={(e) => onChangeHandler(e, index)}
          //   />
          <PinInput
            ref={(el) => {
              inputRef.current[index] = el;
            }}
            key={index}
            onChangeFunc={(e) => onChangeHandler(e, index)}
            maxLength={1}
            backspaceHandler={(e) => backspaceHandler(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Pin;

Pin.propTypes = {
  length: PropTypes.number.isRequired,
};
