// AI Ethics Filter System for SANTRI-AI

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
                "Maaf, pertanyaan ini menyentuh topik yang tidak sesuai dengan nilai-nilai Islam. Sebagai asisten AI yang beretika, saya tidak dapat memberikan informasi tentang hal tersebut.",
                "Topik yang Anda tanyakan termasuk dalam kategori yang dilarang dalam ajaran Islam. Saya sarankan untuk berkonsultasi langsung dengan ustadz mengenai hal-hal yang lebih bermanfaat.",
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

// Initialize AI Ethics Filter
let ethicsFilter = null;

function initializeEthicsFilter() {
    ethicsFilter = new AIEthicsFilter();
    
    // Add to chatbot functionality
    const originalProcessMessage = window.processUserMessage;
    
    if (originalProcessMessage) {
        window.processUserMessage = function() {
            const chatInput = document.getElementById('chat-input');
            if (!chatInput) return;
            
            const query = chatInput.value.trim();
            if (!query) return;
            
            // Apply ethics filter
            const analysis = ethicsFilter.analyzeQuery(query);
            const filterResponse = ethicsFilter.generateResponse(query, analysis);
            
            // Log the activity
            ethicsFilter.logFilterActivity(query, analysis, filterResponse);
            
            if (!filterResponse.allowed) {
                // Show filter message
                addMessage("SANTRI-AI (Filter Etika)", filterResponse.message, false);
                
                // Show educational explanation if needed
                if (analysis.riskLevel === 'medium' || analysis.riskLevel === 'high') {
                    setTimeout(() => {
                        const explanation = ethicsFilter.explainFilterRule(query);
                        const explanationMsg = `
                            <strong>Penjelasan Filter:</strong><br>
                            ${explanation.explanation}<br><br>
                            <strong>Rekomendasi:</strong><br>
                            ${explanation.recommendations.map(rec => `• ${rec}`).join('<br>')}
                        `;
                        addMessage("SANTRI-AI (Edukasi)", explanationMsg, false);
                    }, 1000);
                }
                
                // Clear input
                chatInput.value = '';
                return;
            }
            
            // If allowed with caution
            if (filterResponse.proceedWithCaution) {
                addMessage("SANTRI-AI", filterResponse.message, false);
                // Continue with original processing after warning
                setTimeout(() => {
                    originalProcessMessage.call(this);
                }, 500);
            } else {
                // Normal processing
                originalProcessMessage.call(this);
            }
        };
    }
    
    return ethicsFilter;
}

// Show filter statistics dashboard
function showEthicsFilterDashboard() {
    if (!ethicsFilter) {
        ethicsFilter = new AIEthicsFilter();
    }
    
    const stats = ethicsFilter.getFilterStats();
    const dashboardHTML = `
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
                <button class="btn btn-secondary" id="test-filter-btn">
                    <i class="fas fa-vial"></i> Test Filter
                </button>
                <button class="btn btn-secondary" id="reset-logs-btn">
                    <i class="fas fa-trash"></i> Reset Logs
                </button>
            </div>
        </div>
    `;
    
    return dashboardHTML;
}

// Test filter interface
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
    
    const testHTML = `
        <div class="filter-test-interface">
            <h5><i class="fas fa-vial"></i> Uji Filter Etika AI</h5>
            <p>Pilih pertanyaan untuk menguji sistem filter:</p>
            
            <div class="test-queries">
                ${testQueries.map((query, index) => `
                    <div class="test-query" data-query="${query}">
                        <span class="query-text">"${query}"</span>
                        <button class="btn-test-query" data-index="${index}">
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
    
    return testHTML;
}