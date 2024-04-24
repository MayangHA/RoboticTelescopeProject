const { Model } = require('sequelize');
const { TABLE_NAME } = require('../utils/constant');

module.exports = (sequelize, DataTypes) => {
  class Borrowing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Borrowing.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'borrower',
      });
    }
  }

  Borrowing.init(
    {
      borrowingId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: true,
        references: {
          model: TABLE_NAME.USER,
          key: 'userId',
        },
        onDelete: 'SET NULL',
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      occupation: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      nimNip: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      rightAscescion: {
        allowNull: false,
        type: DataTypes.DECIMAL(25, 2),
      },
      declination: {
        allowNull: false,
        type: DataTypes.DECIMAL(25, 2),
      },
      magnitude: {
        allowNull: false,
        type: DataTypes.DECIMAL(25, 2),
      },
      observationObject: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      objectType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      telescopeType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      proposalUrl: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      introductoryUrl: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      borrowingTime: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      priorityPoint: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      tableName: TABLE_NAME.BORROWING,
    }
  );

  return Borrowing;
};
