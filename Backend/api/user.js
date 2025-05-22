const express = require("express")
const router=express.Router()

router.use(express.json())


const prisma = require("../prisma");


router.post("/", async (req, res, next) => {
    try {
        const {username, password, email, firstName, lastName, phoneNumber, yearGraduated} = req.body;

             const parsedYear = parseInt(yearGraduated, 10);
    if (isNaN(parsedYear)) {
        return res.status(400).json({ message: "yearGraduated must be a valid number." });
    }
        if (!username || !password || !email || !firstName || !lastName || !phoneNumber || !yearGraduated) {
            const error = {
                status: 400,
                message: "You are missing essential information"
            };

            return next(error)
        }

        const user = await prisma.user.create({data: {username, password, email, firstName, lastName, phoneNumber, yearGraduated: parsedYear}})
        res.status(201).json(user)
    } catch (error) {
        next()
    }
})


module.exports = router;