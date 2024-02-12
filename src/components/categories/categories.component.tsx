interface CategoriesProps {
  imageUrl: string;
  name: string;
}

const Categories = ({ imageUrl, name }: CategoriesProps) => {
  return (
    <section className="mx-auto cursor-pointer">
      <img
        src={imageUrl}
        alt={name}
        className="min-w-20 max-w-20 h-20 object-cover rounded-full"
      />

      <h3 className="text-center">{name}</h3>
    </section>
  );
};

export default Categories;
