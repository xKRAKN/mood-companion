const bibleVerses = {
    sad: [
        { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit. You are never alone in your pain.", ref: "Psalm 34:18" },
        { text: "Your current situation is not your final destination. Better days are coming.", ref: "Jeremiah 29:11" },
        { text: "You are allowed to be both a masterpiece and a work in progress.", ref: "Philippians 1:6" },
        { text: "The Lord is close to you when your heart is heavy. Let Him carry the weight today.", ref: "Psalm 34:18" },
        { text: "He will wipe every tear from your eyes. Your sorrow is seen and valued.", ref: "Revelation 21:4" },
        { text: "When you feel overwhelmed, remember that His grace is sufficient for you.", ref: "2 Corinthians 12:9" },
        { text: "You are worth more than you can imagine. Don't let sadness tell you otherwise.", ref: "Luke 12:7" },
        { text: "Tears are a language God understands. He is listening to your heart.", ref: "Psalm 56:8" },
        { text: "Rest your soul today. You don't have to have it all figured out right now.", ref: "Matthew 11:28" },
        { text: "Even in the dark, His light is shining on your path. Trust the next step.", ref: "Psalm 119:105" },
        { text: "You are stronger than the things that are trying to break you.", ref: "Isaiah 40:31" },
        { text: "Peace is not the absence of trouble, but the presence of God.", ref: "John 14:27" },
        { text: "Let your heart take courage. You are being held through this storm.", ref: "Psalm 27:14" },
        { text: "He restores your soul. Allow yourself time to heal.", ref: "Psalm 23:3" },
        { text: "Your life has a purpose that far outweighs this temporary moment of sadness.", ref: "Romans 8:28" },
        { text: "The sun will rise again, and His mercies are new every single morning.", ref: "Lamentations 3:22-23" },
        { text: "You are deeply loved, exactly as you are, in this very moment.", ref: "Romans 8:38-39" },
        { text: "Cast your cares on Him. He isn't tired of hearing from you.", ref: "1 Peter 5:7" },
        { text: "Your value is not defined by how you feel today.", ref: "Genesis 1:27" },
        { text: "He gives power to the weak and strength to the powerless. Lean on Him.", ref: "Isaiah 40:29" }
    ],
    angry: [
        { text: "Don't let your anger steal your peace. A gentle heart is your greatest strength.", ref: "Proverbs 15:1" },
        { text: "Protect your heart today. Don't let bitterness take root in your beautiful soul.", ref: "Ephesians 4:31" },
        { text: "You have the power to stay calm even when things feel chaotic.", ref: "Proverbs 29:11" },
        { text: "Let go of the things you cannot control. Your peace is worth more than being right.", ref: "James 1:19-20" },
        { text: "Inner peace begins the moment you choose not to allow another person to control your emotions.", ref: "Romans 12:18" },
        { text: "Be patient with yourself and others. Everyone is fighting a battle you know nothing about.", ref: "Colossians 3:13" },
        { text: "Anger is a wind which blows out the lamp of the mind. Choose clarity instead.", ref: "Proverbs 14:29" },
        { text: "Don't let the sun go down on your anger. Sleep in peace tonight.", ref: "Ephesians 4:26" },
        { text: "Kindness is a gift you give yourself. Choose to respond with grace.", ref: "Proverbs 11:17" },
        { text: "The best revenge is to be unlike him who performed the injury.", ref: "Romans 12:19" },
        { text: "Breathe. God is the judge, you don't have to carry the gavel.", ref: "Psalm 37:8" },
        { text: "Your character is defined by how you treat people you are angry with.", ref: "Colossians 4:6" },
        { text: "A quiet spirit is of great worth. Don't let the noise turn into rage.", ref: "1 Peter 3:4" },
        { text: "Overcome evil with good. It’s the hardest but most rewarding path.", ref: "Romans 12:21" },
        { text: "Forgiveness is the key that sets you free, not the person who hurt you.", ref: "Matthew 6:14" },
        { text: "Control your temper or it will control you. You are a person of dignity.", ref: "Proverbs 16:32" },
        { text: "The Lord will fight for you; you only need to be still.", ref: "Exodus 14:14" },
        { text: "Your words have power. Use them to build up, even when you're hurt.", ref: "Proverbs 12:18" },
        { text: "Bitterness is like drinking poison and waiting for the other person to die.", ref: "Hebrews 12:15" },
        { text: "God is slow to anger and rich in love. Try to mirror His heart today.", ref: "Psalm 103:8" }
    ],
    thankful: [
        { text: "Gratitude turns what we have into enough. You are truly blessed.", ref: "1 Thessalonians 5:18" },
        { text: "Look around you today. Every small joy is a gift meant just for you.", ref: "James 1:17" },
        { text: "Your life is a beautiful story of grace. Be thankful for how far you've come.", ref: "Psalm 126:3" },
        { text: "Start your day with a grateful heart and watch the world change around you.", ref: "Psalm 100:4" },
        { text: "There is always, always something to be thankful for.", ref: "Psalm 107:1" },
        { text: "Thank God for the doors He closed just as much as the ones He opened.", ref: "Proverbs 3:5-6" },
        { text: "A thankful heart is a magnet for miracles.", ref: "Psalm 103:2" },
        { text: "Count your blessings, not your problems. You have a beautiful future.", ref: "Philippians 4:8" },
        { text: "Be thankful for the struggles that made you the strong woman you are today.", ref: "Romans 5:3-5" },
        { text: "God’s love for you is the one thing that will never change. That is enough.", ref: "Psalm 136:1" },
        { text: "You are a gift to the people around you. Be thankful for your unique light.", ref: "Matthew 5:14" },
        { text: "Celebrate the small wins today. They lead to big victories.", ref: "Zechariah 4:10" },
        { text: "Peace starts with a 'Thank You.'", ref: "Philippians 4:6-7" },
        { text: "Your life is full of 'hidden' blessings. May your eyes stay open to them.", ref: "Psalm 31:19" },
        { text: "Even in the waiting, there is something to be grateful for.", ref: "Lamentations 3:25" },
        { text: "You are chosen, loved, and redeemed. What a beautiful reason to smile.", ref: "1 Peter 2:9" },
        { text: "The more you praise, the more you find things to praise for.", ref: "Psalm 34:1" },
        { text: "Your joy is a reflection of His goodness in your life.", ref: "Psalm 16:11" },
        { text: "Be thankful for the people who love you for exactly who you are.", ref: "1 Corinthians 13:4-7" },
        { text: "Life is a gift. Breathe it in with gratitude today.", ref: "Genesis 2:7" }
    ],
    scared: [
        { text: "Fear is a liar. You are equipped with power, love, and a sound mind.", ref: "2 Timothy 1:7" },
        { text: "When you feel afraid, trust the One who holds the stars in place.", ref: "Psalm 56:3" },
        { text: "You don't have to see the whole staircase to take the first step.", ref: "Isaiah 41:10" },
        { text: "God is not surprised by what you are facing. He is already in your tomorrow.", ref: "Joshua 1:9" },
        { text: "You are braver than you feel and stronger than you think.", ref: "Deuteronomy 31:6" },
        { text: "Don't worry about tomorrow. You are taken care of today.", ref: "Matthew 6:34" },
        { text: "There is no shadow that His light cannot reach. You are safe.", ref: "Psalm 27:1" },
        { text: "Let His perfect love drive out every fear in your heart today.", ref: "1 John 4:18" },
        { text: "You are hidden in the shadow of His wings. Nothing can touch your soul.", ref: "Psalm 91:4" },
        { text: "Quiet your mind. The Creator of the universe is fighting for you.", ref: "Exodus 14:14" },
        { text: "You have survived 100% of your hardest days. You will survive this too.", ref: "Psalm 138:8" },
        { text: "Your future is bright because God is already there.", ref: "Hebrews 13:8" },
        { text: "When the waves are high, remember who the Captain of your ship is.", ref: "Mark 4:39" },
        { text: "You are not an accident. Your life is planned and protected.", ref: "Jeremiah 1:5" },
        { text: "Take a deep breath. You are being guided by a love that never fails.", ref: "Psalm 48:14" },
        { text: "The name of the Lord is a strong tower. Run to it and feel safe.", ref: "Proverbs 18:10" },
        { text: "Do not be dismayed. Your God is with you wherever you go.", ref: "Joshua 1:9" },
        { text: "He knows your name. He knows your fears. He is holding your hand.", ref: "Isaiah 41:13" },
        { text: "Confidence is not 'they will like me.' Confidence is 'I'll be fine if they don't.' God is with you.", ref: "Hebrews 13:6" },
        { text: "You have a peace that passes all understanding. Let it guard your heart.", ref: "Philippians 4:7" }
    ],
    happy: [
        { text: "Your smile is a reflection of God’s joy. Keep shining your light.", ref: "Matthew 5:16" },
        { text: "Rejoice in this beautiful day! You were made for this moment.", ref: "Psalm 118:24" },
        { text: "A happy heart makes a face look lovely. You are glowing today.", ref: "Proverbs 15:13" },
        { text: "Your joy is your strength. Let it overflow to everyone you meet.", ref: "Nehemiah 8:10" },
        { text: "You are a daughter of the King. Walk with your head held high.", ref: "Psalm 149:4" },
        { text: "The Lord takes great delight in you. He is singing over you today!", ref: "Zephaniah 3:17" },
        { text: "Keep a song in your heart. You have so much to be happy about.", ref: "Ephesians 5:19" },
        { text: "Your happiness is a testimony of His goodness in your life.", ref: "Psalm 126:2" },
        { text: "Live life to the fullest today. You are meant for abundance.", ref: "John 10:10" },
        { text: "Laughter is medicine. Don't forget to take your dose today.", ref: "Proverbs 17:22" },
        { text: "You are beautifully and wonderfully made. Celebrate yourself!", ref: "Psalm 139:14" },
        { text: "The world is better because you are in it. Stay joyful.", ref: "Numbers 6:24-26" },
        { text: "Your path is dripping with blessings. Keep moving forward with joy.", ref: "Psalm 65:11" },
        { text: "Find joy in the journey, not just the destination.", ref: "Ecclesiastes 3:12" },
        { text: "Good things are coming your way. Expect miracles today.", ref: "Psalm 37:4" },
        { text: "Let your heart be light. You are deeply and truly loved.", ref: "Jeremiah 31:3" },
        { text: "You are a masterpiece in the making. Enjoy the process.", ref: "Ephesians 2:10" },
        { text: "Spread your joy like wildflower seeds. Watch them bloom everywhere.", ref: "Galatians 5:22-23" },
        { text: "The Lord has done great things for you. Be glad!", ref: "Psalm 126:3" },
        { text: "Today is a gift. That’s why it’s called the present. Enjoy it.", ref: "Psalm 16:11" }
    ],
    loved: [
        { text: "I have loved you with an everlasting love; I have drawn you with unfailing kindness.", ref: "Jeremiah 31:3" },
        { text: "See what great love the Father has lavished on us, that we should be called children of God!", ref: "1 John 3:1" },
        { text: "For the Lord your God is with you; He takes great delight in you and will quiet you with His love.", ref: "Zephaniah 3:17" },
        { text: "Neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God.", ref: "Romans 8:39" },
        { text: "You are precious and honored in His sight, and He loves you deeply.", ref: "Isaiah 43:4" },
        { text: "God is love. Whoever lives in love lives in God, and God in them.", ref: "1 John 4:16" },
        { text: "Give thanks to the God of heaven, for His steadfast love endures forever.", ref: "Psalm 136:26" },
        { text: "You are fearfully and wonderfully made. His eyes have never left you.", ref: "Psalm 139:14" },
        { text: "As the Father has loved me, so have I loved you. Now remain in my love.", ref: "John 15:9" },
        { text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.", ref: "Romans 5:8" },
        { text: "Greater love has no one than this: to lay down one’s life for one’s friends. You are His friend.", ref: "John 15:13" },
        { text: "The Lord your God is in your midst, a mighty one who will save; He will rejoice over you with gladness.", ref: "Zephaniah 3:17" },
        { text: "You did not choose me, but I chose you. You are hand-picked by the Creator.", ref: "John 15:16" },
        { text: "Cast all your anxieties on Him, because He cares for you personally.", ref: "1 Peter 5:7" },
        { text: "His banner over you is love. You are protected and cherished.", ref: "Song of Solomon 2:4" },
        { text: "For God so loved the world that he gave his one and only Son. That love includes you.", ref: "John 3:16" },
        { text: "The Lord appeared to us in the past, saying: 'I have loved you with an everlasting love.'", ref: "Jeremiah 31:3" },
        { text: "Keep yourselves in God’s love as you wait for the mercy of our Lord Jesus Christ.", ref: "Jude 1:21" },
        { text: "May you have the power to understand how wide, how long, how high, and how deep His love is.", ref: "Ephesians 3:18" },
        { text: "You are a chosen people, a royal priesthood, a holy nation, God’s special possession.", ref: "1 Peter 2:9" }
    ]
};

// Logic to prevent repetition
// Logic to prevent repetition - Ensure 'loved' is in this list!
let versePool = { sad: [], angry: [], thankful: [], scared: [], happy: [], loved: [] };

function getVerse(mood) {
    // Refill the deck if empty
    if (versePool[mood].length === 0) {
        versePool[mood] = [...bibleVerses[mood]];
    }

    const randomIndex = Math.floor(Math.random() * versePool[mood].length);
    const selected = versePool[mood].splice(randomIndex, 1)[0];

    // Update Modal Content
    document.getElementById('verse-text').innerText = `"${selected.text}"`;
    document.getElementById('verse-ref').innerText = `— ${selected.ref}`;
    
    // Set dynamic border color
    const colors = { 
        sad: '#4a90e2', 
        angry: '#dd4b39', 
        thankful: '#f39c12', 
        scared: '#8e44ad', 
        happy: '#27ae60',
        loved: '#ff85a2' 
    };
    document.getElementById('modal-container').style.borderColor = colors[mood];

    // Show the Pop-up
    document.getElementById('verseModal').style.display = "block";
}

function closeModal() {
    document.getElementById('verseModal').style.display = "none";
}

// Close if clicked outside
window.onclick = function(event) {
    let modal = document.getElementById('verseModal');
    if (event.target == modal) {
        closeModal();
    }
}
