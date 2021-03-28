import uuid from 'uuid';

export const uploadImage = (req, res, next) => {
  try {
    if (!req.files) {
      req.status(400).send('missing image');
      return;
    }
    const { myImage } = req.files;
    const dotIndex = myImage.name.lastIndexOf('.');
    const extention = myImage.name.substr(dotIndex);
    const newFileName = uuid.v4() + extention;
    myImage.mv('../employee-images/' + newFileName);
  } catch (error) {
    console.log(error);
    res.status(400).json('oopsi');
  }
};
