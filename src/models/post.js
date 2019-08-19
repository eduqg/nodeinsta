'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    author: DataTypes.STRING,
    place: DataTypes.STRING,
    description: DataTypes.STRING,
    hashtags: DataTypes.STRING,
    image: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {});
  Post.associate = function (models) {
    // associations can be defined here
  };
  return Post;
};