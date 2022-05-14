import { Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { Grid } from '@giphy/react-components'
import { fetchData, gf, GiphyDataType } from '../services/giphy_utils';
import { useEffect } from "react";

const Search = () => {
    let { query } = useParams();
    const fetchGifs = (offset: number) => gf.search(query ?? 'example', {offset, limit: 10})

    useEffect(() => {
      fetchData(GiphyDataType.SEARCH, {limit: 10, offset: 0}).then((val) => console.log(val))

    }, []);

    return (
      <Flex key={query} paddingY="6rem" flexDirection="column" alignItems="center" justifyContent="center" bg="black" gap="2rem">
        <Text color="white" textAlign="center" fontSize="xx-large" fontWeight="bold" width="100%">{query}</Text>
        <Grid on width={1000} columns={4} fetchGifs={fetchGifs} />
      </Flex>
    );
}

export default Search;
