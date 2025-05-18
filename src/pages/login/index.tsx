import { useContext, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import logoImg from '../../../public/images/logo.svg';
import { Flex, Text, Center, Input, Button } from "@chakra-ui/react";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

export default function Login() {

    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(){
        await signIn({
            email,
            password,
        })
    }

    return (
        <>
            <Head>
                <title>S.O.A.B | Faça login para acessar </title>
            </Head>
            <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center">

                <Flex width={640} direction="column" p={14} rounded={8}>
                    <Center p={4}>
                        <Image
                            src={logoImg}
                            quality={100}
                            width={260}
                            objectFit="fill"
                            alt="Logo System of a barber"
                        />
                    </Center>

                    <Input
                        background="barber.400"
                        color="button.default"
                        variant="filled"
                        _hover={{ bg: "#1b1b1b" }}
                        size="lg"
                        placeholder="seuemail@email.com"
                        type="email"
                        mb={3}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        background="barber.400"
                        color="button.default"
                        variant="filled"
                        _hover={{ bg: "#1b1b1b" }}
                        size="lg"
                        placeholder="**************"
                        type="text"
                        mb={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button background="button.cta"
                        mb={6}
                        color="gray.900"
                        size="lg"
                        _hover={{ bg: "#ffb13e" }}
                        onClick={handleLogin}
                    >
                        Acessar
                    </Button>

                    <Center mt={2}>
                        <Link href="/register">
                            <Text
                                color="button.default"
                                cursor="pointer">
                                Ainda não possui uma conta? <strong>Cadastre-se</strong>
                            </Text>
                        </Link>
                    </Center>

                </Flex>
            </Flex>
        </>
    )
}