import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-normal">
        <header className="header dashboard-normal">
            <h1>Dashboard de Vendas</h1>
        </header>
        <nav className="sidebar dashboard-normal">
            <ul>
            <li><a href="#" className="active">Visão Geral</a></li>
            <li><a href="#">Vendas</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Clientes</a></li>
            <li><a href="#">Configurações</a></li>
            </ul>
        </nav>
        <main className="main-content dashboard-normal">
            <section className="overview dashboard-normal">
            <h2>Visão Geral</h2>
            <div className="overview-card dashboard-normal">
                <h3>Total de Vendas</h3>
                <p>R$ 50,000</p>
            </div>
            <div className="overview-card dashboard-normal">
                <h3>Clientes Ativos</h3>
                <p>350</p>
            </div>
            <div className="overview-card dashboard-normal">
                <h3>Produtos Vendidos</h3>
                <p>1200</p>
            </div>
            </section>
            <section className="products dashboard-normal">
            <h2>Produtos</h2>
            <ul className="product-list dashboard-normal">
                <div className="product dashboard-normal">
                <h4>Produto 1</h4>
                <p className="price">Preço: R$ 50,00</p>
                <p>Disponibilidade: Em estoque</p>
                </div>
                <div className="product dashboard-normal">
                <h4>Produto 2</h4>
                <p className="price">Preço: R$ 65,00</p>
                <p>Disponibilidade: Esgotado</p>
                </div>
                <div className="product dashboard-normal">
                <h4>Produto 3</h4>
                <p className="price">Preço: R$ 75,00</p>
                <p>Disponibilidade: Em estoque</p>
                </div>
                <div className="product dashboard-normal">
                <h4>Produto 4</h4>
                <p className="price">Preço: R$ 60,00</p>
                <p>Disponibilidade: Em estoque</p>
                </div>
                <div className="product dashboard-normal">
                <h4>Produto 5</h4>
                <p className="price">Preço: R$ 70,00</p>
                <p>Disponibilidade: Esgotado</p>
                </div>
            </ul>
            </section>
            <section className="customers dashboard-normal">
            <h2>Clientes</h2>
            <ul className="customer-list dashboard-normal">
                <div className="customer dashboard-normal">
                <h4>Cliente 1</h4>
                <p>Email: cliente1@example.com</p>
                <p>Total de Compras: 5</p>
                </div>
                <div className="customer dashboard-normal">
                <h4>Cliente 2</h4>
                <p>Email: cliente2@example.com</p>
                <p>Total de Compras: 8</p>
                </div>
                <div className="customer dashboard-normal">
                <h4>Cliente 3</h4>
                <p>Email: cliente3@example.com</p>
                <p>Total de Compras: 3</p>
                </div>
                <div className="customer dashboard-normal">
                <h4>Cliente 4</h4>
                <p>Email: cliente4@example.com</p>
                <p>Total de Compras: 10</p>
                </div>
                <div className="customer dashboard-normal">
                <h4>Cliente 5</h4>
                <p>Email: cliente5@example.com</p>
                <p>Total de Compras: 7</p>
                </div>
            </ul>
            <br/>
            <ul className="customer-list dashboard-normal">
                <div className="customer dashboard-normal">
                <h4>Cliente 6</h4>
                <p>Email: cliente6@example.com</p>
                <p>Total de Compras: 6</p>
                </div>
                <div className="customer dashboard-normal">
                <h4>Cliente 7</h4>
                <p>Email: cliente7@example.com</p>
                <p>Total de Compras: 4</p>
                </div>
                <div className="customer dashboard-normal">
                <h4>Cliente 8</h4>
                <p>Email: cliente8@example.com</p>
                <p>Total de Compras: 9</p>
                </div>
                <div className="customer dashboard-normal">
                <h4>Cliente 9</h4>
                <p>Email: cliente9@example.com</p>
                <p>Total de Compras: 2</p>
                </div>
                <div className="customer dashboard-normal">
                <h4>Cliente 10</h4>
                <p>Email: cliente10@example.com</p>
                <p>Total de Compras: 12</p>
                </div>
            </ul>
            </section>
        </main>
    </div>
  );
};

export default Dashboard;
