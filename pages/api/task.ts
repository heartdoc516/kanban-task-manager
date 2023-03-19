export default async function updateTaskHandler(req, res) {
  if (req.method === "PUT") {
    res.status(200);
    const data = req.body;
    console.log(data);
    res.json({ data: data });
  }
}
