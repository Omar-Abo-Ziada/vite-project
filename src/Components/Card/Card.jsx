function Card({ title }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  // hook to perform side effects
  useEffect(() => {
    console.log(`Card "${title}" has been ${hasLiked ? "liked" : "unliked"}.`);
  }, [hasLiked]); // putting the hasliked state in the dependency array so that the effect runs whenever hasLiked changes

  useEffect(() => {
    console.log(`Card "${title}" mounted.`);
  }, []); // empty dependency array means this effect runs only once when the component mounts

  return (
    <>
      <div
        // it 's better to use prevstate when updating state based on previous state
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        <h2>
          {title} - {count}
        </h2>
        <button onClick={() => setHasLiked(!hasLiked)}>
          {hasLiked ? "❤️" : "🤍"} Like
        </button>
      </div>
    </>
  );
}
export default Card;
