import classes from "./InputField.module.css";

export default function InputField({label, value, placeholder, type = "text", onChange}) {
    return (
        <div className={classes.inputWrapper}>
            <label htmlFor={value} className={classes.inputLabel}>{label}</label>
            <input
                type={type}
                id={value}
                placeholder={placeholder}
                onChange={onChange}
                className={classes.inputField}>
            </input>
        </div>
    )
}