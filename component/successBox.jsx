/* eslint-disable react/prop-types */
import tickIcon from '../assets/images/icon-list.svg';
import './successBox.css'

const SuccessBox = ({email, setSuccess}) => {
    return(
        <div className='success-container'>
            <img src={tickIcon} alt='tickIcon' />
            <h1>Thanks for subscribing !</h1>
            <p> A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription </p>
            <button type='button' onClick={() => setSuccess(false)}>Dismiss message</button>
        </div>
    )
}

export default SuccessBox;