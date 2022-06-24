import { Link as RouterLink } from "react-router-dom";
import { Box, ButtonGroup, Grid, Paper, Button } from "@mui/material";

const ListDone = (props) => {
    return (
        <Box display="flex"
        justifyContent="center"
        alignItems="center"
        p={15}
        >
        <Paper sx={{ width: '400px', bgcolor: '#81A6BA' }} elevation={3} >
        <Grid container justifyContent="center" gap={3} p={3}>
            <ButtonGroup variant="contained">
                <Button component={RouterLink} to="/lists/" >
                    To Do
                </Button>
                <Button component={RouterLink} to="/lists/done" >
                    Done
                </Button>
            </ButtonGroup>
                <ul>
                    <li className="dummy-done"> Task 1 </li>
                    <li className="dummy-done"> Task 2 </li>
                    <li className="dummy-done"> Task 3 </li>
                    <li className="dummy-done"> Task 4 </li>
                    <li className="dummy-done"> Task 5 </li>
                    <li className="dummy-done"> Task 6 </li>
                </ul>

        </Grid>
        </Paper>
        </Box>
    );
}

export default ListDone;