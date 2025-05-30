import express, { Request, Response } from "express";

const app = express();
const PORT = 5000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Frontend</title>
  </head>
  <body>
    <h1>Hello from Frontend</h1>
    <p>This page is served by Express in a Docker container.</p>
  </body>
</html>
`;

app.get("/", (_req: Request, res: Response) => {
  console.log("[Frontend] GET /");
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`[Frontend] Server running at http://localhost:${PORT}`);
});
