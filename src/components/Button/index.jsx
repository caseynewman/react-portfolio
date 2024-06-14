import './style.css'

export default function MyButton(props) {
    if (props.href) {
        return <a className="my-button" {...props} />
    }
    return (
        <button
            className="my-button"
            type="button"
            {...props}
        />
    )
}