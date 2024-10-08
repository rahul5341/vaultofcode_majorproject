// script.js  
const portfolioItems = [  
    {  
     title: 'Short Form Video',  
     image: 'SHORT.jpeg',  
     category: 'Short Form'  
    },  
    {  
     title: 'Long Form Video',  
     image: 'long.jpeg',  
     category: 'Long Form'  
    },  
    {  
     title: 'Gaming Video',  
     image: 'gaming.jpeg',  
     category: 'Gaming Videos'  
    },  
    // Add more portfolio items here  
  ];  
    
  const portfolioContainer = document.getElementById('portfolio');  
    
  portfolioItems.forEach((item) => {  
    const portfolioItem = document.createElement('div');  
    portfolioItem.classList.add('portfolio-item');  
    portfolioItem.innerHTML = `  
     <img src="${item.image}" alt="${item.title}">  
     <h3>${item.title}</h3>  
     <p>${item.category}</p>  
    `;  
    portfolioContainer.appendChild(portfolioItem);  
  });  
    
  const emailCollectorForm = document.getElementById('email-collector-form');  
    
  emailCollectorForm.addEventListener('submit', (e) => {  
    e.preventDefault();  
    const email = document.getElementById('email').value;  
    // Send email to Google Sheets or Excel file using Google Apps Script or API  
    console.log(`Email submitted: ${email}`);  
  });  
    
  const contactForm = document.getElementById('contact-form');  
    
  contactForm.addEventListener('submit', (e) => {  
    e.preventDefault();  
    const name = document.getElementById('name').value;  
    const email = document.getElementById('email').value;  
    const phone = document.getElementById('phone').value;  
    const message = document.getElementById('message').value;  
    // Send form data to Google Sheets or Excel file using Google Apps Script or API  
    console.log(`Form submitted: ${name}, ${email}, ${phone}, ${message}`);  
  });
  