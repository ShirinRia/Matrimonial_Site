
const Vertical = ({text, percent,color}) => {
    return (
        <div>
            <div>
                <div className="flex justify-between">
                <p>{text}</p>
                <p>{percent} %</p>
                </div>
            <progress className="progress progress-secondary  w-full" value={percent} max="100"></progress>
            </div>
           
        </div>
    );
}


export default Vertical;