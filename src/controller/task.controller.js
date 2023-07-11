import { getConnection } from "../database.js";
export const getTask = async (req, res) => {
  try {
    const connection = await getConnection();

    const response = await connection.query("SELECT * FROM task");

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const response = await connection.query(
      "SELECT * FROM task WHERE id = ?",
      id
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const addTask = async (req, res) => {
  try {
    const { title, description, category, state } = req.body;

   
    const task = { title, description, category: Number(category), state };
    const connection = await getConnection();
    const response = await connection.query("INSERT INTO task SET ?", task);

    res.status(200).json({ state: response.affectedRows });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, state } = req.body;

    
    const task = { title, description, category, state };
    const connection = await getConnection();
    const response = await connection.query("UPDATE task SET ? WHERE id = ?", [
      task,
      id,
    ]);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const response = await connection.query(
      "DELETE FROM task WHERE id = ?",
      id
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
