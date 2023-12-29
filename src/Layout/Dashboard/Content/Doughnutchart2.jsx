
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
       
        legend:{
            labels: {
                padding: 30 //default is 10
              },
            display:true,
            position:'right',
            
          }
    },
  };
 const labels= ['Bangladesh', 'USA', 'India', 'Canada', 'Pakistan']
 const datas= [40, 25, 15, 10, 10]
 let customLabels = labels.map((label,index) =>`${label}    ${datas[index]}`)
//  console.log(customLabels)
const data = {
   
   labels: customLabels,
    datasets: [
        {
          
            data: datas,
            backgroundColor: [
                '#076A49',
                '#CB176B',
                '#FF985F',
                "#9908F5",
                "#17C8B7"
            ],

            borderWidth: 0,
        },
    ],
};

const Doughnutchart2 = () => {

    return (
        <div className='h-[250px] ' >
            <Doughnut data={data}  options={options} className=' '/>
        </div>
    )

}
export default Doughnutchart2;
// ,sliceThickness