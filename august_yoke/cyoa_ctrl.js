
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
      "Story": "Astronomers have announced that a massive comet is rushing towards the Earth. It’s all over the news that it is likely to destroy more than half of the Earth and render the other half uninhabitable.",
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
      "Story": "There’s a risk that this experimental spaceship won’t function properly, but it’s going to be an epic adventure!",
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
      "Response_1": "You yell for the commander’s attention",
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
      "Story": "You look around at others, but no one else seems to have noticed this yet. So, you point at the gradually enlarging spot and ask the person next to you whether it’s just your imagination…",
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
      "Story": "Clearly not. You both start yelling, but before any crew members can come to check, the meteor crashes into the spaceship—that’s the last thing you see.",
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
      "Story": "Something is definitely not right! But before you can do anything else, the meteor crashes into the ship—that’s the last thing you see.",
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
      "Story": "There are so many comets reported as threatening the earth every few years, but here we are, alive and kicking, aren’t we?",
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
      "Story": "As you are checking in to the world’s only 7-star hotel, you notice the model spaceship at the lobby—the current era’s new fashion. Looking good!",
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
      "Story": "As you pass by a television playing CNN, you find that the news of comets and spaceship trials doesn’t seem to bother you anymore.",
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
      "Story": "Although you won’t be boarding the spaceship, the ticket to visit the spaceship factory is only 3 million dollars.",
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
      "Story": "You can also get an insider-guided 3-day tour on the human evacuation project ‘Noah’ for 30 million dollars.",
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
      "Story": "The visit is limited to 2 hours, but clearly, it’s worth it—you can’t help but think so as you walk past different models of amazing spaceships.",
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
      "Story": "You hope that’s not the launched spaceship you had the ticket for—after all, some dude who paid you 65 million dollars for it was probably up there.",
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
      "Story": "You’re seated on the edge of a velvet couch that’s probably worth more than your apartment, eyes tracking the hands of a stone clock with a lion’s roaring face carved into its center.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 2,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 184
    },
    {
      "Scene_lab": 2,
      "Story": "Ten o’clock – three hours after the homeowner was supposed to return and relieve you of your house-sitting duties.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 3,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 115
    },
    {
      "Scene_lab": 3,
      "Story": "You shouldn’t take random gigs on the Internet, but you could really use the money to pursue the artist’s dream.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 4,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 113
    },
    {
      "Scene_lab": 4,
      "Story": "Besides, there are worse ways to make $100 than sitting in a creepy mansion.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 5,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 77
    },
    {
      "Scene_lab": 5,
      "Story": "The house itself reminds you of that one show that premiered around the year 2200 – it featured mansions filled with augmented reality rooms where rich people could immerse themselves in a virtual paradise within seconds.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 6,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 222
    },
    {
      "Scene_lab": 6,
      "Story": "Some even came with AI agents programmed to give them an authentic experience, sentient enough to hold a conversation.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 7,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 119
    },
    {
      "Scene_lab": 7,
      "Story": "Guests would get so pulled into the simulation they perceived things like physically petting dolphins in the ocean, which is just insane.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 8,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 138
    },
    {
      "Scene_lab": 8,
      "Story": "Oh, shoot. Feed the homeowner’s fish! You almost forgot.",
      "Choice": "Y",
      "Response_1": "You bolt up.",
      "Response_2": "You glance at the time.",
      "Outcome_1": 9,
      "Outcome_2": 9,
      "Section": 1,
      "Storyline": 0,
      "NumChar": 57
    },
    {
      "Scene_lab": 9,
      "Story": "Hopefully, it’s not too late.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 10,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 29
    },
    {
      "Scene_lab": 10,
      "Story": "You start toward the Aquarium room, which the old man had instructed was to the left of the kitchen when he posted the hiring notice.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 11,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 134
    },
    {
      "Scene_lab": 11,
      "Story": "Creaking emerges from a dark hallway ahead, past the Aquarium.",
      "Choice": "Y",
      "Response_1": "You decide to investigate.",
      "Response_2": "You continue toward the Aquarium.",
      "Outcome_1": 12,
      "Outcome_2": 12,
      "Section": 1,
      "Storyline": 0,
      "NumChar": 63
    },
    {
      "Scene_lab": 12,
      "Story": "Your heart pounds in your ears. Nearing the Aquarium door, you peer into the darkness, listening intently.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 13,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 106
    },
    {
      "Scene_lab": 13,
      "Story": "For a ghost, a murderer, or a lost pizza delivery guy who came in one of the many back doors, you’re not sure.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 14,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 111
    },
    {
      "Scene_lab": 14,
      "Story": "There’s movement. A cat slinks toward you, the floor creaking beneath its orange paws.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 15,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 87
    },
    {
      "Scene_lab": 15,
      "Story": "When it sees you, it pauses to meow, head tilting back toward the hall the Aquarium room as if to beckon you.",
      "Choice": "N",
      "Response_1": "NA",
      "Response_2": "NA",
      "Outcome_1": 16,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 109
    },
    {
      "Scene_lab": 16,
      "Story": "You follow it into the room.",
      "Choice": "N",
      "Response_1": "NA",
      "Response_2": "NA",
      "Outcome_1": 17,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 0,
      "NumChar": 29
    },
    {
      "Scene_lab": 17,
      "Story": "Flicking on a light switch, you take in your surroundings. Twelve fish tanks sit on ornate tables, a light with a different colored bulb illuminating each.",
      "Choice": "Y",
      "Response_1": "You go to the red tank.",
      "Response_2": "You go to the purple tank.",
      "Outcome_1": 18,
      "Outcome_2": 18,
      "Section": 1,
      "Storyline": 0,
      "NumChar": 156
    },
    {
      "Scene_lab": 18,
      "Story": "Somehow this color seems enchanting to you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": [
        19,
        24,
        29
      ],
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 98
    },
    {
      "Scene_lab": 19,
      "Story": "Above the tank is a portrait of a middle-aged woman with a harsh brown eyes and a humorless smile.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 20,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 73
    },
    {
      "Scene_lab": 20,
      "Story": "The painting looks so…real. Almost as if she’s standing there before you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 21,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 88
    },
    {
      "Scene_lab": 21,
      "Story": "You could reach out and touch the elegant diamond ring on her finger. You extend a hand.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 22,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 34
    },
    {
      "Scene_lab": 22,
      "Story": "Something warm brushes your ankle.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 36,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 1,
      "NumChar": 72
    },
    {
      "Scene_lab": 23,
      "Story": "You jump back, eyes landing on the cat, who seems annoyed at the detour.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 24,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 102
    },
    {
      "Scene_lab": 24,
      "Story": "One of the little swimmers reminds you of the pet fish you won at the fair when you were 10 years old.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 25,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 73
    },
    {
      "Scene_lab": 25,
      "Story": "You named it “Pirate” because it had a jagged scar across its left side.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 26,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 103
    },
    {
      "Scene_lab": 26,
      "Story": "Your eyes track the fish as it navigates the tank. It turns, revealing a jagged scar on its left side.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 27,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 79
    },
    {
      "Scene_lab": 27,
      "Story": "You squint – oddly enough, it looks almost identical to the scar your fish had.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 28,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 51
    },
    {
      "Scene_lab": 28,
      "Story": "Could it be…? No. You flushed your fish years ago.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 36,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 2,
      "NumChar": 62
    },
    {
      "Scene_lab": 29,
      "Story": "Two fish circle at the center, their stripes nearly identical.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 30,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 88
    },
    {
      "Scene_lab": 30,
      "Story": "They approach each other, almost tentatively, bubbles prickling the tips of their fins.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 31,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 80
    },
    {
      "Scene_lab": 31,
      "Story": "Suddenly, one of them lurches forward, swimming straight through the other fish.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 32,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 80
    },
    {
      "Scene_lab": 32,
      "Story": "There’s no blood or gore. The fish simply dissipates like a hologram, and within moments, the water stills as if it was never there.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 33,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 133
    },
    {
      "Scene_lab": 33,
      "Story": "You blink hard, wondering if you had imagined the scene entirely.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 34,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 65
    },
    {
      "Scene_lab": 34,
      "Story": "The lone fish now swims lazily toward the bubbles, undisturbed.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 35,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 64
    },
    {
      "Scene_lab": 35,
      "Story": "Focus. Food – you need to find it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 36,
      "Outcome_2": "NA",
      "Section": 1,
      "Storyline": 3,
      "NumChar": 34
    },
    {
      "Scene_lab": 36,
      "Story": "A can labeled “Food” sits on the shelf beside you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 37,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 50
    },
    {
      "Scene_lab": 37,
      "Story": "You open it, wondering how one can of fish food is supposed to feed a dozen different fish species.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 38,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 100
    },
    {
      "Scene_lab": 38,
      "Story": "You grab the can of fish flakes. Tilting it over a tank, you shake a reasonable amount into it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 39,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 96
    },
    {
      "Scene_lab": 39,
      "Story": "As you give a final shake, a folded piece of notebook paper slips into the tank.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 40,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 81
    },
    {
      "Scene_lab": 40,
      "Story": "You curse, thrusting your arm into the water to retrieve it.",
      "Choice": "Y",
      "Response_1": "You try to dry it off.",
      "Response_2": "You try to read it.",
      "Outcome_1": 41,
      "Outcome_2": 41,
      "Section": 2,
      "Storyline": 0,
      "NumChar": 61
    },
    {
      "Scene_lab": 41,
      "Story": "Trying to unfold the note only tears the paper. You sit on your knees and try to reassemble it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 42,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 96
    },
    {
      "Scene_lab": 42,
      "Story": "The only legible word is “help,” which makes your heart jump into your throat.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 43,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 79
    },
    {
      "Scene_lab": 43,
      "Story": "For all you know, it could be a prank, put there by some dumb kids, but your gut says otherwise.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 44,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 96
    },
    {
      "Scene_lab": 44,
      "Story": "After a minute, you stand.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 45,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 27
    },
    {
      "Scene_lab": 45,
      "Story": "You can’t shake the feeling there was something important in the note’s scrunched red ink, but you can’t believe a message with that much gravity would be so easily destructible.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 46,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 178
    },
    {
      "Scene_lab": 46,
      "Story": "Maybe there’s a backup.",
      "Choice": "Y",
      "Response_1": "You examine the fish food container.",
      "Response_2": "You poke around a shelf.",
      "Outcome_1": 47,
      "Outcome_2": 47,
      "Section": 2,
      "Storyline": 0,
      "NumChar": 23
    },
    {
      "Scene_lab": 47,
      "Story": "Sure enough, a wad of paper sticks out.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 48,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 39
    },
    {
      "Scene_lab": 48,
      "Story": "You unfold it carefully and scan the first page.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 49,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 49
    },
    {
      "Scene_lab": 49,
      "Story": "<i>“My name is August Chambers, and this is my home. If you’re reading this, I’m dead and I want you to find my killer.”</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 50,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 124
    },
    {
      "Scene_lab": 50,
      "Story": "The paper starts shaking. You blink hard.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 51,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 41
    },
    {
      "Scene_lab": 51,
      "Story": "What’s happening? Is it an earthquake?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 52,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 39
    },
    {
      "Scene_lab": 52,
      "Story": "Oh. Your hand is shaking.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 53,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 27
    },
    {
      "Scene_lab": 53,
      "Story": "Taking a deep breath, you continue reading.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 54,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 44
    },
    {
      "Scene_lab": 54,
      "Story": "<i>“If you succeed, $100,000 will be wired to your HouseSittingSitters.com account by lunch tomorrow.”</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 55,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 106
    },
    {
      "Scene_lab": 55,
      "Story": "One hundred thousand dollars? You could buy at least a thousand canvases.",
      "Choice": "Y",
      "Response_1": "You sit on a stool.",
      "Response_2": "You flick on an extra light.",
      "Outcome_1": 56,
      "Outcome_2": 56,
      "Section": 2,
      "Storyline": 0,
      "NumChar": 74
    },
    {
      "Scene_lab": 56,
      "Story": "Your eyes travel down the page.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 57,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 32
    },
    {
      "Scene_lab": 57,
      "Story": "<i>“I’m an Augmented Reality Engineer. This house is the pinnacle of my career, designed so that each of its rooms holds an important memory of mine, as recorded by micro-cameras in my contact lens.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 58,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 202
    },
    {
      "Scene_lab": 58,
      "Story": "<i>Each augmented reality room simulates my past using sentient artificial intelligence agents.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 59,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 99
    },
    {
      "Scene_lab": 59,
      "Story": "<i>A time capsule, if you will, but more than that—the AI system of the house constantly draws data from each of these memories.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 60,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 132
    },
    {
      "Scene_lab": 60,
      "Story": "<i>From each simulation, it learns and updates the behavioral pattern of the AI agents. This enables me to interact with those agents and extract information that’s not explicitly in the recordings.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 61,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 202
    },
    {
      "Scene_lab": 61,
      "Story": "<i>My work can be dangerous. There are a lot of people that would prefer me dead. I used these rooms to document my life and to predict potential danger.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 62,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 157
    },
    {
      "Scene_lab": 62,
      "Story": "<i>The AI system of the house is completely disconnected from the internet to prevent a data leak.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 63,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 102
    },
    {
      "Scene_lab": 63,
      "Story": "<i>Under normal circumstances, if the system detected a future threat to my safety, the name of the potential killer would be sent directly to my lens when I walk into any room.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 64,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 181
    },
    {
      "Scene_lab": 64,
      "Story": "<i>Sadly, I’m not there, but I do have a Plan B—that’s where you enter.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 65,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 75
    },
    {
      "Scene_lab": 65,
      "Story": "<i>When the AI system of the house detects that the person entering the room is not me, it triggers a special mechanism.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 66,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 124
    },
    {
      "Scene_lab": 66,
      "Story": "<i>To avoid presenting the name to the wrong person, it shows the name of the killer in separate letters, each hinted by a clue, hidden in a separate room.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 67,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 159
    },
    {
      "Scene_lab": 67,
      "Story": "<i>Search for those clues in any of the rooms—the system knows to present the letters in sequence, and you’ll know you’ve found a clue when you see one.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 68,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 156
    },
    {
      "Scene_lab": 68,
      "Story": "<i>The system shortens the killer’s name to a three-letter abbreviation, so you’ll have to piece them together and determine their meaning.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 69,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 143
    },
    {
      "Scene_lab": 69,
      "Story": "<i>I’ll caution you: in each room, there’s a clock displaying a countdown to the room’s reset.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 70,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 98
    },
    {
      "Scene_lab": 70,
      "Story": "<i>No matter what, do not linger in a room beyond the time on its clock.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 71,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 76
    },
    {
      "Scene_lab": 71,
      "Story": "<i>Once you piece together a name, go to the basement and enter it into the black typewriter.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 72,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 97
    },
    {
      "Scene_lab": 72,
      "Story": "<i>That’s the only device in the house connected to the outside world, unhooked from the main system.</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 73,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 105
    },
    {
      "Scene_lab": 73,
      "Story": "<i>The name you enter there will be sent directly to the cloud, and you’re done.”</i>",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 74,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 85
    },
    {
      "Scene_lab": 74,
      "Story": "Lowering the note, you start toward the hallway, a bead of sweat dripping down your temple.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 75,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 92
    },
    {
      "Scene_lab": 75,
      "Story": "So…every room in here is an independent memory of the homeowner, and now, they're some key to solving his murder? This is crazy. You fold and unfold the note, pondering what to do.",
      "Choice": "Y",
      "Response_1": "You’ve got to get out of here.",
      "Response_2": "You’re going for the $100,000.",
      "Outcome_1": 76,
      "Outcome_2": 76,
      "Section": 2,
      "Storyline": 0,
      "NumChar": 180
    },
    {
      "Scene_lab": 76,
      "Story": "After all, life is short.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 77,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 25
    },
    {
      "Scene_lab": 77,
      "Story": "And you have terrible spatial orientation. Does this place have a map?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": [
        78,
        138,
        204
      ],
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 0,
      "NumChar": 71
    },
    {
      "Scene_lab": 78,
      "Story": "The cat reappears. You shoo it as you pass, starting to get freaked out by its silent gaze.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 79,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 91
    },
    {
      "Scene_lab": 79,
      "Story": "Re-entering the hallway, you search for the path to the door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 80,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 62
    },
    {
      "Scene_lab": 80,
      "Story": "The cat catches up, brushing your ankle as it launches itself onto the railing of a winding staircase.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 81,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 103
    },
    {
      "Scene_lab": 81,
      "Story": "Worried it’s going to get hurt, you follow it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 82,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 46
    },
    {
      "Scene_lab": 82,
      "Story": "You don’t even know its name, and you’re seriously unqualified to take care of a cat.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 83,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 85
    },
    {
      "Scene_lab": 83,
      "Story": "You didn’t even know the guy had one until it jump-scared you in the hallway.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 84,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 78
    },
    {
      "Scene_lab": 84,
      "Story": "You try to sound authoritative. “Cat, get down.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 85,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 49
    },
    {
      "Scene_lab": 85,
      "Story": "It doesn’t. Its head tilts to gaze at a chandelier.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 86,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 53
    },
    {
      "Scene_lab": 86,
      "Story": "Great. Not interested in the room full of fish but mesmerized by a ceiling fan that could lead to its death.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 87,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 108
    },
    {
      "Scene_lab": 87,
      "Story": "You crouch a bit, tiptoeing toward the cat.",
      "Choice": "Y",
      "Response_1": "You grab it from behind.",
      "Response_2": "You try to talk sense into it.",
      "Outcome_1": 88,
      "Outcome_2": 88,
      "Section": 2,
      "Storyline": 1,
      "NumChar": 44
    },
    {
      "Scene_lab": 88,
      "Story": "It hisses, turning and swatting at your face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 89,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 45
    },
    {
      "Scene_lab": 89,
      "Story": "You yelp, stumbling back.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 90,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 25
    },
    {
      "Scene_lab": 90,
      "Story": "Despite your best attempts to save it, the cat leaps from the banister and plunges to the ground with a faint “meow.”",
      "Choice": "Y",
      "Response_1": "You peer over the edge.",
      "Response_2": "You run down the steps.",
      "Outcome_1": 91,
      "Outcome_2": 91,
      "Section": 2,
      "Storyline": 1,
      "NumChar": 118
    },
    {
      "Scene_lab": 91,
      "Story": "You brace yourself for a mangled carcass.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 92,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 41
    },
    {
      "Scene_lab": 92,
      "Story": "Instead, you find the cat on its feet.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 93,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 38
    },
    {
      "Scene_lab": 93,
      "Story": "Rushing to the cat, you inspect it for damage. Nothing broken.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 94,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 63
    },
    {
      "Scene_lab": 94,
      "Story": "It strolls to a cracked door and pushes inside with its head.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 95,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 62
    },
    {
      "Scene_lab": 95,
      "Story": "You follow, awestruck at the spectacle of the room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 96,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 51
    },
    {
      "Scene_lab": 96,
      "Story": "A hundred people mill around a beach, some sitting in silver chairs, some perusing the menu of a floating bar.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 97,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 111
    },
    {
      "Scene_lab": 97,
      "Story": "From reading the letter, you know the world inside the room isn’t real. That the beach is some augmented reality simulation of the past.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 98,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 136
    },
    {
      "Scene_lab": 98,
      "Story": "Yet just like with the portrait, you really feel like these people are real.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 99,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 77
    },
    {
      "Scene_lab": 99,
      "Story": "You can smell the beach, and feel salt prickle your skin.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 100,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 58
    },
    {
      "Scene_lab": 100,
      "Story": "The memory is so vivid, it’s scary.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 101,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 36
    },
    {
      "Scene_lab": 101,
      "Story": "For a moment, you feel an urge to flee the scene – get out before anything crazy happens.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 102,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 90
    },
    {
      "Scene_lab": 102,
      "Story": "But since you’re already here…",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 103,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 30
    },
    {
      "Scene_lab": 103,
      "Story": "Someone dressed as a bride flashes an easy smile at you, approaching the doorway.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 104,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 82
    },
    {
      "Scene_lab": 104,
      "Story": "“There you are, August. Where have you been? It’s time for the ceremony.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 105,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 73
    },
    {
      "Scene_lab": 105,
      "Story": "She tugs on your arm, which rests against the doorframe, pulling you onto the sand. Before you realize, you’ve entered the room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 106,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 23
    },
    {
      "Scene_lab": 106,
      "Story": "“Everyone, put down your tequila and come watch me marry this man – before he takes off for Mexico.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 107,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 101
    },
    {
      "Scene_lab": 107,
      "Story": "She pauses, a mischievous twinkle in her eye. “Again.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 108,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 55
    },
    {
      "Scene_lab": 108,
      "Story": "You look down. In your hand is a diamond ring – the same one from the painting in the hallway.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 109,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 95
    },
    {
      "Scene_lab": 109,
      "Story": "The guests laugh, retreating to their seats, which you realize are arranged in the shape of a heart around the altar.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 110,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 118
    },
    {
      "Scene_lab": 110,
      "Story": "Oh – it must be time for your vows.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 111,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 36
    },
    {
      "Scene_lab": 111,
      "Story": "Or is it – what’s next at weddings?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 112,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 36
    },
    {
      "Scene_lab": 112,
      "Story": "You open your mouth to speak.",
      "Choice": "Y",
      "Response_1": "“Love you?”",
      "Response_2": "“Is this the part where we kiss?”",
      "Outcome_1": 113,
      "Outcome_2": 113,
      "Section": 2,
      "Storyline": 1,
      "NumChar": 30
    },
    {
      "Scene_lab": 113,
      "Story": "You figured all your words and actions would be pre-programmed.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 114,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 64
    },
    {
      "Scene_lab": 114,
      "Story": "Hard-wired into the room or something fancy.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 115,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 45
    },
    {
      "Scene_lab": 115,
      "Story": "Apparently not the case with sentient artificial intelligence.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 116,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 63
    },
    {
      "Scene_lab": 116,
      "Story": "You glance around the audience, eyes scanning the attendees.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 117,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 61
    },
    {
      "Scene_lab": 117,
      "Story": "Your gaze lingers on the sole empty chair.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 118,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 43
    },
    {
      "Scene_lab": 118,
      "Story": "The owner of the house had said you’d just know when you saw a clue. That it’d be obvious.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 119,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 90
    },
    {
      "Scene_lab": 119,
      "Story": "What’s more obvious than an empty chair in a sea of people?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 120,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 60
    },
    {
      "Scene_lab": 120,
      "Story": "The bride smacks your arm.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 121,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 27
    },
    {
      "Scene_lab": 121,
      "Story": "“You can’t seriously be thinking about that empty chair during our vows when you have a beautiful woman in front of you.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 122,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 122
    },
    {
      "Scene_lab": 122,
      "Story": "You stare at her, unsure whether you can go for the clue.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 123,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 58
    },
    {
      "Scene_lab": 123,
      "Story": "Whether there are rules in this strangely vivid memory.",
      "Choice": "Y",
      "Response_1": "You start toward it.",
      "Response_2": "You hold her hands.",
      "Outcome_1": 124,
      "Outcome_2": 124,
      "Section": 2,
      "Storyline": 1,
      "NumChar": 56
    },
    {
      "Scene_lab": 124,
      "Story": "As if on cue, you see a bright spot of red in your peripheral vision, as if the empty chair is bleeding.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 125,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 104
    },
    {
      "Scene_lab": 125,
      "Story": "You slip the ring on the bride’s finger, then jump off the platform and run to the chair.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 126,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 90
    },
    {
      "Scene_lab": 126,
      "Story": "You push past an old woman wearing a veil, her distant gaze looking through you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 127,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 81
    },
    {
      "Scene_lab": 127,
      "Story": "Odd choice of fashion for a wedding attendee.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 128,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 46
    },
    {
      "Scene_lab": 128,
      "Story": "Blood-soaked and centered in the seat is a copy of the book <i>The Scarlet Letter</i>.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 129,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 87
    },
    {
      "Scene_lab": 129,
      "Story": "Picking up the book, you make a run for the exit.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 130,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 50
    },
    {
      "Scene_lab": 130,
      "Story": "“August?” the bride shrieks from the altar.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 131,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 44
    },
    {
      "Scene_lab": 131,
      "Story": "You turn to watch her leap from the platform, feet digging trenches into the sand. She seems inhumanly strong.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 132,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 111
    },
    {
      "Scene_lab": 132,
      "Story": "Time to go. You turn and run for the open door, the book under your arm.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 133,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 73
    },
    {
      "Scene_lab": 133,
      "Story": "What happened to their marriage, in real-time, when you didn’t screw it up? Who’s the bride?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 134,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 93
    },
    {
      "Scene_lab": 134,
      "Story": "If you turn back, she might catch up, and you don’t want to know what happens if she does.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 135,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 91
    },
    {
      "Scene_lab": 135,
      "Story": "The timer above the door is at five minutes, so any delay could range from disastrous to fatal, whatever August meant in his letter.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 136,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 133
    },
    {
      "Scene_lab": 136,
      "Story": "You leap through the door and slam it shut, pushing your back against it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 137,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 74
    },
    {
      "Scene_lab": 137,
      "Story": "Seconds later, there’s a dull thud.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 249,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 1,
      "NumChar": 36
    },
    {
      "Scene_lab": 138,
      "Story": "Trumpets from a familiar school song sound in the distance.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 139,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 60
    },
    {
      "Scene_lab": 139,
      "Story": "You crane your neck, straining to listen.You follow the music to a red and yellow door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 140,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 89
    },
    {
      "Scene_lab": 140,
      "Story": "The paint reminds you of your college spirit colors from years ago. That’s odd.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 141,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 23
    },
    {
      "Scene_lab": 141,
      "Story": "You open the door and poke your head inside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 142,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 79
    },
    {
      "Scene_lab": 142,
      "Story": "Your feet are still in the mansion, but your head is in the freshman quad of your alma mater.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 143,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 45
    },
    {
      "Scene_lab": 143,
      "Story": "A parade passes by the sidewalk, red jerseys and chalked up faces celebrating your old school’s football team after what appears to be a win.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 144,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 94
    },
    {
      "Scene_lab": 144,
      "Story": "You can’t quite tell if it’s August’s memory or yours from a post-game parade, but it can’t be yours – right?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 145,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 141
    },
    {
      "Scene_lab": 145,
      "Story": "The hairstyles, the clothes, the vibes are just a little outdated. Plus, you don’t recognize a single person.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 146,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 110
    },
    {
      "Scene_lab": 146,
      "Story": "It’s settled. You and August just happened to go to the same public university.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 147,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 110
    },
    {
      "Scene_lab": 147,
      "Story": "It’s not like it’s a small community – there are hundreds of thousands of alums across the globe.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 148,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 80
    },
    {
      "Scene_lab": 148,
      "Story": "The memory is so vivid, it’s scary.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 149,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 99
    },
    {
      "Scene_lab": 149,
      "Story": "For a moment, you feel an urge to flee the scene – get out before anything crazy happens.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 150,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 36
    },
    {
      "Scene_lab": 150,
      "Story": "But since you’re already here…",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 151,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 90
    },
    {
      "Scene_lab": 151,
      "Story": "A face appears in front of you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 152,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 31
    },
    {
      "Scene_lab": 152,
      "Story": "A guy with a Mohawk offers you a beer. “Dude. Where’s your jacket?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 153,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 67
    },
    {
      "Scene_lab": 153,
      "Story": "You blink, scrambling for words.",
      "Choice": "Y",
      "Response_1": "“In my room.”",
      "Response_2": "“I lost it.”",
      "Outcome_1": 154,
      "Outcome_2": 154,
      "Section": 2,
      "Storyline": 2,
      "NumChar": 33
    },
    {
      "Scene_lab": 154,
      "Story": "He groans, lifting the beer he had offered you to his face and taking a swig.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 155,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 78
    },
    {
      "Scene_lab": 155,
      "Story": "“Come on.” He starts walking away, then pauses. “You coming or what?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 156,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 69
    },
    {
      "Scene_lab": 156,
      "Story": "You step gingerly inside the room, testing the ground. Seems solid.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 157,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 68
    },
    {
      "Scene_lab": 157,
      "Story": "You follow Mohawk guy to a familiar brown building.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 158,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 51
    },
    {
      "Scene_lab": 158,
      "Story": "Wait a minute. This was your freshman year dorm.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 159,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 48
    },
    {
      "Scene_lab": 159,
      "Story": "You follow him up the steps.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 160,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 29
    },
    {
      "Scene_lab": 160,
      "Story": "On autopilot, you reach to your chest and find a lanyard with an even more familiar key.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 161,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 89
    },
    {
      "Scene_lab": 161,
      "Story": "The only difference is that it’s missing the splash of red paint from a previous owner.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 162,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 88
    },
    {
      "Scene_lab": 162,
      "Story": "When you get to the third floor, Mohawk guy pulls a can of face paint from his bag. “Spirit paint time. Gotta support the team.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 163,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 129
    },
    {
      "Scene_lab": 163,
      "Story": "He goes to spray your face but you swat him away.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 164,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 50
    },
    {
      "Scene_lab": 164,
      "Story": "A cloud of red paint mists over your face and arm.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 165,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 51
    },
    {
      "Scene_lab": 165,
      "Story": "You freeze, lifting the key in your hand to your face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 166,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 55
    },
    {
      "Scene_lab": 166,
      "Story": "Surely enough, a smear of red paint landed at the base of the key.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 167,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 67
    },
    {
      "Scene_lab": 167,
      "Story": "Right where you remember its residue.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 168,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 38
    },
    {
      "Scene_lab": 168,
      "Story": "You rub the spot, but it doesn’t budge.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 169,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 39
    },
    {
      "Scene_lab": 169,
      "Story": "He gestures ahead. “After you. Forgot my keys.”",
      "Choice": "Y",
      "Response_1": "You try your old door.",
      "Response_2": "You try a different door.",
      "Outcome_1": 174,
      "Outcome_2": 170,
      "Section": 2,
      "Storyline": 2,
      "NumChar": 48
    },
    {
      "Scene_lab": 170,
      "Story": "He shoots you a look. “Really?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 171,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 31
    },
    {
      "Scene_lab": 171,
      "Story": "You clear your throat, approaching your old door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 172,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 49
    },
    {
      "Scene_lab": 172,
      "Story": "You insert your key and twist.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 173,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 31
    },
    {
      "Scene_lab": 173,
      "Story": "The door opens with no resistance. You enter.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 174,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 46
    },
    {
      "Scene_lab": 174,
      "Story": "On the shelf are various trophies and sports memorabilia, and a framed picture of what looks like some sort of student union or fraternity.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 175,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 139
    },
    {
      "Scene_lab": 175,
      "Story": "You look closer. There’s August, standing amongst a stone-faced group of black jumpsuits, each wearing a black pin on their left breast.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 176,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 137
    },
    {
      "Scene_lab": 176,
      "Story": "Mohawk guy plops down on the bed opposite you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 177,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 47
    },
    {
      "Scene_lab": 177,
      "Story": "Weirder and weirder – not only did you and August apparently go to the same college and live in the same freshman dorm room, you slept in the exact same bed.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 178,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 158
    },
    {
      "Scene_lab": 178,
      "Story": "What’s going on? Was this really a random job, or were you selected for some reason?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 179,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 85
    },
    {
      "Scene_lab": 179,
      "Story": "Something buzzes in your pocket.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 180,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 32
    },
    {
      "Scene_lab": 180,
      "Story": "You fish out a portable holographic device, pressing a button to start the message.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 181,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 83
    },
    {
      "Scene_lab": 181,
      "Story": "It projects the text into the air.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 182,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 35
    },
    {
      "Scene_lab": 182,
      "Story": "The text is from someone named “Sarah.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 183,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 39
    },
    {
      "Scene_lab": 183,
      "Story": "It’s an emoji stack of books with a clock.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 184,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 43
    },
    {
      "Scene_lab": 184,
      "Story": "Your throat feels like it’s lined with chalk.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 185,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 45
    },
    {
      "Scene_lab": 185,
      "Story": "Sarah is your mom’s name. There’s no way.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 186,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 41
    },
    {
      "Scene_lab": 186,
      "Story": "Mohawk guy wiggles his eyebrows. “Who are you texting?”",
      "Choice": "Y",
      "Response_1": "You show him the screen.",
      "Response_2": "You tuck your phone away.",
      "Outcome_1": 187,
      "Outcome_2": 187,
      "Section": 2,
      "Storyline": 2,
      "NumChar": 56
    },
    {
      "Scene_lab": 187,
      "Story": "“You see, it’s no one,” you say, swallowing hard.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 188,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 50
    },
    {
      "Scene_lab": 188,
      "Story": "She sent a stack of books, which must be code for the library.",
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
      "Story": "Maybe the clock means there’s some urgency – you have to go to the library right now.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 190,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 85
    },
    {
      "Scene_lab": 190,
      "Story": "Yes, there are a ton of Sarahs in the world, but you have to get to the bottom of this insanity.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 191,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 97
    },
    {
      "Scene_lab": 191,
      "Story": "Before he can protest, you bolt out the door and book it for the main library on campus.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 192,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 89
    },
    {
      "Scene_lab": 192,
      "Story": "When you arrive, you jog through the rows of books, looking for your mom.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 193,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 74
    },
    {
      "Scene_lab": 193,
      "Story": "You turn, eyes landing on a stranger with red hair.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 194,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 51
    },
    {
      "Scene_lab": 194,
      "Story": "Not your mom – different Sarah.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 195,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 32
    },
    {
      "Scene_lab": 195,
      "Story": "One that looks a lot like a younger version of August’s wife, who you saw on picture frames around his house.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 196,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 109
    },
    {
      "Scene_lab": 196,
      "Story": "She clutches a book to her chest. “Took you long enough. I need help.”",
      "Choice": "Y",
      "Response_1": "“Do you know me?”",
      "Response_2": "“What can I do?”",
      "Outcome_1": 197,
      "Outcome_2": 197,
      "Section": 2,
      "Storyline": 2,
      "NumChar": 71
    },
    {
      "Scene_lab": 197,
      "Story": "Suddenly, you remember that you’re supposed to be looking for a clue – something that jumps out at you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 198,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 104
    },
    {
      "Scene_lab": 198,
      "Story": "She pales. “You’re not August.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 199,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 32
    },
    {
      "Scene_lab": 199,
      "Story": "She takes a step back, voice dropping to a whisper. “Who are you?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 200,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 67
    },
    {
      "Scene_lab": 200,
      "Story": "Before you can answer, she drops the book and runs.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 201,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 52
    },
    {
      "Scene_lab": 201,
      "Story": "You debate whether you should run after her when you hear a ticking.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 202,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 69
    },
    {
      "Scene_lab": 202,
      "Story": "Looking up, you see a timer with 10 seconds floating above the emergency exit, which looks a lot like the mansion door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 203,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 121
    },
    {
      "Scene_lab": 203,
      "Story": "You’re out of time. You scoop up the book on your way out, escaping milliseconds before it beeps.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 249,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 2,
      "NumChar": 98
    },
    {
      "Scene_lab": 204,
      "Story": "Down the hall, the clock chimes.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 205,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 33
    },
    {
      "Scene_lab": 205,
      "Story": "Each chime is accompanied by a dull thud that grows increasingly urgent.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 206,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 73
    },
    {
      "Scene_lab": 206,
      "Story": "It sounds almost like a racing heartbeat.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 207,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 42
    },
    {
      "Scene_lab": 207,
      "Story": "You track the thudding to a door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 208,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 34
    },
    {
      "Scene_lab": 208,
      "Story": "You raise your fist to knock, then pause.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 209,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 42
    },
    {
      "Scene_lab": 209,
      "Story": "There’s no one in there to answer, you remind yourself – it’s just a memory.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 210,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 77
    },
    {
      "Scene_lab": 210,
      "Story": "You rest your hand on the knob and twist, entering.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 211,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 52
    },
    {
      "Scene_lab": 211,
      "Story": "It looks like an entirely different world.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 212,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 43
    },
    {
      "Scene_lab": 212,
      "Story": "Brass pipes lace together a hundred feet above your head, lamps framing the room and casting yellow light across a dozen solemn faces.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 213,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 135
    },
    {
      "Scene_lab": 213,
      "Story": "Everyone wears black jumpsuits, adorned with a black pentagon pin on their left breast.The pattern engraved on the pin is oddly complex",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 214,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 136
    },
    {
      "Scene_lab": 214,
      "Story": "You look down at yourself – you’re outfitted the same way.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 215,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 59
    },
    {
      "Scene_lab": 215,
      "Story": "A glass dome, large enough to fit a studio apartment into, takes up most of the ground floor. Everyone is gathered near the glass, watching intently.",
      "Choice": "Y",
      "Response_1": "You join the group to watch.",
      "Response_2": "You linger in the back.",
      "Outcome_1": 216,
      "Outcome_2": 216,
      "Section": 2,
      "Storyline": 3,
      "NumChar": 149
    },
    {
      "Scene_lab": 216,
      "Story": "At the center of the dome, a man sports bulky goggles.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 217,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 55
    },
    {
      "Scene_lab": 217,
      "Story": "His forehead drips with sweat as he fiddles with some sort of control panel.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 218,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 77
    },
    {
      "Scene_lab": 218,
      "Story": "Around him, a scene glitches in and out of focus – it looks like a kid’s room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 219,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 79
    },
    {
      "Scene_lab": 219,
      "Story": "Toys litter the floor. A kid sits in a twin-sized bed, clutching a stuffed elephant and staring at the man.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 220,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 108
    },
    {
      "Scene_lab": 220,
      "Story": "He glances up at the timer floating above his head, then looks directly at you. “August – you gotta help me, man.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 221,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 115
    },
    {
      "Scene_lab": 221,
      "Story": "You don’t know what’ll happen when the timer goes off, but based on his shaking hands, it seems disastrous.",
      "Choice": "Y",
      "Response_1": "You remain silent.",
      "Response_2": "You approach him.",
      "Outcome_1": 222,
      "Outcome_2": 222,
      "Section": 2,
      "Storyline": 3,
      "NumChar": 108
    },
    {
      "Scene_lab": 222,
      "Story": "A firm hand rests on your shoulder. “Dad, it’s his fight.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 223,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 59
    },
    {
      "Scene_lab": 223,
      "Story": "You look to your right. It’s a young man in a black jumpsuit, a black pin, and the same wide-set jaw as August himself.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 224,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 120
    },
    {
      "Scene_lab": 224,
      "Story": "The man in the dome lets out a scream, banging on the glass with a fist. “August, you swore.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 225,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 94
    },
    {
      "Scene_lab": 225,
      "Story": "The timer beeps. He curses, twisting a wire with a set of pliers and glancing back at the timer. Thirty seconds.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 226,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 113
    },
    {
      "Scene_lab": 226,
      "Story": "A woman walks forward from the crowd.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 227,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 37
    },
    {
      "Scene_lab": 227,
      "Story": "Intrigued, you notice that her pin is red.Why the difference?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 228,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 62
    },
    {
      "Scene_lab": 228,
      "Story": "She addresses the room with stoic assurance. “We demand excellence in the construction of our simulations, and that standard trickles down to our employees.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 229,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 157
    },
    {
      "Scene_lab": 229,
      "Story": "Can’t complete the assessments, Bernard? Not our problem.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 230,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 59
    },
    {
      "Scene_lab": 230,
      "Story": "The man, Bernard, sits back, defeated. “You remember that song I wrote for Jimmy, Aug?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 231,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 87
    },
    {
      "Scene_lab": 231,
      "Story": "He rubs his face. “I’m about to forget everything, so I want you to find him and give him the disc. It’s taped to the back of the book.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 232,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 137
    },
    {
      "Scene_lab": 232,
      "Story": "He peers into the crowd, gestures at you a man who’s holding a book, and looks back at you, as if pleading for your promise.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 233,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 35
    },
    {
      "Scene_lab": 233,
      "Story": "The timer goes off. He slumps over.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 234,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 112
    },
    {
      "Scene_lab": 234,
      "Story": "The other people in the room walk away, unfazed. August’s son looks back at you, sighs, then walks briskly off.",
      "Choice": "Y",
      "Response_1": "You retrieve the book.",
      "Response_2": "You run to the glass.",
      "Outcome_1": 240,
      "Outcome_2": 235,
      "Section": 2,
      "Storyline": 3,
      "NumChar": 23
    },
    {
      "Scene_lab": 235,
      "Story": "“Hey! Bernard!” Tapping on the glass, you hope to get some response.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 236,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 69
    },
    {
      "Scene_lab": 236,
      "Story": "He’s lying silently on the floor. You can’t tell if he’s dead.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 237,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 105
    },
    {
      "Scene_lab": 237,
      "Story": "You peer around the empty dome. Seems to be an early version of the simulation-style rooms August built.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 238,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 94
    },
    {
      "Scene_lab": 238,
      "Story": "A man appears at your side and holds the book out to you–the man that Bernard had gestured to.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 239,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 82
    },
    {
      "Scene_lab": 239,
      "Story": "“I’m sorry – I know he was your friend,” he says. You take it, nodding. He exits.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 240,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 23
    },
    {
      "Scene_lab": 240,
      "Story": "The book glimmers faintly, out-of-place in the otherwise dark-toned ambiance of the room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 241,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 89
    },
    {
      "Scene_lab": 241,
      "Story": "It’s probably what August wanted you to find – it has to be. Nothing else emerges as significant.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 242,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 98
    },
    {
      "Scene_lab": 242,
      "Story": "There’s shuffling. Your head snaps up.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 243,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 38
    },
    {
      "Scene_lab": 243,
      "Story": "Bernard is already on his feet. He wears a blank expression, making his way to the other corner of the dome.Then, he smiles down at something.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 244,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 143
    },
    {
      "Scene_lab": 244,
      "Story": "The kid’s bedroom flickers in and out again, and when it flashes you can see the kid laughing at him.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 245,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 23
    },
    {
      "Scene_lab": 245,
      "Story": "When it’s gone, he’s just smiling at an empty room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 246,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 102
    },
    {
      "Scene_lab": 246,
      "Story": "He’s mentally lost in the simulated memory he failed to complete. The idea creeps you out.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 247,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 52
    },
    {
      "Scene_lab": 247,
      "Story": "Tucking the book under your arm, you retrace your steps back to the simulation exit and step back into the hallway.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 248,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 91
    },
    {
      "Scene_lab": 248,
      "Story": "Squeezing your eyes shut, you sag to the floor, hugging the book to your chest.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 249,
      "Outcome_2": "NA",
      "Section": 2,
      "Storyline": 3,
      "NumChar": 116
    },
    {
      "Scene_lab": 249,
      "Story": "The world inside was uncanny, like you’d been physically transported to some alternate reality.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 250,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 80
    },
    {
      "Scene_lab": 250,
      "Story": "You wish you could run home and forget all about this. Just shut out the world, prop up a blank canvas you can’t afford and paint something blue.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 251,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 96
    },
    {
      "Scene_lab": 251,
      "Story": "But now that you’ve already gone to a room and are probably holding the very first clue, it seems stupid to give up the $100,000 reward.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 252,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 147
    },
    {
      "Scene_lab": 252,
      "Story": "You’ve had a few setbacks in life, but you deserve a win.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 253,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 23
    },
    {
      "Scene_lab": 253,
      "Story": "Re-invigorated, you flip the book open and leaf through it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 254,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 138
    },
    {
      "Scene_lab": 254,
      "Story": "After dozens of pages of crowded text, a page with the blood-soaked title <i>The Scarlet Letter</i> appears. So this is where the actual book starts?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 255,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 58
    },
    {
      "Scene_lab": 255,
      "Story": "You keep flipping through the pages, but slowing down a bit.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 256,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 61
    },
    {
      "Scene_lab": 256,
      "Story": "There’s a lump in-between two of the pages – maybe that’s the clue.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 257,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 68
    },
    {
      "Scene_lab": 257,
      "Story": "Spindly legs stick out from the fuzzy body of…",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 258,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 46
    },
    {
      "Scene_lab": 258,
      "Story": "A spider.",
      "Choice": "Y",
      "Response_1": "You fling the spider across the room.",
      "Response_2": "You slam the book shut.",
      "Outcome_1": 259,
      "Outcome_2": 259,
      "Section": 3,
      "Storyline": 0,
      "NumChar": 10
    },
    {
      "Scene_lab": 259,
      "Story": "Dropping the book on the floor and wiping your hand on your pants, you spot a bathroom.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 260,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 88
    },
    {
      "Scene_lab": 260,
      "Story": "Stumbling inside, you run the water, splashing it on your face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 261,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 64
    },
    {
      "Scene_lab": 261,
      "Story": "Gotta keep your eyes on the prize.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 262,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 35
    },
    {
      "Scene_lab": 262,
      "Story": "Get out of debt to society, start making real money that can change your life in real ways.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 263,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 92
    },
    {
      "Scene_lab": 263,
      "Story": "You pull a paper towel square off its roll.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 264,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 43
    },
    {
      "Scene_lab": 264,
      "Story": "As the roll swivels, a dark blob appears.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 265,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 42
    },
    {
      "Scene_lab": 265,
      "Story": "Come on. Not another spider – your arachnophobia prevents you from investigating further.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 266,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 90
    },
    {
      "Scene_lab": 266,
      "Story": "You peer across the hall, eyes landing on the spider-contaminated book.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 267,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 72
    },
    {
      "Scene_lab": 267,
      "Story": "You’ll come back for the book – you still have a couple more clues to collect before you can piece them together.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 268,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 114
    },
    {
      "Scene_lab": 268,
      "Story": "You dunk the paper towel into the trash can, eyes snapping to the next hallway.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 269,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 80
    },
    {
      "Scene_lab": 269,
      "Story": "Two doors suddenly have activity beneath the cracks.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 270,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 53
    },
    {
      "Scene_lab": 270,
      "Story": "Sunlight spills out from under one. Shadows move below the other.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 271,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 66
    },
    {
      "Scene_lab": 271,
      "Story": "You rub your eye with a fist staring at the two unknown destinations.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 272,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 70
    },
    {
      "Scene_lab": 272,
      "Story": "You know if you don’t continue clue-hunting in this spider-infested house this instant, you might not continue at all.",
      "Choice": "Y",
      "Response_1": "You open the door with sunlight.",
      "Response_2": "You open the door with shadows.",
      "Outcome_1": 273,
      "Outcome_2": 273,
      "Section": 3,
      "Storyline": 0,
      "NumChar": 119
    },
    {
      "Scene_lab": 273,
      "Story": "Stepping inside, you only have a second to soak in your surroundings before someone shoves you to the ground.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 274,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 110
    },
    {
      "Scene_lab": 274,
      "Story": "You land on your palms, which feel scratchy from the hay, and glance at the attacker – a woman.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 275,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 96
    },
    {
      "Scene_lab": 275,
      "Story": "Behind her head, the clouds move at an alarming pace.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 276,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 54
    },
    {
      "Scene_lab": 276,
      "Story": "The sky in the distance looks ready to erupt.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 277,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 46
    },
    {
      "Scene_lab": 277,
      "Story": "Rows of horse stalls extend a hundred feet before you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 278,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 55
    },
    {
      "Scene_lab": 278,
      "Story": "The woman extends her hand. You take it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 279,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 41
    },
    {
      "Scene_lab": 279,
      "Story": "She squints at you, hoisting you to your feet.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 280,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 47
    },
    {
      "Scene_lab": 280,
      "Story": "“If I didn’t know better, I’d say you’re getting rusty. I couldn’t hold you for nothing when we were kids. You’ve changed since you started working for them. Those weirdos at that fancy college of yours.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 281,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 204
    },
    {
      "Scene_lab": 281,
      "Story": "What does she know? Who is she?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 282,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 32
    },
    {
      "Scene_lab": 282,
      "Story": "“Your fiancée, too. A $5000 engagement ring, for chrissake. Hopefully you still know how to clean a horseshoe, unlike your city girl.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 283,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 135
    },
    {
      "Scene_lab": 283,
      "Story": "Clean a horseshoe? You can’t even clean a person-shoe.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 284,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 55
    },
    {
      "Scene_lab": 284,
      "Story": "Still, the second clue has to be around here.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 285,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 46
    },
    {
      "Scene_lab": 285,
      "Story": "You manage a smile despite your utter lack of ranching knowledge, which probably twists your face into some pained or horrified expression.",
      "Choice": "Y",
      "Response_1": "“Of course, I remember.”",
      "Response_2": "“Where are the horseshoes?”",
      "Outcome_1": 286,
      "Outcome_2": 286,
      "Section": 3,
      "Storyline": 0,
      "NumChar": 140
    },
    {
      "Scene_lab": 286,
      "Story": "She smacks your chest, laughing at your facial expression. “Those textbooks didn’t erase your humor.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 287,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 102
    },
    {
      "Scene_lab": 287,
      "Story": "She starts toward a blue barn, calling over her shoulder. “Better hurry…looks like another storm is brewing.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 288,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 110
    },
    {
      "Scene_lab": 288,
      "Story": "You walk hesitantly past each stall, searching for anything that seems out of place, just like when you found the first clue.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 289,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 125
    },
    {
      "Scene_lab": 289,
      "Story": "The stall doors look like wire fences, so you can see inside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 290,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 62
    },
    {
      "Scene_lab": 290,
      "Story": "For the first few, all you see are piles of poop, saddles, and horses.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 291,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 71
    },
    {
      "Scene_lab": 291,
      "Story": "That is, until Stall #10.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 292,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 26
    },
    {
      "Scene_lab": 292,
      "Story": "One horse wears a bright red horseshoe. You take a deep breath, opening the door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 293,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 82
    },
    {
      "Scene_lab": 293,
      "Story": "The horseshoe has to be the clue.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 294,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 33
    },
    {
      "Scene_lab": 294,
      "Story": "But how to remove it from the large animal breathing in your face?",
      "Choice": "Y",
      "Response_1": "You hold out a hand.",
      "Response_2": "You crouch down.",
      "Outcome_1": 295,
      "Outcome_2": 295,
      "Section": 3,
      "Storyline": 0,
      "NumChar": 67
    },
    {
      "Scene_lab": 295,
      "Story": "The horse huffs at you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 296,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 24
    },
    {
      "Scene_lab": 296,
      "Story": "You reach for the red shoe as a clap of thunder shakes the earth, lightning flashing in the distance.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 297,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 102
    },
    {
      "Scene_lab": 297,
      "Story": "The horse freaks out, neighing and trying to kick the wall down.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 298,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 65
    },
    {
      "Scene_lab": 298,
      "Story": "The other horses react similarly, their panic echoing.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 299,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 55
    },
    {
      "Scene_lab": 299,
      "Story": "You dive from the stable and latch the door behind you, stumbling forward and staring at the yellow sky.",
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
      "Story": "Panting, you assess the situation.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 301,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 35
    },
    {
      "Scene_lab": 301,
      "Story": "You try to remind yourself that the horse, the storm, and the stable aren’t real. That you’re here to find a clue and earn that $100,000.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 302,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 138
    },
    {
      "Scene_lab": 302,
      "Story": "Yet you’re missing the one thing that can keep you on track: the clue.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 303,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 71
    },
    {
      "Scene_lab": 303,
      "Story": "A door materializes before you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 304,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 32
    },
    {
      "Scene_lab": 304,
      "Story": "And not just any door – the exit, as indicated by the ornate symbol at the top that matches the one you saw at the entrance to August’s mansion.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 305,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 144
    },
    {
      "Scene_lab": 305,
      "Story": "You fling the door open and leap through.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 306,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 42
    },
    {
      "Scene_lab": 306,
      "Story": "You’re back in the mansion, free from the simulation.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 307,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 53
    },
    {
      "Scene_lab": 307,
      "Story": "You spin around, trying to orient yourself.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": [
        308,
        384,
        491
      ],
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 0,
      "NumChar": 44
    },
    {
      "Scene_lab": 308,
      "Story": "There’s a woman leaning in the doorway that you escaped through.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 309,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 65
    },
    {
      "Scene_lab": 309,
      "Story": "On her finger is the same diamond ring, the one you slipped on her finger earlier.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 310,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 82
    },
    {
      "Scene_lab": 310,
      "Story": "His wife.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 311,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 10
    },
    {
      "Scene_lab": 311,
      "Story": "What’s happening? Who is who-?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 312,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 31
    },
    {
      "Scene_lab": 312,
      "Story": "The woman in the doorway is older.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 313,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 35
    },
    {
      "Scene_lab": 313,
      "Story": "She looks exactly like that painting in the hallway from earlier.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 314,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 66
    },
    {
      "Scene_lab": 314,
      "Story": "But why are you seeing his wife beyond the door after coming out of the exit beyond the door?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 315,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 93
    },
    {
      "Scene_lab": 315,
      "Story": "Maybe it’s another AI room? Did you just hop from one simulation room to another? Or maybe you’re in a simulation within a simulation?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 316,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 135
    },
    {
      "Scene_lab": 316,
      "Story": "The indestructible cat slinks between her legs, purring.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 317,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 57
    },
    {
      "Scene_lab": 317,
      "Story": "“August,” the woman in the doorway says with a sternness in her voice. “You’ve been working in here for hours. Leave it be. Come to breakfast, lunch, dinner, I don’t care. Just come.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 318,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 184
    },
    {
      "Scene_lab": 318,
      "Story": "What? So the ranch, the horses, ‘your’ sister–everything was just a room within the room?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 319,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 89
    },
    {
      "Scene_lab": 319,
      "Story": "So you are still in the second room, but the room is actually about ‘you’ working to construct a ‘room’ back then. As if things couldn't get any weirder.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 320,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 153
    },
    {
      "Scene_lab": 320,
      "Story": "Your arms cross without you moving. Lips produce words without you speaking. “Well, which is it? Breakfast, lunch, or dinner?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 321,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 127
    },
    {
      "Scene_lab": 321,
      "Story": "That’s new. For whatever reason, you no longer have the agency to speak to these somewhat ghosts.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 322,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 98
    },
    {
      "Scene_lab": 322,
      "Story": "Must be an important memory.",
      "Choice": "Y",
      "Response_1": "You let the story continue undisturbed.",
      "Response_2": "You try to regain control.",
      "Outcome_1": 325,
      "Outcome_2": 323,
      "Section": 3,
      "Storyline": 1,
      "NumChar": 29
    },
    {
      "Scene_lab": 323,
      "Story": "You flex a few fingers. Cough. Okay, good.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 324,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 42
    },
    {
      "Scene_lab": 324,
      "Story": "Now that you’ve confirmed freedom, you’re ready to sit back and observe again.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 325,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 79
    },
    {
      "Scene_lab": 325,
      "Story": "From the other side of the door, August’s sister glances at you two, holding a hand to her face to block the wind. “Who is that? What…?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 326,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 137
    },
    {
      "Scene_lab": 326,
      "Story": "On autopilot, you cut her off by punching a pattern into seemingly thin air, as if on a keypad.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 327,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 97
    },
    {
      "Scene_lab": 327,
      "Story": "She freezes – as does the roaring from the room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 328,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 49
    },
    {
      "Scene_lab": 328,
      "Story": "Interesting – there is a way to get the rooms’ inhabitants to not attack you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 329,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 78
    },
    {
      "Scene_lab": 329,
      "Story": "The older wife lets out a sob.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 330,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 31
    },
    {
      "Scene_lab": 330,
      "Story": "Trippy – you’re experiencing a memory of August interacting with his real wife while he was working on one of the simulation rooms.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 331,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 132
    },
    {
      "Scene_lab": 331,
      "Story": "This second room is becoming increasingly complex.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 332,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 51
    },
    {
      "Scene_lab": 332,
      "Story": "“I never see you, Aug,” says August’s wife.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 333,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 44
    },
    {
      "Scene_lab": 333,
      "Story": "“It’s been months since we’ve had a normal conversation that isn’t about your work and this stupid house. I never thought…”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 334,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 124
    },
    {
      "Scene_lab": 334,
      "Story": "Her voice breaks. “I never thought I’d lose you to it.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 335,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 56
    },
    {
      "Scene_lab": 335,
      "Story": "You walk past her, shutting the door to the ranch.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 336,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 51
    },
    {
      "Scene_lab": 336,
      "Story": "“You didn’t lose anything. I’m standing right here. Sometimes, your flair for exaggeration really blows things out of proportion.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 337,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 130
    },
    {
      "Scene_lab": 337,
      "Story": "She scoffs and storms away. Her footsteps pound on the staircase.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 338,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 66
    },
    {
      "Scene_lab": 338,
      "Story": "You retreat to August’s office and open a file cabinet.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 339,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 56
    },
    {
      "Scene_lab": 339,
      "Story": "You retrieve a folder with the word “CLASSIFIED” stamped in bright red across the top.",
      "Choice": "Y",
      "Response_1": "You look out the window.",
      "Response_2": "You flip it open.",
      "Outcome_1": 340,
      "Outcome_2": 342,
      "Section": 3,
      "Storyline": 1,
      "NumChar": 87
    },
    {
      "Scene_lab": 340,
      "Story": "Outside, a fluffy coat of snow covers the ground beneath the meticulously-trimmed hedges in the garden.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 341,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 103
    },
    {
      "Scene_lab": 341,
      "Story": "The world outside this house looks so normal – even in the backyard – but the world inside is full of secrets and sci-fi-level tech. The juxtaposition is curious.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 344,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 162
    },
    {
      "Scene_lab": 342,
      "Story": "It’s just a bunch of squiggles. You glance through a few pages. Maybe some sort of code?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 343,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 89
    },
    {
      "Scene_lab": 343,
      "Story": "There’s a weird symbol at the bottom of each page that looks vaguely familiar.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 344,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 80
    },
    {
      "Scene_lab": 344,
      "Story": "An alarm sounds from the floor above.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 345,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 38
    },
    {
      "Scene_lab": 345,
      "Story": "You glance at the computer – it reads “room reset error.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 346,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 58
    },
    {
      "Scene_lab": 346,
      "Story": "Tossing the folder to the desk, you race up the stairs, calling the wife’s name. “Grace? Grace, where are you?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 347,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 112
    },
    {
      "Scene_lab": 347,
      "Story": "You run to the hallway and then from door to door, yanking them open in a frenzy.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 348,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 81
    },
    {
      "Scene_lab": 348,
      "Story": "She’s nowhere. It seems impossible, but if there was someone upstairs a minute ago, they’re long gone.",
      "Choice": "Y",
      "Response_1": "You keep looking.",
      "Response_2": "You give up.",
      "Outcome_1": 349,
      "Outcome_2": 349,
      "Section": 3,
      "Storyline": 1,
      "NumChar": 103
    },
    {
      "Scene_lab": 349,
      "Story": "Just when you think it’s hopeless, you hear a final banging coming from the door to your left.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 350,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 95
    },
    {
      "Scene_lab": 350,
      "Story": "The wedding room. To be exact, it’s the wedding room in this copy of the house—all inside of a simulation room. The actual Grace must be trapped inside!",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 351,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 153
    },
    {
      "Scene_lab": 351,
      "Story": "You yank the door open to see the back of Grace’s head.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 352,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 56
    },
    {
      "Scene_lab": 352,
      "Story": "Her Augmented Reality version, the youngest version you saw in the first room, stands in front of her, lifting a veil and placing it on her head.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 353,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 146
    },
    {
      "Scene_lab": 353,
      "Story": "Your eyes blur as realization sinks in.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 354,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 40
    },
    {
      "Scene_lab": 354,
      "Story": "The timer in the wedding room must’ve gone off, meaning the room reset with the real-life Grace still visiting the memory.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 355,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 122
    },
    {
      "Scene_lab": 355,
      "Story": "So all those years ago, when Grace stormed off, she must have somehow over-stayed in a simulation room and gotten trapped.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 356,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 126
    },
    {
      "Scene_lab": 356,
      "Story": "You recognize the veiled old woman from the wedding – she’s August’s real wife, present day – she’s all human, no AI or tech.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 357,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 123
    },
    {
      "Scene_lab": 357,
      "Story": "That’s why she seemed so out of place.She’s a fully breathing, non-recorded person stuck in this house’s altered reality.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 358,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 23
    },
    {
      "Scene_lab": 358,
      "Story": "If you stay in a room past its timer, you too could be indefinitely lost in the memory.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 359,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 88
    },
    {
      "Scene_lab": 359,
      "Story": "And based on August’s warning in his note, maybe it isn’t restricted to the people he practically AI-cloned to exist in these rooms.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 360,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 133
    },
    {
      "Scene_lab": 360,
      "Story": "Why would he invent something like this?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 361,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 41
    },
    {
      "Scene_lab": 361,
      "Story": "What about his work could be worth protecting at the expense of real people, of his wife?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 362,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 90
    },
    {
      "Scene_lab": 362,
      "Story": "His wife, the older version in the veil, turns to face you, smiling.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 363,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 69
    },
    {
      "Scene_lab": 363,
      "Story": "“There you are, August. Where have you been? It’s time for the ceremony.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 364,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 74
    },
    {
      "Scene_lab": 364,
      "Story": "The exact same words as the first room, too.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 365,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 44
    },
    {
      "Scene_lab": 365,
      "Story": "Hold on…how are you doing on time?",
      "Choice": "Y",
      "Response_1": "You need to find the exit.",
      "Response_2": "You try to talk some sense into her.",
      "Outcome_1": 368,
      "Outcome_2": 366,
      "Section": 3,
      "Storyline": 1,
      "NumChar": 35
    },
    {
      "Scene_lab": 366,
      "Story": "“Hey—,” you start, stopping when you make eye contact.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 367,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 55
    },
    {
      "Scene_lab": 367,
      "Story": "Something’s different in her eyes – and you don’t want it in yours.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 368,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 68
    },
    {
      "Scene_lab": 368,
      "Story": "This isn’t real.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 369,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 17
    },
    {
      "Scene_lab": 369,
      "Story": "August’s real wife tugs on your arm, pulling you onto the sand.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 370,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 64
    },
    {
      "Scene_lab": 370,
      "Story": "No way. You’re taking back control of your body.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 371,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 50
    },
    {
      "Scene_lab": 371,
      "Story": "You trace your finger through the air, replicating the pattern you’d instinctively typed in the air earlier. Everyone freezes.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 372,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 127
    },
    {
      "Scene_lab": 372,
      "Story": "You glance up and search for the timer, turning in a circle.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 373,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 61
    },
    {
      "Scene_lab": 373,
      "Story": "There it is, floating above the heads of frozen people. Three seconds?!",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 374,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 72
    },
    {
      "Scene_lab": 374,
      "Story": "An exit materializes to your left.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 375,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 35
    },
    {
      "Scene_lab": 375,
      "Story": "You surge through the doorway just as you hear the timer beep above your head.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 376,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 79
    },
    {
      "Scene_lab": 376,
      "Story": "You pant, turning to face the room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 377,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 36
    },
    {
      "Scene_lab": 377,
      "Story": "All faces go slack. People shuffle to what are likely their starting places.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 378,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 77
    },
    {
      "Scene_lab": 378,
      "Story": "You close the door with a shaking hand, reflecting on your life choices – and the bizarre second room, a house within a room, you just escaped.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 379,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 144
    },
    {
      "Scene_lab": 379,
      "Story": "Yes, you’ve taken the term “starving artist” a little too literally sometimes, but geez…how far are you willing to go?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 380,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 119
    },
    {
      "Scene_lab": 380,
      "Story": "You start toward the front door, then stop.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 381,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 44
    },
    {
      "Scene_lab": 381,
      "Story": "There’s a real old woman in this house who might not be able to take care of herself.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 382,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 86
    },
    {
      "Scene_lab": 382,
      "Story": "August must have been feeding her, but now that he’s gone…is it moral to walk away? Then what happens to her?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 556,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 1,
      "NumChar": 110
    },
    {
      "Scene_lab": 383,
      "Story": "Your eyes snag on a door with a peculiar tint.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 384,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 46
    },
    {
      "Scene_lab": 384,
      "Story": "As you near it, you realize the door is made of a much different material than the rest in its hall – it’s metal.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 385,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 115
    },
    {
      "Scene_lab": 385,
      "Story": "Indiscernible from a distance but haunting up-close, three words jump out at you, letters appearing to have been scratched in a hurry.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 386,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 135
    },
    {
      "Scene_lab": 386,
      "Story": "“Leave me alone.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 387,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 18
    },
    {
      "Scene_lab": 387,
      "Story": "You gasp, glancing over your shoulder to make sure you’re alone.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 388,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 65
    },
    {
      "Scene_lab": 388,
      "Story": "Could that message be aimed at you?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 389,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 36
    },
    {
      "Scene_lab": 389,
      "Story": "Is there another real person in this house – not an AI representation of the past, but a living, breathing human with zero bytes in their DNA?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 390,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 143
    },
    {
      "Scene_lab": 390,
      "Story": "Is August’s killer watching you?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 391,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 33
    },
    {
      "Scene_lab": 391,
      "Story": "After a moment of stillness, you shake your head.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 392,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 50
    },
    {
      "Scene_lab": 392,
      "Story": "Clearly, you’ve been watching too many crime shows.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 393,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 52
    },
    {
      "Scene_lab": 393,
      "Story": "You get the sense there isn’t a traditional clue in this room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 394,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 62
    },
    {
      "Scene_lab": 394,
      "Story": "It clearly wasn’t designed in the same way as the others, and you definitely don’t vibe with nightmarish energy it’s giving off.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 395,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 129
    },
    {
      "Scene_lab": 395,
      "Story": "Is it even worth entering and risking lost time or danger?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 396,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 59
    },
    {
      "Scene_lab": 396,
      "Story": "From the odd look of it, you don’t think it will contain any clues.",
      "Choice": "Y",
      "Response_1": "Yes – what’s life without adventure?",
      "Response_2": "No way – time is of the essence.",
      "Outcome_1": 399,
      "Outcome_2": 397,
      "Section": 3,
      "Storyline": 2,
      "NumChar": 68
    },
    {
      "Scene_lab": 397,
      "Story": "Unless some sign drops from the sky, you’re better off spending time in a room that’s more likely to further your clue search.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 398,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 127
    },
    {
      "Scene_lab": 398,
      "Story": "The door creaks open a few inches. You freeze. Seems like a sign to you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 399,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 73
    },
    {
      "Scene_lab": 399,
      "Story": "Fingernails biting into your palms, you push the metal door open and enter the strange room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 400,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 94
    },
    {
      "Scene_lab": 400,
      "Story": "It’s…an ice cream store. A jingle plays from above your head as you step inside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 401,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 81
    },
    {
      "Scene_lab": 401,
      "Story": "A wraparound railing studded with candy-shaped beads, an ice cream cone chandelier hanging from the ceiling.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 402,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 109
    },
    {
      "Scene_lab": 402,
      "Story": "The location is unmistakable – it’s not just any ice cream store. It’s the one where you worked throughout high school.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 403,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 119
    },
    {
      "Scene_lab": 403,
      "Story": "Maybe you shouldn’t have come. The compounding coincidences are getting too eerie, too fast.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 404,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 93
    },
    {
      "Scene_lab": 404,
      "Story": "“August.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 405,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 10
    },
    {
      "Scene_lab": 405,
      "Story": "You turn to see a teenage boy with a wide jaw.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 406,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 47
    },
    {
      "Scene_lab": 406,
      "Story": "He wears a varsity sports jacket from your old high school.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 407,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 60
    },
    {
      "Scene_lab": 407,
      "Story": "He doesn’t seem familiar, though. Maybe he was there during a different time frame.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 408,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 84
    },
    {
      "Scene_lab": 408,
      "Story": "Without trying to react, your face breaks open into a wide smile.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 409,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 66
    },
    {
      "Scene_lab": 409,
      "Story": "Lips produce words without you speaking.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 410,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 41
    },
    {
      "Scene_lab": 410,
      "Story": "“Son, what have I said about you calling me by my first name? I’m good with any variant of ‘dad,’ ‘father,’ ‘sir.’” You clear your throat. “Kidding about the ‘sir.’”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 411,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 166
    },
    {
      "Scene_lab": 411,
      "Story": "That’s new. For whatever reason, you no longer have the agency to speak to these somewhat ghosts. Must be an important memory.",
      "Choice": "Y",
      "Response_1": "You let the story continue undisturbed.",
      "Response_2": "You try to regain control.",
      "Outcome_1": 414,
      "Outcome_2": 412,
      "Section": 3,
      "Storyline": 2,
      "NumChar": 127
    },
    {
      "Scene_lab": 412,
      "Story": "You flex a few fingers. Cough. Okay, good.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 413,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 42
    },
    {
      "Scene_lab": 413,
      "Story": "Now that you’ve confirmed freedom, you’re ready to sit back and observe again.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 414,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 79
    },
    {
      "Scene_lab": 414,
      "Story": "August’s son wears a perpetual scowl, eyes cast down. “Whatever.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 415,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 66
    },
    {
      "Scene_lab": 415,
      "Story": "He stands. “Let’s get this over with – I have plans with my friends.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 416,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 70
    },
    {
      "Scene_lab": 416,
      "Story": "He stands and brushes past you. Silently, you follow him to the counter.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 417,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 73
    },
    {
      "Scene_lab": 417,
      "Story": "August doesn’t seem to know what to say.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 418,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 41
    },
    {
      "Scene_lab": 418,
      "Story": "A very familiar voice chirps from behind the register. “Welcome to Ice Cream Palace. What can I get you today?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 419,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 112
    },
    {
      "Scene_lab": 419,
      "Story": "Your head snaps up. No way.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 420,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 27
    },
    {
      "Scene_lab": 420,
      "Story": "It’s you – well, a younger you, from back in high school.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 421,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 58
    },
    {
      "Scene_lab": 421,
      "Story": "If it wasn’t for the clean apron, you would’ve sworn it was your first day of work from the jittery energy, but you remember being so clumsy you stained it noticeably.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 422,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 168
    },
    {
      "Scene_lab": 422,
      "Story": "Your mind is racing. Whatever’s about to happen, you were physically there during what might be August’s most important memory.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 423,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 128
    },
    {
      "Scene_lab": 423,
      "Story": "Did August pick you for this job back then?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 424,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 44
    },
    {
      "Scene_lab": 424,
      "Story": "You went to high school a thousand miles away from the small liberal arts college you and August both attended, so there’s no reason there should be this many similarities.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 425,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 173
    },
    {
      "Scene_lab": 425,
      "Story": "August’s son orders. “Chocolate in a sprinkle cone.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 426,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 53
    },
    {
      "Scene_lab": 426,
      "Story": "The younger you enters it into the register. “Anything else?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 427,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 61
    },
    {
      "Scene_lab": 427,
      "Story": "Now could be your chance to get some answers.",
      "Choice": "Y",
      "Response_1": "You lean closer to the AI you, squinting.",
      "Response_2": "“Have we met before?”",
      "Outcome_1": 428,
      "Outcome_2": 430,
      "Section": 3,
      "Storyline": 2,
      "NumChar": 46
    },
    {
      "Scene_lab": 428,
      "Story": "Younger you looks so real. Not a trace of the algorithm is visible.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 429,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 68
    },
    {
      "Scene_lab": 429,
      "Story": "Younger you steps back. You can see how you might be acting creepy. You retreat.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 432,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 81
    },
    {
      "Scene_lab": 430,
      "Story": "Younger you raises an eyebrow. “I don’t think so, sir.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 431,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 56
    },
    {
      "Scene_lab": 431,
      "Story": "Okay, good. That confirms what you thought – if August did select you, it probably would’ve been because of this day.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 432,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 118
    },
    {
      "Scene_lab": 432,
      "Story": "August waves his hand as you continue letting him pilot. “How much will it be?”",
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
      "Story": "Younger you beams. “When is your birthday? I’ll open a rewards account.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 434,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 73
    },
    {
      "Scene_lab": 434,
      "Story": "You answer automatically. “August 31st.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 435,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 40
    },
    {
      "Scene_lab": 435,
      "Story": "Wait – was that August on autopilot or you answering?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 436,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 53
    },
    {
      "Scene_lab": 436,
      "Story": "Do you and August have the same birthday?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 437,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 42
    },
    {
      "Scene_lab": 437,
      "Story": "Younger you shrugs. “Sounds like we share a birthday. Total is $4.99.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 438,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 71
    },
    {
      "Scene_lab": 438,
      "Story": "You give $7 and tell him to keep the change.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 439,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 45
    },
    {
      "Scene_lab": 439,
      "Story": "“Really, August?” huffs August's son.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 440,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 37
    },
    {
      "Scene_lab": 440,
      "Story": "You’re starting to get fed up with the little punk’s attitude.",
      "Choice": "Y",
      "Response_1": "You let the scene continue unaltered.",
      "Response_2": "You take control for a moment.",
      "Outcome_1": 441,
      "Outcome_2": 443,
      "Section": 3,
      "Storyline": 2,
      "NumChar": 63
    },
    {
      "Scene_lab": 441,
      "Story": "You continue talking on autopilot. “Remember, son? It’s ‘dad,’ ‘father…’”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 442,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 74
    },
    {
      "Scene_lab": 442,
      "Story": "You trail off and try to put your arm around August’s son.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 445,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 58
    },
    {
      "Scene_lab": 443,
      "Story": "“Hey, maybe you should show your old man more respect.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 444,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 56
    },
    {
      "Scene_lab": 444,
      "Story": "Yikes. The longer you spend in August’s body, the more you’re starting to talk and think like a middle aged man.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 445,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 113
    },
    {
      "Scene_lab": 445,
      "Story": "You try to pluck a thread from his coat.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 446,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 41
    },
    {
      "Scene_lab": 446,
      "Story": "He jerks his shoulder away. Something falls from his pocket.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 447,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 61
    },
    {
      "Scene_lab": 447,
      "Story": "August reacts before you have a chance to.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 448,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 43
    },
    {
      "Scene_lab": 448,
      "Story": "His son’s eyes widen. He scrambles to pick up the object, but you beat him to it, deftly retrieving the lock from the ground and examining it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 449,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 143
    },
    {
      "Scene_lab": 449,
      "Story": "How strange – the keyhole is shaped like an arrow.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 450,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 51
    },
    {
      "Scene_lab": 450,
      "Story": "What is the lock’s significance? Clearly, it’s affecting August.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 451,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 65
    },
    {
      "Scene_lab": 451,
      "Story": "Tears well in your eyes. “Son…is this yours?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 452,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 46
    },
    {
      "Scene_lab": 452,
      "Story": "August’s son snatches it back, his eyes coals.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 453,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 47
    },
    {
      "Scene_lab": 453,
      "Story": "Younger you yelps from behind the counter.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 454,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 43
    },
    {
      "Scene_lab": 454,
      "Story": "You and August’s son turn to see a big glob of ice cream splattered on the apron.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 455,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 82
    },
    {
      "Scene_lab": 455,
      "Story": "Yep, the ice cream accident confirms that this memory takes place during your first day of work.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 456,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 98
    },
    {
      "Scene_lab": 456,
      "Story": "August’s son pushes you and runs out the door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 457,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 47
    },
    {
      "Scene_lab": 457,
      "Story": "You hesitate, glancing back at your younger self and letting August’s autopilot continue to speak in a hushed tone.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 458,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 116
    },
    {
      "Scene_lab": 458,
      "Story": "“I’ll be right back – I have something to give you. I can’t explain now, but there are certain patterns in your life, in your history, that have prepared you for this journey.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 459,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 177
    },
    {
      "Scene_lab": 459,
      "Story": "You trail off, turning back to the door and muttering to yourself. “Later. There will be time later.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 460,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 102
    },
    {
      "Scene_lab": 460,
      "Story": "You remember now – on your first day, some middle-aged father had a fight with his son and seemed to say something to you on the way out, but you couldn’t hear it over the store music.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 461,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 185
    },
    {
      "Scene_lab": 461,
      "Story": "And when he left the store…well, he never came back.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 462,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 53
    },
    {
      "Scene_lab": 462,
      "Story": "Whatever he wanted back then, it seems like he's finally tracked you down now, which means you were selected especially for this job.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 463,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 134
    },
    {
      "Scene_lab": 463,
      "Story": "That knowledge comes with a sense of awe, responsibility, and anxiety.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 464,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 71
    },
    {
      "Scene_lab": 464,
      "Story": "But you don’t have time to process – you’re still in the room, operating on a timer.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 465,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 85
    },
    {
      "Scene_lab": 465,
      "Story": "Continuing as August, you follow the sound of his son’s footsteps to an alley.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 466,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 79
    },
    {
      "Scene_lab": 466,
      "Story": "The alley appears to be empty, but it’s the only place where he could have disappeared to.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 467,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 91
    },
    {
      "Scene_lab": 467,
      "Story": "A pack of teenage boys in varsity jackets appears at the end of the alley.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 468,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 75
    },
    {
      "Scene_lab": 468,
      "Story": "You don’t know what’s happening, but it feels a little bit like a cinematic father-son betrayal.",
      "Choice": "Y",
      "Response_1": "You hide behind a dumpster.",
      "Response_2": "You slip into a shallow doorway.",
      "Outcome_1": 471,
      "Outcome_2": 469,
      "Section": 3,
      "Storyline": 2,
      "NumChar": 97
    },
    {
      "Scene_lab": 469,
      "Story": "A very large spider dangles from its web a few inches from your face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 470,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 69
    },
    {
      "Scene_lab": 470,
      "Story": "You backtrack, throwing yourself to the ground behind a dumpster to escape the spider’s reach.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 471,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 94
    },
    {
      "Scene_lab": 471,
      "Story": "“August?” August’s son calls out from the group of boys, his voice becoming deeper and smoother.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 472,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 97
    },
    {
      "Scene_lab": 472,
      "Story": "You push your back against the nearest building, panting.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 473,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 58
    },
    {
      "Scene_lab": 473,
      "Story": "After a moment, August’s son calls out again, his voice shifting again to take on a more innocent quality. “Dad?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 474,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 114
    },
    {
      "Scene_lab": 474,
      "Story": "Your heart thumps – this kid isn’t a normal teenager and this room somehow feels more dangerous, even though you know none of it is real.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 475,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 138
    },
    {
      "Scene_lab": 475,
      "Story": "There’s no clue here – it’s not like the others at all.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 476,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 56
    },
    {
      "Scene_lab": 476,
      "Story": "August created this room for another purpose.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 477,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 46
    },
    {
      "Scene_lab": 477,
      "Story": "You should’ve heeded the warning on the door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 478,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 46
    },
    {
      "Scene_lab": 478,
      "Story": "Where’s your exit? How are you doing on time?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 479,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 46
    },
    {
      "Scene_lab": 479,
      "Story": "Just like that, you see a timer floating above the dumpster beside you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 480,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 71
    },
    {
      "Scene_lab": 480,
      "Story": "Twenty seconds?!",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 481,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 17
    },
    {
      "Scene_lab": 481,
      "Story": "You rise and peer inside the dumpster, gripping the handle with your left hand.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 482,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 80
    },
    {
      "Scene_lab": 482,
      "Story": "The door is inside – you just have to jump through it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 483,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 55
    },
    {
      "Scene_lab": 483,
      "Story": "You straighten your spine and hoist yourself over the side, falling through the open door and blinking fast as you reorient.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 484,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 126
    },
    {
      "Scene_lab": 484,
      "Story": "You close the door with a shaking hand, reflecting on your life choices – and the bizarre room you just escaped.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 485,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 113
    },
    {
      "Scene_lab": 485,
      "Story": "Yes, you’ve taken the term “starving artist” a little too literally sometimes, but geez…how far are you willing to go?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 486,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 119
    },
    {
      "Scene_lab": 486,
      "Story": "You start toward the front door, then stop.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 487,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 44
    },
    {
      "Scene_lab": 487,
      "Story": "August constructed a labyrinth of information within this house because his work made him paranoid.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 488,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 100
    },
    {
      "Scene_lab": 488,
      "Story": "It seems like it cost him everything – his son, his sense of safety, and maybe even his life.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 489,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 94
    },
    {
      "Scene_lab": 489,
      "Story": "With all he’s been through, he deserves some recognition for this incredible work.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 490,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 83
    },
    {
      "Scene_lab": 490,
      "Story": "Somehow, you seem to be the best person for the job.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 556,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 2,
      "NumChar": 53
    },
    {
      "Scene_lab": 491,
      "Story": "A door flies open down the hall. Someone shouts in the distance.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 492,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 65
    },
    {
      "Scene_lab": 492,
      "Story": "Before today, a phantom arm throwing a door open in an empty house would’ve spooked you. Now, it’s standard practice.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 493,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 118
    },
    {
      "Scene_lab": 493,
      "Story": "Time to finish this thing and grab the final clue.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 494,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 51
    },
    {
      "Scene_lab": 494,
      "Story": "“August, come quick!” a young voice shouts.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 495,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 44
    },
    {
      "Scene_lab": 495,
      "Story": "You jog to the new door, peering inside and taking in its pitch blackness.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 496,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 75
    },
    {
      "Scene_lab": 496,
      "Story": "Something looks wrong here. This isn’t a normal clue room - the door doesn’t even have a handle.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 497,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 97
    },
    {
      "Scene_lab": 497,
      "Story": "For the sake of efficiency, you should find a different room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 498,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 62
    },
    {
      "Scene_lab": 498,
      "Story": "Still, your curiosity makes you poke your head inside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 499,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 54
    },
    {
      "Scene_lab": 499,
      "Story": "You feel the wall for a light switch. Where’d the young voice go?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 500,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 67
    },
    {
      "Scene_lab": 500,
      "Story": "A child’s hand reaches up and pulls you to the floor inside.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 501,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 61
    },
    {
      "Scene_lab": 501,
      "Story": "The door creaks shut behind you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 502,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 33
    },
    {
      "Scene_lab": 502,
      "Story": "Panic seizes your throat as the darkness swallows you whole.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 503,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 61
    },
    {
      "Scene_lab": 503,
      "Story": "The only thing stopping you from running in a frantic circle is the reassuring warmth of the child’s hand, his sweaty palm resting on your arm.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 504,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 144
    },
    {
      "Scene_lab": 504,
      "Story": "Still insane how real these memories feel inside August’s rooms.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 505,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 65
    },
    {
      "Scene_lab": 505,
      "Story": "Hushed voices erupt from around you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 506,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 36
    },
    {
      "Scene_lab": 506,
      "Story": "The little kid slips a cold object in your hand, which doesn’t help your nerves.",
      "Choice": "Y",
      "Response_1": "You inspect it closely.",
      "Response_2": "You chuck it across the room.",
      "Outcome_1": 509,
      "Outcome_2": 507,
      "Section": 3,
      "Storyline": 3,
      "NumChar": 81
    },
    {
      "Scene_lab": 507,
      "Story": "“Ow!” a deep voice sounds from across the room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 508,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 47
    },
    {
      "Scene_lab": 508,
      "Story": "Within seconds, the object comes clattering to the ground in front of you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 509,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 75
    },
    {
      "Scene_lab": 509,
      "Story": "It’s pointy. The little kid retrieves it and flicks it on.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 510,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 59
    },
    {
      "Scene_lab": 510,
      "Story": "The flame at the tip of the lighter illuminates his face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 511,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 58
    },
    {
      "Scene_lab": 511,
      "Story": "“You were supposed to light the candles, silly. You know my mom doesn’t like me to use the lighter,” he says, wearing a goofy grin.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 512,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 132
    },
    {
      "Scene_lab": 512,
      "Story": "He moves the lighter from candle to candle on the cake sitting before him on the floor.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 513,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 88
    },
    {
      "Scene_lab": 513,
      "Story": "You recognize him as a slightly older version of the kid who was clutching the elephant in the first room —the one who was flickering in and out of focus in the dome when August’s friend failed the assessment.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 514,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 210
    },
    {
      "Scene_lab": 514,
      "Story": "“They’re in the driveway. Everyone get ready,” a new voice calls from across the room. “Three…two…one…”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 515,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 104
    },
    {
      "Scene_lab": 515,
      "Story": "The blackout curtains are pushed back and the overhead light switched on. “Surprise!”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 516,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 86
    },
    {
      "Scene_lab": 516,
      "Story": "Party poppers explode, confetti filling the air and spilling all over the head of a little girl as she enters the room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 517,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 120
    },
    {
      "Scene_lab": 517,
      "Story": "The little boy next to you tugs on your sleeve and gestures at the cake.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 518,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 72
    },
    {
      "Scene_lab": 518,
      "Story": "You stoop over and pick it up, plastering a smile on your face.",
      "Choice": "Y",
      "Response_1": "You start singing “Happy Birthday.”",
      "Response_2": "You carry the cake to the girl.",
      "Outcome_1": 519,
      "Outcome_2": 519,
      "Section": 3,
      "Storyline": 3,
      "NumChar": 64
    },
    {
      "Scene_lab": 519,
      "Story": "She giggles and claps her hands.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 520,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 33
    },
    {
      "Scene_lab": 520,
      "Story": "Your eyes scan the room, which is composed of several families.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 521,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 64
    },
    {
      "Scene_lab": 521,
      "Story": "You recognize the men from the first room, except the solemn expressions they wore that day are replaced by laugh lines today.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 522,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 127
    },
    {
      "Scene_lab": 522,
      "Story": "This must be a sort of family reunion a few years down the line.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 523,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 65
    },
    {
      "Scene_lab": 523,
      "Story": "You find that if you let your body go, August’s memory takes over and says the right things, walks the right places, smiles at the right people.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 524,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 145
    },
    {
      "Scene_lab": 524,
      "Story": "You let August autopilot for a while, fascinated by the people in his life.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 525,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 76
    },
    {
      "Scene_lab": 525,
      "Story": "At some point, you end up manning the grill in the front yard, monitoring the hot dogs and burgers.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 526,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 100
    },
    {
      "Scene_lab": 526,
      "Story": "The other dads circle around in the grass, stroking five o’clock shadows pensively.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 527,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 84
    },
    {
      "Scene_lab": 527,
      "Story": "A silence has settled over the group that feels too long to be natural. You hate awkward silences.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 528,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 99
    },
    {
      "Scene_lab": 528,
      "Story": "You wonder if you should switch off autopilot for a minute, get someone talking about the weather. Anything.",
      "Choice": "Y",
      "Response_1": "“So, how about that weather?” you ask.",
      "Response_2": "You let the memory unfold.",
      "Outcome_1": 529,
      "Outcome_2": 529,
      "Section": 3,
      "Storyline": 3,
      "NumChar": 109
    },
    {
      "Scene_lab": 529,
      "Story": "The dad in the backwards baseball cap speaks in a hushed tone, gaze glued to the sky.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 530,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 86
    },
    {
      "Scene_lab": 530,
      "Story": "“It’s still hard, seeing his wife alone. Knowing what we know about her husband, about her kid’s dad. We made it out of training, but what happens when our…” he pauses, searching for the word.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 531,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 194
    },
    {
      "Scene_lab": 531,
      "Story": "His eyes travel to yours. “...skills, expire? When we can’t keep up with the tech?”",
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
      "Story": "Another dad takes a swig of his beer. “I’ve been saying it for years, Mike. I’ll say it again. I propose we get out now. Quit the firm. Walk away quietly. They won’t be able to function if all of us leave at once.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 533,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 215
    },
    {
      "Scene_lab": 533,
      "Story": "You let August speak on autopilot. “You know they won’t let us leave.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 534,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 71
    },
    {
      "Scene_lab": 534,
      "Story": "All heads turn to you. The second guy crosses his arms. “So? What do you propose, Chambers?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 535,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 93
    },
    {
      "Scene_lab": 535,
      "Story": "You shrug. August continues.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 536,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 29
    },
    {
      "Scene_lab": 536,
      "Story": "“Propose? Nothing. I’ve told you all about the safety system I’m building in this new house. Protecting and preserving the memories they might try to rip from my head one day.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 537,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 176
    },
    {
      "Scene_lab": 537,
      "Story": "No one promised this job would be cake. It’s not like any of us actually believed the project was for a gaming company.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 538,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 121
    },
    {
      "Scene_lab": 538,
      "Story": "In the corner of your eye, you notice a man sitting on a bench. Watching. He looks familiar…",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 539,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 92
    },
    {
      "Scene_lab": 539,
      "Story": "Oh, no. He’s wearing the same black jumpsuit and black pin from the first room – an older version of August’s son, who seemed to have been working at the same company.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 540,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 168
    },
    {
      "Scene_lab": 540,
      "Story": "His presence seems like bad news. Especially given the state of August’s co-workers.",
      "Choice": "Y",
      "Response_1": "You need to tell the others.",
      "Response_2": "You pretend not to notice him.",
      "Outcome_1": 541,
      "Outcome_2": 542,
      "Section": 3,
      "Storyline": 3,
      "NumChar": 85
    },
    {
      "Scene_lab": 541,
      "Story": "You open your mouth to point him out, but by the time there’s an opening in the conversation, he’s gone.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 544,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 105
    },
    {
      "Scene_lab": 542,
      "Story": "You should preserve the integrity of the memory if you really want to learn a bit more about what might have happened to August.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 543,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 128
    },
    {
      "Scene_lab": 543,
      "Story": "You’ve spent enough time in the man’s shoes that you feel invested.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 544,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 68
    },
    {
      "Scene_lab": 544,
      "Story": "One of the guys nudges your arm, pointing. “No way…is that who I think it is?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 545,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 79
    },
    {
      "Scene_lab": 545,
      "Story": "Sitting across the street on that same bench the son occupied minutes before is August’s old friend - the one who failed the assessment and lost his memory.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 546,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 157
    },
    {
      "Scene_lab": 546,
      "Story": "“Dad?” The little boy who pulled you into the room races to him, throwing his arms around his neck and hugging him.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 547,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 116
    },
    {
      "Scene_lab": 547,
      "Story": "The man doesn’t react. Just stares. You realize his eyes are fixed on you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 548,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 75
    },
    {
      "Scene_lab": 548,
      "Story": "A knot grows in your stomach. Important events are stored in this memory - no wonder it was a different type of door.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 549,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 118
    },
    {
      "Scene_lab": 549,
      "Story": "You want to stay, but it seems that something strange is brewing - and you have to get back to helping present-day August find his killer.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 550,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 139
    },
    {
      "Scene_lab": 550,
      "Story": "That is, if you decide to continue. Your experiences in this house have been nothing short of insane, and your body feels like a big bruise – you’re exhausted.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 551,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 160
    },
    {
      "Scene_lab": 551,
      "Story": "Is the money worth it? Do you have some obligation to August, a total stranger with a bizarre occupation and an even crazier past?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 552,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 131
    },
    {
      "Scene_lab": 552,
      "Story": "You make your way back to the mansion, stepping into the hallway and exiting the simulation room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 553,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 98
    },
    {
      "Scene_lab": 553,
      "Story": "The little boy’s gaze lingers with you – the way he looked at his resurrected father.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 554,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 86
    },
    {
      "Scene_lab": 554,
      "Story": "Something sinister happened to an innocent family, and you have a hunch that the same people who put his dad in that glass dome might’ve killed August.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 555,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 152
    },
    {
      "Scene_lab": 555,
      "Story": "And you, as crazy as it sounds, might be able to stop them.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 556,
      "Outcome_2": "NA",
      "Section": 3,
      "Storyline": 3,
      "NumChar": 60
    },
    {
      "Scene_lab": 556,
      "Story": "You have to believe August had a plan when he sent you on this hunt for his killer.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 557,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 84
    },
    {
      "Scene_lab": 557,
      "Story": "Some sort of contingency as soon as you input the killer’s name into that typewriter.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 558,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 86
    },
    {
      "Scene_lab": 558,
      "Story": "It’s settled, then. You’ll continue because it’s the decent human thing to do. Find the last clue.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 559,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 99
    },
    {
      "Scene_lab": 559,
      "Story": "Oh, shoot. All that trouble and you didn’t even get the second clue from the horse stalls.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 560,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 91
    },
    {
      "Scene_lab": 560,
      "Story": "You saw the clue—the red horseshoe. Hopefully, that’s enough.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 561,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 62
    },
    {
      "Scene_lab": 561,
      "Story": "You crack your knuckles, peering down the hallway. Just one more room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 562,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 71
    },
    {
      "Scene_lab": 562,
      "Story": "Blinking hard, you twist a brass doorknob and enter the third and final room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 563,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 78
    },
    {
      "Scene_lab": 563,
      "Story": "A camera sits atop a tripod in the center of the room, aimed at a blank wall.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 564,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 78
    },
    {
      "Scene_lab": 564,
      "Story": "Actually, all the walls are blank, apart from curtains.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 565,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 56
    },
    {
      "Scene_lab": 565,
      "Story": "It’s a home photo studio.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 566,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 26
    },
    {
      "Scene_lab": 566,
      "Story": "A little girl sits on the floor, smashing toy trucks together.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 567,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 63
    },
    {
      "Scene_lab": 567,
      "Story": "A boy runs around, chattering happily to himself.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 568,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 50
    },
    {
      "Scene_lab": 568,
      "Story": "The younger version of August’s wife is bent over, trying in vain to clean up the colored pins scattered all over the floor.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 569,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 124
    },
    {
      "Scene_lab": 569,
      "Story": "She sees you come in and straightens.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 570,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 38
    },
    {
      "Scene_lab": 570,
      "Story": "“You’re late,” she says. “Least you could do is clean up after yourself. I’m sick of seeing these pins everywhere.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 571,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 115
    },
    {
      "Scene_lab": 571,
      "Story": "She bends down again and mutters to herself.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 572,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 45
    },
    {
      "Scene_lab": 572,
      "Story": "“Obsesses over the damn pins day and night. Who gets the red pin and who gets the black. Then leaves them all over the floor . . .”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 573,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 132
    },
    {
      "Scene_lab": 573,
      "Story": "When the kids see you, they run to your side.",
      "Choice": "Y",
      "Response_1": "You crouch to their level, beaming.",
      "Response_2": "You ignore them, looking for the clue.",
      "Outcome_1": 574,
      "Outcome_2": 574,
      "Section": 4,
      "Storyline": 0,
      "NumChar": 46
    },
    {
      "Scene_lab": 574,
      "Story": "August’s wife frowns. “That’s not helping with our family photos, is it, Aug?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 575,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 79
    },
    {
      "Scene_lab": 575,
      "Story": "You point toward their mother. “Go help your mom, kids.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 576,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 57
    },
    {
      "Scene_lab": 576,
      "Story": "Kids, as in kids-whose-names-I-don’t-know.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 577,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 43
    },
    {
      "Scene_lab": 577,
      "Story": "There doesn’t seem to be a script in this room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 578,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 48
    },
    {
      "Scene_lab": 578,
      "Story": "Now, you actually have to put thought into your interactions.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 579,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 62
    },
    {
      "Scene_lab": 579,
      "Story": "The little boy takes you too literally, racing to the purple curtain, identifying a wrinkle, and trying to smooth it out.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 580,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 121
    },
    {
      "Scene_lab": 580,
      "Story": "He tugs too hard and the curtain collapses, revealing a singular decoration: a Scottish family crest with a huge “G” in the center.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 581,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 132
    },
    {
      "Scene_lab": 581,
      "Story": "The crest. That’s it – the crest is the clue.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 582,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 46
    },
    {
      "Scene_lab": 582,
      "Story": "August’s wife shrieks. “August, do something. Please.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 583,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 55
    },
    {
      "Scene_lab": 583,
      "Story": "You’re not sure when the memory is from, but her sob sounds like a breaking point – as if she’d been holding in something for a long time.",
      "Choice": "Y",
      "Response_1": "“Step away, boy,” you command.",
      "Response_2": "You march toward the decoration.",
      "Outcome_1": 584,
      "Outcome_2": 584,
      "Section": 4,
      "Storyline": 0,
      "NumChar": 139
    },
    {
      "Scene_lab": 584,
      "Story": "You close the gap between you and the clue, trying to yank it off the wall.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 585,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 75
    },
    {
      "Scene_lab": 585,
      "Story": "You fail. It’s a 3-D painting. Yes, you feel like an idiot.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 586,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 60
    },
    {
      "Scene_lab": 586,
      "Story": "And no, you obviously don’t need it. You don’t even have the second clue, and it’s fine. It’ll have to be.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 587,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 107
    },
    {
      "Scene_lab": 587,
      "Story": "The third clue is a “G.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 588,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 25
    },
    {
      "Scene_lab": 588,
      "Story": "Time to bounce. You run from the room without hesitation.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 589,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 58
    },
    {
      "Scene_lab": 589,
      "Story": "Shutting the door, you run to the kitchen.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 590,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 43
    },
    {
      "Scene_lab": 590,
      "Story": "You rip a sticky note from the fridge and snatch a pen from a cup, not caring that it spills over.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 591,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 99
    },
    {
      "Scene_lab": 591,
      "Story": "You write down the three clues.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 592,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 32
    },
    {
      "Scene_lab": 592,
      "Story": "Standing back, you inspect three phrases that make no sense together.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 593,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 70
    },
    {
      "Scene_lab": 593,
      "Story": "A bloody copy of <i>The Scarlet Letter</i>, a red horseshoe, and a Scottish “G.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 594,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 81
    },
    {
      "Scene_lab": 594,
      "Story": "Well, it’s three letters and has to end with a “G.”",
      "Choice": "Y",
      "Response_1": "You decide to search online.",
      "Response_2": "You rely on your own knowledge.",
      "Outcome_1": 595,
      "Outcome_2": 598,
      "Section": 4,
      "Storyline": 0,
      "NumChar": 52
    },
    {
      "Scene_lab": 595,
      "Story": "Maybe <i>The Scarlet Letter</i> refers to a specific letter? You should’ve paid more attention in high school.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 596,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 111
    },
    {
      "Scene_lab": 596,
      "Story": "The page loads with an immediate answer – “A.” Huh. That was easy.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 597,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 67
    },
    {
      "Scene_lab": 597,
      "Story": "Lastly, there’s the horseshoe, which can’t be anything other than a “U.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 602,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 73
    },
    {
      "Scene_lab": 598,
      "Story": "Okay, well the horseshoe is clearly a “U.” Easy.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 599,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 49
    },
    {
      "Scene_lab": 599,
      "Story": "<i>The Scarlet Letter</i>, though…you’re going to have to outsource this one.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 600,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 77
    },
    {
      "Scene_lab": 600,
      "Story": "You pull up the internet and type your question.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 601,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 48
    },
    {
      "Scene_lab": 601,
      "Story": "The page loads with an immediate answer – “A.” Huh.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 602,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 52
    },
    {
      "Scene_lab": 602,
      "Story": "Together, they spell… Aug – short for August.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 603,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 46
    },
    {
      "Scene_lab": 603,
      "Story": "What does it mean? Why would someone hire someone to go through this ordeal if they…?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 604,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 85
    },
    {
      "Scene_lab": 604,
      "Story": "No. That can’t be it – that doesn’t make any sense.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 605,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 52
    },
    {
      "Scene_lab": 605,
      "Story": "And it doesn’t matter what it means.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 606,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 37
    },
    {
      "Scene_lab": 606,
      "Story": "The instructions said to go to the basement and type the name in. You have a name. All that’s left is to type it.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 607,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 113
    },
    {
      "Scene_lab": 607,
      "Story": "So why do you feel anchored to the spot where you’re standing?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 608,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 63
    },
    {
      "Scene_lab": 608,
      "Story": "Queasy, you collect yourself and walk to the top of the staircase leading to the basement.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 609,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 91
    },
    {
      "Scene_lab": 609,
      "Story": "You’ve seen the unsettling reality up here.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 610,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 44
    },
    {
      "Scene_lab": 610,
      "Story": "What could be waiting down there?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 611,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 34
    },
    {
      "Scene_lab": 611,
      "Story": "The cat re-appears and pads down the stairs ahead of you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 612,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 58
    },
    {
      "Scene_lab": 612,
      "Story": "If an animal trusts the pitch-black basement, you should too. That is, unless it’s a horror movie.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 613,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 99
    },
    {
      "Scene_lab": 613,
      "Story": "Hopefully, this isn’t one.",
      "Choice": "Y",
      "Response_1": "You descend the stairs.",
      "Response_2": "You run to grab a knife.",
      "Outcome_1": 616,
      "Outcome_2": 614,
      "Section": 4,
      "Storyline": 0,
      "NumChar": 27
    },
    {
      "Scene_lab": 614,
      "Story": "Self-protection is first.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 615,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 26
    },
    {
      "Scene_lab": 615,
      "Story": "Maybe more characters would survive horror movies if they went back for a weapon before descending into the unknown.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 616,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 117
    },
    {
      "Scene_lab": 616,
      "Story": "At the bottom of the stairs, you feel the wall for a light switch.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 617,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 67
    },
    {
      "Scene_lab": 617,
      "Story": "None. Great.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 618,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 13
    },
    {
      "Scene_lab": 618,
      "Story": "You switch on your phone flashlight, hoping your 13% battery doesn’t quit on you.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 619,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 82
    },
    {
      "Scene_lab": 619,
      "Story": "The room is empty, like the photoshoot room, except for a table in the center.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 620,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 79
    },
    {
      "Scene_lab": 620,
      "Story": "On it sits a black typewriter.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 621,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 31
    },
    {
      "Scene_lab": 621,
      "Story": "Arm hairs prickling, you sit at the table and pull the typewriter closer to you. Positioning your hands, you press the first letter.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 622,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 133
    },
    {
      "Scene_lab": 622,
      "Story": "A voice sounds from behind you. “You made it.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 623,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 47
    },
    {
      "Scene_lab": 623,
      "Story": "You turn around slowly, eyes landing on the man you remember from the profile photo on the hiring site.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 624,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 104
    },
    {
      "Scene_lab": 624,
      "Story": "It’s August himself.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 625,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 21
    },
    {
      "Scene_lab": 625,
      "Story": "He raises his hands like a peace offering. “Don’t worry – I’m just another fragment of AI that August left here in case his emergency plan was triggered. I’m not even real.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 626,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 174
    },
    {
      "Scene_lab": 626,
      "Story": "You can’t gauge whether you should trust him.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 627,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 46
    },
    {
      "Scene_lab": 627,
      "Story": "Aug could refer to many people – including a replica of the man.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 628,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 65
    },
    {
      "Scene_lab": 628,
      "Story": "He leans over the typewriter. “So, who did it? An old colleague?”",
      "Choice": "Y",
      "Response_1": "You finish typing.",
      "Response_2": "You hide the paper.",
      "Outcome_1": 632,
      "Outcome_2": 629,
      "Section": 4,
      "Storyline": 0,
      "NumChar": 66
    },
    {
      "Scene_lab": 629,
      "Story": "He chuckles. “I’m the guy who wires you the $100,000, kid. Move your hand.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 630,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 76
    },
    {
      "Scene_lab": 630,
      "Story": "You hesitate for a moment before moving it. “And the last two letters?” he prompts.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 631,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 84
    },
    {
      "Scene_lab": 631,
      "Story": "You type the “U” and “G,” then sit back.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 632,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 41
    },
    {
      "Scene_lab": 632,
      "Story": "The man’s eyes scan the three letters. He doesn’t react – just stares, unmoving.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 633,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 81
    },
    {
      "Scene_lab": 633,
      "Story": "You hold your breath, watching his face closely.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 634,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 49
    },
    {
      "Scene_lab": 634,
      "Story": "His lips part. “Run.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 635,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 22
    },
    {
      "Scene_lab": 635,
      "Story": "Your stomach flips. “Excuse me?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 636,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 33
    },
    {
      "Scene_lab": 636,
      "Story": "He rips the paper from the typewriter, folding it into a neat square and shoving it in his blazer pocket.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 637,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 105
    },
    {
      "Scene_lab": 637,
      "Story": "“Leave. Now – if you value your life.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 638,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 39
    },
    {
      "Scene_lab": 638,
      "Story": "When you don’t stand, he widens his eyes, voice dropping to a whisper.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 639,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 71
    },
    {
      "Scene_lab": 639,
      "Story": "“There are many things you don’t understand, but I’m sure English isn’t one of them. Leave this house. Tell no one what you saw.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 640,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 130
    },
    {
      "Scene_lab": 640,
      "Story": "He doesn’t have to repeat himself again. You run for the stairs and sprint up them.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 641,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 84
    },
    {
      "Scene_lab": 641,
      "Story": "As you reach the foyer, you realize you forgot your bag in the living room.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 642,
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 76
    },
    {
      "Scene_lab": 642,
      "Story": "You bite your lip – is it worth going back?",
      "Choice": "Y",
      "Response_1": "Yes – it’ll only take two seconds.",
      "Response_2": "No – everything is replaceable.",
      "Outcome_1": 643,
      "Outcome_2": 643,
      "Section": 4,
      "Storyline": 0,
      "NumChar": 44
    },
    {
      "Scene_lab": 643,
      "Story": "Before you are able to react, the front door swings open.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": [
        644,
        662
      ],
      "Outcome_2": "NA",
      "Section": 4,
      "Storyline": 0,
      "NumChar": 58
    },
    {
      "Scene_lab": 644,
      "Story": "A man in a black jumpsuit with a wide jaw steps inside, removing his hat.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 645,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 73
    },
    {
      "Scene_lab": 645,
      "Story": "On his left breast is a red pin.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 646,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 33
    },
    {
      "Scene_lab": 646,
      "Story": "When he sees you, he flashes a charming smile and waves.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 647,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 57
    },
    {
      "Scene_lab": 647,
      "Story": "“Hi. You must be the new housekeeper. I’m August.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 648,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 51
    },
    {
      "Scene_lab": 648,
      "Story": "He winces. “Sorry, it’s August Jr., in this house.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 649,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 52
    },
    {
      "Scene_lab": 649,
      "Story": "August Jr. Another Aug.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 650,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 24
    },
    {
      "Scene_lab": 650,
      "Story": "You gasp softly, trying not to let your face give away your horror.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 651,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 68
    },
    {
      "Scene_lab": 651,
      "Story": "It was him, wasn’t it? The little boy who pulled down the curtain, all grown up. He’s the killer.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 652,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 97
    },
    {
      "Scene_lab": 652,
      "Story": "You can’t imagine that a son would ever do this to his own father, no matter what circumstance.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 653,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 97
    },
    {
      "Scene_lab": 653,
      "Story": "And the man downstairs figured it out. He knew he’d come here.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 654,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 63
    },
    {
      "Scene_lab": 654,
      "Story": "You swallow hard, scrambling to come up with a plausible lie.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 655,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 62
    },
    {
      "Scene_lab": 655,
      "Story": "“Yes, I’ve just aired out the rooms. And finished baking August’s . . . late night snack. I was just leaving.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 656,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 111
    },
    {
      "Scene_lab": 656,
      "Story": "He moves aside, nodding.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 657,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 25
    },
    {
      "Scene_lab": 657,
      "Story": "Just before you pass, he blocks the door again, staring past you. “Weird – I don’t smell any chocolate chip cookies.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 658,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 118
    },
    {
      "Scene_lab": 658,
      "Story": "Your whole body tenses. You clear your throat. “I cracked a window.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 659,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 69
    },
    {
      "Scene_lab": 659,
      "Story": "He squints at your face for a long moment, then opens the door for you. “Right. Have a good day.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 660,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 98
    },
    {
      "Scene_lab": 660,
      "Story": "You slip past him, pacing yourself as you walk to your car, feeling the weight of his eyes on the back of your head.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 661,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 117
    },
    {
      "Scene_lab": 661,
      "Story": "In your rearview mirror, he watches you drive away, stare unwavering.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 682,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 70
    },
    {
      "Scene_lab": 662,
      "Story": "Present-day August – profile photo August – walks in.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 663,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 54
    },
    {
      "Scene_lab": 663,
      "Story": "What, now the AI people are entering through the front door, too? Is anything real?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 664,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 84
    },
    {
      "Scene_lab": 664,
      "Story": "“Congratulations,” he says, an eerie smile on his face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 665,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 56
    },
    {
      "Scene_lab": 665,
      "Story": "“I didn’t know whether I’d chosen right – many bets were placed against you -- but you’ve proven yourself, and my judgment, worthy.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 666,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 133
    },
    {
      "Scene_lab": 666,
      "Story": "You can’t find the words to respond.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 667,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 36
    },
    {
      "Scene_lab": 667,
      "Story": "This is all too bizarre. First, he’s dead. Next, you’re entering his memories and seeing them through his eyes.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 668,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 112
    },
    {
      "Scene_lab": 668,
      "Story": "Then, he’s just technology. Now, he’s here, casually alive. Well, isn’t he?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 669,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 76
    },
    {
      "Scene_lab": 669,
      "Story": "“So, what did you think?” he says. “Pretty high-tech stuff, eh?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 670,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 64
    },
    {
      "Scene_lab": 670,
      "Story": "“Yes,” you stutter.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 671,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 19
    },
    {
      "Scene_lab": 671,
      "Story": "“It’s my life’s work. And it’s made me into who I am. But I’m retired, and . . . what’s the word . . .” He strokes his chin. “Bored. I’m bored.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 672,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 146
    },
    {
      "Scene_lab": 672,
      "Story": "You cough, slowly catching up with him.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 673,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 40
    },
    {
      "Scene_lab": 673,
      "Story": "He’s not dead, it was all a game, and you were his . . . player?",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 674,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 65
    },
    {
      "Scene_lab": 674,
      "Story": "“I’ve been keeping an eye on you since you were in high school. You were such a scrawny thing, an artist in destitution, so desperate. Not just for money, but for recognition. An identity.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 675,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 189
    },
    {
      "Scene_lab": 675,
      "Story": "It’s lovely watching people thrash about for that kind of thing. The look in your eyes when you thought you were specially chosen for a life-saving mission – mm, delectable.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 676,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 175
    },
    {
      "Scene_lab": 676,
      "Story": "“But . . . What about all your memories? The people in the rooms?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 677,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 66
    },
    {
      "Scene_lab": 677,
      "Story": "He laughs. “These rooms were designed to mislead you. Doesn’t matter what’s in them. I could change their contents entirely with a snap of my finger.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 678,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 151
    },
    {
      "Scene_lab": 678,
      "Story": "“And the money?”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 679,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 16
    },
    {
      "Scene_lab": 679,
      "Story": "“Who do you think I am? Check your account. You’re free to leave.”",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 680,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 67
    },
    {
      "Scene_lab": 680,
      "Story": "You stand shakily and gather your things. You open the front door. A harsh wind scatters snow into your face.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 681,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 110
    },
    {
      "Scene_lab": 681,
      "Story": "August is back in the kitchen, opening the fridge, whistling a melody that blends into the howling wind.",
      "Choice": "N",
      "Response_1": "Next",
      "Response_2": "NA",
      "Outcome_1": 682,
      "Outcome_2": "NA",
      "Section": 5,
      "Storyline": "NA",
      "NumChar": 105
    },
    {
      "Scene_lab": 682,
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
var story_name = 'august';
var version = 'yoke';
var index = 0;
var story_path = [];
var story_text = [];
var choice_click = 0;
var choice_vec = [];
var response_label = "";
var response_text = "";
var key_flag = 0;
var sl = 0; //assign var in counterbalance
var ending = 0; //assign var in counterbalance
var button_delay =2000;//2000;
var wait_click=false;
var allow=true;
var allow_click=true;

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


//define the story routes
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var prac_counterbalance;
var prac_route_vector=0;
var prac_choice_vector = 0;
function assign_counter(prac_counterbalance){
  if (prac_counterbalance == 0) {
    prac_route_vector = [1,2,3,4,5,6,7,8,9];
    prac_choice_vector= [1,1,1];
  } else if (prac_counterbalance == 1) {
    prac_route_vector = [1,2,3,4,5,6,10,11,9];
    prac_choice_vector= [1,1,2];
  } else if (prac_counterbalance == 2) {
    prac_route_vector = [1,2,3,4,12,13,14,15,9];
    prac_choice_vector= [1,2,1];
  } else if (prac_counterbalance == 3) {
    prac_route_vector = [1,2,3,4,12,13,16,17,9];
    prac_choice_vector= [1,2,2];
  } else if (prac_counterbalance == 4) {
    prac_route_vector = [1,2,18,19,20,21,22,23,24,9];
    prac_choice_vector= [2,1,1];
  } else if (prac_counterbalance == 5) {
    prac_route_vector = [1,2,18,19,20,21,25,26,27,9];
    prac_choice_vector= [2,1,2];
  } else if (prac_counterbalance == 6) {
    prac_route_vector = [1,2,18,19,28,29,30,31,32,9];
    prac_choice_vector= [2,2,1];
  } else if (prac_counterbalance == 7) {
    prac_route_vector = [1,2,18,19,28,29,33,34,35,9];
    prac_choice_vector= [2,2,2];
  }
};
//randomly select practice route
prac_counterbalance = getRandomInt(8);
assign_counter(prac_counterbalance);
//counterbalancing: 18 different free-route stories (3 per 3 storyline per 2 ending)
var mycounterbalance = 0; // getRandomInt(4);
// EDIT: added all these variables below
var routeIndex = 0;
var choiceIndex = 0;
// set route_vector and choice_vector variables
if (mycounterbalance == 0) {
  var route_subject = "sub_demo";
  var route_vector =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 682];
  var choice_vector = [1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2];
  sl= 1;
  ending= 1;
// } else if (mycounterbalance == 1) {
//   var route_subject= "sub4_4004"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,40,41,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,199,200,201,202,203,204,205,206,207,208,209,210,211,213,214,215,216,217,218,219,220,221,226,227,228,229,230,231,232,233,234,235,236,237,238,239,246,247,248,249,253,254,255,256,257,258,259,260,261,262,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,511,512,513,514,515,516,517,518,519,520,521,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,623,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,706,707,708,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,790];
//   var choice_vector= [1,2,2,1,1,1,1,1,1,2,1,1,1,2,2,2,1,2,2,2,2,2,2,1,2,1,2,1,2];
//   sl= 3;
//   ending= 1;
// } else if (mycounterbalance == 1) {
//   var route_subject= "sub10_4010"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,253,254,255,256,257,258,259,260,261,262,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,469,470,471,472,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,498,499,500,501,502,503,504,505,506,507,508,509,510,514,515,516,517,518,519,520,521,522,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,706,707,708,709,710,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,790];
//   var choice_vector= [1,1,2,2,1,1,2,2,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,2,1,1,1];
//   sl= 3;
//   ending= 1;
// } else if (mycounterbalance == 1) {
//   var route_subject= "sub14_4014"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,26,27,28,29,30,35,36,37,38,39,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,144,145,146,147,148,149,150,151,152,153,154,155,156,159,160,161,162,163,164,165,166,167,168,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,194,195,196,197,198,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,422,423,424,425,426,427,428,429,430,431,432,433,442,443,444,445,446,447,448,449,453,454,455,456,460,461,462,463,464,465,466,467,468,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,555,556,557,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,637,638,639,640,641,642,643,644,679,682,683,684,685,686,687,688,689,690,691,692,693,694,699,700,701,702,703,704,705,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,790];
//   var choice_vector= [1,2,1,2,1,1,2,2,1,1,1,2,2,1,1,2,2,1,2,1,2,1,1,1,2,2,2,1,1];
//   sl= 2;
//   ending= 1;
// } else if (mycounterbalance == 1) {
//   var route_subject= "sub19_4019"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,259,260,261,262,263,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,469,470,471,472,477,478,479,480,481,482,483,484,485,486,487,488,489,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,514,515,516,517,518,519,520,521,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,706,707,708,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,790];
//   var choice_vector= [2,2,2,2,1,1,2,2,1,1,2,2,2,1,1,1,2,1,2,1,2,1,2,1,2,2,2,2,1];
//   sl= 3;
//   ending= 1;
// } else if (mycounterbalance == 5) {
//   var route_subject= "sub23_4023"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,22,23,24,25,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,339,340,341,342,343,344,345,347,349,351,353,355,357,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,672,673,674,675,676,677,678,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,790];
//   var choice_vector= [2,1,1,1,1,1,1,2,1,2,2,1,1,2,2,2,2,1,1,2,2,1,1,1,1,2,2,2,2];
//   sl= 1;
//   ending= 1;
// } else if (mycounterbalance == 4) {
//   var route_subject= "sub25_4025"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,339,340,341,342,343,344,345,347,349,351,353,355,357,358,359,360,361,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,599,600,601,602,603,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,672,673,674,675,676,677,678,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,790];
//   var choice_vector= [1,1,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,2,1,2,1,1,1,1,2,2,2];
//   sl= 1;
//   ending= 1;
} else if (mycounterbalance == 2) {
  var route_subject= "sub37_4037"
  var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,26,27,28,29,30,31,32,33,34,35,36,37,38,39,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,144,145,146,147,148,149,150,151,152,153,154,155,156,159,160,161,162,163,164,165,166,167,168,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,422,423,424,425,426,427,428,429,430,431,432,433,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,460,461,462,463,464,465,466,467,468,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,555,556,557,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,637,638,639,640,641,642,643,644,679,680,681,685,686,687,688,689,690,691,692,693,694,699,700,701,702,703,704,705,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,790];
  var choice_vector= [1,2,1,2,2,1,2,2,1,2,1,2,2,1,2,2,2,2,2,1,2,2,1,1,1,2,1,1,1];
  sl= 2;
  ending= 1;
