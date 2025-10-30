import { truncate } from 'lodash-es';
import { Box, Button, Input } from '@chakra-ui/react';
import { useCallback, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

function FileInput({
  name,
  value,
  onFileChange,
  onRemove,
  disabled,
  required = true,
}) {
  const ref = useRef();

  const onClick = useCallback(() => {
    ref.current.click();
  }, []);

  const onDownload = useCallback(() => {
    const blob = new Blob([value], { type: value.type });
    const fileURL = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = fileURL;
    downloadLink.download = value.name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }, []);

  return (
    <Box>
      <Input
        onChange={onFileChange}
        name={name}
        accept={'application/pdf,application/doc,application/docx'}
        isRequired={value ? false : required}
        required={value ? false : required}
        type="file"
        ref={ref}
        hidden
      />
      {value ? (
        <Box
          px={3}
          py={2}
          borderRadius={'md'}
          border="1px"
          borderColor="gray.200"
          w={'100%'}
          position={'relative'}
          onClick={onDownload}
          cursor={'pointer'}
        >
          {truncate(value.name, { length: 27 })}
          <Button
            variant={'ghost'}
            onClick={onRemove(name)}
            position={'absolute'}
            disabled={disabled}
            right={0}
            top={0}
            p={1}
          >
            <IoClose />
          </Button>
        </Box>
      ) : (
        <Button w={'100%'} onClick={onClick} disabled={disabled}
          variant="solid"            // optional (solid / outline / ghost / link)
          bg="#f5cc00"            // ✅ or use custom hex instead
          _hover={{ bg: "#b89b09ff" }}
        >
          Upload
        </Button>
      )}
    </Box>
  );
}

export default FileInput;
