document.addEventListener('DOMContentLoaded', () => {
    const concertsContainer = document.getElementById('concerts-container');

    // Funktion för att hämta och visa konserter
    async function fetchAndDisplayConcerts() {
        // Här skulle du normalt göra ett API-anrop för att hämta verklig konsertdata.
        // Till exempel: const response = await fetch('DITT_API_ENDPOINT_HAR');
        // const concerts = await response.json();

        // Som en demonstration använder vi här "mock-data":
        const mockConcerts = [
            {
                id: 1,
                artist: "The Rockers",
                venue: "Annexet, Stockholm",
                date: "2025-09-15",
                time: "19:00",
                city: "Stockholm"
            },
            {
                id: 2,
                artist: "Pop Sensations",
                venue: "Partille Arena, Göteborg",
                date: "2025-10-01",
                time: "20:00",
                city: "Göteborg"
            },
            {
                id: 3,
                artist: "Jazz Collective",
                venue: "Malmö Live Konserthus, Malmö",
                date: "2025-11-20",
                time: "18:30",
                city: "Malmö"
            },
            {
                id: 4,
                artist: "Indie Darlings",
                venue: "Debaser Strand, Stockholm",
                date: "2025-12-05",
                time: "21:00",
                city: "Stockholm"
            }
        ];

        // Rensa befintligt innehåll
        concertsContainer.innerHTML = '';

        // Skapa och lägg till konsertkort för varje konsert
        if (mockConcerts.length === 0) {
            concertsContainer.innerHTML = '<p>Inga kommande konserter hittades för tillfället.</p>';
        } else {
            mockConcerts.forEach(concert => {
                const concertCard = document.createElement('div');
                concertCard.classList.add('concert-card');
                concertCard.innerHTML = `
                    <h3>${concert.artist}</h3>
                    <p class="date">${concert.date} kl. ${concert.time}</p>
                    <p><strong>Plats:</strong> ${concert.venue}</p>
                    <p><strong>Stad:</strong> ${concert.city}</p>
                `;
                concertsContainer.appendChild(concertCard);
            });
        }
    }

    // Anropa funktionen när sidan laddats
    fetchAndDisplayConcerts();
});