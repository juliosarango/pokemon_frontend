import { Pokemon } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SinglePokemon = ({ pokemon }: { pokemon: Pokemon }) => {
  const { name, sprite, num_abilities, url, main_abilitie, height, weight } = pokemon;
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href={url}
          className="relative block aspect-[37/22] w-full"
        >          
          <Image src={sprite} height={150} width={150}   alt={name}/>
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {name}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            size: {weight} x {height}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">              
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  {main_abilitie}
                </h4>
                <p className="text-xs text-body-color">Main Ability</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                {num_abilities}
              </h4>
              <p className="text-xs text-body-color">Num Abilities</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePokemon;
