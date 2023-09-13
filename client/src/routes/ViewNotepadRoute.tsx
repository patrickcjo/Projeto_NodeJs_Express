import { useEffect, useState } from "react";
import toast from "react-simple-toasts";
import { Helmet } from "react-helmet";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { LinkButton } from "../components/LinkButton";
import { Breadcrumbs } from "../components/Breadcrumbs";

const initialNotepad = {
  id: 0,
  title: "",
  subtitle: "",
  content: "",
  created_at: "",
};

export function ViewNotepadRoute() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notepad, setNotepad] = useState(initialNotepad);

  async function loadNotepad() {
    try {
      const response = await api.get(`/notepads/${id}`);
      const nextNotepad = response.data;
      setNotepad(nextNotepad);
    } catch (error) {
      navigate("/pg-error-route");
    }
  }

  async function deleteNotepad() {
    const response = await api.delete(`/notepads/${id}`);
    if (response.data.id === false) {
      toast("Houve um erro ao deletar o notepad");
    } else {
      toast(`O notepad #${notepad.id} foi deletado com sucesso!`);
      navigate("/");
    }
  }

  useEffect(() => {
    loadNotepad();
  }, [id]);

  return (
    <Card>
      <Helmet>
        <title>{notepad.title}</title>
      </Helmet>
      <Breadcrumbs
        links={[
          { href: "/", label: "Home" },
          {
            href: `/ver-notepad/${id}`,
            label: `Ver notepad #${id}`,
          },
        ]}
      />
      <div className="flex gap-2 float-right">
        <Button
          className="bg-red-900 hover:bg-red-700 font-ubuntu"
          onClick={deleteNotepad}>
          Deletar
        </Button>
        <LinkButton
          className="bg-yellow-400 hover:bg-yellow-500"
          to={`/editar-notepad/${id}`}>
          Editar
        </LinkButton>
      </div>
      <div className="text-gray-500 mb-2">#{notepad.id}</div>
      <div className="text-gray-500">
        {new Date(notepad.created_at).toLocaleDateString()}
      </div>
      <Title>{notepad.title}</Title>
      <p className="mb-4 text-gray-500 font-comforter">{notepad.subtitle}</p>
      <p>{notepad.content}</p>
    </Card>
  );
}
