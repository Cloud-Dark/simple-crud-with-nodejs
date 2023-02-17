const List_task = require("../models/list_task.model")

exports.create = async (req, res) => {
    try {
        const { judul, deskripsi, selesai } = req.body

        const list_task = await List_task.create({
            judul,
            deskripsi,
            selesai
        })

        return res.status(201).json({
            status: 201,
            success: true,
            message: "new list_task created",
            data: {
                list_task: list_task,
            },
            error: null
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: error
        })
    }
}

exports.all = async (req, res) => {
    try {
        const list_tasks = await List_task.findAll()
        return res.status(200).json({
            status: 200,
            success: true,
            message: "ok",
            data: {
                list_tasks,
            },
            error: null
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: error
        })
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
            return res.status(404).json({
                status: 404,
                success: false,
                message: "list_task not found",
                data: null,
                error: "list_task Not Found"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "ok",
            data: {
                list_task: list_task,
            },
            error: null
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: error
        })
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
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to update list_task",
                data: null,
                error: "Failed To Update list_task"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "list_task updated",
            data: null,
            error: null
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: error
        })
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
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to delete list_task",
                data: null,
                error: "Failed To Delete list_task"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "list_task deleted",
            data: null,
            error: null
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: error
        })
    }
}