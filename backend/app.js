// 404 handler for unmatched routes
const helmet = require("helmet");

app.use(helmet());

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
  });
  
  // Centralized error handler
  app.use((err, req, res, next) => {
    console.error(err.stack); // Log errors to console or file
    res.status(err.status || 500).json({
      message: err.message || "Internal Server Error",
    });
  });
  