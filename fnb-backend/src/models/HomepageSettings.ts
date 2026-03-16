import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

interface HomepageSettingsAttributes {
  id: number;
  heroImage: string | null;
  heroTitle: string | null;
  heroSubtitle: string | null;
  heroButtonText: string | null;
  philosophyTitle: string | null;
  philosophyText: string | null;
  photoGrid1: string | null;
  photoGrid2: string | null;
  photoGrid3: string | null;
  photoGrid4: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface HomepageSettingsCreationAttributes extends Optional<HomepageSettingsAttributes, 'id'> {}

class HomepageSettings extends Model<HomepageSettingsAttributes, HomepageSettingsCreationAttributes> implements HomepageSettingsAttributes {
  public id!: number;
  public heroImage!: string | null;
  public heroTitle!: string | null;
  public heroSubtitle!: string | null;
  public heroButtonText!: string | null;
  public philosophyTitle!: string | null;
  public philosophyText!: string | null;
  public photoGrid1!: string | null;
  public photoGrid2!: string | null;
  public photoGrid3!: string | null;
  public photoGrid4!: string | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

HomepageSettings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    heroImage: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'hero_image',
    },
    heroTitle: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'hero_title',
    },
    heroSubtitle: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'hero_subtitle',
    },
    heroButtonText: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'hero_button_text',
    },
    philosophyTitle: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'philosophy_title',
    },
    philosophyText: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'philosophy_text',
    },
    photoGrid1: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'photo_grid_1',
    },
    photoGrid2: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'photo_grid_2',
    },
    photoGrid3: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'photo_grid_3',
    },
    photoGrid4: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'photo_grid_4',
    },
  },
  {
    sequelize,
    tableName: 'homepage_settings',
    underscored: true,
    timestamps: true,
  }
);

export default HomepageSettings;
