import GameType from "./types/GameType";

const Game: GameType = {
	1: {
		title:`YYou are a lonely camper who fell asleep in a tent in a quiet forest. You suddenly wake up in the middle of the night due to strange noize.
		This sound is definitely not human. It sounds like a vile transformation of flesh. Getting out of your tent you see how the forest is transformed. The trees start blocking out the sunlight leaving you in the dark.
		You NEED to get out of this forest`,
		options: [
			{ 	title: "Get items from your tent",
				newState: {
					Flashlight: true,
					Compass: true
				},
				nextNodeId: 2 },
			{
				title: "Go the unexplored path",
				nextNodeId: 4
			},
			{ 	title: "Use the road you got here", 
				nextNodeId: 8 },
		],
	},
	2: {
		title:
			`шIn a panic, you return to the tent. Your eyes are obsessively searching for useful items. Luckily you find a compass flashlight and a...`,
		options: [
			{ title: "Saw",
			  newState: {
				Saw: true
			  },
			  nextNodeId: 3 },
			{
				title: "Shovel",
				newState: {
					Shovel: true
				  },
				nextNodeId: 3,
			}
		],
	},
	3: {
		title:
			"щYou've calmed down a bit, what do you do now?",
		options: [
			{ title: "Use saw to open the blocked road",
			  required: ['Saw'],
			  nextNodeId: 11},
			{ title: "Use shovel to open the blocked road",
			  required: ['Shovel'],
			  nextNodeId: 7},
			{ title: "Use the unexplored path",
			  nextNodeId: 4 },
			{ title: "Check the compass",
			  required: ['Compass'],
			  nextNodeId: 6 },
		],
	},
	4: {
		title:
			"щWalking along the path, you notice that not only the forest is mutating, but also all living things in the forest. Animals have become like monsters. And you are tormented by the question, is it possible that this will happen to you?",
		options: [
			{
				title: "Use the reflection of the compass to look at yourself",
				required: ['Compass'],
				nextNodeId: 5,
			},
			{ title: "You notice a shack in the distance", nextNodeId: 9 },
		],
	},
	5: {
		title: "щWhen you look at your face, you realize that it looks terrible. The skin turned green, the eyes turned yellow. The forest becomes you and you become the forest",
		options: [
			{ title: "You notice a shack in the distance", nextNodeId: 9 },
		],
	},
	6: {
		title: "щLooks like it no longer works, arrow just keeps spinning. Bullshit ",
		options: [
		{ title: "Use saw to open the blocked road",
			required: ['Saw'],
			nextNodeId: 11},
		{ title: "Use shovel to open the blocked road",
			required: ['Shovel'],
			nextNodeId: 7},
	  	{ title: "Use the unexplored path",
		nextNodeId: 4 },],
	},
	7: {
		title: "щShovel is to slow with removing the trees, it grows back...",
		options: [
			{ title: "Use the unexplored path",
			nextNodeId: 4 },
		  { title: "Check the compass",
			required: ['Compass'],
			nextNodeId: 6 },
		],
	},
	8: {
		title: "щYou can't get to the road. It's overgrown with trees. Maybe there is another path...",
		options: [
		{ 	title: "Get items from your tent",
			newState: {
			Flashlight: true,
			Compass: true
			},
			nextNodeId: 2 },
		{
			title: "Go the unexplored path",
			nextNodeId: 4
		},
		],
	},
	9: {
		title: "щYou are getting closer and closer to the hut. From there you can hear the sounds of some kind of animal. It can be aggressive...",
		options: [
		{ 	title: "Open the door anyway",
			nextNodeId: 10 },
		
		],
	},
	10: {
		title: "щHaving opened a wooden hut, something that once was a person looks at you. His head is fused with his body. Eyes filled with anger. Branches grow from his skin. He will sharply attack you.",
		options: [
		{ 	title: "Punch him with the shovel",
			required: ['Shovel'],
			nextNodeId: 25 },
		{
			title: "Fight with bare hands",
			nextNodeId: 100
		},
		],
	},
	11 : {
		title: "щYou managed to unblock the road home. But now you have another problem. A stray dog came to your sounds, it was huge and with two heads. She barked with all her might. Something needs to be done...",
		options: [
		  { title: "Shine a flashlight into it's eyes",
			nextNodeId: 12 },
		  { title: "Get ready for the attack",
			required: ['Compass'],
			nextNodeId: 200 },
		],
	},
	12 : {
		title: "щThe light only made her angrier. The dog jumped on you and grabbed your leg. It bit your leg to the bone",
		options: [
		  { title: "Cut her with the saw",
			nextNodeId: 200 },
		  { title: "Punch her with a flashlight",
			required: ['Compass'],
			nextNodeId: 14 },
		],
	},

	13 : {
		title: "щThe light only made her angrier. The dog jumped on you and grabbed your leg. It bit your leg to the bone",
		options: [
		  { title: "Сut her with the saw",
		    required: ['Saw'],
			nextNodeId: 200 },
		  { title: "Punch her with a flashlight",
			required: ['Flashlight'],
			nextNodeId: 14 },
		],
	},
	14 : {
		title: "щThe blow from the flashlight briefly stunned her.",
		options: [
		  { title: "Hide in the trenches",
			nextNodeId: 200 },
		  { title: "Deliver the final blow",
			required: ['Flashlight'],
			nextNodeId: 16 },
		],
	},
	15 : {
		title: "щThe blow from the flashlight briefly stunned her.",
		options: [
		  { title: "Hide in the trenches",
			nextNodeId: 300 },
		  { title: "Deliver the final blow",
			required: ['Flashlight'],
			nextNodeId: 15 },
		],
	},
	16 : {
		title: "щYou painted her skull with a flashlight. The second one too. But gotta deal with the bleeding",
		options: [
		  { title: "Use the leathes to stop bleeding",
			nextNodeId: 17 },
		  { title: "Cut off your leg",
			required: ['Saw'],
			nextNodeId: 400 },
		],
	},
	17 : {
		title: `щYou're plucking leaves from nasty trees, it's not clear if this can help, but this is the only thing you came up with. Leaning the leaves noticed that .... they are the same color? Is your skin turning green?
		It doesn't matter now, we need to stop the bleeding. You lean the leaves against your leg and they begin to connect with your body. You become one with the forest and don't even notice it...`,
		options: [
		  { title: "Use the opened path",
			nextNodeId: 18 },
		  { title: "Use the reflection of the compass to look at yourself",
			required: ['Compass'],
			nextNodeId: 19 },
		],
	},
	18 : {
		title: `щThe road you got here looks way different. The forest has become denser, crows are constantly heard, the forest has become more alive but hostile to humans. He consumes you`,
		options: [
		  { title: "Something calls you...",
			nextNodeId: 21 },
		],
	},
	19 : {
		title: `щWhen you look at your face, you realize that it looks terrible. The skin turned green, the eyes turned yellow. The forest becomes you and you become the forest`,
		options: [
		  { title: "Not the time to complain. Use the opened path",
			nextNodeId: 18 },
		],
	},
	20 : {
		title: `щWhen you look at your face, you realize that it looks terrible. The skin turned green, the eyes turned yellow. The forest becomes you and you become the forest`,
		options: [
		  { title: "Use the opened path",
			nextNodeId: 18 },
		],
	},
	21 : {
		title: `щHeeere.... Come heeeeree. A mesmerizing voice is calling you. He is dressed from the depths of the forest. Your wooden body reaches out there...`,
		options: [
		  { title: "I need to help someone?",
			nextNodeId: 900 },
		  { title: "Ignore it, cant help others if you cant help yourself...",
			nextNodeId: 22 },
		],
	},
	22 : {
		title: `щHeeere.... Come heeeeree. A mesmerizing voice is calling you. He is dressed from the depths of the forest. Your wooden body reaches out there...`,
		options: [
		  { title: "I need to help someone?",
			nextNodeId: 900 },
		  { title: "Ignore it, cant help others if you cant help yourself...",
			nextNodeId: 24 },
		],
	},
	24 : {
		title: `щYou continue on your way and the forests. The whisper is getting louder. Covering your ears with your hands doesn't help. The legs are getting heavier. They turn into a tree and try to stick to the ground`,
		options: [
		  { title: "Cut your wooden toes with a saw",
		    required: ['Saw'],
			nextNodeId: 800 },
		  { title: "Continue moving",
			nextNodeId: 700 },
		],
	},
	25 : {
		title: `щYou managed to break his skull with a shovel. The body of the mutant fell to the floor`,
		options: [
		  { title: "Continue moving through the forest",
			nextNodeId: 28 },
		  { title: "Inspect the hut",
			nextNodeId: 27 },
		],
	},
	27 : {
		title: `щIt appears to be the home of a former forester. After examining the dwelling, you notice a photograph on the table. You pick it up from the table. This is a photo of him with his family. It's a reminder that if you don't get out of here, you won't see your family.`,
		options: [
		  { title: "Continue moving through the forest",
			nextNodeId: 28 },
		],
	},
	28 : {
		title: `щYou are looking at the forest. Your senses are sharpened. What? You just heard a car in the distance. The road is here somewhere`,
		options: [
		  { title: "The voices...",
			nextNodeId: 21 },
		  { title: "Check the compass",
			nextNodeId: 29 },
		],
	},
	29 : {
		title: `щThe compass was broken but now shows the direction. But with each step in this direction, the body becomes heavier ...`,
		options: [
		  { title: "Go in this direction",
			nextNodeId: 30 },
		  { title: "It deceives me...",
			nextNodeId: 21 },
		],
	},
	30 : {
		title: `щYou chose to trust chance. Each step is harder than the previous one. But the sound of the road is getting louder. With the last of your strength, you reach the road and fall on it. The sound of a car is heard. You are safe`,
		options: [
			{ title: "RESTART",
			newState: {
				Flashlight: false,
				Compass: false,
				Saw: false,
				Shovel: false
			},
			nextNodeId: 1 },
		],
	},
	100: {
		title: "щYour hands are not capable of anything in front of a mutant. Its teeth rip through your flesh and break your bones as you scream in unbearable pain. It looks like this is where your life ends.",
		options: [
			{ title: "RESTART",
			newState: {
				Flashlight: false,
				Compass: false,
				Saw: false,
				Shovel: false
			},
			nextNodeId: 1 },
		],
	},
	200: {
		title: "щThe saw was too weak to cause significant damage to the dog. You became food for the mongrel",
		options: [
			{ title: "RESTART",
			newState: {
				Flashlight: false,
				Compass: false,
				Saw: false,
				Shovel: false
			},
			nextNodeId: 1 },
		],
	},
	300: {
		title: "щThe dog catches you trying to escape, You became food for the mongrel",
		options: [
			{ title: "RESTART",
			newState: {
				Flashlight: false,
				Compass: false,
				Saw: false,
				Shovel: false
			},
			nextNodeId: 1 },
		],
	},
	400: {
		title: "щThis is probably the dumbest thing you've ever done. You obviosly died",
		options: [
			{ title: "RESTART",
			newState: {
				Flashlight: false,
				Compass: false,
				Saw: false,
				Shovel: false
			},
			nextNodeId: 1 },
		],
	},
	500: {
		title: "щThis is probably the dumbest thing you've ever done. You obviosly died",
		options: [
			{ title: "RESTART",
			newState: {
				Flashlight: false,
				Compass: false,
				Saw: false,
				Shovel: false
			},
			nextNodeId: 1 },
		],
	},
	600: {
		title: "щThis is probably the dumbest thing you've ever done. You obviosly died",
		options: [
			{ title: "RESTART",
			newState: {
				Flashlight: false,
				Compass: false,
				Saw: false,
				Shovel: false
			},
			nextNodeId: 1 },
		],
	},
	700: {
		title: "щYou try to continue on your way but your wooden legs get stuck in the ground. You cannot feel your body. You are the new tree of this forest",
		options: [
			{ title: "RESTART",
			newState: {
				Flashlight: false,
				Compass: false,
				Saw: false,
				Shovel: false
			},
			nextNodeId: 1 },
		],
	},
	800: {
		title: "щYou cut off the bottom of your wooden legs to keep moving. Finally you see the road. Each step is harder than the previous one. Your body falls to the asphalt. You hear a car stop next to you. Safety",
		options: [
			{ title: "RESTART",
			newState: {
				Flashlight: false,
				Compass: false,
				Saw: false,
				Shovel: false
			},
			nextNodeId: 1 },
		],
	},
	900: {
		title: "щThe voice gradually begins to replace your inner one. You freeze. Your wooden legs go into the ground and turn into roots. You are now a tree",
		options: [
			{ title: "RESTART",
			newState: {
				Flashlight: false,
				Compass: false,
				Saw: false,
				Shovel: false
			},
			nextNodeId: 1 },
		],
	},
};

export default Game;