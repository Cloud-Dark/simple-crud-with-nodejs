exports.createBookValidation = (req, res, next) => {
    const { judul, deskripsi, selesai} = req.body

    if (judul === undefined || judul == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "judul field is required"
        })
    }

    if (deskripsi === undefined || deskripsi == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "deskripsi field is required"
        })
    }

    if (selesai === undefined || selesai == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "selesai field is required"
        })
    }
    next()
}