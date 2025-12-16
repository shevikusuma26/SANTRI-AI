// Dakwah Assistant Module for SANTRI-AI

class DakwahAssistant {
    constructor() {
        this.sermonTemplates = this.initializeTemplates();
        this.audienceTypes = this.initializeAudienceTypes();
        this.topics = this.initializeTopics();
    }

    initializeTemplates() {
        return {
            opening: {
                anak: "Assalamu'alaikum adik-adik yang sholeh dan sholehah...",
                remaja: "Assalamu'alaikum warahmatullahi wabarakatuh. Saudara-saudaraku remaja muslim yang dirahmati Allah...",
                dewasa: "Assalamu'alaikum warahmatullahi wabarakatuh. Hadirin jamaah yang dimuliakan Allah...",
                umum: "Assalamu'alaikum warahmatullahi wabarakatuh. Para jamaah yang berbahagia..."
            },
            closing: {
                anak: "Semoga kita semua menjadi anak yang sholeh dan sholehah. Aamiin...",
                remaja: "Semoga kita termasuk remaja yang mendapat petunjuk Allah. Aamiin...",
                dewasa: "Semoga kita semua mendapat keberkahan dari Allah. Aamiin...",
                umum: "Semoga ceramah singkat ini bermanfaat. Aamiin yaa rabbal 'alamin..."
            },
            structure: {
                pendahuluan: "Hari ini kita akan membahas tentang {topic}. {quotes}",
                isi: "Pertama, {point1}. Kedua, {point2}. Ketiga, {point3}.",
                dalil: "Allah berfirman dalam {surah}: '{verse}'. Nabi SAW bersabda: '{hadith}'",
                contoh: "Contoh dalam kehidupan sehari-hari: {example}",
                ajakan: "Mari kita {callToAction}"
            }
        };
    }

    initializeAudienceTypes() {
        return {
            anak: {
                name: "Anak-anak",
                characteristics: "Bahasa sederhana, contoh konkrit, cerita menarik",
                maxLength: 300,
                style: "sederhana dan menyenangkan"
            },
            remaja: {
                name: "Remaja",
                characteristics: "Relevan dengan kehidupan remaja, bahasa kekinian, contoh nyata",
                maxLength: 500,
                style: "kekinian dan relatable"
            },
            dewasa: {
                name: "Dewasa",
                characteristics: "Mendalam, dalil kuat, aplikasi praktis",
                maxLength: 800,
                style: "mendalam dan aplikatif"
            },
            umum: {
                name: "Umum",
                characteristics: "Cocok semua usia, bahasa netral, pesan universal",
                maxLength: 600,
                style: "universal dan mudah dipahami"
            }
        };
    }

