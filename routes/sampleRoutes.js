module.exports = app => {
  app.get ('/api/sample/getSampleSentence', async (req, res) => {
    res.send ('React');
  });

  app.post ('/api/sample/login', async (req, res) => {
    var body = req.body;
    var result;
    if (body.name === 'test' && body.password === 'test') {
      result = {
        success: true,
      };
    } else {
      result = {
        success: false,
      };
    }

    res.send (result);
  });
};
