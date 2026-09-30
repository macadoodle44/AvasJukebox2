//naming data array
    const albumSection = document.querySelector('.albums');


//inputting ablum data
const albums = [
    {
        title: "songs",
        artist: "Adrienne Lenker",
        genre: ["folk"],
        length: 39,
        picture: src="jjpictures/songs.png",
        alttext: "watercolored flowers with vibrant colors",
    },
    {
        title:"boygenius",
        artist: "boygenius",
        genre: "rock",
        length: 21, 
        picture: src="jjpictures/boygenius.jpg",
        alttext: "a black and white photo of three women in a small square frame surrounded by black",
    },
    {
        title: "Folksongs & Ballads",
        artist: "Tia Blake",
        genre: "folk",
        length: 34,
        picture: src="jjpictures/folksongs&ballads.jpg",
        alttext: "a black and white photo of a woman with a guitar in her lap",
    },
    {
        title: "I Can See the Future",
        artist:"Leith Ross",
        genre: "folk",
        length: 48, 
        picture: src="jjpictures/iCanSeeTheFuture.webp",
        alttext: "a collaged image of the artist and their guitar",
    },
    {
        title: "Capacity",
        artist: "Big Theif",
        genre: ["pop", "rock"],
        length: 41,
        picture: src="jjpictures/capacity.jpg",
        alttext: "a photo of a young man looking into the camera and holding a baby",
    },
    {
        title: "The Land Is Inhospitable and So Are We",
        artist: "Mitski", 
        genre: ["folk", "pop"],
        length: 32,
        picture: src="jjpictures/theLand.png",
        alttext: "a black and white photo of a woman lounging backward centered on a light orange background with the title text in bright orange on top",
    },
    {
        title: "How To Be A Human Being",
        artist: "Glass Animals", 
        genre: "pop", 
        length: 43, 
        picture: src="jjpictures/HTBAHB.png",
        alttext: "Many characters stand in a group photo framed by a vibrant patterned border",
    },
    {
        title: "I Need To Start A Garden", 
        artist: "Haley Heyndrricks",
        genre: "folk",
        length: 30,
        picture: src="jjpictures/iNeedToStartAGarden.png",
        alttext: "A woman looking at the camera while standing in a field. The picture is surrounded by dark green.",
    },
    {
        title: "Harry Styles", 
        artist: "Harry Styles",
        genre: ["pop", "rock"],
        length: 40, 
        picture: src="jjpictures/hs1.png",
        alttext: "A man's back as he sits in a tub of pink water."
    },
    {
        title: "Hozier: Expanded Edition", 
        artist: "Hozier", 
        genre: ["folk", "pop"],
        length: 63, 
        picture: src="jjpictures/hozier.jpg",
        alttext: "A collage style painting of a many in a house. His face is obscured.",
    },
    {
        title: "Cleopatra",
        artist: "The Lumineers",
        genre: ["folk", "pop"],
        length: 33,
        picture: src="jjpictures/cleopatra.jpg",
        alttext: "A black and white photo of a woman dressed as Cleopatra."
    },
    {
        title: "Shaken by a Low Sound",
        artist: "Crooked Still",
        genre: "folk",
        length: 38,
        picture: src="jjpictures/SBALS.png",
        alttext: "The head of a string instrument with a black bird perched on it."
    },
    {
        title: "the Last of Us Part II: Covers & Rarities",
        artist: "Various Artists",
        genre: "soundtrack",
        length: 19,
        picture: src= "jjpictures/TLOU.png",
        alttext: "A faded photo of a guitar with the album title in white on the left side.",
    },
    {
        title: "Strangers in the Night",
        artist: "Frank Sinatra",
        genre: "jazz",
        length: 35,
        picture: src="jjpictures/strangersInTheNight.png",
        alttext: "Frank Sinatra singing into a studio microphone."
    },
    {
        title: "La La Land (Original Motion Picture Score)",
        artist: "Justin Hurwitz",
        genre: ["jazz", "soundtrack"],
        length: 53,
        picture: src="jjpictures/lalaland.png",
        alttext: "White on the bottom and Blue on the top, with the White including the album credits and the blue the main characters.",
    },
    {
        title: "French Exit",
        artist: "TV Girl",
        genre: "pop",
        length: 40,
        picture: src="jjpictures/frenchExit.png",
        alttext: "A pair of lovers embracing. They are colored in pink and the background is black."
    },
    {
        title: "Stranger in the Alps",
        artist: "Pheobe Bridgers",
        genre: "pop",
        length: 51,
        picture: src="jjpictures/strangerInTheAlps.png",
        alttext: "A photo of a little girl playing outside with her dog, but the girl has been painted over as a ghost.",
    },
    {
        title: "Grace",
        artist: "Jeff Buckley",
        genre: "pop",
        length: 57,
        picture: src="jjpictures/grace.png",
        alttext: "A moody portrait of a man looking down.",
    },
    {
        title: "The Bends",
        artist: "Radiohead",
        genre: "rock",
        length: 48,
        picture: src="jjpictures/theBends.png",
        alttext: "A CPR mannaquin with the album title over it on the bottom.",
    },
    {
        title: "Some Things Never Leave",
        artist: "Annabelle Dinda",
        genre: "pop",
        length: 40,
        picture: src="jjpictures/someThingsNeverLeave.png",
        alttext: "A collage of a wooden street and a girls face."
    },
    {
        title: "ME-P",
        artist: "Annabelle Dinda",
        genre: "pop",
        length: 16,
        picture: src="jjpictures/me-p.png",
        alttext: "A girl with images of herself and looking into her phone.",
    },
    {
        title: "Unreal Unearth: Unending",
        artist: "Hozier",
        genre: "pop", 
        length: 99, 
        picture: src="jjpictures/UUU.png",
        alttext: "A smiling mouth emerges from dirt."
    },
    {
        title: "Being So Normal",
        artist: "Peach Pit",
        genre: ["pop", "rock"],
        length: 37,
        picture: src="jjpictures/beingSoNormal.png",
        alttext: "a photo of two mens torsos as they share a cigarette.",
    },
    {
        title: "Stick Season",
        artist: "Noah Kahan",
        genre: ["folk", "pop"],
        length: 55, 
        picture: src="jjpictures/stickSeason.png",
        alttext: "A man stands with his dog, looking sad, on a grassy field.",
    },
    {
        title: "GUTS: spilled",
        artist: "Olivia Rodrigo",
        genre: "pop",
        length: 54,
        picture: src="jjpictures/guts.png",
        alttext: "A girl laying down on a purple background but her face obscured by the paper of the picture tearing.",
    },
    {
        title: "Sunset Season",
        artist: "Conan Gray",
        genre: "pop",
        length: 18, 
        picture: src="jjpictures/sunsetSeason.png",
        alttext: "A man stand holding various items and wearing a crown on a sunset background.",
    },
    {
        title: "The Rise and Fall of a Midwest Princess",
        artist: "Chappel Roan",
        genre: "pop",
        length: 49,
        picture: src="jjpictures/TRAFOAMP.png",
        alttext: "A woman in flashy clothes and makeup poses in front of a theater vanity.",
    },
    {
        title: "Montgomery Ricky",
        artist: "Ricky Montgomery",
        genre: "pop",
        length: 30, 
        picture: src="jjpictures/montgomeryRicky.png",
        alttext: "A drawing of a man with three eyes and short brown hair framed by his hands.",
    },
    {
        title: "Bewitched",
        artist: "Laufey",
        genre: "jazz",
        length: 48,
        picture: src="jjpictures/bewitched.png",
        alttext: "A woman in a silver dress and crown lays belly down on a brown floor and looks to the camera.",
    },
    {
        title: "Harry's House",
        artist: "Harry Styles",
        genre: "pop",
        length: 41,
        picture: src="jjpictures/harrysHouse.png",
        alttext: "A man stands in a white shirt and jeans in a beige upsode-down room."
    },
    {
        title: "Minecraft: Volume Alpha",
        artist: "C418",
        genre: "soundtrack",
        length: 58, 
        picture: src="jjpictures/minecraft.png",
        alttext: "a 3D, 3/4 view of a minecraft dirt block",
    },
    {
        title: "Dear Wormwood",
        artist: "the Oh Hellos",
        genre: "folk",
        length: 39,
        picture: src="jjpictures/dearWormwood.jpg",
        alttext: "An album cover styled to look like postage. The envelope is green with red and blue stamps.",
    },
    {
        title: "Bad Self Portraits",
        artist: "Lake Street Dive",
        genre: ["jazz", "pop"],
        length: 39, 
        picture: src="jjpictures/badSelfPortraits.png",
        alttext: "The band sits in a dark red, lavish room and looks at the camera.",
    },
    {
        title: "Fruit for Flies",
        artist: "The Amry, The Navy",
        genre: "pop",
        length: 22,
        picture: src="jjpictures/fruitForFlies.png",
        alttext: "A pile of rotting fruit on a light blue background.",
    },
    {
        title: "Bright Future",
        artist: "Adrienne Lenker",
        genre: "folk",
        length: 43,
        picture: "jjpictures/brightFuture.png",
        alttext: "A blurry close up of a woman in a white cowboy hat.",
    },
    {
        title: "Hadestown (Original Broadway Cast Recording)",
        artist: "Original Broadway Cast of Hadestown",
        genre: "soundtrack",
        length: 122,
        picture: "jjpictures/hadestown.png",
        alttext: "A dark gray background with a hand extending from it holding a red flower.",
    }
]

