import GameType from "./types/GameType";

const Game: GameType = {
	1: {
		title:`You are a lonely camper who fell asleep in a tent in a quiet forest. You suddenly wake up in the middle of the night due to strange noize.
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
			{ 	title: "Get out of here by the road you got here", 
				nextNodeId: 8 },
		],
	},
	2: {
		title:
			`In a panic, you return to the tent. Your eyes are obsessively searching for useful items. Luckily you find a compass flashlight and a...`,
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
			"You've calmed down a bit, what do you do now?",
		options: [
			{ title: "Use saw to open the blocked road",
			  required: ['Saw'],
			  nextNodeId: 7},
			{ title: "Use shovel to open the blocked road",
			  required: ['Shovel']},
			{ title: "Use the unexplored path",
			  nextNodeId: 4 },
			{ title: "Check the compass",
			  required: ['Compass'],
			  nextNodeId: 6 },
		],
	},
	4: {
		title:
			"Walking along the path, you notice that not only the forest is mutating, but also all living things in the forest. Animals have become like monsters. And you are tormented by the question, is it possible that this will happen to you?",
		options: [
			{
				title: "Use the reflection of the compass to look at yourself",
				required: ['Compass'],
				nextNodeId: 5,
			},
			{ title: "Inspect the the door", nextNodeId: 5 },
			{ title: "Call out `who is there`!", nextNodeId: 7 },
			{ title: "Retreat!", nextNodeId: 6 },
		],
	},
	5: {
		title: "",
		options: [],
	},
	6: {
		title: "Looks like it no longer works, arrow just keeps spinning. Bullshit ",
		options: [
		{ title: "Use saw to open the blocked road",
			required: ['Saw']},
		{ title: "Use shovel to open the blocked road",
			required: ['Shovel']},
	  	{ title: "Use the unexplored path",
		nextNodeId: 4 },],
	},
	7: {
		title: "You are safe a doctor came to save you!",
		options: [],
	},
	8: {
		title: "You can't get to the road. It's overgrown with trees. Maybe there is another path...",
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
};

export default Game;