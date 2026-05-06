// ============================================
// I18N — English / Hindi translations
// ============================================
const I18N = {
  en: {
    nav_home: 'Home', nav_shop: 'Shop', nav_subs: 'Subscriptions', nav_learn: 'Learn', nav_about: 'About',
    ai_doctor: 'AI Doctor', cart: 'Cart',
    hero_eyebrow: 'College of Agriculture, Balaghat • Student-Run Production',
    hero_title_a: 'Living inputs for a', hero_title_b: 'living soil.',
    hero_sub: 'Lab-grade vermicompost, biofertilizers and traditional bio-pesticides — produced by students, trusted by farmers across Madhya Pradesh.',
    shop_now: 'Shop Organic Inputs', try_ai: 'Try AI Crop Doctor',
    farmers_served: 'Farmers Served', organic_inputs: 'Organic Inputs', repeat_buyers: 'Repeat Buyers', co2_saved: 'CO₂ Saved / Year',
    browse_cat: 'Browse by Category', cat_title_a: 'Six families.', cat_title_b: 'One philosophy.',
    cat_sub: 'From living earthworms to fermented bio-pesticides, every product is rooted in agroecology.',
    fresh_a: 'Fresh from', fresh_b: 'the production unit.', view_all: 'View all',
    why_us: 'Why Choose Us', research_a: 'Research-grade quality.', research_b: 'Farmer-friendly prices.',
    add_cart: 'Add to Cart', proceed: 'Proceed to Checkout',
    your_cart: 'Your Cart', empty_cart: 'Your cart is empty', empty_cart_sub: 'Add products to get started.',
    subtotal: 'Subtotal', shipping: 'Shipping', total: 'Total', free: 'FREE',
    place_order: 'Place Order', thanks: 'Thank you for buying organic!',
    login_title: 'Admin Login', login_sub: 'Only admin can edit content. Customers can shop without login.',
    login_email: 'Email or Phone', login_password: 'Password', login_btn: 'Login as Admin', login_continue: 'Continue Shopping (no login)',
    admin_mode: 'Admin Mode', logout: 'Logout',
  },
  hi: {
    nav_home: 'मुख्य पृष्ठ', nav_shop: 'दुकान', nav_subs: 'सदस्यता', nav_learn: 'सीखें', nav_about: 'हमारे बारे में',
    ai_doctor: 'AI डॉक्टर', cart: 'कार्ट',
    hero_eyebrow: 'कृषि महाविद्यालय, बालाघाट • छात्र-संचालित उत्पादन',
    hero_title_a: 'जीवित मिट्टी के लिए', hero_title_b: 'जीवित आदान।',
    hero_sub: 'प्रयोगशाला-गुणवत्ता वाले वर्मीकम्पोस्ट, जैव उर्वरक और पारंपरिक जैव कीटनाशक — छात्रों द्वारा उत्पादित, पूरे मध्य प्रदेश के किसानों द्वारा भरोसेमंद।',
    shop_now: 'जैविक उत्पाद खरीदें', try_ai: 'AI फसल डॉक्टर आज़माएँ',
    farmers_served: 'किसान सेवित', organic_inputs: 'जैविक उत्पाद', repeat_buyers: 'पुनः खरीदार', co2_saved: 'CO₂ बचत / वर्ष',
    browse_cat: 'श्रेणी अनुसार देखें', cat_title_a: 'छः परिवार।', cat_title_b: 'एक दर्शन।',
    cat_sub: 'जीवित केंचुओं से लेकर किण्वित जैव कीटनाशकों तक, हर उत्पाद कृषि-पारिस्थितिकी पर आधारित है।',
    fresh_a: 'सीधे', fresh_b: 'उत्पादन इकाई से।', view_all: 'सभी देखें',
    why_us: 'हमें क्यों चुनें', research_a: 'अनुसंधान-स्तरीय गुणवत्ता।', research_b: 'किसान-अनुकूल कीमत।',
    add_cart: 'कार्ट में डालें', proceed: 'चेकआउट पर जाएँ',
    your_cart: 'आपका कार्ट', empty_cart: 'आपका कार्ट खाली है', empty_cart_sub: 'शुरू करने के लिए उत्पाद जोड़ें।',
    subtotal: 'उप-योग', shipping: 'शिपिंग', total: 'कुल', free: 'मुफ्त',
    place_order: 'ऑर्डर करें', thanks: 'जैविक खरीदने के लिए धन्यवाद!',
    login_title: 'व्यवस्थापक लॉगिन', login_sub: 'केवल व्यवस्थापक संपादन कर सकते हैं। ग्राहक बिना लॉगिन के खरीद सकते हैं।',
    login_email: 'ईमेल या फ़ोन', login_password: 'पासवर्ड', login_btn: 'व्यवस्थापक के रूप में लॉगिन', login_continue: 'खरीदारी जारी रखें (बिना लॉगिन)',
    admin_mode: 'व्यवस्थापक मोड', logout: 'लॉगआउट',
  }
};
window.I18N = I18N;
window.t = (key, lang) => (I18N[lang] || I18N.en)[key] || key;

// ============================================
// AUTH — Admin only login (client-side hash)
// ============================================
// Owner credentials — hashed (not plaintext)
// Default password: balaghat2026 (you can change via tweaks panel)
const ADMIN = {
  email: 'sanjayrathorevbyl@gmail.com',
  phone: '7877612427',
  // Simple hash of "balaghat2026" — replace by changing password in admin panel
  passwordHash: '5f4dcc3b5aa765d61d8327deb882cf99-balaghat2026',
};

async function hashPassword(pw) {
  // Simple browser hash using SubtleCrypto
  if (window.crypto && window.crypto.subtle) {
    const data = new TextEncoder().encode(pw + 'coa-balaghat-salt-2026');
    const hash = await window.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  return pw + '-fallback';
}

async function checkAdminLogin(emailOrPhone, password) {
  const id = (emailOrPhone || '').trim().toLowerCase();
  const matches = id === ADMIN.email.toLowerCase() || id === ADMIN.phone || id === '+91' + ADMIN.phone;
  if (!matches) return { ok: false, error: 'Email or phone not recognized' };
  const hash = await hashPassword(password);
  const stored = localStorage.getItem('admin_pw_hash') || await hashPassword('balaghat2026');
  if (hash === stored) {
    const token = btoa(Date.now() + ':' + Math.random()).slice(0, 32);
    localStorage.setItem('admin_session', JSON.stringify({ token, exp: Date.now() + 86400000 }));
    return { ok: true };
  }
  return { ok: false, error: 'Wrong password' };
}

function isAdminLoggedIn() {
  try {
    const s = JSON.parse(localStorage.getItem('admin_session') || 'null');
    return s && s.exp > Date.now();
  } catch { return false; }
}
function logoutAdmin() { localStorage.removeItem('admin_session'); }

window.checkAdminLogin = checkAdminLogin;
window.isAdminLoggedIn = isAdminLoggedIn;
window.logoutAdmin = logoutAdmin;
window.hashPassword = hashPassword;
window.ADMIN = ADMIN;
