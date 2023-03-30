import express from "express";
import cors from "cors";

const App = express();
App.use(cors());

const PORT = process.env.PORT;

App.listen(PORT, () => {
    console.log("I'm Listening");
  });

  export default App;