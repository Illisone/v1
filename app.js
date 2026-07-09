// ========== SVG АВАТАРКИ ==========
function getAvatarSVG(text, color1, color2) {
    const colors = [
        ['#007aff','#5856d6'],
        ['#ff3b30','#ff9500'],
        ['#34c759','#30d158'],
        ['#ff9500','#ffcc00'],
        ['#af52de','#bf5af2'],
        ['#5856d6','#a2845e'],
        ['#ff2d55','#ff6482'],
        ['#5ac8fa','#64d2ff']
    ];
    const c = colors[Math.abs(text.charCodeAt(0)) % colors.length];
    return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${c[0]}"/><stop offset="100%" stop-color="${c[1]}"/></linearGradient></defs><rect width="200" height="200" fill="url(#g)" rx="100"/><text x="100" y="125" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="90" font-weight="700" fill="white" text-anchor="middle">${text}</text></svg>`)}`;
}

function getPostSVG(emoji, color) {
    return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="600" height="400" fill="${color}"/><text x="300" y="220" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="120" text-anchor="middle">${emoji}</text><text x="300" y="320" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="20" fill="white" text-anchor="middle" opacity="0.7">SibXtrim</text></svg>`)}`;
}

// ========== РОЛИ И ПОЛЬЗОВАТЕЛИ ==========
const USERS = {
    admin: {
        id: 999,
        name: "Администратор",
        avatar: "A",
        avatarUrl: getAvatarSVG("A", '#e74c3c', '#c0392b'),
        role: 'admin'
    },
    manager: {
        id: 998,
        name: "Менеджер",
        avatar: "М",
        avatarUrl: getAvatarSVG("М", '#007aff', '#5856d6'),
        role: 'manager'
    }
};

let currentUser = { 
    id: 1001, 
    name: "Алексей", 
    avatar: "А", 
    avatarUrl: getAvatarSVG("А", '#007aff', '#5856d6'),
    role: 'user'
};

// ========== ДАННЫЕ ТОВАРОВ ==========
let catalogData = {
    snowmobiles: [
        { 
            id: 1, 
            name: 'BRP Skandic LE 24"', 
            price: '2 090 000 ₽', 
            status: 'in_stock', 
            condition: 'new',
            spec: '900 ACE • 95 л.с.', 
            desc: 'Флагманский утилитарный снегоход на платформе REV Gen5. Максимальная проходимость для работы и охоты.',
            chars: { 'Двигатель': 'Rotax 900 ACE', 'Мощность': '95 л.с.', 'Гусеница': '24"', 'Платформа': 'REV Gen5' },
            images: [
                'https://ski-doo.brp.com/content/dam/global/en/ski-doo/my25/studio/sport-utility/skandic/side/SKI-MY25-SKA-SE-900-ACE-Dusty-Navy-000ANSH00-Studio-RSIDE-NA.png',
                'https://picsum.photos/seed/skandic1/600/400',
                'https://picsum.photos/seed/skandic2/600/400'
            ]
        },
        { 
            id: 2, 
            name: 'BRP Skandic SE 24"', 
            price: '2 250 000 ₽', 
            status: 'on_order', 
            condition: 'new',
            spec: '900 ACE • 95 л.с.', 
            desc: 'Утилитарный снегоход с акцентом на комфорт и технологии.',
            chars: { 'Двигатель': 'Rotax 900 ACE', 'Мощность': '95 л.с.', 'Гусеница': '24"', 'Платформа': 'REV Gen5' },
            images: [
                'https://ski-doo.brp.com/content/dam/global/en/ski-doo/my25/studio/sport-utility/skandic/3-4-front/SKI-MY25-SKA-SE-600R-ETEC-Dusty-Navy-000AUSD00-Studio-34FR-NA.png',
                'https://picsum.photos/seed/skandicse1/600/400',
                'https://picsum.photos/seed/skandicse2/600/400'
            ]
        },
        { 
            id: 3, 
            name: 'BRP Expedition LE 24"', 
            price: '2 260 000 ₽', 
            status: 'in_stock', 
            condition: 'new',
            spec: '900 ACE • REV Gen5', 
            desc: 'Универсальный спортивно-утилитарный снегоход. Подвеска uMotion.',
            chars: { 'Двигатель': 'Rotax 900 ACE', 'Подвеска': 'uMotion', 'Гусеница': '24"', 'Платформа': 'REV Gen5' },
            images: [
                'https://www.brp-world.com/content/dam/global/en/ski-doo/my26/studio/crossover/expedition/3-4-front/SKI-MY26-EXP-SE-900-ACE-Turbo-R-Tundra-Green-000AYTJ00-Studio-34FR-NA.png',
                'https://picsum.photos/seed/expedition1/600/400',
                'https://picsum.photos/seed/expedition2/600/400'
            ]
        },
        { 
            id: 4, 
            name: 'BRP Expedition SE 24"', 
            price: '2 350 000 ₽', 
            status: 'on_order', 
            condition: 'new',
            spec: '900 ACE • REV Gen5', 
            desc: 'Премиальный утилитарный снегоход. Подогрев ручек, цифровая панель 7.8".',
            chars: { 'Двигатель': 'Rotax 900 ACE', 'Подогрев': 'Ручек и сиденья', 'Панель': '7.8" Digital', 'Подвеска': 'uMotion' },
            images: [
                'https://www.brp-world.com/content/dam/global/en/ski-doo/my26/studio/crossover/expedition/3-4-front/SKI-MY26-EXP-SE-900-ACE-Turbo-R-Tundra-Green-000AYTJ00-Studio-34FR-NA.png',
                'https://picsum.photos/seed/expeditionse1/600/400',
                'https://picsum.photos/seed/expeditionse2/600/400'
            ]
        },
        { 
            id: 5, 
            name: 'BRP Expedition SE Turbo R', 
            price: '2 690 000 ₽', 
            status: 'on_order', 
            condition: 'new',
            spec: '900 ACE Turbo R • 180 л.с.', 
            desc: 'Абсолютный флагман. 180 лошадей турбированного Rotax.',
            chars: { 'Двигатель': 'Rotax 900 ACE Turbo R', 'Мощность': '180 л.с.', 'Подвеска': 'uMotion', 'Платформа': 'REV Gen5' },
            images: [
                'https://www.brp-world.com/content/dam/global/en/ski-doo/my26/studio/crossover/expedition/3-4-front/SKI-MY26-EXP-SE-900-ACE-Turbo-R-Tundra-Green-000AYTJ00-Studio-34FR-NA.png',
                'https://picsum.photos/seed/turbor1/600/400',
                'https://picsum.photos/seed/turbor2/600/400'
            ]
        },
        { 
            id: 6, 
            name: 'BRP Skandic LE 24" (с пробегом)', 
            price: '1 690 000 ₽', 
            status: 'in_stock', 
            condition: 'used',
            spec: '900 ACE • 95 л.с.', 
            desc: 'Б/у снегоход в отличном состоянии. Пробег 5000 км.',
            chars: { 'Двигатель': 'Rotax 900 ACE', 'Мощность': '95 л.с.', 'Пробег': '5000 км', 'Состояние': 'Отличное' },
            images: [
                'https://ski-doo.brp.com/content/dam/global/en/ski-doo/my25/studio/sport-utility/skandic/side/SKI-MY25-SKA-SE-900-ACE-Dusty-Navy-000ANSH00-Studio-RSIDE-NA.png',
                'https://picsum.photos/seed/usedskandic1/600/400'
            ]
        }
    ],
    atvs: [
        { 
            id: 101, 
            name: 'BRP Outlander MAX XT 650', 
            price: '1 450 000 ₽', 
            status: 'in_stock', 
            condition: 'new',
            spec: '650cc • 62 л.с.', 
            desc: 'Мощный квадроцикл для бездорожья. Двухместная версия.',
            chars: { 'Двигатель': '650cc', 'Мощность': '62 л.с.', 'Привод': 'Полный', 'Коробка': 'CVT' },
            images: [
                'https://picsum.photos/seed/outlander1/600/400',
                'https://picsum.photos/seed/outlander2/600/400',
                'https://picsum.photos/seed/outlander3/600/400'
            ]
        },
        { 
            id: 102, 
            name: 'BRP Outlander XT 850', 
            price: '1 680 000 ₽', 
            status: 'on_order', 
            condition: 'new',
            spec: '850cc • 78 л.с.', 
            desc: 'Спортивный квадроцикл с мощным двигателем.',
            chars: { 'Двигатель': '850cc', 'Мощность': '78 л.с.', 'Привод': 'Полный', 'Коробка': 'CVT' },
            images: [
                'https://picsum.photos/seed/outlander8501/600/400',
                'https://picsum.photos/seed/outlander8502/600/400'
            ]
        }
    ],
    watercraft: [
        { 
            id: 201, 
            name: 'Sea-Doo GTI 170', 
            price: '1 250 000 ₽', 
            status: 'in_stock', 
            condition: 'new',
            spec: '170 л.с. • 3-цилиндровый', 
            desc: 'Отличный гидроцикл для активного отдыха на воде.',
            chars: { 'Двигатель': 'Rotax 3-cylinder', 'Мощность': '170 л.с.', 'Тип': 'Гидроцикл', 'Вместимость': '3 человека' },
            images: [
                'https://picsum.photos/seed/seadoo1/600/400',
                'https://picsum.photos/seed/seadoo2/600/400',
                'https://picsum.photos/seed/seadoo3/600/400'
            ]
        },
        { 
            id: 202, 
            name: 'Sea-Doo RXP-X 300', 
            price: '1 890 000 ₽', 
            status: 'on_order', 
            condition: 'new',
            spec: '300 л.с. • Турбо', 
            desc: 'Спортивный гидроцикл с турбированным двигателем.',
            chars: { 'Двигатель': 'Rotax Turbo', 'Мощность': '300 л.с.', 'Тип': 'Спортивный', 'Макс. скорость': '110 км/ч' },
            images: [
                'https://picsum.photos/seed/rxpx1/600/400',
                'https://picsum.photos/seed/rxpx2/600/400'
            ]
        }
    ],
    accessories: {
        snow: [
            { id: 301, name: 'Защита картера для снегохода', price: '8 500 ₽', status: 'in_stock', spec: 'Алюминий', desc: 'Надёжная защита днища для Ski-Doo.', image: 'https://picsum.photos/seed/snowguard/400/400' },
            { id: 302, name: 'Сумка для снегохода', price: '6 900 ₽', status: 'in_stock', spec: 'Водонепроницаемая', desc: 'Для перевозки вещей на снегоходе.', image: 'https://picsum.photos/seed/snowbag/400/400' }
        ],
        atv: [
            { id: 303, name: 'Защита картера для квадроцикла', price: '7 200 ₽', status: 'in_stock', spec: 'Сталь', desc: 'Защита двигателя от камней и грязи.', image: 'https://picsum.photos/seed/atvguard/400/400' },
            { id: 304, name: 'Багажник для квадроцикла', price: '5 800 ₽', status: 'on_order', spec: 'Алюминий', desc: 'Увеличение грузоподъемности.', image: 'https://picsum.photos/seed/atvrack/400/400' }
        ],
        water: [
            { id: 305, name: 'Чехол для гидроцикла', price: '4 500 ₽', status: 'in_stock', spec: 'Водонепроницаемый', desc: 'Защита гидроцикла от солнца и влаги.', image: 'https://picsum.photos/seed/watercover/400/400' },
            { id: 306, name: 'Спасательный жилет', price: '3 200 ₽', status: 'in_stock', spec: 'Universal', desc: 'Спасательный жилет для безопасного отдыха.', image: 'https://picsum.photos/seed/vest/400/400' }
        ]
    },
    utv: [
        { 
            id: 401, 
            name: 'BRP Can-Am Commander MAX 1000', 
            price: '2 450 000 ₽', 
            status: 'on_order', 
            condition: 'new',
            spec: '1000cc • 100 л.с.', 
            desc: 'Мощный вездеход на 4 пассажира.',
            chars: { 'Двигатель': '1000cc', 'Мощность': '100 л.с.', 'Вместимость': '4 человека', 'Привод': 'Полный' },
            images: [
                'https://picsum.photos/seed/commander1/600/400',
                'https://picsum.photos/seed/commander2/600/400',
                'https://picsum.photos/seed/commander3/600/400'
            ]
        }
    ]
};

let nextProductId = 500;
let favorites = [];

// ========== ПОСТЫ ==========
let posts = [
    {
        id: 1,
        community: "SibXtrim",
        avatar: "SX",
        avatarUrl: getAvatarSVG("SX", '#0063c7', '#004a8f'),
        time: "2 часа назад",
        authorId: 999,
        authorName: "Администратор",
        text: "🎉 Поступление новых снегоходов BRP 2026! В наличии Skandic LE 24\", Expedition LE 24\". Ждем вас в шоуруме!",
        image: getPostSVG("🎉", "#0063c7"),
        likes: 45,
        liked: false,
        comments: [
            { id: 1, user: "Дмитрий", userId: 1002, avatarUrl: getAvatarSVG("Д", '#ff3b30', '#ff9500'), text: "Какие модели в наличии?", time: "1 час назад", replies: [], reaction: null },
            { id: 2, user: "Анна", userId: 1003, avatarUrl: getAvatarSVG("А", '#34c759', '#30d158'), text: "Обязательно заеду на тест-драйв!", time: "30 мин назад", replies: [], reaction: null }
        ]
    },
    {
        id: 2,
        community: "SibXtrim",
        avatar: "SX",
        avatarUrl: getAvatarSVG("SX", '#0063c7', '#004a8f'),
        time: "5 часов назад",
        authorId: 998,
        authorName: "Менеджер",
        text: "🔥 Специальное предложение! При покупке Expedition SE Turbo R — защита картера и сумка в подарок!",
        image: getPostSVG("🔥", "#ff9500"),
        likes: 28,
        liked: false,
        comments: []
    }
];

let nextPostId = 3;
let nextCommentId = 5;

// ========== ОТЗЫВЫ ==========
let reviews = [
    { 
        id: 1, 
        name: 'Александр', 
        avatar: 'А',
        avatarUrl: getAvatarSVG('А', '#007aff', '#5856d6'),
        date: '2 дня назад', 
        stars: 5, 
        text: 'Отличный снегоход! BRP Skandic LE 24" просто зверь по проходимости. Ездили на охоту — довольны на 100%.',
        source: '2GIS'
    },
    { 
        id: 2, 
        name: 'Дмитрий', 
        avatar: 'Д',
        avatarUrl: getAvatarSVG('Д', '#ff3b30', '#ff9500'),
        date: '5 дней назад', 
        stars: 5, 
        text: 'Купил Expedition SE Turbo R — эмоции зашкаливают! 180 лошадей это не шутки. Сервис на высоте.',
        source: 'Сайт'
    },
    { 
        id: 3, 
        name: 'Елена', 
        avatar: 'Е',
        avatarUrl: getAvatarSVG('Е', '#34c759', '#30d158'),
        date: '1 неделя назад', 
        stars: 4, 
        text: 'Хороший выбор снегоходов. Менеджеры проконсультировали, помогли с выбором. Доставка быстрая.',
        source: '2GIS'
    }
];

// ========== ОБЩИЙ ЧАТ ==========
let chatMessages = [
    { id: 1, name: "Алексей", userId: 1001, avatar: "А", avatarUrl: getAvatarSVG("А", '#007aff', '#5856d6'), text: "Всем привет! Интересуют снегоходы BRP", time: "10:30", isAdmin: false, reactions: [], replyTo: null },
    { id: 2, name: "Мария", userId: 2001, avatar: "М", avatarUrl: getAvatarSVG("М", '#af52de', '#bf5af2'), text: "Привет! Я тоже присматриваю Expedition", time: "10:32", isAdmin: false, reactions: [], replyTo: null },
    { id: 3, name: "Администратор", userId: 999, avatar: "A", avatarUrl: getAvatarSVG("A", '#e74c3c', '#c0392b'), text: "Добро пожаловать! Задавайте вопросы по моделям", time: "10:40", isAdmin: true, reactions: [], replyTo: null }
];
let nextChatId = 5;

// ========== ЛИЧНЫЕ ЧАТЫ ==========
let privateChats = {};
let notifications = [];

const contacts = [
    { id: 999, name: "Администратор", avatar: "A", avatarUrl: getAvatarSVG("A", '#e74c3c', '#c0392b'), status: "онлайн", role: 'admin' },
    { id: 998, name: "Менеджер", avatar: "М", avatarUrl: getAvatarSVG("М", '#007aff', '#5856d6'), status: "онлайн", role: 'manager' },
    { id: 2001, name: "Мария", avatar: "М", avatarUrl: getAvatarSVG("М", '#af52de', '#bf5af2'), status: "онлайн", role: 'user' },
    { id: 2002, name: "Дмитрий", avatar: "Д", avatarUrl: getAvatarSVG("Д", '#ff3b30', '#ff9500'), status: "онлайн", role: 'user' },
    { id: 2003, name: "Анна", avatar: "А", avatarUrl: getAvatarSVG("А", '#34c759', '#30d158'), status: "была 5 мин назад", role: 'user' }
];

// ========== СОСТОЯНИЕ ==========
let pushEnabled = true;
let chatNotificationsEnabled = true;
let replyTargetMsg = null;
let activeTab = 'news';
let currentFilter = 'all';
let currentCondition = 'all';
let currentPrivateUserId = null;
let commentReplyTarget = null;
let currentCatalogSection = null;
let currentCatalogSubsection = null;
let sliderIndex = 0;
let currentModalItem = null;
let searchResults = [];

// ========== УТИЛИТЫ ==========
function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2000);
}

