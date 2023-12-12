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
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { ReactElement, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
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
  label: string | ReactNode;
  items: DropdownItemType[];
};

function Dropdown({
  label,
  items,
  icon,
  ...props
}: DropdownType & MenuButtonProps) {
  const { scrollY } = useScroll();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const color = useTransform(
    scrollY,
    [0, 100],
    [pathname !== '/' ? '#000' : '#fff', '#000']
  );
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
          rightIcon={
            icon || (
              <motion.div style={{ color }}>
                <BiChevronDown />
              </motion.div>
            )
          }
          {...props}
        >
          <motion.a style={{ color }}> {label}</motion.a>
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
