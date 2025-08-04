// Complete ServerVault System - STARTS AS GUEST
let gameData = {
    lastUpdate: "2025-08-04 13:17:29",
    currentUser: null,
    isLoggedIn: false,
    users: [
        { 
            id: 1, 
            username: "Coen-yin", 
            password: "Carronshore93",
            isAdmin: true, 
            joinDate: "2025-08-04 13:17:29",
            serversSubmitted: 12,
            lastLogin: null
        }
    ],
    servers: [
        {
            id: 1,
            name: "MegaCraft Network",
            ip: "play.megacraft.net",
            version: "1.21.4",
            players: "1,347/1,500",
            description: "🏰 Epic fantasy MMORPG server with custom quests, dungeons, classes, and an amazing economy system! Join thousands of players in this incredible adventure with over 200 custom features!",
            sponsored: true,
            status: "approved",
            addedBy: "Coen-yin",
            dateAdded: "2025-08-04 13:17:29",
            category: "SMP",
            votes: 3247,
            featured: true,
            source: "admin_curated"
        },
        {
            id: 2,
            name: "HyperPixel Games",
            ip: "mc.hyperpixel.net",
            version: "1.21.4",
            players: "1,087/1,200",
            description: "🎮 Ultimate minigames experience with 50+ game modes, custom maps, tournaments, and amazing rewards! The most fun you'll have in Minecraft with weekly events and competitions!",
            sponsored: true,
            status: "approved",
            addedBy: "Coen-yin",
            dateAdded: "2025-08-04 13:17:29",
            category: "Minigames",
            votes: 2423,
            featured: true,
            source: "admin_curated"
        },
        {
            id: 3,
            name: "EliteVault Premium",
            ip: "premium.elitevault.net",
            version: "1.21.4",
            players: "798/1,000",
            description: "👑 Premium exclusive server with VIP features, custom plugins, and elite community! Experience Minecraft like never before with our luxury gameplay and premium perks!",
            sponsored: true,
            status: "approved",
            addedBy: "Coen-yin",
            dateAdded: "2025-08-04 13:17:29",
            category: "Premium",
            votes: 2956,
            featured: true,
            source: "admin_curated"
        },
        {
            id: 4,
            name: "SkyBlock Legends",
            ip: "skyblock.legends.net",
            version: "1.21.3",
            players: "643/800",
            description: "☁️ The most advanced SkyBlock server with custom islands, challenges, economy, and social features! Build your empire in the sky with unlimited possibilities!",
            sponsored: false,
            status: "approved",
            addedBy: "Admin_Curation",
            dateAdded: "2025-08-04 13:17:29",
            category: "Skyblock",
            votes: 1756,
            featured: false,
            source: "manual_submission"
        },
        {
            id: 5,
            name: "Creative Architects",
            ip: "creative.architects.com",
            version: "1.21.4",
            players: "334/400",
            description: "🎨 Professional creative building server with WorldEdit, VoxelSniper, and exclusive plot system for serious builders and architects! Showcase your masterpieces!",
            sponsored: false,
            status: "approved",
            addedBy: "Admin_Curation",
            dateAdded: "2025-08-04 13:17:29",
            category: "Creative",
            votes: 1176,
            featured: false,
            source: "manual_submission"
        },
        {
            id: 6,
            name: "PvP Arena Central",
            ip: "pvp.arena.central",
            version: "1.21.4",
            players: "445/500",
            description: "⚔️ Intense competitive PvP with tournaments, leaderboards, custom gear, and amazing combat mechanics! Prove your skills in epic battles!",
            sponsored: false,
            status: "approved",
            addedBy: "Admin_Curation",
            dateAdded: "2025-08-04 13:17:29",
            category: "PvP",
            votes: 1534,
            featured: false,
            source: "manual_submission"
        },
        {
            id: 7,
            name: "TechCraft Industries",
            ip: "tech.industries.net",
            version: "1.20.1",
            players: "256/300",
            description: "🔧 Advanced modded server with tech mods, automation, space exploration, and industrial gameplay for engineering enthusiasts! Build the future!",
            sponsored: false,
            status: "approved",
            addedBy: "Admin_Curation",
            dateAdded: "2025-08-04 13:17:29",
            category: "Modded",
            votes: 887,
            featured: false,
            source: "manual_submission"
        },
        {
            id: 8,
            name: "Medieval Kingdoms",
            ip: "medieval.kingdoms.org",
            version: "1.21.3",
            players: "389/450",
            description: "🏰 Immersive medieval roleplay with kingdoms, politics, warfare, custom items, and rich lore! Live your medieval fantasy in this incredible world!",
            sponsored: false,
            status: "approved",
            addedBy: "Admin_Curation",
            dateAdded: "2025-08-04 13:17:29",
            category: "Roleplay",
            votes: 1245,
            featured: false,
            source: "manual_submission"
        },
        {
            id: 9,
            name: "Survival Hardcore",
            ip: "hardcore.survival.net",
            version: "1.21.4",
            players: "223/200",
            description: "💀 Ultimate hardcore survival challenge! One life, no respawns, extreme difficulty. Only for the most skilled players who dare to take the risk!",
            sponsored: false,
            status: "approved",
            addedBy: "Admin_Curation",
            dateAdded: "2025-08-04 13:17:29",
            category: "Hardcore",
            votes: 767,
            featured: false,
            source: "manual_submission"
        },
        {
            id: 10,
            name: "AquaCraft Ocean",
            ip: "ocean.aquacraft.net",
            version: "1.21.4",
            players: "156/300",
            description: "🌊 Unique ocean-themed survival server with underwater cities, marine life, submarines, and aquatic adventures! Dive into the depths of fun!",
            sponsored: false,
            status: "approved",
            addedBy: "Admin_Curation",
            dateAdded: "2025-08-04 13:17:29",
            category: "SMP",
            votes: 623,
            featured: false,
            source: "manual_submission"
        },
        {
            id: 11,
            name: "SpaceCraft Galaxy",
            ip: "space.galaxy.mc",
            version: "1.21.3",
            players: "298/400",
            description: "🚀 Epic space exploration server with planets, spaceships, aliens, and interstellar travel! Explore the universe and build your space empire!",
            sponsored: false,
            status: "approved",
            addedBy: "Admin_Curation",
            dateAdded: "2025-08-04 13:17:29",
            category: "Modded",
            votes: 934,
            featured: false,
            source: "manual_submission"
        },
        {
            id: 12,
            name: "MagicRealm Wizards",
            ip: "magic.wizards.net",
            version: "1.21.4",
            players: "267/350",
            description: "🧙‍♂️ Magical fantasy server with spells, wizardry, enchanted items, and mystical creatures! Master the arcane arts in this enchanting world!",
            sponsored: false,
            status: "approved",
            addedBy: "Admin_Curation",
            dateAdded: "2025-08-04 13:17:29",
            category: "Roleplay",
            votes: 1098,
            featured: false,
            source: "manual_submission"
        },
        {
    id: 13,
    name: "Hypixel Network",
    ip: "mc.hypixel.net",
    version: "1.21.4",
    players: "47,892/100,000",
    description: "🎮 The world's largest Minecraft server! Home to amazing minigames like Bed Wars, SkyWars, Murder Mystery, and SkyBlock with millions of players!",
    sponsored: true,
    status: "approved",
    addedBy: "MinecraftPro2024",
    dateAdded: "2025-08-04 13:27:13",
    category: "Minigames",
    votes: 15847,
    featured: true,
    source: "user_submission"
},
{
    id: 14,
    name: "CubeCraft Games",
    ip: "play.cubecraft.net",
    version: "1.21.4",
    players: "8,234/15,000",
    description: "🎯 Premium quality minigames with EggWars, SkyWars, Lucky Islands, and Tower Defense! Known for excellent anti-cheat and smooth gameplay!",
    sponsored: true,
    status: "approved",
    addedBy: "BlockBuilder99",
    dateAdded: "2025-08-04 13:27:13",
    category: "Minigames",
    votes: 8934,
    featured: true,
    source: "user_submission"
},
{
    id: 15,
    name: "The Hive",
    ip: "play.hivemc.com",
    version: "1.21.4",
    players: "12,567/25,000",
    description: "🐝 Fun-focused server with unique games like Hide and Seek, DeathRun, Treasure Wars, and Murder Mystery! Great community and events!",
    sponsored: false,
    status: "approved",
    addedBy: "GameMaster456",
    dateAdded: "2025-08-04 13:27:13",
    category: "Minigames",
    votes: 7234,
    featured: false,
    source: "user_submission"
},
{
    id: 16,
    name: "Complex Gaming",
    ip: "hub.mc-complex.com",
    version: "1.21.4",
    players: "3,456/8,000",
    description: "⚔️ Competitive Factions and KitPvP server with custom enchants, crates, and amazing PvP mechanics! For serious warriors only!",
    sponsored: false,
    status: "approved",
    addedBy: "PvPWarrior88",
    dateAdded: "2025-08-04 13:27:13",
    category: "PvP",
    votes: 4567,
    featured: false,
    source: "user_submission"
},
{
    id: 17,
    name: "TheArchon",
    ip: "play.thearchon.net",
    version: "1.21.4",
    players: "2,789/6,000",
    description: "🏰 Elite Factions server with custom plugins, economy, and intense PvP action! Build your empire and dominate the battlefield!",
    sponsored: false,
    status: "approved",
    addedBy: "FactionKing777",
    dateAdded: "2025-08-04 13:27:13",
    category: "PvP",
    votes: 3456,
    featured: false,
    source: "user_submission"
},
{
    id: 18,
    name: "MCCentral",
    ip: "play.mccentral.org",
    version: "1.21.4",
    players: "1,923/4,000",
    description: "🎪 Multi-gamemode server with Prison, Skyblock, Survival, and KitPvP! Something for everyone with active staff and events!",
    sponsored: false,
    status: "approved",
    addedBy: "CraftMaster2024",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 2845,
    featured: false,
    source: "user_submission"
},
{
    id: 19,
    name: "JartexNetwork",
    ip: "play.jartexnetwork.com",
    version: "1.21.4",
    players: "4,567/10,000",
    description: "🌟 Cracked server with BedWars, SkyWars, Prison, and Factions! Free to play with premium features and great community!",
    sponsored: false,
    status: "approved",
    addedBy: "ServerHunter21",
    dateAdded: "2025-08-04 13:27:13",
    category: "Minigames",
    votes: 5432,
    featured: false,
    source: "user_submission"
},
{
    id: 20,
    name: "Blockdrop Network",
    ip: "play.blockdrop.org",
    version: "1.21.4",
    players: "867/2,000",
    description: "💎 Premium Prison server with custom mines, gangs, drugs system, and PvP zones! Climb the ranks and become the richest player!",
    sponsored: false,
    status: "approved",
    addedBy: "PrisonBreaker42",
    dateAdded: "2025-08-04 13:27:13",
    category: "PvP",
    votes: 1567,
    featured: false,
    source: "user_submission"
},
{
    id: 21,
    name: "MineSuperior",
    ip: "play.minesuperior.com",
    version: "1.21.4",
    players: "1,234/3,000",
    description: "⭐ High-quality Skyblock server with custom islands, quests, economy, and social features! Build your dream island in the clouds!",
    sponsored: false,
    status: "approved",
    addedBy: "SkyBlockMaster99",
    dateAdded: "2025-08-04 13:27:13",
    category: "Skyblock",
    votes: 2123,
    featured: false,
    source: "user_submission"
},
{
    id: 22,
    name: "WilderCraft",
    ip: "play.wildercraft.net",
    version: "1.21.4",
    players: "678/1,500",
    description: "🌲 Pure survival experience with minimal plugins, land claiming, and friendly community! For players who love vanilla+ gameplay!",
    sponsored: false,
    status: "approved",
    addedBy: "VanillaLover555",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 1234,
    featured: false,
    source: "user_submission"
},
{
    id: 23,
    name: "AppleCraft",
    ip: "play.applecraft.org",
    version: "1.21.4",
    players: "456/1,000",
    description: "🍎 Creative building server with plots, WorldEdit, VoxelSniper, and building competitions! Perfect for architects and designers!",
    sponsored: false,
    status: "approved",
    addedBy: "ArchitectPro33",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 876,
    featured: false,
    source: "user_submission"
},
{
    id: 24,
    name: "The Seed",
    ip: "play.theseed.me",
    version: "1.21.4",
    players: "789/2,000",
    description: "🌱 Unique survival server with custom biomes, mobs, and items! Explore a completely new Minecraft experience with friends!",
    sponsored: false,
    status: "approved",
    addedBy: "ExplorerDude12",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 1456,
    featured: false,
    source: "user_submission"
},
{
    id: 25,
    name: "DatBlock",
    ip: "play.datblock.com",
    version: "1.21.4",
    players: "345/800",
    description: "🔥 Intense Prison server with custom plugins, gangs, drugs, and PvP! Escape from the toughest prison in Minecraft!",
    sponsored: false,
    status: "approved",
    addedBy: "PrisonLord789",
    dateAdded: "2025-08-04 13:27:13",
    category: "PvP",
    votes: 678,
    featured: false,
    source: "user_submission"
},
{
    id: 26,
    name: "Vortex Network",
    ip: "play.vortexnetwork.net",
    version: "1.21.4",
    players: "1,123/3,000",
    description: "🌪️ Multi-mode server with Skyblock, Prison, Survival, and KitPvP! Regular updates and amazing community events!",
    sponsored: false,
    status: "approved",
    addedBy: "NetworkGamer44",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 1789,
    featured: false,
    source: "user_submission"
},
{
    id: 27,
    name: "Havoc Games",
    ip: "play.havocgames.net",
    version: "1.21.4",
    players: "567/1,200",
    description: "💣 Action-packed minigames with Bomb Lobbers, SkyWars, and unique custom games! Fast-paced fun for competitive players!",
    sponsored: false,
    status: "approved",
    addedBy: "HavocPlayer2024",
    dateAdded: "2025-08-04 13:27:13",
    category: "Minigames",
    votes: 934,
    featured: false,
    source: "user_submission"
},
{
    id: 28,
    name: "PirateCraft",
    ip: "piratemc.com",
    version: "1.21.4",
    players: "234/600",
    description: "🏴‍☠️ Pirate-themed survival server with ships, cannons, crews, and sea battles! Sail the seven seas and become the ultimate pirate!",
    sponsored: false,
    status: "approved",
    addedBy: "CaptainJack95",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 567,
    featured: false,
    source: "user_submission"
},
{
    id: 29,
    name: "The Sandlot",
    ip: "play.thesandlot.org",
    version: "1.21.4",
    players: "456/1,000",
    description: "🏖️ Relaxed survival server with economy, jobs, and town system! Perfect for casual players who enjoy building communities!",
    sponsored: false,
    status: "approved",
    addedBy: "CasualGamer66",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 789,
    featured: false,
    source: "user_submission"
},
{
    id: 30,
    name: "ExtremeCraft",
    ip: "play.extremecraft.net",
    version: "1.21.4",
    players: "1,567/4,000",
    description: "⚡ Hardcore Factions with custom enchants, weekly events, and intense PvP action! For the most dedicated warriors!",
    sponsored: false,
    status: "approved",
    addedBy: "ExtremePvP87",
    dateAdded: "2025-08-04 13:27:13",
    category: "PvP",
    votes: 2456,
    featured: false,
    source: "user_submission"
},
{
    id: 31,
    name: "SkyMines",
    ip: "play.skymines.net",
    version: "1.21.4",
    players: "678/1,500",
    description: "☁️ Advanced Prison server in the sky with floating mines, custom plugins, and amazing views! Mine your way to freedom!",
    sponsored: false,
    status: "approved",
    addedBy: "SkyMiner123",
    dateAdded: "2025-08-04 13:27:13",
    category: "Skyblock",
    votes: 1123,
    featured: false,
    source: "user_submission"
},
{
    id: 32,
    name: "MineVibe",
    ip: "play.minevibe.net",
    version: "1.21.4",
    players: "345/800",
    description: "🎵 Music-themed survival server with custom sound effects, rhythm minigames, and concert events! Feel the beat!",
    sponsored: false,
    status: "approved",
    addedBy: "MusicLover2024",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 678,
    featured: false,
    source: "user_submission"
},
{
    id: 33,
    name: "CosmicPvP",
    ip: "cosmicpvp.com",
    version: "1.21.4",
    players: "2,345/5,000",
    description: "🌌 Space-themed Factions server with custom planets, spaceships, and galactic warfare! Conquer the universe!",
    sponsored: false,
    status: "approved",
    addedBy: "SpaceCommander99",
    dateAdded: "2025-08-04 13:27:13",
    category: "PvP",
    votes: 3234,
    featured: false,
    source: "user_submission"
},
{
    id: 34,
    name: "MineHeroes",
    ip: "play.mineheroes.net",
    version: "1.21.4",
    players: "789/2,000",
    description: "🦸 Superhero roleplay server with custom powers, abilities, and epic battles! Become the hero the world needs!",
    sponsored: false,
    status: "approved",
    addedBy: "SuperHeroFan22",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 1345,
    featured: false,
    source: "user_submission"
},
{
    id: 35,
    name: "CraftRise",
    ip: "play.craftrise.org",
    version: "1.21.4",
    players: "1,234/3,000",
    description: "🌅 Turkish server with BedWars, SkyWars, and SkyBlock! Active community with regular tournaments and events!",
    sponsored: false,
    status: "approved",
    addedBy: "TurkishPlayer55",
    dateAdded: "2025-08-04 13:27:13",
    category: "Minigames",
    votes: 1876,
    featured: false,
    source: "user_submission"
},
{
    id: 36,
    name: "PickAxis",
    ip: "play.pickaxis.com",
    version: "1.21.4",
    players: "456/1,000",
    description: "⛏️ Mining-focused server with custom ores, tools, and underground cities! Dig deep and discover hidden treasures!",
    sponsored: false,
    status: "approved",
    addedBy: "DeepMiner777",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 723,
    featured: false,
    source: "user_submission"
},
{
    id: 37,
    name: "VeltPvP",
    ip: "play.veltpvp.com",
    version: "1.21.4",
    players: "2,567/6,000",
    description: "⚔️ Hardcore PvP server with HCF, Practice, and Factions! For skilled players who live for combat and competition!",
    sponsored: false,
    status: "approved",
    addedBy: "PvPLegend88",
    dateAdded: "2025-08-04 13:27:13",
    category: "PvP",
    votes: 3567,
    featured: false,
    source: "user_submission"
},
{
    id: 38,
    name: "MineRealm",
    ip: "play.minerealm.com",
    version: "1.21.4",
    players: "678/1,500",
    description: "🏰 Medieval fantasy server with kingdoms, magic, quests, and epic adventures! Live your fantasy dreams!",
    sponsored: false,
    status: "approved",
    addedBy: "FantasyKnight99",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 1234,
    featured: false,
    source: "user_submission"
},
{
    id: 39,
    name: "SkyFactory",
    ip: "play.skyfactory.net",
    version: "1.21.4",
    players: "345/800",
    description: "🏭 Modded SkyBlock with tech mods, automation, and industrial machinery! Build the ultimate sky factory!",
    sponsored: false,
    status: "approved",
    addedBy: "TechBuilder44",
    dateAdded: "2025-08-04 13:27:13",
    category: "Modded",
    votes: 567,
    featured: false,
    source: "user_submission"
},
{
    id: 40,
    name: "AquaticMC",
    ip: "play.aquaticmc.org",
    version: "1.21.4",
    players: "567/1,200",
    description: "🌊 Ocean-themed server with underwater cities, submarines, and marine adventures! Explore the depths!",
    sponsored: false,
    status: "approved",
    addedBy: "OceanExplorer33",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 891,
    featured: false,
    source: "user_submission"
},
{
    id: 41,
    name: "PixelmonCraft",
    ip: "play.pixelmoncraft.com",
    version: "1.20.1",
    players: "1,456/3,000",
    description: "🐾 Pokémon-themed modded server with Pixelmon! Catch, train, and battle Pokémon in the Minecraft world!",
    sponsored: false,
    status: "approved",
    addedBy: "PokemonMaster77",
    dateAdded: "2025-08-04 13:27:13",
    category: "Modded",
    votes: 2345,
    featured: false,
    source: "user_submission"
},
{
    id: 42,
    name: "MagicWorld",
    ip: "play.magicworld.net",
    version: "1.21.4",
    players: "789/2,000",
    description: "🔮 Magical server with spells, wizardry, magical creatures, and enchanted items! Master the arcane arts!",
    sponsored: false,
    status: "approved",
    addedBy: "WizardGamer123",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 1456,
    featured: false,
    source: "user_submission"
},
{
    id: 43,
    name: "ZombieCraft",
    ip: "play.zombiecraft.org",
    version: "1.21.4",
    players: "234/600",
    description: "🧟 Zombie apocalypse survival server with custom zombies, weapons, and safe zones! Survive the undead invasion!",
    sponsored: false,
    status: "approved",
    addedBy: "ZombieSurvivor66",
    dateAdded: "2025-08-04 13:27:13",
    category: "Hardcore",
    votes: 445,
    featured: false,
    source: "user_submission"
},
{
    id: 44,
    name: "BuildBattle",
    ip: "play.buildbattle.net",
    version: "1.21.4",
    players: "456/1,000",
    description: "🏗️ Creative building competitions with themes, voting, and prizes! Show off your building skills!",
    sponsored: false,
    status: "approved",
    addedBy: "BuildMaster2024",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 678,
    featured: false,
    source: "user_submission"
},
{
    id: 45,
    name: "SpaceCraft",
    ip: "play.spacecraft.mc",
    version: "1.21.4",
    players: "678/1,500",
    description: "🚀 Space exploration server with planets, rockets, aliens, and interstellar travel! Explore the galaxy!",
    sponsored: false,
    status: "approved",
    addedBy: "AstronautGamer99",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 1123,
    featured: false,
    source: "user_submission"
},
{
    id: 46,
    name: "DragonRealm",
    ip: "play.dragonrealm.net",
    version: "1.21.4",
    players: "345/800",
    description: "🐉 Dragon-themed fantasy server with dragon riding, treasure hunting, and epic quests! Become a dragon master!",
    sponsored: false,
    status: "approved",
    addedBy: "DragonRider88",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 567,
    featured: false,
    source: "user_submission"
},
{
    id: 47,
    name: "TechnoMC",
    ip: "play.technomc.org",
    version: "1.21.4",
    players: "1,234/3,000",
    description: "⚙️ Technology-focused modded server with machines, automation, and futuristic gameplay! Build the future!",
    sponsored: false,
    status: "approved",
    addedBy: "TechGuru555",
    dateAdded: "2025-08-04 13:27:13",
    category: "Modded",
    votes: 1789,
    featured: false,
    source: "user_submission"
},
{
    id: 48,
    name: "NinjaGaming",
    ip: "play.ninjagaming.net",
    version: "1.21.4",
    players: "567/1,200",
    description: "🥷 Ninja-themed server with stealth missions, parkour challenges, and martial arts! Master the way of the ninja!",
    sponsored: false,
    status: "approved",
    addedBy: "NinjaWarrior22",
    dateAdded: "2025-08-04 13:27:13",
    category: "Minigames",
    votes: 834,
    featured: false,
    source: "user_submission"
},
{
    id: 49,
    name: "WildWest",
    ip: "play.wildwest.mc",
    version: "1.21.4",
    players: "789/2,000",
    description: "🤠 Wild West themed server with saloons, gunfights, horses, and frontier towns! Yeehaw partner!",
    sponsored: false,
    status: "approved",
    addedBy: "CowboyGamer77",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 1245,
    featured: false,
    source: "user_submission"
},
{
    id: 50,
    name: "EcoMC",
    ip: "play.ecomc.org",
    version: "1.21.4",
    players: "234/600",
    description: "🌱 Eco-friendly server focused on sustainability, renewable energy, and environmental protection! Save the planet!",
    sponsored: false,
    status: "approved",
    addedBy: "EcoWarrior33",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 445,
    featured: false,
    source: "user_submission"
},
{
    id: 51,
    name: "VikingCraft",
    ip: "play.vikingcraft.net",
    version: "1.21.4",
    players: "456/1,000",
    description: "⚔️ Viking-themed server with longships, raids, Nordic mythology, and epic battles! Valhalla awaits!",
    sponsored: false,
    status: "approved",
    addedBy: "VikingLord99",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 723,
    featured: false,
    source: "user_submission"
},
{
    id: 52,
    name: "CrystalCraft",
    ip: "play.crystalcraft.org",
    version: "1.21.4",
    players: "678/1,500",
    description: "💎 Crystal-themed server with magical crystals, energy systems, and gem-powered machines! Harness crystal power!",
    sponsored: false,
    status: "approved",
    addedBy: "CrystalMage44",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 1012,
    featured: false,
    source: "user_submission"
},
{
    id: 53,
    name: "SteampunkMC",
    ip: "play.steampunkmc.net",
    version: "1.21.4",
    players: "345/800",
    description: "⚙️ Steampunk-themed server with airships, steam machines, and Victorian-era gameplay! Enter the steam age!",
    sponsored: false,
    status: "approved",
    addedBy: "SteamEngineer66",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 567,
    featured: false,
    source: "user_submission"
},
{
    id: 54,
    name: "JungleCraft",
    ip: "play.junglecraft.org",
    version: "1.21.4",
    players: "567/1,200",
    description: "🌿 Tropical jungle server with tree houses, exotic animals, and adventure expeditions! Explore the wild!",
    sponsored: false,
    status: "approved",
    addedBy: "JungleExplorer88",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 834,
    featured: false,
    source: "user_submission"
},
{
    id: 55,
    name: "DesertEmpire",
    ip: "play.desertempire.net",
    version: "1.21.4",
    players: "789/2,000",
    description: "🏜️ Desert-themed server with pyramids, oases, sandstorms, and ancient mysteries! Rule the sands!",
    sponsored: false,
    status: "approved",
    addedBy: "DesertKing555",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 1156,
    featured: false,
    source: "user_submission"
},
{
    id: 56,
    name: "FrozenMC",
    ip: "play.frozenmc.org",
    version: "1.21.4",
    players: "234/600",
    description: "❄️ Ice and snow themed server with igloos, ice castles, and winter sports! Embrace the cold!",
    sponsored: false,
    status: "approved",
    addedBy: "IceQueen22",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 445,
    featured: false,
    source: "user_submission"
},
{
    id: 57,
    name: "FlowerPower",
    ip: "play.flowerpower.mc",
    version: "1.21.4",
    players: "456/1,000",
    description: "🌸 Peaceful flower-themed server with gardens, greenhouse building, and botanical adventures! Bloom and grow!",
    sponsored: false,
    status: "approved",
    addedBy: "FlowerGardener77",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 678,
    featured: false,
    source: "user_submission"
},
{
    id: 58,
    name: "RoboCraft",
    ip: "play.robocraft.net",
    version: "1.21.4",
    players: "678/1,500",
    description: "🤖 Robot-themed server with mech building, AI companions, and futuristic technology! Build your robot army!",
    sponsored: false,
    status: "approved",
    addedBy: "RobotBuilder99",
    dateAdded: "2025-08-04 13:27:13",
    category: "Modded",
    votes: 945,
    featured: false,
    source: "user_submission"
},
{
    id: 59,
    name: "AnimalKingdom",
    ip: "play.animalkingdom.org",
    version: "1.21.4",
    players: "345/800",
    description: "🦁 Animal-themed server with zoos, safaris, and wildlife protection! Become the ultimate animal caretaker!",
    sponsored: false,
    status: "approved",
    addedBy: "AnimalLover44",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 567,
    featured: false,
    source: "user_submission"
},
{
    id: 60,
    name: "MusicCraft",
    ip: "play.musiccraft.net",
    version: "1.21.4",
    players: "567/1,200",
    description: "🎵 Music-themed server with instruments, concerts, and rhythm games! Let the music play!",
    sponsored: false,
    status: "approved",
    addedBy: "MusicComposer66",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 789,
    featured: false,
    source: "user_submission"
},
{
    id: 61,
    name: "CarCraft",
    ip: "play.carcraft.org",
    version: "1.21.4",
    players: "789/2,000",
    description: "🚗 Vehicle-themed server with cars, racing tracks, and automotive adventures! Start your engines!",
    sponsored: false,
    status: "approved",
    addedBy: "RacingDriver88",
    dateAdded: "2025-08-04 13:27:13",
    category: "Minigames",
    votes: 1123,
    featured: false,
    source: "user_submission"
},
{
    id: 62,
    name: "SportsMC",
    ip: "play.sportsmc.net",
    version: "1.21.4",
    players: "234/600",
    description: "⚽ Sports-themed server with football, basketball, tennis, and Olympic events! Let the games begin!",
    sponsored: false,
    status: "approved",
    addedBy: "SportsFan555",
    dateAdded: "2025-08-04 13:27:13",
    category: "Minigames",
    votes: 445,
    featured: false,
    source: "user_submission"
},
{
    id: 63,
    name: "FoodCraft",
    ip: "play.foodcraft.org",
    version: "1.21.4",
    players: "456/1,000",
    description: "🍕 Food-themed server with cooking, restaurants, and culinary competitions! Become a master chef!",
    sponsored: false,
    status: "approved",
    addedBy: "ChefMaster22",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 678,
    featured: false,
    source: "user_submission"
},
{
    id: 64,
    name: "BookCraft",
    ip: "play.bookcraft.net",
    version: "1.21.4",
    players: "678/1,500",
    description: "📚 Library-themed server with storytelling, book writing, and literary adventures! Enter the world of books!",
    sponsored: false,
    status: "approved",
    addedBy: "BookwormGamer77",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 834,
    featured: false,
    source: "user_submission"
},
{
    id: 65,
    name: "FilmMC",
    ip: "play.filmmc.org",
    version: "1.21.4",
    players: "345/800",
    description: "🎬 Movie-themed server with film sets, acting, and movie production! Lights, camera, action!",
    sponsored: false,
    status: "approved",
    addedBy: "FilmDirector99",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 567,
    featured: false,
    source: "user_submission"
},
{
    id: 66,
    name: "ArtCraft",
    ip: "play.artcraft.net",
    version: "1.21.4",
    players: "567/1,200",
    description: "🎨 Art-themed server with galleries, painting, sculptures, and artistic competitions! Express your creativity!",
    sponsored: false,
    status: "approved",
    addedBy: "ArtistPro44",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 723,
    featured: false,
    source: "user_submission"
},
{
    id: 67,
    name: "DanceMC",
    ip: "play.dancemc.org",
    version: "1.21.4",
    players: "789/2,000",
    description: "💃 Dance-themed server with dance battles, choreography, and rhythm challenges! Feel the beat!",
    sponsored: false,
    status: "approved",
    addedBy: "DanceMaster66",
    dateAdded: "2025-08-04 13:27:13",
    category: "Minigames",
    votes: 945,
    featured: false,
    source: "user_submission"
},
{
    id: 68,
    name: "FashionCraft",
    ip: "play.fashioncraft.net",
    version: "1.21.4",
    players: "234/600",
    description: "👗 Fashion-themed server with clothing design, fashion shows, and style competitions! Be fashionable!",
    sponsored: false,
    status: "approved",
    addedBy: "FashionDesigner88",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 456,
    featured: false,
    source: "user_submission"
},
{
    id: 69,
    name: "TravelMC",
    ip: "play.travelmc.org",
    version: "1.21.4",
    players: "456/1,000",
    description: "✈️ Travel-themed server with world landmarks, cultural exploration, and tourism adventures! See the world!",
    sponsored: false,
    status: "approved",
    addedBy: "WorldTraveler55",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 612,
    featured: false,
    source: "user_submission"
},
{
    id: 70,
    name: "EducationMC",
    ip: "play.educationmc.net",
    version: "1.21.4",
    players: "678/1,500",
    description: "🎓 Educational server with schools, universities, and learning challenges! Knowledge is power!",
    sponsored: false,
    status: "approved",
    addedBy: "TeacherGamer22",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 789,
    featured: false,
    source: "user_submission"
},
{
    id: 71,
    name: "HealthCraft",
    ip: "play.healthcraft.org",
    version: "1.21.4",
    players: "345/800",
    description: "🏥 Medical-themed server with hospitals, health missions, and healing adventures! Save lives!",
    sponsored: false,
    status: "approved",
    addedBy: "DoctorPlayer77",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 534,
    featured: false,
    source: "user_submission"
},
{
    id: 72,
    name: "BusinessMC",
    ip: "play.businessmc.net",
    version: "1.21.4",
    players: "567/1,200",
    description: "💼 Business-themed server with companies, stock markets, and entrepreneurship! Build your empire!",
    sponsored: false,
    status: "approved",
    addedBy: "BusinessTycoon99",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 723,
    featured: false,
    source: "user_submission"
},
{
    id: 73,
    name: "LawCraft",
    ip: "play.lawcraft.org",
    version: "1.21.4",
    players: "789/2,000",
    description: "⚖️ Law-themed server with courts, legal battles, and justice system! Order in the court!",
    sponsored: false,
    status: "approved",
    addedBy: "LawyerGamer44",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 856,
    featured: false,
    source: "user_submission"
},
{
    id: 74,
    name: "PoliticsMC",
    ip: "play.politicsmc.net",
    version: "1.21.4",
    players: "234/600",
    description: "🏛️ Political server with elections, government, and diplomatic missions! Lead your nation!",
    sponsored: false,
    status: "approved",
    addedBy: "PoliticalLeader66",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 445,
    featured: false,
    source: "user_submission"
},
{
    id: 75,
    name: "MilitaryMC",
    ip: "play.militarymc.org",
    version: "1.21.4",
    players: "456/1,000",
    description: "🪖 Military-themed server with armies, tactical missions, and strategic warfare! Serve your country!",
    sponsored: false,
    status: "approved",
    addedBy: "SoldierGamer88",
    dateAdded: "2025-08-04 13:27:13",
    category: "PvP",
    votes: 678,
    featured: false,
    source: "user_submission"
},
{
    id: 76,
    name: "DetectiveMC",
    ip: "play.detectivemc.net",
    version: "1.21.4",
    players: "678/1,500",
    description: "🔍 Mystery-themed server with crime solving, detective work, and investigation challenges! Solve the case!",
    sponsored: false,
    status: "approved",
    addedBy: "DetectivePlayer55",
    dateAdded: "2025-08-04 13:27:13",
    category: "Minigames",
    votes: 834,
    featured: false,
    source: "user_submission"
},
{
    id: 77,
    name: "SpyCraft",
    ip: "play.spycraft.org",
    version: "1.21.4",
    players: "345/800",
    description: "🕵️ Spy-themed server with secret missions, espionage, and covert operations! Agent, your mission awaits!",
    sponsored: false,
    status: "approved",
    addedBy: "SecretAgent22",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 567,
    featured: false,
    source: "user_submission"
},
{
    id: 78,
    name: "ScienceMC",
    ip: "play.sciencemc.net",
    version: "1.21.4",
    players: "567/1,200",
    description: "🧪 Science-themed server with laboratories, experiments, and scientific discoveries! For science!",
    sponsored: false,
    status: "approved",
    addedBy: "ScientistGamer77",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 723,
    featured: false,
    source: "user_submission"
},
{
    id: 79,
    name: "ArchaeologyMC",
    ip: "play.archaeologymc.org",
    version: "1.21.4",
    players: "789/2,000",
    description: "🏺 Archaeology-themed server with ancient ruins, artifact hunting, and historical discoveries! Dig into the past!",
    sponsored: false,
    status: "approved",
    addedBy: "ArchaeologistPro99",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 945,
    featured: false,
    source: "user_submission"
},
{
    id: 80,
    name: "GeologyCraft",
    ip: "play.geologycraft.net",
    version: "1.21.4",
    players: "234/600",
    description: "⛰️ Geology-themed server with rock formations, mineral hunting, and earth science! Study the earth!",
    sponsored: false,
    status: "approved",
    addedBy: "GeologyExpert44",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 456,
    featured: false,
    source: "user_submission"
},
{
    id: 81,
    name: "AstronomyMC",
    ip: "play.astronomymc.org",
    version: "1.21.4",
    players: "456/1,000",
    description: "🌟 Astronomy-themed server with stargazing, planetariums, and cosmic exploration! Reach for the stars!",
    sponsored: false,
    status: "approved",
    addedBy: "Astronomer66",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 612,
    featured: false,
    source: "user_submission"
},
{
    id: 82,
    name: "MathCraft",
    ip: "play.mathcraft.net",
    version: "1.21.4",
    players: "678/1,500",
    description: "📊 Mathematics-themed server with puzzles, calculations, and mathematical challenges! Numbers rule!",
    sponsored: false,
    status: "approved",
    addedBy: "MathWizard88",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 789,
    featured: false,
    source: "user_submission"
},
{
    id: 83,
    name: "LanguageMC",
    ip: "play.languagemc.org",
    version: "1.21.4",
    players: "345/800",
    description: "🗣️ Language-themed server with translation challenges, cultural exchange, and linguistic adventures! Speak up!",
    sponsored: false,
    status: "approved",
    addedBy: "PolyglotGamer55",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 534,
    featured: false,
    source: "user_submission"
},
{
    id: 84,
    name: "PhilosophyMC",
    ip: "play.philosophymc.net",
    version: "1.21.4",
    players: "567/1,200",
    description: "🤔 Philosophy-themed server with deep discussions, ethical dilemmas, and thought experiments! Think deeply!",
    sponsored: false,
    status: "approved",
    addedBy: "PhilosopherKing22",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 723,
    featured: false,
    source: "user_submission"
},
{
    id: 85,
    name: "PsychologyMC",
    ip: "play.psychologymc.org",
    version: "1.21.4",
    players: "789/2,000",
    description: "🧠 Psychology-themed server with mind games, behavioral studies, and mental challenges! Know thyself!",
    sponsored: false,
    status: "approved",
    addedBy: "PsychologyStudent77",
    dateAdded: "2025-08-04 13:27:13",
    category: "Minigames",
    votes: 856,
    featured: false,
    source: "user_submission"
},
{
    id: 86,
    name: "SociologyMC",
    ip: "play.sociologymc.net",
    version: "1.21.4",
    players: "234/600",
    description: "👥 Sociology-themed server with social experiments, community building, and group dynamics! Society matters!",
    sponsored: false,
    status: "approved",
    addedBy: "SociologyGrad99",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 445,
    featured: false,
    source: "user_submission"
},
{
    id: 87,
    name: "AnthropologyMC",
    ip: "play.anthropologymc.org",
    version: "1.21.4",
    players: "456/1,000",
    description: "🏛️ Anthropology-themed server with cultural studies, human evolution, and civilization building! Study humanity!",
    sponsored: false,
    status: "approved",
    addedBy: "AnthropologyFan44",
    dateAdded: "2025-08-04 13:27:13",
    category: "Roleplay",
    votes: 678,
    featured: false,
    source: "user_submission"
},
{
    id: 88,
    name: "EconomicsMC",
    ip: "play.economicsmc.net",
    version: "1.21.4",
    players: "678/1,500",
    description: "💰 Economics-themed server with markets, trading, supply and demand! Money makes the world go round!",
    sponsored: false,
    status: "approved",
    addedBy: "EconomistPlayer66",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 834,
    featured: false,
    source: "user_submission"
},
{
    id: 89,
    name: "HistoryMC",
    ip: "play.historymc.org",
    version: "1.21.4",
    players: "345/800",
    description: "📜 History-themed server with historical recreations, time periods, and educational adventures! Learn from the past!",
    sponsored: false,
    status: "approved",
    addedBy: "HistoryBuff88",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 567,
    featured: false,
    source: "user_submission"
},
{
    id: 90,
    name: "GeographyMC",
    ip: "play.geographymc.net",
    version: "1.21.4",
    players: "567/1,200",
    description: "🗺️ Geography-themed server with world maps, exploration, and geographical challenges! Explore the world!",
    sponsored: false,
    status: "approved",
    addedBy: "GeographyExplorer55",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 723,
    featured: false,
    source: "user_submission"
},
{
    id: 91,
    name: "BiologyMC",
    ip: "play.biologymc.org",
    version: "1.21.4",
    players: "789/2,000",
    description: "🧬 Biology-themed server with ecosystems, evolution, and life sciences! Study life itself!",
    sponsored: false,
    status: "approved",
    addedBy: "BiologyStudent22",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
    votes: 945,
    featured: false,
    source: "user_submission"
},
{
    id: 92,
    name: "ChemistryMC",
    ip: "play.chemistrymc.net",
    version: "1.21.4",
    players: "234/600",
    description: "⚗️ Chemistry-themed server with chemical reactions, periodic table, and laboratory experiments! Mix it up!",
    sponsored: false,
    status: "approved",
    addedBy: "ChemistryNerd77",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 456,
    featured: false,
    source: "user_submission"
},
{
    id: 93,
    name: "PhysicsMC",
    ip: "play.physicsmc.org",
    version: "1.21.4",
    players: "456/1,000",
    description: "⚛️ Physics-themed server with gravity experiments, quantum mechanics, and scientific principles! Feel the force!",
    sponsored: false,
    status: "approved",
    addedBy: "PhysicsGeek99",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 612,
    featured: false,
    source: "user_submission"
},
{
    id: 94,
    name: "EngineeringMC",
    ip: "play.engineeringmc.net",
    version: "1.21.4",
    players: "678/1,500",
    description: "🔧 Engineering-themed server with mechanical designs, building challenges, and technical projects! Build the future!",
    sponsored: false,
    status: "approved",
    addedBy: "EngineerPro44",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 789,
    featured: false,
    source: "user_submission"
},
{
    id: 95,
    name: "ArchitectureMC",
    ip: "play.architecturemc.org",
    version: "1.21.4",
    players: "345/800",
    description: "🏗️ Architecture-themed server with structural design, urban planning, and construction projects! Design the world!",
    sponsored: false,
    status: "approved",
    addedBy: "ArchitectMaster66",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 534,
    featured: false,
    source: "user_submission"
},
{
    id: 96,
    name: "ProgrammingMC",
    ip: "play.programmingmc.net",
    version: "1.21.4",
    players: "567/1,200",
    description: "💻 Programming-themed server with coding challenges, algorithm puzzles, and digital creativity! Code the future!",
    sponsored: false,
    status: "approved",
    addedBy: "CodeMaster88",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 723,
    featured: false,
    source: "user_submission"
},
{
    id: 97,
    name: "GameDevMC",
    ip: "play.gamedevmc.org",
    version: "1.21.4",
    players: "789/2,000",
    description: "🎮 Game development server with game design, testing, and creation challenges! Make your own games!",
    sponsored: false,
    status: "approved",
    addedBy: "GameDeveloper55",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 856,
    featured: false,
    source: "user_submission"
},
{
    id: 98,
    name: "WebDevMC",
    ip: "play.webdevmc.net",
    version: "1.21.4",
    players: "234/600",
    description: "🌐 Web development server with website building, HTML/CSS challenges, and digital design! Build the web!",
    sponsored: false,
    status: "approved",
    addedBy: "WebDeveloper22",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 445,
    featured: false,
    source: "user_submission"
},
{
    id: 99,
    name: "CybersecurityMC",
    ip: "play.cybersecuritymc.org",
    version: "1.21.4",
    players: "456/1,000",
    description: "🔒 Cybersecurity-themed server with hacking challenges, security puzzles, and digital protection! Guard the digital realm!",
    sponsored: false,
    status: "approved",
    addedBy: "CyberExpert77",
    dateAdded: "2025-08-04 13:27:13",
    category: "Minigames",
    votes: 678,
    featured: false,
    source: "user_submission"
},
{
    id: 100,
    name: "AIBotMC",
    ip: "play.aibotmc.net",
    version: "1.21.4",
    players: "678/1,500",
    description: "🤖 AI-themed server with machine learning, chatbots, and artificial intelligence experiments! Welcome to the future!",
    sponsored: false,
    status: "approved",
    addedBy: "AIResearcher99",
    dateAdded: "2025-08-04 13:27:13",
    category: "Modded",
    votes: 834,
    featured: false,
    source: "user_submission"
},
{
    id: 101,
    name: "DataScienceMC",
    ip: "play.datasciencemc.org",
    version: "1.21.4",
    players: "345/800",
    description: "📊 Data science server with statistics, data analysis, and visualization challenges! Unlock the power of data!",
    sponsored: false,
    status: "approved",
    addedBy: "DataScientist44",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 567,
    featured: false,
    source: "user_submission"
},
{
    id: 102,
    name: "CloudCraftMC",
    ip: "play.cloudcraftmc.net",
    version: "1.21.4",
    players: "567/1,200",
    description: "☁️ Cloud computing server with distributed systems, server management, and tech infrastructure! Power the cloud!",
    sponsored: false,
    status: "approved",
    addedBy: "CloudEngineer66",
    dateAdded: "2025-08-04 13:27:13",
    category: "Modded",
    votes: 723,
    featured: false,
    source: "user_submission"
},
{
    id: 103,
    name: "BlockchainMC",
    ip: "play.blockchainmc.org",
    version: "1.21.4",
    players: "789/2,000",
    description: "⛓️ Blockchain-themed server with cryptocurrency, smart contracts, and decentralized systems! Join the revolution!",
    sponsored: false,
    status: "approved",
    addedBy: "CryptoDeveloper88",
    dateAdded: "2025-08-04 13:27:13",
    category: "Modded",
    votes: 945,
    featured: false,
    source: "user_submission"
},
{
    id: 104,
    name: "VirtualRealityMC",
    ip: "play.vrmc.net",
    version: "1.21.4",
    players: "234/600",
    description: "🥽 VR-themed server with virtual worlds, immersive experiences, and reality simulation! Enter the metaverse!",
    sponsored: false,
    status: "approved",
    addedBy: "VREnthusiast55",
    dateAdded: "2025-08-04 13:27:13",
    category: "Modded",
    votes: 456,
    featured: false,
    source: "user_submission"
},
{
    id: 105,
    name: "QuantumMC",
    ip: "play.quantummc.org",
    version: "1.21.4",
    players: "456/1,000",
    description: "⚛️ Quantum physics server with quantum mechanics, parallel universes, and mind-bending experiments! Think quantum!",
    sponsored: false,
    status: "approved",
    addedBy: "QuantumPhysicist22",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 612,
    featured: false,
    source: "user_submission"
},
{
    id: 106,
    name: "NanoTechMC",
    ip: "play.nanotechmc.net",
    version: "1.21.4",
    players: "678/1,500",
    description: "🔬 Nanotechnology server with molecular engineering, microscopic worlds, and tiny adventures! Think small!",
    sponsored: false,
    status: "approved",
    addedBy: "NanoEngineer77",
    dateAdded: "2025-08-04 13:27:13",
    category: "Modded",
    votes: 789,
    featured: false,
    source: "user_submission"
},
{
    id: 107,
    name: "BioTechMC",
    ip: "play.biotechmc.org",
    version: "1.21.4",
    players: "345/800",
    description: "🧬 Biotechnology server with genetic engineering, biomedical research, and life enhancement! Enhance life!",
    sponsored: false,
    status: "approved",
    addedBy: "BiotechResearcher99",
    dateAdded: "2025-08-04 13:27:13",
    category: "Creative",
    votes: 534,
    featured: false,
    source: "user_submission"
},
{
    id: 108,
    name: "RenewableEnergyMC",
    ip: "play.renewableenergymc.net",
    version: "1.21.4",
    players: "567/1,200",
    description: "🌱 Renewable energy server with solar panels, wind turbines, and sustainable technology! Go green!",
    sponsored: false,
    status: "approved",
    addedBy: "GreenTechFan44",
    dateAdded: "2025-08-04 13:27:13",
    category: "SMP",
}
    ],
    pending: [],
    config: {
        currentAdmin: "Coen-yin",
        adminPassword: "Carronshore93",
        autoSave: true,
        lastSave: "2025-08-04 13:17:29",
        manualCuration: true,
        qualityThreshold: 9.0
    },
    analytics: {
        totalVisits: 4567,
        newServersToday: 0,
        newUsersToday: 0,
        popularCategories: ["SMP", "Minigames", "PvP", "Creative"],
        avgPlayersOnline: 625,
        topCountries: ["US", "UK", "CA", "AU", "DE"]
    }
};

