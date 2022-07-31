var firstName = prompt("What is your name?").trim();

var paragraph = document.createElement("p");
paragraph.textContent = `Welcome ${firstName}!`;
document.body.appendChild(paragraph);

var paragraph = document.createElement("p");
paragraph.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, dolorem nostrum vel, nobis eaque expedita enim, sit quia commodi sunt sequi obcaecati velit aliquid! Ullam distinctio consequatur officia nesciunt dignissimos ipsa quo soluta saepe nam repudiandae deserunt facere blanditiis neque similique cupiditate, accusantium illo beatae perferendis non iusto. Illum officiis quia beatae architecto quam deleniti assumenda adipisci molestias, et similique cumque aliquam deserunt tempore incidunt cum praesentium eveniet voluptatum expedita! Nisi, distinctio. Sit eveniet nihil esse et nulla consequuntur, quibusdam tenetur commodi odit suscipit omnis ipsam debitis dicta similique optio. Quod minima dolorum repudiandae quasi maiores, odio assumenda ratione reiciendis. ${firstName}!`;
document.body.appendChild(paragraph);


document.body.style.backgroundColor="#aaa";
document.body.style.textAlign="justify";
document.body.style.color="white";
document.body.style.fontSize="24px";