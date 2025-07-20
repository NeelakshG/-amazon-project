const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev");
xhr.send();
// xhr.response(); //problem is that it takes some time, in order to get the response, we need to wait for it
//when we send some information to backend , this message is called a request

//when the backend sends something back, this is called a response

//it works by having one request with one response
