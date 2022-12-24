import Carousel from './Carousel'

export default function Home() {
  return (
    <main className="">
      <div className="text-center m-auto">
        <h1>
          <span>Art</span>ificial
        </h1>
        <p>A collection of AI art</p>
      </div>

      <Carousel />

    </main>
  );
}
