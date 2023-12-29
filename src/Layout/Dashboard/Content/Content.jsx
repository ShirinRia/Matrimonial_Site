import Card from "./Card";
import Navbar from "./Navbar";
import icon1 from '../../../assets/Frame.svg'
import icon2 from '../../../assets/Frame (2).svg'
import icon3 from '../../../assets/Frame (1).svg'
import icon4 from '../../../assets/profile-2user.svg'
import Horizontalbar from "./Charts/Horizontalbar";
import Vertical from "./Charts/Vertical";

const Content = () => {
    return (
        <div className="w-full mx-4 space-y-7">
            <Navbar/>
            <div className="flex justify-between">
            <Card 
            icon={icon4}
            text={'Total Users'} 
            number={'348,561'} 
            percentage={'21.4%'} 
            color={'#17C8B7'}/>
            <Card 
            icon={icon1}
            text={'Total Male'} 
            number={'15024'} 
            percentage={'21.4%'} 
            color={'#F97832'}/>
            <Card
             icon={icon3}
             text={'Total Female'} 
             number={'10030'} 
             percentage={'12.4%'} 
             color={'#4E87F8'}
            />
            <Card
             icon={icon2}
             text={'New Visitor'} 
             number={'10030'} 
             percentage={'12.4%'} 
             color={'#4E87F8'}
            />
            
            </div>

            {/* charts */}
            <div className="grid grid-cols-12">
                <div className="col-span-8 bg-white rounded-lg py-7 px-7">
                    <p className="text-2xl font-semibold mb-9">User Analytics</p>
                    <Horizontalbar/>
                </div>
                <div className="col-span-4">
                    <Vertical/>
                </div>
                <div className="col-span-4"></div>
                <div className="col-span-4"></div>
                <div className="col-span-4"></div>
                <div className="col-span-6"></div>
                <div className="col-span-6"></div>
            </div>
        </div>
    );
};

export default Content;