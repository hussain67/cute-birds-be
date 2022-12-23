const express = require("express");
const { birds } = require("./data");
const cors = require("cors");
const { PORT = 4000 } = process.env;
const app = express();

app.use(cors());
// Simulate delay on all requests
// app.use(function (req, res, next) {
// 	setTimeout(next, 5000);
// 	//Response will be delayed by 2 sec
// });

app.post("/", async (req, res) => {
	return res.json({ name: "Md Shahid Hussain" });
});

app.get("/birds", async (req, res) => {
	setTimeout(() => {
		return res.json(birds);
	}, 3000);
});

app.listen(PORT, () => {
	console.log("listening");
});