// } else if (mycounterbalance == 8) {
//   var route_subject= "sub40_4040"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,26,27,28,29,30,35,36,37,38,39,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,162,163,164,165,166,167,168,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,194,195,196,197,198,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,422,423,424,425,426,427,428,429,430,431,432,433,442,443,444,445,446,447,448,449,453,454,455,456,460,461,462,463,464,465,466,467,468,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,555,556,557,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,604,605,606,614,615,616,617,618,619,620,621,622,637,638,639,640,641,642,643,644,679,680,681,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,790];
//   var choice_vector= [1,1,1,2,1,1,1,2,1,2,2,1,2,1,1,2,2,1,2,1,2,1,1,1,1,1,1,2,2];
//   sl= 2;
//   ending= 1;
// } else if (mycounterbalance == 6) {
//   var route_subject= "sub50_4050"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,246,247,248,249,250,251,252,259,260,261,262,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,469,470,471,472,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,498,499,500,501,502,503,504,505,506,507,508,509,510,514,515,516,517,518,519,520,521,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,623,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,706,707,708,709,710,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790];
//   var choice_vector= [1,2,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,2,2,1,1,1,2,1,2,1,1,2,2];
//   sl= 3;
//   ending= 2;
// } else if (mycounterbalance == 5) {
//   var route_subject= "sub71_4071"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,26,27,28,29,30,31,32,33,34,35,36,37,38,39,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,144,145,146,147,148,149,150,151,152,153,154,155,156,159,160,161,162,163,164,165,166,167,168,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,442,443,444,445,446,447,448,449,453,454,455,456,460,461,462,463,464,465,466,467,468,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,555,556,557,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,637,638,639,640,641,642,643,644,679,680,681,685,686,687,688,689,690,691,692,693,694,699,700,701,702,703,704,705,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790];
//   var choice_vector= [1,1,1,2,2,1,2,2,1,1,1,2,2,2,2,2,1,2,2,2,2,1,1,1,2,2,1,1,1];
//   sl= 2;
//   ending= 2;
// } else if (mycounterbalance == 11) {
//   var route_subject= "sub79_4079"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,40,41,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,259,260,261,262,263,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,511,512,513,514,515,516,517,518,519,520,521,522,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,623,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,706,707,708,709,710,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790];
//   var choice_vector= [1,2,2,1,1,1,2,1,1,2,2,1,2,1,1,2,2,1,2,2,2,2,1,1,1,1,1,2,2];
//   sl= 3;
//   ending= 2;
// } else if (mycounterbalance == 9) {
//   var route_subject= "sub80_4080"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,22,23,24,25,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,137,138,139,140,141,142,143,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,345,347,349,351,353,355,357,358,359,360,361,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,399,400,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,599,600,601,602,603,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,677,678,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790];
//   var choice_vector= [1,2,1,1,1,1,2,1,2,2,1,1,2,2,1,1,2,1,2,1,1,2,2,1,1,1,1,1,1];
//   sl= 1;
//   ending= 2;
// } else if (mycounterbalance == 13) {
//   var route_subject= "sub81_4081"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,26,27,28,29,30,35,36,37,38,39,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,144,145,146,147,148,149,150,151,152,153,154,155,156,159,160,162,163,164,165,166,167,168,169,170,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,442,443,444,445,446,447,448,449,453,454,455,456,460,461,462,463,464,465,466,467,468,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,555,556,557,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,637,638,639,640,641,642,643,644,679,682,683,684,685,686,687,688,689,690,691,692,693,694,699,700,701,702,703,704,705,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790];
//   var choice_vector= [1,2,1,2,1,1,2,2,1,1,1,1,1,1,2,2,2,1,2,2,2,1,1,1,1,2,2,1,1];
//   sl= 2;
//   ending= 2;
// } else if (mycounterbalance == 8) {
//   var route_subject= "sub90_4090"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,40,41,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,259,260,261,262,263,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,514,515,516,517,518,519,520,521,522,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,706,707,708,709,710,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790];
//   var choice_vector= [1,1,2,1,1,1,1,1,1,2,2,2,2,1,1,1,2,1,2,2,2,1,1,1,1,2,1,1,1];
//   sl= 3;
//   ending= 2;
// } else if (mycounterbalance == 8) {
//   var route_subject= "sub94_4094"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,22,23,24,25,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,345,347,349,351,353,355,357,358,359,360,361,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,599,600,601,602,603,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,677,678,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790];
//   var choice_vector= [1,1,1,1,1,2,1,2,2,1,2,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2];
//   sl= 1;
//   ending= 2;
// } else if (mycounterbalance == 3) {
//   var route_subject= "sub95_4095"
//   var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,26,27,28,29,30,35,36,37,38,39,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,144,145,146,147,148,149,150,151,152,153,154,155,156,159,160,161,162,163,164,165,166,167,168,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,442,443,444,445,446,447,448,449,453,454,455,456,460,461,462,463,464,465,466,467,468,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,555,556,557,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,637,638,639,640,641,642,643,644,679,680,681,685,686,687,688,689,690,691,692,693,694,699,700,701,702,703,704,705,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790];
//   var choice_vector= [1,2,1,2,1,1,2,2,1,1,1,2,2,1,2,2,2,1,2,2,2,1,1,1,2,2,1,1,2];
//   sl= 2;
//   ending= 2;
} else if (mycounterbalance == 3) {
  var route_subject= "sub100_4100"
  var route_vector= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,22,23,24,25,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,339,340,341,342,343,344,345,347,349,351,353,355,357,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,672,673,674,675,676,677,678,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790];
  var choice_vector= [1,1,1,1,1,1,2,2,1,2,1,1,1,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2];
  sl= 1;
  ending= 2;
};


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
  routeIndex = 0;
  choiceIndex = 0;
  pracInstr=true;
  prac_round = prac_round+1;
  prac_counterbalance = getRandomInt(8);
  assign_counter(prac_counterbalance);
  // assign_counter(prac_counterbalance);
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
  //add event listener
  window.addEventListener('keydown', SPR_keyRecorder);
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
  time_record('cyoa_spr')
  index = 0;
  routeIndex = 0;
  choiceIndex = 0;
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
  //add event listener
  window.addEventListener('keydown', SPR_keyRecorder);
}



