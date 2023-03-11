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
exports.getAll = async (req, res) => {
  try {
    db.query(`select * from board`, (error, result) => {
      if (error) {
        throw error;
        // res.status(500).json({
        //   success: false,
        //   message: error.message,
        // });
      } else {
        return res.status(200).send(result);
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.getById = async (req, res) => {
  try {
    const { id } = req.param;
    db.query(`select * from board where id = ?`, [id], (error, result) => {
      if (error) {
        throw error;
      } else {
        if (result.length === 0) {
          // If no matching row found
          return res.status(404).json({
            success: false,
            message: `Board with id ${id} not found`,
          });
        } else {
          // If a matching row found
          return res.status(200).send(result);
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.getActivityById = async (req, res) => {
  try {
    const { id } = req.param;
    db.query(
      `select activity from board where id= ?`,
      [id],
      (error, result) => {
        if (error) {
          throw error;
        } else {
          return res.status(200).send(result);
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
