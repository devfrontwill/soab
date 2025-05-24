import { useState, useContext } from 'react'
import Head from "next/head";
import Image from "next/image";
import logoImg from '../../../public/images/logo.svg';
import { Flex, Text, Center, Input, Button } from "@chakra-ui/react";
import Link from "next/link";
import { AuthContext } from '../../context/AuthContext';
import { canSSRGuest } from '@/utils/canSSRGuest';


export default function Register() {
    const { signUp } = useContext(AuthContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleRegister() {
        if(name === '' && email === '' && password === ''){
            return;
        }

        await signUp({
            name,
            email,
            password
        })
    }

    return (
        <>
            <Head>
                <title>S.O.A.B | Crie sua conta </title>
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
                        variant="filled"
                        color="button.default"
                        _hover={{ bg: "#1b1b1b" }}
                        size="lg"
                        placeholder="Nome da Barbearia"
                        type="text"
                        mb={3}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        background="barber.400"
                        variant="filled"
                        color="button.default"
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
                        variant="filled"
                        color="button.default"
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
                        onClick={handleRegister}
                    >
                        Cadastrar
                    </Button>

                    <Center mt={2}>
                        <Link href="/login">
                            <Text
                                color="button.default"
                                cursor="pointer">
                                Já possui uma conta? <strong>Entrar</strong>
                            </Text>
                        </Link>
                    </Center>

                </Flex>
            </Flex>
        </>
    )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
    return {
        props: {}
    }
})