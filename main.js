const cars = {
    "Isuzu": { fuelConsumption: 15, timePer100km: 2.5 },
    "Mers": { fuelConsumption: 20, timePer100km: 2 },
    "JAC": { fuelConsumption: 18, timePer100km: 2.2 },
    "Ikarus": { fuelConsumption: 12, timePer100km: 4 }
};

const roads = {
    "Yunusobod": 40,
    "Chilonzor": 20,
    "Sergeli": 50,
    "Olmazor": 60
};

const fuelCostPerLiter = 2; // 2 dollars per liter

function calculateCostAndTime() {
    const carSelect = document.getElementById('carSelect').value;
    const roadSelect = document.getElementById('roadSelect').value;

    const car = cars[carSelect];
    const distance = roads[roadSelect];

    const fuelUsed = (car.fuelConsumption / 100) * distance;
    const timeTaken = (car.timePer100km / 100) * distance;

    const totalCost = fuelUsed * fuelCostPerLiter;

    document.getElementById('timeResult').innerText = `Sarflangan vaqt: ${timeTaken.toFixed(2)} soat`;
    document.getElementById('costResult').innerText = `Umumiy xarajat: $${totalCost.toFixed(2)}`;
}

function showCarDetails() {
    const carSelect = document.getElementById('carSelect').value;

    const carDetailsList = document.getElementById('carDetailsList');
    carDetailsList.innerHTML = Object.keys(cars).map(car => {
        const selected = car === carSelect ? 'selected' : '';
        const details = cars[car];
        return `
            <li class="${selected}">
                ${car} - 100 km uchun ${details.fuelConsumption} litr yonilg'i sarfi, ${details.timePer100km} soat vaqt
            </li>
        `;
    }).join('');
}

// Initialize car details on page load
window.onload = showCarDetails;
