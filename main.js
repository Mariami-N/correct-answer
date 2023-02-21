let container = document.createElement("div");
document.body.appendChild(container);
container.style.width="100vw";
container.style.height="100vh";
container.style.backgroundColor="rgb(27, 141, 151)";
container.style.overflow="auto";
container.style.display="flex";
container.style.justifyContent="center";
container.style.alignItems="center"

let box = document.createElement("div");
container.appendChild(box);
box.style.width= "800px";
box.style.height= "500px";
box.style.overflow="auto";

let time = 10;

let satauri=document.createElement("h1");
box.appendChild(satauri);
satauri.innerHTML= `დარჩენილი დრო: ${time} წმ`;
satauri.style.color="black";
satauri.style.fontSize="30px";
satauri.style.marginTop="30px"
satauri.style.marginLeft="35%"


let part2 = document.createElement("div");
box.appendChild(part2);
part2.style.backgroundColor="grey";
part2.style.width="600px";
part2.style.height="300px";
part2.style.borderRadius="30px"
part2.style.marginTop="60px"
part2.style.marginLeft="15%"
part2.style.overflow="auto"
part2.style.display="flex";
part2.style.flexDirection="column";
part2.style.justifyContent="center"
part2.style.alignItems="center"
part2.style.gap="30px"


let num1=Math.floor(Math.random() * 20);
let num2=Math.floor(Math.random() * 20);

let inbox1 = document.createElement("p");
part2.appendChild(inbox1);
inbox1.innerHTML=`რას უდრის ${num1} + ${num2}?`
inbox1.style.color="white";
inbox1.style.fontSize="25px";


let inbox2 = document.createElement("p");
part2.appendChild(inbox2);
inbox2.innerHTML="პასუხი"
inbox2.style.color="white";
inbox2.style.fontSize="25px";


let input = document.createElement("input");
part2.appendChild(input);
input.style.width="300px";
input.style.height =" 40px";


let button = document.createElement("button");
part2.appendChild(button);
button.innerText="confirm";
button.style.width="100px";
button.style.height =" 40px";


part2.style.color="white";
part2.style.fontSize="25px";


time = 10;


