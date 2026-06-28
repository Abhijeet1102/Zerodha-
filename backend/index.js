require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(session({
  secret: "zerodhaclonesecret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const newUser = new UserModel({ email, username });
    const registeredUser = await UserModel.register(newUser, password);
    res.json({ success: true, message: "User registered successfully!", user: registeredUser });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ success: true, message: "Logged in successfully!", user: req.user });
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.send("Order saved!");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log("App started!");
    mongoose.connect(uri);
    console.log("DB started!");
  });
}

module.exports = app;