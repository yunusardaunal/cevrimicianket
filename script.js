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
