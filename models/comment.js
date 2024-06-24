module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    postId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  
  Comment.associate = function(models) {
    Comment.belongsTo(models.Post, {
      foreignKey: 'postId',
      as: 'post'
    });
  };
  
  return Comment;
};
