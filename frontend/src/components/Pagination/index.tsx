import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './style.css';

function Pagination() {

    return (
        <div className="alvesmovie-pagination-container">
            <div className="alvesmovie-pagination-box">
                <button className="alvesmovie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="alvesmovie-pagination-button" disabled={false} >
                    <Arrow className="alvesmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );

}

export default Pagination;