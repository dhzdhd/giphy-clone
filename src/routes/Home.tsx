import { Image, GridItem, Flex, Grid } from "@chakra-ui/react";

import { Gif } from '@giphy/react-components'
import { fetchData, gf, GiphyDataType } from '../services/giphy_utils';
import type { GiphyResponseJson } from '../services/giphy_utils';
import { useEffect, useState } from "react";

const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })
const gifsList = [];
const Home = () => {
  let [gifList, setGifList]: [GiphyResponseJson[], any] = useState([]);

  useEffect(() => {
    fetchData(GiphyDataType.TRENDING, {limit: 10, offset: 0}).then((val) => setGifList(val))
  }, []);

  return (
    <Flex paddingY="6rem" justifyContent="center">
      <Grid templateColumns='repeat(4, 1fr)'>
        {gifList.map(async (element) => {
          const {data}= await gf.gif(element.id)

          return (
            <GridItem>
              <Gif gif={data} width={100} />
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
}

export default Home;
