import { Button, Container, Flex, Input, Link, Text } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  let navigate = useNavigate();
  let [query, setQuery] = useState('');

  const navigateRoute = () => {
    navigate(`/search/${query == '' ? 'example' : query}`);
  }

  return (
    <header style={{position: 'fixed', zIndex: 10}}>
      <Container bg="black" maxH="5rem" minW="100vw" paddingX="5rem">
        <Flex direction="row" gap="2rem" alignItems="center" justifyContent="center">
          <Text fontSize="5xl" fontWeight="extrabold" color="white" >
            <Link href="/" textDecoration="none" >GIPHY</Link>
          </Text>
          <Flex direction="row" flexGrow="1">
            <Input value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={(e) => {if(e.code.toString() === 'Enter') navigateRoute()}} placeholder="Search GIF's" borderRightRadius="0" color="white" size="lg"></Input>
            <Button onClick={navigateRoute} borderLeftRadius="0" size="lg">
              <SearchIcon aria-label="search button"></SearchIcon>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}

export default Header;
