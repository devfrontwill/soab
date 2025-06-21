import Head from "next/head";
import { Sidebar } from "@/components/sidebar";
import { Flex, Text, Heading, Button, Stack, Switch, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";

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
                        direction={ isMobile ? "column" : "row" }
                        w="100%"
                        alignItems={ isMobile ? "flex-start" : "center" }
                        justifyContent="flex-start"
                        mb={0}
                    >
                        <Heading
                            fontSize="3xl"
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
                </Flex>
            </Sidebar>
        </>
    )
}