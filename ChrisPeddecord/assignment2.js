console.log("\n--- Part 1: Sweet if statement ---")
var javaScript = "Cool";
if (javaScript === "Cool") {
	console.log("JavaScript is cool. I read it on the internets.");
    } else {
    console.log("PHP is is the most beautiful syntax ever. Yup.")
    }


console.log("\n--- Part 2: Commence while loop! ---")
var y=1;
while (y <= 10) {
	console.log(y);
	y++;
}

console.log("\n--- Part 3: Begin the for loop! ---")
for (i = 1; i <= 10; i++) {
	console.log(i);
}

console.log("\n--- Part 4: Cheesy if-statement ---")
var cheese = "Cave-aged Gruyere";
if (cheese.length > 8) {
	console.log("My dear boy, that must be some very delicious cheese, verily!");
    } else {
	console.log("Your cheese is fit for a pizza, pip pip.");
}

console.log("\n--- Part 5: Pizza Time! ---")
var pizzaSize = 9;
if (pizzaSize === null || pizzaSize ==="" ) {
	console.log("Your pizza does not exist. Pity.");
	} else if (pizzaSize <= 8) {
		console.log("What is this? A pizza for ants?");
	} else if (pizzaSize >= 9 && pizzaSize <= 18) {
		for (i=1; i<=5; i++) {
            console.log("My Pizza is " + pizzaSize + " inches large.");
        }
	} else if (pizzaSize >= 19) {
		for (i=1; i<=3; i++) {
            console.log("My " + pizzaSize + " inch large pizza ain't nothing to mess with.");
        }
	}

console.log("\n--- Prt 6: Rvrsd strngs n th ky f mly cyrs")
var randomString = "We clawed, we chained our hearts in vain" +
"We jumped never asking why" +
"We kissed, I fell under your spell." +
"A love no one could deny" +
"\nDon't you ever say I just walked away" +
"I will always want you" +
"I can't live a lie, running for my life" +
"I will always want you" +
"\nI came in like a wrecking ball" +
"I never hit so hard in love" +
"All I wanted was to break your walls" +
"All you ever did was wreck me" +
"Yeah, you, you wreck me" +
"\nI put you high up in the sky" +
"And now, you're not coming down" +
"It slowly turned, you let me burn" +
"And now, we're ashes on the ground" +
"\nDon't you ever say I just walked away" +
"I will always want you" +
"I can't live a lie, running for my life" +
"I will always want you" +
"\nI came in like a wrecking ball" +
"I never hit so hard in love" +
"All I wanted was to break your walls" +
"All you ever did was wreck me" +
"\nI came in like a wrecking ball" +
"Yeah, I just closed my eyes and swung" +
"Left me crashing in a blazing fall" +
"All you ever did was wreck me" +
"Yeah, you, you wreck me" +
"\nI never meant to start a war" +
"I just wanted you to let me in" +
"And instead of using force" +
"I guess I should've let you win" +
"I never meant to start a war" +
"I just wanted you to let me in" +
"I guess I should've let you win" +
"Don't you ever say I just walked away" +
"I will always want you" +
"\nI came in like a wrecking ball" +
"I never hit so hard in love" +
"All I wanted was to break your walls" +
"All you ever did was wreck me" +
"\nI came in like a wrecking ball" +
"Yeah, I just closed my eyes and swung" +
"Left me crashing in a blazing fall" +
"All you ever did was wreck me" +
"Yeah, you, you wreck me" +
"Yeah, you, you wreck me";
var wordReverse = "";
for (i = randomString.length - 1; i >=0; i--) {
   switch (randomString[i]) {
       case 'a': case 'e': case 'i': case 'o': case 'u':
       case 'A': case 'E': case 'I': case 'O': case 'U':
           break;
       default:
           wordReverse += randomString[i];
   }
}
console.log("Miley Cyrus's \"Wrecking Ball\" reversed (without vowels) is:\n\n" + wordReverse)

console.log("\nPart 7: Awwwww yissss, FizzBuzz")
for (var i = 1; i <= 20; i++) {
    if (i%15===0) {
    console.log('FizzBuzz');
    } else if (i%3===0) {
    console.log('Fizz');
    } else if (i%5===0) {
    console.log('Buzz');
    } else {
    console.log(i);
    }
}