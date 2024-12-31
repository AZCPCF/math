import InputContainer from "./container";
import Label from "./label";

const Input = ({
  className = "",
  containerClassName = "",
  labelClassName = "",
  placeholder = "enter sth...",
  id = 0,
  value = null,
  label = "",
  onChange,
}) => (
  <InputContainer className={containerClassName}>
    <Label className={labelClassName} value={label} />
    <input
      className={`text-black w-full border-[3px] border-green-400 rounded-lg p-2 mt-2 ${className}`}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      value={value}
    />
  </InputContainer>
);

export default Input;
