import { ImgError } from "../components/ImgError";

export function PgErrorRoute() {
  return (
    <div className="flex justify-center items-center">
      <ImgError
        src={"/src/assets/NotFound.jpg"}
        alt={"Erro pagina nao encontrada"}
        className={"w-1/4 h-1/4 my-12 rounded-2xl shadow-2xl"}
      />
    </div>
  );
}
