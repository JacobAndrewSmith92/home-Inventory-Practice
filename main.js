// Define the database as an object
const HomeInventoryDatabase = {}


// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

/*
Furniture
    1. Campaign Desk
    2. Kingsize Bed
    3. Refurbished kitchen table
Crafts
    4. Handmade Teapot
    5. El Paso, Texas Pennant
    6. Kenyan oil painting
Technology
    7. Apple TV
    8. Apple Iphone X
    9. 2011 17" Macbook Pro
    10. 29" 21:9 LG Monitor 
*/
// FURNITURE OBJECTS //

const campaignDesk = {
    name: "Campaign Desk",
    location: "Office",
    description: "The first desk I purchased when attending college."
  }

const kingsizeBed = {
    name: "Serta Kingsize Mattress",
    location: "Bedroom",
    description: "A free kingsize bed given to me after years and years of sleeping on a twin bed."
}
const kitchenTable = {
    name: "Kitchen Table",
    location: "Kitchen",
    description: "A rounded table that has been painted white and distressed. Great memories and great food have been had around this table."
}

// CRAFT OBJECTS //

const teapot = {
    name: "Handspun Teapot",
    location: "Kitchen Cabinet",
    description: "Roomate created multiple teapots and gifted one to me."
}
const pennant = {
    name: "El Paso Pennant",
    location: "Campaign Desk",
    description: "A friend gifted this pennant to me knowing I was from that city. He found it in an antique shop 1300 miles from El Paso."
}
const oilPainting = {
    name: "Kenyan Masai Oil Painting",
    location: "Bedroom Wall",
    description: "When to a market in Nairobi, Kenya and purchased this painting to remember my time there."
}

// TECHNOLOGY //

const appleTV = {
    name: "1st-Gen Apple TV",
    location: "Living Room",
    description: "Parents gifted this to me on Christmas. It's seen many, many episodes of The Office."
}
const iphoneX = {
    name: "Apple Iphone X",
    location: "My Pocket",
    description: "Fastest, highest resolution Apple phone created."
}
const macbookPro = {
    name: `2011 17" Macbook Pro`,
    location: "My Backpack",
    description: "How I study code and create awesome stuff."
}

const tvMonitor = {
    name: `29" LG 21:9 Monitor`,
    location: "Campaign Desk",
    description: "This item will further streamline my programming endeavors by giving me an additional screen"
}


//HomeInventoryDatabase.furniture.push(vintageInkwell)

