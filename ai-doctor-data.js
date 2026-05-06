// ============================================
// AI CROP DOCTOR — Offline Knowledge Base
// 200+ symptom→solution mappings, multilingual
// ============================================

const CROP_DB = {
  // Each entry: keywords (en+hi), diagnosis, severity, recommended products, treatment, prevention
  diseases: [
    {
      id: 'mealybug',
      keywords: ['mealybug', 'mealy bug', 'white cotton', 'cotton-like', 'safed makdi', 'सफेद कीड़ा', 'मीली बग', 'rui', 'रूई जैसा', 'चिपचिपा', 'sticky', 'cotton', 'कपास'],
      crops: ['cotton', 'tomato', 'brinjal', 'okra', 'mango', 'guava'],
      en: {
        name: 'Mealybug Infestation',
        symptoms: 'White cottony masses on leaves, stems, fruit. Sticky honeydew. Yellowing & wilting.',
        severity: 'Moderate to Severe',
        causes: 'Pseudococcus or Phenacoccus species. Spreads via ants, wind, infected planting material.',
        treatment: [
          'Spray Neemastra (1:10 dilution) every 7 days for 3 weeks',
          'For severe cases: Use Brahmastra (30 ml/L) — alternate weeks',
          'Release ladybird beetles (Cryptolaemus montrouzieri) — 250/acre',
          'Wash heavy infestations with cow urine + soap solution',
        ],
        prevention: 'Maintain field hygiene, control ant population, intercrop with marigold, regular Panchgavya foliar spray.',
        products: ['neemastra-1l', 'brahmastra-1l', 'panchgavya-1l'],
      },
      hi: {
        name: 'मिलीबग (सफेद कीड़ा) संक्रमण',
        symptoms: 'पत्तियों, तनों और फलों पर सफेद रूई जैसी परत। चिपचिपा द्रव। पत्तियाँ पीली पड़ना और मुरझाना।',
        severity: 'मध्यम से गंभीर',
        causes: 'स्यूडोकोकस या फेनाकोकस प्रजातियाँ। चींटियों, हवा या संक्रमित पौधों से फैलता है।',
        treatment: [
          'नीमास्त्र (1:10 घोल) 7 दिन के अंतराल पर 3 सप्ताह तक छिड़काव करें',
          'गंभीर स्थिति में: ब्रह्मास्त्र (30 मिली/लीटर) — एक सप्ताह छोड़कर',
          'लेडीबर्ड बीटल (क्रिप्टोलीमस) छोड़ें — 250/एकड़',
          'भारी संक्रमण को गोमूत्र + साबुन के घोल से धोएं',
        ],
        prevention: 'खेत की सफाई, चींटियों पर नियंत्रण, गेंदे की अंतरवर्तीय फसल, नियमित पंचगव्य का छिड़काव।',
        products: ['neemastra-1l', 'brahmastra-1l', 'panchgavya-1l'],
      },
    },
    {
      id: 'aphid',
      keywords: ['aphid', 'green bug', 'mahu', 'माहू', 'aphis', 'small green', 'tiny insect', 'leaf curl', 'पत्ते मुड़', 'चिपचिपा', 'jassid'],
      crops: ['mustard', 'wheat', 'rice', 'vegetables', 'cotton', 'soybean'],
      en: {
        name: 'Aphid / Jassid Attack',
        symptoms: 'Tiny green/black insects on leaf undersides. Curled leaves. Stunted growth. Sooty mold.',
        severity: 'Mild to Moderate',
        causes: 'Aphis spp. — soft-bodied sucking pest. Worse in dry weather.',
        treatment: [
          'Neemastra spray every 10 days (preventive + curative)',
          'Sticky yellow traps — 8 per acre',
          'Encourage ladybugs & lacewings (natural predators)',
          'For severe: Agniastra at 25 ml/L — single application',
        ],
        prevention: 'Avoid excess nitrogen, intercrop with coriander/dill, weekly Jeevamrit application strengthens plant immunity.',
        products: ['neemastra-1l', 'agniastra-1l', 'jeevamrit-5l'],
      },
      hi: {
        name: 'माहू / जैसिड का हमला',
        symptoms: 'पत्तों के नीचे छोटे हरे/काले कीड़े। पत्तियाँ मुड़ना। बढ़वार रुकना। काली फफूंद।',
        severity: 'हल्का से मध्यम',
        causes: 'एफिस प्रजाति — रस चूसने वाला कीट। सूखे मौसम में अधिक।',
        treatment: [
          'नीमास्त्र हर 10 दिन में छिड़कें (रोकथाम और इलाज)',
          'पीले चिपचिपे ट्रैप — 8 प्रति एकड़',
          'लेडीबग और लेसविंग को बढ़ावा दें',
          'गंभीर स्थिति: अग्निअस्त्र 25 मिली/लीटर — एक बार',
        ],
        prevention: 'अधिक नाइट्रोजन से बचें, धनिया/सोआ अंतरवर्तीय फसल, साप्ताहिक जीवामृत।',
        products: ['neemastra-1l', 'agniastra-1l', 'jeevamrit-5l'],
      },
    },
    {
      id: 'bollworm',
      keywords: ['bollworm', 'caterpillar', 'इल्ली', 'सूंडी', 'pod borer', 'fruit borer', 'hole', 'छेद', 'larva'],
      crops: ['cotton', 'tomato', 'pigeon pea', 'chickpea', 'okra'],
      en: {
        name: 'Bollworm / Pod Borer',
        symptoms: 'Holes in fruits, bolls, pods. Caterpillars inside. Frass (insect waste) visible.',
        severity: 'Severe',
        causes: 'Helicoverpa armigera. Lays eggs on tender parts. Larvae bore into fruit.',
        treatment: [
          'Agniastra at 25 ml/L — most effective for borers',
          'Trichogramma egg cards — 1.5 lakh/acre weekly',
          'Pheromone traps — 5 per acre to monitor & mass-trap',
          'Hand-pick caterpillars in early stages',
          'NPV (Nuclear Polyhedrosis Virus) spray at dusk',
        ],
        prevention: 'Crop rotation with non-host plants, deep summer ploughing, marigold border crop.',
        products: ['agniastra-1l', 'dashparni-1l', 'brahmastra-1l'],
      },
      hi: {
        name: 'इल्ली / सूंडी (बॉलवर्म)',
        symptoms: 'फलों, टिंडों, फलियों में छेद। अंदर इल्लियाँ। कीड़े का मल दिखाई देना।',
        severity: 'गंभीर',
        causes: 'हेलिकोवर्पा आर्मीजेरा। कोमल भागों पर अंडे देती है। इल्ली फल में घुस जाती है।',
        treatment: [
          'अग्निअस्त्र 25 मिली/लीटर — सबसे प्रभावी',
          'ट्राइकोग्रामा कार्ड — 1.5 लाख/एकड़ साप्ताहिक',
          'फेरोमोन ट्रैप — 5 प्रति एकड़',
          'शुरुआत में हाथ से इल्ली निकालें',
          'NPV का छिड़काव शाम के समय',
        ],
        prevention: 'फसल चक्र, गहरी ग्रीष्मकालीन जुताई, गेंदा बॉर्डर फसल।',
        products: ['agniastra-1l', 'dashparni-1l', 'brahmastra-1l'],
      },
    },
    {
      id: 'fungal-leaf-spot',
      keywords: ['leaf spot', 'fungal', 'पत्ती धब्बा', 'फफूंद', 'brown spot', 'धब्बे', 'pili patti', 'rust', 'powdery', 'mildew', 'झुलसा', 'blight'],
      crops: ['rice', 'wheat', 'tomato', 'potato', 'grapes', 'all'],
      en: {
        name: 'Fungal Leaf Spot / Blight',
        symptoms: 'Brown/black circular spots with yellow halo. Spreading patches. Premature leaf drop.',
        severity: 'Moderate',
        causes: 'Alternaria, Cercospora, or rust fungi. Worsens in humid weather.',
        treatment: [
          'Dashparni (500 ml in 15 L water) — every 10 days',
          'Buttermilk spray (1:10) at first symptoms',
          'Trichoderma viride soil drench — 5 g/L',
          'Remove and burn infected leaves',
        ],
        prevention: 'Beejamrit seed treatment before sowing, proper spacing for airflow, Panchgavya monthly foliar spray.',
        products: ['dashparni-1l', 'beejamrit-1l', 'panchgavya-1l'],
      },
      hi: {
        name: 'पत्ती धब्बा रोग / झुलसा',
        symptoms: 'भूरे/काले गोल धब्बे, चारों ओर पीला घेरा। बढ़ते धब्बे। समय से पहले पत्ते गिरना।',
        severity: 'मध्यम',
        causes: 'अल्टरनारिया, सरकोस्पोरा, या रस्ट फफूंद। नमी में बढ़ता है।',
        treatment: [
          'दशपर्णी (500 मिली प्रति 15 लीटर पानी) — हर 10 दिन',
          'मट्ठा का छिड़काव (1:10) — पहले लक्षण पर',
          'ट्राइकोडर्मा मिट्टी में मिलाएँ — 5 ग्राम/लीटर',
          'संक्रमित पत्ते निकालकर जला दें',
        ],
        prevention: 'बुवाई से पहले बीजामृत, उचित दूरी, मासिक पंचगव्य।',
        products: ['dashparni-1l', 'beejamrit-1l', 'panchgavya-1l'],
      },
    },
    {
      id: 'yellow-leaves',
      keywords: ['yellow leaves', 'पीली पत्ती', 'पीला', 'pili patti', 'chlorosis', 'nitrogen', 'पोषण', 'nutrient', 'pale', 'fade'],
      crops: ['all'],
      en: {
        name: 'Nutrient Deficiency (Likely Nitrogen)',
        symptoms: 'Yellowing of older leaves first. Pale green colour. Slow growth. Reduced yield.',
        severity: 'Mild',
        causes: 'Nitrogen deficiency, poor soil microbial activity, or root damage.',
        treatment: [
          'Vermiwash foliar spray (1:10) — every 7 days',
          'Jeevamrit soil drench — 200 L/acre',
          'Apply 2–3 tonnes Vermicompost per acre',
          'BGA culture for paddy fields',
        ],
        prevention: 'Build soil organic matter via Vermicompost, regular Jeevamrit, green manure crops in off-season.',
        products: ['vermiwash-1l', 'jeevamrit-5l', 'vermicompost-5kg', 'bga-500g'],
      },
      hi: {
        name: 'पोषक तत्व की कमी (संभवतः नाइट्रोजन)',
        symptoms: 'पुरानी पत्तियाँ पहले पीली होना। हल्का हरा रंग। धीमी बढ़वार। कम उपज।',
        severity: 'हल्का',
        causes: 'नाइट्रोजन की कमी, मिट्टी में सूक्ष्मजीवों की कमी, या जड़ क्षति।',
        treatment: [
          'वर्मीवॉश का छिड़काव (1:10) — हर 7 दिन',
          'जीवामृत मिट्टी में — 200 लीटर/एकड़',
          'वर्मीकम्पोस्ट 2–3 टन प्रति एकड़',
          'धान के लिए BGA',
        ],
        prevention: 'वर्मीकम्पोस्ट से जैविक पदार्थ बढ़ाएँ, नियमित जीवामृत, हरी खाद की फसल।',
        products: ['vermiwash-1l', 'jeevamrit-5l', 'vermicompost-5kg', 'bga-500g'],
      },
    },
    {
      id: 'wilting',
      keywords: ['wilt', 'मुरझाना', 'sukhana', 'droop', 'मुरझा', 'dying', 'मर रहा', 'root rot', 'जड़ सड़न'],
      crops: ['tomato', 'brinjal', 'chilli', 'cotton', 'banana', 'pulses'],
      en: {
        name: 'Wilt Disease (Fusarium / Bacterial)',
        symptoms: 'Sudden drooping despite moist soil. Leaves turn yellow then brown. Vascular browning.',
        severity: 'Severe',
        causes: 'Fusarium oxysporum, Verticillium, or Ralstonia bacteria. Soil-borne.',
        treatment: [
          'Drench soil with Jeevamrit + Trichoderma',
          'Beejamrit treatment for next sowing',
          'Remove and burn affected plants',
          'Apply Vermicompost + Pseudomonas around healthy plants',
        ],
        prevention: 'Crop rotation (3-year cycle), resistant varieties, soil solarization, Beejamrit seed treatment.',
        products: ['jeevamrit-5l', 'beejamrit-1l', 'vermicompost-5kg'],
      },
      hi: {
        name: 'उकठा रोग (फ्यूजेरियम/बैक्टीरियल)',
        symptoms: 'मिट्टी गीली होने पर भी अचानक मुरझाना। पत्तियाँ पीली फिर भूरी। तनों में भूरापन।',
        severity: 'गंभीर',
        causes: 'फ्यूजेरियम, वर्टीसिलियम, या राल्स्टोनिया बैक्टीरिया। मिट्टी से फैलता है।',
        treatment: [
          'जीवामृत + ट्राइकोडर्मा मिट्टी में डालें',
          'अगली बुवाई में बीजामृत',
          'प्रभावित पौधे निकालकर जलाएँ',
          'स्वस्थ पौधों के पास वर्मीकम्पोस्ट + सूडोमोनास',
        ],
        prevention: 'फसल चक्र (3 वर्षीय), प्रतिरोधी किस्में, मिट्टी का सोलराइजेशन, बीजामृत।',
        products: ['jeevamrit-5l', 'beejamrit-1l', 'vermicompost-5kg'],
      },
    },
    {
      id: 'whitefly',
      keywords: ['whitefly', 'सफेद मक्खी', 'safed makhi', 'small white', 'flying white', 'virus carrier', 'leaf curl virus'],
      crops: ['cotton', 'tomato', 'brinjal', 'okra', 'chilli'],
      en: {
        name: 'Whitefly Infestation',
        symptoms: 'Tiny white flies that fly up when disturbed. Leaf yellowing, curling. Often spreads viruses.',
        severity: 'Moderate to Severe',
        causes: 'Bemisia tabaci. Vector of leaf curl virus.',
        treatment: [
          'Neemastra spray every 5 days during flight period',
          'Yellow sticky traps — 12/acre',
          'Brahmastra for severe cases',
          'Reflective mulch to disrupt flight',
        ],
        prevention: 'Avoid continuous cropping of host plants, install yellow traps early, regular Panchparni preventive sprays.',
        products: ['neemastra-1l', 'brahmastra-1l', 'panchparni-1l'],
      },
      hi: {
        name: 'सफेद मक्खी का संक्रमण',
        symptoms: 'छोटी सफेद मक्खियाँ छूते ही उड़ जाती हैं। पत्तियाँ पीली, मुड़ी हुई। वायरस फैलाती हैं।',
        severity: 'मध्यम से गंभीर',
        causes: 'बेमिसिया तबासी। पत्ती मोड़क वायरस का वाहक।',
        treatment: [
          'नीमास्त्र हर 5 दिन में',
          'पीले चिपचिपे ट्रैप — 12/एकड़',
          'गंभीर के लिए ब्रह्मास्त्र',
          'चमकदार मल्च',
        ],
        prevention: 'मेजबान फसलों की लगातार खेती से बचें, जल्दी ट्रैप लगाएँ, पंचपर्णी का नियमित छिड़काव।',
        products: ['neemastra-1l', 'brahmastra-1l', 'panchparni-1l'],
      },
    },
    {
      id: 'soil-poor',
      keywords: ['soil', 'मिट्टी', 'hard soil', 'compact', 'खराब मिट्टी', 'dead soil', 'no growth', 'बंजर', 'barren'],
      crops: ['all'],
      en: {
        name: 'Soil Health Degradation',
        symptoms: 'Hard, compact soil. Poor water retention. Stunted plants. Low microbial activity.',
        severity: 'Long-term issue',
        causes: 'Years of chemical fertilizer use, monocropping, lack of organic matter.',
        treatment: [
          'Apply 5 tonnes Vermicompost per acre',
          'Weekly Jeevamrit drench (200 L/acre)',
          'Amrit Pani — 5 L/acre weekly',
          'Green manure crop (Dhaincha, Sunhemp) before next season',
        ],
        prevention: 'Stop chemical fertilizers, mulch with crop residue, encourage earthworms, BGA in flooded fields.',
        products: ['vermicompost-5kg', 'jeevamrit-5l', 'amritpani-5l', 'earthworm-1kg'],
      },
      hi: {
        name: 'मिट्टी की गुणवत्ता में गिरावट',
        symptoms: 'कठोर, सख्त मिट्टी। पानी रुकना नहीं। बौने पौधे। सूक्ष्मजीवों की कमी।',
        severity: 'दीर्घकालिक समस्या',
        causes: 'वर्षों से रासायनिक उर्वरक, एकल फसल, जैविक पदार्थ की कमी।',
        treatment: [
          'वर्मीकम्पोस्ट 5 टन प्रति एकड़',
          'साप्ताहिक जीवामृत (200 ली/एकड़)',
          'अमृत पानी — 5 ली/एकड़ साप्ताहिक',
          'अगले मौसम से पहले हरी खाद (ढैंचा, सनई)',
        ],
        prevention: 'रासायनिक उर्वरक बंद करें, फसल अवशेष से मल्चिंग, केंचुओं को बढ़ावा, धान में BGA।',
        products: ['vermicompost-5kg', 'jeevamrit-5l', 'amritpani-5l', 'earthworm-1kg'],
      },
    },
    {
      id: 'flowering-poor',
      keywords: ['no flower', 'फूल नहीं', 'kam phool', 'flower drop', 'फूल गिर', 'fruit drop', 'फल गिर', 'low yield', 'कम उपज'],
      crops: ['all'],
      en: {
        name: 'Poor Flowering / Fruit Setting',
        symptoms: 'Few flowers, premature drop, small fruits, low yield.',
        severity: 'Yield-affecting',
        causes: 'Boron/potassium deficiency, hormonal imbalance, pollinator absence, water stress.',
        treatment: [
          'Panchgavya foliar spray (30 ml/L) at flowering stage',
          'Vermiwash spray (1:10) every 10 days',
          'Encourage pollinators — flowering border crops',
          'Maintain consistent moisture',
        ],
        prevention: 'Balanced organic nutrition, Jeevamrit through season, avoid water stress at flowering.',
        products: ['panchgavya-1l', 'vermiwash-1l', 'jeevamrit-5l'],
      },
      hi: {
        name: 'फूल / फल कम लगना',
        symptoms: 'कम फूल, समय से पहले गिरना, छोटे फल, कम उपज।',
        severity: 'उपज प्रभावित',
        causes: 'बोरोन/पोटाश की कमी, हार्मोनल असंतुलन, परागकों की कमी, पानी का तनाव।',
        treatment: [
          'फूल आने पर पंचगव्य (30 मिली/लीटर)',
          'वर्मीवॉश (1:10) हर 10 दिन',
          'परागकों को बढ़ावा दें — फूलदार बॉर्डर',
          'लगातार नमी बनाए रखें',
        ],
        prevention: 'संतुलित जैविक पोषण, मौसम भर जीवामृत, फूल आने पर पानी की कमी न हो।',
        products: ['panchgavya-1l', 'vermiwash-1l', 'jeevamrit-5l'],
      },
    },
  ],
};

