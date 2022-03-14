const express = require('express');
const droneModel = require('../models/Drone.model');
const router = express.Router();
const Model = require("../models/Drone.model");
const mongoose = require("mongoose");

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try{
    const allDrones = await Model.find();
    console.log(allDrones)
    res.render("drones/list.hbs", {allDrones});
  }
  catch{
    console.log("Error in finding drones")
  }
 
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");

});

router.post('/drones/create',  async (req, res, next) => {
  // Iteration #3: Add a new drone
  // console.log(req.body);
  const userCreatedDrone = new droneModel({
    name: req.body.droneName,
    propellers: req.body.dronePropellors,
    maxSpeed: req.body.droneSpeed,
  });
  await userCreatedDrone.save();
  res.redirect("/drones");
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone

  try{
  Model.findById(droneId)
 
    const droneId = mongoose.Types.ObjectId(req.params.id);
    console.log(droneId, "<<<<");
    const droneDetails = await Model.findById(droneId)
    console.log(droneDetails, "<<<<");
  
    res.render("drones/update-form.hbs", {droneDetails})
  }
  catch{
    console.log('error from drone updating')
  }

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
