// Digital Literacy Module for SANTRI-AI

class DigitalLiteracySimulation {
    constructor() {
        this.currentStep = 0;
        this.score = 0;
        this.totalSteps = 5;
        this.simulationData = this.getSimulationData();
    }

    getSimulationData() {
        return [
            {
                title: "Identifikasi Berita Hoax",
                scenario: "Anda menerima broadcast WhatsApp: 'PESANTREN AL-FALAH AKAN DITUTUP KARENA KASUS NARKOBA! Segera sebarkan ke semua grup!'",
                question: "Apa langkah pertama yang harus dilakukan?",
                options: [
                    { text: "Segera sebarkan ke semua grup", correct: false, explanation: "Menyebarkan tanpa verifikasi dapat menyebarkan hoax" },
                    { text: "Cek sumber berita dan media yang melaporkan", correct: true, explanation: "Verifikasi sumber adalah langkah pertama yang tepat" },
                    { text: "Hapus pesan dan abaikan", correct: false, explanation: "Mengabaikan tanpa verifikasi juga bukan solusi" },
                    { text: "Tanya ke teman apakah ini benar", correct: false, explanation: "Tanya ke sumber yang tidak terpercaya tidak membantu" }
                ]
            },
            {
                title: "Etika Media Sosial",
                scenario: "Ada postingan di Facebook yang menghina salah satu madzhab fiqih. Postingan ini mendapat banyak like dan komentar mendukung.",
                question: "Bagaimana sikap yang sesuai dengan etika Islam?",
                options: [
                    { text: "Ikut komentar mendukung untuk dapat like", correct: false, explanation: "Mendukung yang salah untuk popularitas tidak dibenarkan" },
                    { text: "Buat postingan balasan yang lebih menghina", correct: false, explanation: "Membalas kejahatan dengan kejahatan dilarang" },
                    { text: "Laporkan postingan dan beri nasehat dengan santun", correct: true, explanation: "Melaporkan konten negatif dan menasehati dengan baik sesuai ajaran Islam" },
                    { text: "Screenshot dan sebarkan ke grup lain", correct: false, explanation: "Menyebarkan konten negatif hanya memperburuk keadaan" }
                ]
            },
            {
                title: "Keamanan Data Pribadi",
                scenario: "Ada aplikasi 'Kuis Islami' yang meminta akses ke kontak, galeri foto, dan lokasi Anda.",
                question: "Apa yang harus dilakukan?",
                options: [
                    { text: "Izinkan semua akses agar aplikasi berjalan lancar", correct: false, explanation: "Memberikan akses tidak perlu berisiko pada privasi" },
                    { text: "Cek review aplikasi dan kebutuhan aksesnya", correct: true, explanation: "Selalu cek review dan pastikan akses yang diminta sesuai kebutuhan" },
                    { text: "Instal saja, semua aplikasi sekarang minta akses", correct: false, explanation: "Tidak semua aplikasi membutuhkan akses penuh" },
                    { text: "Berikan akses tapi hapus setelah selesai", correct: false, explanation: "Data sudah terambil meski aplikasi dihapus" }
                ]
            },
            {
                title: "Konten Edukatif vs Negatif",
                scenario: "Di TikTok, Anda melihat konten yang mengajarkan doa-doa pendek dengan animasi menarik vs konten challenges yang berbahaya.",
                question: "Bagaimana memfilter konten yang baik?",
                options: [
                    { text: "Tonton semua, yang penting menghibur", correct: false, explanation: "Konten negatif dapat mempengaruhi pikiran dan iman" },
                    { text: "Gunakan fitur 'Not Interested' untuk konten negatif", correct: true, explanation: "Algoritma akan menyesuaikan rekomendasi berdasarkan interaksi Anda" },
                    { text: "Subscribe semua creator populer", correct: false, explanation: "Popularitas tidak menjamin konten berkualitas" },
                    { text: "Buat akun terpisah untuk konten hiburan", correct: false, explanation: "Tetap berisiko terpapar konten negatif" }
                ]
            },
            {
                title: "Literasi Keuangan Digital",
                scenario: "Ada tawaran investasi 'syariah' dengan janji profit 50% per bulan melalui aplikasi online.",
                question: "Apa indikasi bahwa ini mungkin penipuan?",
                options: [
                    { text: "Profit terlalu tinggi tidak realistis", correct: true, explanation: "Profit berlebihan sering indikasi skema Ponzi" },
                    { text: "Aplikasinya berbahasa Inggris", correct: false, explanation: "Bahasa bukan indikator penipuan" },
                    { text: "Mereka tidak punya kantor fisik", correct: true, explanation: "Tidak adanya kantor fisik patut dicurigai" },
                    { text: "Adminnya cepat membalas chat", correct: false, explanation: "Responsif bukan indikator penipuan" }
                ]
            }
        ];
    }

    startSimulation() {
        this.currentStep = 0;
        this.score = 0;
        this.displayStep(this.currentStep);
    }