//key press: progress at non-choice points with enter key (progress story + save data)
function SPR_keyRecorder(e) {
  $('#Reminder').hide();
  if (e.keyCode == 13 && allow==true) { //if enter was pressed
    allow = false
    //check if enter has been pressed already
    if (key_flag==0){
      key_flag = 1; //set key_flag to 1
      setTimeout(function () { //set a small delay before the next key-press to proceed to the next sentence
        //reset key_flag for the next enter-press
        key_flag = 0; 
        //save current scene label and current text into separate variables
        
        if (pracInstr==true){ //if this is the practice story 
          curent_position = prac_story.row[index].Scene_lab; // save current scene label
          curent_text = prac_story.row[index].Story; // save current text
          prac_path.push(curent_position); // append current scene position to the story_path variable
          prac_text.push(curent_text); // append current text position to the story_text variable            
          //test if CURRENT scene is a choice scene or not 
          if (prac_story.row[index].Choice=="N") { //if this is not a choice point
            //test if at end of story or not
            if (prac_story.row[index].Response_1 != "End") { //if not at end of story
              //update index
              routeIndex++;
              index = prac_route_vector[routeIndex]-1; 
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
            } else { //if at end of story
              document.getElementById('spr_sentence').innerHTML = "You have completed the practice.";
              instruction_postprac();
            }
          }  else if(prac_story.row[index].Choice=="Y") { //if this is a choice point
            allow_click=true;
            //update element visibility
            $('#Response_Label1').hide(); //hide element
            //update button text
            document.getElementById('Button_1').textContent = prac_story.row[index].Response_1
            document.getElementById('Button_2').textContent = prac_story.row[index].Response_2    
            //update button visibility
            $('#Button_1').show();
            $('#Button_2').show();
          } //EoF: current scene is choice/not

        }else{ //if this is the formal cyoa 
          curent_position = story.row[index].Scene_lab; // save current scene label
          curent_text = story.row[index].Story; // save current text
          if (story_path.includes(curent_position)==false){
            time_record('enter');
            story_path.push(curent_position); // append current scene position to the story_path variable
            story_text.push(curent_text); // append current text position to the story_text variable            
          }
          //test if CURRENT scene is a choice scene or not 
          if (story.row[index].Choice=="N") { //if this is not a choice point
            //test if at end of story or not
            if (story.row[index].Response_1 != "End") { //if not at end of story
              //update index
              routeIndex++;
              index = route_vector[routeIndex]-1; 
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
            } else { //if at end of story
              document.getElementById('spr_sentence').innerHTML = "You have completed Phase 3.";
              instruction_postspr();
            }
          }  else if(story.row[index].Choice=="Y") { //if this is a choice point
            allow_click=true;
            wait_click=true;
            //update element visibility
            $('#Response_Label1').hide(); //hide element
            // //update button text
            document.getElementById('Button_1').textContent = story.row[index].Response_1
            document.getElementById('Button_2').textContent = story.row[index].Response_2    
            //update button visibility
            $('#Button_1').show();
            $('#Button_2').show();
          } //EoF: current scene is choice/not
        }  //EoF: practice or formal spr
      },300) //EoF: settimeout (prevents rapid enter-presses)
    }else if (key_flag==1){ //if key has already been pressed, do nothing
    } //EoF: enter press detect
  } //EoF: enter press
      
  //this is to prevent multiple enter before next is enabled
  if (wait_click==false && allow==false){
    allow=true
  }else{
    setTimeout(function () {
      allow=true 
    }, 5000)
  }
} //EoF: SPR_keyRecorder

