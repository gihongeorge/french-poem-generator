function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apikey = "cb1a55e07974f905394f1f28oeta9363"
  let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions. ";
  let userPrompt = `User instructions: Generate a French Poem about ${instructionsInput.value}`;
  let apiurl = `https://api.shecodes.io/ai/v1/generate?prompt=${userPrompt}&context=${context}&key=${apikey}`

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiurl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