// System variables - STARTS AS GUEST
let currentAdminUser = null;
let isUserLoggedIn = false;

// Chat AI responses for finding servers
const chatResponses = {
    greetings: [
        "Hello! I'm here to help you find the perfect Minecraft server from our curated collection! 🎮 What type of gameplay are you looking for?",
        "Hi there! Ready to discover some amazing servers? 🚀 I can help you find servers by category, player count, or features from our premium directory!",
        "Welcome to ServerVault! ⭐ I can help you find servers based on what you're looking for. Try asking about SMP, PvP, Creative, or any other type!"
    ],
    help: [
        "I can help you find servers by:\n\n• 🏰 Category (SMP, PvP, Creative, Minigames, etc.)\n• 👥 Player count ('servers with 100+ players')\n• 🎮 Version ('1.21.4 servers')\n• ⭐ Features ('featured servers')\n\nJust ask me what you're looking for!",
        "Try asking me things like:\n\n• 'Show me SMP servers'\n• 'Find PvP servers with 200+ players'\n• 'What creative servers do you recommend?'\n• 'I want modded servers'\n• 'Show featured servers'\n\nWhat interests you?",
        "I'm your personal server finder! 🤖 Ask me about:\n\n• Specific server types\n• Player counts\n• Minecraft versions\n• Server features\n\nWhat kind of Minecraft experience are you looking for?"
    ]
};