function vibrate() {
    if (window.navigator && window.navigator.vibrate) navigator.vibrate(30);
}

function showNotification(title, body) {
    if (pushEnabled && Notification.permission === 'granted') new Notification(title, { body: body });
}

function isAdmin() {
    return currentUser.role === 'admin' || currentUser.role === 'manager';
}

function canDelete() {
    return currentUser.role === 'admin';
}

function addNotification(title, text) {
    notifications.unshift({
        id: Date.now(),
        title: title,
        text: text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        read: false
    });
    updateNotifBadge();
    if (pushEnabled) showNotification(title, text);
}

function updateNotifBadge() {
    const unread = notifications.filter(n => !n.read).length;
    const dot = document.getElementById('notifDot');
    if (dot) {
        dot.style.display = unread > 0 ? 'block' : 'none';
    }
}

// ========== ВИДЕО ФОН ==========
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hero-video');
    if (video) {
        video.addEventListener('error', function() {
            console.log('Видео не загрузилось');
        });
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                video.pause();
            } else {
                video.play();
            }
        });
    }
});

// ========== ПОЛУЧЕНИЕ ТОВАРОВ ==========
function getAllItems() {
    const items = [];
    for (const key in catalogData) {
        if (key === 'accessories') {
            for (const sub in catalogData.accessories) {
                catalogData.accessories[sub].forEach(a => {
                    a._category = sub;
                    a._type = 'accessory';
                    items.push(a);
                });
            }
        } else {
            catalogData[key].forEach(item => {
                item._type = key;
                items.push(item);
            });
        }
    }
    return items;
}

function getItemsByType(type) {
    const items = [];
    if (type === 'accessories') {
        for (const sub in catalogData.accessories) {
            catalogData.accessories[sub].forEach(a => {
                a._category = sub;
                a._type = 'accessory';
                items.push(a);
            });
        }
    } else if (catalogData[type]) {
        catalogData[type].forEach(item => {
            item._type = type;
            items.push(item);
        });
    }
    return items;
}

function getAccessoriesBySub(sub) {
    return (catalogData.accessories[sub] || []).map(a => {
        a._category = sub;
        a._type = 'accessory';
        return a;
    });
}

function getSectionLabel(section) {
    const labels = {
        'snowmobiles': 'Снегоходы',
        'atvs': 'Квадроциклы',
        'watercraft': 'Гидроциклы',
        'accessories': 'Аксессуары',
        'utv': 'Вездеходы'
    };
    return labels[section] || section;
}

function getSectionIcon(section) {
    const icons = {
        'snowmobiles': 'fa-snowmobile',
        'atvs': 'fa-motorcycle',
        'watercraft': 'fa-water',
        'accessories': 'fa-tools',
        'utv': 'fa-car'
    };
    return icons[section] || 'fa-box';
}

// ========== РЕНДЕР КАТАЛОГА ==========
function renderCatalogMenu() {
    const sections = [
        { id: 'snowmobiles', icon: '❄', label: 'Снегоходы' },
        { id: 'atvs', icon: '🏍', label: 'Квадроциклы' },
        { id: 'watercraft', icon: '🌊', label: 'Гидроциклы' },
        { id: 'accessories', icon: '🛠', label: 'Аксессуары' },
        { id: 'utv', icon: '🚙', label: 'Вездеходы' }
    ];
    
    let html = `
        <div style="margin-bottom:12px;">
            <h2 style="font-size:18px;color:white;margin-bottom:12px;"><i class="fas fa-th-large" style="color:#0063c7;"></i> Выберите раздел</h2>
            <div class="catalog-menu">
    `;
    
    for (const section of sections) {
        let count = 0;
        if (section.id === 'accessories') {
            for (const sub in catalogData.accessories) {
                count += catalogData.accessories[sub].length;
            }
        } else if (catalogData[section.id]) {
            count = catalogData[section.id].length;
        }
        
        html += `
            <div class="catalog-menu-item" data-section="${section.id}">
                <span class="icon">${section.icon}</span>
                <div class="label">${section.label}</div>
                <div class="count">${count} шт.</div>
            </div>
        `;
    }
    
    html += `</div></div>`;
    return html;
}

