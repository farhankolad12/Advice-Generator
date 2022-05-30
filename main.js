const btn = document.querySelector(".dice");
const quote = document.querySelector(".quote");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "quoteai.p.rapidapi.com",
    "X-RapidAPI-Key": "94d1bd21b7msh2bba9c89b8c0ad8p15ea69jsncdd2dbe5abee",
  },
};

const getQuote = () => {
  fetch("https://quoteai.p.rapidapi.com/ai-quotes/0", options)
    .then((response) => response.json())
    .then((response) => {
      quote.innerHTML = `"${response.quote}"`;
    });
};

btn.addEventListener("click", getQuote);
