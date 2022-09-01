const quotes = {
  " Didier ": "On la connaît la logique de l'équipe de France. Quand vous gagnez, c'est la France Black-Blanc-Beur qui triomphe puis dès que vous perdez, c'est : ça suffit y'a trop d'étranger dans l'équipe.",
  "- Bobo1 ": "Vive le mariage homosexuel ! Mais je suis contre l'adoption...",
  "- Bobo2 ": "Il est tombé comme du n'importe quoi, on dirait la girafe qui s'emmêle les pattes.",
  "- Bobo3 ": "L'oiseau sur le baobab ne doit pas oublier qu'il a porté des lunettes ",
  "- Bobo4 ": "La France nous a souvent volé nos richesses... vous allez aussi nous voler nos footballeur ?",
  "- Bobo5 ": "Tu t'es regardée ? Avec tes grosses fesses comme l'hippopotame... Kate Middleton?!",
}
document.getElementById('generate').addEventListener('click', () => {

  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];

  document.getElementById('quote').innerHTML = quote;
  document.getElementById('author').innerHTML = author;
});