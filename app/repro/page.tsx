import { ClientForm } from './ClientForm';

export default function MinimalPage() {
  return (
    <ClientForm
      padding={'x'.repeat(4000)}
      elementsAfterSubmitButton={<div>Prefer a chat?</div>}
    />
  );
}
