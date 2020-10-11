const input = document.querySelector("#input--anhalteweg");
const button = document.querySelector("#button--anhalteweg");
const output = document.querySelector("#output--anhalteweg");

let geschwindigkeit,
    bremsweg,
    reaktionsweg,
    anhalteweg;

button.addEventListener("click", () => {
    console.log(input.value);
    geschwindigkeit = Number(input.value);
    bremsweg = (geschwindigkeit / 10) * (geschwindigkeit / 10);
    reaktionsweg = (geschwindigkeit / 10) * 3;
    anhalteweg = bremsweg + reaktionsweg;
    output.innerText = anhalteweg;
});
