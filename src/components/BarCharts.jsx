import {BarChart} from "react-native-chart-kit";
import { windowWidth } from "../Dimensions";


const Barchart = () => {

  const chartConfig = {
    backgroundGradientFrom: "#FFF7DC",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFF7DC",
    backgroundGradientToOpacity: 0,
    color: (opacity = 0) => `rgba(98,149,226, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.3,
    useShadowColorFromDataset: false // optional, 
  };

const data = {
  labels: ["1", "2", "3", "4"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99],
      color: (opacity = 1) => `rgba(98,149,226, ${opacity})`, // Bar color
    },
  ],
};

return (
  <BarChart
    style={{
      marginVertical: 8,
      borderRadius: 16,
      justifyContent:"center",
      backgroundColor: "#FFF7DC"
    }}
    data={data}
    width={windowWidth}
    height={220}
    yAxisLabel=""
    chartConfig={chartConfig}
    verticalLabelRotation={10}
    barWidth={30}
  />
)

}
export default Barchart