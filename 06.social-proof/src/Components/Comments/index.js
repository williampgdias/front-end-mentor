import './index.css';
import Anne from "./Images/image-anne.jpg";
import Colton from "./Images/image-colton.jpg";
import Irene from "./Images/image-irene.jpg";

function CardComment() {
    return (
        <div className='comment'>
            <div className='comment-c'>
                <div className='person-info'>
                    <div>
                        <img src= { Colton } alt='' className='img-profile' />
                    </div>
                    <div>
                        <h4>Colton Smith</h4> 
                        <h6>Verified Buyer</h6>
                    </div>
                </div>
                <div>
                    <p>
                        "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
                    </p>
                </div>
            </div>

            <div className='comment-i'>
                <div className='person-info'>
                    <div>
                        <img src= { Irene } alt='' className='img-profile' />
                    </div>
                    <div>
                        <h4>Irene Roberts</h4> 
                        <h6>Verified Buyer</h6>
                    </div>
                </div>
                    <div>
                    <p>
                        "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
                    </p>
                </div>
            </div>

            <div className='comment-a'>
                <div className='person-info'>
                    <div>
                        <img src= { Anne } alt='' className='img-profile' />
                    </div>
                    <div>
                        <h4>Anne Wallace</h4> 
                        <h6>Verified Buyer</h6>
                    </div>
                </div>
                <div>
                    <p>
                        "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardComment;

