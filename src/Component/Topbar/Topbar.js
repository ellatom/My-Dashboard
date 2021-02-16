import moment from 'moment';
import Clock from '../Clock/Clock';
import './topbar.css';

const Topbar = () => {
    
    let datetime = moment().format('MMMM Do YYYY');
    return (
        <div className = "topbar_container">
            <div className="topbar__date">{datetime}</div>
            <span>{", "}</span>
            <div className="topbar__clock"><Clock/></div> 
        </div>
    )
}
export default Topbar;