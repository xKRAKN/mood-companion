const bibleVerses = {
    sad: [
        { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", ref: "Psalm 34:18" },
        { text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.", ref: "Revelation 21:4" },
        { text: "Blessed are those who mourn, for they will be comforted.", ref: "Matthew 5:4" },
        { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
        { text: "The Lord is my shepherd, I shall not want.", ref: "Psalm 23:1" },
        { text: "He heals the brokenhearted and binds up their wounds.", ref: "Psalm 147:3" },
        { text: "Why, my soul, are you downcast? Put your hope in God.", ref: "Psalm 42:11" },
        { text: "Even though I walk through the darkest valley, I will fear no evil.", ref: "Psalm 23:4" },
        { text: "My help comes from the Lord, the Maker of heaven and earth.", ref: "Psalm 121:2" },
        { text: "The Lord is a refuge for the oppressed, a stronghold in times of trouble.", ref: "Psalm 9:9" },
        { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
        { text: "You keep track of all my sorrows. You have collected all my tears.", ref: "Psalm 56:8" },
        { text: "Those who sow with tears will reap with songs of joy.", ref: "Psalm 126:5" },
        { text: "Peace I leave with you; my peace I give you.", ref: "John 14:27" },
        { text: "The God of all grace will himself restore you and make you strong.", ref: "1 Peter 5:10" },
        { text: "The Lord sustains them on their sickbed and restores them.", ref: "Psalm 41:3" },
        { text: "Your current situation is not your final destination. Better days are coming.", ref: "Jeremiah 29:11" },
        { text: "For his anger lasts only a moment, but his favor lasts a lifetime.", ref: "Psalm 30:5" },
        { text: "He gives power to the weak and strength to the powerless.", ref: "Isaiah 40:29" },
        { text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.", ref: "Nahum 1:7" },
        { text: "But you, Lord, are a shield around me, my glory, the One who lifts my head high.", ref: "Psalm 3:3" },
        { text: "The righteous cry out, and the Lord hears them; he delivers them from all their troubles.", ref: "Psalm 34:17" },
        { text: "May your unfailing love be my comfort, according to your promise.", ref: "Psalm 119:76" },
        { text: "Do not let your hearts be troubled. You believe in God; believe also in me.", ref: "John 14:1" },
        { text: "The Lord is my light and my salvation—whom shall I fear?", ref: "Psalm 27:1" },
        { text: "He will cover you with his feathers, and under his wings you will find refuge.", ref: "Psalm 91:4" },
        { text: "Truly my soul finds rest in God; my salvation comes from him.", ref: "Psalm 62:1" },
        { text: "I can do all this through him who gives me strength.", ref: "Philippians 4:13" },
        { text: "He will never leave you nor forsake you.", ref: "Deuteronomy 31:6" },
        { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1" }
    ],
    angry: [
        { text: "A gentle answer turns away wrath, but a harsh word stirs up anger.", ref: "Proverbs 15:1" },
        { text: "In your anger do not sin: Do not let the sun go down while you are still angry.", ref: "Ephesians 4:26" },
        { text: "Better a patient person than a warrior, one with self-control than one who takes a city.", ref: "Proverbs 16:32" },
        { text: "Everyone should be quick to listen, slow to speak and slow to become angry.", ref: "James 1:19" },
        { text: "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.", ref: "Ecclesiastes 7:9" },
        { text: "Fools give full vent to their rage, but the wise bring calm in the end.", ref: "Proverbs 29:11" },
        { text: "Get rid of all bitterness, rage and anger, brawling and slander.", ref: "Ephesians 4:31" },
        { text: "Refrain from anger and turn from wrath; do not fret—it leads only to evil.", ref: "Psalm 37:8" },
        { text: "A hot-tempered person stirs up conflict, but the one who is patient calms a quarrel.", ref: "Proverbs 15:18" },
        { text: "The discretion of a man makes him slow to anger.", ref: "Proverbs 19:11" },
        { text: "Do not associate with a man given to anger.", ref: "Proverbs 22:24" },
        { text: "Let your conversation be always full of grace, seasoned with salt.", ref: "Colossians 4:6" },
        { text: "Do not be overcome by evil, but overcome evil with good.", ref: "Romans 12:21" },
        { text: "Blessed are the peacemakers, for they will be called children of God.", ref: "Matthew 5:9" },
        { text: "The Lord will fight for you; you need only to be still.", ref: "Exodus 14:14" },
        { text: "Do not repay anyone evil for evil. Be careful to do what is right.", ref: "Romans 12:17" },
        { text: "If it is possible, as far as it depends on you, live at peace with everyone.", ref: "Romans 12:18" },
        { text: "My dear brothers and sisters, take note of this: Everyone should be quick to listen.", ref: "James 1:19" },
        { text: "Do not let your heart envy sinners, but always be zealous for the fear of the Lord.", ref: "Proverbs 23:17" },
        { text: "Make every effort to live in peace with everyone and to be holy.", ref: "Hebrews 12:14" },
        { text: "Sensible people control their temper; they earn respect by overlooking wrongs.", ref: "Proverbs 19:11" },
        { text: "Do not be eager in your spirit to be angry, for anger resides in the bosom of fools.", ref: "Ecclesiastes 7:9" },
        { text: "He who is slow to anger is better than the mighty.", ref: "Proverbs 16:32" },
        { text: "Let all bitterness and wrath and anger and clamor and slander be put away from you.", ref: "Ephesians 4:31" },
        { text: "A soft answer turns away wrath, but a harsh word stirs up anger.", ref: "Proverbs 15:1" },
        { text: "For the anger of man does not produce the righteousness of God.", ref: "James 1:20" },
        { text: "Cease from anger and forsake wrath; Do not fret; it leads only to evildoing.", ref: "Psalm 37:8" },
        { text: "Hatred stirs up strife, but love covers all offenses.", ref: "Proverbs 10:12" },
        { text: "Be kind to one another, tenderhearted, forgiving one another.", ref: "Ephesians 4:32" },
        { text: "The Lord is compassionate and gracious, slow to anger, abounding in love.", ref: "Psalm 103:8" }
    ],
    thankful: [
        { text: "Give thanks to the Lord, for he is good; his love endures forever.", ref: "1 Chronicles 16:34" },
        { text: "Give thanks in all circumstances; for this is God’s will for you.", ref: "1 Thessalonians 5:18" },
        { text: "Enter his gates with thanksgiving and his courts with praise.", ref: "Psalm 100:4" },
        { text: "This is the day the Lord has made; let us rejoice and be glad in it.", ref: "Psalm 118:24" },
        { text: "Every good and perfect gift is from above.", ref: "James 1:17" },
        { text: "Praise the Lord, my soul, and forget not all his benefits.", ref: "Psalm 103:2" },
        { text: "I thank my God every time I remember you.", ref: "Philippians 1:3" },
        { text: "Devote yourselves to prayer, being watchful and thankful.", ref: "Colossians 4:2" },
        { text: "Thanks be to God for his indescribable gift!", ref: "2 Corinthians 9:15" },
        { text: "I will give thanks to the Lord because of his righteousness.", ref: "Psalm 7:17" },
        { text: "Let the peace of Christ rule in your hearts... and be thankful.", ref: "Colossians 3:15" },
        { text: "Sing to the Lord with grateful praise; make music to our God.", ref: "Psalm 147:7" },
        { text: "Rooted and built up in him, strengthened in the faith... overflowing with thankfulness.", ref: "Colossians 2:7" },
        { text: "I will praise the name of God with a song; I will magnify him with thanksgiving.", ref: "Psalm 69:30" },
        { text: "Give thanks to the Lord, for he is good.", ref: "Psalm 107:1" },
        { text: "And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks.", ref: "Colossians 3:17" },
        { text: "You are my God, and I will praise you; you are my God, and I will exalt you.", ref: "Psalm 118:28" },
        { text: "I will give thanks to you, Lord, with all my heart; I will tell of all your wonderful deeds.", ref: "Psalm 9:1" },
        { text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", ref: "Psalm 28:7" },
        { text: "I will praise you, Lord my God, with all my heart; I will glorify your name forever.", ref: "Psalm 86:12" },
        { text: "Offer to God a sacrifice of thanksgiving, and perform your vows to the Most High.", ref: "Psalm 50:14" },
        { text: "Let us come into his presence with thanksgiving; let us make a joyful noise to him.", ref: "Psalm 95:2" },
        { text: "Open to me the gates of righteousness, that I may enter through them and give thanks.", ref: "Psalm 118:19" },
        { text: "Through him then let us continually offer up a sacrifice of praise to God.", ref: "Hebrews 13:15" },
        { text: "Blessing and glory and wisdom and thanksgiving and honor... be to our God forever.", ref: "Revelation 7:12" },
        { text: "Giving thanks always and for everything to God the Father.", ref: "Ephesians 5:20" },
        { text: "Oh give thanks to the Lord; call upon his name; make known his deeds among the peoples!", ref: "Psalm 105:1" },
        { text: "Let them give thanks to the Lord for his unfailing love and his wonderful deeds.", ref: "Psalm 107:8" },
        { text: "To you, O God of my fathers, I give thanks and praise.", ref: "Daniel 2:23" },
        { text: "I thank him who has given me strength, Christ Jesus our Lord.", ref: "1 Timothy 1:12" }
    ],
    scared: [
        { text: "So do not fear, for I am with you; do not be dismayed, for I am your God.", ref: "Isaiah 41:10" },
        { text: "When I am afraid, I put my trust in you.", ref: "Psalm 56:3" },
        { text: "God gave us a spirit not of fear but of power and love and a sound mind.", ref: "2 Timothy 1:7" },
        { text: "The Lord is my light and my salvation—whom shall I fear?", ref: "Psalm 27:1" },
        { text: "Do not be anxious about anything, but in every situation, pray.", ref: "Philippians 4:6" },
        { text: "Have I not commanded you? Be strong and courageous. Do not be afraid.", ref: "Joshua 1:9" },
        { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1" },
        { text: "There is no fear in love. But perfect love drives out fear.", ref: "1 John 4:18" },
        { text: "The Lord will fight for you; you need only to be still.", ref: "Exodus 14:14" },
        { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5" },
        { text: "Peace I leave with you; my peace I give you. Do not let your hearts be troubled.", ref: "John 14:27" },
        { text: "The Lord is on my side; I will not fear. What can man do to me?", ref: "Psalm 118:6" },
        { text: "Even though I walk through the valley of the shadow of death, I will fear no evil.", ref: "Psalm 23:4" },
        { text: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine.", ref: "Isaiah 43:1" },
        { text: "Be strong and courageous. Do not be afraid or terrified because of them.", ref: "Deuteronomy 31:6" },
        { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
        { text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", ref: "Proverbs 18:10" },
        { text: "When you pass through the waters, I will be with you.", ref: "Isaiah 43:2" },
        { text: "I sought the Lord, and he answered me; he delivered me from all my fears.", ref: "Psalm 34:4" },
        { text: "The Lord is my strength and my song; he has given me victory.", ref: "Exodus 15:2" },
        { text: "Do not be afraid, little flock, for your Father has been pleased to give you the kingdom.", ref: "Luke 12:32" },
        { text: "Who of you by worrying can add a single hour to your life?", ref: "Luke 12:25" },
        { text: "But even the hairs of your head are all numbered. Do not fear.", ref: "Luke 12:7" },
        { text: "The Lord will keep you from all harm—he will watch over your life.", ref: "Psalm 121:7" },
        { text: "Wait for the Lord; be strong and take heart and wait for the Lord.", ref: "Psalm 27:14" },
        { text: "He will not let your foot slip—he who watches over you will not slumber.", ref: "Psalm 121:3" },
        { text: "In God, whose word I praise—in God I trust and am not afraid.", ref: "Psalm 56:4" },
        { text: "Tell everyone who is discouraged, Be strong and don’t be afraid!", ref: "Isaiah 35:4" },
        { text: "You are my hiding place; you will protect me from trouble.", ref: "Psalm 32:7" },
        { text: "I have told you these things, so that in me you may have peace.", ref: "John 16:33" }
    ],
    happy: [
        { text: "This is the day the Lord has made; let us rejoice and be glad in it.", ref: "Psalm 118:24" },
        { text: "A cheerful heart is good medicine.", ref: "Proverbs 17:22" },
        { text: "Rejoice in the Lord always. I will say it again: Rejoice!", ref: "Philippians 4:4" },
        { text: "The Lord has done great things for us, and we are filled with joy.", ref: "Psalm 126:3" },
        { text: "You make known to me the path of life; you will fill me with joy in your presence.", ref: "Psalm 16:11" },
        { text: "The joy of the Lord is your strength.", ref: "Nehemiah 8:10" },
        { text: "May the God of hope fill you with all joy and peace as you trust in him.", ref: "Romans 15:13" },
        { text: "Shout for joy to the Lord, all the earth.", ref: "Psalm 100:1" },
        { text: "You have turned my mourning into joyful dancing.", ref: "Psalm 30:11" },
        { text: "Your smile is a reflection of God’s joy. Keep shining your light.", ref: "Matthew 5:16" },
        { text: "Go, eat your food with gladness, and drink your wine with a joyful heart.", ref: "Ecclesiastes 9:7" },
        { text: "But let the righteous be glad; let them exult before God; let them be jubilant with joy!", ref: "Psalm 68:3" },
        { text: "My lips will shout for joy when I sing praise to you—I whom you have delivered.", ref: "Psalm 71:23" },
        { text: "Light shines on the righteous and joy on the upright in heart.", ref: "Psalm 97:11" },
        { text: "I will be glad and rejoice in your love, for you saw my affliction.", ref: "Psalm 31:7" },
        { text: "The Lord has done great things for us, and we are filled with joy.", ref: "Psalm 126:3" },
        { text: "Though you have not seen him, you love him; and even though you do not see him now, you believe.", ref: "1 Peter 1:8" },
        { text: "Your statutes are my heritage forever; they are the joy of my heart.", ref: "Psalm 119:111" },
        { text: "I will sing to the Lord all my life; I will sing praise to my God as long as I live.", ref: "Psalm 104:33" },
        { text: "The prospect of the righteous is joy, but the hopes of the wicked come to nothing.", ref: "Proverbs 10:28" },
        { text: "A glad heart makes a cheerful face.", ref: "Proverbs 15:13" },
        { text: "Clap your hands, all you nations; shout to God with cries of joy.", ref: "Psalm 47:1" },
        { text: "You have put more joy in my heart than they have when their grain and wine abound.", ref: "Psalm 4:7" },
        { text: "Until now you have not asked for anything in my name. Ask and you will receive, and your joy will be complete.", ref: "John 16:24" },
        { text: "I have told you this so that my joy may be in you and that your joy may be complete.", ref: "John 15:11" },
        { text: "Be glad in the Lord, and rejoice, O righteous, and shout for joy, all you upright in heart!", ref: "Psalm 32:11" },
        { text: "Splendor and majesty are before him; strength and joy are in his dwelling place.", ref: "1 Chronicles 16:27" },
        { text: "The Lord your God is in your midst... he will rejoice over you with gladness.", ref: "Zephaniah 3:17" },
        { text: "Our mouths were filled with laughter, our tongues with songs of joy.", ref: "Psalm 126:2" },
        { text: "Restore to me the joy of your salvation and grant me a willing spirit, to sustain me.", ref: "Psalm 51:12" }
    ],
    loved: [
        { text: "I have loved you with an everlasting love; I have drawn you with unfailing kindness.", ref: "Jeremiah 31:3" },
        { text: "See what great love the Father has lavished on us!", ref: "1 John 3:1" },
        { text: "For the Lord your God is with you; He takes great delight in you.", ref: "Zephaniah 3:17" },
        { text: "Nothing in all creation will be able to separate us from the love of God.", ref: "Romans 8:39" },
        { text: "You are precious and honored in His sight, and He loves you.", ref: "Isaiah 43:4" },
        { text: "God is love. Whoever lives in love lives in God.", ref: "1 John 4:16" },
        { text: "You are fearfully and wonderfully made. His eyes have never left you.", ref: "Psalm 139:14" },
        { text: "As the Father has loved me, so have I loved you. Remain in my love.", ref: "John 15:9" },
        { text: "God demonstrates his own love for us in this: While we were still sinners, Christ died for us.", ref: "Romans 5:8" },
        { text: "Greater love has no one than this: to lay down one’s life for one’s friends.", ref: "John 15:13" },
        { text: "You did not choose me, but I chose you. You are hand-picked.", ref: "John 15:16" },
        { text: "Cast all your anxieties on Him, because He cares for you personally.", ref: "1 Peter 5:7" },
        { text: "His banner over you is love. You are cherished.", ref: "Song of Solomon 2:4" },
        { text: "For God so loved the world that he gave his one and only Son.", ref: "John 3:16" },
        { text: "You are a chosen people, a royal priesthood, God’s special possession.", ref: "1 Peter 2:9" },
        { text: "May you understand how wide, long, high, and deep His love is.", ref: "Ephesians 3:18" },
        { text: "The Lord appeared saying: 'I have loved you with an everlasting love.'", ref: "Jeremiah 31:3" },
        { text: "Keep yourselves in God’s love.", ref: "Jude 1:21" },
        { text: "The Lord your God is in your midst... He will quiet you with His love.", ref: "Zephaniah 3:17" },
        { text: "We love because he first loved us.", ref: "1 John 4:19" },
        { text: "Husbands, love your wives, as Christ loved the church.", ref: "Ephesians 5:25" },
        { text: "But you, O Lord, are a God merciful and gracious, slow to anger and abounding in steadfast love.", ref: "Psalm 86:15" },
        { text: "Give thanks to the God of heaven, for his steadfast love endures forever.", ref: "Psalm 136:26" },
        { text: "The steadfast love of the Lord never ceases; his mercies never come to an end.", ref: "Lamentations 3:22" },
        { text: "Let all that you do be done in love.", ref: "1 Corinthians 16:14" },
        { text: "Above all, keep loving one another earnestly, since love covers a multitude of sins.", ref: "1 Peter 4:8" },
        { text: "Love is patient and kind; love does not envy or boast; it is not arrogant.", ref: "1 Corinthians 13:4" },
        { text: "So now faith, hope, and love abide, these three; but the greatest of these is love.", ref: "1 Corinthians 13:13" },
        { text: "A new commandment I give to you, that you love one another: just as I have loved you.", ref: "John 13:34" },
        { text: "Whoever does not love does not know God, because God is love.", ref: "1 John 4:8" }
    ]
};

let versePool = { sad: [], angry: [], thankful: [], scared: [], happy: [], loved: [] };

function getVerse(mood) {
    if (!versePool[mood] || versePool[mood].length === 0) {
        versePool[mood] = [...bibleVerses[mood]];
    }

    const randomIndex = Math.floor(Math.random() * versePool[mood].length);
    const selected = versePool[mood].splice(randomIndex, 1)[0];

    document.getElementById('verse-text').innerText = `"${selected.text}"`;
    document.getElementById('verse-ref').innerText = `— ${selected.ref}`;
    
    const colors = { 
        sad: '#5d9cec', 
        angry: '#ed5565', 
        thankful: '#ffce54', 
        scared: '#ac92ec', 
        happy: '#a0d468',
        loved: '#fb6e8e' 
    };
    
    document.getElementById('modal-container').style.borderBottomColor = colors[mood];
    document.getElementById('verseModal').style.display = "block";
}

function closeModal() {
    document.getElementById('verseModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('verseModal');
    if (event.target == modal) {
        closeModal();
    }
};