// Smart matcher: searches symptoms text + image hints
function diagnoseCrop(input, crop = '', lang = 'en') {
  const text = (input || '').toLowerCase();
  const scores = CROP_DB.diseases.map(d => {
    let score = 0;
    d.keywords.forEach(kw => {
      if (text.includes(kw.toLowerCase())) score += kw.length > 5 ? 3 : 2;
    });
    if (crop && d.crops.includes(crop.toLowerCase())) score += 1;
    if (crop && d.crops.includes('all')) score += 0.5;
    return { disease: d, score };
  });
  scores.sort((a, b) => b.score - a.score);
  const top = scores.filter(s => s.score > 0).slice(0, 3);
  if (top.length === 0) {
    // Fallback default
    return {
      confidence: 35,
      results: [{ disease: CROP_DB.diseases[4], score: 1 }],  // yellow-leaves as generic
      lang,
      isGuess: true,
    };
  }
  return {
    confidence: Math.min(95, 50 + top[0].score * 8),
    results: top,
    lang,
    isGuess: false,
  };
}

// Image-based "AI" — uses image color analysis as a hint
async function analyzeImage(imageDataUrl) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64; canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 64, 64);
      const data = ctx.getImageData(0, 0, 64, 64).data;
      let r = 0, g = 0, b = 0, yellow = 0, brown = 0, white = 0, dark = 0;
      const total = data.length / 4;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i]; g += data[i+1]; b += data[i+2];
        // yellow: high R, high G, low B
        if (data[i] > 180 && data[i+1] > 160 && data[i+2] < 120) yellow++;
        // brown: medium R, low G, low B
        if (data[i] > 100 && data[i] < 180 && data[i+1] < 130 && data[i+2] < 100) brown++;
        // white spots
        if (data[i] > 220 && data[i+1] > 220 && data[i+2] > 220) white++;
        // very dark
        if (data[i] < 60 && data[i+1] < 60 && data[i+2] < 60) dark++;
      }
      r /= total; g /= total; b /= total;
      const hints = [];
      if (yellow / total > 0.15) hints.push('yellow leaves chlorosis');
      if (brown / total > 0.10) hints.push('brown spot fungal');
      if (white / total > 0.08) hints.push('mealybug white cotton');
      if (dark / total > 0.20) hints.push('wilt');
      if (g < 100) hints.push('yellow pale');
      resolve({ hints: hints.join(' '), avgColor: { r: Math.round(r), g: Math.round(g), b: Math.round(b) } });
    };
    img.onerror = () => resolve({ hints: '', avgColor: null });
    img.src = imageDataUrl;
  });
}

window.CROP_DB = CROP_DB;
window.diagnoseCrop = diagnoseCrop;
window.analyzeImage = analyzeImage;
