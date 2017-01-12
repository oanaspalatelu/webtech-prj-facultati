module.exports = function(sequelize, DataTypes) {
    // define entity
    var univL = sequelize.define('Article', {
     
      nume: {
        type: DataTypes.STRING,
        field: 'nume'
      }
    }, {
      timestamps: false,
      tableName: 'univLs'
      
    });
    
    return univL;
};
