'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      },
    },
    lastName: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }
    },
  }, {});
  Owner.associate = function(models) {
    Owner.hasMany(models.PetOwner, {foreignKey: 'ownerId'});
    Owner.belongsToMany(
      models.Pet, {
      through: models.PetOwner,
      foreignKey: 'ownerId',
      otherKey: 'petId'
     });
  };
  return Owner;
};
