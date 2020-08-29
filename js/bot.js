function reply1(){
    document.getElementById('ul').innerHTML += `<li class="bot"><p class="text">Your device may have been damaged or tampered with. Our nearest staff will be reaching your location to assist you.
    </p></li>`;
    console.log("ok");
    document.getElementById("uli").scrollTop = document.getElementById("uli").scrollHeight;
    setTimeout(function() { replyorg(); }, 2000);
};
function reply2(){
    document.getElementById('ul').innerHTML += `<li class="bot"><p class="text">What problem are you having with your Digilect?</p></li>`;
    document.getElementById("uli").scrollTop = document.getElementById("uli").scrollHeight;
    setTimeout(function() { reply22(); }, 1000);
}

function reply22(){
    document.getElementById('ul').innerHTML += `<li class="human" onclick="replyihr()"><p class="text2">I haven't recieved my Digilect</p></li>`;
    document.getElementById('ul').innerHTML += `<li class="human" onclick="broken()"><p class="text2">My Digilect is broken</p></li>`;
    document.getElementById('ul').innerHTML += `<li class="human" onclick="safety()"><p class="text2">Something Else</p></li>`;
    console.log("ok");
    document.getElementById("uli").scrollTop = document.getElementById("uli").scrollHeight;
}

function replyihr(){
    document.getElementById('ul').innerHTML += `
    <li class="bot"><p class="text">
    Your Digilect will be delivered to your door 1 month in advance if you didn't recieve it try emailing our help email
    <br><br>
    Digilect.help@gov.us
    <br><br>
    Please keep any ID handy to ensure the Digilect is delivered to the right person
    </p></li>
    `;
    document.getElementById("uli").scrollTop = document.getElementById("uli").scrollHeight;
    setTimeout(function() { replyorg(); }, 2000);
}

function replyorg(){
    document.getElementById('ul').innerHTML += `<li class="human">
    <p class="text2" onclick="reply1()"><span>About Digilect</span></p></li>`;
    document.getElementById('ul').innerHTML += `<li class="human" id="mid">
    <p class="text2" onclick="reply2()"><span>Issue with Digilect</span></p></li>`;
    document.getElementById('ul').innerHTML += `<li class="human"><p class="text2" onclick="safety()"><span>Get in touch</span></p></li>`;
    document.getElementById("uli").scrollTop = document.getElementById("uli").scrollHeight;
}
function safety(){
    document.getElementById('ul').innerHTML += `<li class="bot">
    <p class="text">You can get in touch by using our email
    <br><br>
    Digilecthelp@gov.us<br><br>
    You can also get in touch by using our helpline number <br><br>
    8008542069
    </p></li>`;
    document.getElementById("uli").scrollTop = document.getElementById("uli").scrollHeight;
    setTimeout(function() { replyorg(); }, 2000);
}
function broken(){
    document.getElementById('ul').innerHTML += `<li class="bot">
    <p class="text">
    Try these basic troubleshooting steps if the device is still broken try to contact us and we will give you a replacement 
    <br><br>
    Enter the boot manager by holding the power button for 3 seconds.
    <br><br>
    You can reset the device to factory settings by clicking the reset button in boot manager
     <br>or<br>
    Boot the device in safe mode
     <br><br>
    Note: you will only be able to vote when the govt drone is around you or any govt vehicle this ensures that your vote doesnt go through any third party.
    </p></li>`;
    document.getElementById("uli").scrollTop = document.getElementById("uli").scrollHeight;
    setTimeout(function() { broke(); }, 2000);
}
function broke(){
    document.getElementById('ul').innerHTML += `<li class="human" onclick="safety()"><p class="text2">Still broken</p></li>`;
    document.getElementById('ul').innerHTML += `<li class="human" onclick="replyorg()"><p class="text2">Ask something else</p></li>`;
    document.getElementById("uli").scrollTop = document.getElementById("uli").scrollHeight;
}