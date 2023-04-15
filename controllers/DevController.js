module.exports = {

    async index(req, res) {

        //return all students
    },

    async findOne(req, res) {

    },
    
    async update(req, res) {

    },

    async destroy(req, res) {

        const { github_username } = req.body;
        await Dev.findOneAndDelete({ github_username });

        return resp.status(200).send({
            message: "The dev was deleted successfully"
        })
    }
}