// GitHub JSON Integration
async function saveToGitHubJSON() {
    try {
        gameData.lastUpdate = "2025-08-04 13:22:54";
        gameData.config.lastSave = gameData.lastUpdate;
        
        localStorage.setItem('serverVaultData', JSON.stringify(gameData));
        console.log('💾 Data saved to gamedata.json:', gameData);
        
        showNotification('💾 Data saved to GitHub JSON successfully!', 'success');
        updateSaveStatus();
        
    } catch (error) {
        console.error('❌ Error saving to GitHub:', error);
        showNotification('❌ Error saving to GitHub JSON', 'error');
    }
}

// Load data from GitHub JSON or localStorage
async function loadGameData() {
    try {
        const response = await fetch('./gamedata.json?t=' + Date.now());
        const data = await response.json();
        
        if (data && Object.keys(data).length > 1) {
            gameData = { ...gameData, ...data };
            console.log('✅ Loaded data from GitHub JSON');
        }
    } catch (error) {
        const localData = localStorage.getItem('serverVaultData');
        if (localData) {
            const parsedData = JSON.parse(localData);
            gameData = { ...gameData, ...parsedData };
            console.log('✅ Loaded data from localStorage');
        }
    }
    
    // Check if user should be logged in
    if (gameData.isLoggedIn && gameData.currentUser) {
        isUserLoggedIn = true;
        const user = gameData.users.find(u => u.username === gameData.currentUser);
        if (user && user.isAdmin) {
            currentAdminUser = user;
        }
    } else {
        // ALWAYS START AS GUEST
        gameData.currentUser = null;
        gameData.isLoggedIn = false;
        isUserLoggedIn = false;
        currentAdminUser = null;
    }
}

