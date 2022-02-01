window.onload = function() {

  var button = document.querySelector("#dog-button");
  var pic = document.querySelector("#dog-pic");

  button.addEventListener('click', sendReq);

  function sendReq() {
    //The older way to issue an XMLHttpRequest
    // var oReq = new XMLHttpRequest();
    // oReq.addEventListener("load", getPicture);
    // oReq.open("GET", "https://dog.ceo/api/breeds/image/random");
    // oReq.send();

    // function getPicture() {
    //   var res = this.responseText;
    //   var data = JSON.parse(res);
    //   console.log(data.message);
    //   pic.src = data.message;
    // }



    //The newer fetch API, written in the style of promises
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data.message);
        pic.src = data.message;
      })
      .catch(function (err){
        console.log(err);
      })
  }

  //.then((response)=>response.json())

}
