import Grid from "../Components/Grid";
import BarChart from "../Components/BarChart";
import LineBarChart from "../Components/LineBarChart";
import PieChart from "../Components/PieChart";
import { Paper } from "@material-ui/core";
function Dashboard() {
    return (      <Grid row={true}>
    <Grid column={true} sm={12} md={4} justify={"flex-end"}alignItems={"stretch"}   >
      <Paper>
        <BarChart/>
      </Paper>
    </Grid>
    <Grid  alignItems={"stretch"} column={true} sm={12} md={4}>
      <Paper>
      <PieChart/>
      </Paper>
    </Grid>
    <Grid column={true} sm={12} md={4} alignItems={"center"} >
      <Paper>
      <LineBarChart/>
      </Paper>
    </Grid>
   
      <Grid column={true} sm={12} md={4}alignItems={"stretch"} >
        <Paper>
        <LineBarChart/>
        </Paper>
      </Grid>
      <Grid column={true} sm={12} md={4}>
        <Paper>
        <BarChart/>
        </Paper>
      </Grid>
      <Grid column={true} sm={12} md={4}>
        <Paper>
        <PieChart/>
        </Paper>
      </Grid>
    </Grid>
    )
  }
  
  export default Dashboard;