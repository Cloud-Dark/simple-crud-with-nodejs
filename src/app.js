const express = require("express");
const list_taskRoute = require("./routes/list_task.route");
const pino = require("pino");
const pretty = require("pino-pretty");
var expressPino = require("express-pino-logger");
const { response } = require("../middlewares/response.middleware");
const stream = pretty({
	colorize: true,
});
const api = require("@serverless/cloud");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

const logger = pino({ level: process.env.LOG_LEVEL || "info" }, stream);
var cors = require("cors");
const expressLogger = expressPino({ logger });

const app = express();
// or using CommonJS

Sentry.init({
	dsn: "https://adfbdc578dda4eaea689f953dc319db9@o4504696352145408.ingest.sentry.io/4504696444289024",
	// or pull from params
	//   dsn: params.SENTRY_DSN,
	//   environment: params.INSTANCE_NAME,
	integrations: [
		// enable HTTP calls tracing
		new Sentry.Integrations.Http({ tracing: true }),
		// enable Express.js middleware tracing
		new Tracing.Integrations.Express({ app }),
	],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
	// or pull from params
	// tracesSampleRate: parseFloat(params.SENTRY_TRACES_SAMPLE_RATE),
});

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLogger);
// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.use(cors());
// import model
const database = require("./database");

database
	.sync({ force: false, alter: true })
	.then(() => {
		logger.info("database synced");
	})
	.catch((err) => {
		logger.error("failed to sync database: " + err.message);
		process.exit(1);
	});

app.get("/", (req, res) => {
	logger.debug("Start Application");
	response(res, 200, true, "Aplikasi Simple Rest API Siap Digunakan");
});

// tambahkan list_task route ke dalam aplikasi
app.use("/api/tugas", list_taskRoute);
app.use("/tugas", list_taskRoute);

app.listen(port, () => {
	logger.info("Server running on port %d", port);
});
