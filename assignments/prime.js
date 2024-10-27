var express = require("express");
var app = express();
var PORT = 8080;

class AssignmentController {
  static prime(req, res) {
    var n = parseInt(req.params.n);

    // Validate the input
    if (isNaN(n) || n < 0) {
      return res
        .status(400)
        .json({
          error: "Invalid input.",
        });
    }

    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }

    res.json({
      "isPrime": isPrime(n),
    });
  }
}

app.get("/assignments/prime/:n", AssignmentController.prime);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
