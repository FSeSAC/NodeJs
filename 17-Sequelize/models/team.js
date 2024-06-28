const teamModel =  (sequelize, DataTypes) => {
    const Team = sequelize.define(
        'Team',
        {
            team_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoInreament: true,
            },
            name: {
                type: DataTypes.STRING(63),
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            freezeTableName: true,
        }
    );
    return Team;
}

module.exports = teamModel;