    initializeTopics() {
        return {
            "Bersyukur": {
                quotes: "Bersyukur adalah kunci keberkahan hidup",
                point1: "mengucap Alhamdulillah dalam setiap keadaan",
                point2: "memanfaatkan nikmat untuk kebaikan",
                point3: "tidak mengeluh atas kekurangan",
                surah: "QS. Ibrahim: 7",
                verse: "Dan (ingatlah) ketika Tuhanmu memaklumkan, 'Sesungguhnya jika kamu bersyukur, niscaya Aku akan menambah (nikmat) kepadamu...'",
                hadith: "HR. Tirmidzi",
                hadithText: "Barangsiapa yang tidak mensyukuri yang sedikit, maka ia tidak akan mampu mensyukuri yang banyak",
                example: "ketika mendapat nilai bagus ucapkan Alhamdulillah, ketika kurang bagus tetap Alhamdulillah sambil berusaha lebih baik",
                callToAction: "perbanyak ucapan Alhamdulillah dalam kehidupan sehari-hari"
            },
            "Sabar": {
                quotes: "Sabar adalah cahaya yang menerangi kegelapan",
                point1: "sabar dalam menghadapi ujian",
                point2: "sabar dalam menahan amarah",
                point3: "sabar dalam menjalankan perintah Allah",
                surah: "QS. Al-Baqarah: 153",
                verse: "Wahai orang-orang yang beriman! Mohonlah pertolongan (kepada Allah) dengan sabar dan shalat. Sungguh, Allah beserta orang-orang yang sabar",
                hadith: "HR. Muslim",
                hadithText: "Sabar itu ada pada saat pertama kali mendapat musibah",
                example: "ketika ditimpa sakit, sabar dengan berobat dan berdoa",
                callToAction: "latih kesabaran dengan menghadapi masalah kecil dengan tenang"
            },
            "Jujur": {
                quotes: "Kejujuran membawa ketenangan",
                point1: "jujur dalam perkataan",
                point2: "jujur dalam perbuatan",
                point3: "jujur dalam niat",
                surah: "QS. At-Taubah: 119",
                verse: "Wahai orang-orang yang beriman! Bertakwalah kepada Allah, dan bersamalah kamu dengan orang-orang yang benar (jujur)",
                hadith: "HR. Bukhari",
                hadithText: "Sesungguhnya kejujuran membawa kepada kebaikan, dan kebaikan membawa ke surga",
                example: "mengakui kesalahan meski berat konsekuensinya",
                callToAction: "berlatih jujur dalam hal kecil terlebih dahulu"
            },
            "Silaturahmi": {
                quotes: "Silaturahmi memperpanjang umur dan melapangkan rezeki",
                point1: "menjalin hubungan baik dengan keluarga",
                point2: "mempererat tali persaudaraan",
                point3: "menjaga komunikasi yang baik",
                surah: "QS. An-Nisa: 1",
                verse: "Bertakwalah kepada Allah yang dengan nama-Nya kamu saling meminta, dan (peliharalah) hubungan kekeluargaan",
                hadith: "HR. Bukhari",
                hadithText: "Barangsiapa yang ingin dilapangkan rezekinya dan dipanjangkan umurnya, hendaklah ia menyambung tali silaturahmi",
                example: "rajin menelpon orang tua, berkunjung ke saudara",
                callToAction: "sambung silaturahmi dengan keluarga yang lama tidak berkomunikasi"
            },
            "Ikhlas": {
                quotes: "Ikhlas adalah ruhnya amal",
                point1: "melakukan kebaikan karena Allah",
                point2: "tidak mengharap pujian manusia",
                point3: "tetap beramal meski tidak dilihat orang",
                surah: "QS. Al-Bayyinah: 5",
                verse: "Padahal mereka hanya diperintah menyembah Allah dengan ikhlas menaati-Nya semata-mata karena (menjalankan) agama",
                hadith: "HR. Bukhari",
                hadithText: "Sesungguhnya amal itu tergantung niatnya",
                example: "sedekah secara diam-diam, shalat malam tanpa diketahui siapapun",
                callToAction: "periksa niat sebelum beramal"
            }
        };
    }

    generateSermon(topic, audienceType, customMessage = "") {
        const topicData = this.topics[topic] || this.topics["Bersyukur"];
        const audience = this.audienceTypes[audienceType] || this.audienceTypes["umum"];
        const templates = this.sermonTemplates;
        
        let sermon = "";
        
        // Opening
        sermon += templates.opening[audienceType] + "\n\n";
        
        // Introduction
        sermon += templates.structure.pendahuluan
            .replace("{topic}", topic)
            .replace("{quotes}", topicData.quotes) + "\n\n";
        
        // Content with audience-specific language
        let point1 = topicData.point1;
        let point2 = topicData.point2;
        let point3 = topicData.point3;
        
        if (audienceType === "anak") {
            point1 = point1.replace("mengucap", "bilang");
            point2 = point2.replace("memanfaatkan", "pakai");
            point3 = point3.replace("mengeluh", "ngomel");
        } else if (audienceType === "remaja") {
            point1 = point1 + ", guys";
            point2 = point2 + ", itu penting banget";
            point3 = point3 + ", jangan sampai ya";
        }
        
        sermon += templates.structure.isi
            .replace("{point1}", point1)
            .replace("{point2}", point2)
            .replace("{point3}", point3) + "\n\n";
        
        // Evidence
        sermon += templates.structure.dalil
            .replace("{surah}", topicData.surah)
            .replace("{verse}", topicData.verse)
            .replace("{hadith}", topicData.hadithText) + "\n\n";
        
        // Example
        sermon += templates.structure.contoh
            .replace("{example}", topicData.example) + "\n\n";
        
        // Custom message if any
        if (customMessage) {
            sermon += customMessage + "\n\n";
        }
        
        // Call to action
        sermon += templates.structure.ajakan
            .replace("{callToAction}", topicData.callToAction) + "\n\n";
        
        // Closing
        sermon += templates.closing[audienceType];
        
        // Truncate if too long
        if (sermon.length > audience.maxLength) {
            sermon = sermon.substring(0, audience.maxLength - 100) + "...\n\n" + templates.closing[audienceType];
        }
        
        return {
            sermon: sermon,
            metadata: {
                topic: topic,
                audience: audience.name,
                length: sermon.length,
                style: audience.style,
                estimatedDuration: Math.ceil(sermon.length / 150) + " menit" // 150 kata/menit
            }
        };
    }

