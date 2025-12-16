// PDF Guide Generator for SANTRI-AI

class PDFGuideGenerator {
    constructor() {
        this.guideContent = this.initializeGuideContent();
        this.styles = this.initializeStyles();
    }

    initializeGuideContent() {
        return {
            title: "PANDUAN LENGKAP PENGGUNAAN SANTRI-AI",
            subtitle: "Smart Assistant for Islamic Education",
            sections: [
                {
                    title: "BAB 1: PENDAHULUAN",
                    content: `
                        <h3>1.1 Apa itu SANTRI-AI?</h3>
                        <p>SANTRI-AI adalah platform asisten cerdas yang dirancang khusus untuk mendukung pendidikan Islam di pesantren dengan teknologi Artificial Intelligence.</p>
                        
                        <h3>1.2 Tujuan Pengembangan</h3>
                        <ul>
                            <li>Membantu santri dalam pembelajaran kitab kuning</li>
                            <li>Mendukung ustadz dalam proses pengajaran</li>
                            <li>Menyediakan alat dakwah digital yang aman</li>
                            <li>Meningkatkan literasi digital santri</li>
                        </ul>
                        
                        <h3>1.3 Visi dan Misi</h3>
                        <p><strong>Visi:</strong> Menjadi platform pendidikan Islam terdepan yang mengintegrasikan teknologi AI dengan nilai-nilai Islam.</p>
                        <p><strong>Misi:</strong> Memberikan akses pembelajaran Islam yang mudah, aman, dan berkualitas melalui teknologi.</p>
                    `
                },
                {
                    title: "BAB 2: FITUR UTAMA",
                    content: `
                        <h3>2.1 Chatbot Pembelajaran Kitab</h3>
                        <p>Fitur ini membantu santri memahami kitab kuning dengan:</p>
                        <ul>
                            <li><strong>Jawaban berdasarkan kitab terverifikasi</strong> - Sumber dari kitab-kitab standar pesantren</li>
                            <li><strong>Konteks pembelajaran</strong> - Penjelasan disesuaikan dengan level pemahaman</li>
                            <li><strong>Referensi lengkap</strong> - Menyebutkan sumber kitab dan halaman</li>
                        </ul>
                        
                        <h3>2.2 Asisten Dakwah Digital</h3>
                        <p>Alat bantu membuat materi dakwah dengan:</p>
                        <ul>
                            <li><strong>Template berbagai audiens</strong> - Anak, remaja, dewasa, umum</li>
                            <li><strong>Struktur ceramah lengkap</strong> - Pendahuluan, isi, penutup</li>
                            <li><strong>Ayat dan hadits relevan</strong> - Otomatis disertakan sesuai topik</li>
                        </ul>
                        
                        <h3>2.3 Filter Etika AI</h3>
                        <p>Sistem filter yang menjaga konten tetap Islami:</p>
                        <ul>
                            <li><strong>Filter konten terlarang</strong> - Otomatis memblokir pertanyaan tidak pantas</li>
                            <li><strong>Peringatan topik sensitif</strong> - Mengarahkan konsultasi ke ustadz</li>
                            <li><strong>Log aktivitas</strong> - Monitoring penggunaan</li>
                        </ul>
                        
                        <h3>2.4 Mode Literasi Digital</h3>
                        <p>Edukasi penggunaan teknologi yang baik:</p>
                        <ul>
                            <li><strong>Deteksi hoax</strong> - Alat verifikasi berita</li>
                            <li><strong>Etika media sosial</strong> - Panduan bermedia sosial Islami</li>
                            <li><strong>Simulasi interaktif</strong> - Latihan kasus nyata</li>
                        </ul>
                    `
                },
                {
                    title: "BAB 3: TUTORIAL PENGGUNAAN",
                    content: `
                        <h3>3.1 Cara Mengakses SANTRI-AI</h3>
                        <p><strong>Langkah 1:</strong> Buka browser di komputer atau smartphone</p>
                        <p><strong>Langkah 2:</strong> Kunjungi alamat website SANTRI-AI</p>
                        <p><strong>Langkah 3:</strong> Untuk pertama kali, registrasi akun dengan email pesantren</p>
                        <p><strong>Langkah 4:</strong> Login dengan akun yang telah dibuat</p>
                        
                        <h3>3.2 Menggunakan Chatbot</h3>
                        <table border="1" cellpadding="5" cellspacing="0" width="100%">
                            <tr>
                                <th width="20%">Langkah</th>
                                <th width="40%">Aksi</th>
                                <th width="40%">Contoh</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Ketik pertanyaan</td>
                                <td>"Apa hukum shalat berjamaah?"</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Tekan Enter atau tombol kirim</td>
                                <td>⏎ atau 📤</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Tunggu jawaban</td>
                                <td>AI akan memproses dan menjawab</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Ajukan pertanyaan lanjutan</td>
                                <td>"Apa dalilnya?"</td>
                            </tr>
                        </table>
                        
                        <h3>3.3 Membuat Ceramah</h3>
                        <ol>
                            <li>Buka tab "Asisten Dakwah"</li>
                            <li>Pilih topik ceramah</li>
                            <li>Tentukan audiens target</li>
                            <li>Klik "Generate Ceramah"</li>
                            <li>Edit sesuai kebutuhan</li>
                            <li>Download atau copy teks</li>
                        </ol>
                        
                        <h3>3.4 Menggunakan Filter Etika</h3>
                        <p>Filter akan bekerja otomatis, namun Anda bisa:</p>
                        <ul>
                            <li>Test filter di dashboard</li>
                            <li>Lihat log aktivitas</li>
                            <li>Pahami alasan pemblokiran</li>
                        </ul>
                        
                        <h3>3.5 Literasi Digital</h3>
                        <p>Ikuti langkah-langkah:</p>
                        <ol>
                            <li>Mulai simulasi interaktif</li>
                            <li>Jawab pertanyaan kasus</li>
                            <li>Lihat hasil dan rekomendasi</li>
                            <li>Gunakan alat deteksi hoax</li>
                        </ol>
                    `
                },
                {
                    title: "BAB 4: PANDUAN KONTEN",
                    content: `
                        <h3>4.1 Topik yang Didukung</h3>
                        <table border="1" cellpadding="5" cellspacing="0" width="100%">
                            <tr>
                                <th>Kategori</th>
                                <th>Contoh Topik</th>
                                <th>Kitab Referensi</th>
                            </tr>
                            <tr>
                                <td>Fiqih Ibadah</td>
                                <td>Shalat, Puasa, Zakat</td>
                                <td>Fathul Qarib, Safinatun Najah</td>
                            </tr>
                            <tr>
                                <td>Akhlak</td>
                                <td>Jujur, Sabar, Tawadhu</td>
                                <td>Riyadhus Shalihin</td>
                            </tr>
                            <tr>
                                <td>Adab</td>
                                <td>Adab kepada Orang Tua, Guru</td>
                                <td>Al-Adab al-Mufrad</td>
                            </tr>
                            <tr>
                                <td>Aqidah</td>
                                <td>Tauhid, Rukun Iman</td>
                                <td>Aqidatul Awam</td>
                            </tr>
                        </table>
                        
                        <h3>4.2 Format Pertanyaan yang Efektif</h3>
                        <p><strong>Format yang baik:</strong></p>
                        <ul>
                            <li>"Apa hukum [perbuatan]?"</li>
                            <li>"Bagaimana cara [ibadah]?"</li>
                            <li>"Apa dalil tentang [topik]?"</li>
                            <li>"Contoh [akhlak] dalam kehidupan?"</li>
                        </ul>
                        
                        <p><strong>Hindari:</strong></p>
                        <ul>
                            <li>Pertanyaan terlalu umum</li>
                            <li>Bahasa tidak formal</li>
                            <li>Topik sensitif tanpa konteks</li>
                        </ul>
                        
                        <h3>4.3 Verifikasi dengan Ustadz</h3>
                        <p>Meski AI memberikan jawaban berdasarkan kitab, tetap perlu:</p>
                        <ol>
                            <li>Konfirmasi jawaban dengan ustadz</li>
                            <li>Diskusikan perbedaan pendapat</li>
                            <li>Pahami konteks lokal dan kondisi</li>
                        </ol>
                    `
                },
                {
                    title: "BAB 5: KEAMANAN DAN ETIKA",
                    content: `
                        <h3>5.1 Prinsip Keamanan</h3>
                        <ul>
                            <li><strong>Data privasi dilindungi</strong> - Tidak menyimpan percakapan pribadi</li>
                            <li><strong>Filter multi-layer</strong> - Perlindungan dari konten negatif</li>
                            <li><strong>Monitoring berkala</strong> - Update sistem keamanan rutin</li>
                        </ul>
                        
                        <h3>5.2 Etika Penggunaan</h3>
                        <p><strong>Dianjurkan:</strong></p>
                        <ul>
                            <li>Gunakan untuk pembelajaran</li>
                            <li>Hormati perbedaan madzhab</li>
                            <li>Sampaikan dengan bahasa santun</li>
                            <li>Verifikasi dengan sumber lain</li>
                        </ul>
                        
                        <p><strong>Dilarang:</strong></p>
                        <ul>
                            <li>Menyebarkan konten terlarang</li>
                            <li>Menggunakan untuk debat kusir</li>
                            <li>Memanipulasi jawaban AI</li>
                            <li>Menyalahgunakan untuk tujuan negatif</li>
                        </ul>
                        
                        <h3>5.3 Panduan Untuk Ustadz</h3>
                        <ol>
                            <li>Gunakan sebagai alat bantu pengajaran</li>
                            <li>Integrasikan dengan kurikulum pesantren</li>
                            <li>Awasi penggunaan oleh santri</li>
                            <li>Berikan feedback untuk pengembangan</li>
                        </ol>
                    `
                },
                {
                    title: "BAB 6: TROUBLESHOOTING",
                    content: `
                        <h3>6.1 Masalah Umum dan Solusi</h3>
                        <table border="1" cellpadding="5" cellspacing="0" width="100%">
                            <tr>
                                <th>Masalah</th>
                                <th>Penyebab</th>
                                <th>Solusi</th>
                            </tr>
                            <tr>
                                <td>Chatbot tidak merespon</td>
                                <td>Koneksi internet</td>
                                <td>Cek koneksi, refresh halaman</td>
                            </tr>
                            <tr>
                                <td>Pertanyaan diblokir</td>
                                <td>Filter etika AI</td>
                                <td>Ubah format pertanyaan</td>
                            </tr>
                            <tr>
                                <td>Jawaban tidak akurat</td>
                                <td>Pertanyaan ambigu</td>
                                <td>Perjelas pertanyaan</td>
                            </tr>
                            <tr>
                                <td>Halaman error</td>
                                <td>Browser lama</td>
                                <td>Update browser, clear cache</td>
                            </tr>
                        </table>
                        
                        <h3>6.2 Kontak Support</h3>
                        <ul>
                            <li><strong>Email:</strong> support@santri-ai.id</li>
                            <li><strong>Telepon:</strong> (0321) 123456 ext. 789</li>
                            <li><strong>Jam Operasional:</strong> Senin-Jumat, 08:00-16:00 WIB</li>
                            <li><strong>Form Feedback:</strong> Tersedia di website</li>
                        </ul>
                    `
                },
                {
                    title: "LAMPIRAN: DAFTAR KITAB REFERENSI",
                    content: `
                        <h3>Kitab Fiqih</h3>
                        <ul>
                            <li><strong>Fathul Qarib</strong> - Syekh Muhammad bin Qasim al-Ghazzi</li>
                            <li><strong>Safinatun Najah</strong> - Syekh Salim bin Abdullah bin Saad</li>
                            <li><strong>Kifayatul Akhyar</strong> - Taqiyuddin Abu Bakar al-Hishni</li>
                            <li><strong>Bulughul Maram</strong> - Al-Hafizh Ibnu Hajar al-Asqalani</li>
                        </ul>
                        
                        <h3>Kitab Akhlak dan Adab</h3>
                        <ul>
                            <li><strong>Riyadhus Shalihin</strong> - Imam Nawawi</li>
                            <li><strong>Al-Adab al-Mufrad</strong> - Imam Bukhari</li>
                            <li><strong>Bidayatul Hidayah</strong> - Imam Al-Ghazali</li>
                            <li><strong>Akhlak Lil Banin</strong> - Umar bin Ahmad Baraja'</li>
                        </ul>
                        
                        <h3>Kitab Aqidah</h3>
                        <ul>
                            <li><strong>Aqidatul Awam</strong> - Ahmad al-Marzuqi</li>
                            <li><strong>Kifayatul Awam</strong> - Muhammad Fadlullah</li>
                            <li><strong>Al-Jawahir al-Kalamiyah</strong> - Thahir bin Shalih al-Jazairi</li>
                        </ul>
                    `
                }
            ],
            footer: {
                disclaimer: "Panduan ini bersifat dinamis dan akan diperbarui sesuai perkembangan teknologi dan kebutuhan pesantren.",
                copyright: "© 2025 SANTRI-AI - Smart Assistant for Islamic Education. Hak cipta dilindungi undang-undang.",
                version: "Versi 1.0 - Oktober 2023"
            }
        };
    }

