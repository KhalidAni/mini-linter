let story =
  "Last weekend, I took literally the most beautiful bike ride of my life. The route is called 'The 9W to Nyack' and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey. The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.";

let overusedWords = ["really", "very", "basically"];
let unnecessaryWords = ["extremely", "literally", "actually"];

let storyWords = story.split(" ");

let betterWords = storyWords.filter((word) => !unnecessaryWords.includes(word));

let overusedCounts = {};
for (let overusedWord of overusedWords) {
  overusedCounts[overusedWord] = betterWords.filter(
    (word) => word === overusedWord
  ).length;
}

let sentences = 0;
storyWords.forEach((word) => {
  if (word[word.length - 1] === "." || word[word.length - 1] === "!") {
    sentences += 1;
  }
});

console.log("Word count:", storyWords.length);
console.log("Sentence count:", sentences);
console.log("Overused word counts:", overusedCounts);

console.log(betterWords.join(" "));


let betterWordsAlternate = betterWords.map((word, index) => {
    if (overusedWords.includes(word)) {
        if (index % 2 === 1) {
            return ' '; 
        }
    }
    return word;
}).filter(word => word !== '');

console.log(betterWordsAlternate.join(' '));

function mostFrequentWord(words) {
    let wordCounts = {};
    words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    let maxCount = 0;
    let mostFrequent = ' ';

    for (let word in wordCounts) {
        if (wordCounts[word] > maxCount) {
            maxCount = wordCounts[word];
            mostFrequent = word;
        }
    }

    return mostFrequent;
}

console.log('Most frequent word is:', mostFrequentWord(betterWords));

const alternatives = { 
    really: 'truly',
    very: 'extremely',
    basically: 'fundamentally'
};

let replacedWords = betterWords.map(word => {
    if (overusedWords.includes(word)) {
        return alternatives[word] || word;
    }
    return word;
});

console.log(replacedWords.join(' '));