
import PropTypes from 'prop-types';
const Vertical = ({text, percent}) => {
    return (
        <div>
            <div>
                <div className="flex justify-between">
                <p>{text}</p>
                <p>{percent} %</p>
                </div>
            <progress className={`progress progress-success  w-full`} value={percent} max="100"></progress>
            </div>
           
        </div>
    );
}
Vertical.propTypes = {
    text:PropTypes.string,
    percent:PropTypes.string,
};

export default Vertical;