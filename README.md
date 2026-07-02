# Gourmet Bites - International Food Menu Webpage

A beautifully styled, responsive single-page web application featuring a dynamic international restaurant menu, complete with cuisine filters, table reservations, weekly special promotions, and clean semantic structure.

---

## 📂 Project Structure

- **[index.html](file:///C:/coding/jsd13/week-01/first-meet-git/index.html)**: The main layout structure built with semantic HTML tags (including `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<table>`, `<form>`, `<aside>`, and `<footer>`).
- **[style.css](file:///C:/coding/jsd13/week-01/first-meet-git/style.css)**: Modern styling system using HSL color variables, smooth gradients, hover micro-animations, glassmorphism, dynamic grids, and responsive layouts.
- **[my-object.js](file:///C:/coding/jsd13/week-01/first-meet-git/my-object.js)**: Holds the local database (`foodDatabase`) with detailed properties for each food item (id, name, cuisine, country of origin, vegetarian status, price, and Unsplash image paths) and the `featuredItem`.
- **[script.js](file:///C:/coding/jsd13/week-01/first-meet-git/script.js)**: Manages DOM manipulation, interactive cuisine filtering, form submission handlers, and rendering cards with structured data.
- **[my-array.js](file:///C:/coding/jsd13/week-01/first-meet-git/my-array.js)**: Basic list array testing file.

---

## 📝 Implementation Step-by-Step Record

Here is the step-by-step documentation of the enhancements and restructuring done to the website:

### Step 1: Database Correction & Image Alignment (`my-object.js`)
- **Resolved Image Mismatch**: 
  - *Malattang* was using a spaghetti image, which was corrected by moving that spaghetti image to the newly added *Pasta* menu item.
  - A real, high-quality, steaming Sichuan hot pot image was mapped to *Malattang* (`photo-1596797038530-2c107229654b`).
  - *Pasta* (originally using a cake image) was updated with the correct spaghetti pasta image (`photo-1555126634-323283e090fa`).
- **Corrected Cuisine & Origin Properties**: 
  - Adjusted the data values to correctly reflect country origins: *Chinese / China* for Malattang, *Thai / Thailand* for Pad Thai, *American / USA* for Burger, and *Italian / Italy* for Pizza and Pasta.
  - Maintained backward compatibility by keeping both `cuisune` (original spelling) and `cuisine` (correct spelling) keys.

### Step 2: Themed Restructuring (`index.html`)
- **Semantic Redesign**: Transitioned the generic "HTML Tags Demo Page" into a dedicated, themed restaurant landing page:
  - **Hero Header**: Displays a high-end restaurant greeting.
  - **Navigation**: Clean quick-links to Home, Featured Item, Our Menu, Today's Specials, and Place Order.
  - **Featured Section**: Showcases the daily featured card.
  - **Menu Section**: Layout containing cuisine category selectors and food grid cards.
  - **Specials Table**: Semantic `<table>` comparing original vs. discounted prices and availability.
  - **Reservation Form**: Responsive booking form wrapped in fieldsets and labels.
  - **Aside block**: Interesting facts about the restaurant's legacy recipes.

### Step 3: Dynamic Rendering & Category Filters (`script.js`)
- **Interactive Badges**: Programmed card rendering to read object metadata and display color-coded tags for **Cuisine, Origin**, and **Vegetarian Status** (green for Veg, red for Non-Veg).
- **Client-Side Filtering**: Implemented a responsive category filtering feature. Users can click cuisine category buttons (All, Italian, Chinese, Thai, American) to instantaneously filter the displayed cards without reloading.
- **Form Submission Mock**: Configured a listener to capture and simulate reserving a table / ordering.

### Step 4: Premium UI & Micro-animations (`style.css`)
- **Card Enhancements**: Wrapped the grid layout using CSS Grids. Enabled clean scaling transitions (`transform: scale(1.03)`) on hover for food card images, paired with box-shadow shifts.
- **Badge Styling**: Styled badges with premium background tones (indigo, gray, green, red, amber) and matching text colors to ensure clear readability.
- **Filter Navigation Buttons**: Added smooth hover states, gradients, active states, and box shadows for control buttons.
- **Responsive Media Queries**: Ensured the grid, tables, navigation items, and forms resize correctly from mobile to widescreen viewports.

### Step 5: Pricing Consistency Alignments
- **Direct Database Pricing**: Corrected a discrepancy where prices were divided by 100 in the UI (e.g. showing `$1.99` instead of `199`). Prices are now displayed directly matching the raw values defined in `my-object.js` (e.g. `฿199`, `฿299`, `฿399`, etc.).
- **Consistent Table Pricing**: Updated the "Chef's Specials" promotion table in `index.html` to reflect the correct Baht currency and values aligned with the database.

### Step 6: Premium Culinary Theme Styling
- **Warm Color Palette**: Replaced the generic indigo/cyan color tokens in `style.css` with a warm, luxurious restaurant theme featuring Terracotta orange (`#c2410c`), Amber gold (`#b45309`), Creamy ivory background (`#faf7f2`), and Dark chocolate borders/headers.
- **Elegant Fonts & Typography**: Integrated Google Fonts (`Playfair Display` serif for headers, brand names, and legends, and `Plus Jakarta Sans` sans-serif for comfortable body readability).
- **Refined Styling elements**: Updated blockquotes, search/category filter buttons, form inputs, table rows, and badges to match the warm color scheme.