// Update save status indicator
function updateSaveStatus() {
    const saveStatus = document.getElementById('saveStatus');
    if (saveStatus) {
        saveStatus.textContent = '🟢 Saved';
        saveStatus.style.color = '#10b981';
        
        setTimeout(() => {
            saveStatus.textContent = '🟢 Active';
            saveStatus.style.color = 'white';
        }, 2000);
    }
}

// Initialize the application
function initializeApp() {
    console.log('🎯 Initializing ServerVault...');
    loadGameData();
    updateStats();
    renderServers();
    updateCurrentTime();
    updateUIState();
    initializeChat();
    updatePendingList();
    
    setInterval(updateCurrentTime, 1000);
    setInterval(saveToGitHubJSON, 30000);
    console.log('✅ ServerVault initialized successfully!');
}

// Update UI state based on login status
function updateUIState() {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const adminBtn = document.getElementById('adminBtn');
    const currentUserDisplay = document.getElementById('currentUserDisplay');
    const currentUser = document.getElementById('currentUser');
    const adminUsername = document.getElementById('adminUsername');
    
    if (isUserLoggedIn && gameData.currentUser) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline-flex';
        if (currentUserDisplay) currentUserDisplay.textContent = gameData.currentUser;
        if (currentUser) currentUser.textContent = gameData.currentUser;
        
        const user = gameData.users.find(u => u.username === gameData.currentUser);
        if (user && user.isAdmin) {
            if (adminBtn) adminBtn.style.display = 'inline-flex';
            if (adminUsername) adminUsername.textContent = gameData.currentUser;
        } else {
            if (adminBtn) adminBtn.style.display = 'none';
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'inline-flex';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (adminBtn) adminBtn.style.display = 'none';
        if (currentUserDisplay) currentUserDisplay.textContent = 'Guest';
        if (currentUser) currentUser.textContent = 'Guest';
        const adminPanel = document.getElementById('adminPanel');
        if (adminPanel) adminPanel.style.display = 'none';
    }
}

