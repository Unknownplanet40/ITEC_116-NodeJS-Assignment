var expresss = require("express");
var app = expresss();
var PORT = 8080;

class AssignmentController {
  static fibonacci(req, res) {
    var n = parseInt(req.params.n, 10);

    if (isNaN(n) || n < 0) {
      return res.status(400).json({ error: "Invalid Input" });
    }

    var fibonacciSeq = [];
    let a = 0,
      b = 1;

    for (let i = 0; i < n; i++) {
      fibonacciSeq.push(a);
      [a, b] = [b, a + b];
    }

    res.json({ fibonacciSeq });
  }
}

app.get("/assignments/fibonacci/:n", AssignmentController.fibonacci);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
