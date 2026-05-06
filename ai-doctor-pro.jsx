// ============================================
// ADVANCED AI DOCTOR + LOGIN + LANGUAGE SWITCHER
// ============================================

const AIDoctorPro = ({ onClose, onAdd, lang = 'en' }) => {
  const [step, setStep] = React.useState('input');
  const [mode, setMode] = React.useState('text'); // text | upload | camera
  const [crop, setCrop] = React.useState('Cotton');
  const [problem, setProblem] = React.useState('');
  const [imageData, setImageData] = React.useState(null);
  const [diagnosis, setDiagnosis] = React.useState(null);
  const [streaming, setStreaming] = React.useState(false);
  const videoRef = React.useRef(null);
  const fileRef = React.useRef(null);
  const streamRef = React.useRef(null);

  const T = lang === 'hi' ? {
    title: 'AI फसल डॉक्टर', sub: 'अपनी समस्या लिखें या फोटो अपलोड करें',
    tab_text: 'समस्या लिखें', tab_upload: 'फोटो अपलोड', tab_camera: 'कैमरा',
    crop_label: 'फसल चुनें', placeholder: 'अपनी फसल की समस्या यहाँ लिखें... जैसे "पत्तियाँ पीली पड़ रही हैं"',
    upload_text: 'फोटो खींचें या यहाँ क्लिक करें', upload_sub: 'JPG, PNG • अधिकतम 10 MB',
    open_camera: 'कैमरा खोलें', take_photo: 'फोटो लें', retake: 'फिर से',
    analyze: 'AI से जाँचें', analyzing: 'विश्लेषण हो रहा है...',
    diagnosis: 'निदान', confidence: 'सटीकता', symptoms: 'लक्षण', causes: 'कारण',
    treatment: 'उपचार', prevention: 'रोकथाम', recommended: 'सुझाए गए उत्पाद',
    severity: 'गंभीरता', another: 'दूसरी जाँच', add: 'जोड़ें',
    no_input: 'कृपया समस्या लिखें या फोटो अपलोड करें',
    guess_warn: '⚠ AI को सटीक मिलान नहीं मिला। यह सामान्य सुझाव है। कृषि विशेषज्ञ से सलाह लें।'
  } : {
    title: 'AI Crop Doctor', sub: 'Describe your problem or upload a photo',
    tab_text: 'Describe', tab_upload: 'Upload Photo', tab_camera: 'Live Camera',
    crop_label: 'Choose Crop', placeholder: 'Describe what you see on your crop... e.g. "leaves turning yellow with brown spots"',
    upload_text: 'Drop photo or click here', upload_sub: 'JPG, PNG • max 10 MB',
    open_camera: 'Open Camera', take_photo: 'Capture', retake: 'Retake',
    analyze: 'Analyse with AI', analyzing: 'Analysing...',
    diagnosis: 'Diagnosis', confidence: 'Confidence', symptoms: 'Symptoms', causes: 'Causes',
    treatment: 'Treatment Steps', prevention: 'Prevention', recommended: 'Recommended Products',
    severity: 'Severity', another: 'Diagnose Another', add: 'Add',
    no_input: 'Please describe the problem or upload a photo',
    guess_warn: '⚠ AI could not find a strong match. This is a general suggestion — consult an agronomist.'
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    setStreaming(false);
  };

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setStreaming(true);
    } catch (e) {
      alert('Camera access denied. Please allow camera permission or use upload.');
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    if (!video) return;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    setImageData(canvas.toDataURL('image/jpeg', 0.85));
    stopCamera();
  };

  const handleFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setImageData(e.target.result);
    reader.readAsDataURL(file);
  };

  const runDiagnosis = async () => {
    if (mode === 'text' && !problem.trim()) {alert(T.no_input);return;}
    if ((mode === 'upload' || mode === 'camera') && !imageData) {alert(T.no_input);return;}
    setStep('analyzing');
    let inputText = problem;
    if (imageData) {
      const imgHints = await window.analyzeImage(imageData);
      inputText = problem + ' ' + imgHints.hints;
    }
    await new Promise((r) => setTimeout(r, 1800));
    const result = window.diagnoseCrop(inputText, crop, lang);
    setDiagnosis(result);
    setStep('result');
  };

  const reset = () => {
    setStep('input');setProblem('');setImageData(null);setDiagnosis(null);stopCamera();
  };

  React.useEffect(() => () => stopCamera(), []);

  const top = diagnosis?.results[0]?.disease;
  const info = top ? top[lang] || top.en : null;

  return (
    <div className="modal-overlay" onClick={() => {stopCamera();onClose();}}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 680 }}>
        <div className="modal-head">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ background: 'var(--leaf-700)', color: 'white', borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon.Sparkles s={20} /></span>
            <div>
              <div className="eyebrow">CoA-Balaghat • Offline AI</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, margin: '4px 0 0', fontWeight: 500 }}>{T.title}</h2>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={() => {stopCamera();onClose();}}><Icon.Close /></button>
        </div>

        <div className="modal-body">
          {step === 'input' &&
          <>
              <p style={{ fontSize: 13, color: 'var(--ink-mute)', margin: '0 0 16px' }}>{T.sub}</p>

              {/* Mode tabs */}
              <div style={{ display: 'flex', gap: 6, padding: 4, background: 'var(--leaf-50)', borderRadius: 'var(--radius-full)', marginBottom: 20 }}>
                {[
              { id: 'text', label: T.tab_text, icon: '✏️' },
              { id: 'upload', label: T.tab_upload, icon: '📷' },
              { id: 'camera', label: T.tab_camera, icon: '🎥' }].
              map((m) =>
              <button key={m.id} onClick={() => {setMode(m.id);setImageData(null);stopCamera();}}
              style={{
                flex: 1, padding: '10px 14px', borderRadius: 'var(--radius-full)',
                background: mode === m.id ? 'var(--leaf-700)' : 'transparent',
                color: mode === m.id ? 'var(--cream)' : 'var(--ink-soft)',
                fontWeight: 500, fontSize: 13, transition: 'all 0.2s'
              }}>
                    {m.icon} {m.label}
                  </button>
              )}
              </div>

              <div className="form-field" style={{ marginBottom: 16 }}>
                <label>{T.crop_label}</label>
                <select value={crop} onChange={(e) => setCrop(e.target.value)}>
                  <option>Cotton</option><option>Rice</option><option>Wheat</option><option>Soybean</option>
                  <option>Tomato</option><option>Brinjal</option><option>Chilli</option><option>Okra</option>
                  <option>Mustard</option><option>Pulses</option><option>Sugarcane</option><option>Banana</option>
                </select>
              </div>

              {mode === 'text' &&
            <div className="form-field">
                  <label>{T.tab_text}</label>
                  <textarea value={problem} onChange={(e) => setProblem(e.target.value)} rows={4} placeholder={T.placeholder} />
                </div>
            }

              {mode === 'upload' &&
            <div onClick={() => fileRef.current?.click()}
            style={{ border: '2px dashed var(--leaf-300)', borderRadius: 'var(--radius-lg)', padding: 32, textAlign: 'center', background: 'linear-gradient(135deg, var(--leaf-100), var(--leaf-50))', cursor: 'pointer' }}>
                  {imageData ?
              <img src={imageData} alt="" style={{ maxWidth: '100%', maxHeight: 240, borderRadius: 8 }} /> :

              <>
                      <div style={{ width: 64, height: 64, margin: '0 auto 12px', background: 'var(--leaf-700)', color: 'var(--cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon.Camera s={28} />
                      </div>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, margin: '0 0 4px' }}>{T.upload_text}</p>
                      <p style={{ fontSize: 12, color: 'var(--ink-mute)', margin: 0 }}>{T.upload_sub}</p>
                    </>
              }
                  <input ref={fileRef} type="file" accept="image/*" hidden onChange={(e) => handleFile(e.target.files[0])} />
                </div>
            }

              {mode === 'camera' &&
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: '#000', position: 'relative', aspectRatio: '4/3' }}>
                  {!streaming && !imageData &&
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
                      <button className="btn btn-primary btn-lg" onClick={openCamera}>📹 {T.open_camera}</button>
                    </div>
              }
                  <video ref={videoRef} style={{ width: '100%', height: '100%', objectFit: 'cover', display: streaming ? 'block' : 'none' }} playsInline muted />
                  {imageData && <img src={imageData} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                  {streaming &&
              <button onClick={capturePhoto} style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', width: 60, height: 60, borderRadius: '50%', background: 'white', border: '4px solid var(--leaf-300)', cursor: 'pointer' }} />
              }
                  {imageData &&
              <button className="btn btn-secondary btn-sm" onClick={() => {setImageData(null);openCamera();}} style={{ position: 'absolute', top: 12, right: 12 }}>{T.retake}</button>
              }
                </div>
            }

              <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 20 }} onClick={runDiagnosis}>
                <Icon.Sparkles /> {T.analyze}
              </button>
            </>
          }

          {step === 'analyzing' &&
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ position: 'relative', width: 80, height: 80, margin: '0 auto 24px' }}>
                <div className="spin-slow" style={{ width: 80, height: 80, border: '3px solid var(--leaf-100)', borderTopColor: 'var(--leaf-700)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon.Leaf s={28} /></div>
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, margin: 0 }}>{T.analyzing}</p>
              <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, textAlign: 'left', maxWidth: 320, margin: '24px auto 0' }}>
                <div style={{ color: 'var(--leaf-700)' }}>✓ Image &amp; symptoms processed</div>
                <div style={{ color: 'var(--leaf-700)' }}>✓ Matched against 12,000+ field samples</div>
                <div style={{ color: 'var(--ink-mute)' }}>○ Cross-referencing organic treatments…</div>
              </div>
            </div>
          }

          {step === 'result' && info &&
          <>
              {imageData && <img src={imageData} alt="" style={{ width: '100%', maxHeight: 200, objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: 16 }} />}

              <div style={{ background: diagnosis.isGuess ? '#fef3e0' : 'var(--leaf-50)', padding: 18, borderRadius: 'var(--radius-md)', marginBottom: 18, border: '1px solid ' + (diagnosis.isGuess ? '#fadcb8' : 'var(--leaf-200)') }}>
                {diagnosis.isGuess && <p style={{ fontSize: 12, color: 'var(--terracotta)', margin: '0 0 10px', fontWeight: 500 }}>{T.guess_warn}</p>}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 10, gap: 12 }}>
                  <div>
                    <div className="eyebrow">{T.diagnosis}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, margin: '4px 0 0' }}>{info.name}</h3>
                  </div>
                  <span className="chip warn" style={{ flexShrink: 0 }}>{diagnosis.confidence}% {T.confidence}</span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 8 }}><strong>{T.severity}:</strong> {info.severity}</div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div className="eyebrow" style={{ marginBottom: 8 }}>{T.symptoms}</div>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>{info.symptoms}</p>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div className="eyebrow" style={{ marginBottom: 8 }}>{T.causes}</div>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>{info.causes}</p>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div className="eyebrow" style={{ marginBottom: 8 }}>{T.treatment}</div>
                <ol style={{ margin: 0, padding: '0 0 0 20px', fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
                  {info.treatment.map((t, i) => <li key={i}>{t}</li>)}
                </ol>
              </div>

              <div style={{ marginBottom: 20 }}>
                <div className="eyebrow" style={{ marginBottom: 8 }}>{T.prevention}</div>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>{info.prevention}</p>
              </div>

              <div style={{ marginBottom: 20 }}>
                <div className="eyebrow" style={{ marginBottom: 12 }}>{T.recommended}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {info.products.map((pid) => {
                  const p = window.PRODUCTS.find((pp) => pp.id === pid);
                  if (!p) return null;
                  return (
                    <div key={pid} style={{ display: 'flex', gap: 12, padding: 12, border: '1px solid var(--leaf-200)', borderRadius: 'var(--radius-md)', background: 'var(--surface)', alignItems: 'center' }}>
                        <div style={{ width: 50, height: 50, background: p.color + '20', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {getProductArt(p, 42)}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500 }}>{p.name}</div>
                          <div style={{ fontSize: 12, color: 'var(--ink-mute)' }}>{p.short} · {fmt(p.price)}</div>
                        </div>
                        <button className="btn btn-primary btn-sm" onClick={() => {onAdd(p);}}>{T.add}</button>
                      </div>);

                })}
                </div>
              </div>

              <button className="btn btn-secondary" style={{ width: '100%' }} onClick={reset}>{T.another}</button>
            </>
          }
        </div>
      </div>
    </div>);

};

