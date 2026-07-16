// --- HOMIXO CHOP & MASTER DATA ---

const ingredientsData = [
  { name: "Tomato", emoji: "🍅", category: "Vegetable", tips: ["Best Knife: Utility Knife", "Prep: Slice crosswise for burgers, dice for salsa.", "Storage: Room temperature until ripe, then refrigerate."] },
  { name: "Onion", emoji: "🧅", category: "Root Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Leave root intact while dicing to prevent tears.", "Storage: Cool, dark, dry place."] },
  { name: "Potato", emoji: "🥔", category: "Root Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Cut into even cubes for consistent roasting.", "Storage: Cool, dark, dry place."] },
  { name: "Carrot", emoji: "🥕", category: "Root Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Julienne for stir-fries or slice into coins.", "Storage: Refrigerate in a plastic bag."] },
  { name: "Cucumber", emoji: "🥒", category: "Vegetable", tips: ["Best Knife: Santoku or Chef's Knife", "Prep: Slice into thin rounds or batonnet for snacking.", "Storage: Refrigerate in crisper drawer."] },
  { name: "Bell Pepper", emoji: "🫑", category: "Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Slice off top and bottom, remove core, then julienne.", "Storage: Refrigerate in crisper."] },
  { name: "Garlic", emoji: "🧄", category: "Herb/Bulb", tips: ["Best Knife: Chef's Knife", "Prep: Crush with flat side of knife to peel, then mince finely.", "Storage: Cool, dark place."] },
  { name: "Ginger", emoji: "🫚", category: "Root", tips: ["Best Knife: Paring Knife", "Prep: Peel with a spoon, then mince or grate.", "Storage: Refrigerate in a sealed bag or freeze."] },
  { name: "Cilantro/Coriander", emoji: "🌿", category: "Herb", tips: ["Best Knife: Chef's Knife", "Prep: Chiffonade (roll and slice finely). Stems carry flavor too!", "Storage: Wrap in damp paper towel, refrigerate."] },
  { name: "Mint", emoji: "🌿", category: "Herb", tips: ["Best Knife: Chef's Knife", "Prep: Chiffonade for garnishes or drinks.", "Storage: Wrap in damp paper towel in fridge."] },
  { name: "Lemon", emoji: "🍋", category: "Fruit", tips: ["Best Knife: Utility Knife", "Prep: Roll before cutting to release juices. Slice into wedges.", "Storage: Room temp or fridge for longer life."] },
  { name: "Lime", emoji: "🍈", category: "Fruit", tips: ["Best Knife: Utility Knife", "Prep: Cut cheeks around the core for maximum juice.", "Storage: Room temp or fridge."] },
  { name: "Apple", emoji: "🍎", category: "Fruit", tips: ["Best Knife: Paring or Chef's Knife", "Prep: Core and slice into wedges, or dice for salads.", "Storage: Crisper drawer in fridge."] },
  { name: "Banana", emoji: "🍌", category: "Fruit", tips: ["Best Knife: Paring Knife", "Prep: Slice into coins for cereal or smoothies.", "Storage: Room temperature. Do not refrigerate until ripe."] },
  { name: "Mango", emoji: "🥭", category: "Fruit", tips: ["Best Knife: Paring Knife", "Prep: Score flesh into cubes (hedgehog style), invert skin.", "Storage: Room temp until ripe, then refrigerate."] },
  { name: "Watermelon", emoji: "🍉", category: "Fruit", tips: ["Best Knife: Large Chef's Knife", "Prep: Slice off ends, cut in half, then slice into wedges or cubes.", "Storage: Refrigerate after cutting."] },
  { name: "Pineapple", emoji: "🍍", category: "Fruit", tips: ["Best Knife: Chef's Knife", "Prep: Slice top and bottom, carve off skin, remove eyes, cube.", "Storage: Refrigerate after cutting."] },
  { name: "Broccoli", emoji: "🥦", category: "Vegetable", tips: ["Best Knife: Chef's or Paring Knife", "Prep: Cut into florets. Thinly slice the stem for stir-fries.", "Storage: Refrigerate in crisper."] },
  { name: "Cauliflower", emoji: "🥦", category: "Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Core the bottom and break into florets.", "Storage: Refrigerate in a plastic bag."] },
  { name: "Cabbage", emoji: "🥬", category: "Vegetable", tips: ["Best Knife: Large Chef's Knife", "Prep: Halve, remove core, slice thinly for slaw.", "Storage: Refrigerate wrapped tightly."] },
  { name: "Spinach", emoji: "🍃", category: "Leafy Green", tips: ["Best Knife: Chef's Knife", "Prep: Chiffonade or roughly chop for cooking.", "Storage: Refrigerate in a sealed container with a paper towel."] },
  { name: "Lettuce", emoji: "🥬", category: "Leafy Green", tips: ["Best Knife: Plastic Knife or Chef's", "Prep: Tear by hand or slice for salads.", "Storage: Refrigerate in a breathable bag."] },
  { name: "Mushroom", emoji: "🍄", category: "Fungi", tips: ["Best Knife: Paring Knife", "Prep: Wipe clean with damp cloth, slice thinly.", "Storage: Paper bag in the fridge."] },
  { name: "Zucchini", emoji: "🥒", category: "Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Slice into coins, batonnet, or spiralize.", "Storage: Refrigerate in crisper."] },
  { name: "Eggplant", emoji: "🍆", category: "Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Slice into rounds or cube for curries. Salt to draw moisture.", "Storage: Cool, dark place or fridge for short term."] },
  { name: "Avocado", emoji: "🥑", category: "Fruit", tips: ["Best Knife: Chef's Knife", "Prep: Halve around pit, remove pit carefully with knife edge, slice in skin.", "Storage: Room temp until ripe, then fridge."] },
  { name: "Strawberry", emoji: "🍓", category: "Fruit", tips: ["Best Knife: Paring Knife", "Prep: Hull the top, slice in halves or quarters.", "Storage: Refrigerate unwashed until ready to use."] },
  { name: "Grapes", emoji: "🍇", category: "Fruit", tips: ["Best Knife: Paring Knife", "Prep: Halve lengthwise, especially for kids (choking hazard).", "Storage: Refrigerate in ventilated bag."] },
  { name: "Orange", emoji: "🍊", category: "Fruit", tips: ["Best Knife: Paring Knife", "Prep: Slice into wedges or supreme (remove skin and membrane).", "Storage: Fridge or room temp."] },
  { name: "Papaya", emoji: "🥭", category: "Fruit", tips: ["Best Knife: Chef's Knife", "Prep: Halve, scoop seeds, peel, and cube.", "Storage: Room temp until ripe, then fridge."] },
  { name: "Pomegranate", emoji: "🍎", category: "Fruit", tips: ["Best Knife: Paring Knife", "Prep: Score skin, break apart in a bowl of water to separate arils.", "Storage: Refrigerate whole or arils in a container."] },
  { name: "Sweet Potato", emoji: "🍠", category: "Root Vegetable", tips: ["Best Knife: Heavy Chef's Knife", "Prep: Peel and cube or slice into fries.", "Storage: Cool, dark, dry place."] },
  { name: "Beetroot", emoji: "🧅", category: "Root Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Peel, slice or dice. Wear gloves to prevent staining.", "Storage: Refrigerate."] },
  { name: "Radish", emoji: "🧅", category: "Root Vegetable", tips: ["Best Knife: Paring Knife", "Prep: Slice thinly for salads or tacos.", "Storage: Refrigerate in crisper."] },
  { name: "Celery", emoji: "🥬", category: "Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Slice crosswise for mirepoix or long sticks for snacking.", "Storage: Wrap in foil in fridge to keep crisp."] },
  { name: "Leek", emoji: "🧅", category: "Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Slice lengthwise, wash thoroughly to remove dirt, then slice crosswise.", "Storage: Refrigerate unwashed."] },
  { name: "Green Onion/Scallion", emoji: "🧅", category: "Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Slice thinly (bias cut) for garnishes.", "Storage: Refrigerate in a glass with a little water at the roots."] },
  { name: "Chili Pepper", emoji: "🌶️", category: "Vegetable", tips: ["Best Knife: Paring Knife", "Prep: Mince finely. Remove seeds for less heat. Wash hands immediately!", "Storage: Refrigerate."] },
  { name: "Pumpkin/Squash", emoji: "🎃", category: "Vegetable", tips: ["Best Knife: Heavy Chef's Knife or Cleaver", "Prep: Halve, scoop seeds, peel, and cube. Requires force.", "Storage: Cool, dry place."] },
  { name: "Corn", emoji: "🌽", category: "Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Stand upright and slice downwards to remove kernels.", "Storage: Refrigerate with husks on."] },
  { name: "Peas", emoji: "🫛", category: "Vegetable", tips: ["Best Knife: N/A", "Prep: Shell by hand.", "Storage: Refrigerate."] },
  { name: "Green Beans", emoji: "🫘", category: "Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Line them up and trim ends off in batches.", "Storage: Refrigerate in a bag."] },
  { name: "Asparagus", emoji: "🥬", category: "Vegetable", tips: ["Best Knife: Chef's Knife", "Prep: Snap off woody ends or slice them off in a bunch.", "Storage: Stand in a glass with an inch of water in the fridge."] },
  { name: "Artichoke", emoji: "🥬", category: "Vegetable", tips: ["Best Knife: Chef's or Serrated Knife", "Prep: Trim top inch, snip leaf tips.", "Storage: Refrigerate in a plastic bag."] },
  { name: "Kiwi", emoji: "🥝", category: "Fruit", tips: ["Best Knife: Paring Knife", "Prep: Cut in half and scoop with a spoon, or peel and slice.", "Storage: Room temp until ripe, then fridge."] },
  { name: "Peach", emoji: "🍑", category: "Fruit", tips: ["Best Knife: Paring Knife", "Prep: Slice around the pit and twist to separate.", "Storage: Room temp until ripe, then fridge."] },
  { name: "Pear", emoji: "🍐", category: "Fruit", tips: ["Best Knife: Paring Knife", "Prep: Halve, scoop core, slice.", "Storage: Room temp until ripe, then fridge."] },
  { name: "Plum", emoji: "🍑", category: "Fruit", tips: ["Best Knife: Paring Knife", "Prep: Slice around pit and twist.", "Storage: Room temp until ripe, then fridge."] },
  { name: "Cherry", emoji: "🍒", category: "Fruit", tips: ["Best Knife: Paring Knife", "Prep: Halve and remove pit.", "Storage: Refrigerate unwashed."] },
  { name: "Blueberry", emoji: "🫐", category: "Fruit", tips: ["Best Knife: N/A", "Prep: Wash gently before use.", "Storage: Refrigerate unwashed."] }
];

