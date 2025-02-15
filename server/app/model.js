import path from "path";
const __dirname = path.resolve();

let photos = [];

const addPhoto = (data) => {
  photos.push(data);
};

const deletePhoto = (id) => {
  photos = photos.filter((element) => element.id.toString() != id);
};

const patchPhoto = (data) => {
  let photo = photos.find((element) => element.id == data.id);
  const index = photos.findIndex((element) => {
    element.id == data.id;
  });
  photo.history.push({
    status: data.status,
    timestamp: data.timestamp,
  });
  photos[index] = photo;
};

const addTagToPhoto = (data) => {
  let photo = photos.find((element) => element.id == data.id);
  const index = photos.findIndex((element) => {
    element.id == data.id;
  });
  if (data.name == undefined) {
    data.tags.forEach((element) => {
      photo.tags.push(element);
    });
  } else {
    photo.tags.push({
      name: data.name,
    });
  }
  photos[index] = photo;
};

let tags = [
  "#love",
  "#instagood",
  "#fashion",
  "#instagram",
  "#photooftheday",
  "#art",
  "#photography",
  "#beautiful",
  "#nature",
  "#picoftheday",
  "#travel",
  "#happy",
  "#cute",
  "#instadaily",
  "#style",
  "#tbt",
  "#repost",
  "#followme",
  "#summer",
  "#reels",
  "#like4like",
  "#beauty",
  "#fitness",
  "#food",
];

const convertTags = (tags) => {
  let convertedTags = [];
  for (let i = 0; i < tags.length; i++) {
    convertedTags.push({
      id: i,
      name: tags[i],
      popularity: (Math.random() * 100).toFixed(0),
    });
  }
  return convertedTags;
};

let convertedTags = convertTags(tags);

const addTag = (tag) => {
  if (!tags.find((tagg) => tagg == tag)) {
    convertedTags.push({
      id: tags.length,
      name: tag,
    });
    tags.push(tag);
  }
};

let users = [];

const addUser = (data, password) => {
  users.push({
    id: (Math.random() * 1000).toFixed(0),
    name: data.name,
    lastname: data.lastname,
    email: data.email,
    confirmed: false,
    password: password,
    rootPath: path.join(__dirname, "upload", data.email),
    bio: "Ten użytkownik jest superowy, ponieważ korzysta z moje aplikacji",
    profilepicture: path.join(__dirname, "profilepictures", "default.jpg"),
  });
};

export {
  photos,
  addPhoto,
  deletePhoto,
  patchPhoto,
  addTagToPhoto,
  tags,
  convertedTags,
  addTag,
  users,
  addUser,
};
