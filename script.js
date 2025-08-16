const stories = [
  { title: "Lanterns Over Mireya", img: "story1.jpg", text: "Jinna Puka chases a runaway sky lantern across rooftops." },
  { title: "Whispers of the River Cloak", img: "story2.jpg", text: "A cloak spun from river mist reveals hidden voices." },
  { title: "The Firebird’s Feather", img: "story3.jpg", text: "A feather that burns but never consumes becomes a guide." },
  { title: "Echoes in the Cave of Time", img: "story4.jpg", text: "Every step repeats as Jinna Puka discovers temporal echoes." },
  { title: "The Clockmaker’s Secret", img: "story5.jpg", text: "An ancient clock reveals a path to parallel worlds." },
  { title: "Mask of the Forgotten", img: "story6.jpg", text: "Whoever wears the mask recalls a memory that was erased." },
  { title: "The Ocean’s Call", img: "story7.jpg", text: "The waves carry a song only heroes can hear." },
  { title: "The Broken Crown", img: "story8.jpg", text: "An old kingdom seeks hope in a shattered crown." },
  { title: "The Library of Dreams", img: "story9.jpg", text: "Each book holds a dream someone lost long ago." },
  { title: "The Eternal Flame", img: "story10.jpg", text: "A fire that lights only when the truth is spoken." }
];

const grid = document.getElementById('storyGrid');

stories.forEach(story => {
  const div = document.createElement('div');
  div.className = 'story';
  div.innerHTML = `
    <img src="${story.img}" alt="${story.title}">
    <h3>${story.title}</h3>
    <p>${story.text}</p>
  `;
  grid.appendChild(div);
});
