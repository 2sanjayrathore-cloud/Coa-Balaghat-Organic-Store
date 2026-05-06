// ============================================
// SHOP / PRODUCT DETAIL / CART / CHECKOUT / INVOICE
// ============================================

const ShopPage = ({ filterCat, onProduct, onAdd }) => {
  const [cat, setCat] = React.useState(filterCat || 'all');
  const [sort, setSort] = React.useState('featured');
  const [maxPrice, setMaxPrice] = React.useState(5000);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => { if (filterCat) setCat(filterCat); }, [filterCat]);

  let filtered = window.PRODUCTS.filter(p =>
    (cat === 'all' || p.cat === cat) &&
    p.price <= maxPrice &&
    (search === '' || p.name.toLowerCase().includes(search.toLowerCase()) || p.short.toLowerCase().includes(search.toLowerCase()))
  );
  if (sort === 'price-low') filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === 'price-high') filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="container">
      <div style={{ padding: '40px 0 20px' }}>
        <div className="eyebrow">Shop</div>
        <h1 className="section-title" style={{ marginTop: 8 }}>All organic <em>inputs.</em></h1>
        <p className="section-sub" style={{ marginTop: 12 }}>{filtered.length} products from our college production unit.</p>
      </div>

      <div style={{ display: 'flex', gap: 12, marginBottom: 24, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 240, position: 'relative' }}>
          <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-mute)' }}><Icon.Search s={16} /></span>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search products, e.g. 'vermicompost'…"
            style={{ width: '100%', padding: '14px 16px 14px 44px', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-full)', fontSize: 14, background: 'var(--surface)', color: 'var(--text)' }}
          />
        </div>
        <select value={sort} onChange={e => setSort(e.target.value)}
          style={{ padding: '12px 18px', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-full)', fontSize: 14, background: 'var(--surface)', color: 'var(--text)' }}>
          <option value="featured">Sort: Featured</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="shop-grid">
        <aside className="shop-filters">
          <div className="filter-group">
            <h4 className="filter-title">Categories</h4>
            <label className="filter-opt">
              <input type="radio" checked={cat === 'all'} onChange={() => setCat('all')} />
              <span>All ({window.PRODUCTS.length})</span>
            </label>
            {window.CATEGORIES.map(c => (
              <label key={c.id} className="filter-opt">
                <input type="radio" checked={cat === c.id} onChange={() => setCat(c.id)} />
                <span>{c.name} ({window.PRODUCTS.filter(p => p.cat === c.id).length})</span>
              </label>
            ))}
          </div>
          <div className="filter-group">
            <h4 className="filter-title">Max Price</h4>
            <input type="range" min="100" max="5000" step="50" value={maxPrice} onChange={e => setMaxPrice(+e.target.value)}
              style={{ width: '100%', accentColor: 'var(--leaf-700)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--ink-mute)', marginTop: 6 }}>
              <span>₹100</span><span style={{ fontWeight: 600, color: 'var(--leaf-700)' }}>up to {fmt(maxPrice)}</span>
            </div>
          </div>
          <div className="filter-group">
            <h4 className="filter-title">Quick Filters</h4>
            <label className="filter-opt"><input type="checkbox" /> <span>In stock only</span></label>
            <label className="filter-opt"><input type="checkbox" /> <span>Bestsellers</span></label>
            <label className="filter-opt"><input type="checkbox" /> <span>Live cultures</span></label>
          </div>
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="empty-state">
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 24 }}>No products match those filters.</p>
            </div>
          ) : (
            <div className="prod-grid">
              {filtered.map(p => <ProductCard key={p.id} product={p} onClick={() => onProduct(p.id)} onAdd={onAdd} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============ PRODUCT DETAIL ============
const ProductDetail = ({ productId, onAdd, onBack }) => {
  const product = window.PRODUCTS.find(p => p.id === productId);
  const [size, setSize] = React.useState(product.sizes[0]);
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('about');

  if (!product) return null;
  const price = size.price;

  return (
    <div className="container">
      <button className="btn btn-ghost" onClick={onBack} style={{ margin: '24px 0 0' }}>
        ← Back to shop
      </button>
      <div className="pdp">
        <div className="pdp-gallery" style={{ background: product.color + '15' }}>
          {getProductArt(product, 380)}
          {product.badge && <div style={{ position: 'absolute', top: 24, left: 24 }}><span className="chip solid">{product.badge}</span></div>}
        </div>
        <div className="pdp-info">
          <div>
            <div className="eyebrow">{window.CATEGORIES.find(c => c.id === product.cat)?.name}</div>
            <h1 className="pdp-title">{product.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12, color: 'var(--ink-soft)', fontSize: 14 }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[1,2,3,4,5].map(i => <Illustrations.Star key={i} size={14} filled={i <= Math.round(product.rating)} />)}
              </div>
              <span>{product.rating}</span><span>·</span><span>{product.reviews} reviews</span><span>·</span>
              <span style={{ color: 'var(--leaf-700)', fontWeight: 600 }}>● {product.stock}</span>
            </div>
          </div>
          <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.6 }}>{product.desc}</p>

          <div className="pdp-section">
            <h3>Choose size</h3>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {product.sizes.map(s => (
                <button key={s.label} onClick={() => setSize(s)}
                  style={{
                    padding: '12px 20px', borderRadius: 'var(--radius-md)',
                    border: '2px solid ' + (size.label === s.label ? 'var(--leaf-700)' : 'var(--border-strong)'),
                    background: size.label === s.label ? 'var(--leaf-50)' : 'var(--surface)',
                    color: 'var(--text)',
                    fontWeight: 500, fontSize: 14, cursor: 'pointer',
                  }}>
                  <div>{s.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-mute)', marginTop: 2 }}>{fmt(s.price)}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="pdp-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 13, color: 'var(--ink-mute)' }}>Total</div>
                <div className="pdp-price">{fmt(price * qty)}</div>
              </div>
              <div className="qty-control" style={{ height: 44 }}>
                <button className="qty-btn" style={{ width: 44, height: 40 }} onClick={() => setQty(Math.max(1, qty - 1))}><Icon.Minus s={16} /></button>
                <div className="qty-val" style={{ width: 50, fontSize: 16 }}>{qty}</div>
                <button className="qty-btn" style={{ width: 44, height: 40 }} onClick={() => setQty(qty + 1)}><Icon.Plus s={16} /></button>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              <button className="btn btn-primary btn-lg" style={{ flex: 1 }} onClick={() => onAdd({ ...product, price: size.price, sizeLabel: size.label }, qty)}>
                <Icon.Cart s={16} /> Add to Cart
              </button>
              <button className="btn btn-secondary btn-lg" style={{ background: '#25D366', color: 'white', border: 'none' }}>
                <Icon.WhatsApp /> WhatsApp
              </button>
            </div>
          </div>

          <div className="pdp-section">
            <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border)', marginBottom: 16 }}>
              {['about', 'usage', 'composition'].map(t => (
                <button key={t} onClick={() => setTab(t)}
                  style={{
                    padding: '10px 16px', fontSize: 14, fontWeight: 500,
                    color: tab === t ? 'var(--leaf-800)' : 'var(--ink-mute)',
                    borderBottom: '2px solid ' + (tab === t ? 'var(--leaf-700)' : 'transparent'),
                    textTransform: 'capitalize', marginBottom: -1,
                  }}>{t}</button>
              ))}
            </div>
            {tab === 'about' && (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {product.benefits.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: 8, fontSize: 14, padding: '6px 0' }}>
                    <span style={{ color: 'var(--leaf-700)' }}><Icon.Check s={16} /></span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {tab === 'usage' && <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{product.usage}</p>}
            {tab === 'composition' && <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{product.composition}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============ CART DRAWER ============
const CartDrawer = ({ open, items, onClose, onUpdate, onRemove, onCheckout }) => {
  if (!open) return null;
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 999 ? 0 : 60;
  const co2 = items.reduce((s, i) => s + i.qty * 1.4, 0);
  return (
    <>
      <div className="cart-drawer-overlay" onClick={onClose} />
      <div className="cart-drawer">
        <div className="cart-head">
          <h2 className="cart-head-title">Your Cart ({items.length})</h2>
          <button className="btn btn-ghost" onClick={onClose}><Icon.Close /></button>
        </div>
        {items.length === 0 ? (
          <div className="empty-state" style={{ flex: 1 }}>
            <Illustrations.Seedling size={100} color="var(--leaf-400)" />
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginTop: 16 }}>Your cart is empty</p>
            <p style={{ color: 'var(--ink-mute)', fontSize: 14 }}>Add products to get started.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(it => (
                <div key={it.cartKey} className="cart-item">
                  <div className="cart-item-img">{getProductArt(it, 70)}</div>
                  <div>
                    <h4 className="cart-item-name">{it.name}</h4>
                    <div className="cart-item-meta">{it.sizeLabel || it.unit} · {fmt(it.price)}</div>
                    <div className="qty-control">
                      <button className="qty-btn" onClick={() => onUpdate(it.cartKey, it.qty - 1)}><Icon.Minus s={12} /></button>
                      <div className="qty-val">{it.qty}</div>
                      <button className="qty-btn" onClick={() => onUpdate(it.cartKey, it.qty + 1)}><Icon.Plus s={12} /></button>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 600, fontSize: 15 }}>{fmt(it.price * it.qty)}</div>
                    <button onClick={() => onRemove(it.cartKey)} style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 8, textDecoration: 'underline' }}>Remove</button>
                  </div>
                </div>
              ))}

              {/* Carbon widget */}
              <div className="carbon-widget" style={{ marginTop: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 11, opacity: 0.8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Carbon Impact</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 500, marginTop: 4 }}>−{co2.toFixed(1)} kg CO₂</div>
                    <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>This order absorbs more carbon than it emits.</div>
                  </div>
                  <Icon.Leaf s={32} />
                </div>
              </div>
            </div>
            <div className="cart-foot">
              <div className="cart-totals">
                <div className="cart-total-row"><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
                <div className="cart-total-row"><span>Shipping {shipping === 0 && '✓ Free'}</span><span>{shipping === 0 ? 'FREE' : fmt(shipping)}</span></div>
                <div className="cart-total-row grand"><span>Total</span><span>{fmt(subtotal + shipping)}</span></div>
              </div>
              <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={onCheckout}>
                Proceed to Checkout <Icon.Arrow />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

// ============ CHECKOUT ============
const Checkout = ({ items, onComplete, onBack, college }) => {
  const [pay, setPay] = React.useState('upi');
  const [form, setForm] = React.useState({
    name: 'Ramesh Kumar', phone: '+91 98765 43210', email: 'ramesh@kisan.in',
    address: 'Village Khairlanji, Tehsil Lanji', city: 'Balaghat', pin: '481445', state: 'Madhya Pradesh',
    landSize: '2', crop: 'Rice / Paddy', notes: '',
  });
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 999 ? 0 : 60;
  const tax = Math.round(subtotal * 0.05);
  const grand = subtotal + shipping + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete({
      invoiceNo: genInvoiceNo(),
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }),
      customer: form,
      items, subtotal, shipping, tax, grand,
      payment: pay,
      college,
    });
  };

  return (
    <div className="container">
      <button className="btn btn-ghost" onClick={onBack} style={{ margin: '24px 0 0' }}>← Continue Shopping</button>
      <div style={{ padding: '24px 0 0' }}>
        <div className="eyebrow">Checkout</div>
        <h1 className="section-title" style={{ marginTop: 8 }}>Almost <em>there.</em></h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="checkout-grid">
          <div className="checkout-form">
            <div className="form-section">
              <h3 className="form-section-title">Contact</h3>
              <p className="form-section-sub">We'll send your invoice and tracking link here.</p>
              <div className="form-row">
                <div className="form-field"><label>Full Name</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required /></div>
                <div className="form-field"><label>Mobile</label><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required /></div>
                <div className="form-field full"><label>Email</label><input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Delivery Address</h3>
              <div className="form-row">
                <div className="form-field full"><label>Address Line</label><input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} required /></div>
                <div className="form-field"><label>City / Village</label><input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} required /></div>
                <div className="form-field"><label>PIN Code</label><input value={form.pin} onChange={e => setForm({ ...form, pin: e.target.value })} required /></div>
                <div className="form-field full"><label>State</label>
                  <select value={form.state} onChange={e => setForm({ ...form, state: e.target.value })}>
                    <option>Madhya Pradesh</option><option>Maharashtra</option><option>Chhattisgarh</option><option>Rajasthan</option><option>Uttar Pradesh</option><option>Karnataka</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Farm Details <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--ink-mute)' }}>· Helps our agronomist</span></h3>
              <div className="form-row">
                <div className="form-field"><label>Land Size (acres)</label><input value={form.landSize} onChange={e => setForm({ ...form, landSize: e.target.value })} /></div>
                <div className="form-field"><label>Primary Crop</label>
                  <select value={form.crop} onChange={e => setForm({ ...form, crop: e.target.value })}>
                    <option>Rice / Paddy</option><option>Wheat</option><option>Cotton</option><option>Soybean</option><option>Vegetables</option><option>Sugarcane</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Payment</h3>
              <div className="pay-options">
                {[
                  { id: 'upi', label: 'UPI / GPay', icon: '💳' },
                  { id: 'card', label: 'Credit / Debit Card', icon: '💳' },
                  { id: 'cod', label: 'Cash on Delivery', icon: '💰' },
                  { id: 'netbank', label: 'Net Banking', icon: '🏦' },
                ].map(opt => (
                  <div key={opt.id} className={`pay-opt ${pay === opt.id ? 'selected' : ''}`} onClick={() => setPay(opt.id)}>
                    <div className="pay-opt-radio" />
                    <div style={{ fontSize: 18 }}>{opt.icon}</div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{opt.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="summary-card">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, margin: '0 0 16px' }}>Order Summary</h3>
              <div style={{ maxHeight: 240, overflowY: 'auto', marginBottom: 16 }}>
                {items.map(it => (
                  <div key={it.cartKey} style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'center' }}>
                    <div style={{ width: 50, height: 50, background: it.color + '20', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {getProductArt(it, 45)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500, fontSize: 13 }}>{it.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{it.sizeLabel || it.unit} × {it.qty}</div>
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{fmt(it.price * it.qty)}</div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                <div className="cart-total-row"><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
                <div className="cart-total-row"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : fmt(shipping)}</span></div>
                <div className="cart-total-row"><span>GST (5%)</span><span>{fmt(tax)}</span></div>
                <div className="cart-total-row grand"><span>Total</span><span>{fmt(grand)}</span></div>
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 20 }}>
                Place Order • {fmt(grand)}
              </button>
              <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--ink-mute)', marginTop: 12 }}>
                🔒 Secure checkout · Razorpay / UPI verified
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

// ============ INVOICE ============
const Invoice = ({ order, onShop }) => {
  if (!order) return null;
  const { invoiceNo, date, customer, items, subtotal, shipping, tax, grand, payment, college } = order;
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', padding: '32px 16px' }}>
      <div className="container-narrow no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--leaf-700)', fontWeight: 600 }}>
            <Icon.Check /> Order Placed Successfully
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, margin: '6px 0 0' }}>Thank you, {customer.name.split(' ')[0]}!</h1>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary" onClick={() => window.print()}><Icon.Print /> Print</button>
          <button className="btn btn-primary" onClick={onShop}>Continue Shopping <Icon.Arrow /></button>
        </div>
      </div>

      <div className="invoice">
        <div className="invoice-head">
          <div className="invoice-logo">
            <div className="invoice-logo-mark"><Illustrations.Logo size={42} /></div>
            <div className="invoice-logo-text">
              <h2>{college.name}</h2>
              <p>{college.tagline}</p>
              <p>{college.address}</p>
            </div>
          </div>
          <div className="invoice-meta">
            <h1>INVOICE</h1>
            <p><strong>No.</strong> {invoiceNo}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Payment:</strong> {payment.toUpperCase()}</p>
          </div>
        </div>

        <div className="invoice-grid">
          <div className="invoice-block">
            <h4>Bill To</h4>
            <p className="name">{customer.name}</p>
            <p>{customer.address}</p>
            <p>{customer.city}, {customer.state} — {customer.pin}</p>
            <p>📞 {customer.phone}</p>
            <p>✉ {customer.email}</p>
          </div>
          <div className="invoice-block">
            <h4>Farm Profile</h4>
            <p><strong>Crop:</strong> {customer.crop}</p>
            <p><strong>Land Size:</strong> {customer.landSize} acres</p>
            <p><strong>Region:</strong> {customer.state}</p>
            <p style={{ marginTop: 8, fontSize: 11, color: '#888' }}>GSTIN: 23AAACC1234A1Z2</p>
            <p style={{ fontSize: 11, color: '#888' }}>FSSAI: 11512004000123</p>
          </div>
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th style={{ width: 36 }}>#</th>
              <th>Item</th>
              <th className="right">Qty</th>
              <th className="right">Unit Price</th>
              <th className="right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={it.cartKey}>
                <td>{i + 1}</td>
                <td>
                  <div className="item-name">{it.name}</div>
                  <div className="item-desc">{it.short} · {it.sizeLabel || it.unit}</div>
                </td>
                <td className="right">{it.qty}</td>
                <td className="right">{fmt(it.price)}</td>
                <td className="right" style={{ fontWeight: 600 }}>{fmt(it.price * it.qty)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="invoice-totals">
          <div className="row"><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
          <div className="row"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : fmt(shipping)}</span></div>
          <div className="row"><span>GST @ 5%</span><span>{fmt(tax)}</span></div>
          <div className="row grand"><span>Grand Total</span><span>{fmt(grand)}</span></div>
        </div>

        <div className="invoice-foot">
          <div className="invoice-thanks">
            <p className="big">Thank you for buying organic! 🌱</p>
            <p>Your purchase contributes to student-led agroecology research at College of Agriculture, Balaghat.</p>
            <p>This order absorbs <strong style={{ color: 'var(--leaf-700)' }}>{(items.reduce((s, i) => s + i.qty * 1.4, 0)).toFixed(1)} kg of CO₂</strong> from the atmosphere.</p>
            <p style={{ marginTop: 16 }}>For queries: <strong>store@coabalaghat.edu.in</strong> · +91 7632-240-318</p>
          </div>
          <div className="qr-block">
            <svg viewBox="0 0 80 80" width="100" height="100" style={{ background: 'white', padding: 4, border: '1px solid #eee', borderRadius: 6 }}>
              {/* Stylized QR */}
              <rect width="80" height="80" fill="white" />
              {[...Array(8)].map((_, r) => [...Array(8)].map((_, c) => {
                const seed = (r * 8 + c + invoiceNo.length) % 7;
                if (seed > 3) return <rect key={`${r}-${c}`} x={4 + c * 9} y={4 + r * 9} width="8" height="8" fill="#1a1f14" />;
                return null;
              }))}
              {/* Corner markers */}
              <rect x="4" y="4" width="20" height="20" fill="white" stroke="#1a1f14" strokeWidth="2" />
              <rect x="9" y="9" width="10" height="10" fill="#1a1f14" />
              <rect x="56" y="4" width="20" height="20" fill="white" stroke="#1a1f14" strokeWidth="2" />
              <rect x="61" y="9" width="10" height="10" fill="#1a1f14" />
              <rect x="4" y="56" width="20" height="20" fill="white" stroke="#1a1f14" strokeWidth="2" />
              <rect x="9" y="61" width="10" height="10" fill="#1a1f14" />
            </svg>
            <p style={{ marginTop: 6 }}>Scan to verify<br />authenticity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============ AI DOCTOR MODAL ============
