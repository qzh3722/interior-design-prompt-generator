let perspectives = ["Eye-Level View", "Low Angle View", "High Angle View", "Bird's Eye View", "Worm's Eye View", "Three-Quarter View", "Straight-On View", "Diagonal View", "Close-Up View", "Wide-Angle View"];
let spaceTypes = ["Living Room", "Kitchen", "Dining Room", "Bedroom", "Bathroom", "Home Office", "Children's Room", "Laundry Room", "Garage", "Basement", "Attic", "Entryway/Foyer", "Hallway", "Closet", "Pantry", "Mudroom", "Balcony/Patio", "Home Gym", "Home Theater"];
let furnitureOptions = {
    "Living Room": ['Sofa', 'Coffee Table', 'TV Stand', 'Bookshelf', 'Carpet', 'Armchair', 'Ottoman', 'Side Table', 'Console Table', 'Entertainment Center', 'Display Cabinet', 'Shelving Unit', 'Fireplace', 'Lounge Chair'],
    "Kitchen":['Dining Table', 'Chair', 'Kitchen Cabinet', 'Stove', 'Refrigerator', 'Kitchen Island', 'Bar Stool', 'Range Hood', 'Microwave', 'Dishwasher', 'Sink', 'Oven', 'Cooktop', 'Counter'],
    "Dining Room":['Dining Table', 'Chair', 'Bar Counter', 'Wine Cabinet', 'Buffet Table', 'Sideboard', 'Hutch', 'Credenza', 'Display Cabinet', 'Bar Cart', 'Serving Cart'],
    "Bedroom":['Bed', 'Nightstand', 'Wardrobe', 'Dressing Table', 'Desk', 'Bookshelf', 'Dresser', 'Chest of Drawers', 'Armoire', 'Chaise Lounge', 'Vanity Set', 'Bed Bench', 'Headboard', 'Trundle Bed'],
    "Bathroom": ['Sink', 'Toilet', 'Bathtub', 'Shower', 'Mirror Cabinet', 'Vanity', 'Towel Rack', 'Shower Curtain', 'Shower Door', 'Bath Mat', 'Towel Warmer', 'Laundry Hamper', 'Bathroom Shelf', 'Shower Caddy'],
    "Home Office":['Desk', 'Office Chair', 'Bookshelf', 'Filing Cabinet', 'Printer Stand', 'Bulletin Board', 'Whiteboard', 'Desk Lamp', 'Computer', 'Monitor', 'Keyboard', 'Mouse', 'Cable Management', 'Office Supplies'],
    "Children's Room":['Crib', 'Changing Table', 'Rocking Chair', 'Dresser', 'Toy Box', 'Bookshelf', 'Rug', 'Nightstand', 'Wardrobe', 'Desk'],
    "Laundry Room":['Washing Machine', 'Dryer', 'Laundry Basket', 'Ironing Board', 'Clothes Rack', 'Storage Shelves', 'Sink', 'Cabinets', 'Drying Rack', 'Laundry Sorter'],
    "Garage":['Tool Cabinet', 'Workbench', 'Shelving Unit', 'Storage Boxes', 'Bike Rack', 'Ladder', 'Tool Chest', 'Pegboard', 'Tool Cart', 'Work Table'],
    "Basement":['Sofa', 'TV Stand', 'Coffee Table', 'Bar Counter', 'Stools', 'Shelving Unit', 'Storage Boxes', 'Gym Equipment', 'Carpet', 'Desk'],
    "Attic":['Storage Boxes', 'Chest', 'Trunk', 'Shelving Unit', 'Desk', 'Chair', 'Bed', 'Wardrobe', 'Carpet', 'Mirror'],
    "Entryway/Foyer":['Console Table', 'Mirror', 'Coat Rack', 'Bench', 'Shoe Cabinet', 'Umbrella Stand', 'Carpet', 'Storage Baskets', 'Wall Hooks', 'Clock'],
    "Hallway":['Console Table', 'Coat Rack', 'Shoe Cabinet', 'Mirror', 'Bench', 'Carpet', 'Wall Hooks', 'Storage Baskets', 'Umbrella Stand', 'Clock'],
    "Closet":['Wardrobe', 'Dresser', 'Shoe Rack', 'Shelving Unit', 'Mirror', 'Tie Rack', 'Laundry Basket', 'Jewelry Organizer', 'Storage Boxes', 'Clothes Hangers'],
    "Pantry":['Shelving Unit', 'Storage Baskets', 'Wine Rack', 'Canisters', 'Spice Rack', 'Food Containers', 'Drawer Organizers', 'Jar Labels', 'Storage Bins', 'Pantry Moth Trap'],
    "Mudroom":['Bench', 'Coat Rack', 'Shoe Cabinet', 'Storage Baskets', 'Rug', 'Mirror', 'Wall Hooks', 'Umbrella Stand', 'Cabinets', 'Boot Tray'],
    "Balcony/Patio":['Patio Table', 'Patio Chairs', 'Lounge Chair', 'Umbrella', 'BBQ Grill', 'Planters', 'Outdoor Rug', 'Outdoor Lighting', 'Fire Pit', 'Hammock'],
    "Home Gym":['Treadmill', 'Exercise Bike', 'Weight Bench', 'Dumbbells', 'Yoga Mat', 'Resistance Bands', 'Medicine Ball', 'Elliptical Machine', 'Rowing Machine', 'Gym Mirror'],
    "Home Theater":['TV Stand', 'TV', 'Sofa', 'Recliner', 'Coffee Table', 'Sound System', 'Media Cabinet', 'Popcorn Machine', 'Projector', 'Movie Posters']

    // Add more space types and their corresponding furniture options here...
};
let layouts = ["Open Plan", "Closed Plan", "U-shaped Layout", "L-shaped Layout", "Parallel Layout", "Island Layout"];
let styles = ["Modern", "Contemporary", "Minimalist", "Industrial", "Mid-Century Modern", "Scandinavian", "Traditional", "Transitional", "French Country", "Bohemian (Boho)", "Rustic", "Shabby Chic", "Coastal (Hamptons)", "Hollywood Regency", "Farmhouse", "Craftsman", "Art Deco", "Asian Zen", "Moroccan", "Mediterranean", "Victorian", "Gothic", "Tudor", "English Country", "American Colonial", "Georgian", "Greek Revival", "Spanish", "Italianate", "Prairie", "Southwestern", "Art Nouveau", "Brutalist", "Bauhaus", "Rococo", "Neoclassical", "Japandi (Japanese + Scandinavian)", "Biophilic Design", "Hygge", "Wabi-Sabi", "Traditional Chinese", "Chinese Art Deco", "Chinese Modern", "Chinese Zen", "Chinese Chinoiserie", "Chinese Ming Style"];
let colorPalettes = ["Monochromatic", "Analogous", "Complementary", "Triadic", "Split-Complementary", "Square", "Rectangle (Tetradic)", "Neutral", "Warm", "Cool", "Pastel", "Vibrant"];
let lightings = ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Decorative Lighting", "Natural Lighting", "Direct Lighting", "Indirect Lighting", "Mood Lighting", "Kinetic Lighting"];
let materials = ["Wood", "Metal", "Glass", "Fabric", "Leather", "Stone", "Tile", "Wallpaper", "Carpet", "Concrete", "Plastic", "Natural Fibers", "Brick"];
let textureOptions = {
    "Wood": ['Smooth', 'Grainy', 'Polished', 'Unfinished'],
    "Metal": ['Smooth', 'Brushed', 'Polished', 'Matte', 'Hammered'],
    "Glass": ['Clear', 'frosted', 'Eye-Leve', 'stained'],
    "Fabric": ['Soft', 'plush', 'silky', 'coarse', 'embroidered', 'patterned'],
    "Leather": ['Smooth', 'distressed', 'pebbled', 'faux'],
    "Stone": ['Polished', 'rough', 'tumbled', 'honed'],
    "Tile": ['Glossy', 'matte', 'textured', 'mosaic'],
    "Wallpaper": ['Smooth', 'textured', 'patterned', 'embossed'],
    "Carpet": ['Plush', 'berber', 'frieze', 'cut-and-loop', 'patterned'],
    "Concrete": ['Smooth', 'polished', 'stained', 'textured'],
    "Plastic": ['Smooth', 'textured', 'clear', 'colored'],
    "Natural Fibers": ['Woven', 'knotted', 'braided'],
    "Brick": ['Rough', 'painted', 'distressed', 'glazed']

    // Add more materials and their corresponding textures here...
};
let accessories = ["Artwork", "Mirrors", "Rugs", "Throw Pillows", "Blankets/Throws", "Candles", "Books", "Plants", "Picture Frames", "Vases", "Decorative Bowls", "Clocks", "Lamps", "Baskets", "Figurines/Statues", "Decorative Boxes", "Trays"];
let moods = ["Cozy", "Formal", "Relaxed", "Energetic", "Inviting", "Serene", "Luxurious", "Comfortable", "Minimalist", "Romantic", "Rustic", "Elegant", "Vibrant", "Warm", "Cool", "Whimsical", "Sophisticated", "Casual", "Tranquil", "Cheerful", "Dramatic", "Eclectic", "Modern", "Traditional", "Zen"];


