import "./form-input.style.scss";
const FormInput = ({ lable, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps}></input>
      {lable && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {lable}
        </label>
      )}
    </div>
  );
};

export default FormInput;
