function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss A");

  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = romeTime.format("dddd MMMM Do YYYY");
  romeTimeElement.innerHTML = romeTime.format("h:mm:ss A");
}
updateTime();
setInterval(updateTime, 1000);
