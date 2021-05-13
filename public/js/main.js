function getInputBox(index) {
    return document.getElementById('digit-' + index);
}

function getInputBoxValue(index) {
    return (document.getElementById('digit-' + index).value).toString();
}

function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;
    if (getInputBox(index).value.length === 1) {
        if (index !== 6) {
            getInputBox(index + 1).focus();
        } else {
            getInputBox(index).blur();
            alert('You submitted ' + getOTP());
        }
    }
}

function submitOtp() {
    var otp = getOTP()
    if (otp.length == 6) {
        alert('You submitted ' + otp);
    } else {
        return
    }
}

function getOTP() {
    var otp = '';
    var i = 1;
    while (i <= 6) {
        otp = otp + getInputBoxValue(i);
        i++;
    }

    return otp;
}