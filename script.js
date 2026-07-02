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
          <div class="food-price">Price: ฿${item.price}</div>
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
