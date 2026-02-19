<!doctype html>
<html>
  <head>
    <title>Responsive Dashboard</title>

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
      }

      /* ===== Layout ===== */
      .container {
        display: flex;
        min-height: 100vh;
      }

      /* ===== Sidebar ===== */
      .sidebar {
        width: 220px;
        background-color: #2c3e50;
        color: white;
        padding: 20px;
      }

      .sidebar h2 {
        margin-bottom: 20px;
      }

      .sidebar a {
        display: block;
        color: white;
        text-decoration: none;
        padding: 10px 0;
      }

      .sidebar a:hover {
        background-color: #34495e;
        padding-left: 8px;
      }

      /* ===== Main Content ===== */
      .main {
        flex: 1;
        padding: 20px;
        background-color: #f4f6f8;
      }

      .cards {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
      }

      /* ===== Info Cards ===== */
      .card {
        flex: 1 1 200px;
        background: white;
        border: 1px solid #ddd;
        padding: 20px;
        border-radius: 8px;
        margin-top: 20px;
      }

      .card h3 {
        margin-bottom: 10px;
      }

      /* ===== Responsive ===== */
      @media (max-width: 768px) {
        /* Sidebar becomes top nav */
        .container {
          flex-direction: column;
        }

        .sidebar {
          width: 100%;
          display: flex;
          justify-content: space-around;
        }

        .sidebar h2 {
          display: none;
        }

        .sidebar a {
          padding: 10px;
        }

        /* Stack cards */
        .cards {
          flex-direction: column;
        }
      }
    </style>
  </head>

  <body>
    <div class="container">
      <!-- Sidebar -->
      <div class="sidebar">
        <h2>Admin</h2>
        <a href="#">Dashboard</a>
        <a href="#">Users</a>
        <a href="#">Reports</a>
        <a href="#">Settings</a>
      </div>

      <!-- Main Content -->
      <div class="main">
        <h1>Dashboard</h1>

        <div class="cards">
          <div class="card">
            <h3>Total Users</h3>
            <p>1,250</p>
          </div>

          <div class="card">
            <h3>Revenue</h3>
            <p>₹45,000</p>
          </div>

          <div class="card">
            <h3>Orders</h3>
            <p>320</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
