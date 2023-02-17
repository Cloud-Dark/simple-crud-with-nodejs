const express = require("express")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// import model
const database = require("./database")

database.sync({ force: true }).then(() => {
    console.info("database synced")
}).catch(err => {
    console.error("failed to sync database: " + err.message)
})

app.get("/", (req, res) => {
    res.json({
        message: "Node.js Simple REST API Server"
    })
})



app.listen(port, () => console.log(`Server up and running on port ${port}`))
