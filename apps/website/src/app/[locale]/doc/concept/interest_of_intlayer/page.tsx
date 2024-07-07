import { DocPageLayout } from '@components/DocPage/DocPageLayout';
import { Loader } from '@intlayer/design-system';
import { PageLayout } from '@layouts/PageLayout';
import dynamic from 'next/dynamic';
import type { NextPageIntlayer } from 'next-intlayer';
import { generateMetadata } from './metadata';

export { generateMetadata };

const DynamicDocumentationRender = dynamic(
  () =>
    import('@components/DocPage/DocumentationRender').then(
      (mod) => mod.DocumentationRender
    ),
  {
    loading: () => <Loader />,
  }
);

const Page: NextPageIntlayer = ({ params: { locale } }) => (
  <PageLayout locale={locale} editorEnabled={false}>
    <DocPageLayout activeSections={['concept', 'interest_of_intlayer']}>
      <DynamicDocumentationRender docName="interest_of_intlayer" />
    </DocPageLayout>
  </PageLayout>
);
export default Page;
