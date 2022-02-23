const catelogService = require('../services/catelog');

module.exports = {
    getPhones: async (req, res) => {
        try {
          const response = await catelogService.getPhones();
          res.status(200).json({ success: true, response: response });
        } catch (err) {
          res.status(400).json({ success: false, error: err });
        }
    }
}