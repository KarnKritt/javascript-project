const text = [
  `Yeon-woo adjusted his clothes as he walked across the Incheon airport terminal. His head was shaved, and a Korean flag shone brightly on the arm of his neat military uniform, clearly indicating his status. After he took a moment to organize his backpack, he made a phone call.`,
  `“Thank you.” After expressing his gratitude, Yeon-woo ended the call and put his phone down. He was feeling a lot warmer and more peaceful in Korea after a three-year stay in Africa even though his mind was full of distress. With a cigarette in his mouth, he took something out from his pocket. It was a letter he had received during his mission, and it was marked with the word “obituary”. His younger brother had disappeared five years ago, and the letter had notified him of his brother’s death.`,
  `The funeral was finished, and his brother’s ashes had been scattered in the sea in front of Taejongdae, his brother’s favorite place. Yeon-woo hadn’t heard any news about him in the last five years, and now, his brother had shown up inside a cold urn.`,
  `In the photograph, his brother stood in front of a shabby house wearing some kind of medieval armor. Next to him were people with unusual appearances. ‘Had he been filming a movie somewhere?’ he wondered. Yeon-woo had roamed around all sorts of places, but he had never seen anything like this.`,
  `“Oh, I’m sorry.” Yeon-woo had been unconsciously touching his brother’s image in the photograph, and the man’s voice brought him back to his senses. A question popped into his mind, but it didn’t seem like an appropriate place to ask, so Yeon-woo could only thank the man and return home.`,
  `Sitting atop of a hillside, was a little boy, roughly about five years old. The little boy was frail and weak, with a very thin physique. Currently, the little boy was in a daze. If anyone was to look at the little boy at this moment, they would be flabbergasted! He could be considered considerably good looking, with that delicate small face and a pair of beautiful black eyes, but in this instance, the sorrowful expression in his eyes was not fitting for his age. It was a look that no ordinary five years old should be able to emulate.`,
  `“It has been five years.. Why did I appear in this world? This world and my original world are drastically different, I’m even unsure of what era of history this place belongs to, the only thing I know is that this continent is called Kyushuu.`,
  `“Everyone in my current family has the capability to practice martial arts. Why is it that I am a useless trash that is unable to cultivate?” Qing Shui mumbled. The moment there were any hints of strenuous exercise, he would get exhausted, have to gasp for air, palpitations in his heart and even fall unconscious!`,
  `Qing Shui felt warmth in his heart. When he came to this world, he was still a fetus developing inside the woman’s body. Now that five years had passed, Qing Shui was uncertain of the exact reason, but he no longer thought of things as before. He knows that this woman really feels affection for him, other people treats him as trash, but she’s the only one in this world that treats him like a treasure!`,
];
const disp = document.querySelector(".display");
const value = document.querySelector("#amount");
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let num = parseInt(value.value);

  if (0 < num && num < 10) {
    let txt = text.slice(0, num);
    txt = txt
      .map(function (para) {
        return `<p>${para}</p>`;
      })
      .join("");
    disp.innerHTML = txt;
  } else {
    function rand() {
      return Math.floor(Math.random() * text.length);
    }
    disp.innerHTML = text[rand()];
  }
});
