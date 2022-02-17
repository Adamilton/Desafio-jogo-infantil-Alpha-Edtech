class Dictionary {
  constructor(group, word, syllables) {
    this.group = group // 5 different groups
    this.word = word // string containing the word itself
    this.syllables = syllables // number of syllables in word
    this.letters // number of letters in word
    this.dificulty // level of dificulty (easy, medium, hard)
    this.countLetters()
    this.setDificulty()
  }

  setDificulty() {
    if (this.letters < 5) {
      this.dificulty = 'easy';
    } else if (this.letters < 8) {
      this.dificulty = 'medium';
    } else {
      this.dificulty = 'hard';
    }
  }
  
  countLetters() {
    let string = this.word;
    this.letters = string.length;
  }
}

const dictionary = [];

//teste de saída do array: descomenta pra ver as palavras no html
// const btn = document.querySelector('h1');
// btn.addEventListener('click', () => {
//   const display = document.querySelector('span');
//   dictionary.forEach((el) => {
//     display.innerHTML += `${el.word} tem ${el.letters} letras = ${el.dificulty} <br>`;
//   })
// });

dictionary.push(new Dictionary('animais', 'cão', 1));
dictionary.push(new Dictionary('animais', 'gato', 2));
dictionary.push(new Dictionary('animais', 'tucano', 3));

dictionary.push(new Dictionary('frutas', 'maçã', 2));
dictionary.push(new Dictionary('frutas', 'banana', 3));
dictionary.push(new Dictionary('frutas', 'melancia', 4));

dictionary.push(new Dictionary('zoológico', 'leão', 2));
dictionary.push(new Dictionary('zoológico', 'girafa', 3));
dictionary.push(new Dictionary('zoológico', 'hipopótamo', 5));

dictionary.push(new Dictionary('escola', 'giz', 1));
dictionary.push(new Dictionary('escola', 'mesa', 2));
dictionary.push(new Dictionary('escola', 'caneta', 3));

dictionary.push(new Dictionary('quarto', 'cama', 2));
dictionary.push(new Dictionary('quarto', 'roupas', 2));
dictionary.push(new Dictionary('quarto', 'travesseiro', 4));