    initializeStyles() {
        return `
            <style>
                body {
                    font-family: 'Poppins', sans-serif;
                    line-height: 1.6;
                    color: #333;
                    margin: 0;
                    padding: 20px;
                    background-color: #f5f5f5;
                }
                
                .pdf-container {
                    max-width: 210mm;
                    margin: 0 auto;
                    background: white;
                    padding: 25mm;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    min-height: 297mm;
                    position: relative;
                }
                
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                    border-bottom: 3px solid #2a5c40;
                }
                
                .title {
                    color: #2a5c40;
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                
                .subtitle {
                    color: #d4af37;
                    font-size: 18px;
                    font-weight: 500;
                }
                
                .section {
                    margin-bottom: 25px;
                }
                
                .section-title {
                    background-color: #2a5c40;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 5px;
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 15px;
                }
                
                .content {
                    font-size: 12px;
                }
                
                .content h3 {
                    color: #2a5c40;
                    font-size: 14px;
                    margin-top: 15px;
                    margin-bottom: 10px;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 5px;
                }
                
                .content p, .content li {
                    font-size: 11px;
                    margin-bottom: 8px;
                }
                
                .content ul, .content ol {
                    padding-left: 20px;
                }
                
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 10px 0;
                    font-size: 10px;
                }
                
                th {
                    background-color: #f0f7f3;
                    color: #2a5c40;
                    font-weight: 600;
                }
                
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                
                .footer {
                    position: absolute;
                    bottom: 25mm;
                    left: 25mm;
                    right: 25mm;
                    font-size: 9px;
                    color: #666;
                    text-align: center;
                    padding-top: 20px;
                    border-top: 1px solid #eee;
                }
                
                .page-break {
                    page-break-after: always;
                }
                
                .logo {
                    text-align: center;
                    margin-bottom: 20px;
                }
                
                .logo-icon {
                    font-size: 40px;
                    color: #2a5c40;
                    margin-bottom: 10px;
                }
                
                .watermark {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(-45deg);
                    font-size: 80px;
                    color: rgba(42, 92, 64, 0.1);
                    font-weight: bold;
                    pointer-events: none;
                    user-select: none;
                }
                
                .page-number {
                    position: absolute;
                    bottom: 10mm;
                    right: 25mm;
                    font-size: 10px;
                    color: #666;
                }
            </style>
        `;
    }

