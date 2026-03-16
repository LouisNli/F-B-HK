import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

interface GalleryImageAttributes {
  id: number;
  brandId: number;
  imageUrl: string;
  altText: string | null;
  sortOrder: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface GalleryImageCreationAttributes extends Optional<GalleryImageAttributes, 'id' | 'sortOrder'> {}

class GalleryImage extends Model<GalleryImageAttributes, GalleryImageCreationAttributes> implements GalleryImageAttributes {
  public id!: number;
  public brandId!: number;
  public imageUrl!: string;
  public altText!: string | null;
  public sortOrder!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

GalleryImage.init(
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
    imageUrl: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'image_url',
    },
    altText: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'alt_text',
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
    tableName: 'gallery_images',
    underscored: true,
    timestamps: true,
  }
);

export default GalleryImage;
