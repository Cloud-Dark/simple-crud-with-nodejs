const { response } = require("../middlewares/response.middleware")
exports.createBookValidation = (req, res, next) => {
    const { judul, deskripsi, selesai} = req.body

    
    if (
        judul === undefined || judul == "" ||
        deskripsi === undefined || deskripsi == "" ||
        selesai === undefined || selesai == ""
        ) {
        return  response(res, 400, false, 'Please fill out all required input.');
    }

    next()
}