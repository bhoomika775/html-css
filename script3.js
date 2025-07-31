document.getElementById('travelForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const destination = document.getElementById('destination').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const budget = document.getElementById('budget').value;

  const resultBox = document.getElementById('planResult');
  resultBox.innerHTML = `
    <h3>Your Travel Plan</h3>
    <p><strong>Destination:</strong> ${destination}</p>
    <p><strong>Dates:</strong> ${startDate} to ${endDate}</p>
    <p><strong>Budget:</strong> ${budget}</p>
    <p>Suggested Itinerary: 
      <ul>
        <li>Day 1: Explore top attractions</li>
        <li>Day 2: Visit local markets & cultural spots</li>
        <li>Day 3: Adventure/Outdoor activities</li>
      </ul>
    </p>
    `;
  
}); 

