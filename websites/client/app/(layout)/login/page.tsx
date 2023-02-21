import google from "../../../public/icons/google.png";
import github from "../../../public/icons/github.png";
import { Button } from "./Button";
import { getServerSession } from "../../../lib/getServerSession";
import { redirect } from "next/navigation";

export default async function Login({
  searchParams,
}: {
  searchParams?: { redirect?: string };
}) {
  const callback = searchParams?.redirect || "/templates";
  const session = await getServerSession();

  if (session?.user) {
    redirect("/templates");
  }
  return (
    <div className="h-full flex justify-center items-center flex-grow">
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold text-3xl">Login to Motionly</p>
        <div className="divider"></div>
        <div className="space-y-2">
          <Button service="Google" src={google} callbackUrl={callback} />
          <Button service="Github" src={github} callbackUrl={callback} />
        </div>
      </div>
    </div>
  );
}