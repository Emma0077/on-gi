import CTAFormSection from '../CTAFormSection';

export default function CTAFormSectionExample() {
  return (
    <CTAFormSection 
      onSubmit={async (data) => {
        console.log('Form submitted:', data);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }} 
    />
  );
}
