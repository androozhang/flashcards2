import React from "react";
import './Card.css'

const Card = (props) => {
    const [flip, setFlip] = useState(false);
    const handleFlip = () => setFlip(True?False:True)
    if (!flip){
        front.style.display = 'none';
        back.style.display = 'block';
    }
    else {
        front.style.display = 'block';
        back.style.display = 'none';
    }
    return (
        <div className="card">
            <div className="front">
                <p>{props.cards[1]}</p>
            </div>
            <div className="back">

            </div>
        </div>
    )

}
export default Card;