function populateDropdown(id, options) {
    let select = document.getElementById(id);
    for(let i = 0; i < options.length; i++) {
        let option = document.createElement('option');
        option.text = options[i];
        option.value = options[i];
        select.add(option);
    }
}

// This function is called when the page is loaded.
window.onload = function() {
    populateDropdown('perspective', perspectives);
    populateDropdown('space-type', spaceTypes);
    populateDropdown('layout', layouts);
    populateDropdown('style', styles);
    populateDropdown('color-palette', colorPalettes);
    populateDropdown('lighting', lightings);
    populateDropdown('materials', materials);
    populateDropdown('accessories', accessories);
    populateDropdown('mood', moods);
};

document.getElementById('space-type').addEventListener('change', function() {
    let spaceType = this.value;  // Get the selected space type
    let furniture = furnitureOptions[spaceType];  // Get the corresponding furniture options
    let select = document.getElementById('furniture');
    select.innerHTML = "";  // Clear the current options
    for(let i = 0; i < furniture.length; i++) {
        let option = document.createElement('option');
        option.text = furniture[i];
        option.value = furniture[i];
        select.add(option);
    }
});
document.getElementById('materials').addEventListener('change', function() {
    let material = this.value;  // Get the selected material
    let textures = textureOptions[material];  // Get the corresponding texture options
    let select = document.getElementById('textures');
    select.innerHTML = "";  // Clear the current options
    for(let i = 0; i < textures.length; i++) {
        let option = document.createElement('option');
        option.text = textures[i];
        option.value = textures[i];
        select.add(option);
    }
});

