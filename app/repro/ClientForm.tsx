'use client';

import type { ReactNode } from 'react';

export function ClientForm(props: {
  padding: string;
  elementsAfterSubmitButton: ReactNode;
}) {
  return (
    <div>
      <button type="button">Send me details</button>
      {props.elementsAfterSubmitButton}
    </div>
  );
}
