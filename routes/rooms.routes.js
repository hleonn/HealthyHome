const router = require("express").Router()
const Room = require('../models/Room.model');

//////////////////////////ROOMS ROUTES////////////////////
router.get("/rooms", async (req, res) => {
    try {
        const rooms = await Room.find({});
        res.render('rooms/index', {
          rooms,
        })
      } catch(e) {
        console.warn(e);
      }
});


router.get("/rooms/show/:roomId", async (req, res) => {
    try {
      const room = await Room.findOne({_id: req.params.roomId});
  
      res.render('rooms/show', {
        room,
      })
    } catch(e) {
      console.warn(e);
    }
});

router.get("/rooms/new", (req, res) => {
    res.render('rooms/new');
});


router.post("/rooms/create", async (req, res) => {
    const newModel = new Room({
        roomName: req.body.room_name,
    });
  
    await newModel.save()
  
    res.redirect('/rooms');
})

module.exports = router