// Chatbot functionality for SANTRI-AI dengan Filter Etika AI Terintegrasi

// Predefined responses for the chatbot
const botResponses = {
    "hukum shalat berjamaah": "Shalat berjamaah hukumnya sunnah muakkad (sangat dianjurkan) bagi laki-laki. Berdasarkan kitab Fathul Qarib, pahala shalat berjamaah 27 kali lipat dibanding shalat sendirian (HR. Bukhari-Muslim).",
    "apa itu akhlak mahmudah": "Akhlak mahmudah adalah akhlak terpuji seperti jujur, sabar, tawadhu, dan pemurah. Menurut kitab Riyadhus Shalihin, Rasulullah SAW diutus untuk menyempurnakan akhlak yang mulia.",
    "adab kepada orang tua": "Adab kepada orang tua: 1. Berkata lemah lembut, 2. Tidak mendahului bicara, 3. Selalu mendoakan mereka. Dalam Al-Quran surat Al-Isra ayat 23, Allah perintahkan untuk berbuat baik kepada orang tua.",
    "hukum memakan makanan haram": "Memakan makanan haram hukumnya dilarang keras (haram). Kitab Fathul Qarib menjelaskan bahwa mengkonsumsi yang haram dapat menutup hati dari menerima hidayah.",
    "cara wudhu yang benar": "Tata cara wudhu: 1. Niat, 2. Membasuh muka, 3. Membasuh tangan hingga siku, 4. Mengusap kepala, 5. Membasuh kaki hingga mata kaki, 6. Tertib. Berdasarkan hadits riwayat Muslim.",
    "apa itu fiqih": "Fiqih adalah ilmu tentang hukum-hukum syariat Islam yang berkaitan dengan perbuatan mukallaf (orang yang dibebani syariat) yang diambil dari dalil-dalil yang terperinci. Sumbernya adalah Al-Quran, Hadits, Ijma', dan Qiyas.",
    "pengertian aqidah": "Aqidah adalah keyakinan hati yang kokoh terhadap sesuatu yang tidak mengandung keraguan sedikitpun. Aqidah Islam meliputi keyakinan kepada Allah, malaikat, kitab-kitab, rasul, hari akhir, dan takdir.",
    "contoh akhlak terpuji": "Contoh akhlak terpuji: 1. Jujur dalam perkataan dan perbuatan, 2. Sabar menghadapi ujian, 3. Tawadhu (rendah hati), 4. Dermawan, 5. Menjaga amanah, 6. Berbakti kepada orang tua.",
    "hukum menuntut ilmu": "Menuntut ilmu agama hukumnya fardhu 'ain (wajib bagi setiap muslim) untuk ilmu dasar seperti tauhid, shalat, puasa. Menuntut ilmu secara umum hukumnya fardhu kifayah (wajib bagi sebagian masyarakat).",
    "keutamaan sedekah": "Keutamaan sedekah: 1. Menghapus dosa, 2. Menolak bala, 3. Dilipatgandakan pahalanya oleh Allah, 4. Menjadi naungan di hari kiamat, 5. Meningkatkan keberkahan harta.",
    "apa itu riba": "Riba adalah tambahan pada pinjaman uang atau barang yang disyaratkan dalam transaksi. Hukumnya haram berdasarkan Al-Quran dan Hadits. Nabi SAW melaknat pemakan riba, orang yang memberi riba, pencatatnya, dan saksinya.",
    "hukum pacaran": "Pacaran dalam Islam hukumnya haram karena membuka peluang zina mata, zina tangan, dan zina hati. Islam menganjurkan ta'aruf (perkenalan) dengan menjaga batas-batas syariat untuk tujuan pernikahan.",
    "cara shalat jenazah": "Shalat jenazah: 1. Niat, 2. Takbir 4 kali, 3. Baca Al-Fatihah (setelah takbir pertama), 4. Shalawat Nabi (setelah takbir kedua), 5. Doa untuk mayit (setelah takbir ketiga), 6. Salam (setelah takbir keempat).",
    "puasa wajib": "Puasa wajib meliputi: 1. Puasa Ramadan, 2. Puasa kafarat, 3. Puasa nadzar. Puasa Ramadan hukumnya fardhu 'ain bagi setiap muslim yang baligh, berakal, sehat, dan mukim.",
    "zakat mal": "Zakat mal dikeluarkan dari harta yang telah mencapai nisab dan haul. Nisab emas 85 gram, perak 595 gram. Besar zakat 2.5%. Zakat wajib dikeluarkan setelah harta dimiliki selama 1 tahun (haul).",
    "haji dan umrah": "Haji adalah rukun Islam kelima, wajib sekali seumur hidup bagi yang mampu. Umrah hukumnya sunnah. Rukun haji: ihram, wukuf di Arafah, tawaf, sa'i, tahallul, tertib.",
    "bir": "Minuman keras (bir, arak, dll) hukumnya haram berdasarkan Al-Quran surat Al-Maidah: 90. Nabi SAW bersabda: 'Setiap yang memabukkan adalah khamar, dan setiap khamar adalah haram.' (HR. Muslim)",
    "jud": "Judi dalam segala bentuknya hukumnya haram. Allah berfirman: 'Sesungguhnya judi, khamar, berhala, dan undian adalah perbuatan keji termasuk perbuatan syaitan.' (QS. Al-Maidah: 90)",
    "zina": "Zina adalah dosa besar. Allah berfirman: 'Janganlah kamu mendekati zina, sesungguhnya zina itu adalah suatu perbuatan yang keji dan suatu jalan yang buruk.' (QS. Al-Isra: 32)",
    "narkoba": "Narkoba hukumnya haram karena termasuk khamar (zat yang memabukkan). Nabi SAW bersabda: 'Setiap yang memabukkan adalah haram.' (HR. Bukhari-Muslim). Narkoba merusak akal, harta, dan keturunan.",
    "default": "Pertanyaan Anda sedang diproses. Saya akan memberikan jawaban berdasarkan kitab yang telah diverifikasi ustadz. Untuk pertanyaan yang lebih kompleks, disarankan untuk konsultasi langsung dengan ustadz.",
    
    // Responses for filtered topics
    "filtered response": "Sebagai asisten AI yang beretika Islami, saya tidak dapat membahas topik tersebut. Mari kita fokus pada pembelajaran yang bermanfaat dan sesuai dengan nilai-nilai Islam.",
    
    "need ustadz response": "Pertanyaan Anda menyangkut topik yang memerlukan pendalaman lebih lanjut. Saya sarankan untuk berkonsultasi langsung dengan ustadz yang kompeten di bidang ini."
};

