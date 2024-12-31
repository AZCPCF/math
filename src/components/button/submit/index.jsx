const SubmitButton = ({
  className,
  type = "submit",
  value = "submit",
  onClick,
  onSubmit,
}) => (
  <input
    className="border-2 w-[90%] md:w-1/3 sm:w-1/2 xl:w-1/5 border-green-400 rounded-lg m-2 p-2 hover:bg-green-400"
    type={type}
    value={value}
    onClick={onClick}
    onSubmit={onSubmit}
  />
);
export default SubmitButton;
