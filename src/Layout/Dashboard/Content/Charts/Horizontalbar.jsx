
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart } from 'recharts';

const data = [
    {
        name: 'Jan',
        TotalUser: 4000,
        NewVisitor: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        TotalUser: 3000,
        NewVisitor: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        TotalUser: 2000,
        NewVisitor: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        TotalUser: 2780,
        NewVisitor: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        TotalUser: 1890,
        NewVisitor: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        TotalUser: 2390,
        NewVisitor: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        TotalUser: 3490,
        NewVisitor: 4300,
        amt: 2100,
    },
    {
        name: 'Aug',
        TotalUser: 4000,
        NewVisitor: 2400,
        amt: 2400,
    },
    {
        name: 'Sep',
        TotalUser: 3000,
        NewVisitor: 1398,
        amt: 2210,
    },
    {
        name: 'Oct',
        TotalUser: 2000,
        NewVisitor: 9800,
        amt: 2290,
    },
    {
        name: 'Nov',
        TotalUser: 2780,
        NewVisitor: 3908,
        amt: 2000,
    },
    {
        name: 'Dec',
        TotalUser: 1890,
        NewVisitor: 4800,
        amt: 2181,
    },

];
const Horizontalbar = () => {


    return (

        <BarChart
            width={650}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 5,
                left: 5,
                bottom: 5,
            }}
            barSize={10}
        >
            
            <Legend />
            
             <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip  />
           
            <Bar dataKey="TotalUser" fill="#076A49" />
            <Bar dataKey="NewVisitor" fill="#CB176B" />

        </BarChart>


    );



};

export default Horizontalbar;