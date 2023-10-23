var Fish = ["angel", "clown", "drum", "sturgeon"];
var myFish = "drum";
for (let i = 0; i < Fish.length; i++) {
    if (myFish == Fish[i]) {
        continue;
    } else {
        console.log(i);
    }
};