    displayStep(stepIndex) {
        const step = this.simulationData[stepIndex];
        if (!step) return;

        let optionsHtml = '';
        step.options.forEach((option, index) => {
            optionsHtml += `
                <div class="simulation-option" data-index="${index}">
                    <input type="${stepIndex === 4 ? 'checkbox' : 'radio'}" name="step${stepIndex}" id="option${index}" value="${index}">
                    <label for="option${index}">${option.text}</label>
                </div>
            `;
        });

        const simulationHTML = `
            <div class="simulation-container">
                <div class="simulation-header">
                    <h4>Simulasi Literasi Digital - Langkah ${stepIndex + 1}/${this.totalSteps}</h4>
                    <div class="simulation-score">Skor: ${this.score}/${stepIndex}</div>
                </div>
                
                <div class="simulation-scenario">
                    <h5>${step.title}</h5>
                    <div class="scenario-text">${step.scenario}</div>
                </div>
                
                <div class="simulation-question">
                    <p><strong>${step.question}</strong></p>
                    <div class="simulation-options">
                        ${optionsHtml}
                    </div>
                </div>
                
                <div class="simulation-actions">
                    ${stepIndex > 0 ? `<button class="btn btn-secondary" id="prev-step">← Sebelumnya</button>` : ''}
                    <button class="btn btn-primary" id="next-step">
                        ${stepIndex === this.totalSteps - 1 ? 'Lihat Hasil' : 'Langkah Berikut →'}
                    </button>
                </div>
                
                <div class="simulation-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${((stepIndex + 1) / this.totalSteps) * 100}%"></div>
                    </div>
                </div>
            </div>
        `;

        const simulationTab = document.getElementById('tab3');
        if (simulationTab) {
            simulationTab.innerHTML = `
                <h3>Mode Literasi Digital - Simulasi Interaktif</h3>
                <p>Latih kemampuan literasi digital Anda dengan simulasi kasus nyata:</p>
                ${simulationHTML}
            `;

            this.attachEventListeners();
        }
    }

