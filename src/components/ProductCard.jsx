
export default function ProductCard(props){
    const {data} = props;
    return (
      <div className="rounded-md border-2 border-black bg-white text-black w-[300px] h-[500px] flex flex-col items-center p-5">
        <img
          className="p-2 rounded-md border-2 border-black w-[250px] aspect-square"
          src={data.image}
        />
        <p>{data.title}</p>
      </div>
    );
}