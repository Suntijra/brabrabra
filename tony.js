const pinArr=[];
let pinpass;
let passwordIcon = "<i class='fa fa-circle' style='font-size:2.5vw'></i>";



function clickAll(pin) 
{
    console.log("Hello there !!");
    console.log("Pin Id = "+pin.id);
    console.log("pinarr length = "+ pinArr.length);
    let x = parseInt(pin.id);
    console.log("x = " + x);

    if(x>=0 && x<10)
        {
            pinArr.push(x);
            updatePinDisplay();
            console.log("x is push  x = " + x);
        }
    else if(x == 4275)
            {
               
                pinArr.pop();
                updatePinDisplayDel();
                
            }
        else {console.log("x is unknow  x = " + x);}
    
        console.log("pinArr = "+ pinArr);
        pinpass = pinArr.join("");
        console.log("pinpass = "+ pinpass);
        if(pinArr.length>6)
        {
            alert("pin complate pin is : "+ pinpass);
            pinpass = null;
            while(pinArr.length){
                pinArr.pop();
            }
            updatePinDisplayDel();
        }


      

       

}
window.onload = function () 
{
    let twoMinutes = 60 * 2,
     display = document.querySelector('#otp-time-countdown');
    startTimer(twoMinutes,display);
};

function updatePinDisplay()
{
    
     for (let i = 0; i < 6; i++) 
    {
            $("#pin-display"+(i+1)).html("");
            
    }
    for (let i = 0; i < pinArr.length-1; i++) 
    {
        $("#pin-display"+(i+1)).html(passwordIcon);
        
    }
  
        console.log("pinArr.length : "+pinArr.length+"--------------------");
        let x = pinArr.length;
        console.log("x : "+x+"--------------------");
        $("#pin-display"+(x)).text(pinArr[x-1]);
        sleep(300).then(() => {$("#pin-display"+(x)).html(passwordIcon);});



}
function updatePinDisplayDel()
{
  
     for (let i = 0; i < 6; i++) 
    {
            $("#pin-display"+(i+1)).html("");
            
    }
    for (let i = 0; i < pinArr.length; i++) 
    {
       if(pinArr.length>0)
       {
        $("#pin-display"+(i+1)).html(passwordIcon);
       }
       
    }
    for (let i = 0; i < 6; i++) 
    {
        if(pinArr.length<1)
        {
            $("#pin-display"+(i)).html("");
        }
           
            
    }
   



}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent ="("+ minutes + ":" + seconds+")"; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}


