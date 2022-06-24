import Button from "@mui/material/Button";

const MainButton = (props) => {
    // destructured
    const { title, activeClass, _callback } = props;
    return (
        <Button variant="contained" className={activeClass} onClick={_callback}>{title}</Button>
    )
}

export default MainButton;