    attachEventListeners() {
        // Option selection
        document.querySelectorAll('.simulation-option').forEach(option => {
            option.addEventListener('click', (e) => {
                if (!e.target.closest('input')) {
                    const input = option.querySelector('input');
                    if (input.type === 'checkbox') {
                        input.checked = !input.checked;
                    } else {
                        input.checked = true;
                    }
                }
            });
        });

        // Navigation buttons
        const prevBtn = document.getElementById('prev-step');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (this.currentStep > 0) {
                    this.currentStep--;
                    this.displayStep(this.currentStep);
                }
            });
        }

        const nextBtn = document.getElementById('next-step');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.checkAnswer();
                
                if (this.currentStep < this.totalSteps - 1) {
                    this.currentStep++;
                    this.displayStep(this.currentStep);
                } else {
                    this.showResults();
                }
            });
        }
    }

    checkAnswer() {
        const currentStepData = this.simulationData[this.currentStep];
        const isMultiSelect = this.currentStep === 4; // Last step has multiple correct answers
        
        if (isMultiSelect) {
            const checkboxes = document.querySelectorAll(`input[name="step${this.currentStep}"]:checked`);
            let allCorrect = true;
            let selectedCount = 0;
            
            currentStepData.options.forEach((option, index) => {
                const isChecked = document.getElementById(`option${index}`).checked;
                
                if (option.correct && !isChecked) {
                    allCorrect = false;
                }
                if (!option.correct && isChecked) {
                    allCorrect = false;
                }
                if (isChecked) selectedCount++;
            });
            
            // For multi-select, require at least one selection and all correct
            if (selectedCount > 0 && allCorrect) {
                this.score++;
            }
        } else {
            const selected = document.querySelector(`input[name="step${this.currentStep}"]:checked`);
            if (selected) {
                const selectedIndex = parseInt(selected.value);
                if (currentStepData.options[selectedIndex].correct) {
                    this.score++;
                }
            }
        }
    }

    showResults() {
        const percentage = (this.score / this.totalSteps) * 100;
        let message = '';
        let resultClass = '';
        
        if (percentage >= 80) {
            message = "Luar biasa! Anda memiliki literasi digital yang sangat baik. Teruslah menjadi contoh positif di dunia digital.";
            resultClass = "excellent";
        } else if (percentage >= 60) {
            message = "Bagus! Pemahaman literasi digital Anda cukup baik. Masih ada ruang untuk meningkatkan kewaspadaan.";
            resultClass = "good";
        } else if (percentage >= 40) {
            message = "Cukup! Anda perlu lebih waspada dalam bermedia sosial. Pelajari lebih dalam tentang etika digital Islam.";
            resultClass = "fair";
        } else {
            message = "Perlu peningkatan! Literasi digital Anda masih rendah. Ikuti panduan SANTRI-AI untuk belajar lebih lanjut.";
            resultClass = "poor";
        }

        const simulationTab = document.getElementById('tab3');
        simulationTab.innerHTML = `
            <h3>Hasil Simulasi Literasi Digital</h3>
            <div class="result-container ${resultClass}">
                <div class="result-score">
                    <h4>Skor Anda: ${this.score}/${this.totalSteps} (${percentage.toFixed(0)}%)</h4>
                    <div class="score-circle">
                        <svg width="120" height="120" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="54" fill="none" stroke="#f0f0f0" stroke-width="12"/>
                            <circle cx="60" cy="60" r="54" fill="none" stroke="${this.getColorByPercentage(percentage)}" 
                                    stroke-width="12" stroke-dasharray="${2 * Math.PI * 54}" 
                                    stroke-dashoffset="${2 * Math.PI * 54 * (1 - percentage/100)}" stroke-linecap="round" transform="rotate(-90 60 60)"/>
                        </svg>
                        <div class="score-text">${percentage.toFixed(0)}%</div>
                    </div>
                </div>
                
                <div class="result-message">
                    <h5>Analisis Hasil:</h5>
                    <p>${message}</p>
                    
                    <div class="result-details">
                        <h6>Rekomendasi:</h6>
                        <ul>
                            <li>Selalu verifikasi informasi sebelum menyebarkan</li>
                            <li>Gunakan media sosial untuk kebaikan dan dakwah</li>
                            <li>Lindungi data pribadi dari aplikasi tidak jelas</li>
                            <li>Laporkan konten negatif ke platform media sosial</li>
                            <li>Ikuti akun-akun edukatif Islami yang terpercaya</li>
                        </ul>
                    </div>
                </div>
                
                <div class="result-actions">
                    <button class="btn btn-primary" id="restart-simulation">
                        <i class="fas fa-redo"></i> Ulangi Simulasi
                    </button>
                    <button class="btn btn-secondary" id="view-guide">
                        <i class="fas fa-book"></i> Lihat Panduan Lengkap
                    </button>
                </div>
            </div>
        `;

        document.getElementById('restart-simulation').addEventListener('click', () => {
            this.startSimulation();
        });

        document.getElementById('view-guide').addEventListener('click', () => {
            this.showDigitalGuide();
        });
    }

    getColorByPercentage(percentage) {
        if (percentage >= 80) return '#2ecc71';
        if (percentage >= 60) return '#f39c12';
        if (percentage >= 40) return '#e74c3c';
        return '#c0392b';
    }

    showDigitalGuide() {
        const simulationTab = document.getElementById('tab3');
        simulationTab.innerHTML = `
            <h3>Panduan Literasi Digital Islami</h3>
            
            <div class="guide-container">
                <div class="guide-section">
                    <h4><i class="fas fa-exclamation-triangle"></i> 5 Langkah Identifikasi Hoax</h4>
                    <ol>
                        <li><strong>Cek Sumber</strong> - Apakah dari media terpercaya?</li>
                        <li><strong>Verifikasi Fakta</strong> - Gunakan situs fact-checking</li>
                        <li><strong>Periksa Tanggal</strong> - Hoax sering diulang dari berita lama</li>
                        <li><strong>Analisis Konten</strong> - Apakah berlebihan atau provokatif?</li>
                        <li><strong>Konsultasi Ustadz</strong> - Untuk isu keagamaan</li>
                    </ol>
                </div>
                
                <div class="guide-section">
                    <h4><i class="fas fa-shield-alt"></i> Etika Media Sosial dalam Islam</h4>
                    <ul>
                        <li>Gunakan untuk dakwah dan kebaikan</li>
                        <li>Hindari ghibah (menggunjing) dan fitnah</li>
                        <li>Jaga adab berkomunikasi</li>
                        <li>Verifikasi sebelum menyebar</li>
                        <li>Bersikap santun dalam berdebat</li>
                    </ul>
                </div>
                
                <div class="guide-section">
                    <h4><i class="fas fa-lock"></i> Keamanan Digital</h4>
                    <ul>
                        <li>Gunakan password yang kuat dan berbeda</li>
                        <li>Aktifkan verifikasi dua langkah</li>
                        <li>Hati-hati dengan link mencurigakan</li>
                        <li>Baca izin aplikasi sebelum instal</li>
                        <li>Backup data penting secara berkala</li>
                    </ul>
                </div>
                
                <div class="guide-actions">
                    <button class="btn btn-primary" id="back-to-simulation">
                        <i class="fas fa-arrow-left"></i> Kembali ke Simulasi
                    </button>
                </div>
            </div>
        `;

        document.getElementById('back-to-simulation').addEventListener('click', () => {
            this.startSimulation();
        });
    }
}

// Initialize Digital Literacy Module
function initializeDigitalLiteracy() {
    const simulation = new DigitalLiteracySimulation();
    
    // Start simulation when tab is clicked
    const literacyTabBtn = document.querySelector('[data-tab="tab3"]');
    if (literacyTabBtn) {
        literacyTabBtn.addEventListener('click', () => {
            setTimeout(() => {
                simulation.startSimulation();
            }, 100);
        });
    }
    
    // Also start when simulation button is clicked
    const simulationBtn = document.getElementById('simulation-btn');
    if (simulationBtn) {
        simulationBtn.addEventListener('click', () => {
            simulation.startSimulation();
        });
    }
    
    return simulation;
}