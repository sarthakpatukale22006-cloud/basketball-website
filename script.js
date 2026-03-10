function showTip(){

const tips = [
"Practice dribbling every day.",
"Always keep your eyes on the rim while shooting.",
"Work on your footwork for better defense.",
"Pass the ball quickly to create opportunities.",
"Practice free throws daily."
];

let randomTip = tips[Math.floor(Math.random()*tips.length)];

document.getElementById("tip").innerText = randomTip;

}
