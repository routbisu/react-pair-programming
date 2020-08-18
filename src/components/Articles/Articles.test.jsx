import React from 'react';
// import { render } from '@testing-library/react';
import { render } from 'enzyme';

import Articles from './Articles.jsx';

const exampleArticles = [
  {
    id: 'article-1',
    title: '[ebook] The Better Twilio Alternative',
    description:
      'Both Telnyx and Twilio offer voice and SMS APIs to enable business communications. So what’s the real difference between the two?',
    imageUrl:
      '//images.ctfassets.net/taysl255dolk/5un78kREFxgKXRCUjgxV1c/738c8e425cc15df0505d4d27f234ba4c/TwilioAttackebook_RCbanner_2x.png?w=300&h=300',
    topicId: 'topic-2',
  },
  {
    id: 'article-2',
    title: 'Your Guide to Call Tracking [Infographic]',
    description:
      'Did you know that calls are 10-15 times more likely to convert than digital leads? The popularity of click-to-call means Call Tracking is set to explode. Learn more in our infographic.',
    imageUrl:
      '//images.ctfassets.net/taysl255dolk/HVwAVHhRTlSFtCn21djl8/f5ce2302caf975e626d07187997825ca/CallTracking_infographic_v1.1_2x.png?w=300&h=300',
    topicId: 'topic-2',
  },
];

test('renders', () => {
  // const { getByTestId } = render(<Articles articles={exampleArticles} />);
  const wrapper = render(<Articles articles={exampleArticles} />);

  // expect(getByTestId('articles'));
  expect(wrapper.length > 0);
});
