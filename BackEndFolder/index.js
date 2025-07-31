const express = require("express");
const app = express();
const Port = process.env.PORT || 4000;

// const path = require("path");

const cors = require("cors");

app.use(express.json());
app.use(cors());

 const RefTrackData = [
    {
      reffered_to: "Mahesh Mane",
      requiremnet: "House",
      status: "Pending",
      location: "Baramati",
      date: "18 July 2025",
    },
    {
      reffered_to: "Mahesh Mane",
      requiremnet: "4BHK Furnished Luxuries Flat",
      status: "In Progress",
      location: "Baner, Pune",
      date: "18 July 2025",
    },
        {
      reffered_to: "Ram Mane",
      requiremnet: "4 BHK ",
      status: "Pending",
      location: "Baner, Pune",
      date: "19 July 2025",
    },
    {
      reffered_to: "Mahesh Mane",
      requiremnet: "4BHK Furnished Luxuries Flat",
      status: "Done",
      location: "Baner, Pune",
      date: "18 July 2025",
    },
  ];


    const TrackEData = [
    {
      property_name: "4BHK Furnished Luxuries Flat ",
      price: "₹5.0 Cr",
      referred_to: "John Anderw",
      your_rewards: "₹5,00,000",
      GST_deducted: "-1700",
      amount: "₹4,83,000",
    },
    {
      property_name: "4BHK Furnished Luxuries Flat 2 ",
      price: "₹5.0 Cr",
      referred_to: "John Anderw",
      your_rewards: "₹5,00,000",
      GST_deducted: "-1700",
      amount: "₹4,83,000",
    },
    {
      property_name: "4BHK Furnished Luxuries Flat 3",
      price: "₹5.0 Cr",
      referred_to: "John Anderw",
      your_rewards: "₹5,00,000",
      GST_deducted: "-1700",
      amount: "₹4,83,000",
    },
    {
      property_name: "4BHK Furnished Luxuries Flat 4",
      price: "₹5.0 Cr",
      referred_to: "John Anderw",
      your_rewards: "₹5,00,000",
      GST_deducted: "-1700",
      amount: "₹4,83,000",
    },
  ];


  app.get("/Data",(req,res)=>
  {
    res.status(200).json(RefTrackData,{
      "message":"Data Fetch Successfully"
  })
  })
  app.get("/EData",(req,res)=>
  {
    res.status(200).json(TrackEData,{"message":"Data is Fetched Successfully"})
  })

app.get("/", (req, res) => {
  res.send("Hello Fellas");
});

app.post("/Data", (req, res) => {
  console.log(req.body);
  // console.log("req: ", req.body);
  const { Name, Email, Phone } = req.body;
  console.log("Name: ", Name, " Email: ", Email, " Phone: ", Phone);
  if (Name.trim() === "" || Phone.trim() === "" || Email.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "No Data is Recieved Here",
    });
  }
  return res.status(200).json({
    success: true,
    Data: req.body,
    message: "Data Recieved Successfuly",
  });
});
app.listen(Port, () => console.log(`Listening from the Port ${Port}`));
