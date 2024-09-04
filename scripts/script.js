const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://api.foresightfin.app/'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Your API route
app.get('/investments', (req, res) => {
  // Fetch data from your database or other source
  const data = {

  };

  res.json(data);
});

app.listen(3000);
// const memberNumber = "1145";
// const stationId = "KLR742";

// fetch(`https://api.foresightfin.app/active-loans?memberNumber=${memberNumber}&stationId=${stationId}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         const loanTableContainer = document.getElementById('loanTableContainer');

//         if (data.length > 0) {
//             const table = document.createElement('table');
//             const thead = document.createElement('thead');
//             const tbody = document.createElement('tbody');

     
//             const headerRow = document.createElement('tr');
//             const th1 = document.createElement('th');
//             th1.textContent = 'Loan ID';
//             headerRow.appendChild(th1);
//             thead.appendChild(headerRow);
//             table.appendChild(thead);

    
//             data.forEach(loanId => {
//                 const row = document.createElement('tr');
//                 const td = document.createElement('td');
//                 td.textContent = loanId;
//                 row.appendChild(td);
//                 tbody.appendChild(row);
//             });

//             table.appendChild(tbody);
//             loanTableContainer.appendChild(table);
//         } else {
//             loanTableContainer.innerHTML = '<p>No active loans found.</p>';
//         }
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//         document.getElementById('loanTableContainer').innerHTML = '<p>Error retrieving loans. Please try again later.</p>';
//     });
