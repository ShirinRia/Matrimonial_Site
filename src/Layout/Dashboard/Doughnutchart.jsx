
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Male', 'Female', ],
  datasets: [
    {
      label: '# of Votes',
      data: [70, 30],
      backgroundColor: [
        '#076A49',
        '#CB176B',
        
      ],
     
      borderWidth: 0,
    },
  ],
};

const Doughnutchart = () => {
  const textCenter={
    id:'textCenter',
    beforeDatasetsDraw(chart,args,pluginOptions){
      const {ctx,data}=chart;
      ctx.save();
      ctx.font='bold 50px sans-sarif';
      ctx.fillStyle='black';
      ctx.textAlign='center';
      ctx.fillText('100%',chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y);
    }
  }
  return <Doughnut data={data} plugins={[textCenter]}/>;
}
export default Doughnutchart;
// ,sliceThickness