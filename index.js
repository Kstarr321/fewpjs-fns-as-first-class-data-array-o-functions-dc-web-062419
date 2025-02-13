// console.log("Wake Byron the poodle");
// console.log("Leash Byron the poodle");
// console.log("Walk to the park with Byron the poodle");
// console.log("Throw the frisbee for Byron the poodle");
// console.log("Walk home with Byron the poodle");
// console.log("Unleash Byron the poodle");

function wakeDog(dogName, dogBreed) {
    let str = `Wake ${dogName} the ${dogBreed}`;
    console.log(str)
    return str
  }

function leashDog(dogName, dogBreed) {
    let str = (`Leash ${dogName} the ${dogBreed}`);
    console.log(str)
    return str
  }

function walkToPark(dogName, dogBreed) {
    let str = (`Walk to the park with ${dogName} the ${dogBreed}`);
    console.log(str)
    return str
  }

function throwFrisbee(dogName, dogBreed) {
    let str = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
    console.log(str)
    return str
  }

function walkHome(dogName, dogBreed) {
    let str = (`Walk home with ${dogName} the ${dogBreed}`);
    console.log(str)
    return str
  }

function unleashDog(dogName, dogBreed) {
    let str = (`Unleash ${dogName} the ${dogBreed}`);
    console.log(str)
    return str
  }

  const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

  function exerciseDog(dog, breed) {
    return routine.map(fn => fn(dog, breed))
  }