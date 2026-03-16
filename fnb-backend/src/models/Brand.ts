import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

interface BrandAttributes {
  id: number;
  slug: string;
  name: string;
  chineseName: string | null;
  tagline: string | null;
  heroImage: string | null;
  conceptParagraph1: string | null;
  conceptParagraph2: string | null;
  conceptParagraph3: string | null;
  cardImage: string | null;
  cardDescription: string | null;
  address: string | null;
  openingHours: string | null;
  phone: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface BrandCreationAttributes extends Optional<BrandAttributes, 'id'> {}

class Brand extends Model<BrandAttributes, BrandCreationAttributes> implements BrandAttributes {
  public id!: number;
  public slug!: string;
  public name!: string;
  public chineseName!: string | null;
  public tagline!: string | null;
  public heroImage!: string | null;
  public conceptParagraph1!: string | null;
  public conceptParagraph2!: string | null;
  public conceptParagraph3!: string | null;
  public cardImage!: string | null;
  public cardDescription!: string | null;
  public address!: string | null;
  public openingHours!: string | null;
  public phone!: string | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Brand.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    slug: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
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
    tagline: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    heroImage: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'hero_image',
    },
    conceptParagraph1: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'concept_paragraph_1',
    },
    conceptParagraph2: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'concept_paragraph_2',
    },
    conceptParagraph3: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'concept_paragraph_3',
    },
    cardImage: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'card_image',
    },
    cardDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'card_description',
    },
    address: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    openingHours: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'opening_hours',
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'brands',
    underscored: true,
    timestamps: true,
  }
);

export default Brand;
