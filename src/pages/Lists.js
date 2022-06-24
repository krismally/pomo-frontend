import { Box, ButtonGroup, Grid, Paper } from "@mui/material";
import ListToDo from "../components/ListToDo";

const Lists = (props) => {
    return (
        <Box display="flex"
        justifyContent="center"
        alignItems="center"
        p={15}
        >
        <Paper sx={{ width: '400px', bgcolor: '#81A6BA' }} elevation={3} >
        <Grid container justifyContent="center" gap={3} p={3} textAlign='center'>
            <ListToDo />
        </Grid>
        </Paper>
        </Box>
    );
};

export default Lists;