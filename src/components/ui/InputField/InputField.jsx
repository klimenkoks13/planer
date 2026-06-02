import classes from "./InputField.module.css";

export default function InputField({label, id, value, placeholder, type = "text", onChange}) {
    return (
        <div className={classes.inputWrapper}>
            <label htmlFor={id} className={classes.inputLabel}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={classes.inputField}>
            </input>
        </div>
    )
}