function generatePrompt() {
    // Get the selected option or a random option from each dropdown
    let perspective = document.getElementById('perspective').value || perspectives[Math.floor(Math.random() * perspectives.length)];
    let spaceType = document.getElementById('space-type').value || spaceTypes[Math.floor(Math.random() * spaceTypes.length)];
    let furniture = document.getElementById('furniture').value || furnitureOptions[spaceType][Math.floor(Math.random() * furnitureOptions[spaceType].length)];
    let layout = document.getElementById('layout').value || layouts[Math.floor(Math.random() * layouts.length)];
    let style = document.getElementById('style').value || styles[Math.floor(Math.random() * styles.length)];
    let colorPalette = document.getElementById('color-palette').value || colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    let lighting = document.getElementById('lighting').value || lightings[Math.floor(Math.random() * lightings.length)];
    let material = document.getElementById('materials').value || materials[Math.floor(Math.random() * materials.length)];
    let texture = document.getElementById('textures').value || textureOptions[material][Math.floor(Math.random() * textureOptions[material].length)];
    let accessory = document.getElementById('accessories').value || accessories[Math.floor(Math.random() * accessories.length)];
    let mood = document.getElementById('mood').value || moods[Math.floor(Math.random() * moods.length)];

    // Combine the options into a prompt
    let prompt = "Create a " + perspective + " perspective image of a " + spaceType + " with " + furniture + " furniture, arranged in a " + layout + " layout. The design should have a " + style + " style with a " + colorPalette + " color palette. The room should be lit with " + lighting + " and incorporate " + material + " materials with a " + texture + " texture. Add some " + accessory + " as accessories to create a " + mood + " mood.";

    // Display the prompt
    document.getElementById('prompt').textContent = prompt;
}


function generateRandomPrompt() {
    // Get a random option from each dropdown
    let perspective = perspectives[Math.floor(Math.random() * perspectives.length)];
    let spaceType = spaceTypes[Math.floor(Math.random() * spaceTypes.length)];
    let furniture = furnitureOptions[spaceType][Math.floor(Math.random() * furnitureOptions[spaceType].length)];
    let layout = layouts[Math.floor(Math.random() * layouts.length)];
    let style = styles[Math.floor(Math.random() * styles.length)];
    let colorPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    let lighting = lightings[Math.floor(Math.random() * lightings.length)];
    let material = materials[Math.floor(Math.random() * materials.length)];
    let texture = textureOptions[material][Math.floor(Math.random() * textureOptions[material].length)];
    let accessory = accessories[Math.floor(Math.random() * accessories.length)];
    let mood = moods[Math.floor(Math.random() * moods.length)];

    // Combine the options into a prompt
    let prompt = "Create a " + perspective + " perspective image of a " + spaceType + " with " + furniture + " furniture, arranged in a " + layout + " layout. The design should have a " + style + " style with a " + colorPalette + " color palette. The room should be lit with " + lighting + " and incorporate " + material + " materials with a " + texture + " texture. Add some " + accessory + " as accessories to create a " + mood + " mood.";

    // Display the prompt
    document.getElementById('prompt').textContent = prompt;
}

document.getElementById('copy-button').addEventListener('click', function() {
    var prompt = document.getElementById('prompt').textContent;
    navigator.clipboard.writeText(prompt).then(function() {
        console.log('Copying to clipboard was successful!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});

