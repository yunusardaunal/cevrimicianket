<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Anket ve Oylama Sistemi</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> <!-- Chart.js Kütüphanesi -->
</head>
<body>
    <!-- Navbar Başlangıcı -->
    <nav class="navbar">
        <div class="logo">Anket Sistemi</div>
        <div class="nav-links">
            <a href="#home" class="nav-link" onclick="showSection('home')">Anasayfa</a>
            <a href="#create" class="nav-link" onclick="showSection('create')">Anket Oluştur</a>
            <a href="#vote" class="nav-link" onclick="showSection('vote')">Anketlere Katıl</a>
            <a href="#results" class="nav-link" onclick="showSection('results')">Sonuçlar</a>
        </div>
    </nav>
    <!-- Navbar Bitişi -->

    <!-- Anasayfa -->
    <section id="home" class="section">
        <div class="hero">
            <h1>Hoş Geldiniz!</h1>
            <p>Çevrim içi anketler oluşturun, katılın ve sonuçları görün. Hemen başlayın!</p>
            <button onclick="showSection('create')">Anket Oluştur</button>
        </div>
    </section>

    <!-- Anket Oluşturma Sayfası -->
    <section id="create" class="section hidden">
        <h2>Anket Oluştur</h2>
        <form id="create-form" class="form">
            <label for="question">Soru:</label>
            <input type="text" id="question" name="question" placeholder="Soru girin..." required>

            <label for="options">Seçenekler (virgülle ayırın):</label>
            <input type="text" id="options" name="options" placeholder="Örnek: Evet,Hayır,Kararsızım" required>

            <button type="submit">Oluştur</button>
        </form>
        <p id="create-message"></p>
    </section>

    <!-- Anketlere Katılma Sayfası -->
    <section id="vote" class="section hidden">
        <h2>Oy Kullan</h2>
        <div id="polls-container">
            <!-- Anketler Dinamik Olarak Buraya Yüklenecek -->
        </div>
    </section>

    <!-- Sonuçlar Sayfası -->
    <section id="results" class="section hidden">
        <h2>Anket Sonuçları</h2>
        <div id="results-container">
            <!-- Sonuçlar Dinamik Olarak Buraya Yüklenecek -->
        </div>
    </section>

    <!-- Footer Başlangıcı -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-logo">Anket Sistemi</div>
            <div class="footer-social">
                <a href="https://www.instagram.com/yunusardaunall" target="_blank">
                    <img src="Instagram_logo_2022.svg.png" alt="Instagram" style="width: 25px; margin-right: 10px;"> Instagram
                </a>
                <a href="mailto:yunusardaunal@gmail.com">
                    <img src="cacf9b2098458c3615353b302213c7a7.jpg" alt="E-posta" style="width: 25px; margin-right: 10px;"> E-posta
                </a>
            </div>
            <p>&copy; 2025 Anket Sistemi. Tüm Hakları Saklıdır.</p>
        </div>
    </footer>
    <!-- Footer Bitişi -->

    <script src="script.js"></script>
</body>
</html>

/* Genel Stiller */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f6f9;
    color: #333;
}

/* Sayfaların gizlenmesi */
.hidden {
    display: none;
}

/* Navbar Stili */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #00509e;
    color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 20px;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 5px 10px;
    transition: background-color 0.3s;
}

.nav-link:hover {
    background-color: #7aa9e9;
    border-radius: 5px;
}

/* Hero Bölümü */
.hero {
    text-align: center;
    padding: 80px 20px;
    background: linear-gradient(135deg, #00509e, #00aaff, #87ceeb);
    color: white;
    border-radius: 10px;
    margin: 20px auto;
    max-width: 800px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Daha belirgin gölge */
    position: relative;
    animation: heroAnimation 1.5s ease-in-out;
}

/* Hero başlık */
.hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3); /* Metin gölgesi */
    animation: textFadeIn 1.5s ease-in-out;
}

/* Hero paragrafı */
.hero p {
    font-size: 1.4rem;
    margin-bottom: 30px;
    font-weight: 400;
    opacity: 0.8;
    animation: textFadeIn 2s ease-in-out 0.5s; /* Paragraf animasyonu */
}

