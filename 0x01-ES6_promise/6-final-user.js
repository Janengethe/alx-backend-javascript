import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const usr = await signUpUser(firstName, lastName)
    .then((result) => ({
      status: 'fulfilled',
      value: result,
    }));
  const photo = await uploadPhoto(filename)
    .catch((error) => ({
      status: 'rejected',
      value: error.toString(),
    }));
  return Promise.resolve([usr, photo]);
}
