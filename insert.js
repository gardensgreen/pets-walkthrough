const { Pet, Owner, sequelize} = require('./models/index');

async function insertNewPetUsingBuild(){
    const fido = Pet.build ({
        name: 'Fido',
        age: 4,
        petTypeId: 3
    });
    await fido.save();

    const zaphox = Owner.build({
        firstName: "Zaphox",
        lastName: "Beeblebrox"
    });

    await zaphox.save();

    await zaphox.addPet(fido);

    sequelize.close();
}

insertNewPetUsingBuild();
