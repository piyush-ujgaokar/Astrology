

const zodiacNames = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

  //size 31
const compliments = [
  "You are a hard worker and it shows.",
  "You bring light to everyone around you.",
  "Your energy is truly inspiring.",
  "You have a heart of gold.",
  "You make the world a better place.",
  "You’re stronger than you think.",
  "Your presence is calming and powerful.",
  "You have a beautiful mind.",
  "You’re a natural leader.",
  "Your resilience is admirable.",
  "You always rise, no matter the fall.",
  "You make people feel seen and valued.",
  "You are wise beyond your years.",
  "You radiate kindness and grace.",
  "You’re full of creative magic.",
  "Your growth is beautiful to witness.",
  "You turn challenges into triumphs.",
  "You’re deeply intuitive and empathetic.",
  "You inspire trust and confidence.",
  "You’re someone people can always count on.",
  "Your self-awareness is a gift.",
  "You’re evolving into the best version of yourself.",
  "You handle chaos with such calm.",
  "You shine in your authenticity.",
  "You make people feel safe just by being you.",
  "You’re the kind of person who changes lives.",
  "You’re built for greatness.",
  "You’re a masterpiece in progress.",
  "You’re not just enough — you’re exceptional.",
  "You glow with inner strength.",
  "You’re the calm in the cosmic storm."
];


//size 20
const victimCards = [
    "You gave them your all, but they vanished when you needed them.",
    "You always check on others, but no one checks on you.",
    "You stayed loyal, they stayed silent.",
    "You were their strength, but they never noticed your pain.",
    "You listened to everyone's problems, but no one asked how you were.",
    "You lifted them up, but they watched you fall.",
    "You believed in them more than they believed in you.",
    "You forgave their worst, they couldn’t handle your truth.",
    "You stood by them, but they walked away.",
    "You gave them love, they gave you silence.",
    "You were their healer, but they left you broken.",
    "You supported their dreams, they laughed at yours.",
    "You stayed, they strayed.",
    "You gave second chances, they gave final betrayals.",
    "You fought for them, they gave up on you.",
    "You shared your light, they left you in the dark.",
    "You gave without asking, they took without caring.",
    "You stayed loyal in chaos, they switched sides in silence.",
    "You were real in a world full of masks.",
    "You kept choosing them, while they kept choosing themselves."
  ];


  //size 30
  const recommendations = [
    "Trust your intuition — it knows what your mind hasn't figured out yet.",
    "Let go of what no longer serves you.",
    "Speak your truth, even if your voice shakes.",
    "Focus on progress, not perfection.",
    "Surround yourself with people who light your soul on fire.",
    "Create boundaries, not walls.",
    "Take time to heal before you move forward.",
    "Write down your goals and read them daily.",
    "Choose peace over proving a point.",
    "Spend more time in nature to ground your energy.",
    "Detach from the outcome and focus on the process.",
    "Celebrate small wins — they're still progress.",
    "Listen more, speak less — wisdom grows in silence.",
    "Practice gratitude — it's the seed of abundance.",
    "Release comparison — your path is uniquely yours.",
    "Be okay with being misunderstood — not everyone sees your vision.",
    "Drink more water, cleanse your body and mind.",
    "Spend time alone — your soul needs space to speak.",
    "Turn your pain into power.",
    "Stop chasing — attract by becoming.",
    "Invest your energy where it's reciprocated.",
    "Forgive yourself for what you didn’t know back then.",
    "Ask the universe, then be open to the signs.",
    "Rest is productive — your body is your temple.",
    "Take risks — comfort zones never made legends.",
    "Say no without guilt and yes without fear.",
    "Don't be afraid to start over — it's a chance to build better.",
    "Be patient — divine timing is always on time.",
    "Read more books — feed your soul, not just your mind.",
    "Believe in your own magic — the stars already do."
  ];


  
//size 30
  const futurePredictions = [
    "You will become a millionaire in a few years.",
    "Your dream job will soon become your reality.",
    "You will attract a powerful mentor who changes your life.",
    "A major financial breakthrough is heading your way.",
    "You will travel to a place that transforms you.",
    "Someone will come into your life and bring pure joy.",
    "You will build something people admire for generations.",
    "Your hidden talents will soon bring you recognition.",
    "You’ll heal fully — mentally, emotionally, and spiritually.",
    "Love will find you when you least expect it.",
    "You will inspire thousands with your story.",
    "Success will come faster than you think.",
    "You’re about to enter the most abundant chapter of your life.",
    "Everything you've lost will be replaced with something better.",
    "You will soon receive unexpected money or opportunity.",
    "Your name will be known for the right reasons.",
    "A wish you made long ago is about to come true.",
    "You will soon live the life you once prayed for.",
    "The universe is aligning big blessings in your favor.",
    "Your current struggles will turn into your greatest strengths.",
    "You will rise above everyone’s expectations — even your own.",
    "A powerful transformation is taking shape inside you.",
    "You’ll soon be surrounded by people who truly get you.",
    "Your creativity will open unexpected doors.",
    "Your future self is proud of the steps you're taking now.",
    "Big contracts and collaborations are in your near future.",
    "You will break generational cycles and build new legacies.",
    "You will fall in love with life again — deeply and fully.",
    "You’re destined for more than you’ve imagined.",
    "In divine timing, everything will align perfectly for you."
  ];
  

  let form=document.querySelector(".form");
let fname=document.querySelector(".fname");
let surname=document.querySelector(".Surname")
let date=document.querySelector(".date");
let month=document.querySelector(".month");
let year=document.querySelector(".year");
let btn=document.querySelector(".btn");
let prediction=document.querySelector(".prediction");

form.addEventListener("submit",(e)=>{

    let fnameval=fname.value;
    let surnameval=surname.value;
    let dateval=parseInt(date.value);
    let monthval=parseInt(month.value);
    let yearval=parseInt(year.value);



    e.preventDefault();

    let first_mess=`Hello ${fnameval} ${surnameval}`;
    let sec_mess=`Your Zodiac sign is ${zodiacNames[monthval-1]}.`;

    let index=Math.floor(Math.random()*31);
    let third_mess=compliments[index];

    index=(fnameval.length*surnameval.length*monthval)%20;
    let fourth_mess=victimCards[index];

    index=(dateval*monthval*yearval)%30;
    let fifth_mess= recommendations[index];

    index=(dateval*monthval*yearval)%30;
    let six_mess= futurePredictions[index];

    prediction.innerText=`${first_mess}. 
    ${sec_mess}.${third_mess} 
    Seen that ${fourth_mess} 
    recommendation is: ${fifth_mess} 
    Future Prediction is: ${six_mess}`;

  
})

btn.addEventListener('click',function(){
  form.style.display="none";
  prediction.style.display="block"
})

  
  




