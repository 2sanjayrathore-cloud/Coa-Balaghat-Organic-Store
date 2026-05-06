// ============================================
// HOME PAGE — fully bilingual (en/hi)
// ============================================

const HOME_T = {
  en: {
    marquee: ['Certified Organic by PGS-India', 'Free Delivery above ₹999', 'College of Agriculture, Balaghat — Est. 2009', 'Direct from Student Production Units', 'Carbon-Negative Packaging', '24/7 Agronomist Support on WhatsApp'],
    eyebrow: 'College of Agriculture, Balaghat • Student-Run Production',
    hero_a: 'Living inputs for a', hero_b: 'living soil.',
    hero_sub: 'Lab-grade vermicompost, biofertilizers and traditional bio-pesticides — produced by students, trusted by farmers across Madhya Pradesh. Every bottle traceable to its batch.',
    cta_shop: 'Shop Organic Inputs', cta_ai: 'Try AI Crop Doctor',
    s_farmers: 'Farmers Served', s_inputs: 'Organic Inputs', s_repeat: 'Repeat Buyers', s_co2: 'CO₂ Saved / Year',
    cat_eyebrow: 'Browse by Category', cat_a: 'Six families.', cat_b: 'One philosophy.',
    cat_sub: 'From living earthworms to fermented bio-pesticides, every product is rooted in agroecology and produced on-campus.',
    fp_eyebrow: 'This Week', fp_a: 'Fresh from', fp_b: 'the production unit.', view_all: 'View all',
    rev: 'reviews',
    ib_chip: 'AI-Powered', ib_title: 'Photograph the problem. We\'ll prescribe the cure.',
    ib_sub: 'Upload a photo of an infested leaf or weak crop. Our AI identifies the issue and recommends the right organic input — pulled directly from our college\'s research database.',
    ib_cta: 'Diagnose Crop Now',
    ib_phone_title: 'AI Crop Doctor', ib_phone_detected: '✓ Detected', ib_phone_name: 'Mealybug detected', ib_phone_meta: '87% confidence • Cotton crop', ib_phone_rec: 'Recommended:', ib_phone_prod: 'Neemastra 1 L — spray 1:10',
    feat: [
      { title: 'PGS-India Certified', desc: 'Every batch certified organic by the Participatory Guarantee System of India.' },
      { title: 'Cold-Chain Delivery', desc: 'Live cultures shipped in insulated boxes within 24 hours, viability guaranteed.' },
      { title: 'Batch Traceability', desc: 'Scan the QR code on every bottle to see its production date, batch and student grower.' },
      { title: 'Carbon Negative', desc: 'For every order, our farm absorbs 2.4 kg more CO₂ than your delivery emits.' },
    ],
    feat_eyebrow: 'Why Choose Us', feat_a: 'Research-grade quality.', feat_b: 'Farmer-friendly prices.',
    sub_eyebrow: 'Monthly Subscription', sub_a: 'The Krishi Box.', sub_b: 'Seasonal. Tailored. Saves 20%.',
    sub_desc: 'Get the right bio-inputs delivered every month based on your crop, region and growth stage. Skip or pause anytime.',
    sub_chips: ['🌾 Customised by crop', '📅 Seasonal calendar', '💰 20% lifetime discount', '⏸ Pause anytime'],
    sub_cta: 'Start Subscription • ₹1,499/mo',
    sub_box_edition: 'MAY 2026 EDITION',
    nav: { home: 'Home', shop: 'Shop', subs: 'Subscriptions', learn: 'Learn', about: 'About' },
    foot: {
      tagline: 'Balaghat • Madhya Pradesh',
      desc: 'A student-run organic input enterprise of College of Agriculture, Balaghat — empowering farmers with scientifically-validated, traditional bio-inputs since 2018.',
      shop: 'Shop', shopLinks: ['Vermicompost', 'Bio-Pesticides', 'Liquid Manures', 'Seed Treatment', 'Subscriptions'],
      learn: 'Learn', learnLinks: ['How-to Videos', 'Crop Calendar', 'Research Papers', 'AI Crop Doctor', 'Farmer Stories'],
      conn: 'Connect', connLinks: ['+91 7632-240-318', 'store@coabalaghat.edu.in', 'WhatsApp Order', 'Visit Campus', 'Become a Reseller'],
      copy: '© 2026 College of Agriculture, Balaghat. A unit of JNKVV, Jabalpur.',
      legal: ['Privacy', 'Terms', 'Refund Policy'],
    },
    products: '', products_one: 'product', products_many: 'products',
  },
  hi: {
    marquee: ['PGS-India द्वारा प्रमाणित जैविक', '₹999 से अधिक पर मुफ्त डिलीवरी', 'कृषि महाविद्यालय, बालाघाट — स्थापना 2009', 'सीधे छात्र उत्पादन इकाइयों से', 'कार्बन-नेगेटिव पैकेजिंग', 'WhatsApp पर 24/7 कृषि सलाह'],
    eyebrow: 'कृषि महाविद्यालय, बालाघाट • छात्र-संचालित उत्पादन',
    hero_a: 'जीवित मिट्टी के लिए', hero_b: 'जीवित आदान।',
    hero_sub: 'प्रयोगशाला-गुणवत्ता वाले वर्मीकम्पोस्ट, जैव उर्वरक और पारंपरिक जैव कीटनाशक — छात्रों द्वारा उत्पादित, पूरे मध्य प्रदेश के किसानों द्वारा भरोसेमंद। हर बोतल का बैच ट्रेस होता है।',
    cta_shop: 'जैविक उत्पाद खरीदें', cta_ai: 'AI फसल डॉक्टर आज़माएँ',
    s_farmers: 'किसान सेवित', s_inputs: 'जैविक उत्पाद', s_repeat: 'पुनः खरीदार', s_co2: 'CO₂ बचत / वर्ष',
    cat_eyebrow: 'श्रेणी अनुसार देखें', cat_a: 'छः परिवार।', cat_b: 'एक दर्शन।',
    cat_sub: 'जीवित केंचुओं से लेकर किण्वित जैव कीटनाशकों तक, हर उत्पाद कृषि-पारिस्थितिकी पर आधारित और परिसर में निर्मित है।',
    fp_eyebrow: 'इस सप्ताह', fp_a: 'सीधे', fp_b: 'उत्पादन इकाई से।', view_all: 'सभी देखें',
    rev: 'समीक्षाएँ',
    ib_chip: 'AI-संचालित', ib_title: 'समस्या की फोटो लें। हम इलाज बताएँगे।',
    ib_sub: 'संक्रमित पत्ती या कमजोर फसल की फोटो अपलोड करें। हमारा AI समस्या पहचानकर सही जैविक उत्पाद सुझाता है — सीधे हमारे महाविद्यालय के अनुसंधान डेटाबेस से।',
    ib_cta: 'अभी फसल जाँचें',
    ib_phone_title: 'AI फसल डॉक्टर', ib_phone_detected: '✓ पहचाना', ib_phone_name: 'मिलीबग मिला', ib_phone_meta: '87% सटीकता • कपास फसल', ib_phone_rec: 'सुझाव:', ib_phone_prod: 'नीमास्त्र 1 ली — 1:10 छिड़काव',
    feat: [
      { title: 'PGS-India प्रमाणित', desc: 'हर बैच भारत की भागीदारी गारंटी प्रणाली द्वारा जैविक प्रमाणित।' },
      { title: 'कोल्ड-चेन डिलीवरी', desc: 'जीवित कल्चर 24 घंटे में इंसुलेटेड बॉक्स में, व्यवहार्यता की गारंटी।' },
      { title: 'बैच ट्रेसेबिलिटी', desc: 'हर बोतल का QR स्कैन करें — उत्पादन तिथि, बैच और छात्र उत्पादक देखें।' },
      { title: 'कार्बन नेगेटिव', desc: 'हर ऑर्डर पर हमारा फार्म डिलीवरी से 2.4 किग्रा अधिक CO₂ अवशोषित करता है।' },
    ],
    feat_eyebrow: 'हमें क्यों चुनें', feat_a: 'अनुसंधान-स्तरीय गुणवत्ता।', feat_b: 'किसान-अनुकूल कीमत।',
    sub_eyebrow: 'मासिक सदस्यता', sub_a: 'कृषि बॉक्स।', sub_b: 'मौसमी। अनुकूलित। 20% बचत।',
    sub_desc: 'अपनी फसल, क्षेत्र और बढ़वार के चरण के अनुसार हर महीने सही जैविक उत्पाद प्राप्त करें। कभी भी छोड़ें या रोकें।',
    sub_chips: ['🌾 फसल अनुसार', '📅 मौसमी कैलेंडर', '💰 20% आजीवन छूट', '⏸ कभी भी रोकें'],
    sub_cta: 'सदस्यता शुरू करें • ₹1,499/माह',
    sub_box_edition: 'मई 2026 संस्करण',
    nav: { home: 'मुख्य', shop: 'दुकान', subs: 'सदस्यता', learn: 'सीखें', about: 'हमारे बारे में' },
    foot: {
      tagline: 'बालाघाट • मध्य प्रदेश',
      desc: 'कृषि महाविद्यालय, बालाघाट का छात्र-संचालित जैविक उद्यम — 2018 से किसानों को वैज्ञानिक रूप से मान्य पारंपरिक जैव-उत्पाद उपलब्ध करा रहा है।',
      shop: 'दुकान', shopLinks: ['वर्मीकम्पोस्ट', 'जैव कीटनाशक', 'तरल खाद', 'बीज उपचार', 'सदस्यता'],
      learn: 'सीखें', learnLinks: ['वीडियो ट्यूटोरियल', 'फसल कैलेंडर', 'शोध पत्र', 'AI फसल डॉक्टर', 'किसान कहानियाँ'],
      conn: 'संपर्क', connLinks: ['+91 7632-240-318', 'store@coabalaghat.edu.in', 'WhatsApp ऑर्डर', 'परिसर देखें', 'विक्रेता बनें'],
      copy: '© 2026 कृषि महाविद्यालय, बालाघाट। JNKVV, जबलपुर की एक इकाई।',
      legal: ['गोपनीयता', 'शर्तें', 'वापसी नीति'],
    },
    products: '', products_one: 'उत्पाद', products_many: 'उत्पाद',
  },
};
window.HOME_T = HOME_T;

