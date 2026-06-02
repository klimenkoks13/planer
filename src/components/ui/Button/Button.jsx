export default function Button({children, onClick, className, type, width, height, color, backgroundColor}) {
    return (
        <button
            onClick={onClick}
            className={className}
            type={type}
            style={{"width": width, "height": height, "backgroundColor": backgroundColor, color: color}}
        >
            {children}
        </button>
    )

}
