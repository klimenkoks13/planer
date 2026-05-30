export default function Features({feature}) {
    return (
        <div>
            <span>{feature.icon}</span>
            <p>{feature.text}</p>
        </div>
    )
}