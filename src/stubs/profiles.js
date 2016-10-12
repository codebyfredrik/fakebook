import Faker from 'faker';
import range from 'lodash.range';
import padStart from 'lodash.padstart';
import sampleSize from 'lodash.samplesize';

const josh = {
  id: '0001',
  userName: 'joshwcomeau',
  firstName: 'Joshua',
  lastName: 'Comeau',
  intro: "Creator of Fakebook, serial pseudoentrepreneur. Couldn't decide if this ought to be called 'Fakebook' or 'Fauxbook'.",
  work: [
    {
      role: 'Software Engineer',
      company: 'Unsplash',
      isCurrent: true,
    }, {
      role: 'Software Engineer',
      company: 'Breather',
      isCurrent: false,
    },
  ],
  education: [
    {
      school: 'Vanier College',
      level: 'college',
    }, {
      school: 'M.I.N.D',
      level: 'high',
    },
  ],
  currentCity: 'Montreal',
  homeCity: 'Montreal',
  profilePhoto: 'http://placekitten.com/168/168',
  coverPhoto: Faker.image.abstract(),
};


const createWorkHistory = (numOfJobs = Math.floor(Math.random() * 3)) => {
  return range(numOfJobs).map(i => ({
    role: Faker.name.jobType,
    company: Faker.company.companyName,
    isCurrent: i === 0,
  }));
}

const createEducationHistory = (numOfSchools = Math.floor(Math.random() * 2)) => {
  return range(numOfSchools).map(() => ({
    school: Faker.company.companyName,
    level: sampleSize(['elementary', 'high', 'college', 'university']),
  }));
}

const randomlyGeneratedUsers = {};
range(5).forEach(i => {
  // Start from '0002', since '0001' is hardcoded as 'joshwcomeau' above,
  // and we want to be 1-indexed instead of 0-indexed.
  const userNum = i + 1 + 1;

  const id = padStart(userNum, 4, '0');

  randomlyGeneratedUsers[id] = {
    id,
    userName: Faker.internet.userName(),
    firstName: Faker.name.firstName(),
    lastName: Faker.name.lastName(),
    intro: Faker.company.bs(),
    work: createWorkHistory(),
    education: createEducationHistory(),
    currentCity: Faker.address.city(),
    homeCity: Faker.address.city(),
    profilePhoto: Faker.image.avatar(),
    coverPhoto: Math.random() > 0.5 ? Faker.image.abstract() : null,
  };
})

export default {
  [josh.id]: josh,
  ...randomlyGeneratedUsers
};