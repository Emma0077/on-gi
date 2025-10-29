import { useState } from 'react';
import FormModal from '../FormModal';
import { Button } from '@/components/ui/button';

export default function FormModalExample() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
      <FormModal 
        open={open} 
        onOpenChange={setOpen}
        onSubmit={async (data) => {
          console.log('Form submitted:', data);
          await new Promise(resolve => setTimeout(resolve, 1000));
        }}
      />
    </div>
  );
}
