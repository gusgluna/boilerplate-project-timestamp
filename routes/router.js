const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
  const actualDate = new Date();
  res.json({
    "unix": actualDate.getTime(),
    "utc": actualDate.toUTCString() 
  })
})

router.get("/:date", (req, res)=>{
  const date = req.params.date;
  const validatedDate = (date == Number(date).toString()) ? Number(date) : date;
  const validDate = (new Date(validatedDate) != "Invalid Date");
  if(!validDate) return res.json({"error" : "Invalid Date"});
  const dateResponse = new Date(validatedDate);
  return res.json({
      "unix": dateResponse.getTime(),
      "utc": dateResponse.toUTCString()
    });
})

module.exports = router;