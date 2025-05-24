import { ReactNode } from "react";
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    Drawer,
    DrawerContent,
    useColorModeValue,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps
} from '@chakra-ui/react';

import {
    FiScissors,
    FiClipboard,
    FiSettings,
    FiMenu
} from 'react-icons/fi';
import { IconType } from "react-icons";

import Link from "next/link";

interface LinkItemProps {
    name: string;
    icon: IconType;
    route: string;
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Minha Agenda', icon: FiScissors, route: '/dashboard' },
    { name: 'Meus Cortes', icon: FiClipboard, route: '/haircuts' },
    { name: 'Minha Conta', icon: FiSettings, route: '/profile' },
]

export function Sidebar({ children }: { children: ReactNode }) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box minH="100vh" bg="barber.900" >
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />

            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
                onClose={onClose}
            >
                <DrawerContent>
                    <SidebarContent onClose={() => onClose()} />
                </DrawerContent>

            </Drawer>

            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />

            <Box ml={{ base: 0, md: 60 }} p={4}>
                {children}
            </Box>
        </Box>
    )
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bg="barber.400"
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.500', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >

            <Flex h="20" alignItems="center" justifyContent="space-around" mx="8" mt="8">
                <Link href="/dashboard">
                    <Flex cursor="pointer" userSelect="none" flexDirection="column" mb="6">
                        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="button.default">System of </Text>
                        <Text fontSize="3xl" fontFamily="monospace" fontWeight="bold" color="button.cta"> a Barber</Text>
                    </Flex>
                </Link>
                <CloseButton
                    display={{ base: 'flex', md: 'none' }}
                    ml="77"
                    mt="-70"
                    _hover={{
                        bg: 'gray.600'
                    }}
                    onClick={onClose} />
            </Flex>

            {LinkItems.map(link => (
                <NavItem icon={link.icon} route={link.route} key={link.name}>
                    {link.name}
                </NavItem>
            ))}

        </Box>
    )
}

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactNode;
    route: string;
}

const NavItem = ({ icon, children, route, ...rest }: NavItemProps) => {
    return (
        <Link href={route} style={{ textDecoration: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                color="button.default"
                _hover={{
                    bg: 'barber.900',
                    color: 'barber.100'
                }}
                {...rest}
            >

                {icon && (
                    <Icon
                        mr={4}
                        fontSize="16"
                        as={icon}
                        color="button.cta"
                        _groupHover={{
                            color: 'button.default'
                        }}
                    />
                )}
                {children}

            </Flex>
        </Link>
    )
}

interface MobileProps extends FlexProps {
    onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            h="20"
            alignItems="center"
            bg={useColorModeValue('barber.400', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.500', 'gray.700')}
            justifyContent="flex-start"
            {...rest}
        >
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open-menu"
                icon={<FiMenu color="#FFF" />}
                _hover={{
                    bg: 'gray.600',
                }}
            />

            <Flex flexDirection="row">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="button.default" ml={8}>
                    System of
                </Text>
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="button.cta" ml={3}>
                    a Barber
                </Text>
            </Flex>
        </Flex>
    )
}