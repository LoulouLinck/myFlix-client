import React, { useState } from "react";
import MovieCard from "../movie-card/movie-card";
import MovieView from "../movie-view/movie-view";

const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Revenge",
      description:
        "Revenge (Russian: Месть; romanised: mest; literally: Revenge; aka The Reed Flute) is a Soviet film taking place in a small Korean town in 1915. A group of young children are educated in a barn by a strict instructor, Yan. Losing his patience with the children, he takes his anger out on a young girl, scaring her into a corner of the barn and using a scythe to murder her. After realising his error, Yan goes into hiding. News of the girl's murder reaches her parents and the girl's father, Tsai, vows revenge. Tsai asks a friend to tend to his land while he sets off on a ten-year journey to kill the murderous instructor, who has fled to China. 'Kazakh master Ermek Shinarbaev's close collaboration with the Korean-Russian writer Anatoli Kim yielded three great films, the most remarkable of which is this beautiful, profoundly unsettling film. A true odyssey, geographically and psychologically. One of the greatest films to emerge from the Kazakh New Wave, and one of the toughest.' (Kent Jones, 2010). Director's take on: 'In the beginning of the 40s, hundreds of thousands of Koreans that had lived in the Russian Far East since the XIX century were forcibly displaced overnight according to Stalin's orders. They were regarded as traitors and public enemies. Women, children, old people, were sent away with no explanation. The Korean diaspora, with a population of over a million, has been a forbidden topic for many years. Revenge is the first film telling the story of their tragedy.",
      genre: {
        name: "Drama",
        Description:
          "In film and television, drama is a category or genre of narrative fiction intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre, such as soap opera, police crime drama, political drama, legal drama, historical drama, teen drama, comedy drama. These terms tend to indicate a particular setting or subject-matter, or else they qualify the otherwise serious tone of a drama with elements that encourage a broader range of moods. To these ends, a primary element in a drama is the occurrence of conflict—emotional, social, or otherwise—and its resolution in the course of the storyline.",
      },
      releaseYear: "1989",
      director: {
        name: "Yermek Shinarbayev",
        bio: "Yermek Shinarbayev is a Soviet film director. Born in Alma-Ata, Soviet Union (now Almaty, Kazakhstan), Shinarbaev is sometimes categorised as a member of the Kazakh New Wave. He is especially well known for his collaboration with the Korean-Russian writer, Anatoli Kim, resulting to three films: My Sister Lucy (1985), Out of the Forest, into the Glade (1987), Revenge (1989) his very last film. The later was screened in the Un Certain Regard section at the 1991 Cannes Film Festival and won the grand prize at Sochi Open Russian Film Festival in 1990.",
        birth: "1953",
        death: "-",
      },
      imagepath:
        "https://m.media-amazon.com/images/I/81LLv1Eb3-L._SX600_.jpg",
      featured: false,
    },
    {
      id: 2,  
      title: "Three Sisters",
      description:
        "Three Sisters (Chinese: 三姊妹; pinyin: Sān Zǐmèi, literally: three sisters) is a Chinese documentary film directed by Wang Bing. The film depicts three sisters (aged between four and ten years old) in their day-to-day life in rural China near the Sino-Burmese border. Abandoned by their mother and while their father seeks work in a nearby city, the film captures the bittersweet upbringing of the three sisters, their juvenile arguments and heartwarming mutual care. “An unquestionably eye-opening, deeply human, strikingly lensed look at an impoverished family whose rudimentary living conditions are a sharp riposte to the illusion of China's economic boom.” —Jay Weissberg, Variety.",
      genre: {
        name: "Documentary",
        Description:
          "A documentary film or documentary is a non-fictional motion-picture intended to 'document reality, primarily for the purposes of instruction, education or maintaining a historical record'. Bill Nichols has characterized the documentary in terms of 'a filmmaking practice, a cinematic tradition, and mode of audience reception [that remains] a practice without clear boundaries'. Early documentary films, originally called 'actuality films', lasted one minute or less. Over time, documentaries have evolved to become longer in length, and to include more categories. Some examples are educational, observational and docufiction. Documentaries are very informative, and are often used within schools as a resource to teach various principles. Documentary filmmakers have a responsibility to be truthful to their vision of the world without intentionally misrepresenting a topic.",
      },
      releaseYear: "2012",
      director: {
        name: "Wang Bing",
        bio: "Wang Bing is a Chinese director, often referred to as one of the foremost figures in documentary film-making. Wang is the founder of his own production company, Wang Bing Studios, which produces most of his films. Tie Xi Qu, Wang's 9 hour epic documentary of industrial China, was considered a major success. Tie Xi Qu went on to win the Grand Prix at the Marseille Festival of Documentary Film and was shown for the first time in Spain at the Punto de Vista International Documentary Film Festival. Wang's film Fengming, a Chinese Memoir, premiered at both Cannes and Toronto in 2007. Crude Oil premiered at the 2008 Rotterdam Film Festival. Since then, his films became a staple at every prestigious international film festival. 2017's Mrs. Fang was awarded the Golden Leopard at the 70th Locarno Festival.",
        birth: "1967",
        death: "-",
      },
      imagepath:
        "http://prodimage.images-bn.com/pimages/0854565002067_p0_v1_s1200x630.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "In the Mood for Love",
      description:
        "In the Mood for Love (Chinese: 花樣年華; pinyin: Huāyàng niánhuá; literally: Golden Years) is a romantic drama film written, produced and directed by Wong Kar-wai. A co-production between Hong Kong and France, it portrays a man (Tony Leung) and a woman (Maggie Cheung) whose spouses have an affair together and who slowly develop feelings for each other. It forms the second part of an informal trilogy, alongside Days of Being Wild and 2046. The film premiered at the Cannes Film Festival on 20 May 2000, to critical acclaim and a nomination for the Palme d'Or; Leung won Best Actor (the first Hong Kong actor to win the award). It is often listed as one of the greatest films of all time and one of the major works of Asian cinema. In a 2016 survey by the BBC, it was voted the second greatest film of the 21st century by 177 film critics from around the world, saying “never before has a film spoken so fluently in the universal language of loss and desire”. In 2022, the film placed 5th in Sight & Sound's “Greatest Films of All Time” critics' poll, rising from its previous position of 24th in 2012. It is the highest-ranked film between 1975 and 2022.",
      genre: {
        name: "Drama",
        Description:
          "In film and television, drama is a category or genre of narrative fiction intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre, such as soap opera, police crime drama, political drama, legal drama, historical drama, teen drama, comedy drama. These terms tend to indicate a particular setting or subject-matter, or else they qualify the otherwise serious tone of a drama with elements that encourage a broader range of moods. To these ends, a primary element in a drama is the occurrence of conflict—emotional, social, or otherwise—and its resolution in the course of the storyline.",
      },
      releaseYear: "2000",
      director: {
        name: "Wong Kar Wai",
        bio: "Wong Kar Wai is a Hong Kong film director, screenwriter, and producer. His films are characterised by nonlinear narratives, atmospheric music, and vivid cinematography involving bold, saturated colours. A pivotal figure of Hong Kong cinema, Wong is considered a contemporary auteur, and ranks third on Sight & Sound's 2002 poll of the greatest filmmakers of the previous 25 years. His films frequently appear on best-of lists domestically and internationally. Born in Shanghai, Wong emigrated to British Hong Kong as a child with his family. He began a career as a screenwriter for soap operas before transitioning to directing with his debut, the crime drama As Tears Go By (1988). While As Tears Go By was fairly successful in Hong Kong, Wong moved away from the contemporary trend of crime and action movies to embark on more personal filmmaking styles. Days of Being Wild (1990), his first venture in such a direction, did not perform well at the box office. It however received critical acclaim, and won Best Film and Best Director at the 1991 Hong Kong Film Awards. His next film, Ashes of Time (1994), met with a mixed reception because of its vague plot and atypical take on the wuxia genre. Exhausted by the time-consuming filming and post-production of Ashes of Time, Wong directed Chungking Express (1994), a smaller film that he hoped would rekindle his love of cinema. The film, expressing a more light-hearted atmosphere, catapulted Wong to international prominence, and won Best Film and Best Director at the 1995 Hong Kong Film Awards. Wong followed up with the crime thriller Fallen Angels in 1995. Although it was initially tepidly received by critics, Fallen Angels has since come to be considered a cult classic of the Golden Age of Hong Kong cinema, being especially representative of Wong's style. Wong would go on to consolidate his worldwide reputation with the 1997 drama Happy Together, for which he won Best Director at the Cannes Film Festival. The 2000 drama In the Mood for Love, revered for its lush visuals and subtle storytelling, concretely established Wong's trademark filmmaking styles. Among his other works are 2046 (2004) and The Grandmaster (2013), both of which received awards and nominations worldwide.",
        birth: "1958",
        death: "-",
      },
      imagepath:
        "https://i.pinimg.com/originals/c8/da/23/c8da230b437943e8b8a3d17724618c2c.jpg",
      featured: false,
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);
  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieCard
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        );
      })}
    </div>
  );
};

export default MainView;