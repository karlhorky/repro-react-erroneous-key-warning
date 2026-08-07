import { ClientForm } from '../repro/ClientForm';

export default function ControlPage() {
  return (
    <ClientForm
      padding={'x'.repeat(2500)}
      elementsAfterSubmitButton={<div>Prefer a chat?</div>}
    />
  );
}
