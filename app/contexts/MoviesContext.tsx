import { gql, useQuery } from "@apollo/client";
import { ReactNode, createContext, useState } from "react";

type MovieContext = {
  stars: string[];
};

export const MovieContext = createContext({} as MovieContext);


export default function MoviesContext({ children }: { children: ReactNode }) {
  const [stars, setStars] = useState<string[]>([] as string[]);
  useQuery(gql`
  query Query {
        allFilms {
            films {
              title
              director
              releaseDate
              speciesConnection {
                species {
                  name
                  classification
                  homeworld {
                    name
                  }
                }
              }
            }
          }
        }
      `, {
    onCompleted: (data) => {
      setStars(data?.allFilms?.films?.map((item: any) => item.title))
    }
  });

  return <>
    <MovieContext.Provider value={{ stars }}>{children}</MovieContext.Provider>
  </>
}
