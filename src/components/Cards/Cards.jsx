import { iconsImgs } from "../../utils/images";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text"></h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c1-content">
            <p></p>
            <div className="lg-value"></div>
            <div className="card-wrapper">
                <span className="card-pin-hidden"></span>
                <span></span>
            </div>
            <div className="card-logo-wrapper">
                <div>
                    <p className="text text-silver-v1 expiry-text"></p>
                    <p className="text text-sm text-white"></p>
                </div>
                <div className="card-logo">
        
                <img  src="./src/assets/images/SECE.png"  id="img1"/>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