function renderCatalogSection(section) {
    let items = [];
    let title = getSectionLabel(section);
    let icon = getSectionIcon(section);
    
    if (section === 'accessories') {
        if (currentCatalogSubsection) {
            items = getAccessoriesBySub(currentCatalogSubsection);
            const subLabels = { 'snow': 'Снежные', 'atv': 'Квадро', 'water': 'Гидро' };
            title = 'Аксессуары — ' + (subLabels[currentCatalogSubsection] || '');
        } else {
            items = getItemsByType('accessories');
        }
    } else if (catalogData[section]) {
        items = catalogData[section];
    }
    
    // Фильтр по статусу
    if (currentFilter === 'in_stock') items = items.filter(i => i.status === 'in_stock');
    else if (currentFilter === 'on_order') items = items.filter(i => i.status === 'on_order');
    
    // Фильтр по состоянию (только для техники)
    if (currentCondition !== 'all' && section !== 'accessories') {
        items = items.filter(i => i.condition === currentCondition);
    }
    
    let html = `
        <div class="catalog-section-header">
            <button class="back-btn" id="catalogBackBtn"><i class="fas fa-arrow-left"></i></button>
            <div class="title"><i class="fas ${icon}"></i> ${title}</div>
            ${isAdmin() ? `<button class="admin-panel-btn glass-button" onclick="showAddProduct('${section}')"><i class="fas fa-plus"></i></button>` : ''}
        </div>
    `;
    
    // Подразделы для аксессуаров
    if (section === 'accessories') {
        html += `
            <div class="filter-bar" style="margin-bottom:10px;">
                <button class="filter-btn ${!currentCatalogSubsection ? 'active' : ''}" data-sub="all">Все</button>
                <button class="filter-btn ${currentCatalogSubsection === 'snow' ? 'active' : ''}" data-sub="snow">❄ Снежные</button>
                <button class="filter-btn ${currentCatalogSubsection === 'atv' ? 'active' : ''}" data-sub="atv">🏍 Квадро</button>
                <button class="filter-btn ${currentCatalogSubsection === 'water' ? 'active' : ''}" data-sub="water">🌊 Гидро</button>
            </div>
        `;
    }
    
    // Фильтр по наличию
    html += `
        <div class="filter-bar" style="margin-bottom:6px;">
            <button class="filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">Все</button>
            <button class="filter-btn ${currentFilter === 'in_stock' ? 'active' : ''}" data-filter="in_stock"><i class="fas fa-check-circle" style="color:#34c759;"></i> В наличии</button>
            <button class="filter-btn ${currentFilter === 'on_order' ? 'active' : ''}" data-filter="on_order"><i class="fas fa-clock" style="color:#ff9500;"></i> Под заказ</button>
        </div>
    `;
    
    // Фильтр с бегунком (состояние) - только для техники
    if (section !== 'accessories') {
        html += `
            <div class="filter-slider-row">
                <span class="filter-label"><i class="fas fa-sliders-h"></i> Состояние</span>
                <div class="filter-options">
                    <button class="filter-opt ${currentCondition === 'all' ? 'active' : ''}" data-cond="all">Все</button>
                    <button class="filter-opt ${currentCondition === 'new' ? 'active' : ''}" data-cond="new">🆕 Новый</button>
                    <button class="filter-opt ${currentCondition === 'used' ? 'active' : ''}" data-cond="used">📋 С пробегом</button>
                </div>
            </div>
        `;
    }
    
    // Количество
    html += `
        <div style="font-size:12px;color:rgba(255,255,255,0.3);margin-bottom:10px;">Найдено: ${items.length} шт.</div>
    `;
    
    if (!items.length) {
        html += `
            <div style="text-align:center;padding:40px 20px;color:rgba(255,255,255,0.3);font-size:13px;">
                <i class="fas fa-box-open" style="font-size:32px;display:block;margin-bottom:10px;color:rgba(255,255,255,0.1);"></i>
                Товаров не найдено
            </div>
        `;
        return html;
    }
    
    for (let item of items) {
        const statusText = item.status === 'in_stock' ? 'В наличии' : 'Под заказ';
        const statusClass = item.status === 'in_stock' ? 'in-stock' : 'on-order';
        const condText = item.condition === 'new' ? 'Новый' : item.condition === 'used' ? 'С пробегом' : '';
        const imgSrc = item.images ? item.images[0] : (item.image || 'https://picsum.photos/seed/default/400/400');
        const isFav = favorites.includes(item.id);
        
        html += `
            <div class="product-card" data-id="${item.id}" data-section="${section}">
                <div class="status-tag ${statusClass}">${statusText}</div>
                <div class="product-content">
                    <img class="product-img" src="${imgSrc}" alt="${item.name}">
                    <div class="product-info">
                        <div class="product-name">${item.name}</div>
                        <div class="product-price">${item.price}</div>
                        <div class="product-spec">${item.spec || ''} ${condText ? '• ' + condText : ''}</div>
                        <div class="product-desc-short">${item.desc ? item.desc.substring(0, 50) + '...' : ''}</div>
                        ${isFav ? '<span style="font-size:10px;color:#ff3b30;"><i class="fas fa-heart"></i> В избранном</span>' : ''}
                    </div>
                </div>
            </div>
        `;
    }
    
    return html;
}

// ========== РЕНДЕР НОВОСТЕЙ ==========
function renderFeed() {
    let html = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <h2 style="font-size:20px;color:white;"><i class="fas fa-newspaper" style="color:#0063c7;"></i> Поступления</h2>
            ${isAdmin() ? `<button class="admin-panel-btn glass-button" onclick="showAddPost()"><i class="fas fa-plus"></i> Создать пост</button>` : ''}
        </div>
    `;
    
    for (let post of posts) {
        const likeIcon = post.liked ? 'fas' : 'far';
        html += `
            <div class="post-card" data-post-id="${post.id}">
                <div class="post-header">
                    <img class="post-avatar-img" src="${post.avatarUrl}" alt="">
                    <div>
                        <div class="post-community">${post.community}</div>
                        <div class="post-time">${post.time} ${isAdmin() ? `— ${post.authorName}` : ''}</div>
                    </div>
                    ${isAdmin() ? `<div style="margin-left:auto;display:flex;gap:6px;">
                        <span style="font-size:12px;color:#0063c7;cursor:pointer;" onclick="editPost(${post.id})"><i class="fas fa-edit"></i></span>
                        <span style="font-size:12px;color:#ff3b30;cursor:pointer;" onclick="deletePost(${post.id})"><i class="fas fa-trash"></i></span>
                    </div>` : ''}
                </div>
                <img class="post-image" src="${post.image}" alt="">
                <div class="post-text">${post.text}</div>
                <div class="post-stats">
                    <span class="like-post" data-id="${post.id}"><i class="${likeIcon} fa-heart"></i> <span id="likes-${post.id}">${post.likes}</span></span>
                    <span class="toggle-comments" data-id="${post.id}"><i class="far fa-comment"></i> <span id="comments-count-${post.id}">${post.comments.length}</span></span>
                </div>
                <div class="comments-section" id="comments-${post.id}">
        `;
        
        for (let c of post.comments) {
            html += `
                <div class="comment-item" data-comment-id="${c.id}">
                    <div class="comment-header">
                        <img class="comment-avatar-img" src="${c.avatarUrl || getAvatarSVG(c.user[0], '#007aff', '#5856d6')}" alt="">
                        <div class="comment-meta">
                            <span class="comment-user">${c.user}</span>
                            <span class="comment-time">${c.time}</span>
                        </div>
                        ${canDelete() ? `<span style="margin-left:auto;font-size:11px;color:#ff3b30;cursor:pointer;" onclick="deleteComment(${post.id}, ${c.id})"><i class="fas fa-times"></i></span>` : ''}
                    </div>
                    <div class="comment-text">${c.text}</div>
                    ${c.reaction ? `<div class="comment-reaction">${c.reaction}</div>` : ''}
                    <div class="comment-actions">
                        <span class="comment-action-link" data-post="${post.id}" data-comment="${c.id}" data-user="${c.user}"><i class="fas fa-reply"></i> Ответить</span>
                        <span class="comment-action-link comment-react-btn" data-post="${post.id}" data-comment="${c.id}"><i class="far fa-smile"></i></span>
                    </div>
            `;
            if (c.replies && c.replies.length) {
                for (let r of c.replies) {
                    html += `<div class="comment-replies"><div class="comment-header"><span class="comment-user">${r.user}</span><span class="comment-time">${r.time}</span></div><div class="comment-text">${r.text}</div></div>`;
                }
            }
            html += `</div>`;
        }
        
        html += `
                    <div class="comment-form">
                        <div class="comment-reply-bar" id="comment-reply-bar-${post.id}" style="display:none;">
                            <span><i class="fas fa-reply"></i> <span id="comment-reply-text-${post.id}"></span></span>
                            <i class="fas fa-times" id="comment-cancel-reply-${post.id}"></i>
                        </div>
                        <div class="comment-input-row">
                            <input type="text" class="comment-input" placeholder="Написать комментарий..." id="comment-input-${post.id}">
                            <button class="comment-send" data-id="${post.id}"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    return html;
}

