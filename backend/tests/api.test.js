const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../index");

// Mocking mongoose connect and model methods to avoid actual DB calls during tests
jest.mock("mongoose", () => {
  const actualMongoose = jest.requireActual("mongoose");
  return {
    ...actualMongoose,
    connect: jest.fn(),
  };
});

jest.mock("../model/HoldingsModel", () => {
  return {
    HoldingsModel: {
      find: jest.fn().mockResolvedValue([{ name: "TCS", qty: 2 }]),
    },
  };
});

describe("Backend API Tests", () => {
  test("GET /allHoldings should return holdings data", async () => {
    const res = await request(app).get("/allHoldings");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ name: "TCS", qty: 2 }]);
  });

  test("GET /allPositions should return empty or mocked positions array", async () => {
    const { PositionsModel } = require("../model/PositionsModel");
    PositionsModel.find = jest.fn().mockResolvedValue([]);

    const res = await request(app).get("/allPositions");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });
});