    generateMultipleVersions(topic) {
        const versions = {};
        
        for (const audienceType in this.audienceTypes) {
            versions[audienceType] = this.generateSermon(topic, audienceType);
        }
        
        return versions;
    }

    analyzeSermon(text) {
        const analysis = {
            wordCount: text.split(/\s+/).length,
            sentenceCount: text.split(/[.!?]+/).length - 1,
            hasArabic: /[\u0600-\u06FF]/.test(text),
            hasQuranVerse: /QS\.|surah|ayat/i.test(text),
            hasHadith: /HR\.|hadits|sabda/i.test(text),
            hasCallToAction: /mari|ayo|hendaklah|marilah/i.test(text),
            readabilityScore: 0
        };
        
        // Simple readability score (higher = easier to read)
        const wordsPerSentence = analysis.wordCount / Math.max(analysis.sentenceCount, 1);
        analysis.readabilityScore = Math.max(0, 100 - (wordsPerSentence * 2));
        
        // Audience suitability
        if (analysis.wordCount < 200) {
            analysis.suggestedAudience = "Anak-anak";
        } else if (analysis.wordCount < 400) {
            analysis.suggestedAudience = "Remaja";
        } else if (analysis.wordCount < 600) {
            analysis.suggestedAudience = "Umum";
        } else {
            analysis.suggestedAudience = "Dewasa";
        }
        
        // Recommendations
        analysis.recommendations = [];
        
        if (!analysis.hasQuranVerse) {
            analysis.recommendations.push("Tambahkan ayat Al-Quran untuk penguatan dalil");
        }
        
        if (!analysis.hasHadith) {
            analysis.recommendations.push("Tambahkan hadits untuk penyempurna");
        }
        
        if (!analysis.hasCallToAction) {
            analysis.recommendations.push("Tambahkan ajakan praktis untuk aplikasi");
        }
        
        if (analysis.readabilityScore < 50) {
            analysis.recommendations.push("Sederhanakan kalimat untuk memudahkan pemahaman");
        }
        
        return analysis;
    }

    getSermonOutline(topic) {
        const topicData = this.topics[topic] || this.topics["Bersyukur"];
        
        return {
            judul: `Ceramah tentang "${topic}"`,
            outline: [
                {
                    bagian: "Pendahuluan",
                    poin: [
                        "Salam pembuka",
                        "Pengenalan topik",
                        "Quotes pengantar"
                    ],
                    durasi: "2 menit"
                },
                {
                    bagian: "Isi Utama",
                    poin: [
                        `Poin 1: ${topicData.point1}`,
                        `Poin 2: ${topicData.point2}`,
                        `Poin 3: ${topicData.point3}`
                    ],
                    durasi: "5-7 menit"
                },
                {
                    bagian: "Dalil Pendukung",
                    poin: [
                        `Ayat: ${topicData.surah}`,
                        `Hadits: ${topicData.hadith}`
                    ],
                    durasi: "3 menit"
                },
                {
                    bagian: "Contoh Praktis",
                    poin: [
                        `Contoh: ${topicData.example}`
                    ],
                    durasi: "2 menit"
                },
                {
                    bagian: "Penutup",
                    poin: [
                        `Ajakan: ${topicData.callToAction}`,
                        "Doa penutup"
                    ],
                    durasi: "2 menit"
                }
            ],
            totalDurasi: "15-20 menit"
        };
    }
}

// Initialize Dakwah Assistant
let dakwahAssistant = null;

function initializeDakwahAssistant() {
    dakwahAssistant = new DakwahAssistant();
    return dakwahAssistant;
}