const Marquee = ({ lang = 'en' }) => {
  const items = HOME_T[lang].marquee;
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((it, i) => (
          <div key={i} className="marquee-item">
            <span className="marquee-dot" />
            <span>{it}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = ({ onShop, onAI, lang = 'en' }) => {
  const I = window.Illustrations;
  const T = HOME_T[lang];
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-grid">
          <div className="fade-up">
            <div className="hero-eyebrow">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--leaf-500)' }} />
              <span>{T.eyebrow}</span>
            </div>
            <h1 className="hero-title">
              {T.hero_a} <em>{T.hero_b}</em>
            </h1>
            <p className="hero-sub">{T.hero_sub}</p>
            <div className="hero-ctas">
              <button className="btn btn-primary btn-lg" onClick={onShop}>
                {T.cta_shop} <Icon.Arrow />
              </button>
              <button className="btn btn-secondary btn-lg" onClick={onAI}>
                <Icon.Sparkles /> {T.cta_ai}
              </button>
            </div>
            <div className="hero-stats">
              <div><div className="hero-stat-num">2,400+</div><div className="hero-stat-label">{T.s_farmers}</div></div>
              <div><div className="hero-stat-num">15</div><div className="hero-stat-label">{T.s_inputs}</div></div>
              <div><div className="hero-stat-num">98%</div><div className="hero-stat-label">{T.s_repeat}</div></div>
              <div><div className="hero-stat-num">42T</div><div className="hero-stat-label">{T.s_co2}</div></div>
            </div>
          </div>
          <div className="hero-art float">
            <I.HeroArt />
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryGrid = ({ onCat, lang = 'en' }) => {
  const I = window.Illustrations;
  const T = HOME_T[lang];
  const colors = ['#e3edd5', '#fef3e0', '#fae8e0', '#e3edd5', '#f0e8d8', '#fef5e0'];
  // Hindi category names
  const HI_CATS = {
    vermi: 'वर्मीकम्पोस्ट', biofert: 'जैव उर्वरक', biopest: 'जैव कीटनाशक', liquid: 'तरल खाद', seed: 'बीज उपचार', earth: 'केंचुआ',
  };
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">{T.cat_eyebrow}</div>
            <h2 className="section-title">{T.cat_a} <em>{T.cat_b}</em></h2>
          </div>
          <p className="section-sub">{T.cat_sub}</p>
        </div>
        <div className="cat-grid">
          {window.CATEGORIES.map((c, i) => {
            const count = window.PRODUCTS.filter(p => p.cat === c.id).length;
            const name = lang === 'hi' && HI_CATS[c.id] ? HI_CATS[c.id] : c.name;
            const unit = lang === 'hi' ? T.products_many : (count !== 1 ? 'products' : 'product');
            return (
              <div key={c.id} className="cat-card" style={{ background: colors[i] }} onClick={() => onCat(c.id)}>
                <div className="cat-card-icon">
                  <I.Seedling color={c.color} size={70} />
                </div>
                <div>
                  <div className="cat-card-name">{name}</div>
                  <div className="cat-card-meta">{count} {unit}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FeaturedProducts = ({ onProduct, onAdd, lang = 'en' }) => {
  const T = HOME_T[lang];
  const featured = window.PRODUCTS.filter(p => p.badge).slice(0, 4);
  return (
    <section className="section" style={{ background: 'var(--leaf-50)' }}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">{T.fp_eyebrow}</div>
            <h2 className="section-title">{T.fp_a} <em>{T.fp_b}</em></h2>
          </div>
          <button className="btn btn-secondary" onClick={() => onProduct('shop')}>{T.view_all} <Icon.Arrow /></button>
        </div>
        <div className="prod-grid">
          {featured.map(p => <ProductCard key={p.id} product={p} onClick={() => onProduct(p.id)} onAdd={onAdd} lang={lang} />)}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, onClick, onAdd, lang = 'en' }) => {
  const [fav, setFav] = React.useState(false);
  const T = HOME_T[lang];
  return (
    <div className="prod-card" onClick={onClick}>
      {product.badge && <div className="prod-badge"><span className="chip solid">{product.badge}</span></div>}
      <button className={`prod-fav ${fav ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setFav(!fav); }}>
        <Icon.Heart s={14} filled={fav} />
      </button>
      <div className="prod-img" style={{ background: product.color + '12' }}>
        <div className="prod-img-art">{getProductArt(product, 180)}</div>
      </div>
      <div className="prod-body">
        <div className="prod-cat">{window.CATEGORIES.find(c => c.id === product.cat)?.name}</div>
        <h3 className="prod-name">{product.name}</h3>
        <p className="prod-desc">{product.short}</p>
        <div className="prod-rating">
          <Illustrations.Star size={12} />
          <span>{product.rating}</span>
          <span>·</span>
          <span>{product.reviews} {T.rev}</span>
        </div>
        <div className="prod-foot">
          <div>
            <span className="prod-price">{fmt(product.price)}</span>
            <span className="prod-price-unit">{product.unit}</span>
          </div>
          <button className="prod-add" onClick={(e) => { e.stopPropagation(); onAdd(product); }}>
            <Icon.Plus s={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const InnovationBanner = ({ onAI, lang = 'en' }) => {
  const T = HOME_T[lang];
  return (
    <section className="section">
      <div className="container">
        <div className="banner" style={{ backgroundImage: 'radial-gradient(circle at 90% 10%, rgba(232,168,56,0.4), transparent 50%)' }}>
          <div className="banner-grid">
            <div>
              <div className="chip solid" style={{ background: 'rgba(232,168,56,0.25)', color: '#fef3e0', borderColor: 'transparent' }}>
                <Icon.Sparkles s={12} /> {T.ib_chip}
              </div>
              <h2 className="banner-title">{T.ib_title}</h2>
              <p className="banner-sub">{T.ib_sub}</p>
              <button className="btn" style={{ background: 'var(--turmeric)', color: 'var(--ink)' }} onClick={onAI}>
                <Icon.Camera s={16} /> {T.ib_cta}
              </button>
            </div>
            <div style={{ position: 'relative', height: 280 }}>
              <div style={{
                position: 'absolute', right: 20, top: 0,
                width: 200, height: 280,
                borderRadius: 28, background: '#1a221c',
                padding: 8, boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                border: '6px solid #2a4218',
              }}>
                <div style={{ width: '100%', height: '100%', borderRadius: 22, background: 'var(--cream)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ background: 'var(--leaf-700)', color: 'white', padding: '12px 14px', fontSize: 11, display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-display)' }}>{T.ib_phone_title}</span>
                    <span>●●●</span>
                  </div>
                  <div style={{ background: '#a3c279', height: 90, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Illustrations.Seedling color="#36531d" size={60} />
                    <div style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(255,255,255,0.9)', padding: '3px 8px', borderRadius: 12, fontSize: 9, color: '#36531d', fontWeight: 600 }}>{T.ib_phone_detected}</div>
                  </div>
                  <div style={{ padding: 12, fontSize: 10, color: '#1a1f14' }}>
                    <div style={{ fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{T.ib_phone_name}</div>
                    <div style={{ color: '#666', marginBottom: 8 }}>{T.ib_phone_meta}</div>
                    <div style={{ background: '#e3edd5', padding: 8, borderRadius: 6, fontSize: 9 }}>
                      <div style={{ fontWeight: 600, marginBottom: 2, color: '#36531d' }}>{T.ib_phone_rec}</div>
                      <div>{T.ib_phone_prod}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureGrid = ({ lang = 'en' }) => {
  const T = HOME_T[lang];
  const icons = [<Icon.Award />, <Icon.Truck />, <Icon.Shield />, <Icon.Leaf />];
  return (
    <section className="section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <div className="eyebrow">{T.feat_eyebrow}</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>{T.feat_a}<br /><em>{T.feat_b}</em></h2>
        </div>
        <div className="feat-grid">
          {T.feat.map((f, i) => (
            <div key={i} className="feat-card">
              <div className="feat-icon">{icons[i]}</div>
              <h3 className="feat-title">{f.title}</h3>
              <p className="feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SubscriptionBox = ({ lang = 'en' }) => {
  const T = HOME_T[lang];
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', background: 'var(--surface)', borderRadius: 32, padding: 60, border: '1px solid var(--border)' }}>
          <div>
            <div className="eyebrow">{T.sub_eyebrow}</div>
            <h2 className="section-title" style={{ marginTop: 12 }}>{T.sub_a}<br /><em>{T.sub_b}</em></h2>
            <p className="section-sub" style={{ marginTop: 16, marginBottom: 24 }}>{T.sub_desc}</p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
              {T.sub_chips.map((c, i) => <span key={i} className="chip">{c}</span>)}
            </div>
            <button className="btn btn-primary">{T.sub_cta} <Icon.Arrow /></button>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 320 }}>
            <div style={{ width: 280, height: 280, background: 'linear-gradient(135deg, var(--leaf-700), var(--leaf-800))', borderRadius: 24, position: 'relative', boxShadow: 'var(--shadow-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)' }}>
              <div style={{ position: 'absolute', inset: 16, border: '2px dashed rgba(255,255,255,0.3)', borderRadius: 16 }} />
              <div style={{ textAlign: 'center', color: 'var(--cream)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 500 }}>{lang === 'hi' ? 'कृषि' : 'Krishi'}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontStyle: 'italic', color: 'var(--turmeric)', marginTop: -8 }}>{lang === 'hi' ? 'बॉक्स' : 'Box'}</div>
                <div style={{ marginTop: 16, fontSize: 11, letterSpacing: '0.2em' }}>{T.sub_box_edition}</div>
              </div>
              <div style={{ position: 'absolute', top: -12, right: -12, background: 'var(--turmeric)', color: 'var(--ink)', borderRadius: '50%', width: 70, height: 70, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, transform: 'rotate(15deg)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ fontSize: 14 }}>20%</div>
                <div>{lang === 'hi' ? 'छूट' : 'OFF'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang = 'en' }) => {
  const F = HOME_T[lang].foot;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <Illustrations.Logo size={48} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--leaf-100)' }}>{lang === 'hi' ? 'कृषि महाविद्यालय' : 'College of Agriculture'}</div>
                <div style={{ fontSize: 12, opacity: 0.6 }}>{F.tagline}</div>
              </div>
            </div>
            <p style={{ fontSize: 13, opacity: 0.7, lineHeight: 1.6, maxWidth: 320 }}>{F.desc}</p>
          </div>
          <div className="footer-col">
            <h4>{F.shop}</h4>
            {F.shopLinks.map((l, i) => <a key={i}>{l}</a>)}
          </div>
          <div className="footer-col">
            <h4>{F.learn}</h4>
            {F.learnLinks.map((l, i) => <a key={i}>{l}</a>)}
          </div>
          <div className="footer-col">
            <h4>{F.conn}</h4>
            {F.connLinks.map((l, i) => <a key={i}>{l}</a>)}
          </div>
        </div>
        <div className="footer-bottom">
          <div>{F.copy}</div>
          <div style={{ display: 'flex', gap: 24 }}>
            {F.legal.map((l, i) => <a key={i}>{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Marquee, Hero, CategoryGrid, FeaturedProducts, ProductCard, InnovationBanner, FeatureGrid, SubscriptionBox, Footer });
