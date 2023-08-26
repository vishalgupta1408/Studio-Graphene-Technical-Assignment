const navbar = [
    { name: 'Home', id: 'home'},
    { name: 'About', id: 'about' },
    { name: 'Our Products', id: 'product', child: [
      { name: 'Product 1', id: 'p1'},
      { name: 'Product 2', id: 'p2' },
      { name: 'Product 3', id: 'p3'},
      { name: 'Product 4', id: 'p4' },
    ] },
    { name: 'Contact Us', id: 'contact'},
  ];
  
  const categorySelect = document.getElementById('category-select');
  const productContainer = document.querySelector('.product-list');
  const contactForm = document.getElementById('contact-form');
  

  const navbarList = document.querySelector('.navbar-list');
  
      navbar.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = item.name;
        link.href = `#${item.id}`;
        listItem.appendChild(link);
      
        if (item.child) {
          const subList = document.createElement('ul');
          item.child.forEach(childItem => {
            const subListItem = document.createElement('li');
            const subLink = document.createElement('a');
            subLink.textContent = childItem.name;
            subLink.href = `#${childItem.id}`;
            subListItem.appendChild(subLink);
            subList.appendChild(subListItem);
          });
          listItem.appendChild(subList);
        }
      
        navbarList.appendChild(listItem);
      });

  const categories = ['All', 'Category 1', 'Category 2', 'Category 3'];
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category.toLowerCase().replace(' ', '-');
    option.textContent = category;
    categorySelect.appendChild(option);
  });

  const productList = document.getElementById('product-list');
const categoryFilter = document.getElementById('category-filter');

fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(data => {
    
  });

  contactForm.addEventListener('submit', event => {
    event.preventDefault();
 

    const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

 
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert('All fields are required');
    return; 
  }

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
  alert('Form submitted successfully');
});
  });
  