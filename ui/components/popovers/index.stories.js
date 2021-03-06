import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import * as BaseLegacyExamples from './base-legacy/example';
import * as BrandExamples from './brand/example';
import * as EinsteinExamples from './einstein/example';
import * as ErrorExamples from './error/example';
import * as FeatureExamples from './feature/example';
import * as NubbinsExamples from './nubbins/example';
import * as PanelsExamples from './panels/example';
import * as PromptsExamples from './prompt/example';
import * as ThemesExamples from './themes/example';
import * as WalkthroughExamples from './walkthrough/example';
import * as WarningExamples from './warning/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  BaseLegacyExamples,
  BrandExamples,
  EinsteinExamples,
  ErrorExamples,
  FeatureExamples,
  NubbinsExamples,
  PanelsExamples,
  PromptsExamples,
  ThemesExamples,
  WalkthroughExamples,
  WarningExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Popovers', module).add(
  'Kitchen Sink',
  () =>
    kitchenSink.map((element, idx) =>
      element.map(({ label, component, demoStyles }) => (
        <StoryFrame
          component={component}
          label={label}
          key={`kitchen-sink-${label}-${idx}`}
          styles={demoStyles || null}
        />
      ))
    ),
  {
    docs: {
      page: () => <DocsPage title="Popovers" Docs={Docs} />
    }
  }
);
