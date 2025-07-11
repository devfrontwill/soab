import Head from "next/head";
import { Sidebar } from '../../../components/sidebar';
import Link from "next/link";

import { Flex, Text, Heading, Button, useMediaQuery, Input } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi"

export default function NewHaircut() {
    const [isMobile] = useMediaQuery("(max-width: 500px)");

    return (
        <>
            <Head>
                <title>S.O.A.B | Novo Modelo de Corte</title>
            </Head>

            <Sidebar>
                <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">
                    <Flex direction={isMobile ? "column" : "row"}
                        w="100%"
                        align={isMobile ? "flex-start" : "center"}
                        mb={isMobile ? 4 : 0}
                    >

                        <Link href="/haircuts">
                            <Button
                                p={4}
                                display="flex"
                                alignItems="center"
                                justifyItems="center"
                                mr={4}
                                color="#FFF"
                                bg="barber.400"
                            >
                                <FiChevronLeft size={24} color="#FFF" />
                                Voltar
                            </Button>
                        </Link>
                        <Heading
                            color="orange.900"
                            mt={4}
                            mb={4}
                            mr={4}
                            fontSize={isMobile ? "28px" : "3xl"}
                        >
                            Modelos de corte
                        </Heading>
                    </Flex>

                    <Flex
                        maxW="700px"
                        bg="barber.400"
                        w="100%"
                        align="center"
                        justify="center"
                        pt={8}
                        pb={8}
                        direction="column"
                    >
                        <Heading fontSize={isMobile ? "22px" : "3xl"} color="white" mb={4} >
                            Cadastrar modelo
                        </Heading>

                        <Input
                            placeholder="nome do corte"
                            size="lg"
                            type="text"
                            w="85%"
                            bg="gray.900"
                            mb={3}
                        />
                        <Input
                            placeholder="Valor do corte ex: 59.90"
                            size="lg"
                            type="text"
                            w="85%"
                            bg="gray.900"
                            mb={4}
                        />
                        <Button
                            w="85%"
                            size="lg"
                            color="gray.900"
                            mb={6}
                            bg="button.cta"
                            _hover={{ bg: "#ffb13e" }}
                        >
                            Cadastrar
                        </Button>
                    </Flex>
                </Flex>
            </Sidebar>

        </>
    )
}