
/*********************************
*    Preset global variables    *
**********************************/

//GLOBAL VARIABLES

//subject ID
var prolific_PID; //test id: 123456123456123456123456

// page
var pageWidth;
var pageHeight;
var windowWidth;
var windowHeight;

//time
var time_track =Date.now() / 1000;
var timestamp = []
var timestep = []

// instruction 
var instrInd = 0; // instruction to start at
var phase1 = 3; //instruction phase1: general
var phase2 = 4; //instruction phase2: about spr, lead to practice
var phase3 = 3; //instruction phase3: post-practice, lead to formal story 
var enableInstrButtons = true; // for animating the showing/hiding of instructions screen buttons

//spr related variables
var pracInstr;
var prac_story = {
  "row": [
    {
      "Scene_lab": 1,
      "Story": "Astronomers have announced that a massive comet is rushing towards the Earth. It\’s all over the news that it is likely to destroy more than half of the Earth and render the other half uninhabitable.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 2,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 108
    },
    {
      "Scene_lab": 2,
      "Story": "Looking at the ticket in your hand, you are struggling with a difficult decision: whether to board the experimental-phase untested spaceship to escape the Earth or sell your ticket for a high price and stay on Earth to enjoy the money.",
      "Choice": "Y",
      "Response_1": "You board the spaceship.",
      "Response_2": "You stay on earth.",
      "Outcome_1": 3,
      "Outcome_2": 18,
      "Section": 1,
      "Storyline": 0,
      "NumChar": 111
    },
    {
      "Scene_lab": 3,
      "Story": "There\’s a risk that this experimental spaceship won\’t function properly, but it\’s going to be an epic adventure!",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 4,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 25
    },
    {
      "Scene_lab": 4,
      "Story": "As you board, you notice that there are only a few seats left: either in the front facing the windows, or at the back next to the airlock.",
      "Choice": "Y",
      "Response_1": "You sit in the front.",
      "Response_2": "You sit in the back.",
      "Outcome_1": 5,
      "Outcome_2": 12,
      "Section": 1,
      "Storyline": 0,
      "NumChar": 91
    },
    {
      "Scene_lab": 5,
      "Story": "You walk up towards the front and get seated—nothing is more important than a grand space view!",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 6,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 125
    },
    {
      "Scene_lab": 6,
      "Story": "After the safety check, the launch, the thrust, you are finally in space. You suddenly notice a spot rushing towards you!",
      "Choice": "Y",
      "Response_1": "You yell for the commander\’s attention",
      "Response_2": "You check with other passengers",
      "Outcome_1": 7,
      "Outcome_2": 10,
      "Section": 1,
      "Storyline": 0,
      "NumChar": 45
    },
    {
      "Scene_lab": 7,
      "Story": "You shout out “A meteor is going to hit us!!” causing great panic among the passengers. Several crew members rush to you and see the rapidly growing spot.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 8,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 53
    },
    {
      "Scene_lab": 8,
      "Story": "Thanks to you, the ship is able to steer slightly away, saving at least half of the people on board. Unfortunately, sitting right at the front, you are not among the survivors.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 9,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 48
    },
    {
      "Scene_lab": 9,
      "Story": "The end.",
      "Choice": "N",
      "Response_1": "End",
      "Response_2": "NA",
      "Outcome_1": 9,
      "Outcome_2": 9,
      "Section": 1,
      "Storyline": 0,
      "NumChar": 8
    },
    {
      "Scene_lab": 10,
      "Story": "You look around at others, but no one else seems to have noticed this yet. So, you point at the gradually enlarging spot and ask the person next to you whether it\’s just your imagination…",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 11,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 56
    },
    {
      "Scene_lab": 11,
      "Story": "Clearly not. You both start yelling, but before any crew members can come to check, the meteor crashes into the spaceship—that\’s the last thing you see.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 9,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 32
    },
    {
      "Scene_lab": 12,
      "Story": "Sitting next to the airlock makes you feel safe, because this is where the evacuation pods are docked.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 13,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 167
    },
    {
      "Scene_lab": 13,
      "Story": "Just as the spaceship enters the space, you hear yelling from the front. It sounds something like: “A meteor is going to hit us!!”",
      "Choice": "Y",
      "Response_1": "You rush to the evacuation ship",
      "Response_2": "You go to check with the crew",
      "Outcome_1": 14,
      "Outcome_2": 16,
      "Section": 1,
      "Storyline": 0,
      "NumChar": 48
    },
    {
      "Scene_lab": 14,
      "Story": "You immediately rush towards the back, hop into an evacuation pod, and press the launch button.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 15,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 12,
      "NumChar": 81
    },
    {
      "Scene_lab": 15,
      "Story": "You speed away from the spaceship. From a distance you see the explosion of the spaceship. Now, you just have to get back to Earth…",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 9,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 13
    },
    {
      "Scene_lab": 16,
      "Story": "You unbuckle yourself and look around for directions. Suddenly you see several crew members rushing towards the front.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 17,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 62
    },
    {
      "Scene_lab": 17,
      "Story": "Something is definitely not right! But before you can do anything else, the meteor crashes into the ship—that\’s the last thing you see.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 9,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 46
    },
    {
      "Scene_lab": 18,
      "Story": "There are so many comets reported as threatening the earth every few years, but here we are, alive and kicking, aren\’t we?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 19,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 70
    },
    {
      "Scene_lab": 19,
      "Story": "You list the ticket online for auction, and the price goes up to 65 million dollars before being sold—you are a millionaire now!",
      "Choice": "Y",
      "Response_1": "Time to travel the world.",
      "Response_2": "Visit the spaceship factory.",
      "Outcome_1": 20,
      "Outcome_2": 28,
      "Section": 1,
      "Storyline": 1,
      "NumChar": 48
    },
    {
      "Scene_lab": 20,
      "Story": "You never had the chance to travel much or buy expensive things, but you can do so now!",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 21,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 76
    },
    {
      "Scene_lab": 21,
      "Story": "You want to travel somewhere cool and fun! A fancy race car would also go well with this epic journey.",
      "Choice": "Y",
      "Response_1": "You shop for first-class flights",
      "Response_2": "You shop for race car first",
      "Outcome_1": 22,
      "Outcome_2": 25,
      "Section": 1,
      "Storyline": 1,
      "NumChar": 44
    },
    {
      "Scene_lab": 22,
      "Story": "Since you have all the money you need, why not search from the most expensive flights?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 23,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 23,
      "Story": "After some brief searching, you book a next day flight to Dubai and enjoy a wonderful first-class experience.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 24,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 24,
      "Story": "As you are checking in to the world\’s only 7-star hotel, you notice the model spaceship at the lobby—the current era\’s new fashion. Looking good!",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 9,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 25,
      "Story": "You go the car dealership and find that a Porsche costs only half of its original price due to the whole comet news thing—brilliant!",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 26,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 26,
      "Story": "Driving your new Porsche, you go to the CBD and start shopping like crazy. This is the life of your dreams!",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 27,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 27,
      "Story": "As you pass by a television playing CNN, you find that the news of comets and spaceship trials doesn\’t seem to bother you anymore.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 9,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 28,
      "Story": "Although you won\’t be boarding the spaceship, the ticket to visit the spaceship factory is only 3 million dollars.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 29,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 29,
      "Story": "You can also get an insider-guided 3-day tour on the human evacuation project ‘Noah\’ for 30 million dollars.",
      "Choice": "Y",
      "Response_1": "You pay for just the spaceship factory tour",
      "Response_2": "You pay for both the factory and the tour of Project Noah",
      "Outcome_1": 30,
      "Outcome_2": 33,
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 30,
      "Story": "The visit is limited to 2 hours, but clearly, it\’s worth it—you can\’t help but think so as you walk past different models of amazing spaceships.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 31,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 31,
      "Story": "As you wander through the tour areas, you hear one worker whisper to another about some failed mission.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 32,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 32,
      "Story": "You hope that\’s not the launched spaceship you had the ticket for—after all, some dude who paid you 65 million dollars for it was probably up there.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 9,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 33,
      "Story": "Wicked cool! They send out special aircraft that looked like a futuristic spaceship model just to pick you up!",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 34,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 34,
      "Story": "The tour includes amazing details on the human evacuation plan, including some yet-to-be published insider news on the recently crashed spaceship.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 35,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 35,
      "Story": "That was your spaceship! Thank god you are here listening to this senior executive trying to talk you into investing billions in the new model with advanced protection mechanisms, instead of aboard that ship.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 9,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    }
  ]
};
var story = {
  "row": [
    {
      "Scene_lab": 1,
      "Story": "Your alarm screams in your ear at 10 a.m., rudely disrupting a dream about your childhood golden retriever.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 2,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 108
    },
    {
      "Scene_lab": 2,
      "Story": "Groaning, you sit up and snatch your phone from the nightstand, pushing your knotted hair away from your face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 3,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 111
    },
    {
      "Scene_lab": 3,
      "Story": "The alarm title flashes.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 4,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 25
    },
    {
      "Scene_lab": 4,
      "Story": "One month. Thirty days since Adam broke your heart and ran away with the pieces. Fantastic.",
      "Choice": "Y",
      "Response_1": "You snooze the alarm.",
      "Response_2": "You let the beeping continue.",
      "Outcome_1": 5,
      "Outcome_2": 5,
      "Section": 1,
      "Storyline": 0,
      "NumChar": 91
    },
    {
      "Scene_lab": 5,
      "Story": "Turning away, you face-plant in a pile of crumpled tissues, damp with tears and snot from last night\’s one-woman pity party.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 6,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 125
    },
    {
      "Scene_lab": 6,
      "Story": "You freeze. Something just touched your leg.",
      "Choice": "Y",
      "Response_1": "You scoot away quickly.",
      "Response_2": "You throw the comforter back.",
      "Outcome_1": 7, //790,//for fast testing 
      "Outcome_2": 7,
      "Section": 1,
      "Storyline": 0,
      "NumChar": 45
    },
    {
      "Scene_lab": 7,
      "Story": "Peering across the bed, you eye Adam\’s stuffed bear.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 8,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 53
    },
    {
      "Scene_lab": 8,
      "Story": "How did your ex\’s gift end up in your bed again?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 9,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 48
    },
    {
      "Scene_lab": 9,
      "Story": "You recall stashing it in your closet last night.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 10,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 50
    },
    {
      "Scene_lab": 10,
      "Story": "This relationship withdrawal is getting out of control.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 11,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 56
    },
    {
      "Scene_lab": 11,
      "Story": "Your gaze lands on the piano.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 12,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 32
    },
    {
      "Scene_lab": 12,
      "Story": "You pushed it to the dark corner of the room days after the breakup, trying to hide the sick reminder of the happy days when you and Adam played this piano together.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 13,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 167
    },
    {
      "Scene_lab": 13,
      "Story": "You glance back at your phone, biting your lip.",
      "Choice": "Y",
      "Response_1": "This calls for Tinder.",
      "Response_2": "You should wash the dishes.",
      "Outcome_1": 14,
      "Outcome_2": 40,
      "Section": 1,
      "Storyline": 0,
      "NumChar": 48
    },
    {
      "Scene_lab": 14,
      "Story": "You tap on the dating app\’s icon and it opens to a smirking guy with a butt chin.",
      "Choice": "Y",
      "Response_1": "You swipe left to reject him.",
      "Response_2": "You swipe right to like him.",
      "Outcome_1": 15,
      "Outcome_2": 26,
      "Section": 1,
      "Storyline": 12,
      "NumChar": 81
    },
    {
      "Scene_lab": 15,
      "Story": "Not for you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 16,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 13
    },
    {
      "Scene_lab": 16,
      "Story": "The next picture buffers for a moment before revealing…ADAM?!",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 17,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 62
    },
    {
      "Scene_lab": 17,
      "Story": "Your jaw drops at the sight of your recent ex.",
      "Choice": "Y",
      "Response_1": "You swipe left again.",
      "Response_2": "You should swipe right.",
      "Outcome_1": 22,
      "Outcome_2": 18,
      "Section": 1,
      "Storyline": 1,
      "NumChar": 46
    },
    {
      "Scene_lab": 18,
      "Story": "His picture disappears to the left and a stranger\’s face replaces it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 19,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 70
    },
    {
      "Scene_lab": 19,
      "Story": "What happened? You try to retrieve his profile.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 20,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 48
    },
    {
      "Scene_lab": 20,
      "Story": "It\’s too late. Your brain tried to swipe right, but your thumb swiped left.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 21,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 76
    },
    {
      "Scene_lab": 21,
      "Story": "It\’s not like you\’d take him back, anyways.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 22,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 44
    },
    {
      "Scene_lab": 22,
      "Story": "Not in a million years.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 23,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 23,
      "Story": "But what if he swiped right?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 24,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 29
    },
    {
      "Scene_lab": 24,
      "Story": "Your heart pounds against the sides of your head and your cheeks flush.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 25,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 72
    },
    {
      "Scene_lab": 25,
      "Story": "There\’s only one thing to do.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 53,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 30
    },
    {
      "Scene_lab": 26,
      "Story": "He has John Travolta\’s chin, so he must be at least half as entertaining.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 27,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 73
    },
    {
      "Scene_lab": 27,
      "Story": "It\’s a match.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 28,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 15
    },
    {
      "Scene_lab": 28,
      "Story": "Twenty seconds later, a message pops up in your inbox.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 29,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 55
    },
    {
      "Scene_lab": 29,
      "Story": "“You\’re an Avenger and you have to choose a side. Are you Team Captain America or Team Iron Man?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 30,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 98
    },
    {
      "Scene_lab": 30,
      "Story": "Marvel superheroes? Interesting opener.",
      "Choice": "Y",
      "Response_1": "You type, “Team Captain America.”",
      "Response_2": "You type, \"Team Iron Man.\"",
      "Outcome_1": 35,
      "Outcome_2": 31,
      "Section": 1,
      "Storyline": 2,
      "NumChar": 39
    },
    {
      "Scene_lab": 31,
      "Story": "Three dots. He\’s typing.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 32,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 25
    },
    {
      "Scene_lab": 32,
      "Story": "The typing stops.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 33,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 18
    },
    {
      "Scene_lab": 33,
      "Story": "You\’re desperate to get out of the apartment, so you send another message. “Sorry, got distracted for a sec. I meant to say Captain America.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 34,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 142
    },
    {
      "Scene_lab": 34,
      "Story": "The three dots return.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 35,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 22
    },
    {
      "Scene_lab": 35,
      "Story": "“Good answer. Seems like we are a match indeed.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 36,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 48
    },
    {
      "Scene_lab": 36,
      "Story": "I\’ll be at the Game Zone arcade in 30 minutes. Hope to see you there.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 37,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 70
    },
    {
      "Scene_lab": 37,
      "Story": "You sigh, hugging your phone to your chest.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 38,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 45
    },
    {
      "Scene_lab": 38,
      "Story": "It\’s a date.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 39,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 13
    },
    {
      "Scene_lab": 39,
      "Story": "Wait a minute. Panic sets in as you realize that you haven\’t been on a first date in over two years.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 53,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 101
    },
    {
      "Scene_lab": 40,
      "Story": "Rolling out of bed, you stumble to the kitchen.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 41,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 48
    },
    {
      "Scene_lab": 41,
      "Story": "You can\’t tell if you\’re hungry, nauseous or both.",
      "Choice": "Y",
      "Response_1": "You open the fridge.",
      "Response_2": "You go straight to the sink.",
      "Outcome_1": 45,
      "Outcome_2": 42,
      "Section": 1,
      "Storyline": 3,
      "NumChar": 51
    },
    {
      "Scene_lab": 42,
      "Story": "You pick up the sponge and stare into the sink. What\’s missing?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 43,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 64
    },
    {
      "Scene_lab": 43,
      "Story": "Duh. The old containers in the fridge.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 44,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 39
    },
    {
      "Scene_lab": 44,
      "Story": "You open the fridge.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 45,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 20
    },
    {
      "Scene_lab": 45,
      "Story": "You realize your mistake too late.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 46,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 35
    },
    {
      "Scene_lab": 46,
      "Story": "The Chinese takeout box from the night of the break-up stares back from the top shelf.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 47,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 87
    },
    {
      "Scene_lab": 47,
      "Story": "Exhaling, you retrieve the container of rice and open it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 48,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 59
    },
    {
      "Scene_lab": 48,
      "Story": "Definitely expired.",
      "Choice": "Y",
      "Response_1": "You dump it in the trash can.",
      "Response_2": "You return it to the shelf.",
      "Outcome_1": 49,
      "Outcome_2": 49,
      "Section": 1,
      "Storyline": 3,
      "NumChar": 19
    },
    {
      "Scene_lab": 49,
      "Story": "Life is miserable.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 50,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 19
    },
    {
      "Scene_lab": 50,
      "Story": "You need some positivity.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 51,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 26
    },
    {
      "Scene_lab": 51,
      "Story": "With this thought, you determinedly return to your bed.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 52,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 56
    },
    {
      "Scene_lab": 52,
      "Story": "There\’s only one thing left to do.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 53,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 35
    },
    {
      "Scene_lab": 53,
      "Story": "You need to call your best friend.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 54,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 35
    },
    {
      "Scene_lab": 54,
      "Story": "You press 1 on speed-dial.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 55,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 27
    },
    {
      "Scene_lab": 55,
      "Story": "Lex picks up on the first ring. “Happy monthiversary!”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 56,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 55
    },
    {
      "Scene_lab": 56,
      "Story": "Ugh...this is not what you want to hear!",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 57,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 41
    },
    {
      "Scene_lab": 57,
      "Story": "That this is the 30th day since your breakup does not make you feel any better. How frustrating!",
      "Choice": "Y",
      "Response_1": "“I don't like this conversation starter!”",
      "Response_2": "You toss your phone across the bed.",
      "Outcome_1": 58,
      "Outcome_2": 58,
      "Section": 2,
      "Storyline": 0,
      "NumChar": 97
    },
    {
      "Scene_lab": 58,
      "Story": "A soft click. Lex hangs up, but you know her too well to expect the conversation to end there.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 59,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 95
    },
    {
      "Scene_lab": 59,
      "Story": "Within seconds, your phone is ringing again.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 60,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 45
    },
    {
      "Scene_lab": 60,
      "Story": "Rolling your eyes, you answer. “Yes?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 61,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 38
    },
    {
      "Scene_lab": 61,
      "Story": "Lex scoffs. You can picture her frowning through the phone.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 62,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 60
    },
    {
      "Scene_lab": 62,
      "Story": "“Sorry to interrupt your busy schedule of sobbing and shoving junk food in your face.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 63,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 87
    },
    {
      "Scene_lab": 63,
      "Story": "You stroke the can of Pringles on your nightstand. “Chips are friends. Not food.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 64,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 82
    },
    {
      "Scene_lab": 64,
      "Story": "“You\’re the worst, and I\’m the best. I\’m taking you out. Now.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 65,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 63
    },
    {
      "Scene_lab": 65,
      "Story": "A car engine starts in the background. “Be over in five.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 66,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 58
    },
    {
      "Scene_lab": 66,
      "Story": "You hang up, crawling back under your covers and pulling the sheet over your head.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 67,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 83
    },
    {
      "Scene_lab": 67,
      "Story": "Five minutes later, you hear a dull thud across the room.",
      "Choice": "Y",
      "Response_1": "You don\’t move.",
      "Response_2": "You sit up.",
      "Outcome_1": 68,
      "Outcome_2": 68,
      "Section": 2,
      "Storyline": 0,
      "NumChar": 57
    },
    {
      "Scene_lab": 68,
      "Story": "Another thud.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 69,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 14
    },
    {
      "Scene_lab": 69,
      "Story": "You throw the covers to the side, moving to the window to investigate.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 70,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 71
    },
    {
      "Scene_lab": 70,
      "Story": "A yellow blur flies through the air, smacking against the glass.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 71,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 65
    },
    {
      "Scene_lab": 71,
      "Story": "You peer down at the top of Lex\’s blonde head, which is covered in her trademark blue and pink highlights.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 72,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 107
    },
    {
      "Scene_lab": 72,
      "Story": "Poised to throw another yellow square at your window, she waves.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 73,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 65
    },
    {
      "Scene_lab": 73,
      "Story": "You slide your feet into a pair of fuzzy slippers and squint at the mirror by the door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 74,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 88
    },
    {
      "Scene_lab": 74,
      "Story": "Your My Little Pony shirt from middle school isn\’t the most flattering.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 75,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 71
    },
    {
      "Scene_lab": 75,
      "Story": "Neither is your nest of uncombed hair or growing unibrow.",
      "Choice": "Y",
      "Response_1": "It\’s good enough for a brief trip.",
      "Response_2": "You should spice up the outfit.",
      "Outcome_1": 76,
      "Outcome_2": 76,
      "Section": 2,
      "Storyline": 0,
      "NumChar": 58
    },
    {
      "Scene_lab": 76,
      "Story": "Throwing on a pair of sunglasses, you glance back at the mirror.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 77,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 65
    },
    {
      "Scene_lab": 77,
      "Story": "Now you\’re fully dressed.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 78,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 26
    },
    {
      "Scene_lab": 78,
      "Story": "You run down two flights of stairs and push open the front door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 79,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 65
    },
    {
      "Scene_lab": 79,
      "Story": "You approach Lex, who is lounging on the hood of her car.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 80,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 58
    },
    {
      "Scene_lab": 80,
      "Story": "You point at your building. “That was vandalism.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 81,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 50
    },
    {
      "Scene_lab": 81,
      "Story": "Lex shrugs. “I had a feeling you weren\’t going to buzz me in.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 82,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 63
    },
    {
      "Scene_lab": 82,
      "Story": "You scoop up a yellow packet from the grass. “You were throwing Peanut M&M\’s at my window?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 83,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 92
    },
    {
      "Scene_lab": 83,
      "Story": "Lex tears open a packet and pops a few in her mouth. “Have a few. Consider it an incentive to avoid a 100-foot radius of he-who-shall-not-be-named.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 84,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 149
    },
    {
      "Scene_lab": 84,
      "Story": "Adam is deathly allergic to peanuts, so your diet has been practically Peanut M&M-free since you started dating.",
      "Choice": "Y",
      "Response_1": "It\’s about time you tried one again.",
      "Response_2": "It still doesn\’t feel right.",
      "Outcome_1": 85,
      "Outcome_2": 85,
      "Section": 2,
      "Storyline": 0,
      "NumChar": 112
    },
    {
      "Scene_lab": 85,
      "Story": "Staring at the cartoon M&M characters, you can\’t curb your curiosity.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 86,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 70
    },
    {
      "Scene_lab": 86,
      "Story": "You open the packet, place an M&M on your tongue and let it melt.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 87,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 66
    },
    {
      "Scene_lab": 87,
      "Story": "Two years is a long time.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 88,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 26
    },
    {
      "Scene_lab": 88,
      "Story": "You forgot how great they tasted.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 89,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 34
    },
    {
      "Scene_lab": 89,
      "Story": "Lex stands, squinting at the sun. “Come on, Emily. Let\’s get you presentable.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 90,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 79
    },
    {
      "Scene_lab": 90,
      "Story": "With Lex behind, you trudge back up the stairs to your apartment.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 91,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 66
    },
    {
      "Scene_lab": 91,
      "Story": "Within moments, Lex\’s pierced nose is buried in your closet.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 92,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 61
    },
    {
      "Scene_lab": 92,
      "Story": "She extracts two dresses and throws them at you, raising an eyebrow.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 93,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 69
    },
    {
      "Scene_lab": 93,
      "Story": "You rub the skirt fabrics between your fingertips, exhaling.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 94,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 61
    },
    {
      "Scene_lab": 94,
      "Story": "What to wear to re-enter civilization?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 95,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 39
    },
    {
      "Scene_lab": 95,
      "Story": "The white dress might stain easily, but the red dress reminds you of Adam.",
      "Choice": "Y",
      "Response_1": "You pull the red dress over your head.",
      "Response_2": "You pull the white dress over your head.",
      "Outcome_1": 96,
      "Outcome_2": 96,
      "Section": 2,
      "Storyline": 0,
      "NumChar": 74
    },
    {
      "Scene_lab": 96,
      "Story": "As you stare at the mirror, the blood drains from your face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": [
        97,
        144,
        199
      ],
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 61
    },
    {
      "Scene_lab": 97,
      "Story": "The gazebo. The violin. Adam\’s five o'clock shadow.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 98,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 52
    },
    {
      "Scene_lab": 98,
      "Story": "You were suddenly reminded of your first date with Adam.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 99,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 57
    },
    {
      "Scene_lab": 99,
      "Story": "Wiping your forehead, you feel the sudden need to see him.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 100,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 59
    },
    {
      "Scene_lab": 100,
      "Story": "Snatching Lex\’s car keys from your nightstand, you jog out the door and jump into the driver\’s seat.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 101,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 101
    },
    {
      "Scene_lab": 101,
      "Story": "She runs closely behind, cursing.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 102,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 34
    },
    {
      "Scene_lab": 102,
      "Story": "Minutes later, you ease your foot off the gas pedal as you near Adam\’s blue rowhouse.",
      "Choice": "Y",
      "Response_1": "You park right in front.",
      "Response_2": "You park two houses down.",
      "Outcome_1": 103,
      "Outcome_2": 103,
      "Section": 2,
      "Storyline": 1,
      "NumChar": 85
    },
    {
      "Scene_lab": 103,
      "Story": "There\’s movement in the window. You squint.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 104,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 44
    },
    {
      "Scene_lab": 104,
      "Story": "Nope. Too far away to make out the faces of the two people hugging by the curtain but close enough to recognize Adam\’s lanky outline beside feminine curves.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 105,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 157
    },
    {
      "Scene_lab": 105,
      "Story": "Unbelievable. He\’s already moved on to some Tinder girl.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 106,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 57
    },
    {
      "Scene_lab": 106,
      "Story": "Unbuckling, you open your door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 107,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 32
    },
    {
      "Scene_lab": 107,
      "Story": "Lex grabs your arm. “Emily, this is a terrible idea. As your best friend, I am legally obligated to protect you from acting stupid, being a stalker, and any other side effect of a broken heart.”",
      "Choice": "Y",
      "Response_1": "You smile, hugging her.",
      "Response_2": "You yank your arm away.",
      "Outcome_1": 108,
      "Outcome_2": 108,
      "Section": 2,
      "Storyline": 1,
      "NumChar": 194
    },
    {
      "Scene_lab": 108,
      "Story": "“Relax. I just need a closer look, in case the new girl\’s pretty. Then, I\’ll come back. It\’ll be like I was never creeping outside Adam\’s window.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 109,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 147
    },
    {
      "Scene_lab": 109,
      "Story": "Lex shakes her head. “Why does it matter? You\’re broken up. One month. You promised you\’d pick yourself up after one month.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 110,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 125
    },
    {
      "Scene_lab": 110,
      "Story": "You point. “Emphasis on after one month. Meaning I\’ll be fine tomorrow.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 111,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 73
    },
    {
      "Scene_lab": 111,
      "Story": "Because that\’s exactly how emotions work.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 112,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 42
    },
    {
      "Scene_lab": 112,
      "Story": "Shutting the car door, you crouch and run to the driveway beside his house.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 113,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 76
    },
    {
      "Scene_lab": 113,
      "Story": "Still too far. You run alongside a row of lawn flamingos until you\’re directly under his window.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 114,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 97
    },
    {
      "Scene_lab": 114,
      "Story": "Lex was right. Terrible, awful, horrific idea. What are you doing?",
      "Choice": "Y",
      "Response_1": "You start to walk away.",
      "Response_2": "You aim to kick a rock.",
      "Outcome_1": 115,
      "Outcome_2": 115,
      "Section": 2,
      "Storyline": 1,
      "NumChar": 66
    },
    {
      "Scene_lab": 115,
      "Story": "You hear a sharp cracking sound.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 116,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 32
    },
    {
      "Scene_lab": 116,
      "Story": "Uh-oh. Why did that sound like one of the porcelain garden gnomes that Adam\’s grandma gifted him for Christmas?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 117,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 112
    },
    {
      "Scene_lab": 117,
      "Story": "You squat, scrambling to sweep the broken pieces into a neat pile.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 118,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 67
    },
    {
      "Scene_lab": 118,
      "Story": "A sharp piece of gnome stabs your right hand, drawing a dot of blood.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 119,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 70
    },
    {
      "Scene_lab": 119,
      "Story": "Yelping, you stand and cradle the small wound.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 120,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 47
    },
    {
      "Scene_lab": 120,
      "Story": "“Emily?” Adam and the unidentified girl appear in the doorway.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 121,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 63
    },
    {
      "Scene_lab": 121,
      "Story": "Ugh. Blonde waves. Cheekbones. She\’s totally pretty.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 122,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 53
    },
    {
      "Scene_lab": 122,
      "Story": "Hiding your wounded hand behind your back, you approach them.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 123,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 62
    },
    {
      "Scene_lab": 123,
      "Story": "“Tinder, Adam? Really? We\’re together for two years, we end things for 30 days, and you\’ve already moved on?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 124,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 110
    },
    {
      "Scene_lab": 124,
      "Story": "Adam\’s face scrunches.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 125,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 23
    },
    {
      "Scene_lab": 125,
      "Story": "The girl\’s mouth forms an ‘o\’ and she extends her hand, reaching between us.“I\’m Adam\’s cousin. I\’m visiting from New York.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 126,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 126
    },
    {
      "Scene_lab": 126,
      "Story": "She clears her throat. “Emily, right? I\’ve heard so much about you.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 127,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 69
    },
    {
      "Scene_lab": 127,
      "Story": "His cousin. That explains their eerily similar bone structures.",
      "Choice": "Y",
      "Response_1": "You shake her hand.",
      "Response_2": "You don't move.",
      "Outcome_1": 128,
      "Outcome_2": 128,
      "Section": 2,
      "Storyline": 1,
      "NumChar": 63
    },
    {
      "Scene_lab": 128,
      "Story": "Adam\’s cousin smiles, gesturing to her Jeep. “I was just leaving. Nice meeting you.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 129,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 85
    },
    {
      "Scene_lab": 129,
      "Story": "Waving, she disappears into a small van and drives away.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 130,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 57
    },
    {
      "Scene_lab": 130,
      "Story": "You watch her leave, too embarrassed to make eye contact with Adam.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 131,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 68
    },
    {
      "Scene_lab": 131,
      "Story": "You feel his eyes trained on the side of your face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 132,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 52
    },
    {
      "Scene_lab": 132,
      "Story": "In your peripheral vision, Adam scratches his neck. “Do you want to grab coffee?”",
      "Choice": "Y",
      "Response_1": "“Yes.” You nod.",
      "Response_2": "\"Nah, I'm a little busy.\"",
      "Outcome_1": 137,
      "Outcome_2": 133,
      "Section": 2,
      "Storyline": 1,
      "NumChar": 81
    },
    {
      "Scene_lab": 133,
      "Story": "Adam cocks his head. “Come on, Em. Too busy for caffeine?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 134,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 59
    },
    {
      "Scene_lab": 134,
      "Story": "You bite the inside of your cheek, crossing your arms.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 135,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 55
    },
    {
      "Scene_lab": 135,
      "Story": "He crosses his arms in response. “Thirty minutes.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 136,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 51
    },
    {
      "Scene_lab": 136,
      "Story": "You raise an eyebrow. “Fine. Thirty minutes.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 137,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 46
    },
    {
      "Scene_lab": 137,
      "Story": "You send a quick text to Lex and two minutes later, you\’re buckled in the passenger seat of Adam\’s car.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 138,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 104
    },
    {
      "Scene_lab": 138,
      "Story": "The familiar campfire scent swirls up your nose the entire ride, Adam\’s favorite Eminem album blasting from his speakers.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 139,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 122
    },
    {
      "Scene_lab": 139,
      "Story": "It\’s strange to be sitting next to him, listening to his music, Converse pressed into his gel floor mats.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 140,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 106
    },
    {
      "Scene_lab": 140,
      "Story": "It feels like the past month ceased to exist the moment you saw him again.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 141,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 75
    },
    {
      "Scene_lab": 141,
      "Story": "In a short while, you\’ll fall right back into your old patterns at your special coffee shop.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 142,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 93
    },
    {
      "Scene_lab": 142,
      "Story": "Upon entering the shop, he\’ll make a beeline toward the window and guard your favorite table against classmates cramming for midterm exams.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 143,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 140
    },
    {
      "Scene_lab": 143,
      "Story": "You\’ll order the coffees at the bar.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 273,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 36
    },
    {
      "Scene_lab": 144,
      "Story": "You haven\’t worn something like this for so long, and you don\’t remember anything about how to date.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 145,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 101
    },
    {
      "Scene_lab": 145,
      "Story": "Hopefully you won\’t be a klutz today, but who knows.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 146,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 53
    },
    {
      "Scene_lab": 146,
      "Story": "Your brain is anywhere but the present.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 147,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 40
    },
    {
      "Scene_lab": 147,
      "Story": "Lex drops you off at the arcade 20 minutes later, tossing a tube of pepper spray out the window as she drives away.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 148,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 116
    },
    {
      "Scene_lab": 148,
      "Story": "You narrowly catch it and slip it into your purse, then turn and head inside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 149,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 78
    },
    {
      "Scene_lab": 149,
      "Story": "When you enter, you realize the entire arcade is under black light, meaning your dress makes you look like a massive glowstick.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 150,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 128
    },
    {
      "Scene_lab": 150,
      "Story": "You survey the room, which is a mess of blinking screens, basketball hoops, and ski ball machines. It smells like sweat.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 151,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 121
    },
    {
      "Scene_lab": 151,
      "Story": "You squint as you recognize your date.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 152,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 39
    },
    {
      "Scene_lab": 152,
      "Story": "He\’s wearing a jean jacket with glowing patches, eyes trained on his phone.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 153,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 76
    },
    {
      "Scene_lab": 153,
      "Story": "You approach him and clear your throat, suddenly realizing you don\’t remember his name.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 154,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 88
    },
    {
      "Scene_lab": 154,
      "Story": "Your phone is snugly buried in your purse, so it would be hard to subtly check.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 155,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 80
    },
    {
      "Scene_lab": 155,
      "Story": "He turns to you and grins. “Hey, you. Right on time.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 156,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 54
    },
    {
      "Scene_lab": 156,
      "Story": "He slips his phone into his shirt pocket. “Can I get you something to drink?”",
      "Choice": "Y",
      "Response_1": "\"Yes, please.\"",
      "Response_2": "\"No, thanks.\"",
      "Outcome_1": 159,
      "Outcome_2": 157,
      "Section": 2,
      "Storyline": 2,
      "NumChar": 77
    },
    {
      "Scene_lab": 157,
      "Story": "He gestures at the menu. “I insist. After all, we might be here a while. I tend to get pretty invested in these games, you know?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 158,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 130
    },
    {
      "Scene_lab": 158,
      "Story": "No. You don\’t know.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 159,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 19
    },
    {
      "Scene_lab": 159,
      "Story": "You follow him to the counter, careful not to lean your dress against the various soda stains and loose kernels of popcorn.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 160,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 124
    },
    {
      "Scene_lab": 160,
      "Story": "Your date already has a drink in his hand, so he glances at you for your selection.",
      "Choice": "Y",
      "Response_1": "You point at the water.",
      "Response_2": "You select the red fruit punch.",
      "Outcome_1": 162,
      "Outcome_2": 161,
      "Section": 2,
      "Storyline": 2,
      "NumChar": 84
    },
    {
      "Scene_lab": 161,
      "Story": "It would be boring to just order a water when someone else is paying.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 162,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 70
    },
    {
      "Scene_lab": 162,
      "Story": "You thank Tinder Guy, accept the cup and take a sip.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 163,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 52
    },
    {
      "Scene_lab": 163,
      "Story": "You taste a hint of contamination with some sweet soda.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 164,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 55
    },
    {
      "Scene_lab": 164,
      "Story": "The flavor reminds you of the Saturdays you and Adam spent volunteering at the local daycare center near your campus, which sends another wave of sadness through your body.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 165,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 173
    },
    {
      "Scene_lab": 165,
      "Story": "You wonder what Adam\’s doing right now.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 166,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 40
    },
    {
      "Scene_lab": 166,
      "Story": "He\’s probably at the daycare.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 167,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 30
    },
    {
      "Scene_lab": 167,
      "Story": "You wonder if he still volunteers there.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 168,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 41
    },
    {
      "Scene_lab": 168,
      "Story": "Tinder Guy holds up a string of blue tickets, which snaps you out of your thoughts. “Which game first?”",
      "Choice": "Y",
      "Response_1": "You nod at the skee-ball machine.",
      "Response_2": "You nod at the basketball hoop.",
      "Outcome_1": 169,
      "Outcome_2": 171,
      "Section": 2,
      "Storyline": 2,
      "NumChar": 104
    },
    {
      "Scene_lab": 169,
      "Story": "You have your eye on the penguin.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 170,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 34
    },
    {
      "Scene_lab": 170,
      "Story": "Adam hates penguins.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 173,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 20
    },
    {
      "Scene_lab": 171,
      "Story": "You have your eye on the penguin behind the front counter.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 172,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 59
    },
    {
      "Scene_lab": 172,
      "Story": "It\’s worth something like 50 tickets, but Adam hates penguins.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 173,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 62
    },
    {
      "Scene_lab": 173,
      "Story": "“That stuffed penguin is looking pretty cute.” It\’s about time you stopped sleeping with the stuffed bear Adam gave you last Christmas.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 174,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 136
    },
    {
      "Scene_lab": 174,
      "Story": "At this point, it\’s just sad.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 175,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 30
    },
    {
      "Scene_lab": 175,
      "Story": "It can\’t be ethical to bury a stuffed animal in snot-filled tissues every night.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 176,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 81
    },
    {
      "Scene_lab": 176,
      "Story": "Tinder Guy digs around in his pocket and produces a handful of quarters, holding one up. “Let\’s spice this game up. You call the flip.”",
      "Choice": "Y",
      "Response_1": "\"Heads.”",
      "Response_2": "\"Tails.\"",
      "Outcome_1": 177,
      "Outcome_2": 177,
      "Section": 2,
      "Storyline": 2,
      "NumChar": 135
    },
    {
      "Scene_lab": 177,
      "Story": "He throws the coin in the air. “Heads, you take a spin at it. Tails, I show off my mastery.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 178,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 93
    },
    {
      "Scene_lab": 178,
      "Story": "It lands on the opposite of your bet.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 179,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 38
    },
    {
      "Scene_lab": 179,
      "Story": "Tinder Guy smiles and passes his drink to you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 180,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 46
    },
    {
      "Scene_lab": 180,
      "Story": "You accept it in your free hand.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 181,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 34
    },
    {
      "Scene_lab": 181,
      "Story": "He sticks out his tongue in concentration, aiming carefully.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 182,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 61
    },
    {
      "Scene_lab": 182,
      "Story": "He misses. Tinder Guy runs a hand through his hair, then cracks his knuckles in preparation.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 183,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 92
    },
    {
      "Scene_lab": 183,
      "Story": "He aims again, and this time he succeeds. He cheers, throwing his arms up as he takes a step back towards you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 184,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 110
    },
    {
      "Scene_lab": 184,
      "Story": "The motion knocks the cups out of your grip. His Dr. Pepper splashes all over your dress.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 185,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 90
    },
    {
      "Scene_lab": 185,
      "Story": "He winces, scratching his neck. “Dude, sorry about that. Bad luck.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 186,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 68
    },
    {
      "Scene_lab": 186,
      "Story": "He collects the tickets from the machine and points at the penguin. “Mind if I keep that? My mom loves penguins.” Still in shock, you glower at him.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 187,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 149
    },
    {
      "Scene_lab": 187,
      "Story": "He glances around. “There\’s no bathroom here, but there\’s one at Firefly Café down the street. I could walk you there?”",
      "Choice": "Y",
      "Response_1": "“It\’s the least you could do.”",
      "Response_2": "\"You've done enough.\"",
      "Outcome_1": 194,
      "Outcome_2": 188,
      "Section": 2,
      "Storyline": 2,
      "NumChar": 119
    },
    {
      "Scene_lab": 188,
      "Story": "You storm out, charging briskly in the direction of the cafe.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 189,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 62
    },
    {
      "Scene_lab": 189,
      "Story": "It feels stupid hot outside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 190,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 29
    },
    {
      "Scene_lab": 190,
      "Story": "You hear a voice, accompanied by the patter of rushed footsteps. “Wait!”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 191,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 73
    },
    {
      "Scene_lab": 191,
      "Story": "You walk faster.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 192,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 17
    },
    {
      "Scene_lab": 192,
      "Story": "Tinder Guy catches up, panting. “Can\’t let a date walk a quarter-mile alone.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 193,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 78
    },
    {
      "Scene_lab": 193,
      "Story": "“Fine.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 194,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 9
    },
    {
      "Scene_lab": 194,
      "Story": "He ruined your dress. Bare minimum, he buys you a coffee, then helps you salvage the mess.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 195,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 91
    },
    {
      "Scene_lab": 195,
      "Story": "No point in cleaning the thing before drinking another spill hazard around him.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 196,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 80
    },
    {
      "Scene_lab": 196,
      "Story": "As the café appears around the corner, Tinder Guy mutters an excuse about spending the last bit of his cash at the arcade.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 197,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 123
    },
    {
      "Scene_lab": 197,
      "Story": "A new level of cheap. He wants you to buy him a coffee in exchange for the soda you\’re now wearing.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 198,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 100
    },
    {
      "Scene_lab": 198,
      "Story": "Best date ever.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 273,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 16
    },
    {
      "Scene_lab": 199,
      "Story": "Hopefully you won\’t be a klutz today, but who knows?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 200,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 53
    },
    {
      "Scene_lab": 200,
      "Story": "Your brain is anywhere but the present.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 201,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 40
    },
    {
      "Scene_lab": 201,
      "Story": "Lex cheers, grabbing her car keys. “You know what I always say goes best with a pretty dress.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 202,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 95
    },
    {
      "Scene_lab": 202,
      "Story": "You wish you didn\’t.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 203,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 21
    },
    {
      "Scene_lab": 203,
      "Story": "You\’d much rather take another nap with your can of Pringles than subject yourself to one of Lex\’s makeovers.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 204,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 110
    },
    {
      "Scene_lab": 204,
      "Story": "Her philosophy: put-together on the outside equals put-together on the inside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 205,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 79
    },
    {
      "Scene_lab": 205,
      "Story": "Clearly, she\’s not a math major.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 206,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 33
    },
    {
      "Scene_lab": 206,
      "Story": "Minutes later, she eases her foot off the gas pedal and parks in front of her favorite salon.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 207,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 94
    },
    {
      "Scene_lab": 207,
      "Story": "As you walk in, you\’re hit with the toxic fumes of nail polish and hairspray.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 208,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 78
    },
    {
      "Scene_lab": 208,
      "Story": "Rows of pastel-colored chairs line the walls.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 209,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 46
    },
    {
      "Scene_lab": 209,
      "Story": "A woman emerges from the back, wiping her hands on her apron.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 210,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 62
    },
    {
      "Scene_lab": 210,
      "Story": "She smiles. “Hello, ladies. What can we do for you today?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 211,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 59
    },
    {
      "Scene_lab": 211,
      "Story": "You glance at the catalog on the counter. “Um…”",
      "Choice": "Y",
      "Response_1": "You point at the manicure.",
      "Response_2": "You signal for Lex to choose.",
      "Outcome_1": 213,
      "Outcome_2": 212,
      "Section": 2,
      "Storyline": 3,
      "NumChar": 48
    },
    {
      "Scene_lab": 212,
      "Story": "Her eyes light up. Without hesitation, she points at the manicure.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 213,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 66
    },
    {
      "Scene_lab": 213,
      "Story": "Seems like the least permanent option.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 214,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 39
    },
    {
      "Scene_lab": 214,
      "Story": "No harm in making your nails a little shinier.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 215,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 47
    },
    {
      "Scene_lab": 215,
      "Story": "She directs you to the nail station and gestures for you to place your hands in a bowl of warm solution.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 216,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 105
    },
    {
      "Scene_lab": 216,
      "Story": "Lex holds a ring of sparkly green nails up to your face. “I\’m leaning toward Grass Green or Envy Forest.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 217,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 106
    },
    {
      "Scene_lab": 217,
      "Story": "You could fight back, but you don\’t have the energy. “Up to you.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 218,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 66
    },
    {
      "Scene_lab": 218,
      "Story": "Forty minutes later, you stare at your Grass Green nails.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 219,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 58
    },
    {
      "Scene_lab": 219,
      "Story": "Yep. Those would camouflage well with a lawn, minus the glitter.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 220,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 65
    },
    {
      "Scene_lab": 220,
      "Story": "They\’re even the same length as a blade of grass.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 221,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 50
    },
    {
      "Scene_lab": 221,
      "Story": "Lex tilts her head. “Are you sure you don\’t want to get your hair done?”",
      "Choice": "Y",
      "Response_1": "Not a chance.",
      "Response_2": "You might as well.",
      "Outcome_1": 226,
      "Outcome_2": 222,
      "Section": 2,
      "Storyline": 3,
      "NumChar": 72
    },
    {
      "Scene_lab": 222,
      "Story": "You shrug. “What did you have in mind?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 223,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 40
    },
    {
      "Scene_lab": 223,
      "Story": "Lex claps, shoving a catalog beneath your nose.“I always thought you\’d look gorgeous with purple highlights.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 224,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 111
    },
    {
      "Scene_lab": 224,
      "Story": "You stand. “Never mind. Let\’s go.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 225,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 35
    },
    {
      "Scene_lab": 225,
      "Story": "Lex groans. “What? Are you sure? Would you feel better about pink?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 226,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 68
    },
    {
      "Scene_lab": 226,
      "Story": "“I\’m sure. Let\’s just grab coffee and head home.” Ignoring her pouting, you walk outside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 227,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 90
    },
    {
      "Scene_lab": 227,
      "Story": "Birds chirp loudly in a nearby tree.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 228,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 37
    },
    {
      "Scene_lab": 228,
      "Story": "Racing clouds shift the shadows beneath your feet as you stare at the pavement.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 229,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 80
    },
    {
      "Scene_lab": 229,
      "Story": "Sitting on a park bench, you feel like the entire world is moving forward but you\’re stuck on the curb.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 230,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 104
    },
    {
      "Scene_lab": 230,
      "Story": "No amount of manicures or hair treatments could restart your life.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 231,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 67
    },
    {
      "Scene_lab": 231,
      "Story": "Lex emerges with a bubblegum lollipop.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 232,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 39
    },
    {
      "Scene_lab": 232,
      "Story": "You stand, sweeping a lock of hair behind your ear.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 233,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 52
    },
    {
      "Scene_lab": 233,
      "Story": "She makes a funny face at you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 234,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 31
    },
    {
      "Scene_lab": 234,
      "Story": "You make one back. “What?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 235,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 27
    },
    {
      "Scene_lab": 235,
      "Story": "Lex touches your face. Her palm comes back baby blue.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 236,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 54
    },
    {
      "Scene_lab": 236,
      "Story": "You glance at your hand, which is also smeared blue, and then at your dress.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 237,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 77
    },
    {
      "Scene_lab": 237,
      "Story": "Oh, no. You sat on sidewalk chalk.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 238,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 35
    },
    {
      "Scene_lab": 238,
      "Story": "Lex gasps, staring at your stained dress. “Emily…”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 239,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 51
    },
    {
      "Scene_lab": 239,
      "Story": "You groan. “I know.”",
      "Choice": "Y",
      "Response_1": "You should re-enter the mall.",
      "Response_2": "You should head to the cafe.",
      "Outcome_1": 246,
      "Outcome_2": 240,
      "Section": 2,
      "Storyline": 3,
      "NumChar": 20
    },
    {
      "Scene_lab": 240,
      "Story": "You squint.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 241,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 12
    },
    {
      "Scene_lab": 241,
      "Story": "“I just need a coffee.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 242,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 24
    },
    {
      "Scene_lab": 242,
      "Story": "As soon as you utter the words, something wet drops on your shoulder strap.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 243,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 76
    },
    {
      "Scene_lab": 243,
      "Story": "Lex\’s eyes bulge.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 244,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 18
    },
    {
      "Scene_lab": 244,
      "Story": "You glance up at the sky, making eye contact with the bird that just took a dump on your dress.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 245,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 96
    },
    {
      "Scene_lab": 245,
      "Story": "It\’s a sign to head back inside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 246,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 33
    },
    {
      "Scene_lab": 246,
      "Story": "Maybe buy a change of clothes.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 247,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 31
    },
    {
      "Scene_lab": 247,
      "Story": "Everyone goes to the coffee shop. You don\’t want to risk running into Adam in a stained dress covered in bird poop. Not that his opinion matters.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 248,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 146
    },
    {
      "Scene_lab": 248,
      "Story": "You and Lex head back into the mall and navigate to the intersection between a few stores.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 249,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 91
    },
    {
      "Scene_lab": 249,
      "Story": "Which would be the best option? Adam\’s favorite store or the one with the bad fashion display?",
      "Choice": "Y",
      "Response_1": "Adam\’s favorite, it is.",
      "Response_2": "Bad fashion over anything Adam.",
      "Outcome_1": 250,
      "Outcome_2": 253,
      "Section": 2,
      "Storyline": 3,
      "NumChar": 94
    },
    {
      "Scene_lab": 250,
      "Story": "Time to start taking back your life.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 251,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 37
    },
    {
      "Scene_lab": 251,
      "Story": "You enter Abercrombie.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 252,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 23
    },
    {
      "Scene_lab": 252,
      "Story": "Immediately, your voice lowers to a whisper. “Lex.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 259,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 51
    },
    {
      "Scene_lab": 253,
      "Story": "Time to start taking back your life.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 254,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 37
    },
    {
      "Scene_lab": 254,
      "Story": "You enter the store, appalled by the spread of beige.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 255,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 54
    },
    {
      "Scene_lab": 255,
      "Story": "Have these people ever heard of the primary colors, at the very least?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 256,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 71
    },
    {
      "Scene_lab": 256,
      "Story": "Perusing a bland string of skirts, you wonder if you would be better off in your gross dress.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 257,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 94
    },
    {
      "Scene_lab": 257,
      "Story": "You turn toward the entrance, contemplating a swift exit.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 258,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 58
    },
    {
      "Scene_lab": 258,
      "Story": "Your voice lowers to a whisper. “Lex.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 259,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 39
    },
    {
      "Scene_lab": 259,
      "Story": "Her eyes lift from her phone and her jaw drops.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 260,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 48
    },
    {
      "Scene_lab": 260,
      "Story": "Standing twenty feet away is Adam.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 261,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 35
    },
    {
      "Scene_lab": 261,
      "Story": "He looks good. Normal. His hair is scruffy and his favorite red and black flannel hangs off his broad shoulders. Like the break-up never happened.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 262,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 147
    },
    {
      "Scene_lab": 262,
      "Story": "Lex touches your arm. “Should we leave?”",
      "Choice": "Y",
      "Response_1": "You shake your head.",
      "Response_2": "That would be smart.",
      "Outcome_1": 263,
      "Outcome_2": 264,
      "Section": 2,
      "Storyline": 3,
      "NumChar": 40
    },
    {
      "Scene_lab": 263,
      "Story": "“It\’s not like I cannot shop wherever Adam appears for the rest of my life. Besides, I chose this store before knowing he is here, so I deserve to shop here as much as he does!”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 273,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 177
    },
    {
      "Scene_lab": 264,
      "Story": "The only problem is the Adam-sized obstacle blockading you in the store.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 265,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 72
    },
    {
      "Scene_lab": 265,
      "Story": "You shuffle to the women\’s side, hiding behind a clothing rack.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 266,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 64
    },
    {
      "Scene_lab": 266,
      "Story": "You peek through an opening between two hangers.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 267,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 49
    },
    {
      "Scene_lab": 267,
      "Story": "Adam appears to be shopping alone. Interesting.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 268,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 48
    },
    {
      "Scene_lab": 268,
      "Story": "Lex joins you and clears her throat. “Okay, Emily. As much as I love this new stalker energy you have going for you, are you going to say something to him or just creep from a distance?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 269,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 187
    },
    {
      "Scene_lab": 269,
      "Story": "You take a deep breath. “You\’re right. I\’ll talk to him.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 270,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 58
    },
    {
      "Scene_lab": 270,
      "Story": "You step out from behind the clothing rack. Pause. He\’s gone.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 271,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 62
    },
    {
      "Scene_lab": 271,
      "Story": "Disappointment swells in your chest.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 272,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 37
    },
    {
      "Scene_lab": 272,
      "Story": "Lex gives you a side hug, resting her head on your shoulder. “Let\’s get you a cup of coffee.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 273,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 93
    },
    {
      "Scene_lab": 273,
      "Story": "Firefly Café is the go-to coffee spot near your college campus, and as you walk in, all five senses are entangled in its hazy ambiance.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 274,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 136
    },
    {
      "Scene_lab": 274,
      "Story": "The strong smells of coffee and chocolate mingle in the air.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 275,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 61
    },
    {
      "Scene_lab": 275,
      "Story": "Heat blasts from air vents framing the café\’s tiled walls, which are covered in portraits of coffee beans and animated customers.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 276,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 130
    },
    {
      "Scene_lab": 276,
      "Story": "The window seats are occupied by students with furrowed brows, headphones blasting as they hunch over textbooks.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 277,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 113
    },
    {
      "Scene_lab": 277,
      "Story": "Nothing has changed in your month-long boycott of the café.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 278,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 60
    },
    {
      "Scene_lab": 278,
      "Story": "It was easier to forget Adam if you didn\’t have to sip coffee in the same shop where you first met.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 279,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 100
    },
    {
      "Scene_lab": 279,
      "Story": "Head buried in your purse, you take a couple of steps toward the coffee bar.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 280,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 77
    },
    {
      "Scene_lab": 280,
      "Story": "A loud voice sounds from your right. “Excuse me.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 281,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 50
    },
    {
      "Scene_lab": 281,
      "Story": "You look up to see a vaguely familiar face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 282,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 44
    },
    {
      "Scene_lab": 282,
      "Story": "You recognize the guy from your Intro to Mass Communication class.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 283,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 67
    },
    {
      "Scene_lab": 283,
      "Story": "He gestures at a girl sitting in a booth. “Would you mind taking a photo for us?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 284,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 82
    },
    {
      "Scene_lab": 284,
      "Story": "Your brain goes into panic mode. You\’re terrible at taking photos.",
      "Choice": "Y",
      "Response_1": "You start to shake your head.",
      "Response_2": "You hold out your palm.",
      "Outcome_1": 285,
      "Outcome_2": 285,
      "Section": 3,
      "Storyline": 0,
      "NumChar": 66
    },
    {
      "Scene_lab": 285,
      "Story": "He thrusts his phone into your hand. “Thank you so much.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 286,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 58
    },
    {
      "Scene_lab": 286,
      "Story": "He lowers his voice. “Instead of taking a photo, can you hit the record button?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 287,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 81
    },
    {
      "Scene_lab": 287,
      "Story": "Easy enough. You nod, sliding to video mode and holding the screen up.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 288,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 71
    },
    {
      "Scene_lab": 288,
      "Story": "He pulls his drawstring bag off his shoulder and retrieves a ukulele, dropping to a knee in front of the girl.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 289,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 111
    },
    {
      "Scene_lab": 289,
      "Story": "Her eyes widen, hand covering her mouth.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 290,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 41
    },
    {
      "Scene_lab": 290,
      "Story": "All eyes in the cafe turn to the couple.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 291,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 41
    },
    {
      "Scene_lab": 291,
      "Story": "Strumming the opening to “Marry Me” by Train, the guy sings until he gets to the end of the chorus.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 292,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 100
    },
    {
      "Scene_lab": 292,
      "Story": "At that point, the girl nods and throws her arms around his neck.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 293,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 66
    },
    {
      "Scene_lab": 293,
      "Story": "Looks like your break-up\’s monthiversary will be someone else\’s anniversary.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 294,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 77
    },
    {
      "Scene_lab": 294,
      "Story": "The door jingles. You turn and see it inch open and shut as a little pug nudges it with its face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 295,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 98
    },
    {
      "Scene_lab": 295,
      "Story": "Trapped outside, it looks up at you with sad eyes.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 296,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 51
    },
    {
      "Scene_lab": 296,
      "Story": "You glance at the couple and back at the pug.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 297,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 46
    },
    {
      "Scene_lab": 297,
      "Story": "You\’re still recording. Should you let the dog in and risk messing up the video?",
      "Choice": "Y",
      "Response_1": "You reach for the door.",
      "Response_2": "You decide against it.",
      "Outcome_1": 298,
      "Outcome_2": 298,
      "Section": 3,
      "Storyline": 0,
      "NumChar": 80
    },
    {
      "Scene_lab": 298,
      "Story": "Another customer enters. As the door opens, the dog shuffles inside and runs to the guy with the ukulele.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 299,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 106
    },
    {
      "Scene_lab": 299,
      "Story": "He reaches down and retrieves a ring from the pug\’s collar, then slides it onto his new fiancé\’s finger.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 300,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 105
    },
    {
      "Scene_lab": 300,
      "Story": "The coffee shop crowd cheers and claps.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 301,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 40
    },
    {
      "Scene_lab": 301,
      "Story": "After a few more seconds, you end the recording.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 302,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 49
    },
    {
      "Scene_lab": 302,
      "Story": "The guy returns and retrieves his phone, grinning.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 303,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 51
    },
    {
      "Scene_lab": 303,
      "Story": "You plaster a smile on your face. “Congratulations.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 304,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 53
    },
    {
      "Scene_lab": 304,
      "Story": "He\’s glowing, face all flushed. “Thank you.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 305,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 45
    },
    {
      "Scene_lab": 305,
      "Story": "You continue toward the counter, head down.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 306,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 44
    },
    {
      "Scene_lab": 306,
      "Story": "Their lives are forever changed, and you\’re stuck in post break-up limbo.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 307,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 74
    },
    {
      "Scene_lab": 307,
      "Story": "Nothing is changing. Nothing is new.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 308,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 37
    },
    {
      "Scene_lab": 308,
      "Story": "You look up to order. Correction: the hot barista? That\’s new.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 309,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 63
    },
    {
      "Scene_lab": 309,
      "Story": "All tattooed muscles and beanie, the guy behind the counter sticks his pen behind his ear as he enters numbers into the register.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 310,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 129
    },
    {
      "Scene_lab": 310,
      "Story": "As you approach, your eyes linger on his nametag.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 311,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 50
    },
    {
      "Scene_lab": 311,
      "Story": "Ryan. Of course, his name is Ryan.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 312,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 35
    },
    {
      "Scene_lab": 312,
      "Story": "One more addition to the long list of attractive Ryan\’s – Ryan Gosling, Ryan Reynolds, Ryan Seacrest.",
      "Choice": "Y",
      "Response_1": "You continue to observe.",
      "Response_2": "You ring the bell on the counter.",
      "Outcome_1": 313,
      "Outcome_2": 313,
      "Section": 3,
      "Storyline": 0,
      "NumChar": 101
    },
    {
      "Scene_lab": 313,
      "Story": "The hot barista switches his focus to organizing sugar packets. Hello?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 314,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 71
    },
    {
      "Scene_lab": 314,
      "Story": "Peripheral vision, anyone?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 315,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 27
    },
    {
      "Scene_lab": 315,
      "Story": "After a very long minute, you clear your throat.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 316,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 49
    },
    {
      "Scene_lab": 316,
      "Story": "He glances up, his dark eyes and long lashes meeting your gaze. Silence.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 317,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 73
    },
    {
      "Scene_lab": 317,
      "Story": "Oh, right. You\’re supposed to order. “Two daily specials, please.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 318,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 67
    },
    {
      "Scene_lab": 318,
      "Story": "Ryan chews on a toothpick, squinting at you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 319,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 45
    },
    {
      "Scene_lab": 319,
      "Story": "You tilt your head. “What?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 320,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 28
    },
    {
      "Scene_lab": 320,
      "Story": "He shrugs. “You don\’t strike me as a ‘daily special\’ customer.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 321,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 63
    },
    {
      "Scene_lab": 321,
      "Story": "Your eyes dart to the menu, which is filled with tiny print and dozens of flavor combinations.",
      "Choice": "Y",
      "Response_1": "“Fine. Two lattes, then.”",
      "Response_2": "“What does a ‘daily special\’ customer look like?”",
      "Outcome_1": 322,
      "Outcome_2": 322,
      "Section": 3,
      "Storyline": 0,
      "NumChar": 95
    },
    {
      "Scene_lab": 322,
      "Story": "The toothpick tilts as the corners of Ryan\’s mouth lift. “Two daily specials, coming up.” He rings up the order.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": [
        323,
        401,
        469
      ],
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 112
    },
    {
      "Scene_lab": 323,
      "Story": "You pass him a $5 bill. He hands you an order number and turns to mix the drinks, still smirking.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 324,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 98
    },
    {
      "Scene_lab": 324,
      "Story": "You return to the table and set the number down, facing toward the bar.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 325,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 72
    },
    {
      "Scene_lab": 325,
      "Story": "Adam rests his chin on his palm, staring at his phone.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 326,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 55
    },
    {
      "Scene_lab": 326,
      "Story": "You peer out the window, drumming your fingers on the edge of the table.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 327,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 73
    },
    {
      "Scene_lab": 327,
      "Story": "It\’s hard to believe you\’re here. With him. Today. A month after your apocalyptic break-up.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 328,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 92
    },
    {
      "Scene_lab": 328,
      "Story": "How can everything look the same but feel so different?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 329,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 56
    },
    {
      "Scene_lab": 329,
      "Story": "Adam pulls his trademark deck of cards from his jacket pocket and sets it on the table, signaling the start to an old game you used to reserve for study breaks at the cafe.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 330,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 173
    },
    {
      "Scene_lab": 330,
      "Story": "Each of you would guess a card out loud, then draw one at random from the deck.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 331,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 41
    },
    {
      "Scene_lab": 331,
      "Story": "Whoever was closest to the card drawn would then use the card to tell a story about someone in the room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 332,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 105
    },
    {
      "Scene_lab": 332,
      "Story": "Cheesy? Yes. Familiar and sweet? Absolutely. A smile traces your lips.",
      "Choice": "Y",
      "Response_1": "\"Queen of hearts.\"",
      "Response_2": "\"I'm not playing.\"",
      "Outcome_1": 333,
      "Outcome_2": 339,
      "Section": 3,
      "Storyline": 1,
      "NumChar": 70
    },
    {
      "Scene_lab": 333,
      "Story": "Adam clutches his chest. “Stealing my own card.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 334,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 49
    },
    {
      "Scene_lab": 334,
      "Story": "You shrug, batting your eyelashes. “Can\’t be yours if I\’ve already claimed it.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 335,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 80
    },
    {
      "Scene_lab": 335,
      "Story": "“Touche.” He frowns. “Guess I\’ll take the ace of spades.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 336,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 58
    },
    {
      "Scene_lab": 336,
      "Story": "Shuffling the deck, he flips the top one over.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 337,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 47
    },
    {
      "Scene_lab": 337,
      "Story": "He whistles. “Queen of hearts.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 338,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 32
    },
    {
      "Scene_lab": 338,
      "Story": "He holds up the card. “Take your pick.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 345,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 39
    },
    {
      "Scene_lab": 339,
      "Story": "Adam clutches his chest. “She\’s a stone cold killer.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 340,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 54
    },
    {
      "Scene_lab": 340,
      "Story": "You shrug, batting your eyelashes. “Only way you can win is if I abstain.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 341,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 75
    },
    {
      "Scene_lab": 341,
      "Story": "“Touche.” He frowns. “Guess I\’ll take the ace of spades.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 342,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 58
    },
    {
      "Scene_lab": 342,
      "Story": "Shuffling the deck, he flips the top one over.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 343,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 47
    },
    {
      "Scene_lab": 343,
      "Story": "He whistles. “Queen of hearts.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 344,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 32
    },
    {
      "Scene_lab": 344,
      "Story": "He holds up the card. “I\’d like to donate this win to the Queen of abstention.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 345,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 80
    },
    {
      "Scene_lab": 345,
      "Story": "You nod across the room. “Queen of hearts? Has to be the girl with the ring on her finger.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 347,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 92
    },
    {
      "Scene_lab": 346,
      "Story": "An awkward pause.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 348,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 17
    },
    {
      "Scene_lab": 347,
      "Story": "Adam pulls out his phone.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 349,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 27
    },
    {
      "Scene_lab": 348,
      "Story": "Your phone buzzes and you glance down at a Venmo payment from Adam, with his usual combination of coffee and side-eye emojis in the description.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 350,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 145
    },
    {
      "Scene_lab": 349,
      "Story": "Your stomach drops.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 351,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 20
    },
    {
      "Scene_lab": 350,
      "Story": "He returns his phone to his pocket, offering a tight-lipped smile. “So. Games aside, how are you?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 352,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 99
    },
    {
      "Scene_lab": 351,
      "Story": "How are you? Your eyes sting from last night\’s crying session, you might have a sinus infection and your chest feels like an elephant\’s chair.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 353,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 143
    },
    {
      "Scene_lab": 352,
      "Story": "“Good. How are you?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 354,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 21
    },
    {
      "Scene_lab": 353,
      "Story": "Adam runs a hand through his hair. “I\’m great. I already have an internship lined up at this great law firm in Texas for the summer, so I\’m right on track.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 355,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 156
    },
    {
      "Scene_lab": 354,
      "Story": "How about you? Having luck finding positions at any journals?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 356,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 63
    },
    {
      "Scene_lab": 355,
      "Story": "No, because you\’ve spent the entire application period crying over him.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 357,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 72
    },
    {
      "Scene_lab": 356,
      "Story": "You swallow hard. “I actually haven\’t applied yet. I…”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 358,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 55
    },
    {
      "Scene_lab": 357,
      "Story": "You stare at the table.",
      "Choice": "Y",
      "Response_1": "\"I've missed you.\"",
      "Response_2": "\"I'm seeing this guy.\"",
      "Outcome_1": 358,
      "Outcome_2": 362,
      "Section": 3,
      "Storyline": 1,
      "NumChar": 23
    },
    {
      "Scene_lab": 358,
      "Story": "Adam nods, exhaling.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 359,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 21
    },
    {
      "Scene_lab": 359,
      "Story": "You know what that look means.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 360,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 31
    },
    {
      "Scene_lab": 360,
      "Story": "He hasn\’t missed you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 361,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 22
    },
    {
      "Scene_lab": 361,
      "Story": "A wave of extreme sadness overwhelms you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 367,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 42
    },
    {
      "Scene_lab": 362,
      "Story": "Adam blinks in surprise. “Congratulations, I had no idea.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 363,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 59
    },
    {
      "Scene_lab": 363,
      "Story": "Neither did you, but “I miss you” is the opposite of getting over a break-up.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 364,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 78
    },
    {
      "Scene_lab": 364,
      "Story": "You nod, proud of the lie and hoping he\’s magically forgotten your earlier stalking incident. “Thanks.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 365,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 104
    },
    {
      "Scene_lab": 365,
      "Story": "He grins. “That actually makes me feel a lot better. I\’ve been casually seeing someone, too.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 366,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 94
    },
    {
      "Scene_lab": 366,
      "Story": "He what?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 367,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 8
    },
    {
      "Scene_lab": 367,
      "Story": "Your eyes are hot.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 368,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 19
    },
    {
      "Scene_lab": 368,
      "Story": "Oh, no. You feel tears welling in your eyes and look up at the ceiling, blinking hard. Too late.",
      "Choice": "Y",
      "Response_1": "You let a few tears escape.",
      "Response_2": "You scramble for a tissue.",
      "Outcome_1": 369,
      "Outcome_2": 369,
      "Section": 3,
      "Storyline": 1,
      "NumChar": 96
    },
    {
      "Scene_lab": 369,
      "Story": "Ryan arrives with your coffees. He sets yours down first.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 370,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 58
    },
    {
      "Scene_lab": 370,
      "Story": "You make unintentional eye contact and he tilts his head ever-so-slightly, eyes flitting to Adam\’s stoic expression.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 371,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 117
    },
    {
      "Scene_lab": 371,
      "Story": "Another barista enters the shop, tying her apron around her waist. “Ryan?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 372,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 75
    },
    {
      "Scene_lab": 372,
      "Story": "Ryan turns to her but continues to set the second coffee down.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 373,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 63
    },
    {
      "Scene_lab": 373,
      "Story": "The sudden movement jolts the cup and coffee splashes onto Adam\’s shirt.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 374,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 73
    },
    {
      "Scene_lab": 374,
      "Story": "Adam bolts up. “What\’s your problem?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 375,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 38
    },
    {
      "Scene_lab": 375,
      "Story": "Ryan shrugs. “Sorry, man.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 376,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 27
    },
    {
      "Scene_lab": 376,
      "Story": "“You're sorry? Do you know how much this shirt cost?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 377,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 106
    },
    {
      "Scene_lab": 377,
      "Story": "He glares at Ryan, and then at the spreading stain. “You'd better get the hell out of here before I call your manager.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 378,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 119
    },
    {
      "Scene_lab": 378,
      "Story": "You forgot how much of a jerk Adam can be when something messes up his perfect world.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 379,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 86
    },
    {
      "Scene_lab": 379,
      "Story": "His eggs are over hard. His clothes are wrinkle-free. He drives down the exact center of the lane.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 380,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 99
    },
    {
      "Scene_lab": 380,
      "Story": "Runny yolk? Wrinkles? Forget about it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 381,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 39
    },
    {
      "Scene_lab": 381,
      "Story": "You\’ve spent so much time idolizing the good parts of your former relationship – the surprise flowers, Friday date nights, spontaneous trips to the city – that you blocked out his flaws.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 382,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 186
    },
    {
      "Scene_lab": 382,
      "Story": "Adam snatches his coat. “I have to get cleaned up.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 383,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 52
    },
    {
      "Scene_lab": 383,
      "Story": "He turns to you. “Do you need a ride?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 384,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 39
    },
    {
      "Scene_lab": 384,
      "Story": "You nod to your phone. “I\’ll text Lex.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 385,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 40
    },
    {
      "Scene_lab": 385,
      "Story": "Adam sniffs. “Okay. It was good running into you.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 386,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 51
    },
    {
      "Scene_lab": 386,
      "Story": "Throwing one more frown at Ryan, he exits.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 387,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 43
    },
    {
      "Scene_lab": 387,
      "Story": "Ryan dabs at the puddle with a towel.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 388,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 38
    },
    {
      "Scene_lab": 388,
      "Story": "You open your mouth to speak but he disappears into the back room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 389,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 67
    },
    {
      "Scene_lab": 389,
      "Story": "You lied about having a ride.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 390,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 30
    },
    {
      "Scene_lab": 390,
      "Story": "On the way out, you pass the newly-engaged couple.",
      "Choice": "Y",
      "Response_1": "\"Congrats again.\"",
      "Response_2": "You duck your head.",
      "Outcome_1": 391,
      "Outcome_2": 399,
      "Section": 3,
      "Storyline": 1,
      "NumChar": 50
    },
    {
      "Scene_lab": 391,
      "Story": "The girl stands and gives you an abrupt hug.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 392,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 45
    },
    {
      "Scene_lab": 392,
      "Story": "You freeze at the unexpected warmth.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 393,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 37
    },
    {
      "Scene_lab": 393,
      "Story": "When she pulls away, she gestures toward your classmate. “This one was boyfriend number five after an endless string of bad Tinder dates and check-splitters. It gets better.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 394,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 175
    },
    {
      "Scene_lab": 394,
      "Story": "Your throat tightens. “I hope so.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 395,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 35
    },
    {
      "Scene_lab": 395,
      "Story": "She returns to her seat, still radiating happiness.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 396,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 52
    },
    {
      "Scene_lab": 396,
      "Story": "Easy for her to say.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 397,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 21
    },
    {
      "Scene_lab": 397,
      "Story": "It\’s a ten-minute walk to Lex\’s house, but you could use the alone time.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 398,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 73
    },
    {
      "Scene_lab": 398,
      "Story": "You wander out the door and cross the street.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 534,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 45
    },
    {
      "Scene_lab": 399,
      "Story": "Guarding the door, the couple\’s dog looks up at you with sad eyes.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 400,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 67
    },
    {
      "Scene_lab": 400,
      "Story": "You frown. At least the pug has a better shot at love than you do.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 534,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 66
    },
    {
      "Scene_lab": 401,
      "Story": "You open your wallet. “If I bribe you, is there any chance you\’ll spit in one of the coffees?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 402,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 95
    },
    {
      "Scene_lab": 402,
      "Story": "Ryan glances at Tinder Guy, who is currently drooling at a girl in an Avengers shirt a few tables down from him.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 403,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 113
    },
    {
      "Scene_lab": 403,
      "Story": "What a catch. Ryan scoffs. “For that guy over there? I\’d do it for free.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 404,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 74
    },
    {
      "Scene_lab": 404,
      "Story": "There\’s no universe where Ryan could be any cooler.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 405,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 52
    },
    {
      "Scene_lab": 405,
      "Story": "You pass him a $5 bill. He hands you an order number and turns to mix the drinks.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 406,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 82
    },
    {
      "Scene_lab": 406,
      "Story": "When you return to the table, Tinder Guy has his phone beneath the table.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 407,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 74
    },
    {
      "Scene_lab": 407,
      "Story": "You glance at it from above and spot the familiar Tinder interface.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 408,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 68
    },
    {
      "Scene_lab": 408,
      "Story": "No way. He\’s swiping through other girls in the middle of a date with you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 409,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 75
    },
    {
      "Scene_lab": 409,
      "Story": "You sit, clenching your jaw.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 410,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 29
    },
    {
      "Scene_lab": 410,
      "Story": "You stare at the side of his head for a minute before he glances up.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 411,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 69
    },
    {
      "Scene_lab": 411,
      "Story": "He ignores the irritated look on your face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 412,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 44
    },
    {
      "Scene_lab": 412,
      "Story": "That, or he has zero social awareness.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 413,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 39
    },
    {
      "Scene_lab": 413,
      "Story": "He sighs. “Hey, my friend just had an emergency and needs to meet me here in a minute. Hate to do this, but is there any way we could end early?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 414,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 146
    },
    {
      "Scene_lab": 414,
      "Story": "His eyes shift to the door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 415,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 28
    },
    {
      "Scene_lab": 415,
      "Story": "You follow his eyes to a girl who stands outside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 416,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 50
    },
    {
      "Scene_lab": 416,
      "Story": "She waves through the window and tilts her head, confirming his identity.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 417,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 74
    },
    {
      "Scene_lab": 417,
      "Story": "She clearly doesn\’t know him well.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 418,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 35
    },
    {
      "Scene_lab": 418,
      "Story": "He can\’t be serious. He expects you to buy him a free coffee and then get out of this nightmare by exchanging girls?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 419,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 117
    },
    {
      "Scene_lab": 419,
      "Story": "Ryan appears with the two coffees.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 420,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 35
    },
    {
      "Scene_lab": 420,
      "Story": "You stand and take one from his tray.",
      "Choice": "Y",
      "Response_1": "You pour it on his shirt.",
      "Response_2": "You spit in it.",
      "Outcome_1": 422,
      "Outcome_2": 421,
      "Section": 3,
      "Storyline": 2,
      "NumChar": 37
    },
    {
      "Scene_lab": 421,
      "Story": "Fuming, you set the mug down with some force, which causes a few drops to splash onto his clothes.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 422,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 98
    },
    {
      "Scene_lab": 422,
      "Story": "Tinder Guy is lucky the coffees here are never more than lukewarm.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 423,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 67
    },
    {
      "Scene_lab": 423,
      "Story": "Tinder Guy jumps to his feet, screeching. “What was that for?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 424,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 63
    },
    {
      "Scene_lab": 424,
      "Story": "Your eyes widen. “What wasn\’t it for? My dress, your mom\’s penguin, and the girl outside the door.\"",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 425,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 100
    },
    {
      "Scene_lab": 425,
      "Story": "His face confirms your read of the situation.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 426,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 46
    },
    {
      "Scene_lab": 426,
      "Story": "In your peripheral vision, Ryan stifles a smile.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 427,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 49
    },
    {
      "Scene_lab": 427,
      "Story": "Tinder Guy shakes his head, picking up the penguin and tucking it under his arm. “I\’m out of here.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 428,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 99
    },
    {
      "Scene_lab": 428,
      "Story": "He glances at Ryan. “See you tonight, man.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 429,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 44
    },
    {
      "Scene_lab": 429,
      "Story": "He stalks off, the bell jingling as he makes his grand exit.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 430,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 61
    },
    {
      "Scene_lab": 430,
      "Story": "Ryan whistles. “I\’m surprised that doesn\’t happen more often.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 431,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 63
    },
    {
      "Scene_lab": 431,
      "Story": "He chuckles. “I wouldn\’t recommend drinking the one in my hand. I\’ll make you a fresh cup, on the house.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 432,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 106
    },
    {
      "Scene_lab": 432,
      "Story": "He starts toward the bar, then glances over his shoulder. “I spit in this one.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 433,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 80
    },
    {
      "Scene_lab": 433,
      "Story": "You almost wish you had let Tinder Guy drink it",
      "Choice": "Y",
      "Response_1": "You head to the bathroom.",
      "Response_2": "You watch Ryan work.",
      "Outcome_1": 434,
      "Outcome_2": 442,
      "Section": 3,
      "Storyline": 2,
      "NumChar": 47
    },
    {
      "Scene_lab": 434,
      "Story": "You should clean up your dress, which now has a bit of coffee splatter blended with the Dr. Pepper.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 435,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 100
    },
    {
      "Scene_lab": 435,
      "Story": "You lock the bathroom door and splash water on your face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 436,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 58
    },
    {
      "Scene_lab": 436,
      "Story": "You pump soap into your hand and rub the fabric.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 437,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 49
    },
    {
      "Scene_lab": 437,
      "Story": "The stains don\’t budge.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 438,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 24
    },
    {
      "Scene_lab": 438,
      "Story": "After ten minutes of failure, you give up.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 439,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 43
    },
    {
      "Scene_lab": 439,
      "Story": "The dress is ruined.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 440,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 21
    },
    {
      "Scene_lab": 440,
      "Story": "When you return to your table, there\’s a fresh cup of coffee beside your jacket.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 441,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 81
    },
    {
      "Scene_lab": 441,
      "Story": "You look around the room for Ryan, but oddly enough, no one is behind the bar.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 445,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 78
    },
    {
      "Scene_lab": 442,
      "Story": "You don\’t know much about making coffee, but you\’re pretty sure he has perfect technique.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 443,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 90
    },
    {
      "Scene_lab": 443,
      "Story": "He swings by with a full cup and sets it down in front of you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 444,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 63
    },
    {
      "Scene_lab": 444,
      "Story": "You open your mouth to say something cute or stupid, but an important-looking lady calls him to the back room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 445,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 110
    },
    {
      "Scene_lab": 445,
      "Story": "You hear faint arguing from the back room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 446,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 43
    },
    {
      "Scene_lab": 446,
      "Story": "Ryan emerges, pulling his apron off his head and placing it on a barstool.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 447,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 75
    },
    {
      "Scene_lab": 447,
      "Story": "Face red, he scoops up a set of keys from behind the counter and storms out of the café.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 448,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 89
    },
    {
      "Scene_lab": 448,
      "Story": "You wonder what happened.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 449,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 26
    },
    {
      "Scene_lab": 449,
      "Story": "His boss takes his position at the counter, her face a matching shade of red.",
      "Choice": "Y",
      "Response_1": "You walk over to investigate.",
      "Response_2": "You mind your own business.",
      "Outcome_1": 453,
      "Outcome_2": 450,
      "Section": 3,
      "Storyline": 2,
      "NumChar": 77
    },
    {
      "Scene_lab": 450,
      "Story": "After a few minutes, you realize that you\’re pretty hungry.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 451,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 60
    },
    {
      "Scene_lab": 451,
      "Story": "You approach the counter.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 452,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 26
    },
    {
      "Scene_lab": 452,
      "Story": "Staring at the still-flushed face of the lady working there, you can\’t help but ask.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 453,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 85
    },
    {
      "Scene_lab": 453,
      "Story": "“Hi. Do you know where Ryan went? I was hoping to order a scone.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 454,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 66
    },
    {
      "Scene_lab": 454,
      "Story": "She shakes her head. “Ryan no longer works here, but I can grab you one.” She turns to the bakery display.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 455,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 107
    },
    {
      "Scene_lab": 455,
      "Story": "You furrow your brow. “That\’s okay, thanks. I\’m not hungry anymore.”",
      "Choice": "Y",
      "Response_1": "You run after Ryan.",
      "Response_2": "You try to forget the incident.",
      "Outcome_1": 456,
      "Outcome_2": 457,
      "Section": 3,
      "Storyline": 2,
      "NumChar": 68
    },
    {
      "Scene_lab": 456,
      "Story": "He got a head start, but there\’s a chance he\’s still around.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 460,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 60
    },
    {
      "Scene_lab": 457,
      "Story": "Hopefully you won\’t run into Ryan.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 458,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 35
    },
    {
      "Scene_lab": 458,
      "Story": "The situation seems just a little too awkward.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 459,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 47
    },
    {
      "Scene_lab": 459,
      "Story": "Sure enough, Ryan is still outside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 460,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 37
    },
    {
      "Scene_lab": 460,
      "Story": "You don\’t really know him, but you want to make sure he\’s okay.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 461,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 64
    },
    {
      "Scene_lab": 461,
      "Story": "He stands by a parked car.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 462,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 27
    },
    {
      "Scene_lab": 462,
      "Story": "“Hey!” You catch up to him. “Everything okay?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 463,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 47
    },
    {
      "Scene_lab": 463,
      "Story": "Ryan stares at the ground. “I just got fired, so no.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 464,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 54
    },
    {
      "Scene_lab": 464,
      "Story": "You gape. “I\’m so sorry.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 465,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 26
    },
    {
      "Scene_lab": 465,
      "Story": "He kicks a pebble lightly. “It happens. Served one too many free coffees in my first week. Had a strict supervisor on this shift. I should\’ve been more discreet.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 466,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 163
    },
    {
      "Scene_lab": 466,
      "Story": "He sits in the driver\’s seat. “Now, if you\’ll excuse me, I have to go.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 467,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 72
    },
    {
      "Scene_lab": 467,
      "Story": "You feel terrible. He got fired because of your coffee. You messed up pretty bad.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 468,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 82
    },
    {
      "Scene_lab": 468,
      "Story": "Seeing his car head off, you know there\’s only one place you can go, and you have the walk memorized.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 534,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 102
    },
    {
      "Scene_lab": 469,
      "Story": "Your new nails are a hassle, but you manage to slowly unzip your purse and peer inside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 470,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 88
    },
    {
      "Scene_lab": 470,
      "Story": "Yep. Your wallet is buried at the bottom.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 471,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 42
    },
    {
      "Scene_lab": 471,
      "Story": "You glance over at Lex, who ran into one of her sorority sisters and is happily chatting away.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 472,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 95
    },
    {
      "Scene_lab": 472,
      "Story": "This is awkward.",
      "Choice": "Y",
      "Response_1": "Maybe Ryan can help.",
      "Response_2": "You interrupt Lex's conversation.",
      "Outcome_1": 477,
      "Outcome_2": 473,
      "Section": 3,
      "Storyline": 3,
      "NumChar": 16
    },
    {
      "Scene_lab": 473,
      "Story": "“Hey, Lex. Do you think you can reach my wallet? The nails…”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 474,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 61
    },
    {
      "Scene_lab": 474,
      "Story": "Lex smirks. “I could help, or I could let you practice for next time.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 475,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 71
    },
    {
      "Scene_lab": 475,
      "Story": "She pauses. “I vote practice.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 476,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 31
    },
    {
      "Scene_lab": 476,
      "Story": "You squirm, turning back to the counter. “Tough love. Thanks.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 477,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 63
    },
    {
      "Scene_lab": 477,
      "Story": "You lift your eyes to meet Ryan\’s. “Small issue. I swear this has never happened before, but I just got my nails done and I\’m a little scared they\’ll break if I dig through my purse. Would you mind?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 478,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 200
    },
    {
      "Scene_lab": 478,
      "Story": "You pass him your bag.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 479,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 23
    },
    {
      "Scene_lab": 479,
      "Story": "He raises an eyebrow, sticking his hand in the purse and detangling your wallet from your lanyard.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 480,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 99
    },
    {
      "Scene_lab": 480,
      "Story": "Pausing to shoot you another look, he retrieves your credit card and swipes it on the machine, never breaking eye contact.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 481,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 122
    },
    {
      "Scene_lab": 481,
      "Story": "Returning the card to the wallet and the wallet to the purse, he passes it back.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 482,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 81
    },
    {
      "Scene_lab": 482,
      "Story": "Still maintaining your gaze, he retrieves the receipt as it prints.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 483,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 68
    },
    {
      "Scene_lab": 483,
      "Story": "You blink, rubbing your cheek with the back of your hand.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 484,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 58
    },
    {
      "Scene_lab": 484,
      "Story": "Is there still chalk on your face? Why is he staring?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 485,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 54
    },
    {
      "Scene_lab": 485,
      "Story": "Ryan finally averts his eyes, chuckling. “Have to say that\’s the first time I\’ve been handed an entire purse as payment.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 486,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 122
    },
    {
      "Scene_lab": 486,
      "Story": "He holds out the receipt. “Receipt?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 487,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 37
    },
    {
      "Scene_lab": 487,
      "Story": "You go to grab it but you both come at the exact wrong angle and one of your new nails scratches his hand.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 488,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 107
    },
    {
      "Scene_lab": 488,
      "Story": "A small pool of blood forms and he yanks his hand back.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 489,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 56
    },
    {
      "Scene_lab": 489,
      "Story": "Disaster. You\’re beyond mortified.",
      "Choice": "Y",
      "Response_1": "You start crying.",
      "Response_2": "You try to tip him.",
      "Outcome_1": 490,
      "Outcome_2": 495,
      "Section": 3,
      "Storyline": 3,
      "NumChar": 34
    },
    {
      "Scene_lab": 490,
      "Story": "Are you crying because of today\’s significance, your ruined dress, your close encounter with your ex, or because you scratched a really cute bartender and you\’re going to be forever single?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 491,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 190
    },
    {
      "Scene_lab": 491,
      "Story": "Probably all of the above.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 492,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 27
    },
    {
      "Scene_lab": 492,
      "Story": "Ryan\’s face crinkles and he grabs two tissues.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 493,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 47
    },
    {
      "Scene_lab": 493,
      "Story": "He extends one to you and uses the other to dab at the surface wound.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 494,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 70
    },
    {
      "Scene_lab": 494,
      "Story": "You manage to choke out the words “I\’m so sorry” as you dab at your makeup.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 498,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 76
    },
    {
      "Scene_lab": 495,
      "Story": "Maybe he can buy a first aid kit or Uber to the emergency room and forget about the messy girl who injured him at work.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 496,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 120
    },
    {
      "Scene_lab": 496,
      "Story": "You retrieve your wallet, which now rests at the top of your purse.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 497,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 68
    },
    {
      "Scene_lab": 497,
      "Story": "You manage to pull out a $20 bill, holding it out to him. “I\’m so sorry.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 498,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 75
    },
    {
      "Scene_lab": 498,
      "Story": "Ryan shakes his head. “Don\’t worry about it. I\’ll have your drinks ready in a sec.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 499,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 84
    },
    {
      "Scene_lab": 499,
      "Story": "He hands you a table number and you retreat to the table Lex selected.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 500,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 71
    },
    {
      "Scene_lab": 500,
      "Story": "Lex, done with her conversation, does a double-take when she sees you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 501,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 71
    },
    {
      "Scene_lab": 501,
      "Story": "She cranes her neck to stare at the barista. “I left you alone for two minutes. What happened?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 502,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 96
    },
    {
      "Scene_lab": 502,
      "Story": "You whimper, resting your chin on your hand and wishing you could disappear. “I just let that guy search through my purse and then scratched him.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 503,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 147
    },
    {
      "Scene_lab": 503,
      "Story": "Lex winces. “That bad, huh?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 504,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 29
    },
    {
      "Scene_lab": 504,
      "Story": "Her eyes linger on Ryan. “He\’s really cute.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 505,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 45
    },
    {
      "Scene_lab": 505,
      "Story": "You glower. “I\’m aware.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 506,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 25
    },
    {
      "Scene_lab": 506,
      "Story": "The table starts buzzing as a call comes through.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 507,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 50
    },
    {
      "Scene_lab": 507,
      "Story": "Lex picks up her phone and answers. “Hello?” A pause. “One moment.” She holds the phone to her chest.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 508,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 102
    },
    {
      "Scene_lab": 508,
      "Story": "“It\’s one of the girls on my Marketing project team. I hate to do this, but I have to run back to my house and get our PowerPoint submitted in the next thirty minutes or else we get a 10% grade reduction.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 509,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 206
    },
    {
      "Scene_lab": 509,
      "Story": "She glances at her watch. “You should drop by in an hour. Does that sound okay?”",
      "Choice": "Y",
      "Response_1": "You nod.",
      "Response_2": "You grimace.",
      "Outcome_1": 510,
      "Outcome_2": 511,
      "Section": 3,
      "Storyline": 3,
      "NumChar": 80
    },
    {
      "Scene_lab": 510,
      "Story": "“Yeah, of course. You\’ve already dedicated so much of your day to making me feel better.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 514,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 89
    },
    {
      "Scene_lab": 511,
      "Story": "“Does that sound okay? I\’m literally melting into a puddle of sadness on a day that\’s supposed to mark the end of my existence as a sadness puddle.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 512,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 149
    },
    {
      "Scene_lab": 512,
      "Story": "Lex blinks. “You\’re right. It\’s only 10%.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 513,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 43
    },
    {
      "Scene_lab": 513,
      "Story": "Great. Now you feel like a massive jerk. “Go. It\’s not fair to your team for me to hog you.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 514,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 92
    },
    {
      "Scene_lab": 514,
      "Story": "Lex squeezes your hand and throws you one more concerned look before running out of the café.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 515,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 94
    },
    {
      "Scene_lab": 515,
      "Story": "As she disappears around the corner, Ryan approaches with two drinks. “Two daily specials, on me.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 516,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 99
    },
    {
      "Scene_lab": 516,
      "Story": "He sets them down on the table. One has a smiley face in the foam.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 517,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 67
    },
    {
      "Scene_lab": 517,
      "Story": "You smile at it, touched. “That\’s so nice of you. Thank you. And again, I am just so sorry. I\’m never getting another manicure for the rest of my life.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 518,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 153
    },
    {
      "Scene_lab": 518,
      "Story": "Ryan wipes his hands on his apron. “Again, I really don\’t mind. I\’ve been scratched, kicked, and shoved around much worse during my years of soccer.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 519,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 150
    },
    {
      "Scene_lab": 519,
      "Story": "An athlete. Of course. You take a shaky breath. “I\’ve had a pretty bad day. And week. And month.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 520,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 98
    },
    {
      "Scene_lab": 520,
      "Story": "You lift the smiley face coffee to your lips and sip.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 521,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 54
    },
    {
      "Scene_lab": 521,
      "Story": "A warm rush of cinnamon slides down your throat.",
      "Choice": "Y",
      "Response_1": "“This is exactly what I needed.”",
      "Response_2": "\"You said you play soccer?\"",
      "Outcome_1": 522,
      "Outcome_2": 523,
      "Section": 3,
      "Storyline": 3,
      "NumChar": 48
    },
    {
      "Scene_lab": 522,
      "Story": "Ryan retrieves a rag from his apron and brushes a few crumbs off the table. “Good.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 527,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 83
    },
    {
      "Scene_lab": 523,
      "Story": "“I do.” You take another sip. “Me too. I mean, I played through high school. Haven\’t had time since starting college.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 524,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 119
    },
    {
      "Scene_lab": 524,
      "Story": "Ryan retrieves a rag from his apron and brushes a few crumbs off the table. “That\’s too bad. You should try to make it to a game, sometime. We\’re only D3, but we still kick butt.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 525,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 180
    },
    {
      "Scene_lab": 525,
      "Story": "You tilt your head. Did the hot barista just invite you to a soccer game?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 526,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 74
    },
    {
      "Scene_lab": 526,
      "Story": "“Yeah, for sure.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 527,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 18
    },
    {
      "Scene_lab": 527,
      "Story": "The door dings, indicating that a new customer has entered.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 528,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 60
    },
    {
      "Scene_lab": 528,
      "Story": "Ryan glances up. “Let me know if you need anything else.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 529,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 58
    },
    {
      "Scene_lab": 529,
      "Story": "He returns to the counter and waves them forward.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 530,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 50
    },
    {
      "Scene_lab": 530,
      "Story": "You stare out the window for the next hour, losing yourself in your thoughts until an alarm goes off and reminds you to head to Lex\’s place.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 531,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 141
    },
    {
      "Scene_lab": 531,
      "Story": "On the way out, you pass Ryan, who\’s busy managing a large group that just entered.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 532,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 84
    },
    {
      "Scene_lab": 532,
      "Story": "Maybe the café isn\’t so bad without Adam there.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 533,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 48
    },
    {
      "Scene_lab": 533,
      "Story": "You start down Washington Avenue.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 534,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 33
    },
    {
      "Scene_lab": 534,
      "Story": "You disrupt a 30-person Starbucks line that snakes out the shop door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 535,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 70
    },
    {
      "Scene_lab": 535,
      "Story": "As you pass mannequins in flowy skirts inside a store window, you almost step on a squirrel trying to bury an acorn in a sidewalk crack.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 536,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 136
    },
    {
      "Scene_lab": 536,
      "Story": "Lex lives in a three-story sorority house a few blocks from your apartment.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 537,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 76
    },
    {
      "Scene_lab": 537,
      "Story": "Towering Greek letters loom over the entrance.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 538,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 47
    },
    {
      "Scene_lab": 538,
      "Story": "You duck under strands of ivy as you knock on the door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 539,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 56
    },
    {
      "Scene_lab": 539,
      "Story": "To your relief, Lex answers.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 540,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 29
    },
    {
      "Scene_lab": 540,
      "Story": "Her eyes flit across your face and she welcomes you in, reading the situation wordlessly.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 541,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 90
    },
    {
      "Scene_lab": 541,
      "Story": "You enter her room, which is filled with plants and succulents of various sizes.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 542,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 81
    },
    {
      "Scene_lab": 542,
      "Story": "A bouquet of wildflowers she collected from her last hike fills a clear vase on her desk.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 543,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 90
    },
    {
      "Scene_lab": 543,
      "Story": "She pulls out her chair and pats the back, bending down to retrieve her cosmetics collection from a bottom drawer.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 544,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 115
    },
    {
      "Scene_lab": 544,
      "Story": "You sit, pulling your hair into a ponytail.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 545,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 44
    },
    {
      "Scene_lab": 545,
      "Story": "Lex\’s solution to heartache? Five layers of makeup, a tight dress and a frat party.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 546,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 84
    },
    {
      "Scene_lab": 546,
      "Story": "In the next hour, Lex applies thirty products you\’ve never heard of while issuing directions in a pattern of tilting your head, relaxing your forehead, and closing your eyes.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 547,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 175
    },
    {
      "Scene_lab": 547,
      "Story": "Finally, Lex makes a fish face and you mimic her.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 548,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 50
    },
    {
      "Scene_lab": 548,
      "Story": "She brushes a final swipe of makeup onto your cheeks and grins, stepping back.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 549,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 79
    },
    {
      "Scene_lab": 549,
      "Story": "You smile in the mirror. “I have cheekbones.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 550,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 46
    },
    {
      "Scene_lab": 550,
      "Story": "She laughs, hugging you from behind. “I know. I\’m a miracle-worker.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 551,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 69
    },
    {
      "Scene_lab": 551,
      "Story": "She touches up her own lip gloss. “You\’re going to be okay. Okay? I\’m taking you to a house full of fraternity snobs.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": [
        552,
        555,
        558
      ],
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 118
    },
    {
      "Scene_lab": 552,
      "Story": "You\’ll forget all about toothpick arms and his cousin-lover.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 553,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 1,
      "NumChar": 62
    },
    {
      "Scene_lab": 553,
      "Story": "Lex grabs a clutch and starts out the door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 554,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 1,
      "NumChar": 43
    },
    {
      "Scene_lab": 554,
      "Story": "You roll your eyes, following. “It was an honest mistake.”.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 561,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 1,
      "NumChar": 60
    },
    {
      "Scene_lab": 555,
      "Story": "You\’ll forget all about terrible Tinder dates and cute guys getting fired.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 556,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 2,
      "NumChar": 76
    },
    {
      "Scene_lab": 556,
      "Story": "Lex tosses a clean dress at you, grabs a clutch and starts out the door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 557,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 2,
      "NumChar": 73
    },
    {
      "Scene_lab": 557,
      "Story": "You whimper, dabbing at your eyes with a tissue. “Too soon.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 561,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 2,
      "NumChar": 60
    },
    {
      "Scene_lab": 558,
      "Story": "You\’ll forget all about stupid exes and injured baristas.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 559,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 3,
      "NumChar": 59
    },
    {
      "Scene_lab": 559,
      "Story": "Lex tosses a clean dress at you, grabs a clutch and starts out the door. “Meet you in the car.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 560,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 3,
      "NumChar": 96
    },
    {
      "Scene_lab": 560,
      "Story": "You roll your eyes, getting dressed. What would you do without her?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 561,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 3,
      "NumChar": 67
    },
    {
      "Scene_lab": 561,
      "Story": "As soon as you enter the party, you note the classic sticky floor, active game of beer pong and clusters of sweaty dancers.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 562,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 124
    },
    {
      "Scene_lab": 562,
      "Story": "Lex screams, throwing her arm around a group of her sorority sisters.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 563,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 70
    },
    {
      "Scene_lab": 563,
      "Story": "One girl breaks away from the cluster and skips over to you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 564,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 61
    },
    {
      "Scene_lab": 564,
      "Story": "You\’ve seen her at one or two parties.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 565,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 39
    },
    {
      "Scene_lab": 565,
      "Story": "She points at you, grinning. “You\’re Adam\’s girlfriend.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 566,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 57
    },
    {
      "Scene_lab": 566,
      "Story": "Your throat catches. “Ex.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 567,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 27
    },
    {
      "Scene_lab": 567,
      "Story": "“Oh.” Her eyes twinkle. “I know a secret.” She leans closer.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 568,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 61
    },
    {
      "Scene_lab": 568,
      "Story": "The smell of beer shoots up your nose. “Do you want to know?”",
      "Choice": "Y",
      "Response_1": "Tell me.",
      "Response_2": "Don\’t tell me.",
      "Outcome_1": 569,
      "Outcome_2": 569,
      "Section": 5,
      "Storyline": 0,
      "NumChar": 61
    },
    {
      "Scene_lab": 569,
      "Story": "Her gaze darts across the room. “Lex never thought you were good together.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 570,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 76
    },
    {
      "Scene_lab": 570,
      "Story": "She giggles. “I shouldn\’t have said that.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 571,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 43
    },
    {
      "Scene_lab": 571,
      "Story": "She waves at a friend and disappears into the crowd.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 572,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 53
    },
    {
      "Scene_lab": 572,
      "Story": "You search for Lex, who is already engrossed in a game of Charades in the next room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 573,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 85
    },
    {
      "Scene_lab": 573,
      "Story": "Crossing your arms, you melt into the background and peer over the shoulder of an onlooker.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 574,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 92
    },
    {
      "Scene_lab": 574,
      "Story": "A frat guy holds up a dry erase marker. “Alright, I\’m looking for a volunteer brave enough to take on Lex, the Master of Charades herself.”",
      "Choice": "Y",
      "Response_1": "You raise your hand.",
      "Response_2": "You start to turn away.",
      "Outcome_1": 575,
      "Outcome_2": 575,
      "Section": 5,
      "Storyline": 0,
      "NumChar": 140
    },
    {
      "Scene_lab": 575,
      "Story": "He points at you, gesturing with the marker. “Who better than Lex\’s best friend? Come on up.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 576,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 94
    },
    {
      "Scene_lab": 576,
      "Story": "The crowd parts and you step up to the deck of cards.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 577,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 54
    },
    {
      "Scene_lab": 577,
      "Story": "Selecting one, you scoff.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 578,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 26
    },
    {
      "Scene_lab": 578,
      "Story": "Your prompt is a snake. The irony.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 579,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 35
    },
    {
      "Scene_lab": 579,
      "Story": "You draw a messy squiggle with a forked tongue on the wall they\’ve sacrificed for the game.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 580,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 92
    },
    {
      "Scene_lab": 580,
      "Story": "Lex snaps her fingers. “Snake.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 581,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 32
    },
    {
      "Scene_lab": 581,
      "Story": "You confirm and the crowd cheers with excessive enthusiasm.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 582,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 60
    },
    {
      "Scene_lab": 582,
      "Story": "“Yes, she\’s wonderful.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 583,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 24
    },
    {
      "Scene_lab": 583,
      "Story": "You tug at Lex\’s arm, pulling her back to the lobby.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 584,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 53
    },
    {
      "Scene_lab": 584,
      "Story": "Lex pokes your nose. “What\’s up?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 585,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 34
    },
    {
      "Scene_lab": 585,
      "Story": "You bite your lip, trying to piece together a coherent string of words. “Did you approve of my relationship with Adam?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 586,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 120
    },
    {
      "Scene_lab": 586,
      "Story": "Lex coughs, teasing her hair. “What kind of question is that?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 587,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 63
    },
    {
      "Scene_lab": 587,
      "Story": "Your cheeks are hot. “Did you?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 588,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 32
    },
    {
      "Scene_lab": 588,
      "Story": "She clears her throat. “No.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 589,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 29
    },
    {
      "Scene_lab": 589,
      "Story": "A pause. “I thought you deserved better.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 590,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 42
    },
    {
      "Scene_lab": 590,
      "Story": "Another pause. “You know who I do like for you?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 591,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 49
    },
    {
      "Scene_lab": 591,
      "Story": "She scans the room and points at the balcony, winking at you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 592,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 62
    },
    {
      "Scene_lab": 592,
      "Story": "You smile, giving her a hug before you turn to the balcony and spot a familiar head of messy curls.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 593,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 100
    },
    {
      "Scene_lab": 593,
      "Story": "Ryan from Firefly Café. He sports a polo shirt with a popped collar, leaning against the railing with a drink in his hand.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": [
        594,
        604,
        623
      ],
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 0,
      "NumChar": 123
    },
    {
      "Scene_lab": 594,
      "Story": "He gazes at the sky, deep in thought.",
      "Choice": "Y",
      "Response_1": "You approach Ryan",
      "Response_2": "You shrink away",
      "Outcome_1": 599,
      "Outcome_2": 595,
      "Section": 5,
      "Storyline": 1,
      "NumChar": 37
    },
    {
      "Scene_lab": 595,
      "Story": "Lex brushes past you and opens the door. “Milady.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 596,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 1,
      "NumChar": 51
    },
    {
      "Scene_lab": 596,
      "Story": "You step aside. “Nope.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 597,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 1,
      "NumChar": 24
    },
    {
      "Scene_lab": 597,
      "Story": "Lex slams the door and re-opens it, flagging Ryan\’s attention.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 598,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 1,
      "NumChar": 63
    },
    {
      "Scene_lab": 598,
      "Story": "You stick your tongue out at her and return to the doorway.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 599,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 1,
      "NumChar": 60
    },
    {
      "Scene_lab": 599,
      "Story": "You walk a few steps, pausing. “I see a drink in your hand. Should I be worried about your spill record?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 600,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 1,
      "NumChar": 106
    },
    {
      "Scene_lab": 600,
      "Story": "Ryan glances up. A slow grin spreads across his face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 601,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 1,
      "NumChar": 54
    },
    {
      "Scene_lab": 601,
      "Story": "“Cut me some slack. I just started working at Firefly a couple of weeks ago. Long shifts, excessive homework, guys who make pretty girls cry in coffee shops. You understand the stress factors involved.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 602,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 1,
      "NumChar": 203
    },
    {
      "Scene_lab": 602,
      "Story": "You blush, tucking a lock of hair behind your ear. “So, it was intentional.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 603,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 1,
      "NumChar": 77
    },
    {
      "Scene_lab": 603,
      "Story": "Ryan takes a sip of his drink. “Can neither confirm nor deny.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 637,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 1,
      "NumChar": 62
    },
    {
      "Scene_lab": 604,
      "Story": "Wait...is that the Tinder Guy in the door's reflection?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 605,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 56
    },
    {
      "Scene_lab": 605,
      "Story": "Why is he here?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 606,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 16
    },
    {
      "Scene_lab": 606,
      "Story": "The memory of the horrid time you spent with him earlier comes back to you. Ugh!",
      "Choice": "Y",
      "Response_1": "You should confront him.",
      "Response_2": "That's your cue to hide.",
      "Outcome_1": 614,
      "Outcome_2": 607,
      "Section": 5,
      "Storyline": 2,
      "NumChar": 80
    },
    {
      "Scene_lab": 607,
      "Story": "You immerse yourself in Lex\’s shroud of sorority sisters.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 608,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 58
    },
    {
      "Scene_lab": 608,
      "Story": "After the fiftieth selfie, you need to sit down.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 609,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 49
    },
    {
      "Scene_lab": 609,
      "Story": "You feel the start of a headache pounding at your skull and plop down on the couch.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 610,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 84
    },
    {
      "Scene_lab": 610,
      "Story": "Red solo cups crunch beneath your feet.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 611,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 40
    },
    {
      "Scene_lab": 611,
      "Story": "The couch sags beneath your weight, squeaking.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 612,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 47
    },
    {
      "Scene_lab": 612,
      "Story": "You try to melt into the music, but just as you feel your stress level going down, Tinder Guy approaches.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 613,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 106
    },
    {
      "Scene_lab": 613,
      "Story": "He\’s clearly out of it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 614,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 24
    },
    {
      "Scene_lab": 614,
      "Story": "You cross your arms. “Hey.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 615,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 28
    },
    {
      "Scene_lab": 615,
      "Story": "He narrows his eyes at you. “Are you the person who poured coffee on me earlier?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 616,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 82
    },
    {
      "Scene_lab": 616,
      "Story": "You raise an eyebrow. “Are you the person who spilled soda on me earlier?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 617,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 76
    },
    {
      "Scene_lab": 617,
      "Story": "Ryan appears suddenly, placing a hand on Tinder Guy\’s shoulder. “The other team\’s winning. You should get back to your game.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 618,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 125
    },
    {
      "Scene_lab": 618,
      "Story": "Tinder Guy blinks, swearing under his breath.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 619,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 46
    },
    {
      "Scene_lab": 619,
      "Story": "Reluctantly, he picks up a ping pong ball and returns to the game.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 620,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 67
    },
    {
      "Scene_lab": 620,
      "Story": "Ryan sits next to you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 621,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 23
    },
    {
      "Scene_lab": 621,
      "Story": "You scramble for a way to break the ice.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 622,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 41
    },
    {
      "Scene_lab": 622,
      "Story": "He keeps his eyes trained on Tinder Guy, taking a sip from his cup.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 637,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 2,
      "NumChar": 68
    },
    {
      "Scene_lab": 623,
      "Story": "He gazes at the sky, deep in thought.",
      "Choice": "Y",
      "Response_1": "No way you\’re going over there.",
      "Response_2": "You walk toward him.",
      "Outcome_1": 627,
      "Outcome_2": 624,
      "Section": 5,
      "Storyline": 3,
      "NumChar": 37
    },
    {
      "Scene_lab": 624,
      "Story": "Someone cheers loudly from the pong table, causing you to jump.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 625,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 3,
      "NumChar": 64
    },
    {
      "Scene_lab": 625,
      "Story": "You squeak, then cover your mouth.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 626,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 3,
      "NumChar": 35
    },
    {
      "Scene_lab": 626,
      "Story": "Great. You\’re so nervous that you\’re squeaking.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 627,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 3,
      "NumChar": 47
    },
    {
      "Scene_lab": 627,
      "Story": "You\’ve embarrassed yourself enough for one day.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 628,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 3,
      "NumChar": 48
    },
    {
      "Scene_lab": 628,
      "Story": "Instead of engaging with Ryan, you find a seat in the corner of the room and sit.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 629,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 3,
      "NumChar": 82
    },
    {
      "Scene_lab": 629,
      "Story": "Red solo cups are scattered across the entire floor and on random pieces of furniture.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 630,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 3,
      "NumChar": 87
    },
    {
      "Scene_lab": 630,
      "Story": "The table lamp next to you glows red, a cup resting on the bulb and the lampshade upside-down below it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 631,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 3,
      "NumChar": 104
    },
    {
      "Scene_lab": 631,
      "Story": "For a while, you just feel the vibrations of the speakers in your chest, allowing techno music to fill your mind.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 632,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 3,
      "NumChar": 114
    },
    {
      "Scene_lab": 632,
      "Story": "Then, Ryan sits down in front of you. “Fancy seeing you here.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 633,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 3,
      "NumChar": 63
    },
    {
      "Scene_lab": 633,
      "Story": "His head of messy curls looks as handsome as it did when paired with an apron at the café.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 634,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 3,
      "NumChar": 91
    },
    {
      "Scene_lab": 634,
      "Story": "You play with the seam of your dress. “Same to you. Is this your house?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 635,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 3,
      "NumChar": 73
    },
    {
      "Scene_lab": 635,
      "Story": "He nods. “When I\’m not cleaning up coffee spills at the Firefly, I\’m cleaning up alcohol spills at the house. Living the dream.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 636,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 3,
      "NumChar": 129
    },
    {
      "Scene_lab": 636,
      "Story": "He takes a sip of his drink.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 637,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": 3,
      "NumChar": 28
    },
    {
      "Scene_lab": 637,
      "Story": "You notice the tattoo on his wrist for the first time.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 638,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 0,
      "NumChar": 55
    },
    {
      "Scene_lab": 638,
      "Story": "You recognize the symbol from an article you did on the school\’s archeological museum. “Viking Compass. Solid pick. Guidance through the unknown.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 639,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 0,
      "NumChar": 147
    },
    {
      "Scene_lab": 639,
      "Story": "Ryan raises an eyebrow. “Impressive. Not exactly a dinner table fact. Archeology major?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 640,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 0,
      "NumChar": 89
    },
    {
      "Scene_lab": 640,
      "Story": "“Journalism. It\’s my job to know the random facts.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 641,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 0,
      "NumChar": 52
    },
    {
      "Scene_lab": 641,
      "Story": "From there, it\’s like time pauses to listen to your conversation.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 642,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 0,
      "NumChar": 66
    },
    {
      "Scene_lab": 642,
      "Story": "You learn about Ryan\’s kid sister and her adventures with braces, Ryan\’s dream home in the Arizona desert, his platinum molar from sledding into his elementary school seesaw when he was seven.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 643,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 0,
      "NumChar": 193
    },
    {
      "Scene_lab": 643,
      "Story": "In three hours, he transforms from a hot barista into the guy who\’s afraid of needles but loves symbolism, thinks the weathermen are TV\’s branch of the Illuminati, and dimples at your worst jokes.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 644,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 0,
      "NumChar": 197
    },
    {
      "Scene_lab": 644,
      "Story": "For three hours, you remember what it feels like to have temporary abs from laughter.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": [
        645,
        679,
        706
      ],
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 0,
      "NumChar": 87
    },
    {
      "Scene_lab": 645,
      "Story": "Then, a joke hits so hard that you have to grip the banister for support as you wheeze out a giggle.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 646,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 101
    },
    {
      "Scene_lab": 646,
      "Story": "Ryan\’s large hand rests on top, calloused but warm.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 647,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 52
    },
    {
      "Scene_lab": 647,
      "Story": "It reminds you of Adam.",
      "Choice": "Y",
      "Response_1": "You move your hand.",
      "Response_2": "You freeze.",
      "Outcome_1": 648,
      "Outcome_2": 648,
      "Section": 6,
      "Storyline": 1,
      "NumChar": 23
    },
    {
      "Scene_lab": 648,
      "Story": "Just like that, your safety bubble pops, and the break-up empties your chest again.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 649,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 84
    },
    {
      "Scene_lab": 649,
      "Story": "You glance back inside and see a drunk Lex passed out on the couch. Time to bail.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 650,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 82
    },
    {
      "Scene_lab": 650,
      "Story": "Ryan\’s smile fades. “I didn\’t mean to make you uncomfortable.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 651,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 63
    },
    {
      "Scene_lab": 651,
      "Story": "You adjust your purse strap. “You didn\’t. I just got out of a pretty serious relationship, and I\’m not in a good place to start anything.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 652,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 139
    },
    {
      "Scene_lab": 652,
      "Story": "Ryan clenches his jaw. “And the guy at the coffee shop was…?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 653,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 62
    },
    {
      "Scene_lab": 653,
      "Story": "“Two years of my life down a toilet.” Ryan grimaces. “I understand.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 654,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 69
    },
    {
      "Scene_lab": 654,
      "Story": "How can he understand? You don\’t even understand.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 655,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 50
    },
    {
      "Scene_lab": 655,
      "Story": "Ryan is smart, funny, and gorgeous. Are you really about to let him walk out of your life?",
      "Choice": "Y",
      "Response_1": "You shouldn't burn a bridge.",
      "Response_2": "You should focus on healing.",
      "Outcome_1": 656,
      "Outcome_2": 672,
      "Section": 6,
      "Storyline": 1,
      "NumChar": 90
    },
    {
      "Scene_lab": 656,
      "Story": "You retrieve your purple pen from your purse. “Can I give you my number?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 657,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 74
    },
    {
      "Scene_lab": 657,
      "Story": "You pause, focus flitting back and forth between his eyes. “Maybe you can save it for a possible rain check.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 658,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 110
    },
    {
      "Scene_lab": 658,
      "Story": "Ryan hesitates. “From what I can tell, it sounds like that rain check might not come for a while.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 659,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 99
    },
    {
      "Scene_lab": 659,
      "Story": "He pauses for a long moment, then shoves his hands in his pockets. “I know when to bow out. Good night, Emily.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 660,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 112
    },
    {
      "Scene_lab": 660,
      "Story": "You blink hard, taking a moment to digest his response.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 661,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 56
    },
    {
      "Scene_lab": 661,
      "Story": "You could shout a million arguments over the music.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 662,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 52
    },
    {
      "Scene_lab": 662,
      "Story": "Run straight through the game of beer pong and tell him you just needed your month.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 663,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 84
    },
    {
      "Scene_lab": 663,
      "Story": "That when you wake up tomorrow morning, you\’ll be a new person with a dent-free heart.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 664,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 86
    },
    {
      "Scene_lab": 664,
      "Story": "You won\’t.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 665,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 11
    },
    {
      "Scene_lab": 665,
      "Story": "You can\’t chase after him and throw out those meaningless phrases.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 666,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 67
    },
    {
      "Scene_lab": 666,
      "Story": "Then you\’d be lying to yourself, Lex, your mom and some guy you just met.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 667,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 74
    },
    {
      "Scene_lab": 667,
      "Story": "You sigh, shaking your head.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 668,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 29
    },
    {
      "Scene_lab": 668,
      "Story": "You weren\’t ready.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 669,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 19
    },
    {
      "Scene_lab": 669,
      "Story": "In some other reality, you could\’ve been.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 670,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 42
    },
    {
      "Scene_lab": 670,
      "Story": "Maybe if you\’d actually taken the month to heal instead of dwelling in a bad place.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 671,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 84
    },
    {
      "Scene_lab": 671,
      "Story": "Maybe if you\’d met Ryan two years earlier. Maybe if you hadn\’t seen Adam today.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 677,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 80
    },
    {
      "Scene_lab": 672,
      "Story": "You let him walk away.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 673,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 23
    },
    {
      "Scene_lab": 673,
      "Story": "Your mind is messy.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 674,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 19
    },
    {
      "Scene_lab": 674,
      "Story": "Maybe this is for the best.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 675,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 28
    },
    {
      "Scene_lab": 675,
      "Story": "But maybe he\’d have helped you walk out of your previous relationship faster.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 676,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 77
    },
    {
      "Scene_lab": 676,
      "Story": "Maybe he\’d be a better fit for you than Adam ever was.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 677,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 55
    },
    {
      "Scene_lab": 677,
      "Story": "Mouth full of maybe\’s, you collect Lex and drive her back to your apartment.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 678,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 77
    },
    {
      "Scene_lab": 678,
      "Story": "You help her into the elevator and lay her down on your living room couch.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 742,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 1,
      "NumChar": 74
    },
    {
      "Scene_lab": 679,
      "Story": "Then, Lex lies on your lap and passes out, disrupting the flow of the conversation.",
      "Choice": "Y",
      "Response_1": "You should get her home.",
      "Response_2": "You should stay for a bit.",
      "Outcome_1": 680,
      "Outcome_2": 682,
      "Section": 6,
      "Storyline": 2,
      "NumChar": 83
    },
    {
      "Scene_lab": 680,
      "Story": "You help her sit up. “It\’s that time of night. We need to get back.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 681,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 69
    },
    {
      "Scene_lab": 681,
      "Story": "Ryan\’s smile fades.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 685,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 20
    },
    {
      "Scene_lab": 682,
      "Story": "Right on cue, Lex starts to gag like she\’s going to puke.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 683,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 58
    },
    {
      "Scene_lab": 683,
      "Story": "It only lasts a moment before she falls back to sleep, but you know that you can\’t let her stay here any longer.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 684,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 113
    },
    {
      "Scene_lab": 684,
      "Story": "You need to get her home.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 685,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 25
    },
    {
      "Scene_lab": 685,
      "Story": "“I understand. Need help?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 686,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 27
    },
    {
      "Scene_lab": 686,
      "Story": "You shrug. “That would be great, thank you.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 687,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 45
    },
    {
      "Scene_lab": 687,
      "Story": "After your experiences with Adam, it\’s strange for a guy to be so proactive about helping.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 688,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 91
    },
    {
      "Scene_lab": 688,
      "Story": "At some point in the relationship, he stopped trying to be a gentleman.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 689,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 72
    },
    {
      "Scene_lab": 689,
      "Story": "Maybe there was more wrong there than you had thought.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 690,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 55
    },
    {
      "Scene_lab": 690,
      "Story": "As you start toward the door, Tinder Guy steps in front of you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 691,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 64
    },
    {
      "Scene_lab": 691,
      "Story": "He reeks of alcohol. “You shouldn\’t leave a guy's house without apologizing for ruining his shirt.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 692,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 100
    },
    {
      "Scene_lab": 692,
      "Story": "He wipes at an eye, and you can\’t tell if he\’s ready to cry or to fall asleep. “It was my favorite Tinder date shirt.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 693,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 119
    },
    {
      "Scene_lab": 693,
      "Story": "Ryan steps between you, making himself a physical barrier.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 694,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 59
    },
    {
      "Scene_lab": 694,
      "Story": "“Go. I\’ve got him,\" he says, patting Tinder Guy on the back and steering him away.",
      "Choice": "Y",
      "Response_1": "Tense, you usher Lex into her car.",
      "Response_2": "Suddenly, you felt a sliver of guilt.",
      "Outcome_1": 699,
      "Outcome_2": 695,
      "Section": 6,
      "Storyline": 2,
      "NumChar": 82
    },
    {
      "Scene_lab": 695,
      "Story": "You sigh. You stop Ryan and turn to the Tinder Guy: “I\’m sorry. You were a jerk today, but I shouldn\’t have spilled coffee on you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 696,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 131
    },
    {
      "Scene_lab": 696,
      "Story": "I\’ve had a bad week, but that mostly wasn\’t your fault.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 697,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 57
    },
    {
      "Scene_lab": 697,
      "Story": "Tinder Guy sniffs. After a pause, he says, “Thank you.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 698,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 56
    },
    {
      "Scene_lab": 698,
      "Story": "With that, you exit and shut the door behind you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 699,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 49
    },
    {
      "Scene_lab": 699,
      "Story": "You glance back at the house for a long moment, taking in the pulsing colors spilling out from the windows.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 700,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 108
    },
    {
      "Scene_lab": 700,
      "Story": "Even from the street, you can feel the beat of the music drumming inside your chest.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 701,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 85
    },
    {
      "Scene_lab": 701,
      "Story": "You want to always remember how it felt to be standing outside of the frat house with the sticky floor, nose threatening to run, a million possible memories waiting in the arms of the guy right inside the door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 702,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 211
    },
    {
      "Scene_lab": 702,
      "Story": "As soon as your nose actually starts to run, you duck into the driver's side and start the engine.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 703,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 99
    },
    {
      "Scene_lab": 703,
      "Story": "You didn\’t get a chance to exchange contact info, but his face is burned into your memory.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 704,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 91
    },
    {
      "Scene_lab": 704,
      "Story": "You have a feeling you\’ll run into him again. It\’s a small enough campus.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 705,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 74
    },
    {
      "Scene_lab": 705,
      "Story": "When you get back to your building, you help Lex into the elevator and lay her down on your living room couch.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 742,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 2,
      "NumChar": 111
    },
    {
      "Scene_lab": 706,
      "Story": "A comfortable lull hits.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 707,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 25
    },
    {
      "Scene_lab": 707,
      "Story": "You both try to break the silence at the same time.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 708,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 52
    },
    {
      "Scene_lab": 708,
      "Story": "Ryan nods at you. “Sorry, you go ahead.”",
      "Choice": "Y",
      "Response_1": "“You go. I insist.”",
      "Response_2": "“Wow, what a gentleman.”",
      "Outcome_1": 709,
      "Outcome_2": 711,
      "Section": 6,
      "Storyline": 3,
      "NumChar": 40
    },
    {
      "Scene_lab": 709,
      "Story": "Ryan stands as a slow song plays over the speakers. “Care for a dance?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 710,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 72
    },
    {
      "Scene_lab": 710,
      "Story": "You smile, accepting his invitation.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 714,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 37
    },
    {
      "Scene_lab": 711,
      "Story": "He shrugs. “I try.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 712,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 20
    },
    {
      "Scene_lab": 712,
      "Story": "You stand as a slow song plays over the speakers. “Care for a dance?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 713,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 70
    },
    {
      "Scene_lab": 713,
      "Story": "He smiles, accepting your invitation.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 714,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 37
    },
    {
      "Scene_lab": 714,
      "Story": "Because it\’s a packed room, there\’s not much space to move, so you just hug his shoulders as he rests his hands on your waist.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 715,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 127
    },
    {
      "Scene_lab": 715,
      "Story": "This past month, you\’ve barely moved from bed to attend your classes.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 716,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 70
    },
    {
      "Scene_lab": 716,
      "Story": "After they finish, you would retreat to bed and continue sleeping.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 717,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 67
    },
    {
      "Scene_lab": 717,
      "Story": "You\’d almost forgotten how it felt to talk to someone in a non-academic setting, let alone spend time with a guy.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 718,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 114
    },
    {
      "Scene_lab": 718,
      "Story": "You rest your head on his chest, closing your eyes.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 719,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 52
    },
    {
      "Scene_lab": 719,
      "Story": "Each song fades into the next as the two of you continue to sway like you\’re not standing in the middle of a frat party.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 720,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 121
    },
    {
      "Scene_lab": 720,
      "Story": "You sense it getting late and glance around the room to see a drunk Lex passed out on the couch.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 721,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 97
    },
    {
      "Scene_lab": 721,
      "Story": "You pull away and nod in Lex\’s direction. “I should get my friend out of here.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 722,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 80
    },
    {
      "Scene_lab": 722,
      "Story": "Ryan's smile wavers a little.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 723,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 30
    },
    {
      "Scene_lab": 723,
      "Story": "He turns to look at her. “Sure. Need help?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 724,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 44
    },
    {
      "Scene_lab": 724,
      "Story": "You shrug. “That would be great, thank you.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 725,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 45
    },
    {
      "Scene_lab": 725,
      "Story": "After your experiences with Adam, it\’s strange for a guy to be so proactive about helping.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 726,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 91
    },
    {
      "Scene_lab": 726,
      "Story": "At some point in the relationship, he stopped trying to be a gentleman.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 727,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 72
    },
    {
      "Scene_lab": 727,
      "Story": "Maybe there was more wrong than you had thought.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 728,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 49
    },
    {
      "Scene_lab": 728,
      "Story": "Ryan helps you walk Lex back to her car.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 729,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 41
    },
    {
      "Scene_lab": 729,
      "Story": "You buckle her into the passenger\’s seat and turn back to Ryan.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 730,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 64
    },
    {
      "Scene_lab": 730,
      "Story": "The dim lighting casts flattering shadows on his relaxed face.",
      "Choice": "Y",
      "Response_1": "You should give him your number.",
      "Response_2": "You doubt whether you\’re ready for someone new.",
      "Outcome_1": 731,
      "Outcome_2": 734,
      "Section": 6,
      "Storyline": 3,
      "NumChar": 62
    },
    {
      "Scene_lab": 731,
      "Story": "“Can you grab my pen?” He lets out a laugh and accepts your purse, retrieving your purple pen.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 732,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 95
    },
    {
      "Scene_lab": 732,
      "Story": "You write your number on his wrist. “Let me know if you need help with the clean-up team tomorrow. It\’s the least I could do after injuring you.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 733,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 146
    },
    {
      "Scene_lab": 733,
      "Story": "Ryan examines his hand.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 739,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 24
    },
    {
      "Scene_lab": 734,
      "Story": "“Can you grab my pen?” He lets out a laugh and accepts your purse, retrieving your purple pen.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 735,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 95
    },
    {
      "Scene_lab": 735,
      "Story": "You write a date on his hand.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 736,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 30
    },
    {
      "Scene_lab": 736,
      "Story": "Ryan examines his hand. “What\’s this?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 737,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 39
    },
    {
      "Scene_lab": 737,
      "Story": "You grin. “A month from today. As you know, I\’m dealing with a break-up, and I need a little more time to heal. That said, I\’d love to see you again when I\’m in a better place.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 738,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 178
    },
    {
      "Scene_lab": 738,
      "Story": "Ryan hands your purse back to you, smirking.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 739,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 45
    },
    {
      "Scene_lab": 739,
      "Story": "“I might just take you up on that offer. Good night, Emily.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 740,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 61
    },
    {
      "Scene_lab": 740,
      "Story": "Waving, you duck into the car and drive back to your apartment.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 741,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 64
    },
    {
      "Scene_lab": 741,
      "Story": "You help Lex into the elevator and lay her down on your living room couch.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 742,
      "Outcome_2": "NA",
      "Section": 6,
      "Storyline": 3,
      "NumChar": 75
    },
    {
      "Scene_lab": 742,
      "Story": "Throwing a blanket over her, you enter your bedroom and shut the door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 743,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 71
    },
    {
      "Scene_lab": 743,
      "Story": "You slide open your closet.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 744,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 28
    },
    {
      "Scene_lab": 744,
      "Story": "Standing on your tiptoes, you retrieve a box from the top shelf.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 745,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 65
    },
    {
      "Scene_lab": 745,
      "Story": "You set it down on your bed and peer inside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 746,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 45
    },
    {
      "Scene_lab": 746,
      "Story": "Movie ticket stubs, anniversary cards, souvenirs from your trips to New York, and band tees from various stadium tours stare back at you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 747,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 138
    },
    {
      "Scene_lab": 747,
      "Story": "Time is strange, isn\’t it?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 748,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 27
    },
    {
      "Scene_lab": 748,
      "Story": "Two years of happiness reduced to a pile of paper and polyester in a duct-taped box.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 749,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 85
    },
    {
      "Scene_lab": 749,
      "Story": "You glance at the clock. Eleven fifty-five.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 750,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 44
    },
    {
      "Scene_lab": 750,
      "Story": "Five minutes until your cheat day is over and you really need to move on with your life.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 751,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 89
    },
    {
      "Scene_lab": 751,
      "Story": "You sit cross-legged on your fluffy rug, hugging the box to your chest.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 752,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 72
    },
    {
      "Scene_lab": 752,
      "Story": "Relationships are beautiful.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 753,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 29
    },
    {
      "Scene_lab": 753,
      "Story": "They\’re starry nights and jealous tears.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 754,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 41
    },
    {
      "Scene_lab": 754,
      "Story": "They\’re intertwined hands and heads on shoulders at movie theaters, blocking the vision of the annoying kid kicking the back of your seat.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 755,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 139
    },
    {
      "Scene_lab": 755,
      "Story": "They\’re messy buns and pizza stains on Friday nights spent watching Harry Potter movie marathons.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 756,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 98
    },
    {
      "Scene_lab": 756,
      "Story": "And for each beautiful memory, each precious moment, you trade a little piece of yourself.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 757,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 91
    },
    {
      "Scene_lab": 757,
      "Story": "You can\’t unsee the stars, un-cry the tears, forget how good it felt to hold onto someone stable and strong and vulnerable.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 758,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 124
    },
    {
      "Scene_lab": 758,
      "Story": "And no matter how hard you squeeze your eyes shut and click your heels together, you\’ll never be the same exact person you were a relationship ago.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 759,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 148
    },
    {
      "Scene_lab": 759,
      "Story": "At the end of the day, you\’re left with a box of memories and a choice:",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 760,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 72
    },
    {
      "Scene_lab": 760,
      "Story": "you either let go of that part of you that isn\’t yours anymore, or you hold onto the sadness and close your heart to a new shot at happiness.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 761,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 142
    },
    {
      "Scene_lab": 761,
      "Story": "The clock reads eleven fifty-nine.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 762,
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 35
    },
    {
      "Scene_lab": 762,
      "Story": "You brush a handful of stray tears from your wet cheek with the back of your hand and stand.",
      "Choice": "Y",
      "Response_1": "You throw the box away.",
      "Response_2": "You return the box to its shelf.",
      "Outcome_1": 763,
      "Outcome_2": 763,
      "Section": 7,
      "Storyline": 0,
      "NumChar": 92
    },
    {
      "Scene_lab": 763,
      "Story": "That's that. You blink hard, unsure what to do next.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": [
        764,
        775
      ],
      "Outcome_2": "NA",
      "Section": 7,
      "Storyline": 0,
      "NumChar": 52
    },
    {
      "Scene_lab": 764,
      "Story": "Your eyes pan the room, landing on a relic of the past.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 765,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 56
    },
    {
      "Scene_lab": 765,
      "Story": "You feel inexplicably drawn to it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 766,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 35
    },
    {
      "Scene_lab": 766,
      "Story": "For the first time in a month, you sit down on your piano bench and turn on your keyboard.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 767,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 91
    },
    {
      "Scene_lab": 767,
      "Story": "You slide your headphones over your ears.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 768,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 42
    },
    {
      "Scene_lab": 768,
      "Story": "Your fingers take their familiar positions on the black and white keys, making an indent in the thin layer of dust that accumulated in the past few weeks.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 769,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 155
    },
    {
      "Scene_lab": 769,
      "Story": "Adam loved this piano. You used to spend afternoons playing together.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 770,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 70
    },
    {
      "Scene_lab": 770,
      "Story": "Your heart would flutter every time his hand brushed yours, even two years into the relationship.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 771,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 98
    },
    {
      "Scene_lab": 771,
      "Story": "You thought destiny was the reason your butterflies never went away until the butterflies stayed and Adam left.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 772,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 112
    },
    {
      "Scene_lab": 772,
      "Story": "You close your eyes, letting the music flow from your fingertips.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 773,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 66
    },
    {
      "Scene_lab": 773,
      "Story": "It empties your shaking hands and broken heart, filling them with something new.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 774,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 81
    },
    {
      "Scene_lab": 774,
      "Story": "Welcome to the first day of the rest of your life.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 790,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 50
    },
    {
      "Scene_lab": 775,
      "Story": "You move to the window to pull the blinds shut.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 776,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 48
    },
    {
      "Scene_lab": 776,
      "Story": "A strong aroma enters the room, overwhelming your senses.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 777,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 58
    },
    {
      "Scene_lab": 777,
      "Story": "You turn and scan the bed, the pillows, the closet.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 778,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 52
    },
    {
      "Scene_lab": 778,
      "Story": "Why does it smell like coffee?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 779,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 31
    },
    {
      "Scene_lab": 779,
      "Story": "A familiar alarm tone sounds.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 780,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 30
    },
    {
      "Scene_lab": 780,
      "Story": "At first, it\’s distant. It grows louder and nearer each second.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 781,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 64
    },
    {
      "Scene_lab": 781,
      "Story": "You sit up, clutching a handful of blankets in one hand and your stuffed bear in the other.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 782,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 92
    },
    {
      "Scene_lab": 782,
      "Story": "The sudden movement startles Adam, who is seated at your desk.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 783,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 63
    },
    {
      "Scene_lab": 783,
      "Story": "A coffee mug rests in his grip. “Bad dream?” he asks, brows knitted.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 784,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 69
    },
    {
      "Scene_lab": 784,
      "Story": "He takes a sip of his drink and sets it down.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 785,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 46
    },
    {
      "Scene_lab": 785,
      "Story": "You rub your eyes, blinking fast at Adam. You resist the urge to pinch yourself.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 786,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 81
    },
    {
      "Scene_lab": 786,
      "Story": "He sits beside you and kisses your cheek, smiling and brushing the hair from your face. “Happy two-year anniversary, babe.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 787,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 124
    },
    {
      "Scene_lab": 787,
      "Story": "Your heart pounds. It was all a dream.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 788,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 39
    },
    {
      "Scene_lab": 788,
      "Story": "Your nose burns as you struggle to suppress the silent tears forming in your eyes--that was the most realistic dream you've ever had.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 789,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 134
    },
    {
      "Scene_lab": 789,
      "Story": "You lean forward and hug hum, chin resting on his shoulder. “Happy anniversary, Adam.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 790,
      "Outcome_2": "NA",
      "Section": 8,
      "Storyline": "NA",
      "NumChar": 86
    },
    {
      "Scene_lab": 790,
      "Story": "The End.",
      "Choice": "N",
      "Response_1": "End",
      "Response_2": "NA",
      "Outcome_1": "NA",
      "Outcome_2": "NA",
      "Section": "NA",
      "Storyline": "NA",
      "NumChar": 8
    }
  ]
};

var story_name = 'monthy';
var version = 'free';
var index = 0;
var story_path = [];
var story_text = [];
var choice_click = 0;
var choice_vec = [];
var response_label = "";
var response_text = "";
var key_flag = 0;
var sl = 0;
var setsplit = [96,322,551,593,644];//scenes where sec2-6 split into sl1/2/3 based on choices in sec1
var endsplit = [763]; //this is the point to go into 1 of 2 different endings
var ending = 1+Math.round(Math.random()); //half subj to 1; half to 2
var button_delay =2000;//2000;
var wait_click=false;
var allow=true;
var allow_click=true;

var storyStarted = false; // Whether the story has actually started yet
var read_base =1500; //1500;
var read_speed =120; //200;
var startTime;
var pad_green = 0;



var prac_round = 0;
var prac_path = [];
var prac_text = [];
var prac_vec = [];

var pic_wait = 10000;
var recall_wait = 60000;//5000; //wait for xxx (ms)
var quiz1_data=[];
var quiz2_data=[];
var pic_data;
var recall_data;
var download = 0;

/*********************************
*    Screen1: ask full screen    *
**********************************/

function time_record(event_click){
  let now = Date.now() / 1000
  let elapsed = now - time_track
  time_track = now
  timestamp.push(event_click+':'+ time_track)
  timestep.push(event_click+':'+ elapsed)
}

function toggleFullScreen() {
  $('#consent').show();
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
  $('#askFull').hide();
}


/***************************************************************************
*    Screen2: consent form and instructions (intermittantly come back)    *
****************************************************************************/

//validate consent
function validate() {
  if ( $('#consentBox').is(":checked") ) {
    $('#consentButton').delay(300).fadeIn();
  } else {
    $('#consentButton').hide();
  }
}

// warning before closing page (to prevent a participant from inadvertently exiting the experiment)
  // will remove this function before redirecting back to Prolific/SONA
function eventReturn(e) {e.returnValue = `Are you sure you want to leave?`;}
// consent and instruction
function ClickedConsent() {
  document.body.style.width = window.innerWidth;
  document.body.style.height = window.innerHeight;
  // now add warning if they try to close the page
  window.addEventListener('beforeunload', eventReturn);    // hide
  $('#consent').hide();
  // show
  $('#title').show();
  document.body.scrollTop = document.documentElement.scrollTop = 0; // scroll back up to top of instructions page
  $('#Instruction' + instrInd).show();
  $('#buttonPrev').hide();
  $('#buttonGroup').delay(button_delay).fadeIn();
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}

// to proceed instructions screen 
function ChangeInstructionsScreen(buttonText, buttonFunction, incremVal) {
  $('#buttonGroup').hide()
  if (enableInstrButtons == true) {
    enableInstrButtons = false; // to prevent multiple button clicks as instructions are updated
    $('#Instruction' + instrInd).fadeOut(200).slideUp(); 
    instrInd = instrInd + incremVal; 
    setTimeout(function(){
      //update instruction and the 'next' button's function 
      $('#Instruction' + instrInd).delay(200).fadeIn();
      document.getElementById('buttonNextText').innerHTML = buttonText;
      if (instrInd ==2){// at switch point to next phase
        $('#buttonPrev').delay(button_delay).fadeIn();
        document.getElementById('buttonNextText').href = buttonFunction;  
      } else if (instrInd ==0 |instrInd ==3){//places where we don't want subj to go back
        $('#buttonPrev').hide();
        document.getElementById('buttonNext').href = buttonFunction;    
      } else if (instrInd ==8){//hide next button until attention checked
        $('#buttonPrev').hide();
        $('#buttonNext').hide();
        document.getElementById('buttonNext').href = buttonFunction;
      } else if (instrInd ==9 |instrInd ==6){//at switch point to next phase & where we don't want subj to go back
        $('#buttonPrev').hide();
        document.getElementById('buttonNextText').href = buttonFunction;  
      } else{// in the middle of each instruction phase
        $('#buttonPrev').delay(button_delay).fadeIn();
        document.getElementById('buttonNext').href = buttonFunction;  
      }
      $('#buttonGroup').delay(button_delay).fadeIn();
    },500);
    document.body.scrollTop = document.documentElement.scrollTop = 0; // scroll back up to top of instructions page
    enableInstrButtons = true; // now that animating is done, enable instructions button
  }
}
function NextInstruction() {
  incremVal = 1;
  buttonText = 'Next';
  if (instrInd < phase1-2) {//general instructions 
    buttonFunction =  'javascript:' + 'NextInstruction()';
  } else if (instrInd == phase1-2) {//general instructions end
    buttonFunction =  'javascript:' + 'obtainID()';
  } else if (instrInd >= phase1 && instrInd< phase1+phase2-2){//spr prac instructions
    buttonFunction =  'javascript:' + 'NextInstruction()';
  } else if (instrInd== phase1+phase2-2){//spr-prac instructions end
    buttonText = 'Ready';
    buttonFunction =  'javascript:' + 'prac_spr()';
  } else if (instrInd >= phase1+phase2 && instrInd< phase1+phase2+phase3-2){//post practice instruction 
    buttonFunction =  'javascript:' + 'NextInstruction()';
  } else if (instrInd == phase1+phase2+phase3-2){//post spr instruction end
    buttonText = 'Begin!';
    buttonFunction =  'javascript:' + 'cyoa_spr()';
  }
  console.log(instrInd)
  ChangeInstructionsScreen(buttonText, buttonFunction, incremVal);
}
function PrevInstruction() {
  buttonFunction = 'NextInstruction()';
  ChangeInstructionsScreen('Next', buttonFunction, -1);
}


/*************************************************
*    Screen3: prolific ID obtain and validate   *
**************************************************/

function obtainID(){
  //hide button group and instructions
  $('#buttonGroup').hide()
  $('#buttonPrev').hide()
  $('#buttonNext').hide()
  $('#instructions').hide()
  $('#Instruction' + instrInd).hide();
  //bring up prolific ID and update Next button
  document.body.scrollTop = document.documentElement.scrollTop = 0; 
  $('#construct-prolificID').show();
  $('#prolificID').show();
  $('#buttonGroupID').delay(button_delay).fadeIn();
}

function validateID(){
  //get input prolific ID
  let id1 = document.getElementById('prolific_ID1').value;
  let id2 = document.getElementById('prolific_ID2').value;
  if (id1==id2 && id1.length==24){
    prolific_PID = id1
    document.body.scrollTop = document.documentElement.scrollTop = 0; 
    //hide prolific page and disable back button
    $('#construct-prolificID').hide();
    $('#prolificID').hide();
    $('#buttonNextID').hide();
    //bring up spr practice instruction and update the next button
    instrInd=instrInd+1
    $('#instructions').show();
    $('#Instruction' + instrInd).delay(200).fadeIn();
    document.getElementById('buttonNextText').href = 'javascript:' + 'NextInstruction()';
    $('#buttonGroup').delay(button_delay).fadeIn();
    $('#buttonNext').delay(button_delay).fadeIn();
  }else{
    window.alert("Your Prolific ID is a 24-digit alphanumeric code. Both fields must match in order to continue!");
  }
}

/***************************************************************
*    Screen4: self-paced reading instruction and practice  *
****************************************************************/

function prac_spr(){
  index = 0;
  pracInstr=true;
  prac_round = prac_round+1;
  //hide instruction and button
  $('#instructions').hide();
  $('#Instruction' + instrInd).hide();
  $('#buttonGroup').hide();
  $('#buttonNext').hide();
  //bring up spr
  $('#buttonGroup').hide();
  $('#spr').show();
  $('#spr_text').show();
  document.getElementById('spr_sentence').innerHTML = prac_story.row[index].Story; //set story sentence
  $('#spr_sentence').show();
  //reminder only appears at the first screen
  $('#Reminder').delay(100).fadeIn();
  autoAdvance();
}

/***********************************************************
*    Screen5: post-practice instruction & recall example  *
************************************************************/

function instruction_postprac(){
  window.removeEventListener('keydown', SPR_keyRecorder);
  $('#spr').hide();
  $('#spr_text').hide();
  if (prac_round==1){instrInd = instrInd +1;}  
  $('#instructions').show();
  $('#Instruction' + instrInd).show();
  document.getElementById('buttonPrevText').innerHTML = "Re-explore!";
  document.getElementById('buttonNextText').innerHTML = "Next";
  document.getElementById('buttonPrevText').href = 'javascript:' + 'prac_spr()';
  document.getElementById('buttonNextText').href = 'javascript:' + 'NextInstruction()';
  // if (prac_round>1){$('#buttonNext').show();} else{$('#buttonNext').hide();} //this is to force re-explore at least once
  $('#buttonGroup').delay(400).fadeIn();
  $('#buttonPrev').show();  
  $('#buttonNext').show();  
}

function read_carefully() {
  $('#buttonNext').delay(400).fadeIn();  
}

/*************************************************
*    Screen6: self-paced reading formal   *
**************************************************/

function cyoa_spr(){
  window.startTime = Date.now(); 
  time_record('cyoa_spr')
  index = 0;
  pracInstr=false;
  //hide instruction and button
  $('#Instructions').hide();
  $('#Instruction' + instrInd).hide();
  $('#buttonGroup').hide();
  $('#buttonNext').hide();
  //bring up spr
  $('#buttonGroup').hide();
  $('#spr').show();
  $('#spr_text').show();
  document.getElementById('spr_sentence').innerHTML = story.row[index].Story; //set story sentence
  $('#spr_sentence').show();
  autoAdvance();
}


function autoAdvance() {
  if  (pracInstr==true){    
        var words = prac_story.row[index].Story.trim().split(/\s+/).length;
        var duration = read_base + read_speed * words; // 500ms + 100ms per word
        // Save current scene info
        curent_position = prac_story.row[index].Scene_lab; // save current scene label
        curent_text = prac_story.row[index].Story; // save current text
        prac_path.push(curent_position); // append current scene position to the story_path variable
        prac_text.push(curent_text); // append current text position to the story_text variable    
        setTimeout(function() {
            SPR_keyRecorder();
        }, duration);
  }else{//formal story
      
      var words = story.row[index].Story.trim().split(/\s+/).length;
      var duration = read_base + read_speed * words; // 500ms + 100ms per word
      // Save current scene info
      curent_position = story.row[index].Scene_lab;
      curent_text = story.row[index].Story;
      story_path.push(curent_position);
      story_text.push(curent_text);

      const msg = 'auto-show_' + curent_position;
      time_record(msg);
      setTimeout(function() {
            SPR_keyRecorder();
      }, duration);
      }
  
}
//key press: progress at non-choice points with enter key (progress story + save data)
function SPR_keyRecorder() {
  $('#Reminder').hide();

        if (pracInstr==true){ //if this is the practice story 
          //test if CURRENT scene is a choice scene or not 
          if (prac_story.row[index].Choice=="N") { //if this is not a choice point
            //test if at end of story or not
            if (prac_story.row[index].Response_1 != "End") { //if not at end of story
              //update index        
              index = prac_story.row[index].Outcome_1-1 //update index based on Outcome_1  
              //update story by index
              document.getElementById('spr_sentence').innerHTML = prac_story.row[index].Story; 
              //test if the updated scene is a choice scene or not
              if (prac_story.row[index].Choice=="N") { //if the updated scene is not a choice scene
                //update element visibility
                $('#Response_Label1').hide(); //hide element
                $('#Button_1').hide(); //hide element
                $('#Button_2').hide(); //hide element
              } else if(prac_story.row[index].Choice=="Y") { //if the updated scene is a choice scene
                //update element visibility
                $('#Response_Label1').hide(); //hide element
                //update button text
                document.getElementById('Button_1').textContent = prac_story.row[index].Response_1
                document.getElementById('Button_2').textContent = prac_story.row[index].Response_2
              }//EoF: updated scene choice/not
              autoAdvance();  // 🚀 Start auto advancing after choice
            } else { //if at end of story
              document.getElementById('spr_sentence').innerHTML = "You have completed the practice.";
              setTimeout(instruction_postprac(), 2000);
            };            
          }  else if(prac_story.row[index].Choice=="Y") { //if this is a choice point
              allow_click=true;
            
              // compute ms since the very first 'cyoa_spr' call
              const now = Date.now();
              const sinceStart = now - startTime;  
              const over = sinceStart % 1500;      
              const pad_delay = (1500 - over) % 1500;   
              setTimeout(function () {  
                  //update element visibility
                  $('#Response_Label1').hide(); //hide element
                  //update button visibility
                  $('#Button_1').show();
                  $('#Button_2').show();
              }, pad_delay)
          } //EoF: current scene is choice/not

          
        }else{ //if this is the formal cyoa 
          //test if CURRENT scene is a choice scene or not 
          if (story.row[index].Choice=="N") { //if this is not a choice point
            //test if at end of story or not
            if (story.row[index].Response_1 != "End") { //if not at end of story
              //update index
              if (setsplit.includes(story.row[index].Scene_lab)) { //split into a storyline determined by subject's previous choice
                if (story_path.includes('13_2')){sl=3 //having chosen _2 for 13 goes onto storyline3
                }else if(story_path.includes('14_2')){sl=2 //having chosen _2 for 14 goes onto storyline2
                }else if(story_path.includes('14_1')){sl=1 //having chosen _1 for 14 goes onto storyline1
                };
                index = story.row[index].Outcome_1[sl-1]-1
              }else if (endsplit.includes(story.row[index].Scene_lab)) {
                index = story.row[index].Outcome_1[ending-1]-1
              }else{ //proceed to the next scene          
                index = story.row[index].Outcome_1-1 //update index based on Outcome_1  
              };
              //update story by index
              document.getElementById('spr_sentence').innerHTML = story.row[index].Story; 

              //test if the updated scene is a choice scene or not
              if (story.row[index].Choice=="N") { //if the updated scene is not a choice scene
                //update element visibility
                $('#Response_Label1').hide(); //hide element
                $('#Button_1').hide(); //hide element
                $('#Button_2').hide(); //hide element

              } else if(story.row[index].Choice=="Y") { //if the updated scene is a choice scene
                //update element visibility
                $('#Response_Label1').hide(); //hide element
                //update button text
                document.getElementById('Button_1').textContent = story.row[index].Response_1
                document.getElementById('Button_2').textContent = story.row[index].Response_2    
              }//EoF: updated scene choice/not
              autoAdvance();  // 🚀 Start auto advancing after choice

            } else { //if at end of story
              document.getElementById('spr_sentence').innerHTML = "You have completed Phase 3.";
              setTimeout(instruction_postspr(), 2000);
            }
          }  else if(story.row[index].Choice=="Y") { //if this is a choice point
            allow_click=true;
            wait_click=true;

            //save current story text
            curent_position = story.row[index].Scene_lab;
            curent_text = story.row[index].Story;
            story_path.push(curent_position);
            story_text.push(curent_text);

            // compute ms since the very first 'cyoa_spr' call
            const now = Date.now();
            const sinceStart = now - startTime;  
            const over = sinceStart % 1500;      
            const pad_delay = (1500 - over) % 1500;           
            setTimeout(function () {  
                //update element visibility
                $('#Response_Label1').hide(); //hide element
                //update button visibility
                const msg = 'button-show_'+curent_position;
                time_record(msg);
                $('#Button_1').show();
                $('#Button_2').show();
            }, pad_delay)
          } //EoF: current scene is choice/not
        }  
} //EoF: SPR_keyRecorder


//button press: progress at choice points with button-click (progress story + save data)
function SPR_buttonRecorder(choice_click) {
  if (allow_click==true){
      allow_click=false
    
      if (pracInstr==false){
        //record clicking info
        const msg = 'button-click_'+curent_position+'_'+choice_click;
        time_record(msg);
        wait_click=false
        // compute ms since the very first 'cyoa_spr' call
        var now = Date.now();
        var sinceStart = now - window.startTime; 
        console.log('elapsed time is', sinceStart);
        var over = (Date.now() - startTime) % 1500;
        var pad_green = (1500 - over) % 1500;
        console.log(pad_green)
      }
      //selected element change colours (white highlight top item)
      if (choice_click==1){
        $("#Button_1").css("color", "black");
        $("#Button_1").css("background-color", "white");
        $("#Button_1").css("border", "steelblue");
        $("#Button_1").css("border-style", "solid");
      } 
      if (choice_click==2){
        $("#Button_2").css("color", "black");
        $("#Button_2").css("background-color", "white");
        $("#Button_2").css("border", "steelblue");
        $("#Button_2").css("border-style", "solid");
      }
      //set timeout function (green lit-up the selected item)
      setTimeout(function () {
          if(choice_click==1){
            $("#Button_1").css("background-color", "green");
            $("#Button_1").css("border", "green");
            $("#Button_1").css("border-style", "solid");
            $("#Button_1").css("color", "black");
            //the other option needs to go dark or disappear
            $("#Button_2").css("background-color", "white");
            $("#Button_2").css("border-style", "solid");
            $("#Button_2").css("border", "grey");
            $("#Button_2").css("color", "grey");
          }else if(choice_click==2){
            $("#Button_2").css("background-color", "green");
            $("#Button_2").css("border", "green");
            $("#Button_2").css("border-style", "solid");
            $("#Button_2").css("color", "black");
            //the other option needs to go dark or disappear
            $("#Button_1").css("background-color", "white");
            $("#Button_1").css("border-style", "solid");
            $("#Button_1").css("border", "grey");
            $("#Button_1").css("color", "grey");
          }
          //set timeout function
          setTimeout(function () {
                  //buttons return colours to original state
                  $("#Button_1").css("border-style", "none");
                  $("#Button_1").css("color", "white");
                  $("#Button_1").css("background-color", "steelblue");
                  $("#Button_2").css("border-style", "none");
                  $("#Button_2").css("color", "white");
                  $("#Button_2").css("background-color", "steelblue");

                  //define response label and text
                  if (choice_click == 1){
                    response_label = "_1";
                    response_text = document.getElementById('Button_1').textContent;
                    //update story
                    if (pracInstr==true){
                      prac_vec.push(choice_click); 
                      index = prac_story.row[index].Outcome_1-1;
                    }else{
                      choice_vec.push(choice_click); 
                      index = story.row[index].Outcome_1-1;
                    }
                  }else if(choice_click==2){ //second option
                    response_label = "_2";
                    response_text = document.getElementById('Button_2').textContent;
                    //update story
                    if (pracInstr==true){
                      prac_vec.push(choice_click); 
                      index = prac_story.row[index].Outcome_2-1;
                    }else{
                      choice_vec.push(choice_click);
                      index = story.row[index].Outcome_2-1;
                    }
                  };
              
                  //save selected response
                  if (pracInstr==true){
                    //save selected response: append to story_path and story_text
                    prac_path.push(curent_position.toString().concat(response_label)); // append selected response label to the story_path variable
                    prac_text.push(response_text); // append selected response text to the story_text variable
                  }else{
                    //save selected response: append to story_path and story_text
                    story_path.push(curent_position.toString().concat(response_label)); // append selected response label to the story_path variable
                    story_text.push(response_text); // append selected response text to the story_text variable  
                  }
                  
                  //update story text
                  document.getElementById('spr_sentence').innerHTML = story.row[index].Story;
                  //update choice text
                  let label_var = ""
                  document.getElementById('Response_Label1').innerHTML=label_var.concat(response_text);
                  //update choice visibility
                  $('#Response_Label1').show();
                  //clear choice variables
                  response_label = "";
                  response_text = "";
                  //update button visibility
                  $('#Button_1').hide();
                  $('#Button_2').hide();
                  //allow to proceed to the next page by pressing enter
                  wait_click=false;

                  // resume auto-proceed
                  if (pracInstr==true){
                    //update practice story text
                    document.getElementById('spr_sentence').innerHTML = prac_story.row[index].Story;
                    autoAdvance();
                  }else{// formal study
                      if (story.row[index].Choice == "N") {
                        autoAdvance();  // 🚀 Start auto advancing after choice
                      } else if (story.row[index].Choice == "Y") {
                        allow_click=true;
                        wait_click=true;

                        //save current story text
                        curent_position = story.row[index].Scene_lab;
                        curent_text = story.row[index].Story;
                        story_path.push(curent_position);
                        story_text.push(curent_text);

                        // compute ms since the very first 'cyoa_spr' call
                        const now = Date.now();
                        const sinceStart = now - startTime;  
                        const over = sinceStart % 1500;      
                        const pad_delay = (1500 - over) % 1500;  
                        setTimeout(function () {  
                            //update button text
                            document.getElementById('Button_1').textContent = story.row[index].Response_1
                            document.getElementById('Button_2').textContent = story.row[index].Response_2  
                            //update button visibility
                            const msg = 'button-show_'+curent_position;
                            time_record(msg);
                            $('#Button_1').show();
                            $('#Button_2').show();
                        }, pad_delay)
                      }
                  }
          },1000+pad_green)
      },500)  
  }  
}


/*************************************************
*    Screen7: post formal spr questionaires   *
**************************************************/

function instruction_postspr(){
  // window.removeEventListener('keydown', SPR_keyRecorder);
  $('#spr').hide();
  $('#spr_text').hide();
  instrInd = instrInd +1  
  $('#instructions').show();
  $('#Instruction' + instrInd).show();
  $('#buttonPrev').hide();  
  document.getElementById('buttonNextText').innerHTML = "Begin";
  document.getElementById('buttonNextText').href = 'javascript:' + 'delayed_q1()';
  $('#buttonGroup').delay(button_delay).fadeIn();
  $('#buttonNext').delay(button_delay).fadeIn();
}
function delayed_q1(){
  $('#buttonGroup').hide();
  $('#instructions').hide();
  $('#Instruction' + instrInd).hide();
  $('#curiosity').hide();
  $('#picture_descrip').hide();
  $('#recall').hide();
  document.getElementById('buttonNextText2').innerHTML = "Submit";
  document.getElementById('buttonNextText2').href = 'javascript:' + 'validate_quiz1()';
  $('#container-questionnaire').show();  
  $('#buttonNext2').show();  
}

function validate_quiz1(){
  let items = ['country','currenttime','age','gender','hand','nativelang','nativelang_text','fluency','fluency_text','race','attncheck','hispanic','education','reading']
  let req_items = ['country','currenttime','age','gender','hand','nativelang','fluency','race','attncheck','hispanic','education','reading']
  let data = []
  for (let i =0; i<items.length; i++){
    item_id ='demographics'+'_'+items[i] 
    id_data = document.getElementById(item_id).value
    if (id_data=="" && req_items.includes(items[i])){
      window.alert("Please check that you have answered all the questions on this page.");
      break;
    }else{
      data.push(item_id+': '+id_data);
    }
  }
  quiz1_data = data
  if (quiz1_data.length==14){
    document.getElementById('buttonNextText2').innerHTML = "Proceed to the Next";
    document.getElementById('buttonNextText2').href = 'javascript:' + 'delayed_q2()';
    $('#buttonNext2').show();  
  }
}

function delayed_q2(){
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  $('#demographic').hide();
  $('#buttonNext2').hide();  
  document.getElementById('buttonNextText2').innerHTML = "Submit";
  document.getElementById('buttonNextText2').href = 'javascript:' + 'validate_quiz2()';
  $('#curiosity').show();
  $('#buttonNext2').show();  
}
function validate_quiz2(){
  let items = ['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10']
  let req_items = ['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10']
  let data = []
  for (let i =0; i<items.length; i++){
    item_id ='curiosity'+'_'+items[i] 
    id_data = document.getElementById(item_id).value
    if (id_data=="" && req_items.includes(items[i])){
      window.alert("Please check that you have answered all the questions on this page.");
      break;
    }else{
      data.push(item_id+': '+id_data);
    }
  }
  quiz2_data = data
  if (quiz2_data.length==10){
    document.getElementById('buttonNextText2').innerHTML = "Proceed to the Next";
     document.getElementById('buttonNextText2').href = 'javascript:' + 'pic_descrip()';
    $('#buttonNext2').show();  
  }
}

function pic_descrip(){
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  $('#curiosity').hide();
  $('#buttonNext2').hide();  
  document.getElementById('buttonNextText3').href = 'javascript:' + 'validate_length()';
  $('#container-questionnaire').show();  
  $('#picture_descrip').show();
  $('#buttonNext3').delay(pic_wait).fadeIn();
}
function validate_length(){
  let data = document.getElementById('description_input').value;
  pic_data = data;
  if (data.length>=100){
    instruction_recall();
  }else{
    window.alert("Please try to describe more in depth.");
  }
}

/*************************************************
*    Screen7: recall instruction and recall  *
**************************************************/

function instruction_recall(){
  $('#picture_descrip').hide();
  $('#buttonNext3').hide();
  $('#container-questionnaire').hide();  
  instrInd = instrInd +1  
  $('#instructions').show();
  $('#Instruction' + instrInd).show();
  $('#buttonPrev').hide();   
  document.getElementById('buttonNextText').innerHTML = "Begin";
  document.getElementById('buttonNextText').href = 'javascript:' + 'obtain_recall()';
  $('#buttonGroup').delay(button_delay).fadeIn();
  $('#buttonNext').delay(button_delay).fadeIn();
}

function obtain_recall(){
  $('#instructions').hide();
  $('#Instruction' + instrInd).hide();
  $('#buttonGroup').hide();
  $('#buttonNext').hide(); 
  $('#recall').show();
  document.getElementById('buttonNextText3').href = 'javascript:' + 'validate_recall()';
  $('#buttonNext3').delay(recall_wait).fadeIn();
  $('#container-questionnaire').show();  
}

function validate_recall(){
  let data = document.getElementById('recall_input').value;
  recall_data= data;
  if (data.length>=1000){
    instruction_postrecall();
  }else{
    window.alert("We won't be able to use your data if this memory does not reflect your story in good depth. Please try to recall more. We offer $2 bonus to those whose recall memory is among the top 40% of all subjects. We would sincerely appreciate your effort.");
  }
}

/********************************************************************
*    Screen8: data download and instructions for jump-to-qualtrics *
*********************************************************************/

function instruction_postrecall(){  
  window.removeEventListener('beforeunload', eventReturn);
  $('#buttonNext3').hide();
  $('#container-questionnaire').hide();  
  console.log(download)
  if (download!=0){
    $('#instructions').hide();
    $('#Instruction' + instrInd).hide();
    $('#buttonGroup').hide()
    instrInd = instrInd -2
    console.log(instrInd)  
  }  
  instrInd = instrInd +1  
  $('#instructions').show();
  $('#Instruction' + instrInd).show();
  $('#buttonPrev').hide();   
  document.getElementById('buttonNextText').innerHTML = "Download";
  document.getElementById('buttonNextText').href = 'javascript:' + 'instruction_upload()';
  $('#buttonGroup').delay(button_delay).fadeIn();
  $('#buttonNext').delay(button_delay).fadeIn();
}

function instruction_upload(){
  download= download+1
  download_data();
  $('#instructions').hide();
  $('#Instruction' + instrInd).hide();
  $('#buttonGroup').hide()
  instrInd = instrInd +1  
  $('#instructions').show();
  $('#Instruction' + instrInd).show();
  document.getElementById('buttonPrevText').innerHTML = "Back";
  document.getElementById('buttonPrevText').href = 'javascript:' + 'instruction_postrecall()';
  document.getElementById('buttonNextText').innerHTML = "Webpage";
  if (ending==1){
    document.getElementById('buttonNextText').href = "https://jhukrieger.co1.qualtrics.com/jfe/form/SV_8e2rakR80f3O914";
  }else if (ending==2){
    document.getElementById('buttonNextText').href = "https://jhukrieger.co1.qualtrics.com/jfe/form/SV_0P2N3H67J6TeIHc";
  }else{
    window.alert('An error has occurred. Please keep a screenshot of current page and email us to get compensated for your time. Thank you!')
  }
  $('#buttonGroup').delay(button_delay).fadeIn();
  $('#buttonNext').delay(button_delay).fadeIn();
  $('#buttonPrev').delay(button_delay).fadeIn();
}

function download_data (){
  // organize the data thus far recorded (prepare for output).
  let data = 
      'subject_id,' + prolific_PID +'\n' + 
      'study_version,' + story_name + '_'+version +'\n' + 
      'storyline,' + sl + '\n' + 
      'ending_version,' + ending + '\n' + 
      'choice_vec,' + choice_vec + '\n' +
      'time_stamp,' + timestamp + '\n' +
      'time_step,' + timestep +'\n' +
      'story_path,' + story_path + '\n' + 
      'story_text,' +  story_text + '\n' + 
      'story_recall,' +  recall_data + '\n' + 
      'prac_round,' + prac_round + '\n' + 
      'prac_path,' + prac_path + '\n' + 
      'prac_text,' +  prac_text + '\n' + 
      'prac_vec,' +  prac_vec + '\n' + 
      'quiz1,' + quiz1_data + '\n' +
      'quiz2,' + quiz2_data + '\n' + 
      'pic_descrip,' +  pic_data;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'cyoa_'+story_name +'-'+version+'_end'+ending+'_'+prolific_PID+'.prolific';    // The file to save the data.
  let newLink = document.createElement("a");
  newLink.download = sFileName;
  //set the url for download and download the text file
  if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
  }
  newLink.click(); 
}
