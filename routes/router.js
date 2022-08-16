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
  let date = req.params.date;
  const validDate = (/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/).test(date) || (/^\d*$/).test(date);
  if(!validDate) return res.json({"error" : "Invalid Date"});
  const dateResponse = (date == Number(date).toString()) ? new Date(Number(date)) : new Date(date);
  return res.json({
      "unix": dateResponse.getTime(),
      "utc": dateResponse.toUTCString()
    });
})

module.exports = router;