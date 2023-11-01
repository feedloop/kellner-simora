import {
  Box,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { ReactElement, ReactNode } from 'react';
import { BiChevronDown } from 'react-icons/bi';

export type DropdownItemType = {
  label: string | ReactNode;
  url: string;
};

type DropdownType = {
  icon?: ReactElement;
  label: string;
  items: DropdownItemType[];
};

function Dropdown({ label, items, icon = <BiChevronDown /> }: DropdownType) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {push} = useRouter();

  return (
    <Box>
      <Menu isOpen={isOpen}>
        <MenuButton
          onMouseEnter={onOpen}
          fontSize={'sm'}
          _active={{ border: 'none' }}
          as={Button}
          variant={'unstyled'}
          rightIcon={icon}
        >
          {label}
        </MenuButton>
        <MenuList onMouseLeave={onClose}>
          {items.map((item) => (
            <MenuItem
              key={crypto.randomUUID()}
              _hover={{ backgroundColor: 'primary.50', textDecor: 'none' }}
              onClick={()=>push(item.url)}
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