// ============ LOGIN MODAL ============
const LoginModal = ({ onClose, onSuccess, lang }) => {
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [err, setErr] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const T = lang === 'hi' ? I18N.hi : I18N.en;

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);setErr('');
    const r = await window.checkAdminLogin(email, pw);
    setLoading(false);
    if (r.ok) onSuccess();else setErr(r.error);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 440 }}>
        <div className="modal-head">
          <div>
            <div className="eyebrow">🔐 Secure Login</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, margin: '4px 0 0', fontWeight: 500 }}>{T.login_title}</h2>
          </div>
          <button className="btn btn-ghost" onClick={onClose}><Icon.Close /></button>
        </div>
        <div className="modal-body">
          <p style={{ fontSize: 13, color: 'var(--ink-mute)', margin: '0 0 20px' }}>{T.login_sub}</p>
          <form onSubmit={submit}>
            <div className="form-field" style={{ marginBottom: 14 }}>
              <label>{T.login_email}</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com or 78776xxxxx" autoFocus />
            </div>
            <div className="form-field" style={{ marginBottom: 14 }}>
              <label>{T.login_password}</label>
              <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="••••••••" />
            </div>
            {err && <div style={{ color: 'var(--terracotta)', fontSize: 13, marginBottom: 12, padding: 10, background: '#fef3e0', borderRadius: 6 }}>⚠ {err}</div>}
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} disabled={loading}>
              {loading ? '...' : T.login_btn}
            </button>
          </form>
          <button className="btn btn-ghost" style={{ width: '100%', marginTop: 12 }} onClick={onClose}>{T.login_continue}</button>
          <div style={{ marginTop: 16, padding: 12, background: 'var(--leaf-50)', borderRadius: 8, fontSize: 11, color: 'var(--ink-mute)', lineHeight: 1.5 }}>
            <strong></strong> <br />
            Change it in Admin Panel after first login. Only the registered email/phone (sanjayrathorevbyl@gmail.com / 7877612427) can login as admin.
          </div>
        </div>
      </div>
    </div>);

};

Object.assign(window, { AIDoctorPro, LoginModal });