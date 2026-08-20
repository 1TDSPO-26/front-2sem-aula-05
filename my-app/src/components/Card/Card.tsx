
type TipoProps = {
    title: string;
  }

export default function Conteudo(props: TipoProps) {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    );
    }