
// window.onload function retrieves the saved values from Local Storage when the page loads and sets them to the input fields.
window.onload = function() {
    document.getElementById('email_id').value = localStorage.getItem('email_id') || '';
    document.getElementById('full_name').value = localStorage.getItem('full_name') || '';
};

// Save input values to Local Storage
function saveInputValue(id) {
    const value = document.getElementById(id).value;
    localStorage.setItem(id, value);
}

function sendOTP() {
    //const [inputValue, setInputValue] = useState('');

    let otp_val = Math.floor(1000 + Math.random() * 9000);
    var params = {
        from_name: document.getElementById("full_name").value, 
        email_id: document.getElementById("email_id").value, 
        verify: otp_val
    };

    
    //  emailjs.send('service ID', 'template ID', parameters that match the placeholders in your email template)
    emailjs.send('service_v7xm339', 'template_9kr8sum', params) 
    .then(function (res) {
        alert("Sucess! " + res.status);
        document.getElementById('otp-btn').addEventListener('click', () => {
            const otp_inp = document.getElementById('verify').value;
            if (otp_inp == otp_val) {
                alert("Email address verified!");
            } else {
                alert("Invalid Verify Code!");
            }
        });
    })
    
}