/* Hero buton */
.hero button {
    background-color: white;
    color: #00509e;
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, transform 0.3s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.hero button:hover {
    background-color: #f4f6f9;
    transform: scale(1.05); /* Buton üzerine hover ile büyüme efekti */
}

/* Animasyon: Metin Fade-in */
@keyframes textFadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animasyon: Hero Bölümü */
@keyframes heroAnimation {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

/* Anket Oluşturma Sayfası */
#create {
    background: linear-gradient(135deg, #00509e, #87ceeb);
    color: white;
    padding: 50px 20px;
    border-radius: 10px;
    max-width: 800px;
    margin: 30px auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    animation: sectionFadeIn 1.5s ease-in-out;
}

/* Form Başlığı */
#create h2 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 1px;
}

/* Form Stilleri */
.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    margin: 0 auto;
    padding: 30px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
}

/* Form Elemanları */
input[type="text"] {
    padding: 12px;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: #f4f6f9;
    transition: border-color 0.3s, box-shadow 0.3s;
}

input[type="text"]:focus {
    outline: none;
    border-color: #00509e;
    box-shadow: 0 0 8px rgba(0, 80, 158, 0.5);
}

/* Seçenekler Input */
label[for="options"] {
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 5px;
}

/* Buton Stili */
button {
    background-color: #00509e;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

button:hover {
    background-color: #003f7f;
    transform: translateY(-2px); /* Hoverda buton yukarı kayar */
}

/* Form mesajı */
#create-message {
    text-align: center;
    font-size: 1rem;
    color: #28a745;
    font-weight: bold;
}

/* Animasyonlar */
@keyframes sectionFadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Anketlere Katıl Sayfası */
#join-surveys {
    background: linear-gradient(135deg, #00aaff, #00509e);
    color: white;
    padding: 50px 20px;
    border-radius: 15px;
    max-width: 900px;
    margin: 40px auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    animation: sectionFadeIn 1.5s ease-in-out;
}

/* Başlık */
#join-surveys h2 {
    font-size: 2.8rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

/* Anket Listesi */
.survey-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
}

/* Her bir Anket Kartı */
.survey-item {
    background-color: #ffffff;
    color: #333;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.3s, box-shadow 0.3s ease-in-out;
}

.survey-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.survey-item h3 {
    font-size: 1.5rem;
    font-weight: 600;
}

.survey-item p {
    font-size: 1.2rem;
    color: #555;
}

/* Katıl Butonu */
.survey-item button {
    background-color: #00509e;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.survey-item button:hover {
    background-color: #003f7f;
    transform: translateY(-2px); /* Buton hoverda yukarı kayar */
}

/* Sayfalama Butonları */
.pagination {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
}

.pagination button {
    background-color: #00509e;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}

.pagination button:hover {
    background-color: #003f7f;
    transform: translateY(-2px);
}

.pagination button.disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

/* Footer Stili */
.footer {
    background-color: #003f7f;
    color: white;
    padding: 20px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-social a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-size: 1rem;
    transition: color 0.3s;
    display: flex;
    align-items: center;
}

.footer-social a img {
    width: 25px;
    margin-right: 10px;
}

.footer-social a:hover {
    color: #87ceeb;
}

.footer-social {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
}

// Navbar üzerinden sayfa gösterme fonksiyonu
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    document.getElementById(sectionId).classList.remove('hidden');
    window.scrollTo(0, 0); // Her bölüm açıldığında sayfa başına kaydır
}

// Anket oluşturma
const createForm = document.getElementById('create-form');
const pollsContainer = document.getElementById('polls-container');
const resultsContainer = document.getElementById('results-container');
let polls = []; // Tüm anketleri saklamak için bir dizi

createForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const question = document.getElementById('question').value;
    const options = document.getElementById('options').value.split(',').map(opt => opt.trim());

    if (question === '' || options.length < 2) {
        alert('Lütfen geçerli bir soru ve en az iki seçenek girin!');
        return;
    }

    const newPoll = {
        question,
        options: options.map(option => ({ option, votes: 0 }))
    };

    polls.push(newPoll);

    document.getElementById('create-message').textContent = 'Anket başarıyla oluşturuldu!';
    createForm.reset();

    renderPolls();
    showSection('vote'); // Anket oluşturulduktan sonra "Anketlere Katıl" sayfasına yönlendir
});

// Anketleri göster ve oy kullanma
function renderPolls() {
    pollsContainer.innerHTML = '';

    polls.forEach((poll, index) => {
        const pollDiv = document.createElement('div');
        pollDiv.classList.add('poll');

        const questionEl = document.createElement('h3');
        questionEl.textContent = poll.question;
        pollDiv.appendChild(questionEl);

        poll.options.forEach(option => {
            const optionDiv = document.createElement('div');

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `poll-${index}`;
            radio.value = option.option;

            const label = document.createElement('label');
            label.textContent = option.option;

            optionDiv.appendChild(radio);
            optionDiv.appendChild(label);
            pollDiv.appendChild(optionDiv);
        });

        const voteButton = document.createElement('button');
        voteButton.textContent = 'Oy Ver';
        voteButton.addEventListener('click', function () {
            const selectedOption = pollDiv.querySelector('input[type="radio"]:checked');
            if (!selectedOption) {
                alert('Lütfen bir seçenek seçin!');
                return;
            }

            const selectedValue = selectedOption.value;
            const selectedOptionObj = poll.options.find(opt => opt.option === selectedValue);
            selectedOptionObj.votes++;

            alert('Oyunuz başarıyla kaydedildi!');
            renderResults();
            showSection('results'); // Oy verdikten sonra sonuçlara yönlendir
        });

        pollDiv.appendChild(voteButton);
        pollsContainer.appendChild(pollDiv);
    });
}

// Sonuçları yatay çubuk grafiği olarak görüntüleme
function renderResults() {
    resultsContainer.innerHTML = ''; // Eski içerikleri temizle

    // Her anket için bir grafik oluştur
    polls.forEach(poll => {
        const pollDiv = document.createElement('div');
        pollDiv.classList.add('poll-result');

        const questionEl = document.createElement('h3');
        questionEl.textContent = poll.question;
        pollDiv.appendChild(questionEl);

        // Chart.js için verileri hazırlama
        const labels = poll.options.map(option => option.option);
        const data = poll.options.map(option => option.votes);

        const ctx = document.createElement('canvas');
        pollDiv.appendChild(ctx);

        // Chart.js ile yatay çubuk grafiği oluşturma
        new Chart(ctx, {
            type: 'bar', // Çubuk grafik tipi
            data: {
                labels: labels,
                datasets: [{
                    label: 'Oylar',
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Çubukların arka plan rengi
                    borderColor: 'rgba(75, 192, 192, 1)', // Çubukların kenar rengi
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                indexAxis: 'y', // Yatay grafik için
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });

        resultsContainer.appendChild(pollDiv);
    });
}

// Footer simgelerini dinamik olarak yükleme
function setupFooterIcons() {
    const instagramLink = document.querySelector('.footer-social a[href*="instagram"]');
    const emailLink = document.querySelector('.footer-social a[href*="mailto"]');

    if (!instagramLink.querySelector('img')) {
        const instagramIcon = document.createElement('img');
        instagramIcon.src = 'instagram-logo.png';
        instagramIcon.alt = 'Instagram';
        instagramIcon.style.width = '25px';
        instagramIcon.style.marginRight = '10px';
        instagramLink.prepend(instagramIcon);
    }

    if (!emailLink.querySelector('img')) {
        const emailIcon = document.createElement('img');
        emailIcon.src = 'email-logo.png';
        emailIcon.alt = 'E-posta';
        emailIcon.style.width = '25px';
        emailIcon.style.marginRight = '10px';
        emailLink.prepend(emailIcon);
    }
}

// Sayfa yüklendiğinde footer simgelerini ayarla
document.addEventListener('DOMContentLoaded', () => {
    setupFooterIcons();
    showSection('home'); // Varsayılan olarak anasayfa açık olacak
});

