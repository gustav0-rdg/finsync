interface FinanceProps {
    id: number,
    valor: number,
    nome: string,
    tipo: string,
    local: string,
    data: string,
}

import { finances } from "./financesData.js"

import "../finances/styles.css"

export default function Finances(){
    const compras: FinanceProps[] = finances.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime())
                                    .slice(0, 3);

    return (
        <section className="finances">
            <div className="finances__recentes">
                <h1>Compras recentes</h1>
                {compras.map(c =>(
                    <div className="finances__recentes-card" key={c.id}>
                        <h1>{c.nome}</h1>
                        <p>R${c.valor}</p>
                        <small>{c.tipo}, em {c.local}, </small>
                    </div>
                ))}
            </div>
        </section>
    )
}