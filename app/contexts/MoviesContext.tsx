import { gql, useQuery } from "@apollo/client";
import { ReactNode, createContext, useEffect, useState } from "react";

type MovieContext = {
  stars: string[];
  isFetching: boolean;
};

export const MovieContext = createContext({} as MovieContext);

export default function MoviesContext({ children }: { children: ReactNode }) {
  const [stars, setStars] = useState<string[]>([] as string[]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const { loading } = useQuery(
    gql`
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
    `,
    {
      onCompleted: (data) => {
        setStars(data?.allFilms?.films?.map((item: any) => item.title));
      },
    }
  );

  useEffect(() => {
    if (loading) setIsFetching(true);
    else setIsFetching(false);
    return () => {}
  }, [loading])

  return (
    <>
      <MovieContext.Provider value={{ stars, isFetching }}>
        {children}
      </MovieContext.Provider>
    </>
  );
}
