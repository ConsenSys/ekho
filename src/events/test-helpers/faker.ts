import { fakerFactory } from '../../../test/test-helpers';
import { EkhoEvent } from '../events.entity';

const anonEvent: EkhoEvent = {
  id: -1,
  txHash: '0x123',
  status: 'DERP',
  createdDate: new Date(0),
  channelId: 'ANON_CHANNELID',
  content: 'lalala',
  signature: 'Made in Ireland',
};

export const fakeEvent = fakerFactory<EkhoEvent>(anonEvent);