const AIDoctor = ({ onClose, onAdd }) => {
  const [step, setStep] = React.useState('upload');
  const [crop, setCrop] = React.useState('Cotton');

  const startAnalysis = () => {
    setStep('analyzing');
    setTimeout(() => setStep('result'), 2400);
  };

  const recommended = window.PRODUCTS.find(p => p.id === 'neemastra-1l');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ background: 'var(--leaf-700)', color: 'white', borderRadius: 8, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon.Sparkles /></span>
              <div>
                <div className="eyebrow">AI Crop Doctor</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, margin: '4px 0 0', fontWeight: 500 }}>Diagnose your crop</h2>
              </div>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={onClose}><Icon.Close /></button>
        </div>

        <div className="modal-body">
          {step === 'upload' && (
            <>
              <div style={{ border: '2px dashed var(--leaf-300)', borderRadius: 'var(--radius-lg)', padding: 48, textAlign: 'center', background: 'linear-gradient(135deg, var(--leaf-100), var(--leaf-50))', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -10, left: -10, opacity: 0.25 }}>
                  <Illustrations.Seedling size={70} color="var(--leaf-600)" />
                </div>
                <div style={{ position: 'absolute', bottom: -10, right: -10, opacity: 0.25, transform: 'rotate(20deg)' }}>
                  <Illustrations.Seedling size={60} color="var(--leaf-700)" />
                </div>
                <div style={{ width: 80, height: 80, margin: '0 auto 16px', background: 'var(--leaf-700)', color: 'var(--cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(70, 109, 36, 0.25)', position: 'relative', zIndex: 1 }}>
                  <Icon.Camera s={32} />
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, margin: '0 0 6px' }}>Upload a photo of the affected leaf</p>
                <p style={{ fontSize: 13, color: 'var(--ink-mute)', margin: 0 }}>JPG, PNG · max 10 MB · we use vision AI to identify the issue</p>
              </div>
              <div className="form-field" style={{ marginTop: 20 }}>
                <label>Crop type</label>
                <select value={crop} onChange={e => setCrop(e.target.value)}>
                  <option>Cotton</option><option>Rice / Paddy</option><option>Wheat</option><option>Soybean</option><option>Tomato</option><option>Brinjal</option>
                </select>
              </div>
              <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 16 }} onClick={startAnalysis}>
                <Icon.Sparkles /> Analyse with AI
              </button>
              <p style={{ fontSize: 11, color: 'var(--ink-mute)', textAlign: 'center', marginTop: 12 }}>Powered by CoA-Balaghat's research database of 12,000+ field samples</p>
            </>
          )}

          {step === 'analyzing' && (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ position: 'relative', width: 80, height: 80, margin: '0 auto 24px' }}>
                <div className="spin-slow" style={{ width: 80, height: 80, border: '3px solid var(--leaf-100)', borderTopColor: 'var(--leaf-700)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon.Leaf s={28} /></div>
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, margin: 0 }}>Analysing your crop…</p>
              <p style={{ fontSize: 13, color: 'var(--ink-mute)', marginTop: 6 }}>Comparing with 12,000+ samples</p>
              <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, textAlign: 'left', maxWidth: 280, margin: '24px auto 0' }}>
                <div style={{ color: 'var(--leaf-700)' }}>✓ Image enhanced</div>
                <div style={{ color: 'var(--leaf-700)' }}>✓ Pest signature detected</div>
                <div style={{ color: 'var(--ink-mute)' }} className="pulse-soft">○ Cross-referencing recommendations…</div>
              </div>
            </div>
          )}

          {step === 'result' && (
            <>
              <div style={{ background: 'var(--leaf-50)', padding: 20, borderRadius: 'var(--radius-md)', marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span className="chip warn">⚠ Mealybug Infestation</span>
                  <span style={{ fontSize: 12, color: 'var(--ink-mute)' }}>87% confidence</span>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, color: 'var(--ink-soft)' }}>Cotton mealybugs detected on leaf undersides. Population is mild–moderate. Early treatment recommended to prevent spread.</p>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div className="eyebrow">Recommended Treatment</div>
                <div style={{ display: 'flex', gap: 14, marginTop: 12, padding: 14, border: '1px solid var(--leaf-200)', borderRadius: 'var(--radius-md)', background: 'var(--surface)' }}>
                  <div style={{ width: 60, height: 60, background: recommended.color + '20', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {getProductArt(recommended, 50)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500 }}>{recommended.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-mute)', marginBottom: 6 }}>Spray 1:10 dilution every 7 days for 3 weeks</div>
                    <div style={{ fontWeight: 600, color: 'var(--leaf-800)' }}>{fmt(recommended.price)}</div>
                  </div>
                  <button className="btn btn-primary btn-sm" onClick={() => { onAdd(recommended); onClose(); }}>Add</button>
                </div>
              </div>

              <button className="btn btn-secondary" style={{ width: '100%' }} onClick={() => setStep('upload')}>Diagnose Another</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { ShopPage, ProductDetail, CartDrawer, Checkout, Invoice, AIDoctor });
