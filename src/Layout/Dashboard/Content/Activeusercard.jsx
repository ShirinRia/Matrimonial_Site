import verified from '../../../assets/tik.png'

const Activeusercard = ({name,email,image}) => {
    return (
        <div className='bg-[#F5F5F5] flex items-center gap-2 p-2 rounded-lg'>
            <div className="avatar online">
                <div className="w-10 rounded-full">
                    <img src={image} />
                </div>
            </div>

            <div>
                <div className='flex items-center'>
                    <p>{name}</p>
                    <img src={verified} alt="" className='w-7'/>
                </div>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Activeusercard;