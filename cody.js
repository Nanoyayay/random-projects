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
  console.log("Cody: Hi! I'm Cody, your friendly assistant. How can I help you today?");
  console.log("Cody: (I can't do much, but i can help with basic tasks.)");

  while (true) {
    let x = await ask("> ");
    let input = x.toLowerCase().trim();

    if (howareyoutable.includes(input)) {
      console.log("Cody: I'm doing great, thanks for asking! How can I assist you today?");
    } else if (askjsfiletable.includes(input)) {
      console.log("Cody: Of course! Here's 3 simple JavaScript code snippets for you:");
      console.log("Cody: 1. Function to add two numbers:");
      console.log("| let number1 = 1;");
      console.log("| let number2 = 2;");
      console.log("| function addNumbers(number1, number2) {");
      console.log("|   return number1 + number2;");
      console.log("| }");
      console.log("Cody: 2. Function to check if a number is even or odd:");
      console.log("| function isEven(number) {");
      console.log("|   return number % 2 === 0;");
      console.log("| }");
      console.log("Cody: 3. Function to reverse a string:");
      console.log("| function reverseString(str) {");
      console.log("|   return str.split('').reverse().join('');");
      console.log("| }");
      console.log("Cody: You can use these snippets in your JavaScript projects, " + name + "!");
    } else if (whoareyoutable.includes(input)) {
      console.log("Cody: My name is Cody! I'm here to assist with your tasks..");
    } else if (input === "") {
      console.log("Cody: Hm? It seems you didn't type anything, " + name + "!");
    } else if (input === ":3") {
      console.log("..###.");
      console.log("@...##");
      console.log("..##..");
      console.log("@...##");
      console.log("..###.");
      console.log("Heehee! That's cute, " + name + "! :3");
    } else if (hitable.includes(input)) {
      console.log("Cody: Hello! Are we playing a game of greetings? I'm here to help!");
    } else if (byetable.includes(input)) {
      console.log("Cody: Goodbye, " + name + "!");
      break;
    } else if (input === "help") {
      console.log("Cody: I was waiting for this moment! Use some of these basic phrases!");
      console.log("Cody: You can say 'hi', 'bye', 'how are you?', 'who are you?', or just type ':3' for a cute response.");
      console.log("Cody: Check the readme file for support, " + name + "!");
    } else if (keysmashtable.includes(input)) {
      console.log("Cody: Oh! It seems like you typed a keyboard smash! That's always fun, " + name + "!");
    } else if (input === "version") {
      console.log("Cody: This is Cody version 1.0.0, created by Nanoyayay on GitHub.");
      console.log("Cody: If you want to see the source code, check out the GitHub repository!");
    } else {
      console.log("Cody: Sorry, I don't understand. Try using 'help', " + name + ".");
    }
  }

  readline.close();
}

start();
