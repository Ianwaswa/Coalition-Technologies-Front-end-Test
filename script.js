document.addEventListener('DOMContentLoaded', function() {
    // Sample data for demonstration
    const patients = [
        { name: 'Emily Williams', age: 18, gender: 'Female', profilePicture: 'Images/Layer 8@2x.png' },
        { name: 'Ryan Johnson', age: 45, gender: 'Male', profilePicture: 'Images/Layer 1@2x.png' },
        { name: 'Brandon Mitchell', age: 36, gender: 'Male', profilePicture: 'Images/Layer 3@2x.png' },
        { name: 'Jessica Taylor', age: 28, gender: 'Female', profilePicture: 'Images/Layer 2@2x.png' },
        { name: 'Samantha Johnson', age: 32, gender: 'Female', profilePicture: 'Images/Layer 6@2x.png' },
        { name: 'Ashley Martinez', age: 54, gender: 'Female', profilePicture: 'Images/Layer 12@2x.png' },
        { name: 'Olivia Brown', age: 32, gender: 'Female', profilePicture: 'Images/Layer 10@2x.png' },
        { name: 'Tyler Davis', age: 19, gender: 'Male', profilePicture: 'Images/Layer 9@2x.png' },
        { name: 'Kevin Anderson', age: 30, gender: 'Male', profilePicture: 'Images/Layer 4@2x.png' },
        { name: 'Dylan Thompson', age: 36, gender: 'Male', profilePicture: 'Images/Layer 5@2x.png' },
        { name: 'Nathan Evans', age: 58, gender: 'Male', profilePicture: 'Images/Layer 7@2x.png' },
        { name: 'Mike Nolan', age: 31, gender: 'Male', profilePicture: 'Images/pexels-photo-1222271.png' }
    ];

    const patientListEl = document.getElementById('patientsList');

    patients.forEach(patient => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${patient.profilePicture}" alt="${patient.name}">
            <div>
                <strong>${patient.name}</strong>
                <small>${patient.gender}, ${patient.age}</small>
            </div>
        `;
        patientListEl.appendChild(li);
    });

    // Blood Pressure Chart
    const ctx = document.getElementById('bloodPressureChart').getContext('2d');
    const bloodPressureChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
            datasets: [
                {
                    label: 'Systolic',
                    data: [120, 125, 130, 135, 140, 145],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true,
                },
                {
                    label: 'Diastolic',
                    data: [80, 82, 85, 88, 90, 92],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    fill: true,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Month'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Pressure (mm Hg)'
                    }
                }
            }
        }
    });

    // Additional Stats
    document.getElementById('respiratoryRate').textContent = 'Respiratory Rate: 20 bpm (Normal)';
    document.getElementById('temperature').textContent = 'Temperature: 98.6°F (Normal)';
    document.getElementById('heartRate').textContent = 'Heart Rate: 78 bpm (Lower than Average)';

    // Diagnostic List
    const diagnosisList = [
        { problem: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation' },
        { problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured' },
        { problem: 'Asthma', description: 'Recurrent episodes of bronchial constriction', status: 'Inactive' },
    ];

    const diagnosisListEl = document.getElementById('diagnosisList');
    diagnosisList.forEach(diagnosis => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${diagnosis.problem}</strong>
                <small>${diagnosis.description}</small>
            </div>
            <span>${diagnosis.status}</span>
        `;
        diagnosisListEl.appendChild(li);
    });
});
