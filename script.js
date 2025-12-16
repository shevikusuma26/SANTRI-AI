// Main script for SANTRI-AI website

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const navUl = document.querySelector('nav ul');
            navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    const navUl = document.querySelector('nav ul');
                    if (navUl) navUl.style.display = 'none';
                }
            }
        });
    });
    
    // Initialize demo tabs if they exist
    initializeDemoTabs();
});

// Demo Tabs Functionality
function initializeDemoTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabBtns.length === 0) return;
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show active tab pane
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === tabId) {
                    pane.classList.add('active');
                }
            });
        });
    });
    
    // Generate sermon example button
    const generateSermonBtn = document.getElementById('generate-sermon');
    if (generateSermonBtn) {
        generateSermonBtn.addEventListener('click', function() {
            const sermonExamples = [
                "Tema: 'Menjaga Lisan'. Untuk remaja: 'Saudaraku, di era digital ini, lisan kita bukan hanya ucapan tapi juga tulisan di media sosial. Rasulullah bersabda: 'Barangsiapa beriman kepada Allah dan hari akhir, hendaklah berkata baik atau diam' (HR. Bukhari-Muslim).'",
                "Tema: 'Bersabar dalam Ujian'. Untuk masyarakat umum: 'Hadirin yang dirahmati Allah, kehidupan tak lepas dari ujian. Allah berfirman: 'Dan sungguh akan Kami berikan cobaan kepadamu dengan sedikit ketakutan, kelaparan, kekurangan harta...' (QS. Al-Baqarah: 155). Sabar adalah kunci menghadapinya.'",
                "Tema: 'Menuntut Ilmu'. Untuk anak-anak: 'Adik-adik, tahukah kalian bahwa malaikat akan membentangkan sayapnya untuk penuntut ilmu? Belajar itu ibadah loh! Nabi SAW bersabda: 'Menuntut ilmu wajib bagi setiap muslim' (HR. Ibnu Majah).'"
            ];
            
            const randomSermon = sermonExamples[Math.floor(Math.random() * sermonExamples.length)];
            
            // Show in tab content
            const sermonTab = document.getElementById('tab1');
            const newContent = sermonTab.innerHTML.replace(
                '<div style="margin-top: 20px;">',
                `<div style="background-color: #e8f5e9; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <h5 style="color: var(--accent-color);">Contoh Ceramah yang Dihasilkan:</h5>
                    <p>${randomSermon}</p>
                </div>
                <div style="margin-top: 20px;">`
            );
            
            sermonTab.innerHTML = newContent;
        });
    }
    
    // Simulation button
    const simulationBtn = document.getElementById('simulation-btn');
    if (simulationBtn) {
        simulationBtn.addEventListener('click', function() {
            const simulationTab = document.getElementById('tab3');
            const newContent = simulationTab.innerHTML.replace(
                '<button class="btn btn-primary" id="simulation-btn">',
                `<div style="background-color: #d4edda; padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 5px solid #28a745;">
                    <h5 style="color: #155724;">Simulasi Berjalan:</h5>
                    <p>Anda menerima broadcast WhatsApp: "Donasi untuk pesantren X, transfer ke rekening 123456". Langkah verifikasi:</p>
                    <ol>
                        <li>Cek pengirim - nomor tidak dikenal</li>
                        <li>Cari info resmi dari pesantren terkait</li>
                        <li>Hubungi admin pesantren untuk konfirmasi</li>
                        <li><strong>Kesimpulan: Kemungkinan besar HOAX</strong></li>
                    </ol>
                    <p style="margin-top: 10px; font-weight: bold; color: #155724;">Selamat! Anda berhasil mengidentifikasi potensi hoaks.</p>
                </div>
                <button class="btn btn-primary" id="simulation-btn">`
            );
            
            simulationTab.innerHTML = newContent;
        });
    }
}

// Initialize demo features
function initializeDemo() {
    initializeDemoTabs();
}
