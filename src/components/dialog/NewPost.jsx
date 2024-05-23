import * as Dialog from "@radix-ui/react-dialog";

function NewPost(props) {
  const { isOpen, onOpenChange } = props;
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed bottom-10 left-0 right-0 top-10 m-auto w-full bg-white p-6 md:bottom-auto md:top-1/2 md:w-auto md:max-w-md md:-translate-y-1/2 md:transform">
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>This is a responsive dialog.</Dialog.Description>
          <Dialog.Close className="button">Close</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default NewPost;