// AI Ethics Filter System
class AIEthicsFilter {
    constructor() {
        this.ethicsRules = this.initializeEthicsRules();
        this.blockedPatterns = this.initializeBlockedPatterns();
        this.sensitiveTopics = this.initializeSensitiveTopics();
        this.responseTemplates = this.initializeResponseTemplates();
    }

    initializeEthicsRules() {
        return {
            prohibited: [
                "konten pornografi atau cabul",
                "kekerasan atau permusuhan",
                "ujaran kebencian atau diskriminasi",
                "penistaan agama",
                "promosi maksiat dan kemungkaran",
                "informasi tentang narkoba dan zat terlarang",
                "konten yang merendahkan martabat manusia",
                "penipuan dan kejahatan",
                "sihir dan perdukunan"
            ],
            restricted: [
                "isu politik praktis",
                "fatwa kontroversial tanpa rujukan ulama",
                "perbedaan madzhab yang provokatif",
                "isu sektarian",
                "hukum yang membutuhkan konteks spesifik"
            ],
            required: [
                "berdasarkan dalil Al-Quran atau Hadits sahih",
                "merujuk kitab yang diakui ulama",
                "dalam koridor akidah Ahlus Sunnah wal Jamaah",
                "mengutamakan kemaslahatan umat",
                "menjaga adab dan etika Islam"
            ]
        };
    }

    initializeBlockedPatterns() {
        return {
            keywords: [
                // Agama dan akidah yang menyimpang
                'kafir', 'murtad', 'sesat', 'bid ah', 'syirik', 'musyrik',
                
                // Konten terlarang
                'narkoba', 'ganja', 'sabu', 'miras', 'minuman keras', 'zina',
                'pelacur', 'pelacuran', 'jud ', 'togel', 'judi', 'mabuk',
                
                // Kekerasan dan kebencian
                'bunuh', 'bunuh diri', 'pembunuhan', 'bom', 'teror',
                'benci', 'kebencian', 'rasis', 'diskriminasi',
                
                // Konten dewasa
                'porno', 'cabul', 'mesum', 'seks', 'vulgar',
                
                // Sihir dan perdukunan
                'sihir', 'santet', 'guna-guna', 'dukun', 'pelet',
                
                // Isu sensitif
                'khalifah', 'khilafah', 'daulah', 'negara islam',
                'jihad fisik', 'perang suci'
            ],
            regexPatterns: [
                /cara.*(bunuh|mati|suicide)/i,
                /(how to|bagaimana cara).*(zina|berzinah|seks)/i,
                /(hukum|bolehkah).*(sihir|santet|dukun)/i,
                /(fatwa|pendapat).*(kontroversial|menyimpang)/i,
                /(bom|ledakan|teror).*(cara|tutorial)/i
            ]
        };
    }