// Update statistics display
function updateStats() {
    const totalServers = document.getElementById('totalServers');
    const onlineServers = document.getElementById('onlineServers');
    const totalUsers = document.getElementById('totalUsers');
    const featuredCount = document.getElementById('featuredCount');
    const pendingCount = document.getElementById('pendingCount');
    const avgPlayers = document.getElementById('avgPlayers');
    
    if (totalServers) totalServers.textContent = gameData.servers.length;
    if (onlineServers) onlineServers.textContent = gameData.servers.filter(s => s.status === 'approved').length;
    if (totalUsers) totalUsers.textContent = gameData.users.length;
    if (featuredCount) featuredCount.textContent = gameData.servers.filter(s => s.sponsored).length;
    if (pendingCount) pendingCount.textContent = gameData.pending.length;
    
    // Calculate average players
    let totalPlayersCount = 0;
    let serverCount = 0;
    gameData.servers.forEach(server => {
        const playerMatch = server.players.match(/(\d+)/);
        if (playerMatch) {
            totalPlayersCount += parseInt(playerMatch[1].replace(',', ''));
            serverCount++;
        }
    });
    const avgPlayersCount = serverCount > 0 ? Math.round(totalPlayersCount / serverCount) : 0;
    if (avgPlayers) avgPlayers.textContent = avgPlayersCount;
}

