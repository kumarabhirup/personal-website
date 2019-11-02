/* eslint-disable */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Contact",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://ka-backend-58006a656c.herokuapp.com/ka-back-new/prod`,
  secret: process.env.PRISMA_SECRET
});
exports.prisma = new exports.Prisma();
