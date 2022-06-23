const Button = (props) => {
    // destructured
    const { title, activeClass, _callback } = props;
    return (
        <button className={activeClass} onClick={_callback}>{title}</button>
    )
}

export default Button;