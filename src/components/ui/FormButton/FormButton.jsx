import classes from './FormButton.module.css'

export default function FormButton({children, onClick, type}) {
    return (
        <button onClick={onClick} className={classes.button} type={type}>{children}</button>
    )

}
