import { signin } from '../services/firebase/auth';

describe('Authentication', () => {
  it('SignIn Correctly', async () => {
    const email = 'niltoncesarjr1@gmail.com';
    const password = 'comida05';
    const user = await signin(email, password);
    expect(user);
  });
});
