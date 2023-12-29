
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
     
      legend:{
          
          display:true,
         
          
        }
  },
};
const labels= ['Male', 'Female',]
 const datas=  [70, 30]
 let customLabels = labels.map((label,index) =>`${label}  ${datas[index]}%`)
const data = {
  labels: customLabels,
  datasets: [
    {
      
      data:datas,
      backgroundColor: [
        '#076A49',
        '#CB176B',

      ],

      borderWidth: 0,
    },
  ],
};

const Doughnutchart = () => {
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart) {
      const { ctx} = chart;
      ctx.save();
      ctx.font = 'bold 20px sans-sarif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.fillText('100%', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
    }
  }
  return (
    <div className='h-[250px] '>
      <Doughnut data={data} plugins={[textCenter]} options={options}/>
    </div>
  )

}
export default Doughnutchart;
// ,sliceThickness