module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  
  Post.associate = function(models) {
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comments'
    });
  };
  
  return Post;
};
