Webcam.set
({
width:350,
height:350,
image_format:'png',
png_quality:100,
constraints:{facingMode:'environment'}
});

camera=document.getElementById("camera");
Webcam.attach(camera);

function cap_img()
{
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='result_id'>"
});
}

console.log("Ml5.version has loaded!",ml5.version);

classifier=ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded()
{
    console.log("modelLoaded");
}

function test_img()
{
    img=document.getElementById("result_id");
    classifier.classify(img,getResult);
}

function getResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("results");
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}