// Generate 100 deep recipes
const generateRecipes = () => {
  const recipes = [];
  const categories = ["Breakfast", "Lunch", "Dinner", "Healthy", "Salads", "Snacks", "Kids"];
  const actions = ["Quick", "Spicy", "Healthy", "Classic", "Homestyle", "Fresh", "Crunchy", "Zesty", "Garlicky", "Roasted"];
  const mains = ["Chicken", "Paneer", "Tofu", "Potato", "Broccoli", "Mixed Veg", "Egg", "Fish", "Mushroom", "Lentil"];
  const types = ["Stir Fry", "Curry", "Salad", "Wrap", "Sandwich", "Bowl", "Soup", "Tacos", "Pasta", "Rice"];
  
  for (let i = 0; i < 100; i++) {
    const act = actions[Math.floor(Math.random() * actions.length)];
    const main = mains[Math.floor(Math.random() * mains.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const cat = categories[Math.floor(Math.random() * categories.length)];
    const prepTime = (Math.floor(Math.random() * 4 + 1) * 5); // 5 to 20 mins
    const cookTime = (Math.floor(Math.random() * 6 + 1) * 5); // 5 to 30 mins
    const calories = Math.floor(Math.random() * 300) + 150; // 150 to 450 kcal
    
    recipes.push({
      id: "recipe_" + i,
      name: `${act} ${main} ${type}`,
      cat: cat,
      prepTime: `${prepTime} Min`,
      cookTime: `${cookTime} Min`,
      totalTime: `${prepTime + cookTime} Min`,
      calories: `${calories} kcal`,
      servings: 2,
      desc: `Perfect your chopping skills with this ${cat.toLowerCase()} favorite featuring fresh ${main.toLowerCase()}. Using the Homixo Chopping Board makes the prep work a breeze!`,
      ingredients: [
        `2 cups ${main}, diced evenly (use Chef's Knife)`,
        `1 large Onion, finely minced`,
        `2 Tomatoes, chopped`,
        `1 tbsp Garlic, minced`,
        `1 tsp Salt`,
        `1 tsp Black Pepper`,
        `2 tbsp Olive Oil or Butter`,
        `Fresh Cilantro for garnish`
      ],
      instructions: [
        `Place your Homixo chopping board on a flat surface. Use a damp towel underneath if it slips.`,
        `Using your Chef's knife and the pinch grip, finely mince the garlic and onion.`,
        `Dice the ${main} into uniform 1-inch cubes to ensure even cooking.`,
        `Heat oil in a pan over medium heat. Add the minced garlic and onions, sautéing until translucent.`,
        `Add the diced ${main} and cook for ${cookTime} minutes, stirring occasionally.`,
        `Season with salt, pepper, and mix in the chopped tomatoes.`,
        `Serve hot, garnished with fresh chiffonade-cut cilantro.`
      ]
    });
  }
  
  return recipes;
};

const recipesData = generateRecipes();
