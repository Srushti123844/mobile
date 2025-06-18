<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>QuickBite Food Delivery</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0; padding: 0;
      background: #fafafa; color: #222;
    }
    header {
      background: #ff7300; color: #fff;
      padding: 1rem 2rem;
      display: flex; justify-content: space-between; align-items: center;
    }
    nav a {
      color: #fff; margin-left: 1.5rem;
      text-decoration: none; font-weight: bold;
    }
    .hero {
      background: linear-gradient(rgba(255,115,0,0.7),rgba(255,115,0,0.7)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80') center/cover no-repeat;
      color: #fff; text-align: center;
      padding: 4rem 1rem 3rem 1rem;
    }
    .hero .btn {
      background: #222; color: #fff;
      padding: 1rem 2.5rem;
      border: none; border-radius: 30px;
      text-decoration: none; font-size: 1.25rem;
      margin-top: 1rem; display: inline-block;
      transition: background 0.2s;
    }
    .hero .btn:hover {
      background: #ff7300; color: #fff; border: 1px solid #fff;
    }
    .menu {
      padding: 2rem 1rem; text-align: center;
    }
    .menu-items {
      display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;
    }
    .item {
      background: #fff; border: 1px solid #eee; border-radius: 10px;
      padding: 1rem; width: 220px;
      box-shadow: 0 2px 4px rgba(0,0,0,.05);
      margin-bottom: 1.5rem;
    }
    .item img {
      width: 100%; border-radius: 8px;
    }
    .item button {
      background: #ff7300; color: #fff;
      border: none; border-radius: 20px;
      padding: 0.5rem 1.5rem; font-size: 1rem;
      cursor: pointer; margin-top: 0.5rem;
      transition: background 0.2s;
    }
    .item button:hover {
      background: #222;
    }
    .about, .contact {
      padding: 2rem 1rem; text-align: center;
    }
    footer {
      background: #222; color: #fff;
      text-align: center; padding: 1rem 0; margin-top: 2rem;
    }
    @media (max-width: 800px) {
      .menu-items { flex-direction: column; align-items: center; }
    }
  </style>
</head>
<body>
  <header>
    <h1>QuickBite</h1>
    <nav>
      <a href="#menu">Menu</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <section class="hero">
    <h2>Delicious food, delivered fast!</h2>
    <p>Order from your favorite local restaurants.</p>
    <a href="#menu" class="btn">Order Now</a>
  </section>
  <section id="menu" class="menu">
    <h2>Featured Dishes</h2>
    <div class="menu-items">
      <div class="item">
        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80" alt="Pizza">
        <h3>Margherita Pizza</h3>
        <p>$12.99</p>
        <button onclick="order('Margherita Pizza')">Order</button>
      </div>
      <div class="item">
        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80" alt="Burger">
        <h3>Classic Burger</h3>
        <p>$9.99</p>
        <button onclick="order('Classic Burger')">Order</button>
      </div>
      <div class="item">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Noodles">
        <h3>Veg Noodles</h3>
        <p>$8.99</p>
        <button onclick="order('Veg Noodles')">Order</button>
      </div>
    </div>
  </section>
  <section id="about" class="about">
    <h2>About Us</h2>
    <p>QuickBite brings your favorite meals to your doorstep, hot and fresh. Fast delivery and top-notch service!</p>
  </section>
  <section id="contact" class="contact">
    <h2>Contact</h2>
    <p>Email: info@quickbite.com | Phone: 123-456-7890</p>
  </section>
  <footer>
    <p>&copy; 2025 QuickBite. All rights reserved.</p>
  </footer>
  <script>
    function order(food) {
      alert("You have ordered: " + food + "!\nThank you for choosing QuickBite.");
    }
  </script>
</body>
</html>
