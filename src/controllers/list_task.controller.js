const List_task = require("../models/list_task.model")
const { response } = require("../middlewares/response.middleware");

exports.create = async (req, res) => {
    try {
        const { judul, deskripsi, selesai } = req.body

        const list_task = await List_task.create({
            judul,
            deskripsi,
            selesai
        })


        return  response(res, 200, false, 'Penambahan Data Berhasil');
    } catch (error) {
        return  response(res, 500, false, 'Ambil Data Gagal', error);
    }
}

exports.all = async (req, res) => {
    try {
        const list_tasks = await List_task.findAll()
        return  response(res, 200, true, 'Berhasil Ambil Data', list_tasks);
    } catch (error) {
        console.error(error)
        return  response(res, 500, true, 'Ambil Data Gagal', error);
    }
}

exports.find = async (req, res) => {
    try {
        const { id } = req.params
        const list_task = await List_task.findOne({
            where: {
                id: id
            },
        })

        if (!list_task) {
            return  response(res, 404, false, 'Id Tidak Di temukan');
        }

        return  response(res, 200, true, 'ok', list_task);
    } catch (error) {
        console.error(error)
        return  response(res, 500, false, 'Ambil Data Gagal', error);
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params

        const updated = await List_task.update(req.body, {
            where: {
                id: id,
            }
        })

        if (!updated[0]) {
            return  response(res, 200, false, 'Gagal Memperbarui data');
        }

        return  response(res, 200, false, 'Pembaruan Data Berhasil');

    } catch (error) {
        return  response(res, 500, false, 'Ambil Data Gagal', error);
    }
}

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params

        const destroyed = await List_task.destroy({
            where: {
                id: id,
            }
        })

        if (!destroyed) {
            return  response(res, 404, false, 'Hapus Data Gagal');
        }

        return  response(res, 200, false, 'Data Berhasil di hapus');

    } catch (error) {
        return  response(res, 500, false, 'Hapus Data Gagal', error);
    }
}