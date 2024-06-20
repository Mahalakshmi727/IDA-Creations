const creations = require('../model/model');

exports.getting = async (req, res) => {
    try {
        const data = await creations.find();
        res.send({
            message: "Success",
            statuscode: 200,
            data: data
        });
    } catch (error) {
        res.send({ error: "Error", statuscode: 400 });
    }
};

exports.posting = async (req, res) => {
    const { Name, Email, Message } = req.body;
    try {
        let user = await creations.create({ Name, Email, Message });
        console.log(user); // Log user here, within the try block
        res.send({
            message: "Successfully posted",
            statuscode: 200,
            data: user
        });
    } catch (error) {
        console.error("Error posting data:", error);
        res.send({
            message: "Failed",
            statuscode: 500
        });
    }
};

exports.update = async (req, res) => {
    try {
        const { idnumber } = req.params;
        const { Note } = req.body;
        const up = await creations.updateOne({ _id: idnumber }, { $set: { Note: Note } });
        res.send({ message: `Successfully updated ${Note}` });
    } catch (error) {
        res.send({ message: "Not updated" });
        console.log(error);
    }
};

exports.delete = async (req, res) => {
    try {
        const { idnumber } = req.params;
        await creations.deleteOne({ _id: idnumber });
        res.send({ message: "Deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Failed to delete" });
    }
};
