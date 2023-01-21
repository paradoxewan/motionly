import { SearchBar } from "../../components/SearchBar";
import { Template } from "../../components/Template";
import { Title } from "../../components/Title";
import { prisma } from "../../lib/prisma";

export const revalidate = 1;

export default async function Templates({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  const search = searchParams?.search || "";
  const comp = searchParams?.comp || "";
  const templates = await prisma.template.findMany({
    where: {
      public: true,
      AND: [
        {
          OR: [
            { name: { contains: search } },
            { description: { contains: search } },
          ],
        },
        { comps: { contains: `${comp}` } }, // Todo make more specific
      ],
    },
    orderBy: { createdAt: "desc" },
  });
  return (
    <div>
      <Title text="Find template to use" />
      <SearchBar value={search} comp={comp} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {templates.map((template) => (
          <Template
            key={template.id}
            id={template.id}
            name={template.name}
            description={template.description}
            image={template.preview || undefined}
          />
        ))}
      </div>
    </div>
  );
}