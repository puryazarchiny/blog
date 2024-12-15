const PORT = process.env.PORT || "3000";
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

if (!DATABASE_PASSWORD || !process.env.DATABASE_URI) {
  throw new Error();
}

const DATABASE_URI = process.env.DATABASE_URI.replace(
  "DATABASE_PASSWORD",
  DATABASE_PASSWORD
);

export { PORT, DATABASE_URI };
