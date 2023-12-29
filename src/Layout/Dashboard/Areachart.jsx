
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend:
{
    display: false
}
   
  },
};

const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const data = {
  
  labels,
  datasets: [
    {
      fill: true,
      
      data: [1000, 500, 2500,1000,3800, 800,2100],  
      borderWidth: 1, 
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: ({chart: {ctx}}) => {
        const bg = ctx.createLinearGradient(0, 0, 0, 200);
        bg.addColorStop(0, "#076A495C");
        bg.addColorStop(1, "#CB176B0F");
        
        ctx.fillStyle = bg;
        ctx.fillRect(20, 20, 150, 100);
        return bg;
      },
      lineTension: 0.4,        
      radius: 6,
    //   height:400
    },
  ],
};


const Areachart = () =>  {
   
   
  return <Line options={options} height="15px"
  width="20px" data={data} />;
}
export default Areachart;
