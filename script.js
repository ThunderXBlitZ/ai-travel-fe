 
fetch("https://ai-travel-u3dvuowm3q-as.a.run.app/")
.then(function (res) {
    return res.text();
})
.then(function (data) {
    document.getElementById("demo").innerHTML = data;
    console.log(data);
});