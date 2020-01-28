import { fakerFactory } from '../../../test/test-helpers';
import { fakeUser } from '../../users/test-helpers/faker';
import { Contact } from '../contacts.entity';

const anonContact: Contact = {
  id: -1,
  name: 'anon-name',
  identifier: 'anon-identifier',
  user: fakeUser(),
  handshakePublicKey: Buffer.from('anon-handshake-public-key'),
  handshakePrivateKey: Buffer.from('anon-handshake-private-key'),
  channelmembers: [],
};

export const fakeContact = fakerFactory<Contact>(anonContact);
