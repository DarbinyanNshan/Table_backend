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
            res.status(500).json({ messege: 'Error creating table' })
        });
}

exports.GetArmatur = async (req, res) => {
    try {
        Armatur.find()
            .then((result) => {
                res.status(200).json(result)
            })
            .catch(() => {
                res.status(500).json({ message: 'Error finding values' })
            })

    } catch (err) {
        return res.status(404).send('Invalid error')
    }
}

exports.DeleteValues = async (req, res) => {
    Armatur.deleteOne({ _id: req.body.id })
        .then((result) =>
            res.status(200).json({ result })
        )
        .catch(() => {
            res.status(500).json({ message: 'Error Delete values' })
        })
}

exports.EditeValues = async (req, res) => {
        Armatur.findByIdAndUpdate(
            req.body._id,
            {
                 date: req.body.date,
                 f8a1: req.body.f8a1,
                 f8a3: req.body.f8a3,
                 f12: req.body.f12,
                 f14: req.body.f14,
                 f16: req.body.f16,
                 f18: req.body.f18,
                 f20: req.body.f20,
                 f22: req.body.f22,
                 f25: req.body.f25,
                 f28: req.body.f28,
                 f32: req.body.f32
            }, { new: true })
            .then((result) => {
                 res.status(200).json({ result })
            })
            .catch(() => {
                 res.status(500).json({ message: 'Error updating values' })
            })
}