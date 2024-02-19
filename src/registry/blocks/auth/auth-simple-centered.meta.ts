import { config } from '@/lib/config';
import { BlockMetadata } from '@/lib/types';

const metadata: BlockMetadata = {
  name: 'auth-simple-centered',
  displayName: 'Auth simple centered',
  description: 'A simple centered authentication block',
  category: config.categories['auth'],
};

export default metadata;
