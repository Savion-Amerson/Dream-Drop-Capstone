/* eslint-disable prettier/prettier */
const { Router } = require("express");
const dream = require("../models/Dream");

const router = Router();

// Create record in MongoDB
router.post("/dreams", (request, response) => {
  const newDream = new dream.model(request.body);
  newDream.save((err, dream) => {
    return err ? response.sendStatus(500).json(err) : response.json(dream);
  });
});

// Get all dream records
router.get("/dreams", (request, response) => {
  dream.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Get a dream by ID
router.get("/dreams/:id", (request, response) => {
  dream.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Delete a dream by ID
router.delete("/dreams/:id", (request, response) => {
  dream.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// // Update a pizza by ID
// router.put('/pizzas/:id', (request, response) => {
//   const body = request.body;
//   pizza.model.findByIdAndUpdate(
//     request.params.id,
//     { $set: {
//       "crust": body.crust,
//       "cheese": body.cheese,
//       "sauce": body.sauce,
//       "toppings": body.toppings
//     } },
//     (error, data) => {
//       if (error) return response.sendStatus(500).json(error);
//       return response.json(request.body);
//     }
//   );
// });

module.exports = router;
