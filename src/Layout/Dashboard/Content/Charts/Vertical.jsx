
const Vertical = () => {
    return (
        <div>
            <progress className="progress progress-accent  w-56" value={0} max="100"></progress>
            <progress className="progress progress-black w-56" value="10" max="100"></progress>
            <progress className="progress progress-accent w-56" value="100" max="100"></progress>
        </div>
    );
}


export default Vertical;