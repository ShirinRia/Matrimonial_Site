import Card from "./Card";
import Navbar from "./Navbar";
import icon1 from '../../../assets/Frame.svg'
import icon2 from '../../../assets/Frame (2).svg'
import icon3 from '../../../assets/Frame (1).svg'
import icon4 from '../../../assets/profile-2user.svg'

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
        </div>
    );
};

export default Content;