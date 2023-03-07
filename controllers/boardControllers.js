const db = require("../database.js");

exports.create = async (req, res) => {
  try {
    const { title, backgroundImageLink } = req.body;
    if (!title && backgroundImageLink) {
      return res.status(400).json({
        success: false,
        message: "Cannot have Title or Background Image as null",
      });
    }
    db.query(
      `INSERT INTO board (title, backgroundImageLink) VALUES (?, ?)`,
      [title, backgroundImageLink],
      (error, result) => {
        if (error) {
          throw error;
        } else {
          //logic
        }
      }
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// exports.addMember = async (req, res) => {
//   try {
//     db.query(`SELECT * FROM user WHERE email = ? AND boards@> ARRAY[?]::varchar()`)
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// };