    initializeSensitiveTopics() {
        return {
            fiqhIkhtilaf: [
                "tahlilan",
                "maulid nabi",
                "qunut",
                "tarawih 20 atau 8",
                "bacaan ushalli",
                "amalan yasinan"
            ],
            political: [
                "pemimpin non muslim",
                "sistem pemerintahan islam",
                "hukum demonstrasi",
                "jihad kontemporer",
                "khilafah islamiyah"
            ],
            socialControversial: [
                "feminisme islam",
                "lgbt dalam islam",
                "pernikahan beda agama",
                "hukum bank konvensional",
                "investasi crypto"
            ]
        };
    }

    initializeResponseTemplates() {
        return {
            blocked: [
                "Assalamu'alaikum. Maaf, pertanyaan ini menyentuh topik yang tidak sesuai dengan nilai-nilai Islam. Sebagai asisten AI yang beretika, saya tidak dapat memberikan informasi tentang hal tersebut.",
                "Wa'alaikumussalam. Topik yang Anda tanyakan termasuk dalam kategori yang dilarang dalam ajaran Islam. Saya sarankan untuk berkonsultasi langsung dengan ustadz mengenai hal-hal yang lebih bermanfaat.",
                "Pertanyaan ini mengandung unsur yang bertentangan dengan syariat Islam. Mari kita fokus pada pembelajaran yang mendatangkan keberkahan."
            ],
            restricted: [
                "Ini adalah topik yang memerlukan kehati-hatian dan pemahaman mendalam. Saya sarankan untuk berkonsultasi langsung dengan ustadz yang kompeten di bidang ini.",
                "Untuk pertanyaan sensitif seperti ini, diperlukan rujukan langsung dari ulama yang ahli. Saya tidak dapat memberikan jawaban yang memadai melalui platform digital.",
                "Topik ini termasuk dalam wilayah ikhtilaf (perbedaan pendapat) di kalangan ulama. Lebih baik bertanya langsung kepada ustadz yang Anda percayai."
            ],
            redirected: [
                "Sebagai alternatif, saya bisa membantu Anda dengan topik serupa yang lebih sesuai dengan pembelajaran Islam dasar.",
                "Daripada membahas itu, bagaimana jika kita belajar tentang akhlak mulia dalam Islam?",
                "Mari kita fokus pada pemahaman dasar fiqih dan akhlak yang lebih bermanfaat untuk kehidupan sehari-hari."
            ]
        };
    }

    analyzeQuery(query) {
        const analysis = {
            isAllowed: true,
            riskLevel: 'low', // low, medium, high
            categories: [],
            violations: [],
            suggestions: [],
            needsUstadz: false
        };

        const lowerQuery = query.toLowerCase();
        
        // Check for blocked keywords
        this.blockedPatterns.keywords.forEach(keyword => {
            if (lowerQuery.includes(keyword)) {
                analysis.isAllowed = false;
                analysis.riskLevel = 'high';
                analysis.violations.push(`Mengandung kata terlarang: "${keyword}"`);
            }
        });

        // Check regex patterns
        this.blockedPatterns.regexPatterns.forEach(pattern => {
            if (pattern.test(lowerQuery)) {
                analysis.isAllowed = false;
                analysis.riskLevel = 'high';
                analysis.violations.push(`Pola pertanyaan terlarang terdeteksi`);
            }
        });

        // Check sensitive topics
        Object.entries(this.sensitiveTopics).forEach(([category, topics]) => {
            topics.forEach(topic => {
                if (lowerQuery.includes(topic.toLowerCase())) {
                    analysis.categories.push(category);
                    analysis.riskLevel = 'medium';
                    analysis.needsUstadz = true;
                    analysis.suggestions.push(`Topik "${topic}" memerlukan konsultasi ustadz`);
                }
            });
        });

        // Check for prohibited content categories
        this.ethicsRules.prohibited.forEach(rule => {
            const keywords = rule.split(' ');
            const matchCount = keywords.filter(keyword => 
                lowerQuery.includes(keyword.toLowerCase())
            ).length;
            
            if (matchCount >= 2) { // At least 2 keywords match
                analysis.isAllowed = false;
                analysis.riskLevel = 'high';
                analysis.violations.push(`Mengandung elemen: ${rule}`);
            }
        });

        // Check for restricted topics
        this.ethicsRules.restricted.forEach(rule => {
            const keywords = rule.split(' ');
            const matchCount = keywords.filter(keyword => 
                lowerQuery.includes(keyword.toLowerCase())
            ).length;
            
            if (matchCount >= 2) {
                analysis.riskLevel = 'medium';
                analysis.needsUstadz = true;
                analysis.suggestions.push(`Topik terbatas: ${rule}`);
            }
        });

        return analysis;
    }

