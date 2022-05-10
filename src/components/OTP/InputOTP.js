import { set } from 'lodash';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import CountDownAnimation from './CountDownAnimation';
import { useRef } from 'react';

const InputOTP = (props) => {
    const childRef = useRef();
    const [otp, setOpt] = useState("")
    const handleChange = (otp) => {
        setOpt(otp);
        props.setUserOPTParent(otp);
    }
    const handleConfirmOTP = () => {
        props.handleSubmitOTP();

    }
    const handleClearbtn = () => {
        childRef.current.resetTimer();
    }
    return (
        <div className='input-otp-container'>
            <div className='title'> Enter verification code</div>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={"input-custom"}
            />
            <div className='timer'>
                {/* <CountDown
                    setIsDisableBtn={props.setIsDisableBtn}
                /> */}
                <CountDownAnimation
                    setIsDisableBtn={props.setIsDisableBtn}
                    ref={childRef}
                />
            </div>
            <div className='action'>
                <button className='btnClear' onClick={() => handleClearbtn()}
                    disabled={!props.isDisableBtn}
                >Clear</button>
                <button className='btnConfirm'
                    disabled={props.isDisableBtn}
                    onClick={() => handleConfirmOTP()}>Confirm</button>
            </div>
        </div>
    )
}
export default InputOTP;