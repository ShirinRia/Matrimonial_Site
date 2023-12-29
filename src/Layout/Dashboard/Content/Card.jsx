

const Card = ({ text, number, percentage, color, icon }) => {
    return (
        <div style={{ backgroundColor: color }} className="rounded-lg px-3 py-4 space-y-3 relative">
            <div className="absolute right-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="134" height="139" viewBox="0 0 134 139" fill="none">
                    <circle cx="120" cy="19" r="107.567" stroke="white" strokeOpacity="0.1" strokeWidth="23" />
                </svg>
            </div>
            <div className="absolute right-0 -top-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="101" viewBox="0 0 96 101" fill="none">
  <circle cx="82.0003" cy="19" r="69.5667" stroke="white" strokeOpacity="0.1" strokeWidth="23"/>
</svg>
           
            </div>
            <div className="flex justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="bg-white p-2 rounded-lg">
                        <img src={icon} alt="" />
                    </div>

                    <p className="text-lg font-medium text-white">{text}</p>

                </div>


                <div className="bg-white p-1 rounded-lg text-[#EA3C41] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
                        <path d="M6.14956 8.24607C6.46962 8.6362 7.06651 8.6362 7.38657 8.24607L12.4636 2.0574C12.8919 1.53524 12.5205 0.75 11.8451 0.75H1.69106C1.01567 0.75 0.644187 1.53524 1.07255 2.0574L6.14956 8.24607Z" fill="#EA3C41" />
                    </svg>
                    <p>{percentage}</p>
                </div>
            </div>

            <p className="text-4xl text-white font-semibold">{number}</p>
        </div>
    );
};

export default Card;