    generateResponse(query, analysis) {
        if (!analysis.isAllowed) {
            const randomTemplate = this.responseTemplates.blocked[
                Math.floor(Math.random() * this.responseTemplates.blocked.length)
            ];
            
            return {
                allowed: false,
                message: randomTemplate,
                reason: `Diblokir karena: ${analysis.violations.join(', ')}`,
                suggestion: "Silakan bertanya tentang fiqih dasar, akhlak, adab, atau sejarah Islam"
            };
        }

        if (analysis.riskLevel === 'high' || analysis.needsUstadz) {
            const randomTemplate = this.responseTemplates.restricted[
                Math.floor(Math.random() * this.responseTemplates.restricted.length)
            ];
            
            return {
                allowed: false,
                message: randomTemplate,
                reason: `Membutuhkan verifikasi ustadz`,
                suggestion: analysis.suggestions[0] || "Konsultasikan dengan ustadz terdekat"
            };
        }

        if (analysis.riskLevel === 'medium') {
            const randomTemplate = this.responseTemplates.redirected[
                Math.floor(Math.random() * this.responseTemplates.redirected.length)
            ];
            
            return {
                allowed: true,
                message: `${randomTemplate}\n\nNamun jika Anda tetap ingin tahu, berikut informasi umum:`,
                warning: "Perlu konfirmasi lebih lanjut dengan ustadz",
                proceedWithCaution: true
            };
        }

        return {
            allowed: true,
            message: null, // Will be filled by chatbot
            proceedWithCaution: false
        };
    }

    logFilterActivity(query, analysis, response) {
        const logEntry = {
            timestamp: new Date().toISOString(),
            query: query.substring(0, 100), // Truncate for privacy
            analysis: {
                riskLevel: analysis.riskLevel,
                categories: analysis.categories,
                isAllowed: analysis.isAllowed
            },
            action: response.allowed ? 'allowed' : 'blocked',
            reason: response.reason || 'none'
        };

        // In production, this would send to a logging server
        console.log('AI Ethics Filter Log:', logEntry);
        
        // For demo purposes, store in localStorage
        try {
            const logs = JSON.parse(localStorage.getItem('ethicsFilterLogs') || '[]');
            logs.unshift(logEntry);
            if (logs.length > 50) logs.pop(); // Keep only last 50 entries
            localStorage.setItem('ethicsFilterLogs', JSON.stringify(logs));
        } catch (e) {
            console.error('Failed to log filter activity:', e);
        }
    }

    getFilterStats() {
        try {
            const logs = JSON.parse(localStorage.getItem('ethicsFilterLogs') || '[]');
            const stats = {
                total: logs.length,
                blocked: logs.filter(log => log.action === 'blocked').length,
                allowed: logs.filter(log => log.action === 'allowed').length,
                highRisk: logs.filter(log => log.analysis.riskLevel === 'high').length,
                mediumRisk: logs.filter(log => log.analysis.riskLevel === 'medium').length,
                recentLogs: logs.slice(0, 5)
            };
            return stats;
        } catch (e) {
            return {
                total: 0,
                blocked: 0,
                allowed: 0,
                highRisk: 0,
                mediumRisk: 0,
                recentLogs: []
            };
        }
    }

    // Education mode - Explain why something is filtered
    explainFilterRule(query) {
        const analysis = this.analyzeQuery(query);
        
        if (analysis.isAllowed && analysis.riskLevel === 'low') {
            return {
                explanation: "Pertanyaan ini aman dan sesuai dengan etika Islam.",
                rulesApplied: [],
                recommendations: ["Lanjutkan pembelajaran!"]
            };
        }

        const explanations = [];
        const rules = [];
        const recommendations = [];

        // Explain violations
        if (analysis.violations.length > 0) {
            explanations.push(`Pertanyaan Anda mengandung: ${analysis.violations.join(', ')}`);
            rules.push(...analysis.violations.map(v => `Melanggar: ${v}`));
            recommendations.push("Hindari pertanyaan tentang topik terlarang");
        }

        // Explain sensitive topics
        if (analysis.categories.length > 0) {
            const categoryNames = {
                fiqhIkhtilaf: "Perbedaan pendapat fiqih",
                political: "Isu politik",
                socialControversial: "Isu sosial kontroversial"
            };
            
            const translatedCategories = analysis.categories.map(cat => categoryNames[cat] || cat);
            explanations.push(`Menyentuh topik sensitif: ${translatedCategories.join(', ')}`);
            recommendations.push("Konsultasikan dengan ustadz untuk pemahaman mendalam");
        }

        // General recommendations based on risk level
        if (analysis.riskLevel === 'high') {
            recommendations.push("Fokuslah pada pembelajaran dasar Islam yang lebih bermanfaat");
            recommendations.push("Ingatlah bahwa menuntut ilmu yang bermanfaat adalah ibadah");
        }

        if (analysis.needsUstadz) {
            recommendations.push("Penting: Konsultasi langsung dengan ustadz diperlukan");
        }

        return {
            explanation: explanations.join(' '),
            rulesApplied: rules,
            recommendations: [...new Set(recommendations)], // Remove duplicates
            riskLevel: analysis.riskLevel,
            needsUstadz: analysis.needsUstadz
        };
    }
}

