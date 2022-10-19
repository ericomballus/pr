const { createWriteStream } = require("fs");
const multiparty = require("multiparty");

saveVideo = (req, res) => {
  let form = new multiparty.Form();

  form.on("part", (part) => {
    part.pipe(createWriteStream(`./${part.filename}`));
  });
  form.parse(req);
};
