const Rental = require('../models/rental.model');

module.exports = {
  async getRentals(req, res) {
    await Rental.find({})
      .then(rentals => {
        if (rentals) {
          res.status(200).json({
            rentals,
            message: 'Rentals fetched successfull.'
          });
        } else {
          res.status(404).json({ message: 'There is no Rentals.' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'Error occurred.' });
      });
  },

  async getRentalById(req, res) {
    const rentalId = req.params.id;
    await Rental.findById(rentalId)
      .then(rental => {
        if (rental) {
          res.status(200).json(rental);
        } else {
          res.status(500).json({ message: 'could not find rental.' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'Error occurred.' });
      });
  }
};