// ========== РЕНДЕР ОТЗЫВОВ ==========
function renderReviews() {
    let html = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <h2 style="font-size:20px;color:white;"><i class="fas fa-star" style="color:#ff9500;"></i> Отзывы</h2>
            ${isAdmin() ? `<button class="admin-panel-btn glass-button" onclick="showAddReview()"><i class="fas fa-plus"></i> Добавить</button>` : ''}
        </div>
        <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
            <span style="font-size:12px;color:rgba(255,255,255,0.4);"><i class="fas fa-star" style="color:#ff9500;"></i> ${reviews.length} отзывов</span>
            <span style="font-size:12px;color:rgba(255,255,255,0.4);">|</span>
            <span style="font-size:12px;color:rgba(255,255,255,0.4);"><i class="fas fa-check-circle" style="color:#0063c7;"></i> Из 2GIS: ${reviews.filter(r => r.source === '2GIS').length}</span>
        </div>
    `;
    
    for (let r of reviews) {
        const stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
        html += `
            <div class="review-card">
                <div class="review-header">
                    <img class="review-avatar" src="${r.avatarUrl}" alt="">
                    <div class="review-name">${r.name}</div>
                    <div class="review-date">${r.date}</div>
                    ${isAdmin() ? `<span style="font-size:11px;color:#ff3b30;cursor:pointer;" onclick="deleteReview(${r.id})"><i class="fas fa-times"></i></span>` : ''}
                </div>
                <div class="review-stars">${stars}</div>
                <div class="review-text">${r.text}</div>
                <div class="review-source"><i class="fas fa-info-circle"></i> Источник: ${r.source}</div>
            </div>
        `;
    }
    
    if (!reviews.length) {
        html += `<div style="text-align:center;color:rgba(255,255,255,0.3);padding:40px 0;font-size:13px;">Пока нет отзывов. Будьте первым!</div>`;
    }
    
    return html;
}

// ========== РЕНДЕР ЧАТА ==========
function renderChat() {
    let html = `
        <div class="chat-container">
            <div class="chat-header-bar">
                <h2><i class="fas fa-comments"></i> Общий чат</h2>
                <button class="chat-contacts-btn" id="contactsBtn"><i class="fas fa-user-friends"></i></button>
            </div>
            <p style="font-size:11px; color:rgba(255,255,255,0.3); margin:0 0 10px 0;">Нажмите на аватар для личного сообщения</p>
            <div class="chat-messages-area" id="chatMessagesArea">
    `;
    
    for (let m of chatMessages) {
        let replyHtml = '';
        if (m.replyTo) {
            replyHtml = `<div class="chat-reply-preview"><i class="fas fa-reply"></i> ${m.replyTo.name}: ${m.replyTo.text.substring(0, 40)}</div>`;
        }
        let reactionsHtml = '';
        if (m.reactions && m.reactions.length) {
            const counts = {};
            for (let r of m.reactions) counts[r] = (counts[r] || 0) + 1;
            reactionsHtml = '<div class="chat-reactions">';
            for (let [r, c] of Object.entries(counts)) reactionsHtml += `<span class="chat-reaction" data-msg="${m.id}" data-reaction="${r}">${r} ${c}</span>`;
            reactionsHtml += '</div>';
        }
        
        html += `
            <div class="chat-message" data-msg-id="${m.id}">
                <img class="chat-avatar-img" src="${m.avatarUrl}" data-name="${m.name}" data-avatar="${m.avatar}" data-userid="${m.userId}" alt="">
                <div class="chat-bubble">
                    <div class="chat-name">${m.name} ${m.isAdmin ? '<i class="fas fa-check-circle"></i>' : ''}</div>
                    ${replyHtml}
                    <div class="chat-text">${m.text}</div>
                    <div class="chat-time">${m.time}</div>
                    ${reactionsHtml}
                    <div class="chat-actions-bottom">
                        <span class="chat-action-link" data-id="${m.id}" data-name="${m.name}" data-text="${m.text.replace(/"/g, '&quot;')}"><i class="fas fa-reply"></i> Ответить</span>
                        <span class="chat-action-link chat-react-btn" data-id="${m.id}"><i class="far fa-smile"></i></span>
                        ${canDelete() ? `<span class="chat-action-link admin-delete-btn" onclick="deleteChatMessage(${m.id})"><i class="fas fa-trash"></i> Удалить</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
    
    html += `
            </div>
            <div class="chat-input-wrapper">
                <div id="chatReplyPreviewBar" class="chat-reply-preview-bar" style="display:none;">
                    <span><i class="fas fa-reply"></i> <span id="replyPreviewText"></span></span>
                    <i class="fas fa-times" id="cancelReplyBtn"></i>
                </div>
                <div class="chat-fixed-input">
                    <input type="text" class="chat-input" id="chatInput" placeholder="Сообщение...">
                    <button class="chat-send-btn" id="sendChatBtn"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    `;
    return html;
}

// ========== РЕНДЕР ПРОФИЛЯ ==========
function renderProfile() {
    const totalLikes = posts.reduce((s, p) => s + p.likes, 0);
    const totalComments = posts.reduce((s, p) => s + p.comments.length, 0);
    return `
        <div class="profile-header">
            <img class="profile-avatar-img" src="${currentUser.avatarUrl}" alt="">
            <div class="profile-name">${currentUser.name}</div>
            <div class="profile-id">ID: ${currentUser.id} • Роль: ${currentUser.role}</div>
        </div>
        <div class="stats-grid">
            <div class="stat-card"><div class="stat-number">${posts.length}</div><div class="stat-label">постов</div></div>
            <div class="stat-card"><div class="stat-number">${totalLikes}</div><div class="stat-label">лайков</div></div>
            <div class="stat-card"><div class="stat-number">${totalComments}</div><div class="stat-label">комментов</div></div>
            <div class="stat-card"><div class="stat-number">${favorites.length}</div><div class="stat-label">избранное</div></div>
        </div>
        ${isAdmin() ? `
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:12px;margin-bottom:16px;display:flex;gap:8px;flex-wrap:wrap;">
                <button class="admin-panel-btn glass-button" onclick="switchRole('admin')"><i class="fas fa-user-shield"></i> Админ</button>
                <button class="admin-panel-btn glass-button" onclick="switchRole('manager')"><i class="fas fa-user-tie"></i> Менеджер</button>
                <button class="admin-panel-btn glass-button" onclick="switchRole('user')"><i class="fas fa-user"></i> Пользователь</button>
                <button class="admin-panel-btn glass-button danger" onclick="clearAllData()"><i class="fas fa-database"></i> Очистить данные</button>
            </div>
        ` : ''}
        ${favorites.length ? `
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:12px;margin-bottom:12px;">
                <div style="font-weight:600;color:white;margin-bottom:8px;"><i class="fas fa-heart" style="color:#ff3b30;"></i> Избранное (${favorites.length})</div>
                ${favorites.map(id => {
                    const allItems = getAllItems();
                    const item = allItems.find(i => i.id === id);
                    return item ? `<div style="display:flex;gap:10px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
                        <img src="${item.images ? item.images[0] : item.image}" style="width:40px;height:40px;border-radius:8px;object-fit:cover;">
                        <div><div style="font-size:13px;color:white;">${item.name}</div><div style="font-size:11px;color:#0063c7;">${item.price}</div></div>
                        <span style="margin-left:auto;font-size:11px;color:#ff3b30;cursor:pointer;" onclick="removeFavorite(${id})"><i class="fas fa-times"></i></span>
                    </div>` : '';
                }).join('')}
            </div>
        ` : ''}
        <div class="settings-card">
            <div class="setting-row">
                <div class="setting-left"><i class="fas fa-bell"></i><span>Push-уведомления</span></div>
                <div class="toggle-switch ${pushEnabled ? 'active' : ''}" id="pushToggle"></div>
            </div>
            <div class="setting-row">
                <div class="setting-left"><i class="fas fa-comment-dots"></i><span>Уведомления чата</span></div>
                <div class="toggle-switch ${chatNotificationsEnabled ? 'active' : ''}" id="chatNotificationsToggle"></div>
            </div>
        </div>
        <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.04);border-radius:16px;padding:12px;text-align:center;font-size:11px;color:rgba(255,255,255,0.2);">
            SibXtrim © 2026 — официальный дилер BRP
        </div>
    `;
}

// ========== АДМИН-ФУНКЦИИ ==========
function switchRole(role) {
    const roles = {
        admin: { id: 999, name: "Администратор", avatar: "A", avatarUrl: getAvatarSVG("A", '#e74c3c', '#c0392b') },
        manager: { id: 998, name: "Менеджер", avatar: "М", avatarUrl: getAvatarSVG("М", '#007aff', '#5856d6') },
        user: { id: 1001, name: "Алексей", avatar: "А", avatarUrl: getAvatarSVG("А", '#007aff', '#5856d6') }
    };
    const data = roles[role];
    if (data) {
        currentUser.id = data.id;
        currentUser.name = data.name;
        currentUser.avatar = data.avatar;
        currentUser.avatarUrl = data.avatarUrl;
        currentUser.role = role;
        showToast(`Переключено на ${role}`);
        loadTab(activeTab);
        document.getElementById('adminPanelBtn').style.display = isAdmin() ? 'block' : 'none';
    }
}

function showAddProduct(type) {
    const modal = document.getElementById('adminModal');
    const title = document.getElementById('adminModalTitle');
    const body = document.getElementById('adminModalBody');
    
    title.textContent = `Добавить товар`;
    body.innerHTML = `
        <div class="admin-form-group">
            <label>Название</label>
            <input type="text" id="adminProductName" placeholder="Название товара">
        </div>
        <div class="admin-form-group">
            <label>Цена</label>
            <input type="text" id="adminProductPrice" placeholder="1 000 000 ₽">
        </div>
        <div class="admin-form-group">
            <label>Характеристики</label>
            <input type="text" id="adminProductSpec" placeholder="900cc / 165 л.с.">
        </div>
        <div class="admin-form-group">
            <label>Описание</label>
            <textarea id="adminProductDesc" placeholder="Подробное описание"></textarea>
        </div>
        <div class="admin-form-group">
            <label>Статус</label>
            <select id="adminProductStatus">
                <option value="in_stock">В наличии</option>
                <option value="on_order">Под заказ</option>
            </select>
        </div>
        <div class="admin-form-group">
            <label>Состояние</label>
            <select id="adminProductCondition">
                <option value="new">Новый</option>
                <option value="used">С пробегом</option>
            </select>
        </div>
        <div class="admin-form-group">
            <label>Изображение (URL)</label>
            <input type="text" id="adminProductImage" placeholder="https://picsum.photos/seed/.../400/400">
        </div>
        <button class="admin-submit-btn glass-button" onclick="addProduct('${type}')"><i class="fas fa-plus"></i> Добавить</button>
    `;
    modal.classList.add('show');
}

function addProduct(type) {
    const name = document.getElementById('adminProductName').value.trim();
    const price = document.getElementById('adminProductPrice').value.trim();
    const spec = document.getElementById('adminProductSpec').value.trim();
    const desc = document.getElementById('adminProductDesc').value.trim();
    const status = document.getElementById('adminProductStatus').value;
    const condition = document.getElementById('adminProductCondition').value;
    const image = document.getElementById('adminProductImage').value.trim() || `https://picsum.photos/seed/${Date.now()}/400/400`;

    if (!name || !price) {
        showToast('Заполните название и цену');
        return;
    }

    const newItem = {
        id: nextProductId++,
        name,
        price,
        spec: spec || 'Нет данных',
        desc: desc || 'Описание отсутствует',
        status,
        condition: condition || 'new',
        images: [image]
    };

    if (type === 'accessories' || type === 'accessory') {
        if (!catalogData.accessories.snow) catalogData.accessories.snow = [];
        catalogData.accessories.snow.push(newItem);
    } else if (catalogData[type]) {
        catalogData[type].push(newItem);
    } else {
        if (!catalogData.snowmobiles) catalogData.snowmobiles = [];
        catalogData.snowmobiles.push(newItem);
    }

    document.getElementById('adminModal').classList.remove('show');
    showToast('Товар добавлен!');
    addNotification('Новый товар', `${name} добавлен в каталог`);
    loadTab(activeTab);
}

function showAddPost() {
    const modal = document.getElementById('adminModal');
    const title = document.getElementById('adminModalTitle');
    const body = document.getElementById('adminModalBody');
    
    title.textContent = 'Создать пост';
    body.innerHTML = `
        <div class="admin-form-group">
            <label>Текст поста</label>
            <textarea id="adminPostText" placeholder="Что нового?"></textarea>
        </div>
        <div class="admin-form-group">
            <label>Эмодзи (для картинки)</label>
            <input type="text" id="adminPostEmoji" placeholder="🎉" value="📢">
        </div>
        <div class="admin-form-group">
            <label>Цвет фона</label>
            <input type="text" id="adminPostColor" placeholder="#0063c7" value="#0063c7">
        </div>
        <button class="admin-submit-btn glass-button" onclick="addPost()"><i class="fas fa-plus"></i> Опубликовать</button>
    `;
    modal.classList.add('show');
}

function addPost() {
    const text = document.getElementById('adminPostText').value.trim();
    const emoji = document.getElementById('adminPostEmoji').value.trim() || '📢';
    const color = document.getElementById('adminPostColor').value.trim() || '#0063c7';

    if (!text) {
        showToast('Введите текст поста');
        return;
    }

    const newPost = {
        id: nextPostId++,
        community: "SibXtrim",
        avatar: "SX",
        avatarUrl: getAvatarSVG("SX", '#0063c7', '#004a8f'),
        time: "только что",
        authorId: currentUser.id,
        authorName: currentUser.name,
        text: text,
        image: getPostSVG(emoji, color),
        likes: 0,
        liked: false,
        comments: []
    };
    posts.unshift(newPost);

    document.getElementById('adminModal').classList.remove('show');
    showToast('Пост опубликован!');
    addNotification('Новый пост', `${currentUser.name}: ${text.substring(0, 50)}...`);
    loadTab('news');
}

