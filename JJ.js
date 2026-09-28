
//inputting ablum data
const albums = [
    {
        title: "songs",
        artist: "Adrienne Lenker",
        genre: ["acoustic", "folk"],
        length: 39,
        picture: src="JukeboxJumble/jjpictures/songs.png",
        alttext: "watercolored flowers with vibrant colors",
    }
    {
        title:"boygenius",
        artist: "boygenius",
        genre: "rock",
        length: 21, 
        picture: src="JukeboxJumble/jjpictures/boygenius.png",
        alttext: "a black and white photo of three women in a small square frame surrounded by black",
    }
    {
        title: "Folksongs & Ballads",
        artist: "Tia Blake",
        genre: "folk",
        length: 34,
        picture: src="JukeboxJumble/jjpictures/folksongs&ballads.jpg",
        alttext: "a black and white photo of a woman with a guitar in her lap",
    }
    {
        title: "I Can See the Future",
        artist:"Leith Ross",
        genre: "folk",
        length: 48, 
        picture: src="JukeboxJumble/jjpictures/iCanSeeTheFuture.webp",
        alttext: "a collaged image of the artist and their guitar",
    }
    {
        title: "Capacity",
        artist: "Big Theif",
        genre: ["pop", "rock"],
        length: 41,
        picture: src="JukeboxJumble/jjpictures/capacity.jpg",
        alttext: "a photo of a young man looking into the camera and holding a baby",
    }
    {
        title: "The Land Is Inhospitable and So Are We",
        artist: "Mitski", 
        genre: ["folk", "pop"],
        length: 32,
        picture: src="JukeboxJumble/jjpictures/theLand.png",
        alttext: "a black and white photo of a woman lounging backward centered on a light orange background with the title text in bright orange on top",
    }
    {
        title: "How To Be A Human Being",
        artist: "Glass Animals", 
        genre: "pop", 
        length: 43, 
        picture: src="JukeboxJumble/jjpictures/HTBAHB.png",
        alttext: "Many characters stand in a group photo framed by a vibrant patterned border",
    }
    {
        title: "I Need To Start A Garden", 
        artist: "Haley Heyndrricks",
        genre: "folk",
        length: 30,
        picture: src="JukeboxJumble/jjpictures/iNeedToStartAGarden.png",
        alttext: "A woman looking at the camera while standing in a field. The picture is surrounded by dark green.",
    }
    {
        title: "Harry Styles", 
        artist: "Harry Styles",
        genre: ["pop", "rock"],
        length: 40, 
        picture: src="JukeboxJumble/jjpictures/hs1.png",
        alttext: "A man's back as he sits in a tub of pink water."
    }
    {
        title: "Hozier: Expanded Edition", 
        artist: "Hozier", 
        genre: ["folk", "pop"],
        length: 63, 
        picture: src="JukeboxJumble/jjpictures/hozier.jpg",
        alttext: "A collage style painting of a many in a house. His face is obscured.",
    }
    {
        title: "Cleopatra",
        artist: "The Lumineers",
        genre: ["folk", "pop"],
        length: 33,
        picture: src="JukeboxJumble/jjpictures/cleopatra",
        alttext: "A black and white photo of a woman dressed as Cleopatra."
    }
    {
        title: "Shaken by a Low Sound",
        artist: "Crooked Still",
        genre: "folk",
        length: 38,
        picture: src="JukeboxJumble/jjpictures/SBALS.png",
        alttext: "The head of a string instrument with a black bird perched on it."
    }
    {
        title: "the Last of Us Part II: Covers & Rarities",
        artist: "Various Artists",
        genre: "soundtrack",
        length: 19,
        picture: src= "JukeboxJumble/jjpictures/TLOU.png",
        alttext: "A faded photo of a guitar with the album title in white on the left side.",
    }
    {
        title: "Strangers in the Night",
        artist: "Frank Sinatra",
        genre: "jazz",
        length: 35,
        picture: src="JukeboxJumble/jjpictures/strangersInTheNight.png",
        alttext: "Frank Sinatra singing into a studio microphone."
    }
    {
        title: "La La Land (Original Motion Picture Score)",
        artist: "Justin Hurwitz",
        genre: ["jazz", "soundtrack"],
        length: 53,
        picture: src="JukeboxJumble/jjpictures/lalaland.png",
        alttext: "White on the bottom and Blue on the top, with the White including the album credits and the blue the main characters.",
    }
    {
        title: "French Exit",
        artist: "TV Girl",
        genre: "pop",
        length: 40,
        picture: src="JukeboxJumble/jjpictures/frenchExit.png",
        alttext: "A pair of lovers embracing. They are colored in pink and the background is black."
    }
    {
        title: "Stranger in the Alps",
        artist: "Pheobe Bridgers",
        genre: "pop",
        length: 51,
        picture: src="JukeboxJumble/jjpictures/strangerInTheAlps.png",
        alttext: "A photo of a little girl playing outside with her dog, but the girl has been painted over as a ghost.",
    }
    {
        title: "Grace",
        artist: "Jeff Buckley",
        genre: "pop",
        length: 57,
        picture: src="JukeboxJumble/jjpictures/grace.png",
        alttext: "A moody portrait of a man looking down.",
    }
    {
        title: "The Bends",
        artist: "Radiohead",
        genre: "rock",
        length: 48,
        picture: src="JukeboxJumble/jjpictures/theBends.png",
        alttext: "A CPR mannaquin with the album title over it on the bottom.",
    }
    {
        title: "Some Things Never Leave",
        artist: "Annabelle Dinda",
        genre: "pop",
        length: 40,
        picture: src="JukeboxJumble/jjpictures/someThingsNeverLeave",
        alttext: "A collage of a wooden street and a girls face."
    }
    {
        title: "ME-P",
        artist: "Annabelle Dinda",
        genre: "pop",
        length: 16,
        picture: src="JukeboxJumble/jjpictures/me-p",
        alttext: "A girl with images of herself and looking into her phone.",
    }
    {
        title: "Unreal Unearth: Unending",
        artist: "Hozier",
        genre: "pop", 
        length: 99, 
        picture: src="JukeboxJumble/jjpictures/UUU.png",
        alttext: "A smiling mouth emerges from dirt."
    }
    {
        title: "Being So Normal",
        artist: "Peach Pit",
        genre: ["pop", "rock"],
        length: 37,
        picture: src="JukeboxJumble/jjpictures/beingSoNormal.png",
        alttext: "a photo of two mens torsos as they share a cigarette.",
    }
    {
        title: "Stick Season",
        artist: "Noah Kahan",
        genre: ["folk", "pop"],
        length: 55, 
        picture: src="JukeboxJumble/jjpictures/stickSeason.png",
        alttext: "A man stands with his dog, looking sad, on a grassy field.",
    }
    {
        title: "GUTS: spilled",
        artist: "Olivia Rodrigo",
        genre: "pop",
        length: 54,
        picture: src="JukeboxJumble/jjpictures/guts.png",
        alttext: "A girl laying down on a purple background but her face obscured by the paper of the picture tearing.",
    }
    {
        title: "Sunset Season",
        artist: "Conan Gray",
        genre: "pop",
        length: 18, 
        picture: src="JukeboxJumble/jjpictures/sunsetSeason.png",
        alttext: "A man stand holding various items and wearing a crown on a sunset background.",
    }
    {
        title: "The Rise and Fall of a Midwest Princess",
        artist: "Chappel Roan",
        genre: "pop",
        length: 49,
        picture: src="JukeboxJumble/jjpictures/TRAFOAMP.png",
        alttext: "A woman in flashy clothes and makeup poses in front of a theater vanity.",
    }
    {
        title: "Montgomery Ricky",
        artist: "Ricky Montgomery",
        genre: "pop",
        length: 30, 
        picture: src="JukeboxJumble/jjpictures/montgomeryRicky.png",
        alttext: "A drawing of a man with three eyes and short brown hair framed by his hands.",
    }
    {
        title: "Bewitched",
        artist: "Laufey",
        genre: "jazz",
        length: 48,
        picture: src="JukeboxJumble/jjpictures/bewitched.png",
        alttext: "A woman in a silver dress and crown lays belly down on a brown floor and looks to the camera.",
    }
    {
        title: "Harry's House",
        artist: "Harry Styles",
        genre: "pop",
        length: 41,
        picture: src="JukeboxJumble/jjpictures/harrysHouse.png",
        alttext: "A man stands in a white shirt and jeans in a beige upsode-down room."
    }
    {
        title: "Minecraft: Volume Alpha",
        artist: "C418",
        genre: "soundtrack",
        length: 58, 
        picture: src="JukeboxJumble/jjpictures/minecraft.png",
        alttext: "a 3D, 3/4 view of a minecraft dirt block",
    }
    {
        title: "Dear Wormwood",
        artist: "the Oh Hellos",
        genre: "folk",
        length: 39,
        picture: src="JukeboxJumble/jjpictures/dearWormwood.jpg",
        alttext: "An album cover styled to look like postage. The envelope is green with red and blue stamps.",
    }
    {
        title: "Bad Self Portraits",
        artist: "Lake Street Dive",
        genre: ["jazz", "pop"],
        length: 39, 
        picture: src="JukeboxJumble/jjpictures/badSelfPortraits.png",
        alttext: "The band sits in a dark red, lavish room and looks at the camera.",
    }
    {
        title: "Fruit for Flies",
        artist: "The Amry, The Navy",
        genre: "pop",
        length: 22,
        picture: src="JukeboxJumble/jjpictures/fruitForFlies.png",
        alttext: "A pile of rotting fruit on a light blue background.",
    }
    {
        title: "Bright Future",
        artist: "Adrienne Lenker",
        genre: "folk",
        length: 43,
        picture: src="JukeboxJumble/jjpictures/brightFuture.png",
        alttext: "A blurry close up of a woman in a white cowboy hat.",
    }
    {
        title: "Hadestown (Original Broadway Cast Recording)",
        artist: "Original Broadway Cast of Hadestown",
        genre: "soundtrack",
        length: 122,
        picture: src="JukeboxJumble/jjpictures/hadestown.png",
        alttext: "A dark gray background with a hand extending from it holding a red flower.",
    }
]