const faunadb = require('faunadb')

const secret = process.env.FAUNADB_SECRET
const q = faunadb.query
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
  try {
    const saveEmail = await client.query(
        q.Create(
            q.Collection('emails'),
            { data: {
              email: req.body.email,
              name: req.body.name
            }},
        )
    )
    res.status(200).json({result: 'sucesss'});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
