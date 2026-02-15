// 1. The Database
const bibleVerses = {
    sad: [
        { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit. You are never alone.", ref: "Psalm 34:18" },
        { text: "Your current situation is not your final destination. Better days are coming.", ref: "Jeremiah 29:11" },
        { text: "He heals the brokenhearted and binds up their wounds.", ref: "Psalm 147:3" },
        { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
        { text: "The Lord is my shepherd, I shall not want.", ref: "Psalm 23:1" },
        { text: "Blessed are those who mourn, for they will be comforted.", ref: "Matthew 5:4" },
        { text: "He will wipe every tear from their eyes. Your sorrow is seen.", ref: "Revelation 21:4" },
        { text: "Even though I walk through the darkest valley, I will fear no evil.", ref: "Psalm 23:4" },
        { text: "My help comes from the Lord, the Maker of heaven and earth.", ref: "Psalm 121:2" },
        { text: "The Lord is a refuge for the oppressed, a stronghold in times of trouble.", ref: "Psalm 9:9" },
        { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
        { text: "You keep track of all my sorrows. You have collected all my tears.", ref: "Psalm 56:8" },
        { text: "The Lord sustains them on their sickbed and restores them.", ref: "Psalm 41:3" },
        { text: "Those who sow with tears will reap with songs of joy.", ref: "Psalm 126:5" },
        { text: "Peace I leave with you; my peace I give you.", ref: "John 14:27" },
        { text: "The God of all grace will himself restore you and make you strong.", ref: "1 Peter 5:10" },
        { text: "Why, my soul, are you downcast? Put your hope in God.", ref: "Psalm 42:11" },
        { text: "For his anger lasts only a moment, but his favor lasts a lifetime.", ref: "Psalm 30:5" },
        { text: "You are allowed to be both a masterpiece and a work in progress.", ref: "Philippians 1:6" },
        { text: "He gives power to the weak and strength to the powerless.", ref: "Isaiah 40:29" }
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
        { text: "Do not association with a man given to anger.", ref: "Proverbs 22:24" },
        { text: "Let your conversation be always full of grace, seasoned with salt.", ref: "Colossians 4:6" },
        { text: "Do not be overcome by evil, but overcome evil with good.", ref: "Romans 12:21" },
        { text: "Blessed are the peacemakers, for they will be called children of God.", ref: "Matthew 5:9" },
        { text: "If it is possible, as far as it depends on you, live at peace with everyone.", ref: "Romans 12:18" },
        { text: "The Lord will fight for you; you need only to be still.", ref: "Exodus 14:14" },
        { text: "Bitterness is like drinking poison and waiting for the other person to die.", ref: "Hebrews 12:15" },
        { text: "Starting a quarrel is like breaching a dam; so drop the matter.", ref: "Proverbs 17:14" },
        { text: "Don't let your anger steal your peace. A gentle heart is your strength.", ref: "Proverbs 15:1" },
        { text: "Be patient with yourself and others. Everyone is fighting a battle.", ref: "Colossians 3:13" }
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
        { text: "Gratitude turns what we have into enough. You are truly blessed.", ref: "1 Thessalonians 5:18" },
        { text: "There is always, always something to be thankful for.", ref: "Psalm 107:1" },
        { text: "A thankful heart is a magnet for miracles.", ref: "Psalm 103:2" },
        { text: "Count your blessings, not your problems.", ref: "Philippians 4:8" },
        { text: "The more you praise, the more you find things to praise for.", ref: "Psalm 34:1" },
        { text: "Peace starts with a 'Thank You.'", ref: "Philippians 4:6-7" },
        { text: "You are a gift to the people around you.", ref: "Matthew 5:14" },
        { text: "Let the peace of Christ rule in your hearts... And be thankful.", ref: "Colossians 3:15" },
        { text: "I will give thanks to you, Lord, with all my heart.", ref: "Psalm 9:1" },
        { text: "Celebrate the small wins today.", ref: "Zechariah 4:10" },
        { text: "I will praise God’s name in song and glorify him with thanksgiving.", ref: "Psalm 69:30" }
    ],
    scared: [
        { text: "So do not fear, for I am with you; do not be dismayed, for I am your God.", ref: "Isaiah 41:10" },
        { text: "When I am afraid, I put my trust in you.", ref: "Psalm 56:3" },
        { text: "God gave us a spirit not of fear but of power and love and a sound mind.", ref: "2 Timothy 1:7" },
        { text: "The Lord is my light and my salvation—whom shall I fear?", ref: "Psalm 27:1" },
        { text: "Do not be anxious about anything, but in every situation, pray.", ref: "Philippians 4:6" },
        { text: "Have I not commanded you? Be strong and courageous.", ref: "Joshua 1:9" },
        { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1" },
        { text: "There is no fear in love. But perfect love drives out fear.", ref: "1 John 4:18" },
        { text: "The Lord will fight for you; you need only to be still.", ref: "Exodus 14:14" },
        { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5" },
        { text: "Fear is a liar. You are equipped with power.", ref: "2 Timothy 1:7" },
        { text: "You are hidden in the shadow of His wings. You are safe.", ref: "Psalm 91:4" },
        { text: "Take a deep breath. You are being guided by a love that never fails.", ref: "Psalm 48:14" },
        { text: "The name of the Lord is a strong tower. Run to it and feel safe.", ref: "Proverbs 18:10" },
        { text: "He knows your name. He knows your fears. He is holding your hand.", ref: "Isaiah 41:13" },
        { text: "When the waves are high, remember who the Captain of your ship is.", ref: "Mark 4:39" },
        { text: "Even the darkest night will end and the sun will rise.", ref: "Psalm 30:5" },
        { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
        { text: "Be strong and courageous. Do not be terrified.", ref: "Deuteronomy 31:6" },
        { text: "The Lord is on my side; I will not fear.", ref: "Psalm 118:6" }
    ],
    happy: [
        { text: "This is the day the Lord has made; let us rejoice and be glad in it.", ref: "Psalm 118:24" },
        { text: "A cheerful heart is good medicine.", ref: "Proverbs 17:22" },
        { text: "Rejoice in the Lord always. I will say it again: Rejoice!", ref: "Philippians 4:4" },
        { text: "The Lord has done great things for us, and we are filled with joy.", ref: "Psalm 126:3" },
        { text: "You make known to me the path of life; you will fill me with joy.", ref: "Psalm 16:11" },
        { text: "The joy of the Lord is your strength.", ref: "Nehemiah 8:10" },
        { text: "May the God of hope fill you with all joy and peace.", ref: "Romans 15:13" },
        { text: "Shout for joy to the Lord, all the earth.", ref: "Psalm 100:1" },
        { text: "You have turned my mourning into joyful dancing.", ref: "Psalm 30:11" },
        { text: "Your smile is a reflection of God’s joy. Keep shining your light.", ref: "Matthew 5:16" },
        { text: "A happy heart makes a face look lovely.", ref: "Proverbs 15:13" },
        { text: "You are a daughter of the King. Walk with your head held high.", ref: "Psalm 149:4" },
        { text: "Keep a song in your heart. You have so much to be happy about.", ref: "Ephesians 5:19" },
        { text: "The Lord takes great delight in you. He is singing over you today!", ref: "Zephaniah 3:17" },
        { text: "Live life to the fullest today. You are meant for abundance.", ref: "John 10:10" },
        { text: "The world is better because you are in it.", ref: "Numbers 6:24-26" },
        { text: "Your path is dripping with blessings. Keep moving forward.", ref: "Psalm 65:11" },
        { text: "Find joy in the journey, not just the destination.", ref: "Ecclesiastes 3:12" },
        { text: "Good things are coming your way. Expect miracles.", ref: "Psalm 37:4" },
        { text: "Today is a gift. That’s why it’s called the present.", ref: "Psalm 16:11" }
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
        { text: "We love because he first loved us.", ref: "1 John 4:19" }
    ]
};

// 2. The Logic (Refills the lists automatically so they don't repeat)
let versePool = { 
    sad: [], 
    angry: [], 
    thankful: [], 
    scared: [], 
    happy: [], 
    loved: [] 
};

function getVerse(mood) {
    // Check if the list for this mood exists and is empty
    if (!versePool[mood] || versePool[mood].length === 0) {
        versePool[mood] = [...bibleVerses[mood]];
    }

    // Pick a random verse from the pool
    const randomIndex = Math.floor(Math.random() * versePool[mood].length);
    const selected = versePool[mood].splice(randomIndex, 1)[0];

    // Update the Pop-up Text
    document.getElementById('verse-text').innerText = `"${selected.text}"`;
    document.getElementById('verse-ref').innerText = `— ${selected.ref}`;
    
    // Set colors
    const colors = { 
        sad: '#4a90e2', 
        angry: '#dd4b39', 
        thankful: '#f39c12', 
        scared: '#8e44ad', 
        happy: '#27ae60',
        loved: '#ff85a2' 
    };
    
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) {
        modalContainer.style.borderColor = colors[mood];
    }

    // Show the Modal
    const modal = document.getElementById('verseModal');
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal() {
    const modal = document.getElementById('verseModal');
    if (modal) {
        modal.style.display = "none";
    }
}

// Close when clicking outside the box
window.onclick = function(event) {
    const modal = document.getElementById('verseModal');
    if (event.target == modal) {
        closeModal();
    }
};
