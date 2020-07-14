#!/usr/bin/env node
"use strict";

var c = require("chalk");
var iq = require("inquirer");
var open = require("open");
var wrap = require("word-wrap");

const oytunPrompt = {
  type: "list",
  name: "page",
  choices: [
    {
      name: c.yellow(`⚜️  Ask about his adventures...`),
      value: "linkedin",
    },
    {
      name: c.cyan(
        `🗣  Let the man speak his mind. He clearly has a lot dangling from the tip of his tongue?`
      ),
      value: "twitter",
    },
    {
      name: c.blueBright(
        `📬 Start a conversation about a completely random topic`
      ),
      value: "email",
    },
    {
      name: c.gray(`🧮 Ignore him and start staring at his works on display.`),
      value: "github",
    },
    {
      name: c.red.bold(`🏃🏻‍♂️Freak out and start running!\n`),
      value: false,
    },
  ],
};

function arrive() {
  console.log(
    wrap(
      c.gray(`
    You hop through a long thread of irrelevant information, and find yourself in a room. You're quite uncertain how and why you've landed here, but your instincts keep telling you that you are exactly where you're supposed to be. From the alleyway across the room, you see a hooded figure walking up to you. His bloodshot eyes and stubble ooze weariness, but his mild smile and vivacious stare contradict with the notion that he might be tortured by the tasks flowing from his blistered hands. There is an inscription, a scar tattoo on his wrist that spells out ${c.bold.bgCyan.black(
      "JS"
    )}... you wonder if it's an old lover or an acronym for his homeland.

    Before you could say anything, the man pulls back the chair, hops a leg over and drops brashly, while swooping his hoodie backwards, revealing more of his welcoming gaze.
    
    ${c.bold.white(
      `"Sorry, didn't get a chance to brew the morning coffee, so I hope you enjoy some detox water. Name's Oytun, by the way."`
    )}
    
    He extends a hand, and in the milisecond of his gesture a glimpse of embarrasment swoops in as he retracts his hand. ${c.bold.white(
      `"My bad, old habits die hard."`
    )} He puts his hand on his chest as a gesture of salute.
    `),
      { width: 150, trim: true }
    )
  );

  talk(
    `"So.. how can I be of help? You probably didn't come all the way for nothing."`
  );
}

function talk(message) {
  iq.prompt({ ...oytunPrompt, message: c.bold(message) })
    .then(function (a) {
      switch (a.page) {
        case "linkedin":
          console.log(
            `\n${c.bold(
              `"So glad you asked!"`
            )} he exclaims, and starts yapping for hours about his past and dreams...`
          );
          open("https://linkedin.com/in/oytuneyucel");
          break;

        case "github":
          console.log(
            `\nHe's slightly disappointed that he doesn't get to talk, but is comforted by the fact that you're paying attention to his work.`
          );
          open("https://github.com/oytuneyucel");
          break;

        case "twitter":
          console.log(
            c.bgCyan.black(
              `\nSuddenly, the man turns into a blue little bird and starts chirping its lungs out!`
            )
          );
          open("https://github.com/oytuneyucel");
          break;

        case "email":
          console.log(
            `${c.bold(
              "Oh boy! News from outside world."
            )} he claps his hands as he tries to concentrate on your question through his excitement.`
          );
          open("mailto:oytuneyucel@gmail.com");
          break;

        default:
          console.log(
            `
  ${c.bgRed.white.bold(`"You will be back!"`)} he shouts. ${c.bgRed.white.bold(
              `"You'll be back and I will remember you.. or try to.. wait.. am I talking to myself again?"`
            )} you hear, as his voice trails off...`
          );
          break;
      }
      if (a.page) {
        console.log(`\nAfter what seems like a couple hours:`);
        talk(`"And?.. You didn't come all this way just for that, right?"`);
      } else {
        process.exit();
      }
    })
    .catch(function () {});
}

arrive();
