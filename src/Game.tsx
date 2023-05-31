import GameType from "./types/GameType";

const Game: GameType = {
	1: {
		title:`
		You sit in your cottage and look at the beautiful views of Dubai. Your new Bugatti Hurricane is in the parking lot, and next to you is your most beautiful wife.
		`,
		options: [
			{ 	title: "Wake Up",
			    nextNodeId: 2
			},
		],
	},
	2: {
		title:
			`TThe the view falls away like a mirage in the distance.
			Fluorescent lights that hang from derelict buildings leak in from the edges of the screen as the visor leaves my eyes.
			I pull the headset off entirely, but my bio-connector is caught. `,
		options: [
			{ title: "Tare the wire from your neck",
			  nextNodeId: 3 }
		],
	},
	3: {
		title:
			`aAs the wire comes loose it scratches.
			"Argh!" The pain fades slowly. I flick the metallic sheath on my neck back in to place.
			"Still need to get that fixed...", no one was listening, least of all me.
			
			"Talking to yourself?", my new partner calls out as he climbs from his cab.
			`,
		options: [
			{ title: '"I guess I must be."',
			  nextNodeId: 4 },
		],
	},
	4: {
		title:
			`HHe approaches me; a big guy with a smile engulfed by his cheeks.
			He makes some joke about the "lovely weather".
			
			"So... apparently we got some guy is on the fritz. Musta' modified his socket or something." He smiles before realizing he shouldn't. I attempt to walk past him, but he grabs my wrist as I do, staring at me intently.
			
			"After my first one, I always bring this." He holds up a small letter opener with a bronze handle, wrapped in a leather scabbard.
			"Since you've requested to conduct this, want it?", he asks.`,
		options: [
			{
				title: '"Eugh... Okay, just incase."',
				newState: {
					Knife: true
				},
				nextNodeId: 5,
			},
			{ title: '"You hold on to it."', nextNodeId: 55 },
		],
	},
	55: {
		title: `hHe pockets the knife.

		Thunder cracks across the sky, the acid-rain intensifies. We look up at the building, nothing distinguishes it from the others; same balconies, same fluorescent lights, same algae smell.
		`,
		options: [
			{ title: "Head inside", nextNodeId: 56 },
		],
	},
	56: {
		title: `mMoisture lingers in the air. Wallpaper hangs from damp walls painted green by Chlorella.

		We aren't alone. Modders lay across the floor, leaning against the walls, or hanging from plastic chairs. Each of them has a visor active.
		
		Suddenly an elderly man rushes in through the hallway. He speeds towards me. I stiffen in a moment of helplessness, but he turns away just in time.
		
		I take a breath and my parner looks at me smuggly, before tapping the knife holstered against his gut.
		`,
		options: [
			{ title: "Continue to the hallway", nextNodeId: 7},
		],
	},
	5: {
		title: `"iI take the knife and holstered it in my belt.

Thunder cracks across the sky, the acid-rain intensifies. We look up at the buildings. Nothing distinguishes it from the others; same balconies, same fluorescent lights, same algae smell."`,
		options: [
			{ title: "Head inside ", nextNodeId: 6 },
		],
	},
	6: {
		title: `MMoisture lingers in the air. Wallpaper hangs from damp walls painted green by Chlorella.

		We aren't alone. Modders lay across the floor, leaning against the walls, or hanging from plastic chairs. Each of them has a visor active.
		
		Suddenly an elderly man rushes in through the hallway. He speeds towards me and I reach for the knife!
		
		But he turns away just in time. I take a breath. My parner looks at me and nodded.
		`,
		options: [
		{ title: "Continue to the hallway",
			nextNodeId: 7},
		]
	},
	7: {
		title: `IIn the hallway I feel surrounded as the modders glare at us through their visors like robotic cyclopses.

		The faint sounds of a scream echoed from upstairs...
		
		"Apparently they tied him to a table in the living quarters, want to go there first?", my partner asks.`,
		options: [
			{ title: '"Let\'s check his bedroom first"',
			nextNodeId: 8 },
		  { title: '"Let\'s go straight to the guy"',
			nextNodeId: 19 },
		],
	},
	8: {
		title: `WWe head to his bedroom.

		His floor is a landfill of rusted wiring, dust ridden motherboards and empty noodles boxes blooming with mould. The bed was a metallic frame with a single pillow resting against interconnecting springs.
		
		I take it all in surroundings, before spotting a gun laying behind the bed
		
		I pick it up and hold it close so my partner can't see.`,
		options: [
		{ 	title: "Leave it",
			nextNodeId: 11 },
			{ 	title: "Take it with yourself",
			newState: {
				Gun: true
			},
			nextNodeId: 11 },
		],
	},
	11 : {
		title: `WWe head out to the hallway.

		His faint screams vibrate through the walls.
		
		My partner turns to me.
		"So... where now?", he asks.
		`,
		options: [
		  { title: '"Let\'s see if anyone knows something"',
			nextNodeId: 12 },
		  { title: '"Let\'s go straight to the guy"',
			nextNodeId: 19 },
		],
	},
	12 : {
		title: `iI take a look at the Modders; all plugged in, all vacant. Trait Visors are as commonplace now as mobile phones were decades ago. They were sold as an biotic enhancement primarily useful for tech jobs, however, Modders eventually found the neural link allowed visors to project fully rendered memory, or "windows".
		Windows are highly addictive, but destroy the mind.
		
		"So who first?", my partner asks. None of the options were enticing;`,
		options: [
		  { title: '"Let\'s talk to that old man slumped agaist the wall"',
			nextNodeId: 13 },
		  { title: '"Let\'s talk to the couple laying together"',
			nextNodeId: 16 },
		],
	},

	13 : {
		title: `iWe approach the Old Man. As he sees us near he tares the jack from his neck and his visor powers off.

		"SCUM!", his voice was enraged, yet fragile. "Scum the lot'a ya". Neiter myself or my partner say a word.
		"You're hear to trap him, aren't ya? You're gonna pull him out and cage him in this... this... hell!". My partner pulls the mans head back, I now see his missing teeth, scarred eye and blotched skin.
		
		"My uncle went the same way. Fucking things, man... and he thinks out here is hell". My partner reflects.
		"You've not used one, have you?" I ask to no response. He puts his hand on my shoulder; had he seen my using mine?`,
		options: [
		  { title: `"I don't mod mine."`,
			nextNodeId: 14 }
		],
	},
	14 : {
		title: `iMy partner's stare is remorseless. I see his eyes fall to my neck.
		"I didn't think you did." He studies me.
		
		We turn back to the old man.
		"Pluggin. Pluggin." The man begs us. I shake my head.
		
		My partner grabs him by his collar. I lean down and speak calmly.
		"The guy. I need to find the gut."
		"He's gone... too gone. "1903", she said".
		
		"Are you going to debug him?" He asks us.
		I nodded.
		"SCUM!", the word is followed a ball of saliva in my eye.
		My partner throws the man to the ground.`,
		options: [
		  { title: "I wiped my eye and sighed.",
			nextNodeId: 15 }
		],
	},
	15 : {
		title: `iI take a step back. The old man claws at his neck, but can't find the jack.

		"Don't help him." My partner orders me.`,
		options: [
		  { title: `"Let's just go talk to that couple"`,
			nextNodeId: 16 },
		  { title: `"Let's just get to the guy"`,
			nextNodeId: 19 },
		],
	},
	16 : {
		title: `1We approach the couple. They lay against a torn leather sofa with their limbs entwined. His visor plugged into his neck, his visor into his. Both expressionless.
		I push my boot into the man's ribs and he grunts. This was hopeless.
		"Hey, you chose to speak to them.", my partner informs me as we return to the centre of the hallway.
		"Where next then?"`,
		options: [
		  { title: `"We've wasted enough time now, let's get to the guy"`,
			nextNodeId: 17 },
		],
	},
	17 : {
		title: `1Other Modders flee the room as we approach. The glare at us with a vacant stare. "Scum". "Scum".

		The guy's scream's abruptly halt as she claws for breath.
		Then they begin again. My partner rushes ahead.
		
		I stop.`,
		options: [
		  { title: "I see him",
			nextNodeId: 18 },
		],
	},
	18 : {
		title: `1The table shudders as she thrashes his body back and forth across it. His arms and legs are bound to each table leg. He cries out in agony, his eyes transfixed on the window of his visor. Blood pours from his bio-connector. I stare at his withered face. Scars connect from his mouth to him cheek, his eyes bloodshot and unfamiliar.
		
		"Look like you've seen a ghost", my partner studies my every move. He knows something is up. It doesn't matter either way.`,
		options: [
		  { title: "Hesitantly, I approach.",
			nextNodeId: 19 },
		],
	},
	19 : {
		title: `1My partner begins the procedure. He pulls out his visor and scans him.

		"His neural activity is hyperactive. Nothing showing on his visor though... looks like he's stuck in a render loop." He looks at me and continues. "He can't find what he's looking for".
		
		Suddenly I am flooded with debugging procedure; erase his memory, sever his connections. I made a mistake requesting this job. I shouldn't make this decision.
		
		"What do you think we should do?" He asks.`,
		options: [
		  { title: `"I'll cut the wires"`,
			required: ['Knife'],
			nextNodeId: 20,},
		  { title: `"Let's try diagnostic first"`,
			nextNodeId: 26,},
		  { title: `"Erase it all"		  `,
			nextNodeId: 30 },
		],
	},
	20 : {
		title: `"1Well, i think it is not really safe, but if you think it is right, then fine"

		You cut the wires connected to him, foam starts to come out of his mouth.
		
		"Is he dead?"

		After these words, the visor comes off his eyes. He is alive and very angry. 
		"Why did you disconnect me??"
		He pulls a gun out of his pocket and point it on my partner.
		`,
		options: [
		  { title: `Kill him with one of your own`,
			required: ['Gun'],
			nextNodeId: 21 },
		  { title: `Calm him down`,
			nextNodeId: 200 }
		],
	},
	25 : {
		title: `1You pull a gun out of your pocket and shoot him in the head.
		"Woah, thanks for saving me but you didn't really had to kill him"
		"I decieded quick"
		`,
		options: [
		  { title: "Get out of the building",
			nextNodeId: 100 },
		],
	},
	26 : {
		title: `1Partner uses his monitor to access an administration terminal. 
		TERMINAL ACCESS GRANTED
		`,
		options: [
		  { title: "RUN DIAGNOSTIC",
			nextNodeId: 27 },
		],
	},
	27 : {
		title: `1A stream of code runs down the monitor with functions labelled after memories.

		Some are clear fabrications; memories of sunshine, beaches and a birthday party. He probably payed good money for them.
		
		The functions vanish as the error is found, one memory stuck on an infinite loop.
		
		1 System Error Found;
		`,
		options: [
		  { title: "//infernium;",
			nextNodeId: 28 },
		],
	},
	28 : {
		title: `1"Here is the problem, he is high"
		"Expected"
		You pull out your medical suringe and put it in his veins,
		`,
		options: [
		  { title: "He wakes up",
			nextNodeId: 29 },
		],
	},
	29 : {
		title: `1"Uhhhh"
		"Are you fine?"
		"Yes i am just..."
		"Do you know where are you?"
		His face has no expression
		"He will we fine, we need to head back to the base"
		"Agree"
		`,
		options: [
			{ title: "RESTART",
			  nextNodeId: 1,
			  newState: {
				  Gun: false,
				  Knife: false
			  } },
		  ],
	},
	30 : {
		title: `1His body writhes and pulsates. His visor searches frantically for a window.
		
		"You really want to jump to an erase? I mean we can, it's just quite a jump", a look of understanding in his eyes. 
		`,
		options: [
			{ title: `"Yes, erase."`,
			  nextNodeId: 31,},
			  { title: `"No, let's try diagnostic"`,
			  nextNodeId: 27,},
		  ],
	},
	31 : {
		title: `1My partner looks at me, somehow disappointed, but I have learned a single truth in the past 23 years; you can't polish something that's broken.

		Millions of lines of code cross the screen in a flash, then again, then consistently.
		
		His eyes turn pale. Everything is taken away.
		 
		`,
		options: [
			{ title: `The program finishes`,
			  nextNodeId: 32,}
		  ],
	},
	32 : {
		title: `1His muscles relax, he falls limp. It's complete.

		My partner sighs and turns away. I lean over his body.I rest my hand against his forehead.
		
		Slowly his eyes begin to open.
		"We should go before he wakes, we'll send social services to see about this place", I order.
		
		Disgust and disappointment are shot at me from my partner's eyes. 
		 
		`,
		options: [
			{ title: `We retreat from the building`,
			  nextNodeId: 33,}
		  ],
	},
	33 : {
		title: `1"Do you think this was really necessary"
		"Yes, he was broken, i've already told you"
		`,
		options: [
			{ title: "RESTART",
			  nextNodeId: 1,
			  newState: {
				  Gun: false,
				  Knife: false
			  } },
		  ],
	},
	200 : {
		title: `1"Calm down, you don't have to do this!"
		"Shut up!"
		He shoots your partner in the head, and before you realize, you are dead too
		`,
		options: [
		  { title: "RESTART",
			nextNodeId: 1,
			newState: {
				Gun: false,
				Knife: false
			} },
		],
	},
	100 : {
		title: `1You pull a gun out of your pocket and shoot him in the head.
		"Woah, thanks for saving me but you didn't really had to kill him"
		"I decieded quick, i hate dealing with those junkies"
		You both get out of this building
		`,
		options: [
			{ title: "RESTART",
			  nextNodeId: 1,
			  newState: {
				  Gun: false,
				  Knife: false
			  } },
		  ],
	},
};

export default Game;