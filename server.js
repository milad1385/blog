const app = require("./app");
require("./configs/db");
require("dotenv").config();

app.listen(process.env.PORT || 4002, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
