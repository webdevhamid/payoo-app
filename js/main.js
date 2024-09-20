const loginBtn = document.querySelector("#login-btn");

const tempPhone = 1612126899;
const tempPin = 1111;

// Step-1: set the event handler
loginBtn.addEventListener("click", function (e) {
  // Step-2: preventing the browser default behavior
  e.preventDefault();

  // Step-3: Get the phone number
  const phoneNum = document.querySelector("#phone-number").value;

  // Step-4: Get the pin number
  const pin = document.querySelector("#pin-number").value;

  //   console.log(phoneNum, pin);

  // Check if phone and pin numbers are matched
  if (phoneNum === "" || pin === "") return console.log("Input Required :(");

  if (+phoneNum === tempPhone && +pin === tempPin) {
    console.log("Logged In");
    console.log(+phoneNum, +pin);
    location.href = "./home.html";
  } else {
    console.log("Wrong Credentials :(");
  }
});
