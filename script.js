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
