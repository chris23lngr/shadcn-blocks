import { BlockCategoryHeader } from '@/components/block-category-header';
import { BlockPreview } from '@/components/block-preview';

export default async function BlockCategoryPage() {
  return (
    <main>
      <BlockCategoryHeader />
      <section className="my-12 space-y-24">
        <div className="container">
          <BlockPreview
            name="auth-simple-centered"
            label="Auth simple centered"
          />
        </div>
      </section>
    </main>
  );
}