function editPost(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    const modal = document.getElementById('adminModal');
    const title = document.getElementById('adminModalTitle');
    const body = document.getElementById('adminModalBody');
    
    title.textContent = 'Редактировать пост';
    body.innerHTML = `
        <div class="admin-form-group">
            <label>Текст поста</label>
            <textarea id="adminPostText">${post.text}</textarea>
        </div>
        <button class="admin-submit-btn glass-button" onclick="savePost(${postId})"><i class="fas fa-save"></i> Сохранить</button>
    `;
    modal.classList.add('show');
}

function savePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    const text = document.getElementById('adminPostText').value.trim();
    if (!text) { showToast('Введите текст'); return; }
    post.text = text;
    document.getElementById('adminModal').classList.remove('show');
    showToast('Пост обновлён!');
    loadTab('news');
}

function deletePost(postId) {
    if (!confirm('Удалить этот пост?')) return;
    posts = posts.filter(p => p.id !== postId);
    showToast('Пост удалён');
    loadTab('news');
}

function deleteComment(postId, commentId) {
    if (!canDelete()) return;
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    post.comments = post.comments.filter(c => c.id !== commentId);
    refreshComments(postId);
    showToast('Комментарий удалён');
}

function deleteChatMessage(msgId) {
    if (!canDelete()) return;
    if (!confirm('Удалить это сообщение?')) return;
    chatMessages = chatMessages.filter(m => m.id !== msgId);
    loadTab('chat');
    showToast('Сообщение удалено');
}

function clearAllData() {
    if (!confirm('Очистить все данные? Это действие необратимо!')) return;
    if (!canDelete()) return;
    posts = [];
    chatMessages = [];
    catalogData = {
        snowmobiles: [],
        atvs: [],
        watercraft: [],
        accessories: { snow: [], atv: [], water: [] },
        utv: []
    };
    privateChats = {};
    notifications = [];
    reviews = [];
    favorites = [];
    showToast('Все данные очищены');
    loadTab('news');
}

function showAddReview() {
    const modal = document.getElementById('adminModal');
    const title = document.getElementById('adminModalTitle');
    const body = document.getElementById('adminModalBody');
    
    title.textContent = 'Добавить отзыв';
    body.innerHTML = `
        <div class="admin-form-group">
            <label>Имя</label>
            <input type="text" id="adminReviewName" placeholder="Имя пользователя">
        </div>
        <div class="admin-form-group">
            <label>Текст отзыва</label>
            <textarea id="adminReviewText" placeholder="Текст отзыва"></textarea>
        </div>
        <div class="admin-form-group">
            <label>Оценка (звёзды)</label>
            <select id="adminReviewStars">
                <option value="5">5 ★★★★★</option>
                <option value="4">4 ★★★★</option>
                <option value="3">3 ★★★</option>
                <option value="2">2 ★★</option>
                <option value="1">1 ★</option>
            </select>
        </div>
        <div class="admin-form-group">
            <label>Источник</label>
            <select id="adminReviewSource">
                <option value="2GIS">2GIS</option>
                <option value="Сайт">Сайт</option>
                <option value="Приложение">Приложение</option>
            </select>
        </div>
        <button class="admin-submit-btn glass-button" onclick="addReview()"><i class="fas fa-plus"></i> Добавить</button>
    `;
    modal.classList.add('show');
}

function addReview() {
    const name = document.getElementById('adminReviewName').value.trim();
    const text = document.getElementById('adminReviewText').value.trim();
    const stars = parseInt(document.getElementById('adminReviewStars').value);
    const source = document.getElementById('adminReviewSource').value;

    if (!name || !text) {
        showToast('Заполните имя и текст');
        return;
    }

    const newReview = {
        id: reviews.length + 100,
        name: name,
        avatar: name[0].toUpperCase(),
        avatarUrl: getAvatarSVG(name[0].toUpperCase(), '#007aff', '#5856d6'),
        date: 'только что',
        stars: stars,
        text: text,
        source: source
    };
    reviews.push(newReview);

    document.getElementById('adminModal').classList.remove('show');
    showToast('Отзыв добавлен!');
    addNotification('Новый отзыв', `${name}: ${text.substring(0, 40)}...`);
    loadTab('reviews');
}

function deleteReview(id) {
    if (!canDelete()) return;
    if (!confirm('Удалить этот отзыв?')) return;
    reviews = reviews.filter(r => r.id !== id);
    showToast('Отзыв удалён');
    loadTab('reviews');
}

// ========== ИЗБРАННОЕ ==========
function toggleFavorite(itemId) {
    const index = favorites.indexOf(itemId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('Удалено из избранного');
    } else {
        favorites.push(itemId);
        showToast('Добавлено в избранное');
        vibrate();
    }
    updateFavoriteBtn();
}

function removeFavorite(itemId) {
    favorites = favorites.filter(id => id !== itemId);
    showToast('Удалено из избранного');
    loadTab('profile');
}

function updateFavoriteBtn() {
    const btn = document.getElementById('favoriteBtn');
    if (!btn || !currentModalItem) return;
    const isFav = favorites.includes(currentModalItem.id);
    btn.innerHTML = isFav ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
    btn.classList.toggle('active', isFav);
}

// ========== ЛАЙКИ ==========
function handleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
        document.getElementById(`likes-${postId}`).textContent = post.likes;
        const icon = document.querySelector(`.like-post[data-id="${postId}"] i`);
        if (icon) icon.className = post.liked ? 'fas fa-heart' : 'far fa-heart';
        vibrate();
    }
}

function toggleComments(postId) {
    document.getElementById(`comments-${postId}`).classList.toggle('show');
}

// ========== КОММЕНТАРИИ ==========
function sendComment(postId) {
    const input = document.getElementById(`comment-input-${postId}`);
    const text = input.value.trim();
    if (!text) return;

    const post = posts.find(p => p.id === postId);

    if (commentReplyTarget && commentReplyTarget.postId === postId) {
        const comment = post.comments.find(c => c.id === commentReplyTarget.commentId);
        if (comment) {
            if (!comment.replies) comment.replies = [];
            comment.replies.push({ user: currentUser.name, text: text, time: "сейчас" });
            refreshComments(postId);
            showToast('Ответ добавлен');
        }
        clearCommentReply(postId);
    } else {
        const newComment = { 
            id: nextCommentId++, 
            user: currentUser.name, 
            userId: currentUser.id,
            avatarUrl: currentUser.avatarUrl, 
            text: text, 
            time: "сейчас", 
            replies: [], 
            reaction: null 
        };
        post.comments.push(newComment);
        refreshComments(postId);
    }

    input.value = '';
    document.getElementById(`comments-count-${postId}`).textContent = post.comments.length;
    vibrate();
}

function replyToComment(postId, commentId, userName) {
    commentReplyTarget = { postId, commentId, userName };
    const bar = document.getElementById(`comment-reply-bar-${postId}`);
    const text = document.getElementById(`comment-reply-text-${postId}`);
    text.textContent = `Ответ ${userName}`;
    bar.style.display = 'flex';
    document.getElementById(`comment-input-${postId}`).focus();
}

function clearCommentReply(postId) {
    commentReplyTarget = null;
    const bar = document.getElementById(`comment-reply-bar-${postId}`);
    if (bar) bar.style.display = 'none';
}

function addCommentReaction(postId, commentId, reaction) {
    const post = posts.find(p => p.id === postId);
    const comment = post.comments.find(c => c.id === commentId);
    if (comment) {
        comment.reaction = reaction;
        refreshComments(postId);
        vibrate();
    }
}

