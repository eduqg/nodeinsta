'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    author: DataTypes.STRING,
    place: Sequelize.STRING,
    description: Sequelize.STRING,
    hashtags: Sequelize.STRING,
    image: Sequelize.STRING,
    likes: Sequelize.INTEGER
  }, {});
  Post.associate = function (models) {
    // associations can be defined here
  };
  return Post;
};