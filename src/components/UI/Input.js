import InputStyles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={InputStyles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}/>
    </div>
  );
};

export default Input;