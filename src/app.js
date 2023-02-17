const express = require("express");
const list_taskRoute = require("./routes/list_task.route");
const pino = require("pino");
const expressPino = require("express-pino-logger");

const logger = pino({ level: process.env.LOG_LEVEL || "info" });
var cors = require('cors');
const expressLogger = expressPino({ logger });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLogger);


app.use(cors());
// import model
const database = require("./database");

database
	.sync({ force: false, alter: true })
	.then(() => {
		console.info("database synced");
	})
	.catch((err) => {
		console.error("failed to sync database: " + err.message);
		process.exit(1);
	});

app.get("/", (req, res) => {
	logger.debug("Calling res.send");
	res.json({
		message: "Node.js Simple REST API Server",
	});
});

// tambahkan list_task route ke dalam aplikasi
app.use("/api/list_tasks", list_taskRoute);

app.listen(port, () => {
	logger.info("Server running on port %d", port);
});
