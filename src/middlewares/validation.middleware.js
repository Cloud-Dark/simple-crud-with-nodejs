exports.createBookValidation = (req, res, next) => {
    const { judul, deskripsi, selesai} = req.body

    
    if (
        judul === undefined || judul == "" ||
        deskripsi === undefined || deskripsi == "" ||
        selesai === undefined || selesai == ""
        ) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "Please fill out all required input."
        })
    }

    next()
}