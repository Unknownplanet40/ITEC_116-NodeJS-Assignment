var express = require("express");
var app = express();
var PORT = 8080;

class AssignmentController {
  static factorial(req, res) {
    var n = parseInt(req.params.n, 10);

    if (isNaN(n) || n < 0) {
      return res
        .status(400)
        .json({
          error: "Invalid input.",
        });
    }

    function factorial(n) {
      if (n === 0) return 1;
      return n * factorial(n - 1);
    }

    res.json({
      "factorial": factorial(n),
    });
  }
}

app.get("/assignments/factorial/:n", AssignmentController.factorial);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
