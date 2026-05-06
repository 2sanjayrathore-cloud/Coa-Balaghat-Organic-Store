// ============================================
// MAIN APP — College of Agriculture, Balaghat
// ============================================

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "leaf",
  "collegeName": "College of Agriculture, Balaghat",
  "collegeTagline": "A constituent college of JNKVV, Jabalpur",
  "collegeAddress": "Waraseoni Road, Balaghat, Madhya Pradesh — 481001",
  "showAIDoctor": true,
  "showCarbonTracker": true,
  "showSubscription": true,
  "showMarquee": true,
  "freeShippingThreshold": 999,
  "language": "en"
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = React.useState('home');
  const [productId, setProductId] = React.useState(null);
  const [filterCat, setFilterCat] = React.useState(null);
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [aiOpen, setAiOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(window.isAdminLoggedIn());
  const [order, setOrder] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const lang = tweaks.language || 'en';
  const tr = (k) => window.t(k, lang);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme === 'dark' ? 'dark' : tweaks.theme === 'earth' ? 'earth' : tweaks.theme === 'vibrant' ? 'vibrant' : 'light');
  }, [tweaks.theme]);

  React.useEffect(() => { window.scrollTo(0, 0); }, [page, productId]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  const addToCart = (product, qty = 1) => {
    const cartKey = product.id + (product.sizeLabel || '');
    setCart(prev => {
      const existing = prev.find(i => i.cartKey === cartKey);
      if (existing) return prev.map(i => i.cartKey === cartKey ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { ...product, cartKey, qty }];
    });
    showToast(`Added "${product.name}" to cart`);
  };
  const updateQty = (key, qty) => {
    if (qty <= 0) return removeFromCart(key);
    setCart(prev => prev.map(i => i.cartKey === key ? { ...i, qty } : i));
  };
  const removeFromCart = (key) => setCart(prev => prev.filter(i => i.cartKey !== key));

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const college = {
    name: tweaks.collegeName,
    tagline: tweaks.collegeTagline,
    address: tweaks.collegeAddress,
  };

  const goShop = (cat) => { setFilterCat(cat || null); setPage('shop'); };
  const goProduct = (id) => { if (id === 'shop') { setPage('shop'); return; } setProductId(id); setPage('product'); };
  const goCheckout = () => { setCartOpen(false); setPage('checkout'); };
  const completeOrder = (o) => { setOrder(o); setCart([]); setPage('invoice'); };

  return (
    <>
      {/* NAV */}
      {page !== 'invoice' && (
        <nav className="nav">
          <div className="container">
            <div className="nav-inner">
              <div className="nav-logo" onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
                <div className="nav-logo-mark"><Illustrations.Logo size={42} /></div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.1 }}>{college.name.split(',')[0]}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.05em' }}>{college.name.split(',')[1]?.trim() || 'Organic Store'} · Organic Store</div>
                </div>
              </div>
              <div className="nav-links">
                <div className={`nav-link ${page === 'home' ? 'active' : ''}`} onClick={() => setPage('home')}>Home</div>
                <div className={`nav-link ${page === 'shop' ? 'active' : ''}`} onClick={() => goShop()}>Shop</div>
                <div className="nav-link">Subscriptions</div>
                <div className="nav-link">Learn</div>
                <div className="nav-link">About</div>
              </div>
              <div className="nav-actions">
                <button className="btn btn-ghost btn-sm" onClick={() => setTweak('language', lang === 'en' ? 'hi' : 'en')} title="Switch language" style={{ fontWeight: 600 }}>
                  {lang === 'en' ? '🇮🇳 हिं' : '🇬🇧 EN'}
                </button>
                {tweaks.showAIDoctor && (
                  <button className="btn btn-ghost btn-sm" onClick={() => setAiOpen(true)}>
                    <Icon.Sparkles s={14} /> {tr('ai_doctor')}
                  </button>
                )}
                {isAdmin ? (
                  <button className="btn btn-ghost btn-sm" onClick={() => { window.logoutAdmin(); setIsAdmin(false); showToast('Logged out'); }} style={{ color: 'var(--leaf-700)' }}>
                    🔓 {tr('admin_mode')}
                  </button>
                ) : (
                  <button className="btn btn-ghost btn-sm" onClick={() => setLoginOpen(true)}>
                    🔐 Login
                  </button>
                )}
                <button className="cart-badge" onClick={() => setCartOpen(true)}>
                  <Icon.Cart s={16} /> {tr('cart')}
                  {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* PAGES */}
      {page === 'home' && (
        <>
          <Hero onShop={() => goShop()} onAI={() => setAiOpen(true)} />
          {tweaks.showMarquee && <Marquee />}
          <CategoryGrid onCat={goShop} />
          <FeaturedProducts onProduct={goProduct} onAdd={addToCart} />
          {tweaks.showAIDoctor && <InnovationBanner onAI={() => setAiOpen(true)} />}
          <FeatureGrid />
          {tweaks.showSubscription && <SubscriptionBox />}
          <Footer />
        </>
      )}
      {page === 'shop' && (
        <>
          <ShopPage filterCat={filterCat} onProduct={goProduct} onAdd={addToCart} />
          <Footer />
        </>
      )}
      {page === 'product' && (
        <>
          <ProductDetail productId={productId} onAdd={addToCart} onBack={() => setPage('shop')} />
          <Footer />
        </>
      )}
      {page === 'checkout' && (
        <Checkout items={cart} onComplete={completeOrder} onBack={() => setPage('shop')} college={college} />
      )}
      {page === 'invoice' && (
        <Invoice order={order} onShop={() => setPage('home')} />
      )}

      {/* OVERLAYS */}
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)}
        onUpdate={updateQty} onRemove={removeFromCart} onCheckout={goCheckout} />
      {aiOpen && <AIDoctorPro onClose={() => setAiOpen(false)} onAdd={(p) => { addToCart(p); }} lang={lang} />}
      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} onSuccess={() => { setLoginOpen(false); setIsAdmin(true); showToast('✓ Logged in as admin'); }} lang={lang} /> }

      {toast && (<div className="toast"><Icon.Check /> {toast}</div>)}

      {/* TWEAKS PANEL */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Language" />
        <TweakRadio label="Site Language" value={tweaks.language} onChange={v => setTweak('language', v)}
          options={[{ value: 'en', label: '🇬🇧 English' }, { value: 'hi', label: '🇮🇳 हिंदी' }]} />

        <TweakSection label="Theme" />
        <TweakRadio label="Color theme" value={tweaks.theme} onChange={v => setTweak('theme', v)}
          options={[{ value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' }, { value: 'earth', label: 'Earth' }, { value: 'vibrant', label: 'Vibrant' }]} />

        <TweakSection label="College Branding" />
        <TweakText label="College Name" value={tweaks.collegeName} onChange={v => setTweak('collegeName', v)} />
        <TweakText label="Tagline" value={tweaks.collegeTagline} onChange={v => setTweak('collegeTagline', v)} />
        <TweakText label="Address" value={tweaks.collegeAddress} onChange={v => setTweak('collegeAddress', v)} />

        <TweakSection label="Features" />
        <TweakToggle label="Show AI Crop Doctor" value={tweaks.showAIDoctor} onChange={v => setTweak('showAIDoctor', v)} />
        <TweakToggle label="Show Carbon Tracker" value={tweaks.showCarbonTracker} onChange={v => setTweak('showCarbonTracker', v)} />
        <TweakToggle label="Show Subscriptions" value={tweaks.showSubscription} onChange={v => setTweak('showSubscription', v)} />
        <TweakToggle label="Show Top Marquee" value={tweaks.showMarquee} onChange={v => setTweak('showMarquee', v)} />

        <TweakSection label="Pricing & Shipping" />
        <TweakNumber label="Free shipping above (₹)" value={tweaks.freeShippingThreshold} onChange={v => setTweak('freeShippingThreshold', v)} min={0} max={5000} step={50} />

        <TweakSection label="Quick Navigation" />
          <TweakButton label="Go Home" onClick={() => setPage('home')} />
          <TweakButton label="Open Shop" onClick={() => goShop()} />
          <TweakButton label="View Sample Bill" onClick={() => {
            // Auto-add a sample item and complete order
            const p = window.PRODUCTS[2];
            const sampleCart = [{ ...p, cartKey: p.id, qty: 2 }, { ...window.PRODUCTS[5], cartKey: window.PRODUCTS[5].id, qty: 1 }];
            const subtotal = sampleCart.reduce((s, i) => s + i.price * i.qty, 0);
            const tax = Math.round(subtotal * 0.05);
            completeOrder({
              invoiceNo: genInvoiceNo(),
              date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }),
              customer: { name: 'Ramesh Kumar', phone: '+91 98765 43210', email: 'ramesh@kisan.in', address: 'Village Khairlanji, Tehsil Lanji', city: 'Balaghat', pin: '481445', state: 'Madhya Pradesh', landSize: '2', crop: 'Rice / Paddy' },
              items: sampleCart, subtotal, shipping: 0, tax, grand: subtotal + tax, payment: 'upi', college,
            });
          }} />
          <TweakButton label="Open AI Doctor" onClick={() => setAiOpen(true)} />
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
