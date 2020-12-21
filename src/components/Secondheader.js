import React from 'react';
import './Secondheader.css';
import DehazeRoundedIcon from '@material-ui/icons/DehazeRounded';
import { Link } from 'react-router-dom';

function Secondheader() {
    return (
        <nav className="secondheader">
            <Link>
                
                <div className="header_itam">
                    <DehazeRoundedIcon />
                </div>

            </Link>
            <Link>
                <div className="header_itam">
                    <span className="header_tab">Today's Deals</span>
                </div></Link>

            <Link>
                <div className="header_itam">
                <span className="header_tab">Coustomer Service</span>
                </div>
            </Link>
            <Link>
                <div className="header_itam">
                <span classname="header_tab">Gift Cards</span>
                </div>
            </Link>
            <Link>
                <div className="header_itam">
                <span className="header_tab">Sell</span>
                </div>
            </Link>
            <Link>
                <div className="header_itam">
                <span className="header_tab">Registry</span>
                </div>
            </Link>           

        </nav>
    )
}

export default Secondheader
