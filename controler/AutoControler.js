const Armatur = require('../modals/armatur')
exports.ArmaturAdd = (req, res) => {
    const data = req.body;
    const armaturValue = {
        ...data,
    }
    const armatur = new Armatur(armaturValue);
    armatur.save()
        .then((result) => {
            console.log(result);
            res.status(201).json(result)
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ messege: 'Error creating user' })
        });
}

exports.GetArmatur = async (req, res) => {
    try {
        Armatur.find()
            .then((posts) => {
                res.status(200).json( posts )
            })
            .catch(() => {
                res.status(500).json({ message: 'Error finding post' })
            })

    } catch (err) {
        return res.status(404).send('Invalid Token')
    }
}

