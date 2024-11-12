'use client';
// chakra imports
import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NavLink from '@/components/link/NavLink';
import avatar4 from '/public/img/avatars/avatar4.png';
import { NextAvatar } from '@/components/image/Avatar';
import APIModal from '@/components/apiModal';
import Brand from '@/components/sidebar/components/Brand';
import Links from '@/components/sidebar/components/Links';
import { RoundedChart } from '@/components/icons/Icons';
import { PropsWithChildren } from 'react';
import { IRoute } from '@/types/navigation';
import { IoMdPerson } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { LuHistory } from 'react-icons/lu';
import { MdOutlineManageAccounts, MdOutlineSettings } from 'react-icons/md';
import Image from 'next/image';
import Logo from '../components/assets/Logo.jpg';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { handleTranslate } from '../../../../app/api/api';
// FUNCTIONS

interface SidebarContent extends PropsWithChildren {
  routes: IRoute[];
  [x: string]: any;
}





function SidebarContent(props: SidebarContent) {
  const { routes, setApiKey } = props;
  const textColor = useColorModeValue('navy.700', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  const bgColor = useColorModeValue('white', 'navy.700');
  const shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '14px 17px 40px 4px rgba(12, 44, 55, 0.18)',
  );
  const iconColor = useColorModeValue('navy.700', 'white');
  const shadowPillBar = useColorModeValue(
    '4px 17px 40px 4px rgba(112, 144, 176, 0.08)',
    'none',
  );
  const gray = useColorModeValue('gray.500', 'white');
  
  // SIDEBAR



  return (
    <Box>

      <a href="https://apps.projetodesenvolve.online/authn/login">
        <Image src={Logo} alt="Logo" style={{ maxWidth: "200px", margin: 25 }} />
      </a>

      <Flex align="center" marginTop={10}  >
        <Icon
          as={IoMdPerson}
          width="24px"
          height="24px"
          color={'black'}
          me="12px"
          opacity={'0.9 '}
        />

        <a href='https://apps.projetodesenvolve.online/learner-dashboard/'>
          <Text
            color={'black'}
            fontWeight="500"
            fontSize="sm"
            opacity={'0.9'}

          >
            Página Inicial
          </Text>
        </a>
      </Flex>

      <Flex align="center" w="100%" marginTop={5} >
        <Icon
          as={MdOutlineManageAccounts}
          width="24px"
          height="24px"
          color={'black'}
          me="12px"
          opacity={'0.9 '}
        />

        <a href='https://apps.projetodesenvolve.online/account/'>
          <Text
            color={'black'}
            fontWeight="500"
            fontSize="sm"
            opacity={'0.9'}
          >
            Configurar Perfil
          </Text>
        </a>

      </Flex>
      <Flex>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginTop={5} width={'20vw'} fontSize="sm">
            Scratch
          </MenuButton>
          <MenuList>
            <MenuItem>
              <a href='https://apps.projetodesenvolve.online/learning/course/course-v1:ProjetoDesenvolve+Scratch1+01/home'>Ir para o curso</a>
            </MenuItem>
            <MenuItem onClick={async () => {
              const inputCode = 'Apresentação curso';
              const setOutputCode = (output: string) => console.log(output);
              const setLoading = (loading: boolean) => console.log('Loading:', loading);
              await handleTranslate(inputCode, setOutputCode, setLoading);
            }}>
              Apresentação curso
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginTop={0} width={'20vw'} fontSize="sm">
            No Code
          </MenuButton>
          <MenuList>
            <MenuItem><a href='https://apps.projetodesenvolve.online/learning/course/course-v1:ProjetoDesenvolve+NoCode1+01/home'>Ir para o curso</a></MenuItem>
            <MenuItem>Apresentação curso</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginTop={0} width={'20vw'} fontSize="sm">
            Linux
          </MenuButton>
          <MenuList>
            <MenuItem><a href='https://apps.projetodesenvolve.online/learning/course/course-v1:ProjetoDesenvolve+Linux1+01/home'>Ir para o curso</a></MenuItem>
            <MenuItem>Apresentação curso</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginTop={0} width={'20vw'} fontSize="sm">
            Introdução a Web
          </MenuButton>
          <MenuList>
            <MenuItem><a href='https://apps.projetodesenvolve.online/learning/course/course-v1:ProjetoDesenvolve+IntroWeb+01/home'>Ir para o curso</a></MenuItem>
            <MenuItem>Apresentação curso</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginTop={0} width={'20vw'} fontSize="sm">
            POO
          </MenuButton>
          <MenuList>
            <MenuItem><a href='https://apps.projetodesenvolve.online/learning/course/course-v1:ProjetoDesenvolve+POO1+01/home'>Ir para o curso</a></MenuItem>
            <MenuItem>Apresentação curso</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginTop={0} width={'20vw'} fontSize="sm">
            JavaScript
          </MenuButton>
          <MenuList>
            <MenuItem><a href='https://apps.projetodesenvolve.online/learning/course/course-v1:ProjetoDesenvolve+JS1+01/home'>Ir para o curso</a></MenuItem>
            <MenuItem>Apresentação curso</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginTop={0} width={'20vw'} fontSize="sm">
            Banco de Dados
          </MenuButton>
          <MenuList>
            <MenuItem><a href='https://apps.projetodesenvolve.online/learning/course/course-v1:ProjetoDesenvolve+BD1+01/home'>Ir para o curso</a></MenuItem>
            <MenuItem>Apresentação curso</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginTop={0} width={'20vw'} fontSize="sm">
            Python I
          </MenuButton>
          <MenuList>
            <MenuItem><a href='https://apps.projetodesenvolve.online/learning/course/course-v1:Projeto_Desenvolve+PY001+2024_S2/home'>Ir para o curso</a></MenuItem>
            <MenuItem>Apresentação curso</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginTop={0} width={'20vw'} fontSize="sm">
            Python II
          </MenuButton>
          <MenuList>
            <MenuItem><a href='https://apps.projetodesenvolve.online/learning/course/course-v1:ProjetoDesenvolve+Python2+2024/home'>Ir para o curso</a></MenuItem>
            <MenuItem>Apresentação curso</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );

}

export default SidebarContent;
