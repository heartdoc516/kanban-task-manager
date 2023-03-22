import Header from "@/components/Header";

export default function Page({ params }) {
  console.log(params.id);
  return (
    <>
      <div className="p-4 lg:ml-64">
        <div className="text-white">Select one of your boards</div>;
      </div>
    </>
  );
}
