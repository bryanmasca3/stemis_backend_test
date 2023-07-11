import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT || 9000;
const main = () => {
  app.listen(PORT, () => {
    console.log(`Server connected in `, PORT);
  });
};
main();
