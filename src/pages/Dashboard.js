import React from 'react'
import './Dashboard.css'

const Dashboard = (props) => {
    const daltonismo = props.daltonismo
    const idade = props.idade
    const problemaVisao = props.problemaVisao
    const isIdadeValida = idade == 'idade_10_30' || idade == ''

    return (
        <div className={`dashboard ${idade}`}>
            <div className={`dashboard ${problemaVisao}`}>
                <header className={`header dashboard ${daltonismo}`}>
                    <h1>Dashboard de Vendas</h1>
                </header>
                <nav className={`sidebar dashboard ${daltonismo}`}>
                    <ul>
                        <li><a href="#" className="active">Visão Geral</a></li>
                        <li><a href="#">Vendas</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Clientes</a></li>
                        <li><a href="#">Configurações</a></li>
                    </ul>
                </nav>
                <main className='main-content dashboard'>
                    <section className='overview dashboard'>
                        <h2>Visão Geral</h2>
                        <div className='overview-card dashboard'>
                            <h3>Total de Vendas</h3>
                            <p>R$ 50,000</p>
                        </div>
                        <div className='overview-card dashboard'>
                            <h3>Clientes Ativos</h3>
                            <p>350</p>
                        </div>
                        <div className='overview-card dashboard'>
                            <h3>Produtos Vendidos</h3>
                            <p>1200</p>
                        </div>
                    </section>
                    <section className='products dashboard'>
                        <h2>Produtos</h2>
                        <ul className='product-list dashboard'>
                            <div className='product dashboard'>
                                <img className={`image ${isIdadeValida}`} alt="imagem" src={require('./images/produto.png')} />
                                <h3>Produto 1</h3>
                                <p className="price">Preço: R$ 50,00</p>
                                    <p> Descrição do produto 1 </p>
                                <p>Disponibilidade: Em estoque</p>
                            </div>
                            <div className='product dashboard'>
                                <img className={`image ${isIdadeValida}`} alt="imagem" src={require('./images/produto.png')} />
                                <h3>Produto 2</h3>
                                <p className="price">Preço: R$ 65,00</p>
                                <p> Descrição do produto 2 </p>
                                <p>Disponibilidade: Esgotado</p>
                            </div>
                            <div className='product dashboard'>
                                <img className={`image ${isIdadeValida}`} alt="imagem" src={require('./images/produto.png')} />
                                <h3>Produto 3</h3>
                                <p className="price">Preço: R$ 10,00</p>
                                <p> Descrição do produto 2 </p>
                                <p>Disponibilidade: Esgotado</p>
                            </div>
                        </ul>
                    </section>
                    <section className='customers dashboard'>
                        <h2>Clientes</h2>
                        <ul className='customer-list dashboard'>
                            <div className='customer dashboard'>
                                <h4>Cliente 1</h4>
                                <p>Email: cliente1@example.com</p>
                                <p>Total de Compras: 5</p>
                            </div>
                            <div className='customer dashboard'>
                                <h4>Cliente 2</h4>
                                <p>Email: cliente2@example.com</p>
                                <p>Total de Compras: 8</p>
                            </div>
                            <div className='customer dashboard'>
                                <h4>Cliente 3</h4>
                                <p>Email: cliente2@example.com</p>
                                <p>Total de Compras: 8</p>
                            </div>
                            <div className='customer dashboard'>
                                <h4>Cliente 4</h4>
                                <p>Email: cliente2@example.com</p>
                                <p>Total de Compras: 8</p>
                            </div>
                        </ul>
                        <br />
                        { isIdadeValida ? (
                            <ul className='customer-list dashboard'>
                                <div className='customer dashboard'>
                                    <h4>Cliente 5</h4>
                                    <p>Email: cliente6@example.com</p>
                                    <p>Total de Compras: 6</p>
                                </div>
                                <div className='customer dashboard'>
                                    <h4>Cliente 6</h4>
                                    <p>Email: cliente7@example.com</p>
                                    <p>Total de Compras: 4</p>
                                </div>
                            </ul>
                        ) : (
                            ''
                        )}
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Dashboard