'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    petTypeId: DataTypes.INTEGER,
    age: DataTypes.INTEGER
  }, {});
  Pet.associate = function(models) {
    Pet.belongsTo(models.PetType, {foreignKey: 'petTypeId'})
    Pet.hasMany(models.PetOwner, {foreignKey: 'petId'});
    Pet.belongsToMany(models.Owner, {
      through: models.PetOwner,
      foreignKey: 'petId',
      otherKey: 'ownerId'
    });
  };
  return Pet;
};
