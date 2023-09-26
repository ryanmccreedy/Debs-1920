campaignTrail_temp.multiple_endings=true
campaignTrail_temp.candidate_image_url = 'https://i.imgur.com/TYrzFNg.png';
campaignTrail_temp.running_mate_image_url = 'https://i.imgur.com/Q5P70p9.jpg';
campaignTrail_temp.candidate_last_name = 'Debs';
campaignTrail_temp.running_mate_last_name = 'Stedman';
campaignTrail_temp.running_mate_state_id = '418';
campaignTrail_temp.player_answers = [];
campaignTrail_temp.player_visits = [];
campaignTrail_temp.answer_feedback_json = 1;
campaignTrail_temp.game_start_logging_id = '3668521';

campaignTrail_temp.jet_data = [{
    "nicknames": {
        "142": "Eugene Debs",
        "143": "Woody Wilson",
        "144": "Miles Poindexter"
    },
    "cyoa_enabled": true,
    "cyoa_data": {
        "1686324837335": {
            "answer": 4238,
            "question": "657",
            "id": 1686324837335
        },
        "1686361379073": {
            "answer": "4239",
            "question": "655",
            "id": 1686361379073
        },
        "1687311371115": {
            "answer": "4245",
            "question": "657",
            "id": 1687311371115
        },
        "1687314892779": {
            "answer": "4249",
            "question": "662",
            "id": 1687314892779
        },
        "1687390229792": {
            "answer": "4262",
            "question": "658",
            "id": 1687390229792
        },
        "1687390262460": {
            "answer": "4263",
            "question": "658",
            "id": 1687390262460
        },
        "1687393475094": {
            "answer": "4251",
            "question": "684",
            "id": 1687393475094
        },
        "1687393508661": {
            "answer": "4321",
            "question": "690",
            "id": 1687393508661
        },
        "1687399111988": {
            "answer": "4341",
            "question": "664",
            "id": 1687399111988
        },
        "1687399156238": {
            "answer": "4342",
            "question": "664",
            "id": 1687399156238
        },
        "1687399176445": {
            "answer": "4343",
            "question": "664",
            "id": 1687399176445
        },
        "1687399947660": {
            "answer": "4268",
            "question": "663",
            "id": 1687399947660
        },
        "1687400730539": {
            "answer": "4265",
            "question": "659",
            "id": 1687400730539
        },
        "1687402154764": {
            "answer": "4254",
            "question": "695",
            "id": 1687402154764
        },
        "1687402175356": {
            "answer": "4255",
            "question": "686",
            "id": 1687402175356
        },
        "1687402641543": {
            "answer": "4327",
            "question": "661",
            "id": 1687402641543
        },
        "1687402691889": {
            "answer": "4328",
            "question": "661",
            "id": 1687402691889
        },
        "1693867935246": {
            "answer": "4264",
            "question": "687",
            "id": 1693867935246
        },
        "1693872638228": {
            "answer": "4246",
            "question": "660",
            "id": 1693872638228
        },
        "1693955527694": {
            "answer": "4331",
            "question": "656",
            "id": 1693955527694
        },
        "1693955558005": {
            "answer": "4257",
            "question": "689",
            "id": 1693955558005
        },
        "1695173713411": {
            "answer": "4356",
            "question": "686",
            "id": 1695173713411
        },
        "1695173714027": {
            "answer": "4357",
            "question": "686",
            "id": 1695173714027
        },
        "1695177996978": {
            "answer": "15319",
            "question": "682",
            "id": 1695177996978
        }
    },
    "banner_data": {},
    "banner_enabled": false,
    "endings_enabled": false,
    "ending_data": {
        "1694395957259": {
            "id": 1694395957259,
            "variable": 0,
            "operator": ">",
            "value": 0,
            "endingImage": "",
            "endingText": "Put ending text here, you can and should use <p>HTML tags</p>!"
        }
    },
    "mapping_enabled": false,
    "mapping_data": {
        "mapSvg": ""
    }
}
]

endingPicker = (out, totv, aa, quickstats) => {

    used=false
    
    // Astro's Ending Template
    
    // Template 2 - 1v1 races, with ending (or endings) based on specific answer
    
    //out = "win", "loss", or "tie" for your candidate
    //totv = total votes in entire election
    //aa = all final overall results data
    //quickstats = relevant data on candidate performance (format: your candidate's electoral vote count, your candidate's popular vote share, your candidate's raw vote total)
    
    //quickstats[0] is the default, and it tracks your electoral vote count.
    
    // player_answers starts counting at 0, so it's checking for the answer on Question 25 here. 
    
    // If answer for question 25 is 8090, and you get at least 270 Electoral votes, and your running mate's last name is specified here, it'll give you this special ending. I used this for the 'A truce, not a compromise' ending in 1876.    

if (campaignTrail_temp.player_answers[2] == 4242 && campaignTrail_temp.running_mate_last_name == "Stedman") {
  //If you want to enable replacing the image based upon your performance, copy from here....
    if (used != true) {
        setInterval(function () {
            used = true;
            imgg = document.getElementsByClassName("person_image")[0];
            if (imgg != null) {
                imgg.src = "https://i.imgur.com/2P59HTE.jpg";
            }
        }, 100);
    }
    // to here!
   return "<h3>Journey's End</h3><div style='overflow-y: scroll;height: 17em;'><tbody style='display: flex;'><tr><td style='border: none;padding: 0px;<p style='margin-left: 0em;margin-right: 0em;'><p>You gave your life for the cause. For years you pushed yourself to exhaustion in the hope, no, the conviction, that one day the worker's movement would succeed and bring about a better world. You stood up for those women and children in Pullman, Illinois who were unable to afford anything more than bread and water and yet were forced to grind away their lives like feudal serfs. You stood by the cold and starving coal miners forced into tents in Colorado, and wept with them as the national guard brutally slaughtered them in broad daylight. You laughed with the workers in the bars and saloons of the nation, you fought for them when they faced the pointed end of a bayonet, and you grieved with them as they buried their dead. You brought hope when life seemed bitter and dreary, and you did it all with a smile on your face and a proud belief that the bitterness and the hardships that you and countless others experienced in your journey to save the world were merely the trials and tribulations that had always been suffered by the righteous in history; from Patrick Henry to Abraham Lincoln.</p><p>And then the war came. Angry mobs of anger began to roam the streets, and the people that you had loved so dearly looked at you with scorn, and it seemed that everything that you had spent so long working towards began to crumble. It did not make sense; how could such upright and good people so vigorously support a war that wasn't theirs? You did everything you could to oppose the war. You made pamphlets teaching young men how to avoid the draft. You wrote furiously debunking the propagandistic libel spewed by the British and their lackeys. You turned the entirety of your organization to focus on opposing the war in any way possible. But it wasn't enough. The super-patriots were too strong, the propaganda too convincing, the Kaiser too horrible an enemy, and your sway too weak.</p><p>And so, in a moment of weakness, you caved in. You gave an endorsement of the war. You couldn't oppose the people, so you went along with them. But then you realized what you had done. All of those pale and bloodless corpses strung up on the barbed wire fences were now your responsibility. You had condemned them to slaughter. You now sat guilty as a person complicit in the mass murder of the working class. This was not who you were, this was not what you had devoted your life to do. So you refused to participate. You retired from the movement, ashamed of what you had become. No longer did Eugene Debs stand up for the workers, no longer did you throw parties for the little children of Terre Haute. Now you sat in your home, broken and ashamed.</p><p>You kept this up for a while, occasionally breaking up the monotony by meeting with old friends and well-wishers or giving the occasional speech deploring the treatment given to anti-war dissidents and the poor. Your brother and your wife did everything they could to break you out of your self-imposed torment, but you knew that your time had come to an end. A new generation would pick up the torch and lead the nation where you had so bitterly failed, you hoped.</p><p>Eventually, at a certain age, when the mind gives up hope, the body isn't late to follow. Slowly your physical condition began to deteriorate, and the shadow of death could be seen a mile away. You grew ill with cancer, giving out as the last embers of the flame you had once so vigorously ignited against the system you despised so much slowly diminished. You wrote furiously denouncing the state of things as they were, supporting Comrade Lenin in his victory against the Whites in Russia, proclaiming death and destruction to those who dared fight against the arc of history. And then, one day, it stopped. Your breath grew increasingly labored, your head spun, and then it was over.</p><p>As for the party, they mourned your passing---tens of thousands turned out for your funeral---but time would go on as it always had. The left and right factions would never heal their differences, and two currents of your legacy would grow up in the shadow of your defeat, eventually positioning themselves as the Socialist Party of America and the Communist Party of the United States of America.</p><p>Kate Richards O'Hare would be placed as your replacement on the Presidential ticket of the Party, and she would make history as the first woman to receive a strong showing in a Presidential race, receiving over 500,000 votes. She would make her home in the right section of the party, eventually divorcing her husband in 1928 and moving out west to California where she would continue to organize for various progressive causes before passing away in 1948.</p><p>As for the nation, Miles Poindexter would acquiesce to the wishes of his party leadership and govern as a figurehead rather than as a dynamic leader. The nation would move past the pains of the war and use the expanded markets granted by victory to create one of the greatest eras of prosperity the world had ever seen. President Wilson would die in his sleep in 1922 after suffering many debilitating strokes, and the Democratic Party would slide into irrelevancy more or less as the 20s quickly became an era of Republican ascendency.</p><p>However, your legacy and that of what historians will one day term the Progressive Era will live on forever. Even a century into the future labor unions will sing songs written by your movement and make holidays in your honor. Schoolchildren and college students will pour over your essays and learn your name as they attempt to place exactly what you and your movement meant for the United States. Socialism may never find its home within America, sure, but people will always remember you as the person who came closest to making it so.</p>";
} 
else if (campaignTrail_temp.player_answers[5] == 4332 && campaignTrail_temp.running_mate_last_name == "Stedman") {
  //If you want to enable replacing the image based upon your performance, copy from here....
    if (used != true) {
        setInterval(function () {
            used = true;
            imgg = document.getElementsByClassName("person_image")[0];
            if (imgg != null) {
                imgg.src = "https://media.discordapp.net/attachments/704892659453657199/1148414676082892860/mass_grave.jpg";
            }
        }, 100);
    }
    // to here!
   return "<h3>Journey's End</h3><div style='overflow-y: scroll;height: 17em;'><tbody style='display: flex;'><tr><td style='border: none;padding: 0px;<p style='margin-left: 0em;margin-right: 0em;'><p>Well, at least you gave it a good run before your passing. You died as you lived, a rebel against the system. And yet in your passing, you have condemned the American Left to die. You risked it all, and by God did you lose. In the months following your failure of a rebellion, the pressure against your ideology will skyrocket to delusional proportions. Socialism and Communism will be officially banned in the United States. Every single one of your comrades from William Haywood to Emma Goldman to even Clarence Darrow's wife will find themselves facing the fullest extent of the law.</p><p>The AF of L will continue to hobble on as a glorified charity organization for skilled workers, but any man or woman brave enough to attempt to organize an industrial union will be taken to a jail cell, facing imprisionment or perhaps worse. The newspapers will print story after story denouncing any sort of mobocracy or populism as they see fit, slowly shifting the Overton window further and further away from the Left until even positions once seen as perfectly acceptable in 1912 will have the same effect as if one had just advocated for the direct importation of Bolshevik Communism to American shores. The loyalty clubs will not go away after the conclusion of the Great War but instead will continue to be a fact of American life until the 1930s.</p><p>The standpatters will rule the day, with Miles Poindexter embracing such arch-conservative ideals that it would make Nelson Aldrich blush. His administration will more or less be left to the whims of his cabinet rather than himself, with Andrew Mellon taking the highest influence as Vice President.</p><p>The working class will continue to live as it always had; however thankfully the expanded markets gained from victory in the Great War will result in economic prosperity for the average worker. New inventions like the automobile and the airplane and even fanciful devices constructed using electromagnetic technology will become the new wondrous toys of the modern world. The world will progress beyond you, but the pains of unemployment and pauperism will continue to plauge the United States for decades if not centuries to come.</p><p>In the political sphere the Democratic party will falter as its Left-Wing essentially finds itself persona non grata. The old urban machines of Alfred Smith and the like will continue to hold on, but the grand ideals that people like Samuel Gompers once had of the Democrats forming a Labor-esque party will dissipate into smoke. The two old parties will continue to exist, stable as rocks, at least for the forseeable future.</p><p>Thus leaves the world formed after the failure of Debs's Rebellion. Perhaps someday the founding principles of the nation will return on the wings of a shining progressive liberal, but there is an equal chance that America could find itself under the auspices of the likes of Henry Ford or Gerald L. K Smith.</p><p>And thus leaves you, Mr. Debs. Were you a rabble-rouser who made everything worse than when he found it? Or were you a martyr who sacrificed himself at the imperilment of others?</p>";
}
else if (campaignTrail_temp.player_answers[5] == 4333 && campaignTrail_temp.running_mate_last_name == "Stedman") {
  //If you want to enable replacing the image based upon your performance, copy from here....
    if (used != true) {
        setInterval(function () {
            used = true;
            imgg = document.getElementsByClassName("person_image")[0];
            if (imgg != null) {
                imgg.src = "https://media.discordapp.net/attachments/704892659453657199/1148414676082892860/mass_grave.jpg";
            }
        }, 100);
    }
    // to here!
   return "<h3>Journey's End</h3><div style='overflow-y: scroll;height: 17em;'><tbody style='display: flex;'><tr><td style='border: none;padding: 0px;<p style='margin-left: 0em;margin-right: 0em;'><p>Well, at least you gave it a good run before your passing. You died as you lived, a rebel against the system. And yet in your passing, you have condemned the American Left to die. You risked it all, and by God did you lose. In the months following your failure of a rebellion, the pressure against your ideology will skyrocket to delusional proportions. Socialism and Communism will be officially banned in the United States. Every single one of your comrades from William Haywood to Emma Goldman to even Clarence Darrow's wife will find themselves facing the fullest extent of the law.</p><p>The AF of L will continue to hobble on as a glorified charity organization for skilled workers, but any man or woman brave enough to attempt to organize an industrial union will be taken to a jail cell, facing imprisionment or perhaps worse. The newspapers will print story after story denouncing any sort of mobocracy or populism as they see fit, slowly shifting the Overton window further and further away from the Left until even positions once seen as perfectly acceptable in 1912 will have the same effect as if one had just advocated for the direct importation of Bolshevik Communism to American shores. The loyalty clubs will not go away after the conclusion of the Great War but instead will continue to be a fact of American life until the 1930s.</p><p>The standpatters will rule the day, with Miles Poindexter embracing such arch-conservative ideals that it would make Nelson Aldrich blush. His administration will more or less be left to the whims of his cabinet rather than himself, with Andrew Mellon taking the highest influence as Vice President.</p><p>The working class will continue to live as it always had; however thankfully the expanded markets gained from victory in the Great War will result in economic prosperity for the average worker. New inventions like the automobile and the airplane and even fanciful devices constructed using electromagnetic technology will become the new wondrous toys of the modern world. The world will progress beyond you, but the pains of unemployment and pauperism will continue to plauge the United States for decades if not centuries to come.</p><p>In the political sphere the Democratic party will falter as its Left-Wing essentially finds itself persona non grata. The old urban machines of Alfred Smith and the like will continue to hold on, but the grand ideals that people like Samuel Gompers once had of the Democrats forming a Labor-esque party will dissipate into smoke. The two old parties will continue to exist, stable as rocks, at least for the forseeable future.</p><p>Thus leaves the world formed after the failure of Debs's Rebellion. Perhaps someday the founding principles of the nation will return on the wings of a shining progressive liberal, but there is an equal chance that America could find itself under the auspices of the likes of Henry Ford or Gerald L. K Smith.</p><p>And thus leaves you, Mr. Debs. Were you a rabble-rouser who made everything worse than when he found it? Or were you a martyr who sacrificed himself at the imperilment of others?</p>";
}
else if (campaignTrail_temp.player_answers[15] == 4256 && campaignTrail_temp.running_mate_last_name == "Stedman") {
  //If you want to enable replacing the image based upon your performance, copy from here....
    if (used != true) {
        setInterval(function () {
            used = true;
            imgg = document.getElementsByClassName("person_image")[0];
            if (imgg != null) {
                imgg.src = "https://media.discordapp.net/attachments/704892659453657199/1148414676082892860/mass_grave.jpg";
            }
        }, 100);
    }
    // to here!
   return "<h3>Journey's End</h3><div style='overflow-y: scroll;height: 17em;'><tbody style='display: flex;'><tr><td style='border: none;padding: 0px;<p style='margin-left: 0em;margin-right: 0em;'><p>Well, at least you gave it a good run before your passing. You died as you lived, a rebel against the system. And yet in your passing, you have condemned the American Left to die. You risked it all, and by God did you lose. In the months following your failure of a rebellion, the pressure against your ideology will skyrocket to delusional proportions. Socialism and Communism will be officially banned in the United States. Every single one of your comrades from William Haywood to Emma Goldman to even Clarence Darrow's wife will find themselves facing the fullest extent of the law.</p><p>The AF of L will continue to hobble on as a glorified charity organization for skilled workers, but any man or woman brave enough to attempt to organize an industrial union will be taken to a jail cell, facing imprisionment or perhaps worse. The newspapers will print story after story denouncing any sort of mobocracy or populism as they see fit, slowly shifting the Overton window further and further away from the Left until even positions once seen as perfectly acceptable in 1912 will have the same effect as if one had just advocated for the direct importation of Bolshevik Communism to American shores. The loyalty clubs will not go away after the conclusion of the Great War but instead will continue to be a fact of American life until the 1930s.</p><p>The standpatters will rule the day, with Miles Poindexter embracing such arch-conservative ideals that it would make Nelson Aldrich blush. His administration will more or less be left to the whims of his cabinet rather than himself, with Andrew Mellon taking the highest influence as Vice President.</p><p>The working class will continue to live as it always had; however thankfully the expanded markets gained from victory in the Great War will result in economic prosperity for the average worker. New inventions like the automobile and the airplane and even fanciful devices constructed using electromagnetic technology will become the new wondrous toys of the modern world. The world will progress beyond you, but the pains of unemployment and pauperism will continue to plauge the United States for decades if not centuries to come.</p><p>In the political sphere the Democratic party will falter as its Left-Wing essentially finds itself persona non grata. The old urban machines of Alfred Smith and the like will continue to hold on, but the grand ideals that people like Samuel Gompers once had of the Democrats forming a Labor-esque party will dissipate into smoke. The two old parties will continue to exist, stable as rocks, at least for the forseeable future.</p><p>Thus leaves the world formed after the failure of Debs's Rebellion. Perhaps someday the founding principles of the nation will return on the wings of a shining progressive liberal, but there is an equal chance that America could find itself under the auspices of the likes of Henry Ford or Gerald L. K Smith.</p><p>And thus leaves you, Mr. Debs. Were you a rabble-rouser who made everything worse than when he found it? Or were you a martyr who sacrificed himself at the imperilment of others?</p>";
}
else if (campaignTrail_temp.player_answers[13] == 4335 && campaignTrail_temp.running_mate_last_name == "Stedman") {
  //If you want to enable replacing the image based upon your performance, copy from here....
    if (used != true) {
        setInterval(function () {
            used = true;
            imgg = document.getElementsByClassName("person_image")[0];
            if (imgg != null) {
                imgg.src = "https://i.imgur.com/KK7RpLO.png";
            }
        }, 100);
    }
        // to here!
   return "<h3>Journey's End</h3><div style='overflow-y: scroll;height: 17em;'><tbody style='display: flex;'><tr><td style='border: none;padding: 0px;<p style='margin-left: 0em;margin-right: 0em;'><p>When it became clear that Miles Poindexter was going to win the White House you didn't feel much hope or excitement. His red-baiting and jingoism were just as matched as Wilson's in their ferocity and spitefulness. Repeatedly, particularly after your editorial calling out his two-faced nature on the IWW and Progressivism in general, he denounced you and refused any calls for pardon or even commuting your sentence. And so it was for a year or so after the election, with the days continuing to bleed on in their grey monotony, the ranks of your fellow prisoners slowly dwindling as Poindexter approved a new series of Alien Acts that allowed for the deportation of all of your comrades born on foreign shores to Soviet Russia.</p><p>No longer overcrowded and the sympathy of the warden and guards still as strong as ever you found prison life far easier than it had been. By this point, the Legion and President Wilson had more important issues to fret over than some old crank in jail, so your good treatment remained unmolested. Thus lies the situation when on Christmas Eve, 1921, a letter came through the mail for you to meet with Attorney General Charles Evans Hughes on January 2nd.</p><p>Stunned by the news the holiday season seemed to blur together as the excitement of your meeting at the White House overtook your conscience. Your fellow prisoners could hardly believe it, and you promised to tell them every detail that was to arise from this bizarre meeting.</p><p>Once in Washington, you found yourself escorted not just to the Attorney General but to President Poindexter himself. There you found Hughes and Poindexter sat, their expressions stern but oddly defferential.</p><p>The meeting progressed more like a confession than a commutation. Both men expressed their apologies for their nature of cowardice towards the authoritarian powers of the country, and for their hasty judgment in denouncing you as an Anarchist Revolutionist. You nodded your head acceptingly, but in complete shock at hearing these seeming titans of power and influence mutter their sorries to you like embarrassed schoolchildren. They further declared their commitment to humanitarianism and the betterment of all mankind, but you could only cringe as you knew that the time when their words might have been genuine had passed a long time ago.</p><p>At any rate, they announced that you and a few others who had sufficient good behavior were to be released on Easter in celebration of the Lord's resurrection and redemption of Man and that the government raids against the Socialist Party were to cease at once. You nodded with joy as a small air of celebration could be felt in the room as every man felt happy that the armageddon that Theodore Roosevelt had once warned of truly seemed to be over.</p><p>And so you were released on Easter Sunday 1922. Your activities were far less in their intensity---old age would do that to any man---but you continued in your role as the elder statesman of Socialism in the United States in addition to being the kind old crank who still threw ice cream parties for the families of Terre Haute. Disgusted at the behavior of the SPA executive council (most among them Victor Berger) you would shrink in your leadership in the party and generally commit to a position of Socialist non-partisanship, finding equal ground in both the old party and the new Communist parties. In 1924 you would negotiate the merger of the SPA and Robert LaFollette's new Progressive Party, fighting one last battle as the progressive era began to disspiate, replaced with the commotion of the nascent Roaring 20s. You would continue your work until your dying breath in 1926, with tens of thousands attending your funeral in Terre Haute.</p><p>The world after your death would march forward, your predictions of a final crisis seemingly coming true in 1929 with the advent of the Great Depression, with both your party and the Communists finding relative success in their endeavors, but nowhere that to which you had.</p><p>Socialism would never come to the United States, but you would always be remembered as the man who came closest to making it so, in the words of George Bernard Shaw; <q>We shouldn't be too hard on America for not realizing that it her great men and women that are being sent to prison and that it is the small men and a big mob that are sending them there. Yet, I don't understand how the stupidest neighbor of a man like Eugene Debs can fail to understand his heart. I can feel it here, nearly four thousand miles away.</q>.";
} 
else if (campaignTrail_temp.player_answers[16] == 4339 && campaignTrail_temp.running_mate_last_name == "Stedman") {
  //If you want to enable replacing the image based upon your performance, copy from here....
    if (used != true) {
        setInterval(function () {
            used = true;
            imgg = document.getElementsByClassName("person_image")[0];
            if (imgg != null) {
                imgg.src = "https://media.discordapp.net/attachments/704892659453657199/1150627935481499710/debs.png";
            }
        }, 100);
    }
    // to here!
   return "<h3>The Old Umbrella Mender</h3><div style='overflow-y: scroll;height: 17em;'><tbody style='display: flex;'><tr><td style='border: none;padding: 0px;<p style='margin-left: 0em;margin-right: 0em;'><p>You feel the piercing bullet wounds strike you and your comrade, the harsh sting slowly dissipating into nothing as you can feel yourself leaving this world. You close your eyes for your final sleep, content that you have done all that you could do.</p><p>You open your eyes and find yourself in a pleasant meadow, not too dissimilar to the park you used to frequent in Terre Haute. You're dressed in a plain brown suit with a red tie. You walk around for a bit and find a bench to sit on. After some time you turn around to see someone you thought had gone a very long time ago.</p><p>A black-cloaked figure with kind eyes and well-worn hands walks up to you.</p><p><q>It was an honor to be featured in your writings, Mr. Debs. After I had met you that one day in November I had feared that we might never see each other again.</q></p><p><q>Please sir the honor is all yours. You're a far better man than I ever was. Look at what my schemes have brought; how many have died? How many have been hurt? I'm a murderer, sir. A plain died-in-the-wool murderer. Why am I even here? What did I ever do? I gave the masses false hope for a better world and my foolish decisions led them all to their deaths. Why, even now, with your face reflecting your full nobility, I can hardly bear the guilt that I feel to look upon you, you veteran of the industrial war, you humble rail worker, you who represents everything that I should have been. Even though I hardly had the common sense to take you in as a friend after our conversation you still approached me and treated me with the utmost kindness and respect. Why? Why am I not with the rest of the murderers of history? Was what I said really that important? Were my words really that impactful? Why do you still speak of me in love?</q></p><p>The man shrugged; <q>I cannot answer that Mr. Debs, that's something only God can. I do not know why fate had you of all people be the leader of the American worker's movement. But what I can say is that you were full of more compassion and virtue than any union leader I'd ever met. Not even my sons bothered to support me in my old age, and yet you emptied your pockets at the first sight of my condition. That's why we backed you, Gene, because we knew that you were honest. You were not like Gompers or Stone or Carter. You cared about us and fought to make our lives better. Not out of any desire for power and earthly riches but because you knew in your heart that it was the right thing to do. You did not kill us, we were killed by the system that you died to attempt to destroy. You might have failed, but what you stood for lives on. You died for what is good. So don't drag yourself into self-pity, that's where demons dwell. Be joyful, because you did what was right.</q></p><p>Before you can respond, everything fades to black.</p>";
}
else if (campaignTrail_temp.player_answers[18] == 4316 && campaignTrail_temp.running_mate_last_name == "Stedman") {
    //If you want to enable replacing the image based upon your performance, copy from here....
    if (used != true) {
        setInterval(function () {
            used = true;
            imgg = document.getElementsByClassName("person_image")[0];
            if (imgg != null) {
                imgg.src = "https://i.imgur.com/Aex6URK.png";
            }
        }, 100);
    }  
    // to here!
   return "<h3><q>Our Mission is as Certain as the Setting of the Sun<q></h3><div style='overflow-y: scroll;height: 17em;'><tbody style='display: flex;'><tr><td style='border: none;padding: 0px;<p style='margin-left: 0em;margin-right: 0em;'><p>You look around at the scene of death before you. Dozens if not hundreds of men lay scattered about the town of New Castle. Despite all of your rhetoric, all of you calls for Revolution, and all of your praise and apologism of the Bolsheviki, you can hardly contain yourself at the sheer sense of pain and guilt as you see bloodied corpses all around you. The shock of victory is still strong and adrenaline is pumping throughout not only yourself but all of your comrades. The air is tense, quiet, and celebratory as the workers cheer that their foolish gambit seemed to have paid off, though you notice several bone-pale faces in the ranks as well.</p><p>After the general anxiety begins to settle you give a rousing speech declaring that the struggle had only just begun and that the future looked grand for Socialism and the Workers. The crowd cheers and chants your name as the Revolution, finally, after years and years of oratory and gradualism, seems at hand.</p><p>Soon more and more workers leave their homes and join your army, exhilerated and fearful as to what this new state of affairs could mean. You get telegrams from Pittsburgh and the surrounding industrial cities announcing their seizure. You hear nothing from Philaedelphia and Cleveland and can only assume the worst, but with every passing hour it seems your <q>lieutenants<q> report more and more joining your ranks.</p><p>On the outside you are the epitome of optimism and fanaticism. You convey an aura of leadership and certainty of victory that everyone in your company can't help but be influenced by your magnetic positivism and charm. But inside you feel more terrified than you ever had in your life. You remember what happened after Pullman. You remember those massive throngs of unemployed railroad men that tramped the cities for years all because of your poor leadership. You swear to yourself that you would never allow it to happen again, but as you look at the happy faces of the overworked and destitute, you cannot help but to see visions of their bodies charred and smoldering in some field or seeing their feet dangle at the long end of a rope.</p><p>You wonder if this is how Jefferson and Lincoln felt at the onset of the first Revolution and the Civil War; how the Parisians felt when they overthrew the horrible despotism of Louis Phillipe. Despite your misgivings you know that you must be strong. You know that you have to win; for the millions of working men, women, and children who deserved a better future. So in that moment you steeled yourself. You vowed that if it ever came to it you would kill the robber barons yourself or die trying. The age of romanticism and liberalism, of Debs the great humanitarian, Debs the great liberal; was over. Now, it was the age of industry; now was the age of the Soviet, now it was the age of blood.</p>";
} 
else if (campaignTrail_temp.player_answers[2] == 4245 && campaignTrail_temp.running_mate_last_name == "Stedman") {
    //If you want to enable replacing the image based upon your performance, copy from here....
    if (used != true) {
        setInterval(function () {
            used = true;
            imgg = document.getElementsByClassName("person_image")[0];
            if (imgg != null) {
                imgg.src = "https://i.imgur.com/uc2IlsX.png";
            }
        }, 100);
    }  
    // to here!
   return "<h3><q><i>Socialist Call December 1st 1919</i>; Obituaries from Contemporary Writers on the Martyrdom of Debs</q></h3><div style='overflow-y: scroll;height: 17em;'><tbody style='display: flex;'><tr><td style='border: none;padding: 0px;<p style='margin-left: 0em;margin-right: 0em;'><p>COMRADE FROM CHICAGO:</p><p><q>Dear Gene, you will always be close to us. The only way we can decently remember you and what you left with us here will be a certain way of living it, maybe dying it.</q></p><p>COMRADE FROM BOSTON:</p><p><q>You can so well imagine how badly I felt when I heard the death of news of your and the brother and comrade of all the workers class, the father and the friendship of children, it was worse and a thundry storm passed over my heart. I know that is our fate and in struggle for workers we all go to die, but the death of this taught master, the statuor of this grand American socialist, the giant oak of this faithful idealiste it is a great lost for all the humanity. I would if I could describe to you all the pain I feel for the lost of the martyr of this idea, but it seems that all my ideas, all my expressions of words are dying in my brain; But --- Whatever, I want to reach these sadness day, so I could write and join with you. Best wishes to all of you and best kisses to Mrs. Debs from all of the little ones in my household we join in brotherly and fraternal embrace.</q></p><p>COMRADE FROM NEW YORK:</p><p><q>So long as life endures I shall carry in my heart an abiding love for Gene Debs, and to my dying day I shall always regret that the fates conspired me from seeing him and and telling him why I never wrote to him. This is the reason: last I saw him, at Pittsburg in 1914, I was a physical wreck, a walking shadow, having been beaten to a pulp in Poughkeepsie, N.Y., in the fall of 1912 while speaking for the Socialist party. The movement is a soul-less thing at best, I had given it my youth and young manhood freely, gladly, but when wrecked I could crawl off out of sight and die to die like a wounded animal. That. however, was far from the attitude of Gene: he folded me to his bosom in the lobby of the Colonial Hotel and attempted to force me to accept $300 from him personally in order that I might go to the mountains and make a fight to recover my health. Of course I could not and would not accept the generous offer from comrade Debs. In the meantime life has been hard, often very hard, and we have lived hand to mouth, and I did not want to burden Gene out of shame. I have not stood on the platform for years, but that ends today. I must pay my tribute to Gene, because he did what I was too much of a coward to do. He died, and if he could die, then I must be prepared to in order to honor the memory of the dearest comrade in the American Movement. I know that you will be swamped with telegrams and letters, please do not make this a hasty note.</q></p><p>COMRADE FROM INDIANA:</p><p><q>We have lost one of the world's greatest humanitarians. His beneficent influence did not end when the Gates swung open for him, but the inspiration of his example will abide wherever there are hungry to be fed and sick to be comforted, and wherever greed demands that God's worthy poor be offered as a sacrifice on the altar of oppression. I had known him for more than thirty years, and I never ceased to admire him for his human impulses, his unbounded sympathies, and his great, loving heart. He was a great leader among men, but he was something more--- he was a real friend, and that is the most and the best that can be said of any man. May the dogs and cowards who did this horrible deed, who entered us into this calamity, rot.</q></p><p>THE LAST TESTAMENT OF GENE DEBS:</p><p>It matters not how straight the gate,</p><p>How charged with punishment the scroll,</p><p>I am the master of my fate,</p><p>I am the captain of my soul.</p>";
}
else {
return "<h3>Huh, that's odd. The mod seems broken.</h3><p>Thank you for playing, hope you had a good experience. Please DM u/working-lack8682 and I'll try and fix it as soon as possible.</p>"
}
}

