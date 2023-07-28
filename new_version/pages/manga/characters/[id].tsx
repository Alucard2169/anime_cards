import Characters from "@/components/Characters";
import { ChangeEvent, FC, useState } from "react";

interface Character {
  character: {
    name: string;
  };
}

interface AnimeCharacterProps {
  characterResult: Character[];
}

const AnimeCharacters: FC<AnimeCharacterProps> = ({ characterResult }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Function to handle search input change
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter characters based on searchQuery
  const filteredCharacters = characterResult.filter((character) =>
    character.character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="pt-20 px-2 sm:px-8 w-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl text-PRIMARY font-bold">
          Total Characters :{" "}
          <span className="bg-PRIMARY_TWO rounded-md p-2">
            {" "}
            {filteredCharacters.length}
          </span>
        </h1>
        <div className="bg-PRIMARY p-1 rounded-full">
          <form>
            <input
              type="text"
              id="searchQuery"
              placeholder="ex. Naruto"
              value={searchQuery}
              onChange={handleSearchChange}
              className="rounded-full bg-MAIN py-2 px-4 border-none outline-none focus:border-MAIN text-PRIMARY placeholder:text-PRIMARY_TWO"
            />
          </form>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-5">
        {filteredCharacters.map((character) => (
          <Characters data={character} key={character.character.name} />
        ))}
      </div>
    </section>
  );
};

export default AnimeCharacters;

export async function getServerSideProps(context: any) {
  const { id } = context.query;

  try {
    // Fetch character data

    const characterResponse = await fetch(
      `https://api.jikan.moe/v4/manga/${id}/characters`
    );
    const characterData = await characterResponse.json();
    const characterResult = characterData.data;
    return {
      props: {
        characterResult,
      },
    };
  } catch (err: any) {
    console.log(err);
  }
}
