import path from "path";
import formidable from "formidable";
import fs from "fs";

const __dirname = path.resolve();

const fileController = {
  upload: async (req, user) => {
    let oldPath = "";
    let newPath;

    const options = {
      uploadDir: __dirname + "/upload/",
      multiples: true,
      keepExtensions: true,
      allowEmptyFiles: false,
    };

    return new Promise((res) => {
      const form = formidable(options);
      form.parse(req, function (err, fields, files) {
        let tags = fields.tags.split(",");
        oldPath = files.file.path;
        let photoName = oldPath.split("\\");
        photoName = photoName[photoName.length - 1];
        let albumPath = user.rootPath;
        newPath = albumPath + "\\" + photoName;

        if (!fs.existsSync(albumPath)) {
          fs.mkdir(albumPath, (err) => {
            if (err) throw err;
          });
        }

        fs.rename(oldPath, newPath, (err) => {
          if (err) throw err;
        });

        let url = "";
        let urlArray = newPath.split("\\");
        urlArray.splice(0, urlArray.length - 3);
        urlArray.forEach((element) => {
          url += `\\${element}`;
        });

        res({
          tags: tags,
          files: files,
          user: user.email,
          url: url,
        });
      });
    });
  },
  getOne: (photo, res, filter) => {
    let photoPath;
    let photoUrl = photo.url;

    if (filter == undefined) {
      photoPath = __dirname + photoUrl;
    } else {
      photoUrl = photoUrl.split(".");
      photoPath = `${__dirname}${photoUrl[0]}-${filter}.${photoUrl[1]}`;
    }

    fs.readFile(photoPath, (err, data) => {
      res.writeHead(200, { "Content-Type": "image/jpeg;charset=utf-8" });
      res.end(data);
      if (err) throw err;
    });
  },
  getProfilePicture: (path, res) => {
    fs.readFile(path, (err, data) => {
      res.writeHead(200, { "Content-Type": "image/jpeg;charset=utf-8" });
      res.end(data);
      if (err) throw err;
    });
  },
  createUserFolder: (user) => {
    fs.mkdir(`${__dirname}/upload/${user.email}`, function (data, err) {
      if (err) throw err;
    });
  },
  delete: (element) => {
    const photoPath = __dirname + element.url;
    fs.unlink(photoPath, function (err) {
      if (err) throw err;
    });
  },
  updateProfilePicture: async (req, user) => {
    let oldPath = "";
    let newPath;

    const options = {
      uploadDir: "../../server/profilepictures/",
      multiples: true,
      keepExtensions: true,
      allowEmptyFiles: false,
    };

    return new Promise((res) => {
      const form = formidable(options);
      form.parse(req, function (err, fields, files) {
        console.log(files);
        let path = files.file.path;

        res({
          path: path,
          user: user,
        });
      });
    });
  },
};

export { fileController };
