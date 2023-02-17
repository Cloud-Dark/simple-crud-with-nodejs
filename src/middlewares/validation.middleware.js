const { response } = require("../middlewares/response.middleware");

function checkBool(bool) {
    if (bool != null) {
        return (
            typeof bool === "boolean" ||
            (typeof bool === "object" &&
                bool !== null &&
                typeof bool.valueOf() === "boolean")
        );
    }

}

exports.createBookValidation = (req, res, next) => {

	const { judul, selesai } = req.body;

	if (judul === undefined || judul == "") {
		return response(res, 400, false, "Judul Wajib Di isi");
	}
	if (checkBool(selesai) == false) {
		return response(res, 501, false, "selesai boleh menampung nilai true dan false");
	}

	next();
};
