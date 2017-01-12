module.exports = function(sequelize, DataTypes) {
    // define entity
    var mail = sequelize.define('Mail', {
     
      nume: {
        type: DataTypes.STRING,
        field: 'nume'
      },
      email: {
        type: DataTypes.STRING,
        field: 'email'
      },
      tema: {
        type: DataTypes.STRING,
        field: 'tema'
      },
      comment: {
        type: DataTypes.STRING,
        field: 'comment'
      }
    }, {
      timestamps: false,
      tableName: 'mails'
      
    });
    
    return mail;
};