// Global ethics filter instance
let ethicsFilter = null;

// Function to add message to chat
function addMessage(sender, text, isUser = false) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const now = new Date();
    const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                      now.getMinutes().toString().padStart(2, '0');
    
    messageDiv.innerHTML = `
        <div class="message-header">
            <span><i class="fas ${isUser ? 'fa-user' : 'fa-robot'}"></i> ${sender}</span>
            <span>${timeString}</span>
        </div>
        <p>${text}</p>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to process user message with ethics filter
function processUserMessage() {
    const chatInput = document.getElementById('chat-input');
    if (!chatInput) return;
    
    const userMessage = chatInput.value.trim();
    
    if (userMessage === '') return;
    
    // Add user message to chat
    addMessage("Anda", userMessage, true);
    
    // Clear input
    chatInput.value = '';
    
    // Initialize ethics filter if not already
    if (!ethicsFilter) {
        ethicsFilter = new AIEthicsFilter();
    }
    
    // Apply ethics filter
    const analysis = ethicsFilter.analyzeQuery(userMessage);
    const filterResponse = ethicsFilter.generateResponse(userMessage, analysis);
    
    // Log the activity
    ethicsFilter.logFilterActivity(userMessage, analysis, filterResponse);
    
    // If not allowed, show filter message
    if (!filterResponse.allowed) {
        // Show filter message
        setTimeout(() => {
            addMessage("SANTRI-AI", filterResponse.message, false);
            
            // Show educational explanation
            setTimeout(() => {
                const explanation = ethicsFilter.explainFilterRule(userMessage);
                const explanationMsg = `
                    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 10px; margin-top: 10px;">
                        <strong>📚 Edukasi Filter:</strong><br>
                        ${explanation.explanation}<br><br>
                        <strong>💡 Rekomendasi:</strong><br>
                        ${explanation.recommendations.map(rec => `• ${rec}`).join('<br>')}
                    </div>
                `;
                addMessage("SANTRI-AI (Edukasi)", explanationMsg, false);
            }, 800);
        }, 500);
        return;
    }
    
    // If allowed with caution
    if (filterResponse.proceedWithCaution) {
        setTimeout(() => {
            addMessage("SANTRI-AI", filterResponse.message, false);
            
            // Continue with normal response after warning
            setTimeout(() => {
                provideBotResponse(userMessage.toLowerCase());
            }, 1000);
        }, 500);
        return;
    }
    
    // Normal processing
    setTimeout(() => {
        provideBotResponse(userMessage.toLowerCase());
    }, 500);
}

// Function to provide bot response
function provideBotResponse(userMessage) {
    // Find bot response (simple keyword matching)
    let botResponse = botResponses.default;
    
    for (const keyword in botResponses) {
        if (userMessage.includes(keyword.toLowerCase())) {
            botResponse = botResponses[keyword];
            break;
        }
    }
    
    // Check for inappropriate questions (additional filter)
    const inappropriateKeywords = ['minuman keras', 'narkoba', 'zina', 'jud', 'kafir', 'murtad'];
    const isInappropriate = inappropriateKeywords.some(keyword => userMessage.includes(keyword));
    
    if (isInappropriate) {
        botResponse = "Maaf, pertanyaan ini tidak sesuai dengan nilai Islam. Saya tidak dapat memberikan informasi tentang hal tersebut. Silakan bertanya tentang fiqih, akhlak, atau adab yang sesuai dengan ajaran Islam.";
    }
    
    addMessage("SANTRI-AI", botResponse, false);
}

// Initialize chatbot
function initializeChatbot() {
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    
    if (!sendBtn || !chatInput) return;
    
    // Initialize ethics filter
    ethicsFilter = new AIEthicsFilter();
    
    // Event listeners for chatbot
    sendBtn.addEventListener('click', processUserMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processUserMessage();
        }
    });
    
    // Add sample questions on load
    setTimeout(() => {
        addMessage("SANTRI-AI", 
            "Assalamu'alaikum warahmatullahi wabarakatuh. Saya SANTRI-AI, asisten pembelajaran kitab.<br><br>" +
            "<strong>Anda bisa mencoba bertanya tentang:</strong><br>" +
            "• Hukum shalat berjamaah<br>" +
            "• Apa itu akhlak mahmudah<br>" +
            "• Adab kepada orang tua<br>" +
            "• Hukum memakan makanan haram<br>" +
            "• Cara wudhu yang benar<br>" +
            "• Apa itu fiqih<br>" +
            "• Pengertian aqidah<br><br>" +
            "<strong>Filter Etika AI aktif:</strong> Pertanyaan yang tidak sesuai nilai Islam akan diblokir.", 
            false
        );
    }, 1500);
}

// Make functions globally accessible
window.addMessage = addMessage;
window.processUserMessage = processUserMessage;
window.initializeChatbot = initializeChatbot;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initializeChatbot, 1000);
    });
} else {
    setTimeout(initializeChatbot, 1000);
}
// Tambahkan di bagian akhir chatbot.js, sebelum penutup

// Function untuk handle tombol live demo filter
function setupLiveFilterDemoButton() {
    const liveDemoBtn = document.getElementById('live-filter-demo');
    
    if (liveDemoBtn) {
        liveDemoBtn.addEventListener('click', function() {
            // Scroll ke chatbot section
            const chatbotSection = document.getElementById('chat');
            if (chatbotSection) {
                chatbotSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Tambahkan instruksi di chat setelah sedikit delay
            setTimeout(() => {
                const instructions = `
                    <div style="background-color: #e8f4fc; padding: 15px; border-radius: 10px; margin: 10px 0;">
                        <strong>🧪 DEMO FILTER ETIKA AI</strong><br><br>
                        <strong>Coba ketik pertanyaan berikut untuk menguji filter:</strong><br><br>
                        <strong>❌ Akan diblokir:</strong><br>
                        • "Bagaimana cara membuat minuman keras?"<br>
                        • "Apa hukum zina?"<br>
                        • "Bolehkah main judi?"<br>
                        • "Cara membuat bom?"<br><br>
                        <strong>⚠️ Butuh ustadz:</strong><br>
                        • "Bagaimana pendapat tentang tahlilan?"<br>
                        • "Apa hukum investasi crypto?"<br><br>
                        <strong>✅ Akan dijawab:</strong><br>
                        • "Apa hukum shalat berjamaah?"<br>
                        • "Bagaimana cara wudhu?"<br>
                        • "Apa keutamaan sedekah?"
                    </div>
                `;
                
                addMessage("SANTRI-AI (Demo Filter)", instructions, false);
                
                // Auto-focus ke input chat
                const chatInput = document.getElementById('chat-input');
                if (chatInput) {
                    setTimeout(() => {
                        chatInput.focus();
                    }, 500);
                }
            }, 800);
        });
        
        console.log('Live filter demo button setup successfully');
    } else {
        console.log('Live filter demo button not found');
    }
}

// Function untuk setup semua tombol demo
function setupDemoButtons() {
    setupLiveFilterDemoButton();
    
    // Setup untuk tombol test filter lainnya
    const testButtons = document.querySelectorAll('.btn-test-query, #test-custom-query, #reset-logs-btn');
    
    testButtons.forEach(button => {
        if (button && !button.hasAttribute('data-listener-added')) {
            button.setAttribute('data-listener-added', 'true');
            
            if (button.id === 'test-custom-query') {
                button.addEventListener('click', function() {
                    const customQuery = document.getElementById('custom-test-query')?.value.trim();
                    if (customQuery) {
                        testEthicsFilter(customQuery);
                    } else {
                        alert('Silakan masukkan pertanyaan untuk diuji.');
                    }
                });
            }
            
            if (button.id === 'reset-logs-btn') {
                button.addEventListener('click', function() {
                    if (confirm('Apakah Anda yakin ingin menghapus semua log filter?')) {
                        localStorage.removeItem('ethicsFilterLogs');
                        alert('Log filter telah direset.');
                        
                        // Refresh dashboard jika ada
                        const dashboardContainer = document.getElementById('filter-dashboard-container');
                        if (dashboardContainer) {
                            dashboardContainer.innerHTML = showEthicsFilterDashboard();
                        }
                    }
                });
            }
        }
    });
}

// Function untuk test ethics filter (untuk demo di tab)
function testEthicsFilter(query) {
    if (!ethicsFilter) {
        ethicsFilter = new AIEthicsFilter();
    }
    
    const analysis = ethicsFilter.analyzeQuery(query);
    const filterResponse = ethicsFilter.generateResponse(query, analysis);
    const explanation = ethicsFilter.explainFilterRule(query);
    
    // Log the test
    ethicsFilter.logFilterActivity(query, analysis, filterResponse);
    
    // Show results
    const resultsContainer = document.getElementById('test-results');
    if (resultsContainer) {
        let statusClass = 'allowed';
        let statusText = 'Diizinkan';
        
        if (!filterResponse.allowed) {
            statusClass = 'blocked';
            statusText = 'Diblokir';
        } else if (filterResponse.proceedWithCaution) {
            statusClass = 'restricted';
            statusText = 'Perhatian';
        }
        
        resultsContainer.innerHTML = `
            <div class="test-result-card">
                <div class="test-result-header">
                    <h5>Hasil Test: "${query}"</h5>
                    <span class="test-status ${statusClass}">${statusText}</span>
                </div>
                
                <div class="test-analysis">
                    <div class="analysis-section">
                        <h6><i class="fas fa-chart-bar"></i> Analisis Risiko</h6>
                        <ul>
                            <li><strong>Tingkat Risiko:</strong> ${analysis.riskLevel.toUpperCase()}</li>
                            <li><strong>Kategori:</strong> ${analysis.categories.length > 0 ? analysis.categories.join(', ') : 'Tidak ada'}</li>
                            <li><strong>Perlu Ustadz:</strong> ${analysis.needsUstadz ? 'Ya' : 'Tidak'}</li>
                        </ul>
                    </div>
                    
                    ${analysis.violations.length > 0 ? `
                    <div class="analysis-section">
                        <h6><i class="fas fa-exclamation-circle"></i> Pelanggaran Terdeteksi</h6>
                        <ul>
                            ${analysis.violations.map(violation => `<li>${violation}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    
                    ${explanation.rulesApplied.length > 0 ? `
                    <div class="analysis-section">
                        <h6><i class="fas fa-gavel"></i> Aturan yang Berlaku</h6>
                        <ul>
                            ${explanation.rulesApplied.map(rule => `<li>${rule}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    
                    <div class="analysis-section">
                        <h6><i class="fas fa-lightbulb"></i> Rekomendasi</h6>
                        <ul>
                            ${explanation.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: var(--border-radius);">
                    <strong>Respons Filter:</strong><br>
                    ${filterResponse.message || 'Pertanyaan diizinkan untuk diproses lebih lanjut.'}
                </div>
            </div>
        `;
        
        resultsContainer.className = 'test-results show';
        
        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Function untuk show ethics filter dashboard
function showEthicsFilterDashboard() {
    if (!ethicsFilter) {
        ethicsFilter = new AIEthicsFilter();
    }
    
    const stats = ethicsFilter.getFilterStats();
    
    return `
        <div class="ethics-dashboard">
            <h4><i class="fas fa-shield-alt"></i> Dashboard Filter Etika AI</h4>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-value">${stats.total}</div>
                    <div class="stat-label">Total Pertanyaan</div>
                </div>
                <div class="stat-card stat-safe">
                    <div class="stat-value">${stats.allowed}</div>
                    <div class="stat-label">Diizinkan</div>
                </div>
                <div class="stat-card stat-blocked">
                    <div class="stat-value">${stats.blocked}</div>
                    <div class="stat-label">Diblokir</div>
                </div>
                <div class="stat-card stat-warning">
                    <div class="stat-value">${stats.mediumRisk}</div>
                    <div class="stat-label">Perlu Kehati-hatian</div>
                </div>
            </div>
            
            <div class="rules-section">
                <h5><i class="fas fa-gavel"></i> Aturan Filter Etika</h5>
                <div class="rules-categories">
                    <div class="rule-category prohibited">
                        <h6><i class="fas fa-ban"></i> Dilarang Total</h6>
                        <ul>
                            ${ethicsFilter.ethicsRules.prohibited.slice(0, 3).map(rule => 
                                `<li>${rule}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    <div class="rule-category restricted">
                        <h6><i class="fas fa-exclamation-triangle"></i> Diperlukan Ustadz</h6>
                        <ul>
                            ${ethicsFilter.ethicsRules.restricted.slice(0, 3).map(rule => 
                                `<li>${rule}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    <div class="rule-category required">
                        <h6><i class="fas fa-check-circle"></i> Persyaratan</h6>
                        <ul>
                            ${ethicsFilter.ethicsRules.required.slice(0, 3).map(rule => 
                                `<li>${rule}</li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="recent-activity">
                <h5><i class="fas fa-history"></i> Aktivitas Terbaru</h5>
                ${stats.recentLogs.length > 0 ? 
                    `<div class="activity-list">
                        ${stats.recentLogs.map(log => `
                            <div class="activity-item ${log.action}">
                                <span class="activity-time">${new Date(log.timestamp).toLocaleTimeString()}</span>
                                <span class="activity-query">${log.query}...</span>
                                <span class="activity-action ${log.action}">
                                    ${log.action === 'blocked' ? '❌ Diblokir' : '✅ Diizinkan'}
                                </span>
                            </div>
                        `).join('')}
                    </div>` :
                    '<p>Belum ada aktivitas yang tercatat.</p>'
                }
            </div>
            
            <div class="dashboard-actions">
                <button class="btn btn-secondary" id="test-filter-btn" onclick="openFilterTest()">
                    <i class="fas fa-vial"></i> Test Filter
                </button>
                <button class="btn btn-secondary" id="reset-logs-btn">
                    <i class="fas fa-trash"></i> Reset Logs
                </button>
            </div>
        </div>
    `;
}

// Function untuk create filter test interface
function createFilterTestInterface() {
    const testQueries = [
        "Apa hukumnya minum bir?",
        "Bagaimana cara berzina yang benar?",
        "Bolehkah bermain togel?",
        "Apa pendapat tentang tahlilan?",
        "Bagaimana membuat bom?",
        "Apa itu syirik?",
        "Bagaimana cara shalat yang benar?",
        "Apa keutamaan sedekah?"
    ];
    
    return `
        <div class="filter-test-interface">
            <h5><i class="fas fa-vial"></i> Uji Filter Etika AI</h5>
            <p>Pilih pertanyaan untuk menguji sistem filter:</p>
            
            <div class="test-queries">
                ${testQueries.map((query, index) => `
                    <div class="test-query">
                        <span class="query-text">"${query}"</span>
                        <button class="btn-test-query" onclick="testEthicsFilter('${query}')">
                            <i class="fas fa-play"></i> Test
                        </button>
                    </div>
                `).join('')}
            </div>
            
            <div class="custom-test">
                <textarea id="custom-test-query" placeholder="Atau tulis pertanyaan Anda sendiri..."></textarea>
                <button class="btn btn-primary" id="test-custom-query">
                    <i class="fas fa-check"></i> Test Pertanyaan Custom
                </button>
            </div>
            
            <div id="test-results"></div>
        </div>
    `;
}

// Function untuk open filter test
function openFilterTest() {
    const testContainer = document.getElementById('filter-test-container');
    if (testContainer) {
        testContainer.innerHTML = createFilterTestInterface();
        setupDemoButtons(); // Setup ulang event listeners
    }
}

// Initialize semua fungsi ketika chatbot diinisialisasi
function initializeChatbot() {
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    
    if (!sendBtn || !chatInput) return;
    
    // Initialize ethics filter
    ethicsFilter = new AIEthicsFilter();
    
    // Event listeners for chatbot
    sendBtn.addEventListener('click', processUserMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processUserMessage();
        }
    });
    
    // Setup demo buttons
    setupDemoButtons();
    
    // Add sample questions on load
    setTimeout(() => {
        addMessage("SANTRI-AI", 
            "Assalamu'alaikum warahmatullahi wabarakatuh. Saya SANTRI-AI, asisten pembelajaran kitab.<br><br>" +
            "<strong>Anda bisa mencoba bertanya tentang:</strong><br>" +
            "• Hukum shalat berjamaah<br>" +
            "• Apa itu akhlak mahmudah<br>" +
            "• Adab kepada orang tua<br>" +
            "• Hukum memakan makanan haram<br>" +
            "• Cara wudhu yang benar<br>" +
            "• Apa itu fiqih<br>" +
            "• Pengertian aqidah<br><br>" +
            "<strong>Filter Etika AI aktif:</strong> Pertanyaan yang tidak sesuai nilai Islam akan diblokir.", 
            false
        );
        
        // Coba setup demo buttons lagi setelah chat terbuka
        setTimeout(setupDemoButtons, 500);
    }, 1500);
}

// Setup ulang demo buttons setiap kali tab diklik
document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('tab-btn')) {
        setTimeout(setupDemoButtons, 300);
    }
});

// Export functions ke global scope
window.showEthicsFilterDashboard = showEthicsFilterDashboard;
window.createFilterTestInterface = createFilterTestInterface;
window.testEthicsFilter = testEthicsFilter;
window.openFilterTest = openFilterTest;
window.setupDemoButtons = setupDemoButtons;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initializeChatbot, 1000);
    });
} else {
    setTimeout(initializeChatbot, 1000);
}