//getting them all on the front page

for(let i = 0; i < albums.length; i++) {
    let album = albums[i]
    makeAlbum(album)
    // let newAlbum = document.createElement("div")
    // newAlbum.innerHTML = `
    //  <img src=${album.picture} alt=${album.alttext}>
    //  <h3>${album.title}</h3>
    //  <p>${album.artist}</p>
    //  <br>
    // `
    // document.querySelector(".albums").appendChild(newAlbum)
}

function makeAlbum(album) {
    let newAlbum = document.createElement("div")
    newAlbum.innerHTML = `
     <img src=${album.picture} alt=${album.alttext}>
     <h3>${album.title}</h3>
     <p>${album.artist}</p>
     <br>
    `
    document.querySelector(".albums").appendChild(newAlbum)
}

//sorting by genre with buttons

//folk
document.getElementById("folk").addEventListener("click", function(){
    document.querySelector(".albums").innerHTML = ""
    for(let i = 0; i < albums.length; i++) {
        let album = albums[i]
        if (album.genre.includes("folk")) {
            makeAlbum(album)
        }
    }
})

//rock
document.getElementById("rock").addEventListener("click", function(){
    document.querySelector(".albums").innerHTML = ""
    for(let i = 0; i < albums.length; i++) {
        let album = albums[i]
        if (album.genre.includes("rock")) {
            makeAlbum(album)
        }
    }
})

//pop
document.getElementById("pop").addEventListener("click", function(){
    document.querySelector(".albums").innerHTML = ""
    for(let i = 0; i < albums.length; i++) {
        let album = albums[i]
        if (album.genre.includes("pop")) {
            makeAlbum(album)
        }
    }
})

//jazz
document.getElementById("jazz").addEventListener("click", function(){
    document.querySelector(".albums").innerHTML = ""
    for(let i = 0; i < albums.length; i++) {
        let album = albums[i]
        if (album.genre.includes("jazz")) {
            makeAlbum(album)
        }
    }
})

//soundtrack
document.getElementById("soundtrack").addEventListener("click", function(){
    document.querySelector(".albums").innerHTML = ""
    for(let i = 0; i < albums.length; i++) {
        let album = albums[i]
        if (album.genre.includes("soundtrack")) {
            makeAlbum(album)
        }
    }
})

//jumble