var curr_yok_choice =0;

//button press: progress at choice points with button-click (progress story + save data)
function SPR_buttonRecorder(choice_click) {
  if (allow_click==true){
      allow_click=false
    
      if (pracInstr==false){
        time_record('click');
        wait_click=false
        curr_yok_choice = choice_vector[choiceIndex];
      }else{//practice rounds
        curr_yok_choice = prac_choice_vector[choiceIndex];
      }
      
      //selected element change colours (white highlight the selected item)
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
      //set timeout function (green lit-up the predetermined item)
      setTimeout(function (){
        
        if(curr_yok_choice==1){
          $("#Button_1").css("background-color", "green");
          $("#Button_1").css("border", "green");
          $("#Button_1").css("border-style", "solid");
          $("#Button_1").css("color", "black");
          response_label = "_1";
          response_text = document.getElementById('Button_1').textContent;
          //the other option needs to go dark or disappear
          $("#Button_2").css("background-color", "white");
          $("#Button_2").css("border-style", "solid");
          $("#Button_2").css("border", "grey");
          $("#Button_2").css("color", "grey");
        }else if(curr_yok_choice==2){
          $("#Button_2").css("background-color", "green");
          $("#Button_2").css("border", "green");
          $("#Button_2").css("border-style", "solid");
          $("#Button_2").css("color", "black");
          response_label = "_2";
          response_text = document.getElementById('Button_2').textContent;
          //the other option needs to go dark or disappear
          $("#Button_1").css("background-color", "white");
          $("#Button_1").css("border-style", "solid");
          $("#Button_1").css("border", "grey");
          $("#Button_1").css("color", "grey");
        };

        //set timeout function
        setTimeout(function () {
          //buttons return colours to original state
          $("#Button_1").css("border-style", "none");
          $("#Button_1").css("color", "white");
          $("#Button_1").css("background-color", "steelblue");
          $("#Button_2").css("border-style", "none");
          $("#Button_2").css("color", "white");
          $("#Button_2").css("background-color", "steelblue");

          //update index
          choiceIndex++;
          routeIndex++;
          //update story
          if (pracInstr==true){
            prac_vec.push(choice_click);
            index = prac_route_vector[routeIndex] - 1 
            //save selected response: append to story_path and story_text
            prac_path.push(curent_position.toString().concat(response_label)); // append selected response label to the story_path variable
            prac_text.push(response_text); // append selected response text to the story_text variable
            //update practice story text
            document.getElementById('spr_sentence').innerHTML = prac_story.row[index].Story;
          }else{
            choice_vec.push(choice_click); 
            index = route_vector[routeIndex] - 1
            //save selected response: append to story_path and story_text
            story_path.push(curent_position.toString().concat(response_label)); // append selected response label to the story_path variable
            story_text.push(response_text); // append selected response text to the story_text variable
            //update story text
            document.getElementById('spr_sentence').innerHTML = story.row[index].Story;
            time_record('lag');     
          }
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

          wait_click=false;
        },1000);
      },500);
  }
}


/*************************************************
*    Screen7: post formal spr questionaires   *
**************************************************/

function instruction_postspr(){
  window.removeEventListener('keydown', SPR_keyRecorder);
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
    document.getElementById('buttonNextText').href = "https://jh.qualtrics.com/jfe/form/SV_cYhj7B1w1CQmlbU";
  }else if (ending==2){
    document.getElementById('buttonNextText').href = "https://jh.qualtrics.com/jfe/form/SV_0UtDViJK1XAYvzg";
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
      'pic_descrip,' +  pic_data + '\n' + 
      'yoked_to,' + route_subject;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'cyoa_'+story_name +'-'+version+'_sl'+sl+'_end'+ending+'_'+prolific_PID+'.prolific';    // The file to save the data.
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
