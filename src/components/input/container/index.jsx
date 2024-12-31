const InputContainer = ({ className, children }) => (
  <div
    className={`w-[90%] md:w-1/3 sm:w-1/2 xl:w-1/5 text-left m-2 ${className}`}
  >
    {children}
  </div>
);

export default InputContainer;
