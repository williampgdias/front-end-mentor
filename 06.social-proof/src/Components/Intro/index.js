import './index.css';
import Star from "./Images/icon-star.svg"

function CardIntro() {
    return (
        <div className='intro'>
            <div className='info'>
                <h1>10,000+ of our users love our products.</h1>

                <p>
                    We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
                </p>
            </div>

            <div className='stars'>
                <div className="stars1">
                    <img src= { Star } alt="" />
                    <img src= { Star } alt="" />
                    <img src= { Star } alt="" />
                    <img src= { Star } alt="" />
                    <img src= { Star } alt="" />
                    <p>Rated 5 Stars in Reviews</p>
                </div>
                <div className='stars2'>
                    <img src= { Star } alt="" />
                    <img src= { Star } alt="" />
                    <img src= { Star } alt="" />
                    <img src= { Star } alt="" />
                    <img src= { Star } alt="" />
                    <p>Rated 5 Stars in Report Guru</p>
                </div>
                <div className='stars3'>
                    <img src= { Star } alt="" />
                    <img src= { Star } alt="" />
                    <img src= { Star } alt="" />
                    <img src= { Star } alt="" />
                    <img src= { Star } alt="" />
                    <p>Rated 5 Stars in BestTech</p>
                </div>
            </div>
        </div>
    );
}

export default CardIntro; 