import pg from "pg";
const { Client } = pg;

const client = new Client({
  connectionString: process.env.POSTGRES_CONNECTION_URL,
});

async function connectToDb() {
  try {
    // Use .connect method on the new instance
    await client.connect();
    console.log("Successfully connected to PostgreSQL database");
  } catch (err) {
    console.error("Failed to connect to PostgreSQL database", err);
  }
}

connectToDb();

const getCandidates = async () => {
  try {
    const result = await client.query("SELECT * FROM candidates;");
    const candidatesArray = result.rows;
    return candidatesArray;
  } catch (err) {
    return err;
  }
};

const getCandidatesBySkill = async (skill) => {
  try {
    const result = await client.query(
      "SELECT * FROM candidates WHERE skill = $1",
      [skill]
    );
    const candidate = result.rows;
    return candidate;
  } catch (err) {
    return err;
  }
};

export { getCandidates, getCandidatesBySkill };
