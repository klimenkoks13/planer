import classes from './FormButton.module.css'

export default function FormButton({children, onClick}) {
    return (
        <button onClick={onClick} className={classes.button}>{children}</button>
    )

}
