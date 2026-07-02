let foodDatabase = [
    {
        id: 1,
        name: "Pizza",
        cuisune: "Italian",
        cuisine: "Italian",
        origin: "Italy",
        vegetarian: false,
        price: 199,
        imagePath: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop"
    },
    {
        id: 2,
        name: "Malattang",
        cuisune: "Chinese",
        cuisine: "Chinese",
        origin: "China",
        vegetarian: false,
        price: 299,
        imagePath: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
    },
    {
        id: 3,
        name: "Pad thai",
        cuisune: "Thai",
        cuisine: "Thai",
        origin: "Thailand",
        vegetarian: false,
        price: 399,
        imagePath: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=300&h=200&fit=crop"
    },
    {
        id: 4,
        name: "Burger",
        cuisune: "American",
        cuisine: "American",
        origin: "USA",
        vegetarian: false,
        price: 499,
        imagePath: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop"
    },
    {
        id: 5,
        name: "Pasta",
        cuisune: "Italian",
        cuisine: "Italian",
        origin: "Italy",
        vegetarian: false,
        price: 599,
        imagePath: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=300&h=200&fit=crop"
    },
];

let featuredItem = {
    name: "Pizza",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop"
};

 //{name : "Pizza" , price :"249", 
     //   size: [
       //     { name : "smail", price : "99" },
       //     { name : "large", price : "199" },
      //  ],
    //},
    //{name : "Malattang" , price :"249"},
    //{name : "Pad thai" , price :"249"},
    //{name : "Burger" , price :"249"},
    //{name : "Sushi" , price :"249"},
    //{name : "Medovik" , price :"249"}, 

document.addEventListener('DOMContentLoaded', () => {
  // 1. Handle Form Submission
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted! (Demo only — no data was sent.)');
    });
  }

  // 2. Render Food Menu from foodDatabase
  const container = document.getElementById('food-container');
  
  function renderFoodItems(itemsToRender) {
    if (!container) return;
    container.innerHTML = ''; // Clear container first
    
    if (itemsToRender.length === 0) {
      container.innerHTML = `<p class="no-items">No items found for this category.</p>`;
      return;
    }

    itemsToRender.forEach(item => {
      const card = document.createElement('div');
      card.className = 'food-card';

      card.innerHTML = `
        <img src="${item.imagePath}" alt="${item.name}" loading="lazy">
        <div class="food-info">
          <h3>${item.name}</h3>
          <div class="food-meta">
            <span class="cuisine-badge">${item.cuisine || item.cuisune}</span>
            <span class="origin-badge">📍 ${item.origin}</span>
            <span class="veg-badge ${item.vegetarian ? 'veg' : 'non-veg'}">
              ${item.vegetarian ? '🌱 Veg' : '🍖 Non-Veg'}
            </span>
          </div>
          <div class="food-price">฿${item.price}</div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // Initial Render
  if (typeof foodDatabase !== 'undefined') {
    renderFoodItems(foodDatabase);
  }

  // 3. Setup Cuisine Filtering Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      
      if (typeof foodDatabase !== 'undefined') {
        if (filterValue === 'all') {
          renderFoodItems(foodDatabase);
        } else {
          const filtered = foodDatabase.filter(item => {
            const cuisineStr = (item.cuisine || item.cuisune || '').toLowerCase();
            return cuisineStr === filterValue;
          });
          renderFoodItems(filtered);
        }
      }
    });
  });

  // 4. Render Featured Item
  const featuredContainer = document.getElementById('image-container');
  if (featuredContainer && typeof featuredItem !== 'undefined') {
    featuredContainer.innerHTML = `
      <div class="food-card featured-card">
        <img src="${featuredItem.imageUrl}" alt="${featuredItem.name}" loading="lazy">
        <div class="food-info">
          <span class="featured-badge">⭐ Featured Item</span>
          <h3>${featuredItem.name}</h3>
        </div>
      </div>
    `;
  }
});