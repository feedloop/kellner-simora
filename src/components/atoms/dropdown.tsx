import {
  Box,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuItem,
  MenuList,
  MenuProps,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { ReactElement, ReactNode } from 'react';
import { BiChevronDown } from 'react-icons/bi';

export type DropdownItemType = {
  label: string | ReactNode;
  url: string;
};
export type DropdownOurPrograms = {
  label: string | ReactNode;
  url: string;
};

type DropdownType = {
  icon?: ReactElement;
  label: string;
  items: DropdownItemType[];
};

function Dropdown({
  label,
  items,
  icon = <BiChevronDown />,
  ...props
}: DropdownType & MenuButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { push } = useRouter();

  return (
    <Box>
      <Menu isOpen={isOpen}>
        <MenuButton
          onMouseEnter={onOpen}
          onClick={() => (isOpen ? onClose() : onOpen())}
          fontSize={'sm'}
          _active={{ border: 'none' }}
          as={Button}
          variant={'unstyled'}
          rightIcon={icon}
          {...props}
        >
          {label}
        </MenuButton>
        <MenuList onMouseLeave={onClose}>
          {items.map((item) => (
            <MenuItem
              key={crypto.randomUUID()}
              _hover={{ backgroundColor: 'primary.50', textDecor: 'none' }}
              onClick={() => push(item.url)}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default Dropdown;
