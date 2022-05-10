var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function redirect()
{
    window.location = "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiXs5LG9Yv3AhXfmGYCHRLGB9QYABAAGgJzbQ&ae=2&ohost=www.google.com&cid=CAESbeD2xUiALvWyqCAcihXzLrVISwvgwuQCWq5vGTATfbzdBATFASSHWwEAJId32jeiyYXEP97akBaSr1uOIxa0ONbhIufbPFIU18_zLixyiUUH0oPrcWzsl9XiePlfUk4LNoNkFvJRk46coBEB0hc&sig=AOD64_3bvzuGkjTrrXgqYkS70kRP1cgbVw&q&adurl&ved=2ahUKEwid9YrG9Yv3AhX_yjgGHd1MBVsQ0Qx6BAgCEAE";
}

function start()
{
    recognition.start();
} 
recognition.onresult = function(event)
{
    console.log(event);
    
    var Content = event.results[0][0].transcript;

    console.log(Content);
    if (Content == "selfie")
    {
        console.log("taking selfie --- ")
        paragraph = "Take your Selfie in 2 seconds";
        speak();
    }
}
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function speak()
{    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    //First Image
    setTimeout(function()
    {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "Take your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);
    //Second Image
    setTimeout(function()
    {
        img_id = "selfie2";
        take_snapshot();
        speak_data = "Take your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
    //Third Image
    setTimeout(function()
    {
        img_id = "selfie3";
        take_snapshot();
    }, 15000);
}

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri)
    {
        if (img_id == "selfie1")
        {
            document.getElementById("result1").innerHTML = '<img class="result" src="'+data_uri+'" />';
        }
        if (img_id == "selfie2")
        {
            document.getElementById("result2").innerHTML = '<img class="result" src="'+data_uri+'" />';
        }
        if (img_id == "selfie3")
        {
            document.getElementById("result3").innerHTML = '<img class="result" src="'+data_uri+'" />';
        }
    });
}