function refreshComments(postId) {
    const post = posts.find(p => p.id === postId);
    const commentsDiv = document.getElementById(`comments-${postId}`);
    let commentsHtml = '';
    for (let c of post.comments) {
        commentsHtml += `
            <div class="comment-item" data-comment-id="${c.id}">
                <div class="comment-header">
                    <img class="comment-avatar-img" src="${c.avatarUrl || getAvatarSVG(c.user[0], '#007aff', '#5856d6')}" alt="">
                    <div class="comment-meta">
                        <span class="comment-user">${c.user}</span>
                        <span class="comment-time">${c.time}</span>
                    </div>
                    ${canDelete() ? `<span style="margin-left:auto;font-size:11px;color:#ff3b30;cursor:pointer;" onclick="deleteComment(${postId}, ${c.id})"><i class="fas fa-times"></i></span>` : ''}
                </div>
                <div class="comment-text">${c.text}</div>
                ${c.reaction ? `<div class="comment-reaction">${c.reaction}</div>` : ''}
                <div class="comment-actions">
                    <span class="comment-action-link" data-post="${postId}" data-comment="${c.id}" data-user="${c.user}"><i class="fas fa-reply"></i> Ответить</span>
                    <span class="comment-action-link comment-react-btn" data-post="${postId}" data-comment="${c.id}"><i class="far fa-smile"></i></span>
                </div>
        `;
        if (c.replies && c.replies.length) {
            for (let r of c.replies) {
                commentsHtml += `<div class="comment-replies"><div class="comment-header"><span class="comment-user">${r.user}</span><span class="comment-time">${r.time}</span></div><div class="comment-text">${r.text}</div></div>`;
            }
        }
        commentsHtml += `</div>`;
    }
    commentsHtml += `
        <div class="comment-form">
            <div class="comment-reply-bar" id="comment-reply-bar-${postId}" style="display:none;">
                <span><i class="fas fa-reply"></i> <span id="comment-reply-text-${postId}"></span></span>
                <i class="fas fa-times" id="comment-cancel-reply-${postId}"></i>
            </div>
            <div class="comment-input-row">
                <input type="text" class="comment-input" placeholder="Написать комментарий..." id="comment-input-${postId}">
                <button class="comment-send" data-id="${postId}"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;
    commentsDiv.innerHTML = commentsHtml;
    attachCommentEvents();
}

// ========== ЧАТ ==========
function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    let replyToData = null;
    if (replyTargetMsg && replyTargetMsg.type === 'chat') {
        const targetMsg = chatMessages.find(m => m.id === replyTargetMsg.msgId);
        if (targetMsg) {
            replyToData = { name: targetMsg.name, text: targetMsg.text };
        }
    }

    const newMsg = {
        id: nextChatId++,
        name: currentUser.name,
        userId: currentUser.id,
        avatar: currentUser.avatar,
        avatarUrl: currentUser.avatarUrl,
        text: text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isAdmin: isAdmin(),
        reactions: [],
        replyTo: replyToData
    };
    chatMessages.push(newMsg);

    const area = document.getElementById('chatMessagesArea');
    let replyHtml = '';
    if (replyToData) {
        replyHtml = `<div class="chat-reply-preview"><i class="fas fa-reply"></i> ${replyToData.name}: ${replyToData.text.substring(0, 40)}</div>`;
    }

    const newHtml = `
        <div class="chat-message" data-msg-id="${newMsg.id}">
            <img class="chat-avatar-img" src="${newMsg.avatarUrl}" data-name="${newMsg.name}" data-avatar="${newMsg.avatar}" data-userid="${newMsg.userId}" alt="">
            <div class="chat-bubble">
                <div class="chat-name">${newMsg.name} ${newMsg.isAdmin ? '<i class="fas fa-check-circle"></i>' : ''}</div>
                ${replyHtml}
                <div class="chat-text">${newMsg.text}</div>
                <div class="chat-time">${newMsg.time}</div>
                <div class="chat-actions-bottom">
                    <span class="chat-action-link" data-id="${newMsg.id}" data-name="${newMsg.name}" data-text="${newMsg.text.replace(/"/g, '&quot;')}"><i class="fas fa-reply"></i> Ответить</span>
                    <span class="chat-action-link chat-react-btn" data-id="${newMsg.id}"><i class="far fa-smile"></i></span>
                    ${canDelete() ? `<span class="chat-action-link admin-delete-btn" onclick="deleteChatMessage(${newMsg.id})"><i class="fas fa-trash"></i></span>` : ''}
                </div>
            </div>
        </div>
    `;
    area.insertAdjacentHTML('beforeend', newHtml);
    input.value = '';
    area.scrollTop = area.scrollHeight;
    vibrate();

    clearReplyPreview();
    attachChatEvents();

    setTimeout(() => {
        const reply = {
            id: nextChatId++,
            name: "Администратор",
            userId: 999,
            avatar: "A",
            avatarUrl: getAvatarSVG("A", '#e74c3c', '#c0392b'),
            text: "Спасибо за сообщение! Наши менеджеры скоро ответят.",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isAdmin: true,
            reactions: [],
            replyTo: null
        };
        chatMessages.push(reply);
        const replyHtmlBlock = `
            <div class="chat-message" data-msg-id="${reply.id}">
                <img class="chat-avatar-img" src="${reply.avatarUrl}" data-name="Администратор" data-avatar="A" data-userid="999" alt="">
                <div class="chat-bubble">
                    <div class="chat-name">Администратор <i class="fas fa-check-circle"></i></div>
                    <div class="chat-text">${reply.text}</div>
                    <div class="chat-time">${reply.time}</div>
                    <div class="chat-actions-bottom">
                        <span class="chat-action-link" data-id="${reply.id}" data-name="Администратор" data-text="${reply.text.replace(/"/g, '&quot;')}"><i class="fas fa-reply"></i> Ответить</span>
                        <span class="chat-action-link chat-react-btn" data-id="${reply.id}"><i class="far fa-smile"></i></span>
                        ${canDelete() ? `<span class="chat-action-link admin-delete-btn" onclick="deleteChatMessage(${reply.id})"><i class="fas fa-trash"></i></span>` : ''}
                    </div>
                </div>
            </div>
        `;
        area.insertAdjacentHTML('beforeend', replyHtmlBlock);
        area.scrollTop = area.scrollHeight;
        if (chatNotificationsEnabled && pushEnabled) showNotification('Новое сообщение', `Администратор: ${reply.text}`);
        document.getElementById('chatBadge').style.display = 'block';
        attachChatEvents();
    }, 2000);
}

function addChatReaction(msgId, reaction) {
    const msg = chatMessages.find(m => m.id === msgId);
    if (msg) {
        if (!msg.reactions) msg.reactions = [];
        msg.reactions.push(reaction);
        const msgDiv = document.querySelector(`.chat-message[data-msg-id="${msgId}"]`);
        if (!msgDiv) return;
        const bubble = msgDiv.querySelector('.chat-bubble');
        if (!bubble) return;
        const counts = {};
        for (let r of msg.reactions) counts[r] = (counts[r] || 0) + 1;
        let reactionsHtml = '<div class="chat-reactions">';
        for (let [r, c] of Object.entries(counts)) reactionsHtml += `<span class="chat-reaction" data-msg="${msgId}" data-reaction="${r}">${r} ${c}</span>`;
        reactionsHtml += '</div>';
        const existing = bubble.querySelector('.chat-reactions');
        if (existing) existing.outerHTML = reactionsHtml;
        else {
            const actionsBottom = bubble.querySelector('.chat-actions-bottom');
            if (actionsBottom) bubble.insertBefore(createElementFromHTML(reactionsHtml), actionsBottom);
            else bubble.insertAdjacentHTML('beforeend', reactionsHtml);
        }
        vibrate();
        attachChatReactionEvents();
    }
}

function replyToChatMessage(msgId, name, text) {
    replyTargetMsg = { type: 'chat', msgId: msgId, name: name, text: text };
    document.getElementById('replyPreviewText').textContent = `Ответ ${name}`;
    document.getElementById('chatReplyPreviewBar').style.display = 'flex';
    document.getElementById('chatInput').focus();
}

function clearReplyPreview() {
    replyTargetMsg = null;
    const bar = document.getElementById('chatReplyPreviewBar');
    if (bar) bar.style.display = 'none';
}

// ========== ЛИЧНЫЕ ЧАТЫ ==========
function openPrivateChat(userId, userName, userAvatar) {
    const targetUser = contacts.find(c => c.id === userId);
    if (targetUser && (targetUser.role === 'admin' || targetUser.role === 'manager')) {
    } else if (isAdmin()) {
    } else {
        showToast('Вы можете писать только администраторам и менеджерам');
        return;
    }

    if (!privateChats[userId]) {
        const contact = contacts.find(c => c.id === userId);
        privateChats[userId] = { 
            user: { 
                id: userId, 
                name: userName, 
                avatar: userAvatar, 
                avatarUrl: contact?.avatarUrl || getAvatarSVG(userAvatar, '#007aff', '#5856d6') 
            }, 
            messages: [] 
        };
    }

    currentPrivateUserId = userId;
    const content = document.getElementById('content');
    content.innerHTML = renderPrivateChat(userId);

    document.getElementById('tabbar').style.display = 'none';
    document.getElementById('appHeader').style.display = 'none';

    const container = document.getElementById('privateChatMessages');
    container.scrollTop = container.scrollHeight;

    document.getElementById('privateBackBtn').onclick = () => {
        if (activeTab === 'chat') {
            loadTab('chat');
        } else {
            showContacts();
        }
    };

    const sendBtn = document.getElementById('privateChatSend');
    const input = document.getElementById('privateChatInput');
    sendBtn.onclick = () => sendPrivateMessage(userId);
    input.onkeypress = (e) => { if (e.key === 'Enter') sendPrivateMessage(userId); };
    input.focus();
}

function renderPrivateChat(userId) {
    const chat = privateChats[userId];
    if (!chat) return '';
    const contact = contacts.find(c => c.id === userId) || chat.user;

    let html = `
        <div class="private-chat-screen">
            <div class="private-chat-header">
                <button class="private-back-btn" id="privateBackBtn"><i class="fas fa-arrow-left"></i></button>
                <img class="private-chat-avatar-img" src="${contact.avatarUrl}" alt="">
                <div class="private-chat-info">
                    <div class="private-chat-name">${contact.name}</div>
                    <div class="private-chat-status">${contact.status || 'онлайн'} ${contact.role === 'admin' ? '👑' : contact.role === 'manager' ? '⭐' : ''}</div>
                </div>
                ${canDelete() ? `<button style="background:none;border:none;color:#ff3b30;font-size:16px;cursor:pointer;" onclick="clearPrivateChat(${userId})"><i class="fas fa-trash"></i></button>` : ''}
            </div>
            <div class="private-chat-messages" id="privateChatMessages">
    `;

    const msgs = chat.messages;
    if (!msgs.length) {
        html += '<div class="private-chat-empty">Напишите первое сообщение</div>';
    } else {
        for (let m of msgs) {
            html += `<div class="private-message ${m.sender === 'me' ? 'my' : ''}"><div class="private-bubble">${m.text}<div class="private-msg-time">${m.time}</div></div></div>`;
        }
    }

    html += `
            </div>
            <div class="private-chat-input-area">
                <input type="text" class="private-chat-input" id="privateChatInput" placeholder="Сообщение...">
                <button class="private-chat-send" id="privateChatSend"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;
    return html;
}

function sendPrivateMessage(userId) {
    const input = document.getElementById('privateChatInput');
    const text = input.value.trim();
    if (!text) return;

    if (!privateChats[userId]) {
        privateChats[userId] = { 
            user: { 
                id: userId, 
                name: 'Пользователь', 
                avatar: 'П', 
                avatarUrl: getAvatarSVG('П', '#007aff', '#5856d6') 
            }, 
            messages: [] 
        };
    }

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    privateChats[userId].messages.push({ text: text, sender: 'me', time: time });
    renderPrivateMessages(userId);
    input.value = '';
    vibrate();

    const contact = contacts.find(c => c.id === userId);
    if (contact && (contact.role === 'admin' || contact.role === 'manager')) {
        addNotification('Новое личное сообщение', `${currentUser.name}: ${text.substring(0, 50)}...`);
    }

    setTimeout(() => {
        const contactName = privateChats[userId].user.name;
        privateChats[userId].messages.push({ 
            text: `Привет! Это демо-ответ от ${contactName}`, 
            sender: 'them', 
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        });
        renderPrivateMessages(userId);
        if (chatNotificationsEnabled && pushEnabled) showNotification(`Новое сообщение`, `${contactName}: Привет!`);
        document.getElementById('chatBadge').style.display = 'block';
        if (contact && (contact.role === 'admin' || contact.role === 'manager')) {
            addNotification('Ответ от менеджера', `${contactName}: Привет! Это демо-ответ`);
        }
    }, 1500);
}

function renderPrivateMessages(userId) {
    const container = document.getElementById('privateChatMessages');
    const msgs = privateChats[userId]?.messages || [];
    let html = '';
    for (let m of msgs) {
        html += `<div class="private-message ${m.sender === 'me' ? 'my' : ''}"><div class="private-bubble">${m.text}<div class="private-msg-time">${m.time}</div></div></div>`;
    }
    if (!msgs.length) html = '<div class="private-chat-empty">Напишите первое сообщение</div>';
    container.innerHTML = html;
    container.scrollTop = container.scrollHeight;
}

function clearPrivateChat(userId) {
    if (!confirm('Очистить историю переписки?')) return;
    if (privateChats[userId]) {
        privateChats[userId].messages = [];
        renderPrivateMessages(userId);
        showToast('История очищена');
    }
}

function showContacts() {
    const content = document.getElementById('content');
    content.innerHTML = renderContacts();

    document.getElementById('tabbar').style.display = 'none';
    document.getElementById('appHeader').style.display = 'none';

    document.getElementById('contactsBackBtn').onclick = () => {
        loadTab('chat');
    };

    document.querySelectorAll('.contact-item').forEach(item => {
        item.onclick = () => {
            openPrivateChat(parseInt(item.dataset.id), item.dataset.name, item.dataset.avatar);
        };
    });
}

