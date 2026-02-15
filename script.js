// We store the original data here
const bibleVerses = {
    sad: [
        { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", ref: "Psalm 34:18" },
        { text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.", ref: "Revelation 21:4" },
        { text: "Blessed are those who mourn, for they will be comforted.", ref: "Matthew 5:4" },
        { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
        { text: "The Lord is my shepherd, I shall not want.", ref: "Psalm 23:1" },
        { text: "He heals the brokenhearted and binds up their wounds.", ref: "Psalm 147:3" },
        { text: "Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God.", ref: "Psalm 42:11" },
        { text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.", ref: "Psalm 23:4" },
        { text: "The God of all grace... will himself restore you and make you strong, firm and steadfast.", ref: "1 Peter 5:10" },
        { text: "My help comes from the Lord, the Maker of heaven and earth.", ref: "Psalm 121:2" },
        { text: "The Lord is a refuge for the oppressed, a stronghold in times of trouble.", ref: "Psalm 9:9" },
        { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
        { text: "You keep track of all my sorrows. You have collected all my tears in your bottle.", ref: "Psalm 56:8" },
        { text: "The Lord sustains them on their sickbed and restores them from their bed of illness.", ref: "Psalm 41:3" },
        { text: "Though he brings grief, he will show compassion, so great is his unfailing love.", ref: "Lamentations 3:32" },
        { text: "Those who sow with tears will reap with songs of joy.", ref: "Psalm 126:5" },
        { text: "Being confident of this, that he who began a good work in you will carry it on to completion.", ref: "Philippians 1:6" },
        { text: "Record my misery; list my tears on your scroll — are they not in your record?", ref: "Psalm 56:8" },
        { text: "For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning.", ref: "Psalm 30:5" },
        { text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives.", ref: "John 14:27" }
    ],
    angry: [
        { text: "A gentle answer turns away wrath, but a harsh word stirs up anger.", ref: "Proverbs 15:1" },
        { text: "In your anger do not sin: Do not let the sun go down while you are still angry.", ref: "Ephesians 4:26" },
        { text: "Better a patient person than a warrior, one with self-control than one who takes a city.", ref: "Proverbs 16:32" },
        { text: "Everyone should be quick to listen, slow to speak and slow to become angry.", ref: "James 1:19" },
        { text: "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.", ref: "Ecclesiastes 7:9" },
        { text: "Fools give full vent to their rage, but the wise bring calm in the end.", ref: "Proverbs 29:11" },
        { text: "Get rid of all bitterness, rage and anger, brawling and slander.", ref: "Ephesians 4:31" },
        { text: "Starting a quarrel is like breaching a dam; so drop the matter before a dispute breaks out.", ref: "Proverbs 17:14" },
        { text: "Refrain from anger and turn from wrath; do not fret—it leads only to evil.", ref: "Psalm 37:8" },
        { text: "A hot-tempered person stirs up conflict, but the one who is patient calms a quarrel.", ref: "Proverbs 15:18" },
        { text: "Do not associate with a man given to anger; or go with a hot-tempered man.", ref: "Proverbs 22:24" },
        { text: "The discretion of a man makes him slow to anger, and his glory is to overlook a transgression.", ref: "Proverbs 19:11" },
        { text: "Sensible people control their temper; they earn respect by overlooking wrongs.", ref: "Proverbs 19:11" },
        { text: "Let your conversation be always full of grace, seasoned with salt.", ref: "Colossians 4:6" },
        { text: "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander.", ref: "Colossians 3:8" },
        { text: "Do not be overcome by evil, but overcome evil with good.", ref: "Romans 12:21" },
        { text: "Blessed are the peacemakers, for they will be called children of God.", ref: "Matthew 5:9" },
        { text: "If it is possible, as far as it depends on you, live at peace with everyone.", ref: "Romans 12:18" },
        { text: "Do not repay anyone evil for evil. Be careful to do what is right in the eyes of everyone.", ref: "Romans 12:17" },
        { text: "The Lord is compassionate and gracious, slow to anger, abounding in love.", ref: "Psalm 103:8" }
    ],
    thankful: [
        { text: "Give thanks to the Lord, for he is good; his love endures forever.", ref: "1 Chronicles 16:34" },
        { text: "Give thanks in all circumstances; for this is God’s will for you in Christ Jesus.", ref: "1 Thessalonians 5:18" },
        { text: "Enter his gates with thanksgiving and his courts with praise.", ref: "Psalm 100:4" },
        { text: "This is the day the Lord has made; let us rejoice and be glad in it.", ref: "Psalm 118:24" },
        { text: "Every good and perfect gift is from above, coming down from the Father.", ref: "James 1:17" },
        { text: "Let the peace of Christ rule in your hearts... And be thankful.", ref: "Colossians 3:15" },
        { text: "I will praise God’s name in song and glorify him with thanksgiving.", ref: "Psalm 69:30" },
        { text: "Oh, that men would give thanks to the Lord for His goodness.", ref: "Psalm 107:8" },
        { text: "Praise the Lord, my soul, and forget not all his benefits.", ref: "Psalm 103:2" },
        { text: "I thank my God every time I remember you.", ref: "Philippians 1:3" },
        { text: "Devote yourselves to prayer, being watchful and thankful.", ref: "Colossians 4:2" },
        { text: "I will give thanks to you, Lord, with all my heart; I will tell of all your wonderful deeds.", ref: "Psalm 9:1" },
        { text: "Rooted and built up in him, strengthened in the faith as you were taught, and overflowing with thankfulness.", ref: "Colossians 2:7" },
        { text: "Let us come before him with thanksgiving and extol him with music and song.", ref: "Psalm 95:2" },
        { text: "Thanks be to God for his indescribable gift!", ref: "2 Corinthians 9:15" },
        { text: "And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father.", ref: "Colossians 3:17" },
        { text: "I will give to the Lord the thanks due to his righteousness.", ref: "Psalm 7:17" },
        { text: "Giving thanks always and for everything to God the Father in the name of our Lord Jesus Christ.", ref: "Ephesians 5:20" },
        { text: "You are my God, and I will praise you; you are my God, and I will exalt you.", ref: "Psalm 118:28" },
        { text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", ref: "Psalm 28:7" }
    ],
    scared: [
        { text: "So do not fear, for I am with you; do not be dismayed, for I am your God.", ref: "Isaiah 41:10" },
        { text: "When I am afraid, I put my trust in you.", ref: "Psalm 56:3" },
        { text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.", ref: "2 Timothy 1:7" },
        { text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.", ref: "Psalm 23:4" },
        { text: "The Lord is my light and my salvation—whom shall I fear?", ref: "Psalm 27:1" },
        { text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", ref: "Philippians 4:6" },
        { text: "Peace is what I leave with you; it is my own peace that I give you.", ref: "John 14:27" },
        { text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged.", ref: "Joshua 1:9" },
        { text: "Be strong and courageous. Do not be afraid or terrified because of them.", ref: "Deuteronomy 31:6" },
        { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
        { text: "The Lord is on my side; I will not fear. What can man do to me?", ref: "Psalm 118:6" },
        { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1" },
        { text: "There is no fear in love. But perfect love drives out fear.", ref: "1 John 4:18" },
        { text: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine.", ref: "Isaiah 43:1" },
        { text: "But now, this is what the Lord says... Do not fear, for I am with you.", ref: "Isaiah 43:1-5" },
        { text: "The Lord will fight for you; you need only to be still.", ref: "Exodus 14:14" },
        { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5" },
        { text: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.", ref: "Psalm 91:1" },
        { text: "The Lord is my strength and my song.", ref: "Exodus 15:2" },
        { text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", ref: "Proverbs 18:10" }
    ],
    happy: [
        { text: "This is the day the Lord has made; let us rejoice and be glad in it.", ref: "Psalm 118:24" },
        { text: "A cheerful heart is good medicine, but a crushed spirit dries up the bones.", ref: "Proverbs 17:22" },
        { text: "Rejoice in the Lord always. I will say it again: Rejoice!", ref: "Philippians 4:4" },
        { text: "The Lord has done great things for us, and we are filled with joy.", ref: "Psalm 126:3" },
        { text: "You make known to me the path of life; you will fill me with joy in your presence.", ref: "Psalm 16:11" },
        { text: "The joy of the Lord is your strength.", ref: "Nehemiah 8:10" },
        { text: "May the God of hope fill you with all joy and peace as you trust in him.", ref: "Romans 15:13" },
        { text: "Your statutes are my heritage forever; they are the joy of my heart.", ref: "Psalm 119:111" },
        { text: "Light shines on the righteous and joy on the upright in heart.", ref: "Psalm 97:11" },
        { text: "Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy.", ref: "1 Peter 1:8" },
        { text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness.", ref: "Galatians 5:22" },
        { text: "Shout for joy to the Lord, all the earth.", ref: "Psalm 100:1" },
        { text: "Go, eat your food with gladness, and drink your wine with a joyful heart.", ref: "Ecclesiastes 9:7" },
        { text: "My lips will shout for joy when I sing praise to you.", ref: "Psalm 71:23" },
        { text: "You have turned my mourning into joyful dancing.", ref: "Psalm 30:11" },
        { text: "I have told you this so that my joy may be in you and that your joy may be complete.", ref: "John 15:11" },
        { text: "Blessed are the people whose God is the Lord.", ref: "Psalm 144:15" },
        { text: "I will be glad and rejoice in your love, for you saw my affliction.", ref: "Psalm 31:7" },
        { text: "Ask and you will receive, and your joy will be complete.", ref: "John 16:24" },
        { text: "The righteous cry out, and the Lord hears them; he delivers them from all their troubles.", ref: "Psalm 34:17" }
    ]
};

// This object will hold our "unused" verses for each mood
let versePool = {
    sad: [],
    angry: [],
    thankful: [],
    scared: [],
    happy: []
};

function getVerse(mood) {
    // 1. If the pool for this mood is empty, refill it with a fresh copy of the verses
    if (versePool[mood].length === 0) {
        versePool[mood] = [...bibleVerses[mood]];
    }

    // 2. Pick a random index from the current pool
    const randomIndex = Math.floor(Math.random() * versePool[mood].length);
    
    // 3. Remove (splice) that verse from the pool so it can't be picked again
    const selected = versePool[mood].splice(randomIndex, 1)[0];

    // 4. Update the UI
    document.getElementById('verse-text').innerText = `"${selected.text}"`;
    document.getElementById('verse-ref').innerText = `— ${selected.ref}`;
    
    // 5. Change UI colors dynamically
    const colors = { sad: '#4a90e2', angry: '#dd4b39', thankful: '#f39c12', scared: '#8e44ad', happy: '#27ae60' };
    document.getElementById('display-area').style.borderColor = colors[mood];

    // Optional: Log how many are left in the console
    console.log(`${mood.toUpperCase()} verses remaining in this round: ${versePool[mood].length}`);
}
