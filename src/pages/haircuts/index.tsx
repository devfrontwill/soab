import Head from "next/head";
import { Sidebar } from "@/components/sidebar";
import { Flex, Text, Heading, Button, Stack, Switch, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { IoMdPricetag } from "react-icons/io";

export default function Haircuts() {

    const [isMobile] = useMediaQuery("(max-width: 500px)");

    return (
        <>
            <Head>
                <title>Modelos de corte - S.O.A.B</title>
            </Head>
            <Sidebar>
                <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">

                    <Flex
                        direction={isMobile ? "column" : "row"}
                        w="100%"
                        alignItems={isMobile ? "flex-start" : "center"}
                        justifyContent="flex-start"
                        mb={0}
                    >
                        <Heading
                            fontSize={isMobile ? "26px" : "3xl"}
                            mt={4}
                            mb={4}
                            mr={4}
                            color="orange.900"
                        >
                            Modelos de corte
                        </Heading>

                        <Link href="haircuts/new">
                            <Button>
                                Cadastrar Novo Corte
                            </Button>
                        </Link>

                        <Stack ml="auto" align="center" direction="row">
                            <Text fontWeight="bold">ATIVOS</Text>
                            <Switch
                                colorScheme="green"
                                size="lg"
                            />
                        </Stack>
                    </Flex>

                    <Link href="/haircuts/123">
                        <Flex
                            cursor="pointer"
                            w="79vw"
                            mt={ isMobile ? "2rem" : "1rem" }
                            p={4}
                            bg="barber.400"
                            direction="row"
                            rounded="4"
                            mb={2}
                            justifyContent="space-between"
                        >

                            <Flex direction="row" alignItems="center" justifyContent="center" >
                                <IoMdPricetag size={28} color="#fba931" />
                                <Text fontWeight="bold" ml={4} noOfLines={2} color="white">
                                    Corte completo
                                </Text>
                            </Flex>

                            <Text fontWeight="bold" color="white">
                                Preço: R$ 59.90
                            </Text>

                        </Flex>
                    </Link>

                </Flex>
            </Sidebar>
        </>
    )
}