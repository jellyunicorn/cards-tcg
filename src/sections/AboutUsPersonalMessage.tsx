export default function AboutUsPersonalMessage() {
  return (
    <div>
      <div className="flex flex-col bg-white mx-8 md:mx-36 px-8 py-4 mb-4 rounded-md font-pjs">
        <div className="flex justify-center">
          <h1 className="mt-4 text-5xl font-extrabold tracking-wide">
            About Us
          </h1>
        </div>
        <div className="mt-6 text-[18px] text-justify">
          <p>
            CardsTCG is a premium online trading card game vendor providing
            products from a wide variety of trading card games as well as
            curated selections of trading card game accessories. Founded in 2021
            by a group of friends, we pride ourselves with providing exceptional
            service and support with our products. Every product shipped is
            checked and approved for quality by a handful of experts within the
            TCG community, ensuring only the best for our customers.
            <br />
            <br />
            CardsTCG also provides pop-up stores on certain TCG events. During
            our live pop-ups, we only bring the best and most sought aftee
            products from our collection, meticulously maintained to ensure the
            highest quality. In 2024, we hosted our first regional-level tournament
            in San Diego, California. Since then, we have organized over 40 in-person
            events and even more remote events, building connections with hundreds
            of judges and tournament organizers to bring the smoothest tournament
            experiences that players can enjoy.
            <br />
            <br />
            We hope that our love for trading card games bleeds into our products 
            and services, as we would love nothing more than to share our passion
            for trading card games and card game culture.
            <br />
            <br />
            This webpage is inspired by{" "}
            <a
              href="https://www.tcgplayer.com/"
              className="text-blue-600 underline"
            >
              TCGplayer
            </a>{" "}
            and{" "}
            <a
              href="https://www.manamoon.com/"
              className="text-blue-600 underline"
            >
              ManaMoon
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
