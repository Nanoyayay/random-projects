console.clear();
let secretThing = false;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => {
    readline.question(question, answer => {
      resolve(answer);
    });
  });
}

async function start() {
  let hitable = [
    "hi", "hello", "hey", "howdy", "greetings", "sup", "yo", "what's up",
    "howdy-doo", "hi there", "hey there", "greetings and salutations"
  ];
  let byetable = [
    "bye", "goodbye", "see you later", "farewell", "take care", "catch you later",
    "see ya", "later", "peace out", "so long", "toodles"
  ];
  let howareyoutable = [
    "how are you?", "how are you doing?", "how's it going?", "how have you been?",
    "how's everything?", "how's life?", "how are things?", "how's your day?",
    "how's your day going?", "how are you feeling?", "how's your week?",
    "how's your month?", "how's your year?", "how's your morning?",
    "how's your afternoon?", "how's your evening?", "how's your night?",
    "how's your weekend?", "how's your holiday?", "how's your vacation?",
    "how's your break?", "how's your time off?", "how's your work?",
    "how's your job?", "how's your school?", "how's your studies?",
    "how's your family?", "how's your health?", "how's your mood?",
    "how's your spirit?", "how's your energy?"
  ];
  let whoareyoutable = [
    "who are you?", "what is your name?", "what's your name?", "who is this?",
    "who is this person?", "who are you anyway?", "what do you call yourself?",
    "what should I call you?", "what's your name again?", "who might you be?",
    "who is this person I'm talking to?", "who are you supposed to be?",
    "who is this individual?", "who are you really?", "who are you exactly?",
    "who is this entity?", "who is this character?", "who is this being?",
    "who is this ai?", "who is this assistant?"
  ];
  let whatismynametable = [
    "what is my name?", "what's my name?", "do you know my name?", "can you tell me my name?",
    "what do you call me?", "what should I be called?", "how do you refer to me?",
    "what's my name again?", "do you remember my name?", "can you remind me of my name?",
    "what is the name I gave you?", "what is the name I told you?"
  ]
  let askjsfiletable = [
    "give me javascript code", "javascript code please", "show me javascript code",
    "javascript code", "can you give me javascript code?", "i need javascript code",
    "javascript code request", "javascript code example", "javascript code snippet",
    "javascript code sample", "javascript code block", "javascript code segment",
    "javascript code piece", "javascript code section", "javascript code line"
  ];
  let keysmashtable = [
    "qwertyuiop", "asdfghjkl", "zxcvbnm", "1234567890", "qwerty", "asdfg", "zxcv",
    "qwerty123", "asdfg123", "zxcvbnm123", "qwertyuiop123", "asdfghjkl123", "zxcvbnm0987654321",
    "qwertyuiop0987654321", "asdfghjkl0987654321", "zxcvbnm0987654321qwertyuiop",
    "qwertyuiopasdfghjkl", "qwertyuiopzxcvbnm", "asdfghjklzxcvbnm",
    "qwertyuiopasdfghjklzxcvbnm", "qwertyuiop1234567890", "asdfghjkl1234567890",
    "zxcvbnm1234567890", "qwertyuiopasdfghjkl1234567890", "asdfghjklzxcvbnm1234567890"
  ];
  let somethingtable = [
    "something", "Something", "SOMETHING"
  ];

  const greetResponses = [
    "Cody: Hey! How are you today?",
    "Cody: Hello! How have you been?",
    "Cody: Hi! What have you been working on?",
    "Cody: Greetings! Ask me whatever",
  ];

  const byeResponses = [
    "Cody: Goodbye!",
    "Cody: Bye! Have a good day!",
    "Cody: See you later, alligator!",
    "Cody: Catch you on the flip side!",
    "Cody: Take care!",
    "Cody: So long, partner!",
  ];

  const howResponses = [
    "Cody: I'm doing great, thanks for asking!",
    "Cody: I'm just a bunch of code, but I'm functioning well!",
    "Cody: I'm good! Just here to help you out.",
    "Cody: I'm feeling pretty chipper today!",
    "Cody: I'm doing well, thanks! How about you?",
  ];

  const whoResponses = [
    "Cody: I'm Cody, your friendly AI assistant!",
    "Cody: I'm Cody, your personal coding buddy!",
    "Cody: I'm Cody, here to assist you with your coding needs!",
    "Cody: I'm Cody, your virtual helper!",
    "Cody: I'm Cody, your coding companion!",
  ];

  const smashResponses = [
    "Cody: Whoa! Did a cat just walk on your keyboard? 😂",
    "Cody: Did you just summon a keyboard monster? 🐉",
    "Cody: That keyboard smash was epic! 💥",
    "Cody: Whoa, that was a keyboard workout! 💪",
  ];

  console.log("alert! this project is old and quite hard for my tiny brain. expect buggy behavior.");
  console.log("you may mod this project, but it is not recommended. if you do, be aware you may break the code and it won’t be fixed.");
  console.log("put it on github if you want to mod it, but GIVE CREDIT, i will not help with your mods.");
  console.log("don't expect frequent updates, this will rarely get updated.");
  console.log("star and maybe i will put actual ai.");
  console.log("------------------------------------------------------");
  console.log("Coded by Nanoyayay on github.com - Do not distribute");
  console.log("------------------------------------------------------");
  console.log("this message will disappear in 5.");

  for (let i = 4; i > 0; i--) {
    await sleep(1000);
    console.log(i + ".");
  }

  await sleep(1000);
  console.clear();

  console.log("Quick, What is your name?");
  let name = await ask("> ");
  console.clear();
  console.log("Cody: Hi, " + name + "! I'm Cody, your friendly assistant. How can I help you today?");

  while (true) {
    let x = await ask("> ");
    let input = x.toLowerCase().trim();

    if (hitable.includes(input)) {
      console.log(greetResponses[Math.floor(Math.random() * greetResponses.length)]);
    } else if (byetable.includes(input)) {
      console.log(byeResponses[Math.floor(Math.random() * byeResponses.length)]);
      break;
    } else if (howareyoutable.includes(input)) {
      console.log(howResponses[Math.floor(Math.random() * howResponses.length)]);
    } else if (whoareyoutable.includes(input)) {
      console.log(whoResponses[Math.floor(Math.random() * whoResponses.length)]);
    } else if (askjsfiletable.includes(input)) {
      console.log("Cody: Sure! Here is some Javascript code you can edit:");
      console.log("1️⃣ Add two numbers:");
      console.log("let add = (a, b) => a + b;");
      console.log("2️⃣ Even or odd checker:");
      console.log("let isEven = n => n % 2 === 0;");
      console.log("3️⃣ Reverse a string:");
      console.log("let reverse = str => str.split('').reverse().join('');");
    } else if (keysmashtable.includes(input)) {
      console.log(smashResponses[Math.floor(Math.random() * smashResponses.length)]);
    } else if (input === "") {
      console.log("Cody: Hello? Are you still there? Type something!");
      let secretThing = true;
    } else if (input === ":3") {
      console.log("...###.");
      console.log("@....##");
      console.log("...##..");
      console.log("@....##");
      console.log("...###.");
      console.log("Cody: Heehee! Here's a cute emoji for you! :3");
    } else if (input === "version") {
      console.log("Cody: This is Cody v1.1.0, created in Javascript, by Nanoyayay.");
    } else if (input === "help") {
      console.log("Cody: Alright, here's what I can do:");
      console.log("- Say stuff like 'hi', 'hello', or 'hey' to chat with me.");
      console.log("- Ask me 'how are you?' or 'how's it going?' to get a response.");
      console.log("- Have fun with a keyboard smash like 'qwertyuiop' or 'asdfghjkl'.");
      console.log("- Type ':3' for a cute emoji.");
    } else if (input == "clear") {
      console.clear();
    } else if (whatismynametable.includes(input)) {
      console.log("Cody: I remember you said your name is " + name + " earlier!");
    } else if (somethingtable.includes(input)) {
      console.log("Cody: I didn't mean it literally, " + name + "! But if you meant something else, just let me know!");
    } else {
      console.log("Cody: Uh, I don't really understand that. Try saying hi, bye, or ask me something else.");
    }
  }

  readline.close();
}

start();