    generatePDF() {
        // Create new window for PDF
        const pdfWindow = window.open('', '_blank');
        
        // Generate HTML content
        let htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${this.guideContent.title}</title>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
                ${this.styles}
            </head>
            <body>
                <div class="watermark">SANTRI-AI</div>
                
                <div class="pdf-container">
                    <div class="logo">
                        <div class="logo-icon">🕌</div>
                    </div>
                    
                    <div class="header">
                        <h1 class="title">${this.guideContent.title}</h1>
                        <h2 class="subtitle">${this.guideContent.subtitle}</h2>
                    </div>
                    
                    <div class="content">
                        <p><strong>Tanggal Generate:</strong> ${new Date().toLocaleDateString('id-ID', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}</p>
                        
                        <p><strong>Oleh:</strong> ${localStorage.getItem('userName') || 'Pengguna SANTRI-AI'}</p>
                        
                        <p><strong>Pesantren:</strong> ${localStorage.getItem('pesantrenName') || 'PPSM THOHIR YASIN'}</p>
                    </div>
        `;

        // Add each section
        this.guideContent.sections.forEach((section, index) => {
            if (index === 2 || index === 4) {
                htmlContent += `<div class="page-break"></div>`;
            }
            
            htmlContent += `
                <div class="section">
                    <div class="section-title">${section.title}</div>
                    <div class="content">${section.content}</div>
                </div>
            `;
        });

        // Add footer
        htmlContent += `
                    <div class="footer">
                        <p><strong>${this.guideContent.footer.disclaimer}</strong></p>
                        <p>${this.guideContent.footer.copyright}</p>
                        <p>${this.guideContent.footer.version}</p>
                    </div>
                    
                    <div class="page-number">Halaman 1 dari 1</div>
                </div>
            </body>
            </html>
        `;

        // Write to new window
        pdfWindow.document.write(htmlContent);
        pdfWindow.document.close();

        // Add print functionality
        setTimeout(() => {
            pdfWindow.print();
        }, 500);

        return true;
    }

    generateQuickGuide() {
        const quickGuide = `
            SANTRI-AI - QUICK GUIDE
            ========================
            
            1. CHATBOT PEMBELAJARAN
            - Ketik pertanyaan spesifik
            - Contoh: "Apa hukum shalat berjamaah?"
            - Dapatkan jawaban berdasarkan kitab
            
            2. ASISTEN DAKWAH
            - Pilih topik dan audiens
            - Generate ceramah otomatis
            - Edit sesuai kebutuhan
            
            3. FILTER ETIKA AI
            - Bekerja otomatis
            - Test di dashboard
            - Lihat log aktivitas
            
            4. LITERASI DIGITAL
            - Mulai simulasi
            - Cek berita hoax
            - Pelajari etika digital
            
            KONTAK DARURAT
            - Email: support@santri-ai.id
            - Telepon: (0321) 123456
            
            Generated: ${new Date().toLocaleDateString()}
        `;

        const blob = new Blob([quickGuide], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'SANTRI-AI_Quick_Guide.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    generateUserManual() {
        const manualHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Manual Pengguna SANTRI-AI</title>
                <style>
                    body { font-family: Arial; padding: 20px; }
                    h1 { color: #2a5c40; }
                    .step { margin: 20px 0; }
                    .screenshot { border: 1px solid #ccc; margin: 10px 0; }
                </style>
            </head>
            <body>
                <h1>Manual Pengguna SANTRI-AI</h1>
                <p>Versi 1.0 - Untuk Santri dan Ustadz</p>
                
                <div class="step">
                    <h2>1. Registrasi Akun</h2>
                    <p>Gunakan email pesantren untuk mendaftar</p>
                </div>
                
                <div class="step">
                    <h2>2. Menggunakan Chatbot</h2>
                    <p>Ketika masuk, chatbot siap membantu pembelajaran</p>
                </div>
                
                <div class="step">
                    <h2>3. Fitur Tambahan</h2>
                    <p>Jelajahi fitur lain di menu Demo</p>
                </div>
            </body>
            </html>
        `;

        const blob = new Blob([manualHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Manual_Pengguna_SANTRI-AI.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    showDownloadOptions() {
        const modal = document.createElement('div');
        modal.className = 'download-modal-overlay';
        modal.innerHTML = `
            <div class="download-modal">
                <div class="modal-header">
                    <h4><i class="fas fa-download"></i> Download Panduan</h4>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Pilih format panduan yang ingin diunduh:</p>
                    
                    <div class="download-options">
                        <div class="option-card" onclick="pdfGuide.generatePDF()">
                            <div class="option-icon" style="background-color: #e74c3c;">
                                <i class="fas fa-file-pdf"></i>
                            </div>
                            <h5>Panduan Lengkap (PDF)</h5>
                            <p>Panduan komprehensif 40 halaman</p>
                            <small><i class="fas fa-print"></i> Siap cetak</small>
                        </div>
                        
                        <div class="option-card" onclick="pdfGuide.generateQuickGuide()">
                            <div class="option-icon" style="background-color: #3498db;">
                                <i class="fas fa-file-alt"></i>
                            </div>
                            <h5>Quick Guide (TXT)</h5>
                            <p>Panduan singkat 1 halaman</p>
                            <small><i class="fas fa-mobile-alt"></i> Mudah dibaca</small>
                        </div>
                        
                        <div class="option-card" onclick="pdfGuide.generateUserManual()">
                            <div class="option-icon" style="background-color: #2ecc71;">
                                <i class="fas fa-book"></i>
                            </div>
                            <h5>Manual Pengguna (HTML)</h5>
                            <p>Manual interaktif online</p>
                            <small><i class="fas fa-laptop"></i> Bisa di browser</small>
                        </div>
                    </div>
                    
                    <div class="user-info">
                        <h5><i class="fas fa-user-edit"></i> Informasi Pengguna (Opsional)</h5>
                        <div class="info-fields">
                            <div class="form-group">
                                <label>Nama:</label>
                                <input type="text" id="userName" placeholder="Nama Anda" value="${localStorage.getItem('userName') || ''}">
                            </div>
                            <div class="form-group">
                                <label>Nama Pesantren:</label>
                                <input type="text" id="pesantrenName" placeholder="Nama Pesantren" value="${localStorage.getItem('pesantrenName') || ''}">
                            </div>
                            <button class="btn btn-primary" onclick="saveUserInfo()">
                                <i class="fas fa-save"></i> Simpan Info
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="this.parentElement.parentElement.parentElement.remove()">
                        Tutup
                    </button>
                </div>
            </div>
        `;

        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });

        document.body.appendChild(modal);
    }
}

// Initialize PDF Guide Generator
let pdfGuide = null;

function initializePDFGuide() {
    pdfGuide = new PDFGuideGenerator();
    return pdfGuide;
}

// Save user info to localStorage
function saveUserInfo() {
    const userName = document.getElementById('userName')?.value;
    const pesantrenName = document.getElementById('pesantrenName')?.value;
    
    if (userName) localStorage.setItem('userName', userName);
    if (pesantrenName) localStorage.setItem('pesantrenName', pesantrenName);
    
    alert('Informasi berhasil disimpan! Informasi akan tampil di panduan PDF.');
}

// Setup download button
function setupDownloadButton() {
    const downloadBtn = document.querySelector('a[href*="#"]:has(i.fa-download)');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (!pdfGuide) {
                pdfGuide = new PDFGuideGenerator();
            }
            
            pdfGuide.showDownloadOptions();
        });
    }
    
    // Also look for button with text containing "Download Panduan"
    document.querySelectorAll('a, button').forEach(element => {
        if (element.textContent.includes('Download Panduan') || 
            element.textContent.includes('Panduan Lengkap')) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (!pdfGuide) {
                    pdfGuide = new PDFGuideGenerator();
                }
                
                pdfGuide.showDownloadOptions();
            });
        }
    });
}

// Export functions to global scope
window.initializePDFGuide = initializePDFGuide;
window.setupDownloadButton = setupDownloadButton;
window.pdfGuide = null;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            pdfGuide = new PDFGuideGenerator();
            setupDownloadButton();
        }, 1000);
    });
} else {
    setTimeout(() => {
        pdfGuide = new PDFGuideGenerator();
        setupDownloadButton();
    }, 1000);
}