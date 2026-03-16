import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

interface DishAttributes {
  id: number;
  brandId: number;
  name: string;
  chineseName: string | null;
  description: string | null;
  image: string | null;
  sortOrder: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface DishCreationAttributes extends Optional<DishAttributes, 'id' | 'sortOrder'> {}

class Dish extends Model<DishAttributes, DishCreationAttributes> implements DishAttributes {
  public id!: number;
  public brandId!: number;
  public name!: string;
  public chineseName!: string | null;
  public description!: string | null;
  public image!: string | null;
  public sortOrder!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Dish.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'brand_id',
      references: {
        model: 'brands',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    chineseName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'chinese_name',
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    sortOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'sort_order',
    },
  },
  {
    sequelize,
    tableName: 'dishes',
    underscored: true,
    timestamps: true,
  }
);

export default Dish;
