let employeesData = require("../data/employees.json");
const { schema } = require("../models/employee.model");
const Ajv = require("ajv");
const ajv = new Ajv();

function validateJson(inputJson) {
  const validate = ajv.compile(schema);
  const valid = validate(inputJson);
  return valid;
}

function create(req, res, next) {
  if (!validateJson(req.body))
    return res.status(400).json({ code: "bad_request" });

  employeesData.push(req.body);
  res.json({ code: "ok" });
}

function list(req, res, next) {
  let resultArray = employeesData;

  if (req.query.user == "true")
    resultArray = resultArray.filter((emp) => emp.privileges == "user");

  if (req.query.badges)
    resultArray = resultArray.filter((emp) =>
      emp.badges.includes(req.query.badges)
    );

  if (req.query.page)
    resultArray = resultArray.slice(
      2 * (req.query.page - 1),
      2 * (req.query.page - 1) + 2
    );

  res.json(resultArray);
}

function get(req, res, next) {
  const result = employeesData.filter((emp) => emp.name == req.params.id)[0];
  if (result) res.json(result);
  else res.status(404).json({ code: "not_found" });
}

function getOldest(req, res, next) {
  res.json(
    employeesData.reduce((prev, cur) => (prev.age > cur.age ? prev : cur))
  );
}

module.exports.create = create;
module.exports.list = list;
module.exports.getOldest = getOldest;
module.exports.get = get;
