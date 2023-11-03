const findTheOldest = (array) => {
  return array.reduce((oldest, currentPerson) => {
    const getAge = ({ yearOfBirth, yearOfDeath }) => {
      const currentYear = new Date().getFullYear();
      return yearOfDeath ? yearOfDeath - yearOfBirth : currentYear - yearOfBirth;
    };

    const oldestAge = getAge(oldest);
    const currentAge = getAge(currentPerson);

    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

module.exports = findTheOldest;