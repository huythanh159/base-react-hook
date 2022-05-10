import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import CountDownAnimation from "./CountDownAnimation";
import "./OTP.scss"
import { useState } from "react";
const OTP = () => {
    const [orgOTPParent, setOrgOTPParent] = useState("");
    const [userOTPParent, setUserOPTParent] = useState("");
    const [isDisableBtn, setIsDisableBtn] = useState(false);
    
    const handleSubmitOTP = () => {
        if (!orgOTPParent) {
            alert("Please Generate OTP...");
            return;
        }
        if (!userOTPParent) {
            alert("Please Generate OTP...");
            return;
        }
        if (+orgOTPParent === +userOTPParent) {
            alert("OTP Corret!!!");
            setIsDisableBtn(true)
        } else {
            alert("OTP Wrong!!!");
        }

    }
    return (
        <div className="Otp-parent-container">

            <GenerateOTP
                //truyen props
                setOrgOTPParent={setOrgOTPParent}
            />
            <InputOTP
                //truyen props
                setUserOPTParent={setUserOPTParent}
                handleSubmitOTP={handleSubmitOTP}
                isDisableBtn={isDisableBtn}
                setIsDisableBtn={setIsDisableBtn}
            />
        </div>
    )
}
export default OTP;