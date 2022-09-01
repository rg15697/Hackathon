import { Button, useToast, Wrap, WrapItem } from "@chakra-ui/react";

export function ToastStatus({ status }) {
  const toast = useToast();
  const statuses = [status];

  return (
    <Wrap>
      {statuses.map((status, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${status} toast`,
                status: status,
                isClosable: true,
              })
            }
          >
            Show {status} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}
