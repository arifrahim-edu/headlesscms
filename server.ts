import app from "./app";
import logger from "./shared/utils/logger";
import { ENV_CONFIG } from './config/environment';
import { AppDataSource } from "./config/data-source";

const PORT = process.env.PORT || 3000;
// app.listen(port,()=>{
//     logger.info(`${ENV_CONFIG.APP_NAME} is successfully initiated on port: ${port}`);
// });

// Initialize TypeORM Data Source
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on http://10.10.10.37:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });