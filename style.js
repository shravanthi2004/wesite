document.getElementById('consultation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your consultation request has been submitted. A doctor will contact you soon.');
});

document.getElementById('delivery-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your medication order has been placed and will be delivered shortly.');
});

document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const remedies = document.querySelectorAll('.remedy');
    const medications = document.querySelectorAll('.medication');
    const remediesResults = document.getElementById('remedies-results');
    const medicationsResults = document.getElementById('medications-results');

    remediesResults.innerHTML = '';
    medicationsResults.innerHTML = '';

    remedies.forEach(remedy => {
        if (remedy.dataset.issue.includes(searchTerm)) {
            remediesResults.innerHTML += <div class="remedy"><h3>${remedy.querySelector('h3').textContent}</h3><p>${remedy.querySelector('p').textContent}</p></div>;
        }
    });

    medications.forEach(medication => {
        if (medication.dataset.issue.includes(searchTerm)) {
            medicationsResults.innerHTML += <div class="medication"><h3>${medication.querySelector('h3').textContent}</h3><p>${medication.querySelector('p').textContent}</p></div>;
        }
    });

    if (remediesResults.innerHTML || medicationsResults.innerHTML) {
        document.getElementById('results').style.display = 'block';
    } else {
        document.getElementById('results').style.display = 'none';
        alert('No results found for the given health issue.');
    }
});