function renderContacts() {
    let html = `
        <div class="contacts-screen">
            <div class="contacts-header">
                <button class="private-back-btn" id="contactsBackBtn"><i class="fas fa-arrow-left"></i></button>
                <h2><i class="fas fa-user-friends" style="color:#0063c7;"></i> Контакты</h2>
                <div style="width:40px;"></div>
            </div>
            <div class="contacts-list" id="contactsList">
    `;

    const sortedContacts = [...contacts].sort((a, b) => {
        const roles = { admin: 0, manager: 1, user: 2 };
        return (roles[a.role] || 2) - (roles[b.role] || 2);
    });

    for (let contact of sortedContacts) {
        const lastMsg = privateChats[contact.id]?.messages?.slice(-1)[0];
        const isStaff = contact.role === 'admin' || contact.role === 'manager';
        html += `
            <div class="contact-item" data-id="${contact.id}" data-name="${contact.name}" data-avatar="${contact.avatar}">
                <img class="contact-avatar-img" src="${contact.avatarUrl}" alt="">
                <div class="contact-info">
                    <div class="contact-name">${contact.name} ${isStaff ? (contact.role === 'admin' ? '👑' : '⭐') : ''}</div>
                    <div class="contact-status">${contact.status} ${isStaff ? '• Сотрудник' : ''}</div>
                    ${lastMsg ? `<div class="contact-last-msg">${lastMsg.text.substring(0, 30)}${lastMsg.text.length > 30 ? '...' : ''}</div>` : ''}
                </div>
                ${lastMsg ? '<div class="contact-unread"></div>' : ''}
            </div>
        `;
    }

    html += `</div></div>`;
    return html;
}

// ========== НАСТРОЙКИ ==========
function initPush() {
    const toggle = document.getElementById('pushToggle');
    if (toggle) {
        toggle.classList.toggle('active', pushEnabled);
        toggle.onclick = () => {
            toggle.classList.toggle('active');
            pushEnabled = toggle.classList.contains('active');
            if (pushEnabled && Notification.permission === 'default') Notification.requestPermission();
            showToast(pushEnabled ? 'Уведомления включены' : 'Уведомления выключены');
            vibrate();
        };
    }
}

function initChatNotif() {
    const toggle = document.getElementById('chatNotificationsToggle');
    if (toggle) {
        toggle.classList.toggle('active', chatNotificationsEnabled);
        toggle.onclick = () => {
            toggle.classList.toggle('active');
            chatNotificationsEnabled = toggle.classList.contains('active');
            showToast(chatNotificationsEnabled ? 'Уведомления чата вкл' : 'Уведомления чата выкл');
            vibrate();
        };
    }
}

// ========== ПРИВЯЗКА СОБЫТИЙ ==========
function attachFeedEvents() {
    document.querySelectorAll('.like-post').forEach(btn => btn.onclick = () => handleLike(parseInt(btn.dataset.id)));
    document.querySelectorAll('.toggle-comments').forEach(btn => btn.onclick = () => toggleComments(parseInt(btn.dataset.id)));
    document.querySelectorAll('.comment-send').forEach(btn => btn.onclick = () => sendComment(parseInt(btn.dataset.id)));
    attachCommentEvents();
}

function attachCommentEvents() {
    document.querySelectorAll('.comment-action-link').forEach(link => {
        if (link.classList.contains('comment-react-btn')) {
            link.onclick = (e) => {
                e.stopPropagation();
                const picker = document.getElementById('reactionPicker');
                picker.style.display = 'flex';
                const handler = (event) => {
                    const reaction = event.target.dataset.reaction;
                    if (reaction) {
                        addCommentReaction(parseInt(link.dataset.post), parseInt(link.dataset.comment), reaction);
                    }
                    picker.style.display = 'none';
                    document.removeEventListener('click', handler);
                };
                setTimeout(() => document.addEventListener('click', handler), 10);
            };
        } else {
            link.onclick = () => replyToComment(parseInt(link.dataset.post), parseInt(link.dataset.comment), link.dataset.user);
        }
    });
    document.querySelectorAll('[id^="comment-cancel-reply-"]').forEach(btn => {
        btn.onclick = () => {
            const postId = parseInt(btn.id.replace('comment-cancel-reply-', ''));
            clearCommentReply(postId);
        };
    });
    document.querySelectorAll('.comment-input').forEach(input => {
        input.onkeypress = (e) => {
            if (e.key === 'Enter') {
                const postId = parseInt(input.id.replace('comment-input-', ''));
                sendComment(postId);
            }
        };
    });
}

function attachChatEvents() {
    const sendBtn = document.getElementById('sendChatBtn');
    const chatInput = document.getElementById('chatInput');
    const cancelReply = document.getElementById('cancelReplyBtn');
    if (sendBtn) sendBtn.onclick = () => sendChatMessage();
    if (chatInput) chatInput.onkeypress = (e) => { if (e.key === 'Enter') sendChatMessage(); };
    if (cancelReply) cancelReply.onclick = () => clearReplyPreview();

    const contactsBtn = document.getElementById('contactsBtn');
    if (contactsBtn) contactsBtn.onclick = () => showContacts();

    document.querySelectorAll('.chat-avatar-img').forEach(av => {
        av.onclick = () => {
            const name = av.dataset.name;
            const userId = parseInt(av.dataset.userid);
            if (userId && name && userId !== currentUser.id) {
                const contact = contacts.find(c => c.id === userId) || { name, avatar: av.dataset.avatar };
                openPrivateChat(userId, name, av.dataset.avatar);
            } else if (name === currentUser.name) {
                showToast('Это вы');
            } else {
                showToast('Неизвестный пользователь');
            }
        };
    });

    document.querySelectorAll('.chat-action-link').forEach(link => {
        if (link.classList.contains('chat-react-btn')) {
            link.onclick = (e) => {
                e.stopPropagation();
                const picker = document.getElementById('reactionPicker');
                picker.style.display = 'flex';
                const handler = (event) => {
                    const reaction = event.target.dataset.reaction;
                    if (reaction) {
                        addChatReaction(parseInt(link.dataset.id), reaction);
                    }
                    picker.style.display = 'none';
                    document.removeEventListener('click', handler);
                };
                setTimeout(() => document.addEventListener('click', handler), 10);
            };
        } else if (!link.classList.contains('admin-delete-btn')) {
            link.onclick = () => replyToChatMessage(parseInt(link.dataset.id), link.dataset.name, link.dataset.text);
        }
    });

    const area = document.getElementById('chatMessagesArea');
    if (area) area.scrollTop = area.scrollHeight;
}

function attachChatReactionEvents() {
    document.querySelectorAll('.chat-reaction').forEach(react => {
        react.onclick = (e) => {
            e.stopPropagation();
            const msgId = parseInt(react.dataset.msg);
            const reaction = react.dataset.reaction;
            if (msgId && reaction) {
                addChatReaction(msgId, reaction);
            }
        };
    });
}

function attachCatalogEvents() {
    // Клик по пункту меню
    document.querySelectorAll('.catalog-menu-item').forEach(item => {
        item.onclick = () => {
            const section = item.dataset.section;
            goToCatalogSection(section);
        };
    });
    
    // Кнопка назад
    const backBtn = document.getElementById('catalogBackBtn');
    if (backBtn) {
        backBtn.onclick = () => {
            goBackToCatalogMenu();
        };
    }
    
    // Подразделы аксессуаров
    document.querySelectorAll('[data-sub]').forEach(btn => {
        btn.onclick = () => {
            currentCatalogSubsection = btn.dataset.sub === 'all' ? null : btn.dataset.sub;
            currentFilter = 'all';
            loadTab('catalog');
        };
    });
    
    // Фильтр по наличию
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.onclick = () => {
            currentFilter = btn.dataset.filter;
            loadTab('catalog');
        };
    });
    
    // Фильтр по состоянию (бегунок)
    document.querySelectorAll('[data-cond]').forEach(btn => {
        btn.onclick = () => {
            currentCondition = btn.dataset.cond;
            loadTab('catalog');
        };
    });
    
    // КАРТОЧКИ ТОВАРОВ - ИСПРАВЛЕННАЯ ВЕРСИЯ
    document.querySelectorAll('.product-card').forEach(card => {
        card.onclick = function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            const section = this.dataset.section;
            
            console.log('Клик по карточке:', id, 'секция:', section);
            
            let item = null;
            
            // Поиск в правильной секции
            if (section === 'accessories') {
                for (const sub in catalogData.accessories) {
                    const found = catalogData.accessories[sub].find(i => i.id === id);
                    if (found) { item = found; break; }
                }
            } else if (catalogData[section]) {
                item = catalogData[section].find(i => i.id === id);
            }
            
            // Если не нашли - поиск по всем
            if (!item) {
                const allItems = getAllItems();
                item = allItems.find(i => i.id === id);
            }
            
            console.log('Найден товар:', item);
            
            if (item) {
                currentModalItem = item;
                showProductModal(item);
            } else {
                showToast('Товар не найден');
                console.error('Товар не найден:', id, section);
            }
        };
    });
}

function createElementFromHTML(html) {
    const div = document.createElement('div');
    div.innerHTML = html.trim();
    return div.firstChild;
}

// ========== МОДАЛКА ТОВАРА ==========
function showProductModal(item) {
    console.log('showProductModal вызван', item);
    
    const modal = document.getElementById('productModal');
    if (!modal) {
        console.error('Модалка не найдена!');
        showToast('Ошибка открытия карточки');
        return;
    }
    
    sliderIndex = 0;
    currentModalItem = item;
    
    const title = document.getElementById('modalTitle');
    if (title) title.textContent = item.name;
    
    const track = document.getElementById('sliderTrack');
    const images = item.images || [item.image || 'https://picsum.photos/seed/default/600/400'];
    
    if (track) {
        track.innerHTML = images.map(img => `<img src="${img}" alt="${item.name}">`).join('');
        track.style.transform = 'translateX(0%)';
    }
    
    const counter = document.getElementById('sliderCounter');
    if (counter) counter.textContent = `1 / ${images.length}`;
    
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    
    if (images.length > 1) {
        if (prevBtn) prevBtn.style.display = 'block';
        if (nextBtn) nextBtn.style.display = 'block';
    } else {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
    }
    
    if (prevBtn) {
        prevBtn.onclick = function(e) {
            e.stopPropagation();
            if (sliderIndex > 0) {
                sliderIndex--;
                updateSlider(images.length);
            }
        };
    }
    if (nextBtn) {
        nextBtn.onclick = function(e) {
            e.stopPropagation();
            if (sliderIndex < images.length - 1) {
                sliderIndex++;
                updateSlider(images.length);
            }
        };
    }
    
    const desc = document.getElementById('modalDesc');
    if (desc) desc.textContent = item.desc || 'Описание отсутствует';
    
    const chars = document.getElementById('modalChars');
    if (chars) {
        if (item.chars) {
            let charsHtml = '';
            for (const [key, val] of Object.entries(item.chars)) {
                charsHtml += `<p><span class="char-label">${key}</span><span class="char-value">${val}</span></p>`;
            }
            chars.innerHTML = charsHtml;
        } else {
            chars.innerHTML = '<p style="color:rgba(255,255,255,0.3);">Характеристики не указаны</p>';
        }
    }
    
    const spec = document.getElementById('modalSpec');
    if (spec) spec.textContent = '⚙️ ' + (item.spec || 'Нет данных');
    
    const price = document.getElementById('modalPrice');
    if (price) price.textContent = item.price;
    
    const statusEl = document.getElementById('modalStatus');
    if (statusEl) {
        if (item.status === 'in_stock') {
            statusEl.textContent = '✅ В наличии';
            statusEl.className = 'modal-status in-stock';
        } else {
            statusEl.textContent = '⏳ Под заказ (2-4 недели)';
            statusEl.className = 'modal-status on-order';
        }
    }
    
    const condEl = document.getElementById('modalCondition');
    if (condEl) {
        if (item.condition === 'new') {
            condEl.innerHTML = '<span class="cond-new">🆕 Новый</span>';
        } else if (item.condition === 'used') {
            condEl.innerHTML = '<span class="cond-used">📋 С пробегом</span>';
        } else {
            condEl.textContent = '';
        }
    }
    
    const favBtn = document.getElementById('favoriteBtn');
    if (favBtn) {
        const isFav = favorites.includes(item.id);
        favBtn.innerHTML = isFav ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
        favBtn.classList.toggle('active', isFav);
        favBtn.onclick = function(e) {
            e.stopPropagation();
            toggleFavorite(item.id);
            updateFavoriteBtn();
        };
    }
    
    const adminActions = document.getElementById('modalAdminActions');
    if (adminActions) {
        if (isAdmin()) {
            adminActions.classList.add('show');
            adminActions.style.display = 'flex';
            const editBtn = document.getElementById('modalEditBtn');
            if (editBtn) {
                editBtn.onclick = function(e) {
                    e.stopPropagation();
                    showToast('Редактирование пока в разработке');
                };
            }
            const deleteBtn = document.getElementById('modalDeleteBtn');
            if (deleteBtn) {
                deleteBtn.onclick = function(e) {
                    e.stopPropagation();
                    if (!confirm('Удалить товар?')) return;
                    deleteProduct(item.id);
                };
            }
        } else {
            adminActions.classList.remove('show');
            adminActions.style.display = 'none';
        }
    }
    
    document.querySelectorAll('.modal-tab').forEach(tab => {
        tab.onclick = function(e) {
            e.stopPropagation();
            document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));
            const tabId = this.dataset.tab;
            const target = document.getElementById('tab' + tabId.charAt(0).toUpperCase() + tabId.slice(1));
            if (target) target.classList.add('active');
        };
    });
    
    modal.classList.add('show');
    console.log('Модалка открыта');
}

