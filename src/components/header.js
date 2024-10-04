import React, { useState } from "react";
import { Box , Button , Image, Flex , Spacer , isExternal, ChakraProvider, VStack , HStack} from "@chakra-ui/react";
import Logo from "../media/images/logo-dinex-soluciones-industriales-small.png";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

export default function Header() {
    const [show, setShow] = useState(false);
    return (
            <ChakraProvider>
                <div class="desktoplg">
                <Flex bg='rgb(23,25,38)' w='100%' h='10vh' color='white' paddingBottom='0.5%' borderBottomWidth='2px' borderBottomColor='white' transition='height 0.4s' _hover={{height: '14vh'}}>
                    <Box height='100%' margin='0% 0% 0% 1%'>
                        <ChakraLink as={ReactRouterLink} to={'/'}><Image src={Logo} alt="Logo" padding='5%' transition='padding 0.18s' height='100%' _hover={{padding: '2.5%'}}></Image></ChakraLink>
                    </Box>
                    <Spacer /> 
                    <ChakraLink as={ReactRouterLink} to={'/nosotros'} letterSpacing='0.5px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='20px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>NOSOTROS</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to={'/servicios'} letterSpacing='0.5px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='20px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>SERVICIOS</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to={'/suministros'} letterSpacing='0.5px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='20px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>SUMINISTROS INDUSTRIALES</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to={'/contacto'} letterSpacing='0.5px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='20px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>CONTACTO</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to={'https://drive.google.com/file/d/1_cCd4lWZC_5TjJ4u2UUpr2heDshMKl0C/view?usp=sharing'} isExternal letterSpacing='1px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' padding='1%' fontWeight='extrabold' fontSize='24px' margin='0% 1.5% 10vh 0%' height='100%' color='rgb(23,25,38)' background='rgb(255,230,0)' colorScheme='rgb(23,25,38)' borderColor='rgb(254,213,0)' borderTopWidth='2px' borderRadius='10px' borderTopRadius='0%' _hover={{ color: 'rgb(255,230,0)', bg: 'rgb(23,25,38)' , borderColor: 'rgb(23,25,38)' , borderTopWidth: '2px' , borderRadius: '10px' , borderTopRadius: '0%'}}>DESCARGAR CATÁLOGO 2024</ChakraLink>
                </Flex>
                </div> 
                <div class="desktopsm">
                <Flex bg='rgb(23,25,38)' w='100%' h='10vh' color='white' paddingBottom='0.5%' borderBottomWidth='2px' borderBottomColor='white' transition='height 0.4s' _hover={{height: '14vh'}}>
                    <Box height='100%' margin='0% 0% 0% 1%'>
                        <ChakraLink as={ReactRouterLink} to={'/'}><Image src={Logo} alt="Logo" padding='5%' transition='padding 0.18s' height='100%' _hover={{padding: '2.5%'}}></Image></ChakraLink>
                    </Box>
                    <Spacer /> 
                    <ChakraLink as={ReactRouterLink} to={'/nosotros'} letterSpacing='0.5px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='12px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>NOSOTROS</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to={'/servicios'} letterSpacing='0.5px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='12px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>SERVICIOS</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to={'/suministros'} letterSpacing='0.5px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='12px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>SUMINISTROS INDUSTRIALES</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to={'/contacto'} letterSpacing='0.5px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='12px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>CONTACTO</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to={'https://drive.google.com/file/d/1_cCd4lWZC_5TjJ4u2UUpr2heDshMKl0C/view?usp=sharing'} isExternal letterSpacing='1px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' padding='1%' fontWeight='extrabold' fontSize='14px' margin='0% 1.5% 10vh 0%' height='100%' color='rgb(23,25,38)' background='rgb(255,230,0)' colorScheme='rgb(23,25,38)' borderColor='rgb(254,213,0)' borderTopWidth='2px' borderRadius='10px' borderTopRadius='0%' _hover={{ color: 'rgb(255,230,0)', bg: 'rgb(23,25,38)' , borderColor: 'rgb(23,25,38)' , borderTopWidth: '2px' , borderRadius: '10px' , borderTopRadius: '0%'}}>DESCARGAR CATÁLOGO 2024</ChakraLink>
                </Flex>
                </div>
                <div class="laptop">
                <Flex bg='rgb(23,25,38)' w='100%' h='10vh' color='white' paddingBottom='0.5%' borderBottomWidth='2px' borderBottomColor='white' transition='height 0.4s' _hover={{height: '14vh'}}>
                    <Box height='100%' margin='0% 0% 0% 1%'>
                        <ChakraLink as={ReactRouterLink} to={'/'}><Image src={Logo} alt="Logo" padding='5%' transition='padding 0.18s' height='100%' _hover={{padding: '2.5%'}}></Image></ChakraLink>
                    </Box>
                    <Spacer /> 
                    <ChakraLink as={ReactRouterLink} to={'/nosotros'} letterSpacing='0.5px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='12px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>NOSOTROS</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to={'/servicios'} letterSpacing='0.5px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='12px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>SERVICIOS</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to={'/suministros'} letterSpacing='0.5px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='12px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>SUMINISTROS INDUSTRIALES</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to={'/contacto'} letterSpacing='0.5px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='12px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>CONTACTO</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to={'https://drive.google.com/file/d/1_cCd4lWZC_5TjJ4u2UUpr2heDshMKl0C/view?usp=sharing'} isExternal letterSpacing='1px' display='inline-flex' appearance='none' alignItems='center' justifyContent='center' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' padding='1%' fontWeight='extrabold' fontSize='14px' margin='0% 1.5% 10vh 0%' height='100%' color='rgb(23,25,38)' background='rgb(255,230,0)' colorScheme='rgb(23,25,38)' borderColor='rgb(254,213,0)' borderTopWidth='2px' borderRadius='10px' borderTopRadius='0%' _hover={{ color: 'rgb(255,230,0)', bg: 'rgb(23,25,38)' , borderColor: 'rgb(23,25,38)' , borderTopWidth: '2px' , borderRadius: '10px' , borderTopRadius: '0%'}}>DESCARGAR CATÁLOGO 2024</ChakraLink>
                </Flex>
                </div>
                <div class="tablet">
                <Flex bg='rgb(23,25,38)' w='100%' h='10vh' color='white' paddingBottom='0.5%' borderBottomWidth='2px' borderBottomColor='white' transition='height 0.4s' _hover={{height: '14vh'}}>
                    <Box height='100%' margin='0% 0% 0% 1%'>
                        <ChakraLink as={ReactRouterLink} to={'/'}><Image src={Logo} alt="Logo" padding='5%' transition='padding 0.18s' height='100%'></Image></ChakraLink>
                    </Box>
                    <Spacer />
                    <Button onClick={() => setShow((s) => !s)} fontFamily='artegra-600' fontSize='32px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>≡</Button>
                </Flex>
                <VStack bgColor='rgb(23,25,38)' style={{ display: show ? "block" : "none" }}>
                    <VStack color='white' textAlign='left' alignItems='left' justify='left'>
                        <ChakraLink as={ReactRouterLink} to={'/nosotros'} letterSpacing='0.8px' display='inline-flex' appearance='none'  userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='3% 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='14px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3.5px' borderTopColor='rgb(23,25,38)' _hover={{ borderBottomWidth: '0' , color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>NOSOTROS</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to={'/servicios'} letterSpacing='0.8px' display='inline-flex' appearance='none' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='2% 0 0 1%' fontFamily='artegra-600' fontSize='14px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3.5px' borderTopColor='rgb(8,10,23)' _hover={{ borderBottomWidth: '0' , color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>SERVICIOS</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to={'/suministros'} letterSpacing='0.8px' display='inline-flex' appearance='none' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='2% 0 0 1%' fontFamily='artegra-600' fontSize='14px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3.5px' borderTopColor='rgb(8,10,23)' _hover={{ borderBottomWidth: '0' , color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>SUMINISTROS INDUSTRIALES</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to={'/contacto'} letterSpacing='0.8px' display='inline-flex' appearance='none'  userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='2% 0 0 1%' fontFamily='artegra-600' fontSize='14px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3.5px' borderTopColor='rgb(8,10,23)'  _hover={{ borderBottomWidth: '0' , color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>CONTACTO</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to={'https://drive.google.com/file/d/1_cCd4lWZC_5TjJ4u2UUpr2heDshMKl0C/view?usp=sharing'} isExternal letterSpacing='1px' display='inline-flex' appearance='none' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' padding='1%' fontWeight='extrabold' fontSize='14px' margin='0% 1.5% 2.5vh 0%' height='100%' color='rgb(23,25,38)' background='rgb(255,230,0)' colorScheme='rgb(23,25,38)' borderColor='rgb(254,213,0)' borderTopWidth='2px' borderRadius='10px' borderTopRadius='0%' _hover={{ color: 'rgb(255,230,0)', bg: 'rgb(23,25,38)' , borderColor: 'rgb(23,25,38)' , borderTopWidth: '2px' , borderRadius: '10px' , borderTopRadius: '0%'}}>DESCARGAR CATÁLOGO 2024</ChakraLink>
                    </VStack>
                </VStack>
                </div>
                <div class="mobile">
                <Flex bg='rgb(23,25,38)' w='100%' h='10vh' color='white' paddingBottom='0.5%' borderBottomWidth='2px' borderBottomColor='white' transition='height 0.4s' _hover={{height: '14vh'}}>
                    <Box height='100%' margin='0% 0% 0% 1%'>
                        <ChakraLink as={ReactRouterLink} to={'/'}><Image src={Logo} alt="Logo" padding='5%' transition='padding 0.18s' height='100%'></Image></ChakraLink>
                    </Box>
                    <Spacer />
                    <Button onClick={() => setShow((s) => !s)} fontFamily='artegra-600' fontSize='32px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3px' _hover={{ color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>≡</Button>
                </Flex>
                <VStack bgColor='rgb(23,25,38)' style={{ display: show ? "block" : "none" }}>
                    <VStack color='white' textAlign='left' alignItems='left' justify='left'>
                        <ChakraLink as={ReactRouterLink} to={'/nosotros'} letterSpacing='0.8px' display='inline-flex' appearance='none'  userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='3% 1% 0 1%' padding='1%' fontFamily='artegra-600' fontSize='14px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3.5px' borderTopColor='rgb(23,25,38)' _hover={{ borderBottomWidth: '0' , color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>NOSOTROS</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to={'/servicios'} letterSpacing='0.8px' display='inline-flex' appearance='none' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='2% 0 0 1%' fontFamily='artegra-600' fontSize='14px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3.5px' borderTopColor='rgb(8,10,23)' _hover={{ borderBottomWidth: '0' , color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>SERVICIOS</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to={'/suministros'} letterSpacing='0.8px' display='inline-flex' appearance='none' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='2% 0 0 1%' fontFamily='artegra-600' fontSize='14px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3.5px' borderTopColor='rgb(8,10,23)' _hover={{ borderBottomWidth: '0' , color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>SUMINISTROS INDUSTRIALES</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to={'/contacto'} letterSpacing='0.8px' display='inline-flex' appearance='none'  userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' margin='0 1% 0 1%' padding='2% 0 0 1%' fontFamily='artegra-600' fontSize='14px' height='100%' colorScheme='rgb(23,25,38)' borderRadius='0%' borderColor='rgb(23,25,38)' borderTopWidth='3.5px' borderTopColor='rgb(8,10,23)'  _hover={{ borderBottomWidth: '0' , color: 'rgb(255,230,0)' , borderColor: 'rgb(254,213,0)' , borderTopWidth: '3px' , borderRadius: '0%'}}>CONTACTO</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to={'https://drive.google.com/file/d/1_cCd4lWZC_5TjJ4u2UUpr2heDshMKl0C/view?usp=sharing'} isExternal letterSpacing='1px' display='inline-flex' appearance='none' userSelect='none' position='relative' whiteSpace='nowrap' verticalAlign='middle' outline='none' padding='1%' fontWeight='extrabold' fontSize='14px' margin='0% 1.5% 2.5vh 0%' height='100%' color='rgb(23,25,38)' background='rgb(255,230,0)' colorScheme='rgb(23,25,38)' borderColor='rgb(254,213,0)' borderTopWidth='2px' borderRadius='10px' borderTopRadius='0%' _hover={{ color: 'rgb(255,230,0)', bg: 'rgb(23,25,38)' , borderColor: 'rgb(23,25,38)' , borderTopWidth: '2px' , borderRadius: '10px' , borderTopRadius: '0%'}}>DESCARGAR CATÁLOGO 2024</ChakraLink>
                    </VStack>
                </VStack>
                </div>
            </ChakraProvider>
    );
}