import { forwardRef } from "react";

const PinInput = forwardRef(({ onChangeFunc, maxLength, backspaceHandler }, ref) => {
  const handleKeyPress = (e) => {
    if(e.keyCode===8) backspaceHandler(e)
    else onChangeFunc(e);
  };
  return <input ref={ref} onKeyUp={handleKeyPress} maxLength={maxLength} />;
});

export default PinInput;
