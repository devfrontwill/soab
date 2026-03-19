import Head from "next/head";
import {
    Button,
    Flex,
    Box,
    Heading,
    Text,
    useMediaQuery
} from '@chakra-ui/react';

import { FaCheckCircle } from 'react-icons/fa';
import { FcCancel } from 'react-icons/fc';
import { Sidebar } from "@/components/sidebar";

import { canSSRAuth } from "@/utils/canSSRAuth";
import { setupAPIClient } from "@/services/api";

interface PlanosProps {
    premium: boolean;
}

export default function Planos({ premium }: PlanosProps) {

    const [isMobile] = useMediaQuery('(max-width: 500px)');

    return (
        <>
            <Head>
                <title>S.O.A.B - Sua assinatura Premium</title>
            </Head>

            <Sidebar>

                <Flex w="100%" direction="column" align="flex-start" justify="flex-start" >
                    <Heading color="white" fontSize="3xl" mt={4} mb={4} mr={4} >
                        Planos
                    </Heading>
                </Flex>

                <Flex pb={8} maxW="780px" w="100%" direction="column" align="flex-start" justify="flex-start" >

                    <Flex gap={4} w="100%" flexDirection={isMobile ? "column" : "row"}>

                        <Flex rounded={4} p={2} flex={1} bg="barber.400" flexDirection="column" >

                            <Heading textAlign="center" fontSize="2xl" mt={2} mb={4} color="gray.100">
                                Plano Grátis
                            </Heading>

                            <Flex align="flex-start" justify="flex-start">
                                <FaCheckCircle color="green" size={22} />
                                <Text fontWeight="medium" ml={2} mb={2}>
                                    Registrar cortes.
                                </Text>
                            </Flex>

                            <Flex justify="flex-start">
                                <FaCheckCircle color="green" size={22} />
                                <Text fontWeight="medium" ml={2} mb={2}>
                                    Criar apenas 3 modelos de corte.
                                </Text>
                            </Flex>

                            <Flex justify="flex-start">
                                <FaCheckCircle color="green" size={22} />
                                <Text fontWeight="medium" ml={2} mb={2}>
                                    Editar dados do perfil.
                                </Text>
                            </Flex>

                            <Flex justify="flex-start">
                                <FcCancel size={26} />
                                <Text fontWeight="medium" ml={2} mb={2}>
                                    Editar modelos de corte.
                                </Text>
                            </Flex>

                            <Flex justify="flex-start">
                                <FcCancel size={26} />
                                <Text fontWeight="medium" ml={2} mb={2}>
                                    Receber todas atualizações.
                                </Text>
                            </Flex>

                            <Flex mt={14} justify="center">
                                <Text color="#FFF" fontWeight="bold" fontSize="2xl" ml={4} mb={2} mt={2}>Gratuito</Text>
                            </Flex>

                        </Flex>

                        <Flex rounded={4} p={2} flex={1} bg="barber.400" flexDirection="column" >

                            <Heading textAlign="center" fontSize="2xl" mt={2} mb={4} color="#31fb6a">
                                Premium
                            </Heading>

                            <Flex align="flex-start" justify="flex-start">
                                <FaCheckCircle color="green" size={22} />
                                <Text fontWeight="medium" ml={2} mb={2}>
                                    Registrar cortes ILIMITADOS.
                                </Text>
                            </Flex>

                            <Flex justify="flex-start">
                                <FaCheckCircle color="green" size={22} />
                                <Text fontWeight="medium" ml={2} mb={2}>
                                    Criar modelos de corte ILIMITADOS.
                                </Text>
                            </Flex>

                            <Flex justify="flex-start">
                                <FaCheckCircle color="green" size={22} />
                                <Text fontWeight="medium" ml={2} mb={2}>
                                    Editar dados do perfil.
                                </Text>
                            </Flex>

                            <Flex justify="flex-start">
                                <FaCheckCircle color="green" size={22} />
                                <Text fontWeight="medium" ml={2} mb={2}>
                                    Editar modelos de corte.
                                </Text>
                            </Flex>

                            <Flex justify="flex-start">
                                <FaCheckCircle color="green" size={22} />
                                <Text fontWeight="medium" ml={2} mb={2}>
                                    Receber todas atualizações.
                                </Text>
                            </Flex>
                            <Text color="#31fb6a" fontWeight="bold" fontSize="2xl" ml={4} mb={2} mt={2}>R$9.99</Text>

                            <Button
                                bg={premium ? "transparent" : "button.cta"}
                                m={2}
                                color="white"
                                _hover={{ color: "#FFF" }}
                                onClick={() => { }}
                                disabled={premium}
                            >
                                {premium ? (
                                    "VOCÊ JÁ É PREMIUM"
                                ) : (
                                    "ASSINAR PREMIUM"
                                )}
                            </Button>

                            {premium && (
                                <Button
                                    m={2}
                                    bg="#FFF"
                                    color="#000"
                                    fontWeight="bold"
                                    onClick={ () => {}}
                                >
                                    ALTERAR ASSINATURA
                                </Button>
                            )}

                        </Flex>

                    </Flex>

                </Flex>

            </Sidebar>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    try {

        const apiClient = setupAPIClient(ctx);
        const response = await apiClient.get("/me");

        return {
            props: {
                premium: response?.data?.subscriptions?.status === 'active' ? true : false
            }
        }

    } catch (error) {
        console.log(error);

        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            }
        }
    }

})