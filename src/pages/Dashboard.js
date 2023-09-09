import React from 'react'
import './Dashboard.css'

const Dashboard = (props) => {
    const selectedStyle = props.selectedStyle

    return (
        <div className={`dashboard ${selectedStyle}`}>
            <header className={`header dashboard ${selectedStyle}`}>
                <h1>Dashboard de Vendas</h1>
            </header>
            <nav className={`sidebar dashboard ${selectedStyle}`}>
                <ul>
                    <li><a href="#" className="active">Visão Geral</a></li>
                    <li><a href="#">Vendas</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Configurações</a></li>
                </ul>
            </nav>
            <main className={`main-content dashboard ${selectedStyle}`}>
                <section className={`overview dashboard ${selectedStyle}`}>
                    <h2>Visão Geral</h2>
                    <div className={`overview-card dashboard ${selectedStyle}`}>
                        <h3>Total de Vendas</h3>
                        <p>R$ 50,000</p>
                    </div>
                    <div className={`overview-card dashboard ${selectedStyle}`}>
                        <h3>Clientes Ativos</h3>
                        <p>350</p>
                    </div>
                    <div className={`overview-card dashboard ${selectedStyle}`}>
                        <h3>Produtos Vendidos</h3>
                        <p>1200</p>
                    </div>
                </section>
                <section className={`products dashboard ${selectedStyle}`}>
                    <h2>Produtos</h2>
                    <ul className={`product-list dashboard ${selectedStyle}`}>
                        <div className={`product dashboard ${selectedStyle}`}>
                            <h4>Produto 1</h4>
                            <p className="price">Preço: R$ 50,00</p>
                            <p>Disponibilidade: Em estoque</p>
                        </div>
                        <div className={`product dashboard ${selectedStyle}`}>
                            <h4>Produto 2</h4>
                            <p className="price">Preço: R$ 65,00</p>
                            <p>Disponibilidade: Esgotado</p>
                        </div>
                        <div className={`product dashboard ${selectedStyle}`}>
                            <h4>Produto 3</h4>
                            <p className="price">Preço: R$ 10,00</p>
                            <p>Disponibilidade: Esgotado</p>
                        </div>
                    </ul>
                </section>
                <section className={`customers dashboard ${selectedStyle}`}>
                    <h2>Clientes</h2>
                    <ul className={`customer-list dashboard ${selectedStyle}`}>
                        <div className={`customer dashboard ${selectedStyle}`}>
                            <h4>Cliente 1</h4>
                            <p>Email: cliente1@example.com</p>
                            <p>Total de Compras: 5</p>
                        </div>
                        <div className={`customer dashboard ${selectedStyle}`}>
                            <h4>Cliente 2</h4>
                            <p>Email: cliente2@example.com</p>
                            <p>Total de Compras: 8</p>
                        </div>
                        <div className={`customer dashboard ${selectedStyle}`}>
                            <h4>Cliente 2</h4>
                            <p>Email: cliente2@example.com</p>
                            <p>Total de Compras: 8</p>
                        </div>
                        <div className={`customer dashboard ${selectedStyle}`}>
                            <h4>Cliente 2</h4>
                            <p>Email: cliente2@example.com</p>
                            <p>Total de Compras: 8</p>
                        </div>
                    </ul>
                    <br />
                    {/* <ul className={`customer-list dashboard ${selectedStyle}`}>
                        <div className={`customer ${selectedStyle}`}>
                            <h4>Cliente 6</h4>
                            <p>Email: cliente6@example.com</p>
                            <p>Total de Compras: 6</p>
                        </div>
                        <div className={`customer ${selectedStyle}`}>
                            <h4>Cliente 7</h4>
                            <p>Email: cliente7@example.com</p>
                            <p>Total de Compras: 4</p>
                        </div>
                        <div className={`customer ${selectedStyle}`}>
                            <h4>Cliente 8</h4>
                            <p>Email: cliente8@example.com</p>
                            <p>Total de Compras: 9</p>
                        </div>
                        <div className={`customer ${selectedStyle}`}>
                            <h4>Cliente 9</h4>
                            <p>Email: cliente9@example.com</p>
                            <p>Total de Compras: 2</p>
                        </div>
                        <div className={`customer ${selectedStyle}`}>
                            <h4>Cliente 10</h4>
                            <p>Email: cliente10@example.com</p>
                            <p>Total de Compras: 12</p>
                        </div>
                    </ul> */}
                </section>
            </main>
        </div>
    )
}

export default Dashboard