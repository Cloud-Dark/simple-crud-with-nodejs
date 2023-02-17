const express = require("express")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({
        message: "Node.js Simple REST API Server"
    })
})

app.listen(port, () => console.log(`Server up and running on port ${port}`))