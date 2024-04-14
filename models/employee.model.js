const schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "number" },
    phone: {
      type: "object",
      properties: {
        personal: { type: "string" },
        work: { type: "string" },
        ext: { type: "string" },
      },
      required: ["personal", "work", "ext"],
    },
    privileges: { type: "string" },
    favorites: {
      type: "object",
      properties: {
        artist: { type: "string" },
        food: { type: "string" },
      },
      required: ["artist", "food"],
    },
    finished: {
      type: "array",
      items: { type: "number" },
    },
    badges: {
      type: "array",
      items: { type: "string" },
    },
    points: {
      type: "array",
      items: {
        type: "object",
        properties: {
          points: { type: "number" },
          bonus: { type: "number" },
        },
        required: ["points", "bonus"],
      },
    },
  },
  required: [
    "name",
    "age",
    "phone",
    "privileges",
    "favorites",
    "finished",
    "badges",
    "points",
  ],
};

module.exports = schema;
