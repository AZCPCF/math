const Label = ({ className, value }) => (
  <label className={`p-2 ${className}`} htmlFor={value}>
    {value}
  </label>
);

export default Label;
