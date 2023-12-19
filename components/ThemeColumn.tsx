import { ThemeProps } from "@/types/animeIntefaces";
import { FC } from "react";

interface ThemeColumnProps {
    theme: ThemeProps
}

const ThemeColumn:FC<ThemeColumnProps> = ({ theme }) => {
    return (
      <section className="my-10 flex flex-col  gap-3">
        <h2 className="text-2xl text-TEXT_PRIMARY font-bold">Themes</h2>
        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 gap-y-5">
          <div>
            <h3 className="text-xl text-TEXT_PRIMARY font-semibold">Opening</h3>
            <ul className="flex mt-5 flex-col gap-2">
              {theme.openings.map((theme, i) => (
                <li
                  className={`text-${
                    i % 2 !== 0 ? "TEXT_NEUTRAL" : "purple-500"
                  }`}
                  key={i}
                >
                  {theme}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-TEXT_PRIMARY font-semibold">Ending</h3>
            <ul className="flex mt-5 flex-col gap-2">
              {theme.endings.map((theme, i) => (
                <li
                  className={`text-${
                    i % 2 === 0 ? "TEXT_NEUTRAL" : "purple-500"
                  }`}
                  key={i}
                >
                  {theme}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
}
 
export default ThemeColumn;