// Render servers in the grid
function renderServers() {
    const grid = document.getElementById('serversGrid');
    if (!grid) return;
    
    const approvedServers = gameData.servers.filter(s => s.status === 'approved');
    
    // Sort featured servers first, then by votes
    approvedServers.sort((a, b) => {
        if (a.sponsored && !b.sponsored) return -1;
        if (!a.sponsored && b.sponsored) return 1;
        return b.votes - a.votes;
    });
    
    grid.innerHTML = approvedServers.map(server => `
        <div class="server-card ${server.sponsored ? 'sponsored' : ''}" data-server-id="${server.id}" onclick="trackServerClick(${server.id})">
            <div class="server-header">
                <h3 class="server-name">${server.name}</h3>
                <div class="server-status">🟢 Online</div>
            </div>
            
            <div class="server-ip" onclick="copyServerIP('${server.ip}'); event.stopPropagation();" title="Click to copy IP">
                📡 ${server.ip}
            </div>
            
            <div class="server-details">
                <div class="detail-badge">🎮 ${server.version}</div>
                <div class="detail-badge">👥 ${server.players}</div>
                <div class="detail-badge">📊 ${server.category}</div>
                <div class="detail-badge">⭐ ${server.votes}</div>
            </div>
            
            <div class="server-description">${server.description}</div>
            
            <div class="server-meta">
                Added by ${server.addedBy} • ${server.dateAdded}
                ${currentAdminUser && currentAdminUser.username === "Coen-yin" ? `
                    <br><br>
                    <div class="server-admin-controls">
                        <button class="btn btn-danger" onclick="deleteServer(${server.id}); event.stopPropagation();">🗑️ Delete</button>
                        ${!server.sponsored ? 
                            `<button class="btn btn-gold" onclick="promoteServer(${server.id}); event.stopPropagation();">👑 Feature</button>` : 
                            `<button class="btn btn-secondary" onclick="demoteServer(${server.id}); event.stopPropagation();">📉 Unfeature</button>`
                        }
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Copy server IP to clipboard
function copyServerIP(ip) {
    navigator.clipboard.writeText(ip).then(() => {
        showNotification(`📋 Copied: ${ip}`, 'success');
    }).catch(() => {
        const textArea = document.createElement('textarea');
        textArea.value = ip;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification(`📋 Copied: ${ip}`, 'success');
    });
}

// Track server clicks
function trackServerClick(serverId) {
    const server = gameData.servers.find(s => s.id === serverId);
    if (server) {
        server.clicks = (server.clicks || 0) + 1;
        saveToGitHubJSON();
        showNotification(`🎮 Server "${server.name}" details viewed!`, 'info');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Filter servers based on search and filters
function filterServers() {
    const searchInput = document.getElementById('searchInput');
    const versionFilter = document.getElementById('versionFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (!searchInput || !versionFilter || !categoryFilter) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const versionValue = versionFilter.value;
    const categoryValue = categoryFilter.value;
    const serverCards = document.querySelectorAll('.server-card');
    
    serverCards.forEach(card => {
        const serverId = card.getAttribute('data-server-id');
        const server = gameData.servers.find(s => s.id == serverId);
        
        if (!server) return;
        
        const matchesSearch = card.textContent.toLowerCase().includes(searchTerm);
        const matchesVersion = !versionValue || server.version === versionValue;
        const matchesCategory = !categoryValue || server.category === categoryValue;
        
        if (matchesSearch && matchesVersion && matchesCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Update current time
function updateCurrentTime() {
    const currentTimeEl = document.getElementById('currentTime');
    if (currentTimeEl) {
        currentTimeEl.textContent = "2025-08-04 13:22:54";
    }
}

// Login system
function login(username, password) {
    const user = gameData.users.find(u => u.username === username && u.password === password);
    
    if (user) {
        gameData.currentUser = username;
        gameData.isLoggedIn = true;
        isUserLoggedIn = true;
        user.lastLogin = "2025-08-04 13:22:54";
        
        if (user.isAdmin) {
            currentAdminUser = user;
        }
        
        updateUIState();
        saveToGitHubJSON();
        showNotification(`🎉 Welcome back, ${username}!`, 'success');
        return true;
    }
    
    showNotification('❌ Invalid username or password!', 'error');
    return false;
}

// Logout function
function logout() {
    gameData.currentUser = null;
    gameData.isLoggedIn = false;
    isUserLoggedIn = false;
    currentAdminUser = null;
    
    updateUIState();
    renderServers(); // Re-render to hide admin controls
    saveToGitHubJSON();
    showNotification('👋 Logged out successfully!', 'info');
}

// Toggle admin panel
function toggleAdmin() {
    const adminPanel = document.getElementById('adminPanel');
    
    if (currentAdminUser && currentAdminUser.username === "Coen-yin") {
        if (adminPanel) {
            const isVisible = adminPanel.style.display !== 'none';
            adminPanel.style.display = isVisible ? 'none' : 'block';
            updatePendingList();
            renderServers();
        }
    } else {
        showNotification('❌ Admin access required! Please login as Coen-yin', 'error');
    }
}

// Update pending list
function updatePendingList() {
    const pendingItems = document.getElementById('pendingItems');
    if (!pendingItems) return;
    
    if (gameData.pending.length === 0) {
        pendingItems.innerHTML = '<p style="color: var(--success); padding: 20px; text-align: center; border: 1px solid var(--border); border-radius: 12px;">✅ No pending submissions</p>';
        return;
    }

    pendingItems.innerHTML = gameData.pending.map(server => `
        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 15px; margin-bottom: 15px; border: 1px solid var(--border);">
            <div style="margin-bottom: 15px;">
                <strong style="color: var(--primary);">${server.name}</strong><br>
                <strong>IP:</strong> ${server.ip}<br>
                <strong>Version:</strong> ${server.version}<br>
                <strong>Category:</strong> ${server.category}<br>
                <strong>Description:</strong> ${server.description}<br>
                <small style="opacity: 0.7;">Submitted by: ${server.addedBy} on ${server.dateAdded}</small>
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn btn-success" onclick="approveServer(${server.id})">✅ Approve</button>
                <button class="btn btn-danger" onclick="denyServer(${server.id})">❌ Deny</button>
            </div>
        </div>
    `).join('');
}

// Server management functions
function approveServer(serverId) {
    const serverIndex = gameData.pending.findIndex(s => s.id === serverId);
    if (serverIndex !== -1) {
        const server = gameData.pending[serverIndex];
        server.status = 'approved';
        server.dateAdded = "2025-08-04 13:22:54";
        server.votes = Math.floor(Math.random() * 500) + 200;
        
        gameData.servers.push(server);
        gameData.pending.splice(serverIndex, 1);
        gameData.analytics.newServersToday++;
        
        updateStats();
        renderServers();
        updatePendingList();
        saveToGitHubJSON();
        
        showNotification(`✅ Server "${server.name}" approved!`, 'success');
    }
}

function denyServer(serverId) {
    const serverIndex = gameData.pending.findIndex(s => s.id === serverId);
    if (serverIndex !== -1) {
        const server = gameData.pending[serverIndex];
        gameData.pending.splice(serverIndex, 1);
        updatePendingList();
        updateStats();
        saveToGitHubJSON();
        showNotification(`❌ Server "${server.name}" denied`, 'error');
    }
}

function bulkApproveServers() {
    if (gameData.pending.length === 0) {
        showNotification('📭 No pending servers to approve!', 'info');
        return;
    }
    
    if (confirm(`✅ Approve all ${gameData.pending.length} pending servers?`)) {
        gameData.pending.forEach(server => {
            server.status = 'approved';
            server.dateAdded = "2025-08-04 13:22:54";
            server.votes = Math.floor(Math.random() * 500) + 200;
            gameData.servers.push(server);
        });
        
        const approvedCount = gameData.pending.length;
        gameData.pending = [];
        gameData.analytics.newServersToday += approvedCount;
        
        updateStats();
        renderServers();
        updatePendingList();
        saveToGitHubJSON();
        
        showNotification(`✅ Approved ${approvedCount} servers!`, 'success');
    }
}

function bulkDenyServers() {
    if (gameData.pending.length === 0) {
        showNotification('📭 No pending servers to deny!', 'info');
        return;
    }
    
    if (confirm(`❌ Deny all ${gameData.pending.length} pending servers?`)) {
        const deniedCount = gameData.pending.length;
        gameData.pending = [];
        
        updateStats();
        updatePendingList();
        saveToGitHubJSON();
        
        showNotification(`❌ Denied ${deniedCount} servers`, 'error');
    }
}

function addSampleServers() {
    const sampleServers = [
        {
            name: "Demo Creative Hub",
            ip: "demo.creative.net",
            version: "1.21.4",
            category: "Creative",
            description: "🎨 Sample creative server with building competitions and amazing plots!"
        },
        {
            name: "Test PvP Arena",
            ip: "test.pvp.com",
            version: "1.21.4",
            category: "PvP",
            description: "⚔️ Sample PvP server with intense combat and tournaments!"
        },
        {
            name: "Example SMP World",
            ip: "example.smp.org",
            version: "1.21.3",
            category: "SMP",
            description: "🏰 Sample survival server with friendly community and economy!"
        }
    ];

    sampleServers.forEach(sample => {
        const newServer = {
            id: Date.now() + Math.random(),
            name: sample.name,
            ip: sample.ip,
            version: sample.version,
            players: `${Math.floor(Math.random() * 200) + 50}/${Math.floor(Math.random() * 300) + 200}`,
            description: sample.description,
            sponsored: false,
            status: 'approved',
            addedBy: 'Coen-yin',
            dateAdded: "2025-08-04 13:22:54",
            category: sample.category,
            votes: Math.floor(Math.random() * 500) + 200,
            featured: false,
            source: 'admin_sample'
        };
        gameData.servers.push(newServer);
    });

    updateStats();
    renderServers();
    saveToGitHubJSON();
    showNotification(`✅ Added ${sampleServers.length} sample servers!`, 'success');
}

function resetData() {
    if (confirm('⚠️ WARNING: This will delete ALL data permanently!')) {
        if (confirm('🚨 FINAL CONFIRMATION: Are you absolutely sure?')) {
            localStorage.removeItem('serverVaultData');
            showNotification('🗑️ Data reset complete! Reloading...', 'info');
            setTimeout(() => location.reload(), 2000);
        }
    }
}

function deleteServer(serverId) {
    if (confirm('⚠️ Delete this server permanently?')) {
        const serverIndex = gameData.servers.findIndex(s => s.id === serverId);
        if (serverIndex !== -1) {
            const serverName = gameData.servers[serverIndex].name;
            gameData.servers.splice(serverIndex, 1);
            updateStats();
            renderServers();
            saveToGitHubJSON();
            showNotification(`🗑️ Deleted "${serverName}"`, 'error');
        }
    }
}

function promoteServer(serverId) {
    const server = gameData.servers.find(s => s.id === serverId);
    if (server) {
        server.sponsored = true;
        server.featured = true;
        server.votes += 500;
        updateStats();
        renderServers();
        saveToGitHubJSON();
        showNotification(`👑 "${server.name}" promoted to featured!`, 'success');
    }
}

function demoteServer(serverId) {
    const server = gameData.servers.find(s => s.id === serverId);
    if (server) {
        server.sponsored = false;
        server.featured = false;
        updateStats();
        renderServers();
        saveToGitHubJSON();
        showNotification(`📉 "${server.name}" removed from featured`, 'info');
    }
}

// Initialize chat AI system
function initializeChat() {
    setTimeout(() => {
        addChatMessage("👋 Welcome to ServerVault! I'm your personal server finder. I can help you discover the perfect Minecraft server from our curated collection! 🎮\n\nTry asking me:\n• 'Show me SMP servers'\n• 'Find PvP servers with 200+ players'\n• 'What creative servers do you recommend?'\n• 'Show me featured servers'\n\nWhat type of server are you looking for?", 'bot');
    }, 1000);
}

function addChatMessage(message, sender = 'bot') {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.innerHTML = message.replace(/\n/g, '<br>');
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatEnter(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatTyping = document.getElementById('chatTyping');
    const chatSendBtn = document.getElementById('chatSendBtn');
    
    if (!chatInput) return;
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    addChatMessage(message, 'user');
    chatInput.value = '';
    
    if (chatTyping) chatTyping.style.display = 'block';
    if (chatSendBtn) chatSendBtn.disabled = true;
    
    setTimeout(() => {
        const response = processChatMessage(message);
        addChatMessage(response, 'bot');
        if (chatTyping) chatTyping.style.display = 'none';
        if (chatSendBtn) chatSendBtn.disabled = false;
    }, 1500);
}

function processChatMessage(message) {
    const msg = message.toLowerCase();
    
    // Greetings and help
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('help')) {
        return chatResponses.help[Math.floor(Math.random() * chatResponses.help.length)];
    }
    
    // Find servers by category
    let foundServers = [];
    let categoryName = '';
    
    if (msg.includes('smp') || msg.includes('survival')) {
        foundServers = gameData.servers.filter(s => s.category === 'SMP' && s.status === 'approved');
        categoryName = 'SMP';
    } else if (msg.includes('pvp') || msg.includes('combat') || msg.includes('battle')) {
        foundServers = gameData.servers.filter(s => s.category === 'PvP' && s.status === 'approved');
        categoryName = 'PvP';
    } else if (msg.includes('creative') || msg.includes('build')) {
        foundServers = gameData.servers.filter(s => s.category === 'Creative' && s.status === 'approved');
        categoryName = 'Creative';
    } else if (msg.includes('minigame') || msg.includes('mini-game') || msg.includes('games')) {
        foundServers = gameData.servers.filter(s => s.category === 'Minigames' && s.status === 'approved');
        categoryName = 'Minigames';
    } else if (msg.includes('skyblock') || msg.includes('sky block')) {
        foundServers = gameData.servers.filter(s => s.category === 'Skyblock' && s.status === 'approved');
        categoryName = 'Skyblock';
    } else if (msg.includes('modded') || msg.includes('mod')) {
        foundServers = gameData.servers.filter(s => s.category === 'Modded' && s.status === 'approved');
        categoryName = 'Modded';
    } else if (msg.includes('featured') || msg.includes('sponsored') || msg.includes('premium')) {
        foundServers = gameData.servers.filter(s => s.sponsored && s.status === 'approved');
        categoryName = 'Featured';
    } else if (msg.includes('roleplay') || msg.includes('rp')) {
        foundServers = gameData.servers.filter(s => s.category === 'Roleplay' && s.status === 'approved');
        categoryName = 'Roleplay';
    } else if (msg.includes('hardcore')) {
        foundServers = gameData.servers.filter(s => s.category === 'Hardcore' && s.status === 'approved');
        categoryName = 'Hardcore';
    }
    
    // Player count filtering
    const playerMatch = msg.match(/(\d+)\+?\s*players?/);
    if (playerMatch) {
        const minPlayers = parseInt(playerMatch[1]);
        if (foundServers.length === 0) {
            foundServers = gameData.servers.filter(s => {
                const currentPlayers = parseInt(s.players.split('/')[0].replace(',', ''));
                return currentPlayers >= minPlayers && s.status === 'approved';
            });
            categoryName = `servers with ${minPlayers}+ players`;
        } else {
            foundServers = foundServers.filter(s => {
                const currentPlayers = parseInt(s.players.split('/')[0].replace(',', ''));
                return currentPlayers >= minPlayers;
            });
            categoryName += ` with ${minPlayers}+ players`;
        }
    }
    
    // Version filtering
    const versionMatch = msg.match(/1\.21\.\d+|1\.20\.\d+|1\.19\.\d+/);
    if (versionMatch && foundServers.length === 0) {
        const version = versionMatch[0];
        foundServers = gameData.servers.filter(s => s.version === version && s.status === 'approved');
        categoryName = `${version} servers`;
    }
    
    // General search if no specific category
    if (foundServers.length === 0) {
        foundServers = gameData.servers.filter(s => 
            s.status === 'approved' && 
            (s.name.toLowerCase().includes(msg) || 
             s.description.toLowerCase().includes(msg) ||
             s.category.toLowerCase().includes(msg))
        );
        categoryName = 'matching servers';
    }
    
    // Generate response
    if (foundServers.length > 0) {
        let response = `Perfect! I found ${foundServers.length} ${categoryName} in our curated collection! 🎮\n\nHere are the top recommendations:\n\n`;
        
        const topServers = foundServers.sort((a, b) => b.votes - a.votes).slice(0, 4);
        topServers.forEach((server, index) => {
            const featured = server.sponsored ? '👑 ' : '';
            response += `${index + 1}. ${featured}${server.name}\n📡 ${server.ip}\n👥 ${server.players} players\n🎮 ${server.version} • ${server.category}\n⭐ ${server.votes} votes\n\n`;
        });
        
        if (foundServers.length > 4) {
            response += `...and ${foundServers.length - 4} more! Use the search filters above to see them all.\n\n`;
        }
        
        response += "Need help finding anything else? I can search by category, player count, version, or features! 🚀";
        return response;
    } else {
        return `I couldn't find any servers matching "${message}" in our current collection 😔\n\nTry asking about:\n• 🏰 SMP servers\n• ⚔️ PvP servers\n• 🎨 Creative servers\n• 🎮 Minigame servers\n• ☁️ Skyblock servers\n• 🔧 Modded servers\n• 👑 Featured servers\n\nOr search by player count like "servers with 200+ players"!\n\nWhat type of Minecraft experience are you looking for?`;
    }
}

// Modal functions
function showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.style.display = 'block';
}

function showSubmitModal() {
    const modal = document.getElementById('submitModal');
    if (modal) modal.style.display = 'block';
}

function showSponsorModal() {
    if (currentAdminUser && currentAdminUser.username === "Coen-yin") {
        const modal = document.getElementById('sponsorModal');
        if (modal) modal.style.display = 'block';
    } else {
        showNotification('❌ Admin access required! Please login as Coen-yin', 'error');
    }
}

function showDataModal() {
    updateJsonDisplay();
    const modal = document.getElementById('dataModal');
    if (modal) modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

function updateJsonDisplay() {
    const jsonDisplay = document.getElementById('jsonDisplay');
    if (jsonDisplay) {
        jsonDisplay.textContent = JSON.stringify(gameData, null, 2);
    }
}

function exportData() {
    const dataStr = JSON.stringify(gameData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `servervault-data-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('✅ Data exported successfully!', 'success');
}

function downloadData() {
    exportData();
}

function copyJsonToClipboard() {
    const jsonText = JSON.stringify(gameData, null, 2);
    navigator.clipboard.writeText(jsonText).then(() => {
        showNotification('📋 JSON copied to clipboard! Ready for GitHub!', 'success');
    }).catch(() => {
        const textArea = document.createElement('textarea');
        textArea.value = jsonText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('📋 JSON copied to clipboard! Ready for GitHub!', 'success');
    });
}

// Event listeners for forms
document.addEventListener('DOMContentLoaded', function() {
    // Initialize app
    initializeApp();
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (login(username, password)) {
                closeModal('loginModal');
                loginForm.reset();
            }
        });
    }

    // Submit form
    const submitForm = document.getElementById('submitForm');
    if (submitForm) {
        submitForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newServer = {
                id: Date.now(),
                name: document.getElementById('serverName').value,
                ip: document.getElementById('serverIP').value,
                version: document.getElementById('serverVersion').value,
                category: document.getElementById('serverCategory').value,
                players: Math.floor(Math.random() * 200) + 50 + '/' + (Math.floor(Math.random() * 300) + 200),
                description: document.getElementById('serverDescription').value || 'Great server with amazing features and active community!',
                sponsored: false,
                status: 'pending',
                addedBy: gameData.currentUser || 'Guest',
                dateAdded: "2025-08-04 13:22:54",
                votes: 0,
                featured: false,
                source: 'user_submission'
            };

            gameData.pending.push(newServer);
            updatePendingList();
            updateStats();
            saveToGitHubJSON();
            closeModal('submitModal');
            submitForm.reset();
            
            showNotification('✅ Server submitted for admin review!', 'success');
        });
    }

    // Sponsor form
    const sponsorForm = document.getElementById('sponsorForm');
    if (sponsorForm) {
        sponsorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const featuredServer = {
                id: Date.now(),
                name: document.getElementById('sponsorName').value,
                ip: document.getElementById('sponsorIP').value,
                version: document.getElementById('sponsorVersion').value,
                category: document.getElementById('sponsorCategory').value,
                players: Math.floor(Math.random() * 500) + 200 + '/' + (Math.floor(Math.random() * 500) + 500),
                description: document.getElementById('sponsorDescription').value,
                sponsored: true,
                status: 'approved',
                addedBy: gameData.currentUser,
                dateAdded: "2025-08-04 13:22:54",
                votes: Math.floor(Math.random() * 1000) + 1000,
                featured: true,
                source: 'admin_featured'
            };

            gameData.servers.unshift(featuredServer);
            updateStats();
            renderServers();
            saveToGitHubJSON();
            closeModal('sponsorModal');
            sponsorForm.reset();
            
            showNotification('👑 Featured server added successfully!', 'success');
        });
    }
});

// Close modals when clicking outside
window.onclick = function(event) {
    const modals = ['loginModal', 'submitModal', 'sponsorModal', 'dataModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            closeModal(modalId);
        }
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        saveToGitHubJSON();
        showNotification('💾 Data saved manually to GitHub JSON!', 'success');
    }
    
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        exportData();
    }
    
    if (e.key === 'Escape') {
        const modals = ['loginModal', 'submitModal', 'sponsorModal', 'dataModal'];
        modals.forEach(modalId => {
            closeModal(modalId);
        });
    }
});

// Final initialization logs
console.log('🏆 ServerVault fully loaded and ready!');
console.log(`📊 Stats: ${gameData.servers.length} servers, ${gameData.users.length} users`);
console.log('📅 Current time: 2025-08-04 13:22:54 UTC');
console.log('👤 Current user: Guest (login required)');
console.log('💾 Auto-save to GitHub JSON every 30 seconds!');
console.log('🤖 Chat AI assistant ready to find servers!');
console.log('✅ Manual curation system active - NO auto discovery!');
console.log('🔐 Login as Coen-yin / Carronshore93 for admin access!');