function updateSlider(total) {
    const track = document.getElementById('sliderTrack');
    const counter = document.getElementById('sliderCounter');
    if (track) {
        track.style.transform = `translateX(-${sliderIndex * 100}%)`;
    }
    if (counter) {
        counter.textContent = `${sliderIndex + 1} / ${total}`;
    }
}

function deleteProduct(id) {
    for (const key in catalogData) {
        if (key === 'accessories') {
            for (const sub in catalogData.accessories) {
                catalogData.accessories[sub] = catalogData.accessories[sub].filter(i => i.id !== id);
            }
        } else {
            catalogData[key] = catalogData[key].filter(i => i.id !== id);
        }
    }
    favorites = favorites.filter(fid => fid !== id);
    document.getElementById('productModal').classList.remove('show');
    showToast('Товар удалён');
    addNotification('Удаление товара', `Товар ID ${id} удалён`);
    loadTab(activeTab);
}

// ========== ПОИСК ==========
function toggleSearch() {
    const bar = document.getElementById('searchBar');
    const input = document.getElementById('searchInput');
    bar.classList.toggle('active');
    if (bar.classList.contains('active')) {
        setTimeout(() => input.focus(), 300);
    } else {
        input.value = '';
        hideSearchResults();
    }
}

function performSearch(query) {
    if (!query.trim()) {
        hideSearchResults();
        return;
    }
    
    const allItems = getAllItems();
    const results = allItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        (item.desc && item.desc.toLowerCase().includes(query.toLowerCase())) ||
        (item.spec && item.spec.toLowerCase().includes(query.toLowerCase()))
    );
    
    searchResults = results;
    showSearchResults(results, query);
}

function showSearchResults(results, query) {
    let overlay = document.getElementById('searchResultsOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'searchResultsOverlay';
        overlay.className = 'search-results-overlay';
        document.body.appendChild(overlay);
    }
    
    if (!results.length) {
        overlay.innerHTML = `
            <div class="search-no-results">
                <i class="fas fa-search" style="font-size:32px;display:block;margin-bottom:10px;opacity:0.3;"></i>
                Ничего не найдено по запросу "${query}"
            </div>
        `;
    } else {
        overlay.innerHTML = results.map(item => `
            <div class="search-result-item" data-id="${item.id}" data-type="${item._type || 'accessory'}">
                <img src="${item.images ? item.images[0] : item.image}" alt="${item.name}">
                <div class="info">
                    <div class="name">${item.name}</div>
                    <div class="price">${item.price}</div>
                    <div class="category">${item._type || 'Аксессуар'}</div>
                </div>
            </div>
        `).join('');
        
        overlay.querySelectorAll('.search-result-item').forEach(el => {
            el.onclick = () => {
                const id = parseInt(el.dataset.id);
                const type = el.dataset.type;
                let item = null;
                if (type === 'accessory') {
                    for (const sub in catalogData.accessories) {
                        const found = catalogData.accessories[sub].find(i => i.id === id);
                        if (found) { item = found; break; }
                    }
                } else if (catalogData[type]) {
                    item = catalogData[type].find(i => i.id === id);
                }
                if (item) {
                    currentModalItem = item;
                    hideSearchResults();
                    toggleSearch();
                    showProductModal(item);
                }
            };
        });
    }
    
    overlay.classList.add('active');
}

function hideSearchResults() {
    const overlay = document.getElementById('searchResultsOverlay');
    if (overlay) overlay.classList.remove('active');
}

function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn) {
        searchBtn.onclick = () => {
            toggleSearch();
            if (!document.getElementById('searchBar').classList.contains('active')) {
                hideSearchResults();
            }
        };
    }
    
    if (searchClose) {
        searchClose.onclick = () => {
            toggleSearch();
            hideSearchResults();
        };
    }
    
    if (searchInput) {
        searchInput.oninput = (e) => {
            performSearch(e.target.value);
        };
        searchInput.onkeydown = (e) => {
            if (e.key === 'Escape') {
                toggleSearch();
                hideSearchResults();
            }
        };
    }
}

// ========== МОДАЛКА УВЕДОМЛЕНИЙ ==========
function showNotifModal() {
    const modal = document.getElementById('notifModal');
    modal.classList.add('show');
    
    const list = document.getElementById('notifListFull');
    if (!notifications.length) {
        list.innerHTML = '<div style="padding:16px;text-align:center;color:rgba(255,255,255,0.3);font-size:13px;">Нет уведомлений</div>';
    } else {
        list.innerHTML = notifications.map(n => `
            <div class="notif-item">
                <div class="notif-title">${n.title}</div>
                <div class="notif-text">${n.text}</div>
                <div class="notif-time">${n.time}</div>
            </div>
        `).join('');
    }
    
    const pushToggle = document.getElementById('pushToggleModal');
    const chatToggle = document.getElementById('chatNotificationsToggleModal');
    
    if (pushToggle) {
        pushToggle.classList.toggle('active', pushEnabled);
        pushToggle.onclick = () => {
            pushToggle.classList.toggle('active');
            pushEnabled = pushToggle.classList.contains('active');
            if (pushEnabled && Notification.permission === 'default') Notification.requestPermission();
            showToast(pushEnabled ? 'Уведомления включены' : 'Уведомления выключены');
            vibrate();
        };
    }
    
    if (chatToggle) {
        chatToggle.classList.toggle('active', chatNotificationsEnabled);
        chatToggle.onclick = () => {
            chatToggle.classList.toggle('active');
            chatNotificationsEnabled = chatToggle.classList.contains('active');
            showToast(chatNotificationsEnabled ? 'Уведомления чата вкл' : 'Уведомления чата выкл');
            vibrate();
        };
    }
}

// ========== НАВИГАЦИЯ ПО КАТАЛОГУ ==========
function goToCatalogSection(section) {
    currentCatalogSection = section;
    currentCatalogSubsection = null;
    currentFilter = 'all';
    currentCondition = 'all';
    loadTab('catalog');
}

function goBackToCatalogMenu() {
    currentCatalogSection = null;
    currentCatalogSubsection = null;
    currentFilter = 'all';
    currentCondition = 'all';
    loadTab('catalog');
}

// ========== МОДАЛКИ ==========
function initModals() {
    const closeModal = document.getElementById('closeModal');
    const productModal = document.getElementById('productModal');
    const orderBtn = document.getElementById('orderBtn');
    const closeAdminModal = document.getElementById('closeAdminModal');
    const adminModal = document.getElementById('adminModal');
    const closeNotifModal = document.getElementById('closeNotifModal');
    const notifModal = document.getElementById('notifModal');

    if (closeModal) closeModal.onclick = () => productModal.classList.remove('show');
    if (orderBtn) orderBtn.onclick = () => { 
        showToast('✅ Заказ оформлен! Мы свяжемся с вами.'); 
        productModal.classList.remove('show');
        addNotification('Новый заказ', 'Клиент оформил заказ');
        vibrate(); 
    };
    if (closeAdminModal) closeAdminModal.onclick = () => adminModal.classList.remove('show');
    if (closeNotifModal) closeNotifModal.onclick = () => notifModal.classList.remove('show');
    
    productModal.onclick = (e) => { if (e.target === productModal) productModal.classList.remove('show'); };
    adminModal.onclick = (e) => { if (e.target === adminModal) adminModal.classList.remove('show'); };
    notifModal.onclick = (e) => { if (e.target === notifModal) notifModal.classList.remove('show'); };
}

// ========== ЗАГРУЗКА ТАБА ==========
function loadTab(tab) {
    activeTab = tab;
    const content = document.getElementById('content');
    const tabbar = document.getElementById('tabbar');
    const header = document.getElementById('appHeader');

    tabbar.style.display = 'flex';
    header.style.display = 'block';

    document.getElementById('adminPanelBtn').style.display = isAdmin() ? 'block' : 'none';

    if (tab === 'catalog') {
        if (currentCatalogSection) {
            content.innerHTML = renderCatalogSection(currentCatalogSection);
        } else {
            content.innerHTML = renderCatalogMenu();
        }
        attachCatalogEvents();
    } else if (tab === 'news') {
        content.innerHTML = renderFeed();
        attachFeedEvents();
    } else if (tab === 'chat') {
        content.innerHTML = renderChat();
        attachChatEvents();
        document.getElementById('chatBadge').style.display = 'none';
    } else if (tab === 'reviews') {
        content.innerHTML = renderReviews();
    } else if (tab === 'profile') {
        content.innerHTML = renderProfile();
        setTimeout(() => {
            initPush();
            initChatNotif();
        }, 50);
    }

    document.querySelectorAll('.tab-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.tab === tab) item.classList.add('active');
    });
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
function init() {
    initModals();
    initSearch();
    loadTab('news');
    setTimeout(() => { if (Notification.permission === 'default') Notification.requestPermission(); }, 1000);
    
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.onclick = () => { vibrate(); loadTab(tab.dataset.tab); };
    });

    document.getElementById('adminPanelBtn').onclick = () => {
        loadTab('profile');
        showToast('Панель управления');
    };

    document.getElementById('notifBell').onclick = (e) => {
        e.stopPropagation();
        showNotifModal();
        notifications.forEach(n => n.read = true);
        updateNotifBadge();
    };

    updateNotifBadge();
}

document.addEventListener('DOMContentLoaded', init);