var express = require('express');
const {ObjectId} = require("mongodb");
const { v4: uuidv4 } = require('uuid');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Endpoint to generate JSON with MongoDB ObjectId, using data from the frontend
router.post('/generate-json', (req, res) => {
  const { rootPath, targetFieldId, ruleId, fieldId } = req.body;

  console.log(rootPath, targetFieldId, ruleId, fieldId);

  // Simulate JSON response with MongoDB ObjectId
  const generatedJson = {
    _id: new ObjectId(),
    targetField: {
      rootId: targetFieldId,
      id: uuidv4(), // Use targetFieldId sent from frontend
      _id: new ObjectId()
    },
    transformations: [
      {
        order: 1,
        parameters: { value: "" },
        ruleId: ruleId || "6627a9efc6b44ae2c1737fba", // Use ruleId sent from frontend
        version: "1"
      }
    ],
    order: 20000,
    workspaceId: "6554734342dcff15f568121b",
    isDeleted: false,
    sourceFields: [
      {
        rootPath: rootPath || "crm-1.crm-2.crm-3", // Use rootPath sent from frontend
        rootId: fieldId || new ObjectId(), // Use fieldId sent from frontend
        id: uuidv4(), // Use targetFieldId sent from frontend
        _id: new ObjectId()
      }
    ],
    __v: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  res.json(generatedJson); // Send JSON response
});
module.exports = router;