if (!e.done) {
    e.done = true
 // Initialise custom music
  
  $("#music_player")[0].children[0].style.display="none"
  $("#music_player")[0].children[1].style.display="none"
  
  document.getElementById("modLoadReveal").style.display="none"
  document.getElementById("modloaddiv").style.display="none"
  
  musicBox = document.getElementById("music_player")
  musicBox.style.display=""
  
  var trackSel;
  e = campaignTrail_temp
  e.selectedSoundtrack = 0
  
  toTime = (seconds) => {
    var date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  }
  
  generateTime = () => {
      // Get the audio element
      var audio = document.getElementById("campaigntrailmusic");
  
      timeTracker = document.createElement("div");
      timeTracker.style = `
        text-align:left;
        border-style:solid;
        border-width:3px;
        height:150px;
        width:200px;
        background-color:#999999;
        float:right;
        padding: 10px;
      `
      $("#trackSelParent")[0].prepend(timeTracker);
      $("#trackSelParent")[0].prepend(document.createElement("br"));
  
      // Create a new element to display the current position of the audio
      var positionDisplay = document.createElement("gg");
      positionDisplay.id = "position-display";
  
      // Create a new slider element to change the time
      var timeSlider = document.createElement("input");
      timeSlider.type = "range";
      timeSlider.min = 0;
      timeSlider.max = 1;
      timeSlider.step = 0.001;
      timeSlider.value = 0;
      timeSlider.style.width = "200px";
      timeSlider.id = "time-slider";
  
      var pausePlay = document.createElement("button");
      pausePlay.id = "position-display";
      pausePlay.innerHTML = "<b>Pause</b>"
      pausePlay.style.width = "100%";
  
  
      pausePlay.addEventListener("click", event => {
        event.preventDefault();
        updatePositionDisplay();
        let audio = document.getElementById("campaigntrailmusic");
        if (audio.paused) {
          audio.play();
          event.target.innerHTML = "<b>Pause</b>";
          return;
        }
        audio.pause();
        event.target.innerHTML = "<b>Play</b>";
        return;
      })
  
      var volumeLabel = document.createElement("gg");
      volumeLabel.id = "volume-label";
      volumeLabel.innerHTML = "<br><b>Volume: </b>"
  
      var volumeSlider = document.createElement("input");
      volumeSlider.type = "range";
      volumeSlider.min = 0;
      volumeSlider.max = 1;
      volumeSlider.step = 0.001;
      volumeSlider.value = 0;
      volumeSlider.style.width = "200px";
      volumeSlider.id = "volume-slider";
  
      volumeSlider.value = audio.volume;
  
      timeTracker.appendChild(pausePlay);
      timeTracker.appendChild(document.createElement("br"));
      timeTracker.appendChild(document.createElement("br"));
      timeTracker.appendChild(positionDisplay);
      timeTracker.appendChild(timeSlider);
      timeTracker.appendChild(volumeLabel);
      timeTracker.appendChild(volumeSlider);
  
      updatePositionDisplay();
  
      //for (let i = 0; i < 10; i++)
      //timeTracker.append(document.createElement("br"));
  
  
      // Function to update the position display
      function updatePositionDisplay() {
        positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
        timeSlider.value = audio.duration ? audio.currentTime / audio.duration : 0;
      }
  
      // Function to change the time of the audio
      function changeTime() {
        positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
        audio.currentTime = timeSlider.value * audio.duration;
      }
  
      updateVolume = event => {
        audio.volume = event.target.value;
      }
      
      // Update the position display and slider every second
      setInterval(updatePositionDisplay, 1000);
  
      // Listen for changes to the time slider and change the time of the audio
      timeSlider.addEventListener("input", changeTime);
      volumeSlider.addEventListener("input", updateVolume)
  }
  
  function newMusicPlayer() {
    trackSel = document.createElement("div");
    trackSel.id = "trackSelParent"
    let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:400px;background-color:#999999;float:right;">`
    z += `<b><select id='selectSoundtrack'><option value='`+soundtracks[e.selectedSoundtrack].name+`'>`+soundtracks[e.selectedSoundtrack].name+"</option>"
    for (i in soundtracks) {
      if (soundtracks[e.selectedSoundtrack] != soundtracks[i]) {
        z += `<option value='`+soundtracks[i].name+`'>`+soundtracks[i].name+`</option>`
      }
    }
    z += `</select></b><br><br>`
    // <label><input type="radio" name="option" value="option1">Option 1</label><br>
    for (i in soundtracks[e.selectedSoundtrack].tracklist) {
      let a = soundtracks[e.selectedSoundtrack].tracklist[i]
      let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="`+i+`">`+a.name+`</label><br>`
      z += b
    }
    z += "</div><br><br>"
    trackSel.innerHTML = z
  
    // select correct song
  
    musicBox.appendChild(trackSel);
    Array.from(document.getElementById("trackSel").children).filter(f=>{
      return f.tagName == "LABEL"
    }).map(f=>f.children[0])[0].checked = true
  
    // set soundtrack changer
  
    soundtrackSelector = document.getElementById("selectSoundtrack")
    soundtrackSelector.onchange = function() {
      for (i in soundtracks) {
        if (soundtracks[i].name == soundtrackSelector.value) {
          e.selectedSoundtrack = i
          break
        }
      }
      document.getElementById("trackSelParent").remove()
      newMusicPlayer()
    }
  
    var matches = document.querySelectorAll('.trackSelector');
  
    for (match in matches) {
      matches[match].onchange = function() {
        audio = $("#campaigntrailmusic")[0];
        audio.src = soundtracks[e.selectedSoundtrack].tracklist[this.value].url
        audio.currentTime = 0
      }
    }
  
    musicBox.children[2].loop = false
    musicBox.children[2].src = soundtracks[e.selectedSoundtrack].tracklist[0].url
  
    musicBox.children[2].onended = function() {
      console.log("next track")
      let selected = Number(document.querySelector('input[name="trackSelector"]:checked').value);
      let newSel = clamp(selected+1, soundtracks[e.selectedSoundtrack].tracklist.length-1, 0)
      let buttons = Array.from(document.getElementById("trackSel").children).filter(f=>{
        return f.tagName == "LABEL"
      }).map(f=>f.children[0])
      //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
      buttons[newSel].click()
    }
  
    for (w = 0; w < 7; w++) {
      document.getElementById("trackSelParent").appendChild(document.createElement("br"))
    }
    
    generateTime();
  }
  
  clamp = function(a, max, min, overflow=true) {
    if (overflow) {
      return a > max ? min : a < min ? max : a;
    }
    return a > max ? max : a < min ? min : a;
  }
  
  
  // Track list
  
  var soundtracks = {
    0: {
      name: "Radical Hymns",
      tracklist: [
        {
            "name": "Intro",
            "url": "https://cdn.discordapp.com/attachments/1155662381511356559/1156248041926447195/intro-to-the-iww-audiotrimmercom_dP1DNRc3.mp3?ex=65144767&is=6512f5e7&hm=82c22d8eee2d4c951b0c09b2ca9450a852a3396ff31001a3552e2af6828dafae&"
          },
        {
          "name": "The Strange Death of John Doe",
          "url": "https://cdn.discordapp.com/attachments/1155662381511356559/1155662413056721036/The_Almanac_Singers_-_The_Strange_Death_of_John_Doe.mp3"
        },
        {
          "name": "Solidarity Forever",
          "url": "https://cdn.discordapp.com/attachments/1155662381511356559/1155871841060126730/Solidarity_Forever_altered_to_sound_vry_old_-_Copy-AudioTrimmer.com.mp3"
        },
        {
          "name": "Should I Ever be a Soldier",
          "url": "https://cdn.discordapp.com/attachments/1155662381511356559/1155872345932709888/Should_i_ever_be_a_soldier_-_Joe_Hill_-_Mats_Paulson.mp3"
        },
        {
          "name": "Hallelujah I'm a Bum",
          "url": "https://cdn.discordapp.com/attachments/1155662381511356559/1155872820300103680/HALLELUJAH_IM_A_BUM_-_Harry_MAC_McClintock_-_1928.mp3"
        },
        {
          "name": "Dump the Bosses Off Your Back",
          "url": "https://cdn.discordapp.com/attachments/1155662381511356559/1156250268917321798/Forgotten_History._Bill_Haywood_and_the_IWW-AudioTrimmer.com.mp3?ex=6514497a&is=6512f7fa&hm=4e5e378c70cd2483a7dc3ee93ba2af68274168bdca53d311372314ebf3703feb&"
        },
        {
            "name": "There is Power in a Union",
            "url": "https://cdn.discordapp.com/attachments/1155662381511356559/1156031615919726622/Power_In_A_Union_mass_choir_IFF2015.mp3?ex=65137dd7&is=65122c57&hm=0d3ab94866fc0ba151e56f61871e58297e1977d3301a99ba7a29bfa8f73f76c9&"
          },
      ]
    }
  }
  
  // Set up new music player
  
  newMusicPlayer()
  
}

campaignTrail_temp.cyoa = true;

function getQuestionNumberFromPk(pk) {
    return campaignTrail_temp.questions_json.map(q=>q.pk).indexOf(pk)-1;
}

cyoAdventure = function (a) {
    ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length-1];

    if (ans == 4238) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(657);
    }
    else if (ans == 4339) {
        campaignTrail_temp.question_number = 24
    }
    else if (ans == 4316) {
        campaignTrail_temp.question_number = 24
    }
    else if (ans == 4239) {
        campaignTrail_temp.candidate_image_url = 'https://media.discordapp.net/attachments/704892659453657199/1150990083751690340/jumped-up_union_man.png';
        campaignTrail_temp.candidate_json[0]["fields"].electoral_victory_message = "<h3>richards win placeholder</h3>";
        campaignTrail_temp.candidate_json[0]["fields"].electoral_loss_message = "<h3>richards loss placeholder</h3>";
        campaignTrail_temp.question_number = getQuestionNumberFromPk(655);
    }
    else if (ans == 4335) {
        campaignTrail_temp.question_number = 24
    }
    else if (ans == 4245) {
        campaignTrail_temp.question_number = 24
    }
    else if (ans == 4249) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(662);
    }
    else if (ans == 4262) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(658);
    }
    else if (ans == 4263) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(658);
    }
    else if (ans == 4251) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(684);
    }
    else if (ans == 4321) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(690);
    }
    else if (ans == 4341) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(664);
    }
    else if (ans == 4342) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(664);
    }
    else if (ans == 4343) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(664);
    }
    else if (ans == 4268) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(663);
    }
    else if (ans == 4265) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(659);
    }
    else if (ans == 4255) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(686);
    }
    else if (ans == 4327) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(661);
    }
    else if (ans == 4328) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(661);
    }
    else if (ans == 4264) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(687);
    }
    else if (ans == 4246) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(660);
    }
    else if (ans == 4331) {
        campaignTrail_temp.candidate_image_url = 'https://i.imgur.com/qSvCA76.png';
        campaignTrail_temp.candidate_json[0]["fields"].first_name = "";
        campaignTrail_temp.candidate_json[0]["fields"].last_name = "Banned";
        campaignTrail_temp.candidate_json[0]["fields"].electoral_victory_message = "<h3>richards win placeholder</h3>";
        campaignTrail_temp.candidate_json[0]["fields"].electoral_loss_message = "<h3>richards loss placeholder</h3>";
        campaignTrail_temp.question_number = getQuestionNumberFromPk(656);
    }
    else if (ans == 4257) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(689);
    }
    else if (ans == 15319) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(682);
    }
    else if (ans == 4242) {
        campaignTrail_temp.candidate_json[0]["fields"].first_name = "Kate Richards";
        campaignTrail_temp.candidate_json[0]["fields"].last_name = "O'Hare";
        campaignTrail_temp.candidate_json[0]["fields"].image_url = "https://i.imgur.com/maM5UCV.png";
        campaignTrail_temp.candidate_json[0]["fields"].electoral_victory_message = "<h3>richards win placeholder</h3>";
        campaignTrail_temp.candidate_json[0]["fields"].electoral_loss_message = "<h3>richards loss placeholder</h3>";
        campaignTrail_temp.question_number = 24;
    }
    else if (ans == 4332) {
        campaignTrail_temp.candidate_json[0]["fields"].first_name = "";
        campaignTrail_temp.candidate_json[0]["fields"].last_name = "Banned";
        campaignTrail_temp.candidate_json[0]["fields"].electoral_victory_message = "<h3>richards win placeholder</h3>";
        campaignTrail_temp.candidate_json[0]["fields"].electoral_loss_message = "<h3>richards loss placeholder</h3>";
        campaignTrail_temp.question_number = 24
    }
    else if (ans == 4333) {
        campaignTrail_temp.candidate_json[0]["fields"].first_name = "";
        campaignTrail_temp.candidate_json[0]["fields"].last_name = "Banned";
        campaignTrail_temp.candidate_json[0]["fields"].electoral_victory_message = "<h3>richards win placeholder</h3>";
        campaignTrail_temp.candidate_json[0]["fields"].electoral_loss_message = "<h3>richards loss placeholder</h3>";
        campaignTrail_temp.question_number = 24
    }
    else {
        return false;
    }
}

campaignTrail_temp.questions_json = [
    {
        "model": "campaign_trail.question",
        "pk": 654,
        "fields": {
            "priority": 1,
            "description": "It is May 1918 and President Wilson has recently signed the Espionage and Sedition Acts into law, essentially giving a legal rubber stamp to the massive campaign of oppression that has been de-facto proliferated against anti-war dissidents of all stripes. How will you react to this calamitous development?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 657,
        "fields": {
            "priority": 2,
            "description": "Well, now you've really done it. You are now due to face trial in Cleveland for obstructing American involvement in the war. What will you say in your defense, Gene?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 655,
        "fields": {
            "priority": 2,
            "description": "The Party and the American Left are in an uproar over your editorial officially endorsing a war you were denouncing in the strongest terms not even a week ago. How will you even begin to defend yourself and keep your party united after such a shocking turn-around?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 662,
        "fields": {
            "priority": 4,
            "description": "Your house becomes a second-party headquarters as you spend your final months of freedom within Terre Haute before being confined to prison in West Virginia. How will you spend this time?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 658,
        "fields": {
            "priority": 4,
            "description": "It is April 1919 and you have arrived in Cleveland to officially begin your sentence. Is there anything that you would like to say in these final moments before you're shipped to prison in West Virginia?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 687,
        "fields": {
            "priority": 4,
            "description": "It is April 1919 and you have arrived in Cleveland to officially begin your sentence. After a final party meeting at the local Gillsy House, a strike among streetcar workers results in a complete shutdown of Cleveland traffic. Is there anything that you'd like to say before starting your sentence?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 684,
        "fields": {
            "priority": 4,
            "description": "You arrive at Moundsville State Penitentiary. Much to your surprise, you have been granted preferred treatment by the warden. How will you make most of your time?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 690,
        "fields": {
            "priority": 4,
            "description": "In June 1919 you receive news that your \"good treatment\" has gone too far and that you are to be transferred to the overcrowded and notoriously unsanitary Federal Penitentiary in Atlanta. Your sympathizers are enraged that the federal government would engage in such a vindictive punishment. Do you have anything to say?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 664,
        "fields": {
            "priority": 4,
            "description": "The past few months have been quite difficult. You are underfed and overworked and you can feel your health taking a precipitous decline. Despite kind treatment from guards and inmates, you feel like a ghost soon to pass from this world. What will do in these trying circumstances? ",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 663,
        "fields": {
            "priority": 4,
            "description": "Once again you have been forced back into the back-breaking conditions of prison labor after the American Legion and other super-patriot groups found out about your \"special treatment.\" This was hard enough, but after making a slightly critical remark toward the President in an interview for an Atlanta paper, you have been placed in a primitive form of solitary confinement indefinitely. ",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 659,
        "fields": {
            "priority": 4,
            "description": "Your party has devoted its primary efforts towards campaigning ceaselessly for your release. Is there anything that you wish to say to these efforts?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 686,
        "fields": {
            "priority": 4,
            "description": "July, 1919. Without your presence, the long-standing factional differences within the Socialist Party are bursting at the seams. Some visitors from the outside are requesting you to provide an official statement to support x or y side in this ceaseless factional debate. What will you say?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 661,
        "fields": {
            "priority": 4,
            "description": "Shocking the politically aware, Miles Poindexter has been nominated for President on the Republican ticket. A former progressive in the Senate turned into a rabid Conservative German/Red-baiter, what will you say to his nomination?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 688,
        "fields": {
            "priority": 25,
            "description": "Well, the election has nearly come. Are there any final thoughts that you have before the final votes are tallied?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 656,
        "fields": {
            "priority": 4,
            "description": "Success! You have emerged from the sealed train finally prepared to enact the Revolution you had so long prophesized! Your 137-man army eagerly awaits as you prepare your first speech as the leader of the Second American Revolution.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 660,
        "fields": {
            "priority": 4,
            "description": "You arrive at New Castle station to a welcoming crowd of nearly a thousand workers while in the distance you can see an angry mob marching ahead armed with firearms and various farm equipment. You are quickly approached by the leader of your sympathizers who informs you that the crowd before you is armed with guns seized from the weapons factory located a few miles from the rail station and that the people are eager to fight and only await your command. How will you, the gentle pacificist Debs, command the first battle of your rebellion?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 689,
        "fields": {
            "priority": 5,
            "description": "After a few hours, the militia surrounds the city hall with dynamite while pouring gasoline around the interior. You order a desperate charge out of the building but your men are mowed down with machine guns from the Army. When the explosion and fire go off it seems over in an instant. You're unconscious for God only knows how long only to wake up half-alive and crushed under a pile of rubble. Next to you lies a man, screaming and crying as a boulder had crushed his legs and arm. What will you do?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 695,
        "fields": {
            "priority": 5,
            "description": "August, 1920. With the election on the horizon, you've been visited by many preachermen trying to save your soul from the Bolsheviki. What will you say?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 682,
        "fields": {
            "priority": 5,
            "description": "It's finally happened. After decades of agitation the Revolution and countless others had dreamed of and fought for has finally come to fruition. All accross the nation from Seattle to Boston riots launched by your party or close closely affiliated with it are doing everything in their power to seize power while the Army does everything in its power to stop that from happening. Railroad workers go on a bigger strike than that seen in 1877. Steelworkers seize factories in Gary. Anywhere and everywhere the throngs of Armegeddon have come to America. What do you have to say, Gene?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 681,
        "fields": {
            "priority": 5,
            "description": "Do you support the recently ratified 17th Amendment, requiring the direct election of U.S. Senators?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 694,
        "fields": {
            "priority": 5,
            "description": "Do you support the temporary curtailment of American shipping in the Atlantic, in order to reduce the chances of German submarine attacks and the resulting consequences?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 691,
        "fields": {
            "priority": 5,
            "description": "Are you willing to meet with German-American and Irish-American political leaders to discuss your beliefs, regardless of your feelings towards their organizations?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 693,
        "fields": {
            "priority": 5,
            "description": "Would you support a law requiring new immigrants to pass a literacy test in English?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 680,
        "fields": {
            "priority": 5,
            "description": "Do you plan to support the Jones Act -- granting greater autonomy to the Philippines along with a plan to grant independence.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 697,
        "fields": {
            "priority": -1,
            "description": "Where will you travel to during your final days before the election?",
            "likelihood": 1
        }
    }
]

campaignTrail_temp.answers_json = [
    {
        "model": "campaign_trail.answer",
        "pk": 4238,
        "fields": {
            "question": 654,
            "description": "I would rather a thousand times be a free soul in jail than a sycophant or coward on the streets. They may put all of us in jail, but they cannot put the Socialist movement in jail. We are simply paying the penalty that all men have paid in all of the ages of history for standing erect and seeking to pave the way for better conditions for mankind."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4239,
        "fields": {
            "question": 654,
            "description": "There has been a great deal of rumor that I have had a \"change of heart\" and now consider the German imperialists as the greatest threat to world Socialism. Of course, this is not true, but we must play into this delusion that the Wilson administration has if we are to have a fighting chance at replicating the success of our glorious comrades across the Atlantic. I will make a statement supporting the Entente and discouraging active resistance to the war."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4242,
        "fields": {
            "question": 655,
            "description": "Confound it; I can't do this! All of those innocent workers bled dry and hung on some barbed wire in a crater in France... who on God's green Earth am I? No, no damn it I refuse... to hell with the war and to hell with President Wilson! "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4243,
        "fields": {
            "question": 655,
            "description": "Arrange a private meeting with every prominent member of the \"Left Wing\" section. They must be made privy to the fact that we cannot act as sheep if we are to survive in a world with as ravenous wolves as can be found in this country's government. There will come a time when those brave heroes currently illegally languishing in prison will have their day in the sun, but if that day is to come then we must be smart. Focus on bread-and-butter issues and the people will come to our side when they see the war for what it was; a murderous plot to maim their young men."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4245,
        "fields": {
            "question": 655,
            "description": "Arrange a private meeting with every prominent member of the \"Left Wing\" section. They must be made privy to the fact that we cannot act as sheep if we are to survive in a world with as ravenous wolves as can be found in this country's government. There will come a time when those brave heroes currently illegally languishing in prison will have their day in the sun, but if that day is to come then we must be smart. Focus on bread-and-butter issues and the people will come to our side when they see the war for what it was; a murderous plot to maim their young men."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4246,
        "fields": {
            "question": 656,
            "description": "I will give a short speech thanking these men for their bravery before ordering a telegram to be sent to New Castle station; \"Trees down.\" If all goes well, I will tell the men, then all is well; but if our plans have faltered, then I will promise that I will never abandon them, no matter what happens next."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4249,
        "fields": {
            "question": 657,
            "description": "I have been accused of obstructing the war. I admit it, Gentlemen, I abhor war. I would oppose the war if I stood alone. When I think of a cold, glittering steel bayonet being plunged in the white, quivering flesh of a human being, I recoil with horror. Whatever verdict you choose to deliver here today, I am ready to receive. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4251,
        "fields": {
            "question": 658,
            "description": "They can't stop the movement. You keep up the work on the outside, and I'll keep up the work on the inside!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4254,
        "fields": {
            "question": 659,
            "description": "Under no circumstances will I permit any further appeal to the White House for me unless it is done over my protest. I have nothing to ask at the hands of President Wilson---nothing at all, and I can stay here to the limit and I want my comrades to believe I can and give themselves no concern on my account. I'm not suffering standing true in a righteous cause. I'd suffer only if I betrayed it the weight of an atom or the breadth of a hair. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4255,
        "fields": {
            "question": 659,
            "description": "If President Wilson has any decency, any shred of principle left in his rapidly withering body, he must release me and the thousands of others unjustly and unconstitutionally held imprisoned for a war that has been over for well past a year. I plead to him to remember his promises of \"New Freedom\" and invigorate some of the democracy that he holds so dear in his own nation as he does abroad."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4256,
        "fields": {
            "question": 660,
            "description": "My own experience is certainly something to be desired, but among our veterans, many have faced countless battles just like this one. We will disperse them into the crowd, whipping up morale and teaching the workers how to fight."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4257,
        "fields": {
            "question": 660,
            "description": "Though I am by no means a military mind, I have read a great deal, and in this predicament, I am reminded of the Franco-Prussian War and how the French workers were able to hold off the Prussian army for months by conducting a campaign of guerilla war by forming fortifications out of the structures of the cities. Your men have guns, you say? Let the bullets come from above; those scoundrels won't know what hit them."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4259,
        "fields": {
            "question": 661,
            "description": "Of all the men in Washington, there is not a man more unprincipled and wishy-washy than him. He was the only man to stand up for the IWW in the Lawrence strike of 1912, and yet he prides himself on being the leading vigilante in the campaign of suppression and dictatorship that has prevailed in recent years. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4262,
        "fields": {
            "question": 662,
            "description": "I will go on a speaking tour around the area to help spread the message of the flagrant violations of the Constitution that are eroding the very foundations of our Republic that the militarists are perpetrating."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4263,
        "fields": {
            "question": 662,
            "description": "The war's over and many traumatized innocent young boys will be returning home. They've already been through hell; surely their appetite for jingoism has been exhausted beyond all measure. Get whatever organizers we have left and see if we can't make friends among these poor, betrayed men. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4264,
        "fields": {
            "question": 662,
            "description": "We need to get in touch with as many union locals as we can. Big things are coming, and we must be prepared for the storm that is to come. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4265,
        "fields": {
            "question": 663,
            "description": "To be completely cut off from the outer world as I am now is next to suffocation and being buried alive, but I am not going to let even that touch my spirit. I can and shall hold out to the end without concession or compromise, clean through without a shadow of weakening or hint of betrayal, and that is what I know I must do. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4268,
        "fields": {
            "question": 664,
            "description": "I am in perfectly fit condition. What I am going through is nothing compared to that of the thousands of innocent men locked behind these bars. I feel perfectly fine as is. No special treatment. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4310,
        "fields": {
            "question": 680,
            "description": "I would prefer that the measure grant immediate independence, but I can support it in its current form."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4311,
        "fields": {
            "question": 680,
            "description": "This is a necessary step forward in the self-determination of the Philippines."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4312,
        "fields": {
            "question": 680,
            "description": "This measure is premature at the present time. We have added greatly to the welfare of the Philippines and should not leave before our work is done."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4313,
        "fields": {
            "question": 681,
            "description": "This Amendment is a necessary reform in the functioning of our government, and removes a significant avenue of corruption from our electoral process."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4314,
        "fields": {
            "question": 681,
            "description": "Regardless of personal feelings, this Amendment obviously went through a stringent ratification process and reflects the overwhelming majority of the people."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4315,
        "fields": {
            "question": 681,
            "description": "I believe that Senators should be elected by the legislature of each state, in line with the original Constitution."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4316,
        "fields": {
            "question": 682,
            "description": "..."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4321,
        "fields": {
            "question": 684,
            "description": "I will make friends quickly. Every man has good in him I feel, and I would be no better than the men in Washington were I to spend this period in vindictive self-pity."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4327,
        "fields": {
            "question": 686,
            "description": "I will say what I always have; that we must come together as one to defeat the horrible system that we all loathe. Our differences must be smoothed over into one, revolutionary socialist party because if the tyrants that be gleam even the slightest whiff of disunity within our ranks the whole worker's movement collapses. Encourage both sides to stop their insults and work together to fight the greater foe."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4328,
        "fields": {
            "question": 686,
            "description": "Victor Berger is a coward and a fraud. When thousands of our comrades were suffering in jail he gave support to the monstrous calamity that is the great \"War for Democracy.\" I fully sympathize with the Left Section and believe that they best embody the original vision of our party that snakes like Berger have fought so valiantly to distort. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4331,
        "fields": {
            "question": 687,
            "description": "The future of the American worker's movement stands on a precipice and my hands quake with such fear that I feel I might faint. I feel certain that I am doing the right thing but God erase my soul if the destruction I'm bound to cause came to naught."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4332,
        "fields": {
            "question": 687,
            "description": "The future of the American worker's movement stands on a precipice and my hands quake with such fear that I feel I might faint. I feel certain that I am doing the right thing but God erase my soul if the destruction I'm bound to cause came to naught."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4333,
        "fields": {
            "question": 687,
            "description": "The future of the American worker's movement stands on a precipice and my hands quake with such fear that I feel I might faint. I feel certain that I am doing the right thing but God erase my soul if the destruction I'm bound to cause came to naught."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4335,
        "fields": {
            "question": 688,
            "description": "I have nothing to say except that I am grateful for all of the support that has been given to me by my friends and comrades and that I remain as unconquered as ever."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4339,
        "fields": {
            "question": 689,
            "description": "I will comfort the man. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4341,
        "fields": {
            "question": 690,
            "description": "This is the penalty that all decent men of principle have paid throughout history. If they wish to break me, let them try. I remain unconquerable!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4342,
        "fields": {
            "question": 690,
            "description": "This is a farce. I have committed no crime. The Wilson administration is flagrantly circumventing the Bill of Rights as established in the 8th Amendment. It seems that these days the more one opposes the original vision of our country, the more \"American\" they become!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4343,
        "fields": {
            "question": 690,
            "description": "Oh, I think I will be quite alright. I'd be far more worried were I in Washington at the moment. The Lord God feels far more strongly for his children in jail than he ever did for his children in government. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4344,
        "fields": {
            "question": 691,
            "description": "I can think of no better way to reinforce my commitment to peace and neutrality than to meet with such groups."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4345,
        "fields": {
            "question": 691,
            "description": "During my career, I have met with any number of individuals whom I have disagreed with. I don't see a need to apply a different standard to this situation."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4346,
        "fields": {
            "question": 691,
            "description": "I refuse to meet with any hyphenated-American group which places another identity above that of American."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4350,
        "fields": {
            "question": 693,
            "description": "I would object to any immigration act which included a literacy test."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4351,
        "fields": {
            "question": 693,
            "description": "I don't have strong feelings on this provision. If such a measure were passed by Congress I would sign it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4352,
        "fields": {
            "question": 693,
            "description": "I believe that any immigrant who seeks a new life in the United States should be required to pass a literacy test."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4353,
        "fields": {
            "question": 694,
            "description": "If we are serious about avoiding entanglement in a European war, then we should not allow merchants to put American lives at risk of attack in known war zones."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4354,
        "fields": {
            "question": 694,
            "description": "It makes perfect sense to warn Americans of the dangers involved in such commerce, but it is not the place of the government to actively interfere in it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4355,
        "fields": {
            "question": 694,
            "description": "We have certain rights as a neutral power, and to retreat from those rights would only serve to invite further aggression."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4356,
        "fields": {
            "question": 695,
            "description": "The Jehovah of the ancient Jews is just as monstrous to my mind as He ever was- He bears no remotest resemblance to my Lord-God."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4357,
        "fields": {
            "question": 695,
            "description": "I must take communion. I feel myself undergoing a species of purging by fire as if I had that in me that in me that sinned against my soul and infected my manhood. I feel this influence upon me, and I will not take it out of my life again."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4362,
        "fields": {
            "question": 697,
            "description": "Let's make a final swing to the West Coast, and California in particular, before the voting begins."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4363,
        "fields": {
            "question": 697,
            "description": "Let's focus on the Midwest."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4364,
        "fields": {
            "question": 697,
            "description": "Let's focus on New England."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4365,
        "fields": {
            "question": 697,
            "description": "I would make our final campaign stops in New York."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 15319,
        "fields": {
            "question": 660,
            "description": "My military experience is small, but I have read greatly. I will order the men into a formation around the train tracks. We will be unconquerable!"
        }
    }
]

campaignTrail_temp.states_json = [
    {
        "model": "campaign_trail.state",
        "pk": 408,
        "fields": {
            "name": "Alabama",
            "abbr": "AL",
            "electoral_votes": 12,
            "popular_votes": 130728,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 409,
        "fields": {
            "name": "Arizona",
            "abbr": "AZ",
            "electoral_votes": 3,
            "popular_votes": 58021,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 410,
        "fields": {
            "name": "Arkansas",
            "abbr": "AR",
            "electoral_votes": 9,
            "popular_votes": 170104,
            "poll_closing_time": 150,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 411,
        "fields": {
            "name": "California",
            "abbr": "CA",
            "electoral_votes": 13,
            "popular_votes": 999603,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 412,
        "fields": {
            "name": "Colorado",
            "abbr": "CO",
            "electoral_votes": 6,
            "popular_votes": 294375,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 413,
        "fields": {
            "name": "Connecticut",
            "abbr": "CT",
            "electoral_votes": 7,
            "popular_votes": 213874,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 414,
        "fields": {
            "name": "Delaware",
            "abbr": "DE",
            "electoral_votes": 3,
            "popular_votes": 51810,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 415,
        "fields": {
            "name": "Florida",
            "abbr": "FL",
            "electoral_votes": 6,
            "popular_votes": 80734,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 416,
        "fields": {
            "name": "Georgia",
            "abbr": "GA",
            "electoral_votes": 14,
            "popular_votes": 160681,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 417,
        "fields": {
            "name": "Idaho",
            "abbr": "ID",
            "electoral_votes": 4,
            "popular_votes": 134615,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 418,
        "fields": {
            "name": "Illinois",
            "abbr": "IL",
            "electoral_votes": 29,
            "popular_votes": 2192707,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 419,
        "fields": {
            "name": "Indiana",
            "abbr": "IN",
            "electoral_votes": 15,
            "popular_votes": 718848,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 420,
        "fields": {
            "name": "Iowa",
            "abbr": "IA",
            "electoral_votes": 13,
            "popular_votes": 516944,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 421,
        "fields": {
            "name": "Kansas",
            "abbr": "KS",
            "electoral_votes": 10,
            "popular_votes": 629813,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 422,
        "fields": {
            "name": "Kentucky",
            "abbr": "KY",
            "electoral_votes": 13,
            "popular_votes": 520075,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 423,
        "fields": {
            "name": "Louisiana",
            "abbr": "LA",
            "electoral_votes": 10,
            "popular_votes": 92982,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 424,
        "fields": {
            "name": "Maine",
            "abbr": "ME",
            "electoral_votes": 6,
            "popular_votes": 136314,
            "poll_closing_time": 0,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 425,
        "fields": {
            "name": "Maryland",
            "abbr": "MD",
            "electoral_votes": 8,
            "popular_votes": 262039,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 426,
        "fields": {
            "name": "Massachusetts",
            "abbr": "MA",
            "electoral_votes": 18,
            "popular_votes": 531832,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 427,
        "fields": {
            "name": "Michigan",
            "abbr": "MI",
            "electoral_votes": 15,
            "popular_votes": 650973,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 428,
        "fields": {
            "name": "Minnesota",
            "abbr": "MN",
            "electoral_votes": 12,
            "popular_votes": 387364,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 429,
        "fields": {
            "name": "Mississippi",
            "abbr": "MS",
            "electoral_votes": 10,
            "popular_votes": 86679,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 430,
        "fields": {
            "name": "Missouri",
            "abbr": "MO",
            "electoral_votes": 18,
            "popular_votes": 786769,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 431,
        "fields": {
            "name": "Montana",
            "abbr": "MT",
            "electoral_votes": 4,
            "popular_votes": 177679,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 432,
        "fields": {
            "name": "Nebraska",
            "abbr": "NE",
            "electoral_votes": 8,
            "popular_votes": 287315,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 433,
        "fields": {
            "name": "Nevada",
            "abbr": "NV",
            "electoral_votes": 3,
            "popular_votes": 33316,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 434,
        "fields": {
            "name": "New Hampshire",
            "abbr": "NH",
            "electoral_votes": 4,
            "popular_votes": 89127,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 435,
        "fields": {
            "name": "New Jersey",
            "abbr": "NJ",
            "electoral_votes": 14,
            "popular_votes": 494442,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 436,
        "fields": {
            "name": "New Mexico",
            "abbr": "NM",
            "electoral_votes": 3,
            "popular_votes": 66787,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 437,
        "fields": {
            "name": "New York",
            "abbr": "NY",
            "electoral_votes": 45,
            "popular_votes": 1706305,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 438,
        "fields": {
            "name": "North Carolina",
            "abbr": "NC",
            "electoral_votes": 12,
            "popular_votes": 289835,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 439,
        "fields": {
            "name": "North Dakota",
            "abbr": "ND",
            "electoral_votes": 5,
            "popular_votes": 115390,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 440,
        "fields": {
            "name": "Ohio",
            "abbr": "OH",
            "electoral_votes": 24,
            "popular_votes": 1165086,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 441,
        "fields": {
            "name": "Oklahoma",
            "abbr": "OK",
            "electoral_votes": 10,
            "popular_votes": 292416,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 442,
        "fields": {
            "name": "Oregon",
            "abbr": "OR",
            "electoral_votes": 5,
            "popular_votes": 261650,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 443,
        "fields": {
            "name": "Pennsylvania",
            "abbr": "PA",
            "electoral_votes": 38,
            "popular_votes": 1297292,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 444,
        "fields": {
            "name": "Rhode Island",
            "abbr": "RI",
            "electoral_votes": 5,
            "popular_votes": 87816,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 445,
        "fields": {
            "name": "South Carolina",
            "abbr": "SC",
            "electoral_votes": 9,
            "popular_votes": 63952,
            "poll_closing_time": 30,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 446,
        "fields": {
            "name": "South Dakota",
            "abbr": "SD",
            "electoral_votes": 5,
            "popular_votes": 128942,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 447,
        "fields": {
            "name": "Tennessee",
            "abbr": "TN",
            "electoral_votes": 12,
            "popular_votes": 272190,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 448,
        "fields": {
            "name": "Texas",
            "abbr": "TX",
            "electoral_votes": 20,
            "popular_votes": 372461,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 449,
        "fields": {
            "name": "Utah",
            "abbr": "UT",
            "electoral_votes": 4,
            "popular_votes": 143146,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 450,
        "fields": {
            "name": "Vermont",
            "abbr": "VT",
            "electoral_votes": 4,
            "popular_votes": 64475,
            "poll_closing_time": 30,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 451,
        "fields": {
            "name": "Virginia",
            "abbr": "VA",
            "electoral_votes": 12,
            "popular_votes": 153992,
            "poll_closing_time": 30,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 452,
        "fields": {
            "name": "Washington",
            "abbr": "WA",
            "electoral_votes": 7,
            "popular_votes": 380994,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 453,
        "fields": {
            "name": "West Virginia",
            "abbr": "WV",
            "electoral_votes": 8,
            "popular_votes": 289852,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 454,
        "fields": {
            "name": "Wisconsin",
            "abbr": "WI",
            "electoral_votes": 13,
            "popular_votes": 447134,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 14
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 455,
        "fields": {
            "name": "Wyoming",
            "abbr": "WY",
            "electoral_votes": 3,
            "popular_votes": 51840,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 14
        }
    }
]

campaignTrail_temp.issues_json = [
    {
        "model": "campaign_trail.issue",
        "pk": 52,
        "fields": {
            "name": "Red Scare",
            "description": "'",
            "stance_1": "Hysterical",
            "stance_desc_1": "'",
            "stance_2": "Paranoid",
            "stance_desc_2": "'",
            "stance_3": "Worried",
            "stance_desc_3": "'",
            "stance_4": "Split",
            "stance_desc_4": "'",
            "stance_5": "Split",
            "stance_desc_5": "'",
            "stance_6": "Calm",
            "stance_desc_6": "'",
            "stance_7": "Calm",
            "stance_desc_7": "'",
            "election": 14
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 53,
        "fields": {
            "name": "Unions",
            "description": "'",
            "stance_1": "Nonexistent ",
            "stance_desc_1": "'",
            "stance_2": "Nonexistent",
            "stance_desc_2": "'",
            "stance_3": "AFL",
            "stance_desc_3": "'",
            "stance_4": "AFL",
            "stance_desc_4": "'",
            "stance_5": "AFL",
            "stance_desc_5": "'",
            "stance_6": "IWW",
            "stance_desc_6": "'",
            "stance_7": "IWW",
            "stance_desc_7": "'",
            "election": 14
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 54,
        "fields": {
            "name": "Sympathy",
            "description": "'",
            "stance_1": "Hang",
            "stance_desc_1": "'",
            "stance_2": "Vengeful ",
            "stance_desc_2": "'",
            "stance_3": "Vengeful",
            "stance_desc_3": "'",
            "stance_4": "Split",
            "stance_desc_4": "'",
            "stance_5": "Sympathetic",
            "stance_desc_5": "'",
            "stance_6": "Release",
            "stance_desc_6": "'",
            "stance_7": "Release",
            "stance_desc_7": "'",
            "election": 14
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 55,
        "fields": {
            "name": "War Exhaustion",
            "description": "'",
            "stance_1": "Unaffected",
            "stance_desc_1": "'",
            "stance_2": "Unaffected",
            "stance_desc_2": "'",
            "stance_3": "Content",
            "stance_desc_3": "'",
            "stance_4": "Content",
            "stance_desc_4": "'",
            "stance_5": "Weary",
            "stance_desc_5": "'",
            "stance_6": "Exhausted",
            "stance_desc_6": "'",
            "stance_7": "Devastated ",
            "stance_desc_7": "'",
            "election": 14
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 56,
        "fields": {
            "name": "Radicalism",
            "description": "'",
            "stance_1": "Stable",
            "stance_desc_1": "'",
            "stance_2": "Stable",
            "stance_desc_2": "'",
            "stance_3": "Stable",
            "stance_desc_3": "'",
            "stance_4": "Rocked",
            "stance_desc_4": "'",
            "stance_5": "Rocked",
            "stance_desc_5": "'",
            "stance_6": "Class Warfare",
            "stance_desc_6": "'",
            "stance_7": "Class Warfare",
            "stance_desc_7": "'",
            "election": 14
        }
    }
]

campaignTrail_temp.state_issue_score_json = [
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2003,
        "fields": {
            "state": 408,
            "issue": 52,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2004,
        "fields": {
            "state": 409,
            "issue": 52,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2005,
        "fields": {
            "state": 410,
            "issue": 52,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2006,
        "fields": {
            "state": 411,
            "issue": 52,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2007,
        "fields": {
            "state": 412,
            "issue": 52,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2008,
        "fields": {
            "state": 413,
            "issue": 52,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2009,
        "fields": {
            "state": 414,
            "issue": 52,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2010,
        "fields": {
            "state": 415,
            "issue": 52,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2011,
        "fields": {
            "state": 416,
            "issue": 52,
            "state_issue_score": -0.5,
            "weight": 0
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2012,
        "fields": {
            "state": 417,
            "issue": 52,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2013,
        "fields": {
            "state": 418,
            "issue": 52,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2014,
        "fields": {
            "state": 419,
            "issue": 52,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2015,
        "fields": {
            "state": 420,
            "issue": 52,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2016,
        "fields": {
            "state": 421,
            "issue": 52,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2017,
        "fields": {
            "state": 422,
            "issue": 52,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2018,
        "fields": {
            "state": 423,
            "issue": 52,
            "state_issue_score": 0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2019,
        "fields": {
            "state": 424,
            "issue": 52,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2020,
        "fields": {
            "state": 425,
            "issue": 52,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2021,
        "fields": {
            "state": 426,
            "issue": 52,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2022,
        "fields": {
            "state": 427,
            "issue": 52,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2023,
        "fields": {
            "state": 428,
            "issue": 52,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2024,
        "fields": {
            "state": 429,
            "issue": 52,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2025,
        "fields": {
            "state": 430,
            "issue": 52,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2026,
        "fields": {
            "state": 431,
            "issue": 52,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2027,
        "fields": {
            "state": 432,
            "issue": 52,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2028,
        "fields": {
            "state": 433,
            "issue": 52,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2029,
        "fields": {
            "state": 434,
            "issue": 52,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2030,
        "fields": {
            "state": 435,
            "issue": 52,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2031,
        "fields": {
            "state": 436,
            "issue": 52,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2032,
        "fields": {
            "state": 437,
            "issue": 52,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2033,
        "fields": {
            "state": 438,
            "issue": 52,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2034,
        "fields": {
            "state": 439,
            "issue": 52,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2035,
        "fields": {
            "state": 440,
            "issue": 52,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2036,
        "fields": {
            "state": 441,
            "issue": 52,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2037,
        "fields": {
            "state": 442,
            "issue": 52,
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2038,
        "fields": {
            "state": 443,
            "issue": 52,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2039,
        "fields": {
            "state": 444,
            "issue": 52,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2040,
        "fields": {
            "state": 445,
            "issue": 52,
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2041,
        "fields": {
            "state": 446,
            "issue": 52,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2042,
        "fields": {
            "state": 447,
            "issue": 52,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2043,
        "fields": {
            "state": 448,
            "issue": 52,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2044,
        "fields": {
            "state": 449,
            "issue": 52,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2045,
        "fields": {
            "state": 450,
            "issue": 52,
            "state_issue_score": -0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2046,
        "fields": {
            "state": 451,
            "issue": 52,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2047,
        "fields": {
            "state": 452,
            "issue": 52,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2048,
        "fields": {
            "state": 453,
            "issue": 52,
            "state_issue_score": -0.625,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2049,
        "fields": {
            "state": 454,
            "issue": 52,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2050,
        "fields": {
            "state": 455,
            "issue": 52,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2051,
        "fields": {
            "state": 408,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2052,
        "fields": {
            "state": 409,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2053,
        "fields": {
            "state": 410,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2054,
        "fields": {
            "state": 411,
            "issue": 53,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2055,
        "fields": {
            "state": 412,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2056,
        "fields": {
            "state": 413,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2057,
        "fields": {
            "state": 414,
            "issue": 53,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2058,
        "fields": {
            "state": 415,
            "issue": 53,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2059,
        "fields": {
            "state": 416,
            "issue": 53,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2060,
        "fields": {
            "state": 417,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2061,
        "fields": {
            "state": 418,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2062,
        "fields": {
            "state": 419,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2063,
        "fields": {
            "state": 420,
            "issue": 53,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2064,
        "fields": {
            "state": 421,
            "issue": 53,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2065,
        "fields": {
            "state": 422,
            "issue": 53,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2066,
        "fields": {
            "state": 423,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2067,
        "fields": {
            "state": 424,
            "issue": 53,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2068,
        "fields": {
            "state": 425,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2069,
        "fields": {
            "state": 426,
            "issue": 53,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2070,
        "fields": {
            "state": 427,
            "issue": 53,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2071,
        "fields": {
            "state": 428,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2072,
        "fields": {
            "state": 429,
            "issue": 53,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2073,
        "fields": {
            "state": 430,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2074,
        "fields": {
            "state": 431,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2075,
        "fields": {
            "state": 432,
            "issue": 53,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2076,
        "fields": {
            "state": 433,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2077,
        "fields": {
            "state": 434,
            "issue": 53,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2078,
        "fields": {
            "state": 435,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2079,
        "fields": {
            "state": 436,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2080,
        "fields": {
            "state": 437,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2081,
        "fields": {
            "state": 438,
            "issue": 53,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2082,
        "fields": {
            "state": 439,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2083,
        "fields": {
            "state": 440,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2084,
        "fields": {
            "state": 441,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2085,
        "fields": {
            "state": 442,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2086,
        "fields": {
            "state": 443,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2087,
        "fields": {
            "state": 444,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2088,
        "fields": {
            "state": 445,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2089,
        "fields": {
            "state": 446,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2090,
        "fields": {
            "state": 447,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2091,
        "fields": {
            "state": 448,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2092,
        "fields": {
            "state": 449,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2093,
        "fields": {
            "state": 450,
            "issue": 53,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2094,
        "fields": {
            "state": 451,
            "issue": 53,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2095,
        "fields": {
            "state": 452,
            "issue": 53,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2096,
        "fields": {
            "state": 453,
            "issue": 53,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2097,
        "fields": {
            "state": 454,
            "issue": 53,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2098,
        "fields": {
            "state": 455,
            "issue": 53,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2099,
        "fields": {
            "state": 408,
            "issue": 54,
            "state_issue_score": -0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2100,
        "fields": {
            "state": 409,
            "issue": 54,
            "state_issue_score": 0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2101,
        "fields": {
            "state": 410,
            "issue": 54,
            "state_issue_score": -0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2102,
        "fields": {
            "state": 411,
            "issue": 54,
            "state_issue_score": 0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2103,
        "fields": {
            "state": 412,
            "issue": 54,
            "state_issue_score": 0.2,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2104,
        "fields": {
            "state": 413,
            "issue": 54,
            "state_issue_score": -0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2105,
        "fields": {
            "state": 414,
            "issue": 54,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2106,
        "fields": {
            "state": 415,
            "issue": 54,
            "state_issue_score": 0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2107,
        "fields": {
            "state": 416,
            "issue": 54,
            "state_issue_score": -0.4,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2108,
        "fields": {
            "state": 417,
            "issue": 54,
            "state_issue_score": 0.1,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2109,
        "fields": {
            "state": 418,
            "issue": 54,
            "state_issue_score": 0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2110,
        "fields": {
            "state": 419,
            "issue": 54,
            "state_issue_score": 0.5,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2111,
        "fields": {
            "state": 420,
            "issue": 54,
            "state_issue_score": 0.1,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2112,
        "fields": {
            "state": 421,
            "issue": 54,
            "state_issue_score": -0.2,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2113,
        "fields": {
            "state": 422,
            "issue": 54,
            "state_issue_score": -0.5,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2114,
        "fields": {
            "state": 423,
            "issue": 54,
            "state_issue_score": 0.2,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2115,
        "fields": {
            "state": 424,
            "issue": 54,
            "state_issue_score": -0.4,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2116,
        "fields": {
            "state": 425,
            "issue": 54,
            "state_issue_score": -0.5,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2117,
        "fields": {
            "state": 426,
            "issue": 54,
            "state_issue_score": -0.4,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2118,
        "fields": {
            "state": 427,
            "issue": 54,
            "state_issue_score": -0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2119,
        "fields": {
            "state": 428,
            "issue": 54,
            "state_issue_score": 0.2,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2120,
        "fields": {
            "state": 429,
            "issue": 54,
            "state_issue_score": -0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2121,
        "fields": {
            "state": 430,
            "issue": 54,
            "state_issue_score": -0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2122,
        "fields": {
            "state": 431,
            "issue": 54,
            "state_issue_score": 0.2,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2123,
        "fields": {
            "state": 432,
            "issue": 54,
            "state_issue_score": 0.4,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2124,
        "fields": {
            "state": 433,
            "issue": 54,
            "state_issue_score": 0.5,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2125,
        "fields": {
            "state": 434,
            "issue": 54,
            "state_issue_score": -0.4,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2126,
        "fields": {
            "state": 435,
            "issue": 54,
            "state_issue_score": -0.4,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2127,
        "fields": {
            "state": 436,
            "issue": 54,
            "state_issue_score": 0.2,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2128,
        "fields": {
            "state": 437,
            "issue": 54,
            "state_issue_score": 0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2129,
        "fields": {
            "state": 438,
            "issue": 54,
            "state_issue_score": -0.4,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2130,
        "fields": {
            "state": 439,
            "issue": 54,
            "state_issue_score": 0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2131,
        "fields": {
            "state": 440,
            "issue": 54,
            "state_issue_score": -0.4,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2132,
        "fields": {
            "state": 441,
            "issue": 54,
            "state_issue_score": 0.4,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2133,
        "fields": {
            "state": 442,
            "issue": 54,
            "state_issue_score": -0.6,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2134,
        "fields": {
            "state": 443,
            "issue": 54,
            "state_issue_score": 0.1,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2135,
        "fields": {
            "state": 444,
            "issue": 54,
            "state_issue_score": -0.5,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2136,
        "fields": {
            "state": 445,
            "issue": 54,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2137,
        "fields": {
            "state": 446,
            "issue": 54,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2138,
        "fields": {
            "state": 447,
            "issue": 54,
            "state_issue_score": -0.4,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2139,
        "fields": {
            "state": 448,
            "issue": 54,
            "state_issue_score": -0.5,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2140,
        "fields": {
            "state": 449,
            "issue": 54,
            "state_issue_score": -0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2141,
        "fields": {
            "state": 450,
            "issue": 54,
            "state_issue_score": -0.5,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2142,
        "fields": {
            "state": 451,
            "issue": 54,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2143,
        "fields": {
            "state": 452,
            "issue": 54,
            "state_issue_score": 0.2,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2144,
        "fields": {
            "state": 453,
            "issue": 54,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2145,
        "fields": {
            "state": 454,
            "issue": 54,
            "state_issue_score": 0.5,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2146,
        "fields": {
            "state": 455,
            "issue": 54,
            "state_issue_score": 0.4,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2147,
        "fields": {
            "state": 408,
            "issue": 55,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2148,
        "fields": {
            "state": 409,
            "issue": 55,
            "state_issue_score": -0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2149,
        "fields": {
            "state": 410,
            "issue": 55,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2150,
        "fields": {
            "state": 411,
            "issue": 55,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2151,
        "fields": {
            "state": 412,
            "issue": 55,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2152,
        "fields": {
            "state": 413,
            "issue": 55,
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2153,
        "fields": {
            "state": 414,
            "issue": 55,
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2154,
        "fields": {
            "state": 415,
            "issue": 55,
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2155,
        "fields": {
            "state": 416,
            "issue": 55,
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2156,
        "fields": {
            "state": 417,
            "issue": 55,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2157,
        "fields": {
            "state": 418,
            "issue": 55,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2158,
        "fields": {
            "state": 419,
            "issue": 55,
            "state_issue_score": 0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2159,
        "fields": {
            "state": 420,
            "issue": 55,
            "state_issue_score": -0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2160,
        "fields": {
            "state": 421,
            "issue": 55,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2161,
        "fields": {
            "state": 422,
            "issue": 55,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2162,
        "fields": {
            "state": 423,
            "issue": 55,
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2163,
        "fields": {
            "state": 424,
            "issue": 55,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2164,
        "fields": {
            "state": 425,
            "issue": 55,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2165,
        "fields": {
            "state": 426,
            "issue": 55,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2166,
        "fields": {
            "state": 427,
            "issue": 55,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2167,
        "fields": {
            "state": 428,
            "issue": 55,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2168,
        "fields": {
            "state": 429,
            "issue": 55,
            "state_issue_score": -0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2169,
        "fields": {
            "state": 430,
            "issue": 55,
            "state_issue_score": 0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2170,
        "fields": {
            "state": 431,
            "issue": 55,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2171,
        "fields": {
            "state": 432,
            "issue": 55,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2172,
        "fields": {
            "state": 433,
            "issue": 55,
            "state_issue_score": 0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2173,
        "fields": {
            "state": 434,
            "issue": 55,
            "state_issue_score": -0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2174,
        "fields": {
            "state": 435,
            "issue": 55,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2175,
        "fields": {
            "state": 436,
            "issue": 55,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2176,
        "fields": {
            "state": 437,
            "issue": 55,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2177,
        "fields": {
            "state": 438,
            "issue": 55,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2178,
        "fields": {
            "state": 439,
            "issue": 55,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2179,
        "fields": {
            "state": 440,
            "issue": 55,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2180,
        "fields": {
            "state": 441,
            "issue": 55,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2181,
        "fields": {
            "state": 442,
            "issue": 55,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2182,
        "fields": {
            "state": 443,
            "issue": 55,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2183,
        "fields": {
            "state": 444,
            "issue": 55,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2184,
        "fields": {
            "state": 445,
            "issue": 55,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2185,
        "fields": {
            "state": 446,
            "issue": 55,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2186,
        "fields": {
            "state": 447,
            "issue": 55,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2187,
        "fields": {
            "state": 448,
            "issue": 55,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2188,
        "fields": {
            "state": 449,
            "issue": 55,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2189,
        "fields": {
            "state": 450,
            "issue": 55,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2190,
        "fields": {
            "state": 451,
            "issue": 55,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2191,
        "fields": {
            "state": 452,
            "issue": 55,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2192,
        "fields": {
            "state": 453,
            "issue": 55,
            "state_issue_score": -0.625,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2193,
        "fields": {
            "state": 454,
            "issue": 55,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2194,
        "fields": {
            "state": 455,
            "issue": 55,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2195,
        "fields": {
            "state": 408,
            "issue": 56,
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2196,
        "fields": {
            "state": 409,
            "issue": 56,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2197,
        "fields": {
            "state": 410,
            "issue": 56,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2198,
        "fields": {
            "state": 411,
            "issue": 56,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2199,
        "fields": {
            "state": 412,
            "issue": 56,
            "state_issue_score": 0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2200,
        "fields": {
            "state": 413,
            "issue": 56,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2201,
        "fields": {
            "state": 414,
            "issue": 56,
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2202,
        "fields": {
            "state": 415,
            "issue": 56,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2203,
        "fields": {
            "state": 416,
            "issue": 56,
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2204,
        "fields": {
            "state": 417,
            "issue": 56,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2205,
        "fields": {
            "state": 418,
            "issue": 56,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2206,
        "fields": {
            "state": 419,
            "issue": 56,
            "state_issue_score": 0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2207,
        "fields": {
            "state": 420,
            "issue": 56,
            "state_issue_score": -0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2208,
        "fields": {
            "state": 421,
            "issue": 56,
            "state_issue_score": -0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2209,
        "fields": {
            "state": 422,
            "issue": 56,
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2210,
        "fields": {
            "state": 423,
            "issue": 56,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2211,
        "fields": {
            "state": 424,
            "issue": 56,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2212,
        "fields": {
            "state": 425,
            "issue": 56,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2213,
        "fields": {
            "state": 426,
            "issue": 56,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2214,
        "fields": {
            "state": 427,
            "issue": 56,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2215,
        "fields": {
            "state": 428,
            "issue": 56,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2216,
        "fields": {
            "state": 429,
            "issue": 56,
            "state_issue_score": -0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2217,
        "fields": {
            "state": 430,
            "issue": 56,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2218,
        "fields": {
            "state": 431,
            "issue": 56,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2219,
        "fields": {
            "state": 432,
            "issue": 56,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2220,
        "fields": {
            "state": 433,
            "issue": 56,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2221,
        "fields": {
            "state": 434,
            "issue": 56,
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2222,
        "fields": {
            "state": 435,
            "issue": 56,
            "state_issue_score": -0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2223,
        "fields": {
            "state": 436,
            "issue": 56,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2224,
        "fields": {
            "state": 437,
            "issue": 56,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2225,
        "fields": {
            "state": 438,
            "issue": 56,
            "state_issue_score": -0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2226,
        "fields": {
            "state": 439,
            "issue": 56,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2227,
        "fields": {
            "state": 440,
            "issue": 56,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2228,
        "fields": {
            "state": 441,
            "issue": 56,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2229,
        "fields": {
            "state": 442,
            "issue": 56,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2230,
        "fields": {
            "state": 443,
            "issue": 56,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2231,
        "fields": {
            "state": 444,
            "issue": 56,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2232,
        "fields": {
            "state": 445,
            "issue": 56,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2233,
        "fields": {
            "state": 446,
            "issue": 56,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2234,
        "fields": {
            "state": 447,
            "issue": 56,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2235,
        "fields": {
            "state": 448,
            "issue": 56,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2236,
        "fields": {
            "state": 449,
            "issue": 56,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2237,
        "fields": {
            "state": 450,
            "issue": 56,
            "state_issue_score": -0.8,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2238,
        "fields": {
            "state": 451,
            "issue": 56,
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2239,
        "fields": {
            "state": 452,
            "issue": 56,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2240,
        "fields": {
            "state": 453,
            "issue": 56,
            "state_issue_score": -0.625,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2241,
        "fields": {
            "state": 454,
            "issue": 56,
            "state_issue_score": 0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2242,
        "fields": {
            "state": 455,
            "issue": 56,
            "state_issue_score": 0.7,
            "weight": 1.5
        }
    }
]

campaignTrail_temp.candidate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 579,
        "fields": {
            "candidate": 142,
            "issue": 52,
            "issue_score": 1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 580,
        "fields": {
            "candidate": 142,
            "issue": 53,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 581,
        "fields": {
            "candidate": 142,
            "issue": 54,
            "issue_score": 1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 582,
        "fields": {
            "candidate": 142,
            "issue": 55,
            "issue_score": 1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 583,
        "fields": {
            "candidate": 142,
            "issue": 56,
            "issue_score": 1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 584,
        "fields": {
            "candidate": 143,
            "issue": 52,
            "issue_score": -0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 585,
        "fields": {
            "candidate": 143,
            "issue": 53,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 586,
        "fields": {
            "candidate": 143,
            "issue": 54,
            "issue_score": -1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 587,
        "fields": {
            "candidate": 143,
            "issue": 55,
            "issue_score": -0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 588,
        "fields": {
            "candidate": 143,
            "issue": 56,
            "issue_score": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 589,
        "fields": {
            "candidate": 144,
            "issue": 52,
            "issue_score": -0.9
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 590,
        "fields": {
            "candidate": 144,
            "issue": 53,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 591,
        "fields": {
            "candidate": 144,
            "issue": 54,
            "issue_score": -0.9
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 592,
        "fields": {
            "candidate": 144,
            "issue": 55,
            "issue_score": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 593,
        "fields": {
            "candidate": 144,
            "issue": 56,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 594,
        "fields": {
            "candidate": 145,
            "issue": 52,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 595,
        "fields": {
            "candidate": 145,
            "issue": 53,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 596,
        "fields": {
            "candidate": 145,
            "issue": 54,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 597,
        "fields": {
            "candidate": 145,
            "issue": 55,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 598,
        "fields": {
            "candidate": 145,
            "issue": 56,
            "issue_score": 0
        }
    }
]

campaignTrail_temp.running_mate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 599,
        "fields": {
            "candidate": 146,
            "issue": 52,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 600,
        "fields": {
            "candidate": 146,
            "issue": 53,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 601,
        "fields": {
            "candidate": 146,
            "issue": 54,
            "issue_score": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 602,
        "fields": {
            "candidate": 146,
            "issue": 55,
            "issue_score": -0.35
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 603,
        "fields": {
            "candidate": 146,
            "issue": 56,
            "issue_score": 0.5
        }
    }
]

campaignTrail_temp.candidate_state_multiplier_json = [
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1533,
        "fields": {
            "candidate": 142,
            "state": 408,
            "state_multiplier": 0.0268
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1534,
        "fields": {
            "candidate": 142,
            "state": 409,
            "state_multiplier": 0.1006
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1535,
        "fields": {
            "candidate": 142,
            "state": 410,
            "state_multiplier": 0.0698
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1536,
        "fields": {
            "candidate": 142,
            "state": 411,
            "state_multiplier": 0.1057
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1537,
        "fields": {
            "candidate": 142,
            "state": 412,
            "state_multiplier": 0.0643
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1538,
        "fields": {
            "candidate": 142,
            "state": 413,
            "state_multiplier": 0.1013
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1539,
        "fields": {
            "candidate": 142,
            "state": 414,
            "state_multiplier": 0.0401
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1540,
        "fields": {
            "candidate": 142,
            "state": 415,
            "state_multiplier": 0.118
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1541,
        "fields": {
            "candidate": 142,
            "state": 416,
            "state_multiplier": 0.2268
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1542,
        "fields": {
            "candidate": 142,
            "state": 417,
            "state_multiplier": 0.1091
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1543,
        "fields": {
            "candidate": 142,
            "state": 418,
            "state_multiplier": 0.061
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1544,
        "fields": {
            "candidate": 142,
            "state": 419,
            "state_multiplier": 0.1078
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1545,
        "fields": {
            "candidate": 142,
            "state": 420,
            "state_multiplier": 0.0596
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1546,
        "fields": {
            "candidate": 142,
            "state": 421,
            "state_multiplier": 0.1016
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1547,
        "fields": {
            "candidate": 142,
            "state": 422,
            "state_multiplier": 0.032
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1548,
        "fields": {
            "candidate": 142,
            "state": 423,
            "state_multiplier": 0.113
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1549,
        "fields": {
            "candidate": 142,
            "state": 424,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1550,
        "fields": {
            "candidate": 142,
            "state": 425,
            "state_multiplier": 0.0315
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1551,
        "fields": {
            "candidate": 142,
            "state": 426,
            "state_multiplier": 0.0765
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1552,
        "fields": {
            "candidate": 142,
            "state": 427,
            "state_multiplier": 0.0717
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1553,
        "fields": {
            "candidate": 142,
            "state": 428,
            "state_multiplier": 0.1366
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1554,
        "fields": {
            "candidate": 142,
            "state": 429,
            "state_multiplier": 0.0355
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1555,
        "fields": {
            "candidate": 142,
            "state": 430,
            "state_multiplier": 0.0572
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1556,
        "fields": {
            "candidate": 142,
            "state": 431,
            "state_multiplier": 0.00973
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1557,
        "fields": {
            "candidate": 142,
            "state": 432,
            "state_multiplier": 0.0483
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1558,
        "fields": {
            "candidate": 142,
            "state": 433,
            "state_multiplier": 0.0001688
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1559,
        "fields": {
            "candidate": 142,
            "state": 434,
            "state_multiplier": 0.0563
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1560,
        "fields": {
            "candidate": 142,
            "state": 435,
            "state_multiplier": 0.083
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1561,
        "fields": {
            "candidate": 142,
            "state": 436,
            "state_multiplier": 0.0943
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1562,
        "fields": {
            "candidate": 142,
            "state": 437,
            "state_multiplier": 0.0944
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1563,
        "fields": {
            "candidate": 142,
            "state": 438,
            "state_multiplier": 0.0045
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1564,
        "fields": {
            "candidate": 142,
            "state": 439,
            "state_multiplier": 0.1115
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1565,
        "fields": {
            "candidate": 142,
            "state": 440,
            "state_multiplier": 0.1012
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1566,
        "fields": {
            "candidate": 142,
            "state": 441,
            "state_multiplier": 0.03376
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1567,
        "fields": {
            "candidate": 142,
            "state": 442,
            "state_multiplier": 0.098
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1568,
        "fields": {
            "candidate": 142,
            "state": 443,
            "state_multiplier": 0.1275
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1569,
        "fields": {
            "candidate": 142,
            "state": 444,
            "state_multiplier": 0.082
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1570,
        "fields": {
            "candidate": 142,
            "state": 445,
            "state_multiplier": 0.0069
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1571,
        "fields": {
            "candidate": 142,
            "state": 446,
            "state_multiplier": 0.0707
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1572,
        "fields": {
            "candidate": 142,
            "state": 447,
            "state_multiplier": 0.0231
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1573,
        "fields": {
            "candidate": 142,
            "state": 448,
            "state_multiplier": 0.0925
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1574,
        "fields": {
            "candidate": 142,
            "state": 449,
            "state_multiplier": 0.0658
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1575,
        "fields": {
            "candidate": 142,
            "state": 450,
            "state_multiplier": 0.0423
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1576,
        "fields": {
            "candidate": 142,
            "state": 451,
            "state_multiplier": 0.0161
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1577,
        "fields": {
            "candidate": 142,
            "state": 452,
            "state_multiplier": 0.1484
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1578,
        "fields": {
            "candidate": 142,
            "state": 453,
            "state_multiplier": 0.0714
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1579,
        "fields": {
            "candidate": 142,
            "state": 454,
            "state_multiplier": 0.1731
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1580,
        "fields": {
            "candidate": 142,
            "state": 455,
            "state_multiplier": 0.0553
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1581,
        "fields": {
            "candidate": 143,
            "state": 408,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1582,
        "fields": {
            "candidate": 143,
            "state": 409,
            "state_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1583,
        "fields": {
            "candidate": 143,
            "state": 410,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1584,
        "fields": {
            "candidate": 143,
            "state": 411,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1585,
        "fields": {
            "candidate": 143,
            "state": 412,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1586,
        "fields": {
            "candidate": 143,
            "state": 413,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1587,
        "fields": {
            "candidate": 143,
            "state": 414,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1588,
        "fields": {
            "candidate": 143,
            "state": 415,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1589,
        "fields": {
            "candidate": 143,
            "state": 416,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1590,
        "fields": {
            "candidate": 143,
            "state": 417,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1591,
        "fields": {
            "candidate": 143,
            "state": 418,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1592,
        "fields": {
            "candidate": 143,
            "state": 419,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1593,
        "fields": {
            "candidate": 143,
            "state": 420,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1594,
        "fields": {
            "candidate": 143,
            "state": 421,
            "state_multiplier": 2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1595,
        "fields": {
            "candidate": 143,
            "state": 422,
            "state_multiplier": 1.35
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1596,
        "fields": {
            "candidate": 143,
            "state": 423,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1597,
        "fields": {
            "candidate": 143,
            "state": 424,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1598,
        "fields": {
            "candidate": 143,
            "state": 425,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1599,
        "fields": {
            "candidate": 143,
            "state": 426,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1600,
        "fields": {
            "candidate": 143,
            "state": 427,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1601,
        "fields": {
            "candidate": 143,
            "state": 428,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1602,
        "fields": {
            "candidate": 143,
            "state": 429,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1603,
        "fields": {
            "candidate": 143,
            "state": 430,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1604,
        "fields": {
            "candidate": 143,
            "state": 431,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1605,
        "fields": {
            "candidate": 143,
            "state": 432,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1606,
        "fields": {
            "candidate": 143,
            "state": 433,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1607,
        "fields": {
            "candidate": 143,
            "state": 434,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1608,
        "fields": {
            "candidate": 143,
            "state": 435,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1609,
        "fields": {
            "candidate": 143,
            "state": 436,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1610,
        "fields": {
            "candidate": 143,
            "state": 437,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1611,
        "fields": {
            "candidate": 143,
            "state": 438,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1612,
        "fields": {
            "candidate": 143,
            "state": 439,
            "state_multiplier": 1.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1613,
        "fields": {
            "candidate": 143,
            "state": 440,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1614,
        "fields": {
            "candidate": 143,
            "state": 441,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1615,
        "fields": {
            "candidate": 143,
            "state": 442,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1616,
        "fields": {
            "candidate": 143,
            "state": 443,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1617,
        "fields": {
            "candidate": 143,
            "state": 444,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1618,
        "fields": {
            "candidate": 143,
            "state": 445,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1619,
        "fields": {
            "candidate": 143,
            "state": 446,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1620,
        "fields": {
            "candidate": 143,
            "state": 447,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1621,
        "fields": {
            "candidate": 143,
            "state": 448,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1622,
        "fields": {
            "candidate": 143,
            "state": 449,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1623,
        "fields": {
            "candidate": 143,
            "state": 450,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1624,
        "fields": {
            "candidate": 143,
            "state": 451,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1625,
        "fields": {
            "candidate": 143,
            "state": 452,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1626,
        "fields": {
            "candidate": 143,
            "state": 453,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1627,
        "fields": {
            "candidate": 143,
            "state": 454,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1628,
        "fields": {
            "candidate": 143,
            "state": 455,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1629,
        "fields": {
            "candidate": 144,
            "state": 408,
            "state_multiplier": 0.3216
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1630,
        "fields": {
            "candidate": 144,
            "state": 409,
            "state_multiplier": 2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1631,
        "fields": {
            "candidate": 144,
            "state": 410,
            "state_multiplier": 0.4852
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1632,
        "fields": {
            "candidate": 144,
            "state": 411,
            "state_multiplier": 1.0035
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1633,
        "fields": {
            "candidate": 144,
            "state": 412,
            "state_multiplier": 1.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1634,
        "fields": {
            "candidate": 144,
            "state": 413,
            "state_multiplier": 1.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1635,
        "fields": {
            "candidate": 144,
            "state": 414,
            "state_multiplier": 1.077
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1636,
        "fields": {
            "candidate": 144,
            "state": 415,
            "state_multiplier": 0.2893
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1637,
        "fields": {
            "candidate": 144,
            "state": 416,
            "state_multiplier": 0.0975
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1638,
        "fields": {
            "candidate": 144,
            "state": 417,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1639,
        "fields": {
            "candidate": 144,
            "state": 418,
            "state_multiplier": 1.2042
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1640,
        "fields": {
            "candidate": 144,
            "state": 419,
            "state_multiplier": 1.0397
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1641,
        "fields": {
            "candidate": 144,
            "state": 420,
            "state_multiplier": 1.2871
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1642,
        "fields": {
            "candidate": 144,
            "state": 421,
            "state_multiplier": 0.8906
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1643,
        "fields": {
            "candidate": 144,
            "state": 422,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1644,
        "fields": {
            "candidate": 144,
            "state": 423,
            "state_multiplier": 0.0905
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1645,
        "fields": {
            "candidate": 144,
            "state": 424,
            "state_multiplier": 1.092
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1646,
        "fields": {
            "candidate": 144,
            "state": 425,
            "state_multiplier": 0.92
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1647,
        "fields": {
            "candidate": 144,
            "state": 426,
            "state_multiplier": 1.095
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1648,
        "fields": {
            "candidate": 144,
            "state": 427,
            "state_multiplier": 1.207
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1649,
        "fields": {
            "candidate": 144,
            "state": 428,
            "state_multiplier": 1.0244
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1650,
        "fields": {
            "candidate": 144,
            "state": 429,
            "state_multiplier": 0.0595
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1651,
        "fields": {
            "candidate": 144,
            "state": 430,
            "state_multiplier": 0.9912
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1652,
        "fields": {
            "candidate": 144,
            "state": 431,
            "state_multiplier": 0.7365
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1653,
        "fields": {
            "candidate": 144,
            "state": 432,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1654,
        "fields": {
            "candidate": 144,
            "state": 433,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1655,
        "fields": {
            "candidate": 144,
            "state": 434,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1656,
        "fields": {
            "candidate": 144,
            "state": 435,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1657,
        "fields": {
            "candidate": 144,
            "state": 436,
            "state_multiplier": 0.9949
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1658,
        "fields": {
            "candidate": 144,
            "state": 437,
            "state_multiplier": 1.0994
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1659,
        "fields": {
            "candidate": 144,
            "state": 438,
            "state_multiplier": 0.4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1660,
        "fields": {
            "candidate": 144,
            "state": 439,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1661,
        "fields": {
            "candidate": 144,
            "state": 440,
            "state_multiplier": 1.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1662,
        "fields": {
            "candidate": 144,
            "state": 441,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1663,
        "fields": {
            "candidate": 144,
            "state": 442,
            "state_multiplier": 1.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1664,
        "fields": {
            "candidate": 144,
            "state": 443,
            "state_multiplier": 1.2788
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1665,
        "fields": {
            "candidate": 144,
            "state": 444,
            "state_multiplier": 1.0961
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1666,
        "fields": {
            "candidate": 144,
            "state": 445,
            "state_multiplier": 0.0278
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1667,
        "fields": {
            "candidate": 144,
            "state": 446,
            "state_multiplier": 1.0983
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1668,
        "fields": {
            "candidate": 144,
            "state": 447,
            "state_multiplier": 0.8442
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1669,
        "fields": {
            "candidate": 144,
            "state": 448,
            "state_multiplier": 0.2527
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1670,
        "fields": {
            "candidate": 144,
            "state": 449,
            "state_multiplier": 0.7403
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1671,
        "fields": {
            "candidate": 144,
            "state": 450,
            "state_multiplier": 1.7796
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1672,
        "fields": {
            "candidate": 144,
            "state": 451,
            "state_multiplier": 0.533
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1673,
        "fields": {
            "candidate": 144,
            "state": 452,
            "state_multiplier": 0.9279
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1674,
        "fields": {
            "candidate": 144,
            "state": 453,
            "state_multiplier": 1.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1675,
        "fields": {
            "candidate": 144,
            "state": 454,
            "state_multiplier": 1.1324
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1676,
        "fields": {
            "candidate": 144,
            "state": 455,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1677,
        "fields": {
            "candidate": 145,
            "state": 408,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1678,
        "fields": {
            "candidate": 145,
            "state": 409,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1679,
        "fields": {
            "candidate": 145,
            "state": 410,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1680,
        "fields": {
            "candidate": 145,
            "state": 411,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1681,
        "fields": {
            "candidate": 145,
            "state": 412,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1682,
        "fields": {
            "candidate": 145,
            "state": 413,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1683,
        "fields": {
            "candidate": 145,
            "state": 414,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1684,
        "fields": {
            "candidate": 145,
            "state": 415,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1685,
        "fields": {
            "candidate": 145,
            "state": 416,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1686,
        "fields": {
            "candidate": 145,
            "state": 417,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1687,
        "fields": {
            "candidate": 145,
            "state": 418,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1688,
        "fields": {
            "candidate": 145,
            "state": 419,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1689,
        "fields": {
            "candidate": 145,
            "state": 420,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1690,
        "fields": {
            "candidate": 145,
            "state": 421,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1691,
        "fields": {
            "candidate": 145,
            "state": 422,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1692,
        "fields": {
            "candidate": 145,
            "state": 423,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1693,
        "fields": {
            "candidate": 145,
            "state": 424,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1694,
        "fields": {
            "candidate": 145,
            "state": 425,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1695,
        "fields": {
            "candidate": 145,
            "state": 426,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1696,
        "fields": {
            "candidate": 145,
            "state": 427,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1697,
        "fields": {
            "candidate": 145,
            "state": 428,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1698,
        "fields": {
            "candidate": 145,
            "state": 429,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1699,
        "fields": {
            "candidate": 145,
            "state": 430,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1700,
        "fields": {
            "candidate": 145,
            "state": 431,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1701,
        "fields": {
            "candidate": 145,
            "state": 432,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1702,
        "fields": {
            "candidate": 145,
            "state": 433,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1703,
        "fields": {
            "candidate": 145,
            "state": 434,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1704,
        "fields": {
            "candidate": 145,
            "state": 435,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1705,
        "fields": {
            "candidate": 145,
            "state": 436,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1706,
        "fields": {
            "candidate": 145,
            "state": 437,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1707,
        "fields": {
            "candidate": 145,
            "state": 438,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1708,
        "fields": {
            "candidate": 145,
            "state": 439,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1709,
        "fields": {
            "candidate": 145,
            "state": 440,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1710,
        "fields": {
            "candidate": 145,
            "state": 441,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1711,
        "fields": {
            "candidate": 145,
            "state": 442,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1712,
        "fields": {
            "candidate": 145,
            "state": 443,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1713,
        "fields": {
            "candidate": 145,
            "state": 444,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1714,
        "fields": {
            "candidate": 145,
            "state": 445,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1715,
        "fields": {
            "candidate": 145,
            "state": 446,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1716,
        "fields": {
            "candidate": 145,
            "state": 447,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1717,
        "fields": {
            "candidate": 145,
            "state": 448,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1718,
        "fields": {
            "candidate": 145,
            "state": 449,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1719,
        "fields": {
            "candidate": 145,
            "state": 450,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1720,
        "fields": {
            "candidate": 145,
            "state": 451,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1721,
        "fields": {
            "candidate": 145,
            "state": 452,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1722,
        "fields": {
            "candidate": 145,
            "state": 453,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1723,
        "fields": {
            "candidate": 145,
            "state": 454,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1724,
        "fields": {
            "candidate": 145,
            "state": 455,
            "state_multiplier": 0
        }
    }
]

campaignTrail_temp.answer_score_global_json = [
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2095,
        "fields": {
            "answer": 4238,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2096,
        "fields": {
            "answer": 4239,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2097,
        "fields": {
            "answer": 4240,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2098,
        "fields": {
            "answer": 4241,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2099,
        "fields": {
            "answer": 4242,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.9
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2101,
        "fields": {
            "answer": 4244,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.3
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2103,
        "fields": {
            "answer": 4245,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -1000
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2105,
        "fields": {
            "answer": 4247,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2106,
        "fields": {
            "answer": 4247,
            "candidate": 142,
            "affected_candidate": 144,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2107,
        "fields": {
            "answer": 4248,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2108,
        "fields": {
            "answer": 4248,
            "candidate": 142,
            "affected_candidate": 144,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2109,
        "fields": {
            "answer": 4250,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2110,
        "fields": {
            "answer": 4250,
            "candidate": 142,
            "affected_candidate": 144,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2111,
        "fields": {
            "answer": 4253,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2112,
        "fields": {
            "answer": 4253,
            "candidate": 142,
            "affected_candidate": 144,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2114,
        "fields": {
            "answer": 4256,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -100
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2115,
        "fields": {
            "answer": 4258,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2116,
        "fields": {
            "answer": 4260,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2117,
        "fields": {
            "answer": 4261,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2118,
        "fields": {
            "answer": 4262,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2121,
        "fields": {
            "answer": 4269,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2122,
        "fields": {
            "answer": 4269,
            "candidate": 142,
            "affected_candidate": 144,
            "global_multiplier": 0.045
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2125,
        "fields": {
            "answer": 4362,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2126,
        "fields": {
            "answer": 4363,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2127,
        "fields": {
            "answer": 4364,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2128,
        "fields": {
            "answer": 4365,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2129,
        "fields": {
            "answer": 4362,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2130,
        "fields": {
            "answer": 4363,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2131,
        "fields": {
            "answer": 4364,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2132,
        "fields": {
            "answer": 4365,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2156,
        "fields": {
            "answer": 4310,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2157,
        "fields": {
            "answer": 4310,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2158,
        "fields": {
            "answer": 4312,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2159,
        "fields": {
            "answer": 4314,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2160,
        "fields": {
            "answer": 4315,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2161,
        "fields": {
            "answer": 4315,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2162,
        "fields": {
            "answer": 4316,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -10000
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2163,
        "fields": {
            "answer": 4318,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2165,
        "fields": {
            "answer": 4321,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2166,
        "fields": {
            "answer": 4323,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2167,
        "fields": {
            "answer": 4323,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2172,
        "fields": {
            "answer": 4329,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2173,
        "fields": {
            "answer": 4329,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2174,
        "fields": {
            "answer": 4330,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.0125
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2175,
        "fields": {
            "answer": 4330,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.0175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2176,
        "fields": {
            "answer": 4331,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -2
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2180,
        "fields": {
            "answer": 4333,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -1000
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2184,
        "fields": {
            "answer": 4334,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2186,
        "fields": {
            "answer": 4336,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2187,
        "fields": {
            "answer": 4337,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2188,
        "fields": {
            "answer": 4337,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2190,
        "fields": {
            "answer": 4340,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2191,
        "fields": {
            "answer": 4340,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2193,
        "fields": {
            "answer": 4343,
            "candidate": 142,
            "affected_candidate": 143,
            "global_multiplier": -0.105
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2195,
        "fields": {
            "answer": 4344,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2196,
        "fields": {
            "answer": 4344,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2197,
        "fields": {
            "answer": 4345,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2201,
        "fields": {
            "answer": 4350,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2202,
        "fields": {
            "answer": 4352,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2203,
        "fields": {
            "answer": 4353,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2204,
        "fields": {
            "answer": 4353,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2205,
        "fields": {
            "answer": 4355,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.0125
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2206,
        "fields": {
            "answer": 4357,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2207,
        "fields": {
            "answer": 4358,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2208,
        "fields": {
            "answer": 4359,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2209,
        "fields": {
            "answer": 4359,
            "candidate": 143,
            "affected_candidate": 143,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2210,
        "fields": {
            "answer": 4267,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15292,
        "fields": {
            "answer": 4249,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15295,
        "fields": {
            "answer": 4243,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15296,
        "fields": {
            "answer": 4263,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15298,
        "fields": {
            "answer": 4264,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15301,
        "fields": {
            "answer": 4332,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -1000
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15304,
        "fields": {
            "answer": 4327,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15307,
        "fields": {
            "answer": 4259,
            "candidate": 142,
            "affected_candidate": 144,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15309,
        "fields": {
            "answer": 4335,
            "candidate": 142,
            "affected_candidate": 142,
            "global_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15311,
        "fields": {
            "answer": 4262,
            "candidate": 142,
            "affected_candidate": 143,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15312,
        "fields": {
            "answer": 4263,
            "candidate": 142,
            "affected_candidate": 143,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15313,
        "fields": {
            "answer": 4264,
            "candidate": 142,
            "affected_candidate": 143,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15314,
        "fields": {
            "answer": 4341,
            "candidate": 142,
            "affected_candidate": 143,
            "global_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15315,
        "fields": {
            "answer": 4342,
            "candidate": 142,
            "affected_candidate": 143,
            "global_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15316,
        "fields": {
            "answer": 4268,
            "candidate": 142,
            "affected_candidate": 143,
            "global_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15317,
        "fields": {
            "answer": 4265,
            "candidate": 142,
            "affected_candidate": 143,
            "global_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15318,
        "fields": {
            "answer": 4335,
            "candidate": 142,
            "affected_candidate": 143,
            "global_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15321,
        "fields": {
            "answer": 4242,
            "candidate": 142,
            "affected_candidate": 143,
            "global_multiplier": -0.3
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 15322,
        "fields": {
            "answer": 4245,
            "candidate": 142,
            "affected_candidate": 143,
            "global_multiplier": -0.3
        }
    }
]

campaignTrail_temp.answer_score_issue_json = [
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1705,
        "fields": {
            "answer": 4240,
            "issue": 52,
            "issue_score": -0.6,
            "issue_importance": 7
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1706,
        "fields": {
            "answer": 4241,
            "issue": 53,
            "issue_score": 0,
            "issue_importance": 7
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1707,
        "fields": {
            "answer": 4241,
            "issue": 54,
            "issue_score": 0,
            "issue_importance": 7
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1709,
        "fields": {
            "answer": 4244,
            "issue": 52,
            "issue_score": 0,
            "issue_importance": 7
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1711,
        "fields": {
            "answer": 4247,
            "issue": 52,
            "issue_score": 0,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1712,
        "fields": {
            "answer": 4248,
            "issue": 52,
            "issue_score": 0,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1713,
        "fields": {
            "answer": 4250,
            "issue": 53,
            "issue_score": 0.1,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1714,
        "fields": {
            "answer": 4250,
            "issue": 54,
            "issue_score": 0.1,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1716,
        "fields": {
            "answer": 4253,
            "issue": 53,
            "issue_score": 0,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1718,
        "fields": {
            "answer": 4258,
            "issue": 52,
            "issue_score": -0.4,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1719,
        "fields": {
            "answer": 4260,
            "issue": 53,
            "issue_score": 0,
            "issue_importance": 12
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1720,
        "fields": {
            "answer": 4261,
            "issue": 53,
            "issue_score": -0.125,
            "issue_importance": 12
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1723,
        "fields": {
            "answer": 4264,
            "issue": 53,
            "issue_score": 0,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1724,
        "fields": {
            "answer": 4269,
            "issue": 54,
            "issue_score": 0,
            "issue_importance": 8
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1784,
        "fields": {
            "answer": 4310,
            "issue": 52,
            "issue_score": -0.5,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1785,
        "fields": {
            "answer": 4312,
            "issue": 52,
            "issue_score": 0.5,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1786,
        "fields": {
            "answer": 4318,
            "issue": 52,
            "issue_score": -0.55,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1789,
        "fields": {
            "answer": 4321,
            "issue": 54,
            "issue_score": 0.3,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1790,
        "fields": {
            "answer": 4323,
            "issue": 52,
            "issue_score": -0.65,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1793,
        "fields": {
            "answer": 4328,
            "issue": 56,
            "issue_score": 0.5,
            "issue_importance": 20
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1794,
        "fields": {
            "answer": 4329,
            "issue": 55,
            "issue_score": -0.2,
            "issue_importance": 20
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1795,
        "fields": {
            "answer": 4330,
            "issue": 55,
            "issue_score": -0.6,
            "issue_importance": 20
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1799,
        "fields": {
            "answer": 4336,
            "issue": 53,
            "issue_score": -0.1,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1800,
        "fields": {
            "answer": 4337,
            "issue": 53,
            "issue_score": -0.55,
            "issue_importance": 10
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1802,
        "fields": {
            "answer": 4340,
            "issue": 53,
            "issue_score": -0.55,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1807,
        "fields": {
            "answer": 4344,
            "issue": 52,
            "issue_score": -0.5,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1808,
        "fields": {
            "answer": 4344,
            "issue": 55,
            "issue_score": 0.35,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1809,
        "fields": {
            "answer": 4345,
            "issue": 55,
            "issue_score": -0.1,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1810,
        "fields": {
            "answer": 4346,
            "issue": 55,
            "issue_score": -0.55,
            "issue_importance": 6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1813,
        "fields": {
            "answer": 4352,
            "issue": 55,
            "issue_score": -0.5,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1814,
        "fields": {
            "answer": 4353,
            "issue": 52,
            "issue_score": -0.6,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1815,
        "fields": {
            "answer": 4355,
            "issue": 52,
            "issue_score": 0.25,
            "issue_importance": 6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1816,
        "fields": {
            "answer": 4357,
            "issue": 55,
            "issue_score": -0.033,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1817,
        "fields": {
            "answer": 4358,
            "issue": 55,
            "issue_score": -0.033,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1818,
        "fields": {
            "answer": 4359,
            "issue": 55,
            "issue_score": -0.05,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 15289,
        "fields": {
            "answer": 4239,
            "issue": 53,
            "issue_score": 0,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 15290,
        "fields": {
            "answer": 4239,
            "issue": 55,
            "issue_score": -0.5,
            "issue_importance": 1.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 15291,
        "fields": {
            "answer": 4239,
            "issue": 56,
            "issue_score": -0.3,
            "issue_importance": 1.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 15297,
        "fields": {
            "answer": 4263,
            "issue": 56,
            "issue_score": 0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 15299,
        "fields": {
            "answer": 4263,
            "issue": 55,
            "issue_score": 0.2,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 15303,
        "fields": {
            "answer": 4254,
            "issue": 54,
            "issue_score": 0.3,
            "issue_importance": 1.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 15305,
        "fields": {
            "answer": 4328,
            "issue": 53,
            "issue_score": 1,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 15323,
        "fields": {
            "answer": 4356,
            "issue": 54,
            "issue_score": -0.3,
            "issue_importance": 2
        }
    }
]

campaignTrail_temp.answer_score_state_json = [
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14668,
        "fields": {
            "answer": 4362,
            "state": 411,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14669,
        "fields": {
            "answer": 4362,
            "state": 442,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14670,
        "fields": {
            "answer": 4362,
            "state": 452,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14671,
        "fields": {
            "answer": 4363,
            "state": 417,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14672,
        "fields": {
            "answer": 4363,
            "state": 418,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14673,
        "fields": {
            "answer": 4363,
            "state": 419,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14674,
        "fields": {
            "answer": 4363,
            "state": 428,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14675,
        "fields": {
            "answer": 4363,
            "state": 440,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14676,
        "fields": {
            "answer": 4363,
            "state": 454,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14677,
        "fields": {
            "answer": 4364,
            "state": 413,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14678,
        "fields": {
            "answer": 4364,
            "state": 424,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14679,
        "fields": {
            "answer": 4364,
            "state": 426,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14680,
        "fields": {
            "answer": 4364,
            "state": 434,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14681,
        "fields": {
            "answer": 4364,
            "state": 444,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14682,
        "fields": {
            "answer": 4364,
            "state": 450,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14683,
        "fields": {
            "answer": 4365,
            "state": 437,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14684,
        "fields": {
            "answer": 4362,
            "state": 411,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14685,
        "fields": {
            "answer": 4362,
            "state": 442,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14686,
        "fields": {
            "answer": 4362,
            "state": 452,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14687,
        "fields": {
            "answer": 4363,
            "state": 417,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14688,
        "fields": {
            "answer": 4363,
            "state": 418,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14689,
        "fields": {
            "answer": 4363,
            "state": 419,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14690,
        "fields": {
            "answer": 4363,
            "state": 428,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14691,
        "fields": {
            "answer": 4363,
            "state": 440,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14692,
        "fields": {
            "answer": 4363,
            "state": 454,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14693,
        "fields": {
            "answer": 4364,
            "state": 413,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14694,
        "fields": {
            "answer": 4364,
            "state": 424,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14695,
        "fields": {
            "answer": 4364,
            "state": 426,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14696,
        "fields": {
            "answer": 4364,
            "state": 434,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14697,
        "fields": {
            "answer": 4364,
            "state": 444,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14698,
        "fields": {
            "answer": 4364,
            "state": 450,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14699,
        "fields": {
            "answer": 4365,
            "state": 437,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14720,
        "fields": {
            "answer": 4315,
            "state": 414,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.01375
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14721,
        "fields": {
            "answer": 4315,
            "state": 443,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.01375
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14722,
        "fields": {
            "answer": 4315,
            "state": 435,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0275
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14723,
        "fields": {
            "answer": 4315,
            "state": 437,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0275
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14724,
        "fields": {
            "answer": 4315,
            "state": 413,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.055
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14725,
        "fields": {
            "answer": 4315,
            "state": 424,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.055
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14726,
        "fields": {
            "answer": 4315,
            "state": 426,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.055
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14727,
        "fields": {
            "answer": 4315,
            "state": 444,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.055
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14728,
        "fields": {
            "answer": 4315,
            "state": 450,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.055
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14729,
        "fields": {
            "answer": 4315,
            "state": 414,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.0048125
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14730,
        "fields": {
            "answer": 4315,
            "state": 443,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.0048125
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14731,
        "fields": {
            "answer": 4315,
            "state": 435,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.009625
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14732,
        "fields": {
            "answer": 4315,
            "state": 437,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.009625
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14733,
        "fields": {
            "answer": 4315,
            "state": 413,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.01925
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14734,
        "fields": {
            "answer": 4315,
            "state": 424,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.01925
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14735,
        "fields": {
            "answer": 4315,
            "state": 426,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.01925
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14736,
        "fields": {
            "answer": 4315,
            "state": 444,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.01925
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14737,
        "fields": {
            "answer": 4315,
            "state": 450,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.01925
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14783,
        "fields": {
            "answer": 4329,
            "state": 409,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0667
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14784,
        "fields": {
            "answer": 4329,
            "state": 412,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0667
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14785,
        "fields": {
            "answer": 4329,
            "state": 417,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0667
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14786,
        "fields": {
            "answer": 4329,
            "state": 421,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0667
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14787,
        "fields": {
            "answer": 4329,
            "state": 431,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0667
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14788,
        "fields": {
            "answer": 4329,
            "state": 432,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0667
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14789,
        "fields": {
            "answer": 4329,
            "state": 433,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0667
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14790,
        "fields": {
            "answer": 4329,
            "state": 439,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0667
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14791,
        "fields": {
            "answer": 4329,
            "state": 446,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0667
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14792,
        "fields": {
            "answer": 4329,
            "state": 449,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0667
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14793,
        "fields": {
            "answer": 4329,
            "state": 455,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0667
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14794,
        "fields": {
            "answer": 4329,
            "state": 411,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.03335
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14795,
        "fields": {
            "answer": 4329,
            "state": 428,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.03335
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14796,
        "fields": {
            "answer": 4329,
            "state": 436,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.03335
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14797,
        "fields": {
            "answer": 4329,
            "state": 441,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.03335
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14798,
        "fields": {
            "answer": 4329,
            "state": 442,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.03335
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14799,
        "fields": {
            "answer": 4329,
            "state": 452,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.03335
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14800,
        "fields": {
            "answer": 4329,
            "state": 409,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14801,
        "fields": {
            "answer": 4329,
            "state": 412,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14802,
        "fields": {
            "answer": 4329,
            "state": 417,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14803,
        "fields": {
            "answer": 4329,
            "state": 421,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14804,
        "fields": {
            "answer": 4329,
            "state": 431,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14805,
        "fields": {
            "answer": 4329,
            "state": 432,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14806,
        "fields": {
            "answer": 4329,
            "state": 433,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14807,
        "fields": {
            "answer": 4329,
            "state": 439,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14808,
        "fields": {
            "answer": 4329,
            "state": 446,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14809,
        "fields": {
            "answer": 4329,
            "state": 449,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14810,
        "fields": {
            "answer": 4329,
            "state": 455,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14811,
        "fields": {
            "answer": 4329,
            "state": 411,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14812,
        "fields": {
            "answer": 4329,
            "state": 428,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14813,
        "fields": {
            "answer": 4329,
            "state": 436,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14814,
        "fields": {
            "answer": 4329,
            "state": 441,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14815,
        "fields": {
            "answer": 4329,
            "state": 442,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14816,
        "fields": {
            "answer": 4329,
            "state": 452,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14817,
        "fields": {
            "answer": 4330,
            "state": 409,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14818,
        "fields": {
            "answer": 4330,
            "state": 412,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14819,
        "fields": {
            "answer": 4330,
            "state": 417,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14820,
        "fields": {
            "answer": 4330,
            "state": 421,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14821,
        "fields": {
            "answer": 4330,
            "state": 431,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14822,
        "fields": {
            "answer": 4330,
            "state": 432,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14823,
        "fields": {
            "answer": 4330,
            "state": 433,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14824,
        "fields": {
            "answer": 4330,
            "state": 439,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14825,
        "fields": {
            "answer": 4330,
            "state": 446,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14826,
        "fields": {
            "answer": 4330,
            "state": 449,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14827,
        "fields": {
            "answer": 4330,
            "state": 455,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14828,
        "fields": {
            "answer": 4330,
            "state": 411,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14829,
        "fields": {
            "answer": 4330,
            "state": 428,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14830,
        "fields": {
            "answer": 4330,
            "state": 436,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14831,
        "fields": {
            "answer": 4330,
            "state": 441,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14832,
        "fields": {
            "answer": 4330,
            "state": 442,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14833,
        "fields": {
            "answer": 4330,
            "state": 452,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14834,
        "fields": {
            "answer": 4330,
            "state": 409,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14835,
        "fields": {
            "answer": 4330,
            "state": 412,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14836,
        "fields": {
            "answer": 4330,
            "state": 417,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14837,
        "fields": {
            "answer": 4330,
            "state": 421,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14838,
        "fields": {
            "answer": 4330,
            "state": 431,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14839,
        "fields": {
            "answer": 4330,
            "state": 432,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14840,
        "fields": {
            "answer": 4330,
            "state": 433,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14841,
        "fields": {
            "answer": 4330,
            "state": 439,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14842,
        "fields": {
            "answer": 4330,
            "state": 446,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14843,
        "fields": {
            "answer": 4330,
            "state": 449,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14844,
        "fields": {
            "answer": 4330,
            "state": 455,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14845,
        "fields": {
            "answer": 4330,
            "state": 411,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14846,
        "fields": {
            "answer": 4330,
            "state": 428,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14847,
        "fields": {
            "answer": 4330,
            "state": 436,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14848,
        "fields": {
            "answer": 4330,
            "state": 441,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14849,
        "fields": {
            "answer": 4330,
            "state": 442,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14850,
        "fields": {
            "answer": 4330,
            "state": 452,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14851,
        "fields": {
            "answer": 4337,
            "state": 414,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14852,
        "fields": {
            "answer": 4337,
            "state": 443,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14853,
        "fields": {
            "answer": 4337,
            "state": 435,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14854,
        "fields": {
            "answer": 4337,
            "state": 437,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14855,
        "fields": {
            "answer": 4337,
            "state": 413,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14856,
        "fields": {
            "answer": 4337,
            "state": 424,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14857,
        "fields": {
            "answer": 4337,
            "state": 426,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14858,
        "fields": {
            "answer": 4337,
            "state": 444,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14859,
        "fields": {
            "answer": 4337,
            "state": 450,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14860,
        "fields": {
            "answer": 4337,
            "state": 414,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14861,
        "fields": {
            "answer": 4337,
            "state": 443,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14862,
        "fields": {
            "answer": 4337,
            "state": 435,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14863,
        "fields": {
            "answer": 4337,
            "state": 437,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14864,
        "fields": {
            "answer": 4337,
            "state": 413,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14865,
        "fields": {
            "answer": 4337,
            "state": 424,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14866,
        "fields": {
            "answer": 4337,
            "state": 426,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14867,
        "fields": {
            "answer": 4337,
            "state": 444,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14868,
        "fields": {
            "answer": 4337,
            "state": 450,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14905,
        "fields": {
            "answer": 4344,
            "state": 409,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14906,
        "fields": {
            "answer": 4344,
            "state": 412,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14907,
        "fields": {
            "answer": 4344,
            "state": 413,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14908,
        "fields": {
            "answer": 4344,
            "state": 417,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14909,
        "fields": {
            "answer": 4344,
            "state": 418,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14910,
        "fields": {
            "answer": 4344,
            "state": 419,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14911,
        "fields": {
            "answer": 4344,
            "state": 420,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.027
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14912,
        "fields": {
            "answer": 4344,
            "state": 421,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14913,
        "fields": {
            "answer": 4344,
            "state": 425,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14914,
        "fields": {
            "answer": 4344,
            "state": 426,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14915,
        "fields": {
            "answer": 4344,
            "state": 427,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14916,
        "fields": {
            "answer": 4344,
            "state": 428,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.027
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14917,
        "fields": {
            "answer": 4344,
            "state": 430,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14918,
        "fields": {
            "answer": 4344,
            "state": 431,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14919,
        "fields": {
            "answer": 4344,
            "state": 432,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14920,
        "fields": {
            "answer": 4344,
            "state": 435,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14921,
        "fields": {
            "answer": 4344,
            "state": 437,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14922,
        "fields": {
            "answer": 4344,
            "state": 439,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14923,
        "fields": {
            "answer": 4344,
            "state": 440,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14924,
        "fields": {
            "answer": 4344,
            "state": 442,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14925,
        "fields": {
            "answer": 4344,
            "state": 443,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14926,
        "fields": {
            "answer": 4344,
            "state": 444,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14927,
        "fields": {
            "answer": 4344,
            "state": 446,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14928,
        "fields": {
            "answer": 4344,
            "state": 452,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14929,
        "fields": {
            "answer": 4344,
            "state": 454,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14930,
        "fields": {
            "answer": 4344,
            "state": 455,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14931,
        "fields": {
            "answer": 4344,
            "state": 409,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14932,
        "fields": {
            "answer": 4344,
            "state": 412,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14933,
        "fields": {
            "answer": 4344,
            "state": 413,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14934,
        "fields": {
            "answer": 4344,
            "state": 417,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14935,
        "fields": {
            "answer": 4344,
            "state": 418,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14936,
        "fields": {
            "answer": 4344,
            "state": 419,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14937,
        "fields": {
            "answer": 4344,
            "state": 420,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.054
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14938,
        "fields": {
            "answer": 4344,
            "state": 421,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.036
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14939,
        "fields": {
            "answer": 4344,
            "state": 425,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14940,
        "fields": {
            "answer": 4344,
            "state": 426,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14941,
        "fields": {
            "answer": 4344,
            "state": 427,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14942,
        "fields": {
            "answer": 4344,
            "state": 428,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.054
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14943,
        "fields": {
            "answer": 4344,
            "state": 430,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14944,
        "fields": {
            "answer": 4344,
            "state": 431,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.036
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14945,
        "fields": {
            "answer": 4344,
            "state": 432,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14946,
        "fields": {
            "answer": 4344,
            "state": 435,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14947,
        "fields": {
            "answer": 4344,
            "state": 437,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14948,
        "fields": {
            "answer": 4344,
            "state": 439,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14949,
        "fields": {
            "answer": 4344,
            "state": 440,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.036
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14950,
        "fields": {
            "answer": 4344,
            "state": 442,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14951,
        "fields": {
            "answer": 4344,
            "state": 443,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14952,
        "fields": {
            "answer": 4344,
            "state": 444,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14953,
        "fields": {
            "answer": 4344,
            "state": 446,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14954,
        "fields": {
            "answer": 4344,
            "state": 452,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14955,
        "fields": {
            "answer": 4344,
            "state": 454,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14956,
        "fields": {
            "answer": 4344,
            "state": 455,
            "candidate": 143,
            "affected_candidate": 143,
            "state_multiplier": 0.036
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14957,
        "fields": {
            "answer": 4345,
            "state": 409,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14958,
        "fields": {
            "answer": 4345,
            "state": 412,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14959,
        "fields": {
            "answer": 4345,
            "state": 413,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14960,
        "fields": {
            "answer": 4345,
            "state": 417,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14961,
        "fields": {
            "answer": 4345,
            "state": 418,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14962,
        "fields": {
            "answer": 4345,
            "state": 419,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14963,
        "fields": {
            "answer": 4345,
            "state": 420,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.00675
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14964,
        "fields": {
            "answer": 4345,
            "state": 421,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14965,
        "fields": {
            "answer": 4345,
            "state": 425,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14966,
        "fields": {
            "answer": 4345,
            "state": 426,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14967,
        "fields": {
            "answer": 4345,
            "state": 427,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14968,
        "fields": {
            "answer": 4345,
            "state": 428,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.00675
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14969,
        "fields": {
            "answer": 4345,
            "state": 430,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.00375
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14970,
        "fields": {
            "answer": 4345,
            "state": 431,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14971,
        "fields": {
            "answer": 4345,
            "state": 432,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14972,
        "fields": {
            "answer": 4345,
            "state": 435,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14973,
        "fields": {
            "answer": 4345,
            "state": 437,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0125
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14974,
        "fields": {
            "answer": 4345,
            "state": 439,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14975,
        "fields": {
            "answer": 4345,
            "state": 440,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14976,
        "fields": {
            "answer": 4345,
            "state": 442,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14977,
        "fields": {
            "answer": 4345,
            "state": 443,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.00375
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14978,
        "fields": {
            "answer": 4345,
            "state": 444,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14979,
        "fields": {
            "answer": 4345,
            "state": 446,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14980,
        "fields": {
            "answer": 4345,
            "state": 452,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14981,
        "fields": {
            "answer": 4345,
            "state": 454,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14982,
        "fields": {
            "answer": 4345,
            "state": 455,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14983,
        "fields": {
            "answer": 4241,
            "state": 413,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14984,
        "fields": {
            "answer": 4241,
            "state": 424,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14985,
        "fields": {
            "answer": 4241,
            "state": 426,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14986,
        "fields": {
            "answer": 4241,
            "state": 444,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14987,
        "fields": {
            "answer": 4241,
            "state": 450,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14988,
        "fields": {
            "answer": 4241,
            "state": 435,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14989,
        "fields": {
            "answer": 4241,
            "state": 437,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14990,
        "fields": {
            "answer": 4241,
            "state": 414,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14991,
        "fields": {
            "answer": 4241,
            "state": 443,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15001,
        "fields": {
            "answer": 4248,
            "state": 413,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15002,
        "fields": {
            "answer": 4248,
            "state": 424,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15003,
        "fields": {
            "answer": 4248,
            "state": 426,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15004,
        "fields": {
            "answer": 4248,
            "state": 444,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15005,
        "fields": {
            "answer": 4248,
            "state": 450,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15006,
        "fields": {
            "answer": 4248,
            "state": 435,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.045
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15007,
        "fields": {
            "answer": 4248,
            "state": 437,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.045
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15008,
        "fields": {
            "answer": 4248,
            "state": 414,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0225
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15009,
        "fields": {
            "answer": 4248,
            "state": 443,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0225
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15010,
        "fields": {
            "answer": 4267,
            "state": 413,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15011,
        "fields": {
            "answer": 4267,
            "state": 424,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15012,
        "fields": {
            "answer": 4267,
            "state": 426,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15013,
        "fields": {
            "answer": 4267,
            "state": 444,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15014,
        "fields": {
            "answer": 4267,
            "state": 450,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15015,
        "fields": {
            "answer": 4267,
            "state": 435,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.045
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15016,
        "fields": {
            "answer": 4267,
            "state": 437,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.045
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15017,
        "fields": {
            "answer": 4267,
            "state": 414,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0225
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15018,
        "fields": {
            "answer": 4267,
            "state": 443,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0225
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15191,
        "fields": {
            "answer": 4241,
            "state": 434,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15193,
        "fields": {
            "answer": 4248,
            "state": 434,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15194,
        "fields": {
            "answer": 4267,
            "state": 434,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15195,
        "fields": {
            "answer": 4241,
            "state": 409,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15196,
        "fields": {
            "answer": 4241,
            "state": 412,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15197,
        "fields": {
            "answer": 4241,
            "state": 417,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15198,
        "fields": {
            "answer": 4241,
            "state": 421,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15199,
        "fields": {
            "answer": 4241,
            "state": 431,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15200,
        "fields": {
            "answer": 4241,
            "state": 432,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15201,
        "fields": {
            "answer": 4241,
            "state": 433,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15202,
        "fields": {
            "answer": 4241,
            "state": 439,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15203,
        "fields": {
            "answer": 4241,
            "state": 446,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15204,
        "fields": {
            "answer": 4241,
            "state": 449,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15205,
        "fields": {
            "answer": 4241,
            "state": 455,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15206,
        "fields": {
            "answer": 4241,
            "state": 411,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15207,
        "fields": {
            "answer": 4241,
            "state": 428,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15208,
        "fields": {
            "answer": 4241,
            "state": 436,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15209,
        "fields": {
            "answer": 4241,
            "state": 441,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15210,
        "fields": {
            "answer": 4241,
            "state": 442,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15211,
        "fields": {
            "answer": 4241,
            "state": 452,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15229,
        "fields": {
            "answer": 4248,
            "state": 409,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15230,
        "fields": {
            "answer": 4248,
            "state": 412,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15231,
        "fields": {
            "answer": 4248,
            "state": 417,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15232,
        "fields": {
            "answer": 4248,
            "state": 421,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15233,
        "fields": {
            "answer": 4248,
            "state": 431,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15234,
        "fields": {
            "answer": 4248,
            "state": 432,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15235,
        "fields": {
            "answer": 4248,
            "state": 433,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15236,
        "fields": {
            "answer": 4248,
            "state": 439,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15237,
        "fields": {
            "answer": 4248,
            "state": 446,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15238,
        "fields": {
            "answer": 4248,
            "state": 449,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15239,
        "fields": {
            "answer": 4248,
            "state": 455,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15240,
        "fields": {
            "answer": 4248,
            "state": 411,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15241,
        "fields": {
            "answer": 4248,
            "state": 428,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15242,
        "fields": {
            "answer": 4248,
            "state": 436,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15243,
        "fields": {
            "answer": 4248,
            "state": 441,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15244,
        "fields": {
            "answer": 4248,
            "state": 442,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15245,
        "fields": {
            "answer": 4248,
            "state": 452,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15246,
        "fields": {
            "answer": 4267,
            "state": 409,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15247,
        "fields": {
            "answer": 4267,
            "state": 412,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15248,
        "fields": {
            "answer": 4267,
            "state": 417,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15249,
        "fields": {
            "answer": 4267,
            "state": 421,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15250,
        "fields": {
            "answer": 4267,
            "state": 431,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15251,
        "fields": {
            "answer": 4267,
            "state": 432,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15252,
        "fields": {
            "answer": 4267,
            "state": 433,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15253,
        "fields": {
            "answer": 4267,
            "state": 439,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15254,
        "fields": {
            "answer": 4267,
            "state": 446,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15255,
        "fields": {
            "answer": 4267,
            "state": 449,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15256,
        "fields": {
            "answer": 4267,
            "state": 455,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.024
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15257,
        "fields": {
            "answer": 4267,
            "state": 411,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15258,
        "fields": {
            "answer": 4267,
            "state": 428,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15259,
        "fields": {
            "answer": 4267,
            "state": 436,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15260,
        "fields": {
            "answer": 4267,
            "state": 441,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15261,
        "fields": {
            "answer": 4267,
            "state": 442,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15262,
        "fields": {
            "answer": 4267,
            "state": 452,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15263,
        "fields": {
            "answer": 4261,
            "state": 409,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0575
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15264,
        "fields": {
            "answer": 4261,
            "state": 412,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0575
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15265,
        "fields": {
            "answer": 4261,
            "state": 417,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0575
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15266,
        "fields": {
            "answer": 4261,
            "state": 421,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0575
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15267,
        "fields": {
            "answer": 4261,
            "state": 431,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0575
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15268,
        "fields": {
            "answer": 4261,
            "state": 432,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0575
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15269,
        "fields": {
            "answer": 4261,
            "state": 433,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0575
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15270,
        "fields": {
            "answer": 4261,
            "state": 439,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0575
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15271,
        "fields": {
            "answer": 4261,
            "state": 446,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0575
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15272,
        "fields": {
            "answer": 4261,
            "state": 449,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0575
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15273,
        "fields": {
            "answer": 4261,
            "state": 455,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.0575
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15274,
        "fields": {
            "answer": 4261,
            "state": 411,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15275,
        "fields": {
            "answer": 4261,
            "state": 428,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15276,
        "fields": {
            "answer": 4261,
            "state": 436,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15277,
        "fields": {
            "answer": 4261,
            "state": 441,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15278,
        "fields": {
            "answer": 4261,
            "state": 442,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15279,
        "fields": {
            "answer": 4261,
            "state": 452,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15280,
        "fields": {
            "answer": 4261,
            "state": 414,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.00625
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15281,
        "fields": {
            "answer": 4261,
            "state": 443,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.00625
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15282,
        "fields": {
            "answer": 4261,
            "state": 435,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0125
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15283,
        "fields": {
            "answer": 4261,
            "state": 437,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.0125
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15284,
        "fields": {
            "answer": 4261,
            "state": 413,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15285,
        "fields": {
            "answer": 4261,
            "state": 424,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15286,
        "fields": {
            "answer": 4261,
            "state": 426,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15287,
        "fields": {
            "answer": 4261,
            "state": 444,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15288,
        "fields": {
            "answer": 4261,
            "state": 450,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 15308,
        "fields": {
            "answer": 4334,
            "state": 439,
            "candidate": 142,
            "affected_candidate": 142,
            "state_multiplier": 0.1
        }
    }
]

campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1733,
        "fields": {
            "answer": 4238,
            "candidate": 142,
            "answer_feedback": "You continue to make speech after speech furiously denouncing the War. Moderate party leaders like Victor Berger can only look on in defeat as you are officially arrested for violating the Sedition Act."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1734,
        "fields": {
            "answer": 4239,
            "candidate": 142,
            "answer_feedback": "You write editorials to the country's leading newspapers announcing your desire for \"national harmony\" in the struggle against \"German militarism.\" You feel disgusted, but what choice did you have? "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1735,
        "fields": {
            "answer": 4240,
            "candidate": 142,
            "answer_feedback": "The pacifists in your party are revitalized by your acceptance speech."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1736,
        "fields": {
            "answer": 4241,
            "candidate": 142,
            "answer_feedback": "Commentators are discussing your surprisingly moderate acceptance speech, particularly in light of the legislation of your first term."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1737,
        "fields": {
            "answer": 4242,
            "candidate": 142,
            "answer_feedback": "Victor Berger comes to Terre Haute shortly after your confused editorial. Kate O'Hare will be heading the ticket, he says. You nod your head acceptingly. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1738,
        "fields": {
            "answer": 4243,
            "candidate": 142,
            "answer_feedback": "The Left Wing keeps itself in line and soon public denunciations of your \"great betrayal\" are kept to a minimum. A few super-patriots raise hell but most red-blooded Americans are happy that their eccentric idealists finally saw the light."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1739,
        "fields": {
            "answer": 4244,
            "candidate": 142,
            "answer_feedback": "Well, this... could have gone a lot better. Not only are the left-wing incensed that you would sacrifice such a crucial part of the party platform for such an ill-thought-out strategy of gradualism, but every newspaper of repute has also gone about denouncing you as a sly trickster intent on undermining the war effort by \"manipulation most familiar to Satan himself.\" The right-section core of the party perfectly understands why you did what you did, but practically no one else does."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1740,
        "fields": {
            "answer": 4245,
            "candidate": 142,
            "answer_feedback": "Your plan doesn't work. Your meetings are spied on and reports of your real strategy are leaked to every newspaper of repute. The American people now essentially consider you a Judas, a traitor. Eventually, you find yourself on the inside of a jail cell, and later sitting on an electric chair."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1741,
        "fields": {
            "answer": 4248,
            "candidate": 142,
            "answer_feedback": "This strikes a bit of an aggressive note for some in your party."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1742,
        "fields": {
            "answer": 4249,
            "candidate": 142,
            "answer_feedback": "You see the faces of the plain Ohio farmers shift and cringe in the disquiet of their consciences as they deliver a unanimous \"guilty\" verdict. You do not feel hatred for them, you feel glee, because you know that they will someday clasp their hands with yours and build the great Socialist republic that is destined to come."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1743,
        "fields": {
            "answer": 4251,
            "candidate": 142,
            "answer_feedback": "After a final goodbye to your wife and friends, you are escorted in heavily armored streetcars under strict supervision to prevent any rescue operations by vigilante workers. You take the opportunity to chat up the guards, beaming with joy all the way to Moundsville."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1744,
        "fields": {
            "answer": 4252,
            "candidate": 142,
            "answer_feedback": "This is just what most Democrats want to hear."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1745,
        "fields": {
            "answer": 4253,
            "candidate": 142,
            "answer_feedback": "This seems like an overly cautious stance on one of your signature first-term achievements."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1746,
        "fields": {
            "answer": 4254,
            "candidate": 142,
            "answer_feedback": "Wilson denies the pardon. The party doesn't listen to your pleas to focus on the working class instead of you and continues to fall into irrelevancy. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1747,
        "fields": {
            "answer": 4255,
            "candidate": 142,
            "answer_feedback": "Wilson denies the pardon. You are promptly put back into solitary confinement for over a month. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1748,
        "fields": {
            "answer": 4256,
            "candidate": 142,
            "answer_feedback": "Your men are glorified desperados whose military experience hardly goes beyond that of barfights and evading the police. Your army is crushed and you are killed in the fighting. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1749,
        "fields": {
            "answer": 4257,
            "candidate": 142,
            "answer_feedback": "You lead your army to the New Castle town hall. The militia attempts an assault and is repulsed. An uneasy siege begins."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1750,
        "fields": {
            "answer": 4258,
            "candidate": 142,
            "answer_feedback": "The public is clamoring for more vigorous action after the death of several Americans at the hands of Pancho Villa."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1751,
        "fields": {
            "answer": 4260,
            "candidate": 142,
            "answer_feedback": "This measure passes in any case, but you are not receiving much credit for it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1752,
        "fields": {
            "answer": 4261,
            "candidate": 142,
            "answer_feedback": "The farm vote is one of the largest blocs that is in doubt this fall. Advisors were really hoping you would do something to appeal to their interest."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1753,
        "fields": {
            "answer": 4262,
            "candidate": 142,
            "answer_feedback": "It's a noble but quixotic effort. The vast majority of your sympathizers are not willing to attend your rallies out of fear of being incarcerated. In the meantime, Vladimir Lenin holds two Americans hostage in exchange for your release. Whatever sympathies you had among the general public melt away."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1754,
        "fields": {
            "answer": 4263,
            "candidate": 142,
            "answer_feedback": "The last thing soldiers want to hear among the general mania of victory is that their fallen comrades died for nothing but the greed of Wall Street. Party organizers get beat up regularly. In the meantime, Vladimir Lenin holds two Americans hostage in exchange for your release. Whatever sympathies you had among the general public melt away."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1755,
        "fields": {
            "answer": 4264,
            "candidate": 142,
            "answer_feedback": "The rail and streetcar union bosses despise you but many locales are angry and ready to rise. A scheme is soon hatched. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1756,
        "fields": {
            "answer": 4265,
            "candidate": 142,
            "answer_feedback": "For anyone else this would have been the end, but, somehow, you cling to life. Eventually, Wilson and the Legion move on to other topics and you are once again allowed to live your \"normal\" prison life. You might have lost the battle, but you have lived to fight the war."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1757,
        "fields": {
            "answer": 4266,
            "candidate": 142,
            "answer_feedback": "The Democratic Party is pretty-well united in support of this law."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1758,
        "fields": {
            "answer": 4267,
            "candidate": 142,
            "answer_feedback": "The larger part of your supporters are resolutely in favor of a higher income tax, and are surprised by your unexpected veto."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1759,
        "fields": {
            "answer": 4268,
            "candidate": 142,
            "answer_feedback": "Word reaches Clarence Darrow, of your true state and you are given medical leave within the week. You feel some guilt over this, but deep inside you are relieved that you will have a few years left. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1760,
        "fields": {
            "answer": 4269,
            "candidate": 142,
            "answer_feedback": "There are some whispers that you have caved to the Southern wing of the party and done little to advance a child labor law."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1761,
        "fields": {
            "answer": 4310,
            "candidate": 142,
            "answer_feedback": "Immediate independence is a little unsettling to some, but it shouldn't make too much of a difference."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1762,
        "fields": {
            "answer": 4312,
            "candidate": 142,
            "answer_feedback": "There is still a large anti-war, anti-imperialist group within the Democratic Party, and they view this stance as a betrayal."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1763,
        "fields": {
            "answer": 4313,
            "candidate": 142,
            "answer_feedback": "The 17th Amendment is broadly popular among most voters, and it is best to support it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1764,
        "fields": {
            "answer": 4314,
            "candidate": 142,
            "answer_feedback": "The 17th Amendment is broadly popular among most voters, and it is best to support it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1765,
        "fields": {
            "answer": 4315,
            "candidate": 142,
            "answer_feedback": "The 17th Amendment is broadly popular among most voters, and it is best to support it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1766,
        "fields": {
            "answer": 4316,
            "candidate": 142,
            "answer_feedback": "The Second American Revolution has begun."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1767,
        "fields": {
            "answer": 4317,
            "candidate": 142,
            "answer_feedback": "There is still some hope that the nations of Europe would accept the United States as a mediator, and that a peaceful solution could be found to the current war."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1768,
        "fields": {
            "answer": 4318,
            "candidate": 142,
            "answer_feedback": "There is still some hope that the nations of Europe would accept the United States as a mediator, and that a peaceful solution could be found to the current war."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1770,
        "fields": {
            "answer": 4321,
            "candidate": 142,
            "answer_feedback": "You settle down into a routine, receiving countless gift baskets from well-wishers across the country. In your letters, you speak highly of every guard and prisoner you come across. You become friends with many of the prisoners. Your \"good treatment\" incenses super-patriots the nation over. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1771,
        "fields": {
            "answer": 4323,
            "candidate": 142,
            "answer_feedback": "It's a little hard to duck your own responsibility, since you signed this legislation, but it does have its opponents."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1775,
        "fields": {
            "answer": 4327,
            "candidate": 142,
            "answer_feedback": "The prospects of that happening died a long time ago. In the summer of 1919 at an emergency conference, the Left-Wing and the foreign language sections of the party are purged by the right section. Though you feel sadness at this, you choose to keep your membership within the old party. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1776,
        "fields": {
            "answer": 4328,
            "candidate": 142,
            "answer_feedback": "Your words embolden the Left and by the time of the Emergency Conference of 1919, almost every party chapter outside of Milwaukee agrees to side with the Third Internationale. Berger leaves the party for the Democrats, the face of your organization changed forever."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1777,
        "fields": {
            "answer": 4330,
            "candidate": 142,
            "answer_feedback": "This answer is definitely a step behind the times, in most regions."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1778,
        "fields": {
            "answer": 4331,
            "candidate": 142,
            "answer_feedback": "Success! Against all odds, your forces were able to win and the new \"Red Express\" is now free to continue its journey to a better future for all! The corpses of those who resisted watch on as the locomotive of Revolutions steams ahead!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1779,
        "fields": {
            "answer": 4333,
            "candidate": 142,
            "answer_feedback": "After a streetcar strike in Cleveland, you're put on a heavily guarded rail car. Midway through your sympathizers attempt to rescue you but fail miserably. You're killed in the chaos; your dreams collapsed."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1780,
        "fields": {
            "answer": 4335,
            "candidate": 142,
            "answer_feedback": "Surprising, a last-minute surge has occurred for you in the polls, mostly from sympathy voters privately disgusted at how the country has changed since that distant year of 1917..."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1781,
        "fields": {
            "answer": 4336,
            "candidate": 142,
            "answer_feedback": "This position is fairly conservative compared to that of most Democrats."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1782,
        "fields": {
            "answer": 4337,
            "candidate": 142,
            "answer_feedback": "People are confused by your sudden shift on what should be a winning issue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1783,
        "fields": {
            "answer": 4339,
            "candidate": 142,
            "answer_feedback": "You sit with the man for a while. He calls you a bastard and spits in your face. You tell him how someday everything will be made right and that he did the right thing. Eventually, a militiaman finds you and shoots you both."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1784,
        "fields": {
            "answer": 4340,
            "candidate": 142,
            "answer_feedback": "This position is fairly conservative compared to that of most Democrats."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1785,
        "fields": {
            "answer": 4342,
            "candidate": 142,
            "answer_feedback": "Your words are put into an editorial by a Socialist magazine in New York. Said magazine is later torched by a group of drunk veterans. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1786,
        "fields": {
            "answer": 4343,
            "candidate": 142,
            "answer_feedback": "Your statements are passed to President Wilson. He becomes quiet over the next few days. Oddly so. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1787,
        "fields": {
            "answer": 4344,
            "candidate": 142,
            "answer_feedback": "This is a controversial step, but perhaps it can work out for you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1788,
        "fields": {
            "answer": 4346,
            "candidate": 142,
            "answer_feedback": "This is a strong, patriotic position, and helps mute some jingoistic criticism of the Democrats' anti-war stance."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1790,
        "fields": {
            "answer": 4352,
            "candidate": 142,
            "answer_feedback": "The Democratic Party still wins a lot of its support from immigrants, leaving aside the current environment of full-on Americanism."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1791,
        "fields": {
            "answer": 4353,
            "candidate": 142,
            "answer_feedback": "The most fervent anti-war wing of the party cheers you on."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1792,
        "fields": {
            "answer": 4355,
            "candidate": 142,
            "answer_feedback": "This position is lifted straight from the Republican platform."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1793,
        "fields": {
            "answer": 4356,
            "candidate": 142,
            "answer_feedback": "You still keep a picture of Christ hung up on your wall, but this attitude of yours doesn't prevent the leading preachermen of the day from declaring you an \"atheist Bolsheviki.\""
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1794,
        "fields": {
            "answer": 4357,
            "candidate": 142,
            "answer_feedback": "The preachermen are convinced that this is your soul being saved. But you know better. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1795,
        "fields": {
            "answer": 4358,
            "candidate": 142,
            "answer_feedback": "This is a broadly popular stance, but it definitely alienates a key bloc of Democrats."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1796,
        "fields": {
            "answer": 4359,
            "candidate": 142,
            "answer_feedback": "This is a broadly popular stance."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1797,
        "fields": {
            "answer": 4362,
            "candidate": 142,
            "answer_feedback": "Good luck in this year's election. Many people think it will awfully close."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1798,
        "fields": {
            "answer": 4363,
            "candidate": 142,
            "answer_feedback": "Good luck in this year's election. Many people think it will awfully close."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1799,
        "fields": {
            "answer": 4364,
            "candidate": 142,
            "answer_feedback": "Good luck in this year's election. Many people think it will awfully close."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1800,
        "fields": {
            "answer": 4365,
            "candidate": 142,
            "answer_feedback": "Good luck in this year's election. Many people think it will awfully close."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1824,
        "fields": {
            "answer": 4310,
            "candidate": 143,
            "answer_feedback": "Immediate independence of the Philippines is not the popular position for Republicans."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1825,
        "fields": {
            "answer": 4315,
            "candidate": 143,
            "answer_feedback": "Conservatives have denounced the 17th Amendment, but it is broadly popular."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1827,
        "fields": {
            "answer": 4317,
            "candidate": 143,
            "answer_feedback": "There's nothing wrong with postponing judgment on this issue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1829,
        "fields": {
            "answer": 4323,
            "candidate": 143,
            "answer_feedback": "This position is too anti-war for many in your party to accept."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1834,
        "fields": {
            "answer": 4330,
            "candidate": 143,
            "answer_feedback": "You are definitely sticking to conservative points in this campaign."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1837,
        "fields": {
            "answer": 4334,
            "candidate": 143,
            "answer_feedback": "Surprisingly, the NPL, despite officially declaring themselves to be Republicans, endorse you, leading to a last-minute surge in North Dakota before election day. What this means remains to be seen."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1839,
        "fields": {
            "answer": 4336,
            "candidate": 143,
            "answer_feedback": "This is a safe position for a Republican to take."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1840,
        "fields": {
            "answer": 4337,
            "candidate": 143,
            "answer_feedback": "There is still conservative opposition to the Federal Reserve, but even that wing of the party is divided on the issue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1841,
        "fields": {
            "answer": 4338,
            "candidate": 142,
            "answer_feedback": "You get up from the rubble. You are arrested and within a week are given a trial. A week after that you are shot by a firing squad. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1842,
        "fields": {
            "answer": 4340,
            "candidate": 143,
            "answer_feedback": "You continue to make conservative points on the campaign trail."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1843,
        "fields": {
            "answer": 4341,
            "candidate": 142,
            "answer_feedback": "Strong words. A short video is shown in dime theatres across the nation on how you had finally managed to get a job in government. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1845,
        "fields": {
            "answer": 4344,
            "candidate": 143,
            "answer_feedback": "This is a controversial step, which has certainly created much bewilderment from your party."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1846,
        "fields": {
            "answer": 4345,
            "candidate": 143,
            "answer_feedback": "There are some attacks about this meeting, but it could also help keep German-Americans in the fold."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1847,
        "fields": {
            "answer": 4346,
            "candidate": 143,
            "answer_feedback": "Red-blooded Americans cheer your strong stance on this position."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1850,
        "fields": {
            "answer": 4350,
            "candidate": 143,
            "answer_feedback": "Significant concern is beginning to develop among Republicans over the level of immigration that has been permitted."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1851,
        "fields": {
            "answer": 4352,
            "candidate": 143,
            "answer_feedback": "Congress has just such a bill in the works right now."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1852,
        "fields": {
            "answer": 4353,
            "candidate": 143,
            "answer_feedback": "This is a surprisingly anti-war position for you, given initial expectations."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1854,
        "fields": {
            "answer": 4359,
            "candidate": 143,
            "answer_feedback": "Red-blooded Americans cheer your strong stance on this position."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 15300,
        "fields": {
            "answer": 4332,
            "candidate": 142,
            "answer_feedback": "After a streetcar strike in Cleveland, you're put on a heavily guarded rail car. Midway through your sympathizers attempt to rescue you but fail miserably. You're killed in the chaos; your dreams collapsed."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 15306,
        "fields": {
            "answer": 4259,
            "candidate": 142,
            "answer_feedback": "Your comments on his old statements cause a few ultra-patriots to denounce the ticket but the effect is minor. Poindexter makes the rounds denouncing you in return."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 15310,
        "fields": {
            "answer": 4246,
            "candidate": 142,
            "answer_feedback": "The immigrant workers of New Castle County are heavily organized and ready to fight. They seize the train station and alert you that your journey can continue unimpeded. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 15320,
        "fields": {
            "answer": 15319,
            "candidate": 142,
            "answer_feedback": "The workers look at you like you've gone mad, but they follow your order, setting up machine gun positions around the train station. Against all odds, you emerge victorious and the town is yours. "
        }
    }
]