// Function to create dakwah assistant interface
function createDakwahAssistantInterface() {
    return `
        <div class="dakwah-assistant-interface">
            <div class="assistant-header">
                <h4><i class="fas fa-bullhorn"></i> Asisten Dakwah Digital</h4>
                <p>Buat teks ceramah sesuai dengan audiens dan topik yang diinginkan</p>
            </div>
            
            <div class="assistant-controls">
                <div class="control-group">
                    <label for="dakwah-topic"><i class="fas fa-book"></i> Pilih Topik</label>
                    <select id="dakwah-topic" class="form-control">
                        <option value="Bersyukur">Bersyukur</option>
                        <option value="Sabar">Sabar</option>
                        <option value="Jujur">Jujur</option>
                        <option value="Silaturahmi">Silaturahmi</option>
                        <option value="Ikhlas">Ikhlas</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label for="dakwah-audience"><i class="fas fa-users"></i> Pilih Audiens</label>
                    <div class="audience-buttons">
                        <button class="audience-btn active" data-audience="anak">
                            <i class="fas fa-child"></i> Anak-anak
                        </button>
                        <button class="audience-btn" data-audience="remaja">
                            <i class="fas fa-user-graduate"></i> Remaja
                        </button>
                        <button class="audience-btn" data-audience="dewasa">
                            <i class="fas fa-user-tie"></i> Dewasa
                        </button>
                        <button class="audience-btn" data-audience="umum">
                            <i class="fas fa-users"></i> Umum
                        </button>
                    </div>
                </div>
                
                <div class="control-group">
                    <label for="custom-message"><i class="fas fa-edit"></i> Pesan Kustom (Opsional)</label>
                    <textarea id="custom-message" placeholder="Tambahkan pesan khusus atau penekanan tertentu..." rows="3"></textarea>
                </div>
                
                <div class="assistant-actions">
                    <button class="btn btn-primary" id="generate-dakwah">
                        <i class="fas fa-magic"></i> Generate Ceramah
                    </button>
                    <button class="btn btn-secondary" id="generate-all">
                        <i class="fas fa-layer-group"></i> Semua Versi
                    </button>
                    <button class="btn btn-secondary" id="get-outline">
                        <i class="fas fa-project-diagram"></i> Lihat Outline
                    </button>
                </div>
            </div>
            
            <div class="results-container">
                <div id="dakwah-result"></div>
                <div id="analysis-result"></div>
            </div>
            
            <div class="sermon-templates">
                <h5><i class="fas fa-copy"></i> Template Cepat</h5>
                <div class="template-buttons">
                    <button class="template-btn" data-topic="Bersyukur" data-audience="anak">
                        <i class="fas fa-smile"></i> Bersyukur untuk Anak
                    </button>
                    <button class="template-btn" data-topic="Sabar" data-audience="remaja">
                        <i class="fas fa-heart"></i> Sabar untuk Remaja
                    </button>
                    <button class="template-btn" data-topic="Jujur" data-audience="umum">
                        <i class="fas fa-star"></i> Jujur untuk Umum
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to setup dakwah assistant event listeners
function setupDakwahAssistant() {
    if (!dakwahAssistant) {
        dakwahAssistant = new DakwahAssistant();
    }
    
    // Audience buttons
    document.querySelectorAll('.audience-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.audience-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Generate sermon button
    const generateBtn = document.getElementById('generate-dakwah');
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            generateSermon();
        });
    }
    
    // Generate all versions button
    const generateAllBtn = document.getElementById('generate-all');
    if (generateAllBtn) {
        generateAllBtn.addEventListener('click', function() {
            generateAllVersions();
        });
    }
    
    // Get outline button
    const outlineBtn = document.getElementById('get-outline');
    if (outlineBtn) {
        outlineBtn.addEventListener('click', function() {
            getSermonOutline();
        });
    }
    
    // Template buttons
    document.querySelectorAll('.template-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            const audience = this.getAttribute('data-audience');
            
            // Set form values
            document.getElementById('dakwah-topic').value = topic;
            
            // Set active audience button
            document.querySelectorAll('.audience-btn').forEach(b => {
                b.classList.remove('active');
                if (b.getAttribute('data-audience') === audience) {
                    b.classList.add('active');
                }
            });
            
            // Generate immediately
            setTimeout(() => generateSermon(), 100);
        });
    });
    
    console.log('Dakwah assistant setup complete');
}

// Generate sermon function
function generateSermon() {
    const topic = document.getElementById('dakwah-topic').value;
    const audience = document.querySelector('.audience-btn.active')?.getAttribute('data-audience') || 'umum';
    const customMessage = document.getElementById('custom-message').value;
    
    const result = dakwahAssistant.generateSermon(topic, audience, customMessage);
    const analysis = dakwahAssistant.analyzeSermon(result.sermon);
    
    // Display sermon
    const resultContainer = document.getElementById('dakwah-result');
    resultContainer.innerHTML = `
        <div class="sermon-result">
            <div class="sermon-header">
                <h5><i class="fas fa-file-alt"></i> Ceramah "${topic}" untuk ${dakwahAssistant.audienceTypes[audience].name}</h5>
                <div class="sermon-meta">
                    <span><i class="fas fa-clock"></i> ${result.metadata.estimatedDuration}</span>
                    <span><i class="fas fa-ruler"></i> ${result.metadata.length} karakter</span>
                    <span><i class="fas fa-paint-brush"></i> ${result.metadata.style}</span>
                </div>
            </div>
            
            <div class="sermon-content">
                <pre>${result.sermon}</pre>
            </div>
            
            <div class="sermon-actions">
                <button class="btn btn-secondary" onclick="copyToClipboard('${result.sermon.replace(/'/g, "\\'")}')">
                    <i class="fas fa-copy"></i> Copy Teks
                </button>
                <button class="btn btn-secondary" onclick="downloadSermon('${topic}', '${audience}', '${result.sermon.replace(/'/g, "\\'")}')">
                    <i class="fas fa-download"></i> Download
                </button>
                <button class="btn btn-secondary" onclick="shareSermon('${topic}', '${result.sermon.substring(0, 100)}...')">
                    <i class="fas fa-share"></i> Share
                </button>
            </div>
        </div>
    `;
    
    // Display analysis
    const analysisContainer = document.getElementById('analysis-result');
    analysisContainer.innerHTML = `
        <div class="analysis-result">
            <h5><i class="fas fa-chart-bar"></i> Analisis Ceramah</h5>
            
            <div class="analysis-stats">
                <div class="stat-item">
                    <div class="stat-value">${analysis.wordCount}</div>
                    <div class="stat-label">Kata</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${analysis.sentenceCount}</div>
                    <div class="stat-label">Kalimat</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${Math.round(analysis.readabilityScore)}%</div>
                    <div class="stat-label">Kemudahan Baca</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${analysis.suggestedAudience}</div>
                    <div class="stat-label">Audiens Disarankan</div>
                </div>
            </div>
            
            ${analysis.recommendations.length > 0 ? `
            <div class="analysis-recommendations">
                <h6><i class="fas fa-lightbulb"></i> Rekomendasi Perbaikan</h6>
                <ul>
                    ${analysis.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            
            <div class="analysis-features">
                <h6><i class="fas fa-check-circle"></i> Elemen yang Sudah Ada</h6>
                <div class="feature-tags">
                    ${analysis.hasArabic ? '<span class="tag tag-success"><i class="fas fa-check"></i> Teks Arab</span>' : ''}
                    ${analysis.hasQuranVerse ? '<span class="tag tag-success"><i class="fas fa-check"></i> Ayat Quran</span>' : ''}
                    ${analysis.hasHadith ? '<span class="tag tag-success"><i class="fas fa-check"></i> Hadits</span>' : ''}
                    ${analysis.hasCallToAction ? '<span class="tag tag-success"><i class="fas fa-check"></i> Ajakan</span>' : ''}
                </div>
            </div>
        </div>
    `;
    
    // Scroll to result
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Generate all versions
function generateAllVersions() {
    const topic = document.getElementById('dakwah-topic').value;
    const versions = dakwahAssistant.generateMultipleVersions(topic);
    
    const resultContainer = document.getElementById('dakwah-result');
    let html = `<div class="all-versions"><h5><i class="fas fa-layer-group"></i> Semua Versi untuk "${topic}"</h5>`;
    
    for (const [audience, data] of Object.entries(versions)) {
        const audienceName = dakwahAssistant.audienceTypes[audience].name;
        
        html += `
            <div class="version-card">
                <div class="version-header">
                    <h6><i class="fas fa-users"></i> ${audienceName}</h6>
                    <span class="version-meta">${data.metadata.length} karakter • ${data.metadata.estimatedDuration}</span>
                </div>
                <div class="version-content">
                    <pre>${data.sermon.substring(0, 200)}...</pre>
                </div>
                <div class="version-actions">
                    <button class="btn btn-sm btn-secondary" onclick="showFullVersion('${audience}', '${topic}')">
                        Lihat Lengkap
                    </button>
                    <button class="btn btn-sm btn-secondary" onclick="copyToClipboard('${data.sermon.replace(/'/g, "\\'")}')">
                        Copy
                    </button>
                </div>
            </div>
        `;
    }
    
    html += `</div>`;
    resultContainer.innerHTML = html;
    
    // Clear analysis
    document.getElementById('analysis-result').innerHTML = '';
    
    // Scroll to result
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Get sermon outline
function getSermonOutline() {
    const topic = document.getElementById('dakwah-topic').value;
    const outline = dakwahAssistant.getSermonOutline(topic);
    
    const resultContainer = document.getElementById('dakwah-result');
    resultContainer.innerHTML = `
        <div class="outline-result">
            <h5><i class="fas fa-project-diagram"></i> Outline Ceramah: "${outline.judul}"</h5>
            
            <div class="outline-meta">
                <span class="badge"><i class="fas fa-clock"></i> ${outline.totalDurasi}</span>
                <span class="badge"><i class="fas fa-list-ol"></i> ${outline.outline.length} bagian</span>
            </div>
            
            <div class="outline-steps">
                ${outline.outline.map((step, index) => `
                    <div class="outline-step">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-content">
                            <h6>${step.bagian} <span class="step-duration">${step.durasi}</span></h6>
                            <ul>
                                ${step.poin.map(poin => `<li>${poin}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="outline-actions">
                <button class="btn btn-primary" onclick="generateSermon()">
                    <i class="fas fa-magic"></i> Buat Ceramah dari Outline Ini
                </button>
                <button class="btn btn-secondary" onclick="printOutline('${topic}')">
                    <i class="fas fa-print"></i> Print Outline
                </button>
            </div>
        </div>
    `;
    
    // Clear analysis
    document.getElementById('analysis-result').innerHTML = '';
    
    // Scroll to result
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Utility functions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Teks ceramah berhasil disalin!');
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
        alert('Gagal menyalin teks. Silakan copy manual.');
    });
}

function downloadSermon(topic, audience, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Ceramah_${topic}_${audience}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function shareSermon(topic, content) {
    if (navigator.share) {
        navigator.share({
            title: `Ceramah: ${topic}`,
            text: content,
            url: window.location.href
        });
    } else {
        copyToClipboard(content);
        alert('Teks ceramah disalin ke clipboard. Bagikan melalui aplikasi lain.');
    }
}

function showFullVersion(audience, topic) {
    const customMessage = document.getElementById('custom-message').value;
    const result = dakwahAssistant.generateSermon(topic, audience, customMessage);
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h5>Ceramah "${topic}" untuk ${dakwahAssistant.audienceTypes[audience].name}</h5>
                <button class="modal-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
            <div class="modal-body">
                <pre style="white-space: pre-wrap;">${result.sermon}</pre>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="copyToClipboard('${result.sermon.replace(/'/g, "\\'")}')">
                    <i class="fas fa-copy"></i> Copy
                </button>
                <button class="btn btn-secondary" onclick="downloadSermon('${topic}', '${audience}', '${result.sermon.replace(/'/g, "\\'")}')">
                    <i class="fas fa-download"></i> Download
                </button>
                <button class="btn" onclick="this.parentElement.parentElement.parentElement.remove()">
                    Tutup
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function printOutline(topic) {
    const outline = dakwahAssistant.getSermonOutline(topic);
    const printWindow = window.open('', '_blank');
    
    printWindow.document.write(`
        <html>
            <head>
                <title>Outline Ceramah: ${topic}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { color: #2a5c40; }
                    .step { margin: 20px 0; padding: 15px; border-left: 4px solid #2a5c40; background: #f8f9fa; }
                    .step-number { font-weight: bold; color: #d4af37; }
                </style>
            </head>
            <body>
                <h1>${outline.judul}</h1>
                <p><strong>Total Durasi:</strong> ${outline.totalDurasi}</p>
                ${outline.outline.map((step, index) => `
                    <div class="step">
                        <div class="step-number">Bagian ${index + 1}: ${step.bagian}</div>
                        <p><strong>Durasi:</strong> ${step.durasi}</p>
                        <ul>
                            ${step.poin.map(poin => `<li>${poin}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
                <p style="margin-top: 30px; font-style: italic;">Generated by SANTRI-AI Dakwah Assistant</p>
            </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
}

// Export functions to global scope
window.initializeDakwahAssistant = initializeDakwahAssistant;
window.createDakwahAssistantInterface = createDakwahAssistantInterface;
window.setupDakwahAssistant = setupDakwahAssistant;
window.generateSermon = generateSermon;