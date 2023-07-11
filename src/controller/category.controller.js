import { getConnection } from "../database.js";
export const getCategory = async (req, res) => {
  try {
    const connection = await getConnection();

    const response = await connection.query("SELECT * FROM category");

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const response = await connection.query(
      "SELECT * FROM category WHERE id = ?",
      id
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const addCategory = async (req, res) => {
  try {
    const { title } = req.body;

   
    const category = { title };
    const connection = await getConnection();
    const response = await connection.query(
      "INSERT INTO category SET ?",
      category
    );

    res.status(200).json({ state: response.affectedRows });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

  
    const category = { title };
    const connection = await getConnection();
    const response = await connection.query(
      "UPDATE category SET ? WHERE id = ?",
      [category, id]
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const response = await connection.query(
      "DELETE FROM category WHERE id = ?",
      id
    );
    res.json({ state: response.affectedRows });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
